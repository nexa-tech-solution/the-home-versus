import { type Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import heroImage from "@/assets/hero-illustration.jpg";
import { comparisons, categories } from "@/lib/data";

// Client-side animations
import { HomeClient } from "@/HomeClient";
import TrustSection from "@/components/TrustSection";
import Newsletter from "@/components/Newsletter";

import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
  description: SITE_CONFIG.description,
  keywords: SITE_CONFIG.keywords,
  alternates: {
    canonical: SITE_CONFIG.url,
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${SITE_CONFIG.name} | Honest Home Product Comparisons`,
    description: "Independent side-by-side product comparisons, practical buying notes, and category guides for home shoppers.",
    type: "website",
    url: SITE_CONFIG.url,
    images: [{ 
      url: SITE_CONFIG.ogImage,
      width: 1200,
      height: 630,
      alt: `${SITE_CONFIG.name} - Real Product Comparisons for Real Homes`
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} | Honest Home Product Comparisons`,
    description: "Independent side-by-side product comparisons and practical buying notes for home shoppers.",
    images: [SITE_CONFIG.ogImage],
  }
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_CONFIG.name,
    "url": SITE_CONFIG.url,
    "description": SITE_CONFIG.description,
    "potentialAction": {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_CONFIG.url}/?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />

      <HomeClient categories={categories} comparisons={comparisons} heroImage={heroImage} />

      <TrustSection />

      <Newsletter />

      <SiteFooter />
    </div>
  );
}
