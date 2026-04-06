import { ShieldCheck, Info } from "lucide-react";
import Link from "next/link";

const ReviewDisclaimer = () => {
  return (
    <div className="bg-secondary/20 border border-border/40 rounded-3xl p-6 md:p-8 mb-12">
      <div className="flex items-start gap-4">
        <div className="p-2 bg-accent/10 rounded-xl shrink-0">
          <ShieldCheck className="h-6 w-6 text-accent" />
        </div>
        <div>
          <h4 className="font-display font-bold text-foreground mb-2 flex items-center gap-2">
            Editorial Integrity & Disclaimer
          </h4>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Content on <span className="text-foreground font-bold italic">TheHomeVersus</span> may combine editorial research, product documentation, retailer information, customer feedback patterns, and firsthand notes when explicitly available. Performance can vary by usage, environment, and product revision.
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-[11px] text-muted-foreground/70 italic leading-relaxed">
              * We may earn from qualifying purchases through affiliate links, but that does not guarantee favorable coverage.
            </p>
            <p className="text-[11px] text-muted-foreground/70 italic leading-relaxed flex items-start gap-1.5">
              <Info className="h-3 w-3 mt-0.5 shrink-0" />
              Verify final specs, compatibility, pricing, and safety information with the manufacturer or retailer before purchase. See our{" "}
              <Link href="/methodology" className="text-foreground underline underline-offset-2">
                methodology
              </Link>{" "}
              and{" "}
              <Link href="/affiliate-disclosure" className="text-foreground underline underline-offset-2">
                affiliate disclosure
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDisclaimer;
