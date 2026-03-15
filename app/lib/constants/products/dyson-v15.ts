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
  highlight: "The smartest, most powerful cordless vacuum yet.",
  intro:
    "The Dyson V15 Detect isn't just a vacuum; it's a scientific tool for your home. With its laser dust detection and piezo sensor, it brings a level of cleanliness you can actually see and measure.",

  media: [
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/61p+FdEl5UL._AC_SX679_.jpg",
      caption: "Dyson V15 Detect Cordless Vacuum",
    },
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/71qMp7iYReL._AC_SX679_.jpg",
      caption: "Laser Slim Fluffy™ cleaner head reveals hidden dust",
    },
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/71SiIs4jmkL._AC_SX679_.jpg",
      caption: "LCD screen shows scientific proof of a deep clean",
    },
    {
      type: "video",
      url: "https://www.youtube.com/watch?v=7B3pfS6fqHo",
      caption: "Dyson V15 Detect technology and features",
    },
  ],
  pros: [
    "Laser reveals microscopic dust",
    "Incredible suction power on all surfaces",
    "Long runtime up to 60 minutes",
    "HEPA filtration captures 99.99% of particles",
    "Quiet operation even on high power",
  ],
  cons: [
    "High price point compared to competitors",
    "Bin emptying can be slightly messy",
    "Heavier than previous models",
  ],
  specs: [
    { label: "Weight", value: "6.8 lbs" },
    { label: "Suction Power", value: "230 AW" },
    { label: "Bin Volume", value: "0.2 gallons" },
    { label: "Run Time", value: "Up to 60 min" },
    { label: "Charge Time", value: "4.5 hours" },
  ],
  sections: [
    {
      title: "The Laser Slim Fluffy™ Cleaner Head",
      content:
        "The standout feature is the precisely-angled laser which makes invisible dust visible on hard floors – so you don’t miss anything. It's oddly satisfying to see a green light reveal pet hair and dust you didn't even know was there.",
    },
    {
      title: "Scientific Proof of a Deep Clean",
      content:
        "The piezo sensor continuously sizes and counts dust particles – automatically increasing suction power when needed. The LCD screen shows you exactly what’s been sucked up, giving you real-time scientific proof of a deep clean.",
    },
  ],
  relatedProducts: [
    {
      slug: "shark-stratos",
      name: "Shark Stratos Cordless",
      image: "https://m.media-amazon.com/images/I/619jhoAVLjL._AC_SL1500_.jpg",
      price: "$399.99",
    },
    {
      slug: "samsung-jet-90",
      name: "Samsung Jet 90 Stick",
      image: "https://m.media-amazon.com/images/I/61Y9R2mNoLL._AC_SL1500_.jpg",
      price: "$449.00",
    },
  ],
};
