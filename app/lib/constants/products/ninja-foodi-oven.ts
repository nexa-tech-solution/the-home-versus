import { SingleProductData } from "../types";

export const NINJA_FOODI_OVEN_PRODUCT: SingleProductData = {
  slug: "ninja-foodi-smart-xl",
  name: "Ninja Foodi 10-in-1 Smart XL Air Fryer Oven",
  category: "Kitchen",
  image: "https://m.media-amazon.com/images/I/81wjvlr3a1L._AC_SX679_.jpg",
  price: "$144.49",
  amazonUrl: "https://amzn.to/4rOcuLf",
  rating: 4.3,
  reviewCount: 1096,
  author: "Emma Collins",
  date: "Jan 12, 2024",
  readTime: "6 min read",
  highlight:
    "The convection powerhouse that officially makes your traditional full-sized oven obsolete.",
  intro:
    "For many North American households, the countertop oven has evolved from a 'sidekick' to the main event. The Ninja Foodi Smart XL isn't just an air fryer; it’s a high-speed convection beast that claims to cook up to 30% faster than a traditional oven. With enough vertical space for a 12-lb turkey and a thermometer that eliminates the 'cut-and-peek' guesswork, it’s designed to reclaim your kitchen's most valuable real estate.",
  media: [
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/81wjvlr3a1L._AC_SX679_.jpg",
      caption: "Ninja Foodi 10-in-1 Smart XL Air Fryer Oven",
    },
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/81HXBtdPRdL._AC_SL1500_.jpg", // Add more images here
      caption: "True Surround Convection Technology",
    },
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/81Lyt5YPlsL._AC_SL1500_.jpg",
      caption: "Integrated Smart Thermometer",
    },
    {
      type: "video",
      url: "https://www.youtube.com/watch?v=ZfBD4Ag8UB0",
      caption: "Ninja Foodi Smart XL Air Fryer Oven Getting Started",
    },
  ],
  pros: [
    "True Surround Convection™ delivers up to 10x the fan power of a traditional oven for superior crisping",
    "Massive dual-level capacity: Roast a whole chicken and a tray of veggies simultaneously without flavor transfer",
    "Lightning-fast 90-second preheat time—say goodbye to waiting 15 minutes for your range to heat up",
    "Integrated Foodi Smart Thermometer ensures perfect doneness for steaks and roasts every single time",
    "Versatile 10-in-1 functionality replaces your toaster, dehydrator, and standalone air fryer",
  ],

  cons: [
    "Requires significant linear counter width (over 17 inches); not ideal for tiny apartment kitchens",
    "The high-velocity fan provides excellent results but is noticeably louder than a standard toaster oven",
    "Exterior housing gets extremely hot during high-temp roasting—keep small hands and plastic away",
  ],

  specs: [
    { label: "Power", value: "1800W Convection" },
    { label: "Preheat Speed", value: "90 Seconds" },
    { label: "Max Temp", value: "450°F" },
    { label: "Capacity", value: "Fits 12-lb Turkey / 2 Pizzas" },
    { label: "Special Tech", value: "Integrated Smart Thermometer" },
  ],

  sections: [
    {
      title: "No-Guesswork Doneness",
      content:
        "The integrated Smart Thermometer is the real hero here. Whether you’re tackling a thick-cut ribeye or a Sunday whole-roasted chicken, you simply insert the probe, select your protein type, and the oven handles the rest. It monitors internal temperature in real-time and shuts off the moment your target doneness is reached. It’s a level of professional precision that saves even the most seasoned home cooks from the heartbreak of overcooked meat.",
    },
    {
      title: "Capacity Meets Professional Speed",
      content:
        "What sets the Smart XL apart is the 'True Surround Convection.' By surrounding the food with high-velocity air, it achieves a deep, golden-brown Maillard reaction on proteins and a perfect crunch on fries that standard air fryer baskets struggle to match. Because of the dual-level design, you can genuinely meal-prep for a family of four on two sheet pans at once, making weeknight dinners significantly more efficient.",
    },
    {
      title: "The Ultimate Toaster Replacement",
      content:
        "While it’s a master at roasting and air frying, don't overlook its basic utility. It has a dedicated toast setting that is more precise than most high-end pop-up toasters. If you're looking to declutter your countertops, this is the one appliance that can officially justify giving away your toaster, air fryer, and dehydrator. It’s an investment in both speed and 'countertop real estate' management.",
    },
  ],
  relatedProducts: [
    {
      slug: "instant-pot-pro-crisp",
      name: "Instant Pot Pro Crisp",
      image: "https://m.media-amazon.com/images/I/81vc3qXKPpL._AC_SX522_.jpg",
      price: "$175.99",
    },
  ],
};
