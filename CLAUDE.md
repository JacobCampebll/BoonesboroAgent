# Boonesboro Lab Agent (BT3) — project memory

This file is auto-loaded at the start of every Claude Code session on this repo.
It exists so any new session (or a new account/workspace) resumes with full context.
Keep it current when architecture, doctrine, or open items change.

## What this is
An AI QC / mix-design assistant for **The Allen Company's Boonesborough Asphalt Plant (BT3)**.
- **Live:** https://boonesboroagent.netlify.app  (PWA — installable, offline shell)
- **Repo:** JacobCampebll/BoonesboroAgent
- **Owner:** Jake Campbell (Jacob_Campbell@theallen.com), Kentucky (Eastern time)
- **Users:** plant QC techs. Speak in their terms — say "mix design" (by name), not "JMF number".

## Architecture
- **One Netlify Function** (`netlify/functions/agent.mjs`, ESM, ~1100 lines) runs the whole
  agentic loop: SSE streaming, ≤10 tool rounds, forced answer via `tool_choice:none`, retry on 429/5xx/529.
- **Dual provider**, chosen per-request from the UI (persisted in localStorage):
  - **Anthropic** (`callClaude`) — prompt caching via `cache_control`; `output_config.effort`
    from `ANTHROPIC_EFFORT` (low|medium|high|xhigh|max, default high). **Claude-only knob; Grok ignores it.**
  - **xAI Grok** (`callGrok`) — OpenAI-compatible chat/completions, streaming tool_calls,
    temp 0.3, `GROK_SUPPLEMENT` appended to the system prompt in `toOpenAiMessages`.
  - **Grok currently carries the demo** because Jake's Anthropic API is blocked by an
    identity-verification wall (unresolved — see Open items). Do NOT claim Claude works until Jake confirms.
- **Frontend:** a single hand-written `index.html` (~800 lines) — **vanilla HTML/CSS/JS**, no
  framework, no build step. Only external deps are `marked` + `DOMPurify` from a CDN (markdown render + sanitize).
- **PWA:** `manifest.webmanifest`, `sw.js` (cache-first shell, network-first navigation, never
  intercepts `/.netlify/`), icons rasterized from the real Allen Company logo (`allen-logo.png`).

## The seven tools (in `agent.mjs`)
1. `search_bailey` — Bailey Method KB (BM25 over `data/bailey_kb.mjs`)
2. `bailey_calc` — **deterministic** Bailey/plant calculator (`lib/bailey_calc.mjs`): control sieves
   (Half/PCS/SCS/TCS), CA/FAc/FAf, sieve deltas, VMA sensitivity RoTs, AC→Va via ACVC 2.25.
   Prefer this for mix-change numbers; search_bailey for narrative + citations. Not a standalone
   Netlify function (lives under `functions/lib/` so esbuild only bundles it into `agent`).
3. `search_spec` — KYTC Standard Specs + Kentucky Methods (`data/spec.mjs`, 3,859 chunks)
4. `search_contracts` — proposals/contracts corpus (`data/proposals.mjs`: 23 jobs / 1,603 bid
   items / 5,618 passages). On-demand only.
5. `get_jmf` — plant JMFs (`data/jmf_records.mjs`, **14 mix designs**)
6. `query_dataverse` — **STUB**, pending IT hookup (Fabric MCP). Returns "unavailable" until wired.
7. `plant_log` — persistent memory via **Netlify Blobs** (store `plant-log`, key `entries`,
   500-entry cap, in-memory fallback when Blobs unavailable). read/write actions.

## GET endpoints on the same function (used by the UI, no model call)
- `?mixes=1` → mix-design list + pack data for the dropdowns (`mixSummaries`)
- `?contracts=1` → contract list; `?contract=<id>` → contract detail card (`contractDetail`)
- `?history=1&jmf=<id>&desig=<0.38A>` → plant-log entries for a mix (`historyFeed`)
- `?admin=clearlog&key=<PLANTLOG_ADMIN_KEY>` → one-shot plant-log wipe (`clearLog`).
  Key-protected; disabled when the env var is unset; **never exposed to the model.**

## UI preset tabs (chips, in `index.html`)
`Mix change` · `Plant history` · `Pay factor` · `Contracts` · `Log it`
- Shared mix dropdown fed by `?mixes=1` (`loadMixes`/`populateMixes`/`selectedMix`).
- `hideForms()` hides ALL `.preset-form` — only one tab open at a time.
- **Pay factor** uses the real KYTC Lot Pay Adjustment Schedule (Compaction Option A, in the spec
  corpus): weighted AC/AV/VMA/**Lane density**/**Joint density** (cores), $50×qty formula, AADTT class.
- **Contracts** renders an inline card (header, Option A/B badge, special-note chips, bid items by
  section) + an "ask the agent" button. Works for group jobs (e.g. 263004) — bid items already
  attributed per contract_id by the upstream **allenproposals** parser.

## SYSTEM_PROMPT doctrine (shared by both providers) — the hard-won rules
- **Rule 2 / 2b — JMF-first, never refuse analysis, FINGERPRINT CHECK:** multiple 0.38A/0.38D
  designs exist. Verify the JMF used matches the user's stated bins/RAP% (aggregates + percentages).
  Never use a mismatched design's targets. Name the JMF used. (This caught the Gaddie 2.448/10%
  vs Haydon 2.471/13% mixup.)
- **Rule 4 — DIAGNOSE AND GIVE REAL CHANGES, ENGINEERING FIRST:** the agent must give immediate,
  Bailey-rooted blend-change recommendations because KYTC can shut the plant down. "Resample and
  wait" as the ONLY action is wrong; resampling is a sizing caveat, not a gate. Plant rule
  ±0.1% AC ≈ ∓0.22–0.25% Va (≈ Bailey ACVC 2.25). Plant meters RAP binder.
- **Rule 10 — RAW ROWS ONLY from Dataverse** (when wired): request specific samples/sieves/fields,
  never interpretations. Analysis is the agent's job.
- **Rules 11/12 — plant memory:** log is context, never proof a current sample is resolved.
- Bailey KB skill lives at `/root/.claude/skills/bailey-method` (ACVC 2.25 valid Gsb 2.600–2.700, etc.).

## Deploy flow (standing authorization: push straight to main)
Develop on branch **`claude/boonesboro-lab-agent-deploy-1ly961`**, then:
```
git add … && git commit
git push -u origin claude/boonesboro-lab-agent-deploy-1ly961
git checkout main && git merge --ff-only claude/boonesboro-lab-agent-deploy-1ly961
git push origin main && git checkout claude/boonesboro-lab-agent-deploy-1ly961
```
Netlify auto-builds `main` (~15–60s). Verify via Netlify MCP `netlify-project-services-reader`
get-project (siteId `ed0d0abc-4b99-455d-a55e-be5a1a231038`), poll until `currentDeploy.id` changes.

**Required commit trailers:**
```
Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>
Claude-Session: https://claude.ai/code/session_01MQmTBWYe99S5BtzG9Z9GYr
```
Do NOT create a PR unless explicitly asked. Do NOT put the model identifier in commits/PRs/code.

## Env vars (Netlify, server-side only — never in browser or repo)
`ANTHROPIC_API_KEY`, `ANTHROPIC_MODEL` (default claude-sonnet-4-5), `ANTHROPIC_EFFORT`,
`XAI_API_KEY`, `XAI_MODEL` (default grok-4), `PLANTLOG_ADMIN_KEY` (wipe endpoint).
Future Fabric/Dataverse: `DATAVERSE_API_URL/_KEY/_AUTH_HEADER/_AUTH_SCHEME` (REST drop-in) or
`FABRIC_MCP_URL` + auth (MCP path). Manage via Netlify MCP `manage-env-vars`.

## Environment gotchas (this Claude Code web sandbox)
- **Egress blocks `*.netlify.app`** — cannot curl/WebFetch the live site. Use Netlify MCP readers;
  for live function tests, have Jake hit the URL (he's the only one who can reach it).
- **Run git from the repo root** `/home/user/BoonesboroAgent` (not scratchpad → "not a git repo").
- **Foreground `sleep` is blocked** — use `run_in_background:true` + TaskOutput.
- **Playwright:** `chromium` at `/opt/pw-browsers/chromium`; `playwright-core` in scratchpad. Test
  over `python3 -m http.server` (file:// gives false negatives on absolute-path assets). Stub the
  `?mixes=1`/`?contracts=1`/`?history=1` endpoints with `page.route`.
- Data files import into the function bundle (proposals 8.5MB, spec 3.8MB) — fine on Netlify/Lambda;
  would need rehoming (R2/KV) if ever ported to Cloudflare Workers (10MB bundle cap).

## Open items / status
- **Fabric/Dataverse hookup (Thursday IT meeting, John Gootee):** the data agent is a **Microsoft
  Fabric data agent exposed as an MCP server**. Plan: make this function an **MCP client** in
  `queryDataverse()` (REST fallback already stubbed). Auth = **Entra service principal, OAuth 2.0
  client-credentials** (machine-to-machine): function fetches a token from
  `login.microsoftonline.com/{tenant}/oauth2/v2.0/token`, caches it, Bearers it to Fabric. Use a
  **dedicated read-only service account owned by IT**, not a personal login. Blocked on IT's 5
  answers: endpoint URL + transport (SSE vs streamable-HTTP), auth/scopes, IP-allowlisting (we're
  serverless, NO fixed egress IP → prefer token auth), raw-rows capability, exposed tool list.
- **Anthropic identity verification** blocks the Claude API (req_011Cd5dtwgAMD1Yzq5x2vygX; Persona
  flow errored; typeform submitted 2×; Fin = AI support bot). Grok is the fallback. Out of our hands.
- **Plant-log wipe pending:** Jake to tap `?admin=clearlog&key=…` to clear test entries, then delete
  `PLANTLOG_ADMIN_KEY` to disable the endpoint. (A morning reminder Routine was set for 2026-07-24.)
- **Architecture artifact:** https://claude.ai/code/artifact/48e672f6-0197-4b50-987d-22369367046b
  (republish `scratchpad/architecture.html` to keep the URL). Flip Fabric items green once wired.

## Style
Jake uses an ADHD-oriented output style: lead with concrete next actions, number multi-step work,
bottom-line first, make wins visible, keep it tight. API keys stay server-side. When facing techs,
name mixes by design name.
