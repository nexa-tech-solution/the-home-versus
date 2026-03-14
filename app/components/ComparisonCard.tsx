"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ComparisonCardProps {
  slug: string;
  title: string;
  category: string;
  productA: string;
  productB: string;
  imageA: string;
  imageB: string;
  snippet: string;
  winner?: string;
  index?: number;
}

const ComparisonCard = ({
  slug,
  title,
  category,
  productA,
  productB,
  imageA,
  imageB,
  snippet,
  winner,
  index = 0,
}: ComparisonCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.4 }}
      className="h-full"
    >
      <Link
        href={`/compare/${slug}`}
        className="group flex flex-col h-full rounded-4xl border border-border bg-card hover:shadow-2xl hover:shadow-accent/5 transition-all duration-500 overflow-hidden"
      >
        <div className="relative pt-6 px-6">
          <span className="inline-block px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-accent bg-accent/10 rounded-full mb-6">
            {category}
          </span>
          
          <div className="flex items-center justify-between gap-2 mb-8 relative">
            {/* VS Badge - Absolute center */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shadow-lg border-4 border-card group-hover:scale-110 transition-transform duration-500">
                    <span className="text-primary-foreground font-display font-black text-xs italic tracking-tighter">VS</span>
                </div>
            </div>

            {/* Product A */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full aspect-square max-w-[120px] relative mb-4 group-hover:-translate-x-2 transition-transform duration-500">
                <img 
                    src={imageA} 
                    alt={productA} 
                    className="w-full h-full object-contain relative z-0" 
                />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 text-center line-clamp-1 w-full px-2">{productA}</p>
            </div>

            {/* Product B */}
            <div className="flex-1 flex flex-col items-center">
              <div className="w-full aspect-square max-w-[120px] relative mb-4 group-hover:translate-x-2 transition-transform duration-500">
                <img 
                    src={imageB} 
                    alt={productB} 
                    className="w-full h-full object-contain relative z-0" 
                />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-foreground/40 text-center line-clamp-1 w-full px-2">{productB}</p>
            </div>
          </div>
        </div>

        <div className="px-8 pb-8 grow flex flex-col">
          <h3 className="font-display text-2xl font-black text-foreground leading-[1.2] mb-4 group-hover:text-accent transition-colors">
            {title}
          </h3>
          <p className="text-base text-muted-foreground leading-relaxed mb-8 line-clamp-3">
            {snippet}
          </p>

          <div className="mt-auto pt-6 border-t border-border/40 flex items-center justify-between gap-4">
            {winner && (
              <div className="flex items-center gap-2 bg-winner/5 px-4 py-2 rounded-full border border-winner/10">
                <span className="text-lg">🏆</span>
                <span className="text-[11px] font-black uppercase tracking-tight text-winner">
                    {winner}
                </span>
              </div>
            )}
            <span className="ml-auto inline-flex items-center gap-2 text-xs font-bold text-accent uppercase tracking-widest group-hover:gap-3 transition-all">
               Comparison <ArrowRight className="h-4 w-4" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ComparisonCard;
