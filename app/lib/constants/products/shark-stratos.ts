import { SingleProductData } from "../types";

export const SHARK_STRATOS_PRODUCT: SingleProductData = {
  slug: "shark-stratos",
  name: "Shark Stratos Cordless Stick Vacuum",
  category: "Cleaning",
  image: "https://m.media-amazon.com/images/I/41VgaT00HWL._AC_SX679_.jpg",
  price: "$299.99",
  amazonUrl: "https://amzn.to/4sLCzv7",
  rating: 4.1,
  reviewCount: 25769,
  author: "Sarah Mitchell",
  date: "March 11, 2026",
  readTime: "7 min read",
  highlight:
    "The ultimate 'Dyson-Killer' for pet owners: Smart dirt detection meets a home that actually smells fresh.",
  intro:
    "If you've been eyeing a high-end cordless vacuum but can't justify the $700+ price tag, the Shark Stratos is the high-performance alternative your home deserves. It’s Shark's most intelligent machine to date, specifically engineered to solve the three biggest 'pain points' of cordless cleaning: hair wrap, battery waste, and that lingering 'stuffy vacuum' smell. For North American households with high-pile carpets and shedding pets, the Stratos isn't just a vacuum—it's a whole-home hygiene system.",
  media: [
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/41VgaT00HWL._AC_SX679_.jpg",
      caption: "Shark Stratos Advanced Cordless System",
    },
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/81JGHKIBVjL._AC_SX679_.jpg",
      caption: "Clean Sense IQ automatically adjusts suction power",
    },
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/91Z7Moqs5nL._AC_SL1500_.jpg",
      caption: "MultiFLEX technology for cleaning under furniture",
    },
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/71sXQbaG68L._AC_SL1500_.jpg",
      caption: "Odor Neutralizer Technology for a fresh-smelling home",
    },
    {
      type: "video",
      url: "https://www.youtube.com/watch?v=M7fhZ_XTYdM",
      caption: "Shark Stratos Cordless Stick Vacuum Getting Started",
    },
  ],
  pros: [
    "Clean Sense IQ Technology: An infrared sensor detects hidden dirt and automatically ramps up power, maximizing battery life",
    "Best-in-Class Hair Pickup: The DuoClean PowerFins HairPro brushroll digs deep into carpets and is virtually impossible to tangle",
    "Exclusive Odor Neutralizer Technology: A replaceable cartridge guards against 'wet dog' odors, leaving your home smelling like a fresh breeze",
    "MultiFLEX Wand: The jointed design allows you to reach deep under beds and sofas without ever having to bend over",
    "Anti-Allergen Complete Seal: HEPA filtration traps 99.9% of dust and allergens—a must-have for allergy sufferers",
  ],

  cons: [
    "Noticeably heavier (8.9 lbs) than ultralight models; might feel fatiguing during whole-house deep cleans",
    "The dust cup capacity is on the smaller side, requiring more frequent trips to the trash can",
    "High-power 'Boost' mode is extremely effective but drains the battery significantly faster than Eco mode",
  ],

  specs: [
    { label: "Suction Tech", value: "Clean Sense IQ (Auto-Adjust)" },
    { label: "Weight", value: "8.9 lbs (Sturdy Build)" },
    { label: "Run Time", value: "Up to 60 Minutes (Eco)" },
    { label: "Wand Type", value: "MultiFLEX (Bendable)" },
    { label: "Odor Control", value: "Integrated Odor Neutralizer" },
  ],

  sections: [
    {
      title: "Clean Sense IQ: Suction with a Brain",
      content:
        "The standout feature of the Stratos is Clean Sense IQ. By using an infrared sensor at the nozzle, the vacuum 'sees' dirt levels you can't. You can actually see the indicator light on the floorhead change color as it detects debris, instantly boosting suction power when you hit a high-traffic area. It’s a level of intelligence that ensures you aren't wasting battery on clean floors while getting professional-grade results where it actually matters.",
    },
    {
      title: "MultiFLEX: Saving Your Back One Room at a Time",
      content:
        "Traditional cordless vacuums require you to move the sofa or get on your hands and knees to clean underneath. Shark’s patented MultiFLEX wand bends at a 90-degree angle with the push of a button. This allows the floorhead to slide completely under low-profile furniture while you remain standing comfortably. It’s a 'quality-of-life' feature that North American homeowners with sectional sofas and large bed frames will appreciate daily.",
    },
    {
      title: "The End of the 'Dusty Vacuum' Smell",
      content:
        "Most vacuums eventually start to emit a musty odor as they age, especially in homes with pets. The Shark Stratos includes a unique Odor Neutralizer cartridge that slots directly into the floorhead. As you clean, it circulates a fresh scent while trapping pathogens inside the HEPA-sealed system. It’s a small detail that makes a massive difference, ensuring your home doesn't just *look* clean, but *smells* clean too.",
    },
  ],
  relatedProducts: [
    {
      slug: "dyson-v15-detect",
      name: "Dyson V15 Detect",
      image: "https://m.media-amazon.com/images/I/61p+FdEl5UL._AC_SX679_.jpg",
      price: "$749.99",
    },
  ],
};
