import { ExternalLink, Award } from "lucide-react";

interface VerdictOption {
  product: string;
  reason: string;
  amazonUrl: string;
}

interface VerdictSectionProps {
  overallWinner: string;
  summary: string;
  options: VerdictOption[];
}

const VerdictSection = ({ overallWinner, summary, options }: VerdictSectionProps) => {
  return (
    <div className="rounded-xl border-2 border-accent/30 bg-accent/5 p-6 md:p-8">
      <div className="flex items-center gap-3 mb-4">
        <Award className="h-6 w-6 text-accent" />
        <h2 className="font-display text-2xl font-bold text-foreground">The Verdict</h2>
      </div>

      <div className="flex items-center gap-2 mb-4">
        <span className="px-3 py-1 bg-winner text-winner-foreground rounded-full text-sm font-semibold">
          🏆 Overall Winner: {overallWinner}
        </span>
      </div>

      <p className="text-muted-foreground leading-relaxed mb-6">{summary}</p>

      <div className="grid md:grid-cols-2 gap-4">
        {options.map((opt, i) => (
          <div key={i} className="verdict-card">
            <p className="font-display font-semibold text-foreground mb-2">Choose {opt.product} if...</p>
            <p className="text-sm text-muted-foreground mb-4">{opt.reason}</p>
            <a
              href={opt.amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="inline-flex items-center gap-1.5 px-4 py-2 bg-amazon text-amazon-foreground rounded-lg font-semibold text-sm hover:brightness-110 transition-all shadow-sm"
            >
              Check Price on Amazon <ExternalLink className="h-3.5 w-3.5" />
            </a>
          </div>
        ))}
      </div>
      <div className="mt-8 pt-6 border-t border-accent/10">
        <p className="text-[10px] text-muted-foreground/60 font-medium italic text-center">
          * Prices are for reference only. Check Amazon for the latest deals and accurate pricing.
        </p>
      </div>
    </div>
  );
};

export default VerdictSection;
