import { NUNA_DEMI_GROW_PRODUCT } from "../../products/nuna-demi-grow";
import { UPPABABY_VISTA_V3_PRODUCT } from "../../products/uppababy-vista-v3";
import { ArticleData } from "../../types";

export const UPPABABY_VS_NUNA: ArticleData = {
  slug: "uppababy-vista-v3-vs-nuna-demi-grow",
  title: "UPPAbaby Vista V3 vs. Nuna Demi Grow: Best Luxury Convertible Stroller",
  category: "Baby & Kids",
  snippet: "The new Vista V3 faces off against the stylish Demi Grow: which high-end travel system is actually worth the investment for your family?",
  author: "Sarah Mitchell",
  date: "March 14, 2026",
  readTime: "12 min read",
  winner: "UPPAbaby Vista V3",
  intro: "Choosing a luxury stroller is one of the biggest investments new parents make. The UPPAbaby Vista has long been the market leader, but the recently released V3 model brings significant upgrades like the FlexRide suspension and magnetic harness. The Nuna Demi Grow remains a strong competitor with its premium fabrics and unique 'stacked' double configuration. We spent four weeks testing the new Vista V3 alongside the Demi Grow to see which one handles the reality of parent life better.",
  productA: {
    name: UPPABABY_VISTA_V3_PRODUCT.name,
    image: UPPABABY_VISTA_V3_PRODUCT.image,
    price: UPPABABY_VISTA_V3_PRODUCT.price,
    amazonUrl: UPPABABY_VISTA_V3_PRODUCT.amazonUrl,
    slug: UPPABABY_VISTA_V3_PRODUCT.slug,
    media: UPPABABY_VISTA_V3_PRODUCT.media,
  },
  productB: {
    name: NUNA_DEMI_GROW_PRODUCT.name,
    image: NUNA_DEMI_GROW_PRODUCT.image,
    price: NUNA_DEMI_GROW_PRODUCT.price,
    amazonUrl: NUNA_DEMI_GROW_PRODUCT.amazonUrl,
    slug: NUNA_DEMI_GROW_PRODUCT.slug,
    media: NUNA_DEMI_GROW_PRODUCT.media,
  },
  specs: [
    { label: "Weight (Single)", valueA: "27 lbs", valueB: "27.4 lbs", winner: "A" },
    { label: "Basket Capacity", valueA: "30 lbs", valueB: "10 lbs", winner: "A" },
    { label: "Configurations", valueA: "30+", valueB: "23+", winner: "A" },
    { label: "Suspension", valueA: "FlexRide All-Wheel", valueB: "Custom Dual", winner: "A" },
    { label: "Harness System", valueA: "Magnetic Buckle", valueB: "5-point Traditional", winner: "A" }
  ],
  prosA: [
    "Huge storage basket for gear and groceries",
    "New FlexRide suspension is incredibly smooth",
    "Magnetic harness is a huge time saver",
    "All-weather seat with seasonal liner",
    "Excellent resale value"
  ],
  prosB: [
    "Premium, OEKO-TEX certified fabrics",
    "Dual suspension can be adjusted for terrain",
    "Dream Drape™ for ultimate sun protection",
    "Stacked double configuration is more narrow",
    "Includes two sets of adapters"
  ],
  consA: [
    "Wider rear axle can be tricky in tight stores",
    "Bassinet is now a separate purchase (unlike V2)",
    "Can feel heavy when fully loaded as a double"
  ],
  consB: [
    "Storage basket is very difficult to access as a double",
    "Second seat sits very low to the ground",
    "Slightly heavier than the Vista V3"
  ],
  sections: [
    { 
      title: "Design & Maneuverability", 
      content: "The Vista V3's standout upgrade is the FlexRide suspension. While the V2 was already good, the V3 feels noticeably more 'floaty' over cracked sidewalks. The Nuna Demi Grow counters with its Custom Dual suspension, which you can actually toggle between 'stiff' and 'soft' depending on the surface. While both push beautifully, the Vista V3 feels slightly more nimble in single mode due to its weight distribution." 
    },
    { 
      title: "The Battle of the Baskets", 
      content: "For many parents, this is the deciding factor. The Vista V3 continues UPPAbaby's legacy of having the best basket in the industry. It's huge, easy to access from all sides, and can hold up to 30 lbs. The Nuna Demi Grow has a much smaller basket, and if you use it in double mode, the bottom seat sits *inside* the basket area, making it virtually useless for storage." 
    },
    { 
      title: "Harness & Seat Comfort", 
      content: "The V3's new magnetic harness is a game-changer for parents with squirmy toddlers. It snaps together instantly. Nuna's Dream Drape™ is still the best sunshade on the market, providing full coverage and privacy for naps. However, the V3's new all-weather seat—which has a removable liner to reveal a mesh back for summer—gives it the edge for year-round comfort." 
    }
  ],
  verdict: {
    overallWinner: "UPPAbaby Vista V3",
    summary: "The UPPAbaby Vista V3 wins for its superior storage, new magnetic harness, and improved suspension. While the Nuna Demi Grow is a beautiful, high-quality stroller, the Vista V3 is simply more practical for the day-to-day needs of a growing family.",
    options: [
      { 
        product: UPPABABY_VISTA_V3_PRODUCT.name, 
        reason: "Choose this if you want the best storage, easiest harness system, and a stroller that grows effortlessly to three children.", 
        amazonUrl: UPPABABY_VISTA_V3_PRODUCT.amazonUrl
      },
      { 
        product: NUNA_DEMI_GROW_PRODUCT.name, 
        reason: "Choose this if you prefer premium fabrics, a narrower double footprint, and the full-coverage Dream Drape.", 
        amazonUrl: NUNA_DEMI_GROW_PRODUCT.amazonUrl
      }
    ]
  }
};
