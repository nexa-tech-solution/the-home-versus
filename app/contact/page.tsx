import { type Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Contact | ${SITE_CONFIG.name}`,
  description: `Contact ${SITE_CONFIG.name} for corrections, editorial questions, and business inquiries.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/contact`,
  },
};

const contactTopics = [
  "Request a correction or report outdated information",
  "Suggest a product category or comparison to cover next",
  "Ask about affiliate disclosure, editorial policy, or partnerships",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30">
      <SiteHeader />

      <main className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-8">
            Contact <span className="text-accent underline decoration-accent/20">Us</span>
          </h1>

          <div className="rounded-[2rem] border border-border/40 bg-secondary/20 p-8 md:p-10 mb-10">
            <p className="text-lg text-muted-foreground leading-relaxed mb-6">
              The fastest way to reach us is by email.
            </p>
            <a
              href={`mailto:${SITE_CONFIG.contactEmail}`}
              className="inline-flex items-center rounded-2xl bg-primary px-6 py-4 font-bold text-primary-foreground"
            >
              {SITE_CONFIG.contactEmail}
            </a>
          </div>

          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            <h2 className="font-display text-2xl font-bold text-foreground mt-0 mb-4 lowercase">
              Common reasons readers contact us
            </h2>
            <ul>
              {contactTopics.map((topic) => (
                <li key={topic}>{topic}</li>
              ))}
            </ul>

            <p>
              If your message is about a factual correction, including the page URL and the exact issue helps us review it faster.
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
