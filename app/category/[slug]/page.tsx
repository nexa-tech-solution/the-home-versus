import { type Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ComparisonCard from "@/components/ComparisonCard";
import { comparisons, categories } from "@/lib/data";
import AdSlot from "@/components/AdSlot";

import { SITE_CONFIG } from "@/lib/constants";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);

  if (!category) {
    return {
      title: `Category Not Found | ${SITE_CONFIG.name}`,
    };
  }

  return {
    title: `${category.name} Comparisons | ${SITE_CONFIG.name}`,
    description: category.description,
    keywords: [
        category.name,
        `${category.name} reviews`,
        `${category.name} comparisons`,
        "best home products",
    ],
    alternates: {
      canonical: `${SITE_CONFIG.url}/category/${slug}`,
    },
  };
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = categories.find((c) => c.slug === slug);
  
  const categoryComparisons = comparisons.filter(
    (comp) => comp.category.toLowerCase() === category?.name.toLowerCase()
  );

  if (!category) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <div className="container py-20 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-6">
            Category Not Found
          </h1>
          <Link
            href="/"
            className="text-accent hover:underline inline-flex items-center gap-2 font-bold text-lg"
          >
            <ArrowLeft className="h-5 w-5" /> Back to Home
          </Link>
        </div>
        <SiteFooter />
      </div>
    );
  }

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": SITE_CONFIG.url
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": category.name,
        "item": `${SITE_CONFIG.url}/category/${slug}`
      }
    ]
  };

  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "name": `${category.name} Comparisons`,
    "description": category.description,
    "url": `${SITE_CONFIG.url}/category/${slug}`,
    "mainEntity": {
      "@type": "ItemList",
      "itemListElement": categoryComparisons.map((comp, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "url": `${SITE_CONFIG.url}/compare/${comp.slug}`
      }))
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 lowercase-links">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="bg-secondary/30 border-b border-border/50 py-16 md:py-24">
          <div className="container">
            <nav className="flex items-center gap-2 text-sm font-medium text-muted-foreground mb-8">
              <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
                <Home className="h-4 w-4" /> Home
              </Link>
              <span>/</span>
              <span className="text-foreground">Category</span>
            </nav>

            <div className="max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-white rounded-2xl p-2 shadow-sm border border-border/40">
                  {category.icon.startsWith('http') || category.icon.startsWith('/') ? (
                    <img src={category.icon} alt="" className="w-full h-full object-contain" />
                  ) : (
                    <span className="text-5xl" role="img" aria-label={category.name}>{category.icon}</span>
                  )}
                </div>
                <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground tracking-tight">
                  {category.name}
                </h1>
              </div>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {category.description}
              </p>
            </div>
          </div>
        </section>

        {/* Comparisons List */}
        <section className="container py-16 md:py-24">
          <div className="flex items-center justify-between mb-12">
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              {categoryComparisons.length} {categoryComparisons.length === 1 ? "Review" : "Reviews"} Found
            </h2>
          </div>

          {categoryComparisons.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
              {categoryComparisons.map((comp, i) => (
                <ComparisonCard key={comp.slug} {...comp} index={i} />
              ))}
            </div>
          ) : (
            <div className="max-w-xl mx-auto text-center py-12 bg-card border border-dashed border-border rounded-3xl">
              <p className="text-lg text-muted-foreground mb-6">
                We're currently testing products in this category. Check back soon for our expert side-by-side reviews!
              </p>
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-accent font-bold hover:underline"
              >
                Browse other categories <ArrowLeft className="h-4 w-4 rotate-180" />
              </Link>
            </div>
          )}

          {/* Ad Slot - Strategically placed at the end of the list for better UX */}
          <div className="mt-24 max-w-4xl mx-auto">
            <AdSlot label="Home Essentials" />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
