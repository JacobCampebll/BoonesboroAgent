// =============================================================================
// Boonesboro Lab Agent (BT3) — combined agentic loop, single Netlify function
// -----------------------------------------------------------------------------
// One agent, five retrieval tools. The function runs a tool-use loop:
// call Claude with tool definitions -> execute requested retrievals server-side
// -> append results -> call again -> repeat until final answer.
// Streams SSE events to the frontend (text deltas, tool activity, errors).
//
// Env vars:
//   ANTHROPIC_API_KEY   (required for the Claude provider)
//   ANTHROPIC_MODEL     (optional, default "claude-sonnet-4-5")
//   XAI_API_KEY         (required for the Grok provider)
//   XAI_MODEL           (optional, default "grok-4")
//   DATAVERSE_API_URL   (optional — leave unset until IT delivers the endpoint)
//   DATAVERSE_API_KEY   (optional — see queryDataverse() drop-in section)
//   DATAVERSE_AUTH_HEADER (optional, default "Authorization")
//   DATAVERSE_AUTH_SCHEME (optional, e.g. "Bearer"; omit for raw key)
// =============================================================================

import baileyKb from "./data/bailey_kb.mjs";
import specData from "./data/spec.mjs";
import proposals from "./data/proposals.mjs";
import jmfData from "./data/jmf_records.mjs";
import linkData from "./data/contract_links.mjs";

const API_URL = "https://api.anthropic.com/v1/messages";
const MODEL = () => process.env.ANTHROPIC_MODEL || "claude-sonnet-4-5";
const XAI_API_URL = "https://api.x.ai/v1/chat/completions";
const XAI_MODEL = () => process.env.XAI_MODEL || "grok-4";
const MAX_ROUNDS = 10;          // hard cap; doctrine says typical runs are 1-8
const MAX_TOKENS = 4096;
const TOOL_RESULT_CHAR_CAP = 14000; // per tool result, keeps context sane

// =============================================================================
// BM25
// =============================================================================

function tokenize(s) {
  if (!s) return [];
  return String(s).toLowerCase().match(/[a-z0-9]+(?:\.[0-9]+)*|#[0-9]+/g) || [];
}

class BM25 {
  constructor(k1 = 1.5, b = 0.75) {
    this.k1 = k1; this.b = b;
    this.docs = [];      // arbitrary payloads
    this.lens = [];
    this.postings = new Map(); // term -> Map(docIdx -> tf)
    this.totalLen = 0;
  }
  add(payload, text) {
    const idx = this.docs.length;
    this.docs.push(payload);
    const toks = tokenize(text);
    this.lens.push(toks.length);
    this.totalLen += toks.length;
    for (const t of toks) {
      let m = this.postings.get(t);
      if (!m) { m = new Map(); this.postings.set(t, m); }
      m.set(idx, (m.get(idx) || 0) + 1);
    }
  }
  search(query, topK = 6, boost = null) {
    const N = this.docs.length;
    if (!N) return [];
    const avg = this.totalLen / N || 1;
    const scores = new Map();
    for (const t of new Set(tokenize(query))) {
      const m = this.postings.get(t);
      if (!m) continue;
      const idf = Math.log(1 + (N - m.size + 0.5) / (m.size + 0.5));
      for (const [idx, tf] of m) {
        const s = idf * (tf * (this.k1 + 1)) /
          (tf + this.k1 * (1 - this.b + this.b * this.lens[idx] / avg));
        scores.set(idx, (scores.get(idx) || 0) + s);
      }
    }
    let arr = [...scores.entries()].map(([idx, score]) => ({
      doc: this.docs[idx],
      score: boost ? score * boost(this.docs[idx]) : score,
    }));
    arr.sort((a, b) => b.score - a.score);
    return arr.slice(0, topK);
  }
}

// =============================================================================
// Corpus indexes (built once per cold start)
// =============================================================================

function flattenText(v, skip = new Set()) {
  const parts = [];
  const walk = (x) => {
    if (x == null) return;
    if (typeof x === "string" || typeof x === "number") parts.push(String(x));
    else if (Array.isArray(x)) x.forEach(walk);
    else if (typeof x === "object")
      for (const [k, val] of Object.entries(x)) if (!skip.has(k)) walk(val);
  };
  walk(v);
  return parts.join(" ");
}

let _idx = null;
function indexes() {
  if (_idx) return _idx;

  // --- Bailey KB (385 records) ---
  const bailey = new BM25();
  const baileySkip = new Set(["id", "related_ids", "chunk", "source", "verified"]);
  for (const r of baileyKb.records) bailey.add(r, flattenText(r, baileySkip));

  // --- KYTC Standard Specs + Kentucky Methods ---
  const spec = new BM25();
  for (const c of specData.chunks) spec.add(c, c.text + " " + c.label);

  // --- Contracts: jobs + bid items + passages + JMF links, one index ---
  const contracts = new BM25();
  for (const j of proposals.jobs)
    contracts.add({ kind: "job", ...j }, flattenText(j, new Set(["source_file", "pages"])));
  for (const b of proposals.bid_items)
    contracts.add({ kind: "bid_item", ...b },
      `${b.contract_id} ${b.line} ${b.bid_code} ${b.description} ${b.section} ${b.unit}`);
  for (const p of proposals.passages)
    contracts.add({ kind: "passage", ...p }, p.text);
  for (const l of linkData.links)
    contracts.add({ kind: "jmf_link", ...l }, flattenText(l, new Set(["verified"])));

  // Per-contract passage sub-lookup for CID mode
  const passagesByCid = new Map();
  for (const p of proposals.passages)
    for (const cid of p.contract_ids || []) {
      if (!passagesByCid.has(cid)) passagesByCid.set(cid, []);
      passagesByCid.get(cid).push(p);
    }

  const knownCids = new Set([
    ...proposals.jobs.map((j) => j.contract_id),
    ...linkData.links.map((l) => l.contract_id),
  ]);

  _idx = { bailey, spec, contracts, passagesByCid, knownCids };
  return _idx;
}

const trunc = (s, n) => (s && s.length > n ? s.slice(0, n) + " …[truncated]" : s);

// =============================================================================
// Tool executors
// =============================================================================

function searchBailey({ query, top_k = 6 }) {
  const hits = indexes().bailey.search(query, Math.min(top_k, 12));
  if (!hits.length) return { results: [], note: "No Bailey KB records matched. Try different terms." };
  return {
    results: hits.map(({ doc: r, score }) => ({
      id: r.id,
      type: r.type,
      day: r.day,
      slide: r.slide_number,
      title: r.slide_title || r.title || null,
      verified: r.verified === true,
      score: +score.toFixed(2),
      content: trunc(flattenText(r, new Set(["id", "related_ids", "chunk", "source", "verified", "tags"])), 1500),
      tags: r.tags,
    })),
    citation_note: "Cite as [<id>]. If verified=false, cite as [<id> ⚠ unverified].",
  };
}

function searchSpec({ query, top_k = 6, source = "both" }) {
  const boost = source === "both" ? null
    : (d) => (d.tag === source ? 1 : 0.001);
  const hits = indexes().spec.search(query, Math.min(top_k, 12), boost);
  if (!hits.length) return { results: [], note: "No spec/KM chunks matched." };
  return {
    results: hits.map(({ doc: c, score }) => ({
      source: c.label,
      tag: c.tag, // SPEC = 2026 KYTC Standard Specifications, KM = Kentucky Methods
      page: c.page,
      score: +score.toFixed(2),
      text: trunc(c.text, 2400),
    })),
    citation_note: "Cite as [SPEC p.<page>] or [KM p.<page>].",
  };
}

function searchContracts({ query_or_cid, top_k = 8 }) {
  const idx = indexes();
  const q = String(query_or_cid || "").trim();
  const cid = (q.match(/\b\d{6}\b/g) || []).find((c) => idx.knownCids.has(c));

  if (cid) {
    // ---- CID dossier mode ----
    const subQuery = q.replace(cid, " ").trim();
    const job = proposals.jobs.find((j) => j.contract_id === cid) || null;
    const items = proposals.bid_items.filter((b) => b.contract_id === cid);
    const links = linkData.links.filter((l) => l.contract_id === cid);
    let passageHits = [];
    const cidPassages = idx.passagesByCid.get(cid) || [];
    if (subQuery && cidPassages.length) {
      const sub = new BM25();
      for (const p of cidPassages) sub.add(p, p.text);
      passageHits = sub.search(subQuery, 6).map(({ doc: p, score }) => ({
        passage_id: p.id, boilerplate: p.boilerplate, score: +score.toFixed(2),
        text: trunc(p.text, 1800),
      }));
    }
    return {
      mode: "contract_dossier",
      contract_id: cid,
      job,
      bid_items: items.slice(0, 100),
      bid_items_total: items.length,
      jmf_links: links,
      passages: passageHits,
      passage_note: subQuery
        ? (passageHits.length
            ? `Passages ranked for: "${subQuery}"`
            : `None of this contract's ${cidPassages.length} proposal passages matched "${subQuery}" — likely NO special provision on that topic (Standard Specs would govern), but consider one retry with different keywords.`)
        : `This contract has ${cidPassages.length} proposal passages (incl. special provisions). Call again as "${cid} <topic keywords>" to search them.`,
      citation_note: "Cite as [CID " + cid + "], bid items as [CID " + cid + " line <line>], passages as [CID " + cid + " " + "<passage_id>].",
    };
  }

  // ---- Free-text search across jobs, bid items, passages, JMF links ----
  const hits = idx.contracts.search(q, Math.min(top_k, 15),
    (d) => (d.kind === "passage" && d.boilerplate ? 0.5 : 1));
  if (!hits.length) return { results: [], note: "Nothing matched in the contracts corpus." };
  return {
    mode: "search",
    results: hits.map(({ doc: d, score }) => {
      const base = { kind: d.kind, score: +score.toFixed(2) };
      if (d.kind === "job") return { ...base, contract_id: d.contract_id, county: d.county, description: d.description, work_type: d.work_type, letting_date: d.letting_date, route: d.route };
      if (d.kind === "bid_item") return { ...base, contract_id: d.contract_id, line: d.line, bid_code: d.bid_code, description: d.description, quantity: d.quantity, unit: d.unit, section: d.section };
      if (d.kind === "passage") return { ...base, passage_id: d.id, contract_ids: d.contract_ids, boilerplate: d.boilerplate, text: trunc(d.text, 1500) };
      return { ...base, jmf_id: d.jmf_id, contract_id: d.contract_id, link_basis: d.link_basis, status: d.status, verified: d.verified, bid_items_matched: d.bid_items_matched, flags: d.flags };
    }),
    tip: "Pass a 6-digit contract ID (optionally plus topic keywords) for the full contract dossier.",
  };
}

function getJmf({ jmf_number_or_cid }) {
  const q = String(jmf_number_or_cid || "").trim();
  const digits = q.replace(/\D/g, "");
  const records = jmfData.records;

  // CID -> all linked JMFs
  if (/^\d{6}$/.test(digits) && linkData.links.some((l) => l.contract_id === digits)) {
    const links = linkData.links.filter((l) => l.contract_id === digits);
    const ids = [...new Set(links.map((l) => l.jmf_id))];
    return {
      mode: "by_contract", contract_id: digits,
      jmf_records: records.filter((r) => ids.includes(r.jmf_id)),
      links,
      note: "Multiple designs can share a CID — check `flags` and `concurrent_designs` before assuming which one is in use.",
      citation_note: "Cite as [JMF <jmf_id>]; add ⚠ unverified when verified=false.",
    };
  }

  // JMF id / mix id / SM id (suffix-tolerant)
  const rec = records.find((r) =>
    r.jmf_id === q || r.mix_id_num === q || r.sm_id_num === q ||
    (digits.length >= 4 && (r.jmf_id.endsWith(digits) || String(r.mix_id_num).endsWith(digits))));
  if (rec) {
    return {
      mode: "single",
      jmf: rec,
      links: linkData.links.filter((l) => l.jmf_id === rec.jmf_id),
      citation_note: `Cite as [JMF ${rec.jmf_id}${rec.verified ? "" : " ⚠ unverified"}].`,
    };
  }
  return {
    error: `No JMF matched "${q}" at this plant.`,
    available_jmfs: records.map((r) => ({
      jmf_id: r.jmf_id, mix: r.mix_description, bid_code: r.bid_code,
      cid: r.cid_document, approved: r.approval_date, status: r.status,
    })),
  };
}

// =============================================================================
// query_dataverse — STUB pending IT access
// -----------------------------------------------------------------------------
// Expected contract (per IT, TBD): natural-language question in, structured
// data out. To go live: set DATAVERSE_API_URL (+ key vars) in Netlify env,
// then adjust ONLY the two marked sections below. The loop never changes.
// =============================================================================

async function queryDataverse({ question }) {
  const url = process.env.DATAVERSE_API_URL;
  if (!url) {
    return {
      status: "unavailable",
      message:
        "The Dataverse QC data source (per-sample gradations, volumetrics, tech notes, " +
        "JMF targets, stockpile tests) is not connected yet — pending API access from IT. " +
        "Tell the user plainly that live QC data is unavailable and answer from the other sources.",
    };
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 25000);
  try {
    // ---- DROP-IN 1: request shape / auth (adjust to IT's contract) ----------
    const headers = { "content-type": "application/json" };
    const key = process.env.DATAVERSE_API_KEY;
    if (key) {
      const hdr = process.env.DATAVERSE_AUTH_HEADER || "Authorization";
      const scheme = process.env.DATAVERSE_AUTH_SCHEME; // e.g. "Bearer"
      headers[hdr] = scheme ? `${scheme} ${key}` : key;
    }
    const res = await fetch(url, {
      method: "POST",
      headers,
      body: JSON.stringify({ question }), // TODO: rename field if IT's schema differs
      signal: controller.signal,
    });
    // -------------------------------------------------------------------------
    if (!res.ok) {
      const body = await res.text().catch(() => "");
      return { status: "error", http_status: res.status, detail: trunc(body, 800) };
    }
    // ---- DROP-IN 2: response parsing (adjust once IT documents the shape) ---
    const data = await res.json();
    return { status: "ok", data }; // TODO: normalize rows/columns per IT spec
    // -------------------------------------------------------------------------
  } catch (e) {
    return {
      status: "error",
      detail: e.name === "AbortError" ? "Dataverse API timed out after 25s." : String(e.message || e),
    };
  } finally {
    clearTimeout(timer);
  }
}

// =============================================================================
// Tool definitions for Claude
// =============================================================================

// =============================================================================
// Plant log — persistent memory via Netlify Blobs (in-memory fallback locally)
// =============================================================================

const LOG_KEY = "entries";
const LOG_MAX_ENTRIES = 500;
const memoryLogFallback = { entries: null }; // used when Blobs is unavailable

async function getLogStore() {
  try {
    const blobs = await import("@netlify/blobs");
    return blobs.getStore({ name: "plant-log", consistency: "strong" });
  } catch {
    return null;
  }
}

async function plantLog(input) {
  const action = input && input.action;
  const store = await getLogStore();
  let entries = null;
  if (store) {
    try { entries = await store.get(LOG_KEY, { type: "json" }); } catch { /* fall through */ }
  }
  const persistent = entries !== null && entries !== undefined || !!store;
  if (!Array.isArray(entries)) entries = memoryLogFallback.entries || [];

  if (action === "write") {
    const text = String(input.entry || "").trim().slice(0, 2000);
    if (!text) return { error: "write requires a non-empty 'entry'." };
    const tags = Array.isArray(input.tags) ? input.tags.map((t) => String(t).slice(0, 40)).slice(0, 8) : [];
    entries.push({ ts: new Date().toISOString(), text, tags });
    entries = entries.slice(-LOG_MAX_ENTRIES);
    let persisted = false;
    if (store) {
      try { await store.setJSON(LOG_KEY, entries); persisted = true; } catch { /* fall through */ }
    }
    if (!persisted) memoryLogFallback.entries = entries;
    return {
      status: "logged",
      entry_count: entries.length,
      persisted,
      note: persisted ? "Entry saved to the persistent plant log." : "Persistent store unavailable — entry kept for this session only; tell the user.",
    };
  }

  // read (default)
  let list = entries.slice().reverse(); // newest first
  const qToks = tokenize(input && input.query);
  if (qToks.length) {
    list = list.filter((e) => {
      const toks = new Set(tokenize(e.text + " " + (e.tags || []).join(" ")));
      return qToks.some((t) => toks.has(t));
    });
  }
  const limit = Math.min(Math.max((input && input.limit) || 10, 1), 50);
  const shown = list.slice(0, limit);
  return {
    total_entries: entries.length,
    matched: list.length,
    shown: shown.length,
    persistent_store: !!store,
    entries: shown.map((e) => ({ ts: e.ts, text: e.text, tags: e.tags || [] })),
    note: entries.length === 0 ? "The plant log is empty — nothing has been recorded yet." : undefined,
  };
}

const TOOLS = [
  {
    name: "search_bailey",
    description:
      "BM25 search over the 385-record Bailey Method knowledge base (William J. Pine's 5-day course: " +
      "slides, instructor notes, heuristics, worked examples, reference tables, procedures). Use for " +
      "aggregate packing and blend reasoning: CA ratio, FAc, FAf, control sieves (half sieve, PCS, SCS, TCS), " +
      "CUW/LUW/RUW, coarse/fine-graded/SMA classification, VMA & voids estimation, sensitivity factors, " +
      "blend-change diagnostics, and questionable-sample / representativeness heuristics. " +
      "Results include record ids and a verified flag — cite ids, amber-flag unverified ones.",
    input_schema: {
      type: "object",
      properties: {
        query: { type: "string", description: "Search terms (BM25 keyword matching, not semantic — use domain terms)." },
        top_k: { type: "integer", description: "Results to return, default 6, max 12." },
      },
      required: ["query"],
    },
  },
  {
    name: "search_spec",
    description:
      "BM25 search over the 2026 KYTC Standard Specifications (tag SPEC) and the Kentucky Methods manual " +
      "(tag KM). Use for spec requirements, tolerances, acceptance, sampling/testing procedures. " +
      "REMEMBER: contract special provisions override the Standard Specs — on contract-specific questions, " +
      "check search_contracts for SPs before quoting SPEC as final.",
    input_schema: {
      type: "object",
      properties: {
        query: { type: "string" },
        top_k: { type: "integer", description: "Default 6, max 12." },
        source: { type: "string", enum: ["SPEC", "KM", "both"], description: "Restrict to one corpus. Default both." },
      },
      required: ["query"],
    },
  },
  {
    name: "search_contracts",
    description:
      "Search the proposals/contracts corpus (23 jobs, 1,600+ bid items, 5,600+ proposal passages including " +
      "special provisions, plus JMF-contract links). Two modes: (1) pass a 6-digit contract ID — optionally " +
      "followed by topic keywords — to get the contract dossier (job info, bid items, linked JMFs) plus " +
      "passages ranked for the topic; (2) pass free text to search everything. ON-DEMAND ONLY: call this when " +
      "the user names a specific job/contract/CID, or asks about bid items, quantities, or special provisions. " +
      "Do NOT call it for general spec, Bailey, or mix questions where no contract was mentioned.",
    input_schema: {
      type: "object",
      properties: {
        query_or_cid: { type: "string", description: 'e.g. "252112", "252112 density acceptance", or "CL3 surface Madison".' },
        top_k: { type: "integer", description: "Free-text mode only. Default 8, max 15." },
      },
      required: ["query_or_cid"],
    },
  },
  {
    name: "get_jmf",
    description:
      "Structured lookup of approved JMF records for the Boonesborough plant (BT3): design gradation (mm sieves), " +
      "aggregate bins and percentages, binder, volumetrics (AC, Va, VMA, VFA, Gmm, Gsb, etc.), gyrations, project " +
      "linkage, approval dates, flags. Pass a JMF/mix design number (e.g. 00260116), an SM id, or a 6-digit contract " +
      "ID (returns all designs linked to that contract). If unsure what exists, pass anything — a miss returns the " +
      "full list of available JMFs.",
    input_schema: {
      type: "object",
      properties: { jmf_number_or_cid: { type: "string" } },
      required: ["jmf_number_or_cid"],
    },
  },
  {
    name: "query_dataverse",
    description:
      "Query the plant's live QC database (Microsoft Dataverse via a Fabric data agent): per-sample gradations, " +
      "volumetrics, tech notes, JMF targets, stockpile tests. Ask in natural language, but ALWAYS request RAW DATA — " +
      "specific rows, values, samples, sieves, and date ranges (e.g. 'all sieve results and Va/VMA for samples on mix " +
      "00260116 between 2026-07-01 and 2026-07-14, one row per sample'). NEVER ask it for interpretation, trends, " +
      "opinions, or conclusions — analysis is YOUR job, not the data layer's. May return status 'unavailable' " +
      "(pending IT access) — if so, say so plainly and answer from the other sources.",
    input_schema: {
      type: "object",
      properties: { question: { type: "string", description: "Natural-language request for raw rows/values." } },
      required: ["question"],
    },
  },
  {
    name: "plant_log",
    description:
      "The plant's persistent logbook (BT3 memory that survives across conversations and users). " +
      "action='read': retrieve recent entries, newest first; optional keyword query (mix ids, CIDs, topics) and limit. " +
      "action='write': record ONE short factual entry about a notable plant event — a test result, a decision made, " +
      "a resample outcome, a blend change, a correction from the user. READ it whenever a question involves recent " +
      "plant history ('has this happened before', 'what did we decide about...', troubleshooting a mix that may have " +
      "prior entries). WRITE sparingly: only concrete facts the user reported or decisions reached — never speculation, " +
      "never reference material from the other sources, never duplicates. Tag entries with mix/CID when known.",
    input_schema: {
      type: "object",
      properties: {
        action: { type: "string", enum: ["read", "write"] },
        query: { type: "string", description: "read: optional keyword filter, e.g. '00260116 air voids' or '251026'." },
        limit: { type: "integer", description: "read: max entries to return. Default 10, max 50." },
        entry: { type: "string", description: "write: one short factual entry, e.g. 'CL4 0.38A on CID 251026 hit 1.7% Va at 100 tons; recommended resample before blend change.'" },
        tags: { type: "array", items: { type: "string" }, description: "write: optional tags, e.g. ['00260116','251026','air-voids']." },
      },
      required: ["action"],
    },
  },
];

async function execTool(name, input) {
  try {
    let payload;
    switch (name) {
      case "search_bailey": payload = searchBailey(input); break;
      case "search_spec": payload = searchSpec(input); break;
      case "search_contracts": payload = searchContracts(input); break;
      case "get_jmf": payload = getJmf(input); break;
      case "query_dataverse": payload = await queryDataverse(input); break;
      case "plant_log": payload = await plantLog(input); break;
      default: return { ok: false, text: `Unknown tool: ${name}` };
    }
    const ok = !(payload && (payload.error || payload.status === "error"));
    return { ok, text: trunc(JSON.stringify(payload), TOOL_RESULT_CHAR_CAP) };
  } catch (e) {
    return { ok: false, text: `Tool "${name}" failed: ${String(e.message || e)}. Answer with what you have from other retrievals and state what's missing.` };
  }
}

// =============================================================================
// System prompt — orchestration doctrine
// =============================================================================

const SYSTEM_PROMPT = `You are the Boonesboro Lab Agent — the combined QC / mix-design assistant for The Allen Company's Boonesborough Asphalt Plant (plant folder BT3). You serve the plant's lab techs and mix designers. You are ONE agent with six tools; you decide what to retrieve and you do the analysis yourself.

DATA SOURCES
- search_bailey: Bailey Method KB (course slides, heuristics, worked examples). Aggregate packing & blend reasoning.
- search_spec: 2026 KYTC Standard Specifications [SPEC] + Kentucky Methods [KM].
- search_contracts: proposals index (jobs, bid items, special provisions) + JMF↔contract links.
- get_jmf: approved mix designs for THIS plant (gradations, bins, volumetrics, targets).
- query_dataverse: live QC sample data (may be unavailable — pending IT access).
- plant_log: THIS PLANT'S PERSISTENT MEMORY — a logbook of past events, results, and decisions that survives across conversations.

ORCHESTRATION RULES (strict)
1. MATCH EFFORT TO THE QUESTION. A simple single-source question (one definition, one spec value, one JMF field, one PCS lookup) gets ONE tool call and an immediate answer — do not run the full loop. Multi-source diagnostic questions may take several rounds.
2. JMF FIRST — AND NEVER REFUSE ANALYSIS FOR LACK OF ONE. Before analyzing any test result, sample, or mix problem, establish which JMF it belongs to (get_jmf); if it's ambiguous, state your assumption explicitly or ask. If no exact JMF matches, a get_jmf miss returns the full list of plant JMFs — pick the closest match by mix class/size, state that assumption, and proceed. If none fits, analyze against the targets and data the user supplied in their message. "I couldn't find the JMF" is never a reason to skip the analysis. Contract lookup (search_contracts) is ON-DEMAND: use it only when the user names a specific job/contract/CID or asks about bid items, quantities, or special provisions — not on general spec, Bailey, or mix questions.
2b. JMF FINGERPRINT CHECK — CRITICAL. The plant runs MULTIPLE designs of the same class/size (several 0.38A's, 0.38D's) with different aggregate sources and RAP percentages. A mix class alone does NOT identify a JMF. When the user supplies bin splits, aggregates, or RAP %, verify them against the candidate JMF's bins BEFORE using its targets: if they disagree (different RAP %, different sources or percentages), that is the WRONG DESIGN — say so plainly, do NOT present its Gmm/AC/gradation targets as this mix's targets (wrong-design targets corrupt the entire analysis), and either find the JMF whose bins match or ask the user for the JMF number / correct targets and analyze against what they supply. ALWAYS state which JMF you used and the fingerprint that justified it, e.g. "using JMF 00260116 — matches your 13% RAP and Haydon 8s 44%".
3. SPECIAL PROVISIONS OVERRIDE — WHEN A CONTRACT IS IN PLAY. If the user identified a contract (or the discussion is clearly about one specific job), check that contract's special provisions (search_contracts with the CID + topic) before quoting the Standard Specifications as governing; if an SP addresses the topic it governs — cite it and note that it overrides SPEC. If no contract was given, answer from the Standard Specifications and add one short caveat that a job-specific special provision could override — invite the user to give the CID to confirm.
4. DIAGNOSE AND GIVE REAL CHANGES — ENGINEERING FIRST. When a result is out of spec, the tech may need to act immediately to keep production in spec and KYTC satisfied — so lead with the engineering, not with process caveats. Compare the burn-off gradation and AC against the JMF targets sieve by sieve, identify what is driving the miss (which control sieves, dust content, AC volume, coarse/fine packing per the Bailey method), and give specific adjustment options: which bin(s), which direction, an approximate magnitude (e.g. "drop natural sand 2-3 points into the #8s"), and the expected effect on Va/VMA — with Bailey reasoning and citations. Sample confidence is a SIZING input, not a gate: when the trigger is a single sample or an unusual swing, say so in one line, size the move conservatively (the smaller reversible change), and recommend confirming with the next test WHILE the change runs. Recommending "resample and wait" as the only action is wrong — the tech can resample and adjust at the same time. Plant rule of thumb (lab-confirmed): ±0.1% AC ≈ ∓0.22–0.25% Va (this is the Bailey AC-volume factor of 2.25 applied) — when voids and dust are BOTH low, weigh the binder-volume lever (AC content, and verifying the AC/Gmm measurements) alongside gradation moves. The plant meters RAP binder contribution automatically, so AC targets are total-AC; do not double-count RAP binder when the user changes RAP percentage.
5. ADVISORY, NEVER DIRECTIVE. Recommendations are advisory options for the mix designer, with the reasoning chain and citations shown. Never phrase them as orders or as the only course of action.
6. CITE EVERYTHING RETRIEVED. Use bracket citations with record ids: [day2-slide-047], [SPEC p.412], [KM p.88], [JMF 00260116], [CID 252112 line 0320], [CID 252112 p01234]. If a cited record has verified=false, put "⚠ unverified" inside the bracket: [JMF 00260116 ⚠ unverified]. Do not cite what you did not retrieve.
7. MULTI-PART MESSAGES: retrieve separately per sub-question. You may issue several tool calls in a single round — batch independent retrievals.
8. ANSWER ONLY THE LATEST USER MESSAGE. Earlier turns are context only; never re-answer or re-retrieve for stale questions.
9. FAILURES ARE SURFACED, NEVER PAPERED OVER. If a tool fails, times out, or a source is unavailable (e.g. Dataverse pending IT access), answer with what you did retrieve and state plainly what's missing and how that limits the answer. Never fabricate data or citations.
10. RAW DATA ONLY FROM DATAVERSE. When calling query_dataverse, request raw rows/values (specific samples, sieves, fields, date ranges) — never interpretations. Analysis is your job.
11. PLANT MEMORY. Read the plant_log when a question involves recent plant history, a recurring problem, or a past decision (e.g. troubleshooting a mix that may have prior entries — check for the mix/CID before analyzing). Write to it when the user reports a concrete result, event, or decision, or corrects something you said: ONE short factual entry, tagged with mix/CID, and tell the user what you logged. Never log speculation, retrieved reference content, or near-duplicates of existing entries. If the log tool reports the persistent store is unavailable, tell the user the entry won't survive past this session.
12. THE LOG IS CONTEXT, NEVER PROOF. Plant-log entries are historical notes — they never override what the user is telling you RIGHT NOW. Never treat a log entry as evidence that the current sample was already retested, resolved, or explained, and never tell the user their own reported situation already happened unless they confirm it. If an entry looks like it might describe the same event, mention it in one line ("the log shows a similar case on [date] — same event?") and analyze the user's live report on its own merits.

ANSWER FORMAT (every final answer)
1. Open with "**Bottom line:**" — 1 to 4 plain-language sentences a tech can act on without reading anything else: the direct answer, the governing value, or — for out-of-spec results — the recommended change itself (e.g. "drop natural sand 2 points into the #8s; confirm with the next sample"). No jargon that isn't necessary, no citations here.
2. If (and only if) there is more worth saying, follow with a "**Details**" section: the reasoning chain, exact values and tolerances, caveats, and ALL bracket citations. Prefer short bullets over paragraphs. A table only when comparing several numbers.
3. Be selective, not exhaustive: include only what changes what the reader does or needs to trust the answer — do not recite everything retrieved. A simple question gets the bottom line alone, no Details section.
4. Total length target: bottom line ≤ 60 words; details typically ≤ 150 words. Exception: mix-troubleshooting answers get the room they need — the sieve-by-sieve JMF comparison and the conditional adjustment plan (rule 4) are worth the length.

STYLE
- Engineer-to-engineer: units, sieve sizes in both naming conventions where useful, numbers to sensible precision.
- Flag uncertainty honestly.
- BM25 retrieval is keyword-based: if a search misses, retry once with different domain terms before concluding the corpus lacks it.`;

// =============================================================================
// Anthropic streaming call + SSE parsing
// =============================================================================

class ApiError extends Error {
  constructor(status, body, provider = "Anthropic") { super(`${provider} API ${status}: ${trunc(body, 500)}`); this.status = status; }
}

// Prompt caching: mark the last content block of the final message as a cache
// breakpoint so each loop round reuses the cached prefix (system + tools +
// prior rounds). Cache reads don't count toward the ITPM rate limit and bill
// at ~10% of base input price.
function withCacheBreakpoint(messages) {
  if (!messages.length) return messages;
  const out = messages.slice();
  const last = out[out.length - 1];
  let content = last.content;
  if (typeof content === "string") content = [{ type: "text", text: content }];
  if (!Array.isArray(content) || !content.length) return messages;
  content = content.slice(0, -1).concat([
    { ...content[content.length - 1], cache_control: { type: "ephemeral" } },
  ]);
  out[out.length - 1] = { ...last, content };
  return out;
}

async function callClaude({ messages, toolChoice, onText }) {
  const key = process.env.ANTHROPIC_API_KEY;
  if (!key) throw new Error("ANTHROPIC_API_KEY is not set in the Netlify environment.");
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "x-api-key": key, "anthropic-version": "2023-06-01", "content-type": "application/json" },
    body: JSON.stringify({
      model: MODEL(),
      max_tokens: MAX_TOKENS,
      system: [{ type: "text", text: SYSTEM_PROMPT, cache_control: { type: "ephemeral" } }],
      messages: withCacheBreakpoint(messages),
      tools: TOOLS,
      tool_choice: toolChoice || { type: "auto" },
      stream: true,
    }),
  });
  if (!res.ok) throw new ApiError(res.status, await res.text().catch(() => ""));

  const blocks = [];
  let stopReason = null;
  const decoder = new TextDecoder();
  let buf = "";
  const reader = res.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    let nl;
    while ((nl = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, nl).trim();
      buf = buf.slice(nl + 1);
      if (!line.startsWith("data:")) continue;
      const data = line.slice(5).trim();
      if (!data || data === "[DONE]") continue;
      let ev;
      try { ev = JSON.parse(data); } catch { continue; }
      switch (ev.type) {
        case "content_block_start": {
          const b = ev.content_block;
          blocks[ev.index] = b.type === "tool_use"
            ? { type: "tool_use", id: b.id, name: b.name, _json: "" }
            : { type: "text", text: b.text || "" };
          break;
        }
        case "content_block_delta": {
          const b = blocks[ev.index];
          if (!b) break;
          if (ev.delta.type === "text_delta") { b.text += ev.delta.text; onText && onText(ev.delta.text); }
          else if (ev.delta.type === "input_json_delta") b._json += ev.delta.partial_json;
          break;
        }
        case "message_delta":
          if (ev.delta && ev.delta.stop_reason) stopReason = ev.delta.stop_reason;
          break;
        case "error":
          throw new Error(`Anthropic stream error: ${ev.error && ev.error.message}`);
      }
    }
  }
  // normalize
  const content = blocks.filter(Boolean).map((b) => {
    if (b.type === "tool_use") {
      let input = {};
      try { input = b._json ? JSON.parse(b._json) : {}; } catch { input = {}; }
      return { type: "tool_use", id: b.id, name: b.name, input };
    }
    return { type: "text", text: b.text };
  }).filter((b) => b.type === "tool_use" || (b.text && b.text.length));
  return { content, stopReason };
}

// =============================================================================
// Grok (xAI) provider — OpenAI-compatible chat completions, same loop contract
// =============================================================================

// Grok-only operating supplement. Grok is weaker at tool selection and tends to
// answer from memory and truncate; this pushes it to retrieve first and return
// complete, cited answers. Appended ONLY on the Grok path — Claude never sees it.
const GROK_SUPPLEMENT = `OPERATING NOTES (read carefully):
- RETRIEVE BEFORE YOU ANSWER. For any question touching a mix, sieve/gradation, volumetrics, a spec value, a Kentucky Method, a contract, a bid item, a special provision, a JMF, a Bailey principle, or plant history — call the relevant tool(s) FIRST. Do NOT answer engineering questions from memory.
- TOOL MAP: mix design / bins / volumetrics / targets -> get_jmf. Spec value / acceptance / test method -> search_spec. Aggregate packing / blend theory -> search_bailey. A named job / CID / bid item / special provision -> search_contracts. Past results, decisions, "has this happened before" -> plant_log (read). Recording a result or decision the user reports -> plant_log (write).
- You MAY call several tools in one round. If a search returns nothing useful, retry once with different keywords before concluding the corpus lacks it.
- ANSWERS MUST BE COMPLETE, not just a headline. Keep the "Bottom line" short, but the "Details" section MUST carry the reasoning chain, the actual numbers and tolerances, and bracket citations with record ids — e.g. [SPEC p.412], [KM p.88], [JMF 00260116], [CID 251026 line 0320]. Never state a spec value, target, or recommendation without citing the retrieved record it came from.
- FOLLOW THE DOCTRINE ABOVE: establish the JMF first (closest match if no exact hit — never refuse analysis), and FINGERPRINT-CHECK it: the chosen JMF's bins/RAP % must match what the user stated, or it is the wrong design — never use a mismatched JMF's targets, and always name the JMF you used. Check special provisions when a contract is in play; on out-of-spec results LEAD with the diagnosis and specific adjustment options (bins, direction, magnitude, expected Va/VMA effect, Bailey reasoning). Single sample or odd swing = say so in one line, size the move conservatively, and confirm with the next test while the change runs — never "resample and wait" as the only action.
- If a tool fails or a source is unavailable, say so plainly and answer around it. Never invent values or citations.`;

// Internal history uses Anthropic-style content blocks; convert to OpenAI shape.
function toOpenAiMessages(messages) {
  const out = [{ role: "system", content: SYSTEM_PROMPT + "\n\n" + GROK_SUPPLEMENT }];
  for (const m of messages) {
    const blocks = Array.isArray(m.content) ? m.content : [{ type: "text", text: String(m.content || "") }];
    if (m.role === "assistant") {
      const text = blocks.filter((b) => b.type === "text").map((b) => b.text).join("\n");
      const toolCalls = blocks.filter((b) => b.type === "tool_use").map((b) => ({
        id: b.id, type: "function",
        function: { name: b.name, arguments: JSON.stringify(b.input || {}) },
      }));
      const msg = { role: "assistant", content: text || null };
      if (toolCalls.length) msg.tool_calls = toolCalls;
      out.push(msg);
    } else {
      // user turn: plain text and/or tool_result blocks
      const toolResults = blocks.filter((b) => b.type === "tool_result");
      for (const tr of toolResults)
        out.push({ role: "tool", tool_call_id: tr.tool_use_id, content: typeof tr.content === "string" ? tr.content : JSON.stringify(tr.content) });
      const text = blocks.filter((b) => b.type === "text").map((b) => b.text).join("\n");
      if (text) out.push({ role: "user", content: text });
    }
  }
  return out;
}

const OPENAI_TOOLS = () => TOOLS.map((t) => ({
  type: "function",
  function: { name: t.name, description: t.description, parameters: t.input_schema },
}));

async function callGrok({ messages, toolChoice, onText }) {
  const key = process.env.XAI_API_KEY;
  if (!key) throw new Error("XAI_API_KEY is not set in the Netlify environment — add it under Site configuration → Environment variables to use Grok.");
  const res = await fetch(XAI_API_URL, {
    method: "POST",
    headers: { authorization: `Bearer ${key}`, "content-type": "application/json" },
    body: JSON.stringify({
      model: XAI_MODEL(),
      max_tokens: MAX_TOKENS,
      temperature: 0.3,  // lower = tighter, more consistent engineering answers
      messages: toOpenAiMessages(messages),
      tools: OPENAI_TOOLS(),
      tool_choice: toolChoice && toolChoice.type === "none" ? "none" : "auto",
      stream: true,
    }),
  });
  if (!res.ok) throw new ApiError(res.status, await res.text().catch(() => ""), "xAI");

  let text = "";
  const calls = []; // accumulated by delta index
  let finish = null;
  const decoder = new TextDecoder();
  let buf = "";
  const reader = res.body.getReader();
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    buf += decoder.decode(value, { stream: true });
    let nl;
    while ((nl = buf.indexOf("\n")) >= 0) {
      const line = buf.slice(0, nl).trim();
      buf = buf.slice(nl + 1);
      if (!line.startsWith("data:")) continue;
      const data = line.slice(5).trim();
      if (!data || data === "[DONE]") continue;
      let ev;
      try { ev = JSON.parse(data); } catch { continue; }
      const choice = ev.choices && ev.choices[0];
      if (!choice) continue;
      const delta = choice.delta || {};
      if (typeof delta.content === "string" && delta.content) { text += delta.content; onText && onText(delta.content); }
      if (Array.isArray(delta.tool_calls)) {
        for (const tc of delta.tool_calls) {
          const i = tc.index ?? 0;
          if (!calls[i]) calls[i] = { id: tc.id || `call_${i}`, name: "", args: "" };
          if (tc.id) calls[i].id = tc.id;
          if (tc.function && tc.function.name) calls[i].name += tc.function.name;
          if (tc.function && typeof tc.function.arguments === "string") calls[i].args += tc.function.arguments;
        }
      }
      if (choice.finish_reason) finish = choice.finish_reason;
    }
  }

  const content = [];
  if (text) content.push({ type: "text", text });
  for (const c of calls.filter(Boolean)) {
    let input = {};
    try { input = c.args ? JSON.parse(c.args) : {}; } catch { input = {}; }
    content.push({ type: "tool_use", id: c.id, name: c.name, input });
  }
  return { content, stopReason: finish === "tool_calls" ? "tool_use" : "end_turn" };
}

async function callModelRetry(provider, args) {
  const call = provider === "grok" ? callGrok : callClaude;
  try {
    return await call(args);
  } catch (e) {
    const retryable = e instanceof ApiError && (e.status === 429 || e.status >= 500 || e.status === 529);
    if (!retryable) throw e;
    await new Promise((r) => setTimeout(r, 2500));
    return await call(args);
  }
}

// =============================================================================
// The agentic loop, streamed as SSE
// =============================================================================

async function runLoop(send, clientMessages, provider) {
  // History from the client is plain text (prior final answers only) — old
  // tool traffic is never replayed, which keeps retrieval scoped to the
  // latest user message.
  const convo = clientMessages.map((m) => ({
    role: m.role === "assistant" ? "assistant" : "user",
    content: [{ type: "text", text: String(m.content || "").slice(0, 24000) }],
  }));
  if (!convo.length || convo[convo.length - 1].role !== "user")
    throw new Error("Last message must be from the user.");

  let answered = false;
  for (let round = 1; round <= MAX_ROUNDS; round++) {
    const force = round === MAX_ROUNDS;
    send({ type: "round", round, max: MAX_ROUNDS, forced: force });
    if (force)
      convo.push({ role: "user", content: [{ type: "text", text: "[system] Round limit reached — answer now with what you have retrieved, and state what is missing." }] });

    let resp;
    try {
      resp = await callModelRetry(provider, {
        messages: convo,
        toolChoice: force ? { type: "none" } : { type: "auto" },
        onText: (t) => { send({ type: "text", text: t }); },
      });
    } catch (e) {
      // tool_choice "none" not supported on some older API versions — retry auto
      if (force && String(e.message).includes("tool_choice")) {
        resp = await callModelRetry(provider, { messages: convo, toolChoice: { type: "auto" }, onText: (t) => send({ type: "text", text: t }) });
      } else throw e;
    }

    convo.push({ role: "assistant", content: resp.content.length ? resp.content : [{ type: "text", text: "(no content)" }] });

    const toolUses = resp.content.filter((b) => b.type === "tool_use");
    if (resp.stopReason !== "tool_use" || !toolUses.length) {
      answered = resp.content.some((b) => b.type === "text" && b.text.trim());
      break;
    }

    // Execute every requested tool this round (model may batch several)
    const results = [];
    for (const tu of toolUses) {
      send({ type: "tool", name: tu.name, input: tu.input });
      const r = await execTool(tu.name, tu.input);
      send({ type: "tool_result", name: tu.name, ok: r.ok, chars: r.text.length });
      results.push({ type: "tool_result", tool_use_id: tu.id, content: r.text, is_error: !r.ok });
    }
    convo.push({ role: "user", content: results });
  }

  if (!answered)
    send({ type: "error", message: "The model finished without producing an answer. Try rephrasing, or check the function logs." });
  send({ type: "done" });
}

// =============================================================================
// Mix-design list for the frontend dropdown (GET ?mixes=1)
// =============================================================================

const SIEVE_LABELS = [
  ["50.0", '2"'], ["37.5", '1 1/2"'], ["25.0", '1"'], ["19.0", '3/4"'], ["12.5", '1/2"'],
  ["9.5", '3/8"'], ["4.75", "#4"], ["2.36", "#8"], ["1.18", "#16"], ["0.6", "#30"],
  ["0.3", "#50"], ["0.15", "#100"], ["0.075", "#200"],
];

function shortProducer(p) {
  if (!p) return "";
  const base = String(p).split("@")[0].trim().replace(/^The\s+/i, "");
  return base.split(/\s+/)[0];
}

// Fallback design Gmb at Ndes from Gmm and design air voids (Gmb = Gmm * (1 - Va/100)).
// Prefer the printed design_gmb off the mix pack when present.
function gmbAtNdes(gmm, va) {
  if (gmm == null || va == null) return null;
  return Math.round(gmm * (1 - va / 100) * 1000) / 1000;
}

function mixSummaries() {
  const recs = jmfData.records || jmfData;
  return recs
    .filter((r) => r.status !== "superseded")
    .map((r) => ({
      id: r.jmf_id,
      name: String(r.source_file || r.mix_description || r.jmf_id).replace(/\.xlsm?$/i, ""),
      desc: r.mix_description || "",
      bins: (r.aggregates || []).map((a) => ({ pct: a.percent, type: a.agg_type, loc: shortProducer(a.producer) })),
      grad: Object.fromEntries(
        SIEVE_LABELS
          .filter(([mm]) => r.jmf_gradation_mm && r.jmf_gradation_mm[mm] != null)
          .map(([mm, label]) => [label, r.jmf_gradation_mm[mm]])
      ),
      ac: r.recycle && r.recycle.total_ac_in_mix_pct != null ? r.recycle.total_ac_in_mix_pct : (r.design_volumetrics || {}).optimum_ac_pct,
      gmm: (r.design_volumetrics || {}).gmm,
      gmb: (r.design_volumetrics || {}).design_gmb != null
        ? (r.design_volumetrics || {}).design_gmb
        : gmbAtNdes((r.design_volumetrics || {}).gmm, (r.design_volumetrics || {}).air_voids_pct),
      va: (r.design_volumetrics || {}).air_voids_pct,
      rap: r.recycle ? r.recycle.rap_total_pct : 0,
      released: r.dates ? r.dates.released || null : null,
    }));
}

// =============================================================================
// Netlify handler (Functions 2.0, streamed response)
// =============================================================================

export default async (req) => {
  if (req.method === "GET") {
    const url = new URL(req.url);
    if (url.searchParams.has("mixes"))
      return new Response(JSON.stringify({ mixes: mixSummaries() }), {
        headers: { "content-type": "application/json", "cache-control": "public, max-age=300" },
      });
    return new Response(JSON.stringify({ error: "POST only (or GET ?mixes=1)" }), { status: 405, headers: { "content-type": "application/json" } });
  }
  if (req.method !== "POST")
    return new Response(JSON.stringify({ error: "POST only" }), { status: 405, headers: { "content-type": "application/json" } });

  let body;
  try { body = await req.json(); } catch { body = null; }
  const messages = body && Array.isArray(body.messages) ? body.messages.slice(-16) : null;
  if (!messages || !messages.length)
    return new Response(JSON.stringify({ error: "Body must be { messages: [{role, content}, ...] }" }), { status: 400, headers: { "content-type": "application/json" } });
  const provider = body.provider === "grok" ? "grok" : "claude";

  const encoder = new TextEncoder();
  const stream = new ReadableStream({
    async start(controller) {
      const send = (obj) => {
        try { controller.enqueue(encoder.encode(`data: ${JSON.stringify(obj)}\n\n`)); } catch { /* client gone */ }
      };
      send({ type: "start", plant: "BT3", model: provider === "grok" ? XAI_MODEL() : MODEL() }); // first bytes fast (TTFB)
      try {
        await runLoop(send, messages, provider);
      } catch (e) {
        send({ type: "error", message: String(e.message || e) });
        send({ type: "done" });
      } finally {
        try { controller.close(); } catch { /* already closed */ }
      }
    },
  });

  return new Response(stream, {
    headers: {
      "content-type": "text/event-stream; charset=utf-8",
      "cache-control": "no-cache, no-transform",
      "x-accel-buffering": "no",
    },
  });
};

// Named exports for local smoke-testing only (ignored by Netlify)
export { searchBailey, searchSpec, searchContracts, getJmf, queryDataverse, plantLog, execTool, tokenize, BM25, toOpenAiMessages, callGrok };
