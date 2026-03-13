import { ArticleData } from "../../types";

export const UPPABABY_VS_NUNA: ArticleData = {
  slug: "uppababy-vista-v2-vs-nuna-demi-grow",
  title: "UPPAbaby Vista V2 vs. Nuna Demi Grow: Best Luxury Convertible Stroller",
  category: "Baby & Kids",
  snippet: "Two luxury strollers face off: which high-end travel system is actually worth the investment for your growing family?",
  author: "Sarah Mitchell",
  date: "March 1, 2024",
  readTime: "10 min read",
  winner: "UPPAbaby Vista V2",
  intro: "Ask any mom in a suburban neighborhood: which stroller is the best? You'll likely hear two names: the UPPAbaby Vista and the Nuna Demi Grow. These aren't just strollers; they are complete travel systems that grow with your family. We spent three months using both to see which one was easier to push and fold as a busy parent.",
  productA: {
    name: "UPPAbaby Vista V2",
    image: "https://m.media-amazon.com/images/I/81xU+S+WJcL._AC_SL1500_.jpg",
    price: "$999.00",
    amazonUrl: "https://amazon.com/uppababy-vista",
    slug: "uppababy-vista-v2",
    media: [
      { type: "image", url: "https://m.media-amazon.com/images/I/81xU+S+WJcL._AC_SL1500_.jpg", caption: "The UPPAbaby Vista V2 with all its accessories." }
    ]
  },
  productB: {
    name: "Nuna Demi Grow",
    image: "https://m.media-amazon.com/images/I/71YyP6o630L._AC_SL1500_.jpg",
    price: "$950.00",
    amazonUrl: "https://amazon.com/nuna-demi-grow",
    slug: "nuna-demi-grow",
    media: [
      { type: "image", url: "https://m.media-amazon.com/images/I/71YyP6o630L._AC_SL1500_.jpg", caption: "The Nuna Demi Grow in a sleek, modern look." }
    ]
  },
  specs: [
    { label: "Weight", valueA: "26.6 lbs", valueB: "27.4 lbs", winner: "A" },
    { label: "Basket Capacity", valueA: "30 lbs (XL)", valueB: "Small (~10 lbs)", winner: "A" },
    { label: "Sun Protection", valueA: "UPF 50+ (Extendable)", valueB: "Dream Drape (Full cover)", winner: "B" },
    { label: "Included Accessories", valueA: "Bassinet + Seat", valueB: "Seat Only (Bassinet extra)", winner: "A" }
  ],
  prosA: [
    "Amazing storage basket capacity",
    "Bassinet included in the price",
    "Easier maneuverability on rougher terrain",
    "Converts effortlessly to a double",
    "Huge resale value"
  ],
  prosB: [
    "Luxury fabrics and detailing",
    "Convertible to twin stroller",
    "Dream Drape for ultimate privacy",
    "Adjustable suspension for comfort",
    "More compact when folded"
  ],
  consA: [
    "More expensive initial investment",
    "Wider footprint (tough in small stores)",
    "Heavier than most single strollers"
  ],
  consB: [
    "Storage basket is much smaller",
    "Bassinet is a separate purchase",
    "Second seat sits very low to the ground"
  ],
  sections: [
    { 
      title: "Storage and Practicality", 
      content: "This is where UPPAbaby crushes the competition. The Vista V2 has a massive storage basket that can swallow a diaper bag and a week's worth of groceries. The Nuna Demi Grow’s basket is noticeably smaller, and when used as a double stroller, it becomes almost impossible to access." 
    },
    { 
      title: "Ride Quality and Performance", 
      content: "Nuna takes the lead here with its progressive suspension. You can actually feel the smoothness when pushing it over bumpy pavement. However, the UPPAbaby is far more intuitive to fold and adjust while holding a squirming child." 
    }
  ],
  verdict: {
    overallWinner: "UPPAbaby Vista V2",
    summary: "The UPPAbaby Vista V2 is the more practical choice for most families, offering incredible storage and included accessories at a more competitive package price.",
    options: [
      { product: "UPPAbaby Vista V2", reason: "Choose this if you need the massive storage and plan to use the included bassinet from day one.", amazonUrl: "..." },
      { product: "Nuna Demi Grow", reason: "Choose this if you prefer luxury fabrics and progressive suspension, and don't mind the smaller storage basket.", amazonUrl: "..." }
    ]
  }
};
