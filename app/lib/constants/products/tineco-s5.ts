import { SingleProductData } from "../types";

export const TINECO_S5_PRODUCT: SingleProductData = {
  slug: "tineco-floor-one-s5",
  name: "Tineco Floor One S5 Smart Wet Dry Vacuum Cleaner",
  category: "Cleaning",
  image: "https://m.media-amazon.com/images/I/71u9sY8N+6L._AC_SL1500_.jpg",
  price: "$499.00",
  amazonUrl: "https://www.amazon.com/Tineco-Floor-One-S5-Steam/dp/B09ZNZ5N2Y",
  rating: 4.5,
  reviewCount: 4500,
  author: "Sarah Mitchell",
  date: "Feb 20, 2024",
  readTime: "5 min read",
  highlight: "The gold standard for smart wet/dry floor cleaning.",
  intro: "The Tineco Floor One S5 isn't just a vacuum; it’s a total hard floor solution. Combining deep cleaning and effortless maintenance, it's a game-changer for busy households.",
  pros: [
    "Clean and vacuum in one step",
    "iLoop sensor automatically adjusts settings",
    "Great edge cleaning for baseboards",
    "Large clean and dirty water tanks",
    "Self-cleaning cycle is highly effective"
  ],
  cons: [
    "Battery life around 35 mins is low for big homes",
    "Requires specific Tineco cleaning solution",
    "Not for cleaning carpet"
  ],
  specs: [
    { label: "Run Time", value: "35 mins" },
    { label: "Water Tank", value: "0.8L (Clean), 0.7L (Dirty)" },
    { label: "Sensor", value: "iLoop Smart Sensor" },
    { label: "Weight", value: "9.9 lbs" },
    { label: "Charging Time", value: "4 hours" }
  ],
  sections: [
    {
      title: "Smart Wet Dry Performance",
      content: "The S5 uses Tineco's proprietary iLoop sensor to detect wet and dry messes and automatically adjust suction power and water flow for one-step cleaning that leaves floors dry and streak-free."
    },
    {
      title: "Effortless Edge-to-Edge Cleaning",
      content: "One of the best features of the S5 is its refined edge cleaning. The brush roll goes right up to the wall, meaning no more pesky dust lines along your baseboards."
    }
  ],
  relatedProducts: [
    {
      slug: "roborock-dyad-pro",
      name: "Roborock Dyad Pro",
      image: "https://m.media-amazon.com/images/I/61NfT+jP9lL._AC_SL1500_.jpg",
      price: "$449.99"
    }
  ]
};
