const watches = [
  // 1 · Classic
  {
    id: 1,
    type: "Classic",
    name: "Nika 7 Black",
    price: "$230",
    img: "watchImage",
    description:
      "Introducing the perfect blend of elegance and performance — this modern watch features a sleek stainless‑steel case, scratch‑resistant sapphire crystal, and a reliable quartz movement. Its minimalist dial offers a clean, timeless look, while water‑resistance ensures durability for everyday use.",
    features: {
      madeIn: "Georgia",
      displayType: "Analog",
      powerSource: "Quartz",
      waterResistance: "30 m",
      material: "Titanium"
    }
  },

  /* ------------ Classic (2–3) ------------ */
  {
    id: 2,
    type: "Classic",
    name: "Tbilisi Heritage 42",
    price: "$310",
    img: "watchImage",
    description:
      "Polished rose‑gold PVD case with sunburst dial and hand‑applied indices. Ultra‑thin 6 mm profile slips easily under any cuff.",
    features: {
      madeIn: "Switzerland",
      displayType: "Analog",
      powerSource: "Quartz",
      waterResistance: "50 m",
      material: "Stainless Steel"
    }
  },
  {
    id: 3,
    type: "Classic",
    name: "Rustavi MoonPhase",
    price: "$450",
    img: "watchImage",
    description:
      "Elegant dress piece showcasing a moon‑phase complication at 6 o’clock and blued hands for a refined aesthetic.",
    features: {
      madeIn: "Japan",
      displayType: "Analog",
      powerSource: "Automatic",
      waterResistance: "30 m",
      material: "316L Steel"
    }
  },

  /* ------------ Sports (4–6) ------------ */
  {
    id: 4,
    type: "Sports",
    name: "TrailRunner 200",
    price: "$280",
    img: "watchImage",
    description:
      "Rugged field watch with high‑contrast lume, screw‑down crown, and knurled bezel for grip during outdoor adventures.",
    features: {
      madeIn: "USA",
      displayType: "Analog",
      powerSource: "Quartz",
      waterResistance: "200 m",
      material: "Stainless Steel"
    }
  },
  {
    id: 5,
    type: "Sports",
    name: "Marathon Diver Pro",
    price: "$520",
    img: "watchImage",
    description:
      "ISO‑certified dive watch featuring unidirectional ceramic bezel and helium‑escape valve suited for saturation diving.",
    features: {
      madeIn: "Canada",
      displayType: "Analog",
      powerSource: "Automatic",
      waterResistance: "300 m",
      material: "Titanium"
    }
  },
  {
    id: 6,
    type: "Sports",
    name: "Alpine Chrono X",
    price: "$430",
    img: "watchImage",
    description:
      "Tachymeter bezel and 1/10‑second chronograph accuracy make it ideal for timing high‑speed events on land or snow.",
    features: {
      madeIn: "Germany",
      displayType: "Analog",
      powerSource: "Quartz",
      waterResistance: "100 m",
      material: "Carbon‑coated Steel"
    }
  },

  /* ------------ Smartwatches (7–9) ------------ */
  {
    id: 7,
    type: "Smartwatches",
    name: "Geo Watch S2",
    price: "$299",
    img: "watchImage",
    description:
      "AMOLED display, built‑in GPS, heart‑rate and SpO₂ sensors, plus 5‑day battery life with always‑on screen disabled.",
    features: {
      madeIn: "China",
      displayType: "Digital",
      powerSource: "Rechargeable Li‑ion",
      waterResistance: "50 m",
      material: "Aluminum"
    }
  },
  {
    id: 8,
    type: "Smartwatches",
    name: "Pulse‑Pro Edge",
    price: "$399",
    img: "watchImage",
    description:
      "Edge‑to‑edge sapphire glass, ECG monitoring, NFC payments, and wireless charging puck included.",
    features: {
      madeIn: "Vietnam",
      displayType: "Digital",
      powerSource: "Rechargeable Li‑ion",
      waterResistance: "100 m",
      material: "Stainless Steel"
    }
  },
  {
    id: 9,
    type: "Smartwatches",
    name: "RunMate Lite SE",
    price: "$199",
    img: "watchImage",
    description:
      "Lightweight polymer case with advanced running metrics, offline music storage, and week‑long battery.",
    features: {
      madeIn: "Taiwan",
      displayType: "Digital",
      powerSource: "Rechargeable Li‑ion",
      waterResistance: "30 m",
      material: "Fiber‑reinforced Polymer"
    }
  },

  /* ------------ Automatic (10–12) ------------ */
  {
    id: 10,
    type: "Automatic",
    name: "Svaneti Explorer GMT",
    price: "$650",
    img: "watchImage",
    description:
      "Dual‑time complication powered by a 28,800 vph movement; exhibition case‑back reveals Geneva‑striped rotor.",
    features: {
      madeIn: "Japan",
      displayType: "Analog",
      powerSource: "Automatic",
      waterResistance: "100 m",
      material: "Stainless Steel"
    }
  },
  {
    id: 11,
    type: "Automatic",
    name: "Artisan Skeleton 88",
    price: "$890",
    img: "watchImage",
    description:
      "Fully skeletonized dial showcasing gears and balance wheel; hand‑finished bridges offer artisanal flair.",
    features: {
      madeIn: "France",
      displayType: "Analog",
      powerSource: "Automatic",
      waterResistance: "30 m",
      material: "Rose‑gold PVD"
    }
  },
  {
    id: 12,
    type: "Automatic",
    name: "Cascade Pilot",
    price: "$540",
    img: "watchImage",
    description:
      "Oversized crown for glove operation, bold Arabic numerals, and hacking seconds for precise time‑setting.",
    features: {
      madeIn: "USA",
      displayType: "Analog",
      powerSource: "Automatic",
      waterResistance: "150 m",
      material: "Titanium"
    }
  },

  /* ------------ Quartz (13–14) ------------ */
  {
    id: 13,
    type: "Quartz",
    name: "Metro Slimline",
    price: "$140",
    img: "watchImage",
    description:
      "Ultra‑slim 4.8 mm case with date window at 3 o’clock; perfect for minimalist enthusiasts.",
    features: {
      madeIn: "Hong Kong",
      displayType: "Analog",
      powerSource: "Quartz",
      waterResistance: "30 m",
      material: "Stainless Steel"
    }
  },
  {
    id: 14,
    type: "Quartz",
    name: "Aurora Field Glow",
    price: "$160",
    img: "watchImage",
    description:
      "Bright C3 lume and anti‑reflective sapphire crystal ensure legibility in all lighting conditions.",
    features: {
      madeIn: "Thailand",
      displayType: "Analog",
      powerSource: "Quartz",
      waterResistance: "100 m",
      material: "Brushed Steel"
    }
  },

  /* ------------ Luxury (15–16) ------------ */
  {
    id: 15,
    type: "Luxury",
    name: "Kartli Perpetual Calendar",
    price: "$9,800",
    img: "watchImage",
    description:
      "Hand‑assembled perpetual calendar tracking date, day, month, leap‑year, and moon‑phase with no adjustment needed until 2100.",
    features: {
      madeIn: "Switzerland",
      displayType: "Analog",
      powerSource: "Automatic",
      waterResistance: "50 m",
      material: "18 K White Gold"
    }
  },
  {
    id: 16,
    type: "Luxury",
    name: "Caucasus Tourbillon Prestige",
    price: "$18,500",
    img: "watchImage",
    description:
      "Flying tourbillon at 6 o’clock reduces positional error; baguette diamond indices and hand‑engraved rotor elevate exclusivity.",
    features: {
      madeIn: "Germany",
      displayType: "Analog",
      powerSource: "Automatic",
      waterResistance: "30 m",
      material: "Platinum"
    }
  }
];

export default watches;