export interface Category {
  name: string;
  slug: string;
  icon: string;
  count: number;
  description: string;
}

export interface ComparisonSnippet {
  slug: string;
  title: string;
  category: string;
  productA: string;
  productB: string;
  imageA: string;
  imageB: string;
  snippet: string;
  winner: string;
  readTime: string;
}

export interface ArticleSection {
  title: string;
  content: string;
}

export interface ProductMedia {
  type: "image" | "video";
  url: string;
  caption: string;
}

export interface ProductDetail {
  name: string;
  image: string;
  price: string;
  amazonUrl: string;
  slug?: string;
  media?: ProductMedia[];
}

export interface Spec {
  label: string;
  valueA: string;
  valueB: string;
  winner: "A" | "B";
}

export interface VerdictOption {
  product: string;
  reason: string;
  amazonUrl: string;
}

export interface ArticleData {
  slug: string;
  title: string;
  category: string;
  snippet: string; // Short description for cards
  author: string;
  date: string;
  readTime?: string; // Optional: calculated automatically if not provided
  intro: string;
  winner: string; // Name of the winning product
  productA: ProductDetail;
  productB: ProductDetail;
  specs: Spec[];
  prosA: string[];
  consA: string[];
  prosB: string[];
  consB: string[];
  sections: ArticleSection[];
  verdict: {
    overallWinner: string;
    summary: string;
    options: VerdictOption[];
  };
}

export interface SingleProductData {
  slug: string;
  name: string;
  category: string;
  image: string;
  price: string;
  amazonUrl: string;
  rating: number;
  reviewCount: number;
  author: string;
  date: string;
  readTime?: string; // Optional
  highlight: string;
  intro: string;
  pros: string[];
  cons: string[];
  specs: { label: string; value: string }[];
  sections: ArticleSection[];
  relatedProducts: {
    slug: string;
    name: string;
    image: string;
    price: string;
  }[];
}
