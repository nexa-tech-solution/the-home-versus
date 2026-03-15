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
import ProductMediaGallery from "@/components/ProductMediaGallery";
import Image from "next/image";
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
    keywords: [
      product.category,
      product.name,
      product.name.split(" ")[0], // Brand name usually
      "review",
      "home testing",
      "best price",
    ],
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
        "name": product.category,
        "item": `${SITE_CONFIG.url}/category/${product.category.toLowerCase().replace(/ & /g, "-").replace(/ /g, "-")}`
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": product.name,
        "item": `${SITE_CONFIG.url}/product/${slug}`
      }
    ]
  };

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
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
        <section className="grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-16 mb-24 items-start">
          <div className="lg:sticky lg:top-32">
            {product.media && product.media.length > 0 ? (
              <ProductMediaGallery
                productName={product.name}
                media={product.media}
                showTitle={false}
              />
            ) : (
              <div className="relative aspect-square rounded-3xl overflow-hidden bg-white border border-border shadow-2xl p-12 flex items-center justify-center">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  priority
                  className="object-contain p-12 hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-8 left-8 bg-accent text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-xl">
                  Expert Review
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-8">
              <span className="px-3 py-1 bg-accent/5 text-accent border border-accent/10 rounded-full text-[10px] font-black uppercase tracking-widest">
                {product.category}
              </span>
              <div className="flex items-center text-amber-500 gap-1.5 ml-auto">
                <Star className="h-4 w-4 fill-current" />
                <span className="font-bold text-sm tracking-tight">
                  {product.rating}
                </span>
                <span className="text-muted-foreground text-[10px] font-medium opacity-60">
                  ({product.reviewCount} verified reviews)
                </span>
              </div>
            </div>

            <h1 className="font-display text-4xl lg:text-5xl font-bold text-foreground leading-[1.15] mb-8 tracking-tight">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 text-[11px] font-bold text-muted-foreground/60 uppercase tracking-widest mb-12">
              <span>By {product.author}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span>{product.date}</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {product.readTime ||
                  calculateReadTime(
                    product.intro +
                      " " +
                      product.sections.map((s) => s.content).join(" "),
                  )}
              </span>
            </div>

            <div className="relative mb-14 pl-8 border-l-2 border-accent/20">
              <span className="absolute -left-3 -top-4 text-6xl text-accent/10 font-serif">
                “
              </span>
              <p className="text-xl md:text-2xl font-medium text-foreground/90 leading-relaxed italic font-serif">
                {product.highlight}
              </p>
              <span className="block mt-4 text-[10px] font-black uppercase tracking-[0.3em] text-accent/40">
                The Bottom Line
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 pt-8 border-t border-border/40">
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/50 mb-1">
                  Current MSRP
                </p>
                <p className="text-4xl font-bold text-foreground">
                  {product.price}
                </p>
              </div>
              <a
                href={product.amazonUrl}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="w-full sm:flex-1 inline-flex items-center justify-center gap-3 py-5 bg-accent text-white rounded-2xl font-bold text-lg hover:bg-accent/90 transition-all shadow-xl shadow-accent/10 active:scale-95"
              >
                <ShoppingCart className="h-5 w-5" /> Check Price on Amazon
              </a>
            </div>

            <p className="mt-4 text-[10px] text-muted-foreground/60 font-medium italic">
              * Prices are for reference only. Check Amazon for the latest deals and accurate pricing.
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="prose prose-zinc dark:prose-invert max-w-none mb-20 bg-card p-8 md:p-12 rounded-3xl border border-border shadow-sm">
          <h2 className="font-display text-3xl font-bold mb-6">Introduction</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            {product.intro}
          </p>
        </section>

        {/* Ad Slot - Post Intro */}
        <AdSlot label="Curated Discovery" className="mb-20" />

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

        {/* Ad Slot - Post Content */}
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
                  <div className="w-20 h-20 relative shrink-0 bg-white rounded-2xl border border-border flex items-center justify-center p-2 group-hover:scale-105 transition-transform overflow-hidden">
                    <Image
                      src={comp.imageA}
                      alt={comp.title}
                      fill
                      className="object-contain p-2"
                      sizes="80px"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-bold text-lg text-foreground group-hover:text-accent transition-colors leading-tight line-clamp-2">
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
          <h2 className="font-display text-2xl font-bold mb-10 text-foreground">
            Other Recommended Products
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            {product.relatedProducts.map((p) => (
              <div
                key={p.slug}
                className="group relative flex flex-col bg-white rounded-[2rem] border border-border/50 p-5 hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500"
              >
                <div className="aspect-[4/3] bg-secondary/30 rounded-[1.5rem] mb-6 overflow-hidden relative">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 640px) 100vw, 40vw"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-[10px] font-black text-accent uppercase tracking-widest shadow-sm">
                    Top Rated
                  </div>
                </div>

                <div className="px-2 flex-1 flex flex-col">
                  <h3 className="font-display text-lg font-bold text-foreground mb-3 leading-snug line-clamp-2 group-hover:text-accent transition-colors">
                    {p.name}
                  </h3>

                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-border/40">
                    <span className="text-xl font-bold text-foreground/80">
                      {p.price}
                    </span>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-accent/60 group-hover:text-accent transition-colors">
                      View Review
                      <div className="h-8 w-8 rounded-full bg-accent/5 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-all">
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </div>
                </div>

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
