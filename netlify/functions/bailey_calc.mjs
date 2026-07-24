// =============================================================================
// Deterministic Bailey Method / plant blend calculator
// -----------------------------------------------------------------------------
// Pure functions — no LLM, no network. Used by the bailey_calc tool so the agent
// cites real numbers for control sieves, ratios, sieve deltas, VMA sensitivity
// rules-of-thumb, and AC→Va estimates (ACVC / plant rule).
//
// Source: William J. Pine Bailey Method course (see data/bailey_kb.mjs).
// Plant rule (lab-confirmed BT3): ±0.1% AC ≈ ∓0.22–0.25% Va ≈ ACVC 2.25.
// =============================================================================

/** Standard sieve set used on BT3 mix packs / lab sheets (mm → display label). */
export const SIEVE_MM_TO_LABEL = {
  "50.0": '2"',
  "37.5": '1 1/2"',
  "25.0": '1"',
  "19.0": '3/4"',
  "12.5": '1/2"',
  "9.5": '3/8"',
  "4.75": "#4",
  "2.36": "#8",
  "1.18": "#16",
  "0.6": "#30",
  "0.3": "#50",
  "0.15": "#100",
  "0.075": "#200",
};

const LABEL_TO_MM = (() => {
  const m = new Map();
  for (const [mm, lab] of Object.entries(SIEVE_MM_TO_LABEL)) {
    m.set(lab.toLowerCase(), mm);
    m.set(mm, mm);
    m.set(String(parseFloat(mm)), mm);
  }
  // common aliases
  const aliases = {
    '2"': "50.0",
    '2 in': "50.0",
    '1.5"': "37.5",
    '1 1/2"': "37.5",
    '1-1/2"': "37.5",
    '1"': "25.0",
    '3/4"': "19.0",
    '0.75"': "19.0",
    '1/2"': "12.5",
    '0.5"': "12.5",
    '3/8"': "9.5",
    '0.375"': "9.5",
    "#4": "4.75",
    no.4: "4.75",
    "no. 4": "4.75",
    "#8": "2.36",
    no.8: "2.36",
    "#16": "1.18",
    "#30": "0.6",
    "#50": "0.3",
    "#100": "0.15",
    "#200": "0.075",
    "200": "0.075",
  };
  for (const [k, v] of Object.entries(aliases)) m.set(k.toLowerCase(), v);
  return m;
})();

/** Bailey control-sieve table by NMAS (mm) — course binder summary sheet. */
const CONTROL_BY_NMAS = {
  37.5: { half: 19.0, pcs: 9.5, scs: 2.36, tcs: 0.6 },
  25.0: { half: 12.5, pcs: 4.75, scs: 1.18, tcs: 0.3 },
  19.0: { half: 9.5, pcs: 4.75, scs: 1.18, tcs: 0.3 },
  12.5: { half: 6.35, pcs: 2.36, scs: 0.6, tcs: 0.15 }, // half is non-standard
  9.5: { half: 4.75, pcs: 2.36, scs: 0.6, tcs: 0.15 },
  4.75: { half: 2.36, pcs: 1.18, scs: 0.3, tcs: 0.075 },
};

/** Suggested CA ratio ranges (coarse-graded / OLD CA for fine-graded). */
const CA_RATIO_RANGE = {
  37.5: [0.8, 0.95],
  25.0: [0.7, 0.85],
  19.0: [0.6, 0.75],
  12.5: [0.5, 0.65],
  9.5: [0.4, 0.55],
  4.75: [0.3, 0.45],
};

/** VMA sensitivity midpoints: how much change ≈ 1% VMA (direction notes in notes). */
const VMA_SENSITIVITY = {
  coarse: {
    pcs_pct_per_vma: 4, // Δ%PCS ≈ 4 → ≈1% VMA (range 3–5); ↑PCS often ↓CA volume → depends
    ca_ratio_per_vma: 0.2, // ↑CA ratio → ↑VMA
    fac_per_vma: 0.05, // ↑FAc → ↓VMA (to dip)
    faf_per_vma: 0.05, // ↑FAf → ↓VMA (to dip)
    fac_most_influence: true,
  },
  fine: {
    pcs_pct_per_vma: 6, // Original PCS; ↑%PCS (more fine) → ↑VMA on fine side
    ca_ratio_per_vma: 0.35, // New CA
    fac_per_vma: 0.05, // New FAc
    faf_per_vma: 0.05, // New FAf
    fac_most_influence: true,
  },
  sma: {
    pcs_pct_per_vma: 2,
    ca_ratio_per_vma: 0.2,
    fac_per_vma: 0.1,
    faf_per_vma: 0.1,
    fac_most_influence: false, // PCS / CA volume most influence for SMA
  },
};

const DEFAULT_ACVC = 2.25; // AC volume correction; plant: ±0.1% AC ≈ ∓0.225% Va
const r3 = (n) => (n == null || !Number.isFinite(n) ? null : Math.round(n * 1000) / 1000);
const r2 = (n) => (n == null || !Number.isFinite(n) ? null : Math.round(n * 100) / 100);
const r1 = (n) => (n == null || !Number.isFinite(n) ? null : Math.round(n * 10) / 10);

function mmKey(mm) {
  const n = parseFloat(mm);
  if (!Number.isFinite(n)) return null;
  // normalize to one of our keys when close
  for (const k of Object.keys(SIEVE_MM_TO_LABEL)) {
    if (Math.abs(parseFloat(k) - n) < 1e-6) return k;
  }
  // keep one-decimal or integer-ish
  if (Number.isInteger(n) || Math.abs(n - Math.round(n)) < 1e-9) return String(n.toFixed(1));
  return String(n);
}

/**
 * Normalize a free-form gradation object to { "4.75": 62.2, ... } (% passing).
 * Accepts labels (#4, 3/8"), mm keys, numbers.
 */
export function normalizeGradation(raw) {
  if (!raw || typeof raw !== "object") return {};
  const out = {};
  for (const [k, v] of Object.entries(raw)) {
    const num = typeof v === "number" ? v : parseFloat(String(v).replace(/%/g, ""));
    if (!Number.isFinite(num)) continue;
    const key = String(k).trim().toLowerCase();
    let mm = LABEL_TO_MM.get(key);
    if (!mm) {
      // try stripping "mm"
      const cleaned = key.replace(/\s*mm\s*$/i, "").trim();
      mm = LABEL_TO_MM.get(cleaned) || mmKey(cleaned);
    }
    if (!mm) continue;
    const canon = mmKey(mm) || mm;
    out[canon] = num;
  }
  return out;
}

/** % passing at sieve mm; linear-interpolate in log-sieve space if missing. */
export function passingAt(grad, sieveMm) {
  const target = parseFloat(sieveMm);
  if (!Number.isFinite(target)) return null;
  const canon = mmKey(target);
  if (canon && grad[canon] != null && Number.isFinite(grad[canon])) return grad[canon];
  // exact float key
  for (const [k, v] of Object.entries(grad)) {
    if (Math.abs(parseFloat(k) - target) < 1e-6 && Number.isFinite(v)) return v;
  }
  // interpolate between surrounding sieves
  const pts = Object.entries(grad)
    .map(([k, v]) => [parseFloat(k), v])
    .filter(([mm, v]) => Number.isFinite(mm) && Number.isFinite(v))
    .sort((a, b) => b[0] - a[0]); // coarse → fine
  if (!pts.length) return null;
  if (target >= pts[0][0]) return pts[0][1];
  if (target <= pts[pts.length - 1][0]) return pts[pts.length - 1][1];
  for (let i = 0; i < pts.length - 1; i++) {
    const [mm1, p1] = pts[i];
    const [mm2, p2] = pts[i + 1];
    if (target <= mm1 && target >= mm2) {
      // linear in log(sieve)
      const t = (Math.log(mm1) - Math.log(target)) / (Math.log(mm1) - Math.log(mm2));
      return p1 + t * (p2 - p1);
    }
  }
  return null;
}

/** Closest standard sieve key to a size (mm). Includes 6.35 for 12.5 mm half. */
const CLOSEST_POOL = [
  50, 37.5, 25, 19, 12.5, 9.5, 6.35, 4.75, 2.36, 1.18, 0.6, 0.3, 0.15, 0.075,
];

export function closestSieve(mm) {
  const t = parseFloat(mm);
  let best = CLOSEST_POOL[0];
  let bestD = Math.abs(best - t);
  for (const s of CLOSEST_POOL) {
    const d = Math.abs(s - t);
    if (d < bestD) {
      best = s;
      bestD = d;
    }
  }
  return best;
}

/**
 * Bailey NMAS: first sieve larger than the first sieve that retains >15%.
 * Falls back to largest sieve with <100% passing if structure is incomplete.
 */
export function baileyNmas(grad) {
  const sieves = Object.keys(SIEVE_MM_TO_LABEL)
    .map(parseFloat)
    .sort((a, b) => b - a); // coarse → fine
  let firstRetain15 = null;
  for (const mm of sieves) {
    const p = passingAt(grad, mm);
    if (p == null) continue;
    const retained = 100 - p;
    if (retained > 15) {
      firstRetain15 = mm;
      break;
    }
  }
  if (firstRetain15 == null) {
    // try 10% variant note
    for (const mm of sieves) {
      const p = passingAt(grad, mm);
      if (p != null && 100 - p > 10) {
        firstRetain15 = mm;
        break;
      }
    }
  }
  if (firstRetain15 == null) return null;
  // first sieve larger than firstRetain15
  const larger = sieves.filter((s) => s > firstRetain15).sort((a, b) => a - b);
  const nmas = larger.length ? larger[0] : firstRetain15;
  // snap to known control table keys when close
  for (const known of Object.keys(CONTROL_BY_NMAS).map(parseFloat)) {
    if (Math.abs(known - nmas) < 0.01) return known;
  }
  return nmas;
}

export function controlSieves(nmasMm) {
  const n = parseFloat(nmasMm);
  if (!Number.isFinite(n)) return null;
  if (CONTROL_BY_NMAS[n]) {
    const c = CONTROL_BY_NMAS[n];
    return {
      nmas_mm: n,
      half_mm: c.half,
      pcs_mm: c.pcs,
      scs_mm: c.scs,
      tcs_mm: c.tcs,
      from_table: true,
    };
  }
  // compute from 0.22 / 0.5 rules
  const half = closestSieve(0.5 * n);
  const pcs = closestSieve(0.22 * n);
  const scs = closestSieve(0.22 * pcs);
  const tcs = closestSieve(0.22 * scs);
  return { nmas_mm: n, half_mm: half, pcs_mm: pcs, scs_mm: scs, tcs_mm: tcs, from_table: false };
}

/**
 * Classify mix type from %PCS vs 0.45-power MDL at PCS.
 * Without CUW this is approximate — override with mix_type when known.
 */
export function classifyMixType(grad, controls) {
  if (!controls) return { mix_type: "unknown", reason: "no control sieves" };
  const pcsP = passingAt(grad, controls.pcs_mm);
  if (pcsP == null) return { mix_type: "unknown", reason: "missing %PCS" };
  const nmas = controls.nmas_mm;
  // MDL % passing at PCS ≈ (PCS/NMAS)^0.45 * 100
  const mdl = Math.pow(controls.pcs_mm / nmas, 0.45) * 100;
  // SMA heuristic: very low PCS passing typically < ~30 for surface SMA — rare at BT3
  if (pcsP < 28 && nmas >= 9.5) {
    return {
      mix_type: "sma_candidate",
      reason: `%PCS ${r1(pcsP)} is low (MDL@PCS≈${r1(mdl)}); confirm SMA vs coarse-graded before using SMA sensitivity.`,
      pct_pcs: r1(pcsP),
      mdl_at_pcs: r1(mdl),
    };
  }
  if (pcsP > mdl) {
    return {
      mix_type: "fine",
      reason: `%PCS ${r1(pcsP)} is above 0.45-power MDL@PCS≈${r1(mdl)} → fine-graded (FA in control).`,
      pct_pcs: r1(pcsP),
      mdl_at_pcs: r1(mdl),
    };
  }
  return {
    mix_type: "coarse",
    reason: `%PCS ${r1(pcsP)} is at/below 0.45-power MDL@PCS≈${r1(mdl)} → coarse-graded (CA interlock).`,
    pct_pcs: r1(pcsP),
    mdl_at_pcs: r1(mdl),
  };
}

export function computeRatios(grad, controls) {
  if (!controls) return { error: "controls required" };
  const half = passingAt(grad, controls.half_mm);
  const pcs = passingAt(grad, controls.pcs_mm);
  const scs = passingAt(grad, controls.scs_mm);
  const tcs = passingAt(grad, controls.tcs_mm);
  const sieves = {
    half: { mm: controls.half_mm, label: labelFor(controls.half_mm), pct_passing: r1(half) },
    pcs: { mm: controls.pcs_mm, label: labelFor(controls.pcs_mm), pct_passing: r1(pcs) },
    scs: { mm: controls.scs_mm, label: labelFor(controls.scs_mm), pct_passing: r1(scs) },
    tcs: { mm: controls.tcs_mm, label: labelFor(controls.tcs_mm), pct_passing: r1(tcs) },
  };
  let ca_ratio = null;
  if (half != null && pcs != null && 100 - half !== 0) {
    ca_ratio = (half - pcs) / (100 - half);
  }
  let fac = null;
  if (scs != null && pcs != null && pcs !== 0) fac = scs / pcs;
  let faf = null;
  if (tcs != null && scs != null && scs !== 0) faf = tcs / scs;

  const caRange = CA_RATIO_RANGE[controls.nmas_mm] || null;
  return {
    sieves,
    ca_ratio: r3(ca_ratio),
    fac_ratio: r3(fac),
    faf_ratio: r3(faf),
    interceptors_pct: half != null && pcs != null ? r1(half - pcs) : null,
    pluggers_pct: half != null ? r1(100 - half) : null,
    ca_ratio_suggested_range: caRange,
    fac_suggested_range: [0.35, 0.5],
    faf_suggested_range: [0.35, 0.5],
    notes: [
      "CA Ratio = (%Half − %PCS) / (100 − %Half)  [interceptors / pluggers]",
      "FAc = %SCS / %PCS",
      "FAf = %TCS / %SCS",
      "Avoid FAc or FAf < 0.40 for field compactability (course guideline).",
    ],
  };
}

function labelFor(mm) {
  const k = mmKey(mm);
  if (k && SIEVE_MM_TO_LABEL[k]) return SIEVE_MM_TO_LABEL[k];
  if (Math.abs(mm - 6.35) < 0.01) return "1/4\" (6.35 mm)";
  return `${mm} mm`;
}

/**
 * Renormalize gradation to the minus-PCS fraction (for New ratios on fine-graded mixes).
 * Passing values become % of material finer than original PCS.
 */
export function finePrimaryBlend(grad, originalPcsMm) {
  const pcsP = passingAt(grad, originalPcsMm);
  if (pcsP == null || pcsP <= 0) return { error: "cannot build fine primary blend — missing/zero %PCS" };
  const out = {};
  for (const [k, v] of Object.entries(grad)) {
    const mm = parseFloat(k);
    if (!Number.isFinite(mm) || !Number.isFinite(v)) continue;
    if (mm >= parseFloat(originalPcsMm) - 1e-9) out[k] = 100;
    else out[k] = (v / pcsP) * 100;
  }
  return { gradation: out, original_pcs_passing: pcsP };
}

/** Sieve-by-sieve delta: sample − design (% passing). Positive = sample finer. */
export function sieveDeltas(design, sample) {
  const keys = new Set([...Object.keys(design), ...Object.keys(sample)]);
  const rows = [];
  for (const k of [...keys].sort((a, b) => parseFloat(b) - parseFloat(a))) {
    const d = design[k];
    const s = sample[k];
    if (d == null && s == null) continue;
    const delta = d != null && s != null ? s - d : null;
    rows.push({
      mm: parseFloat(k),
      label: labelFor(parseFloat(k)),
      design: d != null ? r1(d) : null,
      sample: s != null ? r1(s) : null,
      delta_sample_minus_design: delta != null ? r1(delta) : null,
    });
  }
  return rows;
}

/**
 * Estimate ΔVMA from ratio / PCS changes using Bailey rules-of-thumb.
 * Signs: coarse/fine FAc/FAf ↑ → VMA ↓ (until dip); CA ratio ↑ → VMA ↑;
 * PCS %: for CG, more CA (lower %PCS) tends ↑VMA when leaving the dip toward SMA side;
 * for FG, higher %PCS (more fine) tends ↑VMA.
 * These are directional midpoints — not lab predictions.
 */
export function estimateVmaDeltas(mixType, designRatios, sampleRatios, designPcs, samplePcs) {
  const key = mixType === "sma" || mixType === "sma_candidate" ? "sma" : mixType === "fine" ? "fine" : "coarse";
  const sens = VMA_SENSITIVITY[key];
  const out = { mix_type_used: key, components: [], total_approx_vma: null, caveats: [] };

  const dPcs = designPcs != null && samplePcs != null ? samplePcs - designPcs : null;
  if (dPcs != null && sens.pcs_pct_per_vma) {
    // Fine: ↑%PCS → ↑VMA; Coarse/SMA: ↑%PCS (finer) → ↓VMA (moving left/toward fine side from CA interlock)
    const sign = key === "fine" ? 1 : -1;
    const dv = sign * (dPcs / sens.pcs_pct_per_vma);
    out.components.push({
      lever: key === "fine" ? "Original %PCS" : "%PCS (CA volume proxy)",
      delta_input: r2(dPcs),
      unit: "% passing",
      approx_delta_vma: r2(dv),
      rule: `${sens.pcs_pct_per_vma}% ΔPCS ≈ 1% VMA (${key})`,
    });
  }

  const pair = (name, dVal, sVal, per, vmaSign, note) => {
    if (dVal == null || sVal == null || !per) return;
    const di = sVal - dVal;
    const dv = vmaSign * (di / per);
    out.components.push({
      lever: name,
      delta_input: r3(di),
      unit: "ratio",
      approx_delta_vma: r2(dv),
      rule: note,
    });
  };

  pair(
    key === "fine" ? "New CA ratio" : "CA ratio",
    designRatios.ca_ratio,
    sampleRatios.ca_ratio,
    sens.ca_ratio_per_vma,
    +1,
    `+${sens.ca_ratio_per_vma} CA ratio ≈ +1% VMA`
  );
  pair(
    key === "fine" ? "New FAc" : "FAc",
    designRatios.fac_ratio,
    sampleRatios.fac_ratio,
    sens.fac_per_vma,
    -1,
    `+${sens.fac_per_vma} FAc ≈ −1% VMA (to the dip; beyond dip reverses)`
  );
  pair(
    key === "fine" ? "New FAf" : "FAf",
    designRatios.faf_ratio,
    sampleRatios.faf_ratio,
    sens.faf_per_vma,
    -1,
    `+${sens.faf_per_vma} FAf ≈ −1% VMA (to the dip; beyond dip reverses)`
  );

  // Simple sum is a rough combined signal — ratios are not independent
  const sum = out.components.reduce((a, c) => a + (c.approx_delta_vma || 0), 0);
  out.total_approx_vma = r2(sum);
  out.caveats.push(
    "Components are NOT independent (changing bins moves several levers at once). Use direction + largest component, not the sum as a precise prediction."
  );
  out.caveats.push(
    "Rules-of-thumb assume similar particle shape/texture/strength; stockpile quality shifts are outside this math."
  );
  if (sens.fac_most_influence) {
    out.caveats.push("For dense-graded (fine/coarse), FAc usually has the most influence on VMA of the three ratios.");
  }
  return out;
}

/** Plant / ACVC estimate: ΔVa ≈ −ACVC × ΔAC (total AC % of mix). */
export function estimateVaFromAc(deltaAc, acvc = DEFAULT_ACVC) {
  const d = parseFloat(deltaAc);
  const f = parseFloat(acvc) || DEFAULT_ACVC;
  if (!Number.isFinite(d)) return { error: "delta_ac required" };
  return {
    delta_ac: r2(d),
    acvc: f,
    approx_delta_va: r2(-f * d),
    plant_rule: "±0.1% AC ≈ ∓0.22–0.25% Va (lab-confirmed BT3; ACVC 2.25 mid).",
    notes: [
      "Assumes VMA / aggregate structure fixed — binder volume lever only.",
      "Plant meters RAP binder; targets are total AC — do not double-count RAP binder when RAP % changes.",
      "If voids and dust are BOTH low, check AC/Gmm measurement AND gradation — not AC alone.",
    ],
  };
}

/**
 * Full analysis: design vs sample (optional), ratios, deltas, VMA/AC estimates.
 */
export function analyze(input = {}) {
  const design = normalizeGradation(input.design_gradation || input.design || {});
  const sample = normalizeGradation(input.sample_gradation || input.sample || {});
  const hasDesign = Object.keys(design).length > 0;
  const hasSample = Object.keys(sample).length > 0;
  if (!hasDesign && !hasSample) {
    return { error: "Provide design_gradation and/or sample_gradation (% passing by sieve)." };
  }

  const primary = hasSample ? sample : design;
  const nmas =
    input.nmas_mm != null && Number.isFinite(parseFloat(input.nmas_mm))
      ? parseFloat(input.nmas_mm)
      : baileyNmas(hasDesign ? design : primary);
  if (nmas == null) {
    return { error: "Could not determine NMAS — supply nmas_mm or a fuller gradation." };
  }

  const controls = controlSieves(nmas);
  let mixType = String(input.mix_type || "auto").toLowerCase();
  let classification = classifyMixType(hasDesign ? design : primary, controls);
  if (mixType === "auto" || mixType === "") {
    mixType = classification.mix_type === "sma_candidate" ? "coarse" : classification.mix_type;
    if (mixType === "unknown") mixType = "coarse";
  } else if (["fine", "coarse", "sma"].includes(mixType)) {
    classification = { ...classification, mix_type: mixType, reason: `user override: ${mixType}` };
  }

  const designRatios = hasDesign ? computeRatios(design, controls) : null;
  const sampleRatios = hasSample ? computeRatios(sample, controls) : null;

  // Fine-graded New ratios on minus-PCS primary blend
  let newRatios = null;
  if (mixType === "fine") {
    const baseGrad = hasSample ? sample : design;
    const primaryBlend = finePrimaryBlend(baseGrad, controls.pcs_mm);
    if (!primaryBlend.error) {
      const newNmas = baileyNmas(primaryBlend.gradation);
      const newControls = newNmas != null ? controlSieves(newNmas) : null;
      if (newControls) {
        newRatios = {
          new_nmas_mm: newNmas,
          new_controls: newControls,
          sample_or_primary: computeRatios(primaryBlend.gradation, newControls),
        };
        if (hasDesign && hasSample) {
          const dPrimary = finePrimaryBlend(design, controls.pcs_mm);
          if (!dPrimary.error) {
            newRatios.design = computeRatios(dPrimary.gradation, newControls);
          }
        }
      }
    } else {
      newRatios = { error: primaryBlend.error };
    }
  }

  const deltas = hasDesign && hasSample ? sieveDeltas(design, sample) : null;

  // VMA estimate from original ratios; for fine, prefer New ratios when available
  let vmaEstimate = null;
  if (hasDesign && hasSample && designRatios && sampleRatios) {
    if (mixType === "fine" && newRatios && newRatios.design && newRatios.sample_or_primary) {
      vmaEstimate = estimateVmaDeltas(
        "fine",
        newRatios.design,
        newRatios.sample_or_primary,
        designRatios.sieves.pcs.pct_passing,
        sampleRatios.sieves.pcs.pct_passing
      );
      vmaEstimate.note = "Fine-graded: VMA sensitivity uses New ratios on minus-PCS blend + Original %PCS.";
    } else {
      vmaEstimate = estimateVmaDeltas(
        mixType,
        designRatios,
        sampleRatios,
        designRatios.sieves.pcs.pct_passing,
        sampleRatios.sieves.pcs.pct_passing
      );
    }
  }

  const acvc = input.acvc != null ? parseFloat(input.acvc) : DEFAULT_ACVC;
  let acEffect = null;
  const designAc = num(input.design_ac);
  const sampleAc = num(input.sample_ac);
  if (designAc != null && sampleAc != null) {
    acEffect = estimateVaFromAc(sampleAc - designAc, acvc);
    acEffect.design_ac = designAc;
    acEffect.sample_ac = sampleAc;
  } else if (input.proposed_ac_delta != null) {
    acEffect = estimateVaFromAc(input.proposed_ac_delta, acvc);
  }

  const designVa = num(input.design_va);
  const sampleVa = num(input.sample_va);
  const designVma = num(input.design_vma);
  const sampleVma = num(input.sample_vma);

  const volumetric = {};
  if (designVa != null || sampleVa != null) {
    volumetric.va = {
      design: designVa,
      sample: sampleVa,
      delta: designVa != null && sampleVa != null ? r2(sampleVa - designVa) : null,
    };
  }
  if (designVma != null || sampleVma != null) {
    volumetric.vma = {
      design: designVma,
      sample: sampleVma,
      delta: designVma != null && sampleVma != null ? r2(sampleVma - designVma) : null,
    };
  }
  if (volumetric.va && volumetric.va.delta != null && acEffect && acEffect.approx_delta_va != null) {
    volumetric.va_residual_after_ac = r2(volumetric.va.delta - acEffect.approx_delta_va);
    volumetric.va_residual_note =
      "Sample ΔVa minus AC-only estimate. Large residual → look at gradation/packing (or Gmm/AC measurement error), not binder alone.";
  }

  // Flag biggest sieve moves on control sieves
  const controlFlags = [];
  if (deltas) {
    for (const name of ["half", "pcs", "scs", "tcs"]) {
      const mm = controls[`${name}_mm`];
      const row = deltas.find((d) => Math.abs(d.mm - mm) < 0.01);
      if (row && row.delta_sample_minus_design != null && Math.abs(row.delta_sample_minus_design) >= 1.0) {
        controlFlags.push({
          control: name.toUpperCase(),
          label: row.label,
          delta_pct: row.delta_sample_minus_design,
          meaning: row.delta_sample_minus_design > 0 ? "sample finer than design" : "sample coarser than design",
        });
      }
    }
    const dust = deltas.find((d) => Math.abs(d.mm - 0.075) < 0.001);
    if (dust && dust.delta_sample_minus_design != null && Math.abs(dust.delta_sample_minus_design) >= 0.3) {
      controlFlags.push({
        control: "#200",
        label: "#200",
        delta_pct: dust.delta_sample_minus_design,
        meaning: dust.delta_sample_minus_design > 0 ? "more dust than design" : "less dust than design",
      });
    }
  }

  return {
    status: "ok",
    nmas_mm: nmas,
    nmas_label: labelFor(nmas),
    controls: {
      half: { mm: controls.half_mm, label: labelFor(controls.half_mm) },
      pcs: { mm: controls.pcs_mm, label: labelFor(controls.pcs_mm) },
      scs: { mm: controls.scs_mm, label: labelFor(controls.scs_mm) },
      tcs: { mm: controls.tcs_mm, label: labelFor(controls.tcs_mm) },
      from_table: controls.from_table,
    },
    mix_classification: classification,
    mix_type_used: mixType,
    design_ratios: designRatios,
    sample_ratios: sampleRatios,
    new_ratios_fine_graded: newRatios,
    sieve_deltas: deltas,
    control_sieve_flags: controlFlags,
    vma_sensitivity_estimate: vmaEstimate,
    ac_void_estimate: acEffect,
    volumetric_inputs: Object.keys(volumetric).length ? volumetric : undefined,
    how_to_use: [
      "Cite these numbers in the answer; do not re-derive ratios by hand.",
      "Lead with the largest control-sieve flag and the dominant VMA lever (often FAc for dense-graded).",
      "Give bin moves that drive that lever; size conservatively on a single sample.",
      "If AC delta explains most of ΔVa, weigh the binder lever alongside gradation.",
    ],
    citations: [
      "Bailey: CA Ratio = (%Half−%PCS)/(100−%Half); FAc=%SCS/%PCS; FAf=%TCS/%SCS",
      "PCS = closest sieve to 0.22×NMAS; Half ≈ 0.5×NMAS",
      "VMA RoT CG: 4% PCS / 0.20 CA / 0.05 FAc / 0.05 FAf ≈ 1% VMA",
      "VMA RoT FG: 6% Orig PCS / 0.35 New CA / 0.05 New FAc-FAf ≈ 1% VMA",
      "ACVC 2.25; plant ±0.1% AC ≈ ∓0.22–0.25% Va",
    ],
  };
}

function num(v) {
  if (v == null || v === "") return null;
  const n = typeof v === "number" ? v : parseFloat(String(v).replace(/%/g, ""));
  return Number.isFinite(n) ? n : null;
}

/**
 * Tool entrypoint — routes action.
 * @param {object} input
 * @param {object} [ctx] optional { getJmfRecord(id) }
 */
export function baileyCalc(input = {}, ctx = {}) {
  const action = String(input.action || "analyze").toLowerCase();

  // Optional JMF hydrate for design side
  if (input.jmf_id && ctx.getJmfRecord) {
    const rec = ctx.getJmfRecord(String(input.jmf_id).trim());
    if (!rec) {
      return {
        error: `No JMF matched "${input.jmf_id}".`,
        hint: "Pass design_gradation manually or a valid jmf_id.",
      };
    }
    if (!input.design_gradation && rec.jmf_gradation_mm) {
      input = {
        ...input,
        design_gradation: rec.jmf_gradation_mm,
        design_ac:
          input.design_ac ??
          (rec.recycle && rec.recycle.total_ac_in_mix_pct != null
            ? rec.recycle.total_ac_in_mix_pct
            : (rec.design_volumetrics || {}).optimum_ac_pct),
        design_va: input.design_va ?? (rec.design_volumetrics || {}).air_voids_pct,
        design_vma: input.design_vma ?? (rec.design_volumetrics || {}).vma_pct,
        _jmf: {
          jmf_id: rec.jmf_id,
          name: rec.source_file || rec.mix_description,
          gmm: (rec.design_volumetrics || {}).gmm,
          bins: (rec.aggregates || []).map((a) => ({
            pct: a.percent,
            type: a.agg_type,
            producer: a.producer,
          })),
          rap_pct: rec.recycle ? rec.recycle.rap_total_pct : null,
        },
      };
    }
  }

  if (action === "ac_effect") {
    const d =
      input.proposed_ac_delta != null
        ? input.proposed_ac_delta
        : num(input.sample_ac) != null && num(input.design_ac) != null
          ? num(input.sample_ac) - num(input.design_ac)
          : null;
    if (d == null) {
      return { error: "ac_effect needs proposed_ac_delta, or design_ac + sample_ac." };
    }
    return { status: "ok", action: "ac_effect", ...estimateVaFromAc(d, input.acvc) };
  }

  if (action === "ratios") {
    const grad = normalizeGradation(input.gradation || input.sample_gradation || input.design_gradation || {});
    if (!Object.keys(grad).length) return { error: "ratios needs a gradation object." };
    const nmas = input.nmas_mm != null ? parseFloat(input.nmas_mm) : baileyNmas(grad);
    if (nmas == null) return { error: "Could not determine NMAS." };
    const controls = controlSieves(nmas);
    const classification = classifyMixType(grad, controls);
    return {
      status: "ok",
      action: "ratios",
      nmas_mm: nmas,
      controls,
      mix_classification: classification,
      ratios: computeRatios(grad, controls),
    };
  }

  // default analyze
  const result = analyze(input);
  if (input._jmf && result.status === "ok") result.jmf_used = input._jmf;
  return result;
}

export default baileyCalc;
