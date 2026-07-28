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

export const KINDLE_PAPERWHITE_VS_NEW_KINDLE: ArticleData = {
  slug: "kindle-paperwhite-vs-new-amazon-kindle",
  title:
    "Amazon Kindle Paperwhite vs. New Amazon Kindle: Which Kindle Is Better in 2026?",
  category: "Electronics",
  snippet:
    "Amazon Kindle Paperwhite vs. New Amazon Kindle: which Kindle should you buy for travel, reading in bed, and everyday use?",
  author: "Tech Review Team",
  date: "July 28, 2026",
  readTime: "11 min read",
  winner: "Amazon Kindle Paperwhite (Best Overall)",
  intro:
    "If you are trying to choose between the Amazon Kindle Paperwhite and the New Amazon Kindle, you are already in a very good place. These are Amazon's two most practical e-readers for everyday readers, but they are built for slightly different buyers. The Kindle Paperwhite is the more complete package, with a bigger 7-inch display, warm light, waterproofing, and faster page turns. The New Amazon Kindle is the lighter, more affordable option that keeps the reading experience simple. We compared both to see which Kindle is better for travel, night reading, and long-term value.",

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
      label: "Display",
      valueA: getSpecValue(KINDLE_PAPERWHITE_12TH_GEN.specs, [
        "Display Size",
        "Display",
      ]),
      valueB: getSpecValue(NEW_AMAZON_KINDLE.specs, [
        "Display Size",
        "Display",
      ]),
      winner: "A",
    },
    {
      label: "Page Turns",
      valueA: getSpecValue(KINDLE_PAPERWHITE_12TH_GEN.specs, ["Page Turns"]),
      valueB: getSpecValue(NEW_AMAZON_KINDLE.specs, ["Page Turns"]),
      winner: "A",
    },
    {
      label: "Battery Life",
      valueA: getSpecValue(KINDLE_PAPERWHITE_12TH_GEN.specs, ["Battery Life"]),
      valueB: getSpecValue(NEW_AMAZON_KINDLE.specs, ["Battery Life"]),
      winner: "A",
    },
    {
      label: "Lighting",
      valueA: getSpecValue(KINDLE_PAPERWHITE_12TH_GEN.specs, ["Lighting"]),
      valueB: getSpecValue(NEW_AMAZON_KINDLE.specs, ["Lighting"]),
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
    "Bigger 7-inch screen gives you more text per page and a more book-like feel",
    "Warm light makes late-night reading easier on the eyes",
    "IPX8 waterproofing adds peace of mind at the pool, beach, or in the bath",
    "Battery life can stretch up to 12 weeks depending on use",
    "Fast page turns and 16GB storage make it the most complete Kindle here",
  ],

  prosB: [
    "Lower price makes it the best entry point into Kindle reading",
    "Compact and lightweight body is easy to hold for long sessions",
    "Still has a glare-free screen and USB-C charging",
    "Great choice if you mainly read indoors and want a simple e-reader",
    "16GB storage is enough for thousands of books and audiobooks",
  ],

  consA: [
    "Costs more than the base Kindle",
    "Slightly larger size makes it less pocket-friendly",
    "Not the cheapest choice if you only want a basic e-reader",
  ],

  consB: [
    "Smaller 6-inch screen feels tighter on the page",
    "No warm light for bedtime reading",
    "Not waterproof, so it is less ideal for travel near water",
  ],

  sections: [
    {
      title: "Paperwhite vs. Kindle: The Display Difference Matters Most",
      content:
        "The biggest reason to choose the Kindle Paperwhite is the display. Its 7-inch panel gives you more reading space, which means fewer page turns and a layout that feels closer to a real paperback. The New Amazon Kindle still has the same crisp 300 ppi clarity, but the smaller 6-inch screen is better if you want the lightest possible Kindle and do not mind a more compact page.",
    },
    {
      title: "Which Kindle Is Better for Night Reading?",
      content:
        "If you read before bed, the Paperwhite is the clear winner. The adjustable warm light shifts from bright white to a softer amber tone, which is easier on your eyes at night. The base Kindle still has a front light, but it lacks the warm-light option. That makes it perfectly usable for evening reading, just not as comfortable for long sessions in a dark room.",
    },
    {
      title: "Battery Life, Waterproofing, and Travel Value",
      content:
        "The Paperwhite is built for readers who travel often or like to bring their Kindle anywhere. Its battery can last up to 12 weeks and the IPX8 waterproof rating adds real peace of mind around water. The base Kindle is still excellent for travel because it is lighter and cheaper, but if you want one device that feels more premium and more worry-free, the Paperwhite is the stronger long-term buy.",
    },
  ],

  verdict: {
    overallWinner: "Amazon Kindle Paperwhite",
    summary:
      "The Kindle Paperwhite is the better overall Kindle for most buyers in 2026 because it gives you a larger display, warm light, waterproofing, and longer battery life without a huge jump in weight. The New Amazon Kindle is still the better value if you want the cheapest good Kindle and do most of your reading indoors.",
    options: [
      {
        product: KINDLE_PAPERWHITE_12TH_GEN.name,
        reason:
          "Choose this if you want the best all-around Kindle with a larger screen, warm light, and waterproofing for travel or bedtime reading.",
        amazonUrl: KINDLE_PAPERWHITE_12TH_GEN.amazonUrl,
      },
      {
        product: NEW_AMAZON_KINDLE.name,
        reason:
          "Choose this if you want a lighter and more affordable Kindle that still delivers a great glare-free reading experience.",
        amazonUrl: NEW_AMAZON_KINDLE.amazonUrl,
      },
    ],
  },

  faqs: [
    {
      question: "Is the Kindle Paperwhite worth the extra money over the base Kindle?",
      answer:
        "Yes, if you read often enough to care about the bigger screen, warm light, waterproofing, and longer battery life. If you only want the cheapest solid Kindle, the base model is still a strong buy.",
    },
    {
      question: "Which Kindle is better for reading in bed?",
      answer:
        "The Kindle Paperwhite is better for reading in bed because of its adjustable warm light, which is easier on your eyes at night.",
    },
    {
      question: "Which Kindle should I buy for travel?",
      answer:
        "If you travel near water or want the longest battery life, choose the Paperwhite. If you want the lightest and most budget-friendly option, the base Kindle is still very travel-friendly.",
    },
  ],
};
