import { type Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Methodology | ${SITE_CONFIG.name}`,
  description: `How ${SITE_CONFIG.name} researches, structures, updates, and discloses product comparisons.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/methodology`,
  },
};

const methodologySteps = [
  {
    title: "Category framing",
    body: "We start by identifying the decision a reader is actually making, such as corded vs cordless, compact vs full-size, or low-cost vs premium.",
  },
  {
    title: "Source collection",
    body: "We review manufacturer pages, retailer listings, included accessories, dimensions, warranty details, and broad customer-feedback themes before drafting.",
  },
  {
    title: "Comparison writing",
    body: "Articles are organized around tradeoffs, ownership friction, compatibility, and likely use cases rather than feature lists alone.",
  },
  {
    title: "Maintenance",
    body: "We update pages when pricing shifts materially, product lineups change, or we find inaccurate specs, outdated links, or broken references.",
  },
];

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <SiteHeader />

      <main className="container py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-8">
            Our <span className="text-accent underline decoration-accent/20">Methodology</span>
          </h1>

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            <p className="text-xl font-medium text-foreground">
              The Home Versus is designed to help readers compare products with fewer assumptions and more context. Not every page is created from the same kind of input, so we aim to be clear about what our content can and cannot promise.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">
              How pages are built
            </h2>
            <div className="grid gap-6 not-prose mt-6">
              {methodologySteps.map((step, index) => (
                <div key={step.title} className="rounded-3xl border border-border/40 bg-secondary/20 p-6">
                  <p className="text-[10px] uppercase tracking-[0.3em] font-black text-accent mb-3">
                    Step {index + 1}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">
              What we look for
            </h2>
            <p>
              We prioritize fit for use case, size and storage impact, maintenance burden, accessory value, warranty coverage, and the kinds of complaints that show up repeatedly across buyer feedback. When a product category depends heavily on durability or long-term ownership, we try to emphasize uncertainty instead of overstating confidence.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">
              What we do not claim
            </h2>
            <p>
              We do not treat every article as laboratory testing, and we do not assume every published claim from a brand is accurate without cross-checking. Some pages may contain firsthand notes, but readers should not assume hands-on testing unless the article says so clearly.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-4 lowercase">
              Corrections and updates
            </h2>
            <p>
              If you notice outdated specs, a broken affiliate link, or a misleading claim, email us at <span className="text-accent font-bold">{SITE_CONFIG.contactEmail}</span>. We review correction requests and update pages when warranted.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
