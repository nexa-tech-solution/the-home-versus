import { ArticleData } from "../../types";

export const PETLIBRO_AIR_VS_PURAMAX: ArticleData = {
  slug: "petlibro-air-vs-petkit-pura-max",
  title: "PETLIBRO Air vs. Petkit Pura Max: The Ultimate Smart Litter Box Showdown",
  category: "Pets",
  snippet: "Is the AI-powered PETLIBRO Air worth its price, or does the compact Petkit Pura Max offer better value for cat parents?",
  author: "Sarah Mitchell",
  date: "March 13, 2024",
  readTime: "10 min read",
  winner: "PETLIBRO Air",
  intro: "Choosing a self-cleaning litter box is a major decision for any cat household. Today, we're comparing two of the most popular high-tech options: the camera-equipped PETLIBRO Air and the space-saving Petkit Pura Max. We spent weeks monitoring our cats' habits to see which machine truly offers the best balance of safety, health tracking, and odor control.",
  productA: {
    name: "PETLIBRO Air",
    image: "https://m.media-amazon.com/images/I/71N-r6z-b0L._AC_SL1500_.jpg",
    price: "$399.99",
    amazonUrl: "https://www.amazon.com/PETLIBRO-Automatic-Odor-Control-Multi-Cats-Recognition/dp/B0G599SG3B",
    slug: "petlibro-air-automatic",
    media: [
      { type: "image", url: "https://m.media-amazon.com/images/I/71N-r6z-b0L._AC_SL1500_.jpg", caption: "The modern, open-top design of the PETLIBRO Air." }
    ]
  },
  productB: {
    name: "Petkit Pura Max",
    image: "https://m.media-amazon.com/images/I/61k8T8+0JSL._AC_SL1500_.jpg",
    price: "$569.00",
    amazonUrl: "https://amazon.com/petkit-pura-max",
    slug: "petkit-pura-max",
    media: [
      { type: "image", url: "https://m.media-amazon.com/images/I/61k8T8+0JSL._AC_SL1500_.jpg", caption: "The Petkit Pura Max features a square shape to save space." }
    ]
  },
  specs: [
    { label: "AI Monitoring", valueA: "1080p Camera + AI Waste Analysis", valueB: "Basic Weight Tracking", winner: "A" },
    { label: "Odor Control", valueA: "97% Effective (Fan + Carbon)", valueB: "Good (Deodorizing Spray)", winner: "A" },
    { label: "Safety Sensors", valueA: "Triple Security (Visual/Weight/IR)", valueB: "Weight + Infrared", winner: "A" },
    { label: "Cat Recognition", valueA: "Up to 10 Cats via AI", valueB: "Weight-based recognition", winner: "A" }
  ],
  prosA: [
    "Comprehensive AI health tracking (stool analysis)",
    "24/7 Live video monitoring with night vision",
    "Highly effective active odor filtration system",
    "Open-top layout is easier for large cats to enter"
  ],
  consA: [
    "Advanced video features require subscription",
    "Must be used on hard surfaces only"
  ],
  prosB: [
    "More compact and enclosed design",
    "Built-in automatic deodorizer spray",
    "Excellent companion app",
    "Often easier to find for immediate shipping"
  ],
  consB: [
    "No camera or advanced waste analysis",
    "Slightly louder motor during cleaning",
    "Smaller entrance for very large breeds"
  ],
  sections: [
    { 
      title: "AI Health Monitoring vs. Standard Tracking", 
      content: "The PETLIBRO Air changes the game by using AI to analyze waste consistency, which can be an early indicator of health issues. While the Petkit Pura Max tracks weight and frequency, it lacks the visual data that the PETLIBRO provides via its 1080p camera." 
    },
    { 
      title: "Odor Management Systems", 
      content: "Both machines do a great job, but they use different methods. PETLIBRO uses an active fan system that pulls air through a filter, while Petkit uses a localized deodorizing spray. In our tests, the PETLIBRO system was slightly more effective at neutralizing smells before they could drift into the room." 
    }
  ],
  verdict: {
    overallWinner: "PETLIBRO Air",
    summary: "For cat parents who want the absolute most data on their pet's health, the PETLIBRO Air is currently unbeatable. Its combination of AI analysis and live video offers peace of mind that no other box can match.",
    options: [
      { product: "PETLIBRO Air", reason: "Choose this if you want 24/7 video monitoring and AI-driven health insights for your cats.", amazonUrl: "..." },
      { product: "Petkit Pura Max", reason: "Choose this if you need a more compact, enclosed design and don't require video monitoring.", amazonUrl: "..." }
    ]
  }
};
