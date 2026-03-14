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
  highlight: "Smart suction and best-in-class hair pickup.",
  intro:
    "The Shark Stratos is Shark's most advanced cordless vacuum to date, featuring Clean Sense IQ to detect dirt and Odor Neutralizer technology to keep your home smelling fresh.",
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
    "Excellent hair pickup with PowerFins Pro",
    "Clean Sense IQ saves battery by adjusting power",
    "Odor neutralizer cartridge works well",
    "MultiFLEX wand makes under-furniture cleaning easy",
    "More affordable than Dyson competitors",
  ],
  cons: [
    "Heavier than most stick vacuums at 8.9 lbs",
    "Battery life in high-power mode is short",
    "Dust cup is smaller than expected",
  ],
  specs: [
    { label: "Weight", value: "8.9 lbs" },
    { label: "Cleaning Path", value: "10 inches" },
    { label: "Run Time", value: "Up to 60 min (Eco)" },
    { label: "Filter Type", value: "HEPA" },
    { label: "Special Tech", value: "Clean Sense IQ" },
  ],
  sections: [
    {
      title: "Clean Sense IQ Technology",
      content:
        "The Stratos uses an infrared sensor to detect dirt you can't see and automatically increases power. This is great for high-traffic areas and helps maximize battery life by only using full power when necessary.",
    },
    {
      title: "The Ultimate Tool for Pet Parents",
      content:
        "The DuoClean PowerFins HairPro brushroll is a game changer for long hair. It literally digs into carpets and pulls up hair that other vacuums leave behind, and it rarely gets tangled.",
    },
  ],
  relatedProducts: [
    {
      slug: "dyson-v15-detect",
      name: "Dyson V15 Detect",
      image: "https://m.media-amazon.com/images/I/61nGFa6cXlL._AC_SL1500_.jpg",
      price: "$749.99",
    },
  ],
};
