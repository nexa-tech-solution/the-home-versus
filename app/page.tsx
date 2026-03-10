import { type Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ComparisonCard from "@/components/ComparisonCard";
import heroImage from "@/assets/hero-illustration.jpg";
import { comparisons } from "@/lib/data";


// Client-side animations
import { HomeClient } from "@/HomeClient";
import TrustSection from "@/components/TrustSection";

export const metadata: Metadata = {
  title: "TheHomeVersus | Expert Home Product Comparisons & Real-World Reviews",
  description: "Honest, side-by-side product comparisons for North American families. Tested by real moms in real US & Canadian homes — from Dyson vs Shark to baby essentials.",
  keywords: [
    "product comparison US Canada", 
    "home product reviews for moms", 
    "Dyson vs Shark reviews", 
    "best vacuum for pet hair Canada", 
    "kitchen appliance comparisons USA", 
    "baby gear reviews 2024",
    "real home testing North America"
  ],
  alternates: {
    canonical: "https://thehomeversus.com",
  },
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "TheHomeVersus | Honest Home Product Comparisons",
    description: "Real-world, side-by-side product comparisons tested in real homes. Honest reviews for families.",
    type: "website",
    url: "https://thehomeversus.com",
    images: [{ 
      url: "/og-image.jpg",
      width: 1200,
      height: 630,
      alt: "TheHomeVersus - Real Product Comparisons for Real Homes"
    }],
  },
  twitter: {
    card: "summary_large_image",
    title: "TheHomeVersus | Honest Home Product Comparisons",
    description: "Real-world, side-by-side product comparisons tested in real homes.",
    images: ["/og-image.jpg"],
  }
};

const categories = [
  { name: "Cleaning", icon: "🧹", slug: "cleaning", count: 12 },
  { name: "Kitchen", icon: "🍳", slug: "kitchen", count: 18 },
  { name: "Baby & Kids", icon: "👶", slug: "baby-kids", count: 9 },
  { name: "Pets", icon: "🐾", slug: "pets", count: 7 },
];

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "TheHomeVersus",
    "url": "https://thehomeversus.com",
    "description": "Expert home product comparisons and real-world reviews tested in real homes.",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://thehomeversus.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
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

      <SiteFooter />
    </div>
  );
}
