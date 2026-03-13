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
    >
      <Link
        href={`/compare/${slug}`}
        className="group block rounded-xl border border-border bg-card hover:shadow-lg transition-all duration-300 overflow-hidden"
      >
        <div className="p-1">
          <span className="inline-block px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
            {category}
          </span>
        </div>

        <div className="flex items-center justify-center gap-4 py-6 px-4">
          <div className="text-center flex-1">
            <img src={imageA} alt={`${productA} product`} className="w-24 h-24 mx-auto object-contain mb-2" />
            <p className="text-xs font-medium text-foreground truncate">{productA}</p>
          </div>
          <div className="shrink-0 w-10 h-10 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-display font-bold text-sm">VS</span>
          </div>
          <div className="text-center flex-1">
            <img src={imageB} alt={`${productB} product`} className="w-24 h-24 mx-auto object-contain mb-2" />
            <p className="text-xs font-medium text-foreground truncate">{productB}</p>
          </div>
        </div>

        <div className="px-5 pb-5">
          <h3 className="font-display text-lg font-semibold text-foreground leading-snug mb-2 group-hover:text-accent transition-colors line-clamp-2">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2 mb-3">{snippet}</p>

          <div className="flex items-center justify-between">
            {winner && (
              <span className="text-xs font-semibold text-winner bg-winner/10 px-2.5 py-1 rounded-full">
                🏆 Winner: {winner}
              </span>
            )}
            <span className="ml-auto flex items-center gap-1 text-xs font-medium text-accent group-hover:gap-2 transition-all">
              Read comparison <ArrowRight className="h-3 w-3" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ComparisonCard;
