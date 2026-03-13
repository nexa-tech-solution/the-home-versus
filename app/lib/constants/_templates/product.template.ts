import { SingleProductData } from "../types";

export const TEMPLATE_PRODUCT: SingleProductData = {
  slug: "unique-slug", // Must be unique
  name: "Product Name",
  category: "Category Name",
  image: "https://link-to-image.jpg",
  price: "$0.00",
  amazonUrl: "https://amazon.com/...",
  rating: 4.5,
  reviewCount: 100,
  author: "Author Name",
  date: "Current Date",
  readTime: "5 min read",
  highlight: "A punchy one-sentence highlight of the product.",
  intro: "A longer introduction to the product review.",
  pros: ["Good thing 1", "Good thing 2"],
  cons: ["Bad thing 1"],
  specs: [
    { label: "Spec Label", value: "Spec Value" }
  ],
  sections: [
    { title: "Review Section 1", content: "Content of the review..." }
  ],
  relatedProducts: [
    { slug: "related-slug", name: "Related Product", image: "...", price: "..." }
  ]
};
