export default {
 "title": "Bailey Method Knowledge Base",
 "description": "Structured knowledge base extracted from the 5-day Bailey Method course binder (William J. Pine, P.E., Heritage Construction & Materials): Day-1 slides 001-156 with student annotations, worked-example tabs 01-13, instructor notes for Estimation Sheet examples (Tab 14), the 'Estimating VMA and Voids' document (Tab 15), and quick-reference cheat sheets.",
 "source_document": "Bailey Method course binder - William J. Pine, P.E., Heritage Construction & Materials",
 "generated": "2026-07-10",
 "schema": "bailey_method_schema.json",
 "chunks": [
  "1_1",
  "1_2",
  "1_3",
  "1_4",
  "1_5",
  "1_6",
  "2_1",
  "2_2",
  "2_3",
  "3_1",
  "3_2",
  "4_1"
 ],
 "record_count": 385,
 "verification": {
  "verified": 233,
  "unverified": 152,
  "auto_verified_by_corroboration": 78,
  "policy": "verified:true = confirmed by Jake (chunk 1_1), purely conceptual, or auto-verified at merge via an independent corroborating record from another chunk (see corroborated_by). verified:false = numeric values from a single source pending human review - see FINAL_FLAG_LIST.md."
 },
 "records": [
  {
   "id": "day1-slide-001",
   "type": "slide",
   "day": 1,
   "slide_number": 1,
   "slide_title": "The Bailey Method - Achieving Volumetrics and HMA Compactability",
   "slide_content": "The Bailey Method: Achieving Volumetrics and HMA Compactability. William J. Pine, Heritage Construction & Materials, Indianapolis, IN.",
   "instructor_notes": "The Bailey Method is a TOOL for Asphalt Mix Design, Quality Control (QC) and Quality Assurance (QA). Although we cover a lot of details, formulas and calculations, focus on understanding the FOUR PRINCIPLES of the Bailey Method. If you have experience with mix designs, QC and/or QA, the method will confirm many things you already know and explain WHY you have found them to work, plus additional points about the overall aggregate structure. If you have little to no experience, the method gives a very good understanding of how aggregates pack together, how to determine which fraction is in control of the overall aggregate structure, which mix type should be used in a given situation, and how to make appropriate adjustments to the combined blend gradation (in the lab or in the field) to optimize mix characteristics with the aggregates available. Keep an open mind - the Bailey Method is simpler than it first appears. There are multiple pieces to the puzzle to identify and assemble to get a clear picture of combined blend gradations.",
   "key_callouts": [
    "Please feel free to ask questions at ANY TIME during our discussions."
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "course intro",
    "four principles",
    "QC",
    "QA",
    "mix design",
    "tool"
   ],
   "related_ids": [],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "1"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-002",
   "type": "slide",
   "day": 1,
   "slide_number": 2,
   "slide_title": "Aggregate Blending - Where do you start?",
   "slide_content": "Trial and Error? Specification Bands: Coarse, Medium, Fine. Which blend is best? How will it work in the field during placement? How will it perform? Is there a more systematical way to find a starting point?",
   "instructor_notes": "Without experience or existing designs to go by, how does a designer find a starting place for a new mix design? Some suggest reviewing the gradation bands in the project specifications and developing three trial blends - coarse, medium and fine. But these three blends are generally very different, and consequently can have very different field characteristics, regardless of their similarities or dissimilarities in volumetric properties. After a blend that meets volumetrics has been found, can the designer accurately predict how the mix will handle in the field? Will it be prone to segregation? Difficult to compact? Tender? As mix designers, we want to minimize the time required to develop an acceptable design, as well as the risk to production, placement and performance, especially when warranty or percent-within-limits specifications are involved. So, is there a more systematical way to find a starting point for an aggregate blend? There is, and it's called The Bailey Method.",
   "key_callouts": [],
   "formulas": [],
   "figures": [
    "Cartoon of a shrugging mix designer"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "trial and error",
    "starting point",
    "trial blends",
    "segregation",
    "compactability",
    "tenderness"
   ],
   "related_ids": [
    "day1-slide-003"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "2"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-003",
   "type": "slide",
   "day": 1,
   "slide_number": 3,
   "slide_title": "Aggregate Blending - The Bailey Method",
   "slide_content": "Systematical approach to combined blend gradation development and analysis. Originally developed by Robert D. Bailey. Evaluate Aggregate Packing characteristics. Determine what is 'Coarse' and 'Fine'. Evaluate individual aggregates AND the combined blend by VOLUME as well as by weight.",
   "instructor_notes": "The Bailey Method was developed by Robert D. Bailey in the early 1980's. Although he is now retired, Mr. Bailey, a civil engineer, worked for the Illinois DOT, District 5 Materials Bureau for over 35 years. He began his career during the interstate construction era and the method's roots come from his experience with design, production and placement of Portland Cement Concrete (PCC) mixes. In order to understand aggregate packing, we need to determine which particles form the coarse fraction of the aggregate structure and which ones fit into the voids created within the coarse fraction. The method also includes an evaluation of the individual aggregates and the combined aggregate blend by volume, as well as by weight, in order to better understand which fraction, coarse or fine, is in control of the overall aggregate structure.",
   "key_callouts": [
    "The FOCUS of the Bailey Method is Aggregate Packing!"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "history",
    "Robert Bailey",
    "Illinois DOT",
    "aggregate packing",
    "volume vs weight",
    "control"
   ],
   "related_ids": [
    "day1-slide-002"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "3"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-004",
   "type": "slide",
   "day": 1,
   "slide_number": 4,
   "slide_title": "Combined Blend Gradation - Coarse-graded example and the Four Principles",
   "slide_content": "Maximum density chart (0.45 power curve) with sieves labeled A (largest) through K (smallest). Example coarse-graded combined blend: A=100, B=97, C=76, D=63, E=39, F=25, G=17, H=11, I=7, J=5, K=4.2 (% passing). The break between Fine and Coarse falls at sieve E. Numbered balloons 1-4 mark the portions of the curve evaluated by the four principles.",
   "instructor_notes": "Remember the focus is aggregate packing. This is a maximum density chart or 0.45 power curve, where the X-axis represents the sieve size raised to the 0.45 power, and the Y-axis represents the gradation in % passing. Letters label the sieves because these principles apply regardless of mix size. The dashed line is an example of a combined blend gradation for a Coarse-graded mix. There are FOUR principles to the Bailey Method. Principle #1 determines the break between coarse and fine, along with the volume of each; from this we determine which particles create voids and which ones fill them, and which fraction (coarse or fine) is in control. The other three principles evaluate distinct portions of the combined blend gradation. Principle #2 evaluates the coarse fraction and how the various particle sizes are distributed, which relates to the packing of the coarse fraction and in turn how this influences the packing of the fine fraction. Principle #3 evaluates the packing of the overall fine fraction in the combined blend. Principle #4 evaluates the packing of the fine part of the fine fraction. Each principle plays a specific role in aggregate packing, or Voids in the Mineral Aggregate (VMA). We will also discuss how to relate these principles to compactability and segregation susceptibility in the field, and how to use them for estimating the expected change in VMA or Voids from one design trial to the next, or from one production mix sample to the next.",
   "key_callouts": [
    "There are FOUR principles to the Bailey Method."
   ],
   "formulas": [],
   "figures": [
    "0.45 power chart with coarse-graded dashed gradation line, break at sieve E between Coarse and Fine, four numbered principle regions"
   ],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "four principles",
    "0.45 power chart",
    "maximum density",
    "coarse fraction",
    "fine fraction",
    "PCS",
    "VMA"
   ],
   "related_ids": [
    "day1-slide-005",
    "day1-slide-006",
    "day1-slide-007"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "4"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-005",
   "type": "slide",
   "day": 1,
   "slide_number": 5,
   "slide_title": "Combined Blend Gradation - SMA example",
   "slide_content": "Same 0.45 power chart with sieves A-K. Example SMA combined blend: A=100, B=92, C=60, D=32, E=25, F=19, G=17, H=15, I=13, J=11, K=9.5 (% passing). Break between Fine and Coarse at sieve E.",
   "instructor_notes": "We'll also discuss how to develop and evaluate the combined blend gradation of a Stone Matrix Asphalt (SMA) mix, which the dashed line in this example represents. With the Bailey Method, we break the combined blend gradation of an SMA into the same distinct portions as we do with a Coarse-graded mix with the same Nominal Maximum Aggregate Size (NMAS). However, the optimum distribution of the aggregate blend within these distinct portions is different for an SMA, along with the volume of the coarse fraction in relation to the volume of the fine fraction.",
   "key_callouts": [],
   "formulas": [],
   "figures": [
    "0.45 power chart with SMA dashed gradation line"
   ],
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "0.45 power chart",
    "combined blend gradation",
    "four principles"
   ],
   "related_ids": [
    "day1-slide-004",
    "day1-slide-006"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "5"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-006",
   "type": "slide",
   "day": 1,
   "slide_number": 6,
   "slide_title": "Combined Blend Gradation - Fine-graded example",
   "slide_content": "Same 0.45 power chart with sieves A-K. Example fine-graded combined blend: A=100, B=98, C=83, D=72, E=58, F=40, G=32, H=21, I=12, J=7, K=4.4 (% passing). For a fine-graded mix, the primary break falls at a smaller sieve (near G on the chart), with the overall coarse/fine break still marked at sieve E.",
   "instructor_notes": "We're also going to discuss Fine-graded mixes, which the dashed line in this example represents. With the Bailey Method, we treat Fine-graded blends differently than Coarse-graded or SMA blends. We still break the combined blend gradation into coarse and fine fractions, as we do with a Coarse-graded or SMA blend; however, with a Fine-graded blend, the FINE fraction is in control of the overall aggregate structure. Because of this, we treat the overall fine fraction as the 'primary' blend. To do this, we break that 'blend' into coarse and fine fractions and look at the 2nd, 3rd and 4th principles on the new coarse fraction, the overall new fine fraction, and the fine portion of the new fine fraction, respectively. The main difference between these three mix types (Coarse-graded, SMA and Fine-graded) is the volume of the overall coarse fraction.",
   "key_callouts": [],
   "formulas": [],
   "figures": [
    "0.45 power chart with fine-graded dashed gradation line"
   ],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "primary blend",
    "control",
    "0.45 power chart",
    "four principles"
   ],
   "related_ids": [
    "day1-slide-004",
    "day1-slide-005"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "6"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-007",
   "type": "slide",
   "day": 1,
   "slide_number": 7,
   "slide_title": "VMA vs. CA Volume",
   "slide_content": "Graph: Y-axis = VMA (Low to High), X-axis = % CA LUW (Volume of CA) from 50 to 130 (Less CA to More CA). X-Axis represents Principle #1. U-shaped curve: Fine-graded mixes sit on the left limb (around 70-80% CA LUW), Coarse-graded mixes near the dip (around 100% CA LUW), SMA on the steep right limb (around 120-130% CA LUW).",
   "instructor_notes": "Eventually we will get to the point where we can visualize all three mix types on a graph like this. The X-axis represents Principle 1, the VOLUME of CA in a given blend, which in this case is expressed as % CA Loose Unit Weight (LUW). The Y-axis represents Voids in the Mineral Aggregate (VMA). The curve represents the trend in VMA relative to the volume of CA. The 'Dip' in the curve represents the DENSEST PACKING that can be achieved for a given blend relative to the volume of CA - Principle 1. This same type of curve (i.e., VMA trend) also exists in: the overall fine fraction (minus PCS) - Principle 3, and the fine part of the fine fraction (minus SCS) - Principle 4.",
   "key_callouts": [
    "X-Axis Represents Principle #1"
   ],
   "formulas": [],
   "figures": [
    "U-shaped VMA vs %CA LUW curve with Fine, Coarse and SMA mix regions marked"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "VMA",
    "CA volume",
    "% CA LUW",
    "densest packing",
    "principle 1",
    "principle 3",
    "principle 4",
    "mix types"
   ],
   "related_ids": [
    "day1-slide-004",
    "day1-slide-024",
    "day1-slide-025"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "7"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-008",
   "type": "slide",
   "day": 1,
   "slide_number": 8,
   "slide_title": "What is VMA? Voids in the Mineral Aggregate",
   "slide_content": "Voids in the TOTAL aggregate structure. Function of aggregate. Air Voids are function of: Aggregate, Effective AC Volume. VMA = 100 - {(Gmb * Ps) / Gsb}.",
   "instructor_notes": "Voids in the Mineral Aggregate (VMA) represents the voids in the TOTAL aggregate structure. VMA is a function of the aggregate properties, along with the type and amount of compaction applied to the mix. Air Voids in the compacted mix are a function of the aggregate structure and the EFFECTIVE asphalt cement (AC) or bitumen volume. The formula terms: Gmb (Gravity mixture bulk) is the bulk specific gravity of the compacted mix specimen (e.g., lab test result from a gyratory compacted pill). Ps (Percent stone in the mix) is 100% minus total AC content %. Gsb (Gravity stone bulk) is the combined DRY bulk specific gravity of the aggregate blend. Total AC content % is expressed as % of mix, NOT % of dry aggregate. 'Stone' is used interchangeably for 'aggregate'. The best way to describe VMA is to imagine a compacted asphalt specimen with the AC removed while leaving the aggregate structure in place. The AC is represented by the black color in the mix specimen figure.",
   "key_callouts": [],
   "formulas": [
    "VMA = 100 - {(Gmb * Ps) / Gsb}"
   ],
   "figures": [
    "Mix specimen cross-section with black AC between aggregate particles"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "VMA",
    "definition",
    "Gmb",
    "Ps",
    "Gsb",
    "effective AC",
    "air voids"
   ],
   "related_ids": [
    "day1-slide-009",
    "day1-slide-010"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "8"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-009",
   "type": "slide",
   "day": 1,
   "slide_number": 9,
   "slide_title": "What is VMA? (continued) - Why an accurate VMA matters",
   "slide_content": "Same VMA slide with the voids highlighted: when the EFFECTIVE AC is removed, the yellow represents VMA - the volume of voids in the total aggregate structure. VMA = 100 - {(Gmb * Ps) / Gsb}.",
   "instructor_notes": "When the EFFECTIVE AC is removed, the yellow represents VMA - the volume of voids in the total aggregate structure. Why is an ACCURATE VMA value important? (1) To get a clear picture of the compaction achieved with an aggregate structure for a given type and amount of compactive effort. (2) When used in conjunction with an ACCURATE Air Void result, the difference (VMA - Air Voids) is the VOLUME of EFFECTIVE AC (Vbe) in the mix, which many believe impacts mix durability; therefore it is extremely important to input accurate values in the VMA equation. (3) Performance tests (rutting and cracking) are clearly influenced by Volume of EFFECTIVE AC (Vbe), which is the difference between VMA and Air Voids; therefore an accurate value for each is important.",
   "key_callouts": [
    "The Bailey Method is NOT about advising you as to what VMA should be, but rather to help you understand how to adjust an aggregate blend (if that is possible) to achieve the VMA value you choose to target, while keeping The Bailey Method Principles in mind, in regards to mix compactability and segregation susceptibility."
   ],
   "formulas": [
    "Vbe = VMA - Air Voids"
   ],
   "figures": [
    "Mix specimen cross-section with yellow VMA voids highlighted"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "VMA",
    "accuracy",
    "Vbe",
    "effective AC",
    "durability",
    "performance tests"
   ],
   "related_ids": [
    "day1-slide-008",
    "day1-slide-010"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "9"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-010",
   "type": "slide",
   "day": 1,
   "slide_number": 10,
   "slide_title": "Why Is VMA Important?",
   "slide_content": "Essential Asphalt Mix Properties: Stability, Durability. VMA promotes durability - it is the room between the aggregate particles for AC and Air Voids.",
   "instructor_notes": "Why is VMA important? There are two basic characteristics we strive to achieve in an asphalt mix: Stability and Durability. VMA, in addition to Air Void requirements, helps ensure there is an adequate amount of asphalt cement in an asphalt mix for durability.",
   "key_callouts": [],
   "formulas": [],
   "figures": [
    "Photo of compacted specimen"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "VMA",
    "stability",
    "durability",
    "air voids"
   ],
   "related_ids": [
    "day1-slide-008",
    "day1-slide-009"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "10"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-011",
   "type": "slide",
   "day": 1,
   "slide_number": 11,
   "slide_title": "VMA Drives Air Voids",
   "slide_content": "Chart 'VMA and Voids per Sample': blue line = VMA per sample (left axis approx. 11.0-16.0), red dashed line = corresponding Air Voids (right axis approx. 1.0-6.0), plotted across ~13 production samples. The two lines track together, with Voids swinging wider than VMA.",
   "instructor_notes": "VMA drives Air Voids in an asphalt mix. The blue line represents VMA for each sample; the red line represents the corresponding Air Voids. Think of VMA as a parent and Air Voids as a child. You've seen them in a supermarket. The parent comes in on a mission to get a few items. They just got off work and picked up their child from day care or from school. As they start off through the store, the parent is focused more on obtaining the items they came to get than they are on the child. For the most part, the child follows along, but every once in a while, the child gets occupied with something happening in the aisle or something they see on the shelf, until the parent looks back and discovers the child isn't right by their side. The parent represents VMA, which is in control and is always LESS variable. The child represents Air Voids, which follow VMA for the most part, but since Voids are also impacted by the effective volume of AC, in addition to the properties of the aggregate structure, Voids are always MORE variable than VMA. You may not have a PRODUCTION VMA specification, but very likely have a PRODUCTION Air Voids specification.",
   "key_callouts": [
    "Strive to control VMA and you'll have LESS variability in Air Voids!"
   ],
   "formulas": [],
   "figures": [
    "Dual-axis line chart of VMA (blue) and Voids (red) per sample from the Estimation Sheet tool"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "VMA",
    "air voids",
    "variability",
    "parent child analogy",
    "production QC",
    "estimation sheet"
   ],
   "related_ids": [
    "day1-slide-008"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "11"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-012",
   "type": "slide",
   "day": 1,
   "slide_number": 12,
   "slide_title": "Aggregate Packing (VMA) - What Influences the Results?",
   "slide_content": "Gradation (Continuously-Graded, Gap-Graded, etc.). Type & Amount of Compactive Effort (Static Pressure, Impact or Shearing). Shape (Flat & Elongated, Cubical, Round). Texture (Smooth, Rough). Strength (Weak vs. Strong, Influence of Particle Shape).",
   "instructor_notes": "What influences aggregate packing or Voids in the Mineral Aggregate (VMA)? GRADATION - particle size distribution is the DOMINANT aggregate packing factor. Explanation of spheres: volume of voids remains constant, but void size and the number of voids change. TYPE AND AMOUNT OF COMPACTIVE EFFORT - 50 blows with a Marshall hammer orients the aggregate structure differently than 100 gyrations with a gyratory compactor. SHAPE - cubical particles tend to pack more densely than flat and elongated particles. TEXTURE - smooth particles pack more easily than those with rough surface texture (i.e., microtexture). STRENGTH - aggregates of varying strengths pack differently because one may degrade or break down more than another from the type and amount of compactive effort applied. The importance of each factor depends on several things, such as the mix characteristics required for the traffic conditions (i.e., loading), the vertical location of the mix within the pavement structure and the type of mix being designed.",
   "key_callouts": [
    "Remember these FIVE Aggregate Packing (VMA) Factors!!!"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "aggregate packing",
    "five factors",
    "gradation",
    "compactive effort",
    "shape",
    "texture",
    "strength"
   ],
   "related_ids": [
    "day1-slide-028"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "12"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-013",
   "type": "slide",
   "day": 1,
   "slide_number": 13,
   "slide_title": "Defining 'Coarse' and 'Fine'",
   "slide_content": "Coarse fraction: larger particles that CREATE voids. Fine fraction: smaller particles that FILL voids. Estimate void size using Nominal Maximum Aggregate Size (NMAS), defined using 15% (NOT 10%). Break between 'Coarse' and 'Fine' = Primary Control Sieve (PCS).",
   "instructor_notes": "How does the Bailey Method define coarse and fine in a combined blend? The coarse fraction FORMS the voids that the fine fraction fits into. It isn't possible to pack aggregates together so tightly that there are no voids left, so all aggregate blends contain a certain volume of voids (VMA) and size of voids. Each of the factors that influence aggregate packing influences the AMOUNT of voids, but mix size primarily controls the SIZE of the voids in the coarse fraction and thus the size of particles that can fit into these voids. The Bailey Method utilizes the Nominal Maximum Aggregate Size (NMAS) to estimate the void size within the coarse fraction. In the Bailey Method, we define the NMAS differently than what's typically used, where NMAS = the first sieve larger than the first sieve to retain more than 10% by weight. Using the NMAS, we determine the break between the coarse and fine fractions, which is defined as the Primary Control Sieve (PCS).",
   "key_callouts": [
    "Bailey NMAS = The first sieve LARGER than the first sieve to retain MORE than 15% by weight."
   ],
   "formulas": [],
   "figures": [
    "Magnifying glass over aggregate particles; row of particles from fine to coarse"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "coarse",
    "fine",
    "NMAS",
    "15 percent",
    "PCS",
    "void size"
   ],
   "related_ids": [
    "day1-slide-014",
    "day1-slide-019",
    "day1-slide-021"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "13"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-014",
   "type": "slide",
   "day": 1,
   "slide_number": 14,
   "slide_title": "Re-Defining NMAS",
   "slide_content": "The first sieve larger than the first sieve to retain more than 15%, generally should be used as the NMAS. This directly impacts: the Half, PCS, SCS and TCS sieves; if it's a Coarse-graded or Fine-graded mix; spreadsheet use (NMAS and Mix Type): Volume Blending Sheet (VBS), VMA and Voids Estimation Sheet.",
   "instructor_notes": "After reviewing a LOT of data, we re-defined the NMAS (for the Bailey Method!) in 2006. This change impacts the NMAS of FINE-graded mixes most often but can also impact the other two mix types (Coarse-graded and SMA). Originally, the Bailey Method viewed the NMAS as the first sieve larger than the first sieve to retain more than 10% of the combined blend gradation by weight, which is the definition commonly used today. However, we define (for the Bailey Method) the NMAS as the first sieve larger than the first sieve to retain more than 15% of the combined blend gradation by weight. It can help explain volumetric changes and field compaction/segregation issues. In short, this relates to a COARSE fraction that contains more 'interceptors' and less 'pluggers' than normal, which reduces the VOID size between the coarse particles, even if they are 'floating' in the fine fraction. ('Interceptors' and 'pluggers' are discussed later.)",
   "key_callouts": [
    "Predominantly, this impacts mixes previously defined as 19.0 mm (3/4\") NMAS, but are now defined as 12.5 mm (1/2\") NMAS. Switching the NMAS can change the PCS, as well as the other sieves that impact the three ratios. It is common to see what was thought to be a 19.0 mm (3/4\") NMAS FINE-graded mix, to actually be a 12.5 mm (1/2\") NMAS COARSE-graded mix.",
    "Note: Sometimes it may be better to use the ORIGINAL 10% definition! Use 10% if mix type doesn't change AND CA ratio (or 'OLD' CA ratio) is < 1.5 x corresponding recommended MAX value!"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "NMAS",
    "15 percent",
    "10 percent",
    "2006 redefinition",
    "PCS",
    "SCS",
    "TCS",
    "half sieve",
    "CA ratio",
    "interceptors",
    "pluggers",
    "VBS",
    "estimation sheet"
   ],
   "related_ids": [
    "day1-slide-013",
    "day1-slide-021"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "14"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-015",
   "type": "slide",
   "day": 1,
   "slide_number": 15,
   "slide_title": "Void Size - All Round Particles",
   "slide_content": "Three equally sized round NMAS particles touching. Diameter (d) = NMAS. All Round particles: Void size = 0.15 x d.",
   "instructor_notes": "This figure shows the FIRST of four different two-dimensional combinations evaluated mathematically to estimate the void size created by three equally sized NMAS particles that are touching. All three particles are round. The result is 0.15 x diameter (NMAS) of the particle.",
   "key_callouts": [],
   "formulas": [
    "Void size (3 round) = 0.15 x d"
   ],
   "figures": [
    "Three touching circles with small void particle in the center"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "void size",
    "round particles",
    "0.15",
    "NMAS",
    "PCS derivation"
   ],
   "related_ids": [
    "day1-slide-016",
    "day1-slide-017",
    "day1-slide-018",
    "day1-slide-019"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "15"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-016",
   "type": "slide",
   "day": 1,
   "slide_number": 16,
   "slide_title": "Void Size - 2 Round & 1 Flat",
   "slide_content": "Two round particles and one with a flat face, all NMAS diameter. 2 Round & 1 Flat: Void size = 0.20 x d.",
   "instructor_notes": "This figure shows the SECOND of four combinations evaluated to estimate the void size. Two particles are round, and one has a flat face. The result is 0.20 x diameter (NMAS) of the particle.",
   "key_callouts": [],
   "formulas": [
    "Void size (2 round, 1 flat) = 0.20 x d"
   ],
   "figures": [
    "Two circles plus one flat-faced particle with larger central void"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "void size",
    "flat face",
    "0.20",
    "NMAS",
    "PCS derivation"
   ],
   "related_ids": [
    "day1-slide-015",
    "day1-slide-017",
    "day1-slide-018",
    "day1-slide-019"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "16"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-017",
   "type": "slide",
   "day": 1,
   "slide_number": 17,
   "slide_title": "Void Size - 1 Round & 2 Flat",
   "slide_content": "One round particle and two with flat faces, all NMAS diameter. 1 Round & 2 Flat: Void size = 0.24 x d.",
   "instructor_notes": "This figure shows the THIRD of four combinations evaluated to estimate the void size. Only one particle is round, and the other two have a flat face. The result is 0.24 x diameter (NMAS) of the particle.",
   "key_callouts": [],
   "formulas": [
    "Void size (1 round, 2 flat) = 0.24 x d"
   ],
   "figures": [
    "One circle plus two flat-faced particles with central void"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "void size",
    "flat face",
    "0.24",
    "NMAS",
    "PCS derivation"
   ],
   "related_ids": [
    "day1-slide-015",
    "day1-slide-016",
    "day1-slide-018",
    "day1-slide-019"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "17"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-018",
   "type": "slide",
   "day": 1,
   "slide_number": 18,
   "slide_title": "Void Size - All Flat Particles",
   "slide_content": "Three particles all with flat faces, NMAS diameter. All Flat particles: Void size = 0.29 x d.",
   "instructor_notes": "This figure shows the FOURTH of four combinations evaluated to estimate the void size. All three have a flat face. The result is 0.29 x diameter (NMAS) of the particle.",
   "key_callouts": [],
   "formulas": [
    "Void size (3 flat) = 0.29 x d"
   ],
   "figures": [
    "Three flat-faced particles with largest central void"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "void size",
    "flat face",
    "0.29",
    "NMAS",
    "PCS derivation"
   ],
   "related_ids": [
    "day1-slide-015",
    "day1-slide-016",
    "day1-slide-017",
    "day1-slide-019"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "18"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-019",
   "type": "slide",
   "day": 1,
   "slide_number": 19,
   "slide_title": "Average Void Size = 0.22 x d - Primary Control Sieve",
   "slide_content": "Average void size = 0.22 x d for the four combinations. Primary Control Sieve = 0.22 x NMAS.",
   "instructor_notes": "The AVERAGE void size of the four combinations is 0.22 x NMAS. Research has been done by others, from a three-dimensional point-of-view, that supports the value of 0.22. This is the equation used in the Bailey Method to determine the 'break' between coarse and fine in a combined blend gradation. This equation is ALSO used to determine the 'break' between coarse and fine in an INDIVIDUAL aggregate. The 'break' or Primary Control Sieve (PCS) is the CLOSEST sieve to the result of 0.22 x NMAS.",
   "key_callouts": [
    "0.22 x NMAS is a VERY important equation to remember!"
   ],
   "formulas": [
    "PCS = closest sieve to 0.22 x NMAS"
   ],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "PCS",
    "0.22",
    "NMAS",
    "break",
    "coarse fine break",
    "individual aggregate"
   ],
   "related_ids": [
    "day1-slide-015",
    "day1-slide-016",
    "day1-slide-017",
    "day1-slide-018",
    "day1-slide-020",
    "day1-slide-021"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "19"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-020",
   "type": "slide",
   "day": 1,
   "slide_number": 20,
   "slide_title": "PCS Visualization (Asphalt Institute animation)",
   "slide_content": "Photo of real aggregate: three large NMAS stones with the void between them highlighted. Labels: Diameter = NMAS; Average Void Size = 0.22 x NMAS; Primary Control Sieve = 0.22 x NMAS.",
   "instructor_notes": "This custom animation slide was developed by Mr. Danny Gierhart, with the Asphalt Institute, to help students better visualize the Primary Control Sieve (PCS).",
   "key_callouts": [],
   "formulas": [],
   "figures": [
    "Photo of three large stones on a bed of smaller aggregate, PCS-size stone sitting in the void between them"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "PCS",
    "visualization",
    "Asphalt Institute",
    "Danny Gierhart"
   ],
   "related_ids": [
    "day1-slide-019",
    "day1-slide-021"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "20"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-021",
   "type": "slide",
   "day": 1,
   "slide_number": 21,
   "slide_title": "Primary Control Sieve (chart)",
   "slide_content": "Table of Mixture NMAS, NMAS x 0.22, and Primary Control Sieve: 37.5 mm (1-1/2\") -> 8.250 mm -> 9.5 mm (3/8\"); 25.0 mm (1\") -> 5.500 mm -> 4.75 mm (#4); 19.0 mm (3/4\") -> 4.180 mm -> 4.75 mm (#4); 12.5 mm (1/2\") -> 2.750 mm -> 2.36 mm (#8); 9.5 mm (3/8\") -> 2.090 mm -> 2.36 mm (#8); 4.75 mm (#4) -> 1.045 mm -> 1.18 mm (#16). PCS determines the break between Coarse and Fine in the combined blend AND if a given aggregate is a CA or FA.",
   "instructor_notes": "This chart shows the NMAS, calculated PCS and the closest standard sieve typically used in the United States. It coincides with AASHTO M 323. For example: when evaluating a 19.0 mm (3/4\") NMAS mix, everything retained above the 4.75 mm (#4) sieve is considered part of the coarse fraction, which creates voids. Everything passing the 4.75 mm (#4) is considered part of the fine fraction, which fits into the voids created by the coarse fraction. This chart is not only important for understanding what is coarse and fine in a combined blend, it also serves as a guideline for determining which category, Coarse Aggregate (CA) or Fine Aggregate (FA), each individual aggregate falls into for the combined blend of a given mix size (i.e., NMAS). If 49.9% or LESS of an individual aggregate's gradation PASSES the PCS of the combined blend, it will be considered a Coarse Aggregate (CA). If 50.0% or MORE of an individual aggregate's gradation PASSES the PCS of the combined blend, it will be considered a Fine Aggregate (FA). Occasionally, you will find a situation where a virgin aggregate is not predominantly a CA or FA. In these instances, it may be necessary to perform the unit weight tests on the Coarse (plus PCS) and Fine (minus PCS) fractions of the combined blend, to more accurately determine the volume of combined Coarse fraction solids and voids, and the unit weights (loose and rodded) of the combined Fine fraction.",
   "key_callouts": [
    "AASHTO M 323, Section 6.1.3, Table 5 - Gradation Classification. PCS Control Point for Mixture NMAS."
   ],
   "formulas": [
    "PCS = closest sieve to 0.22 x NMAS"
   ],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "PCS",
    "NMAS",
    "chart",
    "CA",
    "FA",
    "classification",
    "AASHTO M 323"
   ],
   "related_ids": [
    "ref-pcs-chart",
    "heur-ca-fa-classification",
    "day1-slide-019"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "21"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-022",
   "type": "slide",
   "day": 1,
   "slide_number": 22,
   "slide_title": "Evaluating Aggregates by Volume",
   "slide_content": "Why? Better understand aggregate packing. Control VOLUME of Coarse and Fine for Mix 'Type'. How? Test each individual virgin Coarse and Fine aggregate.",
   "instructor_notes": "Now that we know what is coarse and fine, why design and evaluate a combined blend by volume, since we combine aggregates in the lab and at the plant by weight? To better understand aggregate packing. We want to control the volumes of the coarse and fine fractions according to the type of mix we are designing. We'll define three mix types, from the Bailey Method point-of-view. First, how do you design an aggregate blend by volume? It starts by evaluating each individual aggregate by volume. How do you evaluate an individual aggregate by volume? By performing Unit Weight tests to determine the volume of solids and the volume of voids it contains at a given compaction state.",
   "key_callouts": [],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "volume",
    "unit weight tests",
    "mix type",
    "coarse fraction",
    "fine fraction",
    "virgin aggregate"
   ],
   "related_ids": [
    "day1-slide-023",
    "day1-slide-024",
    "day1-slide-029"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "22"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-023",
   "type": "slide",
   "day": 1,
   "slide_number": 23,
   "slide_title": "Unit Weight Tests - CA",
   "slide_content": "Representative OVEN DRIED sample (gradation, shape, texture, strength,...). Use ENTIRE gradation - no material removed by sieving. Dry Bulk Specific Gravity (Gsb) - used to determine solid volume and volume of voids. BUCKET volume function of NMAS: 1/4 ft3 (~0.00708 m3) for 1\" - 3/8\" (25.0 mm - 9.5 mm); 1/2 ft3 (~0.01416 m3) for 1-1/2\" (37.5 mm). AASHTO T19.",
   "instructor_notes": "The accuracy of any test starts with a representative oven dried sample. Determine and record the gradation of the stockpile sample at the time of UW testing. Although an individual CA (i.e., stockpile) may contain a small amount of material that is considered fine in regards to itself, the ENTIRE gradation is used. In other words, each CA generally contains a small amount of fine material that fits into the voids created by the coarse part of its gradation; however, the amount of this fine material is generally low enough that it doesn't significantly affect the results of the unit weight tests. An accurate Dry Bulk Specific Gravity (Gsb) is important to determine the volume of solids and volume of voids. For aggregates that have a NMAS in the range of 1\" - 3/8\" (25.0 mm - 9.5 mm), use a 1/4 ft3 (~0.00708 m3) metal bucket, even though AASHTO T19 specifies a different minimum bucket size according to the NMAS of the individual aggregate. The same size and type of bucket (based on NMAS) should be used between labs if result comparisons are to be made because it affects the particle orientation achieved.",
   "key_callouts": [
    "For 1-1/2\" (37.5 mm) NMAS agg's, use a 1/2 ft3 (~0.01416 m3) metal bucket.",
    "Unit Weight tests are NOT performed on RAP or RAS!",
    "AASHTO T19 includes procedures for accurately determining the container volume. BUCKET to nearest 0.00001 m3 or 0.001 ft3!"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "unit weight",
    "CA",
    "bucket size",
    "AASHTO T19",
    "Gsb",
    "oven dried",
    "RAP",
    "RAS"
   ],
   "related_ids": [
    "ref-bucket-mold-specs",
    "day1-slide-024",
    "day1-slide-026",
    "day1-slide-029"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "23"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-024",
   "type": "slide",
   "day": 1,
   "slide_number": 24,
   "slide_title": "Loose Unit Weight - CA",
   "slide_content": "NO compactive effort applied. Start of particle-to-particle contact. Use shoveling procedure. Strike off ~ level (careful not to compact). Determine LUW (kg/m3 or lb/ft3). Determine volume of voids. AASHTO T19.",
   "instructor_notes": "The Loose Unit Weight (LUW) test has NO compactive effort applied. It is the minimum density (mass per volume) required to provide particle-to-particle contact of the CA. The LUW condition of the CA represents the beginning of CA interlock. This is a general outline of the LUW test; AASHTO T19 test procedures should be followed. This test should be performed at least THREE times on separate, representative samples of the oven dried aggregate, to establish an average LUW. For most CA's, obtain a minimum total sample weight of ~45 kg or ~100 lb from the stockpile, which should be blended and split into four samples of ~11 kg or ~25 lb for each of the individual sample tests. AASHTO T19 suggests, for single operator precision, two tests not differ by more than 40 kg/m3 or 2.5 lb/ft3. The frequency at which UW tests should be performed throughout the year depends on changes in the aggregate characteristics such as gradation, specific gravity, shape, etc. In most cases, this test should be performed once or twice a year.",
   "key_callouts": [],
   "formulas": [
    "LUW = Mass / Volume"
   ],
   "figures": [
    "Bucket filled with loose aggregate"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "LUW",
    "loose unit weight",
    "CA",
    "AASHTO T19",
    "particle-to-particle contact",
    "interlock"
   ],
   "related_ids": [
    "proc-luw-test-ca",
    "ex-luw-voids-ca",
    "day1-slide-025",
    "day1-slide-026"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "24"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-025",
   "type": "slide",
   "day": 1,
   "slide_number": 25,
   "slide_title": "LUW Voids - CA (example calculation)",
   "slide_content": "Calibrated bucket volume = 0.00716 m3 (0.253 ft3). Avg. dry mass of 3 tests = 10.0331 kg (22.119 lb). Gsb = 2.712. LOOSE Unit Weight (LUW) = Mass/Volume: 10.0331 kg / 0.00716 m3 = 1401.3 kg/m3; 22.119 lb / 0.253 ft3 = 87.4 lb/ft3. SOLID Unit Weight (SUW) = Gsb x 1000 kg/m3 (Gsb x 62.4 lb/ft3): 2.712 x 1000 = 2712 kg/m3 (2.712 x 62.4 = 169.2 lb/ft3). LUW VOIDS = 100 x {1-(LUW/SUW)}: 100 x {1-(1401.3/2712)} = 48.3%; 100 x {1-(87.4/169.2)} = 48.3%.",
   "instructor_notes": "CA Loose UW example calculation. A 0.01 change in Gsb is approximately a 0.2% change in LUW Voids. Round or smooth particles should compact MORE (lower voids) in the LUW test. Angular particles and/or particles with significant microtexture should compact LESS (higher voids) in the LUW test.",
   "key_callouts": [],
   "formulas": [
    "LUW = Mass / Volume",
    "SUW = Gsb x 1000 kg/m3 = Gsb x 62.4 lb/ft3",
    "LUW Voids % = 100 x {1 - (LUW / SUW)}"
   ],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "LUW",
    "voids",
    "example",
    "SUW",
    "Gsb",
    "CA"
   ],
   "related_ids": [
    "ex-luw-voids-ca",
    "day1-slide-024",
    "day1-slide-027",
    "day1-slide-028"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "25"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-026",
   "type": "slide",
   "day": 1,
   "slide_number": 26,
   "slide_title": "Rodded Unit Weight - CA",
   "slide_content": "WITH compactive effort applied. Increased particle-to-particle contact. Three equal lifts using shoveling procedure. Rod 25 times per lift. Strike off ~ level (careful not to compact). Determine RUW (kg/m3 or lb/ft3). Determine volume of voids. AASHTO T19.",
   "instructor_notes": "The Rodded Unit Weight (RUW) condition represents an increase in the mass and volume of CA within a unit volume from compactive effort being applied, and represents increased particle-to-particle contact. Again, this is a general outline of the RUW test; AASHTO T19 test procedures should be followed. This test should be performed at least THREE times on separate, representative samples of the oven dried aggregate, to establish an average RUW. Due to the possibility of degradation from the rodding procedure, material should NOT be re-used. The best practice is to discard the material. It is acceptable to use the material previously used for the LUW tests. AASHTO T19 suggests, for single operator precision, two tests not differ by more than 40 kg/m3 or 2.5 lb/ft3. The frequency at which UW tests should be performed throughout the year depends on changes in the aggregate characteristics such as gradation, specific gravity, shape, etc. In most cases, this test should be performed once or twice a year.",
   "key_callouts": [],
   "formulas": [
    "RUW = Mass / Volume"
   ],
   "figures": [
    "Bucket filled with rodded aggregate"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "RUW",
    "rodded unit weight",
    "CA",
    "AASHTO T19",
    "rodding",
    "degradation"
   ],
   "related_ids": [
    "proc-ruw-test-ca",
    "ex-ruw-voids-ca",
    "day1-slide-024",
    "day1-slide-027"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "26"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-027",
   "type": "slide",
   "day": 1,
   "slide_number": 27,
   "slide_title": "RUW Voids - CA (example calculation)",
   "slide_content": "Calibrated bucket volume = 0.00716 m3 (0.253 ft3). Avg. dry mass of 3 tests = 11.1231 kg (24.522 lb). Gsb = 2.712. RODDED Unit Weight (RUW) = Mass/Volume: 11.1231 kg / 0.00716 m3 = 1553.5 kg/m3; 24.522 lb / 0.253 ft3 = 96.9 lb/ft3. SOLID Unit Weight (SUW) = Gsb x 1000 kg/m3: 2.712 x 1000 = 2712 kg/m3 (2.712 x 62.4 = 169.2 lb/ft3). RUW VOIDS = 100 x {1-(RUW/SUW)}: 100 x {1-(1553.5/2712)} = 42.7%; 100 x {1-(96.9/169.2)} = 42.7%.",
   "instructor_notes": "CA Rodded UW example calculation. A 0.01 change in Gsb is approximately a 0.2% change in RUW Voids. Hard, angular particles and/or particles with significant microtexture should compact LESS (higher voids) in the RUW test. Soft and/or round particles should compact MORE (lower voids) in the RUW test. Flat and elongated particles are more susceptible to degradation in the RUW test and therefore may compact MORE (lower voids) depending upon the amount of degradation, if any, that occurs. This may also correspond with a LARGER DIFFERENCE than normal between the LUW and RUW Voids.",
   "key_callouts": [],
   "formulas": [
    "RUW = Mass / Volume",
    "SUW = Gsb x 1000 kg/m3 = Gsb x 62.4 lb/ft3",
    "RUW Voids % = 100 x {1 - (RUW / SUW)}"
   ],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "RUW",
    "voids",
    "example",
    "SUW",
    "Gsb",
    "CA",
    "flat and elongated",
    "degradation"
   ],
   "related_ids": [
    "ex-ruw-voids-ca",
    "day1-slide-025",
    "day1-slide-026",
    "day1-slide-028"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "27"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-028",
   "type": "slide",
   "day": 1,
   "slide_number": 28,
   "slide_title": "CA Unit Weights - Rules-of-Thumb",
   "slide_content": "CA LUW voids normally range from 43-49%. CA RUW voids normally range from 37-43%. 4-8% between Loose and Rodded conditions. Example: LUW voids = 48.3%, RUW voids = 42.7%, Difference = 5.6%.",
   "instructor_notes": "These are rules-of-thumb to give you an idea of typical results. CA's that contain an excessive amount of material that is considered fine for the NMAS of the individual CA can have LOWER void results. Also, CA's with unusual microtexture or shape can have significantly different (lower or higher) results as well. The resulting volume of voids for the UW tests provides an indication of the aggregate packing of an individual CA. Since type and amount of compactive effort should be the same for UW tests performed in a given lab, differences in volume of voids between CA's of the same NMAS should be related to the other factors that influence aggregate packing - gradation, shape, texture and strength. If your results are outside these ranges: ensure the correct type and size of container was used; ensure the container volume was calibrated according to AASHTO T-19; check your calculations; check your Gsb for that stockpile - was an actual test performed on a portion of the stockpile sample used for UW testing?",
   "key_callouts": [
    "If the results are outside these ranges, there is generally something unusual in gradation, shape, texture or strength."
   ],
   "formulas": [],
   "figures": [
    "Side-by-side loose vs rodded bucket photos"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "rules of thumb",
    "LUW voids",
    "RUW voids",
    "43-49",
    "37-43",
    "4-8",
    "troubleshooting"
   ],
   "related_ids": [
    "ref-ca-uw-rules-of-thumb",
    "heur-ca-luw-ruw-voids-ranges",
    "day1-slide-025",
    "day1-slide-027"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "28"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-029",
   "type": "slide",
   "day": 1,
   "slide_number": 29,
   "slide_title": "Unit Weight Tests - FA",
   "slide_content": "Representative OVEN DRIED sample (gradation, shape, texture, strength,...). Use ENTIRE gradation - no material removed by sieving - different than FAA. Unit Weight's are REQUIRED (kg/m3 or lb/ft3). Dry Bulk Specific Gravity (Gsb) - used to determine solid volume and volume of voids. MOLD volume function of NMAS: 1/30 ft3 (~0.000944 m3) for #4 (4.75 mm) or smaller. AASHTO T19.",
   "instructor_notes": "Again, the accuracy of any test starts with a representative oven dried sample. Determine and record the gradation of the stockpile sample at the time of UW testing. Although an individual FA (i.e., stockpile) may contain a small amount of material that is considered coarse in regards to the combined blend, the ENTIRE gradation is used. Note that most FA's, as compared to most CA's, are generally more continuously-graded. For FA's, as far as the blending method to be shown later, ONLY the unit weight results are REQUIRED. However, an accurate Gsb is necessary for determining the volume of solids and volume of voids. Determining the resulting voids of the UW tests helps in comparing FA's, similar to what is accomplished with the Fine Aggregate Angularity (FAA) test. For aggregates that have a NMAS of #4 (4.75 mm) or smaller, a 4\" (~101.6 mm) diameter by ~4-1/2\" (~114.3 mm) deep proctor mold is used. The volume is 1/30th ft3 (~0.000944 m3). The same size and type of mold should be used between labs if result comparisons are to be made because it affects the particle orientation achieved. Although AASHTO T19 does not address using a container smaller than 1/10th ft3, we have found the 4\" (~101.6 mm) diameter proctor mold to work well for typical FA's.",
   "key_callouts": [
    "AASHTO T19 includes procedures for accurately determining the container volume. MOLD to nearest 0.000001 m3 or 0.0001 ft3!",
    "UW tests are NOT performed on RAP, RAS or filler type products, such as Mineral Filler (MF), Bag House Fines (BHF's) or Hydrated Lime."
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "unit weight",
    "FA",
    "proctor mold",
    "AASHTO T19",
    "Gsb",
    "FAA",
    "RAP",
    "RAS",
    "mineral filler"
   ],
   "related_ids": [
    "ref-bucket-mold-specs",
    "day1-slide-023"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "29"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "ref-pcs-chart",
   "type": "reference_table",
   "title": "Primary Control Sieve by Mixture NMAS",
   "table_kind": "pcs_chart",
   "applies_to": {
    "mix_types": [
     "all"
    ],
    "nmas": [
     37.5,
     25.0,
     19.0,
     12.5,
     9.5,
     4.75
    ]
   },
   "columns": [
    "nmas_mm",
    "nmas_us",
    "nmas_x_022_mm",
    "pcs_mm",
    "pcs_us"
   ],
   "rows": [
    {
     "nmas_mm": 37.5,
     "nmas_us": "1-1/2\"",
     "nmas_x_022_mm": 8.25,
     "pcs_mm": 9.5,
     "pcs_us": "3/8\""
    },
    {
     "nmas_mm": 25.0,
     "nmas_us": "1\"",
     "nmas_x_022_mm": 5.5,
     "pcs_mm": 4.75,
     "pcs_us": "#4"
    },
    {
     "nmas_mm": 19.0,
     "nmas_us": "3/4\"",
     "nmas_x_022_mm": 4.18,
     "pcs_mm": 4.75,
     "pcs_us": "#4"
    },
    {
     "nmas_mm": 12.5,
     "nmas_us": "1/2\"",
     "nmas_x_022_mm": 2.75,
     "pcs_mm": 2.36,
     "pcs_us": "#8"
    },
    {
     "nmas_mm": 9.5,
     "nmas_us": "3/8\"",
     "nmas_x_022_mm": 2.09,
     "pcs_mm": 2.36,
     "pcs_us": "#8"
    },
    {
     "nmas_mm": 4.75,
     "nmas_us": "#4",
     "nmas_x_022_mm": 1.045,
     "pcs_mm": 1.18,
     "pcs_us": "#16"
    }
   ],
   "footnotes": [
    "PCS = closest standard sieve to 0.22 x NMAS.",
    "PCS determines the break between Coarse and Fine in the combined blend AND if a given individual aggregate is a CA or FA.",
    "Coincides with AASHTO M 323, Section 6.1.3, Table 5 - Gradation Classification (PCS Control Point for Mixture NMAS)."
   ],
   "tags": [
    "PCS",
    "NMAS",
    "control sieves",
    "AASHTO M 323"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "21"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "ref-bucket-mold-specs",
   "type": "reference_table",
   "title": "Unit Weight Container Sizes (Bailey Method / AASHTO T19)",
   "table_kind": "bucket_mold_specs",
   "applies_to": {
    "mix_types": [
     "all"
    ],
    "nmas": "all"
   },
   "columns": [
    "aggregate_nmas_range",
    "container",
    "volume_ft3",
    "volume_m3",
    "calibration_precision"
   ],
   "rows": [
    {
     "aggregate_nmas_range": "25.0 mm - 9.5 mm (1\" - 3/8\")",
     "container": "metal bucket",
     "volume_ft3": 0.25,
     "volume_m3": 0.00708,
     "calibration_precision": "nearest 0.00001 m3 or 0.001 ft3"
    },
    {
     "aggregate_nmas_range": "37.5 mm (1-1/2\")",
     "container": "metal bucket",
     "volume_ft3": 0.5,
     "volume_m3": 0.01416,
     "calibration_precision": "nearest 0.00001 m3 or 0.001 ft3"
    },
    {
     "aggregate_nmas_range": "4.75 mm (#4) or smaller (FA)",
     "container": "proctor mold, 4\" (~101.6 mm) dia x ~4-1/2\" (~114.3 mm) deep",
     "volume_ft3": 0.0333,
     "volume_m3": 0.000944,
     "calibration_precision": "nearest 0.000001 m3 or 0.0001 ft3"
    }
   ],
   "footnotes": [
    "Use the same size and type of container between labs if result comparisons are to be made - it affects particle orientation.",
    "1/4 ft3 bucket is used for 1\"-3/8\" NMAS CAs even though AASHTO T19 specifies a different minimum bucket size by NMAS.",
    "FA volume 1/30 ft3; AASHTO T19 does not address containers smaller than 1/10 ft3, but the 4\" proctor mold works well for typical FA's.",
    "Unit Weight tests are NOT performed on RAP, RAS, or filler-type products (Mineral Filler, Bag House Fines, Hydrated Lime)."
   ],
   "tags": [
    "bucket",
    "proctor mold",
    "AASHTO T19",
    "unit weight",
    "calibration"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "23, 29"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "ref-ca-uw-rules-of-thumb",
   "type": "reference_table",
   "title": "CA Unit Weight Voids - Typical Ranges (Rules-of-Thumb)",
   "table_kind": "rules_of_thumb_ranges",
   "applies_to": {
    "mix_types": [
     "all"
    ],
    "nmas": "all"
   },
   "columns": [
    "quantity",
    "typical_min_pct",
    "typical_max_pct"
   ],
   "rows": [
    {
     "quantity": "CA LUW voids",
     "typical_min_pct": 43,
     "typical_max_pct": 49
    },
    {
     "quantity": "CA RUW voids",
     "typical_min_pct": 37,
     "typical_max_pct": 43
    },
    {
     "quantity": "Difference between Loose and Rodded voids",
     "typical_min_pct": 4,
     "typical_max_pct": 8
    }
   ],
   "footnotes": [
    "Example from course: LUW voids 48.3%, RUW voids 42.7%, difference 5.6%.",
    "CA's with excessive fine material (relative to their own NMAS) can have lower void results.",
    "Unusual microtexture or shape can push results lower or higher.",
    "If outside these ranges: check container type/size, container calibration (AASHTO T-19), calculations, and the stockpile Gsb."
   ],
   "tags": [
    "rules of thumb",
    "LUW",
    "RUW",
    "voids",
    "CA",
    "typical ranges"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "28"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "proc-luw-test-ca",
   "type": "procedure",
   "title": "Loose Unit Weight (LUW) Test - Coarse Aggregate",
   "purpose": "Determine the minimum density (mass/volume) providing particle-to-particle contact of a CA - the beginning of CA interlock - and the resulting volume of voids. General outline; AASHTO T19 procedures should be followed.",
   "prerequisites": [
    "Representative oven dried sample (~45 kg / ~100 lb minimum total from stockpile, blended and split into four samples of ~11 kg / ~25 lb)",
    "Gradation of the stockpile sample determined and recorded at time of UW testing (entire gradation used - no material removed by sieving)",
    "Accurate Dry Bulk Specific Gravity (Gsb) for the stockpile",
    "Calibrated container of correct size for the aggregate NMAS (see ref-bucket-mold-specs)"
   ],
   "steps": [
    {
     "step_number": 1,
     "title": "Fill bucket loosely",
     "instruction": "Fill the calibrated bucket using the shoveling procedure with NO compactive effort applied.",
     "formula": null,
     "notes": "This is the start of particle-to-particle contact."
    },
    {
     "step_number": 2,
     "title": "Strike off",
     "instruction": "Strike off approximately level, being careful not to compact.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 3,
     "title": "Determine LUW",
     "instruction": "Weigh and compute the loose unit weight in kg/m3 or lb/ft3.",
     "formula": "LUW = Mass / Volume",
     "notes": "Perform at least THREE times on separate representative samples and average."
    },
    {
     "step_number": 4,
     "title": "Determine volume of voids",
     "instruction": "Compute LUW voids from LUW and the Solid Unit Weight.",
     "formula": "LUW Voids % = 100 x {1 - (LUW / SUW)}, where SUW = Gsb x 1000 kg/m3 (Gsb x 62.4 lb/ft3)",
     "notes": null
    }
   ],
   "convergence_criteria": "AASHTO T19 single operator precision: two tests should not differ by more than 40 kg/m3 (2.5 lb/ft3).",
   "starting_points": null,
   "example_ids": [
    "ex-luw-voids-ca"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "LUW",
    "unit weight",
    "CA",
    "AASHTO T19",
    "test procedure"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "24-25"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "proc-ruw-test-ca",
   "type": "procedure",
   "title": "Rodded Unit Weight (RUW) Test - Coarse Aggregate",
   "purpose": "Determine the density of a CA with compactive effort applied (increased particle-to-particle contact) and the resulting volume of voids. General outline; AASHTO T19 procedures should be followed.",
   "prerequisites": [
    "Representative oven dried samples (at least three); material previously used for LUW tests is acceptable",
    "Gradation of the stockpile sample determined and recorded at time of UW testing (entire gradation used)",
    "Accurate Dry Bulk Specific Gravity (Gsb) for the stockpile",
    "Calibrated container of correct size for the aggregate NMAS (see ref-bucket-mold-specs)"
   ],
   "steps": [
    {
     "step_number": 1,
     "title": "Fill in three lifts",
     "instruction": "Fill the calibrated bucket in three equal lifts using the shoveling procedure.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 2,
     "title": "Rod each lift",
     "instruction": "Rod 25 times per lift.",
     "formula": null,
     "notes": "Due to possible degradation from rodding, material should NOT be re-used afterward; best practice is to discard it."
    },
    {
     "step_number": 3,
     "title": "Strike off",
     "instruction": "Strike off approximately level, being careful not to compact.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 4,
     "title": "Determine RUW",
     "instruction": "Weigh and compute the rodded unit weight in kg/m3 or lb/ft3.",
     "formula": "RUW = Mass / Volume",
     "notes": "Perform at least THREE times on separate representative samples and average."
    },
    {
     "step_number": 5,
     "title": "Determine volume of voids",
     "instruction": "Compute RUW voids from RUW and the Solid Unit Weight.",
     "formula": "RUW Voids % = 100 x {1 - (RUW / SUW)}, where SUW = Gsb x 1000 kg/m3 (Gsb x 62.4 lb/ft3)",
     "notes": null
    }
   ],
   "convergence_criteria": "AASHTO T19 single operator precision: two tests should not differ by more than 40 kg/m3 (2.5 lb/ft3).",
   "starting_points": null,
   "example_ids": [
    "ex-ruw-voids-ca"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "RUW",
    "unit weight",
    "CA",
    "AASHTO T19",
    "test procedure",
    "rodding"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "26-27"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "ex-luw-voids-ca",
   "type": "worked_example",
   "title": "CA Loose Unit Weight Voids - Example Calculation",
   "scenario": "Course example computing LUW, Solid Unit Weight and LUW voids for a CA from three loose unit weight tests (slide 25).",
   "given": {
    "calibrated_bucket_volume_m3": 0.00716,
    "calibrated_bucket_volume_ft3": 0.253,
    "avg_dry_mass_of_3_tests_kg": 10.0331,
    "avg_dry_mass_of_3_tests_lb": 22.119,
    "gsb": 2.712
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Compute Loose Unit Weight (metric)",
     "calculation": "10.0331 kg / 0.00716 m3",
     "result": "1401.3 kg/m3"
    },
    {
     "step_number": 2,
     "description": "Compute Loose Unit Weight (US)",
     "calculation": "22.119 lb / 0.253 ft3",
     "result": "87.4 lb/ft3"
    },
    {
     "step_number": 3,
     "description": "Compute Solid Unit Weight",
     "calculation": "SUW = Gsb x 1000 = 2.712 x 1000 (US: 2.712 x 62.4)",
     "result": "2712 kg/m3 (169.2 lb/ft3)"
    },
    {
     "step_number": 4,
     "description": "Compute LUW Voids",
     "calculation": "100 x {1 - (1401.3/2712)} (US: 100 x {1 - (87.4/169.2)})",
     "result": "48.3%"
    }
   ],
   "answer": {
    "luw_kg_m3": 1401.3,
    "luw_lb_ft3": 87.4,
    "suw_kg_m3": 2712,
    "suw_lb_ft3": 169.2,
    "luw_voids_pct": 48.3
   },
   "variants": [],
   "procedure_id": "proc-luw-test-ca",
   "mix_types": [
    "all"
   ],
   "tags": [
    "LUW",
    "voids",
    "worked example",
    "CA",
    "unit weight"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "25"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "ex-ruw-voids-ca",
   "type": "worked_example",
   "title": "CA Rodded Unit Weight Voids - Example Calculation",
   "scenario": "Course example computing RUW, Solid Unit Weight and RUW voids for the same CA (same bucket and Gsb as the LUW example) from three rodded unit weight tests (slide 27).",
   "given": {
    "calibrated_bucket_volume_m3": 0.00716,
    "calibrated_bucket_volume_ft3": 0.253,
    "avg_dry_mass_of_3_tests_kg": 11.1231,
    "avg_dry_mass_of_3_tests_lb": 24.522,
    "gsb": 2.712
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Compute Rodded Unit Weight (metric)",
     "calculation": "11.1231 kg / 0.00716 m3",
     "result": "1553.5 kg/m3"
    },
    {
     "step_number": 2,
     "description": "Compute Rodded Unit Weight (US)",
     "calculation": "24.522 lb / 0.253 ft3",
     "result": "96.9 lb/ft3"
    },
    {
     "step_number": 3,
     "description": "Compute Solid Unit Weight",
     "calculation": "SUW = Gsb x 1000 = 2.712 x 1000 (US: 2.712 x 62.4)",
     "result": "2712 kg/m3 (169.2 lb/ft3)"
    },
    {
     "step_number": 4,
     "description": "Compute RUW Voids",
     "calculation": "100 x {1 - (1553.5/2712)} (US: 100 x {1 - (96.9/169.2)})",
     "result": "42.7%"
    }
   ],
   "answer": {
    "ruw_kg_m3": 1553.5,
    "ruw_lb_ft3": 96.9,
    "suw_kg_m3": 2712,
    "suw_lb_ft3": 169.2,
    "ruw_voids_pct": 42.7
   },
   "variants": [],
   "procedure_id": "proc-ruw-test-ca",
   "mix_types": [
    "all"
   ],
   "tags": [
    "RUW",
    "voids",
    "worked example",
    "CA",
    "unit weight"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "27"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "heur-vma-drives-voids",
   "type": "heuristic",
   "statement": "VMA drives Air Voids: VMA is in control and always LESS variable; Air Voids follow VMA but, because they are also impacted by effective AC volume, are always MORE variable. Strive to control VMA and you'll have less variability in Air Voids.",
   "rationale": "Instructor's parent/child supermarket analogy: VMA is the parent (on a mission, in control), Air Voids is the child (follows along but occasionally wanders because of the effective AC volume influence). Production specs are usually on Air Voids, but controlling the aggregate structure (VMA) is the lever.",
   "thresholds": null,
   "when_violated": "If Air Voids swing more than VMA explains, look at effective AC volume (AC content) rather than the aggregate structure.",
   "context": "Production QC / relationship between VMA and Air Voids",
   "mix_types": [
    "all"
   ],
   "tags": [
    "VMA",
    "air voids",
    "variability",
    "parent child",
    "QC"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "11"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "heur-bailey-nmas-15pct",
   "type": "heuristic",
   "statement": "Bailey NMAS = the first sieve LARGER than the first sieve to retain MORE than 15% by weight (not the conventional 10%). Exception: use the original 10% definition if the mix type doesn't change AND the CA ratio (or 'OLD' CA ratio) is less than 1.5 x the corresponding recommended MAX value.",
   "rationale": "Redefined in 2006 after reviewing extensive data. The 15% definition reflects a coarse fraction with more interceptors and fewer pluggers than normal, which reduces void size between coarse particles even when they float in the fine fraction. It helps explain volumetric changes and field compaction/segregation issues. Predominantly affects mixes previously called 19.0 mm (3/4\") NMAS that are actually 12.5 mm (1/2\") NMAS; switching NMAS can change the PCS and the sieves for the three ratios, and commonly flips a 'fine-graded 19.0 mm' mix to a 'coarse-graded 12.5 mm' mix.",
   "thresholds": {
    "retain_pct_bailey": 15,
    "retain_pct_original": 10,
    "use_10pct_if_ca_ratio_below": "1.5 x recommended MAX CA ratio (and mix type unchanged)"
   },
   "when_violated": "If NMAS is mis-assigned, the Half/PCS/SCS/TCS sieves, mix type designation, and spreadsheet (VBS, Estimation Sheet) inputs will all be wrong - re-check before evaluating ratios.",
   "context": "Determining NMAS, mix type, and control sieves for a combined blend",
   "mix_types": [
    "all"
   ],
   "tags": [
    "NMAS",
    "15 percent",
    "10 percent",
    "mix type",
    "PCS",
    "CA ratio"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "13-14"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "heur-ca-fa-classification",
   "type": "heuristic",
   "statement": "An individual aggregate is a Coarse Aggregate (CA) if 49.9% or LESS of its gradation passes the PCS of the COMBINED blend, and a Fine Aggregate (FA) if 50.0% or MORE passes that PCS.",
   "rationale": "The PCS (closest sieve to 0.22 x NMAS) defines the break between particles that create voids and particles that fill them; whether a stockpile is predominantly above or below that break determines how it is treated in the blending method.",
   "thresholds": {
    "ca_max_passing_pcs_pct": 49.9,
    "fa_min_passing_pcs_pct": 50.0
   },
   "when_violated": "When a virgin aggregate is not predominantly a CA or FA, it may be necessary to perform unit weight tests on the Coarse (plus PCS) and Fine (minus PCS) fractions of the combined blend to determine combined coarse fraction solids/voids and combined fine fraction loose and rodded unit weights.",
   "context": "Classifying individual stockpiles as CA or FA for the blending method",
   "mix_types": [
    "all"
   ],
   "tags": [
    "CA",
    "FA",
    "classification",
    "PCS",
    "49.9",
    "50.0"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "21"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "heur-ca-luw-ruw-voids-ranges",
   "type": "heuristic",
   "statement": "CA LUW voids normally range from 43-49%; CA RUW voids normally range from 37-43%; the difference between loose and rodded conditions is normally 4-8%.",
   "rationale": "Rules-of-thumb for typical CA unit weight results. Since compactive effort is constant for UW tests in a given lab, differences in voids between CA's of the same NMAS reflect the other packing factors - gradation, shape, texture and strength.",
   "thresholds": {
    "luw_voids_pct": [
     43,
     49
    ],
    "ruw_voids_pct": [
     37,
     43
    ],
    "luw_minus_ruw_pct": [
     4,
     8
    ]
   },
   "when_violated": "If results are outside these ranges there is generally something unusual in gradation, shape, texture or strength. First verify: correct container type/size, container calibration per AASHTO T-19, calculations, and whether the Gsb was actually tested on a portion of the stockpile sample used for UW testing. Excessive fine material in the CA lowers void results.",
   "context": "CA unit weight testing / screening UW results",
   "mix_types": [
    "all"
   ],
   "tags": [
    "LUW",
    "RUW",
    "voids",
    "rules of thumb",
    "CA",
    "troubleshooting"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "28"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "heur-gsb-uw-voids-sensitivity",
   "type": "heuristic",
   "statement": "A 0.01 change in Gsb is approximately a 0.2% change in LUW (or RUW) voids.",
   "rationale": "Voids are computed against the Solid Unit Weight (Gsb x 1000 kg/m3), so error in Gsb propagates directly into the computed voids - an accurate stockpile Gsb matters.",
   "thresholds": {
    "gsb_change": 0.01,
    "voids_change_pct": 0.2
   },
   "when_violated": "If UW voids look off, check whether the Gsb used was actually tested on a portion of the stockpile sample used for UW testing.",
   "context": "CA unit weight voids calculations",
   "mix_types": [
    "all"
   ],
   "tags": [
    "Gsb",
    "sensitivity",
    "LUW",
    "RUW",
    "voids"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "25, 27"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "heur-particle-shape-uw-voids",
   "type": "heuristic",
   "statement": "Round or smooth particles compact MORE (lower voids) in the LUW and RUW tests; hard, angular particles and/or particles with significant microtexture compact LESS (higher voids). Flat and elongated particles are more susceptible to degradation in the RUW test and may compact MORE (lower RUW voids), often showing a larger-than-normal difference between LUW and RUW voids.",
   "rationale": "Shape, texture and strength are three of the five aggregate packing factors; the two unit weight compaction states expose them differently, and rodding can degrade flat/elongated particles.",
   "thresholds": null,
   "when_violated": "A larger-than-normal LUW-RUW voids difference (outside ~4-8%) suggests degradation of flat and elongated particles or other unusual shape/texture/strength effects.",
   "context": "Interpreting CA unit weight voids results",
   "mix_types": [
    "all"
   ],
   "tags": [
    "shape",
    "texture",
    "strength",
    "LUW",
    "RUW",
    "flat and elongated",
    "degradation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "25, 27-28"
   },
   "verified": true,
   "chunk": "1_1"
  },
  {
   "id": "day1-slide-030",
   "type": "slide",
   "day": 1,
   "slide_number": 30,
   "slide_title": "Loose Unit Weight - FA",
   "slide_content": "NO compactive effort applied. Start of particle-to-particle contact. Use shoveling procedure. Strike off level (careful not to compact). Determine LUW (kg/m3 or lb/ft3). Determine volume of voids. AASHTO T19.",
   "instructor_notes": "The Loose Unit Weight (LUW) test has NO compactive effort applied. It is the minimum density (mass per volume) required to provide particle-to-particle contact of the FA. This is a general outline; AASHTO T19 test procedures should be followed. Perform at least THREE times on separate, representative samples of the oven dried aggregate to establish an average LUW. For most FA's, obtain a minimum total sample weight of ~14 kg or ~30 lb from the stockpile, blended and split into four samples of ~3.5 kg or ~7.5 lb each. Do NOT utilize the mold extension (if the mold has one) for the LUW test. After striking off the top of the mold, lightly tap the side of the mold to slightly settle the material BEFORE cleaning the excess off the rim. AASHTO T19 single operator precision: two tests not differ by more than 40 kg/m3 or 2.5 lb/ft3. Generally, the LUW test for FA presents the most difficulty in meeting these precision limits - FA is generally more continuously-graded than CA, so there are more particles to orient. Be careful to minimize segregation when placing the FA into the mold. Test frequency depends on changes in aggregate characteristics; in most cases once or twice a year.",
   "key_callouts": [
    "Generally, the LUW test for FA presents the most difficulty in meeting these precision limits."
   ],
   "formulas": [
    "LUW = Mass / Volume"
   ],
   "figures": [
    "Proctor mold filled with loose fine aggregate"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "LUW",
    "FA",
    "AASHTO T19",
    "proctor mold",
    "precision",
    "segregation"
   ],
   "related_ids": [
    "proc-luw-test-fa",
    "ex-fa-luw-voids",
    "day1-slide-029",
    "day1-slide-031"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "30"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-031",
   "type": "slide",
   "day": 1,
   "slide_number": 31,
   "slide_title": "LUW Voids - FA (example calculation)",
   "slide_content": "Calibrated mold volume = 0.000957 m3 (0.0338 ft3). Avg. dry mass of 3 tests = 1.5351 kg (3.384 lb). Gsb = 2.620. LOOSE Unit Weight (LUW) = Mass/Volume: 1.5351 kg / 0.000957 m3 = 1604.1 kg/m3; 3.384 lb / 0.0338 ft3 = 100.1 lb/ft3. SOLID Unit Weight (SUW) = Gsb x 1000 kg/m3: 2.620 x 1000 = 2620 kg/m3 (2.620 x 62.4 = 163.5 lb/ft3). LUW VOIDS = 100 x {1-(LUW/SUW)}: 100 x {1-(1604.1/2620)} = 38.8%; 100 x {1-(100.1/163.5)} = 38.8%.",
   "instructor_notes": "FA Loose UW example calculation. A 0.01 change in Gsb is approximately a 0.2% change in LUW Voids. Round or smooth particles should compact MORE (lower voids) in the LUW test. Angular particles and/or particles with significant microtexture should compact LESS (higher voids) in the LUW test.",
   "key_callouts": [],
   "formulas": [
    "LUW = Mass / Volume",
    "SUW = Gsb x 1000 kg/m3 = Gsb x 62.4 lb/ft3",
    "LUW Voids % = 100 x {1 - (LUW / SUW)}"
   ],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "LUW",
    "voids",
    "FA",
    "example",
    "Gsb"
   ],
   "related_ids": [
    "ex-fa-luw-voids",
    "day1-slide-030",
    "day1-slide-033"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "31"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-032",
   "type": "slide",
   "day": 1,
   "slide_number": 32,
   "slide_title": "Rodded Unit Weight - FA",
   "slide_content": "WITH compactive effort applied. Increased FA strength. Three equal lifts using shoveling procedure. Rod 25 times per lift. Strike off ~ level (careful not to compact). Determine RUW (kg/m3 or lb/ft3). Determine volume of voids. AASHTO T19.",
   "instructor_notes": "The Rodded Unit Weight (RUW) condition represents an increase in the mass and volume of FA within a unit volume from compactive effort being applied, increased particle-to-particle contact and increased strength. General outline; AASHTO T19 procedures should be followed. Perform at least THREE times on separate representative samples of the oven dried aggregate to establish an average RUW. START with the mold extension on (if the mold has one) during the RUW test, but be sure to remove it carefully, using a twisting and lifting action, after rodding the 3rd lift. After striking off the top of the mold, lightly tap the side of the mold to slightly settle the material BEFORE cleaning the excess off the rim. Like for CA, due to the possibility of degradation from the rodding procedure, material should NOT be re-used; best practice is to discard it. It is acceptable to use the material previously used for the LUW tests. AASHTO T19 single operator precision: 40 kg/m3 or 2.5 lb/ft3. Test frequency: once or twice a year in most cases.",
   "key_callouts": [],
   "formulas": [
    "RUW = Mass / Volume"
   ],
   "figures": [
    "Proctor mold with rodded fine aggregate"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "RUW",
    "FA",
    "AASHTO T19",
    "mold extension",
    "rodding",
    "degradation"
   ],
   "related_ids": [
    "proc-ruw-test-fa",
    "ex-fa-ruw-voids",
    "day1-slide-030",
    "day1-slide-033"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "32"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-033",
   "type": "slide",
   "day": 1,
   "slide_number": 33,
   "slide_title": "RUW Voids - FA (example calculation)",
   "slide_content": "Calibrated mold volume = 0.000957 m3 (0.0338 ft3). Avg. dry mass of 3 tests = 1.6621 kg (3.664 lb). Gsb = 2.620. RODDED Unit Weight (RUW) = Mass/Volume: 1.6621 kg / 0.000957 m3 = 1736.8 kg/m3; 3.664 lb / 0.0338 ft3 = 108.4 lb/ft3. SOLID Unit Weight (SUW) = Gsb x 1000 kg/m3: 2.620 x 1000 = 2620 kg/m3 (2.620 x 62.4 = 163.5 lb/ft3). RUW VOIDS = 100 x {1-(RUW/SUW)}: 100 x {1-(1736.8/2620)} = 33.7%; 100 x {1-(108.4/163.5)} = 33.7%.",
   "instructor_notes": "FA Rodded UW example calculation. A 0.01 change in Gsb is approximately a 0.2% change in RUW Voids. Hard, angular particles and/or particles with significant microtexture should compact LESS in the RUW test. Soft and/or round particles should compact MORE (lower voids) in the RUW test. Flat and elongated particles are more susceptible to degradation in the RUW test and therefore may compact MORE (lower voids) depending upon the amount of degradation, if any, that occurs. This may also correspond with a larger difference than normal between the LUW and RUW Voids.",
   "key_callouts": [],
   "formulas": [
    "RUW = Mass / Volume",
    "SUW = Gsb x 1000 kg/m3 = Gsb x 62.4 lb/ft3",
    "RUW Voids % = 100 x {1 - (RUW / SUW)}"
   ],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "RUW",
    "voids",
    "FA",
    "example",
    "Gsb"
   ],
   "related_ids": [
    "ex-fa-ruw-voids",
    "day1-slide-031",
    "day1-slide-032",
    "day1-slide-034"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "33"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-034",
   "type": "slide",
   "day": 1,
   "slide_number": 34,
   "slide_title": "FA Unit Weights - Rules-of-Thumb",
   "slide_content": "FA LUW voids normally range from 35-43%. FA RUW voids normally range from 28-36%. 4-8% between Loose and Rodded conditions. Example: LUW voids = 38.8%, RUW voids = 33.7%, Difference = 5.1%.",
   "instructor_notes": "Again, these are rules-of-thumb to give an idea of typical results. Unlike CA, FA is generally more continuously-graded. Therefore, if a FA contains an excessive amount of material that is considered coarse in regards to itself, results can vary significantly. Also, FA's with unusual microtexture or shape can have significantly different (lower or higher) results. The resulting volume of voids for the UW tests provides an indication of the aggregate packing for an individual FA. Since type and amount of compactive effort should be the same between UW tests performed in a given lab, differences in volume of voids between FA's of the same NMAS should be related to the other factors that influence aggregate packing - gradation, shape, texture and strength. If results are outside these ranges: ensure the correct type and size of container was used; ensure the container volume was calibrated according to AASHTO T-19; check calculations; check the Gsb for that stockpile - was an actual test performed on a portion of the stockpile sample used for UW testing?",
   "key_callouts": [
    "If the results are outside these ranges, there is generally something unusual in gradation, shape, texture or strength."
   ],
   "formulas": [],
   "figures": [
    "Side-by-side loose vs rodded mold photos"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "rules of thumb",
    "FA",
    "LUW voids",
    "RUW voids",
    "35-43",
    "28-36",
    "4-8",
    "troubleshooting"
   ],
   "related_ids": [
    "ref-fa-uw-rules-of-thumb",
    "heur-fa-luw-ruw-voids-ranges",
    "day1-slide-028"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "34"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-035",
   "type": "slide",
   "day": 1,
   "slide_number": 35,
   "slide_title": "Unit Weight Tests Video + Best Practices",
   "slide_content": "Unit Weight Tests Video: Coarse Aggregate (LUW, RUW), Fine Aggregate (LUW, RUW). Questions? Video developed by the Ontario Hot Mix Producers Association (OHMPA). Thanks Vince and Randy!",
   "instructor_notes": "Best-practice notes accompanying the video: Calibrate container volume! BUCKET to 5 decimal places (m3) or 3 decimal places (ft3), and MOLD to 6 decimal places (m3) or 4 decimal places (ft3). Record MASS to 0.1 gram or 0.1 lb and Unit Weight to 0.1 kg/m3 or 0.1 lb/ft3. Mark INSIDE of container at 1/3rd depths for consistent filling. Mark OUTSIDE of container at 1/3rd depths for pre-measuring rod penetration. Ok to use material from LUW tests for RUW tests, but do NOT re-rod material for 2nd and/or 3rd RUW test. Prefer 4 uniformly split samples, especially for CA, at approximately 25% more weight than needed for RUW test, rather than dipping out of a single pan; this also provides an extra sample (4th) if the required precision limit (spread of 40 kg/m3 or 2.5 lb/ft3) isn't met with the initial three tests (more common with LUW test of FA). When shoveling material into the bucket or mold: place it in different areas to minimize segregation; do NOT shake the scoop, rather rake off the material with your hand or a putty knife; keep material stirred to prevent fines from settling in the container you are dipping from. Minimize movement of bucket or mold during UW test and keep it on a stable surface. Strike off level with the top of the container, OR strike off according to AASHTO T-19 - be consistent. Start with mold extension ON for FA RUW test, but remove BEFORE striking off sample. After striking off mold, tap side of mold to settle BEFORE cleaning with brush. OK to add aggregate if there is a small depression left on top, and then strike off (generally necessary with CA after rodding the top lift during the RUW test). Determine and record the gradation of the stockpile sample at the time of UW testing.",
   "key_callouts": [
    "When analyzing a stockpile with a NMAS of 1/4\" (~6.35mm), perform UW tests in BOTH the 1/4 ft3 bucket AND 1/30th ft3 mold, and use the results with the HIGHER density (i.e., lower Voids).",
    "When comparing NEW UW voids to PREVIOUS results, consider 3% or more a SIGNIFICANT difference and investigate WHY the UW voids changed - gradation, type and amount of compactive effort, shape, strength, texture, container used, tester, etc."
   ],
   "formulas": [],
   "figures": [
    "Cartoon figure; OHMPA video title"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "unit weight",
    "best practices",
    "video",
    "OHMPA",
    "calibration",
    "precision",
    "segregation",
    "quarter inch NMAS"
   ],
   "related_ids": [
    "proc-uw-best-practices",
    "heur-uw-3pct-significant",
    "heur-quarter-inch-nmas-both-containers",
    "note-slide35-seal-proctor-mold",
    "note-slide35-rod-spec",
    "note-slide35-gsb-if-possible"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "35"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-036",
   "type": "slide",
   "day": 1,
   "slide_number": 36,
   "slide_title": "What's Next?...",
   "slide_content": "Normal Agg Info: Gradation, Gsb, Water abs, etc. Unit Weight Tests: Completed for CA, Completed for FA. Where do you start? Establish Mix TYPE.",
   "instructor_notes": "We should already have the normal information required on each individual aggregate for a mix design - gradation, dry bulk specific gravity (Gsb), water absorption, etc. The only additional tests that are required, the Unit Weight tests, have now been completed. So where do you start? Establish mix TYPE.",
   "key_callouts": [],
   "formulas": [],
   "figures": [
    "Shrugging designer cartoon"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "workflow",
    "mix type",
    "prerequisites",
    "unit weight"
   ],
   "related_ids": [
    "day1-slide-037"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "36"
   },
   "verified": true,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-037",
   "type": "slide",
   "day": 1,
   "slide_number": 37,
   "slide_title": "Defining Mix Type",
   "slide_content": "Dense-Graded: (a) Fine-Graded - CA Volume LESS than LUW (FA in control); little to NO particle-to-particle contact of CA (Plus PCS). (b) Coarse-Graded - CA Volume BETWEEN LUW & RUW (CA & FA working together); SOME particle-to-particle contact of CA (Plus PCS). Gap-Graded: SMA - CA Volume GREATER than RUW (CA in control); CONSIDERABLE particle-to-particle contact of CA (Plus PCS).",
   "instructor_notes": "First, let's define the three main types of mixes we generally utilize. Fine-graded mixes are typically defined as those that plot above the corresponding PCS intersection point with the maximum density line on a 0.45 power chart. From the Bailey Method point-of-view, a Fine-graded mix is a dense-graded mix that has a CA volume less than the CA Loose UW condition, which means the coarse fraction is spread apart and floating in the fine fraction; therefore the fine fraction carries most of the load. Coarse-graded mixes are typically defined as those that plot below the corresponding PCS intersection point with the maximum density line, and it's generally assumed there is some degree of CA interlock achieved. From the Bailey Method point-of-view, a Coarse-graded mix is a dense-graded mix that has a CA volume equal to or greater than the CA Loose UW condition, which represents the beginning of CA interlock; this mix uses BOTH the coarse fraction and the fine fraction for its load-carrying capacity. Stone Matrix Asphalt (SMA) is a gap-graded mix with a greater degree of CA interlock than a typical Coarse-graded mix. From the Bailey Method point-of-view, an SMA is a gap-graded mix that has a CA volume greater than the CA Rodded UW condition, which is well into CA interlock; this mix uses the coarse fraction for its load-carrying capacity. The Bailey Method utilizes the CA LUW and RUW tests as REFERENCES for establishing the desired volume of COARSE fraction, according to the TYPE of mix being designed.",
   "key_callouts": [],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "mix type",
    "fine-graded",
    "coarse-graded",
    "SMA",
    "dense-graded",
    "gap-graded",
    "CA volume",
    "LUW",
    "RUW",
    "interlock"
   ],
   "related_ids": [
    "heur-mix-type-definition",
    "day1-slide-046",
    "day1-slide-047",
    "day1-slide-048",
    "day1-slide-049"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "37"
   },
   "verified": true,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-038",
   "type": "slide",
   "day": 1,
   "slide_number": 38,
   "slide_title": "Establishing Mix Type",
   "slide_content": "Coarse Aggregate Interlock: What is it? Is it needed? Dense-graded (Coarse-graded or Fine-graded): preference, gradation bands, available materials, volumetric requirements, performance test requirements, COMPACTED field lift thickness, etc. SMA: Required. How is it designed into or out of the blend? By controlling the Volume of CA.",
   "instructor_notes": "CA interlock is particle-to-particle contact of the coarse fraction (i.e., plus PCS), which forms a CA skeleton that serves as the primary load carrying mechanism in the mix. Is CA interlock needed for the mix type in question? For dense-graded mixes there are questions to answer: Do you prefer a Coarse-graded or Fine-graded mix? Will the gradation bands allow either type, or do they specify one or the other? What aggregates are available? Do you have a low L.A. abrasion CA or is it soft? Is the CA cubical or flat and elongated? Do you have manufactured sand available or just natural sand? What type and amount of compactive effort is required for the design? What COMPACTED lift thickness will be used in the field - is it 4 x NMAS or is it thinner, yet the owner has a density requirement you have to meet? For SMA, CA interlock is REQUIRED; SMA specifications typically include a VCAmix requirement in relation to the VCAdrc. So how do we design CA interlock, or the lack thereof, into the combined blend? By controlling the VOLUME of CA.",
   "key_callouts": [
    "Lift Thickness (NCHRP Report 531 - Conclusions and Recommendations): C-G and SMA minimum 4 x NMAS, maximum 8 x NMAS; Fine-Graded minimum 3 x NMAS, maximum 6 x NMAS."
   ],
   "formulas": [],
   "figures": [
    "Balance scale icon"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "CA interlock",
    "mix type selection",
    "lift thickness",
    "NCHRP 531",
    "VCA",
    "manufactured sand",
    "LA abrasion"
   ],
   "related_ids": [
    "ref-lift-thickness-guidelines",
    "day1-slide-037",
    "day1-slide-053"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "38"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-039",
   "type": "slide",
   "day": 1,
   "slide_number": 39,
   "slide_title": "Comparison of Different CA's (intro)",
   "slide_content": "Light - ACBF slag. Medium - Limestone. Heavy - Steel slag. CA's are generally similar in the VOLUME of voids they contain; however, their unit weights can be very different depending upon their corresponding dry bulk specific gravity (Gsb).",
   "instructor_notes": "The next few slides illustrate why it's important to blend aggregates by VOLUME, and then determine the blend by mass (or weight). We're going to look at three different CA's that have the same NMAS and very similar gradations, but significantly different dry bulk specific gravities (Gsb's). However, the results will show very similar volumes of solids and voids at 100.0% of the corresponding CA LUW condition.",
   "key_callouts": [],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "ACBF slag",
    "limestone",
    "steel slag",
    "Gsb",
    "volume vs weight",
    "comparison"
   ],
   "related_ids": [
    "ex-ca-comparison-luw",
    "day1-slide-040"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "39"
   },
   "verified": true,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-040",
   "type": "slide",
   "day": 1,
   "slide_number": 40,
   "slide_title": "Comparison of Different CA's (at LUW)",
   "slide_content": "ACBF Slag: Gsb = 2.30, LUW = 1176.7 kg/m3 (73.5 lb/ft3), Voids = 48.8%. Limestone: Gsb = 2.63, LUW = 1378.1 kg/m3 (86.0 lb/ft3), Voids = 47.6%. Steel Slag: Gsb = 3.14, LUW = 1683.0 kg/m3 (105.1 lb/ft3), Voids = 46.4%. All 3 at THEIR corresponding LUW. Solid volume = LUW / (Gsb x 1000): ACBF = 0.512 m3, Limestone = 0.524 m3, Steel = 0.536 m3. LUW Voids = (1.0 - solid volume) x 100.",
   "instructor_notes": "Note the differences in Gsb's of the three CA's, but the similarities in the solid volume of each CA at its respective LUW condition. Once we know the solid volume for each CA, we can determine the volume of voids in the LUW condition, and then express the volume of voids as a percentage. Note the similarities in the percentage of LUW voids for each of the three CA's.",
   "key_callouts": [],
   "formulas": [
    "Solid volume = LUW / (Gsb x 1000 kg/m3) = LUW / (Gsb x 62.4 lb/ft3)",
    "LUW Voids % = (1.0 - solid volume) x 100"
   ],
   "figures": [
    "Three buckets of ACBF slag, limestone, steel slag"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "ACBF slag",
    "limestone",
    "steel slag",
    "LUW",
    "solid volume",
    "voids",
    "Gsb"
   ],
   "related_ids": [
    "ex-ca-comparison-luw",
    "day1-slide-039",
    "day1-slide-041"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "40"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-041",
   "type": "slide",
   "day": 1,
   "slide_number": 41,
   "slide_title": "Mass of FA to Fill CA Voids",
   "slide_content": "FA RUW in Light CA (ACBF slag): 0.488 m3 x 1757.2 kg/m3 = 857.5 kg; 0.488 ft3 x 109.7 lb/ft3 = 53.5 lb. FA RUW in Medium CA (Limestone): 0.476 m3 x 1757.2 kg/m3 = 836.4 kg; 0.476 ft3 x 109.7 lb/ft3 = 52.2 lb. FA RUW in Heavy CA (Steel slag): 0.464 m3 x 1757.2 kg/m3 = 815.3 kg; 0.464 ft3 x 109.7 lb/ft3 = 50.9 lb.",
   "instructor_notes": "We are going to discuss this in more detail later, but with the Bailey Method, we are simply FILLING the volume of voids in the CA with an EQUAL volume of FA. In these examples, the voids in each CA are filled with FA at its RUW condition, which in this case is 1757.2 kg/m3 (109.7 lb/ft3). Since we know the volume of voids for each CA at its corresponding LUW condition, we can determine the mass (or weight) of FA required to fill that corresponding volume, by multiplying the volume of CA voids by the FA RUW.",
   "key_callouts": [],
   "formulas": [
    "Mass of FA = Volume of CA voids x FA RUW"
   ],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "FA",
    "CA voids",
    "RUW",
    "blending by volume",
    "mass"
   ],
   "related_ids": [
    "ex-fa-mass-to-fill-ca-voids",
    "day1-slide-040",
    "day1-slide-042"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "41"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-042",
   "type": "slide",
   "day": 1,
   "slide_number": 42,
   "slide_title": "CA & FA by Mass (& Volume)",
   "slide_content": "Light blend: 1176.7 + 857.5 = 2034.2 kg (73.5 + 53.5 = 127.0 lb). MASS = 57.8% CA + 42.2% FA; VOLUME = 51.2% CA + 48.8% FA (0.512 & 0.488). Medium blend: 1378.1 + 836.4 = 2214.5 kg (86.0 + 52.2 = 138.2 lb). MASS = 62.2% CA + 37.8% FA; VOLUME = 52.4% CA + 47.6% FA (0.524 & 0.476). Heavy blend: 1683.0 + 815.3 = 2498.3 kg (105.1 + 50.9 = 156.0 lb). MASS = 67.4% CA + 32.6% FA; VOLUME = 53.6% CA + 46.4% FA (0.536 & 0.464).",
   "instructor_notes": "Now that we have the mass of CA and FA for each of the three blends, we can determine the percentages of CA and FA by mass. Although the percentages by mass are significantly different between the three blends, the volumes of Coarse and Fine are similar, with each CA at its corresponding LUW condition.",
   "key_callouts": [],
   "formulas": [
    "% CA by mass = CA mass / (CA mass + FA mass) x 100"
   ],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "blend percentages",
    "mass vs volume",
    "light medium heavy",
    "CA",
    "FA"
   ],
   "related_ids": [
    "ex-ca-fa-mass-volume-blends",
    "day1-slide-041",
    "day1-slide-043"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "42"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-043",
   "type": "slide",
   "day": 1,
   "slide_number": 43,
   "slide_title": "Light, Medium and Heavy Blends at 100.0% CA LUW",
   "slide_content": "0.45 power chart (% passing vs sieve size mm^0.45, sieves 0.075 to 12.5) showing the three combined blend gradations by MASS, each blend at 100.0% of its respective CA LUW. Light blend by MASS = 57.8% CA & 42.2% FA (volume 0.512 & 0.488). Medium = 62.2% CA & 37.8% FA (0.524 & 0.476). Heavy = 67.4% CA & 32.6% FA (0.536 & 0.464). Fine/Coarse break marked at 2.36 mm.",
   "instructor_notes": "If we plotted the three combined blend gradations on a 0.45 power curve, the gradations by mass are clearly different since they utilize different percentages of Coarse and Fine by mass. However, the volumes of Coarse and Fine are similar, with each blend at 100.0% of its respective CA LUW condition. Therefore, the three blends have very similar degrees of CA interlock.",
   "key_callouts": [],
   "formulas": [],
   "figures": [
    "0.45 power chart with three gradation curves circled at the PCS area"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "0.45 power chart",
    "CA LUW",
    "interlock",
    "gradation by mass",
    "volume"
   ],
   "related_ids": [
    "ex-ca-fa-mass-volume-blends",
    "day1-slide-042",
    "day1-slide-044"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "43"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-044",
   "type": "slide",
   "day": 1,
   "slide_number": 44,
   "slide_title": "Light, Medium and Heavy Blends at 62.2% CA and 37.8% FA (equal mass)",
   "slide_content": "0.45 power chart of the three blends all at EQUAL MASS (62.2% CA and 37.8% FA). Resulting % CA LUW: Light 107.5%, Medium 100.0%, Heavy 92.3%. ACBF Slag (Light) blend: CA = 2034.2 kg/m3 x 0.622 = 1265.3 kg/m3 (127.0 lb/ft3 x 0.622 = 79.0 lb/ft3); FA = 2034.2 x 0.378 = 768.9 kg/m3 (48.0 lb/ft3); LUW of ACBF Slag = 1176.7 kg/m3 (73.5 lb/ft3); (1265.3/1176.7) x 100 = 107.5% of CA LUW - More CA Interlock. Steel Slag (Heavy) blend: CA = 2498.3 x 0.622 = 1553.9 kg/m3 (156.0 x 0.622 = 97.0 lb/ft3); FA = 2498.3 x 0.378 = 944.4 kg/m3 (59.0 lb/ft3); LUW of Steel Slag = 1683.0 kg/m3 (105.1 lb/ft3); (1553.9/1683.0) x 100 = 92.3% of CA LUW - Less CA Interlock.",
   "instructor_notes": "If we used 62.2% CA & 37.8% FA by mass for all three blends, the combined blend gradations on the 0.45 power curve are very similar, but the VOLUME of Coarse for each blend is considerably different and therefore results in three blends with very different degrees of CA interlock.",
   "key_callouts": [],
   "formulas": [
    "% of CA LUW = (blend CA mass per unit volume / CA LUW) x 100"
   ],
   "figures": [
    "0.45 power chart with three nearly identical gradation curves"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "equal mass",
    "CA interlock",
    "% CA LUW",
    "107.5",
    "92.3",
    "volume vs mass"
   ],
   "related_ids": [
    "ex-equal-mass-different-interlock",
    "day1-slide-043",
    "day1-slide-045"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "44"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-045",
   "type": "slide",
   "day": 1,
   "slide_number": 45,
   "slide_title": "CA's With Different Gsb's",
   "slide_content": "CA is initially CHOSEN by Volume. As the mass of a CA volume decreases, the mass of FA required to fill the CA voids becomes a greater percentage of the total mass blend. Therefore, the gradation of the total blend by mass becomes FINER, while the volumes of Coarse and Fine remain approximately the same.",
   "instructor_notes": "The first step in developing a combined blend is choosing the volume of CA (degree of CA interlock or lack thereof) according to the type of mix being designed, with FIELD compactability in mind. The second step is to fill the voids within the CA structure with an EQUAL volume of FA to complete the unit volume. The main point to understand is the need to CHOOSE the CA volume and then determine the resulting blend by mass. The three CA's we've just discussed have similar volumes of solids at their corresponding LUW condition, but the mass of each solid volume is very different. The combined gradation of the three blends are different, but FIELD compactability of each should be similar.",
   "key_callouts": [],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "choose by volume",
    "Gsb",
    "blend by mass",
    "field compactability"
   ],
   "related_ids": [
    "day1-slide-044",
    "day1-slide-049"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "45"
   },
   "verified": true,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-046",
   "type": "slide",
   "day": 1,
   "slide_number": 46,
   "slide_title": "Fine-Graded Mix",
   "slide_content": "CA Volume < LUW. Little to No particle-to-particle contact of CA. Fine fraction carries most of the load. Increased amount of FA support needed. (Inset: VMA vs. % CA LUW curve with Fine region marked on left limb.)",
   "instructor_notes": "This is an example of a Fine-graded mix, which has a volume of CA less than the CA LUW condition. The coarse fraction is spread apart and floating in the fine fraction. The main point to realize with this mix type is that the load is PRIMARILY carried by the fine fraction. Therefore, the support from the fine fraction is very important, which is basically a function of gradation, shape, texture and strength.",
   "key_callouts": [],
   "formulas": [],
   "figures": [
    "Bucket cross-section with coarse particles floating in fine matrix"
   ],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "CA volume",
    "LUW",
    "floating",
    "fine fraction control"
   ],
   "related_ids": [
    "day1-slide-037",
    "heur-mix-type-definition"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "46"
   },
   "verified": true,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-047",
   "type": "slide",
   "day": 1,
   "slide_number": 47,
   "slide_title": "Coarse-Graded Mix",
   "slide_content": "CA Volume >= LUW. Some particle-to-particle contact of CA. Coarse AND Fine fractions carry load. Reduced FA strength needed. (Inset: VMA vs. % CA LUW curve with Coarse region marked near the dip.)",
   "instructor_notes": "With this example of a Coarse-graded mix, the CA's are touching to some degree, so the volume of CA is equal to or greater than the CA LUW condition. The coarse fraction is playing the primary role in the load carrying capacity of the aggregate structure. However, the fine fraction is also playing a role by supporting the coarse fraction. For this mix type, the coarse fraction properties become more important, while the fine fraction properties, although still important, play less of a role as compared to a Fine-graded mix. This may allow more options in regards to blending FA's.",
   "key_callouts": [],
   "formulas": [],
   "figures": [
    "Bucket cross-section with touching coarse particles"
   ],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "coarse-graded",
    "CA volume",
    "LUW",
    "RUW",
    "interlock",
    "load carrying"
   ],
   "related_ids": [
    "day1-slide-037",
    "heur-mix-type-definition"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "47"
   },
   "verified": true,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-048",
   "type": "slide",
   "day": 1,
   "slide_number": 48,
   "slide_title": "Stone Matrix Asphalt",
   "slide_content": "CA Volume > RUW. Coarse fraction carries the load (VCAmix <= VCAdrc). Remaining voids filled with mastic (FA, mineral filler, fibers & asphalt cement). (Inset: VMA vs. % CA LUW curve with SMA region marked on the steep right limb.)",
   "instructor_notes": "With an SMA, there is an even greater volume of CA, which is the dominant load carrying portion of the aggregate structure. The AASHTO SMA specification requires the Voids in the Coarse Aggregate of the mix (VCAmix) to be equal to or less than the Voids in the Coarse Aggregate, dry rodded condition (VCAdrc), to ensure a coarse aggregate skeleton. To determine the VCAdrc, the designer COMBINES the actual blend above the PCS, performs a RUW test, determines the combined dry bulk specific gravity (Gsb) for the material above the PCS and the resulting voids at the dry rodded condition; this is the value the VCAmix is compared to in the AASHTO specification. The VCAmix is calculated using the Gmb of the compacted mix specimen, the mass of the material above the PCS as a percentage of the TOTAL MIX, and the combined dry bulk specific gravity of the material above the PCS. The mastic serves to fill the CA voids to ensure durability. SMA specifications generally do not allow the use of natural sand, since even with an SMA there will be some fine particles that reside between the coarse particles. In most cases this mix type is used in the heaviest trafficked locations, so we don't want the risk of a small round particle acting as a ball bearing between a couple coarse particles.",
   "key_callouts": [
    "Don't confuse the VCAdrc of the CA COMBINED blend with the RUW of each INDIVIDUAL CA."
   ],
   "formulas": [
    "Requirement: VCAmix <= VCAdrc"
   ],
   "figures": [
    "Bucket cross-section with heavy coarse skeleton"
   ],
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "VCAmix",
    "VCAdrc",
    "mastic",
    "natural sand",
    "gap-graded",
    "RUW"
   ],
   "related_ids": [
    "day1-slide-037",
    "heur-mix-type-definition"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "48"
   },
   "verified": true,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-049",
   "type": "slide",
   "day": 1,
   "slide_number": 49,
   "slide_title": "Bailey Method Principle #1 - Chosen Unit Weight (CUW) - CA's",
   "slide_content": "Picture of all three mix types vs CA volume: Fine-Graded 60-80% CA LUW (< LUW); Coarse-Graded 95-105% CA LUW (at LUW); SMA 110-125% CA RUW (at RUW). Arrow: INCREASING CA CUW.",
   "instructor_notes": "This is a picture of all three mix types in relation to CA VOLUME. To establish the desired CA VOLUME in the combined blend, we need to 'choose' what we refer to as the CA Chosen Unit Weight (CUW). For Fine-graded and Coarse-graded mixes, the CA CUW references a percentage of the CA Loose Unit Weight (LUW). For SMA mixes, the CA CUW references a percentage of the CA Rodded Unit Weight (RUW). The CA CUW determines the VOLUME of COARSE fraction in the combined blend - this is Principle #1 of the Bailey Method. An increase or decrease in the CA CUW results in an increase or decrease in the VOLUME of the COARSE fraction in the combined blend. As the CA CUW INCREASES, the combined blend gets COARSER (% passing PCS decreases). As the CA CUW DECREASES, the combined blend gets FINER (% passing PCS increases).",
   "key_callouts": [
    "CA CUW < 60% of CA LUW generally results in a SMALLER NMAS than intended!",
    "CA CUW > 80% but < 95% of CA LUW can cause compaction issues (e.g., tenderness) IF there is a significant difference in shape, texture and/or strength of one fraction vs. the other, since a blend gradation in this range tends to bounce back and forth from being Coarse-graded and Fine-graded during production due to normal gradation variation! In this situation, there will be little to NO change in volumetrics!",
    "CA CUW > 105% of CA LUW generally results in a difficult to compact C-G mix, especially for thinner lift thicknesses!",
    "Changing the CA CUW 10% for any mix type, generally changes the percent passing the PCS in the combined blend 4-5%."
   ],
   "formulas": [],
   "figures": [
    "Three buckets: < LUW (fine-graded), LUW (coarse-graded), RUW (SMA) with increasing CA CUW arrow"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "principle 1",
    "CUW",
    "chosen unit weight",
    "60-80",
    "95-105",
    "110-125",
    "PCS",
    "guardrails"
   ],
   "related_ids": [
    "ref-cuw-starting-points",
    "heur-cuw-guardrails-dense",
    "note-slide49-cg-110pct",
    "day1-slide-051",
    "day1-slide-052",
    "day1-slide-054"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "49"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-050",
   "type": "slide",
   "day": 1,
   "slide_number": 50,
   "slide_title": "Chosen Unit Weight - CA's: Considerations for All Mix Types",
   "slide_content": "Type and Amount of Compactive Effort: Marshall hammer, Gyratory compactor, etc.; 50 blows, 100 gyrations, etc. Aggregate Characteristics: Gradation (coarse, fine, uniform, single sized...), Shape (round, cubical, flat & elongated...), Texture (rough, smooth...), Strength (strong, weak...).",
   "instructor_notes": "Before we discuss how to determine a starting point for the CA CUW, let's review what influences aggregate packing. The type and amount of compactive effort required in the lab has a direct effect on aggregate packing and hence the resulting VMA. The characteristics of the aggregates - gradation, shape, texture and strength - all have a significant effect on the aggregate packing that will occur in the combined blend. The point is to relate the SUGGESTED RANGES for the CA CUW and your knowledge of the various aggregate characteristics to INCREASED or DECREASED aggregate packing. We'll talk more about this later.",
   "key_callouts": [],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "CUW",
    "compactive effort",
    "aggregate characteristics",
    "packing factors"
   ],
   "related_ids": [
    "day1-slide-012",
    "day1-slide-049"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "50"
   },
   "verified": true,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-051",
   "type": "slide",
   "day": 1,
   "slide_number": 51,
   "slide_title": "Chosen Unit Weight - CA's: Fine-Graded Mixes",
   "slide_content": "Start at 70% CA LUW (range 60-80%). Ensure FA volume EXCEEDS CA LUW voids: 80% is closest to Max Density line, LOWEST VMA; 60% is further from Max Density line, HIGHEST VMA. Decreasing CA CUW INCREASES VMA (provided fine fraction characteristics remain constant); 'floating' coarse particles replaced with multiple fine particles (increased number of particles to orient). 6% change in PCS ~= 1% change in VMA (range 5-7%). Bailey Method Principle #1.",
   "instructor_notes": "With a Fine-graded mix, we are designing the mix with a fine fraction volume that EXCEEDS the CA LUW voids; therefore we utilize a CA CUW LESS than the CA LUW. The CA CUW should generally be <= 80% CA LUW to reasonably ensure the fine fraction is in control of the overall aggregate structure. AVOID mixes > 80% CA LUW - they can go in & out of CA interlock during production due to normal gradation variations. A CA CUW of 80% CA LUW is generally close to the maximum density line at the PCS, is more compactable, and will generally result in the lowest VMA for a Fine-graded mix. A CA CUW of 60% CA LUW is further away from the maximum density line at the PCS, is less compactable, and will generally result in the highest VMA. A CA CUW < 60% generally results in a SMALLER NMAS than intended! Therefore, Fine-graded mixes are generally designed AROUND 70% CA LUW. DECREASING the CA CUW INCREASES VMA, provided the fine fraction characteristics remain basically the same - the combined blend gradation is moving away from and above the maximum density line at the PCS. The coarse particles are primarily floating in the fine fraction, filling voids in the overall aggregate structure. Decreasing the CA CUW increases the volume of fine and decreases the volume of coarse, replacing coarse particles with a greater number of fine particles that have voids between them. VMA is also increased simply by having an increased number of particles to orient with the same compactive effort. Decreasing the CA CUW towards 60% CA LUW makes the overall blend finer and increases VMA - but be careful, at some point the NMAS will shift DOWN to the next SMALLER size! Rule-of-thumb: 6% change in PCS ~= 1% change in VMA, with a range of 5-7%. Increasing VMA in a Fine-graded mix with a change in the PCS typically requires INCREASING the % passing the PCS (i.e., DECREASING the CA CUW).",
   "key_callouts": [
    "Avoid mixes > 80% CA LUW. They can go in & out of CA interlock during production due to normal gradation variations.",
    "A CA CUW < 60% generally results in a SMALLER NMAS than intended!",
    "But be careful! At some point the NMAS will shift DOWN to the next SMALLER size!"
   ],
   "formulas": [
    "Rule-of-thumb (fine-graded): 6% change in PCS ~= 1% change in VMA (range 5-7%)"
   ],
   "figures": [],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "CUW",
    "fine-graded",
    "70% CA LUW",
    "PCS",
    "VMA",
    "principle 1",
    "sensitivity"
   ],
   "related_ids": [
    "ref-cuw-starting-points",
    "ref-pcs-vma-sensitivity",
    "day1-slide-049"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "51"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-052",
   "type": "slide",
   "day": 1,
   "slide_number": 52,
   "slide_title": "Chosen Unit Weight - CA's: Coarse-Graded Mixes",
   "slide_content": "Start at 100% CA LUW (range 95-105%). Most compactable blend 95% CA LUW: closest to Max Density line, LOWEST VMA; may vary in and out of CA interlock. Increasing CA CUW towards 105% CA LUW: increases VMA; increases CA interlock and decreases compaction of FA. Higher type mixes, softer CA's, lower strength FA's: increases compactive effort required in field; increases degradation susceptibility. 4% change in PCS ~= 1% change in VMA (range 3-5%). Bailey Method Principle #1.",
   "instructor_notes": "Start Coarse-graded mixes at 100% CA LUW to ensure a minimum amount of CA interlock. A CA CUW of 95% CA LUW is generally close to the maximum density line at the PCS, more compactable, and will generally result in the lowest VMA for a Coarse-graded mix. AVOID mixes < 95% CA LUW - they can go in & out of CA interlock during production due to normal gradation variations. A CA CUW <= 100% CA LUW allows the fine fraction to be compacted more, since no compactive effort is required for the Coarse fraction (plus PCS); compaction energy is focused on the fine fraction. Performing UW's on the entire gradation of each individual CA provides a small factor of safety since each UW would be slightly less without the 'fine' fraction (voids would be more). Also, AC acts as a lubricant, so a mix will normally compact slightly denser than the CA CUW, especially in the 95-100% CA LUW range. Therefore, a CA CUW as low as 95% CA LUW generally achieves some CA particle-to-particle contact. But the lower the CA CUW, the more the mix relies on the fine fraction strength. INCREASING the CA CUW INCREASES VMA by increasing the degree of CA interlock. Although the volume of fine decreases, the increase in CA interlock decreases the compaction achieved in the fine fraction. Some mixes (e.g., high Ndesign) may require a CA CUW > 100% CA LUW. As the CA CUW increases, the CA skeleton becomes increasingly difficult to compact. Softer CA's designed at high CA CUW's often degrade considerably, and may degrade more in the lab than under the rollers, depending on the type and amount of compactive effort used at both locations. FIELD compaction problems are often an issue when the CA CUW is above 105% CA LUW, especially if compacted lift thickness is too thin! The range of 95-105% CA LUW is a spread of ~4-5% on the PCS in the combined blend! Rule-of-thumb: 4% change in PCS ~= 1% change in VMA, with a range of 3-5%. This value is less than that used for Fine-graded mixes - Coarse-graded mixes are more sensitive to PCS change since they are influenced by the compactability of BOTH fractions, coarse and fine. Increasing VMA in a Coarse-graded mix with a change in the PCS requires DECREASING the % passing the PCS (i.e., INCREASING the CA CUW).",
   "key_callouts": [
    "Avoid mixes < 95% CA LUW. They can go in & out of CA interlock during production due to normal gradation variations.",
    "Field compaction problems are often an issue when the CA CUW is above 105% CA LUW, especially if compacted lift thickness is too thin!"
   ],
   "formulas": [
    "Rule-of-thumb (coarse-graded): 4% change in PCS ~= 1% change in VMA (range 3-5%)"
   ],
   "figures": [],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "CUW",
    "coarse-graded",
    "100% CA LUW",
    "95-105",
    "PCS",
    "VMA",
    "principle 1",
    "degradation",
    "sensitivity"
   ],
   "related_ids": [
    "ref-cuw-starting-points",
    "ref-pcs-vma-sensitivity",
    "day1-slide-049",
    "day1-slide-053"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "52"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-053",
   "type": "slide",
   "day": 1,
   "slide_number": 53,
   "slide_title": "Chosen Unit Weight - CA's: Coarse-Graded Mixes (lift thickness & other options)",
   "slide_content": "COMPACTED lift thickness: importance increases as CA CUW increases; MINIMUM of 4 x NMAS! Increasing CA CUW vs. Other Options: 100% CA LUW improves FIELD compactability; if possible, increase VMA in Fine fraction (manufactured sand vs. natural sand; reduce dust in blend? balance amount for proper mortar stiffness).",
   "instructor_notes": "Lift thickness directly affects the particle orientation achieved during placement and compaction in the field. As the CA CUW increases, the VOLUME of coarse increases; the combined blend gets coarser and the effort required to orient and compact the CA particles increases, so lift thickness becomes even more important with C-G mixes. Rather than increasing the CA CUW > 105% CA LUW to meet required volumetric properties, consider increasing VMA and minimizing field compactability issues by altering the aggregate packing characteristics of the fine fraction. This can normally be accomplished by using more manufactured sand and less natural sand. It can also be accomplished by reducing the amount of dust sized material in the blend, but it is important, even in a dense-graded mix, to have the 'right' stiffness in the mortar (i.e., Dust / EFFECTIVE AC combination). For Coarse-graded mixes, the point is to keep the CA CUW as close as possible to 100% CA LUW for better field compactability and increase VMA as needed by altering the packing of the fine fraction.",
   "key_callouts": [
    "Lift Thickness (NCHRP Report 531 - Conclusions and Recommendations): C-G and SMA minimum 4 x NMAS, maximum 8 x NMAS; Fine-Graded minimum 3 x NMAS, maximum 6 x NMAS."
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "lift thickness",
    "4x NMAS",
    "manufactured sand",
    "dust",
    "mortar stiffness",
    "field compactability",
    "NCHRP 531"
   ],
   "related_ids": [
    "ref-lift-thickness-guidelines",
    "day1-slide-038",
    "day1-slide-052"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "53"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-054",
   "type": "slide",
   "day": 1,
   "slide_number": 54,
   "slide_title": "Chosen Unit Weight - CA's: SMA Mixes",
   "slide_content": "Start at 118% CA Rodded UW (range 110-125%). Blends near 110% CA RUW provide denser packing: will have LOWER VMA; requires STRONGER FA structure to achieve volumetrics (can cause difficulty with field compaction; can cause VCAmix to EXCEED VCAdrc). Increasing CA CUW towards 125% CA RUW: increases VMA (increases CA interlock and decreases mastic compaction); effect on field compactive effort required?; increases degradation susceptibility. 2% change in PCS ~= 1% change in VMA (range 1-3%). Bailey Method Principle #1.",
   "instructor_notes": "To ensure a CA skeleton (VCAmix less than the VCAdrc), start the CA CUW at 118% CA RUW. A lower CA CUW (i.e., near 110% CA RUW) provides denser packing and lower VMA; therefore, in order to achieve sufficient VMA with a larger FA volume, the fine fraction has to be less compactable than normal, which can decrease field compactability by requiring more of the total compaction energy applied. AVOID CA CUW values < 110% CA RUW! Often, SMA mixes are easier to compact in the field than many dense-graded mixes, due to the minimal volume of FA (higher CA CUW), which interferes less with the compaction of the coarse, and a fine fraction that is less resistant to compaction (less manufactured sand and more mineral filler). This also relates to achieving a VCAmix less than VCAdrc. In situations where the VCAmix exceeds the VCAdrc, the blend normally has to be coarsened (i.e., less FA) to increase CA compactability. INCREASING the CA CUW INCREASES VMA by increasing the degree of CA interlock; although the volume of fine decreases, the increase in CA interlock decreases the compaction achieved in the fine fraction (mastic). The effect of increasing the CA CUW on field compactability can vary depending upon the mastic characteristics. View an SMA as an Open-Graded mix where compaction consists of seating the CA; SMA has a similar CA structure, but with enough mastic to fill the majority of the CA voids. SMA designs with high CA CUW's generally utilize more MF and less FA, so the mastic is more compactable and interferes even less with the compaction of the CA particles. However, an overly high CA CUW value (> 125% CA RUW) increases the opportunity for CA degradation. Rule-of-thumb: 2% change in PCS ~= 1% change in VMA, with a range of 1-3%. This value is HALF that used for coarse-graded mixtures - the coarse fraction is much more in control in an SMA, so a slight PCS change has an increased effect on VMA. Increasing VMA in an SMA with a change in the PCS consists of DECREASING the % passing the PCS (i.e., INCREASING the CA CUW).",
   "key_callouts": [
    "Avoid CA CUW values < 110% CA RUW!",
    "An overly high CA CUW value (> 125% CA RUW) increases the opportunity for CA degradation."
   ],
   "formulas": [
    "Rule-of-thumb (SMA): 2% change in PCS ~= 1% change in VMA (range 1-3%)"
   ],
   "figures": [],
   "mix_types": [
    "sma"
   ],
   "tags": [
    "CUW",
    "SMA",
    "118% CA RUW",
    "110-125",
    "VCAmix",
    "VCAdrc",
    "mastic",
    "principle 1",
    "sensitivity"
   ],
   "related_ids": [
    "ref-cuw-starting-points",
    "ref-pcs-vma-sensitivity",
    "heur-cuw-guardrails-sma",
    "day1-slide-048",
    "day1-slide-049"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "54"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-055",
   "type": "slide",
   "day": 1,
   "slide_number": 55,
   "slide_title": "Chosen Unit Weight - CA's: SMA Mixes (lift thickness & 30-20-10 rule)",
   "slide_content": "COMPACTED lift thickness: important for CA orientation; MINIMUM of 4 x NMAS. '30-20-10' rule: 30% passing 4.75 mm (#4), 20% passing 2.36 mm (#8), 10% passing 0.075 mm (#200). Blends with aggregates of Significantly Different Gsb's: view blend gradation by volume and by weight.",
   "instructor_notes": "Again, lift thickness is important to allow sufficient orientation of the coarse particles during field compaction of an SMA. But SMA mixes generally orient easier than C-G mixes. Also, when designing or evaluating an SMA blend, consider the '30-20-10' rule. This is a rule-of-thumb from European SMA's that suggests 30% passing the 4.75 mm (#4), 20% passing the 2.36 mm (#8), and 10% passing the 0.075 mm (#200). These values would relate to 9.5 mm (3/8\") and 12.5 mm (1/2\") NMAS SMA's. Your mix or individual aggregates may require something entirely different. Be sure to look at your combined blend gradation by VOLUME as well as by WEIGHT if there are any significant differences in aggregate dry bulk specific gravities (Gsb's). See AASHTO M325, Standard Specification for Stone Matrix Asphalt (SMA).",
   "key_callouts": [],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "30-20-10",
    "lift thickness",
    "AASHTO M325",
    "volume vs weight"
   ],
   "related_ids": [
    "heur-sma-30-20-10",
    "day1-slide-054"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "55"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-056",
   "type": "slide",
   "day": 1,
   "slide_number": 56,
   "slide_title": "FA Volume and Strength",
   "slide_content": "FA volume = CA Voids at CA CUW. CA volume + FA volume = 'Unit' volume. FA strength INCREASES from LUW to RUW. (Figure: LUW mold vs RUW mold, arrow 'FA Strength INCREASES'.)",
   "instructor_notes": "Whatever CA VOLUME is chosen, we need to fill the remaining voids with an equivalent FA VOLUME, so we have a 'unit' volume, regardless of mix type. Remember that the Loose UW represents a condition of particle orientation that has had NO compactive effort applied - it is the most compactable, but also the lowest in strength. The Rodded UW represents a condition of increased particle orientation, which has had some degree of compactive effort applied; therefore, the Rodded UW condition results in an increased amount of strength.",
   "key_callouts": [],
   "formulas": [
    "FA volume = CA voids at CA CUW",
    "CA volume + FA volume = unit volume"
   ],
   "figures": [
    "LUW vs RUW molds with FA strength arrow"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "FA volume",
    "unit volume",
    "FA strength",
    "LUW",
    "RUW"
   ],
   "related_ids": [
    "day1-slide-057",
    "day1-slide-045"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "56"
   },
   "verified": true,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-057",
   "type": "slide",
   "day": 1,
   "slide_number": 57,
   "slide_title": "Unit Weight - FA's: Dense-Graded Mixes",
   "slide_content": "Dense-Graded only! Coarse-graded mixes: FA compacted by CA particles; utilizes FA AND CA strength. Fine-graded mixes: FA in control (CA 'floating'); primarily utilizes FA strength. Rodded Unit Weight = Increased FA strength. FA UW = 100% of RODDED Unit Weight.",
   "instructor_notes": "With Coarse-graded mixes, the fine fraction is compacted as the coarse fraction comes together; the overall aggregate structure utilizes the strength of both fractions. With Fine-graded mixes, where the fine fraction volume exceeds the voids in the coarse fraction, the fine fraction is in control; the coarse particles are floating in the fine fraction, so the strength of the overall structure relies primarily on the fine fraction. The RUW condition of the FA provides more strength than the LUW condition. Therefore, for dense-graded mixes, we need some, if not the majority, of the overall aggregate structural strength to come from the FA. For dense-graded mixes, the FA UW = 100% FA RODDED UW. The Heritage Research Group (HRG) Microsoft Excel spreadsheets we will review later are 'set' to use this value corresponding to each individual FA for Coarse-graded and Fine-graded mixes.",
   "key_callouts": [
    "For dense-graded mixes, the FA UW = 100% of FA RODDED Unit Weight."
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "coarse-graded",
    "fine-graded"
   ],
   "tags": [
    "FA UW",
    "100% RUW",
    "dense-graded",
    "FA strength",
    "HRG spreadsheets"
   ],
   "related_ids": [
    "day1-slide-056"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "57"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "proc-luw-test-fa",
   "type": "procedure",
   "title": "Loose Unit Weight (LUW) Test - Fine Aggregate",
   "purpose": "Determine the minimum density providing particle-to-particle contact of an FA and the resulting volume of voids. General outline; AASHTO T19 procedures should be followed.",
   "prerequisites": [
    "Representative oven dried sample (~14 kg / ~30 lb minimum total from stockpile, blended and split into four samples of ~3.5 kg / ~7.5 lb)",
    "Gradation of the stockpile sample determined and recorded at time of UW testing (entire gradation used)",
    "Accurate Dry Bulk Specific Gravity (Gsb) for the stockpile",
    "Calibrated proctor mold, ~4\" diameter, 1/30 ft3 (~0.000944 m3), calibrated to nearest 0.000001 m3 or 0.0001 ft3"
   ],
   "steps": [
    {
     "step_number": 1,
     "title": "Fill mold loosely",
     "instruction": "Fill the calibrated mold using the shoveling procedure with NO compactive effort. Do NOT use the mold extension (if the mold has one) for the LUW test. Place material in different areas to minimize segregation.",
     "formula": null,
     "notes": "FA is more continuously-graded than CA - more particles to orient, so precision is hardest to meet here."
    },
    {
     "step_number": 2,
     "title": "Strike off and settle",
     "instruction": "Strike off level (careful not to compact). After striking off, lightly tap the side of the mold to slightly settle the material BEFORE cleaning the excess off the rim.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 3,
     "title": "Determine LUW",
     "instruction": "Weigh and compute the loose unit weight in kg/m3 or lb/ft3.",
     "formula": "LUW = Mass / Volume",
     "notes": "Perform at least THREE times on separate representative samples and average."
    },
    {
     "step_number": 4,
     "title": "Determine volume of voids",
     "instruction": "Compute LUW voids from LUW and the Solid Unit Weight.",
     "formula": "LUW Voids % = 100 x {1 - (LUW / SUW)}, where SUW = Gsb x 1000 kg/m3 (Gsb x 62.4 lb/ft3)",
     "notes": null
    }
   ],
   "convergence_criteria": "AASHTO T19 single operator precision: two tests should not differ by more than 40 kg/m3 (2.5 lb/ft3). The FA LUW test presents the most difficulty in meeting this - keep a 4th split sample ready.",
   "starting_points": null,
   "example_ids": [
    "ex-fa-luw-voids"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "LUW",
    "FA",
    "AASHTO T19",
    "test procedure",
    "proctor mold"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "30-31"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "proc-ruw-test-fa",
   "type": "procedure",
   "title": "Rodded Unit Weight (RUW) Test - Fine Aggregate",
   "purpose": "Determine the density of an FA with compactive effort applied (increased particle-to-particle contact and increased FA strength) and the resulting volume of voids. General outline; AASHTO T19 procedures should be followed.",
   "prerequisites": [
    "Representative oven dried samples (at least three); material previously used for LUW tests is acceptable",
    "Gradation of the stockpile sample determined and recorded at time of UW testing (entire gradation used)",
    "Accurate Dry Bulk Specific Gravity (Gsb) for the stockpile",
    "Calibrated proctor mold with extension if available"
   ],
   "steps": [
    {
     "step_number": 1,
     "title": "Fill in three lifts with extension on",
     "instruction": "START with the mold extension on (if the mold has one). Fill the mold in three equal lifts using the shoveling procedure.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 2,
     "title": "Rod each lift",
     "instruction": "Rod 25 times per lift.",
     "formula": null,
     "notes": "Do not re-rod material for the 2nd and/or 3rd RUW test; due to degradation, discard material after use."
    },
    {
     "step_number": 3,
     "title": "Remove extension",
     "instruction": "After rodding the 3rd lift, remove the extension carefully using a twisting and lifting action, BEFORE striking off the sample.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 4,
     "title": "Strike off and settle",
     "instruction": "Strike off ~ level (careful not to compact). Lightly tap the side of the mold to settle the material BEFORE cleaning the excess off the rim.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 5,
     "title": "Determine RUW",
     "instruction": "Weigh and compute the rodded unit weight in kg/m3 or lb/ft3.",
     "formula": "RUW = Mass / Volume",
     "notes": "Perform at least THREE times on separate representative samples and average."
    },
    {
     "step_number": 6,
     "title": "Determine volume of voids",
     "instruction": "Compute RUW voids from RUW and the Solid Unit Weight.",
     "formula": "RUW Voids % = 100 x {1 - (RUW / SUW)}, where SUW = Gsb x 1000 kg/m3 (Gsb x 62.4 lb/ft3)",
     "notes": null
    }
   ],
   "convergence_criteria": "AASHTO T19 single operator precision: two tests should not differ by more than 40 kg/m3 (2.5 lb/ft3).",
   "starting_points": null,
   "example_ids": [
    "ex-fa-ruw-voids"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "RUW",
    "FA",
    "AASHTO T19",
    "test procedure",
    "mold extension"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "32-33"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "proc-uw-best-practices",
   "type": "procedure",
   "title": "Unit Weight Testing - Best Practices (CA and FA)",
   "purpose": "Practical rules for running consistent, comparable LUW/RUW tests, compiled from the OHMPA video discussion (slide 35).",
   "prerequisites": [
    "Calibrated containers: BUCKET volume to 5 decimal places (m3) or 3 decimal places (ft3); MOLD volume to 6 decimal places (m3) or 4 decimal places (ft3)"
   ],
   "steps": [
    {
     "step_number": 1,
     "title": "Record precision",
     "instruction": "Record MASS to 0.1 gram or 0.1 lb and Unit Weight to 0.1 kg/m3 or 0.1 lb/ft3.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 2,
     "title": "Mark containers",
     "instruction": "Mark INSIDE of container at 1/3rd depths for consistent filling; mark OUTSIDE at 1/3rd depths for pre-measuring rod penetration.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 3,
     "title": "Sample management",
     "instruction": "Prefer 4 uniformly split samples (especially for CA) at ~25% more weight than needed for the RUW test, rather than dipping out of a single pan. The 4th sample covers a retest if the 40 kg/m3 (2.5 lb/ft3) precision spread isn't met (most common with the FA LUW test). OK to use LUW material for RUW tests, but do NOT re-rod material for the 2nd/3rd RUW test.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 4,
     "title": "Shoveling technique",
     "instruction": "Place material in different areas to minimize segregation; do NOT shake the scoop - rake material off with your hand or a putty knife; keep the source material stirred so fines don't settle in the dipping container.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 5,
     "title": "Stability and strike-off",
     "instruction": "Minimize movement of the bucket/mold during the test and keep it on a stable surface. Strike off level with the top of the container OR per AASHTO T-19 - be consistent. Start with mold extension ON for the FA RUW test but remove BEFORE striking off. After striking off, tap the side to settle before cleaning with a brush. OK to add aggregate to a small depression and re-strike (generally needed with CA after rodding the top lift).",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 6,
     "title": "Document",
     "instruction": "Determine and record the gradation of the stockpile sample at the time of UW testing.",
     "formula": null,
     "notes": "Jake's class note: 'and Gsb if possible'."
    }
   ],
   "convergence_criteria": "Two tests within 40 kg/m3 (2.5 lb/ft3), AASHTO T19 single operator precision.",
   "starting_points": null,
   "example_ids": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "unit weight",
    "best practices",
    "calibration",
    "segregation",
    "OHMPA",
    "precision"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "35"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "ex-fa-luw-voids",
   "type": "worked_example",
   "title": "FA Loose Unit Weight Voids - Example Calculation",
   "scenario": "Course example computing LUW, Solid Unit Weight and LUW voids for an FA from three loose unit weight tests in the proctor mold (slide 31).",
   "given": {
    "calibrated_mold_volume_m3": 0.000957,
    "calibrated_mold_volume_ft3": 0.0338,
    "avg_dry_mass_of_3_tests_kg": 1.5351,
    "avg_dry_mass_of_3_tests_lb": 3.384,
    "gsb": 2.62
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Compute Loose Unit Weight (metric)",
     "calculation": "1.5351 kg / 0.000957 m3",
     "result": "1604.1 kg/m3"
    },
    {
     "step_number": 2,
     "description": "Compute Loose Unit Weight (US)",
     "calculation": "3.384 lb / 0.0338 ft3",
     "result": "100.1 lb/ft3"
    },
    {
     "step_number": 3,
     "description": "Compute Solid Unit Weight",
     "calculation": "SUW = 2.620 x 1000 (US: 2.620 x 62.4)",
     "result": "2620 kg/m3 (163.5 lb/ft3)"
    },
    {
     "step_number": 4,
     "description": "Compute LUW Voids",
     "calculation": "100 x {1 - (1604.1/2620)} (US: 100 x {1 - (100.1/163.5)})",
     "result": "38.8%"
    }
   ],
   "answer": {
    "luw_kg_m3": 1604.1,
    "luw_lb_ft3": 100.1,
    "suw_kg_m3": 2620,
    "suw_lb_ft3": 163.5,
    "luw_voids_pct": 38.8
   },
   "variants": [],
   "procedure_id": "proc-luw-test-fa",
   "mix_types": [
    "all"
   ],
   "tags": [
    "LUW",
    "voids",
    "FA",
    "worked example"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "31"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "ex-fa-ruw-voids",
   "type": "worked_example",
   "title": "FA Rodded Unit Weight Voids - Example Calculation",
   "scenario": "Course example computing RUW, Solid Unit Weight and RUW voids for the same FA (same mold and Gsb as the LUW example) from three rodded unit weight tests (slide 33).",
   "given": {
    "calibrated_mold_volume_m3": 0.000957,
    "calibrated_mold_volume_ft3": 0.0338,
    "avg_dry_mass_of_3_tests_kg": 1.6621,
    "avg_dry_mass_of_3_tests_lb": 3.664,
    "gsb": 2.62
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Compute Rodded Unit Weight (metric)",
     "calculation": "1.6621 kg / 0.000957 m3",
     "result": "1736.8 kg/m3"
    },
    {
     "step_number": 2,
     "description": "Compute Rodded Unit Weight (US)",
     "calculation": "3.664 lb / 0.0338 ft3",
     "result": "108.4 lb/ft3"
    },
    {
     "step_number": 3,
     "description": "Compute Solid Unit Weight",
     "calculation": "SUW = 2.620 x 1000 (US: 2.620 x 62.4)",
     "result": "2620 kg/m3 (163.5 lb/ft3)"
    },
    {
     "step_number": 4,
     "description": "Compute RUW Voids",
     "calculation": "100 x {1 - (1736.8/2620)} (US: 100 x {1 - (108.4/163.5)})",
     "result": "33.7%"
    }
   ],
   "answer": {
    "ruw_kg_m3": 1736.8,
    "ruw_lb_ft3": 108.4,
    "suw_kg_m3": 2620,
    "suw_lb_ft3": 163.5,
    "ruw_voids_pct": 33.7
   },
   "variants": [],
   "procedure_id": "proc-ruw-test-fa",
   "mix_types": [
    "all"
   ],
   "tags": [
    "RUW",
    "voids",
    "FA",
    "worked example"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "33"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "ex-ca-comparison-luw",
   "type": "worked_example",
   "title": "Three CA's (Light/Medium/Heavy) - Solid Volume and Voids at LUW",
   "scenario": "Three CA's with same NMAS and very similar gradations but very different Gsb's (ACBF slag, limestone, steel slag), each evaluated at 100.0% of its own LUW - showing similar solid volumes and voids despite different unit weights (slides 39-40).",
   "given": {
    "acbf_slag": {
     "gsb": 2.3,
     "luw_kg_m3": 1176.7,
     "luw_lb_ft3": 73.5
    },
    "limestone": {
     "gsb": 2.63,
     "luw_kg_m3": 1378.1,
     "luw_lb_ft3": 86.0
    },
    "steel_slag": {
     "gsb": 3.14,
     "luw_kg_m3": 1683.0,
     "luw_lb_ft3": 105.1
    }
   },
   "steps": [
    {
     "step_number": 1,
     "description": "ACBF slag solid volume and voids",
     "calculation": "1176.7 / (2.30 x 1000) = 0.512 m3; (1.0 - 0.512) x 100 (US: 73.5 / (2.30 x 62.4) = 0.512 ft3)",
     "result": "solid volume 0.512, LUW voids 48.8%"
    },
    {
     "step_number": 2,
     "description": "Limestone solid volume and voids",
     "calculation": "1378.1 / (2.63 x 1000) = 0.524; (1.0 - 0.524) x 100",
     "result": "solid volume 0.524, LUW voids 47.6%"
    },
    {
     "step_number": 3,
     "description": "Steel slag solid volume and voids",
     "calculation": "1683.0 / (3.14 x 1000) = 0.536; (1.0 - 0.536) x 100",
     "result": "solid volume 0.536, LUW voids 46.4%"
    }
   ],
   "answer": {
    "acbf_slag": {
     "solid_volume": 0.512,
     "luw_voids_pct": 48.8
    },
    "limestone": {
     "solid_volume": 0.524,
     "luw_voids_pct": 47.6
    },
    "steel_slag": {
     "solid_volume": 0.536,
     "luw_voids_pct": 46.4
    }
   },
   "variants": [],
   "procedure_id": null,
   "mix_types": [
    "all"
   ],
   "tags": [
    "ACBF slag",
    "limestone",
    "steel slag",
    "solid volume",
    "LUW voids",
    "Gsb",
    "worked example"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "39-40"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "ex-fa-mass-to-fill-ca-voids",
   "type": "worked_example",
   "title": "Mass of FA to Fill CA Voids (Light/Medium/Heavy CA's)",
   "scenario": "Filling the LUW voids of each of the three CA's with an equal volume of FA at its RUW condition (FA RUW = 1757.2 kg/m3 / 109.7 lb/ft3), to get the FA mass per unit volume of blend (slide 41).",
   "given": {
    "fa_ruw_kg_m3": 1757.2,
    "fa_ruw_lb_ft3": 109.7,
    "ca_void_volumes": {
     "acbf_slag": 0.488,
     "limestone": 0.476,
     "steel_slag": 0.464
    }
   },
   "steps": [
    {
     "step_number": 1,
     "description": "FA mass in Light CA (ACBF slag) voids",
     "calculation": "0.488 m3 x 1757.2 kg/m3 (US: 0.488 ft3 x 109.7 lb/ft3)",
     "result": "857.5 kg (53.5 lb)"
    },
    {
     "step_number": 2,
     "description": "FA mass in Medium CA (Limestone) voids",
     "calculation": "0.476 x 1757.2 (US: 0.476 x 109.7)",
     "result": "836.4 kg (52.2 lb)"
    },
    {
     "step_number": 3,
     "description": "FA mass in Heavy CA (Steel slag) voids",
     "calculation": "0.464 x 1757.2 (US: 0.464 x 109.7)",
     "result": "815.3 kg (50.9 lb)"
    }
   ],
   "answer": {
    "fa_mass_kg": {
     "acbf_slag": 857.5,
     "limestone": 836.4,
     "steel_slag": 815.3
    },
    "fa_mass_lb": {
     "acbf_slag": 53.5,
     "limestone": 52.2,
     "steel_slag": 50.9
    }
   },
   "variants": [],
   "procedure_id": null,
   "mix_types": [
    "all"
   ],
   "tags": [
    "FA mass",
    "CA voids",
    "RUW",
    "blending by volume",
    "worked example"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "41"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "ex-ca-fa-mass-volume-blends",
   "type": "worked_example",
   "title": "CA & FA Blend Percentages by Mass and Volume (Light/Medium/Heavy)",
   "scenario": "Combining each CA (at LUW) with the FA filling its voids to get total blend mass, then expressing CA/FA as percentages by mass vs by volume (slides 42-43).",
   "given": {
    "light_blend": {
     "ca_kg": 1176.7,
     "fa_kg": 857.5,
     "ca_lb": 73.5,
     "fa_lb": 53.5
    },
    "medium_blend": {
     "ca_kg": 1378.1,
     "fa_kg": 836.4,
     "ca_lb": 86.0,
     "fa_lb": 52.2
    },
    "heavy_blend": {
     "ca_kg": 1683.0,
     "fa_kg": 815.3,
     "ca_lb": 105.1,
     "fa_lb": 50.9
    }
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Light blend totals and percentages",
     "calculation": "1176.7 + 857.5 = 2034.2 kg (127.0 lb); CA% = 1176.7/2034.2",
     "result": "MASS 57.8% CA + 42.2% FA; VOLUME 51.2% CA + 48.8% FA (0.512 & 0.488)"
    },
    {
     "step_number": 2,
     "description": "Medium blend totals and percentages",
     "calculation": "1378.1 + 836.4 = 2214.5 kg (138.2 lb); CA% = 1378.1/2214.5",
     "result": "MASS 62.2% CA + 37.8% FA; VOLUME 52.4% CA + 47.6% FA (0.524 & 0.476)"
    },
    {
     "step_number": 3,
     "description": "Heavy blend totals and percentages",
     "calculation": "1683.0 + 815.3 = 2498.3 kg (156.0 lb); CA% = 1683.0/2498.3",
     "result": "MASS 67.4% CA + 32.6% FA; VOLUME 53.6% CA + 46.4% FA (0.536 & 0.464)"
    }
   ],
   "answer": {
    "light_blend": {
     "total_kg": 2034.2,
     "total_lb": 127.0,
     "mass_pct_ca": 57.8,
     "mass_pct_fa": 42.2,
     "vol_pct_ca": 51.2,
     "vol_pct_fa": 48.8
    },
    "medium_blend": {
     "total_kg": 2214.5,
     "total_lb": 138.2,
     "mass_pct_ca": 62.2,
     "mass_pct_fa": 37.8,
     "vol_pct_ca": 52.4,
     "vol_pct_fa": 47.6
    },
    "heavy_blend": {
     "total_kg": 2498.3,
     "total_lb": 156.0,
     "mass_pct_ca": 67.4,
     "mass_pct_fa": 32.6,
     "vol_pct_ca": 53.6,
     "vol_pct_fa": 46.4
    }
   },
   "variants": [],
   "procedure_id": null,
   "mix_types": [
    "all"
   ],
   "tags": [
    "blend percentages",
    "mass vs volume",
    "worked example",
    "light medium heavy"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "42-43"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "ex-equal-mass-different-interlock",
   "type": "worked_example",
   "title": "Equal Mass Blends (62.2% CA / 37.8% FA) Give Different CA Interlock",
   "scenario": "Using the medium blend's mass percentages (62.2% CA, 37.8% FA) for ALL three CA's: nearly identical gradations by mass, but very different % of CA LUW and therefore very different degrees of CA interlock (slide 44).",
   "given": {
    "mass_pct_ca": 62.2,
    "mass_pct_fa": 37.8,
    "light_blend_total_kg_m3": 2034.2,
    "heavy_blend_total_kg_m3": 2498.3,
    "acbf_luw_kg_m3": 1176.7,
    "steel_luw_kg_m3": 1683.0
   },
   "steps": [
    {
     "step_number": 1,
     "description": "ACBF Slag (Light) blend CA mass and % of CA LUW",
     "calculation": "CA = 2034.2 x 0.622 = 1265.3 kg/m3 (127.0 x 0.622 = 79.0 lb/ft3); FA = 2034.2 x 0.378 = 768.9 kg/m3 (48.0 lb/ft3); (1265.3/1176.7) x 100",
     "result": "107.5% of CA LUW - MORE CA interlock"
    },
    {
     "step_number": 2,
     "description": "Steel Slag (Heavy) blend CA mass and % of CA LUW",
     "calculation": "CA = 2498.3 x 0.622 = 1553.9 kg/m3 (156.0 x 0.622 = 97.0 lb/ft3); FA = 2498.3 x 0.378 = 944.4 kg/m3 (59.0 lb/ft3); (1553.9/1683.0) x 100",
     "result": "92.3% of CA LUW - LESS CA interlock"
    },
    {
     "step_number": 3,
     "description": "Limestone (Medium) blend",
     "calculation": "unchanged from its designed blend",
     "result": "100.0% of CA LUW"
    }
   ],
   "answer": {
    "pct_ca_luw": {
     "light_acbf": 107.5,
     "medium_limestone": 100.0,
     "heavy_steel": 92.3
    }
   },
   "variants": [],
   "procedure_id": null,
   "mix_types": [
    "all"
   ],
   "tags": [
    "equal mass",
    "CA interlock",
    "% CA LUW",
    "worked example",
    "volume vs mass"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "44"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "ref-fa-uw-rules-of-thumb",
   "type": "reference_table",
   "title": "FA Unit Weight Voids - Typical Ranges (Rules-of-Thumb)",
   "table_kind": "rules_of_thumb_ranges",
   "applies_to": {
    "mix_types": [
     "all"
    ],
    "nmas": "all"
   },
   "columns": [
    "quantity",
    "typical_min_pct",
    "typical_max_pct"
   ],
   "rows": [
    {
     "quantity": "FA LUW voids",
     "typical_min_pct": 35,
     "typical_max_pct": 43
    },
    {
     "quantity": "FA RUW voids",
     "typical_min_pct": 28,
     "typical_max_pct": 36
    },
    {
     "quantity": "Difference between Loose and Rodded voids",
     "typical_min_pct": 4,
     "typical_max_pct": 8
    }
   ],
   "footnotes": [
    "Example from course: LUW voids 38.8%, RUW voids 33.7%, difference 5.1%.",
    "FA's with an excessive amount of material considered coarse in regards to itself can vary significantly.",
    "Unusual microtexture or shape can push results lower or higher.",
    "If outside these ranges: check container type/size, calibration (AASHTO T-19), calculations, and the stockpile Gsb."
   ],
   "tags": [
    "rules of thumb",
    "FA",
    "LUW",
    "RUW",
    "voids",
    "typical ranges"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "34"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "ref-cuw-starting-points",
   "type": "reference_table",
   "title": "CA Chosen Unit Weight (CUW) - Ranges and Starting Points by Mix Type (Principle #1)",
   "table_kind": "recommended_ranges",
   "applies_to": {
    "mix_types": [
     "fine-graded",
     "coarse-graded",
     "sma"
    ],
    "nmas": "all"
   },
   "columns": [
    "mix_type",
    "reference_uw",
    "range_pct",
    "starting_point_pct"
   ],
   "rows": [
    {
     "mix_type": "fine-graded",
     "reference_uw": "CA LUW",
     "range_pct": [
      60,
      80
     ],
     "starting_point_pct": 70
    },
    {
     "mix_type": "coarse-graded",
     "reference_uw": "CA LUW",
     "range_pct": [
      95,
      105
     ],
     "starting_point_pct": 100
    },
    {
     "mix_type": "sma",
     "reference_uw": "CA RUW",
     "range_pct": [
      110,
      125
     ],
     "starting_point_pct": 118
    }
   ],
   "footnotes": [
    "CA CUW determines the VOLUME of coarse fraction in the combined blend - Principle #1.",
    "Increasing CA CUW = coarser blend (% passing PCS decreases); decreasing = finer blend.",
    "Changing the CA CUW 10% generally changes the % passing the PCS 4-5% (any mix type).",
    "Jake's class note on slide 49: coarse-graded upper bound marked '~110%'."
   ],
   "tags": [
    "CUW",
    "principle 1",
    "starting points",
    "60-80",
    "95-105",
    "110-125"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "49, 51-54"
   },
   "verified": true,
   "corroborated_by": [
    "day1-slide-117",
    "proc-evaluate-existing-mix-quickref",
    "ref-cheatsheet-cg",
    "ref-cheatsheet-fg",
    "ref-cheatsheet-sma"
   ],
   "chunk": "1_2"
  },
  {
   "id": "ref-lift-thickness-guidelines",
   "type": "reference_table",
   "title": "Compacted Field Lift Thickness Guidelines (NCHRP Report 531)",
   "table_kind": "recommended_ranges",
   "applies_to": {
    "mix_types": [
     "coarse-graded",
     "sma",
     "fine-graded"
    ],
    "nmas": "all"
   },
   "columns": [
    "mix_type",
    "minimum",
    "maximum"
   ],
   "rows": [
    {
     "mix_type": "coarse-graded and SMA",
     "minimum": "4 x NMAS",
     "maximum": "8 x NMAS"
    },
    {
     "mix_type": "fine-graded",
     "minimum": "3 x NMAS",
     "maximum": "6 x NMAS"
    }
   ],
   "footnotes": [
    "Minimums are from NCHRP Report 531 - Conclusions and Recommendations.",
    "Lift thickness directly affects particle orientation during placement and compaction; importance increases as CA CUW increases."
   ],
   "tags": [
    "lift thickness",
    "NCHRP 531",
    "4x NMAS",
    "field compaction"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "38, 53, 55"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "ref-pcs-vma-sensitivity",
   "type": "reference_table",
   "title": "PCS Change vs VMA Change - Rule-of-Thumb by Mix Type (Principle #1)",
   "table_kind": "sensitivity_factors",
   "applies_to": {
    "mix_types": [
     "fine-graded",
     "coarse-graded",
     "sma"
    ],
    "nmas": "all"
   },
   "columns": [
    "mix_type",
    "pcs_change_pct_for_1pct_vma",
    "range_pct",
    "direction"
   ],
   "rows": [
    {
     "mix_type": "fine-graded",
     "pcs_change_pct_for_1pct_vma": 6,
     "range_pct": [
      5,
      7
     ],
     "direction": "Increasing VMA typically requires INCREASING % passing PCS (decreasing CA CUW)"
    },
    {
     "mix_type": "coarse-graded",
     "pcs_change_pct_for_1pct_vma": 4,
     "range_pct": [
      3,
      5
     ],
     "direction": "Increasing VMA requires DECREASING % passing PCS (increasing CA CUW)"
    },
    {
     "mix_type": "sma",
     "pcs_change_pct_for_1pct_vma": 2,
     "range_pct": [
      1,
      3
     ],
     "direction": "Increasing VMA consists of DECREASING % passing PCS (increasing CA CUW)"
    }
   ],
   "footnotes": [
    "Coarse-graded value is less than fine-graded because C-G mixes are influenced by the compactability of BOTH fractions.",
    "SMA value is half the coarse-graded value - the coarse fraction is much more in control, so a slight PCS change has an increased effect on VMA.",
    "The coarse-graded 95-105% CA LUW range is a spread of ~4-5% on the PCS in the combined blend."
   ],
   "tags": [
    "PCS",
    "VMA",
    "sensitivity",
    "rule of thumb",
    "principle 1"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "51-52, 54"
   },
   "verified": true,
   "corroborated_by": [
    "ref-vma-sensitivity-cg",
    "ref-vma-sensitivity-fg",
    "ref-vma-sensitivity-sma",
    "ref-cheatsheet-cg",
    "ref-cheatsheet-fg",
    "ref-cheatsheet-sma"
   ],
   "chunk": "1_2"
  },
  {
   "id": "heur-fa-luw-ruw-voids-ranges",
   "type": "heuristic",
   "statement": "FA LUW voids normally range from 35-43%; FA RUW voids normally range from 28-36%; the difference between loose and rodded conditions is normally 4-8%.",
   "rationale": "Rules-of-thumb for typical FA unit weight results, parallel to the CA ranges (43-49 / 37-43). FA is generally more continuously-graded than CA, so excessive coarse material in the FA (relative to itself) makes results vary significantly.",
   "thresholds": {
    "luw_voids_pct": [
     35,
     43
    ],
    "ruw_voids_pct": [
     28,
     36
    ],
    "luw_minus_ruw_pct": [
     4,
     8
    ]
   },
   "when_violated": "If results are outside these ranges, something is generally unusual in gradation, shape, texture or strength. Verify container type/size, AASHTO T-19 calibration, calculations, and the stockpile Gsb first.",
   "context": "FA unit weight testing / screening UW results",
   "mix_types": [
    "all"
   ],
   "tags": [
    "FA",
    "LUW",
    "RUW",
    "voids",
    "rules of thumb"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "34"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "heur-mix-type-definition",
   "type": "heuristic",
   "statement": "Bailey mix-type definitions by CA volume: FINE-GRADED = dense-graded with CA volume LESS than CA LUW (FA in control, coarse floating, little/no CA contact). COARSE-GRADED = dense-graded with CA volume equal to or greater than CA LUW but not beyond RUW (beginning of CA interlock, both fractions carry load). SMA = gap-graded with CA volume GREATER than CA RUW (well into CA interlock, coarse fraction carries the load).",
   "rationale": "The CA LUW represents the beginning of particle-to-particle contact (interlock); the RUW represents increased contact from compactive effort. Where the blend's CA volume falls relative to these two reference conditions determines which fraction controls the aggregate structure.",
   "thresholds": {
    "fine_graded_ca_volume": "< 100% CA LUW",
    "coarse_graded_ca_volume": ">= 100% CA LUW (between LUW and RUW)",
    "sma_ca_volume": "> 100% CA RUW"
   },
   "when_violated": null,
   "context": "Establishing mix type / interpreting CA volume",
   "mix_types": [
    "all"
   ],
   "tags": [
    "mix type",
    "CA volume",
    "LUW",
    "RUW",
    "interlock",
    "definitions"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "37, 46-48"
   },
   "verified": true,
   "chunk": "1_2"
  },
  {
   "id": "heur-cuw-guardrails-dense",
   "type": "heuristic",
   "statement": "Dense-graded CA CUW guardrails: CUW < 60% of CA LUW generally results in a SMALLER NMAS than intended. CUW > 80% but < 95% of CA LUW can cause compaction issues (e.g., tenderness) IF shape/texture/strength differ significantly between fractions, because the blend bounces in and out of CA interlock during production due to normal gradation variation (with little to no change in volumetrics). CUW > 105% of CA LUW generally results in a difficult-to-compact coarse-graded mix, especially for thinner lifts. Changing the CA CUW 10% changes the % passing the PCS about 4-5% for any mix type.",
   "rationale": "The 60-80% (fine-graded) and 95-105% (coarse-graded) windows exist so the blend stays clearly on one side of CA interlock; the 80-95% no-man's-land straddles the LUW condition where normal production gradation swings flip the mix type back and forth.",
   "thresholds": {
    "smaller_nmas_below_pct_luw": 60,
    "avoid_zone_pct_luw": [
     80,
     95
    ],
    "hard_to_compact_above_pct_luw": 105,
    "cuw_change_pct": 10,
    "pcs_passing_change_pct": [
     4,
     5
    ]
   },
   "when_violated": "In the 80-95% zone expect production tenderness/compaction complaints with stable volumetrics - the tell is field behavior changing while lab numbers don't. Above 105%, expect field density problems, especially with lifts thinner than 4 x NMAS.",
   "context": "Choosing/troubleshooting the CA CUW for dense-graded mixes (Principle #1)",
   "mix_types": [
    "fine-graded",
    "coarse-graded"
   ],
   "tags": [
    "CUW",
    "guardrails",
    "60",
    "80-95",
    "105",
    "tenderness",
    "interlock",
    "principle 1"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "49, 51-52"
   },
   "verified": true,
   "corroborated_by": [
    "heur-ca-luw-80-95-production-bounce",
    "heur-cuw-over-105-vcamix"
   ],
   "chunk": "1_2"
  },
  {
   "id": "heur-cuw-guardrails-sma",
   "type": "heuristic",
   "statement": "SMA CA CUW guardrails: avoid CA CUW values below 110% of CA RUW (denser packing, lower VMA, requires a less-compactable fine fraction and can cause VCAmix to exceed VCAdrc); an overly high CA CUW (> 125% CA RUW) increases the opportunity for CA degradation. Start at 118% CA RUW.",
   "rationale": "The SMA needs a guaranteed coarse skeleton (VCAmix <= VCAdrc). Too little CA volume risks losing the skeleton; too much CA-on-CA contact under compaction degrades the stone.",
   "thresholds": {
    "avoid_below_pct_ruw": 110,
    "degradation_above_pct_ruw": 125,
    "start_pct_ruw": 118
   },
   "when_violated": "If VCAmix exceeds VCAdrc, coarsen the blend (less FA) to increase CA compactability.",
   "context": "Choosing/troubleshooting the CA CUW for SMA (Principle #1)",
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "CUW",
    "110",
    "125",
    "118",
    "VCAmix",
    "VCAdrc",
    "degradation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "54"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-sma",
    "proc-evaluate-existing-mix-quickref"
   ],
   "chunk": "1_2"
  },
  {
   "id": "heur-uw-3pct-significant",
   "type": "heuristic",
   "statement": "When comparing NEW unit weight voids to PREVIOUS results, consider 3% or more a SIGNIFICANT difference - investigate WHY the UW voids changed (gradation, type and amount of compactive effort, shape, strength, texture, container used, tester, etc.).",
   "rationale": "UW voids are stable for a given stockpile and lab setup; a 3% swing exceeds normal test scatter and signals a real change in the material or the test conditions.",
   "thresholds": {
    "significant_voids_change_pct": 3
   },
   "when_violated": "Do not just accept the new value - trace the cause before using it in blending.",
   "context": "Comparing unit weight test results over time",
   "mix_types": [
    "all"
   ],
   "tags": [
    "unit weight",
    "voids",
    "3 percent",
    "QC",
    "significant change"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "35"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "heur-quarter-inch-nmas-both-containers",
   "type": "heuristic",
   "statement": "When analyzing a stockpile with a NMAS of 1/4\" (~6.35 mm), perform UW tests in BOTH the 1/4 ft3 bucket AND the 1/30th ft3 mold, and use the results with the HIGHER density (i.e., lower voids).",
   "rationale": "A 1/4\" NMAS stockpile sits at the boundary between the CA bucket and FA mold container sizes; container size affects particle orientation, so both are run and the denser (better-packed) result governs.",
   "thresholds": {
    "nmas_mm": 6.35
   },
   "when_violated": null,
   "context": "Unit weight testing of borderline-size stockpiles",
   "mix_types": [
    "all"
   ],
   "tags": [
    "quarter inch",
    "NMAS",
    "bucket",
    "mold",
    "unit weight"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "35"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "heur-sma-30-20-10",
   "type": "heuristic",
   "statement": "SMA '30-20-10' rule (European rule-of-thumb): approximately 30% passing 4.75 mm (#4), 20% passing 2.36 mm (#8), and 10% passing 0.075 mm (#200). Applies to 9.5 mm (3/8\") and 12.5 mm (1/2\") NMAS SMA's.",
   "rationale": "A quick sanity check for SMA combined blend gradations from European SMA practice. Your mix or individual aggregates may require something entirely different. View the blend by volume as well as weight when Gsb's differ significantly. See AASHTO M325.",
   "thresholds": {
    "passing_4.75mm_pct": 30,
    "passing_2.36mm_pct": 20,
    "passing_0.075mm_pct": 10
   },
   "when_violated": "Not a spec - deviation is a prompt to double-check the design, not an automatic failure.",
   "context": "Designing/evaluating SMA blend gradations",
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "30-20-10",
    "rule of thumb",
    "AASHTO M325"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "55"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "note-slide35-seal-proctor-mold",
   "type": "student_annotation",
   "text": "Seal Proctor mold from outside w/ tape or caulk",
   "annotates_id": "day1-slide-035",
   "confidence": "clear",
   "tags": [
    "proctor mold",
    "practical tip",
    "unit weight"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "35"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "note-slide35-rod-spec",
   "type": "student_annotation",
   "text": "5/8\" diameter rod w/ rounded end",
   "annotates_id": "day1-slide-035",
   "confidence": "clear",
   "tags": [
    "tamping rod",
    "practical tip",
    "unit weight"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "35"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "note-slide35-gsb-if-possible",
   "type": "student_annotation",
   "text": "and Gsb if possible (appended to: 'Determine and record the gradation of the stockpile sample at the time of UW testing')",
   "annotates_id": "day1-slide-035",
   "confidence": "clear",
   "tags": [
    "Gsb",
    "documentation",
    "unit weight"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "35"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "note-slide49-cg-110pct",
   "type": "student_annotation",
   "text": "~110% (written next to the Coarse-Graded '95-105% CA LUW' range on the slide)",
   "annotates_id": "day1-slide-049",
   "confidence": "partially_legible",
   "tags": [
    "CUW",
    "coarse-graded",
    "range"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "49"
   },
   "verified": false,
   "chunk": "1_2"
  },
  {
   "id": "day1-slide-058",
   "type": "slide",
   "day": 1,
   "slide_number": 58,
   "slide_title": "Unit Weight - FA's / SMA Mixes",
   "slide_content": "For SMA mixes, the FA Loose Unit Weight (LUW) represents the MINIMUM strength condition of the FA. FA UW = 100% of LOOSE Unit Weight for SMA.",
   "instructor_notes": "For an SMA, the fine aggregate unit weight is set to 100% of the FA LOOSE unit weight, which represents the minimum FA strength condition. The HRG Excel sheets are set to this value for SMA mixes.",
   "key_callouts": [
    "FA UW = 100% of LOOSE Unit Weight (SMA)"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "sma"
   ],
   "tags": [
    "FA unit weight",
    "LUW",
    "SMA",
    "set value"
   ],
   "related_ids": [
    "day1-slide-059",
    "ref-fa-uw-rules-of-thumb"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "58"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-059",
   "type": "slide",
   "day": 1,
   "slide_number": 59,
   "slide_title": "Unit Weight - FA's (Summary)",
   "slide_content": "VBS summary of FA unit weight selection: 100% of FA RODDED Unit Weight for DENSE-graded mixes; 100% of FA LOOSE Unit Weight for SMA mixes. The FA UW is a SET value - unlike the CA CUW, it is not chosen.",
   "instructor_notes": "Unlike the CA Chosen Unit Weight, the FA unit weight is a SET value: 100% of the FA RUW for dense-graded (fine- and coarse-graded) mixes, and 100% of the FA LUW for SMA. These are the values the VBS/HRG spreadsheets use.",
   "key_callouts": [
    "FA UW is a SET value, not chosen",
    "Dense-graded: 100% FA RUW; SMA: 100% FA LUW"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "fine-graded",
    "coarse-graded",
    "sma"
   ],
   "tags": [
    "FA unit weight",
    "RUW",
    "LUW",
    "set value"
   ],
   "related_ids": [
    "day1-slide-058",
    "ref-fa-uw-rules-of-thumb",
    "ref-cuw-starting-points"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "59"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-060",
   "type": "slide",
   "day": 1,
   "slide_number": 60,
   "slide_title": "Where Are We? (Tab 1 marker)",
   "slide_content": "Categorize each stockpile: less than 50.0% passing the PCS = CA (coarse aggregate); 50.0% or more passing the PCS = FA (fine aggregate). Next: an example of a 25.0 mm (1 inch) NMAS mix.",
   "instructor_notes": "Recap of progress so far: unit weights done, now categorize each stockpile as CA or FA based on % passing the PCS. This slide ties to Tab 1 of the example documents - a 25.0 mm (1 inch) NMAS mix example.",
   "key_callouts": [
    "<50.0% passing PCS = CA; >=50.0% passing PCS = FA"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "stockpile classification",
    "PCS",
    "Tab 1",
    "25.0 mm example"
   ],
   "related_ids": [
    "heur-ca-fa-classification"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "01",
    "pages": "60"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-061",
   "type": "slide",
   "day": 1,
   "slide_number": 61,
   "slide_title": "Completing Volume Blend / Converting to Weight (Tab 2 marker)",
   "slide_content": "Complete the volume blend and convert to weight. Correct the percentages for 'opposite' sized material (CA in the FA stockpiles and FA in the CA stockpiles). Add Mineral Filler (MF) / Baghouse Fines (BHF) as needed for the 0.075 mm (#200) target. Next: a hand-calculated example of a 9.5 mm (3/8 inch) Coarse-Graded NMAS mix.",
   "instructor_notes": "This slide ties to Tab 2 of the example documents - completing the volume blend, correcting the percentages for the opposite-sized material each stockpile contributes, converting to weight, and adding MF/BHF for the #200 target. A hand-calculated 9.5 mm (3/8 inch) C-G example follows in the tabs.",
   "key_callouts": [],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "volume blend",
    "weight conversion",
    "opposite sized material",
    "MF",
    "BHF",
    "Tab 2"
   ],
   "related_ids": [],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "02",
    "pages": "61"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-062",
   "type": "slide",
   "day": 1,
   "slide_number": 62,
   "slide_title": "Combined Blend Evaluation (Intro)",
   "slide_content": "Principle #1 is done - it set the volume of CA and the % passing the PCS. Principles #2, #3 and #4 evaluate the combined blend. The evaluation method depends on which fraction controls the mix.",
   "instructor_notes": "With the volume blend complete, Principle 1 (CA volume / % passing PCS) is established. The remaining three principles evaluate the combined blend. How we evaluate depends on the controlling fraction of the mix (coarse-graded vs fine-graded vs SMA).",
   "key_callouts": [],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "combined blend evaluation",
    "four principles",
    "controlling fraction"
   ],
   "related_ids": [
    "day1-slide-063"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "62"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-063",
   "type": "slide",
   "day": 1,
   "slide_number": 63,
   "slide_title": "Combined Blend Evaluation - Coarse-Graded Mixes (Coarse Fraction)",
   "slide_content": "The PCS defines the break between coarse and fine in the combined blend. Coarse Fraction (retained above PCS): NONE of these particles fit into the voids of the coarse fraction. Size distribution above the PCS affects packing of BOTH fractions. Size distribution is determined by the CA Ratio - Bailey Method Principle #2.",
   "instructor_notes": "Starting with Coarse-graded mixes. The main point with the coarse fraction is that none of the particles it contains will fit into the voids it creates. The particle size distribution within the coarse fraction affects the packing of the coarse fraction AND the packing of the fine fraction. The first of three combined-blend ratios is the CA ratio, which is the 2nd Principle of the Bailey Method.",
   "key_callouts": [
    "None of the coarse fraction particles fit into the voids of the coarse fraction",
    "The CA ratio is the 2nd Principle of the Bailey Method"
   ],
   "formulas": [],
   "figures": [
    "Notebook diagram: coarse fraction above PCS, fine fraction below PCS"
   ],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "coarse fraction",
    "PCS",
    "CA ratio",
    "principle 2"
   ],
   "related_ids": [
    "day1-slide-064"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "63"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-064",
   "type": "slide",
   "day": 1,
   "slide_number": 64,
   "slide_title": "Coarse Fraction Evaluation - Coarse-Graded Mixes (CA Ratio)",
   "slide_content": "'Half' sieve = 0.5 x NMAS (the sieve closest to half the size of the NMAS). CA Ratio = (% passing Half sieve - % passing PCS) / (100% - % passing Half sieve). Bailey Method Principle #2. Adjusting the CA Ratio: alter the volume blend of CA's, or change the CA source/gradation.",
   "instructor_notes": "The CA ratio is the amount of material between the Half sieve and the PCS, divided by the amount of material retained above the Half sieve. Although some FA's contribute material to the coarse fraction, this ratio is predominantly a function of the CA blend by volume and the gradation of the individual CA's being used. The numerator holds the smaller CA, the denominator the larger CA.",
   "key_callouts": [
    "ALL of the particles in the CA Ratio are Coarse Fraction particles!",
    "None of the smaller particles fit into the VOIDS created by the larger particles!",
    "This is Principle #2 of the Bailey Method"
   ],
   "formulas": [
    "Half sieve = 0.5 x NMAS",
    "CA Ratio = (%Half - %PCS) / (100% - %Half)"
   ],
   "figures": [],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "CA ratio",
    "half sieve",
    "principle 2",
    "formula"
   ],
   "related_ids": [
    "ex-ca-ratio-95mm-cg",
    "day1-slide-063"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "64"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-065",
   "type": "slide",
   "day": 1,
   "slide_number": 65,
   "slide_title": "CA Ratio Example - 9.5 mm (3/8\") NMAS C-G Mix",
   "slide_content": "Half sieve 4.75 mm (#4) = 57.5% passing; PCS 2.36 mm (#8) = 36.2% passing. 'Pluggers' = 42.5% (retained above Half sieve). 'Interceptors' = 21.3% (between Half sieve and PCS). CA Ratio = 21.3 / 42.5 = 0.501.",
   "instructor_notes": "Pluggers are the larger coarse particles (plus Half sieve) in the coarse fraction that are somewhat spread apart depending on their amount in the blend. Interceptors are the smaller coarse particles (minus Half sieve) that hold the larger coarse particles apart and support them. The interceptors are too large to fit into the voids created by the larger coarse particles. CA Ratio = Interceptors / Pluggers = smaller CA / larger CA.",
   "key_callouts": [
    "CA Ratio = 'Interceptors' / 'Pluggers'",
    "ALL of the particles in the CA Ratio are Coarse Fraction particles!"
   ],
   "formulas": [
    "CA Ratio = (57.5 - 36.2) / (100 - 57.5) = 21.3 / 42.5 = 0.501"
   ],
   "figures": [],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "CA ratio",
    "pluggers",
    "interceptors",
    "worked example",
    "9.5 mm"
   ],
   "related_ids": [
    "ex-ca-ratio-95mm-cg"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "65"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-066",
   "type": "slide",
   "day": 1,
   "slide_number": 66,
   "slide_title": "Interceptor Visualization (Custom Animation)",
   "slide_content": "Photo animation of large coarse particles with a smaller interceptor particle between them. Caption: Interceptors INCREASE VMA by reducing the packing achieved in the Coarse fraction, which in turn reduces the packing achieved in the Fine fraction.",
   "instructor_notes": "This custom animation slide was developed by Mr. Danny Gierhart, with the Asphalt Institute, to help students better visualize the size and effect of interceptor particles in the Coarse fraction.",
   "key_callouts": [
    "Interceptors increase VMA by reducing packing in the Coarse fraction"
   ],
   "formulas": [],
   "figures": [
    "Photo of aggregate particles showing an interceptor holding larger particles apart"
   ],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "interceptors",
    "VMA",
    "visualization"
   ],
   "related_ids": [
    "heur-interceptors-increase-vma"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "66"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-067",
   "type": "slide",
   "day": 1,
   "slide_number": 67,
   "slide_title": "CA Ratio Effects - Coarse-Graded Mixes",
   "slide_content": "As the CA Ratio increases, VMA increases (coarse fraction below the Half sieve decreases compaction of Coarse and Fine fractions). As the CA Ratio approaches the high end of the range, the coarse fraction becomes 'balanced' and neither sized material controls the overall coarse fraction. As the CA Ratio exceeds the high end of the range, the coarse fraction below the Half sieve begins to control the overall coarse fraction and reduce the coarse fraction void size.",
   "instructor_notes": "As the CA ratio INCREASES, VMA INCREASES, because interceptors decrease packing of the pluggers, which in turn decreases packing of the fine fraction. If the CA ratio is too low, there is an excess of pluggers and the mix will generally be susceptible to segregation. As the CA ratio approaches the high end of the suggested range, the coarse fraction becomes balanced and neither interceptors nor pluggers control, which makes it difficult to compact, especially in the field where the mix isn't confined as in the lab mold. High CA ratios generally occur with S-shaped combined blend gradations that gained notoriety in Superpave due to field compaction difficulties - we generally don't recommend blends with CA ratios above the high end of the suggested range. As the ratio exceeds the range, interceptors start to control. Additional issues above the high end: (1) eventually the void size in the coarse fraction (plus PCS) decreases to the point where the PCS changes to the next smaller sieve - shifting the volume of coarse and fine, and if the PCS is different, all three evaluation ratios need to reference different sieves; (2) segregation susceptibility can begin to increase again because eventually the NMAS of the blend drops to the next smaller sieve, and the smaller-NMAS mix will have a 'low' CA ratio for its blend.",
   "key_callouts": [
    "As CA ratio increases, VMA increases",
    "Too-low CA ratio = excess pluggers = segregation susceptible",
    "Above the high end, interceptors control and the PCS/NMAS can shift smaller"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "CA ratio",
    "VMA",
    "segregation",
    "field compaction"
   ],
   "related_ids": [
    "heur-ca-ratio-low-segregation",
    "heur-ca-ratio-high-field-compaction",
    "heur-ca-ratio-exceed-pcs-shift"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "67"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-068",
   "type": "slide",
   "day": 1,
   "slide_number": 68,
   "slide_title": "CA Ratio Guidelines - Coarse-Graded Mixes",
   "slide_content": "Suggested CA Ratio ranges by NMAS: 37.5 mm (1-1/2\") 0.80-0.95; 25.0 mm (1\") 0.70-0.85; 19.0 mm (3/4\") 0.60-0.75; 12.5 mm (1/2\") 0.50-0.65; 9.5 mm (3/8\") 0.40-0.55; 4.75 mm (#4) 0.30-0.45. Ratio increases with NMAS due to wider range of 'Coarse' sizes (above PCS). Ratios outside these ranges may work, BUT: low ratios are more susceptible to segregation; high ratios are more difficult to compact in the field. This is also the OLD CA ratio guideline for FINE-graded mixes: low ratios still relate to segregation susceptibility, and overly high ratios can reduce the void size in the OLD coarse fraction and cause a FINE-graded mix to 'act' as a COARSE-graded mix.",
   "instructor_notes": "These ranges are suggested for the CA ratio (by NMAS) for Coarse-graded mixes, and for the OLD CA ratio (by NMAS) for Fine-graded mixes. The suggested CA ratio increases as the NMAS gets larger because there is a wider range of particle sizes in the coarse fraction, which lends more towards a continuous gradation. Values outside these ranges may work, but low ratios are more susceptible to segregation, high ratios are more difficult to compact in the field, and overly high ratios may cause a shift in the volumes of coarse and fine by reducing the NMAS to the next smaller sieve. Remember the suggested ranges still apply to the OLD CA ratio for FINE-graded mixes in relation to segregation susceptibility.",
   "key_callouts": [
    "CA ratio ranges apply to the OLD CA ratio for FINE-graded mixes (segregation susceptibility)"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "coarse-graded",
    "fine-graded"
   ],
   "tags": [
    "CA ratio",
    "guidelines",
    "NMAS ranges",
    "segregation"
   ],
   "related_ids": [
    "ref-ca-ratio-guidelines-cg",
    "note-slide68-segregation-factors"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "68"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-069",
   "type": "slide",
   "day": 1,
   "slide_number": 69,
   "slide_title": "Fine Fraction Evaluation - Coarse-Graded Mixes (SCS)",
   "slide_content": "Fine fraction (passing PCS): contains material that WILL fit into the voids it creates. Secondary Control Sieve (SCS): view the fine fraction as a 'blend' with a new coarse and fine break. SCS = 0.22 x PCS. The PCS generally serves as the maximum and NMAS of the overall fine fraction. Example (9.5 mm C-G blend): combined gradation 12.5 mm 100.0%, 9.5 mm 97.9%, 4.75 mm 57.5%, 2.36 mm 36.2%, 1.18 mm 28.3%, 0.600 mm 21.2%, 0.300 mm 9.9%, 0.150 mm 5.3%, 0.075 mm 4.5%. Re-percentaged minus-PCS blend (2.36 mm = 100.0%): 1.18 mm 78.2%, 0.600 mm 58.6%, 0.300 mm 27.3%, 0.150 mm 14.6%, 0.075 mm 12.4%. The PCS (2.36 mm, #8) serves as the maximum and the NMAS of the minus-PCS blend.",
   "instructor_notes": "Unlike the coarse fraction, the fine fraction contains 'coarse' particles that create voids AND 'fine' particles that fit into those voids. The second of the three combined-blend ratios begins with defining the Secondary Control Sieve (SCS) so we can view the fine fraction as a blend of coarse and fine. The same 0.22 principle used in the PCS equation applies (SCS = 0.22 x PCS). If you calculate the combined blend passing the PCS as 100%, the PCS generally serves as the maximum and NMAS sieves for the combined fine fraction - but BE SURE TO VERIFY THIS FIRST by looking at the blend passing the PCS as 100% aggregate. To verify, divide the % passing the first sieve smaller than the PCS by the % passing the PCS, and multiply by 100. We still define the NMAS of this 'blend' as the first sieve larger than the first sieve to retain more than 15%.",
   "key_callouts": [
    "SCS = 0.22 x PCS",
    "BE SURE TO VERIFY that the PCS serves as maximum and NMAS of the minus-PCS blend"
   ],
   "formulas": [
    "SCS = 0.22 x PCS"
   ],
   "figures": [
    "Notebook diagram: fine fraction split at SCS; yellow callout: The PCS, 2.36 mm (#8), serves as the maximum and the NMAS of the minus PCS blend"
   ],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "fine fraction",
    "SCS",
    "minus PCS blend",
    "verification"
   ],
   "related_ids": [
    "ex-minus-pcs-blend-95mm-cg",
    "heur-verify-fine-blend-nmas",
    "heur-bailey-nmas-15pct"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "69"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-070",
   "type": "slide",
   "day": 1,
   "slide_number": 70,
   "slide_title": "FAc Ratio - Coarse-Graded Mixes",
   "slide_content": "FAc Ratio = % passing SCS / % passing PCS. Bailey Method Principle #3. Ratio range ~0.35-0.50: higher values typically in restricted zone; lower values (below 0.40) may be difficult to compact. As the FAc Ratio increases up to ~0.55, VMA decreases; as it increases beyond ~0.55, VMA increases. 'Dip' range ~0.45-0.65. Adjusting FAc Ratio: alter volume blend of FA's, or change FA source/gradation.",
   "instructor_notes": "The FAc ratio = 'FA' / 'CA + FA' of the fine fraction. This is Principle #3 of the Bailey Method. As the FAc ratio INCREASES, VMA DECREASES (up to the dip). The ratio should generally be in the range 0.35-0.50 (avoid values < 0.40). As the ratio increases towards ~0.55, compactability of the overall fine fraction increases and VMA decreases. Once the ratio goes ABOVE ~0.55, VMA begins to INCREASE as the ratio increases. The FAc 'Dip' generally occurs in the range 0.45-0.65. As the ratio decreases, compactability of the overall fine fraction decreases. The material between the PCS and SCS (coarse) creates voids within the overall fine fraction (minus PCS), and the material passing the SCS (fine) fills those voids. Higher values approach the restricted zone but may be necessary for lower compaction level mixes to reduce VMA; however, with mixes utilizing natural sand, high FAc values increase the potential for mix tenderness. To adjust, alter the FA blend by volume (if more than one is used) or change a source or gradation of one or more of the FA's.",
   "key_callouts": [
    "This is Principle #3 of the Bailey Method",
    "As FAc increases, VMA decreases (until the dip at ~0.55)",
    "Avoid FAc values < 0.40"
   ],
   "formulas": [
    "FAc Ratio = %SCS / %PCS"
   ],
   "figures": [],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "FAc ratio",
    "principle 3",
    "dip",
    "restricted zone",
    "tenderness"
   ],
   "related_ids": [
    "ex-fac-ratio-95mm-cg",
    "heur-fac-dip-cg",
    "heur-fa-avoid-below-040-cg"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "70"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-071",
   "type": "slide",
   "day": 1,
   "slide_number": 71,
   "slide_title": "FAc Example - 9.5 mm (3/8\") NMAS C-G Mix",
   "slide_content": "PCS 2.36 mm (#8) = 36.2% passing ('Coarse' part of the Fine fraction is between these). SCS 0.600 mm (#30) = 21.2% passing ('Fine' part of the Fine fraction). FAc Ratio = %SCS / %PCS = 21.2 / 36.2 = 0.586.",
   "instructor_notes": "Look at the FAc ratio from the point-of-view of keeping the % passing the PCS the same, while changing the % passing the SCS. With an increase in the FAc ratio, the amount of the Fine part of the Fine fraction increases relative to the amount of the Coarse part of the Fine fraction.",
   "key_callouts": [],
   "formulas": [
    "FAc = 21.2 / 36.2 = 0.586"
   ],
   "figures": [],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "FAc ratio",
    "worked example",
    "9.5 mm"
   ],
   "related_ids": [
    "ex-fac-ratio-95mm-cg"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "71"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-072",
   "type": "slide",
   "day": 1,
   "slide_number": 72,
   "slide_title": "Fine Fraction Evaluation - Coarse-Graded Mixes (TCS)",
   "slide_content": "FA passing the SCS contains material that will fit into the voids it creates. Tertiary Control Sieve (TCS): view the 'fine' part of the fine fraction as a 'blend'; break between coarse and fine. TCS = 0.22 x SCS. The SCS generally serves as the maximum and NMAS for the 'fine' part of the fine fraction. Re-percentaged minus-SCS blend (0.600 mm = 100.0%): 0.300 mm 46.7%, 0.150 mm 25.0%, 0.075 mm 21.2%. The SCS (0.600 mm, #30) serves as the maximum and the NMAS of the minus-SCS blend.",
   "instructor_notes": "We can also view the material passing the SCS as a combined blend containing coarse and fine fractions - a coarse fraction that creates voids and a fine fraction that fills them. The Tertiary Control Sieve (TCS) is defined for the third of the three combined blend evaluation ratios, using the same 0.22 principle (TCS = 0.22 x SCS). The SCS generally serves as the maximum and NMAS sieves for this fraction, but BE SURE TO VERIFY THIS FIRST by looking at the blend passing the SCS as 100% aggregate: divide the % passing the first sieve smaller than the SCS by the % passing the SCS and multiply by 100. NMAS of the blend is still the first sieve larger than the first sieve to retain more than 15%.",
   "key_callouts": [
    "TCS = 0.22 x SCS",
    "BE SURE TO VERIFY that the SCS serves as maximum and NMAS of the minus-SCS blend"
   ],
   "formulas": [
    "TCS = 0.22 x SCS"
   ],
   "figures": [
    "Notebook diagram: TCS below SCS; yellow callout: The SCS, 0.600 mm (#30), serves as the maximum and the NMAS of the minus SCS blend"
   ],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "fine fraction",
    "TCS",
    "minus SCS blend",
    "verification"
   ],
   "related_ids": [
    "ex-minus-scs-blend-95mm-cg",
    "heur-verify-fine-blend-nmas"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "72"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-073",
   "type": "slide",
   "day": 1,
   "slide_number": 73,
   "slide_title": "FAf Ratio - Coarse-Graded Mixes",
   "slide_content": "FAf Ratio = % passing TCS / % passing SCS. Bailey Method Principle #4. Ratio range ~0.35-0.50: higher values typically in restricted zone; lower values (below 0.40) may be difficult to compact. As the FAf Ratio increases up to ~0.55, VMA decreases; beyond ~0.55, VMA increases. 'Dip' range ~0.45-0.65. Adjusting FAf Ratio: alter amount of MF/BHF's and/or volume blend of FA's; change FA source/gradation.",
   "instructor_notes": "The FAf ratio = 'FA' / 'CA + FA' of the fine part of the fine fraction. This is Principle #4 of the Bailey Method. As the FAf ratio INCREASES, VMA DECREASES (up to the dip at ~0.55, then VMA increases). Range generally 0.35-0.50, avoid values < 0.40. The FAf 'Dip' generally occurs in the range 0.45-0.65. As the FAf ratio decreases, compactability of the fine part of the fine fraction decreases - a LOW FAf ratio can increase the potential for mix tenderness. The material between the SCS and TCS (coarse) creates voids within the fine part of the fine fraction (minus SCS), and material passing the TCS (fine) fills those voids. To adjust the FAf ratio, alter the amount of MF or BHF's in relation to the other FA's, or change the source or gradation of the MF or BHF's. Sometimes the FA volume blend can be altered if there are two or more FA's and one has a significantly higher amount of minus 0.075 mm (#200) material - however, this will generally change the FAc ratio as well.",
   "key_callouts": [
    "This is Principle #4 of the Bailey Method",
    "As FAf increases, VMA decreases (until the dip at ~0.55)",
    "A low FAf ratio can increase the potential for mix tenderness"
   ],
   "formulas": [
    "FAf Ratio = %TCS / %SCS"
   ],
   "figures": [],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "FAf ratio",
    "principle 4",
    "dip",
    "MF",
    "BHF",
    "tenderness"
   ],
   "related_ids": [
    "ex-faf-ratio-95mm-cg",
    "heur-faf-dip-cg",
    "heur-fa-avoid-below-040-cg"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "73"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-074",
   "type": "slide",
   "day": 1,
   "slide_number": 74,
   "slide_title": "FAf Example - 9.5 mm (3/8\") NMAS C-G Mix",
   "slide_content": "SCS 0.600 mm (#30) = 21.2% passing ('Coarse' part of the 'Fine' part of the Fine fraction). TCS 0.150 mm (#100) = 5.3% passing ('Fine' part of the 'Fine' part of the Fine fraction). FAf Ratio = %TCS / %SCS = 5.3 / 21.2 = 0.250.",
   "instructor_notes": "Again, look at the FAf ratio from the point-of-view of keeping the % passing the SCS the same, while changing the % passing the TCS, which is the dust-sized material in the combined blend. With an increase in the FAf ratio, the amount of the Fine part increases relative to the amount of the Coarse part.",
   "key_callouts": [],
   "formulas": [
    "FAf = 5.3 / 21.2 = 0.250"
   ],
   "figures": [],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "FAf ratio",
    "worked example",
    "9.5 mm"
   ],
   "related_ids": [
    "ex-faf-ratio-95mm-cg"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "74"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-075",
   "type": "slide",
   "day": 1,
   "slide_number": 75,
   "slide_title": "Combined Blend Evaluation - Coarse-Graded Mixes (The Four Principles)",
   "slide_content": "Summary of the four principles with the main reference sieves. Half Sieve = 0.5 x NMAS; PCS = 0.22 x NMAS; SCS = 0.22 x PCS; TCS = 0.22 x SCS. Principle 1 = % CA LUW; Principle 2 = CA Ratio = (%Half - %PCS)/(100% - %Half); Principle 3 = FAc Ratio = %SCS/%PCS; Principle 4 = FAf Ratio = %TCS/%SCS. Also See Slide 4!",
   "instructor_notes": "Summary of the four principles of the Bailey Method for Coarse-graded mixes with the main sieves of reference. Principle #1 (% PCS) is a direct result of the CA Volume, expressed as a percentage of the CA Loose UW - although CA LUW is a density (kg/m3 or lb/ft3), there is a solid volume of CA and corresponding volume of voids at a given % of the CA LUW. Principle #2, the CA ratio, relates to the particle size distribution in the Coarse fraction. Principle #3, the FAc ratio, relates to the particle size distribution in the overall Fine fraction. Principle #4, the FAf ratio, relates to the particle size distribution in the fine part of the Fine fraction. Remember there is a 'Dip' for each of the two FA ratios representing the point of maximum packing - increasing OR decreasing a given FA ratio away from this Dip causes VMA to INCREASE. It is important to figure out WHERE these FA Dips occur!",
   "key_callouts": [
    "There is a 'Dip' (maximum packing point) for each FA ratio - moving away from it in either direction increases VMA",
    "It is important to figure out WHERE these FA Dips occur"
   ],
   "formulas": [
    "Half = 0.5 x NMAS",
    "PCS = 0.22 x NMAS",
    "SCS = 0.22 x PCS",
    "TCS = 0.22 x SCS"
   ],
   "figures": [
    "Notebook diagram tying the four principles to the sieve hierarchy"
   ],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "four principles",
    "summary",
    "control sieves"
   ],
   "related_ids": [
    "day1-slide-076",
    "ref-blend-eval-sieves"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "75"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-076",
   "type": "slide",
   "day": 1,
   "slide_number": 76,
   "slide_title": "Combined Blend Evaluation - Coarse-Graded Mixes (VMA Sensitivity)",
   "slide_content": "Rules-of-thumb for ~1% change in VMA (Coarse-Graded): 1. CA CUW increase = VMA increase; 4% change in PCS ~= 1% change in VMA (range 3-5%). 2. CA Ratio increase = VMA increase; 0.20 change ~= 1% VMA (range 0.10-0.30). 3. FAc Ratio increase = VMA decrease; 0.05 change ~= 1% VMA (range 0.025-0.075) - has the MOST influence on VMA. 4. FAf Ratio increase = VMA decrease; 0.05 change ~= 1% VMA (range 0.025-0.075).",
   "instructor_notes": "Summary of the four principles and their effects on VMA in a Coarse-graded mix, with rules-of-thumb for how much change creates ~1% change in VMA. Increasing the CA CUW increases the volume of coarse in the combined blend, increases CA interlock and decreases compaction of the fine fraction - it simply makes the blend COARSER. Changing the CA ratio generally requires changing the volume blend of CA's (or gradation/source for a single CA). Altering the FAc ratio normally involves a change in particle shape, texture and strength as well as gradation, because the adjustment typically consists of changing the FA volume blend (e.g., manufactured vs natural sand) - we have found this ratio to have the MOST influence of the four principles on altering VMA in a Coarse-graded mix. A change in the FAf ratio is predominantly a change in the amount of filler material rather than particle shape. Also remember VMA is affected by the characteristics of each individual aggregate (shape, texture, strength), which is not directly accounted for in the ratios. The main point you can depend on with these principles is the DIRECTION of change (increasing or decreasing VMA).",
   "key_callouts": [
    "FAc ratio has the most influence on VMA in a Coarse-graded mix",
    "The dependable output of the principles is the DIRECTION of VMA change"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "VMA sensitivity",
    "rules of thumb",
    "four principles"
   ],
   "related_ids": [
    "ref-vma-sensitivity-cg",
    "heur-fac-most-influence-cg",
    "heur-principles-direction-only"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "76"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-077",
   "type": "slide",
   "day": 1,
   "slide_number": 77,
   "slide_title": "Combined Blend Evaluation Table - Coarse-Graded and SMA Mixes (Metric)",
   "slide_content": "Table of all sieves and ratio equations per NMAS (metric). NMAS 37.5/25.0/19.0/12.5/9.5/4.75 mm; Half Sieve 19.0/12.5/9.5/6.35/4.75/2.36 mm; PCS 9.5/4.75/4.75/2.36/2.36/1.18 mm; SCS 2.36/1.18/1.18/0.600/0.600/0.300 mm; TCS 0.600/0.300/0.300/0.150/0.150/0.075 mm. CA/FAc/FAf ratio equations use the % passing those sieves. Sieves shown in ratios refer to the % passing for that sieve.",
   "instructor_notes": "This table applies to Coarse-graded AND SMA mixes. Listed are all the sieves and ratio equations for a given NMAS designation. In the ratio equations, the sieves shown represent the % passing that sieve in the combined blend gradation. SMA is also a mix with CA interlock - the same sieves and same ratios are used for SMA, but the suggested ranges are different.",
   "key_callouts": [
    "Same sieves and ratios for Coarse-graded and SMA - but suggested ranges are DIFFERENT"
   ],
   "formulas": [],
   "figures": [
    "Full metric control sieve table"
   ],
   "mix_types": [
    "coarse-graded",
    "sma"
   ],
   "tags": [
    "control sieves",
    "reference table",
    "metric"
   ],
   "related_ids": [
    "ref-blend-eval-sieves"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "77"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-078",
   "type": "slide",
   "day": 1,
   "slide_number": 78,
   "slide_title": "Combined Blend Evaluation Table - Coarse-Graded and SMA Mixes (English)",
   "slide_content": "Same table in English designations. NMAS 1-1/2\"/1\"/3/4\"/1/2\"/3/8\"/#4; Half Sieve 3/4\"/1/2\"/3/8\"/1/4\"/#4/#8; PCS 3/8\"/#4/#4/#8/#8/#16; SCS #8/#16/#16/#30/#30/#50; TCS #30/#50/#50/#100/#100/#200. Sieves shown in ratios refer to the % passing for that sieve.",
   "instructor_notes": "English-unit version of the combined blend evaluation table for Coarse-graded and SMA mixes. Same content as the metric table.",
   "key_callouts": [],
   "formulas": [],
   "figures": [
    "Full English control sieve table"
   ],
   "mix_types": [
    "coarse-graded",
    "sma"
   ],
   "tags": [
    "control sieves",
    "reference table",
    "english units"
   ],
   "related_ids": [
    "ref-blend-eval-sieves",
    "day1-slide-077"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "78"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-079",
   "type": "slide",
   "day": 1,
   "slide_number": 79,
   "slide_title": "Ratio Ranges Summary - Coarse-Graded Mixes",
   "slide_content": "CA Ratio by NMAS: 37.5 mm 0.80-0.95; 25.0 mm 0.70-0.85; 19.0 mm 0.60-0.75; 12.5 mm 0.50-0.65; 9.5 mm 0.40-0.55; 4.75 mm 0.30-0.45. FAc Ratio: 0.35-0.50 (avoid values < 0.40) for all NMAS. FAf Ratio: 0.35-0.50 (avoid values < 0.40) for all NMAS. Ranges shown to provide a STARTING point - review acceptable existing mixes to determine a narrower range to target for future designs. Table applies to OLD CA ratio for Fine-graded mixes in regards to segregation susceptibility.",
   "instructor_notes": "This table summarizes the suggested ratio ranges, according to the NMAS, for Coarse-graded mixes. You should calculate these ratios for your existing mixes to get a better idea of what ranges you should be working within for a given NMAS with your aggregates. Avoid combined blends with a CA ratio significantly above the suggested range - past experience shows the PCS of the combined blend can decrease to the next smaller sieve, and the coarse fraction doesn't want to pack/lock up (field compactability). Also avoid combined blends with LOW values for BOTH the FAc and FAf ratios - field compactability can be very difficult because the fine fraction (minus PCS) doesn't want to pack/lock up. FAc and FAf values that are 'opposite' (one at the lower end, the other at the upper end) may work together to meet volumetric requirements, but it is best to be more towards the mid-point for both FA ratios for field compactability.",
   "key_callouts": [
    "Ranges are a starting point - calibrate to your own acceptable existing mixes",
    "Avoid CA ratio significantly above range",
    "Avoid LOW values for BOTH FAc and FAf",
    "Suggested CA ranges still apply to the OLD CA ratio for FINE-graded mixes (segregation susceptibility)"
   ],
   "formulas": [],
   "figures": [
    "VMA vs % CA LUW curve thumbnail"
   ],
   "mix_types": [
    "coarse-graded",
    "fine-graded"
   ],
   "tags": [
    "ratio ranges",
    "summary",
    "starting point"
   ],
   "related_ids": [
    "ref-ratio-ranges-cg",
    "heur-fa-opposite-ends",
    "heur-calibrate-to-existing-mixes"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "79"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-080",
   "type": "slide",
   "day": 1,
   "slide_number": 80,
   "slide_title": "Combined Blend Evaluation - SMA Mixes (Principle #1)",
   "slide_content": "CA Volume has the MOST influence on VMA & VCAmix. Adjust via CA CUW (% of CA Rodded UW), which translates into a change in the % passing the PCS. Ratio principles and equations are the SAME as for Coarse-graded, but the RANGES are DIFFERENT.",
   "instructor_notes": "While dealing with mixes utilizing CA interlock, evaluate the combined blend of an SMA. With an SMA, the CA volume has the most influence on VMA as well as the VCAmix achieved. Adjust the CA volume using the CA CUW (% CA Rodded UW) for an SMA. The ratio principles and equations just discussed for Coarse-graded mixes work the same for an SMA since both mix types utilize coarse aggregate interlock - however, the suggested ranges for the ratios are different.",
   "key_callouts": [
    "SMA: CA volume has the most influence on VMA and VCAmix",
    "Same equations as Coarse-graded, DIFFERENT ranges"
   ],
   "formulas": [],
   "figures": [
    "Bucket of CA diagram"
   ],
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "principle 1",
    "CA CUW",
    "VCAmix"
   ],
   "related_ids": [
    "ref-cuw-starting-points",
    "heur-ca-cuw-most-influence-sma"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "80"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-081",
   "type": "slide",
   "day": 1,
   "slide_number": 81,
   "slide_title": "Combined Blend Evaluation - SMA Mixes (Principle #2, CA Ratio)",
   "slide_content": "CA Ratio influences VMA AND compactability of the overall mix. 'Interceptors' (% Half sieve - % PCS) either hold the CA fraction apart OR degrade to become FA. Keep the ratio on the LOW end of the range if possible. As the CA Ratio increases, VMA increases. Adjusting: alter volume blend of CA's; change CA source/gradation.",
   "instructor_notes": "The CA ratio influences VMA and the overall compactability of an SMA. The interceptors either serve to hold the pluggers apart, or if the interceptors are too weak, they can degrade under compaction (lab and field) and become part of the fine fraction, which will increase the resulting volume of the fine fraction that fills the voids in the coarse fraction - in other words, VMA will collapse. Therefore it helps to keep the CA ratio fairly low (i.e., gap-graded) to increase compactability and reduce the amount of material available for degradation. As the CA ratio INCREASES, VMA INCREASES and field compactability decreases. As with a Coarse-graded mix, to adjust the CA ratio, alter the CA blend by volume (if more than one is used) or change a source or gradation of one or more of the CA's.",
   "key_callouts": [
    "SMA interceptors: hold CA apart OR degrade to become FA (VMA collapse)",
    "Keep SMA CA ratio on the LOW end (gap-graded)"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "CA ratio",
    "principle 2",
    "degradation",
    "gap-graded"
   ],
   "related_ids": [
    "heur-sma-keep-ca-ratio-low"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "81"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-082",
   "type": "slide",
   "day": 1,
   "slide_number": 82,
   "slide_title": "Combined Blend Evaluation - SMA Mixes (Principle #3, FAc Ratio)",
   "slide_content": "FAc Ratio range ~0.60-0.85. Higher values are easier to compact (less resistance in the 'coarse' part of the fine fraction); lower values are harder to compact. Excessive 'fine' material from the CA serves to keep the ratio low. As the FAc Ratio increases up to ~0.65, VMA decreases; beyond ~0.65, VMA increases. 'Dip' range ~0.55-0.75. Adjusting FAc Ratio (generally changes FAf Ratio also): alter blend between FA and MF; change FA and/or MF source/gradation.",
   "instructor_notes": "The FAc ratio relates to the coarseness of the overall fine fraction. A high FAc ratio provides a more compactable fine fraction; a lower FAc ratio relates to a fine fraction that is less compactable. CA's that contain an excessive amount of minus-PCS sized material can cause this ratio to stay low by contributing material to the coarse part of the fine fraction, and therefore reduce mix compactability. As the FAc ratio INCREASES, VMA DECREASES and field compactability increases. The ratio should generally be in the range 0.60-0.85. As it increases towards ~0.65, compactability of the overall fine fraction increases and VMA decreases; above ~0.65 VMA begins to increase as the ratio increases. The FAc 'Dip' generally occurs in the range 0.55-0.75. Most SMA's generally use only one FA (manufactured sand) other than Mineral Filler, so altering this value generally requires an adjustment in the amount of MF used in relation to the manufactured sand - by doing this, we will also change the FAf ratio as well. Other alternatives include changing the FA or MF sources or gradations.",
   "key_callouts": [
    "SMA FAc range ~0.60-0.85; dip ~0.55-0.75 (VMA minimum near ~0.65)",
    "Excess minus-PCS material from the CA keeps FAc low and hurts compactability"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "FAc ratio",
    "principle 3",
    "dip",
    "mineral filler"
   ],
   "related_ids": [
    "ref-ratio-ranges-sma"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "82"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-sma",
    "ref-field-factor-adjust-limits"
   ],
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-083",
   "type": "slide",
   "day": 1,
   "slide_number": 83,
   "slide_title": "Combined Blend Evaluation - SMA Mixes (Principle #4, FAf Ratio)",
   "slide_content": "FAf Ratio range ~0.65-0.90. Primarily a function of MF (amount and gradation). Lower values = lack of 'filler'; higher values = excess 'stiffener'. Exercise caution when altering the ratio to change VMA: find the 'optimum' value for proper mortar stiffness and adjust VMA with CA Volume (CA CUW) instead. As the FAf Ratio increases up to ~0.70, VMA decreases; beyond ~0.70, VMA increases. 'Dip' range ~0.60-0.80. Adjusting: alter 0.075 mm (#200) material in blend; change MF source/gradation. Also consider the role of fibers.",
   "instructor_notes": "The FAf ratio in an SMA is primarily a function of the Mineral Filler. A low FAf ratio relates to a lack of material to fill the remaining voids in the fine fraction; a high FAf ratio relates to an excess of filler, which also acts as a stiffener. Be careful in using the FAf ratio to change the VMA of an SMA - it may be more beneficial to the overall quality of the SMA to find the optimum amount of filler for filling voids and stiffening the mortar, and then adjust the VMA with the CA volume (CA CUW). As the FAf ratio INCREASES, VMA DECREASES, up to the point where the material begins to over-stiffen the mortar. Range generally 0.65-0.90; VMA decreases up to ~0.70 then increases; dip generally 0.60-0.80. The ratio is normally adjusted by altering the amount of MF in the mix - altering the amount of MF will generally change the FAc ratio as well. Another means is changing the MF source and/or gradation. Also consider the role of fibers.",
   "key_callouts": [
    "SMA FAf range ~0.65-0.90; dip ~0.60-0.80 (VMA minimum near ~0.70)",
    "Find optimum filler for mortar stiffness; adjust VMA with CA CUW instead",
    "Also consider the role of fibers"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "FAf ratio",
    "principle 4",
    "mineral filler",
    "mortar stiffness",
    "fibers"
   ],
   "related_ids": [
    "heur-sma-faf-optimum-filler",
    "ref-ratio-ranges-sma"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "83"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-sma",
    "ref-field-factor-adjust-limits"
   ],
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-084",
   "type": "slide",
   "day": 1,
   "slide_number": 84,
   "slide_title": "Combined Blend Evaluation - SMA Mixes (The Four Principles)",
   "slide_content": "Summary of the four principles for SMA with the main reference sieves. Half Sieve = 0.5 x NMAS; PCS = 0.22 x NMAS; SCS = 0.22 x PCS; TCS = 0.22 x SCS. Principle 1 = % CA RUW (rodded, not loose); Principle 2 = CA Ratio; Principle 3 = FAc Ratio; Principle 4 = FAf Ratio. Also See Slide 5!",
   "instructor_notes": "Summary of the four principles of the Bailey Method for SMA mixes along with the main sieves of reference. The same sieves are referenced as with Coarse-graded mixes; however, for SMA mixes we need different values for each of the four principles. Principle #1 (% PCS) is a direct result of the CA Volume, expressed as a percentage of the CA RODDED UW. Principles #2-#4 are the same ratios as Coarse-graded. Remember there is a 'Dip' for each of the two FA ratios representing maximum packing - increasing OR decreasing a given FA ratio away from the Dip causes VMA to INCREASE. It is important to figure out WHERE these FA Dips occur!",
   "key_callouts": [
    "SMA Principle #1 uses % CA RUW (Coarse-graded uses % CA LUW)"
   ],
   "formulas": [
    "Half = 0.5 x NMAS",
    "PCS = 0.22 x NMAS",
    "SCS = 0.22 x PCS",
    "TCS = 0.22 x SCS"
   ],
   "figures": [
    "Notebook diagram tying the four SMA principles to the sieve hierarchy"
   ],
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "four principles",
    "summary"
   ],
   "related_ids": [
    "day1-slide-075",
    "day1-slide-085"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "84"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-085",
   "type": "slide",
   "day": 1,
   "slide_number": 85,
   "slide_title": "Combined Blend Evaluation - SMA Mixes (VMA Sensitivity)",
   "slide_content": "Rules-of-thumb for ~1% change in VMA (SMA): 1. CA CUW increase = VMA increase; 2% change in PCS ~= 1% change in VMA (range 1-3%) - has the MOST influence on VMA. 2. CA Ratio increase = VMA increase; 0.20 change ~= 1% VMA (range 0.10-0.30). 3. FAc Ratio increase = VMA decrease; 0.10 change ~= 1% VMA (range 0.075-0.125). 4. FAf Ratio increase = VMA decrease; 0.10 change ~= 1% VMA (range 0.075-0.125) - has the 2nd most influence on VMA.",
   "instructor_notes": "Summary of the four principles and their effects on VMA in an SMA, with rules-of-thumb for ~1% change in VMA. Increasing the CA CUW increases the CA volume in the combined blend, which increases the degree of CA interlock and compacts the mastic less - the MOST influence of the four principles on altering VMA in an SMA. Changing the CA ratio generally requires changing the volume blend of CA's. Changing the FAc ratio in an SMA normally involves a change in the blend between the manufactured sand and mineral filler (MF); therefore the FAf ratio will change also. A change in the FAf ratio of an SMA changes both the amount of 'filler' and the stiffness of the mortar - the 2nd most influence of the four principles on altering VMA in an SMA. VMA is also affected by the characteristics of each individual aggregate (shape, texture, strength), not directly accounted for in the ratios. The dependable point is the DIRECTION of change.",
   "key_callouts": [
    "SMA: CA CUW has the most influence on VMA; FAf ratio the 2nd most"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "VMA sensitivity",
    "rules of thumb"
   ],
   "related_ids": [
    "ref-vma-sensitivity-sma",
    "heur-ca-cuw-most-influence-sma",
    "heur-principles-direction-only"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "85"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-086",
   "type": "slide",
   "day": 1,
   "slide_number": 86,
   "slide_title": "Ratio Ranges Summary - SMA Mixes",
   "slide_content": "CA Ratio by NMAS: 25.0 mm (1\") 0.45-0.60; 19.0 mm (3/4\") 0.35-0.50; 12.5 mm (1/2\") 0.25-0.40; 9.5 mm (3/8\") 0.15-0.30; 4.75 mm (#4) 0.05-0.20 (lower for 'gap' grading). FAc Ratio: 0.60-0.85 for all NMAS (higher to reduce FA resistance). FAf Ratio: 0.65-0.90 for all NMAS (higher for increased 0.075 mm). Ranges shown to provide a STARTING point - review acceptable existing mixes to determine a narrower range to target for future designs.",
   "instructor_notes": "This table summarizes the suggested ratio ranges, according to the NMAS, for SMA mixes. You should calculate these ratios for your existing SMA mixes to get a better idea of what ranges you should be working within for a given NMAS with your aggregates.",
   "key_callouts": [
    "SMA ranges are a starting point - calibrate to your own acceptable existing SMA mixes"
   ],
   "formulas": [],
   "figures": [
    "VMA vs % CA LUW curve thumbnail"
   ],
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "ratio ranges",
    "summary",
    "starting point"
   ],
   "related_ids": [
    "ref-ratio-ranges-sma",
    "heur-calibrate-to-existing-mixes"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "86"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "ex-ca-ratio-95mm-cg",
   "type": "worked_example",
   "title": "CA Ratio Calculation - 9.5 mm (3/8\") NMAS Coarse-Graded Mix",
   "scenario": "Course example calculating the CA ratio (Principle #2) for a 9.5 mm NMAS Coarse-graded combined blend (slide 65).",
   "given": {
    "nmas_mm": 9.5,
    "half_sieve_mm": 4.75,
    "pcs_mm": 2.36,
    "pct_passing_half_sieve": 57.5,
    "pct_passing_pcs": 36.2
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Compute interceptors (% between Half sieve and PCS)",
     "calculation": "57.5 - 36.2",
     "result": "21.3%"
    },
    {
     "step_number": 2,
     "description": "Compute pluggers (% retained above Half sieve)",
     "calculation": "100 - 57.5",
     "result": "42.5%"
    },
    {
     "step_number": 3,
     "description": "Compute CA Ratio = interceptors / pluggers",
     "calculation": "21.3 / 42.5",
     "result": "0.501"
    }
   ],
   "answer": {
    "interceptors_pct": 21.3,
    "pluggers_pct": 42.5,
    "ca_ratio": 0.501
   },
   "variants": [],
   "procedure_id": null,
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "CA ratio",
    "principle 2",
    "pluggers",
    "interceptors",
    "9.5 mm"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "65"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "ex-minus-pcs-blend-95mm-cg",
   "type": "worked_example",
   "title": "Re-Percentaging the Minus-PCS Blend - 9.5 mm C-G Mix",
   "scenario": "Course example re-percentaging the combined blend passing the PCS as 100% aggregate to verify that the PCS serves as the maximum and NMAS of the fine fraction (slide 69).",
   "given": {
    "combined_blend_pct_passing": {
     "12.5": 100.0,
     "9.5": 97.9,
     "4.75": 57.5,
     "2.36": 36.2,
     "1.18": 28.3,
     "0.600": 21.2,
     "0.300": 9.9,
     "0.150": 5.3,
     "0.075": 4.5
    },
    "pcs_mm": 2.36,
    "pct_passing_pcs": 36.2
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Divide each % passing below the PCS by the % passing the PCS and multiply by 100",
     "calculation": "e.g., 1.18 mm: (28.3 / 36.2) x 100",
     "result": "78.2%"
    },
    {
     "step_number": 2,
     "description": "Repeat for remaining sieves",
     "calculation": "0.600: (21.2/36.2)x100; 0.300: (9.9/36.2)x100; 0.150: (5.3/36.2)x100; 0.075: (4.5/36.2)x100",
     "result": "58.6%, 27.3%, 14.6%, 12.4%"
    },
    {
     "step_number": 3,
     "description": "Check NMAS of the minus-PCS blend (first sieve larger than the first sieve retaining >15%)",
     "calculation": "1.18 mm retains 100-78.2 = 21.8% > 15%, so NMAS = 2.36 mm (PCS)",
     "result": "PCS (2.36 mm) confirmed as maximum and NMAS of the minus-PCS blend"
    }
   ],
   "answer": {
    "minus_pcs_blend_pct_passing": {
     "2.36": 100.0,
     "1.18": 78.2,
     "0.600": 58.6,
     "0.300": 27.3,
     "0.150": 14.6,
     "0.075": 12.4
    },
    "nmas_of_minus_pcs_blend_mm": 2.36
   },
   "variants": [],
   "procedure_id": null,
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "minus PCS blend",
    "verification",
    "fine fraction",
    "9.5 mm"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "69"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "ex-fac-ratio-95mm-cg",
   "type": "worked_example",
   "title": "FAc Ratio Calculation - 9.5 mm (3/8\") NMAS Coarse-Graded Mix",
   "scenario": "Course example calculating the FAc ratio (Principle #3) for a 9.5 mm NMAS Coarse-graded combined blend (slide 71).",
   "given": {
    "pcs_mm": 2.36,
    "scs_mm": 0.6,
    "pct_passing_pcs": 36.2,
    "pct_passing_scs": 21.2
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Compute FAc Ratio = %SCS / %PCS",
     "calculation": "21.2 / 36.2",
     "result": "0.586"
    }
   ],
   "answer": {
    "fac_ratio": 0.586
   },
   "variants": [],
   "procedure_id": null,
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "FAc ratio",
    "principle 3",
    "9.5 mm"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "71"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "ex-minus-scs-blend-95mm-cg",
   "type": "worked_example",
   "title": "Re-Percentaging the Minus-SCS Blend - 9.5 mm C-G Mix",
   "scenario": "Course example re-percentaging the blend passing the SCS as 100% aggregate to verify that the SCS serves as the maximum and NMAS of the fine part of the fine fraction (slide 72).",
   "given": {
    "scs_mm": 0.6,
    "pct_passing_scs": 21.2,
    "pct_passing_below": {
     "0.300": 9.9,
     "0.150": 5.3,
     "0.075": 4.5
    }
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Divide each % passing below the SCS by the % passing the SCS and multiply by 100",
     "calculation": "0.300: (9.9/21.2)x100; 0.150: (5.3/21.2)x100; 0.075: (4.5/21.2)x100",
     "result": "46.7%, 25.0%, 21.2%"
    },
    {
     "step_number": 2,
     "description": "Check NMAS of the minus-SCS blend",
     "calculation": "0.300 mm retains 100-46.7 = 53.3% > 15%, so NMAS = 0.600 mm (SCS)",
     "result": "SCS (0.600 mm) confirmed as maximum and NMAS of the minus-SCS blend"
    }
   ],
   "answer": {
    "minus_scs_blend_pct_passing": {
     "0.600": 100.0,
     "0.300": 46.7,
     "0.150": 25.0,
     "0.075": 21.2
    },
    "nmas_of_minus_scs_blend_mm": 0.6
   },
   "variants": [],
   "procedure_id": null,
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "minus SCS blend",
    "verification",
    "fine fraction",
    "9.5 mm"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "72"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "ex-faf-ratio-95mm-cg",
   "type": "worked_example",
   "title": "FAf Ratio Calculation - 9.5 mm (3/8\") NMAS Coarse-Graded Mix",
   "scenario": "Course example calculating the FAf ratio (Principle #4) for a 9.5 mm NMAS Coarse-graded combined blend (slide 74).",
   "given": {
    "scs_mm": 0.6,
    "tcs_mm": 0.15,
    "pct_passing_scs": 21.2,
    "pct_passing_tcs": 5.3
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Compute FAf Ratio = %TCS / %SCS",
     "calculation": "5.3 / 21.2",
     "result": "0.250"
    }
   ],
   "answer": {
    "faf_ratio": 0.25
   },
   "variants": [],
   "procedure_id": null,
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "FAf ratio",
    "principle 4",
    "9.5 mm"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "74"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "ref-ca-ratio-guidelines-cg",
   "type": "reference_table",
   "title": "CA Ratio Suggested Ranges by NMAS - Coarse-Graded Mixes (and OLD CA Ratio for Fine-Graded)",
   "table_kind": "recommended_ranges",
   "applies_to": {
    "mix_types": [
     "coarse-graded",
     "fine-graded"
    ],
    "nmas": "all"
   },
   "columns": [
    "nmas_mm",
    "nmas_english",
    "ca_ratio_range"
   ],
   "rows": [
    {
     "nmas_mm": 37.5,
     "nmas_english": "1-1/2\"",
     "ca_ratio_range": [
      0.8,
      0.95
     ]
    },
    {
     "nmas_mm": 25.0,
     "nmas_english": "1\"",
     "ca_ratio_range": [
      0.7,
      0.85
     ]
    },
    {
     "nmas_mm": 19.0,
     "nmas_english": "3/4\"",
     "ca_ratio_range": [
      0.6,
      0.75
     ]
    },
    {
     "nmas_mm": 12.5,
     "nmas_english": "1/2\"",
     "ca_ratio_range": [
      0.5,
      0.65
     ]
    },
    {
     "nmas_mm": 9.5,
     "nmas_english": "3/8\"",
     "ca_ratio_range": [
      0.4,
      0.55
     ]
    },
    {
     "nmas_mm": 4.75,
     "nmas_english": "#4",
     "ca_ratio_range": [
      0.3,
      0.45
     ]
    }
   ],
   "footnotes": [
    "Ratio increases with NMAS due to wider range of coarse sizes above the PCS.",
    "Ratios outside these ranges may work, but low ratios are more susceptible to segregation and high ratios are more difficult to compact in the field.",
    "Same ranges apply to the OLD CA ratio for FINE-graded mixes in regards to segregation susceptibility; overly high OLD CA ratios can cause a fine-graded mix to act coarse-graded."
   ],
   "tags": [
    "CA ratio",
    "ranges",
    "NMAS",
    "coarse-graded",
    "fine-graded"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "68, 79"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-cg",
    "ex-starting-points-vs-gyrations"
   ],
   "chunk": "1_3"
  },
  {
   "id": "ref-blend-eval-sieves",
   "type": "reference_table",
   "title": "Combined Blend Evaluation Table - Control Sieves and Ratio Sieves by NMAS (Coarse-Graded and SMA)",
   "table_kind": "control_sieves",
   "applies_to": {
    "mix_types": [
     "coarse-graded",
     "sma"
    ],
    "nmas": "all"
   },
   "columns": [
    "nmas_mm",
    "nmas_english",
    "half_sieve_mm",
    "half_sieve_english",
    "pcs_mm",
    "pcs_english",
    "scs_mm",
    "scs_english",
    "tcs_mm",
    "tcs_english"
   ],
   "rows": [
    {
     "nmas_mm": 37.5,
     "nmas_english": "1-1/2\"",
     "half_sieve_mm": 19.0,
     "half_sieve_english": "3/4\"",
     "pcs_mm": 9.5,
     "pcs_english": "3/8\"",
     "scs_mm": 2.36,
     "scs_english": "#8",
     "tcs_mm": 0.6,
     "tcs_english": "#30"
    },
    {
     "nmas_mm": 25.0,
     "nmas_english": "1\"",
     "half_sieve_mm": 12.5,
     "half_sieve_english": "1/2\"",
     "pcs_mm": 4.75,
     "pcs_english": "#4",
     "scs_mm": 1.18,
     "scs_english": "#16",
     "tcs_mm": 0.3,
     "tcs_english": "#50"
    },
    {
     "nmas_mm": 19.0,
     "nmas_english": "3/4\"",
     "half_sieve_mm": 9.5,
     "half_sieve_english": "3/8\"",
     "pcs_mm": 4.75,
     "pcs_english": "#4",
     "scs_mm": 1.18,
     "scs_english": "#16",
     "tcs_mm": 0.3,
     "tcs_english": "#50"
    },
    {
     "nmas_mm": 12.5,
     "nmas_english": "1/2\"",
     "half_sieve_mm": 6.35,
     "half_sieve_english": "1/4\"",
     "pcs_mm": 2.36,
     "pcs_english": "#8",
     "scs_mm": 0.6,
     "scs_english": "#30",
     "tcs_mm": 0.15,
     "tcs_english": "#100"
    },
    {
     "nmas_mm": 9.5,
     "nmas_english": "3/8\"",
     "half_sieve_mm": 4.75,
     "half_sieve_english": "#4",
     "pcs_mm": 2.36,
     "pcs_english": "#8",
     "scs_mm": 0.6,
     "scs_english": "#30",
     "tcs_mm": 0.15,
     "tcs_english": "#100"
    },
    {
     "nmas_mm": 4.75,
     "nmas_english": "#4",
     "half_sieve_mm": 2.36,
     "half_sieve_english": "#8",
     "pcs_mm": 1.18,
     "pcs_english": "#16",
     "scs_mm": 0.3,
     "scs_english": "#50",
     "tcs_mm": 0.075,
     "tcs_english": "#200"
    }
   ],
   "footnotes": [
    "CA Ratio = (%Half - %PCS) / (100% - %Half); FAc Ratio = %SCS / %PCS; FAf Ratio = %TCS / %SCS.",
    "Sieves shown in ratios refer to the % passing that sieve in the combined blend gradation.",
    "The 12.5 mm NMAS Half sieve is 6.35 mm (1/4\") - shown in red in the course table because it is a non-standard sieve for many labs.",
    "Table applies to Coarse-graded AND SMA mixes; the equations are the same but the suggested ranges differ."
   ],
   "tags": [
    "control sieves",
    "NMAS",
    "half sieve",
    "PCS",
    "SCS",
    "TCS"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "77-78"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-cg",
    "walk-est-ex07-adjust-ac-vol-correction"
   ],
   "chunk": "1_3"
  },
  {
   "id": "ref-ratio-ranges-cg",
   "type": "reference_table",
   "title": "Ratio Ranges Summary - Coarse-Graded Mixes (CA, FAc, FAf by NMAS)",
   "table_kind": "recommended_ranges",
   "applies_to": {
    "mix_types": [
     "coarse-graded"
    ],
    "nmas": "all"
   },
   "columns": [
    "ratio",
    "nmas_mm",
    "range"
   ],
   "rows": [
    {
     "ratio": "CA",
     "nmas_mm": 37.5,
     "range": [
      0.8,
      0.95
     ]
    },
    {
     "ratio": "CA",
     "nmas_mm": 25.0,
     "range": [
      0.7,
      0.85
     ]
    },
    {
     "ratio": "CA",
     "nmas_mm": 19.0,
     "range": [
      0.6,
      0.75
     ]
    },
    {
     "ratio": "CA",
     "nmas_mm": 12.5,
     "range": [
      0.5,
      0.65
     ]
    },
    {
     "ratio": "CA",
     "nmas_mm": 9.5,
     "range": [
      0.4,
      0.55
     ]
    },
    {
     "ratio": "CA",
     "nmas_mm": 4.75,
     "range": [
      0.3,
      0.45
     ]
    },
    {
     "ratio": "FAc",
     "nmas_mm": "all",
     "range": [
      0.35,
      0.5
     ]
    },
    {
     "ratio": "FAf",
     "nmas_mm": "all",
     "range": [
      0.35,
      0.5
     ]
    }
   ],
   "footnotes": [
    "FAc and FAf: avoid values < 0.40.",
    "Ranges provide a STARTING point - review acceptable existing mixes to determine a narrower target range for future designs.",
    "Avoid blends with a CA ratio significantly above the suggested range (PCS can shift smaller; poor field compactability).",
    "Avoid blends with low values for BOTH FAc and FAf (fine fraction won't pack/lock up).",
    "Table applies to the OLD CA ratio for Fine-graded mixes in regards to segregation susceptibility."
   ],
   "tags": [
    "ratio ranges",
    "coarse-graded",
    "CA",
    "FAc",
    "FAf"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "79"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-cg"
   ],
   "chunk": "1_3"
  },
  {
   "id": "ref-ratio-ranges-sma",
   "type": "reference_table",
   "title": "Ratio Ranges Summary - SMA Mixes (CA, FAc, FAf by NMAS)",
   "table_kind": "recommended_ranges",
   "applies_to": {
    "mix_types": [
     "sma"
    ],
    "nmas": "all"
   },
   "columns": [
    "ratio",
    "nmas_mm",
    "range"
   ],
   "rows": [
    {
     "ratio": "CA",
     "nmas_mm": 25.0,
     "range": [
      0.45,
      0.6
     ]
    },
    {
     "ratio": "CA",
     "nmas_mm": 19.0,
     "range": [
      0.35,
      0.5
     ]
    },
    {
     "ratio": "CA",
     "nmas_mm": 12.5,
     "range": [
      0.25,
      0.4
     ]
    },
    {
     "ratio": "CA",
     "nmas_mm": 9.5,
     "range": [
      0.15,
      0.3
     ]
    },
    {
     "ratio": "CA",
     "nmas_mm": 4.75,
     "range": [
      0.05,
      0.2
     ]
    },
    {
     "ratio": "FAc",
     "nmas_mm": "all",
     "range": [
      0.6,
      0.85
     ]
    },
    {
     "ratio": "FAf",
     "nmas_mm": "all",
     "range": [
      0.65,
      0.9
     ]
    }
   ],
   "footnotes": [
    "SMA CA ratio ranges are lower for 'gap' grading.",
    "FAc higher to reduce FA resistance; FAf higher for increased 0.075 mm.",
    "Ranges provide a STARTING point - review acceptable existing SMA mixes to determine a narrower target range."
   ],
   "tags": [
    "ratio ranges",
    "SMA",
    "CA",
    "FAc",
    "FAf"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "86"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-sma"
   ],
   "chunk": "1_3"
  },
  {
   "id": "ref-vma-sensitivity-cg",
   "type": "reference_table",
   "title": "VMA Sensitivity Rules-of-Thumb - Coarse-Graded Mixes (~1% VMA Change)",
   "table_kind": "sensitivity_factors",
   "applies_to": {
    "mix_types": [
     "coarse-graded"
    ],
    "nmas": "all"
   },
   "columns": [
    "principle",
    "parameter",
    "direction",
    "change_for_1pct_vma",
    "range",
    "note"
   ],
   "rows": [
    {
     "principle": 1,
     "parameter": "CA CUW (% passing PCS)",
     "direction": "CA CUW increase = VMA increase",
     "change_for_1pct_vma": "4% change in PCS",
     "range": "3-5%",
     "note": null
    },
    {
     "principle": 2,
     "parameter": "CA Ratio",
     "direction": "increase = VMA increase",
     "change_for_1pct_vma": 0.2,
     "range": [
      0.1,
      0.3
     ],
     "note": null
    },
    {
     "principle": 3,
     "parameter": "FAc Ratio",
     "direction": "increase = VMA decrease",
     "change_for_1pct_vma": 0.05,
     "range": [
      0.025,
      0.075
     ],
     "note": "Has the MOST influence on VMA"
    },
    {
     "principle": 4,
     "parameter": "FAf Ratio",
     "direction": "increase = VMA decrease",
     "change_for_1pct_vma": 0.05,
     "range": [
      0.025,
      0.075
     ],
     "note": null
    }
   ],
   "footnotes": [
    "VMA is also affected by individual aggregate shape, texture and strength - not directly accounted for in the ratios.",
    "The dependable output of the principles is the DIRECTION of VMA change."
   ],
   "tags": [
    "VMA sensitivity",
    "rules of thumb",
    "coarse-graded"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "76"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-cg",
    "ex-estimate-vma-voids-cg-19mm",
    "ref-est-sheet-factor-defaults"
   ],
   "chunk": "1_3"
  },
  {
   "id": "ref-vma-sensitivity-sma",
   "type": "reference_table",
   "title": "VMA Sensitivity Rules-of-Thumb - SMA Mixes (~1% VMA Change)",
   "table_kind": "sensitivity_factors",
   "applies_to": {
    "mix_types": [
     "sma"
    ],
    "nmas": "all"
   },
   "columns": [
    "principle",
    "parameter",
    "direction",
    "change_for_1pct_vma",
    "range",
    "note"
   ],
   "rows": [
    {
     "principle": 1,
     "parameter": "CA CUW (% passing PCS)",
     "direction": "CA CUW increase = VMA increase",
     "change_for_1pct_vma": "2% change in PCS",
     "range": "1-3%",
     "note": "Has the MOST influence on VMA"
    },
    {
     "principle": 2,
     "parameter": "CA Ratio",
     "direction": "increase = VMA increase",
     "change_for_1pct_vma": 0.2,
     "range": [
      0.1,
      0.3
     ],
     "note": null
    },
    {
     "principle": 3,
     "parameter": "FAc Ratio",
     "direction": "increase = VMA decrease",
     "change_for_1pct_vma": 0.1,
     "range": [
      0.075,
      0.125
     ],
     "note": null
    },
    {
     "principle": 4,
     "parameter": "FAf Ratio",
     "direction": "increase = VMA decrease",
     "change_for_1pct_vma": 0.1,
     "range": [
      0.075,
      0.125
     ],
     "note": "Has the 2nd most influence on VMA"
    }
   ],
   "footnotes": [
    "A change in the FAf ratio of an SMA changes both the amount of filler AND the stiffness of the mortar.",
    "VMA is also affected by individual aggregate shape, texture and strength - not directly accounted for in the ratios.",
    "The dependable output of the principles is the DIRECTION of VMA change."
   ],
   "tags": [
    "VMA sensitivity",
    "rules of thumb",
    "SMA"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "85"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-sma"
   ],
   "chunk": "1_3"
  },
  {
   "id": "heur-ca-ratio-low-segregation",
   "type": "heuristic",
   "statement": "If the CA ratio is too low (below the suggested range), there is an excess of pluggers and the mix will generally be susceptible to segregation.",
   "rationale": "A low CA ratio means few interceptors relative to pluggers - the large coarse particles are not held apart or supported, so they separate easily during handling and placement.",
   "thresholds": {
    "reference": "below the NMAS-specific CA ratio range (see ref-ca-ratio-guidelines-cg)"
   },
   "when_violated": "Expect segregation problems in trucks, pavers and behind the screed.",
   "context": "Applies to Coarse-graded mixes, and to the OLD CA ratio for Fine-graded mixes.",
   "mix_types": [
    "coarse-graded",
    "fine-graded"
   ],
   "tags": [
    "CA ratio",
    "segregation",
    "pluggers"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "67-68"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "heur-ca-ratio-high-field-compaction",
   "type": "heuristic",
   "statement": "As the CA ratio approaches the high end of the suggested range, the coarse fraction becomes 'balanced' (neither pluggers nor interceptors control), which makes the mix difficult to compact - especially in the field where it is not confined as in the lab mold.",
   "rationale": "High CA ratios generally occur with 'S'-shaped combined blend gradations that gained notoriety in Superpave due to field compaction difficulties.",
   "thresholds": {
    "reference": "high end of the NMAS-specific CA ratio range"
   },
   "when_violated": "Field compaction difficulties; density hard to achieve even when lab compaction looks fine.",
   "context": "Blends with CA ratios above the high end of the suggested range are generally not recommended.",
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "CA ratio",
    "field compaction",
    "S-shaped gradation",
    "Superpave"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "67"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "heur-ca-ratio-exceed-pcs-shift",
   "type": "heuristic",
   "statement": "If the CA ratio exceeds the high end of the range, interceptors begin to control the coarse fraction and reduce its void size - eventually the PCS shifts to the next smaller sieve (changing coarse/fine volumes and all three ratio reference sieves), and the blend NMAS can drop to the next smaller sieve, making the mix segregation-susceptible again at its new 'low' CA ratio.",
   "rationale": "Decreasing coarse-fraction void size redefines which particles create voids versus fill them; the control sieve framework must then be re-referenced.",
   "thresholds": {
    "reference": "above the NMAS-specific CA ratio range"
   },
   "when_violated": "Re-check the actual NMAS and PCS of the blend; re-evaluate all ratios against the new reference sieves.",
   "context": "Coarse-graded mixes evaluated with Principle #2.",
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "CA ratio",
    "PCS shift",
    "NMAS drop",
    "segregation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "67"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "heur-interceptors-increase-vma",
   "type": "heuristic",
   "statement": "Interceptors increase VMA by reducing the packing achieved in the Coarse fraction, which in turn reduces the packing achieved in the Fine fraction.",
   "rationale": "Interceptors (minus Half sieve, plus PCS) are too large to fit into the voids created by the larger coarse particles, so they hold the pluggers apart.",
   "thresholds": null,
   "when_violated": null,
   "context": "Core mental model for Principle #2 (CA ratio) in mixes with CA interlock.",
   "mix_types": [
    "coarse-graded",
    "sma"
   ],
   "tags": [
    "interceptors",
    "VMA",
    "packing"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "65-66"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "heur-fac-dip-cg",
   "type": "heuristic",
   "statement": "Coarse-graded FAc ratio: as it increases up to ~0.55, VMA decreases; beyond ~0.55, VMA increases. The 'Dip' (maximum packing) generally occurs in the range 0.45-0.65.",
   "rationale": "Material between the PCS and SCS creates voids in the overall fine fraction; material passing the SCS fills them. Maximum packing occurs where filling is optimized - moving either direction away from the dip increases VMA.",
   "thresholds": {
    "dip_center": 0.55,
    "dip_range": [
     0.45,
     0.65
    ],
    "suggested_range": [
     0.35,
     0.5
    ]
   },
   "when_violated": "Near the dip, small gradation changes flip the direction of VMA response - figure out WHERE the dip occurs for your materials.",
   "context": "Principle #3, Coarse-graded mixes. Higher values approach the restricted zone; with natural sand, high FAc increases tenderness potential.",
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "FAc ratio",
    "dip",
    "VMA",
    "maximum packing"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "70"
   },
   "verified": true,
   "corroborated_by": [
    "ref-fa-dip-by-mixtype",
    "ref-est-sheet-factor-defaults",
    "ref-field-factor-adjust-limits"
   ],
   "chunk": "1_3"
  },
  {
   "id": "heur-faf-dip-cg",
   "type": "heuristic",
   "statement": "Coarse-graded FAf ratio: as it increases up to ~0.55, VMA decreases; beyond ~0.55, VMA increases. The 'Dip' generally occurs in the range 0.45-0.65. A LOW FAf ratio can increase the potential for mix tenderness.",
   "rationale": "Material between the SCS and TCS creates voids in the fine part of the fine fraction; material passing the TCS (dust) fills them.",
   "thresholds": {
    "dip_center": 0.55,
    "dip_range": [
     0.45,
     0.65
    ],
    "suggested_range": [
     0.35,
     0.5
    ]
   },
   "when_violated": "Low FAf = lack of dust to fill/stiffen - watch for tenderness.",
   "context": "Principle #4, Coarse-graded mixes. Adjusted primarily via MF/BHF amount and gradation; changing FA volume blend also shifts FAc.",
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "FAf ratio",
    "dip",
    "VMA",
    "tenderness"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "73"
   },
   "verified": true,
   "corroborated_by": [
    "ref-fa-dip-by-mixtype",
    "ref-est-sheet-factor-defaults",
    "ref-field-factor-adjust-limits"
   ],
   "chunk": "1_3"
  },
  {
   "id": "heur-fa-avoid-below-040-cg",
   "type": "heuristic",
   "statement": "For Coarse-graded mixes, keep both FA ratios (FAc and FAf) generally in 0.35-0.50 and avoid values below 0.40 - lower values may be difficult to compact. Also avoid LOW values for BOTH ratios at once: the fine fraction won't pack or lock up and field compactability becomes very difficult.",
   "rationale": "Low FA ratios mean too much void-creating material relative to void-filling material in the fine fraction.",
   "thresholds": {
    "suggested_range": [
     0.35,
     0.5
    ],
    "avoid_below": 0.4
   },
   "when_violated": "Very difficult field compaction.",
   "context": "Principles #3 and #4, Coarse-graded mixes.",
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "FAc ratio",
    "FAf ratio",
    "compaction",
    "0.40"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "70, 73, 79"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-cg"
   ],
   "chunk": "1_3"
  },
  {
   "id": "heur-fa-opposite-ends",
   "type": "heuristic",
   "statement": "FAc and FAf values that are 'opposite' (one at the lower end of its range, the other at the upper end) may work together to meet volumetric requirements, but it is best to be more towards the mid-point for both FA ratios for field compactability.",
   "rationale": "Balanced fine-fraction packing at both levels compacts more predictably than compensating extremes.",
   "thresholds": null,
   "when_violated": "Volumetrics may pass in the lab while field compaction suffers.",
   "context": "Coarse-graded ratio ranges summary.",
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "FAc ratio",
    "FAf ratio",
    "mid-point",
    "field compaction"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "79"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "heur-verify-fine-blend-nmas",
   "type": "heuristic",
   "statement": "The PCS generally serves as the maximum and NMAS of the minus-PCS blend (and the SCS for the minus-SCS blend) - but BE SURE TO VERIFY THIS FIRST: re-percentage the blend passing the control sieve as 100% aggregate (divide each smaller sieve's % passing by the % passing the control sieve and multiply by 100), then apply the >15% retained NMAS definition.",
   "rationale": "The Bailey NMAS definition (first sieve larger than the first sieve to retain more than 15%) applies to each re-percentaged sub-blend, and unusual gradations can shift the sub-blend NMAS off the control sieve.",
   "thresholds": {
    "nmas_retained_pct": 15
   },
   "when_violated": "If the sub-blend NMAS is not the control sieve, the ratio reference sieves must be reconsidered.",
   "context": "Fine fraction evaluation for Principles #3 and #4.",
   "mix_types": [
    "coarse-graded",
    "sma",
    "fine-graded"
   ],
   "tags": [
    "verification",
    "minus PCS blend",
    "minus SCS blend",
    "NMAS"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "69, 72"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "heur-fac-most-influence-cg",
   "type": "heuristic",
   "statement": "In a Coarse-graded mix, the FAc ratio has the MOST influence of the four principles on altering VMA (~0.05 change ~= 1% VMA).",
   "rationale": "Altering FAc normally changes particle shape, texture and strength as well as gradation, because the adjustment typically consists of changing the FA volume blend (e.g., manufactured vs natural sand).",
   "thresholds": {
    "change_for_1pct_vma": 0.05,
    "range": [
     0.025,
     0.075
    ]
   },
   "when_violated": null,
   "context": "VMA sensitivity, Coarse-graded mixes.",
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "FAc ratio",
    "VMA",
    "most influence"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "76"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "heur-ca-cuw-most-influence-sma",
   "type": "heuristic",
   "statement": "In an SMA, the CA CUW (CA volume) has the MOST influence of the four principles on VMA (and on VCAmix); the FAf ratio has the 2nd most influence.",
   "rationale": "Increasing CA CUW increases CA interlock and compacts the mastic less; FAf changes both the amount of filler and mortar stiffness.",
   "thresholds": {
    "ca_cuw_change_for_1pct_vma": "2% change in PCS (range 1-3%)",
    "faf_change_for_1pct_vma": 0.1
   },
   "when_violated": null,
   "context": "VMA sensitivity, SMA mixes.",
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "CA CUW",
    "FAf ratio",
    "VMA",
    "VCAmix"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "80, 85"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "heur-sma-keep-ca-ratio-low",
   "type": "heuristic",
   "statement": "For SMA, keep the CA ratio on the LOW end of the range (i.e., gap-graded) if possible - it increases compactability and reduces the amount of interceptor material available for degradation.",
   "rationale": "SMA interceptors either hold the CA fraction apart or, if too weak, degrade under lab/field compaction and become fine fraction - increasing the fine volume that fills coarse voids and collapsing VMA.",
   "thresholds": {
    "reference": "low end of NMAS-specific SMA CA ratio range (see ref-ratio-ranges-sma)"
   },
   "when_violated": "VMA collapse from interceptor degradation; decreased field compactability as CA ratio increases.",
   "context": "Principle #2 for SMA.",
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "CA ratio",
    "gap-graded",
    "degradation",
    "VMA collapse"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "81"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "heur-sma-faf-optimum-filler",
   "type": "heuristic",
   "statement": "Exercise caution when altering the SMA FAf ratio to change VMA. Find the 'optimum' amount of filler for filling voids and proper mortar stiffness, then adjust VMA with the CA volume (CA CUW) instead.",
   "rationale": "In an SMA the FAf ratio is primarily a function of Mineral Filler: low = lack of filler, high = excess stiffener. Using it as a VMA knob compromises mortar quality.",
   "thresholds": {
    "suggested_range": [
     0.65,
     0.9
    ],
    "dip_range": [
     0.6,
     0.8
    ],
    "dip_center": 0.7
   },
   "when_violated": "Over-stiffened or under-filled mortar even if VMA targets are met.",
   "context": "Principle #4 for SMA. Also consider the role of fibers.",
   "mix_types": [
    "sma"
   ],
   "tags": [
    "SMA",
    "FAf ratio",
    "mineral filler",
    "mortar stiffness",
    "CA CUW"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "83"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "heur-calibrate-to-existing-mixes",
   "type": "heuristic",
   "statement": "The published ratio ranges are STARTING points. Calculate the Bailey ratios for your own acceptable existing mixes (dense-graded and SMA) to determine a narrower range to target for future designs with your aggregates.",
   "rationale": "Aggregate shape, texture and strength vary by source and are not directly accounted for in the ratios; local experience narrows the useful window.",
   "thresholds": null,
   "when_violated": null,
   "context": "Ratio ranges summaries for Coarse-graded and SMA mixes.",
   "mix_types": [
    "all"
   ],
   "tags": [
    "ratio ranges",
    "starting point",
    "existing mixes",
    "calibration"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "79, 86"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "heur-principles-direction-only",
   "type": "heuristic",
   "statement": "The main point you can depend on with the four principles' VMA rules-of-thumb is the DIRECTION of change (increasing or decreasing VMA) - not the exact magnitude.",
   "rationale": "VMA is also affected by the characteristics of each individual aggregate (shape, texture, strength), which are not directly accounted for in the combined blend evaluation ratios.",
   "thresholds": null,
   "when_violated": null,
   "context": "VMA sensitivity summaries for both Coarse-graded and SMA mixes.",
   "mix_types": [
    "all"
   ],
   "tags": [
    "VMA",
    "direction of change",
    "rules of thumb"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "76, 85"
   },
   "verified": true,
   "chunk": "1_3"
  },
  {
   "id": "note-slide68-segregation-factors",
   "type": "student_annotation",
   "text": "Segregation Susceptibility: Vbe (how much glue does the rock have), Type of AC (76 is stickier), Mix temp (also affects stickiness)",
   "annotates_id": "day1-slide-068",
   "confidence": "mostly clear; '76' could read '7b' - interpreted as PG 76 binder being stickier",
   "tags": [
    "segregation",
    "Vbe",
    "binder grade",
    "mix temperature",
    "class note"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "68"
   },
   "verified": false,
   "chunk": "1_3"
  },
  {
   "id": "day1-slide-087",
   "type": "slide",
   "day": 1,
   "slide_number": 87,
   "slide_title": "Combined Blend Evaluation - Fine-Graded Mixes (Intro)",
   "slide_content": "Treat the portion passing the PCS as the 'blend': 'Coarse' aggregate and 'Fine' aggregate - 'Coarse' creates voids, 'Fine' fills voids. Determine New PCS & related sieves. Determine New CA, FAc and FAf ratios.",
   "instructor_notes": "Evaluating the combined blend of a Fine-graded mix requires treating the portion passing the Original PCS as the 'primary blend'. Generally we can increase VMA in a Fine-graded mix by DECREASING the CA CUW (expressed as % CA LUW), which makes the mix finer in the amount passing the Original PCS - decreasing the volume of the coarse fraction and increasing the volume of the Fine fraction, which is the 'main' portion of the combined blend. The Fine fraction (passing the Original PCS) contains coarse particles that create voids and fine particles that fill them. We determine a New NMAS, New PCS, New Half sieve, New SCS, New TCS and New Ratios.",
   "key_callouts": [
    "Fine-graded: the fine fraction (passing Original PCS) is the primary blend",
    "Generally increase VMA in a Fine-graded mix by DECREASING the CA CUW"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "primary blend",
    "new sieves",
    "new ratios"
   ],
   "related_ids": [
    "day1-slide-088",
    "heur-fg-decrease-cuw-increase-vma"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "87"
   },
   "verified": true,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-088",
   "type": "slide",
   "day": 1,
   "slide_number": 88,
   "slide_title": "Combined Blend Evaluation - Fine-Graded Mixes (Diagram)",
   "slide_content": "Coarse fraction (above Original PCS): fills voids in the Fine fraction. Half Sieve = 0.5 x NMAS. Original PCS = 0.22 x NMAS. New PCS = 0.22 x New NMAS*. View the Fine fraction as the 'PRIMARY' blend of 'coarse' and 'fine' aggregate.",
   "instructor_notes": "The material ABOVE the Original PCS primarily serves to fill voids because these particles are spread apart and not in direct contact with each other, at least for the most part. The material passing the Original PCS primarily controls the packing that takes place - a blend of coarse particles that create voids and fine particles that fill them. *Although the Original PCS generally serves as the maximum and NMAS sieves for the 'blend', BE SURE TO VERIFY THIS FIRST by looking at the 'blend' passing the Original PCS as 100% aggregate: divide the % passing the first sieve smaller than the Original PCS by the % passing the Original PCS, and multiply by 100. NMAS of the blend is still defined as the first sieve larger than the first sieve to retain more than 15%.",
   "key_callouts": [
    "In a Fine-graded mix, the coarse fraction FILLS voids in the fine fraction",
    "BE SURE TO VERIFY the Original PCS serves as maximum and NMAS of the primary blend"
   ],
   "formulas": [
    "Half sieve = 0.5 x NMAS",
    "Original PCS = 0.22 x NMAS",
    "New PCS = 0.22 x New NMAS"
   ],
   "figures": [
    "Notebook diagram: coarse fraction above Original PCS, fine (primary) blend below with New PCS"
   ],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "primary blend",
    "new PCS",
    "verification"
   ],
   "related_ids": [
    "heur-verify-fine-blend-nmas",
    "heur-bailey-nmas-15pct"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "88"
   },
   "verified": true,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-089",
   "type": "slide",
   "day": 1,
   "slide_number": 89,
   "slide_title": "Fine Fraction Evaluation - Fine-Graded Mixes (New Sieve Hierarchy)",
   "slide_content": "Original Coarse Fraction: Original Half Sieve = 0.5 x NMAS; Original PCS = 0.22 x NMAS = New NMAS*. New Coarse Fraction: New Half Sieve = 0.5 x New NMAS; New PCS = 0.22 x New NMAS. New Fine Fraction: New SCS = 0.22 x New PCS; New TCS = 0.22 x New SCS.",
   "instructor_notes": "Concepts to grasp: (1) View the Fine fraction (passing the Original PCS) as the 'main' portion of the combined blend that is in control of the aggregate packing achieved. (2) Looking at the Fine fraction as the 'primary blend', we determine a new NMAS, new Half sieve, new PCS, new SCS and new TCS - determining these sieves works the same way, always using 0.5x or 0.22x depending on the sieve in question. (3) We can then determine new ratios utilizing the new sieves. The main point: the Fine fraction is the 'primary blend' with coarse particles that create voids and fine particles that fill those voids. *Although the Original PCS generally serves as the maximum and NMAS sieves for the blend, BE SURE TO VERIFY THIS FIRST!",
   "key_callouts": [
    "Original PCS = New NMAS (verify first)",
    "New sieves always use 0.5x (half) or 0.22x (control sieves)"
   ],
   "formulas": [
    "New NMAS = Original PCS (verify)",
    "New Half = 0.5 x New NMAS",
    "New PCS = 0.22 x New NMAS",
    "New SCS = 0.22 x New PCS",
    "New TCS = 0.22 x New SCS"
   ],
   "figures": [
    "Notebook diagram of original and new fraction hierarchy"
   ],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "new sieves",
    "hierarchy"
   ],
   "related_ids": [
    "day1-slide-090",
    "ref-fg-blend-eval-sieves"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "89"
   },
   "verified": true,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-090",
   "type": "slide",
   "day": 1,
   "slide_number": 90,
   "slide_title": "Combined Blend Evaluation - Fine-Graded Mixes (The Four Principles)",
   "slide_content": "Summary of the four principles for Fine-graded mixes. Principle 1 = % CA LUW (sets % passing Original PCS). Principle 2 = New CA Ratio = (% New Half Sieve - % New PCS) / (% Original PCS - % New Half Sieve). Principle 3 = New FAc Ratio = % New SCS / % New PCS. Principle 4 = New FAf Ratio = % New TCS / % New SCS. Also See Slide 6!",
   "instructor_notes": "Summary of the four principles of the Bailey Method for Fine-graded mixes with the main sieves of reference. Principle #1 (% Original PCS) is a direct result of the CA Volume, expressed as a percentage of the CA LUW. Principle #2, the New CA ratio, relates to the particle size distribution in the New Coarse fraction. Principle #3, the New FAc ratio, relates to the particle size distribution in the overall New Fine fraction. Principle #4, the New FAf ratio, relates to the particle size distribution in the fine part of the New Fine fraction. Remember there is a 'Dip' for each of the two New FA ratios representing maximum packing - increasing OR decreasing a given New FA ratio away from the Dip causes VMA to INCREASE. It is important to figure out WHERE these New FA Dips occur!",
   "key_callouts": [
    "New CA Ratio denominator uses % Original PCS - % New Half Sieve"
   ],
   "formulas": [
    "New CA Ratio = (%New Half - %New PCS) / (%Original PCS - %New Half)",
    "New FAc = %New SCS / %New PCS",
    "New FAf = %New TCS / %New SCS"
   ],
   "figures": [
    "Notebook diagram tying the four FG principles to the new sieve hierarchy"
   ],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "four principles",
    "new ratios"
   ],
   "related_ids": [
    "day1-slide-075",
    "day1-slide-084"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "90"
   },
   "verified": true,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-091",
   "type": "slide",
   "day": 1,
   "slide_number": 91,
   "slide_title": "Combined Blend Evaluation - Fine-Graded Mixes (VMA Sensitivity)",
   "slide_content": "Rules-of-thumb for ~1% change in VMA (Fine-Graded): 1. CA CUW decrease = VMA increase; 6% change in ORIGINAL PCS ~= 1% change in VMA (range 5-7%). 2. New CA Ratio increase = VMA increase; 0.35 change ~= 1% VMA (range 0.25-0.45). 3. New FAc Ratio increase = VMA decrease; 0.05 change ~= 1% VMA (range 0.025-0.075) - has the MOST influence on VMA. 4. New FAf Ratio increase = VMA decrease; 0.05 change ~= 1% VMA (range 0.025-0.075). 'OLD' CA Ratio relates to segregation susceptibility.",
   "instructor_notes": "Summary of the four principles and their effects on VMA in a Fine-graded mix. Decreasing the CA CUW increases the fine fraction volume - removing coarse particles that are spread apart filling voids and replacing them with fine particles that have voids between them. Treating the fine fraction passing the Original PCS as the 'primary blend' gives us New sieves for the three New ratios. Changes in these ratios still cause VMA to change in the direction previously discussed. Because there is a smaller volume of 'coarse' in the fine fraction (vs the material above the Original PCS), the New CA ratio is less sensitive, and its range is less dependent on the NMAS of the mix. As the New CA ratio INCREASES, VMA INCREASES. As the New FAc ratio INCREASES, VMA DECREASES; range generally 0.35-0.50 (avoid < 0.40); above ~0.50 VMA begins to increase; the New FAc Dip generally occurs 0.40-0.60. Same for the New FAf ratio (range 0.35-0.50, avoid < 0.40, dip 0.40-0.60). With this mix type there is a larger volume of fine fraction overall, so the sensitivity of VMA to change in the New FAc may increase compared to a Coarse-graded mix - the New FAc ratio is the most influential on VMA of the four principles for a Fine-graded mix. Of the OLD ratios (on the entire combined blend), the OLD CA ratio still relates to segregation susceptibility of the overall mix. VMA is also affected by individual aggregate shape, texture and strength. The dependable point is the DIRECTION of change.",
   "key_callouts": [
    "FG: New FAc ratio has the most influence on VMA",
    "OLD CA ratio still relates to segregation susceptibility of the overall mix"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "VMA sensitivity",
    "rules of thumb",
    "new ratios"
   ],
   "related_ids": [
    "ref-vma-sensitivity-fg",
    "heur-fg-new-fac-dip",
    "heur-principles-direction-only"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "91"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-092",
   "type": "slide",
   "day": 1,
   "slide_number": 92,
   "slide_title": "Combined Blend Evaluation Table - Fine-Graded Mixes (Metric)",
   "slide_content": "Table of New sieves per NMAS (metric). NMAS 37.5/25.0/19.0/12.5/9.5/4.75 mm; Original PCS 9.5/4.75/4.75/2.36/2.36/1.18; New Half Sieve 4.75/2.36/2.36/1.18/1.18/0.600; New PCS 2.36/1.18/1.18/0.600/0.600/0.300; New SCS 0.600/0.300/0.300/0.150/0.150/0.075; New TCS 0.150/0.075/0.075 mm (37.5, 25.0, 19.0 only). For 12.5, 9.5 and 4.75 mm mixes, only the New CA and New FAc ratios can be determined. Sieves shown refer to the % passing for the blend below the original PCS.",
   "instructor_notes": "This table applies to Fine-graded mixes - all sieves and ratio equations for a given NMAS designation. In the ratio equations, the sieves represent the % passing that sieve. Although the Original PCS generally serves as the maximum and NMAS sieves for the 'blend', BE SURE TO VERIFY THIS FIRST! The sieve used for the New NMAS factors into determining the corresponding New Half sieve, New PCS, New SCS and New TCS.",
   "key_callouts": [
    "For 12.5, 9.5 and 4.75 mm FG mixes, only New CA and New FAc can be determined (no New TCS sieve exists)",
    "The New NMAS sieve drives all the other New sieves"
   ],
   "formulas": [],
   "figures": [
    "Full metric FG control sieve table"
   ],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "control sieves",
    "reference table",
    "metric"
   ],
   "related_ids": [
    "ref-fg-blend-eval-sieves"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "92"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-093",
   "type": "slide",
   "day": 1,
   "slide_number": 93,
   "slide_title": "Combined Blend Evaluation Table - Fine-Graded Mixes (English)",
   "slide_content": "Same FG table in English designations. NMAS 1-1/2\"/1\"/3/4\"/1/2\"/3/8\"/#4; Original PCS 3/8\"/#4/#4/#8/#8/#16; New Half Sieve #4/#8/#8/#16/#16/#30; New PCS #8/#16/#16/#30/#30/#50; New SCS #30/#50/#50/#100/#100/#200; New TCS #100/#200/#200 (first three NMAS only). For 1/2\", 3/8\" and #4 mixes, only the New CA and New FAc ratios can be determined.",
   "instructor_notes": "English-unit version of the Fine-graded combined blend evaluation table. Same content as the metric table.",
   "key_callouts": [],
   "formulas": [],
   "figures": [
    "Full English FG control sieve table"
   ],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "control sieves",
    "reference table",
    "english units"
   ],
   "related_ids": [
    "ref-fg-blend-eval-sieves",
    "day1-slide-092"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "93"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-094",
   "type": "slide",
   "day": 1,
   "slide_number": 94,
   "slide_title": "Ratio Ranges Summary - Fine-Graded Mixes",
   "slide_content": "'OLD' CA Ratio by NMAS (same as Coarse-graded ranges) with 1.5x MAX values: 37.5 mm 0.80-0.95 (1.425); 25.0 mm 0.70-0.85 (1.275); 19.0 mm 0.60-0.75 (1.125); 12.5 mm 0.50-0.65 (0.975); 9.5 mm 0.40-0.55 (0.825); 4.75 mm 0.30-0.45 (0.675). New CA Ratio: 0.6-1.0 - more variable in Fine-graded mixes, therefore the range is wider. New FAc Ratio: 0.35-0.50 (avoid values < 0.40). New FAf Ratio: 0.35-0.50 (avoid values < 0.40); for the three smallest NMAS mixes only the New CA and New FAc ratios can be determined. Rule-of-thumb: do NOT exceed 1.5 x the corresponding MAX 'OLD' CA ratio value. 'OLD' CA Ratio relates to segregation susceptibility.",
   "instructor_notes": "This table summarizes the suggested ratio ranges according to the NMAS for Fine-graded mixes. The 'OLD' CA ratio (used for Coarse-graded mixes) still pertains to segregation susceptibility for Fine-graded mixes. A rule-of-thumb for FINE-graded mixes is to NOT exceed 1.5x the corresponding MAX 'OLD' CA ratio value. Calculate these ratios for your existing Fine-graded mixes to get a better idea of what ranges to work within - remember to calculate the New ratios on the New sieves. Avoid combined blends with low values for both the New FAc and New FAf ratios: field compactability can be very difficult because the overall fine fraction (minus New PCS) doesn't want to pack/lock up. New FAc and New FAf values that are 'opposite' may work to meet volumetrics, but it is best to be more towards the mid-point for both for field compactability. See Summary Sheets handout inside front cover of manual.",
   "key_callouts": [
    "Do NOT exceed 1.5 x the MAX 'OLD' CA ratio value for Fine-graded mixes",
    "New CA range 0.6-1.0 is wider and not NMAS-dependent",
    "Avoid low values for BOTH New FAc and New FAf"
   ],
   "formulas": [],
   "figures": [
    "VMA vs % CA LUW curve thumbnail (fine side highlighted)"
   ],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "ratio ranges",
    "OLD CA ratio",
    "1.5x rule"
   ],
   "related_ids": [
    "ref-ratio-ranges-fg",
    "heur-fg-old-ca-15x-rule",
    "heur-fa-opposite-ends",
    "heur-calibrate-to-existing-mixes"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "94"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-095",
   "type": "slide",
   "day": 1,
   "slide_number": 95,
   "slide_title": "9.5 mm (3/8\") NMAS Agg Blends for Varying % CA LUW (0.45 Power Chart)",
   "slide_content": "0.45 power chart with nine combined blends of the same individual aggregates at % CA LUW from 50% to 130% (legend 50/60/70/80/90/100/110/120/130%). PCS 2.36 mm (#8) highlighted; F (fine) left of PCS, C (coarse) right. Y-axis shows the approximate % passing the PCS for each blend.",
   "instructor_notes": "Nine different combined blends using the same individual aggregates, calculated with a Volume Blending Spreadsheet. For a 9.5 mm NMAS mix the PCS is 2.36 mm (#8): above it is the coarse fraction, passing it the fine fraction. Each blend consists of two CA's, two FA's and BHF's: the volume blend of the CA's was held constant, the volume blend of the FA's was held constant, and the minus 0.075 mm (#200) was held constant by adjusting the % BHF's. The ONLY change between blends was the % CA LUW (CA volume). As the CA CUW increases, the CA volume increases and the combined blend gets COARSER. Note the 90% CA LUW blend (green line) actually plots BELOW the maximum density line, but from the Bailey Method point-of-view we regard it as FINE-graded. Changing the CA CUW 10% for any mix type generally changes the percent passing the PCS in the combined blend 4-5%.",
   "key_callouts": [
    "The only change between the nine blends was the % CA LUW",
    "Changing the CA CUW 10% generally changes % passing the PCS 4-5% (any mix type)",
    "A blend can plot below the max density line and still be Bailey-classified as Fine-graded"
   ],
   "formulas": [],
   "figures": [
    "0.45 power chart with nine gradation curves, legend 50-130% CA LUW"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "0.45 power chart",
    "CA LUW",
    "PCS",
    "blend comparison"
   ],
   "related_ids": [
    "heur-cuw-10pct-pcs-shift",
    "day1-slide-096"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "95"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-096",
   "type": "slide",
   "day": 1,
   "slide_number": 96,
   "slide_title": "VMA vs. CA Volume (Principle #1) - The Master Curve",
   "slide_content": "Graph of VMA (y) vs % CA LUW (x, 50-130). X-axis represents Principle #1. Curve dips near ~90% CA LUW ('densest' point). Fine-graded mixes are left of the dip, Coarse-graded right of the dip, SMA well to the right. 'Avoid these areas if possible' arrows point at the dip region.",
   "instructor_notes": "If we mixed and compacted those nine blends, VMA would trend as shown in relation to changing CA volume (Principle #1). The 'densest' point (Dip) correlates to combined blends near the maximum density line on a 0.45 power chart, generally around 90% CA LUW. Moving right and up requires an increase in CA volume (Coarse-graded and SMA) - the VMA increase relates to compaction energy focused more toward the coarse fraction due to CA interlock. Moving left and up requires a decrease in CA volume (Fine-graded) - the VMA increase relates to removing coarse particles floating in the fine fraction and replacing them with multiple fine particles that have voids between them. Sensitivity to a change in CA volume: Fine-graded least sensitive (6% change in ORIGINAL PCS ~= 1% VMA), Coarse-graded next (4% ~= 1% VMA), SMA most sensitive (2% ~= 1% VMA). CA CUW > 80% but < 95% of CA LUW can cause compaction issues (e.g., tenderness) IF there is a significant difference in shape, texture and/or strength of one fraction vs the other, since a blend gradation in this range tends to bounce back and forth between Coarse-graded and Fine-graded during production due to normal gradation variation - with little to NO change in volumetrics! Coarse-graded mixes designed > 105% CA LUW can be difficult to compact in the field, more sensitive than normal to gradation changes, and susceptible to degradation. Also see the similar graph presented by Erv Dukatz, Superpave Conference, Denver, CO, April 11, 2000, 'Design and Production - Volumetrics.'",
   "key_callouts": [
    "Densest point (Dip) generally around 90% CA LUW",
    "CA CUW 80-95% CA LUW: blend can bounce between CG and FG in production with little volumetric change",
    "Coarse-graded designed > 105% CA LUW: field compaction difficulty, gradation sensitivity, degradation risk"
   ],
   "formulas": [],
   "figures": [
    "VMA vs % CA LUW master curve with Fine/Coarse/SMA regions"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "VMA vs CA volume",
    "master curve",
    "dip",
    "90% CA LUW",
    "mix type regions"
   ],
   "related_ids": [
    "heur-mix-sensitivity-order",
    "heur-ca-luw-80-95-production-bounce",
    "heur-cg-cuw-above-105",
    "heur-cuw-guardrails-dense"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "96"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-097",
   "type": "slide",
   "day": 1,
   "slide_number": 97,
   "slide_title": "VMA vs. CA Volume - Horizontal Shift (Principle #2)",
   "slide_content": "Shifting the VMA vs CA Volume curve LEFT or RIGHT (horizontally) is primarily a function of the COARSE fraction characteristics (gradation, shape, texture and strength). Arrow: 'COARSE fraction - MORE Compactable' shifts the curve right. Principle #2.",
   "instructor_notes": "Changes to the coarse fraction characteristics can also alter VMA in the fine fraction, raising or lowering the curve vertically to some degree. The easier the coarse fraction is to compact, the more compaction energy is directed to the fine fraction, which decreases VMA, or vice-versa. In Bailey terms this gradation characteristic is reflected in the CA ratio (Principle #2). As the CA ratio decreases, the coarse fraction becomes more compactable and VMA decreases - the curve shifts horizontally to the right. However, the curve can only be shifted horizontally so far to the left: coarse fraction characteristics become ineffective once the coarse fraction volume becomes low enough that the coarse particles are spread apart, which occurs with Fine-graded mixes. With Fine-graded mixes, the characteristics of the New coarse fraction may increase or decrease the slope of the left side of the curve, but the curve will not shift horizontally.",
   "key_callouts": [
    "Horizontal shift of the VMA curve = coarse fraction characteristics (Principle #2)",
    "Coarse fraction characteristics become ineffective in Fine-graded territory"
   ],
   "formulas": [],
   "figures": [
    "VMA vs CA volume curve with horizontal shift arrow"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "VMA curve",
    "horizontal shift",
    "CA ratio",
    "coarse fraction"
   ],
   "related_ids": [
    "heur-vma-curve-shifts"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "97"
   },
   "verified": true,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-098",
   "type": "slide",
   "day": 1,
   "slide_number": 98,
   "slide_title": "VMA vs. CA Volume - Vertical Shift (Principles #3 and #4)",
   "slide_content": "Shifting the curve VERTICALLY (same CA volume for each blend) is primarily a function of the FINE fraction characteristics that affect aggregate packing (gradation, shape, texture and strength) - Principles #3 and #4. 'FINE fraction - LESS Compactable' raises the curve; 'FINE fraction - MORE Compactable' lowers it.",
   "instructor_notes": "The curve can also be shifted vertically, to a lesser degree, by the characteristics of the coarse fraction. The lesser degree is why the CA ratio requires a larger change to alter VMA by 1% than either FA ratio. Think of three different sets of combined blends, all with the same CA volume at each point on the curve, but each with a unique fine fraction: the bottom curve might use only natural sand (compacts easily), the middle a 50/50 volume blend of natural and manufactured sand, and the top only manufactured sand.",
   "key_callouts": [
    "Vertical shift of the VMA curve = fine fraction characteristics (Principles #3 and #4)"
   ],
   "formulas": [],
   "figures": [
    "VMA vs CA volume with three parallel curves (natural sand, 50/50, manufactured sand)"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "VMA curve",
    "vertical shift",
    "fine fraction",
    "natural sand",
    "manufactured sand"
   ],
   "related_ids": [
    "heur-vma-curve-shifts"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "98"
   },
   "verified": true,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-099",
   "type": "slide",
   "day": 1,
   "slide_number": 99,
   "slide_title": "VMA vs. CA Volume - Sensitivity of Vertical vs Horizontal Shifts",
   "slide_content": "The overall curve is more susceptible to a VERTICAL shift than horizontal: only slight alterations in the fine fraction alter VMA, versus a much larger alteration in the coarse fraction for the same effect. The combined blend is more sensitive to changes in the FA ratios than the CA ratio. Left side of the curve is flatter; right side steeper; SMA steepest.",
   "instructor_notes": "The left side of the curve is flatter because the fine fraction has less voids overall from being continuously-graded (vs an 'open-graded' coarse fraction) and is less sensitive to a CA volume change, since the CA is spread apart and floating in the fine fraction. With Fine-graded mixes this relates to the rule-of-thumb that it takes a 6% change in the ORIGINAL PCS to alter VMA by 1%. The right side is steeper - increased sensitivity to a change in CA volume (Coarse-graded). Extending further up and right (SMA), the line continues to get steeper - an SMA is even more sensitive to a change in CA volume, which is why we use a 2% change in the PCS of an SMA (instead of 4% for Coarse-graded) to alter VMA by 1%.",
   "key_callouts": [
    "The combined blend is more sensitive to the FA ratios than the CA ratio",
    "Curve slope steepens Fine-graded -> Coarse-graded -> SMA"
   ],
   "formulas": [],
   "figures": [
    "VMA vs CA volume with vertical and horizontal shift arrows"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "VMA curve",
    "sensitivity",
    "FA ratios",
    "slope"
   ],
   "related_ids": [
    "heur-mix-sensitivity-order",
    "heur-vma-curve-shifts"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "99"
   },
   "verified": true,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-100",
   "type": "slide",
   "day": 1,
   "slide_number": 100,
   "slide_title": "VMA vs. CA Volume - CA Degradation",
   "slide_content": "Graph shows the right side of the curve flattening with dotted lines: 'COARSE Aggregate DEGRADATION - VOLUME of FINE INCREASES - VMA COLLAPSES.'",
   "instructor_notes": "As we proceed right from the Dip, CA volume and CA interlock increase - the coarse fraction receives more compaction energy (in the mold and under rollers) and the fine fraction less. One characteristic that can cause the right side of the curve to flatten is degradation (breakdown) of the coarse fraction. This is why strength is an important characteristic for CA's, especially those used in mixes with CA interlock. When degradation occurs in a Coarse-graded or SMA mix, the volume of coarse decreases, the volume of fine increases, and consequently VMA collapses. CA's susceptible to degradation may make VMA difficult to achieve in a Coarse-graded mix or especially an SMA - however, from a VMA standpoint they may be useable in a Fine-graded mix, where the fine fraction carries most of the load.",
   "key_callouts": [
    "CA degradation: coarse volume down, fine volume up, VMA collapses",
    "Degradation-susceptible CA's may still work in Fine-graded mixes"
   ],
   "formulas": [],
   "figures": [
    "VMA vs CA volume with flattened right side (degradation)"
   ],
   "mix_types": [
    "coarse-graded",
    "sma",
    "fine-graded"
   ],
   "tags": [
    "degradation",
    "CA strength",
    "VMA collapse"
   ],
   "related_ids": [
    "heur-ca-strength-interlock",
    "heur-sma-keep-ca-ratio-low"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "100"
   },
   "verified": true,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-101",
   "type": "slide",
   "day": 1,
   "slide_number": 101,
   "slide_title": "VMA vs. CA Volume - Why High CA Volume Is Discouraged (Coarse-Graded)",
   "slide_content": "Comparison: Increased CA Volume & MORE compactable Fine fraction vs Decreased CA Volume & LESS compactable Fine fraction - both hit the same VMA. The higher-CA-volume blend is 'Harder Field Compaction'; the lower one 'Easier Field Compaction'. The difference between the two Coarse-graded blends is only 3-4% passing the PCS.",
   "instructor_notes": "This slide shows why we discourage a high CA volume in a Coarse-graded mix. Blends with CA volumes <= 100% CA LUW require compactive effort to be applied ONLY to the fine fraction. Blends with CA volumes > 100% CA LUW require compactive effort applied to BOTH fractions. As CA volume increases above 100% CA LUW, compactability of the coarse fraction decreases and compaction of the fine fraction decreases - VMA increases, but overall compactability decreases. The right blend is more difficult to compact in the field because it is further into CA interlock. If utilizing a less compactable fine fraction is possible (e.g., less natural sand, more manufactured sand), we can use a CA volume closer to 100% CA LUW and achieve a mix with the SAME VMA that is MORE compactable in the FIELD. Changing the CA CUW 10% for any mix type generally changes the percent passing the PCS 4-5%.",
   "key_callouts": [
    "Same VMA can be achieved at lower CA volume with a less compactable fine fraction - and it compacts better in the field",
    "> 100% CA LUW: compactive effort must go to BOTH fractions"
   ],
   "formulas": [],
   "figures": [
    "VMA vs CA volume with two equal-VMA Coarse-graded blends compared"
   ],
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "CA volume",
    "field compaction",
    "trade-off"
   ],
   "related_ids": [
    "heur-cg-prefer-lower-cuw",
    "heur-cuw-10pct-pcs-shift"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "101"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-102",
   "type": "slide",
   "day": 1,
   "slide_number": 102,
   "slide_title": "VMA vs. CA Volume - Fine-Graded Compactability Trade-off",
   "slide_content": "Comparison for Fine-graded mixes: Decreased CA Volume & MORE compactable Fine fraction vs Increased CA Volume & LESS compactable Fine fraction - same VMA. The lower-CA-volume blend is 'Harder Field Compaction'; the higher one 'Easier Field Compaction'. The difference between the two Fine-graded blends is only 5-6% passing the Original PCS.",
   "instructor_notes": "Compactability of Fine-graded mixes also relates to the volume of CA, but in REVERSE of Coarse-graded mixes. As the CA volume decreases below 90% CA LUW, compactability of the overall combined blend decreases - generally. To maintain the same VMA when shifting from the left blend to the right blend, we have to make the overall fine fraction LESS compactable. Remember with Fine-graded mixes, as we increase the volume of the coarse fraction (i.e., plus Original PCS), VMA decreases. The left blend is more difficult to compact in the field because there are more particles to orient. Changing the CA CUW 10% for any mix type generally changes the percent passing the PCS 4-5%.",
   "key_callouts": [
    "Fine-graded: compactability decreases as CA volume drops below ~90% CA LUW (reverse of Coarse-graded)"
   ],
   "formulas": [],
   "figures": [
    "VMA vs CA volume with two equal-VMA Fine-graded blends compared"
   ],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "CA volume",
    "field compaction",
    "trade-off"
   ],
   "related_ids": [
    "heur-fg-decrease-cuw-increase-vma",
    "heur-cuw-10pct-pcs-shift"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "102"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-103",
   "type": "slide",
   "day": 1,
   "slide_number": 103,
   "slide_title": "Aggregate Packing - Factors Behind the Curve",
   "slide_content": "The shape and vertical location of the VMA vs CA Volume curve depend on the aggregate packing achieved, a function of: Gradation; Type and Amount of Compactive Effort; Shape; Texture; Strength.",
   "instructor_notes": "CA degradation causing VMA collapse is the strength issue for the CA, but EACH factor that influences aggregate packing plays a role. Assuming the same type and amount of compactive effort, the same shape, the same texture and the same strength, the far right side of the curve will ALWAYS have higher VMA than the far left side. Moving up the right side there are fewer and fewer particles to fill the voids in the CA. On the left side, the material passing the PCS (i.e., FA) contains coarse AND fine fractions, because fine aggregates are generally more continuously-graded than coarse aggregates.",
   "key_callouts": [
    "Aggregate packing = f(gradation, compactive effort, shape, texture, strength)",
    "Far right of the curve always has higher VMA than far left (all else equal)"
   ],
   "formulas": [],
   "figures": [
    "VMA vs CA volume curve with packing factor arrows"
   ],
   "mix_types": [
    "all"
   ],
   "tags": [
    "aggregate packing",
    "shape",
    "texture",
    "strength",
    "compactive effort"
   ],
   "related_ids": [
    "heur-principles-direction-only"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "103"
   },
   "verified": true,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-104",
   "type": "slide",
   "day": 1,
   "slide_number": 104,
   "slide_title": "Minus PCS Material - The FA Ratio Dips by Mix Type (Tab 3 marker)",
   "slide_content": "The material passing the PCS contains a coarse fraction that creates voids and a fine fraction that fills them - so like the overall blend, there is a 'Dip' where coarse and fine pack tightest. X-axis represents Principles #3 and #4 (FAc ratio, from 0.700 less CA to 0.350 more CA). Callout: void SIZE for this 'blend' is MUCH LESS than the void SIZE of the overall blend. FAc Dips: New FAc of Fine-graded mixes ~0.50; FAc of Coarse-graded mixes ~0.55; FAc of SMA mixes ~0.65. FAf Dips: New FAf of Fine-graded ~0.50; FAf of Coarse-graded ~0.55; FAf of SMA ~0.70.",
   "instructor_notes": "A 'curve' exists in the overall fine fraction (FAc) AND in the fine part of the fine fraction (FAf). As the volume of coarse increases (moving right from the Dip), VMA increases; as the volume of fine exceeds the coarse voids (moving left from the Dip), VMA increases. Shifting the curve vertically would require a change in the fine fraction (FAf or New FAf) - increasing or decreasing the compactability of this portion - which ALSO influences the stiffness of the AC film. For dense-graded mixes it is UNUSUAL to have an FAf ratio above 0.55 and generally NOT advisable from an AC film thickness point-of-view. For SMA mixes it is not unusual to have an FAf ratio above 0.70, but be careful not to over-stiffen the mortar. But WHY does the Dip for the FA ratios of the different mix types occur at different values than the overall combined blend? (Tab 3 explores this.)",
   "key_callouts": [
    "FAc dips: FG ~0.50, CG ~0.55, SMA ~0.65",
    "FAf dips: FG ~0.50, CG ~0.55, SMA ~0.70",
    "Dense-graded FAf > 0.55 is unusual and generally not advisable (AC film thickness)"
   ],
   "formulas": [],
   "figures": [
    "Minus-PCS packing curve vs FAc ratio"
   ],
   "mix_types": [
    "fine-graded",
    "coarse-graded",
    "sma"
   ],
   "tags": [
    "FA dips",
    "minus PCS",
    "AC film",
    "Tab 3"
   ],
   "related_ids": [
    "ref-fa-dip-by-mixtype",
    "heur-faf-055-ac-film"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "03",
    "pages": "104"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-105",
   "type": "slide",
   "day": 1,
   "slide_number": 105,
   "slide_title": "Combined Blend Gradation - Fine-Graded on the 0.45 Power Chart",
   "slide_content": "0.45 power chart of a Fine-graded combined blend. Sieves A-K with % passing: A 100, B 98, C 85, D 72, E 58, F 40, G 32, H 21, I 12, J 7, K 4.4. Fine/Coarse break marked at the Original PCS; numbered callouts 1-4 walk down the gradation. Fine-graded label.",
   "instructor_notes": "Looking back at the 0.45 power chart for Fine-graded mixes: we still break the combined blend into coarse and fine fractions, but with a Fine-graded blend the fine fraction is in CONTROL of the overall aggregate structure - so we treat the overall fine fraction as the 'primary blend'. This is where things get somewhat complex: if this 'primary blend' (material passing the Original PCS) is Coarse-graded, a Fine-graded mix can 'ACT' like a Coarse-graded mix in regards to volumetric properties achieved relative to gradation change AND in regards to FIELD compactability. We still DEFINE the mix as Fine-graded because the volume of the overall fine fraction passing the Original PCS still EXCEEDS the volume of voids in the coarse fraction. This is important: the overall fine fraction is in control and its characteristics are more important than in a true Coarse-graded blend.",
   "key_callouts": [
    "A Fine-graded mix whose primary blend is Coarse-graded can ACT like a Coarse-graded mix",
    "Mix type definition stays Fine-graded as long as fine volume exceeds coarse-fraction voids"
   ],
   "formulas": [],
   "figures": [
    "0.45 power chart with generic sieve letters A-K"
   ],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "0.45 power chart",
    "primary blend",
    "acts coarse-graded"
   ],
   "related_ids": [
    "day1-slide-106",
    "day1-slide-107",
    "heur-mix-type-definition"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "105"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-106",
   "type": "slide",
   "day": 1,
   "slide_number": 106,
   "slide_title": "Minus Original PCS Material - Fine-Graded Mixes (OLD FAc)",
   "slide_content": "VMA vs 'OLD' FAc Ratio (x-axis 0.600 less CA to 0.300 more CA; dip near 0.450). In a Fine-graded mix the material ABOVE the Original PCS is floating in the overall fine fraction. Key callout: If the overall fine fraction is 'Coarse-graded', when the FINE-graded mix gets COARSER (% passing the Original PCS), VMA INCREASES! A 'Coarse-graded' overall fine fraction typically coincides with an OLD FAc ratio < 0.450.",
   "instructor_notes": "If the 'void' between the floating particles is reduced in size and the material filling it is Coarse-graded, there is less opportunity to orient the overall fine fraction. From a gradation standpoint, reducing the size of the voids between the floating CA particles can occur by making the mix coarser, or by making the coarse fraction smaller overall, which occurs when the OLD CA ratio increases. Later we discuss how to estimate/predict the change expected in VMA due to changes in the four principles.",
   "key_callouts": [
    "Coarse-graded overall fine fraction typically = OLD FAc < 0.450",
    "If the fine fraction is coarse-graded, coarsening a FINE-graded mix INCREASES VMA"
   ],
   "formulas": [],
   "figures": [
    "VMA vs OLD FAc ratio curve"
   ],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "OLD FAc",
    "0.450",
    "VMA direction reversal"
   ],
   "related_ids": [
    "heur-fg-old-fac-0450",
    "day1-slide-107"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "106"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-107",
   "type": "slide",
   "day": 1,
   "slide_number": 107,
   "slide_title": "Indicators that a Fine-graded Mix May 'ACT' as a Coarse-graded Mix",
   "slide_content": "Potential indicators: 1. Incorrect NMAS. 2. CA CUW > 80% CA LUW. 3. OLD CA ratio > 1.5 x Range Max. 4. OLD FAc ratio < 0.450. 5. Adjusted CA CUW (to get Volume of FA to 'match' the VCAmix achieved) greater than 90% CA LUW. (Also see next slide.)",
   "instructor_notes": "Indicators that a FINE-graded mix may 'ACT' as a COARSE-graded mix in regards to volumetric properties relative to gradation change AND field compactability. 1 - Although using 15% better defines the NMAS, mixes just on the other side of the line (e.g., 83% passing the sieve below the NMAS) are likely to 'ACT' as the smaller NMAS; this occurs primarily with mixes that 'appear' to be 19.0 mm (3/4\") NMAS but 'ACT' as 12.5 mm (1/2\"). 2 - If the CA CUW is > 80% CA LUW, the coarse fraction MAY approach particle-to-particle contact if the fine fraction compacts considerably denser than the FA RUW, with AC as a lubricant, for the given type and amount of lab compaction. 3 - If the OLD CA ratio gets too high (> 1.5 x Range Max), the interceptors begin to control the void size in the overall coarse fraction; at some point the NMAS changes to the next smaller size. 4 - If the OLD FAc ratio is < 0.450, typically the overall FINE fraction is COARSE-graded, and the overall mix may 'ACT' COARSE-graded because the overall FINE fraction is in control. Be careful producing mix with values ranging across this 'Dip', especially if there is a difference in shape, texture and/or strength of the coarse vs fine portions of the FINE fraction. A FINE-graded mix with an OLD FAc ratio near 0.450 that varies above and below this value during production can result in an overall FINE fraction that varies from being COARSE-graded to FINE-graded!",
   "key_callouts": [
    "OLD FAc near 0.450 varying in production = fine fraction flip-flops between CG and FG",
    "83% passing the sieve below the NMAS: mix likely ACTS as the smaller NMAS"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "indicators",
    "acts coarse-graded",
    "NMAS",
    "OLD CA ratio",
    "OLD FAc",
    "VCAmix"
   ],
   "related_ids": [
    "ref-fg-acting-cg-indicators",
    "day1-slide-108"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "107"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-108",
   "type": "slide",
   "day": 1,
   "slide_number": 108,
   "slide_title": "Indicators that a Fine-graded Mix May 'ACT' as a Coarse-graded Mix (Continued - VCAmix Check)",
   "slide_content": "Same five indicators repeated (see previous slide & slide 112). Focus on indicator 5: Adjusted CA CUW (to get Volume of FA to 'match' the VCAmix achieved) greater than 90% CA LUW.",
   "instructor_notes": "5 - After determining the VCAmix, the first step is to compare it to the Volume of FA (volume of voids in the CA at the corresponding CA CUW and CA volume blend). For an indication that a FINE-graded mix should be compactable in the field, the VCAmix should be 3-5% LESS than the Volume of FA. The second step (especially for FINE-graded mixes) is to determine the FA Volume (and corresponding CA CUW) achieved in the lab compacted specimens, which requires the designer to adjust the CA CUW to match the Volume of FA to the VCAmix achieved. For VIRGIN mixes (not recycle!), the VCAmix result calculated WILL CHANGE when the CA CUW is changed - so be sure you know the 'correct' VCAmix value BEFORE you start adjusting the CA CUW to get the Volume of FA to match! For FINE-graded mixes designed above 80% CA LUW AND with a very compactable overall fine fraction, the VCAmix achieved often results in a mix that is into or very near CA interlock. LUW's and RUW's are performed on the 'as is' stockpile gradation (no sieving required). However, the 'FA' that a CA contains can alter the UW results significantly if there is an unusually large amount of material passing the PCS of that stockpile - the resulting LUW and RUW voids appear considerably LOW. FA's containing an unusually large amount retained on the PCS can have 'altered' UW's as well. In either case, for the final blend chosen, the designer should consider combining the plus-PCS material and running UW's on the combined 'coarse' fraction, and combining the minus-PCS material and determining UW's for the combined 'fine' fraction. Then each 'fraction' is entered - one as a CA and one as an FA - with its gradation and Gsb in the VBS sheet, to determine the same combined blend gradation and the resulting volumes of CA and FA, to better define the mix as Fine-graded or Coarse-graded. When in doubt (in the design phase), run an extra trial (coarser or finer passing the PCS) to see if the VMA change reflects a Fine-graded or Coarse-graded mix - make a large enough change in the PCS (4-6%?) to ensure VMA change. Also be sure to keep the 'OLD' FAc ratio on the same side of the 'DIP', so the overall fine fraction remains COARSE-graded or FINE-graded for the extra trial.",
   "key_callouts": [
    "FG field-compactability indication: VCAmix should be 3-5% below the Volume of FA",
    "Know the correct VCAmix BEFORE adjusting the CA CUW (virgin mixes: VCAmix changes with CUW)",
    "When in doubt, run an extra trial with a 4-6% PCS change, keeping OLD FAc on the same side of the Dip"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "VCAmix",
    "volume of FA",
    "adjusted CUW",
    "extra trial",
    "combined fraction UWs"
   ],
   "related_ids": [
    "heur-vcamix-3-5-below-fa-volume",
    "heur-uw-combined-fractions-check",
    "heur-when-in-doubt-extra-trial",
    "note-slide108-adjusted-cuw-calc",
    "note-slide108-fac-dip-range",
    "note-slide108-vcamix-tracking"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "108"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-109",
   "type": "slide",
   "day": 1,
   "slide_number": 109,
   "slide_title": "Blend Calculations - Volume Blending Spreadsheets (VBS)",
   "slide_content": "Inputs needed in addition to normal aggregate information: Unit Weights for each VIRGIN CA or FA (kg/m3 or lb/ft3; EXCLUDING MF, BHF's, RAP & RAS). CA Chosen Unit Weight: dense-graded mixes (% LUW), SMA mixes (% RUW) - dictates VOLUME of CA, resulting VOLUME of FA and % PCS (Principle 1). FA Unit Weight: dense-graded mixes (100.0% RUW), SMA mixes (100.0% LUW). Volume blend of CA's (total = 100.0%) - CA Ratio (Principle 2). Volume blend of FA's (total = 100.0%) - FAc Ratio (Principle 3). % 0.075 mm (#200) desired in blend - FAf Ratio (Principle 4). Metric/English conversion factor (kg/m3 or lb/ft3).",
   "instructor_notes": "The Heritage Research Group Excel spreadsheets for calculating combined blends by mix type are the Volume Blending Spreadsheets (VBS). In addition to the average gradation and dry bulk specific gravity (Gsb) for each stockpile (including MF or BHF's if used), enter: unit weights for each VIRGIN CA or FA (excluding MF, BHF's and hydrated lime); CA CUW (% CA Loose UW for dense-graded or % CA Rodded UW for SMA); desired blend by VOLUME of the virgin CA's (total 100.0%); desired blend by VOLUME of the virgin FA's (total 100.0%); desired % minus 0.075 mm (#200) for the combined blend - for this calculation to work there MUST be a gradation and Gsb entered for MF or BHF's as an individual aggregate in the 'MF' column (column K); if not targeting a specific % minus 0.075, adjust that cell to produce the target amount of MF or BHF's; and the conversion factor for metric or English (1000 kg/m3 or 62.4 lb/ft3). The FA UW is SET in the spreadsheets to reference 100.0% FA Rodded UW for dense-graded or 100.0% FA Loose UW for SMA. For each typical NMAS there is a VBS for dense-graded mixes (with or without recycle) and a VBS for SMA mixes (with or without recycle).",
   "key_callouts": [
    "VBS inputs map one-to-one to the four principles",
    "MF/BHF gradation and Gsb must be in the MF column (column K) for the %-200 calculation to work"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "all"
   ],
   "tags": [
    "VBS",
    "volume blending spreadsheet",
    "inputs",
    "HRG"
   ],
   "related_ids": [
    "walk-vbs-required-inputs",
    "ref-cuw-starting-points",
    "ref-fa-uw-rules-of-thumb"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "109"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "ref-fg-blend-eval-sieves",
   "type": "reference_table",
   "title": "Combined Blend Evaluation Table - New Sieves by NMAS (Fine-Graded Mixes)",
   "table_kind": "control_sieves",
   "applies_to": {
    "mix_types": [
     "fine-graded"
    ],
    "nmas": "all"
   },
   "columns": [
    "nmas_mm",
    "nmas_english",
    "original_pcs_mm",
    "new_half_sieve_mm",
    "new_pcs_mm",
    "new_scs_mm",
    "new_tcs_mm"
   ],
   "rows": [
    {
     "nmas_mm": 37.5,
     "nmas_english": "1-1/2\"",
     "original_pcs_mm": 9.5,
     "new_half_sieve_mm": 4.75,
     "new_pcs_mm": 2.36,
     "new_scs_mm": 0.6,
     "new_tcs_mm": 0.15
    },
    {
     "nmas_mm": 25.0,
     "nmas_english": "1\"",
     "original_pcs_mm": 4.75,
     "new_half_sieve_mm": 2.36,
     "new_pcs_mm": 1.18,
     "new_scs_mm": 0.3,
     "new_tcs_mm": 0.075
    },
    {
     "nmas_mm": 19.0,
     "nmas_english": "3/4\"",
     "original_pcs_mm": 4.75,
     "new_half_sieve_mm": 2.36,
     "new_pcs_mm": 1.18,
     "new_scs_mm": 0.3,
     "new_tcs_mm": 0.075
    },
    {
     "nmas_mm": 12.5,
     "nmas_english": "1/2\"",
     "original_pcs_mm": 2.36,
     "new_half_sieve_mm": 1.18,
     "new_pcs_mm": 0.6,
     "new_scs_mm": 0.15,
     "new_tcs_mm": null
    },
    {
     "nmas_mm": 9.5,
     "nmas_english": "3/8\"",
     "original_pcs_mm": 2.36,
     "new_half_sieve_mm": 1.18,
     "new_pcs_mm": 0.6,
     "new_scs_mm": 0.15,
     "new_tcs_mm": null
    },
    {
     "nmas_mm": 4.75,
     "nmas_english": "#4",
     "original_pcs_mm": 1.18,
     "new_half_sieve_mm": 0.6,
     "new_pcs_mm": 0.3,
     "new_scs_mm": 0.075,
     "new_tcs_mm": null
    }
   ],
   "footnotes": [
    "New NMAS = Original PCS (BE SURE TO VERIFY by re-percentaging the blend passing the Original PCS as 100%).",
    "New CA Ratio = (%New Half - %New PCS) / (%Original PCS - %New Half); New FAc = %New SCS / %New PCS; New FAf = %New TCS / %New SCS.",
    "For 12.5, 9.5 and 4.75 mm NMAS mixes, no New TCS exists - only the New CA and New FAc ratios can be determined.",
    "Sieves shown refer to the % passing for the blend below the Original PCS."
   ],
   "tags": [
    "fine-graded",
    "new sieves",
    "control sieves",
    "NMAS"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "92-93"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-fg",
    "heur-fg-no-new-faf-small-nmas"
   ],
   "chunk": "1_4"
  },
  {
   "id": "ref-ratio-ranges-fg",
   "type": "reference_table",
   "title": "Ratio Ranges Summary - Fine-Graded Mixes (OLD CA with 1.5x Max, New CA, New FAc, New FAf)",
   "table_kind": "recommended_ranges",
   "applies_to": {
    "mix_types": [
     "fine-graded"
    ],
    "nmas": "all"
   },
   "columns": [
    "ratio",
    "nmas_mm",
    "range",
    "max_1_5x"
   ],
   "rows": [
    {
     "ratio": "OLD CA",
     "nmas_mm": 37.5,
     "range": [
      0.8,
      0.95
     ],
     "max_1_5x": 1.425
    },
    {
     "ratio": "OLD CA",
     "nmas_mm": 25.0,
     "range": [
      0.7,
      0.85
     ],
     "max_1_5x": 1.275
    },
    {
     "ratio": "OLD CA",
     "nmas_mm": 19.0,
     "range": [
      0.6,
      0.75
     ],
     "max_1_5x": 1.125
    },
    {
     "ratio": "OLD CA",
     "nmas_mm": 12.5,
     "range": [
      0.5,
      0.65
     ],
     "max_1_5x": 0.975
    },
    {
     "ratio": "OLD CA",
     "nmas_mm": 9.5,
     "range": [
      0.4,
      0.55
     ],
     "max_1_5x": 0.825
    },
    {
     "ratio": "OLD CA",
     "nmas_mm": 4.75,
     "range": [
      0.3,
      0.45
     ],
     "max_1_5x": 0.675
    },
    {
     "ratio": "New CA",
     "nmas_mm": "all",
     "range": [
      0.6,
      1.0
     ],
     "max_1_5x": null
    },
    {
     "ratio": "New FAc",
     "nmas_mm": "all",
     "range": [
      0.35,
      0.5
     ],
     "max_1_5x": null
    },
    {
     "ratio": "New FAf",
     "nmas_mm": "all",
     "range": [
      0.35,
      0.5
     ],
     "max_1_5x": null
    }
   ],
   "footnotes": [
    "OLD CA ratio relates to segregation susceptibility for Fine-graded mixes; rule-of-thumb: do NOT exceed 1.5 x the corresponding MAX OLD CA ratio value.",
    "New CA ratio is more variable in Fine-graded mixes, therefore the range is wider (0.6-1.0) and not NMAS-dependent.",
    "New FAc and New FAf: avoid values < 0.40; for 12.5, 9.5 and 4.75 mm mixes only New CA and New FAc can be determined.",
    "Ranges are a STARTING point - review acceptable existing mixes; calculate New ratios on the New sieves.",
    "See Summary Sheets handout inside front cover of manual."
   ],
   "tags": [
    "fine-graded",
    "ratio ranges",
    "OLD CA",
    "1.5x rule"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "94"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-fg",
    "ex-starting-points-vs-gyrations"
   ],
   "chunk": "1_4"
  },
  {
   "id": "ref-vma-sensitivity-fg",
   "type": "reference_table",
   "title": "VMA Sensitivity Rules-of-Thumb - Fine-Graded Mixes (~1% VMA Change)",
   "table_kind": "sensitivity_factors",
   "applies_to": {
    "mix_types": [
     "fine-graded"
    ],
    "nmas": "all"
   },
   "columns": [
    "principle",
    "parameter",
    "direction",
    "change_for_1pct_vma",
    "range",
    "note"
   ],
   "rows": [
    {
     "principle": 1,
     "parameter": "CA CUW (% passing ORIGINAL PCS)",
     "direction": "CA CUW decrease = VMA increase",
     "change_for_1pct_vma": "6% change in ORIGINAL PCS",
     "range": "5-7%",
     "note": "Direction is REVERSED vs Coarse-graded/SMA"
    },
    {
     "principle": 2,
     "parameter": "New CA Ratio",
     "direction": "increase = VMA increase",
     "change_for_1pct_vma": 0.35,
     "range": [
      0.25,
      0.45
     ],
     "note": "Less sensitive; range less NMAS-dependent"
    },
    {
     "principle": 3,
     "parameter": "New FAc Ratio",
     "direction": "increase = VMA decrease",
     "change_for_1pct_vma": 0.05,
     "range": [
      0.025,
      0.075
     ],
     "note": "Has the MOST influence on VMA"
    },
    {
     "principle": 4,
     "parameter": "New FAf Ratio",
     "direction": "increase = VMA decrease",
     "change_for_1pct_vma": 0.05,
     "range": [
      0.025,
      0.075
     ],
     "note": null
    }
   ],
   "footnotes": [
    "The 'OLD' CA ratio (entire combined blend) still relates to segregation susceptibility of the overall mix.",
    "New FAc/New FAf dip generally occurs 0.40-0.60; above ~0.50, VMA begins to increase as the ratio increases.",
    "VMA is also affected by individual aggregate shape, texture and strength; the dependable output is the DIRECTION of change."
   ],
   "tags": [
    "fine-graded",
    "VMA sensitivity",
    "rules of thumb"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "91"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-fg",
    "ex-estimate-vma-voids-fg-95mm",
    "walk-est-fg-95mm-orig-opt"
   ],
   "chunk": "1_4"
  },
  {
   "id": "ref-fa-dip-by-mixtype",
   "type": "reference_table",
   "title": "FA Ratio 'Dip' (Maximum Packing) Values by Mix Type",
   "table_kind": "sensitivity_factors",
   "applies_to": {
    "mix_types": [
     "fine-graded",
     "coarse-graded",
     "sma"
    ],
    "nmas": "all"
   },
   "columns": [
    "ratio",
    "mix_type",
    "dip_approx"
   ],
   "rows": [
    {
     "ratio": "FAc (New)",
     "mix_type": "fine-graded",
     "dip_approx": 0.5
    },
    {
     "ratio": "FAc",
     "mix_type": "coarse-graded",
     "dip_approx": 0.55
    },
    {
     "ratio": "FAc",
     "mix_type": "sma",
     "dip_approx": 0.65
    },
    {
     "ratio": "FAf (New)",
     "mix_type": "fine-graded",
     "dip_approx": 0.5
    },
    {
     "ratio": "FAf",
     "mix_type": "coarse-graded",
     "dip_approx": 0.55
    },
    {
     "ratio": "FAf",
     "mix_type": "sma",
     "dip_approx": 0.7
    }
   ],
   "footnotes": [
    "The Dip is the point of maximum packing of the minus-PCS (or minus-SCS) blend; moving either direction from it increases VMA.",
    "Void size for the minus-PCS 'blend' is MUCH LESS than the void size of the overall blend.",
    "Dense-graded mixes: FAf above 0.55 is unusual and generally NOT advisable from an AC film thickness point-of-view.",
    "SMA: FAf above 0.70 is not unusual, but be careful not to over-stiffen the mortar."
   ],
   "tags": [
    "FA dips",
    "maximum packing",
    "mix types",
    "Tab 3"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "03",
    "pages": "104"
   },
   "verified": true,
   "corroborated_by": [
    "ex-overall-blend-dip-19mm",
    "ref-cheatsheet-cg",
    "ref-cheatsheet-fg",
    "ref-cheatsheet-sma",
    "ref-field-factor-adjust-limits"
   ],
   "chunk": "1_4"
  },
  {
   "id": "ref-fg-acting-cg-indicators",
   "type": "reference_table",
   "title": "Indicators That a Fine-graded Mix May 'ACT' as a Coarse-graded Mix",
   "table_kind": "indicator_checklist",
   "applies_to": {
    "mix_types": [
     "fine-graded"
    ],
    "nmas": "all"
   },
   "columns": [
    "indicator_number",
    "indicator",
    "explanation"
   ],
   "rows": [
    {
     "indicator_number": 1,
     "indicator": "Incorrect NMAS",
     "explanation": "Mixes just on the other side of the 15% retained line (e.g., 83% passing the sieve below the NMAS) are likely to ACT as the smaller NMAS - primarily 19.0 mm mixes acting as 12.5 mm."
    },
    {
     "indicator_number": 2,
     "indicator": "CA CUW > 80% CA LUW",
     "explanation": "The coarse fraction MAY approach particle-to-particle contact if the fine fraction compacts considerably denser than the FA RUW (AC as lubricant, given lab compaction type/amount)."
    },
    {
     "indicator_number": 3,
     "indicator": "OLD CA ratio > 1.5 x Range Max",
     "explanation": "Interceptors begin to control the void size in the overall coarse fraction; at some point the NMAS drops to the next smaller size."
    },
    {
     "indicator_number": 4,
     "indicator": "OLD FAc ratio < 0.450",
     "explanation": "The overall FINE fraction is typically COARSE-graded and in control, so the overall mix may ACT Coarse-graded. Careful with production values ranging across this Dip."
    },
    {
     "indicator_number": 5,
     "indicator": "Adjusted CA CUW > 90% CA LUW",
     "explanation": "When the CA CUW is adjusted so the Volume of FA matches the VCAmix achieved and the result exceeds 90% CA LUW, the compacted mix is into or near CA interlock."
    }
   ],
   "footnotes": [
    "'ACT' refers to volumetric behavior relative to gradation change AND field compactability.",
    "A FINE-graded mix with OLD FAc near 0.450 varying above/below during production flips the fine fraction between COARSE-graded and FINE-graded."
   ],
   "tags": [
    "fine-graded",
    "acts coarse-graded",
    "indicators",
    "checklist"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "107-108"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "walk-vbs-required-inputs",
   "type": "tool_walkthrough",
   "title": "VBS (Volume Blending Spreadsheet) - Required Inputs",
   "tool": "vbs_dense_graded",
   "scenario": "Setting up any HRG Volume Blending Spreadsheet (dense-graded or SMA, with or without recycle) for a combined blend calculation.",
   "steps": [
    {
     "step_number": 1,
     "instruction": "Enter average gradation and dry bulk specific gravity (Gsb) for each stockpile, including MF or BHF's if used.",
     "cell_refs": [],
     "values": null
    },
    {
     "step_number": 2,
     "instruction": "Enter unit weights (kg/m3 or lb/ft3) for each VIRGIN CA and FA - excluding MF, BHF's, RAP, RAS and hydrated lime.",
     "cell_refs": [],
     "values": null
    },
    {
     "step_number": 3,
     "instruction": "Enter the CA Chosen Unit Weight: % CA Loose UW for dense-graded mixes, % CA Rodded UW for SMA. This dictates the VOLUME of CA, resulting VOLUME of FA and % passing PCS (Principle 1).",
     "cell_refs": [],
     "values": null
    },
    {
     "step_number": 4,
     "instruction": "FA UW is SET by the spreadsheet: 100.0% FA Rodded UW (dense-graded) or 100.0% FA Loose UW (SMA). Do not choose it.",
     "cell_refs": [],
     "values": null
    },
    {
     "step_number": 5,
     "instruction": "Enter the desired blend by VOLUME of the virgin CA's (total = 100.0%) - drives the CA Ratio (Principle 2).",
     "cell_refs": [],
     "values": null
    },
    {
     "step_number": 6,
     "instruction": "Enter the desired blend by VOLUME of the virgin FA's (total = 100.0%) - drives the FAc Ratio (Principle 3).",
     "cell_refs": [],
     "values": null
    },
    {
     "step_number": 7,
     "instruction": "Enter the desired % minus 0.075 mm (#200) for the combined blend - drives the FAf Ratio (Principle 4). A gradation AND Gsb MUST be entered for MF or BHF's as an individual aggregate in the 'MF' column (column K) for this calculation to work. If targeting a specific amount of MF/BHF rather than a %-200, adjust this cell accordingly.",
     "cell_refs": [
      "column K"
     ],
     "values": null
    },
    {
     "step_number": 8,
     "instruction": "Enter the metric/English conversion factor matching the unit weights entered: 1000 kg/m3 or 62.4 lb/ft3.",
     "cell_refs": [],
     "values": {
      "metric": 1000,
      "english": 62.4
     }
    }
   ],
   "lessons": [
    "The VBS inputs map one-to-one to the four Bailey principles.",
    "MF/BHF gradation and Gsb must live in the MF column (column K) or the %-200 targeting breaks.",
    "There is a separate VBS per NMAS for dense-graded and SMA, each with and without recycle."
   ],
   "extracted_heuristic_ids": [],
   "practice_files": [],
   "tags": [
    "VBS",
    "inputs",
    "spreadsheet",
    "HRG"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "109"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "heur-fg-decrease-cuw-increase-vma",
   "type": "heuristic",
   "statement": "In a Fine-graded mix, VMA is generally increased by DECREASING the CA CUW (% CA LUW) - the reverse of Coarse-graded and SMA mixes. Compactability also decreases as CA volume drops below ~90% CA LUW.",
   "rationale": "Decreasing CA CUW removes coarse particles that float in and fill voids of the fine fraction, replacing them with multiple fine particles that have voids between them. More particles must orient under compaction.",
   "thresholds": {
    "sensitivity": "6% change in ORIGINAL PCS ~= 1% VMA (range 5-7%)"
   },
   "when_violated": null,
   "context": "Principle #1 for Fine-graded mixes.",
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "CA CUW",
    "VMA direction",
    "reverse"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "87, 91, 102"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "heur-fg-new-fac-dip",
   "type": "heuristic",
   "statement": "Fine-graded New FAc and New FAf ratios: range generally 0.35-0.50 (avoid < 0.40); above ~0.50 VMA begins to INCREASE as the ratio increases; the Dip generally occurs 0.40-0.60. The New FAc has the MOST influence on VMA of the four principles for a Fine-graded mix.",
   "rationale": "The fine fraction is the primary blend in a Fine-graded mix, so its internal packing (New FAc) dominates VMA response; the larger overall fine volume can increase sensitivity vs a Coarse-graded mix.",
   "thresholds": {
    "suggested_range": [
     0.35,
     0.5
    ],
    "avoid_below": 0.4,
    "dip_center": 0.5,
    "dip_range": [
     0.4,
     0.6
    ],
    "change_for_1pct_vma": 0.05
   },
   "when_violated": "Near the dip, the direction of VMA response flips; production variation across it makes volumetrics unstable.",
   "context": "Principles #3 and #4 for Fine-graded mixes, computed on the New sieves.",
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "New FAc",
    "New FAf",
    "dip",
    "most influence"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "91"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-fg"
   ],
   "chunk": "1_4"
  },
  {
   "id": "heur-fg-new-ca-less-sensitive",
   "type": "heuristic",
   "statement": "The Fine-graded New CA ratio is LESS sensitive than the Coarse-graded CA ratio (0.35 change ~= 1% VMA vs 0.20), and its suggested range (0.6-1.0) is wider and less dependent on the NMAS of the mix.",
   "rationale": "There is a smaller volume of 'coarse' within the fine fraction than above the Original PCS, so its size distribution has less leverage on packing.",
   "thresholds": {
    "suggested_range": [
     0.6,
     1.0
    ],
    "change_for_1pct_vma": 0.35,
    "range_for_1pct_vma": [
     0.25,
     0.45
    ]
   },
   "when_violated": null,
   "context": "Principle #2 for Fine-graded mixes, computed on the New sieves.",
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "New CA ratio",
    "sensitivity"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "91, 94"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "heur-fg-old-ca-15x-rule",
   "type": "heuristic",
   "statement": "For FINE-graded mixes, do NOT exceed 1.5 x the corresponding MAX 'OLD' CA ratio value for the NMAS (e.g., 12.5 mm max 0.65 -> limit 0.975). The OLD CA ratio still relates to segregation susceptibility of the overall mix.",
   "rationale": "Above ~1.5x the range max, the interceptors control the void size in the overall coarse fraction and at some point the NMAS drops to the next smaller size.",
   "thresholds": {
    "limit": "1.5 x OLD CA range max",
    "values_by_nmas": {
     "37.5": 1.425,
     "25.0": 1.275,
     "19.0": 1.125,
     "12.5": 0.975,
     "9.5": 0.825,
     "4.75": 0.675
    }
   },
   "when_violated": "Mix may ACT as the smaller NMAS / as Coarse-graded; segregation and field behavior change.",
   "context": "Fine-graded ratio ranges summary; also indicator #3 for FG-acting-CG.",
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "fine-graded",
    "OLD CA ratio",
    "1.5x rule",
    "segregation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "94, 107"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-fg",
    "ex-starting-points-vs-gyrations"
   ],
   "chunk": "1_4"
  },
  {
   "id": "heur-fg-old-fac-0450",
   "type": "heuristic",
   "statement": "A 'Coarse-graded' overall fine fraction typically coincides with an OLD FAc ratio < 0.450. In that case, when the FINE-graded mix gets COARSER (% passing the Original PCS decreases), VMA INCREASES - and the mix may ACT Coarse-graded. An OLD FAc near 0.450 that varies above and below during production flips the fine fraction between Coarse-graded and Fine-graded.",
   "rationale": "The overall fine fraction is in control of a Fine-graded mix; if it is itself coarse-graded, the mix responds to gradation change like a Coarse-graded mix.",
   "thresholds": {
    "old_fac_threshold": 0.45
   },
   "when_violated": "Unstable volumetrics in production; be especially careful if the coarse and fine portions of the FINE fraction differ in shape, texture and/or strength.",
   "context": "Fine-graded mixes; indicator #4 for FG-acting-CG.",
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "OLD FAc",
    "0.450",
    "acts coarse-graded",
    "production variation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "106-107"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "heur-mix-sensitivity-order",
   "type": "heuristic",
   "statement": "Sensitivity of VMA to a change in CA volume, by mix type: Fine-graded least sensitive (6% change in ORIGINAL PCS ~= 1% VMA), Coarse-graded next (4% ~= 1% VMA), SMA most sensitive (2% ~= 1% VMA).",
   "rationale": "The VMA vs CA volume curve is flatter on the fine side (CA floating in a continuously-graded fine fraction) and steepens through Coarse-graded into SMA as CA interlock increases.",
   "thresholds": {
    "fine_graded_pct": 6,
    "coarse_graded_pct": 4,
    "sma_pct": 2
   },
   "when_violated": null,
   "context": "Principle #1 sensitivity across mix types.",
   "mix_types": [
    "all"
   ],
   "tags": [
    "sensitivity order",
    "PCS change",
    "VMA",
    "mix types"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "96, 99"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "heur-ca-luw-80-95-production-bounce",
   "type": "heuristic",
   "statement": "A CA CUW > 80% but < 95% of CA LUW can cause compaction issues (e.g., tenderness) IF there is a significant difference in shape, texture and/or strength of one fraction vs the other, because a blend in this range tends to bounce back and forth between Coarse-graded and Fine-graded during production due to normal gradation variation - with little to NO change in volumetrics.",
   "rationale": "Near the dip of the VMA vs CA volume curve, small gradation swings flip which fraction controls packing without moving VMA, so lab volumetrics won't warn you.",
   "thresholds": {
    "risk_zone_pct_ca_luw": [
     80,
     95
    ]
   },
   "when_violated": "Field tenderness/compaction problems that volumetrics don't predict.",
   "context": "Dense-graded design near the 90% CA LUW dip.",
   "mix_types": [
    "fine-graded",
    "coarse-graded"
   ],
   "tags": [
    "80-95% CA LUW",
    "production bounce",
    "tenderness",
    "dip"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "96"
   },
   "verified": true,
   "corroborated_by": [
    "heur-cuw-guardrails-dense"
   ],
   "chunk": "1_4"
  },
  {
   "id": "heur-cg-cuw-above-105",
   "type": "heuristic",
   "statement": "Coarse-graded mixes designed > 105% CA LUW can be difficult to compact in the field, more sensitive than normal to gradation changes, and susceptible to degradation.",
   "rationale": "Above ~105% CA LUW the blend is deep into CA interlock: compactive effort must overcome coarse-on-coarse contact and weak interceptors break down.",
   "thresholds": {
    "limit_pct_ca_luw": 105
   },
   "when_violated": "Field density problems, volatile volumetrics, VMA collapse from degradation.",
   "context": "Upper guardrail for Coarse-graded CA CUW (range 95-105, start 100).",
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "105% CA LUW",
    "field compaction",
    "degradation",
    "guardrail"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "96"
   },
   "verified": true,
   "corroborated_by": [
    "heur-cuw-over-105-vcamix"
   ],
   "chunk": "1_4"
  },
  {
   "id": "heur-cg-prefer-lower-cuw",
   "type": "heuristic",
   "statement": "If a less compactable fine fraction is available (e.g., less natural sand, more manufactured sand), design the Coarse-graded mix at a CA volume closer to 100% CA LUW - the same VMA can be achieved with a mix that is MORE compactable in the field. The equal-VMA blends can differ by only 3-4% passing the PCS.",
   "rationale": "Blends <= 100% CA LUW need compactive effort applied only to the fine fraction; blends above need it applied to both fractions.",
   "thresholds": {
    "target_pct_ca_luw": 100
   },
   "when_violated": "Harder field compaction for no volumetric benefit.",
   "context": "Coarse-graded design trade-off between CA volume and fine fraction compactability.",
   "mix_types": [
    "coarse-graded"
   ],
   "tags": [
    "CA volume",
    "field compactability",
    "manufactured sand",
    "trade-off"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "101"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "heur-vma-curve-shifts",
   "type": "heuristic",
   "statement": "On the VMA vs CA Volume curve: horizontal shifts come primarily from COARSE fraction characteristics (Principle #2 - CA ratio), vertical shifts primarily from FINE fraction characteristics (Principles #3 and #4). The curve is more susceptible to vertical than horizontal shift - the blend is more sensitive to the FA ratios than the CA ratio.",
   "rationale": "Slight alterations in the fine fraction change VMA as much as much larger alterations in the coarse fraction; this is why the CA ratio needs a larger change (0.20-0.35) than the FA ratios (0.05-0.10) for 1% VMA.",
   "thresholds": null,
   "when_violated": null,
   "context": "Mental model tying the four principles to the master curve. Coarse fraction characteristics become ineffective once CA is spread apart (Fine-graded region).",
   "mix_types": [
    "all"
   ],
   "tags": [
    "VMA curve",
    "horizontal shift",
    "vertical shift",
    "FA ratios"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "97-99"
   },
   "verified": true,
   "chunk": "1_4"
  },
  {
   "id": "heur-ca-strength-interlock",
   "type": "heuristic",
   "statement": "CA strength is critical for mixes with CA interlock (Coarse-graded, SMA): degradation of the coarse fraction decreases coarse volume, increases fine volume, and collapses VMA. Degradation-susceptible CA's may still be useable, from a VMA standpoint, in Fine-graded mixes where the fine fraction carries most of the load.",
   "rationale": "In interlock mixes the coarse fraction receives most of the compaction energy (mold and rollers), so weak CA breaks down.",
   "thresholds": null,
   "when_violated": "VMA difficult to achieve in CG, especially SMA; right side of the VMA curve flattens.",
   "context": "Aggregate selection for interlock mixes.",
   "mix_types": [
    "coarse-graded",
    "sma",
    "fine-graded"
   ],
   "tags": [
    "CA strength",
    "degradation",
    "VMA collapse",
    "aggregate selection"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "100"
   },
   "verified": true,
   "chunk": "1_4"
  },
  {
   "id": "heur-faf-055-ac-film",
   "type": "heuristic",
   "statement": "For dense-graded mixes it is UNUSUAL to have an FAf ratio above 0.55 and generally NOT advisable from an AC film thickness point-of-view. For SMA it is not unusual to have FAf above 0.70, but be careful not to over-stiffen the mortar.",
   "rationale": "The FAf level sets the dust content of the mortar; excess dust thins the effective AC film in dense-graded mixes and over-stiffens SMA mortar.",
   "thresholds": {
    "dense_graded_unusual_above": 0.55,
    "sma_common_above": 0.7
   },
   "when_violated": "Thin AC films (durability risk) in dense-graded; brittle over-stiffened mortar in SMA.",
   "context": "Principle #4 practical limits by mix type.",
   "mix_types": [
    "fine-graded",
    "coarse-graded",
    "sma"
   ],
   "tags": [
    "FAf",
    "AC film thickness",
    "mortar stiffness",
    "dust"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "104"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "heur-vcamix-3-5-below-fa-volume",
   "type": "heuristic",
   "statement": "For an indication that a FINE-graded mix should be compactable in the field, the VCAmix should be 3-5% LESS than the Volume of FA. Then determine the FA Volume actually achieved in the lab specimens by adjusting the CA CUW until the Volume of FA matches the VCAmix achieved - but for VIRGIN mixes, know the 'correct' VCAmix BEFORE adjusting, because the calculated VCAmix changes when the CA CUW changes.",
   "rationale": "If VCAmix approaches or exceeds the Volume of FA, the compacted mix is into or near CA interlock - a Fine-graded design above 80% CA LUW with a very compactable fine fraction often lands there.",
   "thresholds": {
    "vcamix_below_fa_volume_pct": [
     3,
     5
    ],
    "adjusted_cuw_interlock_flag_pct_ca_luw": 90
   },
   "when_violated": "Mix ACTS Coarse-graded; field compaction problems for a nominally Fine-graded design.",
   "context": "Indicator #5 for FG-acting-CG; lab verification step after compaction.",
   "mix_types": [
    "fine-graded"
   ],
   "tags": [
    "VCAmix",
    "volume of FA",
    "adjusted CUW",
    "CA interlock"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "107-108"
   },
   "verified": true,
   "corroborated_by": [
    "ref-vcamix-vs-fa-volume"
   ],
   "chunk": "1_4"
  },
  {
   "id": "heur-uw-combined-fractions-check",
   "type": "heuristic",
   "statement": "LUW/RUW tests run on the 'as is' stockpile gradation can be distorted: a CA with an unusually large amount passing the PCS makes LUW/RUW voids appear considerably LOW, and an FA with an unusually large amount retained on the PCS has 'altered' UW's too. For the final blend chosen, consider combining all plus-PCS material and running UW's on the combined 'coarse' fraction, combining the minus-PCS material for the combined 'fine' fraction, then entering each fraction (one CA, one FA) with its gradation and Gsb in the VBS to re-derive the volumes and better define the mix as Fine-graded or Coarse-graded.",
   "rationale": "Unit weight voids drive the volume framework; opposite-sized material inside a stockpile contaminates the measurement.",
   "thresholds": null,
   "when_violated": "Misclassified mix type and wrong CA/FA volumes.",
   "context": "Final design verification, especially near the CG/FG boundary.",
   "mix_types": [
    "all"
   ],
   "tags": [
    "unit weights",
    "combined fractions",
    "VBS",
    "verification"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "108"
   },
   "verified": true,
   "chunk": "1_4"
  },
  {
   "id": "heur-when-in-doubt-extra-trial",
   "type": "heuristic",
   "statement": "When in doubt (in the design phase) whether a mix behaves Fine-graded or Coarse-graded, run an extra trial coarser or finer passing the PCS and see which way VMA moves. Make a large enough change in the PCS (4-6%) to ensure a VMA change, and keep the 'OLD' FAc ratio on the same side of the 'Dip' so the overall fine fraction remains consistently Coarse-graded or Fine-graded for the trial.",
   "rationale": "The direction of the VMA response to a PCS change is the definitive test of which fraction controls the mix.",
   "thresholds": {
    "pcs_change_pct": [
     4,
     6
    ]
   },
   "when_violated": "A too-small change or an FAc flip across the Dip makes the trial unreadable.",
   "context": "Design-phase diagnostic for boundary mixes.",
   "mix_types": [
    "fine-graded",
    "coarse-graded"
   ],
   "tags": [
    "extra trial",
    "PCS change",
    "diagnostic",
    "dip"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "108"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "heur-cuw-10pct-pcs-shift",
   "type": "heuristic",
   "statement": "Changing the CA CUW 10% for ANY mix type generally changes the percent passing the PCS in the combined blend 4-5%.",
   "rationale": "CA CUW directly sets the CA volume, and the % passing the PCS is the direct expression of that volume in the gradation.",
   "thresholds": {
    "cuw_change_pct": 10,
    "pcs_change_pct": [
     4,
     5
    ]
   },
   "when_violated": null,
   "context": "Quick conversion between a CUW adjustment and its gradation effect; repeated on slides 95, 101 and 102.",
   "mix_types": [
    "all"
   ],
   "tags": [
    "CA CUW",
    "PCS",
    "10%",
    "4-5%"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "95, 101, 102"
   },
   "verified": true,
   "corroborated_by": [
    "note-tab03-void-size-and-pcs"
   ],
   "chunk": "1_4"
  },
  {
   "id": "note-slide108-adjusted-cuw-calc",
   "type": "student_annotation",
   "text": "% CA LUW = 78% -> 51% FA vol -> if VCAmix = 48%, that means FA vol has gone down by 3%. Thumb rule says multiply that by 2 and add to CA CUW to get real adjusted CUW. 3% x 2 = 6%, + 78% = 84% realistic chosen weight.",
   "annotates_id": "day1-slide-108",
   "confidence": "mostly clear; worked margin example of the adjusted-CUW thumb rule",
   "tags": [
    "adjusted CUW",
    "VCAmix",
    "thumb rule",
    "class note"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "108"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "note-slide108-fac-dip-range",
   "type": "student_annotation",
   "text": ".42-.48 (circled beside 'OLD FAc ratio < 0.450', with warning symbols)",
   "annotates_id": "day1-slide-108",
   "confidence": "clear digits; interpreted as the danger band around the 0.450 dip to avoid in production",
   "tags": [
    "OLD FAc",
    "dip",
    "danger band",
    "class note"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "108"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "note-slide108-vcamix-tracking",
   "type": "student_annotation",
   "text": "I know expected VCAmix through CA LUW - can the % decrease in voids after mixing be tracked?",
   "annotates_id": "day1-slide-108",
   "confidence": "partially legible; last words uncertain",
   "tags": [
    "VCAmix",
    "question",
    "class note"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": null,
    "pages": "108"
   },
   "verified": false,
   "chunk": "1_4"
  },
  {
   "id": "day1-slide-110",
   "type": "slide",
   "day": 1,
   "slide_number": 110,
   "slide_title": "Dense-Graded Virgin Blending Spreadsheet (VBS) - Review",
   "slide_content": "Review of the initial blending example (9.5 mm Coarse-graded virgin mix, same as the hand-calc example) in the dense-graded VBS. Extra VBS's are provided on the USB drive for 12.5 mm dense-graded and SMA mixes that include a 6.35 mm (1/4\") sieve row.",
   "instructor_notes": "Walk through the same 9.5 mm Coarse-graded virgin blend developed by hand earlier, now inside the dense-graded Virgin Blending Spreadsheet, so students can tie each spreadsheet cell back to the manual calculation. Extra spreadsheet versions with a 6.35 mm (1/4\") sieve row are on the USB for agencies whose gradation bands use the 1/4\" sieve.",
   "key_callouts": [
    "Same 9.5 mm C-G example as the hand calculations",
    "Extra VBS versions on USB include a 6.35 mm (1/4\") sieve row"
   ],
   "formulas": [],
   "figures": [
    "Screenshot of dense-graded VBS with the 9.5 mm example loaded"
   ],
   "mix_types": [
    "dense_coarse_graded"
   ],
   "tags": [
    "vbs",
    "spreadsheet",
    "tab-4",
    "blending"
   ],
   "related_ids": [
    "walk-vbs-required-inputs",
    "heur-quarter-inch-nmas-both-containers"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "04",
    "pages": "110"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-111",
   "type": "slide",
   "day": 1,
   "slide_number": 111,
   "slide_title": "VBS Requirements - Actual Unit Weights and Washed Gradations",
   "slide_content": "Actual unit weights are a MUST - never estimate them; test every virgin CA and FA. Enter WASHED average gradations to the nearest 0.1% down through the 0.075 mm sieve (affects the FA ratios). Coarse-graded and Fine-graded designs share one VBS workbook per NMAS (with and without recycle versions); SMA has a separate workbook.",
   "instructor_notes": "The spreadsheet outputs are only as good as the inputs. Unit weights must be actual test results on each virgin coarse and fine aggregate, never estimated. Gradations entered must be washed averages carried to the nearest 0.1% all the way through the 0.075 mm (#200) sieve, because the fine sieves drive the FAc and FAf ratios. One workbook per NMAS handles both C-G and F-G dense mixes, in virgin and recycle versions; SMA uses its own workbook.",
   "key_callouts": [
    "Actual UWs are a MUST - never estimate",
    "WASHED gradations to nearest 0.1% through 0.075 mm",
    "Separate SMA workbook"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "vbs",
    "unit-weight",
    "gradation",
    "inputs"
   ],
   "related_ids": [
    "heur-actual-uw-must",
    "heur-washed-gradations-tenth"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "04",
    "pages": "111"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-112",
   "type": "slide",
   "day": 1,
   "slide_number": 112,
   "slide_title": "Always Determine VCAmix vs. Volume of FA",
   "slide_content": "Always compare VCAmix to the Volume of FA. Coarse-graded: VCAmix should be <= Volume of FA (the fine fraction should compact to at least the dry-rodded condition; if not, ask why). Fine-graded: VCAmix should be 3-5% LESS than Volume of FA (FA compacted alone with AC undergoes roughly a 10% volume reduction). Yellow box: for F-G, adjust the CA CUW so Volume of FA matches the actual VCAmix and make sure CA CUW stays < 90% CA LUW, otherwise the 'Fine-graded' mix may actually be acting Coarse-graded (see slide 108). SMA: VCAmix is generally 2-4% GREATER than Volume of FA. VCAdrc comparisons use the ACTUAL combined blend retained above the governing agency spec's PCS (not necessarily the Bailey PCS); the VBS uses the Bailey PCS.",
   "instructor_notes": "This check is the volumetric sanity test for every design. The relationship between VCAmix and the Volume of FA tells you whether the coarse fraction is truly carrying load (SMA), sharing load (C-G), or floating in the fine matrix (F-G). For virgin F-G mixes, know the correct VCAmix target BEFORE adjusting the chosen unit weight.",
   "key_callouts": [
    "C-G: VCAmix <= Volume of FA",
    "F-G: VCAmix 3-5% below Volume of FA",
    "SMA: VCAmix generally 2-4% above Volume of FA",
    "F-G: adjust CA CUW to match, keep CA CUW < 90% CA LUW",
    "VCAdrc uses the governing spec PCS; VBS uses the Bailey PCS"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "vcamix",
    "volume-of-fa",
    "vcadrc",
    "design-check"
   ],
   "related_ids": [
    "ref-vcamix-vs-fa-volume",
    "heur-vcamix-3-5-below-fa-volume",
    "day1-slide-108"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "04",
    "pages": "112"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-113",
   "type": "slide",
   "day": 1,
   "slide_number": 113,
   "slide_title": "Designing with RAP / RAS - Virgin Blend First",
   "slide_content": "For a recycle design: run unit weights on the virgin aggregates; determine the mix type and NMAS; develop a VIRGIN-ONLY blend first to establish the CA volume, FA volume and % passing PCS; evaluate the ratios. This does NOT require lab-testing the virgin mix - it is a paper/spreadsheet blend. The VBS shows both blends (virgin-only and with recycle) plus their ratios side by side.",
   "instructor_notes": "The virgin-only blend is the reference skeleton. It establishes the aggregate structure targets (CA volume, %PCS, ratios) that the recycle blend must then match. No lab volumetrics are run on the virgin-only blend - it exists to define where you are trying to go.",
   "key_callouts": [
    "Develop the virgin-only blend FIRST",
    "Virgin-only blend is not lab-tested",
    "VBS displays virgin and recycle blends with ratios side by side"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "rap",
    "ras",
    "recycle",
    "mix-design",
    "virgin-blend"
   ],
   "related_ids": [
    "proc-rap-ras-mix-design"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "04",
    "pages": "113"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-114",
   "type": "slide",
   "day": 1,
   "slide_number": 114,
   "slide_title": "Recycle Blend Matching Rules",
   "slide_content": "When adding recycle, match the virgin-only blend: % passing PCS within +/-0.1%; CA ratio (OLD CA ratio for F-G) as close as possible (usually requires multiple virgin CAs); FA MASS blend the same within a few tenths; and the same amount of MF/BHF in both blends. Compare the resulting ratios to each other and to the recommended ranges. The directional VMA principles still apply. If a virgin aggregate is removed after adding recycle, re-establish the virgin-only blend WITHOUT that aggregate first.",
   "instructor_notes": "The goal is for the recycle blend to reproduce the virgin blend's aggregate structure, not just its gradation band. PCS is matched tightly (+/-0.1%). The CA ratio match usually takes more than one virgin CA stockpile. The FA portion is matched by MASS within a few tenths, and mineral filler / baghouse fines amounts must be identical or the FA ratios shift. If you drop a virgin aggregate once recycle is in, go back and rebuild the virgin-only reference blend without it - otherwise you are matching against a blend that no longer exists.",
   "key_callouts": [
    "Match %PCS within +/-0.1%",
    "Match CA ratio (OLD CA ratio for F-G) as close as possible",
    "Match FA MASS blend within a few tenths",
    "Same MF/BHF amount in both blends",
    "Re-establish the virgin blend if an aggregate is removed"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "rap",
    "ras",
    "recycle",
    "matching",
    "pcs",
    "ratios"
   ],
   "related_ids": [
    "proc-rap-ras-mix-design",
    "heur-recycle-reestablish-virgin-blend"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "04",
    "pages": "114"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-115",
   "type": "slide",
   "day": 1,
   "slide_number": 115,
   "slide_title": "RAP / RAS Considerations",
   "slide_content": "Things to consider with recycle materials: crushed vs. round/natural aggregate in the RAP; processing (crushing) changes angularity; significantly different Gsb than the virgin aggregates; RAS grind size; manufacturers' waste vs. tear-off shingles; cellulosic vs. fiberglass fibers (big VMA difference); accurate recycle addition in the lab AND at the plant; % of Aggregate vs. % of Total Mix conventions.",
   "instructor_notes": "Recycle is not a uniform commodity. RAP from crushed stone behaves differently than RAP containing rounded natural sand and gravel; the RAP crushing operation itself changes particle angularity. A recycle Gsb significantly different from the virgin aggregates skews the estimated volume blends. For RAS, grind size matters, manufacturers' waste differs from tear-offs, and cellulosic vs. fiberglass shingle fibers produce a big VMA difference. Confirm how recycle percentage is defined (% of aggregate vs. % of total mix) and that addition rates are accurate in the lab and at the plant.",
   "key_callouts": [
    "Processing changes angularity",
    "Watch for significantly different recycle Gsb",
    "Cellulosic vs fiberglass fibers = big VMA difference",
    "%Agg vs %Total Mix - know which convention"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "rap",
    "ras",
    "recycle",
    "gsb",
    "fibers"
   ],
   "related_ids": [
    "heur-rap-ras-material-variability"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "04",
    "pages": "115"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-116",
   "type": "slide",
   "day": 1,
   "slide_number": 116,
   "slide_title": "RAP Blending Spreadsheet Review (Tab 5)",
   "slide_content": "Review of the initial RAP blending example (19.0 mm Coarse-graded mix with RAP). Repeats the rule: if a virgin aggregate is removed after adding recycle, re-establish the virgin-only blend without it first. Option: consider making the design Fine-graded (virgin + recycle) so BOTH fine aggregates remain usable, giving more field blend-adjustment options.",
   "instructor_notes": "Walkthrough of the recycle VBS using a 19.0 mm C-G RAP example. One practical strategy: designing the recycle mix as Fine-graded can keep both fine aggregates in play, which gives the plant more room to make blend adjustments in the field.",
   "key_callouts": [
    "19.0 mm C-G RAP example",
    "Re-establish virgin blend if an aggregate is dropped",
    "F-G option keeps both FAs usable for field adjustments"
   ],
   "formulas": [],
   "figures": [
    "Screenshot of RAP blending spreadsheet"
   ],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded"
   ],
   "tags": [
    "rap",
    "vbs",
    "tab-5",
    "field-adjustment"
   ],
   "related_ids": [
    "proc-rap-ras-mix-design",
    "heur-recycle-fg-option"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "05",
    "pages": "116"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-117",
   "type": "slide",
   "day": 1,
   "slide_number": 117,
   "slide_title": "Evaluating an Existing Virgin Mix",
   "slide_content": "To evaluate an existing virgin mix: obtain representative virgin aggregate samples (particle SHAPE is very important); run LUW and RUW on the CAs and FAs; obtain the original gradations and Gsb's. Starting CUW: Fine-graded 70.0% of CA LUW; Coarse-graded 100.0% of CA LUW; SMA 118.0% of CA RUW. The gradation tables give you 3 of the 4 principles directly - you must determine the CA volume to determine the mix type. 'This is the objective!'",
   "instructor_notes": "When evaluating a mix you did not design, the ratios (CA, FAc, FAf) can be computed straight from the gradation, but the mix TYPE depends on the CA volume, which requires unit weights and a chosen unit weight estimate. Representative samples matter because shape drives the unit weights. Start the CUW iteration at 70.0% CA LUW (F-G), 100.0% CA LUW (C-G) or 118.0% CA RUW (SMA).",
   "key_callouts": [
    "Representative samples - SHAPE is very important",
    "Starting CUW: F-G 70.0% CA LUW; C-G 100.0% CA LUW; SMA 118.0% CA RUW",
    "Gradation gives 3 of 4 principles; CA volume determines mix type - this is the objective"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "existing-mix",
    "evaluation",
    "cuw",
    "starting-points"
   ],
   "related_ids": [
    "proc-evaluate-existing-virgin-mix",
    "ref-cuw-starting-points"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "06",
    "pages": "117"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cuw-starting-points",
    "proc-evaluate-existing-mix-quickref"
   ],
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-118",
   "type": "slide",
   "day": 1,
   "slide_number": 118,
   "slide_title": "Evaluating an Existing Virgin Mix - Iteration (Tab 6)",
   "slide_content": "Estimate the CA and FA volume blends (from the original weight percentages if the Gsb's are similar); enter the %-200 if MF/BHF is used, and the conversion factor. Iterate: CUW to match % passing PCS; CA blend to match CA ratio; FA blend to match FAc; %-200 to match FAf - until the estimated blend is within a few tenths of the original percentages. GOAL: accurately estimate the CA volume. FIELD data reminder: use averages over time/tonnage and consider the observed PCS range and ratio ranges.",
   "instructor_notes": "The Tab 6 spreadsheet walkthrough. If the aggregate Gsb's are similar, the weight percentages approximate the volume blends for a starting point. The iteration loop converges when the estimated combined gradation reproduces the original mix gradation within a few tenths of a percent on the control sieves. The whole point is an accurate CA volume so the mix type (and thus which principles apply, and in which direction) is known.",
   "key_callouts": [
    "Iterate CUW -> %PCS, CA blend -> CA ratio, FA blend -> FAc, %-200 -> FAf",
    "Converge within a few tenths of the original %'s",
    "GOAL: accurately estimate CA volume",
    "Use FIELD averages over time/tonnage"
   ],
   "formulas": [],
   "figures": [
    "Screenshot of existing-mix evaluation spreadsheet"
   ],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "existing-mix",
    "evaluation",
    "iteration",
    "tab-6"
   ],
   "related_ids": [
    "proc-evaluate-existing-virgin-mix"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "06",
    "pages": "118"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-119",
   "type": "slide",
   "day": 1,
   "slide_number": 119,
   "slide_title": "Evaluating an Existing Recycle Mix (Tab 7)",
   "slide_content": "Evaluate the virgin portion first (as on the previous slides), then match: % passing PCS, CA ratio, FA MASS blend, and the same MF/BHF amount. The Recycle % and the recycle Gsb (relative to the virgin aggregates) determine how accurate the CA-volume estimate can be. The two gradations (virgin-only estimate vs. with-recycle) will NOT match exactly. Same FIELD data reminder: use averages over time/tonnage.",
   "instructor_notes": "Same iteration approach as the virgin evaluation, but now the recycle contribution is in the blend. The higher the recycle percentage and the more the recycle Gsb differs from the virgin aggregates, the fuzzier the estimated CA volume. Expect an imperfect gradation match; the objective remains a defensible estimate of the CA volume and the four principles.",
   "key_callouts": [
    "Evaluate virgin portion first, then match PCS / CA ratio / FA mass / MF-BHF",
    "Recycle % and recycle Gsb control estimation accuracy",
    "The two gradations will not match exactly"
   ],
   "formulas": [],
   "figures": [
    "Screenshot of existing recycle mix evaluation spreadsheet"
   ],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "existing-mix",
    "recycle",
    "evaluation",
    "tab-7"
   ],
   "related_ids": [
    "proc-evaluate-existing-recycle-mix"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "07",
    "pages": "119"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-120",
   "type": "slide",
   "day": 1,
   "slide_number": 120,
   "slide_title": "Starting Point vs. Lab Compaction (Tab 8)",
   "slide_content": "Relate the four principles (according to mix type) to the lab compactive effort. LOWER compaction levels (relate principles to decreasing VMA): CA CUW near the LOWER limit of the recommended range; LOW to mid CA ratio range (keep segregation susceptibility in mind); HIGH to mid FAc and FAf ratio ranges. HIGHER compaction levels (relate principles to increasing VMA): CA CUW near the UPPER limit; HIGH to mid CA ratio range (keep field compactability in mind); LOW to mid FAc and FAf ratio ranges.",
   "instructor_notes": "Relate each of the four principles to the type and amount of compactive effort required for the design. For CA CUW, remember where the most compactable state occurs for the given mix type and relate it to whether the design effort is low or high. As the CA ratio (or New CA ratio) increases, VMA increases - keep segregation susceptibility and field compactability in mind. As the FA ratios (or New FA ratios) increase, VMA decreases. There is still some trial and error, but the Bailey principles give a controlled starting point and a clear idea of what to change if the lab or field results miss the target.",
   "key_callouts": [
    "Lower compaction: CA CUW near lower limit, low-mid CA ratio, high-mid FA ratios",
    "Higher compaction: CA CUW near upper limit, high-mid CA ratio, low-mid FA ratios",
    "Segregation susceptibility vs field compactability trade-off"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "compaction",
    "starting-point",
    "vma",
    "tab-8"
   ],
   "related_ids": [
    "heur-compaction-level-starting-point"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "120"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-121",
   "type": "slide",
   "day": 1,
   "slide_number": 121,
   "slide_title": "Laboratory Blending - Verify Before You Mix",
   "slide_content": "'You have to know where you are, to get where you want to go!' Representative samples; accurate batching procedures; VERIFY the combined blend BEFORE mixing (highlighted); consider changes due to degradation from compaction (lab and field).",
   "instructor_notes": "The trial blend batch must accurately match the DMF, which normally requires fractionating materials into individual sieve sizes and/or ranges. Regardless of batching method, ALWAYS determine and evaluate the 'as-batched' combined blend gradation BEFORE adding AC, mixing and compacting. Virgin mixes: batch a sample (without AC) and run a washed gradation. Recycle mixes: batch a sample (without virgin AC) and run a solvent extraction or a washed ignition-oven burn (watch degradation with burns). Compare the as-batched gradation and Bailey principles to the DMF, considering the change required in each principle to alter VMA 1% - small sieve variations can significantly change CA/FA volumes and ratios. 'Star Trek' (cling-on) dust often causes VMA problems. Consider determining the blend gradation AFTER mixing by extracting/burning a Gmm specimen (is the lab mixing process degrading the blend?), and - especially with mixes that have CA interlock - after compaction by extracting/burning a Gmb specimen to compare the resulting four principles to where you started.",
   "key_callouts": [
    "ALWAYS evaluate the as-batched blend BEFORE adding AC",
    "'Star Trek' (cling-on) dust often causes VMA problems",
    "Check degradation after mixing (Gmm) and after compaction (Gmb), especially with CA interlock"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "lab-blending",
    "as-batched",
    "degradation",
    "gradation-verification"
   ],
   "related_ids": [
    "proc-verify-as-batched-blend",
    "heur-star-trek-dust",
    "heur-degradation-check"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "121"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-122",
   "type": "slide",
   "day": 1,
   "slide_number": 122,
   "slide_title": "Laboratory Blending & Recycle - Fractionating Recycle",
   "slide_content": "How do you currently handle recycle in the lab? After drying at a low temperature, consider: weighing the total recycle sample; fractionating the recycle into sizes such as +19.0 mm, +12.5 mm, +9.5 mm, +4.75 mm, +2.36 mm, +0.600 mm and -0.600 mm (+3/4\", +1/2\", +3/8\", +#4, +#8, +#30 and -#30); determining each fraction as a % of the total recycle sample; using those %'s to batch the amount of each fraction needed for the total recycle in a given mix specimen. Yellow box: for RAS, consider also including the 1.18 mm (#16) sieve in addition to the 2.36 mm (#8) and 0.600 mm (#30), since 20% or more retained on the 1.18 mm (#16) is fairly common.",
   "instructor_notes": "In the field, mix samples are extracted/burned to get the actual combined gradation, but in the lab folks rarely verify the as-batched blend. Fractionating a representative RAP sample and batching each fraction as a percentage of the total RAP that was split down increases control over the gradation and AC content of lab specimens - especially important with high recycle percentages. It is still advisable to dry-batch virgin aggregates and recycle (no virgin AC) and run an extraction or Gmm burn to verify the as-batched blend. How easy is it to segregate recycle when weighing from a single pan?",
   "key_callouts": [
    "Fractionate recycle after low-temperature drying",
    "Batch each fraction as a % of the total recycle sample",
    "RAS: include the 1.18 mm (#16) sieve - 20%+ retained is common"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "rap",
    "ras",
    "fractionation",
    "lab-batching"
   ],
   "related_ids": [
    "proc-recycle-lab-fractionation",
    "ref-recycle-fractionation-sieves",
    "heur-ras-include-116-sieve"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "122"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-123",
   "type": "slide",
   "day": 1,
   "slide_number": 123,
   "slide_title": "Laboratory Blending & Recycle - Fractionation Example",
   "slide_content": "Example of fractionating RAP for specimen batching: total RAP stockpile sample 10314.2 g; weight needed for mix specimen 1212.5 g. Fractions (weight / % of total / weight needed): +19.0 mm 1841.8 / 17.9 / 217.0; +12.5 mm 1463.7 / 14.2 / 172.2; +9.5 mm 1324.4 / 12.8 / 155.2; +4.75 mm 1396.3 / 13.5 / 163.7; +2.36 mm 1203.9 / 11.7 / 141.9; +0.600 mm 1911.8 / 18.5 / 224.3; -0.600 mm 1172.3 / 11.4 / 138.2. Totals 10314.2 / 100.0 / 1212.5.",
   "instructor_notes": "There will be 'conglomerate' particles in the pans, especially on larger sieves - the point is to batch the correct amount of those particles as a percentage of the TOTAL RAP needed. Consider warming the RAP and breaking larger conglomerates apart BY HAND, preferably before sieving, so each fraction batches closer to the desired weight. Allowing the recycle to cool to room temperature before sieving avoids AC build-up on sieves (others fractionate warm and claim it helps break conglomerates). Yellow box: when attempting this the first time, batch a couple of recycle-only specimens (just RAP or just RAS) and extract or burn them to confirm the resulting gradation and AC content closely match the stockpile averages - do NOT assume this is unnecessary for 'processed and/or fractionated' RAP.",
   "key_callouts": [
    "Batch conglomerates as a % of total RAP",
    "Break large conglomerates apart by hand",
    "Confirm with recycle-only specimens the first time"
   ],
   "formulas": [],
   "figures": [
    "Fractionation batching table"
   ],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "rap",
    "fractionation",
    "batching",
    "worked-example"
   ],
   "related_ids": [
    "ex-rap-fractionation-batching",
    "heur-recycle-only-specimens-first"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "123"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-124",
   "type": "slide",
   "day": 1,
   "slide_number": 124,
   "slide_title": "Can We Estimate VMA and Voids Using the Bailey Principles?",
   "slide_content": "NOT for trial #1 - because you have to know where you are, to get to where you want to go! But for trial #2, YES. How: (1) determine the amount of change in each principle (proposed trial #2 vs completed trial #1); (2) divide by the amount of change required to alter VMA 1%; (3) determine the direction of change (positive or negative); (4) total the amount of change predicted from all four principles and add to the ACTUAL VMA achieved in the previous trial; (5) for Voids, also account for the change in effective AC/Binder VOLUME.",
   "instructor_notes": "There are five aggregate packing factors - gradation, type and amount of compactive effort, shape, texture and strength. Each mix has a unique combination, which makes accurately estimating VMA for trial #1 challenging. But the rules-of-thumb for each principle (PCS, CA ratio, FAc, FAf) give the amount of change per 1% VMA, and each principle has a clear direction. IF all packing factors except gradation are fairly consistent between trials/samples, the amount and direction of change in each principle can be totaled to estimate the change in VMA. For Voids, the change in effective AC weight must be converted to VOLUME and added to the estimated VMA change.",
   "key_callouts": [
    "Cannot estimate trial #1; CAN estimate trial #2",
    "Total the four principle changes and add to actual trial #1 VMA",
    "Voids: also account for effective AC volume change"
   ],
   "formulas": [
    "Estimated dVMA = sum over principles of (delta_principle / amount_per_1pct_VMA) with sign by direction"
   ],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation",
    "vma",
    "voids",
    "trial-2"
   ],
   "related_ids": [
    "proc-estimate-vma-voids",
    "heur-know-where-you-are",
    "heur-estimation-unique-sensitivity"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "124"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-125",
   "type": "slide",
   "day": 1,
   "slide_number": 125,
   "slide_title": "Estimating VMA and Voids - Coarse-Graded Example (Gradations)",
   "slide_content": "19.0 mm (3/4\") NMAS Coarse-graded example. Trial #1 (% passing): 25.0 mm 100.0; 19.0 mm 97.4 (NMAS); 12.5 mm 76.2; 9.5 mm 63.5 (HALF); 4.75 mm 38.2 (PCS); 2.36 mm 23.6; 1.18 mm 18.8 (SCS); 0.600 mm 13.1; 0.300 mm 7.4 (TCS); 0.150 mm 5.7; 0.075 mm 4.0. Trial #2 (% passing): 100.0 / 98.0 / 76.5 / 63.6 / 37.2 / 22.1 / 16.5 / 11.8 / 6.8 / 5.2 / 3.5. Rules-of-thumb (C-G, per 1% VMA): #1 PCS 4.0%; #2 CA ratio 0.20; #3 FAc 0.05; #4 FAf 0.05. Direction to INCREASE VMA (C-G): PCS decreases; CA ratio increases; FAc decreases; FAf decreases.",
   "instructor_notes": "Trial #1 is completed, so actual VMA and Voids are known; trial #2 is proposed. First review the amount rules-of-thumb for a Coarse-graded mix, then the directions of change required to increase VMA.",
   "key_callouts": [
    "C-G per-1%-VMA amounts: PCS 4.0%, CA 0.20, FAc 0.05, FAf 0.05",
    "C-G directions to increase VMA: PCS down, CA up, FAc down, FAf down"
   ],
   "formulas": [],
   "figures": [
    "Side-by-side trial gradations with control sieves marked"
   ],
   "mix_types": [
    "dense_coarse_graded"
   ],
   "tags": [
    "estimation",
    "vma",
    "coarse-graded",
    "gradation"
   ],
   "related_ids": [
    "ex-estimate-vma-voids-cg-19mm",
    "ref-vma-sensitivity-cg"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "125"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-126",
   "type": "slide",
   "day": 1,
   "slide_number": 126,
   "slide_title": "Estimating VMA and Voids - Coarse-Graded Example (Principles)",
   "slide_content": "Trial #1 (completed): PCS = 38.2% (100.0% CA LUW); CA ratio = 0.693; FAc = 0.492; FAf = 0.394; AC = 4.6%; VMA = 12.6%; Air Voids = 3.4%. Trial #2 (proposed): PCS = 37.2% (102.5% CA LUW); CA ratio = 0.725; FAc = 0.444; FAf = 0.412; AC = 4.6%; Expected VMA? Expected Air Voids?",
   "instructor_notes": "For a Coarse-graded mix the PCS value is a function of the % CA LUW - note the chosen-unit-weight change between trials (100.0% to 102.5% CA LUW). AC content is held the same so its impact on expected Voids can be ignored for the moment (provided asphalt absorption Pba doesn't change). Trial #1 volumetrics are actual, so 'we know where we are.'",
   "key_callouts": [
    "C-G PCS is a function of % CA LUW",
    "AC held constant between trials (Pba assumed unchanged)"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded"
   ],
   "tags": [
    "estimation",
    "vma",
    "coarse-graded",
    "principles"
   ],
   "related_ids": [
    "ex-estimate-vma-voids-cg-19mm"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "126"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-127",
   "type": "slide",
   "day": 1,
   "slide_number": 127,
   "slide_title": "Estimating VMA - Coarse-Graded Trial #2 vs Trial #1",
   "slide_content": "PCS: 38.2 - 37.2 = +1.0 (Trial 1 - Trial 2) -> increases VMA: +1.0/4.0 = +0.25%. CA ratio: 0.725 - 0.693 = +0.032 (Trial 2 - Trial 1) -> increases VMA: +0.032/0.2 = +0.16%. FAc: 0.492 - 0.444 = +0.048 (Trial 1 - Trial 2) -> increases VMA: +0.048/0.05 = +0.96%. FAf: 0.394 - 0.412 = -0.018 (Trial 1 - Trial 2) -> decreases VMA: -0.018/0.05 = -0.36%. Total estimated change: plus ~1.0% VMA. Yellow box: the ORDER used (Trial 1 - Trial 2 or Trial 2 - Trial 1) provides the +/- values that result in the +/- CHANGE in VMA.",
   "instructor_notes": "Make sure each principle's change is taken in the right 'direction' as to whether it increases or decreases VMA. PCS uses Trial 1 - Trial 2 (lowering PCS increases VMA for C-G); CA ratio uses Trial 2 - Trial 1 (increasing CA increases VMA); FAc and FAf use Trial 1 - Trial 2 (decreasing FA ratios increases VMA). Total = +0.25 + 0.16 + 0.96 - 0.36 = plus 1.01%.",
   "key_callouts": [
    "Subtraction ORDER per principle sets the sign of the VMA change",
    "Total estimated change: +1.01% ~ +1.0% VMA"
   ],
   "formulas": [
    "dVMA_PCS = (PCS1 - PCS2)/4.0",
    "dVMA_CA = (CA2 - CA1)/0.20",
    "dVMA_FAc = (FAc1 - FAc2)/0.05",
    "dVMA_FAf = (FAf1 - FAf2)/0.05"
   ],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded"
   ],
   "tags": [
    "estimation",
    "vma",
    "coarse-graded",
    "arithmetic"
   ],
   "related_ids": [
    "ex-estimate-vma-voids-cg-19mm",
    "heur-estimation-subtraction-order"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "127"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-128",
   "type": "slide",
   "day": 1,
   "slide_number": 128,
   "slide_title": "Estimating Voids and Adjusting AC - Coarse-Graded Example",
   "slide_content": "Expected change in VMA AND Voids is plus 1.0%. Trial #1: VMA = 12.6%, Voids = 3.4%. Trial #2 estimates: VMA = 13.6%, Voids = 4.4%. Adjust % AC? Started at 4.6% AC; 0.1% AC by MASS ~ 0.225% by VOLUME; 0.4 / 0.225 = 1.8 tenths -> add 0.2%; increase AC to 4.8%. Yellow box: for 'normal' aggregate blends (Gsb ~2.600 to 2.700), the rule-of-thumb for the amount of change in Voids for a 0.1% change in AC/Binder content is 0.1% AC by MASS ~ 0.225% AC by VOLUME. This value is the ratio Gmb/Gb in decimal form - calculate it for your mixes and compare.",
   "instructor_notes": "First: is the estimated VMA on target? If not, adjust trial #2. Consider 'windage' if trial #2 also changes shape, texture and/or strength. Then check whether estimated Voids match the target Voids (+/-0.1%); if not, divide the difference by 0.225 to approximate the AC/Binder adjustment in tenths of a percent by weight (here the target is presumably 4.0%: difference 0.4 / 0.225 = 1.8 tenths, round to add 0.2% -> 4.8% AC). Make sure any expected change in asphalt absorption (Pba) is also taken into account.",
   "key_callouts": [
    "0.1% AC by mass ~ 0.225% by volume (= Gmb/Gb in decimal form)",
    "Voids target tolerance +/-0.1% before adjusting AC",
    "Include 'windage' for shape/texture/strength changes"
   ],
   "formulas": [
    "AC adjustment (tenths by weight) = Voids difference / 0.225"
   ],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded"
   ],
   "tags": [
    "estimation",
    "voids",
    "ac-adjustment",
    "gmb-gb"
   ],
   "related_ids": [
    "ex-estimate-vma-voids-cg-19mm",
    "heur-ac-01-mass-0225-volume",
    "heur-estimate-windage"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "128"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-129",
   "type": "slide",
   "day": 1,
   "slide_number": 129,
   "slide_title": "Estimating VMA and Voids - Fine-Graded Example (Gradations)",
   "slide_content": "9.5 mm (3/8\") NMAS Fine-graded example. Trial #1 (% passing): 12.5 mm 100.0; 9.5 mm 93.6 (NMAS); 4.75 mm 59.8; 2.36 mm 44.1 (Original PCS); 1.18 mm 30.0 (New HALF); 0.600 mm 19.6 (New PCS); 0.300 mm 11.9; 0.150 mm 7.8 (New SCS); 0.075 mm 5.5. Trial #2 (% passing): 100.0 / 93.7 / 60.6 / 45.5 / 30.6 / 19.6 / 11.6 / 7.2 / 4.9. Rules-of-thumb (F-G, per 1% VMA): #1 Original PCS 6.0%; #2 New CA ratio 0.35; #3 New FAc 0.05; #4 New FAf 0.05. Direction to INCREASE VMA (F-G): Original PCS increases; New CA ratio increases; New FAc decreases; New FAf decreases.",
   "instructor_notes": "Same estimation exercise for a Fine-graded mix: review the F-G amount rules-of-thumb, then the directions of change required to increase VMA. Note the New control sieves marked on the gradation.",
   "key_callouts": [
    "F-G per-1%-VMA amounts: Orig PCS 6.0%, New CA 0.35, New FAc 0.05, New FAf 0.05",
    "F-G directions to increase VMA: Orig PCS up, New CA up, New FAc down, New FAf down"
   ],
   "formulas": [],
   "figures": [
    "Side-by-side trial gradations with New control sieves marked"
   ],
   "mix_types": [
    "dense_fine_graded"
   ],
   "tags": [
    "estimation",
    "vma",
    "fine-graded",
    "gradation"
   ],
   "related_ids": [
    "ex-estimate-vma-voids-fg-95mm",
    "ref-vma-sensitivity-fg"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "129"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-130",
   "type": "slide",
   "day": 1,
   "slide_number": 130,
   "slide_title": "Estimating VMA and Voids - Fine-Graded Example (Principles)",
   "slide_content": "Trial #1 (completed): Original PCS = 44.1% (80.0% CA LUW); New CA ratio = 0.738; New FAc ratio = 0.398; AC = 5.8%; VMA = 14.6%; Air Voids = 3.2%. Trial #2 (proposed): Original PCS = 45.5% (77.0% CA LUW); New CA ratio = 0.738; New FAc ratio = 0.367; AC = 5.8%; Expected VMA? Expected Air Voids? Yellow highlight: a Fine-graded 9.5 mm (3/8\") NMAS mix doesn't include a New FAf because the New TCS falls below the 0.075 mm (#200) sieve.",
   "instructor_notes": "For a Fine-graded mix the Original PCS value is a function of the % CA LUW. Lowering the % CA LUW made the combined blend finer in trial #2, which INCREASES VMA in a Fine-graded mix. Only three principles are usable for this NMAS since New FAf doesn't exist. Trial #1 volumetrics are actual.",
   "key_callouts": [
    "F-G Original PCS is a function of % CA LUW; lower CA LUW = finer blend = higher VMA",
    "9.5 mm F-G has no New FAf (New TCS below 0.075 mm)"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_fine_graded"
   ],
   "tags": [
    "estimation",
    "vma",
    "fine-graded",
    "principles"
   ],
   "related_ids": [
    "ex-estimate-vma-voids-fg-95mm",
    "heur-fg-no-new-faf-small-nmas"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "130"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-131",
   "type": "slide",
   "day": 1,
   "slide_number": 131,
   "slide_title": "Estimating VMA - Fine-Graded Trial #2 vs Trial #1",
   "slide_content": "Original PCS: 45.5 - 44.1 = +1.4 (Trial 2 - Trial 1) -> increases VMA: +1.4/6.0 = +0.23%. New CA ratio: 0.738 - 0.738 = 0 (Trial 2 - Trial 1) -> no change in VMA: 0/0.35 = 0%. New FAc ratio: 0.398 - 0.367 = +0.031 (Trial 1 - Trial 2) -> increases VMA: +0.031/0.05 = +0.62%. Total estimated change: plus ~0.85% VMA. Yellow boxes: the ORDER used (Trial 1 - Trial 2 or Trial 2 - Trial 1) provides the +/- values; there is NO New FAf ratio for 4.75 mm (#4), 9.5 mm (3/8\") or 12.5 mm (1/2\") NMAS Fine-graded mixes because the New TCS falls below the 0.075 mm (#200) sieve.",
   "instructor_notes": "Original PCS uses Trial 2 - Trial 1 (increasing Original PCS increases VMA for a Fine-graded mix - typically). New CA unchanged, so no contribution. New FAc uses Trial 1 - Trial 2 (decreasing New FAc increases VMA). Total = +0.23 + 0 + 0.62 = plus 0.85%.",
   "key_callouts": [
    "Total estimated change +0.85% VMA",
    "No New FAf for 4.75 / 9.5 / 12.5 mm NMAS F-G mixes"
   ],
   "formulas": [
    "dVMA_OrigPCS = (PCS2 - PCS1)/6.0",
    "dVMA_NewCA = (CA2 - CA1)/0.35",
    "dVMA_NewFAc = (FAc1 - FAc2)/0.05"
   ],
   "figures": [],
   "mix_types": [
    "dense_fine_graded"
   ],
   "tags": [
    "estimation",
    "vma",
    "fine-graded",
    "arithmetic"
   ],
   "related_ids": [
    "ex-estimate-vma-voids-fg-95mm",
    "heur-estimation-subtraction-order"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "131"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-132",
   "type": "slide",
   "day": 1,
   "slide_number": 132,
   "slide_title": "Estimating VMA and Voids - Fine-Graded Result & Fallback",
   "slide_content": "Expected change in VMA and Voids is plus 0.85%. Trial #1: VMA = 14.6%, Voids = 3.2%. Trial #2 estimates: VMA = 15.4%, Voids = 4.0%. Adjust % AC? Yellow box: IF A GIVEN FINE-GRADED MIX DOES NOT ESTIMATE ACCURATELY AS A FINE-GRADED MIX, EVALUATE THE DATA AS A COARSE-GRADED MIX FOR THE SAME NMAS (OR POSSIBLY THE NEXT SMALLER NMAS) AND CHECK THE ESTIMATION FROM THAT POINT-OF-VIEW.",
   "instructor_notes": "Estimated change ~+0.8% VMA and Voids. Check the estimated VMA against target, then whether estimated Voids match target (+/-0.1%). Since estimated Voids for trial #2 are 4.0%, no AC/Binder change is needed (assuming a 4.0% target and unchanged Pba). The fallback box is the practical tie-in to the FG-acting-CG discussion: if the F-G estimation misses, re-evaluate the same data as C-G.",
   "key_callouts": [
    "Trial #2 estimates: VMA 15.4%, Voids 4.0% - no AC change needed",
    "F-G that doesn't estimate accurately: re-evaluate as C-G (same or next smaller NMAS)"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_fine_graded",
    "dense_coarse_graded"
   ],
   "tags": [
    "estimation",
    "voids",
    "fine-graded",
    "fallback",
    "tab-9",
    "tab-10"
   ],
   "related_ids": [
    "ex-estimate-vma-voids-fg-95mm",
    "heur-fg-estimate-as-cg-fallback",
    "ref-fg-acting-cg-indicators"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "09",
    "pages": "132"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-133",
   "type": "slide",
   "day": 1,
   "slide_number": 133,
   "slide_title": "Estimation Spreadsheet - Requirements",
   "slide_content": "To accurately estimate VMA you MUST: know the mix TYPE (C-G, F-G or SMA); know the mix SIZE (NMAS - using the 15% rule; really important if the PCS changes); have a mix gradation and AC/Binder content that accurately represents the VMA achieved for each individual sample. Generally the Design Gsb works for determining FIELD VMA, but occasionally you may need to adjust for different individual FIELD Gsb's or for significant changes in individual aggregate %'s. Yellow box 1: there MAY be instances where the 'old' rule of 10% works better with COARSE-graded mixes - don't be afraid to evaluate the data as another NMAS to check WHICH estimates better. Yellow box 2: the DESIGN Gsb generally works in the field for FIELD VMA, but may need adjusting if individual aggregate Gsb's or the blend of aggregates has changed enough to significantly alter the combined Gsb. Look at the Pba values in the field - negative values are NOT possible!",
   "instructor_notes": "Key points for the VMA and Voids Estimation Sheet: be certain of mix TYPE and SIZE (NMAS defined as the first sieve larger than the first sieve to retain more than 15%). Accurately blending, splitting and testing mix samples for gradation (solvent extraction or ignition oven), AC content, VMA and Voids (Gmb and Gmm) cannot be over-emphasized. On Gsb variability: is variability in NATURAL aggregate Gsb real, or a function of the test procedure (determining SSD condition)? Variability can exist, especially in non-natural aggregates such as slag; the estimation sheet helps indicate when the field Gsb may be different from design and when it may be variable.",
   "key_callouts": [
    "Know mix TYPE and NMAS (15% rule) - critical if PCS changes",
    "Old 10% NMAS rule may estimate better for some C-G mixes",
    "Negative field Pba values are NOT possible",
    "Design Gsb usually OK for field VMA - adjust when combined Gsb shifts"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "nmas",
    "gsb",
    "pba",
    "field-vma"
   ],
   "related_ids": [
    "heur-bailey-nmas-15pct",
    "heur-old-10pct-rule-cg",
    "heur-design-gsb-field-vma"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "133"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-134",
   "type": "slide",
   "day": 1,
   "slide_number": 134,
   "slide_title": "Estimation Spreadsheet - Based on Gradation Change Only",
   "slide_content": "The estimated VMA is based on GRADATION change (PCS, CA, FAc & FAf): the amount of change in each principle and the direction of change in each principle. Every mix has a UNIQUE combination of Aggregate Packing Factors: gradation, type and amount of compactive effort, shape, texture and strength.",
   "instructor_notes": "The estimation sheet expresses gradation change through the four Bailey principles. Although rules-of-thumb give the amount of change per 1% VMA, each mix has a unique combination of the five packing factors, so it is NORMAL for each mix (of a given type and NMAS) to have a different degree of sensitivity to change in each principle.",
   "key_callouts": [
    "Estimated VMA reflects gradation change only",
    "Five packing factors: gradation, compactive effort, shape, texture, strength",
    "Different sensitivity per mix is NORMAL"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "packing-factors",
    "sensitivity"
   ],
   "related_ids": [
    "heur-estimation-unique-sensitivity",
    "heur-calibrate-to-existing-mixes"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "134"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "ex-rap-fractionation-batching",
   "type": "worked_example",
   "title": "Fractionating RAP for Lab Specimen Batching",
   "scenario": "A RAP stockpile sample is fractionated into seven size fractions; each fraction's share of the total is used to batch the RAP needed for one mix specimen.",
   "given": {
    "total_rap_stockpile_sample_g": 10314.2,
    "weight_needed_for_mix_specimen_g": 1212.5,
    "fractions_g": {
     "+19.0mm": 1841.8,
     "+12.5mm": 1463.7,
     "+9.5mm": 1324.4,
     "+4.75mm": 1396.3,
     "+2.36mm": 1203.9,
     "+0.600mm": 1911.8,
     "-0.600mm": 1172.3
    }
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Compute each fraction as a % of the total RAP sample",
     "calculation": "% of total = fraction mass / 10314.2 x 100",
     "result": {
      "+19.0mm": 17.9,
      "+12.5mm": 14.2,
      "+9.5mm": 12.8,
      "+4.75mm": 13.5,
      "+2.36mm": 11.7,
      "+0.600mm": 18.5,
      "-0.600mm": 11.4
     }
    },
    {
     "step_number": 2,
     "description": "Multiply each % of total by the specimen RAP weight to get the weight to batch from each fraction",
     "calculation": "wgt needed = % of total x 1212.5 / 100",
     "result": {
      "+19.0mm": 217.0,
      "+12.5mm": 172.2,
      "+9.5mm": 155.2,
      "+4.75mm": 163.7,
      "+2.36mm": 141.9,
      "+0.600mm": 224.3,
      "-0.600mm": 138.2
     }
    }
   ],
   "answer": {
    "percent_total": 100.0,
    "wgt_needed_total_g": 1212.5
   },
   "variants": null,
   "procedure_id": "proc-recycle-lab-fractionation",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "rap",
    "fractionation",
    "batching"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "123"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "ex-estimate-vma-voids-cg-19mm",
   "type": "worked_example",
   "title": "Estimating Trial #2 VMA and Voids - 19.0 mm Coarse-Graded Mix",
   "scenario": "Trial #1 of a 19.0 mm (3/4\") NMAS Coarse-graded mix is completed with actual volumetrics; a proposed trial #2 gradation is evaluated with the four-principle rules-of-thumb to estimate its VMA and Voids before lab work.",
   "given": {
    "nmas_mm": 19.0,
    "trial_1": {
     "pcs_pct": 38.2,
     "ca_luw_pct": 100.0,
     "ca_ratio": 0.693,
     "fac_ratio": 0.492,
     "faf_ratio": 0.394,
     "ac_pct": 4.6,
     "vma_pct": 12.6,
     "air_voids_pct": 3.4
    },
    "trial_2": {
     "pcs_pct": 37.2,
     "ca_luw_pct": 102.5,
     "ca_ratio": 0.725,
     "fac_ratio": 0.444,
     "faf_ratio": 0.412,
     "ac_pct": 4.6
    },
    "rules_of_thumb_per_1pct_vma": {
     "pcs_pct": 4.0,
     "ca_ratio": 0.2,
     "fac_ratio": 0.05,
     "faf_ratio": 0.05
    }
   },
   "steps": [
    {
     "step_number": 1,
     "description": "PCS change (Trial 1 - Trial 2): 38.2 - 37.2 = +1.0; lowering PCS increases VMA for C-G",
     "calculation": "+1.0 / 4.0",
     "result": "+0.25% VMA"
    },
    {
     "step_number": 2,
     "description": "CA ratio change (Trial 2 - Trial 1): 0.725 - 0.693 = +0.032; increasing CA ratio increases VMA",
     "calculation": "+0.032 / 0.20",
     "result": "+0.16% VMA"
    },
    {
     "step_number": 3,
     "description": "FAc change (Trial 1 - Trial 2): 0.492 - 0.444 = +0.048; decreasing FAc increases VMA",
     "calculation": "+0.048 / 0.05",
     "result": "+0.96% VMA"
    },
    {
     "step_number": 4,
     "description": "FAf change (Trial 1 - Trial 2): 0.394 - 0.412 = -0.018; increasing FAf decreases VMA",
     "calculation": "-0.018 / 0.05",
     "result": "-0.36% VMA"
    },
    {
     "step_number": 5,
     "description": "Total estimated VMA change and add to actual trial #1 VMA",
     "calculation": "+0.25 + 0.16 + 0.96 - 0.36 = +1.01 ~ +1.0; 12.6 + 1.0",
     "result": "Estimated trial #2 VMA = 13.6%"
    },
    {
     "step_number": 6,
     "description": "AC held at 4.6%, so estimated Voids change equals estimated VMA change",
     "calculation": "3.4 + 1.0",
     "result": "Estimated trial #2 Voids = 4.4%"
    },
    {
     "step_number": 7,
     "description": "Adjust AC to bring Voids back to target: 0.1% AC by mass ~ 0.225% by volume",
     "calculation": "0.4 / 0.225 = 1.8 tenths -> add 0.2%",
     "result": "Increase AC from 4.6% to 4.8%"
    }
   ],
   "answer": {
    "estimated_vma_pct": 13.6,
    "estimated_voids_pct": 4.4,
    "total_estimated_vma_change_pct": 1.01,
    "recommended_ac_pct": 4.8
   },
   "variants": null,
   "procedure_id": "proc-estimate-vma-voids",
   "mix_types": [
    "dense_coarse_graded"
   ],
   "tags": [
    "estimation",
    "vma",
    "voids",
    "ac-adjustment"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "125-128"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "ex-estimate-vma-voids-fg-95mm",
   "type": "worked_example",
   "title": "Estimating Trial #2 VMA and Voids - 9.5 mm Fine-Graded Mix",
   "scenario": "Trial #1 of a 9.5 mm (3/8\") NMAS Fine-graded mix is completed with actual volumetrics; a proposed trial #2 is evaluated with the F-G rules-of-thumb. Only three principles apply since a 9.5 mm F-G mix has no New FAf (New TCS below 0.075 mm).",
   "given": {
    "nmas_mm": 9.5,
    "trial_1": {
     "orig_pcs_pct": 44.1,
     "ca_luw_pct": 80.0,
     "new_ca_ratio": 0.738,
     "new_fac_ratio": 0.398,
     "ac_pct": 5.8,
     "vma_pct": 14.6,
     "air_voids_pct": 3.2
    },
    "trial_2": {
     "orig_pcs_pct": 45.5,
     "ca_luw_pct": 77.0,
     "new_ca_ratio": 0.738,
     "new_fac_ratio": 0.367,
     "ac_pct": 5.8
    },
    "rules_of_thumb_per_1pct_vma": {
     "orig_pcs_pct": 6.0,
     "new_ca_ratio": 0.35,
     "new_fac_ratio": 0.05
    }
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Original PCS change (Trial 2 - Trial 1): 45.5 - 44.1 = +1.4; increasing Original PCS increases VMA for F-G (typically)",
     "calculation": "+1.4 / 6.0",
     "result": "+0.23% VMA"
    },
    {
     "step_number": 2,
     "description": "New CA ratio change (Trial 2 - Trial 1): 0.738 - 0.738 = 0",
     "calculation": "0 / 0.35",
     "result": "0% VMA"
    },
    {
     "step_number": 3,
     "description": "New FAc change (Trial 1 - Trial 2): 0.398 - 0.367 = +0.031; decreasing New FAc increases VMA",
     "calculation": "+0.031 / 0.05",
     "result": "+0.62% VMA"
    },
    {
     "step_number": 4,
     "description": "Total estimated VMA change and add to actual trial #1 VMA",
     "calculation": "+0.23 + 0 + 0.62 = +0.85; 14.6 + 0.8",
     "result": "Estimated trial #2 VMA = 15.4%"
    },
    {
     "step_number": 5,
     "description": "AC held at 5.8%, so estimated Voids change equals estimated VMA change",
     "calculation": "3.2 + 0.8",
     "result": "Estimated trial #2 Voids = 4.0%"
    },
    {
     "step_number": 6,
     "description": "Estimated Voids equal a 4.0% target, so no AC/Binder change is needed (provided Pba doesn't change)",
     "calculation": null,
     "result": "Keep AC at 5.8%"
    }
   ],
   "answer": {
    "estimated_vma_pct": 15.4,
    "estimated_voids_pct": 4.0,
    "total_estimated_vma_change_pct": 0.85,
    "recommended_ac_pct": 5.8
   },
   "variants": null,
   "procedure_id": "proc-estimate-vma-voids",
   "mix_types": [
    "dense_fine_graded"
   ],
   "tags": [
    "estimation",
    "vma",
    "voids",
    "fine-graded"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "129-132"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "ref-vcamix-vs-fa-volume",
   "type": "reference_table",
   "title": "VCAmix vs. Volume of FA - Expected Relationship by Mix Type",
   "table_kind": "design_check",
   "applies_to": "All mix types - volumetric sanity check on every design",
   "columns": [
    "mix_type",
    "expected_relationship",
    "notes"
   ],
   "rows": [
    {
     "mix_type": "Coarse-graded",
     "expected_relationship": "VCAmix <= Volume of FA",
     "notes": "The fine fraction should compact to at least the dry-rodded condition; if not, ask why"
    },
    {
     "mix_type": "Fine-graded",
     "expected_relationship": "VCAmix 3-5% LESS than Volume of FA",
     "notes": "FA compacted alone with AC undergoes ~10% volume reduction; adjust CA CUW to match Volume of FA to actual VCAmix and keep CA CUW < 90% CA LUW or the mix may actually be Coarse-graded"
    },
    {
     "mix_type": "SMA",
     "expected_relationship": "VCAmix generally 2-4% GREATER than Volume of FA",
     "notes": "Coarse aggregate skeleton carries the load"
    }
   ],
   "footnotes": [
    "VCAdrc comparisons use the ACTUAL combined blend retained above the governing agency spec's PCS (not necessarily the Bailey PCS); the VBS uses the Bailey PCS",
    "For virgin F-G mixes, know the correct VCAmix target BEFORE adjusting the chosen unit weight"
   ],
   "tags": [
    "vcamix",
    "volume-of-fa",
    "design-check",
    "vcadrc"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "04",
    "pages": "112"
   },
   "verified": true,
   "corroborated_by": [
    "heur-vcamix-3-5-below-fa-volume"
   ],
   "chunk": "1_5"
  },
  {
   "id": "ref-recycle-fractionation-sieves",
   "type": "reference_table",
   "title": "Suggested Recycle Fractionation Sizes for Lab Batching",
   "table_kind": "procedure_support",
   "applies_to": "RAP/RAS lab specimen batching",
   "columns": [
    "fraction",
    "imperial"
   ],
   "rows": [
    {
     "fraction": "+19.0 mm",
     "imperial": "+3/4\""
    },
    {
     "fraction": "+12.5 mm",
     "imperial": "+1/2\""
    },
    {
     "fraction": "+9.5 mm",
     "imperial": "+3/8\""
    },
    {
     "fraction": "+4.75 mm",
     "imperial": "+#4"
    },
    {
     "fraction": "+2.36 mm",
     "imperial": "+#8"
    },
    {
     "fraction": "+0.600 mm",
     "imperial": "+#30"
    },
    {
     "fraction": "-0.600 mm",
     "imperial": "-#30"
    }
   ],
   "footnotes": [
    "For RAS, also include the 1.18 mm (#16) sieve in addition to 2.36 mm (#8) and 0.600 mm (#30) - 20% or more retained on 1.18 mm is fairly common",
    "Dry recycle at low temperature first; determine each fraction as a % of the total recycle sample"
   ],
   "tags": [
    "rap",
    "ras",
    "fractionation",
    "sieves"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "122"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "ref-vma-direction-of-change",
   "type": "reference_table",
   "title": "Direction of Change in Each Principle to INCREASE VMA (C-G and F-G)",
   "table_kind": "rules_of_thumb",
   "applies_to": "Dense-graded mixes (Coarse-graded and Fine-graded)",
   "columns": [
    "principle",
    "coarse_graded_direction",
    "fine_graded_direction"
   ],
   "rows": [
    {
     "principle": "PCS / Original PCS",
     "coarse_graded_direction": "PCS decreases -> VMA increases",
     "fine_graded_direction": "Original PCS increases -> VMA increases (typically)"
    },
    {
     "principle": "CA ratio / New CA ratio",
     "coarse_graded_direction": "CA ratio increases -> VMA increases",
     "fine_graded_direction": "New CA ratio increases -> VMA increases"
    },
    {
     "principle": "FAc / New FAc",
     "coarse_graded_direction": "FAc decreases -> VMA increases",
     "fine_graded_direction": "New FAc decreases -> VMA increases"
    },
    {
     "principle": "FAf / New FAf",
     "coarse_graded_direction": "FAf decreases -> VMA increases",
     "fine_graded_direction": "New FAf decreases -> VMA increases (no New FAf for 4.75/9.5/12.5 mm NMAS)"
    }
   ],
   "footnotes": [
    "Amounts per 1% VMA: C-G PCS 4.0%, CA 0.20, FAc 0.05, FAf 0.05; F-G Original PCS 6.0%, New CA 0.35, New FAc 0.05, New FAf 0.05",
    "Note the C-G vs F-G PCS directions are OPPOSITE"
   ],
   "tags": [
    "vma",
    "direction",
    "rules-of-thumb",
    "estimation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "125, 129"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "proc-rap-ras-mix-design",
   "type": "procedure",
   "title": "Designing a Mix with RAP/RAS (Virgin Blend First, Then Match)",
   "purpose": "Establish the aggregate structure with a virgin-only blend, then add recycle while preserving that structure.",
   "prerequisites": [
    "Unit weights (LUW/RUW) tested on all virgin aggregates",
    "Recycle gradation(s), AC content and Gsb",
    "Mix type and NMAS determined"
   ],
   "steps": [
    {
     "step_number": 1,
     "title": "Develop virgin-only blend",
     "instruction": "Develop a virgin-only blend to establish the CA volume, FA volume and % passing PCS, and evaluate the ratios. This blend is NOT lab-tested - it defines the target aggregate structure.",
     "formula": null,
     "notes": "The VBS shows both blends (virgin-only and with recycle) plus their ratios."
    },
    {
     "step_number": 2,
     "title": "Add recycle and match %PCS",
     "instruction": "Blend in the recycle and adjust virgin proportions so the % passing PCS matches the virgin-only blend within +/-0.1%.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 3,
     "title": "Match CA ratio",
     "instruction": "Match the CA ratio (use the OLD CA ratio for Fine-graded mixes) as closely as possible - usually requires multiple virgin CAs.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 4,
     "title": "Match FA mass blend and MF/BHF",
     "instruction": "Keep the FA MASS blend the same within a few tenths and use the same amount of MF/BHF in both blends.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 5,
     "title": "Compare ratios",
     "instruction": "Compare the recycle blend's ratios to the virgin-only blend's ratios and to the recommended ranges. The directional VMA principles still apply.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 6,
     "title": "Re-establish if aggregates change",
     "instruction": "If a virgin aggregate is removed after adding recycle, re-establish the virgin-only blend WITHOUT that aggregate first, then re-match.",
     "formula": null,
     "notes": "Consider designing as Fine-graded (virgin + recycle) so both FAs remain usable for field blend adjustments."
    }
   ],
   "convergence_criteria": "%PCS within +/-0.1% of virgin-only blend; CA ratio as close as possible; FA mass blend within a few tenths; identical MF/BHF.",
   "starting_points": null,
   "example_ids": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "rap",
    "ras",
    "recycle",
    "mix-design"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "04",
    "pages": "113-116"
   },
   "verified": true,
   "corroborated_by": [
    "proc-evaluate-existing-mix-quickref",
    "walk-vbs-rap-blend-19mm"
   ],
   "chunk": "1_5"
  },
  {
   "id": "proc-evaluate-existing-virgin-mix",
   "type": "procedure",
   "title": "Evaluating an Existing Virgin Mix (Tab 6)",
   "purpose": "Estimate the CA volume of a mix you did not design in order to determine its mix type - 'this is the objective' - since gradation alone gives only 3 of the 4 principles.",
   "prerequisites": [
    "Representative virgin aggregate samples (particle SHAPE is very important)",
    "LUW and RUW tested on the CAs and FAs",
    "Original gradations and Gsb's of the aggregates"
   ],
   "steps": [
    {
     "step_number": 1,
     "title": "Estimate volume blends",
     "instruction": "Estimate the CA and FA volume blends - from the original weight percentages if the Gsb's are similar. Enter the %-200 if MF/BHF is used, and the conversion factor.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 2,
     "title": "Set the starting CUW",
     "instruction": "Start the chosen unit weight at 70.0% of CA LUW (Fine-graded), 100.0% of CA LUW (Coarse-graded) or 118.0% of CA RUW (SMA).",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 3,
     "title": "Iterate CUW to %PCS",
     "instruction": "Adjust the CUW until the estimated % passing PCS matches the original mix gradation.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 4,
     "title": "Iterate CA blend to CA ratio",
     "instruction": "Adjust the CA volume blend until the CA ratio matches.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 5,
     "title": "Iterate FA blend to FAc",
     "instruction": "Adjust the FA volume blend until FAc matches.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 6,
     "title": "Iterate %-200 to FAf",
     "instruction": "Adjust the %-200 (MF/BHF) until FAf matches.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 7,
     "title": "Converge and classify",
     "instruction": "Repeat until the estimated combined blend is within a few tenths of the original percentages. The resulting CA volume (as % of CA LUW/RUW) indicates the mix type.",
     "formula": null,
     "notes": "For FIELD data, use averages over time/tonnage and consider the observed PCS range and ratio ranges."
    }
   ],
   "convergence_criteria": "Estimated combined gradation within a few tenths of a percent of the original mix percentages on the control sieves.",
   "starting_points": {
    "fine_graded": "70.0% of CA LUW",
    "coarse_graded": "100.0% of CA LUW",
    "sma": "118.0% of CA RUW"
   },
   "example_ids": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "existing-mix",
    "evaluation",
    "iteration",
    "cuw"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "06",
    "pages": "117-118"
   },
   "verified": true,
   "corroborated_by": [
    "proc-evaluate-existing-mix-quickref"
   ],
   "chunk": "1_5"
  },
  {
   "id": "proc-evaluate-existing-recycle-mix",
   "type": "procedure",
   "title": "Evaluating an Existing Recycle Mix (Tab 7)",
   "purpose": "Extend the existing-mix evaluation to mixes containing RAP/RAS by evaluating the virgin portion first, then matching the recycle blend.",
   "prerequisites": [
    "Everything required for the virgin evaluation (representative samples, LUW/RUW, gradations, Gsb's)",
    "Recycle %, gradation, AC content and Gsb"
   ],
   "steps": [
    {
     "step_number": 1,
     "title": "Evaluate virgin portion",
     "instruction": "Perform the existing virgin mix evaluation (Tab 6 procedure) on the virgin aggregates first.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 2,
     "title": "Match with recycle",
     "instruction": "Add the recycle and match: % passing PCS, CA ratio, FA MASS blend, and the same MF/BHF amount.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 3,
     "title": "Assess estimation accuracy",
     "instruction": "Recognize that the Recycle % and the recycle Gsb (relative to the virgin aggregates) determine how accurate the CA-volume estimate can be. The two gradations will NOT match exactly.",
     "formula": null,
     "notes": "For FIELD data, use averages over time/tonnage."
    }
   ],
   "convergence_criteria": "Best achievable match on %PCS, CA ratio, FA mass and MF/BHF; exact gradation match is not expected.",
   "starting_points": null,
   "example_ids": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "existing-mix",
    "recycle",
    "evaluation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "07",
    "pages": "119"
   },
   "verified": true,
   "corroborated_by": [
    "proc-evaluate-existing-mix-quickref"
   ],
   "chunk": "1_5"
  },
  {
   "id": "proc-verify-as-batched-blend",
   "type": "procedure",
   "title": "Verifying the As-Batched Combined Blend Before Mixing",
   "purpose": "Confirm the trial blend batch accurately matches the DMF before AC is added, and check for degradation from mixing and compaction.",
   "prerequisites": [
    "Representative samples of ingredient materials",
    "Accurate batching (normally fractionated into individual sieve sizes and/or ranges)"
   ],
   "steps": [
    {
     "step_number": 1,
     "title": "Batch a verification sample",
     "instruction": "Regardless of batching method, ALWAYS determine and evaluate the 'as-batched' combined blend gradation BEFORE adding AC, mixing and compacting.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 2,
     "title": "Run the appropriate gradation",
     "instruction": "Virgin mixes: batch a sample (without virgin AC) and run a WASHED gradation. Recycle mixes: batch a sample (without virgin AC) and run a solvent extraction or a washed ignition-oven burn (with burns, remember the potential for degradation).",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 3,
     "title": "Compare to targets",
     "instruction": "Compare the as-batched gradation to the target gradation AND the as-batched Bailey principles to those of the DMF, considering the change required in each principle to alter VMA 1%. Small sieve variations can significantly change the CA/FA volumes and combined blend ratios.",
     "formula": null,
     "notes": "'Star Trek' (cling-on) dust often causes VMA problems."
    },
    {
     "step_number": 4,
     "title": "Check degradation after mixing",
     "instruction": "Consider determining the combined blend gradation AFTER mixing by extracting or burning a Gmm specimen - is the lab mixing process degrading the aggregate blend?",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 5,
     "title": "Check degradation after compaction",
     "instruction": "Especially with mixes that have some degree of CA interlock, extract or burn a Gmb specimen and compare the resulting four principles to where you actually started.",
     "formula": null,
     "notes": null
    }
   ],
   "convergence_criteria": "As-batched gradation and Bailey principles acceptably match the DMF before proceeding to mix and compact.",
   "starting_points": null,
   "example_ids": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "lab-blending",
    "as-batched",
    "degradation",
    "dmf"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "121"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "proc-recycle-lab-fractionation",
   "type": "procedure",
   "title": "Fractionating Recycle for Lab Specimen Batching",
   "purpose": "Increase control over the gradation and AC/Binder content of laboratory-prepared specimens - especially important with high recycle percentage mixes.",
   "prerequisites": [
    "Representative recycle stockpile sample",
    "Low-temperature drying capability"
   ],
   "steps": [
    {
     "step_number": 1,
     "title": "Dry at low temperature",
     "instruction": "Dry the recycle sample at a low temperature. Allow it to cool to room temperature before sieving to avoid AC build-up on sieves (some fractionate warm and claim it helps break conglomerates).",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 2,
     "title": "Weigh total sample",
     "instruction": "Weigh the total recycle sample that was split down.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 3,
     "title": "Fractionate",
     "instruction": "Fractionate into sizes such as +19.0, +12.5, +9.5, +4.75, +2.36, +0.600 and -0.600 mm. For RAS, also include the 1.18 mm (#16) sieve. Consider warming the recycle and breaking larger conglomerate particles apart BY HAND, preferably before sieving.",
     "formula": null,
     "notes": "Conglomerate particles are expected - the goal is to batch the correct amount of them as a percentage of the TOTAL recycle."
    },
    {
     "step_number": 4,
     "title": "Compute fraction percentages",
     "instruction": "Determine the amount of each fraction as a % of the total recycle sample.",
     "formula": "% of total = fraction mass / total sample mass x 100",
     "notes": null
    },
    {
     "step_number": 5,
     "title": "Batch specimens by fraction",
     "instruction": "Use these percentages to determine the amount of each fraction needed for the total recycle in a given mix specimen.",
     "formula": "wgt needed = % of total x specimen recycle weight",
     "notes": null
    },
    {
     "step_number": 6,
     "title": "Confirm the first time",
     "instruction": "When first attempting this, batch a couple of recycle-only specimens (just RAP or just RAS) and extract or burn them to confirm the resulting gradation and AC/Binder content closely match the stockpile averages. Do NOT assume this is unnecessary for 'processed and/or fractionated' RAP.",
     "formula": null,
     "notes": null
    }
   ],
   "convergence_criteria": "Recycle-only specimen gradation and AC content closely match the stockpile averages used for design.",
   "starting_points": null,
   "example_ids": [
    "ex-rap-fractionation-batching"
   ],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "rap",
    "ras",
    "fractionation",
    "batching"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "122-123"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "proc-estimate-vma-voids",
   "type": "procedure",
   "title": "Estimating Trial #2 VMA and Voids from the Four Principles",
   "purpose": "Predict the VMA and Voids of a proposed trial before lab work, using the completed previous trial as the anchor ('you have to know where you are, to get where you want to go').",
   "prerequisites": [
    "A COMPLETED trial with actual VMA and Voids (cannot estimate trial #1)",
    "Mix TYPE (C-G, F-G or SMA) and NMAS (15% rule) known",
    "Gradation and AC content that accurately represent each sample's VMA",
    "All packing factors except gradation fairly consistent between trials"
   ],
   "steps": [
    {
     "step_number": 1,
     "title": "Determine principle changes",
     "instruction": "Determine the amount of change in each principle (proposed trial #2 compared to completed trial #1).",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 2,
     "title": "Divide by rules-of-thumb",
     "instruction": "Divide each change by the amount of change required to alter VMA 1% for the mix type (e.g., C-G: PCS 4.0%, CA 0.20, FAc 0.05, FAf 0.05; F-G: Orig PCS 6.0%, New CA 0.35, New FAc 0.05, New FAf 0.05).",
     "formula": "dVMA_i = delta_principle_i / amount_per_1pct_VMA_i",
     "notes": null
    },
    {
     "step_number": 3,
     "title": "Apply direction",
     "instruction": "Determine the direction (positive or negative) of each contribution. The subtraction ORDER used (Trial 1 - Trial 2 or Trial 2 - Trial 1) provides the +/- values that result in the +/- CHANGE in VMA.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 4,
     "title": "Total and anchor",
     "instruction": "Total the predicted change from all four principles and ADD it to the ACTUAL VMA achieved in the previous trial.",
     "formula": "VMA_est = VMA_actual_prev + sum(dVMA_i)",
     "notes": null
    },
    {
     "step_number": 5,
     "title": "Estimate Voids",
     "instruction": "For Voids, also account for the change in effective AC/Binder VOLUME: convert the change in effective AC weight to volume and add it to the estimated VMA change.",
     "formula": null,
     "notes": "If AC is unchanged and Pba is unchanged, the Voids change equals the VMA change."
    },
    {
     "step_number": 6,
     "title": "Adjust AC if needed",
     "instruction": "If estimated Voids are not within +/-0.1% of target, divide the difference by 0.225 to approximate the AC/Binder adjustment in tenths of a percent by weight (for normal blends, Gsb ~2.600-2.700). Account for any expected Pba change.",
     "formula": "AC adjustment (tenths) = Voids difference / 0.225",
     "notes": "0.1% AC by MASS ~ 0.225% AC by VOLUME; this value is the ratio Gmb/Gb in decimal form - calculate it for your mixes."
    }
   ],
   "convergence_criteria": "Estimated VMA acceptable vs. target and estimated Voids within +/-0.1% of target Voids.",
   "starting_points": null,
   "example_ids": [
    "ex-estimate-vma-voids-cg-19mm",
    "ex-estimate-vma-voids-fg-95mm"
   ],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation",
    "vma",
    "voids",
    "trial-2",
    "ac-adjustment"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "124-132"
   },
   "verified": true,
   "corroborated_by": [
    "ref-cheatsheet-cg",
    "proc-screen-trial-blends-est-sheet"
   ],
   "chunk": "1_5"
  },
  {
   "id": "heur-actual-uw-must",
   "type": "heuristic",
   "statement": "Actual unit weights are a MUST for the blending spreadsheets - never estimate them; test every virgin CA and FA.",
   "rationale": "The CA volume (and thus mix type and %PCS) is computed from the chosen unit weight expressed against tested LUW/RUW values; estimated unit weights corrupt everything downstream.",
   "thresholds": null,
   "when_violated": "Estimated CA volume, mix type classification and ratio evaluations are all unreliable.",
   "context": "Inputs to the Virgin Blending Spreadsheets.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "unit-weight",
    "vbs",
    "inputs"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "04",
    "pages": "111"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-washed-gradations-tenth",
   "type": "heuristic",
   "statement": "Enter WASHED average gradations to the nearest 0.1% down through the 0.075 mm sieve - the fine sieves drive the FA ratios.",
   "rationale": "FAc and FAf are ratios of small percentages (%SCS/%PCS and %TCS/%SCS); rounding or dry-sieve dust errors on fine sieves shift these ratios materially.",
   "thresholds": null,
   "when_violated": "FAc/FAf ratios computed from unwashed or coarsely-rounded gradations misrepresent the fine fraction packing.",
   "context": "Inputs to the Virgin Blending Spreadsheets.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "gradation",
    "washed",
    "fa-ratios",
    "inputs"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "04",
    "pages": "111"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-recycle-reestablish-virgin-blend",
   "type": "heuristic",
   "statement": "If a virgin aggregate is removed after adding recycle, re-establish the virgin-only blend WITHOUT that aggregate before re-matching the recycle blend.",
   "rationale": "The virgin-only blend is the reference structure being matched; if its ingredient set changes, the reference no longer exists and the match targets are invalid.",
   "thresholds": null,
   "when_violated": "The recycle blend is matched against a virgin structure that can no longer be produced, so the design targets are fictitious.",
   "context": "RAP/RAS mix design.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "rap",
    "ras",
    "recycle",
    "virgin-blend"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "04",
    "pages": "114, 116"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-recycle-fg-option",
   "type": "heuristic",
   "statement": "Consider designing a recycle mix as Fine-graded (virgin + recycle) so BOTH fine aggregates remain usable - it gives more blend-adjustment options in the field.",
   "rationale": "A Fine-graded structure keeps multiple FA stockpiles active in the blend, so plant adjustments can trade between them without breaking the design structure.",
   "thresholds": null,
   "when_violated": null,
   "context": "RAP blending strategy (Tab 5 discussion).",
   "mix_types": [
    "dense_fine_graded"
   ],
   "tags": [
    "recycle",
    "fine-graded",
    "field-adjustment"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "05",
    "pages": "116"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-rap-ras-material-variability",
   "type": "heuristic",
   "statement": "Treat recycle as a variable material: crushed vs. round/natural particles, angularity changes from processing, significantly different Gsb, RAS grind size, manufacturers' waste vs. tear-offs, and cellulosic vs. fiberglass fibers (big VMA difference) all change how the recycle behaves in the blend.",
   "rationale": "Recycle contributes both aggregate structure and binder; its physical characteristics and specific gravity shift the estimated volume blends and the achieved VMA.",
   "thresholds": null,
   "when_violated": "Volume blend estimates and VMA predictions miss because the recycle's contribution differs from assumed.",
   "context": "Also confirm the recycle addition convention (% of Aggregate vs. % of Total Mix) and accurate addition rates in lab and plant.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "rap",
    "ras",
    "gsb",
    "fibers",
    "variability"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "04",
    "pages": "115"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-compaction-level-starting-point",
   "type": "heuristic",
   "statement": "Pick the starting point by lab compaction level: LOWER compactive effort -> CA CUW near the LOWER limit of the recommended range, LOW-to-mid CA ratio (watch segregation susceptibility), HIGH-to-mid FA ratios (relate principles to decreasing VMA). HIGHER compactive effort -> CA CUW near the UPPER limit, HIGH-to-mid CA ratio (watch field compactability), LOW-to-mid FA ratios (relate principles to increasing VMA).",
   "rationale": "Higher compactive effort densifies the mix more, so the aggregate structure must be set up to preserve VMA; lower effort needs the opposite bias. Each principle's direction of VMA influence guides which end of its range to start from.",
   "thresholds": null,
   "when_violated": "Designs compacted at high effort with low-VMA-biased structures fail VMA; low-effort designs with high-VMA-biased structures can be tender or segregation-prone.",
   "context": "Relating the four principles (by mix type) to type and amount of lab compactive effort. Some trial and error remains, but this gives a controlled starting point.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "compaction",
    "starting-point",
    "vma",
    "ranges"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "120"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-know-where-you-are",
   "type": "heuristic",
   "statement": "'You have to know where you are, to get where you want to go' - VMA/Voids CANNOT be estimated for trial #1, but CAN be estimated for trial #2 once trial #1's actual results anchor the prediction.",
   "rationale": "Each mix has a unique combination of the five packing factors (gradation, compactive effort, shape, texture, strength), so absolute prediction is unreliable; but if everything except gradation is consistent between trials, the four-principle deltas predict the CHANGE from a known result.",
   "thresholds": null,
   "when_violated": "Attempting to predict trial #1 VMA from gradation alone ignores the other four packing factors.",
   "context": "Also the theme of laboratory blending: verify the as-batched blend so you actually know where you are.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation",
    "trial-1",
    "trial-2",
    "philosophy"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "121, 124"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-star-trek-dust",
   "type": "heuristic",
   "statement": "'Star Trek' (cling-on) dust often causes VMA problems.",
   "rationale": "Dust clinging to coarser particles shows up in the mix but not in dry-batched blend expectations, shifting the fine sieves and the FA ratios (and thus VMA).",
   "thresholds": null,
   "when_violated": "Unexplained VMA loss between design and as-produced mix.",
   "context": "Laboratory blending; another reason to run washed gradations and verify the as-batched blend.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "dust",
    "vma",
    "gradation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "121"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-degradation-check",
   "type": "heuristic",
   "statement": "Check for aggregate degradation at each lab stage: extract/burn a Gmm specimen after MIXING (is the lab mixing process degrading the blend?) and, especially with mixes that have CA interlock, a Gmb specimen after COMPACTION - then compare the resulting four principles to where you started.",
   "rationale": "Mixing and compaction can break aggregate, changing the gradation and therefore the principles that the volumetrics correspond to; interlocking CA structures are most susceptible.",
   "thresholds": null,
   "when_violated": "Lab volumetrics correspond to a degraded gradation, not the batched one, so design conclusions and field predictions are off.",
   "context": "Applies in lab and field ('consider changes due to degradation from compaction - lab and field').",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "degradation",
    "gmm",
    "gmb",
    "ca-interlock"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "121"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-ras-include-116-sieve",
   "type": "heuristic",
   "statement": "For RAS fractionation, include the 1.18 mm (#16) sieve in addition to the 2.36 mm (#8) and 0.600 mm (#30) sieves - it is fairly common for 20% or more of RAS to be retained on the 1.18 mm sieve.",
   "rationale": "RAS is concentrated in the fine sizes; without the #16 split, a large share of the material sits in one over-wide fraction and batching control is lost.",
   "thresholds": {
    "typical_retained_118mm_pct": ">= 20"
   },
   "when_violated": "RAS specimen batches misrepresent the stockpile's size distribution.",
   "context": "Recycle lab fractionation.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "ras",
    "fractionation",
    "sieves"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "122"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "heur-recycle-only-specimens-first",
   "type": "heuristic",
   "statement": "The first time you fractionate recycle for batching, batch a couple of recycle-ONLY specimens (just RAP or just RAS) and extract or burn them to confirm the gradation and AC/Binder content closely match the stockpile averages. Do NOT assume this is unnecessary for 'processed and/or fractionated' RAP.",
   "rationale": "Fractionated batching only increases control if the recombined fractions actually reproduce the stockpile averages; verification catches conglomerate and segregation effects.",
   "thresholds": null,
   "when_violated": "High-recycle mixes carry an unverified gradation/AC error through the whole design.",
   "context": "Especially important with high recycle percentage mixes.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "rap",
    "ras",
    "verification",
    "batching"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "123"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-estimation-subtraction-order",
   "type": "heuristic",
   "statement": "In the VMA estimation, the subtraction ORDER used for each principle (Trial 1 - Trial 2 or Trial 2 - Trial 1) provides the +/- values that result in the +/- CHANGE in VMA - choose the order so the sign matches the principle's direction of influence for the mix type.",
   "rationale": "Each principle has a defined direction (e.g., C-G: PCS down = VMA up; F-G: Original PCS up = VMA up), so the delta must be signed consistently for the contributions to total correctly.",
   "thresholds": null,
   "when_violated": "A principle's contribution enters the total with the wrong sign and the estimated VMA change is wrong in magnitude and possibly direction.",
   "context": "Highlighted (yellow box) on both the C-G and F-G estimation examples.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation",
    "sign-convention",
    "vma"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "127, 131"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-ac-01-mass-0225-volume",
   "type": "heuristic",
   "statement": "For 'normal' aggregate blends (Gsb ~2.600 to 2.700), 0.1% AC/Binder by MASS ~ 0.225% AC by VOLUME - this value is the ratio Gmb/Gb in decimal form; calculate it for your own mixes and compare.",
   "rationale": "Voids respond to binder VOLUME; the mass-to-volume conversion lets a Voids gap be translated into an AC/Binder content adjustment in tenths of a percent by weight.",
   "thresholds": {
    "gsb_range": "2.600-2.700",
    "conversion": "0.1% by mass ~ 0.225% by volume"
   },
   "when_violated": "AC adjustments computed by mass alone over- or under-shoot the Voids target, especially for blends with unusual Gsb.",
   "context": "AC adjustment (tenths by weight) = Voids difference / 0.225. Account for any expected Pba change.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "ac-adjustment",
    "voids",
    "gmb-gb",
    "rule-of-thumb"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "128"
   },
   "verified": true,
   "corroborated_by": [
    "day1-slide-139",
    "heur-gsb-pba-voids-spread-chain"
   ],
   "chunk": "1_5"
  },
  {
   "id": "heur-voids-target-01-adjust-ac",
   "type": "heuristic",
   "statement": "Accept estimated Voids that 'match' the target within +/-0.1%; if outside that, adjust the AC/Binder content for the next trial (difference / 0.225 = tenths of a percent by weight).",
   "rationale": "Once the estimated VMA is acceptable, Voids are steered with binder volume rather than more gradation change.",
   "thresholds": {
    "voids_tolerance_pct": 0.1
   },
   "when_violated": "Chasing small Voids differences with gradation changes destabilizes an otherwise-acceptable aggregate structure.",
   "context": "First confirm the estimated VMA is on target; then check Voids.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "voids",
    "target",
    "ac-adjustment"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "128"
   },
   "verified": false,
   "chunk": "1_5"
  },
  {
   "id": "heur-estimate-windage",
   "type": "heuristic",
   "statement": "If the proposed trial includes a change in aggregate SHAPE, TEXTURE and/or STRENGTH (not just gradation), include some 'windage' in the VMA estimate - the four-principle estimate only captures gradation change.",
   "rationale": "The estimation rules-of-thumb assume all packing factors except gradation are fairly consistent between trials; shape/texture/strength changes violate that assumption.",
   "thresholds": null,
   "when_violated": "Estimates miss when a new stockpile or source changes particle characteristics between trials.",
   "context": "VMA and Voids estimation.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation",
    "packing-factors",
    "windage"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "128"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-fg-no-new-faf-small-nmas",
   "type": "heuristic",
   "statement": "There is NO New FAf ratio for 4.75 mm (#4), 9.5 mm (3/8\") or 12.5 mm (1/2\") NMAS Fine-graded mixes, because the New TCS falls below the 0.075 mm (#200) sieve - only three principles are available for estimation.",
   "rationale": "New TCS = 0.22 x New SCS; for the three smallest NMAS sizes this computes below 0.075 mm, the finest standard sieve, so New FAf cannot be determined.",
   "thresholds": null,
   "when_violated": "Attempting to compute or match a New FAf for these sizes uses a sieve that doesn't exist in the gradation.",
   "context": "F-G blend evaluation and VMA estimation.",
   "mix_types": [
    "dense_fine_graded"
   ],
   "tags": [
    "fine-graded",
    "new-faf",
    "new-tcs",
    "nmas"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "08",
    "pages": "130-131"
   },
   "verified": true,
   "corroborated_by": [
    "ref-fg-blend-eval-sieves",
    "ref-cheatsheet-fg"
   ],
   "chunk": "1_5"
  },
  {
   "id": "heur-fg-estimate-as-cg-fallback",
   "type": "heuristic",
   "statement": "If a given Fine-graded mix does NOT estimate accurately as a Fine-graded mix, evaluate the data as a COARSE-graded mix for the SAME NMAS (or possibly the next SMALLER NMAS) and check the estimation from that point of view.",
   "rationale": "Some nominally Fine-graded mixes actually behave Coarse-graded (see the FG-acting-CG indicators); the estimation only works when the assumed mix type matches the mix's true packing behavior.",
   "thresholds": null,
   "when_violated": "Persisting with F-G rules-of-thumb on an FG-acting-CG mix produces estimates that repeatedly miss actual results.",
   "context": "Ties the estimation sheet to the FG-acting-CG indicator list (slide 105-108 discussion).",
   "mix_types": [
    "dense_fine_graded",
    "dense_coarse_graded"
   ],
   "tags": [
    "estimation",
    "fallback",
    "fg-acting-cg",
    "mix-type"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "09",
    "pages": "132"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-old-10pct-rule-cg",
   "type": "heuristic",
   "statement": "There MAY be instances where the 'old' 10% rule for defining NMAS works better than the 15% rule with COARSE-graded mixes - don't be afraid to evaluate the data as another NMAS to check which estimates better.",
   "rationale": "The NMAS choice sets all the control sieves; for borderline gradations, the alternate NMAS definition can align the principles better with the mix's actual packing.",
   "thresholds": {
    "bailey_rule_pct": 15,
    "old_rule_pct": 10
   },
   "when_violated": null,
   "context": "Estimation spreadsheet usage; especially important if the PCS changes.",
   "mix_types": [
    "dense_coarse_graded"
   ],
   "tags": [
    "nmas",
    "15-percent-rule",
    "10-percent-rule",
    "estimation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "133"
   },
   "verified": true,
   "corroborated_by": [
    "walk-est-ex05-shift-shape-texture"
   ],
   "chunk": "1_5"
  },
  {
   "id": "heur-design-gsb-field-vma",
   "type": "heuristic",
   "statement": "Generally the DESIGN Gsb works for determining FIELD VMA, but it may need adjusting if individual aggregate Gsb's have changed enough to significantly alter the combined Gsb, or if the aggregate blend percentages have changed significantly. Look at the field Pba values - NEGATIVE values are NOT possible.",
   "rationale": "Field VMA is computed with a Gsb; if the true combined Gsb has drifted from design, the computed VMA (and Pba) drift too - an impossible negative Pba is the tell-tale that the Gsb being used is wrong.",
   "thresholds": null,
   "when_violated": "Field VMA appears to change when it is actually the Gsb input that is wrong; negative Pba values get reported.",
   "context": "Gsb variability can be real (especially non-natural aggregates such as slag) or an artifact of the SSD-condition test procedure; the estimation sheet helps indicate when field Gsb is different vs. variable.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "gsb",
    "field-vma",
    "pba",
    "qc"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "133"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "heur-estimation-unique-sensitivity",
   "type": "heuristic",
   "statement": "It is NORMAL for each mix (of a given type and NMAS) to have a different degree of sensitivity to change in each principle - the rules-of-thumb are starting values because every mix has a unique combination of the five aggregate packing factors (gradation, type and amount of compactive effort, shape, texture, strength).",
   "rationale": "The per-1%-VMA amounts are averages; a mix's actual sensitivity emerges by comparing estimated vs. actual results over successive trials and production data.",
   "thresholds": null,
   "when_violated": "Treating the rules-of-thumb as exact constants leads to over-confidence in single-trial estimates.",
   "context": "Complements the guidance to calibrate the principles to your own existing mixes.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation",
    "sensitivity",
    "packing-factors",
    "calibration"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "134"
   },
   "verified": true,
   "chunk": "1_5"
  },
  {
   "id": "day1-slide-135",
   "type": "slide",
   "day": 1,
   "slide_number": 135,
   "slide_title": "Estimation Spreadsheet - Sensitivity Depends on Packing Factors",
   "slide_content": "The sensitivity of change in a given principle depends on the unique combination of aggregate packing factors. C-G mixes at 110% CA LUW are generally MORE sensitive to change in the PCS (e.g., 3% change in PCS = 1% VMA instead of 4%). F-G mixes with a LOW New FAc ratio (0.400 or less) are generally MORE sensitive to change in the New FAc ratio (e.g., 0.035 change in New FAc = 1% VMA instead of 0.05).",
   "instructor_notes": "Two examples of WHY a mix can be more sensitive to a principle. Example 1: as the CA CUW increases in a Coarse-graded mix, the mix becomes MORE sensitive to change in the volume of CA / % passing PCS, so the 4% rule-of-thumb may need to be decreased. Example 2: as the New FAc ratio decreases in a Fine-graded mix, sensitivity to change increases. The point: each mix is unique - its combination of the five packing factors can increase or decrease the sensitivity to change in any one or all four principles.",
   "key_callouts": [
    "C-G at 110% CA LUW: ~3% PCS change = 1% VMA",
    "F-G with New FAc <= 0.400: ~0.035 change = 1% VMA",
    "Each mix is unique"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded"
   ],
   "tags": [
    "estimation-sheet",
    "sensitivity",
    "rules-of-thumb"
   ],
   "related_ids": [
    "heur-sensitivity-shifts-with-packing",
    "heur-estimation-unique-sensitivity"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "135"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-136",
   "type": "slide",
   "day": 1,
   "slide_number": 136,
   "slide_title": "Estimation Spreadsheet - Typical Accuracy and What Throws Off VMA 0.5%",
   "slide_content": "Typically, 80% or more of the Sample to Previous Sample comparisons (VMA2 Previous graph) estimate VMA within +/-0.5% of the actual results. What could 'throw off' VMA by 0.5%? A Gsb change of 0.015 ~ 0.5% VMA; a Gmb change of 0.015 ~ 0.5% VMA; a 0.1% change in AC/Binder ~ 0.1% VMA (calculated).",
   "instructor_notes": "It is difficult with design trials to 'optimize' the estimation factors: normally there are not enough trials, trials often include significant shape/texture/strength differences, and in most labs the actual as-batched gradation is NOT determined for each trial. If you are able to optimize with design data, it's typically best NOT to adjust the min or max factor limits, EXCEPT for the FA DIP's. With production samples, ALWAYS optimize the factors - this may require adjusting one or more factor limits for that specific mix. As the number of samples increases, the optimized factors become more representative for that mix. Estimating within +/-0.5% may not sound close, but the combination of several SMALL issues (Gsb, Gmb, measured AC) can easily throw off the 'actual' VMA by 0.5% - and that's what the estimated VMA is being compared to.",
   "key_callouts": [
    "Goal: >= 80% of Sample-to-Previous comparisons within +/-0.5% VMA",
    "Gsb 0.015 ~ 0.5% VMA; Gmb 0.015 ~ 0.5% VMA; 0.1% AC ~ 0.1% VMA",
    "Design trials: don't adjust factor limits except FA DIPs; production: ALWAYS optimize"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "accuracy",
    "optimization",
    "gsb",
    "gmb"
   ],
   "related_ids": [
    "ref-vma-throwoff-05",
    "heur-optimize-production-always"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "136"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-137",
   "type": "slide",
   "day": 1,
   "slide_number": 137,
   "slide_title": "Estimation Spreadsheet - Sample Data Requirements",
   "slide_content": "Sample blending, splitting and testing determines whether or not the mix gradation and AC content 'represents' the volumetric properties achieved (VMA and Voids). Mix gradation and AC/Binder content MUST be determined from a portion of the mix sample used for determining the volumetric properties: ignition oven gradation only, or solvent extraction gradation only. Cold feeds, combined belts or hot bins will NOT work. Yellow box: do NOT mix gradations from 'dry' & 'washed' results, ignition ovens and extractions, multiple ignition ovens, or multiple auto extractors.",
   "instructor_notes": "Estimation accuracy relies on the gradation and AC content of a sample accurately relating to the actual volumetrics (Gmb and Gmm) of that same sample - so they MUST come from a portion of the same mix sample, and always the same test type. When using an ignition oven, consider calibrating for mass loss AND aggregate degradation so the oven gradation can be 'corrected'; the correction values directly impact the four principles. During calibration, batch an extra sample WITHOUT virgin AC and either wash (virgin mix) or extract (recycle mix) to determine the as-batched gradation; use it as the baseline to compare the average washed ignition-oven gradation to for determining correction values. In some instances, part of the breakdown seen in oven calibration may actually occur in the plant's drying drum, which may reduce oven degradation - if this is a concern, run side-by-side washed ignition oven and extracted samples from the SAME mix sample in the FIELD. With solvent extraction, correction factors may or may not be necessary depending on the method; also consider any NON-extractable AC portion. Cold feed, combined belt or hot bin gradations are important for QC but should NOT be used in the estimation sheet to represent a mix sample's gradation.",
   "key_callouts": [
    "Gradation and AC MUST come from a portion of the SAME mix sample used for volumetrics",
    "Same test type only - never mix ovens/extractions/dry/washed",
    "Cold feeds, belts, hot bins do NOT work",
    "Calibrate ignition oven for mass loss AND degradation"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "sampling",
    "ignition-oven",
    "extraction",
    "data-quality"
   ],
   "related_ids": [
    "heur-same-sample-same-test",
    "heur-ignition-oven-calibration"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "137"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-138",
   "type": "slide",
   "day": 1,
   "slide_number": 138,
   "slide_title": "Estimation Spreadsheet - Compactive Effort and the Three Dark Horses",
   "slide_content": "Variation in the type and amount of compactive effort: # gyrations, pressure, angle (external vs. internal), height, mold wear, mold temperature; # blows, hammer weight, drop height, base stiffness, temperature of base plate and mold; short-term aging, mix temperature, pill weight. Variation in shape, texture and/or strength: stockpile variation, changes in cold feed %'s. Also: the role of permeable voids in Gmb specimens in obtaining an accurate SSD weight.",
   "instructor_notes": "Compactive effort variation and its associated testing issues affect how representative the Gmb results are, which directly affects the 'actual' VMA. The three 'dark horses' that OFTEN play a key role in decreasing estimation accuracy are variation in the shape, texture and/or strength of the combined aggregate blend - these packing factors can NOT be seen in the four principles. When estimating volumetric changes based on gradation alone and there is variability in the other packing factors, it can be difficult to estimate accurately and understand why volumetrics are varying. Permeable voids in Gmb specimens (true SSD condition) can also throw off measured Gmb.",
   "key_callouts": [
    "Three 'dark horses': shape, texture, strength variation - invisible to the four principles",
    "Compactive effort details (gyratory and Marshall) all matter",
    "Permeable voids can corrupt the SSD weight and Gmb"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "compactive-effort",
    "packing-factors",
    "gmb",
    "ssd"
   ],
   "related_ids": [
    "heur-dark-horses-shape-texture-strength"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "138"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-139",
   "type": "slide",
   "day": 1,
   "slide_number": 139,
   "slide_title": "Estimation Spreadsheet - Voids Are More Variable Than VMA",
   "slide_content": "Generally, Voids are more variable than VMA because Voids are a function of Agg AND AC. Gsb: 0.015 ~ 0.20-0.25% Pba ~ 0.45-0.6% Voids. Gmm: 0.015 ~ 0.25% Pba ~ 0.6% Voids. AC/Binder: 0.1% ~ 0.20-0.25% Voids.",
   "instructor_notes": "Two basic components of an asphalt mix: aggregate and AC/Binder. VMA is primarily a function of the aggregate; Voids are a function of BOTH, so it is normal to see more variation in Voids than VMA, and Voids are generally more difficult to estimate. When estimating Voids we consider the Bailey principle changes PLUS the change in effective AC/Binder VOLUME. Each item on this slide impacts the calculated effective AC/Binder volume. Example: being off 0.1% by mass on the AC content translates to ~0.225% by volume of Voids for most normal blends (Gsb ~2.600-2.700). Therefore the estimated Voids will often be 0.1% to 0.2% further away from the actual Voids than the estimated VMA is from the actual VMA.",
   "key_callouts": [
    "Voids = f(Agg AND AC) -> more variable than VMA",
    "Gsb 0.015 ~ 0.45-0.6% Voids; Gmm 0.015 ~ 0.6% Voids; 0.1% AC ~ 0.20-0.25% Voids",
    "Estimated Voids often 0.1-0.2% further from actual than estimated VMA"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "voids",
    "variability",
    "gsb",
    "gmm",
    "pba"
   ],
   "related_ids": [
    "ref-voids-variability-rules",
    "heur-voids-more-variable"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "139"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-140",
   "type": "slide",
   "day": 1,
   "slide_number": 140,
   "slide_title": "Estimation Spreadsheet - Why It Works",
   "slide_content": "How often are ALL of these things under control? How can we typically estimate VMA within +/-0.5% of the actual results 80% or more of the time? Because there's LESS variation in these things than we think - and gradation changes account for MOST of the VMA change that we deal with on a daily basis.",
   "instructor_notes": "If all of the confounding factors are seldom completely under control, the estimation still works because there is less variation in them than we think, and because MOST of the variability that occurs in VMA can be attributed to GRADATION changes - which is exactly what the Bailey Method principles focus on.",
   "key_callouts": [
    "Gradation changes account for MOST of daily VMA change",
    "That is what the Bailey principles focus on"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "gradation",
    "vma",
    "philosophy"
   ],
   "related_ids": [
    "heur-gradation-drives-vma"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "140"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-141",
   "type": "slide",
   "day": 1,
   "slide_number": 141,
   "slide_title": "Estimation Spreadsheet - Setup (Tabs 11, 12A, 12B, 13)",
   "slide_content": "Proper calculation of the four principles for the CORRECT mix type and NMAS. Rules-of-thumb for 1% change in VMA: amount of change and direction of change. 'You have to know where you are, to get where you want to go!' Let's look at the Estimation spreadsheet and a few examples.",
   "instructor_notes": "When estimating the change in VMA between design trials or field samples, first know the mix NMAS and type (F-G, C-G or SMA), then apply the correct principles and rules-of-thumb for that type. Look at both the amount AND direction of change. For Voids, also account for the change in effective AC/Binder VOLUME (convert effective AC weight change to volume, add to the estimated VMA change). It is extremely important to have accurate results on the original design trial or field sample, and to accurately batch/handle/test the next trial or sample. The estimation spreadsheet walkthrough uses the same 'hand calc' data from Tab 9, plus examples of accuracy and a way to review multiple proposed blends.",
   "key_callouts": [
    "Correct mix type and NMAS first",
    "Amount AND direction of change",
    "Voids need effective AC volume change too"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "tab-11",
    "tab-12a",
    "tab-12b",
    "tab-13"
   ],
   "related_ids": [
    "proc-estimate-vma-voids"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "11",
    "pages": "141"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-142",
   "type": "slide",
   "day": 1,
   "slide_number": 142,
   "slide_title": "Estimation Spreadsheet - Examples For You to Evaluate",
   "slide_content": "Title slide: 'Examples For You to Evaluate...' The following examples, included on the class USBs, more clearly explain how to use the VMA and Voids Estimation sheet and how to interpret the results.",
   "instructor_notes": "Transition slide into the eight worked estimation-sheet examples on the class USB.",
   "key_callouts": [
    "Examples are on the class USB"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "examples"
   ],
   "related_ids": [],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "11",
    "pages": "142"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-143",
   "type": "slide",
   "day": 1,
   "slide_number": 143,
   "slide_title": "Estimation Spreadsheet - Example List and Reference Documents (Tabs 14, 15)",
   "slide_content": "Example set: 01 Close with Rules-of-Thumb; 02 Wrong Mix Type and Size; 03 Importance of Determining FA Dip's; 04 Questionable Samples; 05 Shape, Texture and/or Strength SHIFT (includes gradation and AC content trend example); 06 Gsb Gravity Issue; 07 Adjusting AC Volume Correction for Voids; 08 Evaluating a Proposed Blend Adjustment. Tab 14 is a Word document with notes explaining the step-by-step evaluation process for these examples. Tab 15 is a Word document that explains the overall use of the VMA and Voids Estimation sheet. Yellow box: please READ the Tab 15 document and use it as a reference when using the VMA and Voids Estimation spreadsheet.",
   "instructor_notes": "The eight examples cover the main interpretation scenarios. Tab 14 = step-by-step notes for the examples; Tab 15 = overall usage reference for the estimation sheet - read it and keep it as the reference.",
   "key_callouts": [
    "Eight example scenarios (01-08)",
    "Tab 14: step-by-step notes; Tab 15: overall use - READ IT"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "examples",
    "tab-14",
    "tab-15"
   ],
   "related_ids": [],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "143"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-144",
   "type": "slide",
   "day": 1,
   "slide_number": 144,
   "slide_title": "Estimation Spreadsheet - Interpreting the Results (Title)",
   "slide_content": "Title slide: 'Interpreting the Results...'",
   "instructor_notes": "Transition into the graph-interpretation slides (VMA1, Voids1, VMA2, Voids2 and things to watch for).",
   "key_callouts": [],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "interpretation"
   ],
   "related_ids": [],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "144"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-145",
   "type": "slide",
   "day": 1,
   "slide_number": 145,
   "slide_title": "Interpreting the VMA1 Graph (Sample to Design)",
   "slide_content": "VMA1 graph (Sample to Design): 'shifts' often indicate changes in shape, texture and/or strength of the aggregate blend; 'questionable' samples stand out from those on each side (left and right). POSITIVE values (> 0.0) are normal - reduction in shape and/or texture through the plant; should NOT see this in mix design trials! NEGATIVE values (< 0.0) are unusual - as-batched blend different than DMF? Improvement in shape, texture and/or strength? Change in the type and amount of compactive effort in field vs. mix design (different compactor?).",
   "instructor_notes": "The VMA1 bar chart plots the difference between estimated and actual VMA based on the principle differences for each sample compared to the DESIGN. Two sets of values are shown - 'Original' factors and 'Adjusted' factors; after optimizing, both sets are set to the same optimized values (either can be re-set to rules-of-thumb for comparison). It is normal for 'Diff in VMA' to be positive (estimated > actual): experience shows shape and texture typically REDUCE through an asphalt plant vs. the lab mixing process, contributing to additional aggregate packing (VMA collapse) in the field. This is NOT true for mix design trials. Negative values are unusual but possible: as-batched lab blend in the design different from the DMF target, improved shape/texture/strength in the field, or different compactive effort/compactor between design and field. Shifts can also be related to testing personnel or equipment.",
   "key_callouts": [
    "Positive Diff in VMA is normal in production (field VMA collapse)",
    "Should NOT see positive bias in design trials",
    "Negative values: check as-batched vs DMF, shape/texture/strength improvement, compactor change"
   ],
   "formulas": [],
   "figures": [
    "VMA1 bar chart"
   ],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "vma1",
    "sample-to-design",
    "interpretation"
   ],
   "related_ids": [
    "heur-vma1-positive-normal"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "145"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-146",
   "type": "slide",
   "day": 1,
   "slide_number": 146,
   "slide_title": "Interpreting the Voids1 Graph (Sample to Design)",
   "slide_content": "Voids1 graph (Sample to Design): Voids estimation includes changes due to gradation PLUS the change in 'effective' AC/Binder VOLUME. The 'spread' between Diff in VMA and Diff in Voids should be <= 0.2%. Larger differences (> 0.2%) may indicate: Gsb in field is DIFFERENT than design Gsb; Gsb in field is VARIABLE; verify corresponding AC/Binder and Gmm values; adjust the AC Volume Correction Factor?",
   "instructor_notes": "Compare Voids1 to VMA1 to see if the change in effective AC/Binder volume is being accounted for accurately. For a given sample, 'Diff in Voids' vs 'Diff in VMA' should be within ~0.2% or less (normally Diff in Voids is larger since Voids are more variable). If the FIELD Gsb is different but CONSISTENT, the difference between the graphs stays fairly consistent (e.g., 0.4-0.5% different but consistent). If the FIELD Gsb is VARIABLE, the calculated absorption is incorrect for virtually every sample and the difference constantly varies - a much more difficult situation, VERY unusual with natural aggregates. Also consider AC content and Gmm measurement problems, or adjusting the AC Volume Correction Factor. Yellow box: watch for NEGATIVE Pba values on the estimation sheet - they indicate a potentially HIGH Gsb, LOW Gmm, LOW measured AC/Binder content, or an AC Volume Correction factor that needs adjusting (generally 2.25 works well).",
   "key_callouts": [
    "Spread between Diff in VMA and Diff in Voids should be <= 0.2%",
    "Consistent larger spread = field Gsb different; varying spread = field Gsb variable",
    "Negative Pba: HIGH Gsb / LOW Gmm / LOW AC / adjust ACVC (2.25 generally works)"
   ],
   "formulas": [],
   "figures": [
    "Voids1 bar chart"
   ],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "voids1",
    "gsb",
    "pba",
    "ac-volume-correction"
   ],
   "related_ids": [
    "heur-voids-vma-spread-02",
    "heur-negative-pba-acvc"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "146"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-147",
   "type": "slide",
   "day": 1,
   "slide_number": 147,
   "slide_title": "Interpreting the VMA2 Graph (Sample to Previous Sample)",
   "slide_content": "VMA2 graph (Sample to Previous Sample) is the main graph indicating estimation ACCURACY. Typically, at least 80% of values should be +/-0.5%. Values >= 1.0% should be toggled out, but ONLY after optimizing first (see Tab 15). 'Questionable' samples will be followed by a value that is also 'large' but OPPOSITE - toggle out BOTH values and re-optimize. 'Shifts' in shape, texture and/or strength will be followed by a value that is CLOSE - toggle out the single value and re-optimize.",
   "instructor_notes": "The Diff in VMA (Sample to Previous Sample) values control the optimization process, so this graph is the main accuracy indicator. A 0.0% difference for all is unrealistic; the goal is at least 80% within +/-0.5% after optimizing. Values >= 1.0% are toggled out on the Main tab, Diff in VMA row, upper (Original factors) set - ONLY after optimizing at least once. A 'questionable' sample shows a large difference followed by a large-but-opposite difference: toggle out both (or remove the sample and shift the following samples left one column). A 'shift' shows one sample that is 'off' followed by a sample that compares well to it - the previous sample wasn't bad, it was different (shape/texture/strength, or test equipment/personnel changes): toggle out the single 'off' sample and re-optimize. Yellow box: after optimizing each time, ALWAYS re-evaluate previously toggled-out samples to see if they can be re-introduced; additional samples needing toggling may also stand out after a given optimization.",
   "key_callouts": [
    "VMA2 controls optimization - main accuracy indicator",
    "Toggle out >= 1.0% values ONLY after optimizing first",
    "Questionable = large + large-opposite pair (toggle both); shift = off value followed by close value (toggle one)",
    "Always re-evaluate toggled samples after each optimization"
   ],
   "formulas": [],
   "figures": [
    "VMA2 bar chart"
   ],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "vma2",
    "optimization",
    "toggling"
   ],
   "related_ids": [
    "proc-estimation-sheet-optimization",
    "heur-vma2-accuracy-80-05"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "147"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-148",
   "type": "slide",
   "day": 1,
   "slide_number": 148,
   "slide_title": "Interpreting the Voids2 Graph (Sample to Previous Sample)",
   "slide_content": "Voids2 graph (Sample to Previous Sample): values SIMILAR (<= 0.2%) to the VMA2 values generally indicate the FIELD Gsb is CONSISTENT. Values DIFFERENT (> 0.2%) than the VMA2 values may indicate the FIELD Gsb is VARIABLE - should coincide with Voids1 graph values that are more variable than VMA1 values. Verify corresponding AC/Binder and Gmm values; adjust the AC Volume Correction Factor?",
   "instructor_notes": "Same structure as VMA2 but for Voids (gradation change plus effective AC/Binder volume change, sample to previous sample). Compare to VMA2 to check whether effective AC volume is being accounted for accurately. Diff in Voids is normally somewhat larger than Diff in VMA since Voids are more variable. A variable field Gsb makes calculated absorption wrong on virtually every sample - very unusual with natural aggregates. Also consider AC content and Gmm measurement problems and the AC Volume Correction Factor. Repeat warning: negative Pba values indicate potentially HIGH Gsb, LOW Gmm, LOW measured AC content, or an ACVC factor needing adjustment (generally 2.25 works well).",
   "key_callouts": [
    "Voids2 similar to VMA2 (<= 0.2%) = field Gsb consistent",
    "Voids2 different (> 0.2%) = field Gsb possibly variable",
    "Negative Pba warning repeated"
   ],
   "formulas": [],
   "figures": [
    "Voids2 bar chart"
   ],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "voids2",
    "gsb",
    "pba"
   ],
   "related_ids": [
    "heur-voids-vma-spread-02",
    "heur-negative-pba-acvc"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "148"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-149",
   "type": "slide",
   "day": 1,
   "slide_number": 149,
   "slide_title": "Things to Watch For - Multiple Locations and QC vs QA",
   "slide_content": "Samples taken from multiple locations, such as truck and mat, CAN be entered side-by-side. When evaluating QC and QA samples, place each set on a SEPARATE sheet: if one estimates well and the other doesn't, investigate INCONSISTENCY in sample handling, testing procedures, equipment operation, etc.; if each estimates well but there are differences in test results, investigate DIFFERENCES in sample handling, testing procedures, equipment differences, calibration issues, etc.",
   "instructor_notes": "Samples from different locations (truck at plant vs. behind the paver) can be entered side-by-side. For QC vs QA: enter each data set on a separate spreadsheet and see if each estimates accurately. One estimating well and the other not = somebody or some equipment is INCONSISTENT. Both estimating well but with different results (Gmb, Gmm, AC content) = things are being done consistently but the process or equipment is CONSISTENTLY DIFFERENT (reheating, blending, splitting, calibration). Also consider where and how the samples were obtained: single sample split into QC/QA portions or two different samples? Different locations, people, sampling methods, reheating?",
   "key_callouts": [
    "QC and QA sets on SEPARATE sheets",
    "One estimates well, other doesn't = inconsistency; both estimate well but differ = consistent difference",
    "Consider where/how samples were obtained"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "qc-qa",
    "troubleshooting"
   ],
   "related_ids": [
    "heur-qc-qa-separate-sheets"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "149"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-150",
   "type": "slide",
   "day": 1,
   "slide_number": 150,
   "slide_title": "Things to Watch For - FA Dips, Red-Background Principle, Negative Pba",
   "slide_content": "Watch: FA Dip limits vs. range of actual FA ratio values. The individual principle with a RED background in the calculation area indicates the MAX change of the four principles - it points out which principle needs to be controlled better; the highlighted principle SHOULD vary, so look for trends! Other cells: BLUE highlighted background = value is LOW; RED highlighted background = value is HIGH. Negative Pba values indicate: HIGH Gsb, LOW Gmm, LOW AC/Binder content measurement, or the AC Volume Correction factor needs adjusting. Also watch the 'spread' between Diff in VMA and Diff in Voids.",
   "instructor_notes": "Pay attention to the range of actual FA ratio values vs. the FA Dip limits (Min and Max). Occasionally a limit needs lowered or raised - but ONLY if the optimized FA Dip value STOPS at the limit (the FA Dip background highlights blue or red and a message displays after optimization). If ALL actual FA ratio values fall outside the Dip limits, consider slightly adjusting the appropriate limit to get some actual values within the limits so the optimization macro can determine if the FA Dip differs from the rule-of-thumb - but be careful: if the actual values are WELL below (e.g., 0.211-0.323 vs. 0.450-0.650 for a C-G mix) or well above, it may NOT be realistic for a FA Dip to occur in that range. The red-highlighted principle (largest VMA change, Sample to Previous) should vary between samples; if it is consistently the SAME principle for several samples, use that to understand which principle needs better control during production.",
   "key_callouts": [
    "Red-background principle = largest VMA change; consistent repeats reveal what to control better",
    "Adjust a FA Dip limit only if the optimized value stops at the limit",
    "Actual FA ratios well outside dip range = a dip there may not be realistic"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "fa-dips",
    "conditional-formatting",
    "pba",
    "trends"
   ],
   "related_ids": [
    "heur-red-principle-trend",
    "heur-negative-pba-acvc",
    "heur-fa-dip-limit-adjust"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "150"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-151",
   "type": "slide",
   "day": 1,
   "slide_number": 151,
   "slide_title": "Things to Watch For - Gmb/Gmm Spreads and Standard Deviations",
   "slide_content": "Enter ALL Gmb's and Gmm's for each sample (the sheet accepts up to three Gmb's and two Gmm's). Pay attention to Min and Max values: 0.010 or less spread is normal for Gmb's (less for Gmm's!); spreads greater than this influence the 'average'. Relate the Std Dev of Diff in VMA and Diff in Voids to proposed blend and/or AC changes: +/-1 Std Dev ~ 68% of samples; +/-2 Std Dev ~ 95%; +/-3 Std Dev ~ 98%.",
   "instructor_notes": "Enter ALL results when multiple tests are performed. An excessive Gmb spread (> 0.020?) influences the average Gmb used to calculate actual VMA and can make the ESTIMATED VMA 'appear' wrong when the Gmb results are the problem - also use this to find issues in sample handling, testing procedures and equipment. The Std Dev of Diff in VMA (Sample to Previous) is shown in the optimization area and is used by the optimize macros when there are six (6) or more comparisons - lower is better. The Std Dev for Diff in Voids is shown but NOT used by the macros; still, lower is better, and it CAN guide adjusting the AC volume correction factor on occasion for mixes with light or heavy aggregates (Gsb) to more accurately convert effective AC content from mass to volume. Yellow box: also evaluate the 'Average Diff' in VMA in the optimization area (Original and Adjusted - same after optimizing). These should generally be LESS than the corresponding Std Dev AND around 0.150 or less - typically less than 0.100. Higher values MAY indicate the need to evaluate from the 'Better vs. Worse' point of view, a function of the 'TotalMinStdDev' cell located about 100 rows below the optimization area - consider increasing it to 10 or so, re-optimize, and see if the Average Diff values decrease to 0.150 or less.",
   "key_callouts": [
    "Enter ALL Gmb's (up to 3) and Gmm's (up to 2)",
    "Normal spread: <= 0.010 for Gmb, less for Gmm; > 0.020 is excessive",
    "Optimize macros use Std Dev of Diff in VMA when >= 6 comparisons",
    "Average Diff should be < Std Dev and <= 0.150 (typically < 0.100)"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "gmb",
    "gmm",
    "std-dev",
    "optimization"
   ],
   "related_ids": [
    "heur-gmb-spread-limits",
    "heur-average-diff-0150"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "151"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-152",
   "type": "slide",
   "day": 1,
   "slide_number": 152,
   "slide_title": "Things to Watch For - Gradation and AC Content Should NOT Track",
   "slide_content": "Gradation and AC content should NOT track! Is there evidence of segregated samples (mix or recycle)? Watch for trends on the PCS and AC graph. When a trend is evident: if a sample estimates well, it was NOT segregated in the lab! Determine WHERE segregation is taking place and get it corrected, because it is affecting your sample results and your pay!",
   "instructor_notes": "Gradation and AC content should be independent; a trend between them indicates segregated samples - unless a sample clearly mirrors the target gradation and AC vs. its neighbors. The same evaluation applies to individual recycle stockpiles: if gradation and AC track for a recycle stockpile, ask whether that is representative variability or segregated sampling. The estimation sheet includes four graphs (1.18 mm & AC, 2.36 mm & AC, 4.75 mm & AC, 9.5 mm & AC); generally the graph corresponding to the PCS of the mix (or recycle product) works best. Locating the segregation: a sample that estimates well (within +/-0.5%) could NOT have been segregated in the lab - it was segregated before delivery. A sample that does NOT estimate well but shows a gradation-AC relationship may have been segregated in the lab (or there was a shape/texture/strength or compactive-effort change). Segregated samples do NOT represent the mix actually produced - do NOT reference their results, including for evaluating proposed blend adjustments with the estimation sheet. These same QC/QA results often drive specification compliance with bonuses/penalties tied to consistency - is segregation causing variability in your sample results? Recognize segregated samples and address them immediately.",
   "key_callouts": [
    "Gradation-AC tracking = segregated samples",
    "Sample that estimates well was NOT segregated in the lab",
    "Segregated samples don't represent production - never reference them",
    "Segregation affects results AND pay"
   ],
   "formulas": [],
   "figures": [
    "PCS vs AC trend graphs (1.18/2.36/4.75/9.5 mm & AC)"
   ],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "segregation",
    "qc",
    "gradation",
    "ac-content",
    "pay-factors"
   ],
   "related_ids": [
    "heur-gradation-ac-not-track",
    "heur-segregated-samples-not-referenced"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "152"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-153",
   "type": "slide",
   "day": 1,
   "slide_number": 153,
   "slide_title": "Things to Watch For - Established Optimization Limits",
   "slide_content": "There are 'established limits' for optimizing: the amount of change in each of the four principles corresponding to a 1% change in VMA, and where the FA Dips typically occur. It's OK to adjust a Min or Max limit SLIGHTLY to obtain a better (lower Std Dev) optimization, but be careful: most often it will be a FA Dip limit that needs adjusting; OK to adjust a FA Dip limit during both design and production; typically best NOT to adjust a principle limit during the design; keep each adjusted limit reasonable; adjust ONLY one factor limit at a time and look for a DECREASE in Std Dev of at least 0.050 for that individual limit change. Limits (typical range, with hard bounds in parentheses): PCS (+/-1.0% from rule-of-thumb): F-G 5.0-7.0% (4.0-8.0%), C-G 3.0-5.0% (2.0-6.0%), SMA 1.0-3.0% (0.5-4.0%). CA/New CA ratio (+/-0.1): C-G or SMA 0.1-0.3 (0.05-0.4), F-G 0.25-0.45 (0.15-0.55). FAc/New FAc ratio (+/-0.025): C-G or F-G 0.025-0.075 (0.010-0.100), SMA 0.075-0.125 (0.050-0.150). FAc DIP (+/-0.1): F-G 0.40-0.60 (0.30-0.70), C-G 0.45-0.65 (0.35-0.75), SMA 0.55-0.75 (0.45-0.85). FAf/New FAf ratio (+/-0.025): C-G or F-G 0.025-0.075 (0.010-0.100), SMA 0.075-0.125 (0.050-0.150). FAf DIP (+/-0.1): F-G 0.40-0.60 (0.30-0.70), C-G 0.45-0.65 (0.35-0.75), SMA 0.60-0.80 (0.50-0.90). NEVER adjust BOTH limits for any factor - just Min or Max, whichever is appropriate. Do NOT exceed the highlighted (hard bound) values. The FA DIPs are the limits that MOST OFTEN need adjusting and are very important. Pay attention to whether actual FA ratios are outside the FA DIP limits yet CLOSE vs. WELL AWAY (e.g., actual FAf 0.382-0.437 vs. limits 0.45-0.65 = close; actual 0.231-0.262 vs. 0.45-0.65 = well away).",
   "instructor_notes": "These limits appear in the notes and in the Optimization area on the Main tab. Adjust one factor limit at a time; keep it reasonable; look for at least a 0.050 Std Dev improvement for each individual limit change.",
   "key_callouts": [
    "Adjust ONE limit at a time; require Std Dev decrease >= 0.050",
    "NEVER adjust both Min and Max of the same factor",
    "FA DIP limits are the most often adjusted and very important",
    "Principle limits: leave alone during design"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "optimization",
    "limits",
    "fa-dips"
   ],
   "related_ids": [
    "ref-estimation-optimization-limits",
    "heur-adjust-one-limit-stddev-0050"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "153"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-154",
   "type": "slide",
   "day": 1,
   "slide_number": 154,
   "slide_title": "The Four Principles - Summary",
   "slide_content": "1. % PCS (Volume of CA): increase/decrease in VMA depends on mix type. 2. CA ratio (control with CA volume blend): low values can be susceptible to segregation; high values can be difficult to compact; as it increases, VMA increases. 3. FAc ratio (control with FA volume blend): as it increases, VMA decreases until it crosses the 'Dip' - then VMA will begin to INCREASE as the ratio increases. 4. FAf ratio (control with amount of dust): as it increases, VMA decreases until it crosses the 'Dip' - then VMA will begin to INCREASE as the ratio increases.",
   "instructor_notes": "Summary of the four Bailey principles. Don't change ONE without determining if it alters any of the other THREE. The % passing the Original PCS is a function of the CA volume and relates to mix type. The CA ratio relates to the compactability of the coarse fraction and affects packing in the fine fraction, plus segregation susceptibility. FAc relates to compactability of the overall fine fraction; FAf to the fine part of the fine fraction. Both FA ratios reverse their VMA effect after crossing their Dip. For Voids, also account for change in effective AC/Binder VOLUME in addition to VMA change.",
   "key_callouts": [
    "Don't change one principle without checking the other three",
    "CA ratio: low = segregation risk, high = compaction difficulty",
    "FA ratios reverse VMA direction after crossing the Dip",
    "Each principle controlled by a specific lever: CA volume blend, FA volume blend, dust"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "four-principles",
    "summary",
    "vma",
    "dips"
   ],
   "related_ids": [
    "heur-principles-interlinked",
    "heur-fac-dip-cg",
    "heur-faf-dip-cg"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "154"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-155",
   "type": "slide",
   "day": 1,
   "slide_number": 155,
   "slide_title": "How Does the Method Help?",
   "slide_content": "Evaluating EXISTING blends: what's worked and what hasn't; more clearly define principle ranges. Developing NEW blends: field compactability, segregation susceptibility, mix adjustability. ESTIMATING VMA/Void changes: between design trials, between QC and/or QA samples, for PROPOSED blend changes. Saves time and reduces risk! Performance properties...",
   "instructor_notes": "Use the Bailey Method on existing mixes (designs and production results) to understand why some work well and others are problems - your aggregates may need the suggested principle ranges adjusted slightly. A mix design isn't just a starting point: relating the principles to expected compactability and segregation susceptibility lets you design the TYPE of mix you want (if aggregates, economics and specs allow) and get similar field results if you reproduce that mix. Things change from design to field, but the same four principles still apply in the field - use them to make the right adjustments to maintain volumetrics, compactability and lack of segregation susceptibility, to the extent the materials allow. Simply put: the Bailey Method saves time and reduces risk. Altering performance properties with the Bailey Method is the next big challenge.",
   "key_callouts": [
    "Calibrate principle ranges to your own aggregates",
    "Same four principles apply in the field",
    "Saves time and reduces risk"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "summary",
    "value-proposition",
    "field"
   ],
   "related_ids": [
    "heur-calibrate-to-existing-mixes"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "155"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "day1-slide-156",
   "type": "slide",
   "day": 1,
   "slide_number": 156,
   "slide_title": "Final Questions or Comments - Contact",
   "slide_content": "Thank You! Please send data! Bill Pine, Heritage Construction & Materials. Cell: (217) 840-4173. E-mail: billp@thgrp.com. 'PLEASE SEND ME DATA! VBS and ESTIMATION Spreadsheets.'",
   "instructor_notes": "Closing slide. Contact Bill Pine with questions on understanding and utilizing the Bailey Method principles; he requests users send VBS and Estimation spreadsheet data.",
   "key_callouts": [
    "Instructor contact: Bill Pine, Heritage Construction & Materials"
   ],
   "formulas": [],
   "figures": [],
   "mix_types": [],
   "tags": [
    "contact",
    "closing"
   ],
   "related_ids": [],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "156"
   },
   "verified": true,
   "corroborated_by": [
    "ref-author-contact-tab15"
   ],
   "chunk": "1_6"
  },
  {
   "id": "ref-vma-throwoff-05",
   "type": "reference_table",
   "title": "Measurement Changes That Alter 'Actual' VMA by ~0.5% (or 0.1%)",
   "table_kind": "rules_of_thumb",
   "applies_to": "Judging estimation accuracy - what the estimated VMA is being compared against",
   "columns": [
    "quantity",
    "change",
    "approx_vma_effect"
   ],
   "rows": [
    {
     "quantity": "Gsb",
     "change": "0.015",
     "approx_vma_effect": "~0.5% VMA"
    },
    {
     "quantity": "Gmb",
     "change": "0.015",
     "approx_vma_effect": "~0.5% VMA"
    },
    {
     "quantity": "Measured AC/Binder content",
     "change": "0.1%",
     "approx_vma_effect": "~0.1% VMA (calculated)"
    }
   ],
   "footnotes": [
    "The combination of several SMALL issues can easily throw off the 'actual' VMA by 0.5% - which is what the estimated VMA is compared to",
    "Hence estimating within +/-0.5% for 80%+ of Sample-to-Previous comparisons is a strong result"
   ],
   "tags": [
    "vma",
    "accuracy",
    "gsb",
    "gmb",
    "ac-content"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "136"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "ref-voids-variability-rules",
   "type": "reference_table",
   "title": "Effect of Gsb, Gmm and AC Changes on Pba and Voids",
   "table_kind": "rules_of_thumb",
   "applies_to": "Estimating Voids - accuracy of effective AC/Binder volume",
   "columns": [
    "quantity",
    "change",
    "approx_pba_effect",
    "approx_voids_effect"
   ],
   "rows": [
    {
     "quantity": "Gsb",
     "change": "0.015",
     "approx_pba_effect": "~0.20-0.25% Pba",
     "approx_voids_effect": "~0.45-0.6% Voids"
    },
    {
     "quantity": "Gmm",
     "change": "0.015",
     "approx_pba_effect": "~0.25% Pba",
     "approx_voids_effect": "~0.6% Voids"
    },
    {
     "quantity": "AC/Binder content",
     "change": "0.1%",
     "approx_pba_effect": null,
     "approx_voids_effect": "~0.20-0.25% Voids"
    }
   ],
   "footnotes": [
    "Voids are a function of aggregate AND AC, so Voids are more variable and harder to estimate than VMA",
    "Estimated Voids will often be 0.1-0.2% further from actual than estimated VMA is from actual VMA"
   ],
   "tags": [
    "voids",
    "pba",
    "gsb",
    "gmm",
    "variability"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "139"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "ref-estimation-optimization-limits",
   "type": "reference_table",
   "title": "Established Limits for Optimizing the Estimation Sheet Factors",
   "table_kind": "limits",
   "applies_to": "VMA and Voids Estimation sheet optimization (Main tab, Optimization area)",
   "columns": [
    "factor",
    "fine_graded_typical",
    "coarse_graded_typical",
    "sma_typical",
    "fine_graded_hard_bound",
    "coarse_graded_hard_bound",
    "sma_hard_bound"
   ],
   "rows": [
    {
     "factor": "PCS amount per 1% VMA (+/-1.0% from rule-of-thumb)",
     "fine_graded_typical": "5.0-7.0%",
     "coarse_graded_typical": "3.0-5.0%",
     "sma_typical": "1.0-3.0%",
     "fine_graded_hard_bound": "4.0-8.0%",
     "coarse_graded_hard_bound": "2.0-6.0%",
     "sma_hard_bound": "0.5-4.0%"
    },
    {
     "factor": "CA / New CA ratio per 1% VMA (+/-0.1)",
     "fine_graded_typical": "0.25-0.45",
     "coarse_graded_typical": "0.1-0.3",
     "sma_typical": "0.1-0.3",
     "fine_graded_hard_bound": "0.15-0.55",
     "coarse_graded_hard_bound": "0.05-0.4",
     "sma_hard_bound": "0.05-0.4"
    },
    {
     "factor": "FAc / New FAc ratio per 1% VMA (+/-0.025)",
     "fine_graded_typical": "0.025-0.075",
     "coarse_graded_typical": "0.025-0.075",
     "sma_typical": "0.075-0.125",
     "fine_graded_hard_bound": "0.010-0.100",
     "coarse_graded_hard_bound": "0.010-0.100",
     "sma_hard_bound": "0.050-0.150"
    },
    {
     "factor": "FAc DIP / New FAc DIP (+/-0.1)",
     "fine_graded_typical": "0.40-0.60",
     "coarse_graded_typical": "0.45-0.65",
     "sma_typical": "0.55-0.75",
     "fine_graded_hard_bound": "0.30-0.70",
     "coarse_graded_hard_bound": "0.35-0.75",
     "sma_hard_bound": "0.45-0.85"
    },
    {
     "factor": "FAf / New FAf ratio per 1% VMA (+/-0.025)",
     "fine_graded_typical": "0.025-0.075",
     "coarse_graded_typical": "0.025-0.075",
     "sma_typical": "0.075-0.125",
     "fine_graded_hard_bound": "0.010-0.100",
     "coarse_graded_hard_bound": "0.010-0.100",
     "sma_hard_bound": "0.050-0.150"
    },
    {
     "factor": "FAf DIP / New FAf DIP (+/-0.1)",
     "fine_graded_typical": "0.40-0.60",
     "coarse_graded_typical": "0.45-0.65",
     "sma_typical": "0.60-0.80",
     "fine_graded_hard_bound": "0.30-0.70",
     "coarse_graded_hard_bound": "0.35-0.75",
     "sma_hard_bound": "0.50-0.90"
    }
   ],
   "footnotes": [
    "NEVER adjust BOTH limits for any given factor - just Min or Max, whichever is appropriate",
    "Do NOT exceed the hard-bound values",
    "FA DIPs are the limits that most often need adjusting",
    "Adjust only one factor limit at a time; look for a Std Dev decrease of at least 0.050 for that individual change",
    "Typically best NOT to adjust a principle limit during design; FA Dip limits may be adjusted during both design and production"
   ],
   "tags": [
    "estimation-sheet",
    "optimization",
    "limits",
    "fa-dips"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "153"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "proc-estimation-sheet-optimization",
   "type": "procedure",
   "title": "Optimizing the VMA and Voids Estimation Sheet with Production Data",
   "purpose": "Tune the per-mix sensitivity factors so the estimation reflects the mix's actual behavior; the optimized factors become more representative as samples accumulate.",
   "prerequisites": [
    "Production samples entered with gradation and AC from the same mix sample as the volumetrics (same test type only)",
    "All Gmb's and Gmm's entered for each sample",
    "At least six Sample-to-Previous-Sample comparisons for the optimize macros to use the Std Dev of Diff in VMA"
   ],
   "steps": [
    {
     "step_number": 1,
     "title": "Optimize first",
     "instruction": "Run the optimization at least once BEFORE toggling anything out. The Diff in VMA (Sample to Previous Sample) values control the optimization; lower Std Dev is better.",
     "formula": null,
     "notes": "With design trials there are normally too few points to optimize; if you do, adjust no factor limits except the FA Dips."
    },
    {
     "step_number": 2,
     "title": "Toggle out large values",
     "instruction": "After optimizing, toggle out Diff in VMA values >= 1.0% on the Main tab (Diff in VMA row, Sample to Previous Sample, upper/Original factor set).",
     "formula": null,
     "notes": "See the Tab 15 document for details."
    },
    {
     "step_number": 3,
     "title": "Handle questionable samples",
     "instruction": "A 'questionable' sample (large difference >= 1.0% followed by a large-but-OPPOSITE difference) requires toggling out BOTH values, or removing the sample and shifting following samples left one column. Re-optimize.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 4,
     "title": "Handle shifts",
     "instruction": "A 'shift' in shape/texture/strength shows one 'off' sample followed by a sample that compares well to it. Toggle out the single 'off' value and re-optimize.",
     "formula": null,
     "notes": "Shifts can also come from test equipment or personnel changes."
    },
    {
     "step_number": 5,
     "title": "Re-evaluate toggles after every optimization",
     "instruction": "After optimizing each time, ALWAYS re-evaluate previously toggled-out samples to see if they can be un-toggled and re-introduced; additional samples needing toggling may also stand out.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 6,
     "title": "Adjust factor limits cautiously",
     "instruction": "If the optimized FA Dip stops at a limit (blue/red highlight + message), adjust that Min OR Max limit slightly - never both, never beyond the hard bounds. Adjust only ONE factor limit at a time and keep it only if the Std Dev drops at least 0.050.",
     "formula": null,
     "notes": "FA Dip limits are the most commonly adjusted; principle limits are typically left alone during design."
    },
    {
     "step_number": 7,
     "title": "Check Average Diff",
     "instruction": "Evaluate the 'Average Diff' in VMA in the Optimization area: it should be less than the corresponding Std Dev and around 0.150 or less (typically < 0.100). If higher, consider increasing the 'TotalMinStdDev' cell (about 100 rows below the Optimization area) to ~10 and re-optimizing.",
     "formula": null,
     "notes": null
    },
    {
     "step_number": 8,
     "title": "Verify accuracy",
     "instruction": "Goal: at least 80% of Sample-to-Previous-Sample comparisons within +/-0.5% VMA after optimizing. Check the Voids graphs' spread vs. the VMA graphs (<= 0.2%) to confirm effective AC volume is handled correctly.",
     "formula": null,
     "notes": null
    }
   ],
   "convergence_criteria": ">= 80% of Sample-to-Previous comparisons within +/-0.5% VMA; Average Diff <= 0.150 and below the Std Dev; Voids-vs-VMA spread <= 0.2%.",
   "starting_points": null,
   "example_ids": [],
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "optimization",
    "toggling",
    "production"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "147, 151, 153"
   },
   "verified": true,
   "corroborated_by": [
    "proc-toggle-and-reoptimize",
    "heur-design-trial-estimation-limits"
   ],
   "chunk": "1_6"
  },
  {
   "id": "heur-sensitivity-shifts-with-packing",
   "type": "heuristic",
   "statement": "Sensitivity to a principle shifts with the mix's packing state: C-G mixes at ~110% CA LUW become MORE sensitive to PCS change (~3% instead of 4% per 1% VMA); F-G mixes with a LOW New FAc (0.400 or less) become MORE sensitive to New FAc change (~0.035 instead of 0.05 per 1% VMA).",
   "rationale": "As CA CUW increases in a C-G mix, more of the structure depends on the CA volume, so the same PCS change moves VMA further; as the New FAc decreases in a F-G mix, the fine-fraction packing becomes more responsive to changes in it.",
   "thresholds": {
    "cg_high_cuw_pcs_per_1pct_vma": "3% at ~110% CA LUW",
    "fg_low_new_fac_threshold": 0.4,
    "fg_low_new_fac_per_1pct_vma": 0.035
   },
   "when_violated": "Rules-of-thumb applied blindly under- or over-predict VMA changes for mixes at the edges of their packing ranges.",
   "context": "Why optimized factors differ from the rules-of-thumb; every mix's five packing factors set its own sensitivities.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded"
   ],
   "tags": [
    "sensitivity",
    "rules-of-thumb",
    "estimation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "135"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "heur-optimize-production-always",
   "type": "heuristic",
   "statement": "With PRODUCTION samples, ALWAYS optimize the estimation factors (may require adjusting factor limits for that mix); with DESIGN trials, optimization is rarely possible and it's typically best NOT to adjust the min/max factor limits EXCEPT the FA Dips.",
   "rationale": "Design programs rarely produce enough trials, often vary shape/texture/strength between trials, and seldom verify as-batched gradations - so design-based 'optimized' factors are unreliable. Production data accumulates, making optimized factors increasingly representative.",
   "thresholds": null,
   "when_violated": "Factors tuned on a handful of noisy design trials encode noise, not mix behavior.",
   "context": "As the number of samples increases, the optimized factors become more representative for that mix.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "optimization",
    "design-vs-production"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "136"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "heur-same-sample-same-test",
   "type": "heuristic",
   "statement": "The gradation and AC/Binder content used in the estimation sheet MUST come from a portion of the SAME mix sample used for the volumetrics, and always from the SAME test type (ignition oven only, or extraction only). Never use cold feed, combined belt or hot bin gradations, and never mix dry/washed results, ovens with extractions, multiple ovens, or multiple auto extractors.",
   "rationale": "The estimation relates gradation change to volumetric change sample-by-sample; gradations from a different material stream or a different test method don't correspond to the Gmb/Gmm of that sample.",
   "thresholds": null,
   "when_violated": "The four principles computed for a sample don't describe the material that produced its volumetrics, so the estimation is meaningless.",
   "context": "Cold feed/belt/hot bin gradations remain useful for general QC - just not in the estimation sheet.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "sampling",
    "data-quality"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "137"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "heur-ignition-oven-calibration",
   "type": "heuristic",
   "statement": "Calibrate the ignition oven for mass loss AND aggregate degradation: batch an extra sample WITHOUT virgin AC, wash (virgin) or extract (recycle) it for the as-batched baseline gradation, and compare the average washed ignition-oven gradation to it to derive correction values - those corrections directly impact the four principles.",
   "rationale": "Uncorrected oven gradations mix real gradation change with oven-induced breakdown; the correction offsets shift every control sieve and therefore every principle, affecting conclusions about field compactability and segregation susceptibility.",
   "thresholds": null,
   "when_violated": "A principle can be consistently off without the designer knowing whether it is the mix or the oven.",
   "context": "Part of the oven-calibration breakdown may actually occur in the plant's drying drum; if concerned, run side-by-side washed ignition oven and extracted samples from the SAME field mix sample - the difference shows what the oven does to the gradation. For solvent extraction, correction factors depend on the method; consider non-extractable AC.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "ignition-oven",
    "calibration",
    "degradation",
    "correction-factors"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "137"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "heur-dark-horses-shape-texture-strength",
   "type": "heuristic",
   "statement": "The three 'dark horses' that most often degrade estimation accuracy are variation in the SHAPE, TEXTURE and/or STRENGTH of the combined aggregate blend - packing factors that can NOT be seen in the four principles.",
   "rationale": "The estimation is based on gradation alone; when the invisible packing factors vary (stockpile variation, cold feed % changes), volumetrics move without a gradation explanation.",
   "thresholds": null,
   "when_violated": "Volumetric changes appear unexplained or estimates repeatedly miss despite good gradation data.",
   "context": "Also watch compactive-effort variation details and permeable voids affecting SSD/Gmb accuracy.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "packing-factors",
    "shape",
    "texture",
    "strength",
    "estimation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "138"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "heur-voids-more-variable",
   "type": "heuristic",
   "statement": "Voids are more variable and harder to estimate than VMA because Voids are a function of the aggregate AND the AC/Binder - expect estimated Voids to often be 0.1-0.2% further from actual than the estimated VMA is.",
   "rationale": "Voids estimation stacks the VMA (gradation) estimate with the effective AC/Binder volume estimate, so Gsb, Gmm and AC measurement errors all add in.",
   "thresholds": {
    "extra_voids_error_pct": "0.1-0.2"
   },
   "when_violated": "Judging the method by Voids accuracy alone understates how well the aggregate structure is being predicted.",
   "context": "VMA is primarily a function of the aggregate; Voids add the binder volume.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "voids",
    "vma",
    "variability",
    "estimation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "139"
   },
   "verified": true,
   "corroborated_by": [
    "heur-vma-less-variable-than-voids"
   ],
   "chunk": "1_6"
  },
  {
   "id": "heur-gradation-drives-vma",
   "type": "heuristic",
   "statement": "Gradation changes account for MOST of the day-to-day VMA change - which is exactly what the Bailey Method principles focus on, and why the estimation typically lands within +/-0.5% for 80%+ of comparisons even though the other factors are never perfectly controlled.",
   "rationale": "There is less variation in the non-gradation factors than we think; the dominant driver of routine VMA movement is the combined gradation.",
   "thresholds": null,
   "when_violated": null,
   "context": "The philosophical basis for gradation-only estimation.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "gradation",
    "vma",
    "philosophy",
    "estimation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "10",
    "pages": "140"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "heur-vma1-positive-normal",
   "type": "heuristic",
   "statement": "On the VMA1 (Sample to Design) graph, POSITIVE Diff in VMA values are normal for production - shape and texture typically reduce through the asphalt plant, causing additional packing (field VMA collapse) - but you should NOT see this bias in mix design trials. NEGATIVE values are unusual: check whether the design's as-batched blend differed from the DMF, whether shape/texture/strength improved, or whether the field compactive effort/compactor differs from design.",
   "rationale": "Estimated VMA (from gradation) exceeding actual VMA in the field reflects real physical degradation of particle shape/texture through the plant; the same mechanism is absent in lab-only design trials.",
   "thresholds": null,
   "when_violated": "Positive bias in design trials or negative bias in production signals a data or process problem rather than normal behavior.",
   "context": "'Shifts' on this graph often indicate shape/texture/strength changes and can also be testing personnel or equipment; 'questionable' samples stand out from neighbors on both sides.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "vma1",
    "sample-to-design",
    "field-vma-collapse",
    "interpretation"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "145"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "heur-voids-vma-spread-02",
   "type": "heuristic",
   "statement": "The 'spread' between Diff in VMA and Diff in Voids for a given sample should be <= 0.2% (Sample to Design AND Sample to Previous Sample). A LARGER spread that is CONSISTENT indicates the field Gsb is different from design; a spread that constantly VARIES indicates the field Gsb is variable (calculated absorption wrong on virtually every sample - very unusual with natural aggregates). Also verify AC/Binder and Gmm values, and consider adjusting the AC Volume Correction Factor.",
   "rationale": "Voids = VMA effect + effective binder volume effect; if binder volume is being converted correctly, the two graphs track within ~0.2%. Systematic divergence isolates the Gsb/absorption inputs.",
   "thresholds": {
    "spread_max_pct": 0.2
   },
   "when_violated": "Consistent spread = wrong (but stable) field Gsb; varying spread = variable field Gsb or measurement problems.",
   "context": "Compare Voids1 to VMA1, and Voids2 to VMA2. Normally Diff in Voids is somewhat larger since Voids are more variable.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "voids",
    "vma",
    "spread",
    "gsb",
    "diagnostics"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "146, 148"
   },
   "verified": true,
   "corroborated_by": [
    "heur-voids-diff-tracks-vma-02",
    "heur-voids1-gsb-diagnosis",
    "walk-est-ex06-gsb-gravity-issue"
   ],
   "chunk": "1_6"
  },
  {
   "id": "heur-negative-pba-acvc",
   "type": "heuristic",
   "statement": "Watch for NEGATIVE Pba values on the VMA and Voids Estimation sheet - they indicate a potentially HIGH Gsb, LOW Gmm, LOW 'measured' AC/Binder content, or an AC Volume Correction factor that needs adjusting (generally 2.25 works well).",
   "rationale": "Negative asphalt absorption is physically impossible, so a negative computed Pba proves one of its inputs is wrong - it is the sheet's built-in input-error detector.",
   "thresholds": {
    "acvc_typical": 2.25
   },
   "when_violated": "Volumetrics computed from the bad input propagate through VMA, Voids and the estimation comparisons.",
   "context": "Repeated on multiple slides (146, 148, 150). Complements heur-design-gsb-field-vma (negative field Pba = wrong Gsb).",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "pba",
    "gsb",
    "gmm",
    "ac-volume-correction",
    "diagnostics"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "146, 148, 150"
   },
   "verified": true,
   "corroborated_by": [
    "ref-est-sheet-factor-defaults",
    "heur-acvc-gsb-scaling",
    "heur-acvc-gmb-gb-ratio-range"
   ],
   "chunk": "1_6"
  },
  {
   "id": "heur-vma2-accuracy-80-05",
   "type": "heuristic",
   "statement": "The VMA2 (Sample to Previous Sample) graph is the main indicator of estimation accuracy: after optimizing, at least 80% of the comparisons should fall within +/-0.5% of actual - values >= 1.0% get toggled out, but ONLY after optimizing at least once.",
   "rationale": "The Sample-to-Previous Diff in VMA values control the optimization process itself; toggling before optimizing removes the very information the optimizer needs.",
   "thresholds": {
    "target_within_pct": 0.5,
    "target_share": "80%",
    "toggle_threshold_pct": 1.0
   },
   "when_violated": "Toggling first then optimizing overfits the factors to a censored data set.",
   "context": "0.0% for all samples is unrealistic; see the Tab 15 reference document.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "vma2",
    "accuracy",
    "optimization",
    "toggling"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "136, 147"
   },
   "verified": true,
   "corroborated_by": [
    "heur-vma2-controls-optimization",
    "walk-est-graph-tabs",
    "walk-est-ex03-importance-fa-dips"
   ],
   "chunk": "1_6"
  },
  {
   "id": "heur-qc-qa-separate-sheets",
   "type": "heuristic",
   "statement": "Evaluate QC and QA sample sets on SEPARATE estimation sheets: if one set estimates well and the other doesn't, someone or some equipment is INCONSISTENT; if both estimate well but the test results differ, the processes are consistent but CONSISTENTLY DIFFERENT (handling, reheating, splitting, equipment, calibration).",
   "rationale": "The estimation quality separates random inconsistency from systematic offset - two failure modes with different fixes.",
   "thresholds": null,
   "when_violated": "Mixing QC and QA data on one sheet hides which lab/process is driving disagreement.",
   "context": "Also consider where and how samples were obtained: split single sample vs. two samples, locations, people, sampling methods, reheating. Samples from multiple locations (truck, mat) can be entered side-by-side on one sheet.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "qc-qa",
    "troubleshooting",
    "consistency"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "149"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "heur-red-principle-trend",
   "type": "heuristic",
   "statement": "In the estimation sheet's calculation area, the principle with the RED background caused the largest VMA change (Sample to Previous). The highlighted principle SHOULD vary between samples - if it is consistently the SAME principle for several samples, that principle needs to be BETTER CONTROLLED during production.",
   "rationale": "Random production variation spreads the 'largest mover' role across principles; one principle repeatedly dominating reveals a controllable process problem (e.g., dust control for FAf, blend proportioning for CA).",
   "thresholds": null,
   "when_violated": null,
   "context": "Other conditional formatting on the Main tab: BLUE background = value is LOW, RED = HIGH.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "trends",
    "process-control"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "150"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "heur-fa-dip-limit-adjust",
   "type": "heuristic",
   "statement": "Adjust a FA Dip Min or Max limit ONLY if the optimized FA Dip value STOPS at the limit (blue/red highlight + message after optimizing). If ALL actual FA ratios fall outside the Dip limits, consider slightly adjusting the appropriate limit so some values are inside - but if the actual values are WELL away from the dip range (e.g., 0.211-0.323 vs. 0.450-0.650 for C-G), it may NOT be realistic for a FA Dip to occur in that range at all.",
   "rationale": "The optimizer can only locate a dip within data it can see; extending limits toward data far from any plausible dip invents structure that isn't there.",
   "thresholds": null,
   "when_violated": "Chasing a dip well outside the actual ratio range produces a fictitious optimized dip and worse estimates.",
   "context": "Example from the binder: actual FAf 0.382-0.437 vs. limits 0.45-0.65 = CLOSE (adjusting may be reasonable); actual 0.231-0.262 vs. 0.45-0.65 = WELL AWAY (a dip there is unrealistic).",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "fa-dips",
    "limits",
    "optimization"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "150, 153"
   },
   "verified": true,
   "corroborated_by": [
    "heur-design-trial-estimation-limits"
   ],
   "chunk": "1_6"
  },
  {
   "id": "heur-gmb-spread-limits",
   "type": "heuristic",
   "statement": "Enter ALL Gmb's (up to three) and Gmm's (up to two) for each sample and watch the Min-Max spread: 0.010 or less is normal for Gmb's (less for Gmm's); an excessive spread (> 0.020?) influences the average Gmb, can make the ESTIMATED VMA appear wrong when the Gmb results are actually the problem, and flags sample handling / testing / equipment issues.",
   "rationale": "Actual VMA is computed from the average Gmb; one bad replicate shifts the 'actual' the estimate is judged against.",
   "thresholds": {
    "gmb_normal_spread": 0.01,
    "excessive_spread": 0.02
   },
   "when_violated": "Estimation accuracy is blamed when the volumetric testing is at fault.",
   "context": "Use the spread as a QC tool on the testing process itself.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "gmb",
    "gmm",
    "data-quality",
    "spread"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "151"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "heur-average-diff-0150",
   "type": "heuristic",
   "statement": "In the Optimization area, the 'Average Diff' in VMA should generally be LESS than the corresponding Std Dev AND around 0.150 or less (typically below 0.100). Higher values may call for the 'Better vs. Worse' evaluation: consider increasing the 'TotalMinStdDev' cell (about 100 rows below the Optimization area) to ~10 and re-optimizing to see if the Average Diff drops to 0.150 or less.",
   "rationale": "Std Dev measures scatter; Average Diff measures bias. A biased but tight estimation means the factors are systematically off, which the alternate optimization objective can correct.",
   "thresholds": {
    "average_diff_max": 0.15,
    "average_diff_typical": 0.1,
    "totalminstddev_suggestion": 10
   },
   "when_violated": "Optimized factors minimize scatter while leaving a systematic offset in the estimates.",
   "context": "Std Dev of Diff in VMA drives the macros (>= 6 comparisons); Std Dev of Diff in Voids is displayed but not used - it can guide occasional AC volume correction adjustments for light/heavy aggregates.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "estimation-sheet",
    "optimization",
    "average-diff",
    "std-dev"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "151"
   },
   "verified": false,
   "chunk": "1_6"
  },
  {
   "id": "heur-gradation-ac-not-track",
   "type": "heuristic",
   "statement": "Gradation and AC content should NOT track each other. A trend between them indicates SEGREGATED samples (mix or recycle) - unless a sample clearly mirrors the target gradation and AC compared to its neighbors. Watch the PCS-and-AC graphs; the graph corresponding to the mix's (or recycle product's) PCS generally works best.",
   "rationale": "In a homogeneous mix, gradation and binder content vary independently around their targets; coarse-segregated portions run coarser AND leaner, fine-segregated portions finer AND richer, creating correlation.",
   "thresholds": null,
   "when_violated": "Sample results (and pay factors tied to consistency) reflect segregation, not the produced mix.",
   "context": "Estimation sheet includes 1.18, 2.36, 4.75 and 9.5 mm vs AC graphs. Same check applies to individual recycle stockpiles: does gradation-AC tracking represent stockpile variability or segregated sampling?",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "segregation",
    "gradation",
    "ac-content",
    "qc"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "152"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "heur-segregated-samples-not-referenced",
   "type": "heuristic",
   "statement": "Locate WHERE segregation happens and never reference segregated-sample results: a sample that estimates well (within +/-0.5%) was NOT segregated in the lab - it was segregated before delivery. Segregated samples do NOT represent the produced mix, so do not use them for spec compliance conclusions or for evaluating proposed blend adjustments with the estimation sheet.",
   "rationale": "If the gradation/AC of the sample account for its volumetrics (it estimates well), the sample is internally consistent - the segregation occurred upstream (AC addition point, sampling location, anywhere between). A sample that estimates poorly AND shows gradation-AC tracking may have been segregated in the lab (or a packing-factor change occurred).",
   "thresholds": null,
   "when_violated": "Blend adjustments and pay decisions get made from samples that don't represent production - 'it is affecting your sample results and your pay!'",
   "context": "Address segregation immediately; it can start at AC/Bitumen addition at the plant through to where the mix is sampled.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "segregation",
    "diagnostics",
    "pay-factors",
    "blend-adjustment"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "152"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "heur-adjust-one-limit-stddev-0050",
   "type": "heuristic",
   "statement": "When adjusting optimization factor limits: adjust only ONE factor limit at a time, keep it reasonable, NEVER adjust both Min and Max of the same factor, never exceed the hard bounds, and keep the change only if the Std Dev decreases by at least 0.050 for that individual limit change.",
   "rationale": "One-at-a-time changes with a required Std Dev improvement prevent the optimizer from drifting into unrealistic factor combinations that fit noise.",
   "thresholds": {
    "required_stddev_decrease": 0.05
   },
   "when_violated": "Simultaneous or unbounded limit changes produce 'optimized' factors with no physical meaning.",
   "context": "Most often a FA Dip limit is what needs adjusting; FA Dip limits may be adjusted during design AND production, principle limits typically not during design.",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "optimization",
    "limits",
    "std-dev",
    "discipline"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "153"
   },
   "verified": true,
   "corroborated_by": [
    "proc-toggle-and-reoptimize",
    "walk-est-ex02-wrong-mix-type-size"
   ],
   "chunk": "1_6"
  },
  {
   "id": "heur-principles-interlinked",
   "type": "heuristic",
   "statement": "Don't change ONE of the four principles without determining if that change alters any of the other THREE.",
   "rationale": "The principles are computed from one combined gradation: a CA volume change moves %PCS and can move the CA ratio; FA blend changes move FAc and FAf together; dust changes move FAf and can move FAc.",
   "thresholds": null,
   "when_violated": "An 'isolated' adjustment produces unexpected VMA movement because a second principle shifted too.",
   "context": "Summary slide of the four principles: %PCS (volume of CA, direction depends on mix type), CA ratio (control with CA volume blend), FAc (control with FA volume blend), FAf (control with amount of dust).",
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "four-principles",
    "interaction",
    "design-discipline"
   ],
   "source": {
    "doc": "Bailey Method course binder - main notes",
    "tab": "14",
    "pages": "154"
   },
   "verified": true,
   "chunk": "1_6"
  },
  {
   "id": "ex-ca-fa-category-25mm",
   "type": "worked_example",
   "title": "CA and FA Category Classification - 25.0 mm NMAS Blend (Tab 01 exercise)",
   "scenario": "Class exercise companion to slide 60: given five aggregate gradations for a 25.0 mm (1\") NMAS blend (PCS = 4.75 mm), determine each aggregate's own NMAS, whether it is a CA or FA in this blend, which unit-weight container applies (bucket size or mold), and which volume blend (CA or FA) it belongs to.",
   "given": {
    "blend_nmas_mm": 25.0,
    "pcs_mm": 4.75,
    "pct_passing_475mm": {
     "agg1": 2.0,
     "agg2": 10.0,
     "agg3": 23.0,
     "agg4": 63.0,
     "agg5": 99.0
    },
    "gradations_pct_passing": {
     "sieves_mm": [
      37.5,
      25.0,
      19.0,
      12.5,
      9.5,
      4.75,
      2.36,
      1.18,
      0.6,
      0.3,
      0.15,
      0.075
     ],
     "agg1": [
      100.0,
      53.0,
      10.0,
      5.0,
      3.0,
      2.0,
      1.5,
      1.4,
      1.3,
      1.2,
      1.1,
      1.0
     ],
     "agg2": [
      100.0,
      100.0,
      87.0,
      48.0,
      30.0,
      10.0,
      2.5,
      2.0,
      1.5,
      1.3,
      1.1,
      1.0
     ],
     "agg3": [
      100.0,
      100.0,
      100.0,
      100.0,
      90.0,
      23.0,
      6.0,
      4.0,
      3.0,
      2.8,
      2.5,
      2.0
     ],
     "agg4": [
      100.0,
      100.0,
      100.0,
      100.0,
      100.0,
      63.0,
      12.0,
      4.0,
      3.5,
      3.0,
      2.5,
      2.0
     ],
     "agg5": [
      100.0,
      100.0,
      100.0,
      100.0,
      100.0,
      99.0,
      86.0,
      55.0,
      31.0,
      15.0,
      6.0,
      3.0
     ]
    }
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Determine each aggregate's own NMAS (first sieve larger than the first sieve retaining more than 15%)",
     "calculation": null,
     "result": {
      "agg1": "37.5 mm (1-1/2\")",
      "agg2": "19.0 mm (3/4\")",
      "agg3": "9.5 mm (3/8\")",
      "agg4": "9.5 mm (3/8\")",
      "agg5": "2.36 mm (#8)"
     }
    },
    {
     "step_number": 2,
     "description": "Classify CA or FA relative to the blend PCS (4.75 mm): predominantly retained = CA, predominantly passing = FA",
     "calculation": "% passing 4.75 mm: 2.0 / 10.0 / 23.0 / 63.0 / 99.0",
     "result": {
      "agg1": "CA",
      "agg2": "CA",
      "agg3": "CA",
      "agg4": "FA",
      "agg5": "FA"
     }
    },
    {
     "step_number": 3,
     "description": "Select the unit-weight container by the aggregate's own NMAS",
     "calculation": null,
     "result": {
      "agg1": "1/2 ft3 bucket",
      "agg2": "1/4 ft3 bucket",
      "agg3": "1/4 ft3 bucket",
      "agg4": "1/4 ft3 bucket (9.5 mm NMAS - bucket even though it acts as FA)",
      "agg5": "1/30 ft3 mold"
     }
    },
    {
     "step_number": 4,
     "description": "Assign to the volume blends",
     "calculation": null,
     "result": {
      "ca_volume_blend": "Aggs 1-3 - CA Volume Blend = 100.0%",
      "fa_volume_blend": "Agg 4 (with Agg 5) - FA Vol Bl = 100.0%"
     }
    }
   ],
   "answer": {
    "summary": "Aggs 1-3 are CAs (tested in buckets sized by their own NMAS, blended to 100% CA volume); Agg 4 is an FA by blend classification (63% passing PCS) though its 9.5 mm NMAS puts it in a 1/4 ft3 bucket; Agg 5 is an FA tested in the 1/30 ft3 mold."
   },
   "variants": null,
   "procedure_id": null,
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "ca-fa-classification",
    "nmas",
    "unit-weight-containers",
    "tab-01"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "01",
    "pages": "1-2 (student sheet + answer key)"
   },
   "verified": false,
   "chunk": "2_1"
  },
  {
   "id": "note-tab01-student-answers",
   "type": "student_annotation",
   "text": "Student worked the Tab 01 sheet by hand before the key: Agg NMAS answers '1-1/2\", 3/4\", 3/8\", 3/8\", #8' (Agg 5 first written #8 over a corrected #16-style mark); CA/FA answers CA/CA/CA/FA/FA; bucket answers 'x 1/2 ft3, x 1/4 ft3, x 1/4 ft3, x 1/4 ft3'; mold 'x 1/30 ft3' for Agg 5; wrote 'Vol. blend of CA = 100%' across Aggs 1-3 and 'FA vol = 100% of VCA' at Agg 4. All match the printed key.",
   "annotates_id": "ex-ca-fa-category-25mm",
   "confidence": "medium",
   "tags": [
    "handwriting",
    "exercise",
    "tab-01"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "01",
    "pages": "1"
   },
   "verified": false,
   "chunk": "2_1"
  },
  {
   "id": "ex-initial-blend-95mm-cg-cuw-variants",
   "type": "worked_example",
   "title": "Initial Blending Hand Calculation at 95%, 100% and 105% CA LUW - 9.5 mm C-G (Tabs 02A/02B/02C)",
   "scenario": "The 9-step initial blending hand calculation for the 9.5 mm NMAS Coarse-graded blend (PCS = 2.36 mm) run at three chosen unit weights: the printed 100% CA LUW solution (Tab 02A), the in-class hand-worked 105% solution (Tab 02B), and the printed 95%/105% comparison (Tab 02C). Materials: CA (2.36 mm passing 7.6%, 0.075 mm 3.0%, LUW 1422.2, RUW 1580.9, Gsb 2.630), FA (2.36 mm 91.7%, 0.075 mm 0.9%, LUW 1555.2, RUW 1722.8, Gsb 2.580), MF (0.075 mm 88.0%, Gsb 2.800). FA UW 'set' = 100% FA Rodded UW. Target ~4.5% minus 0.075 mm in the combined blend.",
   "given": {
    "nmas_mm": 9.5,
    "pcs_mm": 2.36,
    "ca": {
     "pct_passing_pcs": 7.6,
     "pct_passing_0075": 3.0,
     "luw_kg_m3": 1422.2,
     "ruw_kg_m3": 1580.9,
     "gsb": 2.63
    },
    "fa": {
     "pct_retained_pcs": 8.3,
     "pct_passing_0075": 0.9,
     "luw_kg_m3": 1555.2,
     "ruw_kg_m3": 1722.8,
     "gsb": 2.58
    },
    "mf": {
     "pct_passing_0075": 88.0,
     "gsb": 2.8
    },
    "target_minus_0075_pct": 4.5,
    "unit_volume_m3": 1.0
   },
   "steps": [
    {
     "step_number": 1,
     "description": "CA weight = CUW(decimal) x CA LUW",
     "calculation": "0.95 / 1.00 / 1.05 x 1422.2",
     "result": {
      "cuw95": 1351.1,
      "cuw100": 1422.2,
      "cuw105": 1493.3
     }
    },
    {
     "step_number": 2,
     "description": "Voids in the CA at the CUW: solid volume = CA wt / (Gsb x 1000); voids = 1 - solid",
     "calculation": "1351.1/2630=0.514; 1422.2/2630=0.541; 1493.3/2630=0.568",
     "result": {
      "cuw95_voids_pct": 48.6,
      "cuw100_voids_pct": 45.9,
      "cuw105_voids_pct": 43.2
     }
    },
    {
     "step_number": 3,
     "description": "FA mass to fill CA voids at FA RUW",
     "calculation": "0.486 / 0.459 / 0.432 x 1722.8",
     "result": {
      "cuw95": 837.3,
      "cuw100": 790.8,
      "cuw105": 744.2
     }
    },
    {
     "step_number": 4,
     "description": "CA and FA percentages by weight",
     "calculation": "e.g. 100%: 1422.2/2213.0 and 790.8/2213.0",
     "result": {
      "cuw95": "CA 61.7 / FA 38.3",
      "cuw100": "CA 64.3 / FA 35.7",
      "cuw105": "CA 66.7 / FA 33.3"
     }
    },
    {
     "step_number": 5,
     "description": "Opposite-sized material: CA x (%passing PCS in CA/100 = 0.076); FA x (%retained on PCS in FA/100 = 0.083)",
     "calculation": null,
     "result": {
      "cuw95": "CA 4.7 / FA 3.2",
      "cuw100": "CA 4.9 / FA 3.0",
      "cuw105": "CA 5.1 / FA 2.8"
     }
    },
    {
     "step_number": 6,
     "description": "'Correct' the stockpile %'s for opposite sized material",
     "calculation": "CA = (CA% + CA_opp) - FA_opp; FA = (FA% + FA_opp) - CA_opp",
     "result": {
      "cuw95": "CA 63.2 / FA 36.8",
      "cuw100": "CA 66.2 / FA 33.8",
      "cuw105": "CA 69.0 / FA 31.0"
     }
    },
    {
     "step_number": 7,
     "description": "Minus 0.075 mm contributed: CA x 0.030 + FA x 0.009",
     "calculation": null,
     "result": {
      "cuw95": "1.9 + 0.3 = 2.2",
      "cuw100": "2.0 + 0.3 = 2.3",
      "cuw105": "2.1 + 0.3 = 2.4"
     }
    },
    {
     "step_number": 8,
     "description": "% MF needed = (4.5 - total)/0.88",
     "calculation": null,
     "result": {
      "cuw95": "2.3/0.88 = 2.6",
      "cuw100": "2.2/0.88 = 2.5",
      "cuw105": "2.1/0.88 = 2.4"
     }
    },
    {
     "step_number": 9,
     "description": "Final aggregate %'s by weight (revise FA ONLY for the MF added)",
     "calculation": null,
     "result": {
      "cuw95": "CA 63.2 / FA 34.2 / MF 2.6",
      "cuw100": "CA 66.2 / FA 31.3 / MF 2.5",
      "cuw105": "CA 69.0 / FA 28.6 / MF 2.4"
     }
    }
   ],
   "answer": {
    "cuw_95": {
     "ca_pct": 63.2,
     "fa_pct": 34.2,
     "mf_pct": 2.6,
     "ca_voids_pct": 48.6
    },
    "cuw_100": {
     "ca_pct": 66.2,
     "fa_pct": 31.3,
     "mf_pct": 2.5,
     "ca_voids_pct": 45.9
    },
    "cuw_105": {
     "ca_pct": 69.0,
     "fa_pct": 28.6,
     "mf_pct": 2.4,
     "ca_voids_pct": 43.2
    },
    "observation": "Raising the CUW 10% (95 -> 105) shifts the final blend ~6% toward CA and lowers CA voids ~5.4% - the mechanism behind 'CUW 10% changes %PCS 4-5%'."
   },
   "variants": [
    "Tab 02B is the same worksheet blank for class; the student's hand-worked 105% answers (1493.31 kg, 0.5678 m3, 43.22%, 744.60 kg, 66.7/33.3, 5.1/2.8, 69/31, 2.4, final 69/28.6/2.4) match the printed Tab 02C 105% column"
   ],
   "procedure_id": null,
   "mix_types": [
    "dense_coarse_graded"
   ],
   "tags": [
    "initial-blending",
    "hand-calc",
    "cuw",
    "tab-02"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "02",
    "pages": "3-11"
   },
   "verified": false,
   "chunk": "2_1"
  },
  {
   "id": "note-tab02b-class-calcs",
   "type": "student_annotation",
   "text": "Student's in-class 105% CUW hand calculation (Tab 02B): CA Weight 1.05 x 1422.2 = 1493.31 kg; Solid Volume 0.5678 m3 (first wrote a scratched value, corrected above the line); Voids Volume 0.4322 m3; Voids 43.22%; FA Mass 744.60 kg; Total 2237.9 kg; CA 66.7% / FA 33.3%; opposite-sized 5.1 / 2.8; corrected 69 / 31; -200: 2.1 + 0.3 = 2.4; MF = 2.1/0.88 = 2.4 (wrote intermediate scratch-outs); FA = 31 - 2.4 = 28.6; final CA 69 / FA 28.6 / MF 2.4 / Total 100. Matches the printed 105% key exactly.",
   "annotates_id": "ex-initial-blend-95mm-cg-cuw-variants",
   "confidence": "high",
   "tags": [
    "handwriting",
    "class-exercise",
    "tab-02"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "02",
    "pages": "7-8"
   },
   "verified": false,
   "chunk": "2_1"
  },
  {
   "id": "ex-overall-blend-dip-19mm",
   "type": "worked_example",
   "title": "The 'Dip' for the OVERALL Combined Blend Gradation (Tab 03, Slide 104 companion)",
   "scenario": "A 19.0 mm (3/4\") NMAS combined gradation (100/95/77/62/44/27/18/11/8/6/4 from 25.0 mm down to 0.075 mm) illustrates that designing 'normal' Gsb aggregates (2.60-2.70 range) at ~90% of the CA LUW condition yields a percent passing the PCS of ~44%. Viewing PCS%/100% as a ratio (like FAc and FAf), the 'Dip' for the OVERALL combined blend gradation is 44.0/100.0 = 0.44.",
   "given": {
    "nmas_mm": 19.0,
    "pcs_mm": 4.75,
    "pct_passing_pcs": 44.0,
    "design_condition": "~90% of CA LUW",
    "gsb_range": "2.60-2.70"
   },
   "steps": [
    {
     "step_number": 1,
     "description": "Express the % passing the PCS as a ratio of the total blend",
     "calculation": "44.0 / 100.0",
     "result": "0.44 = overall combined blend 'Dip'"
    }
   ],
   "answer": {
    "overall_blend_dip": 0.44,
    "why_other_dips_differ": "The Dip shifts with the portion of blend being evaluated and the mix type: Fine-graded New FAc and New FAf Dips ~0.50; Coarse-graded FAc and FAf Dips ~0.55; SMA FAc Dip ~0.65 and FAf Dip ~0.70."
   },
   "variants": null,
   "procedure_id": null,
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded",
    "sma"
   ],
   "tags": [
    "dip",
    "pcs",
    "fa-ratios",
    "tab-03"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "03",
    "pages": "12-13"
   },
   "verified": false,
   "chunk": "2_1"
  },
  {
   "id": "note-tab03-void-size-and-pcs",
   "type": "student_annotation",
   "text": "On the Tab 03 'Between the COARSE particles' page (SMA/C-G/F-G cylinders; 'Void SIZE in the Coarse fraction provides LESS room to orient the FINE fraction'; lab cylinder vs field lift both apply to the TOTAL blend): 'lower void size means the most compactable fine fraction is gonna be finer than a larger void size'. Bottom: 'Assuming (1) @ 90%, PCS ~= 44%; (2) 10% change in CA LUW = PCS change ~= 5%'.",
   "annotates_id": "ex-overall-blend-dip-19mm",
   "confidence": "medium",
   "tags": [
    "handwriting",
    "void-size",
    "pcs",
    "cuw",
    "tab-03"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "03",
    "pages": "13"
   },
   "verified": true,
   "corroborated_by": [
    "heur-cuw-10pct-pcs-shift"
   ],
   "chunk": "2_1"
  },
  {
   "id": "walk-vbs-initial-blend-95mm",
   "type": "tool_walkthrough",
   "title": "VBS Walkthrough - Initial Blending Example, 9.5 mm C-G Virgin (Tab 04, Slide 110 companion)",
   "tool": "vbs_dense_graded",
   "scenario": "The dense-graded Virgin Blending Spreadsheet loaded with the SAME data as the Tab 02 hand calculation (9.5 mm (3/8\") Coarse-graded virgin blend: CA 66.2%, FA-natural sand 31.3%, MF bag-house fines 2.5%), showing where each of the four principles lives in the sheet and the volumetric estimate block.",
   "steps": [
    {
     "step_number": 1,
     "instruction": "Confirm the header: aggregates entered as #1-CA (coarse chips 66.2%), #1-FA (natural sand 31.3%), MF (bag house fines 2.5%); Virgin %'s row must total 100.0%.",
     "cell_refs": null,
     "values": {
      "virgin_pcts": [
       66.2,
       31.3,
       2.5
      ]
     }
    },
    {
     "step_number": 2,
     "instruction": "PRINCIPLE #1: the chosen unit weight - % CA LUW cell (100.0). Combined blend %PCS shows 36.2 (green band around the PCS row of the with-blend gradation column).",
     "cell_refs": null,
     "values": {
      "pct_ca_luw": 100.0,
      "combined_pct_pcs": 36.2
     }
    },
    {
     "step_number": 3,
     "instruction": "PRINCIPLE #2: the CA volume blend ('Desired Blends by VOLUME of VIRGIN Aggregates' - CA side MUST TOTAL 100.0%). PRINCIPLE #3: the FA volume blend (FA side MUST TOTAL 100.0%). PRINCIPLE #4: the 'percent passing 0.075 mm desired in the VIRGIN blend' cell (4.50).",
     "cell_refs": null,
     "values": {
      "minus_200_desired": 4.5
     }
    },
    {
     "step_number": 4,
     "instruction": "Check the Total Volume %'s: CA 54.1 / FA 45.9. The printed guide requires the CA side to be 50.0% or MORE and the FA side 49.9% or LESS for a Coarse-graded blend.",
     "cell_refs": null,
     "values": {
      "total_volume_ca_pct": 54.1,
      "total_volume_fa_pct": 45.9
     }
    },
    {
     "step_number": 5,
     "instruction": "Read the computed ratios: CA 0.501, FAc 0.586, FAf 0.250 (Virgin column; W/RAP column empty for a virgin design).",
     "cell_refs": null,
     "values": {
      "ca_ratio": 0.501,
      "fac_ratio": 0.586,
      "faf_ratio": 0.25
     }
    },
    {
     "step_number": 6,
     "instruction": "Volumetric estimate block: Combined Water Absorption 1.84; Pba as % of Water Absorption 65%; Estimated Pba 1.20; Target VMA 15.5; Target Voids 4.0; Volume of Effective AC 11.50; AC Volume Correction Factor 2.25; Estimated Pbe 5.11; Estimated TOTAL AC 6.31.",
     "cell_refs": null,
     "values": {
      "combined_water_absorption": 1.84,
      "pba_pct_of_water_absorption": 65,
      "estimated_pba": 1.2,
      "target_vma": 15.5,
      "target_voids": 4.0,
      "vol_effective_ac": 11.5,
      "ac_volume_correction_factor": 2.25,
      "estimated_pbe": 5.11,
      "estimated_total_ac": 6.31
     }
    },
    {
     "step_number": 7,
     "instruction": "Virgin Blend check table: enter trial %AC rows (5.5/6.0/6.5/7.0) with measured Gmb (2.360/2.368/2.386/2.392) - the sheet returns VCAmix (45.9/45.9/45.8/46.0). Compare VCAmix to Volume of FA per the printed guide: C-G VCAmix < or = Vol FA; F-G VCAmix 3-5% < Vol FA; SMA VCAmix 2-4% > Vol FA.",
     "cell_refs": null,
     "values": {
      "pct_ac_rows": [
       5.5,
       6.0,
       6.5,
       7.0
      ],
      "gmb_rows": [
       2.36,
       2.368,
       2.386,
       2.392
      ],
      "vcamix_rows": [
       45.9,
       45.9,
       45.8,
       46.0
      ]
     }
    }
   ],
   "lessons": [
    "The four principles map to four specific input areas: CUW cell (P1), CA volume blend (P2), FA volume blend (P3), %-200 desired (P4)",
    "For C-G blends the CA total volume must be >= 50.0%",
    "The VCAmix vs Volume of FA comparison is built into the sheet - watch it as %AC changes"
   ],
   "extracted_heuristic_ids": [],
   "practice_files": [
    "Class USB - dense-graded VBS workbook"
   ],
   "tags": [
    "vbs",
    "tab-04",
    "principles",
    "vcamix"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "04",
    "pages": "14-15"
   },
   "verified": false,
   "chunk": "2_1"
  },
  {
   "id": "note-tab04-pba-water-absorption-rule",
   "type": "student_annotation",
   "text": "Beside the 'Pba as % of Water Absorption' cell (printed 65%): handwritten Gsb/absorption rule of thumb reading approximately 'higher than 2.5% ~ 60%, lower than 1.25% ~ 50%' with an arrow note 'higher -> lower' (i.e., the percentage used appears to move opposite the combined water absorption; check this rule of thumb). Also 'check Gsb rule of thumb' arrow toward the absorption cells. Handwriting partially legible - numbers uncertain.",
   "annotates_id": "walk-vbs-initial-blend-95mm",
   "confidence": "low",
   "tags": [
    "handwriting",
    "pba",
    "water-absorption",
    "tab-04"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "04",
    "pages": "14"
   },
   "verified": false,
   "chunk": "2_1"
  },
  {
   "id": "note-tab04-vcamix-relationship",
   "type": "student_annotation",
   "text": "Next to the Virgin Blend %AC/Gmb/VCAmix table: 'stay aware of this line/relationship' with an arrow tracing the VCAmix column - i.e., watch how VCAmix moves against Volume of FA as %AC (and Gmb) change.",
   "annotates_id": "walk-vbs-initial-blend-95mm",
   "confidence": "medium",
   "tags": [
    "handwriting",
    "vcamix",
    "tab-04"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "04",
    "pages": "15"
   },
   "verified": false,
   "chunk": "2_1"
  },
  {
   "id": "walk-vbs-rap-blend-19mm",
   "type": "tool_walkthrough",
   "title": "VBS Walkthrough - Initial RAP Blending Example, 19.0 mm C-G (Tab 05, Slide 116 companion)",
   "tool": "vbs_dense_graded",
   "scenario": "The recycle version of the VBS with the 19.0 mm (3/4\") Coarse-graded RAP example: virgin aggregates #8 Stone, #11 Stone, St. Sand, Nat. Sand plus BHF's, with 25.0% Fine RAP (RAP AC 4.1, RAP Gmm 2.504, RAP Gb 1.040 as printed; PG 64-22 virgin binder). Shows the virgin-only and with-RAP blends side by side and the matching workflow.",
   "steps": [
    {
     "step_number": 1,
     "instruction": "Page 1 shows the sheet before matching: virgin-only blend established; With-RAP columns and ratio boxes empty. RAP data entered: RAP AC 4.1, RAP Gmm 2.504, RAP Gb (printed value uncertain).",
     "cell_refs": null,
     "values": {
      "rap_pct": 25.0,
      "rap_ac": 4.1,
      "rap_gmm": 2.504
     }
    },
    {
     "step_number": 2,
     "instruction": "Match the PCS between the Virgin and RAP blends (green box): virgin %PCS 38.2 vs with-RAP 38.2 - matching the PCS reasonably ensures you know the Volume of CA and Volume of FA for the RAP blend.",
     "cell_refs": null,
     "values": {
      "virgin_pct_pcs": 38.2,
      "with_rap_pct_pcs": 38.2
     }
    },
    {
     "step_number": 3,
     "instruction": "Adjust virgin %'s: virgin-only 45.1/27.0/13.3/13.6 + MF 1.0 becomes with-RAP 45.7/16.1/6.0/6.2 + MF 1.0 + RAP 25.0 (columns re-proportioned so the with-RAP combined gradation reproduces the virgin structure).",
     "cell_refs": null,
     "values": {
      "virgin_only_pcts": [
       45.1,
       27.0,
       13.3,
       13.6,
       1.0
      ],
      "with_rap_pcts": [
       45.7,
       16.1,
       6.0,
       6.2,
       1.0,
       25.0
      ]
     }
    },
    {
     "step_number": 4,
     "instruction": "Compare the RATIOS between the blends (red box) and consider expected volumetric changes and effect on field compactability due to the RAP: Virgin CA 0.726 / FAc 0.476 / FAf 0.330 vs W/RAP CA 0.728 / FAc 0.482 / FAf 0.408.",
     "cell_refs": null,
     "values": {
      "virgin_ratios": {
       "ca": 0.726,
       "fac": 0.476,
       "faf": 0.33
      },
      "with_rap_ratios": {
       "ca": 0.728,
       "fac": 0.482,
       "faf": 0.408
      }
     }
    },
    {
     "step_number": 5,
     "instruction": "When using MULTIPLE FA's (blue box): match (as close as possible) the Virgin FA blend by MASS and the RAP FA blend by MASS - this shows the effect of the RAP on the FINE fraction (i.e., the FA ratios). Here Virgin-FA blend by mass 49.4/50.6 vs RAP-FA 49.2/50.8.",
     "cell_refs": "Cells G18:J18 (Virgin - FA Blend by MASS), G20:J20 (RAP - FA Blend by MASS)",
     "values": {
      "virgin_fa_mass_split": [
       49.4,
       50.6
      ],
      "rap_fa_mass_split": [
       49.2,
       50.8
      ]
     }
    },
    {
     "step_number": 6,
     "instruction": "Plant-production reality check (red box): if you decide to NOT include a virgin aggregate (CA or FA) in the RAP blend, re-establish the virgin blend WITHOUT that aggregate and the corresponding volume of CA and volume of FA - THEN re-develop the RAP blend to match the PCS.",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 7,
     "instruction": "RAP Blend check table: %AC 4.5/5.0/5.5/6.0 with Gmb 2.353/2.372/2.388/2.396 gives VCAmix 45.4/46.3/46.2/46.3; compare to Volume of FA per the C-G / F-G / SMA guide.",
     "cell_refs": null,
     "values": {
      "pct_ac_rows": [
       4.5,
       5.0,
       5.5,
       6.0
      ],
      "gmb_rows": [
       2.353,
       2.372,
       2.388,
       2.396
      ],
      "vcamix_rows": [
       45.4,
       46.3,
       46.2,
       46.3
      ]
     }
    }
   ],
   "lessons": [
    "Match %PCS first - it anchors the CA/FA volumes of the RAP blend",
    "Compare virgin vs with-RAP ratios for expected VMA and field-compactability shifts",
    "Match FA blends by MASS when multiple FAs are used",
    "Dropping a virgin aggregate means rebuilding the virgin-only reference first"
   ],
   "extracted_heuristic_ids": [
    "heur-recycle-reestablish-virgin-blend"
   ],
   "practice_files": [
    "Class USB - dense-graded VBS with recycle workbook"
   ],
   "tags": [
    "vbs",
    "rap",
    "tab-05",
    "matching"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "05",
    "pages": "16-17"
   },
   "verified": false,
   "chunk": "2_1"
  },
  {
   "id": "note-tab05-rap-matching-order",
   "type": "student_annotation",
   "text": "'DO THESE IN ORDER: 1. Match PCS. 2. Match CA Ratio. 3. Maintain virgin FA blend by mass. 4. Use equal % BHF's, maybe multiple times.' (last words partially legible - possibly 'maybe multiple FAs').",
   "annotates_id": "walk-vbs-rap-blend-19mm",
   "confidence": "medium",
   "tags": [
    "handwriting",
    "rap",
    "matching",
    "tab-05"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "05",
    "pages": "16"
   },
   "verified": true,
   "corroborated_by": [
    "proc-rap-ras-mix-design"
   ],
   "chunk": "2_1"
  },
  {
   "id": "walk-vbs-existing-virgin-19mm",
   "type": "tool_walkthrough",
   "title": "VBS Walkthrough - Evaluating an Existing Virgin Design, 19.0 mm C-G (Tab 06, Slide 118 companion)",
   "tool": "vbs_dense_graded",
   "scenario": "Evaluating an existing 19.0 mm (3/4\") Coarse-graded Intermediate design (limestone CAs 41.3/33.7%, limestone man. sand 12.6%, natural sand 10.4%, mineral filler 2.0%) to find the chosen unit weight that reproduces the original combined gradation - determining the CA volume and thus the true mix type.",
   "steps": [
    {
     "step_number": 1,
     "instruction": "Enter the ORIGINAL design individual stockpile gradations and specific gravities; perform unit weights on the CURRENT stockpiles, provided current characteristics (gradation, specific gravity, shape, strength, texture) are similar (yellow box).",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 2,
     "instruction": "Virgin aggregate %'s can be entered in the RAP row ONLY as a visual aid during mix evaluation (red-arrow callout).",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 3,
     "instruction": "Iterate the CHOSEN UW until the estimated combined blend reproduces the original: converges at 102.5% CA LUW.",
     "cell_refs": null,
     "values": {
      "chosen_uw_pct_ca_luw": 102.5
     }
    },
    {
     "step_number": 4,
     "instruction": "Read the ratios (identical for the entered and estimated blends when converged): CA 0.667, FAc 0.416, FAf 0.406. Total Volume %'s: CA 55.1 / FA 44.9 -> CA volume > 50% confirms Coarse-graded behavior at 102.5% CA LUW.",
     "cell_refs": null,
     "values": {
      "ca_ratio": 0.667,
      "fac_ratio": 0.416,
      "faf_ratio": 0.406,
      "total_volume_ca_pct": 55.1,
      "total_volume_fa_pct": 44.9
     }
    },
    {
     "step_number": 5,
     "instruction": "Virgin Blend check table: %AC 4.0/4.5/5.0 with Gmb 2.430/2.456/2.471 gives VCAmix 45.5/45.2/45.2.",
     "cell_refs": null,
     "values": {
      "pct_ac_rows": [
       4.0,
       4.5,
       5.0
      ],
      "gmb_rows": [
       2.43,
       2.456,
       2.471
      ],
      "vcamix_rows": [
       45.5,
       45.2,
       45.2
      ]
     }
    }
   ],
   "lessons": [
    "Existing-design evaluation uses ORIGINAL gradations/gravities with CURRENT stockpile unit weights (if characteristics are similar)",
    "The converged CUW (here 102.5% CA LUW) reveals the mix's true packing state and type"
   ],
   "extracted_heuristic_ids": [],
   "practice_files": [
    "Class USB - dense-graded VBS workbook"
   ],
   "tags": [
    "vbs",
    "existing-mix",
    "tab-06",
    "evaluation"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "06",
    "pages": "18-19"
   },
   "verified": false,
   "chunk": "2_1"
  },
  {
   "id": "walk-vbs-existing-fg-rap-125mm",
   "type": "tool_walkthrough",
   "title": "VBS Walkthrough - Evaluating an Existing 12.5 mm F-G Mix with Recycle (Tab 07, Slide 119 companion)",
   "tool": "vbs_dense_graded",
   "scenario": "Existing Mix Review Example - 12.5 mm (1/2\") NMAS Fine-graded with recycle (dated 01-18-2006, Ndesign = 50): Rock A 18.0%, Rock B 29.5%, Sand C 26.0%, BHF's 1.5%, RAP 25.0% (RAP AC 4.5, RAP Gmm 2.585). Demonstrates the Fine-graded evaluation including the New ratios and the <= 90% CA LUW rule.",
   "steps": [
    {
     "step_number": 1,
     "instruction": "Page 1 shows the sheet before convergence: the New CA ratio box reads #DIV/0! until the fine-graded info is populated; green box notes the FG evaluation applies 'For Fine-Graded mixes, where the % CA LUW is <= 90.0%'. The sheet estimates % passing 6.35 mm (1/4\") = 63.2 for the FG evaluation.",
     "cell_refs": null,
     "values": {
      "estimated_pct_635mm": 63.2
     }
    },
    {
     "step_number": 2,
     "instruction": "Converge the chosen UW: % CA LUW = 84.6 (cell highlighted red - below 90%, consistent with Fine-graded).",
     "cell_refs": null,
     "values": {
      "chosen_uw_pct_ca_luw": 84.6
     }
    },
    {
     "step_number": 3,
     "instruction": "Read both ratio sets, virgin vs with-RAP: standard ratios CA 0.611 -> 0.609, FAc 0.400 -> 0.451, FAf 0.221 -> 0.332; New (fine-graded) ratios New CA 0.952 -> 0.931 and second New box 0.221 -> 0.332 (as printed).",
     "cell_refs": null,
     "values": {
      "virgin": {
       "ca": 0.611,
       "fac": 0.4,
       "faf": 0.221,
       "new_ca": 0.952
      },
      "with_rap": {
       "ca": 0.609,
       "fac": 0.451,
       "faf": 0.332,
       "new_ca": 0.931
      }
     }
    },
    {
     "step_number": 4,
     "instruction": "Volumetrics: Target VMA 14.5, Target Voids 4.0, Volume of Effective AC 10.50, ACVC 2.25, Estimated Pbe 4.67, Estimated TOTAL AC 5.45 (with RAP contribution).",
     "cell_refs": null,
     "values": {
      "target_vma": 14.5,
      "target_voids": 4.0,
      "vol_effective_ac": 10.5,
      "ac_volume_correction_factor": 2.25,
      "estimated_pbe": 4.67,
      "estimated_total_ac": 5.45
     }
    },
    {
     "step_number": 5,
     "instruction": "Same yellow boxes as Tab 06: use ORIGINAL design gradations/gravities with CURRENT stockpile unit weights; when using multiple FA's match the virgin and RAP FA blends by MASS.",
     "cell_refs": null,
     "values": null
    }
   ],
   "lessons": [
    "A converged CUW below 90% CA LUW supports Fine-graded classification (here 84.6%)",
    "FG evaluations add the New ratios; the sheet shows #DIV/0! until the FG info is enabled/populated",
    "Recycle evaluation still matches PCS / CA ratio / FA mass / MF-BHF"
   ],
   "extracted_heuristic_ids": [
    "heur-vcamix-3-5-below-fa-volume"
   ],
   "practice_files": [
    "Class USB - dense-graded VBS with recycle workbook"
   ],
   "tags": [
    "vbs",
    "fine-graded",
    "rap",
    "tab-07",
    "existing-mix"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "07",
    "pages": "20-21"
   },
   "verified": false,
   "chunk": "2_1"
  },
  {
   "id": "ex-starting-points-vs-gyrations",
   "type": "worked_example",
   "title": "Starting Point vs. Lab Compaction Requirements - VMA Windows (Tab 08, Slide 120 companion)",
   "scenario": "For a 19.0 mm (3/4\") C-G mix and a 12.5 mm (1/2\") F-G mix designed between 50 and 125 gyrations, compute the VMA adjustment 'window' each principle's recommended range provides, using the per-1%-VMA rules-of-thumb.",
   "given": {
    "cg_19mm": {
     "ca_luw_range_pct": [
      95.0,
      105.0
     ],
     "ca_ratio_range": [
      0.6,
      0.75
     ],
     "fac_range": [
      0.35,
      0.5
     ],
     "faf_range": [
      0.35,
      0.5
     ],
     "rules": {
      "pcs_per_1pct": 4.0,
      "ca_per_1pct": 0.2,
      "fac_per_1pct": 0.05,
      "faf_per_1pct": 0.05
     }
    },
    "fg_125mm": {
     "ca_luw_range_pct": [
      60.0,
      80.0
     ],
     "new_ca_range": [
      0.6,
      1.0
     ],
     "new_fac_range": [
      0.35,
      0.5
     ],
     "old_ca_range": [
      0.5,
      0.65
     ],
     "rules": {
      "orig_pcs_per_1pct": 6.0,
      "new_ca_per_1pct": 0.35,
      "new_fac_per_1pct": 0.05
     }
    }
   },
   "steps": [
    {
     "step_number": 1,
     "description": "C-G % CA LUW window: 10% CUW range changes %PCS ~5% (CUW 10% -> PCS 4-5%); VMA window = 5/4",
     "calculation": "5 / 4.0",
     "result": "1.25% VMA"
    },
    {
     "step_number": 2,
     "description": "C-G CA ratio window",
     "calculation": "0.15 / 0.20",
     "result": "0.75% VMA"
    },
    {
     "step_number": 3,
     "description": "C-G FAc window and FAf window",
     "calculation": "0.15 / 0.05 each",
     "result": "3.0% VMA each"
    },
    {
     "step_number": 4,
     "description": "F-G % CA LUW window: 20% CUW range -> ~10% Original PCS change",
     "calculation": "10 / 6.0",
     "result": "1.67% VMA"
    },
    {
     "step_number": 5,
     "description": "F-G New CA ratio window",
     "calculation": "0.40 / 0.35",
     "result": "1.14% VMA"
    },
    {
     "step_number": 6,
     "description": "F-G New FAc window",
     "calculation": "0.15 / 0.05",
     "result": "3.0% VMA"
    },
    {
     "step_number": 7,
     "description": "F-G OLD CA ratio guidance: keep > 0.50 to minimize segregation susceptibility, and < 1.5 x the range max",
     "calculation": "1.5 x 0.65",
     "result": "0.975 maximum"
    }
   ],
   "answer": {
    "cg_windows_pct_vma": {
     "ca_luw": 1.25,
     "ca_ratio": 0.75,
     "fac": 3.0,
     "faf": 3.0
    },
    "fg_windows_pct_vma": {
     "ca_luw": 1.67,
     "new_ca": 1.14,
     "new_fac": 3.0
    },
    "fg_old_ca_max": 0.975,
    "note": "The FA ratios provide by far the largest VMA adjustment room; the CUW window is comparatively narrow."
   },
   "variants": null,
   "procedure_id": null,
   "mix_types": [
    "dense_coarse_graded",
    "dense_fine_graded"
   ],
   "tags": [
    "starting-points",
    "compaction",
    "vma-windows",
    "tab-08"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "08",
    "pages": "22-23"
   },
   "verified": true,
   "corroborated_by": [
    "ref-ca-ratio-guidelines-cg",
    "ref-ratio-ranges-fg",
    "ref-cuw-starting-points"
   ],
   "chunk": "2_1"
  },
  {
   "id": "note-tab08-gyration-vma",
   "type": "student_annotation",
   "text": "Handwritten on the Tab 08 worksheet: VMA / compactability arrows over the 50-125 gyration span ('easier <- -> harder'); '25 gyrations ~= 1% VMA'; '8% VMA change available' (sum of the windows); ranges filled in by hand (95-105, .60-.75, .35-.5, .35-.5; FG 60-80, .6-1.0, .35-.5, .5-.65); 'Segregation Susceptibility' beside the OLD CA ratio; '.975 MAX' circled.",
   "annotates_id": "ex-starting-points-vs-gyrations",
   "confidence": "medium",
   "tags": [
    "handwriting",
    "gyrations",
    "vma",
    "tab-08"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "08",
    "pages": "22"
   },
   "verified": false,
   "chunk": "2_1"
  },
  {
   "id": "ex-vma-estimation-4-samples-cg",
   "type": "worked_example",
   "title": "VMA Estimation Based on ORIGINAL Factors - C-G Mix, 4 Production Samples (Tab 09, Slide 132 companion)",
   "scenario": "A 9.5 mm (3/8\") NMAS Coarse-graded mix (Design PCS 39.5%, VMA 15.0) with four production samples. Estimate each sample's VMA from the PREVIOUS sample using the ORIGINAL (rule-of-thumb) factors: PCS 4.00, CA 0.200, FAc 0.050, FAf 0.050. Sample ORDER provides the +/- values that result in the +/- CHANGE in VMA.",
   "given": {
    "nmas_mm": 9.5,
    "factors": {
     "pcs": 4.0,
     "ca": 0.2,
     "fac": 0.05,
     "faf": 0.05
    },
    "design": {
     "pct_pcs": 39.5,
     "ac_pct": 5.3,
     "vma": 15.0,
     "ca": 0.461,
     "fac": 0.544,
     "faf": 0.219
    },
    "samples": {
     "s1": {
      "pct_pcs": 37.6,
      "ac_pct": 5.4,
      "vma": 15.3,
      "ca": 0.493,
      "fac": 0.532,
      "faf": 0.16
     },
     "s2": {
      "pct_pcs": 38.6,
      "ac_pct": 5.5,
      "vma": 15.2,
      "ca": 0.578,
      "fac": 0.516,
      "faf": 0.221
     },
     "s3": {
      "pct_pcs": 37.1,
      "ac_pct": 5.3,
      "vma": 15.1,
      "ca": 0.565,
      "fac": 0.518,
      "faf": 0.219
     },
     "s4": {
      "pct_pcs": 35.8,
      "ac_pct": 5.5,
      "vma": 15.1,
      "ca": 0.597,
      "fac": 0.508,
      "faf": 0.264
     }
    }
   },
   "steps": [
    {
     "step_number": 1,
     "description": "PCS contributions, Sample(1-2), (2-3), (3-4)",
     "calculation": "(37.6-38.6)/4.0; (38.6-37.1)/4.0; (37.1-35.8)/4.0",
     "result": [
      "-0.25",
      "+0.38",
      "+0.33"
     ]
    },
    {
     "step_number": 2,
     "description": "CA ratio contributions, Sample(2-1), (3-2), (4-3) - order reversed to keep the sign consistent with 'CA up = VMA up'",
     "calculation": "(0.578-0.493)/0.200; (0.565-0.578)/0.200; (0.597-0.565)/0.200",
     "result": [
      "+0.43",
      "-0.07",
      "+0.16"
     ]
    },
    {
     "step_number": 3,
     "description": "FAc contributions, Sample(1-2), (2-3), (3-4)",
     "calculation": "(0.532-0.516)/0.050; (0.516-0.518)/0.050; (0.518-0.508)/0.050",
     "result": [
      "+0.32",
      "-0.04",
      "+0.20"
     ]
    },
    {
     "step_number": 4,
     "description": "FAf contributions, Sample(1-2), (2-3), (3-4)",
     "calculation": "(0.160-0.221)/0.050; (0.221-0.219)/0.050; (0.219-0.264)/0.050",
     "result": [
      "-1.22",
      "+0.04",
      "-0.90"
     ]
    },
    {
     "step_number": 5,
     "description": "TOTAL estimated change per comparison",
     "calculation": "-0.25+0.43+0.32-1.22; +0.38-0.07-0.04+0.04; +0.33+0.16+0.20-0.90",
     "result": [
      "-0.72",
      "+0.31",
      "-0.21"
     ]
    },
    {
     "step_number": 6,
     "description": "Estimated VMA = previous sample's ACTUAL VMA + total change",
     "calculation": "15.3-0.72; 15.2+0.31; 15.1-0.21",
     "result": [
      "14.6",
      "15.5",
      "14.9"
     ]
    },
    {
     "step_number": 7,
     "description": "Difference between estimated and actual",
     "calculation": "14.6-15.2; 15.5-15.1; 14.9-15.1",
     "result": [
      "-0.6",
      "+0.4",
      "-0.2"
     ]
    }
   ],
   "answer": {
    "estimated_vma": [
     14.6,
     15.5,
     14.9
    ],
    "actual_vma": [
     15.2,
     15.1,
     15.1
    ],
    "diff_est_minus_actual": [
     -0.6,
     0.4,
     -0.2
    ],
    "observation": "With un-optimized ORIGINAL factors, 2 of 3 comparisons land within +/-0.5% - optimization tightens the factors for this specific mix."
   },
   "variants": null,
   "procedure_id": "proc-estimate-vma-voids",
   "mix_types": [
    "dense_coarse_graded"
   ],
   "tags": [
    "estimation",
    "vma",
    "sample-to-previous",
    "tab-09"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "09",
    "pages": "24-25 (student sheet + printed key)"
   },
   "verified": true,
   "corroborated_by": [
    "walk-est-hand-calc-95mm-orig-opt"
   ],
   "chunk": "2_1"
  },
  {
   "id": "note-tab09-dont-compare-design",
   "type": "student_annotation",
   "text": "'Don't compare these (samples) to design because design doesn't account for plant breakdown.' Written above the Design column of the Tab 09 estimation worksheet. Student's hand-worked deltas (-.25, +.38, +.33; +.43, -.07, +.16; +.32, -.04, +.2; -1.22, +.04, -.9; totals -.72, +0.31, -0.21; estimated VMA 14.6, 15.5, 14.9; differences -0.6, 0.4, -0.2) all match the printed key.",
   "annotates_id": "ex-vma-estimation-4-samples-cg",
   "confidence": "high",
   "tags": [
    "handwriting",
    "plant-breakdown",
    "tab-09"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "09",
    "pages": "24"
   },
   "verified": true,
   "corroborated_by": [
    "heur-vma1-positive-normal"
   ],
   "chunk": "2_1"
  },
  {
   "id": "walk-est-main-tab-entry",
   "type": "tool_walkthrough",
   "title": "Estimation Sheet Review - Main Tab data entry rules (Tab 10, Slide 132 companion)",
   "tool": "estimation_sheet",
   "scenario": "Annotated screenshot review of the Estimation Sheet (Version 2023-01-16) Main tab for a 19.0 mm NMAS Coarse-Graded mix (Half = 9.5 mm, PCS = 4.75 mm, SCS = 1.18 mm, TCS = 0.300 mm), showing every data-entry rule for design trials and field samples.",
   "steps": [
    {
     "step_number": 1,
     "instruction": "For DESIGN trials, enter trial 1 in BOTH the 'Mix Design' column and the sample '1' column. Up to 12 sample columns are available per sheet page.",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 2,
     "instruction": "Enter the gradation value to 0.1% for EACH sieve shown, and enter the AC content value to 0.01%.",
     "cell_refs": null,
     "values": {
      "gradation_precision_pct": 0.1,
      "ac_precision_pct": 0.01
     }
    },
    {
     "step_number": 3,
     "instruction": "Each FIELD sample entered MUST have a gradation (ignition oven or extraction) and AC content that CORRESPONDS to the Gmb and Gmm results entered below it.",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 4,
     "instruction": "Enter ALL Gmb's and Gmm's for EACH sample or design trial (Gmb1/Gmb2/Gmb3 with Avg, Gmm1/Gmm2 with Avg).",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 5,
     "instruction": "Enter the CORRESPONDING Gsb for each design trial, or the DESIGN Gsb for FIELD samples.",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 6,
     "instruction": "Watch for cells in the Actual VMA and Actual Voids rows with a highlighted background: BLUE = the value entered is over 0.2% LESS than the corresponding calculated value; RED = over 0.2% MORE than the calculated value. Investigate the entry before trusting the sample.",
     "cell_refs": null,
     "values": {
      "highlight_threshold_pct": 0.2
     }
    },
    {
     "step_number": 7,
     "instruction": "The 'Diff in VMA' / 'Diff in Voids' blocks appear twice: the upper (blue-banded) block compares each sample to the MIX DESIGN; the lower (yellow-banded) block compares each sample to the PREVIOUS sample. Counters report 'Comparisons Within Plus or Minus 0.5% VMA' and 'Within Plus or Minus 0.5% Voids', plus Comparisons Evaluated / Comparisons Toggled Out.",
     "cell_refs": null,
     "values": {
      "comparison_band_pct": 0.5
     }
    },
    {
     "step_number": 8,
     "instruction": "The left factor panel lists Original and Adjusted factors (PCS 4.00, CA 0.200, FAc 0.050, FAc Dip 0.550, FAf 0.050, FAf Dip 0.550, AC Volume Correction 2.25) with COPY UP / COPY AC / RESET buttons; 'Go Optimize' jumps to the Optimize Factors area, 'Optimize' runs the macro from there, 'Home' returns.",
     "cell_refs": null,
     "values": {
      "original_factors": {
       "pcs": 4.0,
       "ca": 0.2,
       "fac": 0.05,
       "fac_dip": 0.55,
       "faf": 0.05,
       "faf_dip": 0.55,
       "ac_volume_correction": 2.25
      }
     }
    },
    {
     "step_number": 9,
     "instruction": "Factor Limits for the Optimization Macro (Min / Max): PCS 3.00 / 5.00; CA 0.100 / 0.300; FAc 0.025 / 0.075; FAc Dip 0.450 / 0.650; FAf 0.025 / 0.075; FAf Dip 0.450 / 0.650; AC Volume 1.50 / 3.00. Actual sample values for the FA ratios are echoed beside the limits for comparison.",
     "cell_refs": null,
     "values": {
      "factor_limits_cg": {
       "pcs": [
        3.0,
        5.0
       ],
       "ca": [
        0.1,
        0.3
       ],
       "fac": [
        0.025,
        0.075
       ],
       "fac_dip": [
        0.45,
        0.65
       ],
       "faf": [
        0.025,
        0.075
       ],
       "faf_dip": [
        0.45,
        0.65
       ],
       "ac_volume": [
        1.5,
        3.0
       ]
      }
     }
    },
    {
     "step_number": 10,
     "instruction": "A Factor History block (12 slots, Copy/Clear buttons per slot, Clear Factor History for all) stores each factor set tried: PCS, CA, FAc, FAc Dip, FAf, FAf Dip, Std Dev, Avg Diff, Evaluated, Toggled, Opt Method.",
     "cell_refs": null,
     "values": null
    }
   ],
   "lessons": [
    "Field-sample gradation/AC and the Gmb/Gmm entered must come from the SAME sample - mismatched pairs poison the estimation",
    "Blue/red highlighted Actual VMA/Voids cells are the sheet's built-in 0.2% sanity check on data entry",
    "The two Diff blocks separate the two accuracy questions: Sample-to-Design (production shift) vs Sample-to-Previous (estimation accuracy)"
   ],
   "extracted_heuristic_ids": [
    "heur-est-blue-red-entry-check"
   ],
   "practice_files": [
    "Class USB - Estimation Sheet workbook (Version 2023-01-16)"
   ],
   "tags": [
    "estimation-sheet",
    "tab-10",
    "data-entry",
    "main-tab"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "10",
    "pages": "1-2"
   },
   "verified": true,
   "corroborated_by": [
    "walk-est-ex08-blend-adjustment",
    "proc-toggle-and-reoptimize",
    "walk-est-ex02-wrong-mix-type-size"
   ],
   "chunk": "2_2"
  },
  {
   "id": "walk-est-optimize-factors-tab",
   "type": "tool_walkthrough",
   "title": "Estimation Sheet Review - Optimize Factors area (Tab 10, Slide 132 companion)",
   "tool": "estimation_sheet",
   "scenario": "Annotated screenshot of the Optimize Factors area: the default factor tables, macro settings, and the Better/Worse vs Standard Deviation analysis blocks for VMA and VOIDS (both Sample to Previous).",
   "steps": [
    {
     "step_number": 1,
     "instruction": "Rules-of-Thumb Values (the 'Original' factors): PCS 4.00, CA 0.200, FAc 0.050, FAc Dip 0.550, FAf 0.050, FAf Dip 0.550, AC Volume 2.25. Reset Rules-of-Thumb restores them. List Decimal selector shown = 3.",
     "cell_refs": null,
     "values": {
      "rules_of_thumb": {
       "pcs": 4.0,
       "ca": 0.2,
       "fac": 0.05,
       "fac_dip": 0.55,
       "faf": 0.05,
       "faf_dip": 0.55,
       "ac_volume": 2.25
      }
     }
    },
    {
     "step_number": 2,
     "instruction": "Max Change Allowed per factor (Reset Max Change restores): PCS 0.50, CA 0.050, FAc 0.025, FAf 0.025.",
     "cell_refs": null,
     "values": {
      "max_change_allowed": {
       "pcs": 0.5,
       "ca": 0.05,
       "fac": 0.025,
       "faf": 0.025
      }
     }
    },
    {
     "step_number": 3,
     "instruction": "Macro Incremental Change per loop (Reset Incremental Change restores): PCS 0.05, CA 0.005, FAc 0.005, FAc Dip 0.001, FAf 0.005, FAf Dip 0.001, Max Loop 20. 'Used in Macros' echo column: 5.00, 0.270, 0.060, 0.447, 0.070, 0.550.",
     "cell_refs": null,
     "values": {
      "incremental_change": {
       "pcs": 0.05,
       "ca": 0.005,
       "fac": 0.005,
       "fac_dip": 0.001,
       "faf": 0.005,
       "faf_dip": 0.001,
       "max_loop": 20
      }
     }
    },
    {
     "step_number": 4,
     "instruction": "Suggested Ranges for Ratios (Min / Max, Reset Ranges for Ratios restores): CA 0.60 / 0.75, FAc 0.35 / 0.50, FAf 0.35 / 0.50 (values shown for this C-G mix).",
     "cell_refs": null,
     "values": {
      "suggested_ratio_ranges_cg": {
       "ca": [
        0.6,
        0.75
       ],
       "fac": [
        0.35,
        0.5
       ],
       "faf": [
        0.35,
        0.5
       ]
      }
     }
    },
    {
     "step_number": 5,
     "instruction": "Min # of Comparisons for Opt Macro = 3; Min # of Comparisons for Std Dev = 6. Occasionally it helps to increase this number, up to and including 10, to see if better estimation results can be achieved: for a # of Sample-to-Previous comparisons LESS than this #, the macro uses a 'Better vs. Worse' analysis to Optimize; for values equal to or greater, it uses Standard Deviation. The value should NOT exceed 10.",
     "cell_refs": null,
     "values": {
      "min_comparisons_opt_macro": 3,
      "min_comparisons_std_dev": 6,
      "max_recommended": 10
     }
    },
    {
     "step_number": 6,
     "instruction": "VMA - Sample to Previous and VOIDS - Sample to Previous analysis blocks each tally, for Original vs Adjusted factors: Better / Worse / Same / Comparisons, Actual Values, Original and Adjusted within +/-0.5%, Orig Std Dev / Adj Std Dev, Orig Average / Adj Average.",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 7,
     "instruction": "When evaluating the 'AC Volume Correction Factor' to determine if it should be adjusted to improve the VOIDS estimation, look at the improvement that occurs in the Standard Deviation of the 'Voids - Sample to Previous' and look to see if the # of samples that got 'Better' exceeds the # of samples that got 'Worse'.",
     "cell_refs": null,
     "values": null
    }
   ],
   "lessons": [
    "The optimization macro is bounded: factor limits, max change allowed, and incremental step sizes are all visible and resettable",
    "Below the minimum comparison count the macro optimizes on Better-vs-Worse counts; at or above it, on Standard Deviation",
    "The AC Volume Correction Factor is judged on the VOIDS Sample-to-Previous standard deviation and the Better vs Worse tally"
   ],
   "extracted_heuristic_ids": [
    "heur-optimize-min-comparisons-3-6-10",
    "heur-acvc-adjust-better-worse"
   ],
   "practice_files": [
    "Class USB - Estimation Sheet workbook (Version 2023-01-16)"
   ],
   "tags": [
    "estimation-sheet",
    "tab-10",
    "optimization",
    "factors"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "10",
    "pages": "2-3"
   },
   "verified": true,
   "corroborated_by": [
    "heur-macro-order-fa-dips-first",
    "heur-average-diff-0150",
    "heur-design-trial-estimation-limits"
   ],
   "chunk": "2_2"
  },
  {
   "id": "walk-est-blend-adjustments-tab",
   "type": "tool_walkthrough",
   "title": "Estimation Sheet Review - Blend Adjustments Tab (Tab 10, Slide 132 companion)",
   "tool": "blend_adjustments_tab",
   "scenario": "Annotated screenshot of the Blend Adjustments tab, used in production to predict the VMA/Voids effect of a proposed aggregate-setting change before making it at the plant.",
   "steps": [
    {
     "step_number": 1,
     "instruction": "Top (yellow) block: enter CURRENT aggregate settings (Indv Agg %'s for #1-CA...#5-CA, #1-FA...#5-FA, MF, RAP1-RAP3, AC) and the CURRENT average cold feed/stockpile or hot bin gradations from the FIELD, full sieve stack 50.0 mm to 0.075 mm.",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 2,
     "instruction": "Enter the CURRENT Ignition Oven or Extraction Gradation in the 'Combined Blend 1' column, with Last Sample and Spread columns beside it. Ask: are these values REASONABLE?",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 3,
     "instruction": "Enter Bulk Spec Gr and % Absorption per aggregate; the sheet computes Combined Bulk Specific Gravity of ALL Aggregates (Gsb) and Combined Water Absorption. RAP block takes RAP AC, RAP Gmm, RAP Gb (screenshot shows RAP AC row with 2.500, Gb 1.0 area, and 1.0 factors per RAP column).",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 4,
     "instruction": "Bottom (pink) block: enter PROPOSED aggregate settings. The sheet produces the ADJUSTED blend ('Combined Blend 2' / green Adjusted Blend column) for use in the next open column on the Main sheet to estimate VMA and Voids.",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 5,
     "instruction": "The tab also reports the Change in Pba: 'Pba as % of Water Absorption' (65% shown) and Estimated Change in Pba, with a small reference grid of setting-change increments (+/-0.5 to +/-2.5 style steps).",
     "cell_refs": null,
     "values": {
      "pba_as_pct_water_absorption": 65
     }
    }
   ],
   "lessons": [
    "Blend Adjustments lets you trial a plant setting change on paper: current blend vs proposed blend, then push the adjusted blend into the Main sheet to estimate VMA/Voids",
    "Pba is estimated as a percentage of combined water absorption (65% default shown), so a blend change that alters absorption also shifts Pba"
   ],
   "extracted_heuristic_ids": [],
   "practice_files": [
    "Class USB - Estimation Sheet workbook (Version 2023-01-16)"
   ],
   "tags": [
    "estimation-sheet",
    "tab-10",
    "blend-adjustments",
    "production"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "10",
    "pages": "4"
   },
   "verified": true,
   "corroborated_by": [
    "heur-gsb-diff-0010-vma-03",
    "heur-pba-pct-water-absorption-range",
    "walk-est-ex08-blend-adjustment"
   ],
   "chunk": "2_2"
  },
  {
   "id": "walk-est-graph-tabs",
   "type": "tool_walkthrough",
   "title": "Estimation Sheet Review - the ten graph tabs (Tab 10, Slide 132 companion)",
   "tool": "estimation_sheet",
   "scenario": "Annotated screenshots of every graph tab in the Estimation Sheet and what each one plots, with the buttons that control sample range and Y-axis scaling.",
   "steps": [
    {
     "step_number": 1,
     "instruction": "'VMA and Voids' tab: plots VMA values (LEFT Y-axis, from row 20 on MAIN tab) and Voids values (RIGHT Y-axis, from row 21 on MAIN tab) per sample. 'Adjust Sample Range' lets the user choose beginning sample (1-95) and ending sample (5-100) - it adjusts the ending sample for ALL graphs. 'Adjust Y-Axes' auto-adjusts BOTH Y-axes relative to rows 20-21 data and also adjusts the Y-axes for each of the four Grad and AC graphs and the Vbe and Gse graph.",
     "cell_refs": [
      "MAIN row 20 (VMA)",
      "MAIN row 21 (Voids)"
     ],
     "values": null
    },
    {
     "step_number": 2,
     "instruction": "'Vbe and Gse' tab: plots the Moving Average of 3 Vbe values (LEFT Y-axis) and Moving Average of 3 Gse values (RIGHT Y-axis) from the Data tab.",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 3,
     "instruction": "'VMA1' tab: plots 'Diff in VMA' (estimated - actual) for each sample compared to the DESIGN, for Original vs Adjusted factors. Looking for CONSISTENCY. Normal for VMA to be OVER estimated compared to DESIGN due to shape and texture reduction through the HMA plant.",
     "cell_refs": null,
     "values": null
    },
    {
     "step_number": 4,
     "instruction": "'Voids1' tab: plots 'Diff in Voids' (estimated - actual) vs DESIGN. Looking for CONSISTENCY. Values should be within 0.2 or less of the 'Diff in VMA' values on the VMA1 graph; larger differences MAY indicate issues with Agg Gsb as it relates to calculating Pba (AC Absorption).",
     "cell_refs": null,
     "values": {
      "voids_vs_vma_band": 0.2
     }
    },
    {
     "step_number": 5,
     "instruction": "'VMA2 (Previous)' tab: plots 'Diff in VMA' (estimated - actual) vs the PREVIOUS sample. Looking for ZERO difference. Typically 80% or more of the comparisons are within +/-0.5%, which means the estimated VMA was within 0.5% of the actual VMA achieved for a given sample.",
     "cell_refs": null,
     "values": {
      "target_pct_within": 80,
      "band_pct": 0.5
     }
    },
    {
     "step_number": 6,
     "instruction": "'Voids2 (Previous)' tab: plots 'Diff in Voids' vs PREVIOUS sample. Looking for ZERO difference. Values should be within 0.2 or less of the 'Diff in VMA' values on VMA2; larger differences MAY indicate Agg Gsb / Pba (AC Absorption) issues.",
     "cell_refs": null,
     "values": {
      "voids_vs_vma_band": 0.2
     }
    },
    {
     "step_number": 7,
     "instruction": "Four sieve-vs-AC tabs plot a control sieve (LEFT Y-axis) against AC Content (RIGHT Y-axis) per sample: '1.18mm and AC', '2.36mm and AC', '4.75mm and AC', '9.5mm and AC'. Which tab to watch depends on mix NMAS (see ref-sieve-ac-tab-by-nmas).",
     "cell_refs": null,
     "values": null
    }
   ],
   "lessons": [
    "VMA1/Voids1 (vs design) are judged on consistency; VMA2/Voids2 (vs previous) are judged on zero difference - the accuracy target is 80% within +/-0.5%",
    "A Voids-diff graph drifting more than 0.2 from its VMA-diff twin points at Gsb/Pba (absorption) problems, not gradation",
    "The sieve-vs-AC graphs exist to catch segregation: gradation and AC should NOT track each other"
   ],
   "extracted_heuristic_ids": [
    "heur-vma-overest-design-production",
    "heur-voids-diff-tracks-vma-02",
    "heur-segregation-three-causes"
   ],
   "practice_files": [
    "Class USB - Estimation Sheet workbook (Version 2023-01-16)"
   ],
   "tags": [
    "estimation-sheet",
    "tab-10",
    "graphs",
    "vma",
    "voids",
    "segregation"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "10",
    "pages": "5-14"
   },
   "verified": true,
   "corroborated_by": [
    "heur-vma2-controls-optimization",
    "heur-vma2-accuracy-80-05"
   ],
   "chunk": "2_2"
  },
  {
   "id": "walk-est-hand-calc-95mm-orig-opt",
   "type": "tool_walkthrough",
   "title": "Hand-Calc Example on Est Sheet, Original vs Optimized factors - 9.5 mm C-G (Tab 11, Slide 141 companion)",
   "tool": "estimation_sheet",
   "scenario": "The Tab 09 hand-calculation data (9.5 mm NMAS Coarse-Graded mix: design + 4 plant samples) entered into the Estimation Sheet twice: once with the 'Original' rules-of-thumb factors, once after running Optimize. Half = 4.75 mm, PCS = 2.36 mm, SCS = 0.600 mm, TCS = 0.150 mm.",
   "steps": [
    {
     "step_number": 1,
     "instruction": "Design column: gradation 100.0 / 93.2 / 58.6 / 39.5 / 30.7 / 21.5 / 8.8 / 4.7 / 4.1 (12.5 mm down to 0.075 mm), %AC 5.30, Actual VMA 15.0; ratios CA 0.461, FAc 0.544, FAf 0.219.",
     "cell_refs": null,
     "values": {
      "design": {
       "gradation": [
        100.0,
        93.2,
        58.6,
        39.5,
        30.7,
        21.5,
        8.8,
        4.7,
        4.1
       ],
       "pct_ac": 5.3,
       "actual_vma": 15.0,
       "ca": 0.461,
       "fac": 0.544,
       "faf": 0.219
      }
     }
    },
    {
     "step_number": 2,
     "instruction": "Sample 1: 100.0 / 95.4 / 58.2 / 37.6 / 29.6 / 20.0 / 7.6 / 3.2 / 2.4, %AC 5.40, Actual VMA 15.3; CA 0.493, FAc 0.532, FAf 0.160. Sample 2: 100.0 / 96.9 / 61.1 / 38.6 / 29.5 / 19.9 / 8.3 / 4.4 / 3.6, %AC 5.50, VMA 15.2; CA 0.578, FAc 0.516, FAf 0.221. Sample 3: 100.0 / 95.9 / 59.8 / 37.1 / 28.5 / 19.2 / 7.9 / 4.2 / 3.4, %AC 5.30, VMA 15.1; CA 0.565, FAc 0.518, FAf 0.219. Sample 4: 100.0 / 96.0 / 59.8 / 35.8 / 26.6 / 18.2 / 8.3 / 4.8 / 3.8, %AC 5.50, VMA 15.1; CA 0.597, FAc 0.508, FAf 0.264.",
     "cell_refs": null,
     "values": {
      "sample1": {
       "gradation": [
        100.0,
        95.4,
        58.2,
        37.6,
        29.6,
        20.0,
        7.6,
        3.2,
        2.4
       ],
       "pct_ac": 5.4,
       "actual_vma": 15.3,
       "ca": 0.493,
       "fac": 0.532,
       "faf": 0.16
      },
      "sample2": {
       "gradation": [
        100.0,
        96.9,
        61.1,
        38.6,
        29.5,
        19.9,
        8.3,
        4.4,
        3.6
       ],
       "pct_ac": 5.5,
       "actual_vma": 15.2,
       "ca": 0.578,
       "fac": 0.516,
       "faf": 0.221
      },
      "sample3": {
       "gradation": [
        100.0,
        95.9,
        59.8,
        37.1,
        28.5,
        19.2,
        7.9,
        4.2,
        3.4
       ],
       "pct_ac": 5.3,
       "actual_vma": 15.1,
       "ca": 0.565,
       "fac": 0.518,
       "faf": 0.219
      },
      "sample4": {
       "gradation": [
        100.0,
        96.0,
        59.8,
        35.8,
        26.6,
        18.2,
        8.3,
        4.8,
        3.8
       ],
       "pct_ac": 5.5,
       "actual_vma": 15.1,
       "ca": 0.597,
       "fac": 0.508,
       "faf": 0.264
      }
     }
    },
    {
     "step_number": 3,
     "instruction": "With ORIGINAL factors (PCS 4.00, CA 0.200, FAc 0.050 + Dip 0.550, FAf 0.050 + Dip 0.550, AC Volume 2.25), 'Diff in VMA' Sample-to-Previous reads: Sample 2 = -0.6, Sample 3 = +0.4, Sample 4 = -0.2 - identical to the Tab 09 hand calculation.",
     "cell_refs": null,
     "values": {
      "diff_in_vma_previous_original": {
       "sample2": -0.6,
       "sample3": 0.4,
       "sample4": -0.2
      }
     }
    },
    {
     "step_number": 4,
     "instruction": "After 'Optimizing', the adjusted factors (Opt'd box) are PCS 5.00, CA 0.150, FAc 0.025 + Dip 0.550, FAf 0.055 + Dip 0.550, AC Volume 2.25, and 'Diff in VMA' Sample-to-Previous improves to: Sample 2 = 0.0, Sample 3 = +0.3, Sample 4 = +0.1.",
     "cell_refs": null,
     "values": {
      "optimized_factors": {
       "pcs": 5.0,
       "ca": 0.15,
       "fac": 0.025,
       "fac_dip": 0.55,
       "faf": 0.055,
       "faf_dip": 0.55,
       "ac_volume": 2.25
      },
      "diff_in_vma_previous_optimized": {
       "sample2": 0.0,
       "sample3": 0.3,
       "sample4": 0.1
      }
     }
    }
   ],
   "lessons": [
    "The Estimation Sheet reproduces the hand calculation exactly when loaded with the same data and the rules-of-thumb factors",
    "Optimization tightened all three comparisons to within +/-0.3 by moving PCS to its 5.00 limit, cutting CA to 0.150 and FAc to 0.025, and nudging FAf to 0.055"
   ],
   "extracted_heuristic_ids": [
    "heur-est-orig-factors-good-start"
   ],
   "practice_files": [
    "Class USB - Estimation Sheet workbook (Version 2023-01-16)"
   ],
   "tags": [
    "estimation-sheet",
    "tab-11",
    "worked-data",
    "optimization",
    "9.5mm",
    "coarse-graded"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "11",
    "pages": "15-16"
   },
   "verified": true,
   "corroborated_by": [
    "ex-vma-estimation-4-samples-cg"
   ],
   "chunk": "2_2"
  },
  {
   "id": "walk-est-19mm-dmf-orig-opt",
   "type": "tool_walkthrough",
   "title": "Est VMA and Voids on Est Sheet - C-G 19.0 mm DMF1-DMF7 (Tab 12A, Slide 141 companion)",
   "tool": "estimation_sheet",
   "scenario": "The 19.0 mm NMAS Coarse-Graded mix-design series (DMF1 through DMF7, all at 4.60 %AC) entered in the Estimation Sheet with the ORIGINAL rules-of-thumb factors, demonstrating how the sheet would have guided the design. DMF1 identification 41.9/44.9, 108.6% CUW; later trials 42.4/45.9 (107.6%), 41.6/45.4 (109.1%), 42.7/45.4 (107.1%), 43.9/45.8 (105.0%), 43.3/45.2 (106.1%), 42.4/45.2 (107.7%).",
   "steps": [
    {
     "step_number": 1,
     "instruction": "Each DMF trial is entered as a design trial with full gradation, %AC 4.60, Gmb/Gmm pairs and Gsb; Actual VMA runs 13.5 / 14.2 / 14.5 / 13.3 / 12.8 / 12.5 / 13.4 across DMF1-DMF7 with Actual Voids 4.8 / 5.0 / 5.7 / 4.4 / 3.8 / 3.5 / 5.1.",
     "cell_refs": null,
     "values": {
      "actual_vma_dmf1_7": [
       13.5,
       14.2,
       14.5,
       13.3,
       12.8,
       12.5,
       13.4
      ],
      "actual_voids_dmf1_7": [
       4.8,
       5.0,
       5.7,
       4.4,
       3.8,
       3.5,
       5.1
      ],
      "pct_ac_all": 4.6
     }
    },
    {
     "step_number": 2,
     "instruction": "'Diff in VMA' Sample-to-Previous with ORIGINAL factors: DMF2 = -0.1, DMF3 = -0.2, DMF4 = +0.3, DMF5 = +0.2, DMF6 = +0.4, DMF7 = -0.4 - every comparison within +/-0.5%.",
     "cell_refs": null,
     "values": {
      "diff_in_vma_previous": {
       "dmf2": -0.1,
       "dmf3": -0.2,
       "dmf4": 0.3,
       "dmf5": 0.2,
       "dmf6": 0.4,
       "dmf7": -0.4
      }
     }
    },
    {
     "step_number": 3,
     "instruction": "VMA - Sample to Previous summary: Standard Dev 0.312, Average Diff 0.031. Annotation: 'Estimation sheet would have reduced # of trials needed, using the Original factors.'",
     "cell_refs": null,
     "values": {
      "std_dev": 0.312,
      "average_diff": 0.031
     }
    }
   ],
   "lessons": [
    "Even with unoptimized rules-of-thumb factors, every DMF-to-DMF VMA estimate landed within +/-0.5% - the designer could have skipped several physical trials",
    "Use the Estimation Sheet DURING mix design, not just in production: estimate the next trial's VMA/Voids before batching it"
   ],
   "extracted_heuristic_ids": [
    "heur-est-orig-factors-good-start"
   ],
   "practice_files": [
    "Class USB - Estimation Sheet workbook (Version 2023-01-16)"
   ],
   "tags": [
    "estimation-sheet",
    "tab-12a",
    "mix-design",
    "19mm",
    "coarse-graded",
    "dmf"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "12A",
    "pages": "17"
   },
   "verified": false,
   "chunk": "2_2"
  },
  {
   "id": "ref-est-sheet-factor-defaults",
   "type": "reference_table",
   "title": "Estimation Sheet factor defaults, change bounds, and macro increments (C-G defaults shown)",
   "description": "Default 'Rules-of-Thumb' factor values, the maximum change the optimization macro may apply, the per-loop incremental step, and the suggested ranges for the actual sample ratios, as displayed on the Optimize Factors area for a 19.0 mm Coarse-Graded mix.",
   "columns": [
    "factor",
    "rule_of_thumb",
    "max_change_allowed",
    "macro_incremental_change",
    "optimization_limit_min",
    "optimization_limit_max"
   ],
   "rows": [
    [
     "PCS (% per 1% VMA)",
     4.0,
     0.5,
     0.05,
     3.0,
     5.0
    ],
    [
     "CA (ratio per 1% VMA)",
     0.2,
     0.05,
     0.005,
     0.1,
     0.3
    ],
    [
     "FAc (ratio per 1% VMA)",
     0.05,
     0.025,
     0.005,
     0.025,
     0.075
    ],
    [
     "FAc Dip",
     0.55,
     null,
     0.001,
     0.45,
     0.65
    ],
    [
     "FAf (ratio per 1% VMA)",
     0.05,
     0.025,
     0.005,
     0.025,
     0.075
    ],
    [
     "FAf Dip",
     0.55,
     null,
     0.001,
     0.45,
     0.65
    ],
    [
     "AC Volume Correction",
     2.25,
     null,
     null,
     1.5,
     3.0
    ]
   ],
   "notes": "Max macro loop count 20. Suggested ranges for actual sample ratios (C-G): CA 0.60-0.75, FAc 0.35-0.50, FAf 0.35-0.50. All tables have Reset buttons restoring defaults. Values shown are the C-G defaults; FG and SMA defaults differ per ref-estimation-optimization-limits.",
   "related_ids": [
    "ref-estimation-optimization-limits",
    "proc-estimation-sheet-optimization",
    "ref-vma-sensitivity-cg"
   ],
   "tags": [
    "estimation-sheet",
    "factors",
    "optimization",
    "reference"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "10",
    "pages": "2-3"
   },
   "verified": true,
   "corroborated_by": [
    "ref-vma-sensitivity-cg",
    "ref-fa-dip-by-mixtype",
    "heur-acvc-gsb-scaling"
   ],
   "chunk": "2_2"
  },
  {
   "id": "ref-sieve-ac-tab-by-nmas",
   "type": "reference_table",
   "title": "Which sieve-vs-AC graph to watch, by mix NMAS (segregation check)",
   "description": "The Estimation Sheet's four gradation-vs-AC graphs each serve specific NMAS mixes: watch the sieve whose relationship with AC/Binder content best reveals segregation for that mix size.",
   "columns": [
    "mix_nmas",
    "sieve_tab_to_watch"
   ],
   "rows": [
    [
     "4.75 mm (#4) NMAS",
     "1.18 mm (#16) and AC"
    ],
    [
     "12.5 mm (1/2\") and 9.5 mm (3/8\") NMAS",
     "2.36 mm (#8) and AC"
    ],
    [
     "25.0 mm (1\") and 19.0 mm (3/4\") NMAS",
     "4.75 mm (#4) and AC"
    ],
    [
     "37.5 mm (1-1/2\") NMAS",
     "9.5 mm (3/8\") and AC"
    ]
   ],
   "notes": "For a 37.5 mm mix, ENSURE it truly is a 37.5 mm NMAS mix by the Bailey Method NMAS definition using 15% - these mixes often fall under a 25.0 mm (1\") NMAS using 15%. In that case, it's best to look for a trend between the 4.75 mm (#4) sieve and AC/Binder content.",
   "related_ids": [
    "heur-gradation-ac-not-track",
    "heur-segregation-three-causes",
    "heur-bailey-nmas-15pct"
   ],
   "tags": [
    "estimation-sheet",
    "segregation",
    "nmas",
    "graphs",
    "reference"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "10",
    "pages": "11-14"
   },
   "verified": true,
   "corroborated_by": [
    "heur-sieve-ac-graph-mapping-doc",
    "walk-est-ex08-blend-adjustment"
   ],
   "chunk": "2_2"
  },
  {
   "id": "heur-est-blue-red-entry-check",
   "type": "heuristic",
   "title": "Blue/red highlighted Actual VMA or Voids cell = entry more than 0.2% off the calculated value",
   "statement": "On the Estimation Sheet Main tab, watch for cells in the Actual VMA and Actual Voids rows with a highlighted background: BLUE means the value entered is over 0.2% LESS than the corresponding calculated value; RED means it is over 0.2% MORE. Either color means recheck the gradation/AC/Gmb/Gmm entries for that sample before trusting it.",
   "context": "Data entry QC on the Estimation Sheet Main tab.",
   "related_ids": [
    "walk-est-main-tab-entry"
   ],
   "tags": [
    "estimation-sheet",
    "data-entry",
    "qc"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "10",
    "pages": "1"
   },
   "verified": false,
   "chunk": "2_2"
  },
  {
   "id": "heur-optimize-min-comparisons-3-6-10",
   "type": "heuristic",
   "title": "Optimization needs 3+ comparisons (6+ for Std Dev mode); raising the threshold up to 10 can help",
   "statement": "The optimization macro requires a minimum of 3 Sample-to-Previous comparisons; the Standard-Deviation analysis requires 6. Below the threshold the macro optimizes on a Better-vs-Worse tally; at or above it, on Standard Deviation. Occasionally it helps to increase the threshold - up to and including 10, never more - to see if better estimation results can be achieved.",
   "context": "Running Optimize on the Estimation Sheet with limited production samples.",
   "related_ids": [
    "proc-estimation-sheet-optimization",
    "heur-average-diff-0150",
    "walk-est-optimize-factors-tab"
   ],
   "tags": [
    "estimation-sheet",
    "optimization",
    "thresholds"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "10",
    "pages": "3"
   },
   "verified": true,
   "corroborated_by": [
    "heur-average-diff-0150",
    "heur-macro-order-fa-dips-first"
   ],
   "chunk": "2_2"
  },
  {
   "id": "heur-acvc-adjust-better-worse",
   "type": "heuristic",
   "title": "Judge an AC Volume Correction Factor change by the VOIDS Std Dev and the Better-vs-Worse tally",
   "statement": "When evaluating whether the AC Volume Correction Factor should be adjusted to improve the VOIDS estimation, look at the improvement in the Standard Deviation of 'Voids - Sample to Previous' and check whether the number of samples that got 'Better' exceeds the number that got 'Worse'. Only keep the adjustment if both say yes.",
   "context": "Tuning the voids estimation after VMA estimation is already tracking well.",
   "related_ids": [
    "heur-negative-pba-acvc",
    "walk-est-optimize-factors-tab"
   ],
   "tags": [
    "estimation-sheet",
    "ac-volume-correction",
    "voids",
    "optimization"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "10",
    "pages": "3"
   },
   "verified": true,
   "corroborated_by": [
    "heur-acvc-gsb-scaling",
    "walk-est-ex07-adjust-ac-vol-correction"
   ],
   "chunk": "2_2"
  },
  {
   "id": "heur-vma-overest-design-production",
   "type": "heuristic",
   "title": "VMA is normally OVER-estimated versus design in production (plant shape/texture reduction)",
   "statement": "On the VMA1 graph (samples compared to the original design), it is normal for VMA to be OVER estimated compared to DESIGN, because aggregate shape and texture are reduced through the HMA plant - field VMA collapses below what the design-based estimate predicts. Judge this graph on consistency, not on zero difference.",
   "context": "Interpreting the VMA1 (vs design) graph during production.",
   "related_ids": [
    "heur-vma1-positive-normal",
    "walk-est-graph-tabs",
    "note-tab09-dont-compare-design"
   ],
   "tags": [
    "estimation-sheet",
    "vma",
    "production",
    "plant-breakdown"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "10",
    "pages": "7"
   },
   "verified": true,
   "chunk": "2_2"
  },
  {
   "id": "heur-voids-diff-tracks-vma-02",
   "type": "heuristic",
   "title": "Diff-in-Voids should stay within 0.2 of Diff-in-VMA; larger spread points at Gsb/Pba",
   "statement": "Values on the Voids1/Voids2 graphs should be within 0.2 or less of the corresponding 'Diff in VMA' values on the VMA1/VMA2 graphs. Larger differences MAY indicate issues with the aggregate Gsb as it relates to calculating Pba (AC absorption) - a gravity/absorption problem, not a gradation problem.",
   "context": "Diagnosing why voids estimation is worse than VMA estimation.",
   "related_ids": [
    "heur-negative-pba-acvc",
    "walk-est-graph-tabs"
   ],
   "tags": [
    "estimation-sheet",
    "voids",
    "pba",
    "gsb",
    "diagnostics"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "10",
    "pages": "8, 10"
   },
   "verified": true,
   "corroborated_by": [
    "heur-voids-vma-spread-02",
    "heur-voids1-gsb-diagnosis",
    "walk-est-ex06-gsb-gravity-issue"
   ],
   "chunk": "2_2"
  },
  {
   "id": "heur-segregation-three-causes",
   "type": "heuristic",
   "title": "When gradation and AC track each other: three possible causes, and how the estimate isolates the lab",
   "statement": "AC/Binder content and gradation should NOT track each other. When they do, one of three things is happening: (1) you're getting a good sample of SEGREGATED mix, (2) you're getting a SEGREGATED sample of good mix, or (3) the sample (good or bad) is being segregated in the lab. When a sample estimates well (within +/-0.5% Estimated-to-Actual VMA, Sample to Previous), the sample was NOT segregated in the lab - so investigate causes 1 or 2.",
   "context": "Interpreting the sieve-vs-AC graphs on the Estimation Sheet; separating plant segregation from sampling/lab-splitting problems.",
   "related_ids": [
    "heur-gradation-ac-not-track",
    "ref-sieve-ac-tab-by-nmas",
    "heur-vma2-accuracy-80-05"
   ],
   "tags": [
    "estimation-sheet",
    "segregation",
    "sampling",
    "diagnostics"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "10",
    "pages": "11-14"
   },
   "verified": true,
   "chunk": "2_2"
  },
  {
   "id": "heur-est-orig-factors-good-start",
   "type": "heuristic",
   "title": "Rules-of-thumb factors already estimate well; optimize to tighten, and use the sheet during design",
   "statement": "The unoptimized 'Original' rules-of-thumb factors typically estimate VMA within +/-0.5% sample-to-previous (the 19.0 mm DMF series landed every comparison within +/-0.4 with Std Dev 0.312). Optimizing tightens further (the 9.5 mm example went from -0.6/+0.4/-0.2 to 0.0/+0.3/+0.1). Used during mix design, the Estimation Sheet would have reduced the number of physical trials needed.",
   "context": "Setting expectations for estimation accuracy and motivating use of the sheet in design, not just production.",
   "related_ids": [
    "walk-est-hand-calc-95mm-orig-opt",
    "walk-est-19mm-dmf-orig-opt",
    "ex-vma-estimation-4-samples-cg",
    "proc-estimate-vma-voids"
   ],
   "tags": [
    "estimation-sheet",
    "optimization",
    "mix-design",
    "accuracy"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "11-12A",
    "pages": "15-17"
   },
   "verified": true,
   "chunk": "2_2"
  },
  {
   "id": "walk-est-19mm-dmf-optimized",
   "type": "tool_walkthrough",
   "title": "C-G 19.0 mm DMF series after Optimizing (Tab 12A page 2, Slide 141 companion)",
   "tool": "estimation_sheet",
   "scenario": "The same 19.0 mm NMAS Coarse-Graded DMF1-DMF7 series as walk-est-19mm-dmf-orig-opt, after running the Optimize macro, with three printed teaching annotations.",
   "steps": [
    {
     "step_number": 1,
     "instruction": "Optimized ('Opt'd') factors: PCS 3.00, CA 0.235, FAc 0.030 + Dip 0.550, FAf 0.025 + Dip 0.550, AC Volume 2.25 - PCS driven to its lower limit (3.00) and FAf to its lower limit (0.025).",
     "cell_refs": null,
     "values": {
      "optimized_factors": {
       "pcs": 3.0,
       "ca": 0.235,
       "fac": 0.03,
       "fac_dip": 0.55,
       "faf": 0.025,
       "faf_dip": 0.55,
       "ac_volume": 2.25
      }
     }
    },
    {
     "step_number": 2,
     "instruction": "After 'Optimizing', MORE of the values are closer to ZERO: Diff in VMA Sample-to-Previous reads approximately +0.1 / -0.2 / 0.0 / +0.3 / +0.2 / -0.1 for DMF2-DMF7. VMA - Sample to Previous summary improves from Std Dev 0.312 / Avg Diff 0.031 (Original) to Std Dev 0.191 / Avg Diff 0.060 (Optimized).",
     "cell_refs": null,
     "values": {
      "std_dev_optimized": 0.191,
      "average_diff_optimized": 0.06,
      "diff_in_vma_previous_optimized": {
       "dmf2": 0.1,
       "dmf3": -0.2,
       "dmf4": 0.0,
       "dmf5": 0.3,
       "dmf6": 0.2,
       "dmf7": -0.1
      }
     }
    },
    {
     "step_number": 3,
     "instruction": "Annotation 1: 'VCAmix is > Vol FA for ALL trials because %CA LUW > 105%!' - every DMF trial ran the chosen unit weight above 105% of CA LUW (105.0-109.1%), so the coarse fraction is overloaded relative to the C-G guideline (VCAmix should be <= Volume of FA).",
     "cell_refs": null,
     "values": {
      "cuw_range_pct": [
       105.0,
       109.1
      ]
     }
    },
    {
     "step_number": 4,
     "instruction": "Annotation 2: a visible 'SHIFT' in the estimation differences mid-series 'was a function of resampling stockpiles!' - the aggregate characterization changed, not the mix.",
     "cell_refs": null,
     "values": null
    }
   ],
   "lessons": [
    "Optimization cut the Sample-to-Previous Std Dev from 0.312 to 0.191 on a design-trial series",
    "Running CUW above 105% of CA LUW put VCAmix above the Volume of FA on every trial - a built-in warning the sheet exposes",
    "A step-change (shift) in estimation residuals often traces to re-characterized inputs (stockpile resampling), not to the mix itself"
   ],
   "extracted_heuristic_ids": [
    "heur-cuw-over-105-vcamix",
    "heur-estimation-shift-resampling"
   ],
   "practice_files": [
    "Class USB - Estimation Sheet workbook (Version 2023-01-16)"
   ],
   "tags": [
    "estimation-sheet",
    "tab-12a",
    "optimization",
    "19mm",
    "coarse-graded",
    "vcamix"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "12A",
    "pages": "1"
   },
   "verified": false,
   "chunk": "2_3"
  },
  {
   "id": "walk-est-19mm-proposed-trials",
   "type": "tool_walkthrough",
   "title": "Screening 'potential' trial blends on the Est Sheet BEFORE batching - C-G 19.0 mm (Tab 12B, Slide 141 companion)",
   "tool": "estimation_sheet",
   "scenario": "Starting a new 19.0 mm C-G design: four 'potential' trial blends developed with the VBS are placed on the Estimation Sheet BEFORE any actual results exist, to estimate how VMA might differ between the blends and pick which three get one-point trials.",
   "steps": [
    {
     "step_number": 1,
     "instruction": "Blend #1 (100.0% CA LUW): gradation 100.0 / 95.1 / 75.2 / 63.7 / 37.2 / 22.4 / 13.8 / 8.0 / 5.7 / 4.5 / 3.9 (25.0 mm to 0.075 mm), %AC 4.60, AC Absorption 0.78; ratios CA 0.730, FAc 0.371, FAf 0.413. Blend #2 (103.8%): 100.0 / 94.6 / 74.3 / 62.5 / 35.5 / 20.1 / 12.5 / 7.4 / 5.1 / 4.1 / 3.6; CA 0.720, FAc 0.352, FAf 0.408; Est Pba 0.72. Blend #3 (96.7%): 100.0 / 96.8 / 77.4 / 66.9 / 38.7 / 24.9 / 15.8 / 9.6 / 6.7 / 4.9 / 4.2; CA 0.852, FAc 0.408, FAf 0.424; Est Pba 0.85. Blend #4 (102.4%): 100.0 / 95.2 / 75.8 / 64.5 / 36.1 / 19.9 / 11.6 / 7.3 / 5.0 / 3.9 / 3.4; CA 0.800, FAc 0.321, FAf 0.431; Est Pba 0.75.",
     "cell_refs": null,
     "values": {
      "blend1": {
       "pct_ca_luw": 100.0,
       "gradation": [
        100.0,
        95.1,
        75.2,
        63.7,
        37.2,
        22.4,
        13.8,
        8.0,
        5.7,
        4.5,
        3.9
       ],
       "ca": 0.73,
       "fac": 0.371,
       "faf": 0.413,
       "est_pba": 0.78
      },
      "blend2": {
       "pct_ca_luw": 103.8,
       "gradation": [
        100.0,
        94.6,
        74.3,
        62.5,
        35.5,
        20.1,
        12.5,
        7.4,
        5.1,
        4.1,
        3.6
       ],
       "ca": 0.72,
       "fac": 0.352,
       "faf": 0.408,
       "est_pba": 0.72
      },
      "blend3": {
       "pct_ca_luw": 96.7,
       "gradation": [
        100.0,
        96.8,
        77.4,
        66.9,
        38.7,
        24.9,
        15.8,
        9.6,
        6.7,
        4.9,
        4.2
       ],
       "ca": 0.852,
       "fac": 0.408,
       "faf": 0.424,
       "est_pba": 0.85
      },
      "blend4": {
       "pct_ca_luw": 102.4,
       "gradation": [
        100.0,
        95.2,
        75.8,
        64.5,
        36.1,
        19.9,
        11.6,
        7.3,
        5.0,
        3.9,
        3.4
       ],
       "ca": 0.8,
       "fac": 0.321,
       "faf": 0.431,
       "est_pba": 0.75
      },
      "pct_ac_all": 4.6
     }
    },
    {
     "step_number": 2,
     "instruction": "Enter the AC content (as 100% mix) in row 18 - left the same for all four blends. Enter the estimated Pba for each blend in row 50 (Est Pba), taken from the corresponding VBS sheet for each blend (set to calculate at 65% of combined water absorption).",
     "cell_refs": [
      "row 18 (AC content)",
      "row 50 (Est Pba)"
     ],
     "values": {
      "pba_pct_water_absorption": 65
     }
    },
    {
     "step_number": 3,
     "instruction": "ASSUME a VMA for trial #1: 13.5% VMA was chosen since it is a 19.0 mm NMAS mix and that's the minimum requirement; 4.0% Voids was chosen since that's a typical requirement for choosing the Optimum AC content. Then the 'Diff in VMA' from row 46 estimates the VMA for trials 2, 3 and 4: simply use the values from row 46 to come up with the estimated VMA for the other blends.",
     "cell_refs": [
      "row 46 (Diff in VMA)"
     ],
     "values": {
      "assumed_vma_trial1": 13.5,
      "assumed_voids_trial1": 4.0
     }
    },
    {
     "step_number": 4,
     "instruction": "Resulting estimates chain sample-to-PREVIOUS (each blend vs the one before it): Diff in VMA #2 = +0.9, #3 = -1.6, #4 = +2.0 (Diff in Voids +0.7 / -1.3 / +1.8), giving estimated VMA 13.5 -> 14.4 -> 12.8 -> 14.8 and estimated Voids 4.0 -> 4.7 -> 3.4 -> 5.2 (the chain reproduces every printed value exactly).",
     "cell_refs": null,
     "values": {
      "diff_in_vma": {
       "blend2": 0.9,
       "blend3": -1.6,
       "blend4": 2.0
      },
      "diff_in_voids": {
       "blend2": 0.7,
       "blend3": -1.3,
       "blend4": 1.8
      },
      "est_vma": {
       "blend2": 14.4,
       "blend3": 12.8,
       "blend4": 14.8
      },
      "est_voids": {
       "blend2": 4.7,
       "blend3": 3.4,
       "blend4": 5.2
      }
     }
    },
    {
     "step_number": 5,
     "instruction": "Class question: what difference in VMA would you like between the three trial blends? Which two trials would you choose, in addition to trial #1?",
     "cell_refs": null,
     "values": null
    }
   ],
   "lessons": [
    "The Estimation Sheet works with ZERO actual results: assume spec-minimum VMA and typical design voids for blend #1 and the diffs estimate everything else",
    "This turns four candidate blends into three one-point trials chosen for useful VMA spread, instead of batching all four blind",
    "All blends compared this way MUST be the same TYPE and NMAS, and estimated differences ignore shape/texture/strength differences between blends"
   ],
   "extracted_heuristic_ids": [
    "heur-trial1-assume-min-vma",
    "heur-same-type-nmas-blends"
   ],
   "practice_files": [
    "Class USB - Estimation Sheet workbook (Version 2023-01-16)"
   ],
   "tags": [
    "estimation-sheet",
    "tab-12b",
    "mix-design",
    "trial-blends",
    "19mm",
    "coarse-graded"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "12B",
    "pages": "2-3"
   },
   "verified": false,
   "chunk": "2_3"
  },
  {
   "id": "proc-screen-trial-blends-est-sheet",
   "type": "procedure",
   "title": "Screen potential trial blends on the Estimation Sheet before batching",
   "purpose": "Use the VBS + Estimation Sheet together at the START of a new design to pick which trial blends are worth physically batching, saving one-point trials.",
   "steps": [
    "Develop several (e.g. four) 'potential' trial blends with the Volume Blending Spreadsheet, all the same mix TYPE and NMAS.",
    "Anytime a potential trial blend is considered, evaluate the Bailey Principles relative to the suggested ranges, and consider their impact on compactability and segregation susceptibility.",
    "Place all potential blends on the Estimation Sheet as design trials BEFORE any actual results exist: same AC content (100% mix basis, row 18) for every blend; estimated Pba per blend (row 50) from each blend's VBS sheet (65% of combined water absorption).",
    "Assume trial #1's VMA at the spec minimum for the NMAS (e.g. 13.5% for 19.0 mm) and voids at the typical optimum-AC requirement (4.0%).",
    "Read 'Diff in VMA' (row 46) to estimate each other blend's VMA relative to trial #1; do the same for voids.",
    "Choose the blends (e.g. three of four) that give a useful spread of estimated VMA, and run a one-point trial on each to determine actual VMA and Voids.",
    "Do NOT forget: actual VMA may differ from these estimates due to differences in shape, texture and/or strength between the trial blends - the estimate only sees gradation and Pba."
   ],
   "notes": "Demonstrated on the Tab 12B 19.0 mm C-G example (walk-est-19mm-proposed-trials). Complements proc-estimate-vma-voids, which covers estimation once actual results exist.",
   "related_ids": [
    "walk-est-19mm-proposed-trials",
    "proc-estimate-vma-voids",
    "heur-trial1-assume-min-vma",
    "heur-same-type-nmas-blends"
   ],
   "tags": [
    "estimation-sheet",
    "mix-design",
    "trial-blends",
    "procedure"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "12B",
    "pages": "2-3"
   },
   "verified": true,
   "corroborated_by": [
    "proc-estimate-vma-voids",
    "heur-design-trial-estimation-limits"
   ],
   "chunk": "2_3"
  },
  {
   "id": "walk-est-fg-95mm-orig-opt",
   "type": "tool_walkthrough",
   "title": "Est VMA and Voids on Est Sheet - F-G 9.5 mm, Original vs Optimized (Tab 13, Slide 141 companion)",
   "tool": "estimation_sheet",
   "scenario": "A 9.5 mm NMAS FINE-Graded design series (Trial 1 - Trial 6) on the Estimation Sheet's fine-graded layout (New Half = 1.18 mm, New PCS = 0.600 mm, New SCS = 0.150 mm), first with Original factors, then Optimized. Trial 1 gradation 100.0 / 99.9 / 98.0 / 74.6 / 46.7 / 37.9 / 20.5 / 9.6 / 6.3 (19.0 mm to 0.150 mm block shown), %AC 5.40 (Trial 6 at 5.30); the FG ratio block reports Original-sieve ratios plus New CA and New FAc.",
   "steps": [
    {
     "step_number": 1,
     "instruction": "Actual VMA for Trials 1-6: 15.5 / 17.4 / 15.6 / 16.7 / 16.6 / 16.1; Actual Voids 4.7 / 7.1 / 4.6 / 6.0 / 5.7 / 5.2.",
     "cell_refs": null,
     "values": {
      "actual_vma": [
       15.5,
       17.4,
       15.6,
       16.7,
       16.6,
       16.1
      ],
      "actual_voids": [
       4.7,
       7.1,
       4.6,
       6.0,
       5.7,
       5.2
      ]
     }
    },
    {
     "step_number": 2,
     "instruction": "With ORIGINAL FG factors (Orig PCS 6.00, New CA 0.350, New FAc 0.050 + New FAc Dip 0.500, New FAf 0.050 + New FAf Dip 0.500, AC Volume 2.25): Diff in VMA Sample-to-Previous approximately -0.3 / -0.4 / +0.6 / +0.4 / -0.8 for Trials 2-6; Std Dev 0.576, Average Diff -0.086.",
     "cell_refs": null,
     "values": {
      "original_factors_fg": {
       "orig_pcs": 6.0,
       "new_ca": 0.35,
       "new_fac": 0.05,
       "new_fac_dip": 0.5,
       "new_faf": 0.05,
       "new_faf_dip": 0.5,
       "ac_volume": 2.25
      },
      "diff_in_vma_previous_original": {
       "trial2": -0.3,
       "trial3": -0.4,
       "trial4": 0.6,
       "trial5": 0.4,
       "trial6": -0.8
      },
      "std_dev": 0.576,
      "average_diff": -0.086
     }
    },
    {
     "step_number": 3,
     "instruction": "After 'Optimizing' (Opt'd: Orig PCS 5.00, New CA 0.450, New FAc 0.075 + Dip 0.500, AC Volume 2.25), MORE of the values are closer to ZERO: approximately -0.6 / 0.0 / +0.3 / +0.3 / -0.5; Std Dev 0.446, Average Diff -0.087.",
     "cell_refs": null,
     "values": {
      "optimized_factors_fg": {
       "orig_pcs": 5.0,
       "new_ca": 0.45,
       "new_fac": 0.075,
       "new_fac_dip": 0.5,
       "ac_volume": 2.25
      },
      "diff_in_vma_previous_optimized": {
       "trial2": -0.6,
       "trial3": 0.0,
       "trial4": 0.3,
       "trial5": 0.3,
       "trial6": -0.5
      },
      "std_dev_optimized": 0.446,
      "average_diff_optimized": -0.087
     }
    }
   ],
   "lessons": [
    "The fine-graded layout estimates from the NEW (fine-fraction) control sieves: Original %PCS plus New CA and New FAc drive the FG estimation",
    "The FG rules-of-thumb (Orig PCS 6.0, New CA 0.35, New FAc/FAf 0.05) again estimate within about +/-0.8 unoptimized; optimizing pulled the Std Dev from 0.576 to 0.446",
    "Same conclusion as the C-G series: the estimation sheet would have reduced the number of trials needed, even with Original factors"
   ],
   "extracted_heuristic_ids": [
    "heur-est-orig-factors-good-start"
   ],
   "practice_files": [
    "Class USB - Estimation Sheet workbook (Version 2023-01-16)"
   ],
   "tags": [
    "estimation-sheet",
    "tab-13",
    "fine-graded",
    "9.5mm",
    "optimization",
    "mix-design"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "13",
    "pages": "4-5"
   },
   "verified": false,
   "chunk": "2_3"
  },
  {
   "id": "heur-trial1-assume-min-vma",
   "type": "heuristic",
   "title": "With no actual results, anchor trial #1 at spec-minimum VMA and typical design voids",
   "statement": "To estimate VMA/Voids for candidate blends before ANY mixing: assume trial #1 achieves the specification minimum VMA for the NMAS (e.g. 13.5% for a 19.0 mm mix) and a typical optimum-AC voids target (4.0%), then read the sheet's Diff-in-VMA/Voids rows to get estimated values for every other candidate blend relative to trial #1.",
   "context": "New mix design, screening candidate blends on the Estimation Sheet before one-point trials.",
   "related_ids": [
    "walk-est-19mm-proposed-trials",
    "proc-screen-trial-blends-est-sheet"
   ],
   "tags": [
    "estimation-sheet",
    "mix-design",
    "vma",
    "assumptions"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "12B",
    "pages": "3"
   },
   "verified": false,
   "chunk": "2_3"
  },
  {
   "id": "heur-same-type-nmas-blends",
   "type": "heuristic",
   "title": "Blend-to-blend estimation only works within the same mix TYPE and NMAS - and ignores shape/texture/strength",
   "statement": "When using the Estimation Sheet to compare potential trial blends, ALL blends must be the same TYPE (coarse-graded vs fine-graded vs SMA) and the same NMAS. Do NOT forget that actual VMA change can differ from the estimate due to differences in shape, texture and/or strength between the trial blends - the estimation only sees gradation and estimated Pba.",
   "context": "Screening candidate blends before batching; interpreting estimate-vs-actual gaps between blends with different aggregate sources.",
   "related_ids": [
    "walk-est-19mm-proposed-trials",
    "proc-screen-trial-blends-est-sheet",
    "heur-estimation-unique-sensitivity"
   ],
   "tags": [
    "estimation-sheet",
    "mix-design",
    "limitations",
    "shape-texture"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "12B",
    "pages": "2"
   },
   "verified": true,
   "chunk": "2_3"
  },
  {
   "id": "heur-cuw-over-105-vcamix",
   "type": "heuristic",
   "title": "C-G chosen unit weight above ~105% of CA LUW pushes VCAmix above the Volume of FA",
   "statement": "In the 19.0 mm C-G DMF series, VCAmix was GREATER than the Volume of FA for ALL trials because the %CA LUW chosen was above 105% on every trial (105.0-109.1%). For a coarse-graded mix the guideline is VCAmix <= Volume of FA; running the CUW that high overloads the coarse fraction and the sheet's VCAmix comparison flags it on every trial.",
   "context": "Choosing the CA chosen unit weight for coarse-graded designs; interpreting the VCAmix vs Volume-of-FA comparison.",
   "related_ids": [
    "ref-vcamix-vs-fa-volume",
    "walk-est-19mm-dmf-optimized"
   ],
   "tags": [
    "vcamix",
    "cuw",
    "coarse-graded",
    "design-limits"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "12A",
    "pages": "1"
   },
   "verified": true,
   "corroborated_by": [
    "heur-cg-cuw-above-105"
   ],
   "chunk": "2_3"
  },
  {
   "id": "heur-estimation-shift-resampling",
   "type": "heuristic",
   "title": "A step-change ('shift') in estimation residuals usually means the INPUTS changed - e.g. resampled stockpiles",
   "statement": "When the Diff-in-VMA series shows a sudden shift (a step change in the residuals rather than random scatter), suspect a change in the characterization inputs before suspecting the mix: in the 19.0 mm DMF example the 'SHIFT' was a function of resampling stockpiles - new gradations/gravities entered mid-series moved the estimates, not the plant.",
   "context": "Diagnosing sudden changes in estimation accuracy mid-series (design or production).",
   "related_ids": [
    "walk-est-19mm-dmf-optimized",
    "heur-gradation-ac-not-track"
   ],
   "tags": [
    "estimation-sheet",
    "diagnostics",
    "stockpiles",
    "shift"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "12A",
    "pages": "1"
   },
   "verified": true,
   "chunk": "2_3"
  },
  {
   "id": "proc-evaluate-existing-mix-quickref",
   "type": "procedure",
   "title": "Evaluating An Existing Mix - one-page quick reference (11 steps)",
   "purpose": "Reverse-engineer an existing mix (virgin or recycle) in the VBS to recover its Bailey parameters. Success criteria: VIRGIN mix - final calculated Individual Agg %'s within 0.1% of the Original Agg %'s; RECYCLE mix - Virgin PCS % within 0.1%, Virgin CA ratio as close as possible, and FA Mass Blend matched as close as possible.",
   "steps": [
    "Data required: individual aggregate gradations and %'s (as 100% Agg), Gsb of each aggregate, LUW and RUW for each CA and each FA. Determine the NMAS of the Original DMF. For C-G and F-G mixes utilize the Dense-Graded VBS; for SMA mixes utilize the SMA VBS.",
    "Step 1 - Enter each stockpile gradation in the appropriate column (CA, FA and Recycle): start at top sieve, % passing for each sieve to nearest 0.1%. CA has 49.9% or less passing the DMF PCS; FA has 50.0% or more.",
    "Step 2 - Enter Original individual stockpile %'s (100% aggregate) in the 'Recycle' blend row.",
    "Step 3 - Enter Unit Weights for Virgin CA's and FA's (kg/m3).",
    "Step 4 - Enter Gsb for each individual stockpile (Virgin and Recycle).",
    "Step 5 - Enter Conversion Factor for Unit Weights (1000 for Metric).",
    "Step 6 - Estimate VOLUME blend of Virgin CA's and of Virgin FA's: 100 x (%CA#1 / Sum of %CA stockpiles); same for FA stockpiles (excluding MF, BHF's and Recycle).",
    "Step 7 - If BHF's or MF was used, enter % 0.075 mm of the Original DMF in the '% 0.075 mm desired' cell. For Recycle blends that included BHF's, adjust the % 0.075 mm cell value to achieve an EQUAL percentage of BHF's in the Virgin blend.",
    "Step 8 - Adjust % CA LUW until the Virgin DMF PCS % ~ = Recycle blend PCS %. Start at 80% CA LUW for F-G, 100% CA LUW for C-G and 118% CA RUW for SMA.",
    "Step 9 - Adjust CA VOL blend %'s until Calculated CA %'s match the Original CA %'s (Virgin mix) OR the Original CA ratio matches the Recycle CA ratio (Recycle mix).",
    "Step 10 - Adjust FA VOL blend %'s until Calculated FA %'s match the Original FA %'s (Virgin mix) OR match the FA blend by MASS (Recycle mix).",
    "Step 11 - Adjust the % 0.075 mm desired in the Calculated (Virgin) blend to match the % MF or BHF's in the Original DMF (ONLY if MF or BHF's were used in the original design).",
    "Virgin mixes: repeat Steps 8-11 until Calculated Virgin Agg %'s match Original within 0.1% per stockpile. Recycle mixes: repeat Steps 8-11 until Virgin PCS % is within 0.1% of the Recycle DMF PCS %, Virgin CA ratio as close as possible to the Recycle CA ratio ('Old' CA ratio if F-G), and FA blend matched by MASS - this shows how the Recycle impacts the FINE fraction."
   ],
   "notes": "Condensed one-page version of the full procedures taught on Day 1 (slides 110-134).",
   "related_ids": [
    "proc-evaluate-existing-virgin-mix",
    "proc-evaluate-existing-recycle-mix",
    "walk-vbs-existing-virgin-19mm",
    "walk-vbs-existing-fg-rap-125mm"
   ],
   "tags": [
    "vbs",
    "existing-mix",
    "recycle",
    "quick-reference",
    "procedure"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "quick-reference sheets",
    "pages": "1"
   },
   "verified": true,
   "corroborated_by": [
    "proc-evaluate-existing-virgin-mix",
    "proc-evaluate-existing-recycle-mix",
    "ref-cuw-starting-points"
   ],
   "chunk": "3_1"
  },
  {
   "id": "ref-cheatsheet-cg",
   "type": "reference_table",
   "title": "Coarse-Graded cheat sheet (95-105% CA LUW): VMA sensitivities, control sieves, suggested ranges",
   "description": "One-page consolidated reference for Coarse-Graded mixes. Directions: CA CUW increase = PCS % decrease = VMA increase (4% change in PCS % ~ 1% VMA); CA ratio increase = VMA increase (0.20 ~ 1% VMA); FAc increase = VMA decrease up to ~0.55 then VMA begins to increase (0.05 ~ 1% VMA); FAf same (~0.55 dip, 0.05 ~ 1% VMA).",
   "columns": [
    "nmas_mm",
    "half_sieve_mm",
    "pcs_mm",
    "scs_mm",
    "tcs_mm",
    "suggested_ca_ratio"
   ],
   "rows": [
    [
     37.5,
     19.0,
     9.5,
     2.36,
     0.6,
     "0.80-0.95"
    ],
    [
     25.0,
     12.5,
     4.75,
     1.18,
     0.3,
     "0.70-0.85"
    ],
    [
     19.0,
     9.5,
     4.75,
     1.18,
     0.3,
     "0.60-0.75"
    ],
    [
     12.5,
     6.35,
     2.36,
     0.6,
     0.15,
     "0.50-0.65"
    ],
    [
     9.5,
     4.75,
     2.36,
     0.6,
     0.15,
     "0.40-0.55"
    ],
    [
     4.75,
     2.36,
     1.18,
     0.3,
     0.075,
     "0.30-0.45"
    ]
   ],
   "notes": "The 12.5 mm NMAS half sieve is 6.35 mm (printed in red - a non-standard sieve). CA ratio formula per NMAS = (%half - %PCS)/(100% - %half). FAc suggested 0.35-0.50 (avoid values < 0.40) all NMAS; FAf suggested 0.35-0.50 (avoid values < 0.40) all NMAS.",
   "related_ids": [
    "ref-vma-sensitivity-cg",
    "ref-blend-eval-sieves",
    "ref-fa-dip-by-mixtype"
   ],
   "tags": [
    "coarse-graded",
    "cheat-sheet",
    "vma-sensitivity",
    "control-sieves",
    "suggested-ranges"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "quick-reference sheets",
    "pages": "4"
   },
   "verified": true,
   "corroborated_by": [
    "ref-vma-sensitivity-cg",
    "ref-ca-ratio-guidelines-cg",
    "ref-blend-eval-sieves",
    "ref-fa-dip-by-mixtype"
   ],
   "chunk": "3_1"
  },
  {
   "id": "ref-cheatsheet-fg",
   "type": "reference_table",
   "title": "Fine-Graded cheat sheet (60-80% CA LUW): VMA sensitivities, NEW control sieves, suggested ranges",
   "description": "One-page consolidated reference for Fine-Graded mixes. Directions: CA CUW decrease = Original PCS % increase = VMA increase (6% change in Original PCS % ~ 1% VMA); New CA ratio increase = VMA increase (0.35 ~ 1% VMA); New FAc increase = VMA decrease up to ~0.50 then VMA begins to increase (0.05 ~ 1% VMA); New FAf same (~0.50 dip, 0.05 ~ 1% VMA).",
   "columns": [
    "nmas_mm",
    "original_pcs_mm",
    "new_half_sieve_mm",
    "new_pcs_mm",
    "new_scs_mm",
    "new_tcs_mm",
    "old_ca_ratio_range",
    "old_ca_15x_max"
   ],
   "rows": [
    [
     37.5,
     9.5,
     4.75,
     2.36,
     0.6,
     0.15,
     "0.80-0.95",
     1.425
    ],
    [
     25.0,
     4.75,
     2.36,
     1.18,
     0.3,
     0.075,
     "0.70-0.85",
     1.275
    ],
    [
     19.0,
     4.75,
     2.36,
     1.18,
     0.3,
     0.075,
     "0.60-0.75",
     1.125
    ],
    [
     12.5,
     2.36,
     1.18,
     0.6,
     0.15,
     null,
     "0.50-0.65",
     0.975
    ],
    [
     9.5,
     2.36,
     1.18,
     0.6,
     0.15,
     null,
     "0.40-0.55",
     0.825
    ],
    [
     4.75,
     1.18,
     0.6,
     0.3,
     0.075,
     null,
     "0.30-0.45",
     0.675
    ]
   ],
   "notes": "For 12.5, 9.5 and 4.75 mm NMAS F-G mixes, only the New CA and New FAc ratios can be determined (New TCS falls below 0.075 mm). New CA suggested range 0.6-1.0 (more variable in fine-graded mixes, therefore range is wider). New FAc 0.35-0.50 (avoid < 0.40); New FAf 0.35-0.50 (avoid < 0.40). 'OLD' CA row shows the dense-graded CA range with the highlighted 1.5x-maximum values (1.425/1.275/1.125/0.975/0.825/0.675).",
   "related_ids": [
    "ref-vma-sensitivity-fg",
    "ref-fg-blend-eval-sieves",
    "heur-fg-no-new-faf-small-nmas",
    "heur-fg-new-ca-less-sensitive"
   ],
   "tags": [
    "fine-graded",
    "cheat-sheet",
    "vma-sensitivity",
    "new-control-sieves",
    "suggested-ranges"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "quick-reference sheets",
    "pages": "3"
   },
   "verified": true,
   "corroborated_by": [
    "ref-vma-sensitivity-fg",
    "ref-ratio-ranges-fg",
    "ref-fg-blend-eval-sieves"
   ],
   "chunk": "3_1"
  },
  {
   "id": "ref-cheatsheet-sma",
   "type": "reference_table",
   "title": "SMA cheat sheet (110-125% CA Rodded UW): VMA sensitivities, control sieves, suggested ranges",
   "description": "One-page consolidated reference for SMA mixes. Directions: CA CUW increase = PCS % decrease = VMA increase (2% change in PCS % ~ 1% VMA); CA ratio increase = VMA increase (0.20 ~ 1% VMA); FAc increase = VMA decrease up to ~0.65 then VMA begins to increase (0.10 ~ 1% VMA); FAf increase = VMA decrease up to ~0.70 then VMA begins to increase (0.10 ~ 1% VMA).",
   "columns": [
    "nmas_mm",
    "half_sieve_mm",
    "pcs_mm",
    "scs_mm",
    "tcs_mm",
    "suggested_ca_ratio"
   ],
   "rows": [
    [
     37.5,
     19.0,
     9.5,
     2.36,
     0.6,
     null
    ],
    [
     25.0,
     12.5,
     4.75,
     1.18,
     0.3,
     "0.45-0.60"
    ],
    [
     19.0,
     9.5,
     4.75,
     1.18,
     0.3,
     "0.35-0.50"
    ],
    [
     12.5,
     6.35,
     2.36,
     0.6,
     0.15,
     "0.25-0.40"
    ],
    [
     9.5,
     4.75,
     2.36,
     0.6,
     0.15,
     "0.15-0.30"
    ],
    [
     4.75,
     2.36,
     1.18,
     0.3,
     0.075,
     "0.05-0.20"
    ]
   ],
   "notes": "SMA CUW range printed as 110-125% of CA RODDED unit weight. SMA suggested-range table covers NMAS 25.0-4.75 mm (no 37.5 mm column). FAc suggested 0.60-0.85 all NMAS; FAf suggested 0.65-0.90 all NMAS. SMA uses the same control-sieve stack as C-G, including the red-flagged 6.35 mm half sieve at 12.5 mm NMAS.",
   "related_ids": [
    "ref-vma-sensitivity-sma",
    "ref-blend-eval-sieves",
    "ref-fa-dip-by-mixtype"
   ],
   "tags": [
    "sma",
    "cheat-sheet",
    "vma-sensitivity",
    "control-sieves",
    "suggested-ranges"
   ],
   "source": {
    "doc": "Bailey Method course binder - various notes and examples",
    "tab": "quick-reference sheets",
    "pages": "2"
   },
   "verified": true,
   "corroborated_by": [
    "ref-vma-sensitivity-sma",
    "ref-ratio-ranges-sma",
    "ref-cuw-starting-points",
    "day1-slide-082",
    "day1-slide-083"
   ],
   "chunk": "3_1"
  },
  {
   "id": "ref-field-factor-adjust-limits",
   "type": "reference_table",
   "title": "Field (QC/QA) factor adjustment limits by mix type (Tab 15 document)",
   "description": "For field mix samples the estimation factors generally need to be adjusted from the rules-of-thumb, but within these limits for most situations. Each factor's window is centered on its rule-of-thumb: PCS +/-1.0%, CA +/-0.1, FAc/FAf +/-0.025, dips +/-0.1.",
   "columns": [
    "factor",
    "fine_graded",
    "coarse_graded",
    "sma"
   ],
   "rows": [
    [
     "PCS (% per 1% VMA)",
     "5.0-7.0",
     "3.0-5.0",
     "1.0-3.0"
    ],
    [
     "CA / New CA ratio",
     "0.25-0.45",
     "0.10-0.30",
     "0.10-0.30"
    ],
    [
     "FAc / New FAc ratio",
     "0.025-0.075",
     "0.025-0.075",
     "0.075-0.125"
    ],
    [
     "FAc Dip / New FAc Dip",
     "0.40-0.60",
     "0.45-0.65",
     "0.55-0.75"
    ],
    [
     "FAf / New FAf ratio",
     "0.025-0.075",
     "0.025-0.075",
     "0.075-0.125"
    ],
    [
     "FAf Dip / New FAf Dip",
     "0.40-0.60",
     "0.45-0.65",
     "0.60-0.80"
    ]
   ],
   "notes": "The 'DIP' limits are the ranges that MOST OFTEN need altering. The FA dips are very important: they generally occur within 0.1 of the rules-of-thumb but CAN be outside the limits shown.",
   "related_ids": [
    "ref-estimation-optimization-limits",
    "ref-est-sheet-factor-defaults",
    "heur-fa-dip-limit-adjust"
   ],
   "tags": [
    "estimation-sheet",
    "factors",
    "limits",
    "qc",
    "reference"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "7-8"
   },
   "verified": true,
   "corroborated_by": [
    "ref-estimation-optimization-limits",
    "heur-acvc-gmb-gb-ratio-range"
   ],
   "chunk": "3_1"
  },
  {
   "id": "proc-toggle-and-reoptimize",
   "type": "procedure",
   "title": "Toggle out questionable/shift samples and re-optimize (production workflow)",
   "purpose": "Maintain estimation accuracy during production by identifying questionable samples and shifts, excluding them correctly, and verifying each re-optimization actually improved the data.",
   "steps": [
    "After optimizing at least once, scan the 'Diff in VMA' row (Sample to Previous, Original factors, around row 46 on the Main sheet, starting with sample 2 in column E) for red toggle button candidates.",
    "Classify each suspect: QUESTIONABLE sample - does NOT compare well to the Previous sample AND the succeeding sample does NOT compare well to it (succeeding value typically off a similar amount in the OPPOSITE direction). SHIFT - does NOT compare well to the Previous sample but DOES compare well to the succeeding sample.",
    "For a questionable sample with amounts >= 1.0%: toggle out the given sample AND the succeeding sample. Samples < 1.0% can be toggled too - when the questionable and succeeding samples combined in ABSOLUTE value are > 1.0%, toggling out both and re-optimizing often improves the estimation.",
    "For a shift >= 1.0% (significant): toggle out the given sample only. Shifts as low as 0.5% can make a difference. Shifts due to shape/texture/strength change are NOT common - questionable samples occur much more often and can be misinterpreted as shifts. If you feel a shift occurred, strive to confirm it and determine WHY (e.g., blend changes between materials with differing shape/texture/strength, recycle stockpile variability).",
    "ALWAYS re-optimize after toggling samples in or out. The Standard Dev and Average Diff (Sample to Previous) recompute automatically; on re-optimize they become the 'Prev Std Dev' and 'Prev Avg Diff' shown right of the Optimize button.",
    "Verify the toggle+re-optimize IMPROVED the data: the new Standard Dev should be at least 0.05 LESS than before and the Average Diff should be CLOSER to zero. If not, un-toggle.",
    "Any time a new sample is added during production, always re-optimize. Look back at previous samples for toggles/un-toggles. Typically optimize the most recent 10-20 samples: if the population exceeds 20, consider toggling out the earliest samples, starting at number 2 (column E).",
    "Ctrl+d macro (cursor MUST be in row 2 of the MAIN sheet, in the target column): deletes ALL data for that sample (not recoverable) and shifts the sample data from the right into the vacated column, one column at a time. Do NOT use on the Sample 1 column (column D). ONLY use Ctrl+d for removing 'problem' samples, NOT samples where a shift occurs."
   ],
   "notes": "It is common to have one or two questionable samples in each set of 10. Toggled-out samples remain visible on graphs and their FA ratios are excluded from the Actual Sample Values table.",
   "related_ids": [
    "heur-questionable-vs-shift",
    "heur-vma2-accuracy-80-05",
    "proc-estimation-sheet-optimization",
    "heur-adjust-one-limit-stddev-0050"
   ],
   "tags": [
    "estimation-sheet",
    "toggling",
    "optimization",
    "production",
    "procedure"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "9-12"
   },
   "verified": true,
   "corroborated_by": [
    "heur-vma2-accuracy-80-05",
    "heur-adjust-one-limit-stddev-0050",
    "walk-est-ex04-questionable-samples"
   ],
   "chunk": "3_1"
  },
  {
   "id": "proc-blend-adjustment-proposed",
   "type": "procedure",
   "title": "Evaluate a proposed field blend change with the Blend Adjustments sheet",
   "purpose": "Estimate the VMA/Voids effect of a proposed cold-feed or hot-bin change BEFORE making it at the plant. Basic assumption: a change made at the cold feeds (CF) or hot bins (HB) will be reflected in the resulting mix sample gradation (extraction or ignition oven).",
   "steps": [
    "Enter a Gsb and water absorption value (rows 28-29) for EACH material used (cells highlight blue until filled). Columns: five CA, five FA, one BHF/MF, three recycle; use an open column for products like hydrated lime.",
    "Enter the CURRENT gradation for each individual stockpile or hot bin in the UPPER columns (include a gradation and percentage for BHF/MF too - most aggregates degrade through production). These copy automatically to the LOWER columns.",
    "Enter the CURRENT individual CF or HB percentages (as 100.0% Aggregate) in the row above the UPPER columns - must total 100.0%. 'Combined Blend 1' is calculated.",
    "In the 'Last Sample' column enter the most recent mix-sample gradation (solvent extraction or ignition oven, matching the QC lab's method). Consider averaging the last few samples (provided NO adjustments were made during them) instead of using a single sample.",
    "Check the 'Spread' column (Last Sample minus Combined Blend 1 per sieve); user-adjustable limits highlight significant / extremely high differences. Use the Spread to judge whether the samples you are getting represent what you SHOULD be getting.",
    "Enter the PROPOSED percentages in the row above the LOWER columns (total 100.0%) - 'Combined Blend 2' is calculated. Compare the Combined Blend 2 Gsb to Combined Blend 1's: a difference of 0.010 is approximately 0.3% VMA.",
    "The 'Adjusted Blend' column = Last Sample + (Combined Blend 2 - Combined Blend 1) per sieve, calculated automatically.",
    "Check the Estimated Change in Pba (cell R51), driven by the difference in combined water absorption (cells J26/J51) and 'Pba as % of Water Absorption' (cell P50, default 65%).",
    "Copy and PASTE SPECIAL (values) the Adjusted Blend to the next open column on the Main estimation sheet. Include a % AC/Binder value (as % TOTAL mix) AND an Estimated Pba (row just above the Gsb area, ~row 50) - omitting Est Pba significantly impacts the estimated VOIDS.",
    "Toggle this proposed 'sample' OUT until actual results are obtained and entered over the top of the proposed blend. The 'Diff in VMA'/'Diff in Voids' rows (vs Previous) are the EXPECTED VMA and Voids changes, since no actual values exist yet."
   ],
   "notes": "Developed for QC personnel to use in the FIELD with stockpile or hot-bin gradations.",
   "related_ids": [
    "walk-est-blend-adjustments-tab",
    "heur-pba-pct-water-absorption-range",
    "heur-gsb-diff-0010-vma-03",
    "proc-estimate-vma-voids"
   ],
   "tags": [
    "blend-adjustments",
    "estimation-sheet",
    "production",
    "qc",
    "procedure"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "16-18"
   },
   "verified": true,
   "corroborated_by": [
    "walk-est-ex08-blend-adjustment",
    "walk-est-blend-adjustments-tab"
   ],
   "chunk": "3_1"
  },
  {
   "id": "heur-questionable-vs-shift",
   "type": "heuristic",
   "title": "Questionable sample vs shift: how the neighboring comparisons discriminate",
   "statement": "A QUESTIONABLE sample doesn't compare well to the previous sample AND the succeeding sample doesn't compare well to IT (typically off a similar amount in the opposite direction) - the sample itself is bad. A SHIFT doesn't compare well to the previous sample but DOES compare well to the succeeding sample - the mix (shape/texture/strength) changed and the new level persists. Questionable samples occur much more often and are easily misinterpreted as shifts.",
   "context": "Reviewing the Diff-in-VMA Sample-to-Previous row before toggling samples out.",
   "related_ids": [
    "proc-toggle-and-reoptimize",
    "heur-estimation-shift-resampling"
   ],
   "tags": [
    "estimation-sheet",
    "diagnostics",
    "questionable",
    "shift"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "9-10"
   },
   "verified": true,
   "chunk": "3_1"
  },
  {
   "id": "heur-toggle-thresholds",
   "type": "heuristic",
   "title": "Toggle thresholds: >=1.0% definite; combined absolute >1.0% for questionable pairs; shifts matter from 0.5%",
   "statement": "Diff-in-VMA amounts >= 1.0% should be considered a questionable sample (toggle out it AND the succeeding sample) or a significant shift (toggle out the given sample only). Below 1.0%: toggling is still allowed - for questionable pairs, when the two successive diffs combined in ABSOLUTE value exceed 1.0%, toggling both and re-optimizing often improves the estimation; shifts as low as 0.5% can make a difference. Expect one or two questionable samples per set of 10.",
   "context": "Deciding which samples to exclude from optimization.",
   "related_ids": [
    "proc-toggle-and-reoptimize",
    "heur-questionable-vs-shift",
    "heur-vma2-accuracy-80-05"
   ],
   "tags": [
    "estimation-sheet",
    "toggling",
    "thresholds"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "9-10"
   },
   "verified": true,
   "corroborated_by": [
    "heur-vma2-accuracy-80-05",
    "walk-est-ex04-questionable-samples"
   ],
   "chunk": "3_1"
  },
  {
   "id": "heur-vma-stddev-0350",
   "type": "heuristic",
   "title": "Well-estimating data has a VMA Standard Dev of 0.350 or less",
   "statement": "Most data that estimates well will have a VMA (Sample-to-Previous) standard deviation of 0.350 or less. If a single factor limit is extended and the data re-optimized, the Standard Dev should improve by at least 0.05 or more to justify it - but if the resulting Std Dev is still exceptionally high (e.g. 0.758), there is no point extending factor limits: the problem is elsewhere (shape/texture/strength shifts or sample testing issues being 'overshadowed').",
   "context": "Judging overall estimation quality and whether to extend optimization factor limits (cells I99:J105).",
   "related_ids": [
    "heur-adjust-one-limit-stddev-0050",
    "heur-average-diff-0150",
    "ref-field-factor-adjust-limits"
   ],
   "tags": [
    "estimation-sheet",
    "std-dev",
    "thresholds",
    "factor-limits"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "12"
   },
   "verified": false,
   "chunk": "3_1"
  },
  {
   "id": "heur-fg-cg-vary-no-estimate",
   "type": "heuristic",
   "title": "Get the mix type and NMAS right first - mixes that flip between F-G and C-G do NOT estimate well",
   "statement": "The primary issue in using the estimation sheet effectively is accurately determining the CORRECT mix type and NMAS. Design trials or field samples that vary back and forth from a Fine-Graded blend to a Coarse-Graded blend (or vice-versa) generally do NOT estimate well - they sit at the bottom of the VMA-vs-CA-volume curve where behavior changes regime. Using the spreadsheet 'blindly' without striving for the correct type/NMAS will likely produce poor decisions.",
   "context": "Before using the Estimation Sheet; mixes near the F-G/C-G boundary.",
   "related_ids": [
    "heur-mix-type-definition",
    "heur-bailey-nmas-15pct",
    "ref-cheatsheet-cg",
    "ref-cheatsheet-fg"
   ],
   "tags": [
    "estimation-sheet",
    "mix-type",
    "nmas",
    "limitations"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "2-3"
   },
   "verified": true,
   "chunk": "3_1"
  },
  {
   "id": "heur-est-gradation-same-portion",
   "type": "heuristic",
   "title": "Estimation gradation/AC MUST come from the same mix sample portion as the Gmb/Gmm specimens",
   "statement": "The gradation and AC/Binder content (ignition oven or solvent extraction) must be determined from a portion of the SAME mix sample used for the bulk (Gmb) and maximum (Gmm) specific gravity specimens. Combined cold-feed belt samples or hot bins are important for QC but CANNOT be used in the estimation process to 'represent' a volumetric sample's gradation. Mishandled or incorrectly tested sample portions significantly degrade estimation accuracy. Enter WASHED gradations to 0.1% (never mix washed and dry on one sheet), AC to 0.01%, always chronological, no blank columns, and never cut-and-paste (paste-special values only).",
   "context": "Sampling and data-entry discipline for the Estimation Sheet.",
   "related_ids": [
    "walk-est-main-tab-entry",
    "heur-est-blue-red-entry-check"
   ],
   "tags": [
    "estimation-sheet",
    "sampling",
    "data-entry",
    "qc"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "3, 5"
   },
   "verified": true,
   "chunk": "3_1"
  },
  {
   "id": "heur-as-batched-washed-gradation",
   "type": "heuristic",
   "title": "Batch and wash-grade every design trial before adding AC; compare DMF vs as-batched on the sheet",
   "statement": "For each design trial, batch the aggregate and perform a WASHED gradation analysis for the estimation sheet PRIOR to adding AC/Binder and mixing (with RAP/RAS: solvent extraction or ignition oven on a lab-batched combined blend). Place the DMF in column C ('Mix Design') and the as-batched gradation in column D ('1') to estimate the VMA difference generated by the batching process itself - it is not possible to batch exactly to the DMF, and small differences combine into large volumetric variations. VMA shortfalls in design trials can often be identified in the as-batched gradations. Occasionally evaluate a LOOSE mix specimen to check for degradation during lab mixing.",
   "context": "Mix design workflow with the Estimation Sheet.",
   "related_ids": [
    "proc-estimate-vma-voids",
    "walk-est-19mm-dmf-orig-opt"
   ],
   "tags": [
    "mix-design",
    "estimation-sheet",
    "as-batched",
    "gradation"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "4"
   },
   "verified": true,
   "chunk": "3_1"
  },
  {
   "id": "heur-macro-order-fa-dips-first",
   "type": "heuristic",
   "title": "The Optimize macro adjusts the FA DIPs first, then PCS, CA, FAc, FAf",
   "statement": "The optimization macro optimizes the FA DIP's first, then the other four factors in order: PCS, CA (or New CA), FAc (or New FAc), FAf (or New FAf). The comparison between the 1st sample and the design (or trial-1-to-trial-1) is NOT used in optimization; at least four field samples or four design trials are required for the minimum three sample-to-sample comparisons. When the optimization finishes, the message 'At least one factor has reached a limit' is NORMAL - do NOT automatically adjust the limit. Exception: if the FAc Dip or FAf Dip reached a limit, ALWAYS adjust the corresponding FA Dip limit (Min or Max, never both) and re-optimize - it is UNUSUAL for a dip to sit at a limit.",
   "context": "Running and interpreting the Optimize macro.",
   "related_ids": [
    "proc-estimation-sheet-optimization",
    "heur-optimize-min-comparisons-3-6-10",
    "ref-field-factor-adjust-limits"
   ],
   "tags": [
    "estimation-sheet",
    "optimization",
    "fa-dip",
    "macro"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "8-9, 14-15"
   },
   "verified": true,
   "corroborated_by": [
    "walk-est-optimize-factors-tab",
    "walk-est-ex03-importance-fa-dips"
   ],
   "chunk": "3_1"
  },
  {
   "id": "heur-fa-dip-outside-actual-range",
   "type": "heuristic",
   "title": "When ALL actual FA ratios fall outside the FA Dip limits, adjust cautiously - or accept it is not realistic",
   "statement": "The Actual Sample Values for FA Ratios (cells I108:J109) show the min/max of actual FA ratios vs the Dip limits: a RED Min-limit background means the FA Dip Min limit is greater than the actual FA ratio Max; BLUE Max-limit means the Dip Max is less than the actual Min. When all actual values fall outside the Dip limits, consider slightly adjusting the appropriate limit so some values fall inside, letting the macro test whether the dip differs from the rule-of-thumb. BUT if the actual range is well below (e.g. 0.211-0.323 vs 0.450-0.650 for a C-G mix) or well above, it may NOT be realistic for a FA Dip to occur within that range - leave it alone.",
   "context": "Interpreting FA Dip limit highlighting; deciding whether to extend dip limits.",
   "related_ids": [
    "heur-fa-dip-limit-adjust",
    "ref-field-factor-adjust-limits",
    "heur-vma-stddev-0350"
   ],
   "tags": [
    "estimation-sheet",
    "fa-dip",
    "limits",
    "diagnostics"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "12, 15-16"
   },
   "verified": true,
   "corroborated_by": [
    "heur-fa-dip-limit-adjust",
    "heur-design-trial-estimation-limits"
   ],
   "chunk": "3_1"
  },
  {
   "id": "heur-vma-less-variable-than-voids",
   "type": "heuristic",
   "title": "VMA typically varies LESS than Voids",
   "statement": "Typically, VMA varies LESS than Voids because VMA is affected by the aggregate structure ALONE, whereas the aggregate structure AND the 'effective' AC/Binder volume affect Voids. On the VMA-and-Voids control-chart graph both lines normally trend the same (VMA change drives Voids change), with Voids showing more variability.",
   "context": "Setting expectations when reading the VMA and Voids graphs.",
   "related_ids": [
    "ref-voids-variability-rules",
    "walk-est-graph-tabs"
   ],
   "tags": [
    "vma",
    "voids",
    "variability"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "8, 19"
   },
   "verified": true,
   "chunk": "3_1"
  },
  {
   "id": "heur-gsb-diff-0010-vma-03",
   "type": "heuristic",
   "title": "A combined-blend Gsb difference of 0.010 is approximately 0.3% VMA",
   "statement": "Pay attention to the calculated combined blend Gsb on the Blend Adjustments sheet and compare it to the Gsb being USED for VMA calculation of the mix samples (and Combined Blend 2 vs Combined Blend 1 for proposed changes): a difference of 0.010 in Gsb is approximately 0.3% VMA.",
   "context": "Blend Adjustments sheet; explaining VMA offsets that gradation cannot.",
   "related_ids": [
    "proc-blend-adjustment-proposed",
    "heur-voids-diff-tracks-vma-02",
    "heur-negative-pba-acvc"
   ],
   "tags": [
    "gsb",
    "vma",
    "blend-adjustments",
    "sensitivity"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "16-17"
   },
   "verified": true,
   "corroborated_by": [
    "walk-est-blend-adjustments-tab"
   ],
   "chunk": "3_1"
  },
  {
   "id": "heur-pba-pct-water-absorption-range",
   "type": "heuristic",
   "title": "Pba as % of water absorption: 65% rule-of-thumb, good range 50-80%, scaled by absorption level",
   "statement": "Cell P50 on the Blend Adjustments sheet estimates 'Pba as % of Water Absorption'. The default 65% is a good rule-of-thumb for most mixes; a good range is 50-80%. Aggregate blends with LOWER combined water absorption (< 1.25%) may need a LOWER value (down to 50%); blends with HIGHER combined water absorption (> 2.50%) may need a HIGHER value (up to 80%).",
   "context": "Estimating Pba for proposed blends and VBS volumetric estimates.",
   "related_ids": [
    "proc-blend-adjustment-proposed",
    "note-tab04-pba-water-absorption-rule",
    "walk-vbs-initial-blend-95mm"
   ],
   "tags": [
    "pba",
    "water-absorption",
    "blend-adjustments",
    "thresholds"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "17"
   },
   "verified": true,
   "corroborated_by": [
    "walk-vbs-initial-blend-95mm",
    "walk-est-ex06-gsb-gravity-issue"
   ],
   "verification_note": "Printed 50-80%/65% double-sourced (Tab 15 doc + Tab 14 p11). Conflicting handwritten note (note-tab04-pba-water-absorption-rule, '~60%') remains unverified.",
   "chunk": "3_1"
  },
  {
   "id": "heur-acvc-gsb-scaling",
   "type": "heuristic",
   "title": "AC Volume Correction 2.25 fits normal-weight (2.600-2.700 Gsb) mixes; scale with Gsb",
   "statement": "For most normal weight (2.600-2.700 Gsb) mixtures, the AC/Binder VOLUME is approximately 2.25 times its corresponding MASS - the 'AC Volume Correction' cell under each factor set. Generally 2.25 does NOT need changing, but for an unusually heavy combined Gsb, increase above 2.25; for lighter, decrease below. Judge an adjustment by the 'Voids - Sample to Previous' box (std dev improvement) and the Better-vs-Worse comparison near cell D220. The related 'AC Gb' cell (rule-of-thumb 1.03) should be set to the actual binder's specific gravity - it drives the Pba calculation.",
   "context": "Tuning the voids estimation.",
   "related_ids": [
    "heur-negative-pba-acvc",
    "heur-acvc-adjust-better-worse",
    "heur-ac-01-mass-0225-volume"
   ],
   "tags": [
    "ac-volume-correction",
    "voids",
    "gsb",
    "thresholds"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "18"
   },
   "verified": true,
   "corroborated_by": [
    "heur-negative-pba-acvc",
    "walk-vbs-initial-blend-95mm",
    "heur-acvc-gmb-gb-ratio-range"
   ],
   "chunk": "3_1"
  },
  {
   "id": "heur-gse-plusminus-0020",
   "type": "heuristic",
   "title": "Gse within +/-0.020 of design is a reasonable production range; watch trends, not points",
   "statement": "On the Vbe-and-Gse graph, two yellow dashed lines sit 0.020 either side of the DESIGN Gse - a reasonable range for Gse to vary within during production. Values trending outside MAY indicate the combined blend Gsb differs from the original design, but differences in AGING (design vs production) also impact asphalt absorption (Pba) and therefore Gmm and the resulting Gse. Gse can HELP identify Gsb variability/shifts, but always look at trends (e.g. the moving average of 3): Pba fluctuates with mix temperature, time at temperature, and sample reheating, changing Gmm and Gse while Gsb stays consistent. As Pba increases, Gmm and Gse increase - but Pba does NOT change Gsb. (Design Vbe is rounded down to a whole percent for the left axis; the Vbe axis spread must be 50x the Gse spread; manual axis limits at cells M164:Q173.)",
   "context": "Reading the Vbe and Gse control chart during production.",
   "related_ids": [
    "walk-est-graph-tabs",
    "heur-negative-pba-acvc"
   ],
   "tags": [
    "gse",
    "gsb",
    "pba",
    "production",
    "control-chart"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "19-20"
   },
   "verified": false,
   "chunk": "3_1"
  },
  {
   "id": "heur-principle-red-most-change",
   "type": "heuristic",
   "title": "The red-highlighted principle caused the most VMA change - persistent repeats show what to control",
   "statement": "On the Main sheet (rows 39-42 and 84-87) the estimated VMA change is shown for each INDIVIDUAL principle per sample vs the PREVIOUS sample; the principle cell highlighted RED caused the most absolute VMA change for that sample. For most mixes the leading principle SHOULD vary sample to sample - when one principle leads much more frequently than the others, it identifies which part of the blend (and the aggregates contributing to it) to control to reduce volumetric variability. Always weigh the AMOUNT of change too (0.3% vs 1.2%). For SMA it is common for PCS to cause the most change between samples.",
   "context": "Diagnosing the gradation driver of volumetric variability during production.",
   "related_ids": [
    "heur-mix-sensitivity-order",
    "heur-principles-interlinked"
   ],
   "tags": [
    "estimation-sheet",
    "principles",
    "variability",
    "production",
    "diagnostics"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "19"
   },
   "verified": true,
   "corroborated_by": [
    "walk-est-ex06-gsb-gravity-issue"
   ],
   "verification_note": "Row numbers differ by source (39-42/84-87 vs 40-43/85-88): 12.5 mm NMAS sheets shift one row down due to the inserted 6.35 mm half-sieve row.",
   "chunk": "3_1"
  },
  {
   "id": "heur-optimized-factors-reveal-sensitivity",
   "type": "heuristic",
   "title": "Optimized factor values reveal whether a mix is MORE or LESS sensitive to each principle",
   "statement": "Optimized factor values will generally differ from the rules-of-thumb. Use them to recognize if the specific mix is MORE or LESS sensitive to change in a given principle (a smaller per-1%-VMA factor = more sensitive) - valuable insight into what portion of the gradation, and which aggregates, to focus on for control during mix production. The Factor History table (near row 120; click Copy/Clear above each sample column after each sample is added and optimized) records how the factors evolve, showing how mix sensitivity changes over time. Note: pressing Optimize automatically re-sets the factors to the rules-of-thumb before optimizing, and blend adjustments themselves can induce shape/texture/strength changes (e.g. a significant 'sand blend' swap) - include a 'windage' factor.",
   "context": "Interpreting optimization results; long-run production tracking.",
   "related_ids": [
    "heur-estimation-unique-sensitivity",
    "heur-sensitivity-shifts-with-packing",
    "walk-est-optimize-factors-tab"
   ],
   "tags": [
    "estimation-sheet",
    "optimization",
    "sensitivity",
    "factor-history"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "13-14, 19"
   },
   "verified": true,
   "chunk": "3_1"
  },
  {
   "id": "heur-vma1-negative-causes",
   "type": "heuristic",
   "title": "VMA1 positive is normal in the field (NOT in design trials); negative values have specific causes",
   "statement": "On the VMA1 graph (Sample to Design) it is normal for 'Diff in VMA' to be POSITIVE - estimated VMA greater than actual - because shape and texture typically reduce through an asphalt plant (vs little, if any, from lab mixing), contributing additional aggregate packing (VMA collapse) in the field. This is NOT true for Mix Design Trials. NEGATIVE values are unusual but possible; causes include: the 'as-batched' lab blend in the design differing from the target (DMF) gradation, an improvement in shape/texture/strength of the combined aggregates in the field vs the design, or a change in the type and amount of compactive effort in the field vs the design (especially a different compactor).",
   "context": "Interpreting the VMA1 (Sample to Design) graph.",
   "related_ids": [
    "heur-vma1-positive-normal",
    "heur-vma-overest-design-production",
    "heur-as-batched-washed-gradation"
   ],
   "tags": [
    "vma1",
    "estimation-sheet",
    "plant-breakdown",
    "diagnostics"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "21"
   },
   "verified": true,
   "chunk": "3_2"
  },
  {
   "id": "heur-voids1-gsb-diagnosis",
   "type": "heuristic",
   "title": "Voids1-vs-VMA1 spread diagnosis: consistent offset = different field Gsb; varying offset = variable field Gsb",
   "statement": "For a given sample the 'Diff in Voids' should be within ~0.2% or less of the corresponding 'Diff in VMA' (Diff in Voids normally larger - Voids are more variable than VMA). Larger differences (>0.2%) MAY indicate: (1) the FIELD Gsb is DIFFERENT than the design but CONSISTENT - the Voids-vs-VMA offset stays fairly constant (e.g. 0.4% or 0.5% different-but-consistent); or (2) the FIELD Gsb is VARIABLE - much more difficult: the calculated AC/Binder absorption is incorrect for virtually every sample so the offset constantly varies - VERY unusual with natural aggregates. Also consider AC/Binder content measurement problems, Gmm measurement problems, and/or adjusting the AC Volume Correction Factor. The same logic applies to Voids2 vs VMA2 (Sample to Previous).",
   "context": "Diagnosing voids-estimation errors on the Voids1/Voids2 graphs.",
   "related_ids": [
    "heur-voids-diff-tracks-vma-02",
    "heur-negative-pba-acvc",
    "heur-acvc-gsb-scaling",
    "heur-gsb-diff-0010-vma-03"
   ],
   "tags": [
    "voids",
    "gsb",
    "pba",
    "diagnostics",
    "estimation-sheet"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "21-23"
   },
   "verified": true,
   "chunk": "3_2"
  },
  {
   "id": "heur-vma2-controls-optimization",
   "type": "heuristic",
   "title": "The VMA2 (Sample to Previous) diffs CONTROL the optimization - this graph is the main accuracy indicator",
   "statement": "The VMA2 graph plots estimated-minus-actual VMA vs the PREVIOUS sample. These 'Diff in VMA' values control the optimization process, so this graph provides the MAIN indication of the estimation accuracy. The optimal difference is 0.0% (unrealistic for all samples); a reasonable goal is AT LEAST 80% or more of the Sample-to-Previous comparisons within +/-0.5%, which is typical. This count does not include toggled-out samples.",
   "context": "Judging estimation quality; what the optimizer actually minimizes.",
   "related_ids": [
    "heur-vma2-accuracy-80-05",
    "proc-toggle-and-reoptimize",
    "walk-est-graph-tabs"
   ],
   "tags": [
    "vma2",
    "optimization",
    "accuracy",
    "estimation-sheet"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "22"
   },
   "verified": true,
   "chunk": "3_2"
  },
  {
   "id": "heur-sieve-ac-graph-mapping-doc",
   "type": "heuristic",
   "title": "Gradation and AC must be independent; pick the sieve-vs-AC graph whose sieve is the mix's PCS",
   "statement": "Gradation and AC content should be INDEPENDENT of each other. When a trend exists between the two, at least some (if not all) of the samples in question are segregated - unless a particular sample clearly mirrors the target gradation and AC content compared to the samples before and after it. The four graphs exist to identify segregated samples, and the graph giving the clearest relationship for a given NMAS correlates with the corresponding PCS: use '1.18 mm and AC' for 4.75 mm NMAS; '2.36 mm and AC' for 9.5 mm AND 12.5 mm NMAS; '4.75 mm and AC' for 19.0 mm AND 25.0 mm NMAS; '9.5 mm and AC' for 37.5 mm NMAS.",
   "context": "Identifying segregation with the sieve-vs-AC graphs.",
   "related_ids": [
    "ref-sieve-ac-tab-by-nmas",
    "heur-gradation-ac-not-track",
    "heur-segregation-three-causes"
   ],
   "tags": [
    "segregation",
    "sieve-ac-graphs",
    "pcs",
    "estimation-sheet"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "23"
   },
   "verified": true,
   "chunk": "3_2"
  },
  {
   "id": "ref-author-contact-tab15",
   "type": "reference_table",
   "title": "Document author contact (Tab 15 - Estimating VMA and Voids)",
   "description": "Author block on the final page of the Estimating VMA and Voids document.",
   "columns": [
    "field",
    "value"
   ],
   "rows": [
    [
     "name",
     "William J. Pine, P.E."
    ],
    [
     "title",
     "QC Director of Asphalt Technology"
    ],
    [
     "company",
     "Heritage Construction & Materials"
    ],
    [
     "location",
     "Indianapolis, IN"
    ],
    [
     "phone",
     "(217) 840-4173"
    ],
    [
     "email",
     "billp@thgrp.com"
    ]
   ],
   "notes": "Matches the contact slide at the end of the Day-1 notes (slide 156).",
   "related_ids": [
    "day1-slide-156"
   ],
   "tags": [
    "contact",
    "reference"
   ],
   "source": {
    "doc": "Estimating VMA and Voids, Heritage Research Group, Revised February 2025 (Tab 15 - Slide 143)",
    "tab": "15",
    "pages": "24"
   },
   "verified": true,
   "corroborated_by": [
    "day1-slide-156"
   ],
   "chunk": "3_2"
  },
  {
   "id": "walk-est-ex01-close-rules-of-thumb",
   "type": "tool_walkthrough",
   "title": "Estimation example 01 - Close With Rules-of-Thumb (12.5 mm CG)",
   "steps": [
    "Open the practice file '01 Close With Rules-of-Thumb' - a 12.5 mm (1/2\") Coarse-Graded data set whose rules-of-thumb factors already estimate well.",
    "Review the VMA and Voids estimates using only the default rules-of-thumb factors, then press Optimize (cell E102).",
    "Compare results: VMA Std Dev 0.287 (optimized) vs 0.345 (rules-of-thumb) and Average Diff 0.097 vs 0.056.",
    "Note the optimization only modestly improves Std Dev while Average Diff actually moves away from zero - with good data, rules-of-thumb factors alone can be adequate.",
    "A factor-limit message during the macro run is common - read it, do NOT simply disregard it."
   ],
   "purpose": "Show that the default rules-of-thumb factors can estimate nearly as well as optimized factors on consistent data.",
   "related_ids": [
    "walk-est-optimize-factors-tab",
    "ref-est-sheet-factor-defaults",
    "heur-vma-stddev-0350"
   ],
   "tags": [
    "estimation-sheet",
    "instructor-notes",
    "optimization",
    "rules-of-thumb",
    "coarse-graded"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "1-2"
   },
   "verified": false,
   "chunk": "4_1"
  },
  {
   "id": "walk-est-ex02-wrong-mix-type-size",
   "type": "tool_walkthrough",
   "title": "Estimation example 02 - Wrong Mix Type and Size (19 mm FG entered; actually 12.5 mm CG)",
   "steps": [
    "Open the practice file - the data was entered as a 19.0 mm Fine-Graded mix, but poor estimation results suggest something is wrong.",
    "Check the 2.36 mm sieve: it averages ~29.7% passing, which suggests a Coarse-Graded mix, not Fine-Graded.",
    "Change the 'Type & Size' cell (G1) on the Main tab to 12.5 mm C-G; the control sieves, factors, and graphs re-map automatically.",
    "Try raising the PCS MAX factor limit to 8.00 with the wrong type set: Std Dev only improved ~0.02 - a re-optimization should improve Std Dev by at least 0.05 to be considered meaningful.",
    "After correcting the type and size, toggle sample 2 (its row-47 Diff exceeds 1.0%) and re-optimize.",
    "Observe the Std Dev improvement sequence as corrections are applied: 1.436 -> 0.732 -> 0.459 -> 0.299 -> 0.252.",
    "Lesson: when estimation is terrible, first confirm the mix TYPE and NMAS are correct before manipulating factors."
   ],
   "purpose": "Diagnose grossly poor estimation caused by entering the wrong mix type/size, and fix it via the Type & Size cell.",
   "related_ids": [
    "heur-mix-type-definition",
    "proc-toggle-and-reoptimize",
    "heur-toggle-thresholds",
    "heur-adjust-one-limit-stddev-0050"
   ],
   "tags": [
    "estimation-sheet",
    "instructor-notes",
    "mix-type",
    "nmas",
    "troubleshooting"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "2-4"
   },
   "verified": false,
   "chunk": "4_1"
  },
  {
   "id": "walk-est-ex03-importance-fa-dips",
   "type": "tool_walkthrough",
   "title": "Estimation example 03 - Importance of FA Dips (9.5 mm CG QA data)",
   "steps": [
    "Open the practice file - a 9.5 mm (3/8\") Coarse-Graded QA data set.",
    "With no FA Dips set, only 58% of Sample-to-Previous comparisons fall within +/-0.5% (goal is at least 80%).",
    "Manually enter an FAc Dip of 0.55 (cell A58): only a minor improvement.",
    "Manually enter an FAf Dip of 0.55 (cell A62): a MAJOR improvement - comparisons within +/-0.5% rise to 100%.",
    "Use the 'Copy Up' button (near cell B95) to copy optimized factors from the Optimization area up to the factor cells on the Main tab.",
    "Lesson: the FA Dips (especially FAf) can dominate estimation quality; the macro sets dips FIRST for this reason."
   ],
   "purpose": "Demonstrate how strongly the FAc/FAf dip settings drive VMA estimation accuracy.",
   "related_ids": [
    "heur-macro-order-fa-dips-first",
    "heur-fa-dip-outside-actual-range",
    "heur-vma2-accuracy-80-05"
   ],
   "tags": [
    "estimation-sheet",
    "instructor-notes",
    "fa-dips",
    "fac",
    "faf",
    "coarse-graded"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "4-5"
   },
   "verified": false,
   "chunk": "4_1"
  },
  {
   "id": "walk-est-ex04-questionable-samples",
   "type": "tool_walkthrough",
   "title": "Estimation example 04 - Questionable Samples (12.5 mm SMA)",
   "steps": [
    "Open the practice file - a 12.5 mm SMA data set.",
    "The FAc Dip Max limit (cell J103) must be raised to 0.85 because SMA FAc ratios run higher; otherwise the limit is exceeded by the actual ratios (cell J109).",
    "Identify questionable samples: samples 4, 5, 10 and 11 each show Diff in VMA > 1.0%, and they form 'opposite' pairs (4 & 5 move opposite directions, as do 10 & 11) - the signature of questionable/segregated samples rather than a real blend shift.",
    "Toggle the questionable samples out and re-optimize: Std Dev improves to 0.240 and Average Diff to 0.054.",
    "Alternate files show another valid approach - remove problem samples 4 and 10 while keeping 5 and 11.",
    "Lesson: opposite-direction pairs exceeding 1.0% are questionable samples to toggle, not evidence of a mix change."
   ],
   "purpose": "Practice recognizing and toggling questionable samples on SMA data.",
   "related_ids": [
    "heur-questionable-vs-shift",
    "heur-toggle-thresholds",
    "proc-toggle-and-reoptimize",
    "ref-cheatsheet-sma"
   ],
   "tags": [
    "estimation-sheet",
    "instructor-notes",
    "sma",
    "questionable-samples",
    "toggling"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "5-7"
   },
   "verified": false,
   "chunk": "4_1"
  },
  {
   "id": "walk-est-ex05-shift-shape-texture",
   "type": "tool_walkthrough",
   "title": "Estimation example 05 - Shape/Texture/Strength SHIFT (12.5 mm CG)",
   "steps": [
    "Open the practice file - a 12.5 mm Coarse-Graded data set with a real shift in the data.",
    "The FAc Dip Min cell (I103) turns red and must be lowered to 0.370 - the macro finds NO dip because all the FAc ratios sit on the right (high) side for this CG mix.",
    "On the VMA1 (Sample to Design) graph, samples 18-28 show a sustained shift in Diff in VMA - a change in aggregate shape, texture and/or strength, not questionable samples: toggle-based removal is wrong here; treat it as a SHIFT (re-optimize the shifted portion separately or accept the shift).",
    "Compare the Bailey NMAS definitions: this data set is a case where the 10% retained definition classifies the mix differently than the 15% definition - when they differ, the 10% definition generally works better for Coarse-Graded mixes.",
    "On the '2.36 mm and AC' graph, samples 13-23 show gradation and AC tracking together, while samples 24-27 move independently - use the graph matching the mix PCS to judge segregation.",
    "Lesson: a sustained one-directional run of diffs is a shift (shape/texture/strength or material change); opposite-direction spikes are questionable samples."
   ],
   "purpose": "Distinguish a genuine shape/texture/strength shift from questionable samples, and handle FA dips when no dip exists.",
   "related_ids": [
    "heur-questionable-vs-shift",
    "heur-estimation-shift-resampling",
    "heur-bailey-nmas-15pct",
    "heur-sieve-ac-graph-mapping-doc",
    "heur-fa-dip-outside-actual-range"
   ],
   "tags": [
    "estimation-sheet",
    "instructor-notes",
    "shift",
    "shape-texture",
    "nmas",
    "coarse-graded"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "7-9"
   },
   "verified": false,
   "chunk": "4_1"
  },
  {
   "id": "walk-est-ex06-gsb-gravity-issue",
   "type": "tool_walkthrough",
   "title": "Estimation example 06 - Gsb Gravity Issue (12.5 mm SMA)",
   "steps": [
    "Open the practice file - a 12.5 mm SMA data set where the field (combined) Gsb differs from the design Gsb.",
    "Compare the Diff in VMA rows vs Diff in Voids rows (Main tab rows 81/84 and 92/95): the VMA-vs-Voids 'spread' for a sample is typically within +/-0.2%; green conditional formatting flags spreads > 0.25%.",
    "Plot/inspect samples 9, 13 and 15 on the Vbe-vs-Gse graph using the moving average of 3 - single points mislead; be careful making decisions based on SINGLE Gse values.",
    "Understand WHY Gse varies independently of Gsb: absorbed AC (Pba) changes with mix temperature, AC grade, aggregate moisture at coating, silo storage time, reheating and oven aging - while the aggregate Gsb itself stays constant. The Gse calculation needs Gmm, total AC content and Gb, so splitting/testing issues in any ONE of those three tests skews the calculated Gse.",
    "If the field Gsb is CONSISTENTLY different from the design Gsb: the sample-to-PREVIOUS change in Pba is still correct (relative), but each calculated Pba shifts. Note the calculated Pba for sample 11 is NEGATIVE (cells N20 and N63) - another indication the actual combined Gsb may be lower than the value in use.",
    "If the field Gsb is different AND INCONSISTENT: every sample's calculated Pba (and estimated Voids and 'actual' VMA) is wrong whether compared to Design or Previous - much more difficult, but fortunately very unusual with natural aggregates.",
    "For a spread > 0.2%, ALSO investigate: accuracy of measured AC content (% of total mix weight), accuracy of AC specific gravity (Gb), accuracy of measured Gmm, and whether the AC Volume Correction factor needs adjusting (see example 07).",
    "Check rows 40-43 and 85-88 (Main tab): conditional formatting highlights the Bailey principle creating the MOST (absolute) change in VMA for each comparison - here PCS is the driver in 11 of the 15 sample comparisons. Knowing WHICH principle drives VMA fluctuation tells you what to control.",
    "Results are in the file '02 Gsb Gravity Issue Opt'."
   ],
   "purpose": "Diagnose voids-estimation error caused by a field Gsb different from design, using the VMA-vs-Voids spread, negative Pba, and Vbe-Gse graph.",
   "related_ids": [
    "heur-voids1-gsb-diagnosis",
    "heur-gsb-pba-voids-spread-chain",
    "heur-single-gse-natural-agg-consistency",
    "heur-gse-plusminus-0020",
    "heur-principle-red-most-change",
    "heur-pba-pct-water-absorption-range"
   ],
   "tags": [
    "estimation-sheet",
    "instructor-notes",
    "gsb",
    "gse",
    "pba",
    "voids",
    "sma",
    "diagnostics"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "9-12"
   },
   "verified": false,
   "chunk": "4_1"
  },
  {
   "id": "walk-est-ex07-adjust-ac-vol-correction",
   "type": "tool_walkthrough",
   "title": "Estimation example 07 - Adjusting AC Volume Correction for Voids Estimation",
   "steps": [
    "Open '01 Adjusting AC Vol Cor' (data already optimized) and press the 'Go Optimize' button (cell C1) to jump to the Optimization area.",
    "The AC Volume Correction factor converts the change in effective AC/Binder MASS to effective AC/Binder VOLUME - essential for estimating Voids. It is basically the ratio Gmb/Gb.",
    "It is generally NOT necessary to adjust the default 2.25 (allowed range 1.5-3.0), especially when combined blend Gsb is within 2.600-2.700. Here the combined Gsb is 2.743 (cell C51) - occasionally a mix outside 2.600-2.700 requires adjustment: Gsb < 2.600 may need the factor DECREASED; Gsb > 2.700 may need it INCREASED.",
    "The Optimize macro only improves the VMA estimation - to improve the VOIDS estimation, manually adjust the AC Volume Correction factor (cell A110) for the 'Adjusted' factor set and watch 'Orig Std Dev' vs 'Adj Std Dev' in the 'Voids - Sample to Previous' box below the Optimize button.",
    "Increase cell A110 with the right toggle button to 2.65: Orig Std Dev = 0.318 (cell F106) vs Adj Std Dev = 0.237 (cell F107). NOTE: cells shift down one row for 12.5 mm NMAS mixes because of the inserted 6.35 mm (1/4\") half-sieve row.",
    "Also evaluate cells D219-D221: 7 sample comparisons got Better (closer to zero), 5 got Worse, 0 stayed the Same - all shown on the Voids2 (Previous) graph, which compares Original-factor vs Adjusted-factor Diff in Voids (sample 3 improves most noticeably).",
    "Do not push too far: beyond 2.65 there is no significant improvement, and at 2.75 the Std Dev starts getting worse. Lighter mixes (Gsb < 2.600) may need < 2.25; heavier mixes (Gsb > 2.700) may need > 2.25.",
    "When satisfied, press the 'Copy AC' button (cell A111) to copy the Adjusted factor (A110) to the Original factor (cell A65) so both are the same. Results are in '02 Adjusting AC Vol Cor Adjusted'.",
    "This process simply improves the ability to estimate Voids."
   ],
   "purpose": "Manually tune the AC Volume Correction factor to improve Voids estimation when combined Gsb falls outside 2.600-2.700.",
   "related_ids": [
    "heur-acvc-gmb-gb-ratio-range",
    "heur-acvc-gsb-scaling",
    "walk-est-ex06-gsb-gravity-issue",
    "heur-negative-pba-acvc"
   ],
   "tags": [
    "estimation-sheet",
    "instructor-notes",
    "acvc",
    "voids",
    "optimization"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "13-14"
   },
   "verified": false,
   "chunk": "4_1"
  },
  {
   "id": "walk-est-ex08-blend-adjustment",
   "type": "tool_walkthrough",
   "title": "Estimation example 08 - Blend Adjustment (9.5 mm CG field workflow, samples 9 -> 10)",
   "steps": [
    "Open '01 QC Data 95 C-G' - a 9.5 mm (3/8\") Coarse-Graded, already-optimized data set. Based on the VMA and Voids for samples 8 and 9 (Main tab rows 20 and 21), assume it is time to adjust the field blend to REDUCE VMA and Voids.",
    "Click the 'Blend Adjustments' tab. VERY IMPORTANT: enter the aggregate settings (row 7 - % CF's, % Hot Bins, etc.) the plant was set at WHEN THE LAST SAMPLE (sample 9) WAS TAKEN, and enter the CURRENT aggregate gradations that made sample 9 AND will make sample 10. The top half of the tab is referenced by the bottom half.",
    "Ensure the last sample is REPRESENTATIVE - NOT segregated. If it WAS segregated, do NOT compare a proposed blend adjustment to it; ALWAYS use a representative sample.",
    "Copy the last sample's gradation results (Main tab, sample 9, cells L9:L17) and 'Paste Special' the VALUES into the 'Last Sample' column on the Blend Adjustments tab (cells R15:R23).",
    "Alternative: average the last few (~3) samples as 'Last Sample' PROVIDED no blend adjustments were made between them, ALL were produced at the same plant settings (CF's, recycle, total AC), and NONE were segregated. Average the gradation, total AC, Pba, VMA and Voids in an open column right of the last sample on Main, and Paste Special the average gradation VALUES into R15:R23; compare the Adjusted Blend to this average.",
    "Decide the blend adjustment, producing an 'Adjusted Blend'; copy it (cells R40:R48) and Paste Special the VALUES to the next open column on Main (sample 10 - cells M9:M17).",
    "Also enter a PROPOSED AC content (cell M18). If adjusting AC content, the value entered must equal the LAST SAMPLE plus the adjustment (e.g., last sample 5.40% + 0.2% = enter 5.60%). The plant setting changes by the same adjustment, but DO NOT enter the plant setting value in M18 unless it matches exactly.",
    "Enter a PROPOSED Pba (cell M50): take the last sample's Pba (cells K19 and K62), add the change in Pba shown on the Blend Adjustments tab (cell R51), and consider other Pba influences: stockpile moisture, plant production rate, mix temperature, resulting mix moisture, silo storage time, and haul time (when sampling at the project vs the plant).",
    "Cell M46 now shows the estimated VMA and cell M49 the estimated Voids for the PROPOSED blend - ONLY the Sample-to-Previous comparison matters here.",
    "If the estimates are not on target, return to the Blend Adjustments tab, derive a different Adjusted Blend, and replace the proposed blend - ALWAYS Paste Special VALUES only.",
    "ALWAYS evaluate the Bailey Principles for the proposed blend and consider impacts on field compactability and segregation susceptibility - if changing the PCS or any ratio is your only move, make sure people know what to expect.",
    "The same process works for mix design trials AFTER trial 1: copy the PROPOSED blend from the VBS sheet and Paste Special the VALUES into the next open Main column.",
    "The file '02 QC Data 95 C-G Prop Bl Adj' shows where the instructor ended up - there is no single 'correct' answer; the goals are: see how easy pre-evaluating a change is, value an accurate estimation, 'know where you are so you can get where you want to go', and check estimated volumetrics AND Bailey principles BEFORE making the change.",
    "AFTER the change is made and the next sample reflecting it is tested: FIRST enter the ACTUAL results in the next open column adjacent to the proposed blend and compare gradation, AC and Pba to targets; SECOND, put the actual results in place of the proposed blend. You do NOT need to remove the estimated Pba - once actual Gsb, Gmb and Gmm are entered, the calculated Pba supersedes the estimated Pba."
   ],
   "purpose": "Full field workflow for proposing, pre-evaluating, and closing the loop on a plant blend adjustment with the Estimation Sheet.",
   "related_ids": [
    "proc-blend-adjustment-proposed",
    "walk-est-blend-adjustments-tab",
    "heur-proposed-ac-m18-not-plant-setting",
    "heur-averaging-last-samples-blend-adjust",
    "heur-blend-change-bailey-check",
    "heur-actual-supersedes-proposed",
    "heur-segregated-samples-not-referenced"
   ],
   "tags": [
    "estimation-sheet",
    "instructor-notes",
    "blend-adjustment",
    "field-workflow",
    "proposed-blend",
    "coarse-graded"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "15-20"
   },
   "verified": false,
   "chunk": "4_1"
  },
  {
   "id": "heur-gsb-pba-voids-spread-chain",
   "type": "heuristic",
   "title": "Gsb error chain: 0.010 Gsb ~ 0.15% Pba (mass) ~ 0.34% Voids (volume); wrong Pba widens the VMA-vs-Voids spread",
   "statement": "0.1% AC/Binder by MASS is ~0.225% by VOLUME in a normal-weight mix (combined Gsb ~2.600-2.700); this factor is basically the ratio Gmb/Gb expressed as a percentage. A 0.010 change in Gsb alters the calculated Pba by ~0.15% (by mass), and 0.15% x 2.25 = 0.34% Voids (by volume). Therefore if the actual Pba is 0.15% different from the calculated Pba, the estimated Voids will be off an ADDITIONAL 0.34%, while the change in Pba has little to no effect on the actual VMA - creating a greater-than-normal 'spread' between the Diff in VMA and Diff in Voids values.",
   "context": "Quantifying how a wrong combined Gsb propagates into Pba and Voids estimation error on the Estimation Sheet.",
   "related_ids": [
    "heur-ac-01-mass-0225-volume",
    "heur-gsb-diff-0010-vma-03",
    "heur-voids1-gsb-diagnosis",
    "heur-acvc-gsb-scaling"
   ],
   "tags": [
    "gsb",
    "pba",
    "voids",
    "spread",
    "estimation-sheet",
    "diagnostics"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "11"
   },
   "verified": true,
   "corroborated_by": [
    "heur-ac-01-mass-0225-volume",
    "ref-voids-variability-rules"
   ],
   "chunk": "4_1"
  },
  {
   "id": "heur-single-gse-natural-agg-consistency",
   "type": "heuristic",
   "title": "Never decide off a single Gse value; natural aggregates are more consistent than the Gsb test suggests",
   "statement": "Be careful making decisions or assumptions based on SINGLE Gse values - Gse is calculated from Gmm, total AC content and Gb, so a splitting/testing issue in any one of those three tests skews it; use a moving average (of 3) on the Vbe-Gse graph. Natural aggregates are much MORE consistent than the specific gravity (Gsb) test suggests: it is VERY unusual to see a VMA-vs-Voids 'spread' > 0.2%, and the spread CANNOT be <= 0.2% if the calculated Pba is more than 0.1% off.",
   "context": "Interpreting Gse variation and the VMA-vs-Voids spread before blaming aggregate gravities.",
   "related_ids": [
    "heur-voids1-gsb-diagnosis",
    "heur-gse-plusminus-0020",
    "heur-gsb-pba-voids-spread-chain"
   ],
   "tags": [
    "gse",
    "gsb",
    "spread",
    "moving-average",
    "diagnostics",
    "estimation-sheet"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "10-12"
   },
   "verified": true,
   "corroborated_by": [
    "heur-voids-vma-spread-02",
    "heur-voids1-gsb-diagnosis"
   ],
   "chunk": "4_1"
  },
  {
   "id": "heur-acvc-gmb-gb-ratio-range",
   "type": "heuristic",
   "title": "AC Volume Correction factor is basically Gmb/Gb; allowed range 1.5-3.0, rarely needs changing within Gsb 2.600-2.700",
   "statement": "The AC Volume Correction factor converts the change in effective AC/Binder mass to effective AC/Binder volume and is basically the ratio of Gmb/Gb. It is generally NOT necessary to adjust the default 2.25 (allowed range 1.5-3.0), especially when the combined blend Gsb is within 2.600-2.700. Mixes with combined Gsb < 2.600 may need the factor DECREASED (< 2.25); mixes with Gsb > 2.700 may need it INCREASED (> 2.25) - typically, but NOT always, adjustment coincides with Gsb outside 2.600-2.700. Adjusting it only improves the VOIDS estimation (the Optimize macro works on VMA); be careful not to adjust too far.",
   "context": "When and why to touch the AC Volume Correction factor.",
   "related_ids": [
    "heur-acvc-gsb-scaling",
    "walk-est-ex07-adjust-ac-vol-correction",
    "heur-ac-01-mass-0225-volume"
   ],
   "tags": [
    "acvc",
    "voids",
    "gsb",
    "estimation-sheet"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "13-14"
   },
   "verified": true,
   "corroborated_by": [
    "ref-field-factor-adjust-limits",
    "heur-acvc-gsb-scaling",
    "heur-negative-pba-acvc"
   ],
   "chunk": "4_1"
  },
  {
   "id": "heur-proposed-ac-m18-not-plant-setting",
   "type": "heuristic",
   "title": "Proposed AC content = last sample result + adjustment; never enter the plant setting value",
   "statement": "When entering a PROPOSED AC/Binder content for a blend adjustment (cell M18), the value must equal the LAST SAMPLE'S measured AC content PLUS the adjustment (e.g., last sample 5.40% + 0.2% adjustment = enter 5.60%). The HMA plant setting will increase or decrease by the same adjustment amount, but DO NOT enter the plant setting value itself unless it happens to match the measured value exactly - the estimation works off measured results, not plant settings.",
   "context": "Entering the proposed AC content when pre-evaluating a blend/AC change on the Estimation Sheet.",
   "related_ids": [
    "walk-est-ex08-blend-adjustment",
    "proc-blend-adjustment-proposed"
   ],
   "tags": [
    "blend-adjustment",
    "ac-content",
    "proposed-blend",
    "estimation-sheet"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "16"
   },
   "verified": true,
   "chunk": "4_1"
  },
  {
   "id": "heur-averaging-last-samples-blend-adjust",
   "type": "heuristic",
   "title": "Averaging the last few samples as 'Last Sample' is valid only with unchanged settings and no segregation",
   "statement": "Instead of using only the single last sample as the baseline for a blend adjustment, some users average the last few (~3) samples - PROVIDED no blend adjustments were made between them, ALL samples were produced at the SAME plant settings (CF's, recycle and total AC content), and NONE of the samples were segregated. Average the gradation, total AC content, Pba, VMA and Voids, place the results in an open column to the right of the last sample on the Main tab, and compare the Adjusted Blend to this average.",
   "context": "Choosing the baseline for the Blend Adjustments tab.",
   "related_ids": [
    "walk-est-ex08-blend-adjustment",
    "heur-segregated-samples-not-referenced"
   ],
   "tags": [
    "blend-adjustment",
    "averaging",
    "baseline",
    "estimation-sheet"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "15-16"
   },
   "verified": true,
   "chunk": "4_1"
  },
  {
   "id": "heur-segregation-before-lab",
   "type": "heuristic",
   "title": "Estimates well BUT gradation/AC track together = segregated BEFORE the lab, not in the lab",
   "statement": "Gradation and AC content should NOT track (move up or down together). A sample that estimates well on the sheet but ALSO shows a clear gradation-vs-AC relationship was NOT segregated in the lab - it was segregated BEFORE it arrived at the lab. Mixture segregation can occur anywhere from where AC is added to the aggregate in the plant, to where the sample was obtained, or anywhere in between. It is common to see a few samples in a data set with a fairly clear gradation-AC relationship; it is UNCOMMON to see several samples in consecutive order showing one. A blended, split, and accurately tested segregated sample should still estimate well against the previous sample.",
   "context": "Judging whether samples are representative when pre-evaluating blend changes.",
   "related_ids": [
    "heur-gradation-ac-not-track",
    "heur-sieve-ac-graph-mapping-doc",
    "heur-segregation-three-causes",
    "heur-segregated-samples-not-referenced"
   ],
   "tags": [
    "segregation",
    "gradation-ac-tracking",
    "representativeness",
    "estimation-sheet"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "17"
   },
   "verified": true,
   "chunk": "4_1"
  },
  {
   "id": "heur-blend-change-bailey-check",
   "type": "heuristic",
   "title": "ALWAYS evaluate the Bailey Principles, field compactability and segregation susceptibility for a proposed blend",
   "statement": "Before making any proposed blend change, ALWAYS evaluate the Bailey Principles for the proposed blend and consider the impacts on field compactability and segregation susceptibility. Did the change move the PCS and/or any of the ratios in a way that helps or hurts these aspects of the mix? If so - and that is your only move - make sure people in the field know what to expect. If not, evaluate another proposed blend. Also add 'windage' when a proposed blend will significantly change aggregate shape, texture and/or strength: will volumetrics trend up or down for this unseen change IN ADDITION TO the estimated gradation change?",
   "context": "Final checks before committing a plant blend adjustment.",
   "related_ids": [
    "walk-est-ex08-blend-adjustment",
    "heur-estimate-windage",
    "heur-principle-red-most-change"
   ],
   "tags": [
    "blend-adjustment",
    "bailey-principles",
    "compactability",
    "segregation",
    "windage"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "18"
   },
   "verified": true,
   "chunk": "4_1"
  },
  {
   "id": "heur-design-trial-estimation-limits",
   "type": "heuristic",
   "title": "Design-trial estimation: rules-of-thumb factors, never stretch PRINCIPLE limits, FA DIP limits may move, verify batching",
   "statement": "When using the Estimation Sheet on mix design trials (after trial 1, copying the PROPOSED blend from the VBS sheet): (1) there are generally NOT enough design trials to optimize the factors, so the rules-of-thumb must suffice; (2) do NOT stretch any of the PRINCIPLE factor limits (min or max); (3) you MAY need to alter the min/max limits for the FA DIPs - check that at least some actual FAc ratios (cells I108:J108) overlap the FAc DIP limits (I102:J102) and some actual FAf ratios (I109:J109) overlap the FAf DIP limits (I104:J104), and note whether actual ratios outside the DIP limits are CLOSE (e.g., actual FAf 0.382-0.437 vs limits 0.450-0.650) or WELL AWAY (e.g., 0.231-0.262 vs 0.450-0.650); (4) blend changes often significantly change shape/texture/strength between trials - include some windage; (5) if aggregate sources change between trials, or one trial includes a material (or a significantly different amount) vs another, gradation-only estimation degrades; (6) variability is also introduced if materials are resampled between trials or people/equipment change; (7) batching accuracy matters - use the sheet to estimate the VMA change between the actual 'as-batched' gradation and the target gradation (should be only a few tenths of a percent VMA) and compare the individual Bailey Principles between the as-batched and target gradations.",
   "context": "Applying the proposed-blend workflow to laboratory design trials instead of plant samples.",
   "related_ids": [
    "walk-est-ex08-blend-adjustment",
    "proc-screen-trial-blends-est-sheet",
    "heur-fa-dip-outside-actual-range",
    "heur-as-batched-washed-gradation",
    "heur-estimate-windage",
    "heur-same-type-nmas-blends"
   ],
   "tags": [
    "design-trials",
    "estimation-sheet",
    "fa-dips",
    "factor-limits",
    "batching",
    "windage"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "18-20"
   },
   "verified": true,
   "corroborated_by": [
    "heur-fa-dip-limit-adjust",
    "walk-est-optimize-factors-tab"
   ],
   "chunk": "4_1"
  },
  {
   "id": "heur-actual-supersedes-proposed",
   "type": "heuristic",
   "title": "Close the loop: compare actuals to the proposed blend first, then overwrite it - calculated Pba supersedes estimated",
   "statement": "After making a proposed blend change (field or design lab) and testing the next sample that reflects it: FIRST enter the ACTUAL results in the next open column adjacent to the PROPOSED blend and see how well gradation, AC/Binder content and Pba mirror the targets - we don't always get what we ask for, and when that happens the volumetric results will likely differ from the estimate, which helps in understanding the actual results. SECOND, after that evaluation, enter the actual results in place of the proposed blend (gradation and AC content). The estimated Pba does NOT need to be removed - once actual Gsb, Gmb and Gmm results are entered, the calculated Pba supersedes the estimated Pba.",
   "context": "Post-change bookkeeping on the Estimation Sheet.",
   "related_ids": [
    "walk-est-ex08-blend-adjustment",
    "proc-blend-adjustment-proposed"
   ],
   "tags": [
    "blend-adjustment",
    "actual-results",
    "pba",
    "estimation-sheet",
    "workflow"
   ],
   "source": {
    "doc": "Instructor Notes for Estimation Sheet Examples, January 2024 (Excel 2010 and newer), Tab 14 - Slide 143",
    "tab": "14",
    "pages": "20"
   },
   "verified": true,
   "chunk": "4_1"
  }
 ]
};
