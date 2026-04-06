import { type Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_CONFIG } from "@/lib/constants";
import { CheckCircle2, Heart, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${SITE_CONFIG.name}`,
  description: `Learn more about ${SITE_CONFIG.name} and our mission to provide honest, real-world product comparisons for modern families.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 lowercase-links">
      <SiteHeader />

      <main>
        {/* Hero Section */}
        <section className="bg-secondary/30 py-20 md:py-32 border-b border-border/50">
          <div className="container max-w-4xl text-center">
            <h1 className="font-display text-5xl md:text-7xl font-black text-foreground mb-8">
              We compare products so <span className="text-accent underline decoration-accent/20">you can decide faster.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                The Home Versus exists to make crowded product categories easier to understand with cleaner comparisons, practical summaries, and transparent editorial notes.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="container py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Shopping content is often either too shallow to be useful or too promotional to be trusted. Our goal is to build product pages and comparison articles that surface the actual tradeoffs: what a product does well, where it falls short, and who should skip it.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Some articles rely on structured research, manufacturer documentation, retailer details, and broad customer feedback patterns. When firsthand use or hands-on notes are available, we aim to say that directly instead of implying it everywhere.
              </p>
            </div>
            <div className="bg-secondary/20 rounded-[3rem] p-12 aspect-square flex items-center justify-center border border-border/40">
                <div className="text-center">
                    <div className="font-display text-6xl font-black text-accent mb-2">Clear</div>
                    <div className="text-sm uppercase tracking-[0.3em] font-black text-foreground/40">Editorial Standards</div>
                </div>
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="bg-primary text-primary-foreground py-24 md:py-32">
          <div className="container">
            <div className="text-center max-w-2xl mx-auto mb-20">
              <h2 className="font-display text-4xl md:text-5xl font-black mb-6">What We Stand For</h2>
              <p className="text-primary-foreground/70 text-lg">Our core principles guide every review, every comparison, and every recommendation we make.</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Transparent Monetization</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed lowercase">We disclose affiliate relationships clearly and keep monetization separate from the main editorial judgment of a page.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Useful Reader Focus</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed lowercase">We organize content around common buying questions, ownership friction, and category-specific tradeoffs instead of generic marketing copy.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Source Cross-Checks</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed lowercase">We cross-check specs, included accessories, sizing, and positioning across multiple retailer and manufacturer sources before publishing.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Utility First</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed lowercase">The best recommendation is the one that fits the reader&apos;s use case, budget, space, and tolerance for maintenance.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container py-24 md:py-32 text-center">
          <div className="max-w-2xl mx-auto bg-secondary/20 rounded-[3rem] p-12 md:p-20 border border-border/40">
            <h2 className="font-display text-3xl md:text-4xl font-black mb-6">Have a Question?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              If you want us to cover a category, correct an error, or review a page for accuracy, contact us and we&apos;ll take a look.
            </p>
            <a 
              href={`mailto:${SITE_CONFIG.contactEmail}`} 
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-2xl font-bold hover:shadow-xl transition-all"
            >
              Contact Our Team
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
