# Boonesboro Lab Agent (BT3)

One agentic loop, five retrieval tools, for the Boonesborough Asphalt Plant. Single-page frontend + one streaming Netlify function that runs the tool-use loop server-side (same architecture as bailey-chat-site / KYTC Spec Assistant, plus the loop).

## Deploy

Drag-and-drop this whole `output/` folder into Netlify (Deploys → drag and drop). Then set environment variables (Site configuration → Environment variables) and redeploy so the function picks them up.

## Environment variables

| Variable | Required | Notes |
|---|---|---|
| `ANTHROPIC_API_KEY` | **Yes** | Your Anthropic API key. |
| `ANTHROPIC_MODEL` | No | Default `claude-sonnet-4-5`. Set to another model string to switch. |
| `DATAVERSE_API_URL` | Later | Leave **unset** until IT delivers the endpoint. While unset, `query_dataverse` returns a clean "pending IT access" result and the agent says so plainly. |
| `DATAVERSE_API_KEY` | Later | Key/token for the IT API. |
| `DATAVERSE_AUTH_HEADER` | Later | Header name if not `Authorization`. |
| `DATAVERSE_AUTH_SCHEME` | Later | e.g. `Bearer`. Omit to send the raw key. |

## Wiring up Dataverse when IT delivers

Everything is isolated in `queryDataverse()` in `netlify/functions/agent.mjs` — two marked sections:

- **DROP-IN 1** — request shape & auth (currently POSTs `{ question }` JSON with the env-var auth header).
- **DROP-IN 2** — response parsing (currently passes the JSON through as `{ status: "ok", data }`).

The loop, tool definition, and frontend never need to change. If the tool description needs to change (e.g. IT's agent wants a different phrasing), edit the `query_dataverse` entry in `TOOLS`.

## Layout

```
index.html                       frontend (SSE client, tool chips, citation chips, error surfacing)
netlify.toml
netlify/functions/agent.mjs      the loop: Claude call → execute tools → append → repeat
netlify/functions/data/*.mjs     corpora as ES modules (JSON with `export default` prefix)
```

## Corpora / refreshing data

Data files were generated from the source JSONs by prefixing `export default ` and appending `;`:

| data file | source |
|---|---|
| `bailey_kb.mjs` | `bailey_method_kb.json` (385 records, Bailey skill) |
| `spec.mjs` | `specknowledge.json` (2026 KYTC Standard Specs + Kentucky Methods, 3,859 chunks) |
| `proposals.mjs` | `proposalknowledge.json` (23 jobs, 1,603 bid items, 5,618 passages) |
| `jmf_records.mjs` | `jmf_records.json` (12 BT3 designs) |
| `contract_links.mjs` | `contract_jmf_links.json` (14 links) |

To refresh any corpus: regenerate the JSON, then rebuild the `.mjs` the same way and redeploy.

## Behavior encoded in the system prompt

Contract & JMF identified before analysis; special provisions checked before quoting standard spec (SPs override); questionable-sample/representativeness check before any blend-change recommendation; recommendations advisory with reasoning + citations; record-ID citations with ⚠ amber flag when `verified=false`; single-source questions answered in one round; per-sub-question retrieval for multi-part messages; retrieval scoped to the latest message; tool failures surfaced and answered around, never papered over. Loop cap: 10 rounds, then a forced answer.

## Cloning for other plants

Per-plant agents: swap `jmf_records.mjs` / `contract_links.mjs` (and the plant name in the system prompt + `index.html` header) for the other plant's data. Bailey/spec/proposals corpora can be reused as-is.
