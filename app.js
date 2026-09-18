const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// ── 4-Wheeler All data ───────────────────────────────────────────────────
const pvBrands = [
  { name: "Maruti Suzuki", color: "#145da0", short: "MS" },
  { name: "Hyundai", color: "#2b6f8a", short: "HY" },
  { name: "Tata Motors", color: "#5c6bc0", short: "TA" },
  { name: "Mahindra", color: "#a12635", short: "MA" },
  { name: "Toyota", color: "#b8403f", short: "TY" },
  { name: "Kia", color: "#111827", short: "KI" },
  { name: "Skoda-Volkswagen", color: "#23745a", short: "SV" },
  { name: "MG Motor", color: "#8a3ffc", short: "MG" },
  { name: "Honda", color: "#d79b25", short: "HO" },
  { name: "Renault", color: "#c89116", short: "RN" },
  { name: "Nissan", color: "#57606a", short: "NI" },
  { name: "BMW", color: "#0a6fb4", short: "BM" },
  { name: "BYD India", color: "#16a085", short: "BY" }
];

const pvSales = {
  2024: {
    "Maruti Suzuki": [170214, 163397, 156330, 140448, 146694, 139918, 140354, 145570, 148061, 163130, 144238, 132523],
    "Hyundai": [57115, 51200, 53001, 50201, 49151, 44107, 49612, 51200, 51101, 55568, 48246, 42208],
    "Tata Motors": [54033, 51161, 50297, 47983, 44142, 42754, 44954, 44486, 41859, 48131, 47117, 44424],
    "Mahindra": [43068, 42401, 40631, 41008, 43218, 40022, 41623, 43277, 51062, 54504, 46222, 41424],
    "Toyota": [23800, 24500, 27180, 20494, 24600, 27474, 23600, 24200, 23300, 28850, 26323, 29529],
    "Kia": [21400, 19000, 19900, 19500, 21300, 22500, 22400, 22944, 23523, 22753, 20600, 18995],
    "Skoda-Volkswagen": [7000, 5700, 6300, 6600, 6000, 6200, 6400, 6300, 5700, 11000, 7900, 9200], // estimated from 2025 trend (minor brand)
    "MG Motor": [3700, 3000, 3400, 3500, 3200, 3300, 3400, 3500, 3100, 6100, 4400, 5100], // estimated; MG ramped up after Windsor launch in H2 2024
    "Honda": [4700, 3700, 4100, 4300, 4000, 4100, 4200, 4300, 3900, 7600, 5400, 6300], // estimated from 2025 trend (minor brand)
    "Renault": [3500, 2800, 3200, 3200, 3000, 3100, 3200, 3200, 2900, 5700, 4100, 4700], // estimated from 2025 trend (minor brand)
    "Nissan": [2200, 1700, 1900, 2000, 1800, 1900, 2000, 2000, 1800, 3500, 2500, 2900], // estimated from 2025 trend (minor brand)
    "BMW": [1150, 880, 970, 1060, 970, 970, 1060, 1060, 970, 1850, 1320, 1500], // estimated from 2025 trend (minor brand)
    "BYD India": [210, 180, 240, 210, 190, 200, 210, 220, 190, 450, 310, 390] // estimated; BYD ~3,000 units in CY2024 (grew ~84% to ~5,500 in 2025)
  },
  2025: {
    "Maruti Suzuki": [211074, 118149, 132423, 138021, 116899, 116544, 129164, 127905, 123242, 239567, 155321, 150123], // Dec corrected to FADA retail basis (150,123, 39.54% share) — prior 178,622 used a wholesale/total-sales basis inconsistent with rest of row
    "Hyundai": [59858, 38156, 42511, 43642, 38189, 38306, 43009, 42226, 35812, 65442, 49567, 48413],
    "Tata Motors": [53884, 38696, 48462, 44065, 36669, 34930, 40486, 38286, 41151, 75352, 52044, 52139],
    "Mahindra": [51914, 39889, 46297, 48405, 43560, 40919, 42207, 43632, 37659, 67918, 53997, 47882],
    "Toyota": [28907, 21561, 23328, 23344, 22031, 22543, 25370, 24954, 20303, 34868, 27320, 26012], // corrected: prior round-number placeholders for Feb-Sep/Nov/Dec were off by up to ~16%
    "Kia": [22169, 18794, 21997, 21618, 16810, 18005, 19494, 18212, 16727, 32961, 23805, 20568], // corrected: prior round-number placeholders for Feb-Sep/Nov/Dec were off by up to ~16%
    "Skoda-Volkswagen": [9140, 6462, 9064, 9458, 8359, 7661, 8018, 8111, 6510, 12202, 9316, 9193], // corrected to sourced monthly retail figures; CY2025 total reconciled to ~108,277
    "MG Motor": [6363, 4551, 5167, 4871, 4982, 4954, 6033, 5717, 4729, 5819, 4400, 4178], // corrected; prior placeholders understated several months by 30-60% (e.g. Jul actual 6,033 vs prior 4,400)
    "Honda": [7687, 4100, 4928, 4833, 4076, 3859, 4431, 4041, 3340, 7232, 5264, 5537], // corrected to sourced monthly retail figures; CY2025 total reconciled to ~62,576
    "Renault": [3924, 2523, 2633, 2830, 2434, 2552, 2292, 2593, 2517, 5056, 3397, 3304], // corrected to sourced monthly retail figures; CY2025 total reconciled to ~36,420
    "Nissan": [2532, 1706, 1756, 1821, 1529, 1345, 1514, 1440, 1319, 2562, 1938, 1744], // corrected to sourced monthly retail figures; CY2025 total reconciled to ~21,875
    "BMW": [1709, 1138, 1263, 1234, 1045, 1202, 1301, 1273, 1209, 1483, 1366, 1582], // corrected to sourced monthly retail figures; CY2025 total reconciled to ~16,735
    "BYD India": [313, 254, 396, 346, 494, 476, 459, 450, 547, 1005, 425, 237] // corrected: prior placeholders understated most months by 20-60%; CY2025 total reconciled to confirmed 5,402 (Oct derived as exact remainder)
  },
  2026: {
    "Maruti Suzuki": [216043, 213995, 172919, 187704, 242688, 200390, 196203, 176971, null, null, null, null], // Jun: total sales (dom 150,150 + OEM 7,472 + exports 42,768) per Maruti press release. Jul: wholesale dispatch 196,203 (+42.4% YoY, all-time-high domestic base); Aug: 176,971 (+34.8% YoY), 9.8% lower MoM than Jul
    "Hyundai": [65914, 66134, 48623, 51902, 47837, 51335, 54210, 54396, null, null, null, null], // Jun: total 51,335 (dom 39,635 + exp 11,700); supplier-fire production loss ~13,900. Jul: 54,210 (+23.3% YoY); Aug: 54,396 (+23.6% YoY), highest-ever Hyundai August
    "Tata Motors": [63558, 63331, 66971, 59000, 59090, 63083, 62611, 65253, null, null, null, null], // March corrected: 67268 unsupported by any source; 66971 confirmed (domestic 66192 + exports 779). Jun: total PV 63,083 (+69% YoY). Jul: 62,611 (+58.4% YoY); Aug: 65,253 (+59.1% YoY), widened lead over Mahindra
    "Mahindra": [63366, 60018, 61032, 56331, 58021, 61504, 60048, 59257, null, null, null, null], // Jun: UV incl exports 61,504 (domestic 60,393). Jul: 60,048 (+20.4% YoY); Aug: 59,257 (+50.4% YoY)
    "Toyota": [35053, 34034, 27479, 30159, 33128, 31016, 30516, 28410, null, null, null, null], // Jun: total 31,016 (dom 28,441 + exp 2,575). Jul: 30,516 (+4.7% YoY); Aug: 28,410 (-3.0% YoY)
    "Kia": [29954, 27610, 27987, 27286, 27586, 24552, 28200, 29042, null, null, null, null], // Jun: 24,552 wholesale (highest-ever June). Jul: 28,200 (+27.4% YoY); Aug: 29,042 (+48.1% YoY)
    "Skoda-Volkswagen": [9794, 9000, 8676, 9714, 8379, null, 8425, 7933, null, null, null, null], // Feb restored: RushLane wholesale (Skoda 6,361 + VW 2,639 = 9,000). Jun left pending: no standalone June monthly figure published (only H1 cumulative). Jul: Skoda 5,710 + VW 2,715 = 8,425; Aug: Skoda 5,650 + VW 2,283 = 7,933 (AutoPunditz brand table)
    "MG Motor": [5926, 4957, 6233, 6018, 6048, 7568, 8158, 7508, null, null, null, null], // Feb restored: RushLane wholesale report states MG Motor 4,957 directly. Jun: 7,568 wholesale (+30% YoY). Jul: 8,158 (+22.2% YoY); Aug: 7,508 (+14.1% YoY)
    "Honda": [5848, 7212, 5507, 4069, 5111, 5243, 6014, 5385, null, null, null, null], // Jun: domestic 5,243 (total incl exports 8,788). Jul: 6,014 (+48.5% YoY); Aug: 5,385 (+39.9% YoY)
    "Renault": [4839, 3495, 3588, 5413, 4113, 4063, 3293, 2842, null, null, null, null], // Jun: 4,063 (+54.78% YoY). Jul: 3,293 (+27.9% YoY); Aug: 2,842 (-5.7% YoY)
    "Nissan": [null, 2230, 2538, 3203, 2948, 3006, 4518, 3426, null, null, null, null], // Feb restored: RushLane wholesale report states Nissan India 2,230 directly. Jun: 3,006 (+42.67% YoY). Jul: 4,518 (+218.2% YoY, Magnite export ramp-up); Aug: 3,426 (+147.5% YoY)
    "BMW": [null, null, 1559, null, null, null, 1702, null, null, null, null, null], // Jan/Feb left pending: 3 conflicting VAHAN-data citations found (1,962 / 1,873 / 2,040 for Jan) with no way to confirm which is canonical. Jul: 1,702 retail registrations (segment-leading premium brand); Aug left pending: only H1/cumulative BMW Group figures found, no standalone August brand figure
    "BYD India": [231, 306, 414, 469, 686, 860, 749, 543, null, null, null, null] // corrected: prior figures (850-1020) had no supporting source; VAHAN retail data confirms these much lower values (BYD is 100% EV, so PV-all = EV-all). Jun: 860 (VAHAN, new monthly high). Jul: 749 (+22.2% YoY, -19.1% MoM off Jun high); Aug: 543 (-6.5% YoY, -27.5% MoM)
  }
};

const pvSourceNotes = {
  2024: {
    January: "Manufacturer monthly domestic sales (OEM/SIAM) - Jan 2024",
    February: "Manufacturer monthly domestic sales (OEM/SIAM) - Feb 2024",
    March: "Manufacturer monthly domestic sales (OEM/SIAM) - Mar 2024",
    April: "Manufacturer monthly domestic sales (OEM/SIAM) - Apr 2024",
    May: "Manufacturer monthly domestic sales (OEM/SIAM) - May 2024",
    June: "Manufacturer monthly domestic sales (OEM/SIAM) - Jun 2024",
    July: "Manufacturer monthly domestic sales (OEM/SIAM) - Jul 2024",
    August: "Manufacturer monthly domestic sales (OEM/SIAM) - Aug 2024",
    September: "Manufacturer monthly domestic sales (OEM/SIAM) - Sep 2024",
    October: "Manufacturer monthly domestic sales (OEM/SIAM) - Oct 2024",
    November: "Manufacturer monthly domestic sales (OEM/SIAM) - Nov 2024",
    December: "Manufacturer monthly domestic sales (OEM/SIAM) - Dec 2024"
  },
  2025: {
    January: "FADA retail report (RushLane) - Jan 2025",
    February: "FADA retail report (RushLane) - Feb 2025",
    March: "FADA retail report (RushLane) - Mar 2025",
    April: "FADA retail report (RushLane) - Apr 2025",
    May: "FADA retail report (RushLane) - May 2025",
    June: "FADA retail report (RushLane) - Jun 2025",
    July: "FADA retail report (RushLane) - Jul 2025",
    August: "FADA retail report (RushLane) - Aug 2025",
    September: "FADA retail report (RushLane) - Sep 2025",
    October: "FADA retail report (RushLane) - Oct 2025",
    November: "FADA retail report (RushLane) - Nov 2025",
    December: "FADA retail report (RushLane); CY2025 roundup reconciliation - Dec 2025"
  },
  2026: {
    January: "TOI Jan 2026 top manufacturer report",
    February: "TOI Feb 2026 OEM sales report",
    March: "NBT March 2026 brand ranking",
    April: "NBT April 2026 brand ranking",
    May: "TOI and AutoPunditz May 2026 reports",
    June: "Official OEM June 2026 sales press releases (Maruti/Hyundai/Toyota/Kia/Tata/Mahindra); RushLane top-6 & Autocar June 2026",
    July: "AutoPunditz Jul 2026 OEM brand table (Maruti/Tata/Mahindra/Hyundai/Toyota/Kia/MG/Honda/Skoda/Nissan/Renault/VW); BMW retail via AutoPunditz BMW-Mercedes report; BYD via AutoPunditz EV report",
    August: "AutoPunditz Aug 2026 OEM brand table (India Car Sales Snapshot); BYD via AutoPunditz EV registrations report"
  }
};

// ── 4-Wheeler IC Engine Data ───────────────────────────────────────
const pvICEBrands = [
  { name: "Maruti Suzuki ICE", color: "#145da0", short: "MS" },
  { name: "Hyundai ICE", color: "#2b6f8a", short: "HY" },
  { name: "Tata Motors ICE", color: "#5c6bc0", short: "TA" },
  { name: "Mahindra ICE", color: "#a12635", short: "MA" },
  { name: "Toyota ICE", color: "#b8403f", short: "TY" },
  { name: "Kia ICE", color: "#111827", short: "KI" }
];

const pvICESales = {
  2024: {
    "Maruti Suzuki ICE": [170214, 163397, 156330, 140448, 146694, 139918, 140354, 145570, 148061, 163130, 144238, 132523],
    "Hyundai ICE":      [56825, 50950, 52681, 49911, 48891, 43827, 49322, 50910, 50851, 54958, 47836, 41688],
    "Tata Motors ICE":  [48233, 46061, 44797, 43083, 39442, 38154, 40054, 39386, 37059, 41231, 42921, 39489],
    "Mahindra ICE":     [42468, 41851, 39981, 40428, 42698, 39482, 41063, 42677, 50442, 53824, 45537, 40709],
    "Toyota ICE":       [23800, 24500, 27180, 20494, 24600, 27474, 23600, 24200, 23300, 28850, 26323, 29529],
    "Kia ICE":          [21400, 19000, 19900, 19500, 21300, 22500, 22400, 22944, 23523, 22753, 20600, 18995]
  },
  2025: {
    "Maruti Suzuki ICE": [211074, 118149, 132423, 138021, 116899, 116544, 129164, 127905, 123242, 239567, 155321, 150123], // = Total (Maruti EV is all-zero in 2025; e-Vitara launched 2026)
    "Hyundai ICE": [59537, 37418, 41662, 42965, 37583, 37794, 42429, 41576, 35262, 64998, 49030, 48151], // = Total minus corrected Hyundai EV
    "Tata Motors ICE": [48837, 34871, 43752, 39629, 32318, 30222, 34175, 30898, 35006, 68113, 45948, 45698], // = Total minus corrected Tata EVs
    "Mahindra ICE": [51226, 39411, 44353, 45426, 41060, 37890, 39407, 39953, 34416, 64007, 51077, 44816], // = Total minus corrected Mahindra EV
    "Toyota ICE": [28907, 21561, 23328, 23344, 22031, 22543, 25370, 24954, 20303, 34868, 27320, 26012], // = Total (Toyota has no separate EV line)
    "Kia ICE": [22169, 18794, 21997, 21618, 16810, 18005, 19494, 18212, 16727, 32961, 23805, 20568] // = Total (Kia has no separate EV line)
  },
  2026: {
    "Maruti Suzuki ICE": [215828, 213781, 171970, 186474, 241097, 198494, 194613, 175566, null, null, null, null], // Jul/Aug: All minus e-Vitara EV (1,590 / 1,405)
    "Hyundai ICE":      [65581,  65830,  48147,  51386,  47377,  50988,  53644, 53876, null, null, null, null], // Jul: All minus EV (566). Aug: EV not separately published — estimated ~520 units from Jul level and industry-wide ~7% MoM EV softness; ICE = All minus that estimate (flagged, not a sourced figure)
    "Tata Motors ICE":  [55551,  57773,  58718,  50457,  48751,  51060,  48933, 52094, null, null, null, null], // Jul: All minus EV (13,678). Aug: All minus EV (13,159, = 42.87% of Aug's 30,696 total EV-car registrations per VAHAN)
    "Mahindra ICE":     [59698,  57105,  55788,  50918,  51811,  53859,  52306, 52793, null, null, null, null], // Jul: All minus EV (7,742). Aug: All minus EV (6,464)
    "Toyota ICE":       [35053,  34034,  27479,  30159,  33128,  31016,  30516, 28410, null, null, null, null], // Jul/Aug: = All (Toyota has no separate EV line)
    "Kia ICE":          [29954,  27610,  27987,  27286,  27586,  24552,  28200, 29042, null, null, null, null] // Jul/Aug: = All (Kia had no separate EV line until Syros EV launched in Aug; Kia EV not yet tracked as its own row)
  }
};

const pvICESourceNotes = {
  2024: {
    January: "Estimated ICE dispatch (Total minus VAHAN EV) - Jan 2024",
    February: "Estimated ICE dispatch (Total minus VAHAN EV) - Feb 2024",
    March: "Estimated ICE dispatch (Total minus VAHAN EV) - Mar 2024",
    April: "Estimated ICE dispatch (Total minus VAHAN EV) - Apr 2024",
    May: "Estimated ICE dispatch (Total minus VAHAN EV) - May 2024",
    June: "Estimated ICE dispatch (Total minus VAHAN EV) - Jun 2024",
    July: "Estimated ICE dispatch (Total minus VAHAN EV) - Jul 2024",
    August: "Estimated ICE dispatch (Total minus VAHAN EV) - Aug 2024",
    September: "Estimated ICE dispatch (Total minus VAHAN EV) - Sep 2024",
    October: "Estimated ICE dispatch (Total minus VAHAN EV) - Oct 2024",
    November: "Estimated ICE dispatch (Total minus VAHAN EV) - Nov 2024",
    December: "Estimated ICE dispatch (Total minus VAHAN EV) - Dec 2024"
  },
  2025: {
    January: "Derived: corrected PV-All retail minus corrected PV-EV retail - Jan 2025",
    February: "Derived: corrected PV-All retail minus corrected PV-EV retail - Feb 2025",
    March: "Derived: corrected PV-All retail minus corrected PV-EV retail - Mar 2025",
    April: "Derived: corrected PV-All retail minus corrected PV-EV retail - Apr 2025",
    May: "Derived: corrected PV-All retail minus corrected PV-EV retail - May 2025",
    June: "Derived: corrected PV-All retail minus corrected PV-EV retail - Jun 2025",
    July: "Derived: corrected PV-All retail minus corrected PV-EV retail - Jul 2025",
    August: "Derived: corrected PV-All retail minus corrected PV-EV retail - Aug 2025",
    September: "Derived: corrected PV-All retail minus corrected PV-EV retail - Sep 2025",
    October: "Derived: corrected PV-All retail minus corrected PV-EV retail - Oct 2025",
    November: "Derived: corrected PV-All retail minus corrected PV-EV retail - Nov 2025",
    December: "Derived: corrected PV-All retail minus corrected PV-EV retail - Dec 2025"
  },
  2026: {
    January: "Estimated ICE dispatch (Total minus VAHAN EV)",
    February: "Estimated ICE dispatch (Total minus VAHAN EV)",
    March: "Estimated ICE dispatch (Total minus VAHAN EV)",
    April: "Estimated ICE dispatch (Total minus VAHAN EV)",
    May: "Estimated ICE dispatch (Total minus VAHAN EV)",
    June: "Derived: OEM total sales minus VAHAN EV registrations - Jun 2026",
    July: "Derived: OEM total sales minus VAHAN EV registrations - Jul 2026",
    August: "Derived: OEM total sales minus VAHAN EV registrations - Aug 2026 (Hyundai EV component estimated, see pvEVSales note)"
  }
};

// ── 4-Wheeler EV Data ──────────────────────────────────────────────
const pvEVBrands = [
  { name: "Tata EVs", color: "#23745a", short: "TA" },
  { name: "MG Motor EV", color: "#8a3ffc", short: "MG" },
  { name: "Mahindra EV", color: "#a12635", short: "MA" },
  { name: "BYD India", color: "#16a085", short: "BY" },
  { name: "Maruti Suzuki EV", color: "#145da0", short: "MS" },
  { name: "Hyundai EV", color: "#2b6f8a", short: "HY" }
];

const pvEVSales = {
  2024: {
    "Tata EVs":        [5800, 5100, 5500, 4900, 4700, 4600, 4900, 5100, 4800, 6900, 4196, 4935], // CY2024 total ~61,435 (VAHAN); Nov sourced
    "MG Motor EV":     [900, 950, 1100, 1150, 1200, 1300, 1500, 1700, 2400, 3200, 3000, 3064], // CY2024 total ~21,464; ramped after Windsor launch
    "Mahindra EV":     [600, 550, 650, 580, 520, 540, 560, 600, 620, 680, 685, 715], // CY2024 total ~7,300 (XUV400)
    "BYD India":       [210, 180, 240, 210, 190, 200, 210, 220, 190, 450, 310, 390], // CY2024 ~3,000 units
    "Maruti Suzuki EV": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // Maruti had no EV in 2024 (e-Vitara launched 2025)
    "Hyundai EV":      [290, 250, 320, 290, 260, 280, 290, 290, 250, 610, 410, 520] // estimated (Ioniq 5 / Kona); Creta EV launched 2025
  },
  2025: {
    "Tata EVs": [5047, 3825, 4710, 4436, 4351, 4708, 6311, 7388, 6145, 7239, 6096, 6441], // corrected to sourced monthly retail figures (autocarpro/RushLane); CY2025 total ~66,697 vs confirmed 70,004 (~4.7% gap, within FADA monthly-revision tolerance)
    "MG Motor EV": [4237, 3270, 3889, 3462, 3765, 3972, 5089, 4781, 3912, 4549, 3658, 3555], // corrected; Apr/May derived from Apr-Oct 7-month total; CY2025 total ~48,139 vs confirmed 51,387
    "Mahindra EV": [688, 478, 1944, 2979, 2500, 3029, 2800, 3679, 3243, 3911, 2920, 3066], // corrected; May/Jul/Aug derived from Apr-Oct 7-month total; CY2025 total ~31,237 vs confirmed 33,513
    "BYD India": [313, 254, 396, 346, 494, 476, 459, 450, 547, 1005, 425, 237], // = PV-All BYD row exactly (BYD is 100% EV in India)
    "Maruti Suzuki EV": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], // confirmed: Maruti's first EV (e-Vitara) launched Feb 2026, none sold in 2025
    "Hyundai EV": [321, 738, 849, 677, 606, 512, 580, 650, 550, 444, 537, 262] // corrected; Jul/Aug/Sep/Nov derived as remainder against confirmed CY2025 total of 6,726
  },
  2026: {
    "Tata EVs":        [8007, 5558, 8253, 8543, 10339, 12023, 13678, 13159, null, null, null, null], // corrected to VAHAN retail data (e-vehicleinfo/carbike360/RushLane EV roundups) — prior figures were unsupported estimates. Jun: 12,023 VAHAN (Tata wholesale 14,800), new high. Jul: 13,678 (+103.2% YoY, #1 EV brand at 42.5% share); Aug: 13,159 (= 42.87% of 30,696 total EV-car registrations)
    "MG Motor EV":     [4703, 3310, 5141, 5006, 4985, 5785, 5689, 4622, null, null, null, null], // corrected to VAHAN retail data — prior figures were unsupported estimates. Jun: 5,785 VAHAN (+23% YoY). Jul: 5,689 (-3.6% YoY); Aug: 4,622 (-17.8% YoY)
    "Mahindra EV":     [3668, 2913, 5244, 5413, 6210, 7645, 7742, 6464, null, null, null, null], // corrected to VAHAN retail data — prior figures were unsupported estimates. Jun: 7,645 VAHAN, first time above 7,000. Jul: 7,742 (+126.6% YoY); Aug: 6,464 (+56.2% YoY)
    "BYD India":       [231, 306, 414, 469, 686, 860, 749, 543, null, null, null, null], // corrected to VAHAN retail data — prior figures were unsupported estimates. Jun: 860 VAHAN. Jul: 749 (+22.2% YoY); Aug: 543 (-6.5% YoY)
    "Maruti Suzuki EV": [215, 214, 949, 1230, 1591, 1896, 1590, 1405, null, null, null, null], // corrected to VAHAN retail data — prior figures were unsupported estimates. Jun: 1,896 e-Vitara (highest since Jan launch). Jul: 1,590 e-Vitara (5th straight 4-digit month); Aug: 1,405 (-16% MoM)
    "Hyundai EV":      [333, 304, 476, 516, 460, 347, 566, 520, null, null, null, null] // corrected to VAHAN retail data — prior figures were unsupported estimates. Jun: 347 VAHAN (-42% YoY). Jul: 566 (-21.3% YoY, +51.3% MoM). Aug: no standalone Creta EV/Ioniq figure published separately from combined Creta total — estimated ~520 from Jul level and industry EV softness in Aug (flagged, not directly sourced); Hyundai ICE Aug derived from this estimate
  }
};

const pvEVSourceNotes = {
  2024: {
    January: "VAHAN Passenger EV retail channels - Jan 2024",
    February: "VAHAN Passenger EV retail channels - Feb 2024",
    March: "VAHAN Passenger EV retail channels - Mar 2024",
    April: "VAHAN Passenger EV retail channels - Apr 2024",
    May: "VAHAN Passenger EV retail channels - May 2024",
    June: "VAHAN Passenger EV retail channels - Jun 2024",
    July: "VAHAN Passenger EV retail channels - Jul 2024",
    August: "VAHAN Passenger EV retail channels - Aug 2024",
    September: "VAHAN Passenger EV retail channels - Sep 2024",
    October: "VAHAN Passenger EV retail channels - Oct 2024",
    November: "VAHAN Passenger EV retail channels - Nov 2024",
    December: "VAHAN Passenger EV retail channels - Dec 2024"
  },
  2025: {
    January: "VAHAN/FADA EV retail (RushLane/autocarpro) - Jan 2025",
    February: "VAHAN/FADA EV retail (RushLane/autocarpro) - Feb 2025",
    March: "VAHAN/FADA EV retail (RushLane/autocarpro) - Mar 2025",
    April: "VAHAN/FADA EV retail (RushLane/autocarpro) - Apr 2025",
    May: "VAHAN/FADA EV retail (RushLane/autocarpro); some figures derived from multi-month totals - May 2025",
    June: "VAHAN/FADA EV retail (RushLane/autocarpro) - Jun 2025",
    July: "VAHAN/FADA EV retail (RushLane/autocarpro); some figures derived from multi-month totals - Jul 2025",
    August: "VAHAN/FADA EV retail (RushLane/autocarpro); some figures derived from multi-month totals - Aug 2025",
    September: "VAHAN/FADA EV retail (RushLane/autocarpro); some figures derived from multi-month totals - Sep 2025",
    October: "VAHAN/FADA EV retail (RushLane/autocarpro) - Oct 2025",
    November: "VAHAN/FADA EV retail (RushLane/autocarpro) - Nov 2025",
    December: "VAHAN/FADA EV retail (RushLane/cartoq) - Dec 2025"
  },
  2026: {
    January: "VAHAN Passenger EV retail channels (e-vehicleinfo / RushLane)",
    February: "VAHAN Passenger EV retail channels (carbike360 / autocarpro)",
    March: "VAHAN Passenger EV retail channels (e-vehicleinfo)",
    April: "VAHAN Passenger EV retail channels (carbike360 / RushLane)",
    May: "VAHAN Passenger EV retail channels (RushLane / searchev)",
    June: "VAHAN Passenger EV registrations (Autocar Pro / AutoPunditz Jun 2026)",
    July: "VAHAN Passenger EV registrations (AutoPunditz Jul 2026 EV report; Autocar India EV report)",
    August: "VAHAN Passenger EV registrations (AutoPunditz Aug 2026 EV registrations report); Hyundai EV estimated, not directly sourced"
  }
};

// ── Commercial vehicle data ────────────────────────────────────────────────
const cvBrands = [
  { name: "Tata Motors CV", color: "#1a5fa8", short: "TM" },
  { name: "Mahindra CV", color: "#a12635", short: "MC" },
  { name: "Ashok Leyland", color: "#d04a1a", short: "AL" },
  { name: "Eicher Motors (VECV)", color: "#e07b00", short: "EM" },
  { name: "Maruti Suzuki CV", color: "#145da0", short: "MS" },
  { name: "Daimler India", color: "#57606a", short: "DI" },
  { name: "Force Motors", color: "#8a3ffc", short: "FM" }
];

const cvSales = {
  2024: {
    "Tata Motors CV": [31300, 30800, 32200, 29400, 29000, 29400, 29900, 27207, 28500, 33100, 30400, 31700], // Aug sourced; rest estimated from 2025 trend
    "Mahindra CV": [26000, 24600, 25100, 22300, 21900, 22800, 23300, 22300, 21400, 27000, 24200, 25600], // estimated from 2025 trend
    "Ashok Leyland": [17100, 16600, 18100, 14300, 13800, 14300, 14700, 14300, 13300, 17600, 15200, 16200], // estimated from 2025 trend
    "Eicher Motors (VECV)": [9300, 8700, 11900, 6500, 6900, 7200, 7500, 7100, 6700, 10000, 8100, 8700], // estimated from 2025 trend
    "Maruti Suzuki CV": [4700, 3900, 4000, 3500, 3400, 3600, 3700, 3600, 3400, 4900, 4000, 4400], // estimated from 2025 trend
    "Daimler India": [2050, 1770, 1860, 1670, 1630, 1720, 1770, 1720, 1630, 2140, 1860, 1950], // estimated from 2025 trend
    "Force Motors": [1770, 1630, 1860, 1810, 1670, 1720, 1770, 1720, 1630, 2050, 1770, 1910] // estimated from 2025 trend
  },
  2025: {
    "Tata Motors CV": [31393, 26925, 30354, 30663, 26100, 24436, 25244, 26132, 23827, 34838, 33294, 29560], // corrected to RushLane FADA CV retail reports; Aug derived as remainder vs confirmed CY2025 total 342,766 (exact match)
    "Mahindra CV": [27523, 21149, 24170, 21124, 19816, 19683, 20442, 21718, 21126, 37188, 28225, 22766], // corrected; Aug derived as remainder vs confirmed CY2025 total 284,930 (exact match)
    "Ashok Leyland": [15748, 14393, 16365, 15891, 13763, 13049, 14174, 15239, 13273, 16557, 15375, 15238], // corrected to sourced monthly retail figures; CY2025 sum 179,065 vs confirmed 176,574 (~1.4% over, within FADA revision tolerance)
    "Eicher Motors (VECV)": [7274, 6268, 6777, 7050, 6950, 6901, 7125, 7200, 6972, 7598, 7115, 6737], // corrected; Apr/May/Aug/Sep derived as remainder vs confirmed CY2025 total 83,967 (exact match)
    "Maruti Suzuki CV": [5224, 3669, 3700, 3600, 3550, 3296, 3589, 3450, 3166, 6058, 4531, 4004], // corrected; Mar/Apr/May/Aug/Sep derived as remainder vs confirmed CY2025 total 47,837 (exact match)
    "Daimler India": [2151, 1699, 1850, 1800, 1750, 1641, 1436, 1700, 1567, 1871, 1666, 1780], // corrected; Mar/Apr/May/Aug/Sep derived as remainder vs confirmed CY2025 total 20,911 (exact match)
    "Force Motors": [2000, 1762, 2692, 3646, 2350, 2036, 1950, 2329, 1492, 1823, 2208, 1613] // corrected; Jan/May/Aug derived as remainder vs confirmed CY2025 total 25,901 (exact match); prior Jan figure of 21,621 was a source-extraction error
  },
  2026: {
    "Tata Motors CV":      [36571, 35900, 36380, 36891, 30784, 36599, 34733, 36619, null, null, null, null], // Jun: domestic CV dispatch 36,599 (+31% YoY; total incl exports 40,805). Jul: FADA retail 34,733 (+32.8% YoY, 34.85% market share); Aug: domestic dispatch 36,619 (+33% YoY; total incl exports 44,411, +49% YoY) — methodology switches retail→dispatch between Jul/Aug per source availability
    "Mahindra CV":         [31884, 27014, 26898, 24308, 24079, 26076, 26055, 29910, null, null, null, null], // Jun: domestic CV 26,076 (+35% YoY). Jul: FADA retail 26,055 (+22.4% YoY); Aug: domestic dispatch 29,910 (sub-3.5T CV 27,415 +22% YoY, plus Trucks & Buses/SML 2,495 +47% YoY)
    "Ashok Leyland":       [19205, 18619, 19384, 14646, 14923, 19194, 17691, 19438, null, null, null, null], // Jun: total 19,194 (+25% YoY). Jul: FADA retail 17,691 (+16.2% YoY); Aug: domestic dispatch 19,438 (+43% YoY; total incl exports 21,038, +38% YoY)
    "Eicher Motors (VECV)":[10601,  9986, 13311,  7318,  7978,  9519, 8724, 7584, null, null, null, null], // Jun: total 9,519 (+29.3% YoY). Jul: FADA retail 8,724 (+15.2% YoY); Aug: domestic dispatch 7,584 (+19.8% YoY; total incl exports 8,434, +17.7% YoY)
    "Maruti Suzuki CV":    [ 5456,  4489,  4561,   null,   null,  null, 4460, 3107, null, null, null, null], // Apr/May Super Carry-only figures don't match this row's Jan-Mar basis — left pending; Jun likewise pending. Jul: FADA retail 4,460 (+22.7% YoY); Aug: Super Carry dispatch 3,107 (+12.1% YoY)
    "Daimler India":       [ 2444,   null,  2130,  2283,   null,  null, 1667, null, null, null, null, null], // Jun: no standalone June figure published. Jul: FADA retail 1,667 (+14.2% YoY); Aug: no standalone figure published
    "Force Motors":        [  null,   null,  2142,  2113,   null,  null, 2610, 3721, null, null, null, null] // Jun: no standalone June sales figure published. Jul: FADA retail 2,610 (+18.6% YoY; total incl non-CV 3,770); Aug: domestic dispatch 3,721 (+62.1% YoY; total incl exports 3,802, +58.2% YoY)
  }
};

const cvSourceNotes = {
  2024: {
    January: "CV monthly sales (OEM filings / estimate) - Jan 2024",
    February: "CV monthly sales (OEM filings / estimate) - Feb 2024",
    March: "CV monthly sales (OEM filings / estimate) - Mar 2024",
    April: "CV monthly sales (OEM filings / estimate) - Apr 2024",
    May: "CV monthly sales (OEM filings / estimate) - May 2024",
    June: "CV monthly sales (OEM filings / estimate) - Jun 2024",
    July: "CV monthly sales (OEM filings / estimate) - Jul 2024",
    August: "CV monthly sales (OEM filings / estimate) - Aug 2024",
    September: "CV monthly sales (OEM filings / estimate) - Sep 2024",
    October: "CV monthly sales (OEM filings / estimate) - Oct 2024",
    November: "CV monthly sales (OEM filings / estimate) - Nov 2024",
    December: "CV monthly sales (OEM filings / estimate) - Dec 2024"
  },
  2025: {
    January: "FADA CV retail report (RushLane) - Jan 2025",
    February: "FADA CV retail report (RushLane) - Feb 2025",
    March: "FADA CV retail report (RushLane) - Mar 2025",
    April: "FADA CV retail report (RushLane) - Apr 2025",
    May: "FADA CV retail report (RushLane) - May 2025",
    June: "FADA CV retail report (RushLane) - Jun 2025",
    July: "FADA CV retail report (RushLane) - Jul 2025",
    August: "Derived from confirmed CY2025 total (RushLane CV retail series did not publish a standalone Aug 2025 article) - Aug 2025",
    September: "FADA CV retail report (RushLane) - Sep 2025",
    October: "FADA CV retail report (RushLane) - Oct 2025",
    November: "FADA CV retail report (RushLane) - Nov 2025",
    December: "FADA CV retail report (RushLane); CY2025 roundup reconciliation - Dec 2025"
  },
  2026: {
    January:  "FADA Jan 2026 CV retail report (RushLane)",
    February: "FADA Feb 2026 CV retail report (RushLane)",
    March:    "FADA Mar 2026 CV retail report (RushLane / trucks.cardekho)",
    April:    "FADA Apr 2026 CV retail report + OEM filings",
    May:      "OEM exchange filings / AutoPunditz May 2026 CV data",
    June:     "Official OEM June 2026 sales releases (Tata/Mahindra/Ashok Leyland/VECV); smaller players pending",
    July:     "FADA CV retail report (TractorJunction / Business Standard Jul 2026)",
    August:   "OEM exchange filings / monthly business updates (Tata/Mahindra/Ashok Leyland/VECV/Maruti/Force); Daimler pending — methodology switches from Jul's FADA retail basis to Aug's OEM dispatch basis, see cvSales notes"
  }
};

// ── 2-Wheeler All Data ───────────────────────────────────────────────────
const tw2wAllBrands = [
  { name: "Hero MotoCorp",   color: "#145da0", short: "HE" },
  { name: "Honda 2W",        color: "#c0392b", short: "HO" },
  { name: "TVS Motor",       color: "#f39c12", short: "TV" },
  { name: "Bajaj Auto",      color: "#27ae60", short: "BA" },
  { name: "Suzuki Moto",     color: "#2980b9", short: "SU" },
  { name: "Royal Enfield",   color: "#6c3483", short: "RE" },
  { name: "Yamaha India",    color: "#16a085", short: "YA" },
  { name: "Ather Energy",    color: "#8e44ad", short: "AT" },
  { name: "Ola Electric",    color: "#e74c3c", short: "OL" },
  { name: "Greaves / Ampere", color: "#34495e", short: "GA" }
];

const tw2wAllSales = {
  2024: {
    "Hero MotoCorp": [480000, 440000, 470000, 513296, 460000, 491415, 347335, 455000, 470000, 657403, 490000, 470000], // Apr/Jun/Jul/Oct sourced (domestic)
    "Honda 2W": [430000, 410000, 440000, 481046, 470000, 482597, 439118, 450000, 440000, 580000, 470000, 460000], // Apr/Jun/Jul sourced (domestic)
    "TVS Motor": [290000, 270000, 290000, 301449, 295000, 255734, 254250, 300000, 310000, 400000, 330000, 340000], // Apr/Jun/Jul sourced (domestic)
    "Bajaj Auto": [195000, 175000, 190000, 216950, 185000, 177207, 168847, 190000, 200000, 255909, 210000, 210000], // Apr/Jun/Jul/Oct sourced (domestic)
    "Suzuki Moto": [75000, 70000, 73000, 72000, 71000, 69000, 70000, 74000, 72000, 95000, 82000, 84000], // estimated from 2025 trend
    "Royal Enfield": [76000, 71000, 74000, 73000, 72000, 69000, 71000, 74000, 72000, 101886, 82000, 85000], // Oct sourced; rest estimated
    "Yamaha India": [57000, 52000, 55000, 53000, 54000, 50000, 51000, 54000, 51000, 72000, 61000, 63000], // estimated from 2025 trend
    "Ather Energy": [13000, 11500, 17429, 13500, 13000, 12500, 13500, 15000, 14000, 22000, 16500, 18500], // Mar sourced (best month); VAHAN retail
    "Ola Electric": [30000, 30000, 52000, 37000, 42000, 36000, 39000, 27000, 24000, 42000, 29000, 19500], // CY2024 total ~407,547 (VAHAN retail)
    "Greaves / Ampere": [3800, 3400, 4800, 4000, 3700, 3500, 3700, 3900, 3600, 5200, 4200, 4600] // estimated from 2025 trend
  },
  2025: {
    "Hero MotoCorp": [412378, 357296, 510086, 511687, 499036, 525136, 412397, 519139, 647582, 604829, 570520, 419243],
    "Honda 2W": [402977, 383918, 401411, 406102, 393383, 388812, 466331, 481021, 414920, 598952, 533645, 392306],
    "TVS Motor": [293860, 276072, 297622, 309274, 309285, 281012, 308720, 368862, 347076, 421631, 365608, 337331],
    "Bajaj Auto": [171299, 136688, 183659, 183069, 184831, 149317, 139279, 184109, 210680, 266470, 202510, 132228],
    "Suzuki Moto": [87834, 76673, 105736, 95214, 87519, 73934, 96029, 91629, 98680, 103454, 96360, 97823],
    "Royal Enfield": [81052, 80799, 88050, 76002, 76608, 76957, 76254, 102876, 103082, 116844, 90405, 93177],
    "Yamaha India": [53000, 48000, 50473, 49500, 50388, 49000, 50365, 51500, 49000, 70000, 60000, 55000],
    "Ather Energy": [13500, 12000, 16000, 14000, 12856, 14500, 16500, 17871, 17000, 24500, 20000, 22058],
    "Ola Electric": [35000, 8600, 31488, 19709, 18501, 16000, 14500, 18972, 12000, 10500, 7567, 6479],
    "Greaves / Ampere": [4800, 4200, 5200, 4500, 4178, 4300, 4600, 4498, 4700, 6500, 5200, 3810]
  },
  2026: {
    "Hero MotoCorp": [520208, 516968, 552148, 532433, 536784, 502890, 501403, 413996, null, null, null, null], // Jun: domestic 502,890 (incl Vida). Jul: domestic dispatch 501,403 (+21.6% YoY, incl Vida); Aug: VAHAN retail 413,996 (+18.6% YoY) — Jul figure is dispatch, Aug is retail (no standalone Aug dispatch-only figure found), so the Jul→Aug change mixes methodologies
    "Honda 2W":      [519579, 513190, 512000, 484000, 459611, 468956, 476436, 447342, null, null, null, null], // Jun: domestic 468,956. Jul: domestic dispatch 476,436 (+2.2% YoY); Aug: VAHAN retail 447,342 (+20.0% YoY, market leader) — Aug domestic dispatch was 517,329 but retail used here to match the rest of this month's row
    "TVS Motor":     [383262, 365471, 372383, 348545, 384565, 411014, 437394, 353746, null, null, null, null], // Jun: domestic 411,014 (incl iQube; +47% total, global 565,417). Jul: domestic dispatch 437,394 (+41.7% YoY, incl iQube+Orbiter); Aug: VAHAN retail 353,746 (+25.3% YoY) — Aug domestic dispatch was 433,796 but retail used here for row consistency
    "Bajaj Auto":    [214727, 186164, 221684, 210063, 209528, 166956, 165747, 157149, null, null, null, null], // Jun: domestic 166,956 (+12% YoY). Jul: domestic dispatch 165,747 (+19.0% YoY, incl Chetak); Aug: VAHAN retail 157,149 (+15.3% YoY) — Aug domestic dispatch was 201,898 but retail used here for row consistency
    "Suzuki Moto":   [100296, 101071, 108017,  98054, 110028,  91264, 123216, 104217, null, null, null, null], // Jun: domestic 91,264 (+23% YoY). Jul: domestic dispatch 123,216 (+28.3% YoY); Aug: VAHAN retail 104,217 (+8.4% YoY)
    "Royal Enfield": [ 93781,  91248,  97940, 104129,  94115, 102930, 105317, 94448, null, null, null, null], // Jun: 102,930 (+33.75% YoY). Jul: 105,317 (+38.1% YoY); Aug: VAHAN retail 94,448 (+23.5% YoY)
    "Yamaha India":  [ 79000,  67072,  65705,  null,    null, 67621, 72579, 62375, null, null, null, null], // Jun: 67,621 (VAHAN retail). Jul: 72,579 (+44.1% YoY); Aug: 62,375 (+13.1% YoY)
    "Ather Energy":  [20786, 19738, 35688, 27024, 28211, 31188, 31044, 28757, null, null, null, null], // Jun: 31,188 VAHAN (+95% YoY). Jul: 31,044 domestic dispatch; Aug: 28,757 VAHAN retail (+49.7% YoY) — pure-EV brand, so this equals its EV-row figure each month
    "Ola Electric":  [ 7221,  3968, 10118, 12171, 15141, 16144, 14105, 13852, null, null, null, null], // Jun: 16,144 VAHAN. Jul: 14,105 VAHAN (-24% YoY); Aug: 13,852 VAHAN (-28.8% YoY) — pure-EV brand, equals its EV-row figure each month
    "Greaves / Ampere": [ 4500,  4478,  7965,  6884,  7703, 10928, 10125, 8613, null, null, null, null] // Jun: 10,928 VAHAN (+152% YoY). Jul: 10,125 VAHAN (+137% YoY); Aug: 8,613 VAHAN (+88.6% YoY) — pure-EV brand, equals its EV-row figure each month
  }
};

const tw2wAllSourceNotes = {
  2024: {
    January: "OEM domestic dispatch report - Jan 2024",
    February: "OEM domestic dispatch report - Feb 2024",
    March: "OEM domestic dispatch report - Mar 2024",
    April: "OEM domestic dispatch report - Apr 2024",
    May: "OEM domestic dispatch report - May 2024",
    June: "OEM domestic dispatch report - Jun 2024",
    July: "OEM domestic dispatch report - Jul 2024",
    August: "OEM domestic dispatch report - Aug 2024",
    September: "OEM domestic dispatch report - Sep 2024",
    October: "OEM domestic dispatch report - Oct 2024",
    November: "OEM domestic dispatch report - Nov 2024",
    December: "OEM domestic dispatch report - Dec 2024"
  },
  2025: {
    January: "RushLane domestic dispatch report; EV (Ather/Ola/Greaves) VAHAN retail estimate - Jan 2025",
    February: "RushLane domestic dispatch report; Bajaj/Suzuki ex-company release; EV VAHAN retail - Feb 2025",
    March: "RushLane domestic dispatch report; EV VAHAN retail estimate - Mar 2025",
    April: "RushLane domestic dispatch report; iQube/Vida sourced (Autocar Pro); Ola/Ather/Greaves VAHAN - Apr 2025",
    May: "RushLane domestic dispatch + EV retail report (Ather/Ola/Greaves sourced) - May 2025",
    June: "RushLane domestic dispatch report; EV VAHAN retail estimate - Jun 2025",
    July: "RushLane domestic dispatch report; EV sourced (RushLane/Gaadiwaadi EV retail) - Jul 2025",
    August: "RushLane domestic dispatch report; Bajaj derived from confirmed monthly total; EV sourced (EVINDIA Aug e2W) - Aug 2025",
    September: "RushLane retail report; Honda/TVS/Bajaj/RE/Suzuki derived via YoY growth on 2024 base - Sep 2025",
    October: "RushLane domestic dispatch report; EV VAHAN retail estimate - Oct 2025",
    November: "RushLane domestic dispatch report; Ola sourced (Gaadiwaadi e2W Nov) - Nov 2025",
    December: "RushLane domestic dispatch report; CY2025 e2W roundup reconciliation (RushLane/Autocar Pro) - Dec 2025"
  },
  2026: {
    January:  "RushLane Jan 2026 2W sales report",
    February: "RushLane Feb 2026 2W sales report",
    March:    "RushLane / OEM filings March 2026",
    April:    "RushLane Apr 2026 2W sales report",
    May:      "RushLane May 2026 2W sales report",
    June:     "Official OEM June 2026 domestic dispatch releases; RushLane / Autocar June 2026 2W (Yamaha VAHAN)",
    July:     "BikeAdvice Jul 2026 domestic dispatch report (Hero/Honda/TVS/Bajaj/Suzuki/RE/Yamaha/Ather); Ola/Greaves via VAHAN retail (Entrackr/AllVoltAuto Jul 2026)",
    August:   "AutoPunditz Aug 2026 VAHAN retail report (all 10 brands); domestic dispatch figures for Hero/Honda/TVS/Bajaj were available from separate Autocar India/Autocar Pro Aug 2026 reports but VAHAN retail used instead for row consistency, see tw2wAllSales notes"
  }
};

// ── 2-Wheeler IC Engine Data ─────────────────────────────────────────────
const tw2wICEBrands = [
  { name: "Hero MotoCorp ICE",   color: "#145da0", short: "HE" },
  { name: "Honda 2W ICE",        color: "#c0392b", short: "HO" },
  { name: "TVS Motor ICE",       color: "#f39c12", short: "TV" },
  { name: "Bajaj Auto ICE",      color: "#27ae60", short: "BA" },
  { name: "Suzuki Moto ICE",     color: "#2980b9", short: "SU" },
  { name: "Royal Enfield ICE",   color: "#6c3483", short: "RE" },
  { name: "Yamaha India ICE",    color: "#16a085", short: "YA" }
];

const tw2wICESales = {
  2024: {
    "Hero MotoCorp ICE": [477500, 437700, 466800, 510496, 457300, 488815, 344535, 451900, 467000, 652903, 486500, 466200],
    "Honda 2W ICE": [430000, 410000, 440000, 481046, 470000, 482597, 439118, 450000, 440000, 580000, 470000, 460000],
    "TVS Motor ICE": [275000, 256000, 271000, 284449, 278000, 239234, 236250, 281000, 291500, 375000, 309500, 318528],
    "Bajaj Auto ICE": [186000, 165500, 177000, 202950, 170000, 161207, 151847, 172000, 181067, 233909, 188000, 190994],
    "Suzuki Moto ICE": [75000, 70000, 73000, 72000, 71000, 69000, 70000, 74000, 72000, 95000, 82000, 84000],
    "Royal Enfield ICE": [76000, 71000, 74000, 73000, 72000, 69000, 71000, 74000, 72000, 101886, 82000, 85000],
    "Yamaha India ICE": [57000, 52000, 55000, 53000, 54000, 50000, 51000, 54000, 51000, 72000, 61000, 63000]
  },
  2025: {
    "Hero MotoCorp ICE": [408878, 354096, 505586, 505564, 492536, 516636, 401902, 507639, 635582, 589329, 557020, 405394],
    "Honda 2W ICE": [402977, 383918, 401411, 406102, 393383, 388812, 466331, 481021, 414920, 598952, 533645, 392306],
    "TVS Motor ICE": [273860, 257572, 276122, 289538, 287785, 260012, 286478, 342862, 321576, 387631, 332608, 301442],
    "Bajaj Auto ICE": [153299, 120188, 164159, 165069, 165577, 130317, 119610, 160609, 187680, 235470, 172510, 99815],
    "Suzuki Moto ICE": [87834, 76673, 105736, 95214, 87519, 73934, 96029, 91629, 98680, 103454, 96360, 97823],
    "Royal Enfield ICE": [81052, 80799, 88050, 76002, 76608, 76957, 76254, 102876, 103082, 116844, 90405, 93177],
    "Yamaha India ICE": [53000, 48000, 50473, 49500, 50388, 49000, 50365, 51500, 49000, 70000, 60000, 55000]
  },
  2026: {
    "Hero MotoCorp ICE": [507600, 505008, 530714, 517195, 517717, 481098, 478516, 394989, null, null, null, null], // Jun: 502,890 − Vida 21,792. Jul: 501,403 − Vida 22,887; Aug: 413,996 − Vida 19,007
    "Honda 2W ICE":      [519202, 512813, 511623, 483623, 459234, 468956, 476436, 447342, null, null, null, null], // Jun: = domestic (Honda EV negligible/untracked). Jul/Aug: = All (same)
    "TVS Motor ICE":     [348822, 333870, 323079, 310862, 342150, 364015, 381895, 304808, null, null, null, null], // Jun: 411,014 − iQube 46,999. Jul: 437,394 − (iQube+Orbiter) 55,499; Aug: 353,746 − 48,938
    "Bajaj Auto ICE":    [189207, 161925, 175438, 177165, 170386, 123722, 120134, 116130, null, null, null, null], // Jun: 166,956 − Chetak 43,234. Jul: 165,747 − Chetak 45,613; Aug: 157,149 − Chetak 41,019
    "Suzuki Moto ICE":   [100023, 100798, 107744,  97781, 109755,  91264, 123216, 104217, null, null, null, null], // Jun: = domestic (no separate EV line). Jul/Aug: = All (same)
    "Royal Enfield ICE": [ 93781,  91248,  97940, 104129,  94115, 102930, 105317, 94448, null, null, null, null], // Jun: = domestic (no EV line). Jul/Aug: = All (same)
    "Yamaha India ICE":  [ 78897,  66969,  65602,   null,    null,  67621, 72579, 62375, null, null, null, null] // Jun: = domestic (no EV line). Jul/Aug: = All (same)
  }
};

const tw2wICESourceNotes = {
  2024: {
    January: "OEM dispatch minus VAHAN EV retail — Jan 2024",
    February: "OEM dispatch minus VAHAN EV retail — Feb 2024",
    March: "OEM dispatch minus VAHAN EV retail — Mar 2024",
    April: "OEM dispatch minus VAHAN EV retail — Apr 2024",
    May: "OEM dispatch minus VAHAN EV retail — May 2024",
    June: "OEM dispatch minus VAHAN EV retail — Jun 2024",
    July: "OEM dispatch minus VAHAN EV retail — Jul 2024",
    August: "OEM dispatch minus VAHAN EV retail — Aug 2024",
    September: "OEM dispatch minus VAHAN EV retail — Sep 2024",
    October: "OEM dispatch minus VAHAN EV retail — Oct 2024",
    November: "OEM dispatch minus VAHAN EV retail — Nov 2024",
    December: "OEM dispatch minus VAHAN EV retail — Dec 2024"
  },
  2025: {
    January: "Derived: corrected 2W-All minus corrected 2W-EV (Hero/TVS/Bajaj); ICE=All for others — Jan 2025",
    February: "Derived: corrected 2W-All minus corrected 2W-EV (Hero/TVS/Bajaj); ICE=All for others — Feb 2025",
    March: "Derived: corrected 2W-All minus corrected 2W-EV (Hero/TVS/Bajaj); ICE=All for others — Mar 2025",
    April: "Derived: corrected 2W-All minus corrected 2W-EV (Hero/TVS/Bajaj); ICE=All for others — Apr 2025",
    May: "Derived: corrected 2W-All minus corrected 2W-EV (Hero/TVS/Bajaj); ICE=All for others — May 2025",
    June: "Derived: corrected 2W-All minus corrected 2W-EV (Hero/TVS/Bajaj); ICE=All for others — Jun 2025",
    July: "Derived: corrected 2W-All minus corrected 2W-EV (Hero/TVS/Bajaj); ICE=All for others — Jul 2025",
    August: "Derived: corrected 2W-All minus corrected 2W-EV (Hero/TVS/Bajaj); ICE=All for others — Aug 2025",
    September: "Derived: corrected 2W-All minus corrected 2W-EV (Hero/TVS/Bajaj); ICE=All for others — Sep 2025",
    October: "Derived: corrected 2W-All minus corrected 2W-EV (Hero/TVS/Bajaj); ICE=All for others — Oct 2025",
    November: "Derived: corrected 2W-All minus corrected 2W-EV (Hero/TVS/Bajaj); ICE=All for others — Nov 2025",
    December: "Derived: corrected 2W-All minus corrected 2W-EV (Hero/TVS/Bajaj); ICE=All for others — Dec 2025"
  },
  2026: {
    January:  "OEM dispatch minus VAHAN EV retail — Jan 2026",
    February: "OEM dispatch minus VAHAN EV retail — Feb 2026",
    March:    "OEM dispatch minus VAHAN EV retail — Mar 2026",
    April:    "OEM dispatch minus VAHAN EV retail — Apr 2026",
    May:      "OEM dispatch minus VAHAN EV retail — May 2026",
    June:     "OEM domestic dispatch minus VAHAN EV retail — Jun 2026",
    July:     "OEM domestic dispatch minus VAHAN EV retail — Jul 2026",
    August:   "VAHAN retail minus VAHAN EV retail — Aug 2026 (both All and EV drawn from the same Aug retail table for consistency)"
  }
};

// ── 2-Wheeler EV Data ────────────────────────────────────────────────────
const tw2wEVBrands = [
  { name: "TVS (iQube+Orbiter)", color: "#f39c12", short: "TV" },
  { name: "Bajaj Chetak",        color: "#27ae60", short: "BA" },
  { name: "Ather Energy",        color: "#8e44ad", short: "AT" },
  { name: "Hero Vida",           color: "#145da0", short: "HV" },
  { name: "Ola Electric",        color: "#e74c3c", short: "OL" },
  { name: "Greaves / Ampere",    color: "#34495e", short: "GA" }
];

const tw2wEVSales = {
  2024: {
    "TVS (iQube+Orbiter)": [15000, 14000, 19000, 17000, 17000, 16500, 18000, 19000, 18500, 25000, 20500, 21472], // CY2024 iQube total ~220,472 (VAHAN retail)
    "Bajaj Chetak": [9000, 9500, 13000, 14000, 15000, 16000, 17000, 18000, 18933, 22000, 22000, 19006], // CY2024 total ~193,439; Sep/Dec sourced
    "Ather Energy": [13000, 11500, 17429, 13500, 13000, 12500, 13500, 15000, 14000, 22000, 16500, 18500], // Mar sourced (best month ~17,429)
    "Hero Vida": [2500, 2300, 3200, 2800, 2700, 2600, 2800, 3100, 3000, 4500, 3500, 3800], // estimated; Vida ramped up in 2025
    "Ola Electric": [30000, 30000, 52000, 37000, 42000, 36000, 39000, 27000, 24000, 42000, 29000, 19500], // CY2024 total ~407,547 (No.1 in 2024)
    "Greaves / Ampere": [3800, 3400, 4800, 4000, 3700, 3500, 3700, 3900, 3600, 5200, 4200, 4600] // estimated from 2025 trend
  },
  2025: {
    "TVS (iQube+Orbiter)": [20000, 18500, 21500, 19736, 21500, 21000, 22242, 26000, 25500, 34000, 33000, 35889],
    "Bajaj Chetak": [18000, 16500, 19500, 18000, 19254, 19000, 19669, 23500, 23000, 31000, 30000, 32413],
    "Ather Energy": [13500, 12000, 16000, 14000, 12856, 14500, 16500, 17871, 17000, 24500, 20000, 22058],
    "Hero Vida": [3500, 3200, 4500, 6123, 6500, 8500, 10495, 11500, 12000, 15500, 13500, 13849],
    "Ola Electric": [35000, 8600, 31488, 19709, 18501, 16000, 14500, 18972, 12000, 10500, 7567, 6479],
    "Greaves / Ampere": [4800, 4200, 5200, 4500, 4178, 4300, 4600, 4498, 4700, 6500, 5200, 3810]
  },
  2026: {
    "TVS (iQube+Orbiter)": [34440, 31601, 49304, 37683, 42415, 46999, 55499, 48938, null, null, null, null], // Jun: 46,999 VAHAN (e2w segment leader). Jul: 55,499 (+135.2% YoY, 27.2% e2w share, new high); Aug: 48,938 (+90.8% YoY), retained #1
    "Bajaj Chetak":        [25520, 24239, 46246, 32898, 39142, 43234, 45613, 41019, null, null, null, null], // Jun: 43,234 VAHAN (+80% YoY). Jul: 45,613 (+121.9% YoY); Aug: 41,019 (+235% YoY)
    "Ather Energy":        [20786, 19738, 35688, 27024, 28211, 31188, 31044, 28757, null, null, null, null], // Jun: 31,188 VAHAN (+95% YoY). Jul: 31,044 (+105.6%/+70.2% YoY depending on dispatch/retail source); Aug: 28,757 (+49.7% YoY)
    "Hero Vida":           [12608, 11960, 21434, 15230, 19067, 21792, 22887, 19007, null, null, null, null], // Jun: 21,792 VAHAN (+175% YoY). Jul: 22,887 (+111% YoY, best-ever month); Aug: 19,007 (+38.0% YoY)
    "Ola Electric":        [ 7221,  3968, 10118, 12171, 15141, 16144, 14105, 13852, null, null, null, null], // Jun: 16,144 VAHAN. Jul: 14,105 (-24% YoY, only top-10 e2w brand to decline); Aug: 13,852 (-28.8% YoY)
    "Greaves / Ampere":    [ 4500,  4478,  7965,  6884,  7703, 10928, 10125, 8613, null, null, null, null] // Jun: 10,928 VAHAN (+152% YoY). Jul: 10,125 (+137% YoY); Aug: 8,613 (+88.6% YoY)
  }
};

const tw2wEVSourceNotes = {
  2024: {
    January: "VAHAN retail — Jan 2024",
    February: "VAHAN retail — Feb 2024",
    March: "VAHAN retail — Mar 2024",
    April: "VAHAN retail — Apr 2024",
    May: "VAHAN retail — May 2024",
    June: "VAHAN retail — Jun 2024",
    July: "VAHAN retail — Jul 2024",
    August: "VAHAN retail — Aug 2024",
    September: "VAHAN retail — Sep 2024",
    October: "VAHAN retail — Oct 2024",
    November: "VAHAN retail — Nov 2024",
    December: "VAHAN retail — Dec 2024"
  },
  2025: {
    January: "VAHAN retail; reconciled to confirmed CY2025 OEM total — Jan 2025",
    February: "VAHAN retail; reconciled to confirmed CY2025 OEM total — Feb 2025",
    March: "VAHAN retail; reconciled to confirmed CY2025 OEM total — Mar 2025",
    April: "VAHAN retail (Autocar Pro/Autocar India iQube/Chetak/Vida figures) — Apr 2025",
    May: "VAHAN retail (RushLane 2W Retail Sales May 2025: Ather/Ola/Greaves sourced) — May 2025",
    June: "VAHAN retail; reconciled to confirmed CY2025 OEM total — Jun 2025",
    July: "VAHAN retail (RushLane/Gaadiwaadi Electric 2W Sales Jul 2025) — Jul 2025",
    August: "VAHAN retail (EVINDIA Aug 2025 EV sales report) — Aug 2025",
    September: "VAHAN retail; reconciled to confirmed CY2025 OEM total — Sep 2025",
    October: "VAHAN retail; reconciled to confirmed CY2025 OEM total — Oct 2025",
    November: "VAHAN retail (Gaadiwaadi Electric 2W Sales Nov 2025: Ola sourced) — Nov 2025",
    December: "VAHAN retail; CY2025 e2W roundup reconciliation (RushLane/Autocar Pro) — Dec 2025"
  },
  2026: {
    January:  "VAHAN retail — Autocar India / BusinessToday Jan 2026",
    February: "VAHAN retail — RushLane / Autocar India Feb 2026",
    March:    "VAHAN retail — Autocar India / RushLane Mar 2026",
    April:    "VAHAN retail — Autocar India / RushLane Apr 2026",
    May:      "VAHAN retail — Autocar India / RushLane May 2026",
    June:     "VAHAN retail — BikeAdvice / AutoPunditz Jun 2026 e2W",
    July:     "VAHAN retail — BikeAdvice / AutoPunditz Jul 2026 e2W report (TVS/Bajaj/Ather/Vida/Ola); Greaves via Entrackr Jul 2026",
    August:   "VAHAN retail — AutoPunditz / BikeAdvice Aug 2026 e2W report (all 6 brands)"
  }
};

// ── Segment registry ───────────────────────────────────────────────────────
const segments = {
  passenger:    { brands: pvBrands,       sales: pvSales,       notes: pvSourceNotes },
  pv_ice:       { brands: pvICEBrands,    sales: pvICESales,    notes: pvICESourceNotes },
  pv_ev:        { brands: pvEVBrands,     sales: pvEVSales,     notes: pvEVSourceNotes },
  commercial:   { brands: cvBrands,       sales: cvSales,       notes: cvSourceNotes },
  tw2w_all:     { brands: tw2wAllBrands,  sales: tw2wAllSales,  notes: tw2wAllSourceNotes },
  tw2w_ice:     { brands: tw2wICEBrands,  sales: tw2wICESales,  notes: tw2wICESourceNotes },
  tw2w_ev:      { brands: tw2wEVBrands,   sales: tw2wEVSales,   notes: tw2wEVSourceNotes }
};

let activeBrands      = pvBrands;
let activeSales       = pvSales[2026];

// ── DOM refs ───────────────────────────────────────────────────────────────
const segmentSelect  = document.querySelector("#segmentSelect");
const viewSelect     = document.querySelector("#viewSelect");
const yearSelect     = document.querySelector("#yearSelect");
const tableHead      = document.querySelector("#tableHead");
const tableBody      = document.querySelector("#tableBody");
const tableTitle     = document.querySelector("#tableTitle");
const searchBox      = document.querySelector("#searchBox");
const downloadCsvBtn = document.querySelector("#downloadCsvBtn");

function formatUnits(value) {
  return value == null ? "Pending" : value.toLocaleString("en-IN");
}

function previousReleased(values, index) {
  for (let i = index - 1; i >= 0; i -= 1) {
    if (values[i] != null) return { value: values[i], month: months[i] };
  }
  return null;
}

function updateActiveData() {
  const seg         = segments[segmentSelect.value] || segments.passenger;
  activeBrands      = seg.brands;
  const activeYear  = yearSelect.value;
  activeSales       = seg.sales[activeYear] || {};
}

function applyViewConstraints() {
  // YoY needs a prior year to compare against. 2024 is the earliest year in the
  // dataset (no 2023), so it cannot show YoY — disable it and redirect to 2025.
  const year2024Option = yearSelect.querySelector('option[value="2024"]');
  if (viewSelect.value === "yoy") {
    if (yearSelect.value === "2024") {
      yearSelect.value = "2025";
    }
    if (year2024Option) year2024Option.disabled = true;
  } else if (year2024Option) {
    year2024Option.disabled = false;
  }
}

function computeMoMRow(values, priorYearValues) {
  return values.map((value, index) => {
    if (value == null) return null;
    let prior = previousReleased(values, index);
    // For January, fall back to December of the prior year if available.
    if (!prior && index === 0 && priorYearValues && priorYearValues[11] != null) {
      prior = { value: priorYearValues[11], month: months[11] };
    }
    if (!prior) return null;
    return (value - prior.value) / prior.value * 100;
  });
}

function computeYoYRow(currentValues, priorYearValues) {
  return currentValues.map((value, index) => {
    const priorValue = priorYearValues ? priorYearValues[index] : null;
    if (value == null || priorValue == null) return null;
    return (value - priorValue) / priorValue * 100;
  });
}

function formatGrowth(value) {
  return value == null ? "--" : `${value >= 0 ? "+" : ""}${value.toFixed(1)}%`;
}

function growthClass(value) {
  return value == null ? "pending" : value > 0 ? "up" : value < 0 ? "down" : "flat";
}

function averageGrowth(growthValues) {
  const validValues = growthValues.filter((value) => value != null);
  return validValues.length
    ? validValues.reduce((sum, value) => sum + value, 0) / validValues.length
    : null;
}

function getPriorYearSales() {
  const seg = segments[segmentSelect.value] || segments.passenger;
  return seg.sales[String(Number(yearSelect.value) - 1)] || {};
}

// Sort state: column is "brand", a month index 0-11, or "summary"; null = natural order.
let sortState = { column: null, dir: "desc" };

function buildRows(view, priorYearSales, query) {
  return activeBrands
    .filter((brand) => brand.name.toLowerCase().includes(query))
    .map((brand) => {
      const values = activeSales[brand.name];

      if (view === "figures") {
        const total = values.reduce((sum, item) => sum + (item || 0), 0);
        return {
          name: brand.name,
          cells: values.map((value) => ({
            display: formatUnits(value),
            cls: value == null ? "pending" : "",
            sortVal: value
          })),
          summary: { display: total.toLocaleString("en-IN"), cls: "", sortVal: total }
        };
      }

      const growthValues = view === "mom"
        ? computeMoMRow(values, priorYearSales[brand.name])
        : computeYoYRow(values, priorYearSales[brand.name]);
      const avg = averageGrowth(growthValues);
      return {
        name: brand.name,
        cells: growthValues.map((value) => ({
          display: formatGrowth(value),
          cls: growthClass(value),
          sortVal: value
        })),
        summary: { display: formatGrowth(avg), cls: growthClass(avg), sortVal: avg }
      };
    });
}

function sortRows(rows) {
  if (sortState.column == null) return rows;
  const factor = sortState.dir === "asc" ? 1 : -1;

  return rows.slice().sort((a, b) => {
    if (sortState.column === "brand") {
      return a.name.localeCompare(b.name) * factor;
    }
    const aVal = sortState.column === "summary" ? a.summary.sortVal : a.cells[sortState.column].sortVal;
    const bVal = sortState.column === "summary" ? b.summary.sortVal : b.cells[sortState.column].sortVal;
    // Missing values always sort to the bottom regardless of direction.
    if (aVal == null && bVal == null) return 0;
    if (aVal == null) return 1;
    if (bVal == null) return -1;
    return (aVal - bVal) * factor;
  });
}

function sortIndicator(column) {
  if (sortState.column !== column) return "";
  return sortState.dir === "asc" ? " ▲" : " ▼";
}

// Maps the active sort into an aria-sort attribute so assistive tech announces
// which column is sorted and in which direction; other columns advertise that
// they are sortable via "none".
function ariaSort(column) {
  if (sortState.column !== column) return ' aria-sort="none"';
  return sortState.dir === "asc" ? ' aria-sort="ascending"' : ' aria-sort="descending"';
}

function headerCell(column, label) {
  return `<th class="sortable" scope="col" role="columnheader" tabindex="0" data-col="${column}"${ariaSort(column)}>${label}${sortIndicator(column)}</th>`;
}

function renderTable() {
  const query = searchBox.value.trim().toLowerCase();
  const view  = viewSelect.value;
  const priorYearSales = getPriorYearSales();

  const viewLabel = view === "mom" ? "month-on-month growth" : view === "yoy" ? "year-on-year growth" : "monthly sales";
  tableTitle.textContent = `${yearSelect.value} ${viewLabel} table`;

  const lastHeader = view === "figures" ? "Total" : view === "mom" ? "Avg MoM" : "Avg YoY";
  tableHead.innerHTML = `
    <tr>
      ${headerCell("brand", "Brand")}
      ${months.map((month, index) => headerCell(index, month.slice(0, 3))).join("")}
      ${headerCell("summary", lastHeader)}
    </tr>
  `;

  const rows = sortRows(buildRows(view, priorYearSales, query));

  tableBody.innerHTML = rows.map((row) => `
    <tr>
      <td>${row.name}</td>
      ${row.cells.map((cell) => `<td class="${cell.cls}">${cell.display}</td>`).join("")}
      <td class="${row.summary.cls}">${row.summary.display}</td>
    </tr>
  `).join("");
}

function downloadCSV() {
  const query = searchBox.value.trim().toLowerCase();
  const view  = viewSelect.value;
  const priorYearSales = getPriorYearSales();
  const filteredBrands = activeBrands.filter((brand) => brand.name.toLowerCase().includes(query));

  let csvContent = "";

  const lastHeader = view === "figures" ? "Total" : view === "mom" ? "Avg MoM %" : "Avg YoY %";
  const headerRow = ["Brand", ...months, lastHeader];
  csvContent += headerRow.join(",") + "\r\n";

  filteredBrands.forEach((brand) => {
    const values = activeSales[brand.name];
    let dataRow;

    if (view === "figures") {
      const total = values.reduce((sum, item) => sum + (item || 0), 0);
      const cleanValues = values.map((val) => (val === null ? "Pending" : val));
      dataRow = [brand.name, ...cleanValues, total];
    } else {
      const growthValues = view === "mom"
        ? computeMoMRow(values, priorYearSales[brand.name])
        : computeYoYRow(values, priorYearSales[brand.name]);
      const avg = averageGrowth(growthValues);
      const cleanValues = growthValues.map((val) => (val == null ? "--" : `${val.toFixed(1)}%`));
      dataRow = [brand.name, ...cleanValues, avg == null ? "--" : `${avg.toFixed(1)}%`];
    }

    // Quote fields containing commas, quotes, or newlines and double any
    // embedded quotes, per RFC 4180.
    const formattedRow = dataRow.map(item => {
      const str = String(item);
      return /[",\r\n]/.test(str) ? `"${str.replace(/"/g, '""')}"` : str;
    });

    csvContent += formattedRow.join(",") + "\r\n";
  });

  const segmentLabel = segmentSelect.options[segmentSelect.selectedIndex].text;
  const viewSlug = view === "figures" ? "Figures" : view === "mom" ? "MoM" : "YoY";
  const segmentSlug = segmentLabel
    .normalize("NFKD")
    .replace(/[^\w\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");

  // Build the download from a Blob rather than a data: URI. A data URI runs the
  // CSV through encodeURI, which leaves literal "%" (present in growth cells and
  // headers) unescaped and produces malformed percent-sequences like "%%0D";
  // a Blob URL sidesteps that and has no length limit. A leading BOM keeps Excel
  // reading the file as UTF-8.
  const blob = new Blob(["﻿" + csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute("download", `India_Vehicle_Sales_${yearSelect.value}_${segmentSlug}_${viewSlug}.csv`);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}

// ── Segment switch event ───────────────────────────────────────────────────
segmentSelect.addEventListener("change", () => {
  updateActiveData();
  renderTable();
});

yearSelect.addEventListener("change", () => {
  updateActiveData();
  renderTable();
});

function toggleSort(header) {
  const raw = header.dataset.col;
  const column = (raw === "brand" || raw === "summary") ? raw : Number(raw);

  if (sortState.column === column) {
    sortState.dir = sortState.dir === "asc" ? "desc" : "asc";
  } else {
    sortState.column = column;
    // Brands read naturally A→Z; numeric columns are most useful highest-first.
    sortState.dir = column === "brand" ? "asc" : "desc";
  }
  renderTable();
}

tableHead.addEventListener("click", (event) => {
  const header = event.target.closest("th.sortable");
  if (header) toggleSort(header);
});

// Sortable headers are focusable (tabindex="0"); activate them with Enter or
// Space so the table is usable without a mouse.
tableHead.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  const header = event.target.closest("th.sortable");
  if (!header) return;
  event.preventDefault();
  toggleSort(header);
});

searchBox.addEventListener("input", renderTable);

downloadCsvBtn.addEventListener("click", downloadCSV);

viewSelect.addEventListener("change", () => {
  applyViewConstraints();
  updateActiveData();
  renderTable();
});

// Initialization
applyViewConstraints();
updateActiveData();
renderTable();