export default {
 "built": "2026-07-15",
 "pilot": true,
 "plant_folders_processed": [
  "BT3"
 ],
 "record_count": 12,
 "conventions": {
  "sieves": "mm, keys of jmf_gradation_mm as strings of numeric mm",
  "jmf_gradation": "stored cell values (decimals), per Jake 2026-07-15; the form DISPLAYS these rounded to whole % (except #200 at 0.1%)",
  "numbers": "numeric JSON types",
  "verified": "all records start false",
  "rounding": "gravities/ratios 3 dp, percents 1 dp, applied to formula-precision floats only",
  "approval_date": "DATE REL. (state release date) - confirm this is what you treat as approval"
 },
 "records": [
  {
   "jmf_id": "00260116",
   "verified": false,
   "source_file": "CL3 0.38A 64-22 Gaddie Shamrock.xlsm",
   "plant_folder": "BT3",
   "plant_name": "The Allen Company @ Boonesborough",
   "form_version": "Ver 11.3",
   "cid_document": "252112",
   "cid_folder_path": null,
   "cid_source": "document_only",
   "sm_id_num": "07640AMD260116",
   "mix_id_num": "00260116",
   "mix_type_string": "00385 CL3 ASPH SURF 0.38A PG64-22",
   "bid_code": "00385",
   "mix_description": "CL3 ASPH SURF 0.38A PG64-22",
   "submittal_type": "New Mix Design",
   "test_method": "AASHTO M323 & R35",
   "esal_class": 3,
   "gyrations": {
    "nini": 7,
    "ndes": 65,
    "nmax": 105
   },
   "binder": {
    "grade": "PG64-22",
    "source": "ATS Asphalt Terminal @ Lexington",
    "producer_no": "LAP100201",
    "material_code": 60075
   },
   "mix_comp_temp_f": "300/265 (deg. F)",
   "county": "Madison",
   "fed_state_project": "FD05 076 0025 016-021",
   "project_item_ref": "MP07600252501 (0160)",
   "contractor_producer_no": "AMP070302",
   "dates": {
    "letting": "2025-07-24",
    "received": "2026-03-18",
    "released": "2026-03-19"
   },
   "approval_date": "2026-03-19",
   "submitted_by": "cowsley",
   "approved_by": "tsallee",
   "total_tons": 15200,
   "aggregates": [
    {
     "producer_no": "AGP016501",
     "producer": "Gaddie Shamrock @ Columbia",
     "material_code": 10405,
     "agg_type": "LS #8's Class B",
     "gsb": 2.64,
     "percent": 40
    },
    {
     "producer_no": "AGP016501",
     "producer": "Gaddie Shamrock @ Columbia",
     "material_code": 10437,
     "agg_type": "LSS Anti-Skid B (Unwashed)",
     "gsb": 2.64,
     "percent": 10
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10293,
     "agg_type": "LS #10's (Unwashed)",
     "gsb": 2.66,
     "percent": 15
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10290,
     "agg_type": "LS #10's (Washed)",
     "gsb": 2.66,
     "percent": 15
    },
    {
     "producer_no": "AGP012102",
     "producer": "Watson Gravel @ Ross, Ohio",
     "material_code": 10436,
     "agg_type": "Natural Sand",
     "gsb": 2.64,
     "percent": 10
    },
    {
     "producer_no": "AMP070302",
     "producer": "The Allen Company @ Boonesboro",
     "material_code": 24033,
     "agg_type": "Fine RAP",
     "gsb": 2.688,
     "percent": 10
    }
   ],
   "recycle": {
    "rap_total_pct": 10,
    "ac_in_recycle_pct": 4.5,
    "virgin_ac_in_mix_pct": 5.5,
    "recycle_ac_in_mix_pct": 0.5,
    "total_ac_in_mix_pct": 6
   },
   "jmf_gradation_mm": {
    "50.0": 100,
    "37.5": 100,
    "25.0": 100,
    "19.0": 100,
    "12.5": 100,
    "9.5": 94.2,
    "4.75": 62.2,
    "2.36": 39.2,
    "1.18": 25.7,
    "0.6": 17.9,
    "0.3": 11.2,
    "0.15": 8.3,
    "0.075": 7.1
   },
   "design_volumetrics": {
    "optimum_ac_pct": 6,
    "air_voids_pct": 3.5,
    "vma_pct": 16.3,
    "vfa_pct": 78,
    "da_ratio": 1.3,
    "eff_ac_pct": 5.5,
    "abs_ac_pct": 0.5,
    "gmm": 2.448,
    "gsb_blend": 2.651,
    "gse": 2.684,
    "unit_weight_pcf": 147.1,
    "film_thickness_um": 9.8,
    "pct_gmm_at_nini": 86.5,
    "pct_gmm_at_nmax": 97.9,
    "fine_agg_angularity_pct": 45,
    "sand_equivalent_pct": 63,
    "flat_elongated_pct": 3,
    "coarse_agg_angularity": "100/100",
    "tsr_pct": 79.5,
    "antistrip_additive": "None Required"
   },
   "project_items": [
    {
     "project_number": "MP07600252501",
     "line_item": "0160",
     "represented_quantity": 15200,
     "unit": "TON"
    }
   ],
   "status": "active",
   "flags": [
    "3 designs share CID 252112 + bid code 00385 (['00260002', '00260116', '00260175']); all left active - mark superseded manually if any were replaced (newest released: 00260175)"
   ],
   "concurrent_designs": [
    "00260002",
    "00260175"
   ]
  },
  {
   "jmf_id": "00260002",
   "verified": false,
   "source_file": "CL3 0.38A 64-22 Greensburg.xlsm",
   "plant_folder": "BT3",
   "plant_name": "The Allen Company @ Boonesborough",
   "form_version": "Ver 11.3",
   "cid_document": "252112",
   "cid_folder_path": null,
   "cid_source": "document_only",
   "sm_id_num": "07640AMD260002",
   "mix_id_num": "00260002",
   "mix_type_string": "00385 CL3 ASPH SURF 0.38A PG64-22",
   "bid_code": "00385",
   "mix_description": "CL3 ASPH SURF 0.38A PG64-22",
   "submittal_type": "Ref. Mix Design (with changes)-different proj.",
   "test_method": "AASHTO M323 & R35",
   "esal_class": 3,
   "gyrations": {
    "nini": 7,
    "ndes": 65,
    "nmax": 105
   },
   "binder": {
    "grade": "PG64-22",
    "source": "ATS Asphalt Terminal @ Lexington",
    "producer_no": "LAP100201",
    "material_code": 60075
   },
   "mix_comp_temp_f": "300/265 (deg. F)",
   "county": "Madison",
   "fed_state_project": "FD05 076 0025 016-021",
   "project_item_ref": "MP07600252501 (0160)",
   "contractor_producer_no": "AMP070302",
   "dates": {
    "letting": "2025-07-24",
    "received": "2025-10-30",
    "released": "2026-01-05"
   },
   "approval_date": "2026-01-05",
   "submitted_by": "cowsley",
   "approved_by": "tsallee",
   "total_tons": 15200,
   "aggregates": [
    {
     "producer_no": "AGP004401",
     "producer": "Haydon Materials, LLC @ Greensburg",
     "material_code": 10415,
     "agg_type": "Siltstone #9M's",
     "gsb": 2.61,
     "percent": 28
    },
    {
     "producer_no": "AGP027501",
     "producer": "Haydon Materials, LLC-Airport Rd @ Bardstown",
     "material_code": 10290,
     "agg_type": "Dol. #10's Washed",
     "gsb": 2.69,
     "percent": 10
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10293,
     "agg_type": "LS #10's (Unwashed)",
     "gsb": 2.67,
     "percent": 12
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10290,
     "agg_type": "LS #10's (Washed)",
     "gsb": 2.67,
     "percent": 21
    },
    {
     "producer_no": "AGP012102",
     "producer": "Watson Gravel @ Ross, Ohio",
     "material_code": 10436,
     "agg_type": "Natural Sand",
     "gsb": 2.64,
     "percent": 15
    },
    {
     "producer_no": "AMP070302",
     "producer": "The Allen Company @ Boonesboro",
     "material_code": 24033,
     "agg_type": "Fine RAP",
     "gsb": 2.673,
     "percent": 14
    }
   ],
   "recycle": {
    "rap_total_pct": 14,
    "ac_in_recycle_pct": 4.5,
    "virgin_ac_in_mix_pct": 5.4,
    "recycle_ac_in_mix_pct": 0.6,
    "total_ac_in_mix_pct": 6
   },
   "jmf_gradation_mm": {
    "50.0": 100,
    "37.5": 100,
    "25.0": 100,
    "19.0": 100,
    "12.5": 100,
    "9.5": 97,
    "4.75": 68.6,
    "2.36": 46.2,
    "1.18": 30.3,
    "0.6": 20.5,
    "0.3": 11.6,
    "0.15": 8.2,
    "0.075": 6.8
   },
   "design_volumetrics": {
    "optimum_ac_pct": 6,
    "air_voids_pct": 3.6,
    "vma_pct": 16.4,
    "vfa_pct": 78,
    "da_ratio": 1.2,
    "eff_ac_pct": 5.6,
    "abs_ac_pct": 0.4,
    "gmm": 2.448,
    "gsb_blend": 2.651,
    "gse": 2.684,
    "unit_weight_pcf": 147.2,
    "film_thickness_um": 9.8,
    "pct_gmm_at_nini": 87.1,
    "pct_gmm_at_nmax": 98.3,
    "fine_agg_angularity_pct": 45,
    "sand_equivalent_pct": 60,
    "flat_elongated_pct": 3,
    "coarse_agg_angularity": "100/100",
    "tsr_pct": 79.7,
    "antistrip_additive": "None Required"
   },
   "project_items": [
    {
     "project_number": "MP07600252501",
     "line_item": "0160",
     "represented_quantity": 15200,
     "unit": "TON"
    }
   ],
   "status": "active",
   "flags": [
    "3 designs share CID 252112 + bid code 00385 (['00260002', '00260116', '00260175']); all left active - mark superseded manually if any were replaced (newest released: 00260175)"
   ],
   "concurrent_designs": [
    "00260116",
    "00260175"
   ]
  },
  {
   "jmf_id": "00260175",
   "verified": false,
   "source_file": "CL3 0.38A 64-22 Haydon.xlsm",
   "plant_folder": "BT3",
   "plant_name": "The Allen Company @ Boonesborough",
   "form_version": "Ver 11.3",
   "cid_document": "252112",
   "cid_folder_path": null,
   "cid_source": "document_only",
   "sm_id_num": "07640AMD260175",
   "mix_id_num": "00260175",
   "mix_type_string": "00385 CL3 ASPH SURF 0.38A PG64-22",
   "bid_code": "00385",
   "mix_description": "CL3 ASPH SURF 0.38A PG64-22",
   "submittal_type": "New Mix Design",
   "test_method": "AASHTO M323 & R35",
   "esal_class": 3,
   "gyrations": {
    "nini": 7,
    "ndes": 65,
    "nmax": 105
   },
   "binder": {
    "grade": "PG64-22",
    "source": "ATS Asphalt Terminal @ Lexington",
    "producer_no": "LAP100201",
    "material_code": 60075
   },
   "mix_comp_temp_f": "300/265 (deg. F)",
   "county": "Madison",
   "fed_state_project": "FD05 076 0025 016-021",
   "project_item_ref": "MP07600252501 (0160)",
   "contractor_producer_no": "AMP070302",
   "dates": {
    "letting": "2025-07-24",
    "received": "2026-04-07",
    "released": "2026-04-10"
   },
   "approval_date": "2026-04-10",
   "submitted_by": "cowsley",
   "approved_by": "tsallee",
   "total_tons": 15200,
   "aggregates": [
    {
     "producer_no": "AGP027501",
     "producer": "Haydon Materials @ Airport Rd.",
     "material_code": 10400,
     "agg_type": "Dolomite #8's Class A",
     "gsb": 2.66,
     "percent": 44
    },
    {
     "producer_no": "AGP027501",
     "producer": "Haydon Materials @ Airport Rd.",
     "material_code": 10290,
     "agg_type": "Dol. #10's Washed",
     "gsb": 2.69,
     "percent": 13
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10290,
     "agg_type": "LS #10's (Washed)",
     "gsb": 2.67,
     "percent": 17
    },
    {
     "producer_no": "AGP012102",
     "producer": "Watson Gravel @ Ross, Ohio",
     "material_code": 10436,
     "agg_type": "Natural Sand",
     "gsb": 2.64,
     "percent": 13
    },
    {
     "producer_no": "AMP070302",
     "producer": "The Allen Company @ Boonesboro",
     "material_code": 24033,
     "agg_type": "Fine RAP",
     "gsb": 2.693,
     "percent": 13
    }
   ],
   "recycle": {
    "rap_total_pct": 13,
    "ac_in_recycle_pct": 4.8,
    "virgin_ac_in_mix_pct": 5.4,
    "recycle_ac_in_mix_pct": 0.6,
    "total_ac_in_mix_pct": 6
   },
   "jmf_gradation_mm": {
    "50.0": 100,
    "37.5": 100,
    "25.0": 100,
    "19.0": 100,
    "12.5": 100,
    "9.5": 89.6,
    "4.75": 56.1,
    "2.36": 36.6,
    "1.18": 24.8,
    "0.6": 17.2,
    "0.3": 10.2,
    "0.15": 7.3,
    "0.075": 6.1
   },
   "design_volumetrics": {
    "optimum_ac_pct": 6,
    "air_voids_pct": 3.5,
    "vma_pct": 16,
    "vfa_pct": 78,
    "da_ratio": 1.2,
    "eff_ac_pct": 5.4,
    "abs_ac_pct": 0.6,
    "gmm": 2.471,
    "design_gmb": 2.384,
    "gsb_blend": 2.667,
    "gse": 2.713,
    "unit_weight_pcf": 148.6,
    "film_thickness_um": 10.2,
    "pct_gmm_at_nini": 87.5,
    "pct_gmm_at_nmax": 98.0,
    "fine_agg_angularity_pct": 45,
    "sand_equivalent_pct": 68,
    "flat_elongated_pct": 3,
    "coarse_agg_angularity": "100/100",
    "tsr_pct": 80.0,
    "antistrip_additive": "None Required"
   },
   "project_items": [
    {
     "project_number": "MP07600252501",
     "line_item": "0160",
     "represented_quantity": 15200,
     "unit": "TON"
    }
   ],
   "status": "active",
   "flags": [
    "3 designs share CID 252112 + bid code 00385 (['00260002', '00260116', '00260175']); all left active - mark superseded manually if any were replaced (newest released: 00260175)"
   ],
   "concurrent_designs": [
    "00260002",
    "00260116"
   ]
  },
  {
   "jmf_id": "00260316",
   "verified": false,
   "source_file": "CL3 0.38B 64-22 Haydon.xlsm",
   "plant_folder": "BT3",
   "plant_name": "The Allen Company @ Boonesborough",
   "form_version": "Ver 12.1",
   "cid_document": "262120",
   "cid_folder_path": null,
   "cid_source": "document_only",
   "sm_id_num": "07640AMD260316",
   "mix_id_num": "00260316",
   "mix_type_string": "00388 CL3 ASPH SURF 0.38B PG64-22",
   "bid_code": "00388",
   "mix_description": "CL3 ASPH SURF 0.38B PG64-22",
   "submittal_type": "New Mix Design",
   "test_method": "AASHTO M323 & R35",
   "esal_class": 3,
   "gyrations": {
    "nini": 7,
    "ndes": 65,
    "nmax": 105
   },
   "binder": {
    "grade": "PG64-22",
    "source": "ATS Asphalt Terminal @ Lexington",
    "producer_no": "LAP100201",
    "material_code": 60075
   },
   "mix_comp_temp_f": "300/265 (deg. F)",
   "county": "Madison",
   "fed_state_project": "076GR26P009-FD05",
   "project_item_ref": "MP07606272601 (0165)",
   "contractor_producer_no": "AMP070302",
   "dates": {
    "letting": "2026-02-19",
    "received": "2026-05-28",
    "released": "2026-05-29"
   },
   "approval_date": "2026-05-29",
   "submitted_by": "cowsley",
   "approved_by": "tsallee",
   "total_tons": 7525,
   "aggregates": [
    {
     "producer_no": "AGP027501",
     "producer": "Haydon Mateirals @ Airport RD",
     "material_code": 10395,
     "agg_type": "Dolomite #8's",
     "gsb": 2.66,
     "percent": 24
    },
    {
     "producer_no": "AGP027501",
     "producer": "Haydon Mateirals @ Airport RD",
     "material_code": 10290,
     "agg_type": "Dol. #10's Washed",
     "gsb": 2.68,
     "percent": 10
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10395,
     "agg_type": "Limestone #8's",
     "gsb": 2.67,
     "percent": 15
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10290,
     "agg_type": "LS #10's (Washed)",
     "gsb": 2.67,
     "percent": 25
    },
    {
     "producer_no": "AGP012102",
     "producer": "Watson Gravel @ Ross, Ohio",
     "material_code": 10436,
     "agg_type": "Natural Sand",
     "gsb": 2.64,
     "percent": 10
    },
    {
     "producer_no": "AMP070302",
     "producer": "The Allen Company @ Boonesboro",
     "material_code": 24033,
     "agg_type": "Fine RAP",
     "gsb": 2.68,
     "percent": 16
    }
   ],
   "recycle": {
    "rap_total_pct": 16,
    "ac_in_recycle_pct": 0,
    "virgin_ac_in_mix_pct": 0,
    "recycle_ac_in_mix_pct": 0,
    "total_ac_in_mix_pct": 0
   },
   "jmf_gradation_mm": {
    "50.0": 100,
    "37.5": 100,
    "25.0": 100,
    "19.0": 100,
    "12.5": 100,
    "9.5": 91.5,
    "4.75": 59.4,
    "2.36": 37.5,
    "1.18": 23.5,
    "0.6": 16.4,
    "0.3": 10.4,
    "0.15": 7.8,
    "0.075": 6.7
   },
   "design_volumetrics": {
    "optimum_ac_pct": 6,
    "air_voids_pct": 3.6,
    "vma_pct": 16,
    "vfa_pct": 78,
    "da_ratio": 1.2,
    "eff_ac_pct": 5.4,
    "abs_ac_pct": 0.6,
    "gmm": 2.469,
    "gsb_blend": 2.667,
    "gse": 2.711,
    "unit_weight_pcf": 148.5,
    "film_thickness_um": 9.8,
    "pct_gmm_at_nini": 87,
    "pct_gmm_at_nmax": 98.2,
    "fine_agg_angularity_pct": 45,
    "sand_equivalent_pct": 60,
    "flat_elongated_pct": 2,
    "coarse_agg_angularity": "100/100",
    "tsr_pct": 79.9,
    "antistrip_additive": "None Required"
   },
   "project_items": [
    {
     "project_number": "MP07606272601",
     "line_item": "0165",
     "represented_quantity": 7525,
     "unit": "TON"
    }
   ],
   "status": "active",
   "flags": []
  },
  {
   "jmf_id": "00250600",
   "verified": false,
   "source_file": "CL3 0.38D 64-22 Natural Sand.xlsm",
   "plant_folder": "BT3",
   "plant_name": "The Allen Company @ Boonesborough",
   "form_version": "Ver 11.2",
   "cid_document": "252112",
   "cid_folder_path": null,
   "cid_source": "document_only",
   "sm_id_num": "07640AMD250600",
   "mix_id_num": "00250600",
   "mix_type_string": "00339 CL3 ASPH SURF 0.38D PG64-22",
   "bid_code": "00339",
   "mix_description": "CL3 ASPH SURF 0.38D PG64-22",
   "submittal_type": "Ref. Mix Design (project change only)",
   "test_method": "AASHTO M323 & R35",
   "esal_class": 3,
   "gyrations": {
    "nini": 7,
    "ndes": 65,
    "nmax": 105
   },
   "binder": {
    "grade": "PG64-22",
    "source": "ATS Asphalt Terminal @ Lexington",
    "producer_no": "LAP100201",
    "material_code": 60075
   },
   "mix_comp_temp_f": "300/265 (deg. F)",
   "county": "Madison",
   "fed_state_project": "FD05 076 0025 016-021",
   "project_item_ref": "MP07600252501 (0040)",
   "contractor_producer_no": "AMP070302",
   "dates": {
    "letting": "2025-07-24",
    "received": "2025-09-04",
    "released": "2025-09-12"
   },
   "approval_date": "2025-09-12",
   "submitted_by": "chollowa",
   "approved_by": "tsallee",
   "total_tons": 3175,
   "aggregates": [
    {
     "producer_no": "AGP007401",
     "producer": "The Allen Co @ Boonesboro",
     "material_code": 10395,
     "agg_type": "Limestone #8's",
     "gsb": 2.7,
     "percent": 38
    },
    {
     "producer_no": "AGP007401",
     "producer": "The Allen Co @ Boonesboro",
     "material_code": 10293,
     "agg_type": "LS #10's (Unwashed)",
     "gsb": 2.66,
     "percent": 14
    },
    {
     "producer_no": "AGP007401",
     "producer": "The Allen Co @ Boonesboro",
     "material_code": 10297,
     "agg_type": "LS #11's (Unwashed)",
     "gsb": 2.66,
     "percent": 20
    },
    {
     "producer_no": "AGP012102",
     "producer": "Watson S&G Ross Ohio",
     "material_code": 10436,
     "agg_type": "Natural Sand",
     "gsb": 2.62,
     "percent": 13
    },
    {
     "producer_no": "AMP070302",
     "producer": "The Allen Co @ Boonesboro",
     "material_code": 24033,
     "agg_type": "Fine RAP",
     "gsb": 2.677,
     "percent": 15
    }
   ],
   "recycle": {
    "rap_total_pct": 15,
    "ac_in_recycle_pct": 4.5,
    "virgin_ac_in_mix_pct": 5.2,
    "recycle_ac_in_mix_pct": 0.7,
    "total_ac_in_mix_pct": 5.9
   },
   "jmf_gradation_mm": {
    "50.0": 100,
    "37.5": 100,
    "25.0": 100,
    "19.0": 100,
    "12.5": 100,
    "9.5": 94,
    "4.75": 57,
    "2.36": 36,
    "1.18": 25,
    "0.6": 17.3,
    "0.3": 11.3,
    "0.15": 9,
    "0.075": 7.6
   },
   "design_volumetrics": {
    "optimum_ac_pct": 5.9,
    "air_voids_pct": 3.6,
    "vma_pct": 16.2,
    "vfa_pct": 77.8,
    "da_ratio": 1.4,
    "eff_ac_pct": 5.5,
    "abs_ac_pct": 0.4,
    "gmm": 2.468,
    "gsb_blend": 2.672,
    "gse": 2.704,
    "unit_weight_pcf": 148.4,
    "film_thickness_um": 9.1,
    "pct_gmm_at_nini": 86.8,
    "pct_gmm_at_nmax": 97.4,
    "fine_agg_angularity_pct": 48,
    "sand_equivalent_pct": 75,
    "flat_elongated_pct": 0,
    "coarse_agg_angularity": "100",
    "tsr_pct": 83.0,
    "antistrip_additive": "None Required"
   },
   "project_items": [
    {
     "project_number": "MP07600252501",
     "line_item": "0040",
     "represented_quantity": 375,
     "unit": "TON"
    },
    {
     "project_number": "MP07600252501",
     "line_item": "0050",
     "represented_quantity": 2800,
     "unit": "TON"
    }
   ],
   "status": "active",
   "flags": [
    "2 designs share CID 252112 + bid code 00339 (['00250600', '00250602']); all left active - mark superseded manually if any were replaced (newest released: 00250602)"
   ],
   "concurrent_designs": [
    "00250602"
   ]
  },
  {
   "jmf_id": "00260256",
   "verified": false,
   "source_file": "CL3 0.38D 64-22 No Natural Sand.xlsm",
   "plant_folder": "BT3",
   "plant_name": "The Allen Company @ Boonesborough",
   "form_version": "Ver 12.1",
   "cid_document": "262135",
   "cid_folder_path": null,
   "cid_source": "document_only",
   "sm_id_num": "07640AMD260256",
   "mix_id_num": "00260256",
   "mix_type_string": "00339 CL3 ASPH SURF 0.38D PG64-22",
   "bid_code": "00339",
   "mix_description": "CL3 ASPH SURF 0.38D PG64-22",
   "submittal_type": "Ref. Mix Design (project change only)",
   "test_method": "AASHTO M323 & R35",
   "esal_class": 3,
   "gyrations": {
    "nini": 7,
    "ndes": 65,
    "nmax": 105
   },
   "binder": {
    "grade": "PG64-22",
    "source": "ATS Asphalt Terminal @ Lexington",
    "producer_no": "LAP100201",
    "material_code": 60075
   },
   "mix_comp_temp_f": "300/265 (deg. F)",
   "county": "Madison",
   "fed_state_project": "FD05 076 0021 010-014",
   "project_item_ref": "MP07600212601 (0050)",
   "contractor_producer_no": "AMP070302",
   "dates": {
    "letting": "2026-03-26",
    "received": "2026-04-30",
    "released": "2026-04-30"
   },
   "approval_date": "2026-04-30",
   "submitted_by": "jwheatl2",
   "approved_by": "adenmark",
   "total_tons": 3645,
   "aggregates": [
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry",
     "material_code": 10395,
     "agg_type": "Limestone #8's",
     "gsb": 2.7,
     "percent": 35
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry",
     "material_code": 10293,
     "agg_type": "LS #10's (Unwashed)",
     "gsb": 2.66,
     "percent": 40
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry",
     "material_code": 10290,
     "agg_type": "LS #10's (Washed)",
     "gsb": 2.66,
     "percent": 10
    }
   ],
   "recycle": {
    "rap_total_pct": 0,
    "ac_in_recycle_pct": 0,
    "virgin_ac_in_mix_pct": 0,
    "recycle_ac_in_mix_pct": 0,
    "total_ac_in_mix_pct": 0
   },
   "jmf_gradation_mm": {
    "50.0": 100,
    "37.5": 100,
    "25.0": 100,
    "19.0": 100,
    "12.5": 100,
    "9.5": 90.5,
    "4.75": 59.1,
    "2.36": 40,
    "1.18": 23.5,
    "0.6": 16.4,
    "0.3": 12.3,
    "0.15": 10.1,
    "0.075": 7.4
   },
   "design_volumetrics": {
    "optimum_ac_pct": 5.7,
    "air_voids_pct": 3.5,
    "vma_pct": 15.7,
    "vfa_pct": 78,
    "da_ratio": 1.4,
    "eff_ac_pct": 5.3,
    "abs_ac_pct": 0.4,
    "gmm": 2.48,
    "gsb_blend": 2.678,
    "gse": 2.711,
    "unit_weight_pcf": 149.3,
    "film_thickness_um": 8.3,
    "pct_gmm_at_nini": 86.2,
    "pct_gmm_at_nmax": 98.0,
    "fine_agg_angularity_pct": 45,
    "sand_equivalent_pct": 59,
    "flat_elongated_pct": 5,
    "coarse_agg_angularity": "100",
    "tsr_pct": 80,
    "antistrip_additive": "None Required"
   },
   "project_items": [
    {
     "project_number": "MP07600212601",
     "line_item": "0050",
     "represented_quantity": 3330,
     "unit": "TON"
    },
    {
     "project_number": "MP07600212601",
     "line_item": "0040",
     "represented_quantity": 315,
     "unit": "TON"
    }
   ],
   "status": "active",
   "flags": [
    "aggregate bin percents sum to 85, not 100"
   ]
  },
  {
   "jmf_id": "00250602",
   "verified": false,
   "source_file": "CL3 0.38D 64-22 Virgin.xlsm",
   "plant_folder": "BT3",
   "plant_name": "The Allen Company @ Boonesborough",
   "form_version": "Ver 11.3",
   "cid_document": "252112",
   "cid_folder_path": null,
   "cid_source": "document_only",
   "sm_id_num": "07640AMD250602",
   "mix_id_num": "00250602",
   "mix_type_string": "00339 CL3 ASPH SURF 0.38D PG64-22",
   "bid_code": "00339",
   "mix_description": "CL3 ASPH SURF 0.38D PG64-22",
   "submittal_type": "Ref. Mix Design (project change only)",
   "test_method": "AASHTO M323 & R35",
   "esal_class": 3,
   "gyrations": {
    "nini": 7,
    "ndes": 65,
    "nmax": 105
   },
   "binder": {
    "grade": "PG64-22",
    "source": "ATS Asphalt Terminal @ Lexington",
    "producer_no": "LAP100201",
    "material_code": 60075
   },
   "mix_comp_temp_f": "300/265 (deg. F)",
   "county": "Madison",
   "fed_state_project": "FD05 076 0025 016-021",
   "project_item_ref": "MP07600252501 (0040)",
   "contractor_producer_no": "AMP070302",
   "dates": {
    "letting": "2025-07-24",
    "received": "2025-09-04",
    "released": "2025-09-12"
   },
   "approval_date": "2025-09-12",
   "submitted_by": "jcampbe2",
   "approved_by": "tsallee",
   "total_tons": 3175,
   "aggregates": [
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10395,
     "agg_type": "Limestone #8's",
     "gsb": 2.7,
     "percent": 32
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10297,
     "agg_type": "LS #11's (Unwashed)",
     "gsb": 2.66,
     "percent": 12
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10293,
     "agg_type": "LS #10's (Unwashed)",
     "gsb": 2.66,
     "percent": 46
    },
    {
     "producer_no": "AGP012102",
     "producer": "Watson Gravel @ Ross, Ohio",
     "material_code": 10436,
     "agg_type": "Natural Sand",
     "gsb": 2.62,
     "percent": 10
    }
   ],
   "recycle": {
    "rap_total_pct": 0
   },
   "jmf_gradation_mm": {
    "50.0": 100,
    "37.5": 100,
    "25.0": 100,
    "19.0": 100,
    "12.5": 100,
    "9.5": 92.2,
    "4.75": 71.1,
    "2.36": 41.2,
    "1.18": 27.6,
    "0.6": 19,
    "0.3": 11.6,
    "0.15": 9.5,
    "0.075": 7.3
   },
   "design_volumetrics": {
    "optimum_ac_pct": 5.9,
    "air_voids_pct": 3.5,
    "vma_pct": 16,
    "vfa_pct": 77.8,
    "da_ratio": 1.4,
    "eff_ac_pct": 5.4,
    "abs_ac_pct": 0.5,
    "gmm": 2.47,
    "gsb_blend": 2.669,
    "gse": 2.708,
    "unit_weight_pcf": 148.7,
    "film_thickness_um": 8.8,
    "pct_gmm_at_nini": 86.5,
    "pct_gmm_at_nmax": 97.9,
    "fine_agg_angularity_pct": 43.7,
    "sand_equivalent_pct": 47,
    "flat_elongated_pct": 1,
    "coarse_agg_angularity": "100",
    "tsr_pct": 81.7,
    "antistrip_additive": "None Required"
   },
   "project_items": [
    {
     "project_number": "MP07600252501",
     "line_item": "0040",
     "represented_quantity": 375,
     "unit": "TON"
    },
    {
     "project_number": "MP07600252501",
     "line_item": "0050",
     "represented_quantity": 2800,
     "unit": "TON"
    }
   ],
   "status": "active",
   "flags": [
    "2 designs share CID 252112 + bid code 00339 (['00250600', '00250602']); all left active - mark superseded manually if any were replaced (newest released: 00250602)"
   ],
   "concurrent_designs": [
    "00250600"
   ]
  },
  {
   "jmf_id": "00260286",
   "verified": false,
   "source_file": "CL3 0.75D 64-22.xlsm",
   "plant_folder": "BT3",
   "plant_name": "The Allen Company @ Boonesborough",
   "form_version": "Ver 12.1",
   "cid_document": "261113",
   "cid_folder_path": null,
   "cid_source": "document_only",
   "sm_id_num": "07640AMD260286",
   "mix_id_num": "00260286",
   "mix_type_string": "00223 CL3 ASPH BASE 0.75D PG64-22",
   "bid_code": "00223",
   "mix_description": "CL3 ASPH BASE 0.75D PG64-22",
   "submittal_type": "New Mix Design",
   "test_method": "AASHTO M323 & R35",
   "esal_class": 3,
   "gyrations": {
    "nini": 7,
    "ndes": 65,
    "nmax": 105
   },
   "binder": {
    "grade": "PG64-22",
    "source": "ATS Asphalt Terminal @ Lexington",
    "producer_no": "LAP100201",
    "material_code": 60075
   },
   "mix_comp_temp_f": "300/265 (deg. F)",
   "county": "Jessamine",
   "fed_state_project": "FD06 057 1980 000-004",
   "project_item_ref": "DE057198025D1 (0035)",
   "contractor_producer_no": "AMP070302",
   "dates": {
    "letting": "2026-03-26",
    "received": "2026-05-12",
    "released": "2026-05-12"
   },
   "approval_date": "2026-05-12",
   "submitted_by": "cowsley",
   "approved_by": "adenmark",
   "total_tons": 2957,
   "aggregates": [
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10345,
     "agg_type": "Limestone #57's",
     "gsb": 2.7,
     "percent": 35
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10395,
     "agg_type": "Limestone #8's",
     "gsb": 2.67,
     "percent": 11
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10293,
     "agg_type": "LS #10's (Unwashed)",
     "gsb": 2.66,
     "percent": 34
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10295,
     "agg_type": "LS #11's (Washed)",
     "gsb": 2.67,
     "percent": 5
    },
    {
     "producer_no": "AMP070302",
     "producer": "The Allen Company @ Boonesboro",
     "material_code": 24033,
     "agg_type": "Fine RAP",
     "gsb": 2.69,
     "percent": 15
    }
   ],
   "recycle": {
    "rap_total_pct": 15,
    "ac_in_recycle_pct": 0,
    "virgin_ac_in_mix_pct": 0,
    "recycle_ac_in_mix_pct": 0,
    "total_ac_in_mix_pct": 0
   },
   "jmf_gradation_mm": {
    "50.0": 100,
    "37.5": 100,
    "25.0": 100,
    "19.0": 93.1,
    "12.5": 74.7,
    "9.5": 64.8,
    "4.75": 49.3,
    "2.36": 29.9,
    "1.18": 19.3,
    "0.6": 13.7,
    "0.3": 10.3,
    "0.15": 8.5,
    "0.075": 6.6
   },
   "design_volumetrics": {
    "optimum_ac_pct": 4.4,
    "air_voids_pct": 3.5,
    "vma_pct": 13.4,
    "vfa_pct": 74,
    "da_ratio": 1.6,
    "eff_ac_pct": 4.2,
    "abs_ac_pct": 0.2,
    "gmm": 2.518,
    "gsb_blend": 2.68,
    "gse": 2.697,
    "unit_weight_pcf": 151.6,
    "film_thickness_um": 7.8,
    "pct_gmm_at_nini": 87,
    "pct_gmm_at_nmax": 97.9,
    "fine_agg_angularity_pct": 45,
    "sand_equivalent_pct": 58,
    "flat_elongated_pct": 3,
    "coarse_agg_angularity": "100/100",
    "tsr_pct": 79.9,
    "antistrip_additive": "None Required"
   },
   "project_items": [
    {
     "project_number": "DE057198025D1",
     "line_item": "0035",
     "represented_quantity": 2957,
     "unit": "TON"
    }
   ],
   "status": "active",
   "flags": []
  },
  {
   "jmf_id": "00250605",
   "verified": false,
   "source_file": "CL3 1.00D 64-22.xlsm",
   "plant_folder": "BT3",
   "plant_name": "The Allen Company @ Boonesborough",
   "form_version": "Ver 11.3",
   "cid_document": "254109",
   "cid_folder_path": null,
   "cid_source": "document_only",
   "sm_id_num": "07640AMD250605",
   "mix_id_num": "00250605",
   "mix_type_string": "00214 CL3 ASPH BASE 1.00D PG64-22",
   "bid_code": "00214",
   "mix_description": "CL3 ASPH BASE 1.00D PG64-22",
   "submittal_type": "Ref. Mix Design (project change only)",
   "test_method": "AASHTO M323 & R35",
   "esal_class": 3,
   "gyrations": {
    "nini": 7,
    "ndes": 65,
    "nmax": 105
   },
   "binder": {
    "grade": "PG64-22",
    "source": "ATS Asphalt Terminal @ Lexington",
    "producer_no": "LAP100201",
    "material_code": 60075
   },
   "mix_comp_temp_f": "300/265 (deg. F)",
   "county": "Madison",
   "fed_state_project": "FD04 076 0052 016-019",
   "project_item_ref": "0707600522501 (0010)",
   "contractor_producer_no": "AMP070302",
   "dates": {
    "letting": "2025-08-21",
    "received": "2025-09-03",
    "released": "2025-09-12"
   },
   "approval_date": "2025-09-12",
   "submitted_by": "cowsley",
   "approved_by": "tsallee",
   "total_tons": 3949,
   "aggregates": [
    {
     "producer_no": "AGP007401",
     "producer": "The Allen Company @ Boonesborough",
     "material_code": 10340,
     "agg_type": "Limestone #5's",
     "gsb": 2.7,
     "percent": 10
    },
    {
     "producer_no": "AGP007401",
     "producer": "The Allen Company @ Boonesborough",
     "material_code": 10345,
     "agg_type": "Limestone #57's",
     "gsb": 2.7,
     "percent": 30
    },
    {
     "producer_no": "AGP007401",
     "producer": "The Allen Company @ Boonesborough",
     "material_code": 10395,
     "agg_type": "Limestone #8's",
     "gsb": 2.69,
     "percent": 22
    },
    {
     "producer_no": "AGP007401",
     "producer": "The Allen Company @ Boonesborough",
     "material_code": 10293,
     "agg_type": "LS #10's (Unwashed)",
     "gsb": 2.66,
     "percent": 21
    },
    {
     "producer_no": "AMP070302",
     "producer": "The Allen Company @ Boonesborough",
     "material_code": 24033,
     "agg_type": "Fine RAP",
     "gsb": 2.665,
     "percent": 17
    }
   ],
   "recycle": {
    "rap_total_pct": 17,
    "ac_in_recycle_pct": 4.5,
    "virgin_ac_in_mix_pct": 3.3,
    "recycle_ac_in_mix_pct": 0.8,
    "total_ac_in_mix_pct": 4.1
   },
   "jmf_gradation_mm": {
    "50.0": 100,
    "37.5": 100,
    "25.0": 94.5,
    "19.0": 83.5,
    "12.5": 69,
    "9.5": 58.7,
    "4.75": 35,
    "2.36": 24.9,
    "1.18": 17.4,
    "0.6": 12.4,
    "0.3": 9.1,
    "0.15": 7.3,
    "0.075": 6.1
   },
   "design_volumetrics": {
    "optimum_ac_pct": 4.1,
    "air_voids_pct": 3.5,
    "vma_pct": 12.7,
    "vfa_pct": 70,
    "da_ratio": 1.6,
    "eff_ac_pct": 3.8,
    "abs_ac_pct": 0.3,
    "gmm": 2.538,
    "gsb_blend": 2.683,
    "gse": 2.707,
    "unit_weight_pcf": 152.2,
    "film_thickness_um": 7.8,
    "pct_gmm_at_nini": 86,
    "pct_gmm_at_nmax": 98.0,
    "fine_agg_angularity_pct": 45,
    "sand_equivalent_pct": 51.4,
    "flat_elongated_pct": 4,
    "coarse_agg_angularity": "100",
    "tsr_pct": 88,
    "antistrip_additive": "None Required"
   },
   "project_items": [
    {
     "project_number": "0707600522501",
     "line_item": "0010",
     "represented_quantity": 3949,
     "unit": "ton"
    }
   ],
   "status": "active",
   "flags": []
  },
  {
   "jmf_id": "00260091",
   "verified": false,
   "source_file": "CL3 No.4A 64-22 Haydon.xlsm",
   "plant_folder": "BT3",
   "plant_name": "The Allen Company @ Boonesborough",
   "form_version": "Ver 11.3",
   "cid_document": "262085",
   "cid_folder_path": null,
   "cid_source": "document_only",
   "sm_id_num": "07640AMD260091",
   "mix_id_num": "00260091",
   "mix_type_string": "24887EC CL3 ASPH SURF NO.4A PG64-22",
   "bid_code": "24887EC",
   "mix_description": "CL3 ASPH SURF NO.4A PG64-22",
   "submittal_type": "New Mix Design",
   "test_method": "AASHTO M323 & R35",
   "esal_class": 3,
   "gyrations": {
    "nini": 7,
    "ndes": 65,
    "nmax": 105
   },
   "binder": {
    "grade": "PG64-22",
    "source": "ATS Asphalt Terminal @ Lexington",
    "producer_no": "LAP100201",
    "material_code": 60075
   },
   "mix_comp_temp_f": "300/265 (deg. F)",
   "county": "Clark",
   "fed_state_project": "FD05 025 1958 003-006",
   "project_item_ref": "MP02519582601 (0060)",
   "contractor_producer_no": "AMP070302",
   "dates": {
    "letting": "2026-01-29",
    "received": "2026-03-10",
    "released": "2026-03-10"
   },
   "approval_date": "2026-03-10",
   "submitted_by": "cowsley",
   "approved_by": "tsallee",
   "total_tons": 2710,
   "aggregates": [
    {
     "producer_no": "AGP027501",
     "producer": "Haydon Materials,LLC-Airport Road @ Bardstown",
     "material_code": 10290,
     "agg_type": "Dol. #10's Washed",
     "gsb": 2.69,
     "percent": 67
    },
    {
     "producer_no": "AGP027501",
     "producer": "Haydon Materials,LLC-Airport Road @ Bardstown",
     "material_code": 10293,
     "agg_type": "Dol. #10's Unwashed",
     "gsb": 2.68,
     "percent": 18
    },
    {
     "producer_no": "AGP012102",
     "producer": "Watson Gravel @ Ross, Ohio",
     "material_code": 10436,
     "agg_type": "Natural Sand",
     "gsb": 2.64,
     "percent": 15
    }
   ],
   "recycle": {
    "rap_total_pct": 0
   },
   "jmf_gradation_mm": {
    "50.0": 100,
    "37.5": 100,
    "25.0": 100,
    "19.0": 100,
    "12.5": 100,
    "9.5": 100,
    "4.75": 90.9,
    "2.36": 62,
    "1.18": 41.1,
    "0.6": 27.4,
    "0.3": 17,
    "0.15": 11.9,
    "0.075": 9.4
   },
   "design_volumetrics": {
    "optimum_ac_pct": 7,
    "air_voids_pct": 3.5,
    "vma_pct": 17.8,
    "vfa_pct": 79,
    "da_ratio": 1.5,
    "eff_ac_pct": 6.1,
    "abs_ac_pct": 0.9,
    "gmm": 2.46,
    "gsb_blend": 2.681,
    "gse": 2.747,
    "unit_weight_pcf": 147.7,
    "film_thickness_um": 7.5,
    "pct_gmm_at_nini": 87.2,
    "pct_gmm_at_nmax": 98.1,
    "fine_agg_angularity_pct": 45,
    "sand_equivalent_pct": 67,
    "flat_elongated_pct": null,
    "coarse_agg_angularity": null,
    "tsr_pct": 80.2,
    "antistrip_additive": "None Required"
   },
   "project_items": [
    {
     "project_number": "MP02519582601",
     "line_item": "0060",
     "represented_quantity": 2710,
     "unit": "TON"
    }
   ],
   "status": "active",
   "flags": []
  },
  {
   "jmf_id": "00260088",
   "verified": false,
   "source_file": "CL3 No.4B 64-22 Haydon.xlsm",
   "plant_folder": "BT3",
   "plant_name": "The Allen Company @ Boonesborough",
   "form_version": "Ver 11.3",
   "cid_document": "252416",
   "cid_folder_path": null,
   "cid_source": "document_only",
   "sm_id_num": "07640AMD260088",
   "mix_id_num": "00260088",
   "mix_type_string": "23307EC CL3 ASPH SURF NO.4B PG64-22",
   "bid_code": "23307EC",
   "mix_description": "CL3 ASPH SURF NO.4B PG64-22",
   "submittal_type": "Ref. Mix Design (project change only)",
   "test_method": "AASHTO M323 & R35",
   "esal_class": 3,
   "gyrations": {
    "nini": 7,
    "ndes": 65,
    "nmax": 105
   },
   "binder": {
    "grade": "PG64-22",
    "source": "ATS Asphalt Terminal @ Lexington",
    "producer_no": "LAP100201",
    "material_code": 60075
   },
   "mix_comp_temp_f": "300/265 (deg. F)",
   "county": "Boyle",
   "fed_state_project": "FD05 011 2168 001-004",
   "project_item_ref": "MP01121682502 (0125)",
   "contractor_producer_no": "AMP070302",
   "dates": {
    "letting": "2025-12-11",
    "received": "2026-01-27",
    "released": "2026-03-06"
   },
   "approval_date": "2026-03-06",
   "submitted_by": "cowsley",
   "approved_by": "tsallee",
   "total_tons": 1162,
   "aggregates": [
    {
     "producer_no": "AGP027501",
     "producer": "Haydon Materials, LLC- Airport Road @ Bardstown",
     "material_code": 10293,
     "agg_type": "Dol. #10's Unwashed",
     "gsb": 2.69,
     "percent": 10
    },
    {
     "producer_no": "AGP027501",
     "producer": "Haydon Materials, LLC- Airport Road @ Bardstown",
     "material_code": 10290,
     "agg_type": "Dol. #10's Washed",
     "gsb": 2.7,
     "percent": 65
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10293,
     "agg_type": "LS #10's (Unwashed)",
     "gsb": 2.66,
     "percent": 10
    },
    {
     "producer_no": "AGP012102",
     "producer": "Watson Gravel @ Ross, Ohio",
     "material_code": 10436,
     "agg_type": "Natural Sand",
     "gsb": 2.62,
     "percent": 15
    }
   ],
   "recycle": {
    "rap_total_pct": 0
   },
   "jmf_gradation_mm": {
    "50.0": 100,
    "37.5": 100,
    "25.0": 100,
    "19.0": 100,
    "12.5": 100,
    "9.5": 100,
    "4.75": 92,
    "2.36": 66,
    "1.18": 45,
    "0.6": 29,
    "0.3": 16,
    "0.15": 10,
    "0.075": 6.9
   },
   "design_volumetrics": {
    "optimum_ac_pct": 6.9,
    "air_voids_pct": 3.5,
    "vma_pct": 17.2,
    "vfa_pct": 80,
    "da_ratio": 1.1,
    "eff_ac_pct": 5.9,
    "abs_ac_pct": 1.0,
    "gmm": 2.472,
    "gsb_blend": 2.683,
    "gse": 2.758,
    "unit_weight_pcf": 148.8,
    "film_thickness_um": 8.2,
    "pct_gmm_at_nini": 88,
    "pct_gmm_at_nmax": 97.9,
    "fine_agg_angularity_pct": 45,
    "sand_equivalent_pct": 61,
    "flat_elongated_pct": null,
    "coarse_agg_angularity": null,
    "tsr_pct": 80,
    "antistrip_additive": "None Required"
   },
   "project_items": [
    {
     "project_number": "MP01121682502",
     "line_item": "0125",
     "represented_quantity": 1162,
     "unit": "TON"
    }
   ],
   "status": "active",
   "flags": []
  },
  {
   "jmf_id": "00250668",
   "verified": false,
   "source_file": "CL3 No.4D 64-22 Haydon.xlsm",
   "plant_folder": "BT3",
   "plant_name": "The Allen Company @ Boonesborough",
   "form_version": "Ver 11.3",
   "cid_document": "221349",
   "cid_folder_path": null,
   "cid_source": "document_only",
   "sm_id_num": "07640AMD250668",
   "mix_id_num": "00250668",
   "mix_type_string": "24570EC CL3 ASPH SURF NO.4D PG64-22",
   "bid_code": "24570EC",
   "mix_description": "CL3 ASPH SURF NO.4D PG64-22",
   "submittal_type": "Ref. Mix Design (project change only)",
   "test_method": "AASHTO M323 & R35",
   "esal_class": 3,
   "gyrations": {
    "nini": 7,
    "ndes": 65,
    "nmax": 105
   },
   "binder": {
    "grade": "PG64-22",
    "source": "ATS Asphalt Terminal @ Lexington",
    "producer_no": "LAP100201",
    "material_code": 60075
   },
   "mix_comp_temp_f": "300/265 (deg. F)",
   "county": "Madison",
   "fed_state_project": "NHPP 4212 (051)",
   "project_item_ref": "DE07600252249 (8022)",
   "contractor_producer_no": "AMP070302",
   "dates": {
    "letting": "2022-09-22",
    "received": "2025-11-13",
    "released": "2025-11-14"
   },
   "approval_date": "2025-11-14",
   "submitted_by": "cowsley",
   "approved_by": "tsallee",
   "total_tons": 2000,
   "aggregates": [
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10297,
     "agg_type": "LS #11's (Unwashed)",
     "gsb": 2.67,
     "percent": 20
    },
    {
     "producer_no": "AGP007401",
     "producer": "Boonesboro Quarry @ Boonesboro",
     "material_code": 10293,
     "agg_type": "LS #10's (Unwashed)",
     "gsb": 2.66,
     "percent": 60
    },
    {
     "producer_no": "AGP012102",
     "producer": "Watson Gravel @ Ross, Ohio",
     "material_code": 10436,
     "agg_type": "Natural Sand",
     "gsb": 2.64,
     "percent": 10
    },
    {
     "producer_no": "AMP070302",
     "producer": "The Allen Company @ Boonesboro",
     "material_code": 24033,
     "agg_type": "Fine RAP",
     "gsb": 2.664,
     "percent": 10
    }
   ],
   "recycle": {
    "rap_total_pct": 10,
    "ac_in_recycle_pct": 4.7,
    "virgin_ac_in_mix_pct": 5.6,
    "recycle_ac_in_mix_pct": 0.5,
    "total_ac_in_mix_pct": 6.1
   },
   "jmf_gradation_mm": {
    "50.0": 100,
    "37.5": 100,
    "25.0": 100,
    "19.0": 100,
    "12.5": 100,
    "9.5": 99.5,
    "4.75": 89.9,
    "2.36": 56.3,
    "1.18": 34.6,
    "0.6": 23.8,
    "0.3": 15.7,
    "0.15": 12.1,
    "0.075": 9.6
   },
   "design_volumetrics": {
    "optimum_ac_pct": 6.1,
    "air_voids_pct": 3.5,
    "vma_pct": 16.4,
    "vfa_pct": 80,
    "da_ratio": 1.7,
    "eff_ac_pct": 5.6,
    "abs_ac_pct": 0.5,
    "gmm": 2.456,
    "gsb_blend": 2.66,
    "gse": 2.699,
    "unit_weight_pcf": 147.6,
    "film_thickness_um": 7.2,
    "pct_gmm_at_nini": 86.1,
    "pct_gmm_at_nmax": 97.9,
    "fine_agg_angularity_pct": 45,
    "sand_equivalent_pct": 67,
    "flat_elongated_pct": null,
    "coarse_agg_angularity": null,
    "tsr_pct": 79.5,
    "antistrip_additive": "None Required"
   },
   "project_items": [
    {
     "project_number": "DE07600252249",
     "line_item": "8022",
     "represented_quantity": 2000,
     "unit": "TON"
    }
   ],
   "status": "active",
   "flags": [
    "no bid-item match in document-printed contract 221349 (design instead pairs to contracts ['252394', '262081'] per Jake)"
   ]
  }
 ]
};
