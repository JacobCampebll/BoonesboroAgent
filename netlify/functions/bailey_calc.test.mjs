// Smoke tests for bailey_calc.mjs — run: node bailey_calc.test.mjs
import {
  baileyCalc,
  computeRatios,
  controlSieves,
  baileyNmas,
  estimateVaFromAc,
  normalizeGradation,
  analyze,
} from "./bailey_calc.mjs";

let failed = 0;
function assert(cond, msg) {
  if (!cond) {
    console.error("FAIL:", msg);
    failed++;
  } else {
    console.log("ok:", msg);
  }
}
function almost(a, b, eps = 0.002) {
  return Math.abs(a - b) <= eps;
}

// Course binder example — 9.5 mm NMAS coarse-graded
const ex = {
  "9.5": 100,
  "4.75": 57.5,
  "2.36": 36.2,
  "0.6": 21.2,
  "0.15": 5.3,
  "0.075": 4.0,
};
const nmas = baileyNmas(ex);
assert(nmas === 9.5, `NMAS from example gradation → ${nmas}`);
const ctrl = controlSieves(9.5);
assert(ctrl.half === 4.75 && ctrl.pcs === 2.36 && ctrl.scs === 0.6 && ctrl.tcs === 0.15, "control sieves for 9.5 mm");
const ratios = computeRatios(ex, ctrl);
assert(almost(ratios.ca_ratio, 0.501), `CA ratio ${ratios.ca_ratio} ≈ 0.501`);
assert(almost(ratios.fac_ratio, 0.586), `FAc ${ratios.fac_ratio} ≈ 0.586`);
assert(almost(ratios.faf_ratio, 0.25), `FAf ${ratios.faf_ratio} ≈ 0.250`);

// Label normalization
const norm = normalizeGradation({ "#4": 62, '3/8"': 94, "#200": 7.1 });
assert(norm["4.75"] === 62 && norm["9.5"] === 94 && norm["0.075"] === 7.1, "label → mm normalize");

// AC / Va plant rule
const ac = estimateVaFromAc(0.1, 2.25);
assert(almost(ac.approx_delta_va, -0.225), `+0.1 AC → ΔVa ${ac.approx_delta_va}`);
const ac2 = estimateVaFromAc(-0.1, 2.25);
assert(almost(ac2.approx_delta_va, 0.225), `-0.1 AC → ΔVa ${ac2.approx_delta_va}`);

// Analyze design vs finer sample
const design = {
  "12.5": 100, "9.5": 94, "4.75": 62, "2.36": 39, "1.18": 26,
  "0.6": 18, "0.3": 11, "0.15": 8, "0.075": 7,
};
const sample = {
  "12.5": 100, "9.5": 95, "4.75": 65, "2.36": 43, "1.18": 29,
  "0.6": 21, "0.3": 13, "0.15": 9, "0.075": 8,
};
const a = analyze({
  design_gradation: design,
  sample_gradation: sample,
  design_ac: 6.0,
  sample_ac: 6.2,
  design_va: 3.5,
  sample_va: 2.8,
  mix_type: "coarse",
  nmas_mm: 9.5,
});
assert(a.status === "ok", "analyze status ok");
assert(a.sample_ratios && a.design_ratios, "both ratio sets present");
assert(a.sieve_deltas && a.sieve_deltas.length > 0, "sieve deltas present");
assert(a.ac_void_estimate && almost(a.ac_void_estimate.approx_delta_va, -0.45), "AC explains ~−0.45 Va");
assert(a.control_sieve_flags && a.control_sieve_flags.length >= 1, "flags control sieve moves");

// Tool entry ac_effect
const t = baileyCalc({ action: "ac_effect", proposed_ac_delta: -0.2 });
assert(t.status === "ok" && almost(t.approx_delta_va, 0.45), "ac_effect tool path");

// Missing input
const bad = baileyCalc({ action: "analyze" });
assert(bad.error, "analyze without gradation errors");

if (failed) {
  console.error(`\n${failed} failure(s)`);
  process.exit(1);
}
console.log("\nAll bailey_calc smoke tests passed.");
