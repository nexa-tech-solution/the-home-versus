import { type Metadata, type ResolvingMetadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Clock, User, ArrowRight, Layers } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ComparisonTable from "@/components/ComparisonTable";
import ProsConsList from "@/components/ProsConsList";
import VerdictSection from "@/components/VerdictSection";
import ProductMediaGallery from "@/components/ProductMediaGallery";
import AdSlot from "@/components/AdSlot";
import ReadingProgress from "@/components/ReadingProgress";

// Client-side animations
import { ArticleClient } from "@/compare/[slug]/ArticleClient";

import { SITE_CONFIG, ARTICLE_DATA, COMPARISONS } from "@/lib/constants";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const article = ARTICLE_DATA[slug];

  if (!article) {
    return {
      title: `Comparison Not Found | ${SITE_CONFIG.name}`,
    };
  }

  return {
    title: `${article.title} | ${SITE_CONFIG.name}`,
    description: article.intro,
    keywords: [
      article.category,
      article.productA.name,
      article.productB.name,
      "comparison",
      "review",
    ],
    openGraph: {
      title: article.title,
      description: article.intro,
      images: [article.productA.image, article.productB.image],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/compare/${slug}`,
    },
  };
}

export default async function ComparisonArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = ARTICLE_DATA[slug];

  if (!article) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <div className="container py-20 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-6">
            Comparison Not Found
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

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    "headline": article.title,
    "description": article.intro,
    "itemReviewed": {
      "@type": "Product",
      "name": article.verdict.overallWinner,
    },
    "author": {
      "@type": "Person",
      "name": article.author
    },
    "datePublished": article.date,
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": "4.5",
      "bestRating": "5"
    },
    "publisher": {
      "@type": "Organization",
      "name": SITE_CONFIG.name,
      "logo": {
        "@type": "ImageObject",
        "url": SITE_CONFIG.ogImage
      }
    }
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <SiteHeader />
      <ReadingProgress id={slug} />

      <article className="container max-w-4xl py-8 md:py-20 px-4 md:px-0">
        <ArticleClient article={article} />

        {/* Product Media Showcases */}
        <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-12">
          {article.productA.media && (
            <ProductMediaGallery
              productName={article.productA.name}
              media={article.productA.media}
            />
          )}
          {article.productB.media && (
            <ProductMediaGallery
              productName={article.productB.name}
              media={article.productB.media}
            />
          )}
        </div>

        {/* Detailed Sections */}
        <div className="space-y-16">
          {article.sections.map((section: any, i: number) => (
            <section
              key={i}
              className="prose prose-zinc dark:prose-invert max-w-none"
            >
              <h2 className="font-display text-3xl font-bold text-foreground mb-6 border-b border-border pb-4">
                {section.title}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="my-20">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-10 text-center uppercase tracking-tight">
            ⚡ Side-by-Side Comparison
          </h2>
          <ComparisonTable
            productA={article.productA}
            productB={article.productB}
            specs={article.specs}
          />
        </div>

        {/* Pros & Cons */}
        <div className="mb-20 space-y-10">
          <h2 className="font-display text-3xl font-bold text-foreground border-b border-border pb-4">
            Pros & Cons
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ProsConsList
              productName={article.productA.name}
              pros={article.prosA}
              cons={article.consA}
            />
            <ProsConsList
              productName={article.productB.name}
              pros={article.prosB}
              cons={article.consB}
            />
          </div>
        </div>

        {/* Ad Slot - Pre-Verdict */}
        <div className="my-20">
            <AdSlot label="Editor's Choice" />
        </div>

        {/* Verdict */}
        <VerdictSection
          overallWinner={article.verdict.overallWinner}
          summary={article.verdict.summary}
          options={article.verdict.options}
        />

        {/* Internal Linking: Similar Comparisons */}
        <section className="mt-24 pt-16 border-t border-border">
          <div className="flex items-center gap-3 mb-10">
            <Layers className="h-6 w-6 text-accent" />
            <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground">
              Similar Comparisons you might like
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {COMPARISONS.filter(c => c.category === article.category && c.slug !== slug).slice(0, 2).map((comp) => (
              <Link 
                key={comp.slug} 
                href={`/compare/${comp.slug}`}
                className="group flex flex-col p-6 bg-card rounded-3xl border border-border hover:border-accent/40 hover:shadow-xl transition-all"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 bg-white rounded-xl border border-border flex items-center justify-center p-1 group-hover:scale-105 transition-transform overflow-hidden">
                    <Image 
                        src={comp.imageA} 
                        alt={comp.productA} 
                        fill
                        className="object-contain p-1" 
                        sizes="48px"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold">VS</div>
                  <div className="relative w-12 h-12 bg-white rounded-xl border border-border flex items-center justify-center p-1 group-hover:scale-105 transition-transform overflow-hidden">
                    <Image 
                        src={comp.imageB} 
                        alt={comp.productB} 
                        fill
                        className="object-contain p-1" 
                        sizes="48px"
                    />
                  </div>
                </div>
                <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors leading-tight mb-2 line-clamp-2">
                  {comp.title}
                </h3>
                <div className="mt-auto flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest">
                  View Comparison <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </article>

      <SiteFooter />
    </div>
  );
}
