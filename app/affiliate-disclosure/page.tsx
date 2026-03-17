import { type Metadata } from "next";
import Link from "next/link";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { SITE_CONFIG } from "@/lib/constants";
import { AlertCircle, ExternalLink } from "lucide-react";

export const metadata: Metadata = {
  title: `Affiliate Disclosure | ${SITE_CONFIG.name}`,
  description: `Find out how ${SITE_CONFIG.name} supports our testing efforts through affiliate partnerships.`,
  alternates: {
    canonical: `${SITE_CONFIG.url}/affiliate-disclosure`,
  },
};

export default function AffiliatePage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 lowercase-links">
      <SiteHeader />

      <main className="container py-16 md:py-24">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <span className="p-2 bg-accent/10 rounded-xl">
                <AlertCircle className="h-6 w-6 text-accent" />
            </span>
            <span className="text-[10px] uppercase font-black tracking-[0.3em] text-accent">Transparency First</span>
          </div>
          
          <h1 className="font-display text-4xl md:text-6xl font-black text-foreground mb-8">
            Affiliate <span className="text-accent underline decoration-accent/20 italic">Disclosure.</span>
          </h1>
          
          <div className="prose prose-lg dark:prose-invert max-w-none text-muted-foreground leading-relaxed">
            <p className="text-xl font-medium text-foreground mb-10 leading-relaxed">
              In compliance with the FTC guidelines, please assume the following about links and posts on this site:
            </p>

            <div className="bg-secondary/30 rounded-3xl p-8 mb-12 border border-border/40">
                <p className="text-foreground font-bold mb-4">The Short Version:</p>
                <p className="text-sm">
                    Many of the links on <span className="text-foreground font-bold">{SITE_CONFIG.name}</span> are affiliate links. This means that if you click on the link and purchase the item, we may receive an affiliate commission at <span className="text-accent underline">no extra cost to you</span>.
                </p>
            </div>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-6 lowercase">What is an Affiliate Link?</h2>
            <p>
              An affiliate link is a special URL that contains a tracking code. When you click an affiliate link on our site and make a purchase, the retailer pays us a small percentage of the sale price. This commission is what allows us to pay our testers, maintain this website, and purchase the products we review.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-6 lowercase">Amazon Associates Program</h2>
            <p>
              The Home Versus is a participant in the Amazon Services LLC Associates Program, an affiliate advertising program designed to provide a means for sites to earn advertising fees by advertising and linking to Amazon.com. As an Amazon Associate, we earn from qualifying purchases.
            </p>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-6 lowercase">Our Commitment to You</h2>
            <p className="mb-6">
              Our editorial content is not influenced by our affiliate partnerships. We don't get paid to write positive reviews. Our comparisons are based on actual testing and real-world results.
            </p>
            <ul className="space-y-4">
                <li className="flex gap-3">
                    <span className="h-6 w-6 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">1</span>
                    <span className="text-sm">If a product fails our "Family Test," we will say so, regardless of affiliate potential.</span>
                </li>
                <li className="flex gap-3">
                    <span className="h-6 w-6 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">2</span>
                    <span className="text-sm">We often link to multiple retailers (Amazon, Walmart, Best Buy) to help you find the best price.</span>
                </li>
                <li className="flex gap-3">
                    <span className="h-6 w-6 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0">3</span>
                    <span className="text-sm">We are consumers too, and we only recommend products we would (and often do) use in our own homes.</span>
                </li>
            </ul>

            <h2 className="font-display text-2xl font-bold text-foreground mt-12 mb-6 lowercase">Questions?</h2>
            <p>
              If you have any questions regarding our affiliate relationships or how we make money, please don't hesitate to reach out to us at <span className="text-accent font-bold italic underline">{SITE_CONFIG.contactEmail}</span>.
            </p>

            <div className="mt-20 pt-10 border-t border-border/40">
                <Link 
                    href="/about" 
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-accent hover:gap-4 transition-all"
                >
                    Learn more about our testing process <ExternalLink className="h-4 w-4" />
                </Link>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
