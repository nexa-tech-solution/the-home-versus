import { ArticleData } from "../../types";
import { KINDLE_PAPERWHITE_12TH_GEN } from "../../products/kindle-paperwhite-12th-gen-2024-review";
import { NEW_AMAZON_KINDLE } from "../../products/new-amazon-kindle-glare-free-16gb";

function getSpecValue(
  specs: { label: string; value: string }[],
  labels: string[],
) {
  const normalizedLabels = labels.map((label) => label.toLowerCase());
  return (
    specs.find((spec) => normalizedLabels.includes(spec.label.toLowerCase()))?.value ??
    ""
  );
}

export const BEST_KINDLE_FOR_TRAVEL: ArticleData = {
  slug: "best-kindle-for-travel-kindle-paperwhite-vs-new-amazon-kindle",
  title:
    "Best Kindle for Travel: Kindle Paperwhite vs. New Amazon Kindle",
  category: "Electronics",
  snippet:
    "Looking for the best Kindle for travel? We compare the Kindle Paperwhite and the New Amazon Kindle on battery life, waterproofing, size, and price to see which one is easier to bring on the road.",
  author: "Tech Review Team",
  date: "July 28, 2026",
  readTime: "9 min read",
  winner: "Amazon Kindle Paperwhite (Best for Travel)",
  intro:
    "If your main question is which Kindle is best for travel, the Kindle Paperwhite is the safer pick for most people. It lasts longer, has a bigger 7-inch screen, and adds IPX8 waterproofing for peace of mind on planes, beaches, and long trips. The New Amazon Kindle is lighter and cheaper, so it still makes sense if you want the most compact Kindle possible. This guide breaks down the real tradeoffs so you can choose the right travel Kindle for your bag and your budget.",

  productA: {
    name: KINDLE_PAPERWHITE_12TH_GEN.name,
    image: KINDLE_PAPERWHITE_12TH_GEN.image,
    price: KINDLE_PAPERWHITE_12TH_GEN.price,
    amazonUrl: KINDLE_PAPERWHITE_12TH_GEN.amazonUrl,
    slug: KINDLE_PAPERWHITE_12TH_GEN.slug,
    media: KINDLE_PAPERWHITE_12TH_GEN.media,
  },

  productB: {
    name: NEW_AMAZON_KINDLE.name,
    image: NEW_AMAZON_KINDLE.image,
    price: NEW_AMAZON_KINDLE.price,
    amazonUrl: NEW_AMAZON_KINDLE.amazonUrl,
    slug: NEW_AMAZON_KINDLE.slug,
    media: NEW_AMAZON_KINDLE.media,
  },

  specs: [
    {
      label: "Portability",
      valueA: getSpecValue(KINDLE_PAPERWHITE_12TH_GEN.specs, ["Display Size"]),
      valueB: getSpecValue(NEW_AMAZON_KINDLE.specs, ["Display"]),
      winner: "B",
    },
    {
      label: "Battery Life",
      valueA: getSpecValue(KINDLE_PAPERWHITE_12TH_GEN.specs, ["Battery Life"]),
      valueB: getSpecValue(NEW_AMAZON_KINDLE.specs, ["Battery Life"]),
      winner: "A",
    },
    {
      label: "Waterproofing",
      valueA: getSpecValue(KINDLE_PAPERWHITE_12TH_GEN.specs, ["Waterproofing"]),
      valueB: getSpecValue(NEW_AMAZON_KINDLE.specs, ["Waterproofing"]),
      winner: "A",
    },
    {
      label: "Lighting",
      valueA: getSpecValue(KINDLE_PAPERWHITE_12TH_GEN.specs, ["Lighting"]),
      valueB: getSpecValue(NEW_AMAZON_KINDLE.specs, ["Lighting"]),
      winner: "A",
    },
    {
      label: "Price",
      valueA: KINDLE_PAPERWHITE_12TH_GEN.price,
      valueB: NEW_AMAZON_KINDLE.price,
      winner: "B",
    },
  ],

  prosA: [
    "IPX8 waterproofing makes it safer for beach bags, pools, and rainy travel days",
    "Up to 12 weeks of battery life means fewer chargers to pack",
    "Warm light helps on red-eye flights and late-night hotel reading",
    "7-inch screen feels more comfortable for long reading sessions",
    "Still compact enough to travel without adding much weight",
  ],

  prosB: [
    "Lighter and more affordable than the Paperwhite",
    "Smaller body is easy to slip into a backpack or tote",
    "Still has a glare-free 300 ppi screen and USB-C charging",
    "Good option if you mainly want a simple Kindle for short trips",
    "Lower price makes it easier to replace if your bag gets lost",
  ],

  consA: [
    "Costs more than the base Kindle",
    "Slightly larger than the simplest Kindle model",
    "May be overkill if you only read occasionally on the road",
  ],

  consB: [
    "No waterproofing",
    "No warm light for bedtime or airplane reading",
    "Shorter battery life than the Paperwhite",
  ],

  sections: [
    {
      title: "Best Kindle for Travel: Why the Paperwhite Wins",
      content:
        "The Kindle Paperwhite is the best Kindle for travel because it balances portability with the features travelers actually use. The screen is large enough to feel comfortable on a plane, the battery lasts up to 12 weeks, and the waterproof design gives you more confidence at the beach, pool, or hotel. If you want one Kindle that can handle almost any trip, this is the one we would pack.",
    },
    {
      title: "When the New Kindle Is the Better Travel Buy",
      content:
        "The New Amazon Kindle still has a real travel advantage: it is smaller, lighter, and cheaper. If you want the easiest Kindle to throw in a day bag, or you are worried about losing an expensive device while traveling, the base Kindle is a smart fallback. It is also perfectly fine for short trips where you will mostly read indoors and do not need waterproofing.",
    },
    {
      title: "Which Kindle Should You Pack?",
      content:
        "For most readers, the Kindle Paperwhite is the best travel Kindle because it removes the biggest pain points: battery anxiety, small-screen fatigue, and accidental water damage. The New Amazon Kindle is the budget pick and the lightest option. If you are only choosing one Kindle for frequent trips, the Paperwhite is the more complete travel companion.",
    },
  ],

  verdict: {
    overallWinner: "Amazon Kindle Paperwhite",
    summary:
      "The Kindle Paperwhite is the best Kindle for travel in 2026 because it has the strongest mix of battery life, waterproofing, screen size, and comfort. The base Kindle is still the better cheap travel option if you want to spend less and carry the lightest possible device.",
    options: [
      {
        product: KINDLE_PAPERWHITE_12TH_GEN.name,
        reason:
          "Choose this if you travel often and want the safest all-around Kindle with the best battery life and waterproofing.",
        amazonUrl: KINDLE_PAPERWHITE_12TH_GEN.amazonUrl,
      },
      {
        product: NEW_AMAZON_KINDLE.name,
        reason:
          "Choose this if you want the lightest and most affordable Kindle for short trips and casual reading.",
        amazonUrl: NEW_AMAZON_KINDLE.amazonUrl,
      },
    ],
  },

  faqs: [
    {
      question: "What is the best Kindle for travel?",
      answer:
        "For most people, the Kindle Paperwhite is the best Kindle for travel because it combines a larger screen, long battery life, and waterproofing.",
    },
    {
      question: "Is the base Kindle good for travel?",
      answer:
        "Yes. It is lighter and cheaper, so it works well for casual trips, but it does not have waterproofing or warm light.",
    },
    {
      question: "Which Kindle is easier to carry every day?",
      answer:
        "The New Amazon Kindle is easier to carry every day because it is smaller and lighter.",
    },
  ],
};
