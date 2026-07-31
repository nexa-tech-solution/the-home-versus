import { type Metadata, type ResolvingMetadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, User, ArrowRight, Layers } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ComparisonTable from "@/components/ComparisonTable";
import ProsConsList from "@/components/ProsConsList";
import VerdictSection from "@/components/VerdictSection";
import ProductMediaGallery from "@/components/ProductMediaGallery";
import ReadingProgress from "@/components/ReadingProgress";
import ReviewDisclaimer from "@/components/ReviewDisclaimer";

// Client-side animations
import { ArticleClient } from "@/compare/[slug]/ArticleClient";

import {
  SITE_CONFIG,
  ARTICLE_DATA,
  COMPARISONS,
  PRODUCT_DATA,
  CATEGORIES,
} from "@/lib/constants";

const GENERIC_BRAND_PREFIXES = new Set([
  "all-purpose",
  "generic",
  "standard",
  "traditional",
]);

function getBrandName(productName: string) {
  const firstWord = productName.split(" ")[0]?.toLowerCase();
  if (!firstWord || GENERIC_BRAND_PREFIXES.has(firstWord)) {
    return undefined;
  }
  return productName.split(" ")[0];
}

function getComparisonKeywords(article: (typeof ARTICLE_DATA)[string]) {
  const baseKeywords = new Set([
    article.category,
    article.title,
    article.snippet,
    article.productA.name,
    article.productB.name,
    `${article.productA.name} vs ${article.productB.name}`,
    `${article.productA.name} versus ${article.productB.name}`,
    `${article.productA.name} review`,
    `${article.productB.name} review`,
    `${article.productA.name} comparison`,
    `${article.productB.name} comparison`,
    "which is better",
    "best for cleaning",
    "comparison",
    "review",
  ]);

  if (article.category.toLowerCase() === "electronics") {
    [
      "kindle paperwhite vs kindle",
      "best kindle for travel",
      "best kindle for reading in bed",
      "best kindle 2026",
      "e-reader comparison",
      "amazon kindle comparison",
    ].forEach((keyword) => baseKeywords.add(keyword));
  }

  return [...baseKeywords];
}

function getMetaDescription(article: (typeof ARTICLE_DATA)[string]) {
  return article.snippet || article.intro;
}

export async function generateStaticParams() {
  return Object.keys(ARTICLE_DATA).map((slug) => ({ slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  _parent: ResolvingMetadata,
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
    description: getMetaDescription(article),
    keywords: getComparisonKeywords(article),
    openGraph: {
      title: article.title,
      description: getMetaDescription(article),
      url: `${SITE_CONFIG.url}/compare/${slug}`,
      type: "article",
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: `${SITE_CONFIG.url}/compare/${slug}/opengraph-image`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: getMetaDescription(article),
      images: [`${SITE_CONFIG.url}/compare/${slug}/opengraph-image`],
    },
    robots: {
      index: true,
      follow: true,
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
    notFound();
  }

  // Attempt to find full product data for better schema
  const productAData = article.productA.slug
    ? PRODUCT_DATA[article.productA.slug]
    : null;
  const productBData = article.productB.slug
    ? PRODUCT_DATA[article.productB.slug]
    : null;

  const winnerRef = article.verdict.overallWinner.toLowerCase();
  const winnerData =
    productAData &&
    winnerRef.includes(productAData.name.toLowerCase().split(" ")[0])
      ? productAData
      : productBData &&
          winnerRef.includes(productBData.name.toLowerCase().split(" ")[0])
        ? productBData
        : null;
  const winnerBrand = winnerData ? getBrandName(winnerData.name) : undefined;
  const compareUrl = `${SITE_CONFIG.url}/compare/${slug}`;
  const metaDescription = getMetaDescription(article);
  const categoryUrl = `${SITE_CONFIG.url}/category/${CATEGORIES.find((c) => c.name.toLowerCase().replace(" guides", "").trim() === article.category.toLowerCase().replace(" guides", "").trim())?.slug || article.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`;
  const ogImageUrl = `${SITE_CONFIG.url}/compare/${slug}/opengraph-image`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": compareUrl,
    },
    headline: article.title,
    description: metaDescription,
    abstract: metaDescription,
    image: [ogImageUrl],
    about: [
      {
        "@type": "Product",
        name: article.productA.name,
        image: article.productA.image,
        url: article.productA.slug
          ? `${SITE_CONFIG.url}/product/${article.productA.slug}`
          : undefined,
      },
      {
        "@type": "Product",
        name: article.productB.name,
        image: article.productB.image,
        url: article.productB.slug
          ? `${SITE_CONFIG.url}/product/${article.productB.slug}`
          : undefined,
      },
    ],
    author: {
      "@type": "Person",
      name: article.author,
      url: `${SITE_CONFIG.url}/about`,
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
      },
    },
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    articleSection: article.category,
    keywords: getComparisonKeywords(article),
  };

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "Review",
    inLanguage: "en-US",
    isAccessibleForFree: true,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": compareUrl,
    },
    headline: article.title,
    description: metaDescription,
    abstract: metaDescription,
    image: [ogImageUrl],
    itemReviewed: {
      "@type": "ProductGroup",
      name: `${article.productA.name} vs ${article.productB.name}`,
      hasVariant: [
        {
          "@type": "Product",
          name: article.productA.name,
          image: article.productA.image,
          url: article.productA.slug
            ? `${SITE_CONFIG.url}/product/${article.productA.slug}`
            : undefined,
        },
        {
          "@type": "Product",
          name: article.productB.name,
          image: article.productB.image,
          url: article.productB.slug
            ? `${SITE_CONFIG.url}/product/${article.productB.slug}`
            : undefined,
        },
      ],
    },
    author: {
      "@type": "Person",
      name: article.author,
      url: `${SITE_CONFIG.url}/about`,
    },
    datePublished: new Date(article.date).toISOString(),
    dateModified: new Date(article.date).toISOString(),
    reviewRating: {
      "@type": "Rating",
      ratingValue: winnerData?.rating || "4.5",
      bestRating: "5",
    },
    reviewBody: article.verdict.summary,
    keywords: getComparisonKeywords(article),
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.url}${SITE_CONFIG.ogImage}`,
      },
    },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: `${article.productA.name} vs ${article.productB.name}`,
    itemListOrder: "https://schema.org/ItemListUnordered",
    numberOfItems: 2,
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        url: article.productA.slug
          ? `${SITE_CONFIG.url}/product/${article.productA.slug}`
          : article.productA.amazonUrl,
        name: article.productA.name,
      },
      {
        "@type": "ListItem",
        position: 2,
        url: article.productB.slug
          ? `${SITE_CONFIG.url}/product/${article.productB.slug}`
          : article.productB.amazonUrl,
        name: article.productB.name,
      },
    ],
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE_CONFIG.url,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.category,
        item: categoryUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: article.title,
        item: `${SITE_CONFIG.url}/compare/${slug}`,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {article.faqs && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: article.faqs.map((faq) => ({
                "@type": "Question",
                name: faq.question,
                acceptedAnswer: {
                  "@type": "Answer",
                  text: faq.answer,
                },
              })),
            }),
          }}
        />
      )}
      <SiteHeader />
      <ReadingProgress id={slug} />

      <article className="container max-w-4xl py-8 md:py-20 px-4 md:px-0">
        <ArticleClient article={article} />
        <ReviewDisclaimer />

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
          {article.sections.map((section: (typeof article.sections)[number], i: number) => (
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
            {COMPARISONS.filter(
              (c) => c.category === article.category && c.slug !== slug,
            )
              .slice(0, 2)
              .map((comp) => (
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
                        unoptimized
                        loading="lazy"
                      />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-[10px] font-bold">
                      VS
                    </div>
                    <div className="relative w-12 h-12 bg-white rounded-xl border border-border flex items-center justify-center p-1 group-hover:scale-105 transition-transform overflow-hidden">
                      <Image
                        src={comp.imageB}
                        alt={comp.productB}
                        fill
                        className="object-contain p-1"
                        sizes="48px"
                        unoptimized
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors leading-tight mb-2 line-clamp-2">
                    {comp.title}
                  </h3>
                  <div className="mt-auto flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest">
                    View Comparison{" "}
                    <ArrowRight className="h-3 w-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
          </div>
        </section>
        {/* FAQs Section */}
        {article.faqs && article.faqs.length > 0 && (
          <section className="mt-24 pt-16 border-t border-border">
            <h2 className="font-display text-3xl font-bold text-foreground mb-10 flex items-center gap-3">
              ❓ Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {article.faqs.map((faq: NonNullable<typeof article.faqs>[number], index: number) => (
                <div 
                  key={index} 
                  className="bg-card rounded-2xl border border-border p-6 md:p-8 hover:border-accent/20 transition-all"
                >
                  <h3 className="font-display text-xl font-bold text-foreground mb-4">
                    {faq.question}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}
      </article>

      <SiteFooter />
    </div>
  );
}
