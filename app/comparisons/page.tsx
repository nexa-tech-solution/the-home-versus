import { type Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { comparisons } from "@/lib/data";
import { SITE_CONFIG } from "@/lib/constants";
import ComparisonsClient from "./ComparisonsClient";

export const metadata: Metadata = {
  title: `All Comparisons | ${SITE_CONFIG.name}`,
  description:
    "Browse our complete library of side-by-side product comparisons to find the best gear for your home, kitchen, cleaning, pet, and family needs.",
  keywords: [
    "product comparisons",
    "side-by-side reviews",
    "best comparison guides",
    "which is better",
    "home product comparisons",
    "cleaning comparisons",
    "kitchen comparisons",
    "pet comparisons",
    ...SITE_CONFIG.keywords,
  ],
  alternates: {
    canonical: `${SITE_CONFIG.url}/comparisons`,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `All Comparisons | ${SITE_CONFIG.name}`,
    description:
      "Browse our complete library of side-by-side product comparisons to find the best gear for your home, kitchen, cleaning, pet, and family needs.",
    type: "website",
    url: `${SITE_CONFIG.url}/comparisons`,
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: `All Comparisons | ${SITE_CONFIG.name}`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `All Comparisons | ${SITE_CONFIG.name}`,
    description:
      "Browse our complete library of side-by-side product comparisons to find the best gear for your home, kitchen, cleaning, pet, and family needs.",
    images: [SITE_CONFIG.ogImage],
  },
};

export default function ComparisonsPage() {
  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "All Comparisons",
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: comparisons.length,
    itemListElement: comparisons.map((comparison, index) => ({
      "@type": "ListItem",
      position: index + 1,
      url: `${SITE_CONFIG.url}/compare/${comparison.slug}`,
      name: comparison.title,
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 lowercase-links">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <SiteHeader />
      <ComparisonsClient initialComparisons={comparisons} />
      <SiteFooter />
    </div>
  );
}
