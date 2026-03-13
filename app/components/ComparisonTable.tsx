import { ExternalLink, ArrowRight } from "lucide-react";
import Link from "next/link";

interface Spec {
  label: string;
  valueA: string;
  valueB: string;
  winner?: "A" | "B" | "tie";
}

interface ComparisonTableProps {
  productA: { name: string; image: string; price: string; amazonUrl: string; slug?: string };
  productB: { name: string; image: string; price: string; amazonUrl: string; slug?: string };
  specs: Spec[];
}

const ComparisonTable = ({ productA, productB, specs }: ComparisonTableProps) => {
  return (
    <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
      {/* Table Header */}
      <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr] border-b border-border">
        {/* Desktop Feature Label */}
        <div className="hidden md:flex items-end p-4 font-bold text-[10px] uppercase tracking-[0.2em] text-muted-foreground/60">
          Feature
        </div>
        
        {/* Product A Column Header */}
        <div className="relative p-4 text-center md:border-l border-border group/product">
          {productA.slug && (
            <Link href={`/product/${productA.slug}`} className="absolute inset-0 z-10" aria-label={`View ${productA.name} review`} />
          )}
          <div className="aspect-square w-16 h-16 mx-auto mb-3 bg-white rounded-lg p-1 border border-border/50 flex items-center justify-center group-hover/product:scale-105 transition-transform">
            <img src={productA.image} alt={`${productA.name} product photo`} className="max-w-full max-h-full object-contain" />
          </div>
          <h4 className="font-display font-bold text-[10px] md:text-sm text-foreground leading-tight mb-2 min-h-[2.5em] flex items-center justify-center group-hover/product:text-accent transition-colors">
            {productA.name}
            {productA.slug && <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover/product:opacity-100 transition-opacity" />}
          </h4>
          <p className="text-accent font-bold text-sm md:text-lg">{productA.price}</p>
        </div>

        {/* Product B Column Header */}
        <div className="relative p-4 text-center border-l border-border group/product">
          {productB.slug && (
            <Link href={`/product/${productB.slug}`} className="absolute inset-0 z-10" aria-label={`View ${productB.name} review`} />
          )}
          <div className="aspect-square w-16 h-16 mx-auto mb-3 bg-white rounded-lg p-1 border border-border/50 flex items-center justify-center group-hover/product:scale-105 transition-transform">
            <img src={productB.image} alt={`${productB.name} product photo`} className="max-w-full max-h-full object-contain" />
          </div>
          <h4 className="font-display font-bold text-[10px] md:text-sm text-foreground leading-tight mb-2 min-h-[2.5em] flex items-center justify-center group-hover/product:text-accent transition-colors">
            {productB.name}
            {productB.slug && <ArrowRight className="h-3 w-3 ml-1 opacity-0 group-hover/product:opacity-100 transition-opacity" />}
          </h4>
          <p className="text-accent font-bold text-sm md:text-lg">{productB.price}</p>
        </div>
      </div>

      {/* Table Body */}
      <div className="divide-y divide-border">
        {specs.map((spec, i) => (
          <div key={i} className="group">
            {/* Mobile Feature Label (Only visible on small screens) */}
            <div className="md:hidden px-4 py-2 bg-secondary/15 text-[10px] font-bold uppercase tracking-[0.15em] text-muted-foreground/70 border-b border-border/50">
              {spec.label}
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr]">
              {/* Desktop Feature Label */}
              <div className="hidden md:flex items-center px-4 py-4 text-sm font-semibold text-foreground bg-secondary/5 border-r border-border">
                {spec.label}
              </div>
              
              {/* Product A Value */}
              <div className={`p-4 text-center text-xs md:text-sm flex items-center justify-center border-border ${
                spec.winner === "A" ? "bg-winner/10 md:bg-winner/5 font-bold text-winner shadow-[inset_0_0_20px_rgba(34,197,94,0.05)]" : "text-muted-foreground"
              }`}>
                <span className="leading-snug">{spec.valueA}</span>
              </div>

              {/* Product B Value */}
              <div className={`p-4 text-center text-xs md:text-sm flex items-center justify-center border-l border-border ${
                spec.winner === "B" ? "bg-winner/10 md:bg-winner/5 font-bold text-winner shadow-[inset_0_0_20px_rgba(34,197,94,0.05)]" : "text-muted-foreground"
              }`}>
                <span className="leading-snug">{spec.valueB}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Row */}
      <div className="grid grid-cols-2 md:grid-cols-[1.2fr_1fr_1fr] border-t border-border bg-secondary/30">
        <div className="hidden md:block border-r border-border" />
        <div className="p-4 md:p-6 text-center">
          <a
            href={productA.amazonUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center gap-1.5 w-full py-3 bg-amazon text-amazon-foreground rounded-xl font-bold text-[10px] md:text-sm hover:brightness-105 transition-all shadow-md active:scale-95"
          >
            Check Price <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
          </a>
        </div>
        <div className="p-4 md:p-6 text-center border-l border-border">
          <a
            href={productB.amazonUrl}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="inline-flex items-center justify-center gap-1.5 w-full py-3 bg-amazon text-amazon-foreground rounded-xl font-bold text-[10px] md:text-sm hover:brightness-105 transition-all shadow-md active:scale-95"
          >
            Check Price <ExternalLink className="h-3 w-3 md:h-4 md:w-4" />
          </a>
        </div>
      </div>
    </div>


  );
};

export default ComparisonTable;
