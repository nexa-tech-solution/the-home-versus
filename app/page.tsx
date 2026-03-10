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

export const metadata: Metadata = {
  title: "TheHomeVersus | Honest Home Product Comparisons",
  description: "Real-world, side-by-side product comparisons tested in real homes. We help families find the best vacuums, kitchen gadgets, baby gear, and pet supplies.",
  keywords: ["product comparison", "home reviews", "Dyson vs Shark", "best home products", "family product tests"],
  openGraph: {
    title: "TheHomeVersus | Honest Home Product Comparisons",
    description: "Real-world, side-by-side product comparisons tested in real homes.",
    type: "website",
    url: "https://thehomeversus.com",
    images: [{ url: "/og-image.jpg" }],
  },
};



const categories = [
  { name: "🧹 Cleaning", count: 12 },
  { name: "🍳 Kitchen", count: 18 },
  { name: "👶 Baby & Kids", count: 9 },
  { name: "🐾 Pets", count: 7 },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <SiteHeader />

      <HomeClient categories={categories} comparisons={comparisons} heroImage={heroImage} />

      {/* Trust Section */}
      <section className="bg-primary text-primary-foreground">
        <div className="container py-20 text-center">
          <h2 className="font-display text-4xl font-bold mb-6">Why Families Trust Us</h2>
          <p className="max-w-2xl mx-auto text-primary-foreground/80 text-lg mb-12">
            We're moms, pet parents, and homeowners — just like you. Every product is tested in our homes, not a lab.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-12">
            {[
              { num: "200+", label: "Products Compared" },
              { num: "50K+", label: "Monthly Readers" },
              { num: "100%", label: "Honest Reviews" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center">
                <span className="font-display text-5xl font-bold text-accent mb-2">{stat.num}</span>
                <span className="text-primary-foreground/70 font-medium text-lg">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
