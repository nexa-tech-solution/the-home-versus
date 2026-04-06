import { type Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Editorial Policy | ${SITE_CONFIG.name}`,
  description: `The editorial standards, disclosure practices, and update rules used by ${SITE_CONFIG.name}.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/editorial-policy`,
  },
};

export default function EditorialPolicyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <SiteHeader />

      <main className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-8">
            Editorial <span className="text-accent underline decoration-accent/20">Policy</span>
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            <p className="text-xl font-medium text-foreground">
              Our editorial goal is simple: publish product content that is clear, specific, and honest about uncertainty.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">
              Independence
            </h2>
            <p>
              Affiliate relationships may support the site, but they do not guarantee favorable placement, language, or verdicts. If a product has obvious drawbacks, we want those weaknesses to appear in the page.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">
              Disclosure
            </h2>
            <p>
              We aim to label affiliate relationships clearly and keep them separate from the explanatory parts of an article. Readers should be able to understand why a product is recommended without having to click a retailer link.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">
              Accuracy
            </h2>
            <p>
              Specs, package contents, and prices can change. We try to review pages periodically, but the manufacturer or retailer should always be treated as the final source of truth before purchase.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">
              Corrections
            </h2>
            <p>
              When we find factual issues, we correct them as quickly as practical. If a mistake meaningfully affects the buying decision, we prefer fixing it over quietly leaving the page unchanged.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">
              Contact
            </h2>
            <p>
              Editorial questions, corrections, and partnership inquiries can be sent to <span className="text-accent font-bold">{SITE_CONFIG.contactEmail}</span>.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
