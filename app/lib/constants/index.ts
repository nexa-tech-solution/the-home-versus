export * from "./site";
export * from "./navigation";
export * from "./types";
export * from "./articles";
export * from "./stats";
export * from "./products";
export * from "./categories";

import { RAW_CATEGORIES } from "./categories";
import { ARTICLE_DATA } from "./articles";
import { ComparisonSnippet, Category, ArticleData } from "./types";
import { calculateReadTime } from "../utils";

export const CATEGORIES: Category[] = RAW_CATEGORIES.map((cat: Category) => ({
  ...cat,
  count: Object.values(ARTICLE_DATA).filter(article => 
    article.category.toLowerCase() === cat.name.toLowerCase()
  ).length
}));

export const COMPARISONS: ComparisonSnippet[] = Object.values(ARTICLE_DATA).map((article: ArticleData) => {
  const fullContent = [
    article.intro,
    ...article.sections.map(s => s.title + " " + s.content),
    article.verdict.summary
  ].join(" ");

  return {
    slug: article.slug,
    title: article.title,
    category: article.category,
    productA: article.productA.name,
    productB: article.productB.name,
    imageA: article.productA.image,
    imageB: article.productB.image,
    snippet: article.snippet,
    winner: article.winner,
    readTime: article.readTime || calculateReadTime(fullContent)
  };
});
