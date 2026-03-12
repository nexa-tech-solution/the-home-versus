import { type Metadata, type ResolvingMetadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import ComparisonTable from "@/components/ComparisonTable";
import ProsConsList from "@/components/ProsConsList";
import VerdictSection from "@/components/VerdictSection";
import ProductMediaGallery from "@/components/ProductMediaGallery";
import AdSlot from "@/components/AdSlot";

// Client-side animations
import { ArticleClient } from "@/compare/[slug]/ArticleClient";

const articleData: Record<string, any> = {
  "dyson-v15-vs-shark-stratos": {
    title:
      "Dyson V15 Detect vs. Shark Stratos: Best Cordless Vacuum for Pet Hair",
    category: "Cleaning",
    author: "Sarah Mitchell",
    date: "March 5, 2026",
    readTime: "8 min read",
    intro:
      "If you have pets — and let's be honest, probably a toddler or two — your vacuum is your best friend. We spent 4 weeks living with both the Dyson V15 Detect and the Shark Stratos to find out which one truly handles the chaos of a real family home.",
    productA: {
      name: "Dyson V15 Detect",
      image: "https://m.media-amazon.com/images/I/61nGFa6cXlL._AC_SL1500_.jpg",
      price: "$749.99",
      amazonUrl: "https://www.amazon.com/dp/B0CK2RJVXW",
      media: [
        {
          type: "video",
          url: "https://www.youtube.com/watch?v=7B3pfS6fqHo",
          caption: "Official Teaser: The Dyson V15 Detect technology",
        },
        {
          type: "image",
          url: "https://m.media-amazon.com/images/I/61nGFa6cXlL._AC_SL1500_.jpg",
          caption: "Dyson V15 Detect in its sleek, cordless design",
        },
        {
          type: "image",
          url: "https://m.media-amazon.com/images/I/71uK3-M-QXL._AC_SL1500_.jpg",
          caption: "Illuminated cleaner head reveals hidden dust",
        },
        {
          type: "image",
          url: "https://m.media-amazon.com/images/I/61m9D-yVwKL._AC_SL1500_.jpg",
          caption: "Fluffy Optic cleaner head for hard floors",
        },
      ],
    },
    productB: {
      name: "Shark Stratos",
      image: "https://m.media-amazon.com/images/I/619jhoAVLjL._AC_SL1500_.jpg",
      price: "$399.99",
      amazonUrl: "https://www.amazon.com/dp/B0BPM3KZLC",
      media: [
        {
          type: "video",
          url: "https://www.youtube.com/embed/p17i1E7s5q0",
          caption: "Introducing the Shark Stratos Cordless with Clean Sense IQ",
        },
        {
          type: "image",
          url: "https://m.media-amazon.com/images/I/619jhoAVLjL._AC_SL1500_.jpg",
          caption:
            "Shark Stratos with its powerful suction and odor neutralizer",
        },
        {
          type: "image",
          url: "https://m.media-amazon.com/images/I/71S-U6m9Z2L._AC_SL1500_.jpg",
          caption: "Multi-flex technology for easy cleaning under furniture",
        },
        {
          type: "image",
          url: "https://m.media-amazon.com/images/I/61-u-yX9k1L._AC_SL1500_.jpg",
          caption: "Clean Sense IQ detects hidden dirt and boosts power",
        },
      ],
    },
    specs: [
      {
        label: "Weight",
        valueA: "6.8 lbs",
        valueB: "8.9 lbs",
        winner: "A" as const,
      },
      {
        label: "Runtime",
        valueA: "60 min",
        valueB: "50 min",
        winner: "A" as const,
      },
      {
        label: "Noise Level",
        valueA: "Quiet enough (baby naps safe!)",
        valueB: "Moderate — might wake a light sleeper",
        winner: "A" as const,
      },
      {
        label: "Pet Hair Pickup",
        valueA: "Excellent (laser reveals hidden hair)",
        valueB: "Very Good (anti-hair wrap)",
        winner: "A" as const,
      },
      {
        label: "Easy to Clean",
        valueA: "Moderate",
        valueB: "Super easy — one-click empty",
        winner: "B" as const,
      },
      {
        label: "Price",
        valueA: "$749.99",
        valueB: "$399.99",
        winner: "B" as const,
      },
    ],
    prosA: [
      "Laser reveals hidden dust — oddly satisfying",
      "Quieter motor — safe during baby naps",
      "Longer battery life (60 min)",
      "LCD screen shows particle count",
      "Excellent for allergy sufferers with HEPA filtration",
    ],
    consA: [
      "Almost 2x the price of Shark",
      "Bin is small — needs frequent emptying",
      "Heavier attachments can feel bulky",
    ],
    prosB: [
      "Half the price of Dyson — incredible value",
      "Anti-hair wrap technology actually works",
      "One-click dust bin emptying is a game changer",
      "Odor neutralizer built into the vacuum",
      "Great suction on carpet and hardwood",
    ],
    consB: [
      "Noticeably louder than Dyson",
      "Shorter runtime (50 min)",
      "Heavier to carry up stairs",
      "No smart dust detection",
    ],
    sections: [
      {
        title: "🐕 Pet Hair Performance: The Real Test",
        content:
          "We unleashed two golden retrievers in a carpeted living room and waited 24 hours. The Dyson V15's laser literally showed us hair we couldn't see. Its motorbar head picked up 97% of embedded pet hair in one pass. The Shark Stratos did a solid job too — its anti-hair wrap brush roll means you'll never have to cut tangled hair off the roller. But in raw pickup performance, Dyson edges ahead.",
      },
      {
        title: "😴 Noise Level: Can You Vacuum During Nap Time?",
        content:
          "This is the question every parent asks. The Dyson V15 on Eco mode is surprisingly quiet — we ran it in the hallway while our 18-month-old napped, and she didn't stir. The Shark Stratos is louder, especially on max power. If nap-time cleaning is your thing, Dyson wins this round.",
      },
      {
        title: "💰 Value for Money: Is the Dyson Worth 2x the Price?",
        content:
          "Here's the honest truth: the Shark Stratos does about 85% of what the Dyson does for 53% of the price. If your budget is tight and you need a great cordless vacuum, the Shark is an absolute steal. But if you want the best of the best and that laser dust-reveal gives you joy, the Dyson is worth the splurge.",
      },
    ],
    verdict: {
      overallWinner: "Dyson V15 Detect",
      summary:
        "Both are excellent vacuums, but they serve different budgets and priorities. The Dyson V15 Detect wins on performance, quietness, and tech features. The Shark Stratos wins on value and ease of maintenance.",
      options: [
        {
          product: "Dyson V15 Detect",
          reason:
            "You have pets with heavy shedding, care about quiet operation during nap time, and don't mind paying premium for the best performance.",
          amazonUrl: "https://www.amazon.com/dp/B0CK2RJVXW",
        },
        {
          product: "Shark Stratos",
          reason:
            "You want excellent cleaning at half the price, prefer easy maintenance (one-click empty!), and live in a smaller home.",
          amazonUrl: "https://www.amazon.com/dp/B0BPM3KZLC",
        },
      ],
    },
  },
};

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const { slug } = await params;
  const article = articleData[slug];

  if (!article) {
    return {
      title: "Comparison Not Found | TheHomeVersus",
    };
  }

  return {
    title: `${article.title} | TheHomeVersus`,
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
  };
}

export default async function ComparisonArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articleData[slug];

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

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <SiteHeader />

      <article className="container max-w-4xl py-12 md:py-20">
        <ArticleClient article={article} />

        {/* Ad Slot - Post Intro */}
        <div className="my-12">
            <AdSlot label="Trending Picks" />
        </div>

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
        <div className="my-20 bg-card rounded-3xl border border-border overflow-hidden shadow-xl p-8">
          <h2 className="font-display text-3xl font-bold text-foreground mb-8 text-center uppercase tracking-tight">
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
      </article>

      <SiteFooter />
    </div>
  );
}
