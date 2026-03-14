import { type Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_CONFIG } from "@/lib/constants";
import { CheckCircle2, Heart, Shield, Users } from "lucide-react";

export const metadata: Metadata = {
  title: `About Us | ${SITE_CONFIG.name}`,
  description: `Learn more about ${SITE_CONFIG.name} and our mission to provide honest, real-world product comparisons for modern families.`,
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
              We test items so <span className="text-accent underline decoration-accent/20">you don't have to.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-medium">
                The Home Versus was founded on a simple realization: most product reviews aren't written by people who actually live with the products. We're changing that.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="container py-20 md:py-32">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="font-display text-3xl md:text-4xl font-black mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                In a world of sponsored posts and AI-generated listicles, finding honest advice for your home has never been harder. Our mission is to provide North American families with side-by-side, real-world comparisons that strip away the marketing fluff.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We don't just look at specs; we look at how a vacuum handles pet hair in a busy suburban home, or how a stroller folds when you're holding a crying toddler. That's the "Versus" difference.
              </p>
            </div>
            <div className="bg-secondary/20 rounded-[3rem] p-12 aspect-square flex items-center justify-center border border-border/40">
                <div className="text-center">
                    <div className="font-display text-6xl font-black text-accent mb-2">100%</div>
                    <div className="text-sm uppercase tracking-[0.3em] font-black text-foreground/40">In-Home Testing</div>
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
                <h3 className="font-display text-xl font-bold mb-4">Unbiased Honesty</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed lowercase">We buy most of the products we test. When we receive a review unit, it never guarantees a positive mention.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Real Family Input</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed lowercase">Our reviews incorporate feedback from real families who have lived with these products for weeks, not hours.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Spec Verification</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed lowercase">We independently verify battery life, suction power, and dimensions to ensure they match real-world performance.</p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-display text-xl font-bold mb-4">Utility First</h3>
                <p className="text-primary-foreground/60 text-sm leading-relaxed lowercase">A product can have all the features in the world, but if it's hard to use daily, it's not a winner in our book.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container py-24 md:py-32 text-center">
          <div className="max-w-2xl mx-auto bg-secondary/20 rounded-[3rem] p-12 md:p-20 border border-border/40">
            <h2 className="font-display text-3xl md:text-4xl font-black mb-6">Have a Question?</h2>
            <p className="text-lg text-muted-foreground mb-10">
              We're always looking for new products to test or specific scenarios to investigate. Drop us a line if you have a suggestion.
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
