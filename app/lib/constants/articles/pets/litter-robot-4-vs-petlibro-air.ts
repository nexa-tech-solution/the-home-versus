import { LITTER_ROBOT_4_PRODUCT } from "../../products/litter-robot-4";
import { PETLIBRO_AIR_PRODUCT } from "../../products/petlibro-air";
import { ArticleData } from "../../types";

export const LITTER_ROBOT_VS_PETLIBRO: ArticleData = {
  slug: "litter-robot-4-vs-petlibro-air",
  title:
    "Litter-Robot 4 vs. PETLIBRO Air: The Gold Standard vs. The AI Challenger",
  category: "Pets",
  snippet:
    "Does the legendary reliability of Litter-Robot 4 justify its price, or is PETLIBRO's AI-powered stool analysis the future of feline health?",
  author: "Sarah Mitchell",
  date: "March 14, 2026",
  readTime: "12 min read",
  winner: "Litter-Robot 4 (Best Overall) / PETLIBRO Air (Best for Health Tech)",
  intro:
    "Scooping litter is the one part of cat ownership nobody misses. Smart litter boxes have promised to end this chore, but the stakes are high—a jammed machine or poor odor control can ruin your home's air quality. We pitted the iconic Litter-Robot 4 against the innovative PETLIBRO Air. While one is an enclosed fortress of odor control, the other is an open-top AI lab that monitors your cat's health in ways we've never seen before.",

  productA: {
    name: LITTER_ROBOT_4_PRODUCT.name,
    image: LITTER_ROBOT_4_PRODUCT.image,
    price: LITTER_ROBOT_4_PRODUCT.price,
    amazonUrl: LITTER_ROBOT_4_PRODUCT.amazonUrl,
    slug: LITTER_ROBOT_4_PRODUCT.slug,
    media: LITTER_ROBOT_4_PRODUCT.media,
  },

  productB: {
    name: PETLIBRO_AIR_PRODUCT.name,
    image: PETLIBRO_AIR_PRODUCT.image,
    price: PETLIBRO_AIR_PRODUCT.price,
    amazonUrl: PETLIBRO_AIR_PRODUCT.amazonUrl,
    slug: PETLIBRO_AIR_PRODUCT.slug,
    media: PETLIBRO_AIR_PRODUCT.media,
  },

  specs: [
    {
      label: "Design Type",
      valueA: "Enclosed Globe",
      valueB: "Open-Top Drum",
      winner: "Tie",
    },
    {
      label: "Safety System",
      valueA: "OmniSense™ (Laser + Weight)",
      valueB: "360° LiDAR + Weight Sensors",
      winner: "A",
    },
    {
      label: "Health Tracking",
      valueA: "Weight + Usage Frequency",
      valueB: "AI Stool Analysis (Camera)",
      winner: "B",
    },
    {
      label: "Odor Tech",
      valueA: "Odorshield™ (Sealed Drawer)",
      valueB: "Dual-Air Filtration (Active Fan)",
      winner: "A",
    },
    {
      label: "Consumables",
      valueA: "Proprietary Bags/Filters",
      valueB: "Standard Bags Supported",
      winner: "B",
    },
  ],

  prosA: [
    "Most refined sifting mechanism with nearly zero jams in our testing",
    "Exceptional odor containment—perfect for small apartments or closets",
    "OmniSense™ real-time sensors provide industry-leading pet safety",
    "Extremely quiet operation (Quieter than a dishwasher)",
    "Huge ecosystem of accessories (Steps, Shields, Wood Cabinets)",
  ],

  prosB: [
    "Pioneering AI camera detects changes in stool (consistency/blood)",
    "Open-top design is significantly less intimidating for skittish cats",
    "Active carbon filtration helps scrub the air during cleaning cycles",
    "Zero-pinch safety design with 360-degree LiDAR detection",
    "Much more affordable entry price compared to Litter-Robot",
  ],

  consA: [
    "Top-tier pricing ($700+) plus ongoing cost for custom liners",
    "Large footprint requires substantial floor space",
    "Internal globe cleaning can be a deep-clean chore",
  ],

  consB: [
    "Open-top design allows more dust and smell to escape during rotation",
    "Advanced AI features and cloud storage require a monthly subscription",
    "Lighter build quality feels less 'heavy-duty' than the Robot",
  ],

  sections: [
    {
      title: "Sifting Reliability: Globe vs. Open Drum",
      content:
        "The Litter-Robot 4 uses a patented rotating globe that has been perfected over 20 years. In a multi-cat household, it's a tank—it handles heavy clumps without breaking a sweat. The PETLIBRO Air uses an open-drum system. While it's easier for cats to hop into, the exposed rotation means you occasionally see the 'sausage making' process, and it can be slightly messier if your cat is a 'high-aiming' peer.",
    },
    {
      title: "AI Stool Monitoring: A New Frontier",
      content:
        "This is PETLIBRO's 'killer feature.' By using an AI camera to photograph waste, it can alert you to diarrhea or constipation before your cat shows symptoms. For owners of cats with IBD or kidney issues, this data is priceless. Litter-Robot only tracks weight, which is great for monitoring trends but doesn't tell you *what* is actually happening inside your cat.",
    },
    {
      title: "The Reality of Odor Control",
      content:
        "Litter-Robot 4's sealed waste drawer is the gold standard; we found it could go 5-7 days in a single-cat home with zero smell. The PETLIBRO Air relies on an active fan and a large carbon filter. It's effective, but because the unit is open at the top, it can't achieve the same 100% airtight seal that the Litter-Robot offers. If you live in a studio apartment, the Robot is the clear winner for your nose.",
    },
  ],

  verdict: {
    overallWinner: "Litter-Robot 4",
    summary:
      "If you want the most reliable, 'set it and forget it' experience with the best odor control, the Litter-Robot 4 is worth the investment. However, if you are a data-driven pet parent or have a cat that refuses enclosed boxes, the PETLIBRO Air's AI health tracking is a revolutionary alternative.",
    options: [
      {
        product: LITTER_ROBOT_4_PRODUCT.name,
        reason:
          "Choose this for superior odor sealing, whisper-quiet cleaning, and the peace of mind of a 20-year legacy.",
        amazonUrl: LITTER_ROBOT_4_PRODUCT.amazonUrl,
      },
      {
        product: PETLIBRO_AIR_PRODUCT.name,
        reason:
          "Choose this for AI-powered health insights and a cat-friendly open-top design at a more accessible price point.",
        amazonUrl: PETLIBRO_AIR_PRODUCT.amazonUrl,
      },
    ],
  },
};
