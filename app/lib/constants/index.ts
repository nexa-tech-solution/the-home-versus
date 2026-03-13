export * from "./site";
export * from "./navigation";
export * from "./types";
export * from "./categories";
export * from "./articles";
export * from "./stats";
export * from "./products";

import { ARTICLE_DATA } from "./articles";
import { ComparisonSnippet } from "./types";

export const COMPARISONS: ComparisonSnippet[] = Object.values(ARTICLE_DATA).map(article => ({
  slug: article.slug,
  title: article.title,
  category: article.category,
  productA: article.productA.name,
  productB: article.productB.name,
  imageA: article.productA.image,
  imageB: article.productB.image,
  snippet: article.snippet,
  winner: article.winner
}));
