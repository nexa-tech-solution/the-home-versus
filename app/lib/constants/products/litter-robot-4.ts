import { SingleProductData } from "../types";

export const PETLIBRO_AIR_PRODUCT: SingleProductData = {
  slug: "petlibro-air-automatic",
  name: "PETLIBRO Air Automatic Self-Cleaning Cat Litter Box",
  category: "Pets",
  image: "https://m.media-amazon.com/images/I/81nxgFOhbaL._AC_SX569_.jpg",
  price: "$599.99",
  amazonUrl: "https://amzn.to/4lu43mA",
  asin: "B0G599SG3B",
  rating: 4.1,
  reviewCount: 216,
  author: "Sarah Mitchell",
  date: "Mar 10, 2024",
  readTime: "8 min read",
  highlight:
    "AI-powered health monitoring with 1080p live-streaming and superior 24/7 odor control for a complete hands-off experience.",
  intro:
    "The PETLIBRO Air is a revolutionary smart litter box that doesn't just scoop; it watches, weighs, and analyzes your cat's health. With AI-driven waste analysis and a built-in camera, it offers peace of mind while eliminating odor-causing bacteria and dust.",
  media: [
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/81nxgFOhbaL._AC_SX569_.jpg",
      caption: "PETLIBRO Air Smart Litter Box Overview",
    },
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/71uXt1daEiL._AC_SY450_.jpg",
      caption: "Multi-layer safety system",
    },
    {
      type: "image",
      url: "https://m.media-amazon.com/images/I/71juxQzo9bL._AC_SY450_.jpg",
      caption: "Always-on odor control",
    },
    {
      type: "video",
      url: "https://www.youtube.com/watch?v=xStAm_GKgCs",
      caption: "PETLIBRO Air: The Future of Cat Care",
    },
  ],
  pros: [
    "AI-Waste Analysis analyzes stool consistency to track digestive health",
    "Built-in 1080p camera with Night Vision for 24/7 remote monitoring",
    "Multi-cat Recognition identifies and tracks up to 10 cats individually",
    "Superior Odor Control with a powerful fan and high-capacity carbon filters",
    "Quiet operation and open-top design is less intimidating for nervous cats",
  ],
  cons: [
    "Premium features and video history require a cloud subscription",
    "Open-top design provides less privacy for shy cats compared to enclosed models",
    "Performance depends on being placed on a flat, hard surface (no carpet)",
  ],
  specs: [
    { label: "Odor Control", value: "97% Effective (Fan + Carbon)" },
    { label: "Safety", value: "Triple Sensors (Visual/Weight/IR)" },
    { label: "Waste Capacity", value: "2.9 Gallons (Up to 15 Days per cat)" },
    { label: "Dimensions", value: "22 x 20 x 20 in" },
    { label: "App", value: "PETLIBRO App (WiFi Enabled)" },
  ],
  sections: [
    {
      title: "Scientific Health Monitoring & AI Analysis",
      content:
        "The PETLIBRO Air is more than a litter box; it's an AI-driven health diagnostic tool. It uses advanced cameras to analyze waste consistency—distinguishing between normal, soft, or hard stools. This data, combined with weight tracking, alerts you to potential urinary or digestive issues before they become serious through the PETLIBRO app.",
    },
    {
      title: "Multi-Cat Recognition & 24/7 Monitoring",
      content:
        "Equipped with a 1080p night-vision camera, you can watch your cats use the box from anywhere. The AI can recognize and track up to 10 different cats based on their unique physical features and weight, logging individual toilet habits in the app for detailed long-term health reports and peace of mind.",
    },
    {
      title: "Superior Odor & Litter Management",
      content:
        "The built-in odor control system doesn't just mask smells; it filters them. A high-efficiency fan draws air through a massive carbon filter, neutralizing up to 97% of odors. The large 2.9-gallon waste drawer is completely sealed and utilizes specialized liners, meaning you only need to empty it once every two weeks for a single cat.",
    },
  ],
  relatedProducts: [
    {
      slug: "petcove-purrtek-smart",
      name: "Petcove PurrTek Smart Automatic Litter Box",
      image: "https://m.media-amazon.com/images/I/614M8YltfgL._AC_SL1500_.jpg", // Keeping as placeholder or finding better
      price: "$563.99",
    },
  ],
};
