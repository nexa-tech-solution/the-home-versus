import { SingleProductData } from "../types";

export const ROBOROCK_DYAD_PRO_PRODUCT: SingleProductData = {
  slug: "roborock-dyad-pro",
  name: "Roborock Dyad Pro Smart Cordless Wet Dry Vacuum",
  category: "Cleaning",
  image: "https://m.media-amazon.com/images/I/61NfT+jP9lL._AC_SL1500_.jpg",
  price: "$449.99",
  amazonUrl: "https://www.amazon.com/Roborock-Dyad-Pro-Handheld-Cleans/dp/B0BPXPX92G",
  rating: 4.6,
  reviewCount: 3200,
  author: "Sarah Mitchell",
  date: "Feb 22, 2024",
  readTime: "5 min read",
  highlight: "Incredible 17,000Pa suction power for any mess.",
  intro: "The Roborock Dyad Pro features 17000Pa of suction and its powerful RevoBrush System which dries the rollers with hot air for odorless maintenance.",
  pros: [
    "Most powerful suction in its class",
    "Dual-roller system for better pickup",
    "Excellent edge cleaning on both sides",
    "Automatic solution dispenser",
    "Hot air drying for rollers"
  ],
  cons: [
    "Heavier than the Tineco S5",
    "Requires some manual maintenance",
    "Battery drains quickly in Max mode"
  ],
  specs: [
    { label: "Suction Power", value: "17,000 Pa" },
    { label: "Run Time", value: "43 mins (Eco)" },
    { label: "Water Tank", value: "0.9L (Clean), 0.77L (Dirty)" },
    { label: "System", value: "RevoBrush Self-Cleaning" },
    { label: "Special Feature", value: "Hot-Air Drying" }
  ],
  sections: [
    {
      title: "17,000Pa Suction Power",
      content: "The Dyad Pro is the power-lifter of wet/dry vacuums. It tackles larger messes like cereal or muddy footprints with zero effort, making it ideal for families with big messes to clean."
    },
    {
      title: "Self-Cleaning & Drying System",
      content: "Roborock's RevoBrush system not only cleans the rollers but dries them with hot air to prevent bacteria buildup and that funky smell often associated with wet vacuums."
    }
  ],
  relatedProducts: [
    {
      slug: "tineco-floor-one-s5",
      name: "Tineco Floor One S5",
      image: "https://m.media-amazon.com/images/I/71u9sY8N+6L._AC_SL1500_.jpg",
      price: "$499.00"
    }
  ]
};
