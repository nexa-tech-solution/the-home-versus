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
  highlight: "The oven that actually air fries at professional speeds.",
  intro:
    "The Ninja Foodi Smart XL is more than just an air fryer oven. For many, it's a total replacement for the primary kitchen appliance.",
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
    "Amazing cooking capacity (Fits 12-lb turkey)",
    "True Surround Convection for crispy results",
    "90-second preheat time is incredibly fast",
    "Integrated smart thermometer",
    "Easy to clean non-stick interior",
  ],
  cons: [
    "Takes up significant counter space",
    "Fan is quite loud during air frying",
    "Initial cost is high compared to simple air fryers",
  ],
  specs: [
    { label: "Functions", value: "10-in-1" },
    { label: "Wattage", value: "1800W" },
    { label: "Preheat time", value: "90 seconds" },
    { label: "Max Temperature", value: "450°F" },
    { label: "Safety", value: "Auto shut-off" },
  ],
  sections: [
    {
      title: "Smart Thermometer Control",
      content:
        "The integrated smart thermometer is a hero feature. Whether you are roasting a whole chicken or a thick steak, just set your desired doneness and the Ninja will shut off when the exact internal temp is reached.",
    },
    {
      title: "Oven Capacity, Air Fryer Speed",
      content:
        "With its XL capacity and True Surround Convection, you can cook multiple levels at once, like fries on top and salmon on the bottom, with no flavor transfer and perfectly crispy results.",
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
