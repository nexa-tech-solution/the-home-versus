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

export const BEST_KINDLE_FOR_READING_IN_BED: ArticleData = {
  slug: "best-kindle-for-reading-in-bed-kindle-paperwhite-vs-new-amazon-kindle",
  title:
    "Best Kindle for Reading in Bed: Kindle Paperwhite vs. New Amazon Kindle",
  category: "Electronics",
  snippet:
    "If you read before sleep, the Kindle Paperwhite is the best Kindle for reading in bed thanks to its warm light and bigger screen. Here is how it compares to the base Kindle.",
  author: "Tech Review Team",
  date: "July 28, 2026",
  readTime: "9 min read",
  winner: "Amazon Kindle Paperwhite (Best for Bedtime Reading)",
  intro:
    "If you read in bed every night, the Kindle Paperwhite is the better choice for most people. Its adjustable warm light is easier on your eyes in a dark room, and the larger 7-inch screen makes page turns feel smoother and less cramped. The New Amazon Kindle still works well if you want a lighter and cheaper device, but it does not have warm light, which is the feature most bedtime readers care about. This guide explains which Kindle is better for reading in bed and why.",

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
      label: "Lighting",
      valueA: getSpecValue(KINDLE_PAPERWHITE_12TH_GEN.specs, ["Lighting"]),
      valueB: getSpecValue(NEW_AMAZON_KINDLE.specs, ["Lighting"]),
      winner: "A",
    },
    {
      label: "Display",
      valueA: getSpecValue(KINDLE_PAPERWHITE_12TH_GEN.specs, ["Display Size"]),
      valueB: getSpecValue(NEW_AMAZON_KINDLE.specs, ["Display"]),
      winner: "A",
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
      label: "Price",
      valueA: KINDLE_PAPERWHITE_12TH_GEN.price,
      valueB: NEW_AMAZON_KINDLE.price,
      winner: "B",
    },
  ],

  prosA: [
    "Warm light is easier on your eyes when reading in a dark bedroom",
    "Bigger 7-inch screen feels less cramped for longer chapters",
    "Up to 12 weeks of battery life means you do not need to charge it often",
    "IPX8 waterproofing adds peace of mind for late-night reading near water",
    "Still light enough to hold comfortably in bed",
  ],

  prosB: [
    "Cheaper than the Paperwhite",
    "Smaller body is easy to hold with one hand",
    "Glare-free screen still gives a good reading experience",
    "Good if you only need a simple Kindle for occasional bedtime reading",
    "Lower price makes it an easy entry point",
  ],

  consA: [
    "Costs more than the base Kindle",
    "Slightly larger than the lightest Kindle",
    "May be more Kindle than casual readers need",
  ],

  consB: [
    "No warm light",
    "Smaller screen feels tighter at night",
    "Not waterproof",
  ],

  sections: [
    {
      title: "Best Kindle for Reading in Bed: Why Warm Light Matters",
      content:
        "The Kindle Paperwhite is the best Kindle for reading in bed because warm light makes a real difference at night. The amber tone is softer than a standard front light and feels more comfortable when the room is dark. If you read before sleep every night, that one feature alone is often worth the upgrade.",
    },
    {
      title: "Why the Bigger Screen Helps at Night",
      content:
        "A larger screen is not just about the number of inches. In bed, it means fewer page turns, less cramped text, and a reading experience that feels more relaxed when you are lying down. The New Amazon Kindle still works, but the smaller display is not as comfortable for long reading sessions before sleep.",
    },
    {
      title: "The Best Choice for Sleep-Friendly Reading",
      content:
        "If bedtime reading is your main use case, the Paperwhite is the safer recommendation because it combines warm light, longer battery life, and a more comfortable screen size. The base Kindle is still good for readers who want a simple, affordable option, but it is not the better choice if your top priority is comfort in bed.",
    },
  ],

  verdict: {
    overallWinner: "Amazon Kindle Paperwhite",
    summary:
      "The Kindle Paperwhite is the best Kindle for reading in bed because its warm light and larger screen make nighttime reading easier and more comfortable. The base Kindle is still a solid budget choice, but it lacks the warm light that most bedtime readers want.",
    options: [
      {
        product: KINDLE_PAPERWHITE_12TH_GEN.name,
        reason:
          "Choose this if you read every night and want the most comfortable Kindle for dark-room reading.",
        amazonUrl: KINDLE_PAPERWHITE_12TH_GEN.amazonUrl,
      },
      {
        product: NEW_AMAZON_KINDLE.name,
        reason:
          "Choose this if you want a cheaper Kindle and do not mind giving up warm light.",
        amazonUrl: NEW_AMAZON_KINDLE.amazonUrl,
      },
    ],
  },

  faqs: [
    {
      question: "What is the best Kindle for reading in bed?",
      answer:
        "For most people, the Kindle Paperwhite is the best Kindle for reading in bed because of its adjustable warm light and larger screen.",
    },
    {
      question: "Can I read the base Kindle at night?",
      answer:
        "Yes. It still has a front light, but it does not have the warm-light setting that makes the Paperwhite better for bedtime reading.",
    },
    {
      question: "Is the Kindle Paperwhite worth it for bedtime reading?",
      answer:
        "Yes, if you read at night often. The warm light and bigger screen make a noticeable difference in comfort.",
    },
  ],
};
