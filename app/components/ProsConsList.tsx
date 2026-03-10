import { Check, X } from "lucide-react";

interface ProsConsListProps {
  productName: string;
  pros: string[];
  cons: string[];
}

const ProsConsList = ({ productName, pros, cons }: ProsConsListProps) => {
  return (
    <div className="rounded-xl border border-border bg-card p-6">
      <h3 className="font-display text-lg font-semibold text-foreground mb-4">{productName}</h3>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-pro mb-3">✅ Pros</p>
          <ul className="space-y-2">
            {pros.map((pro, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <Check className="h-4 w-4 text-pro flex-shrink-0 mt-0.5" />
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-wider text-con mb-3">❌ Cons</p>
          <ul className="space-y-2">
            {cons.map((con, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-foreground">
                <X className="h-4 w-4 text-con flex-shrink-0 mt-0.5" />
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProsConsList;
