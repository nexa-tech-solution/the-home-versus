import { ExternalLink } from "lucide-react";

interface Spec {
  label: string;
  valueA: string;
  valueB: string;
  winner?: "A" | "B" | "tie";
}

interface ComparisonTableProps {
  productA: { name: string; image: string; price: string; amazonUrl: string };
  productB: { name: string; image: string; price: string; amazonUrl: string };
  specs: Spec[];
}

const ComparisonTable = ({ productA, productB, specs }: ComparisonTableProps) => {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      {/* Header */}
      <div className="grid grid-cols-3 border-b border-border">
        <div className="comparison-table-cell font-medium text-muted-foreground text-xs uppercase tracking-wider flex items-end">
          Feature
        </div>
        <div className="comparison-table-cell text-center border-l border-border">
          <img src={productA.image} alt={productA.name} className="w-16 h-16 mx-auto object-contain mb-2" />
          <p className="font-display font-semibold text-sm text-foreground">{productA.name}</p>
          <p className="text-accent font-bold text-lg mt-1">{productA.price}</p>
        </div>
        <div className="comparison-table-cell text-center border-l border-border">
          <img src={productB.image} alt={productB.name} className="w-16 h-16 mx-auto object-contain mb-2" />
          <p className="font-display font-semibold text-sm text-foreground">{productB.name}</p>
          <p className="text-accent font-bold text-lg mt-1">{productB.price}</p>
        </div>
      </div>

      {/* Specs */}
      {specs.map((spec, i) => (
        <div key={i} className={`grid grid-cols-3 ${i < specs.length - 1 ? "border-b border-border" : ""}`}>
          <div className="comparison-table-cell font-medium text-foreground text-sm">
            {spec.label}
          </div>
          <div
            className={`comparison-table-cell text-center border-l border-border text-sm ${
              spec.winner === "A" ? "bg-winner/5 font-semibold text-winner" : "text-muted-foreground"
            }`}
          >
            {spec.valueA}
          </div>
          <div
            className={`comparison-table-cell text-center border-l border-border text-sm ${
              spec.winner === "B" ? "bg-winner/5 font-semibold text-winner" : "text-muted-foreground"
            }`}
          >
            {spec.valueB}
          </div>
        </div>
      ))}

      {/* CTA Row */}
      <div className="grid grid-cols-3 border-t border-border bg-secondary/50">
        <div className="comparison-table-cell" />
        <div className="comparison-table-cell text-center border-l border-border py-4">
          <a
            href={productA.amazonUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-amazon text-amazon-foreground rounded-lg font-semibold text-sm hover:brightness-110 transition-all shadow-sm"
          >
            Check Price <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
        <div className="comparison-table-cell text-center border-l border-border py-4">
          <a
            href={productB.amazonUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 bg-amazon text-amazon-foreground rounded-lg font-semibold text-sm hover:brightness-110 transition-all shadow-sm"
          >
            Check Price <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ComparisonTable;
