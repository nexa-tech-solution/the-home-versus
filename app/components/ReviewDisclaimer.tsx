import { ShieldCheck, Info } from "lucide-react";

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
            All reviews on <span className="text-foreground font-bold italic">TheHomeVersus</span> are based on our hands-on testing and subjective experiences. While we strive for absolute accuracy, product performance can vary based on individual usage, environments, and manufacturing batches. 
          </p>
          <div className="mt-4 flex flex-col gap-2">
            <p className="text-[11px] text-muted-foreground/70 italic leading-relaxed">
              * We do not receive direct payment for product reviews. Our opinions remain our own.
            </p>
            <p className="text-[11px] text-muted-foreground/70 italic leading-relaxed flex items-start gap-1.5">
              <Info className="h-3 w-3 mt-0.5 shrink-0" />
              Users are encouraged to verify technical specs and safety warnings with the manufacturer before purchase. We are not liable for any issues, damages, or dissatisfaction resulting from product use based on our content.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewDisclaimer;
