import { CATEGORIES, COMPARISONS, PRODUCT_DATA, Category } from "./constants";

export type { Category };

export const categories = CATEGORIES;
export const comparisons = COMPARISONS;

export const searchArticlesByTitle = (query: string) => {
  if (!query) return [];
  const lowercaseQuery = query.toLowerCase();
  return COMPARISONS.filter(
    (comp) =>
      comp.title.toLowerCase().includes(lowercaseQuery) ||
      comp.productA.toLowerCase().includes(lowercaseQuery) ||
      comp.productB.toLowerCase().includes(lowercaseQuery) ||
      comp.category.toLowerCase().includes(lowercaseQuery)
  );
};


export const getComparisonsByProductName = (productName: string) => {
  const lowercaseName = productName.toLowerCase();
  return COMPARISONS.filter(
    (comp) =>
      comp.productA.toLowerCase().includes(lowercaseName) ||
      comp.productB.toLowerCase().includes(lowercaseName)
  );
};

export const searchProductsByName = (query: string) => {
  if (!query) return [];
  const lowercaseQuery = query.toLowerCase();
  return Object.values(PRODUCT_DATA).filter(
    (product) =>
      product.name.toLowerCase().includes(lowercaseQuery) ||
      product.category.toLowerCase().includes(lowercaseQuery)
  );
};
