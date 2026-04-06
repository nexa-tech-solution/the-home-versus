import { type Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { PRODUCT_DATA, SITE_CONFIG } from "@/lib/constants";
import ProductsClient from "./ProductsClient";

export const metadata: Metadata = {
  title: `Best Rated Products | ${SITE_CONFIG.name}`,
  description: "Explore our product library with practical summaries, specs, and comparison context across home categories.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/products`,
  },
};

export default function ProductsPage() {
  const allProducts = Object.values(PRODUCT_DATA);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 lowercase-links">
      <SiteHeader />
      <ProductsClient allProducts={allProducts} />
      <SiteFooter />
    </div>
  );
}
