import { type Metadata, type ResolvingMetadata } from "next";
import Link from "next/link";
import {
  ArrowLeft,
  Clock,
  User,
  Star,
  CheckCircle2,
  XCircle,
  AlertCircle,
  ShoppingCart,
  ArrowRight,
} from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import AdSlot from "@/components/AdSlot";
import ReadingProgress from "@/components/ReadingProgress";
import { calculateReadTime } from "@/lib/utils";
import { SITE_CONFIG, PRODUCT_DATA } from "@/lib/constants";
import { getComparisonsByProductName } from "@/lib/data";

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const product = PRODUCT_DATA[slug];

  if (!product) {
    return {
      title: `Product Not Found | ${SITE_CONFIG.name}`,
    };
  }

  return {
    title: `${product.name} Review | ${SITE_CONFIG.name}`,
    description: product.intro,
    openGraph: {
      title: `${product.name} Review`,
      description: product.intro,
      images: [product.image],
    },
    alternates: {
      canonical: `${SITE_CONFIG.url}/product/${slug}`,
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = PRODUCT_DATA[slug];

  if (!product) {
    return (
      <div className="min-h-screen bg-background text-foreground">
        <SiteHeader />
        <div className="container py-20 text-center">
          <h1 className="font-display text-4xl font-bold text-foreground mb-6">
            Product Review Not Found
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

  const relatedComparisons = getComparisonsByProductName(product.name);

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: product.image,
    description: product.intro,
    brand: {
      "@type": "Brand",
      name: product.name.split(" ")[0],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: product.rating,
      reviewCount: product.reviewCount,
    },
    offers: {
      "@type": "Offer",
      url: product.amazonUrl,
      priceCurrency: "USD",
      price: product.price.replace("$", "").replace(",", ""),
      availability: "https://schema.org/InStock",
    },
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <SiteHeader />
      <ReadingProgress id={slug} />

      <main className="container max-w-5xl py-8 md:py-20 px-4 md:px-0">
        {/* Breadcrumb */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-base font-bold text-accent hover:gap-3 transition-all mb-10"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all reviews
        </Link>

        {/* Product Hero */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-border shadow-2xl p-8 flex items-center justify-center">
            <img
              src={product.image}
              alt={product.name}
              className="max-w-full max-h-full object-contain"
            />
            <div className="absolute top-6 left-6 bg-accent text-white px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest shadow-lg">
              Expert Review
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-bold uppercase tracking-wider">
                {product.category}
              </span>
              <div className="flex items-center text-amber-500 gap-1 ml-auto">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-bold text-sm">{product.rating}</span>
                <span className="text-muted-foreground text-xs font-medium">
                  ({product.reviewCount} reviews)
                </span>
              </div>
            </div>

            <h1 className="font-display text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              {product.name}
            </h1>

            <div className="relative mb-10 overflow-hidden bg-accent/[0.03] p-8 md:p-10 border-l-4 border-accent/40 group">
              <div className="flex flex-col md:flex-row items-start gap-6">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white border border-accent/20 text-accent shadow-sm">
                  <span className="text-lg">✨</span>
                </div>
                <div>
                  <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-accent/60 mb-2">
                    Editor's Takeaway
                  </span>
                  <p className="text-lg md:text-xl font-medium text-foreground leading-relaxed italic">
                    "{product.highlight}"
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-medium mb-10">
              <span className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-lg">
                <User className="h-4 w-4" /> {product.author}
              </span>
              <span className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-lg">
                <Clock className="h-4 w-4" />{" "}
                {product.readTime ||
                  calculateReadTime(
                    product.intro +
                      " " +
                      product.sections.map((s) => s.content).join(" "),
                  )}
              </span>
              <span className="opacity-70">{product.date}</span>
            </div>

            <div className="flex items-center gap-6 mt-auto">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-1">
                  MSRP
                </p>
                <p className="text-3xl font-bold text-accent">
                  {product.price}
                </p>
              </div>
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="flex-1 inline-flex items-center justify-center gap-3 py-4 bg-amazon text-amazon-foreground rounded-2xl font-bold text-lg hover:brightness-105 transition-all shadow-xl active:scale-95"
              >
                <ShoppingCart className="h-5 w-5" /> Check Price on Amazon
              </a>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="prose prose-zinc dark:prose-invert max-w-none mb-20 bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm">
          <h2 className="font-display text-3xl font-bold mb-6">Introduction</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {product.intro}
          </p>
        </section>

        {/* Pros & Cons */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
          <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="bg-pro/10 p-4 border-b border-border flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-pro" />
              <h3 className="font-display font-bold text-pro uppercase tracking-widest text-sm">
                The Positives (Pros)
              </h3>
            </div>
            <ul className="p-8 space-y-4">
              {product.pros.map((pro, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-foreground font-medium"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-pro shrink-0" />
                  {pro}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="bg-con/10 p-4 border-b border-border flex items-center gap-2">
              <XCircle className="h-5 w-5 text-con" />
              <h3 className="font-display font-bold text-con uppercase tracking-widest text-sm">
                Room for Improvement (Cons)
              </h3>
            </div>
            <ul className="p-8 space-y-4">
              {product.cons.map((con, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-foreground font-medium"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-con shrink-0" />
                  {con}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Specs Table */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold mb-8">
            Technical Specifications
          </h2>
          <div className="rounded-3xl border border-border bg-card overflow-hidden shadow-sm">
            <div className="divide-y divide-border">
              {product.specs.map((spec, i) => (
                <div
                  key={i}
                  className="grid grid-cols-2 hover:bg-secondary/5 transition-colors"
                >
                  <div className="px-8 py-4 font-bold text-muted-foreground text-sm uppercase tracking-widest border-r border-border bg-secondary/10">
                    {spec.label}
                  </div>
                  <div className="px-8 py-4 font-bold text-foreground">
                    {spec.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Review Sections */}
        <div className="space-y-20 mb-20">
          {product.sections.map((section, i) => (
            <section
              key={i}
              className="prose prose-zinc dark:prose-invert max-w-none"
            >
              <h2 className="font-display text-4xl font-bold text-foreground mb-8 border-b border-border pb-4">
                {section.title}
              </h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                {section.content}
              </p>
            </section>
          ))}
        </div>

        {/* Ad Slot */}
        <AdSlot label="Related Deals" className="mb-20" />

        {/* Related Comparisons */}
        {relatedComparisons.length > 0 && (
          <section className="mb-20">
            <h2 className="font-display text-3xl font-bold mb-8 flex items-center gap-3">
              <AlertCircle className="h-8 w-8 text-accent" />
              Top Comparisons for this Product
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedComparisons.map((comp) => (
                <Link
                  key={comp.slug}
                  href={`/compare/${comp.slug}`}
                  className="group flex items-center gap-6 p-6 bg-card rounded-3xl border border-border hover:border-accent/40 hover:shadow-xl transition-all"
                >
                  <div className="w-20 h-20 shrink-0 bg-white rounded-2xl border border-border flex items-center justify-center p-2 group-hover:scale-105 transition-transform">
                    <img
                      src={comp.imageA}
                      alt=""
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors leading-tight">
                      {comp.title}
                    </h3>
                    <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-2">
                      {comp.category} • Review Inside
                    </p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-accent group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Related Products */}
        <section className="mb-20">
          <h2 className="font-display text-3xl font-bold mb-8">
            Other Recommended Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {product.relatedProducts.map((p) => (
              <div
                key={p.slug}
                className="group relative bg-card rounded-3xl border border-border p-6 hover:shadow-2xl transition-all"
              >
                <div className="aspect-video bg-white rounded-2xl mb-6 p-6 flex items-center justify-center border border-border/50 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="max-w-full max-h-full object-contain group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-4">
                  {p.name}
                </h3>
                <div className="flex items-center justify-between mt-auto">
                  <span className="text-2xl font-bold text-accent">
                    {p.price}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                      See more
                    </span>
                    <div className="h-8 w-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
                {/* Overlay Link - future proofing if we have review pages for all products */}
                <Link
                  href={`/product/${p.slug}`}
                  className="absolute inset-0 z-10"
                  aria-label={`View ${p.name}`}
                />
              </div>
            ))}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
