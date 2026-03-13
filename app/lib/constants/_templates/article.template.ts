import { ArticleData } from "../types";

export const TEMPLATE_ARTICLE: ArticleData = {
  slug: "product-a-vs-product-b", // Must be unique URL-friendly name
  title: "Product A vs Product B: The Ultimate Comparison",
  category: "Category Name",
  snippet: "Short 1-2 sentence description for the card overview.",
  author: "Your Name",
  date: "Current Date",
  readTime: "X min read",
  intro: "Write a compelling introduction here about why you are comparing these two products.",
  winner: "Name of winner",
  productA: {
    name: "Full Name of Product A",
    image: "https://link-to-image.jpg",
    price: "$0.00",
    amazonUrl: "https://amazon.com/...",
    slug: "product-a-slug", // Used to link to single review
    media: [
      { type: "image", url: "...", caption: "..." }
    ]
  },
  productB: {
    name: "Full Name of Product B",
    image: "https://link-to-image.jpg",
    price: "$0.00",
    amazonUrl: "https://amazon.com/...",
    slug: "product-b-slug",
    media: []
  },
  specs: [
    { label: "Spec Name", valueA: "Value A", valueB: "Value B", winner: "A" } // winner can be "A" or "B"
  ],
  prosA: ["Pro 1", "Pro 2"],
  consA: ["Con 1"],
  prosB: ["Pro 1"],
  consB: ["Con 1"],
  sections: [
    { title: "Heading 1", content: "Details about the comparison..." }
  ],
  verdict: {
    overallWinner: "Product A",
    summary: "Final thoughts on why Product A wins for most people.",
    options: [
      { product: "Product A", reason: "Choose this if you want X.", amazonUrl: "..." },
      { product: "Product B", reason: "Choose this if you want Y.", amazonUrl: "..." }
    ]
  }
};
