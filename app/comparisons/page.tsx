import { type Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { comparisons } from "@/lib/data";
import { SITE_CONFIG } from "@/lib/constants";
import ComparisonsClient from "./ComparisonsClient";

export const metadata: Metadata = {
  title: `All Comparisons | ${SITE_CONFIG.name}`,
  description: "Browse our complete library of side-by-side product comparisons to find the best gear for your home.",
  alternates: {
    canonical: `${SITE_CONFIG.url}/comparisons`,
  },
};

export default function ComparisonsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/30 lowercase-links">
      <SiteHeader />
      <ComparisonsClient initialComparisons={comparisons} />
      <SiteFooter />
    </div>
  );
}
