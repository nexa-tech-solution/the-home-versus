import { SingleProductData } from "../types";

export const DYSON_V15_PRODUCT: SingleProductData = {
  slug: "dyson-v15-detect",
  name: "Dyson V15 Detect Cordless Vacuum",
  category: "Cleaning",
  image: "https://m.media-amazon.com/images/I/61p+FdEl5UL._AC_SX679_.jpg",
  price: "$749.99",
  amazonUrl: "https://amzn.to/4ltozUd",
  rating: 4.8,
  reviewCount: 1250,
  author: "Sarah Mitchell",
  date: "March 10, 2026",
  readTime: "6 min read",
  highlight:
    "The gold standard of cordless vacuums: Laser-guided precision meets industrial-grade suction.",
  intro:
    "If you think your floors are clean, the Dyson V15 Detect is here to prove you wrong—in the most satisfying way possible. This isn't just a vacuum; it’s a high-tech investment in your home's air quality and hygiene. By combining a green laser that reveals 'invisible' dust with a sensor that literally counts particles, Dyson has turned a boring chore into a data-driven mission to eliminate allergens from your living space.",
  media: [
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/61p+FdEl5UL._AC_SX679_.jpg",
      caption:
        "The V15 Detect: A sleek powerhouse engineered for whole-home deep cleaning.",
    },
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/71qMp7iYReL._AC_SX679_.jpg",
      caption:
        "The Fluffy Optic™ cleaner head revealing dust that standard vacuums leave behind.",
    },
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/71SiIs4jmkL._AC_SX679_.jpg",
      caption:
        "LCD Digital Display: Real-time scientific proof of your cleaning progress.",
    },
    {
      type: "video",
      url: "https://www.youtube.com/watch?v=7B3pfS6fqHo",
      caption:
        "Watch the V15 Detect tackle everything from fine dust to large debris.",
    },
  ],
  pros: [
    "Fluffy Optic™ laser makes microscopic dust on hard floors look like a mountain—you'll never miss a spot again",
    "Intelligent Piezo sensor automatically ramps up suction power when it hits a 'dust heavy' zone",
    "Anti-tangle Hair Screw tool is a miracle for pet owners, spiraling long hair into the bin in seconds",
    "Whole-machine HEPA filtration traps 99.99% of particles as small as 0.3 microns—essential for allergy sufferers",
    "Impressive 60-minute runtime is more than enough for a standard 3-bedroom home on Eco mode",
  ],
  cons: [
    "The 'Point-and-shoot' trigger must be held down constantly (unless you buy the power button mod)",
    "Premium pricing: It’s a significant investment compared to Shark or Samsung alternatives",
    "Emptying the bin requires a bit of 'aim' to avoid a dust cloud in smaller trash cans",
  ],
  specs: [
    { label: "Suction Power", value: "230 Air Watts (Boost Mode)" },
    { label: "Filtration", value: "Whole-machine HEPA" },
    { label: "Weight", value: "6.8 lbs" },
    { label: "Bin Volume", value: "0.2 Gallons" },
    { label: "Battery Life", value: "Up to 60 Minutes" },
  ],
  sections: [
    {
      title: "The Laser: Scary but Addictive",
      content:
        "The standout feature is the Fluffy Optic™ cleaner head. It projects a precisely angled green laser that makes dust on hardwood floors glow like neon lights. During our testing, we vacuumed a 'clean' kitchen floor only to find it was covered in invisible pet dander and fine silt. It’s oddly addictive; you’ll find yourself turning off the lights just to see the laser reveal every hidden particle under your cabinets and baseboards.",
    },
    {
      title: "Intelligence You Can Hear",
      content:
        "The V15 doesn't just suck; it thinks. Built inside is a Piezo sensor that 'listens' to the vibrations of dust particles. Example: When moving from a hardwood hallway onto a thick area rug, you can hear the motor instantly shift gears into a higher RPM. It provides more power exactly when you need it and saves battery when you don't. The LCD screen then breaks down the dirt by size (microns), giving you 'scientific proof' that your carpet is actually deep-cleaned.",
    },
    {
      title: "The Pet Owner's Secret Weapon",
      content:
        "If you have a Golden Retriever or a long-haired cat, you know the struggle of hair wrapped around a vacuum brush bar. Dyson’s new Hair Screw tool is a game-changer. Its conical brush bar spirals hair off and into the bin in seconds, preventing the dreaded 'tangle' that kills most cordless vacuums. It’s also the perfect tool for car detailing and removing stubborn hair from upholstery and stairs.",
    },
  ],
  relatedProducts: [
    {
      slug: "shark-stratos",
      name: "Shark Stratos Cordless",
      image: "https://m.media-amazon.com/images/I/41VgaT00HWL._AC_SX679_.jpg",
      price: "$299.99",
    },
  ],
};
