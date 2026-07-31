import { type Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PRODUCT_DATA, SITE_CONFIG } from "@/lib/constants";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: `Best Rated Products | ${SITE_CONFIG.name}`,
  description:
    "Explore our product library with practical summaries, specs, pros and cons, and comparison context across home categories.",
  keywords: [
    "best rated products",
    "home product reviews",
    "product library",
    "cleaning product reviews",
    "kitchen product reviews",
    "pet product reviews",
    "baby gear reviews",
    "comparison context",
    ...SITE_CONFIG.keywords,
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/products`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `Best Rated Products | ${SITE_CONFIG.name}`,
    description:
      "Explore our product library with practical summaries, specs, pros and cons, and comparison context across home categories.",
    type: "website",
    url: `${SITE_CONFIG.url}/products`,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `Best Rated Products | ${SITE_CONFIG.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Best Rated Products | ${SITE_CONFIG.name}`,
    description:
      "Explore our product library with practical summaries, specs, pros and cons, and comparison context across home categories.",
    images: [SITE_CONFIG.ogImage],
  },
};

export default function ProductsPage() {
  const allProducts = Object.values(PRODUCT_DATA);
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Best Rated Products",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: allProducts.length,
    itemListElement: allProducts.map((product, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_CONFIG.url}/product/${product.slug}`,
      name: product.name,
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 lowercase-links">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <SiteHeader />
      <ProductsClient allProducts={allProducts} />
      <SiteFooter />
    </div>
  );
}
