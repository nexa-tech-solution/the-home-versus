"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Star, ShoppingCart, ArrowRight } from "lucide-react";

interface ProductCardProps {
  slug: string;
  name: string;
  category: string;
  image: string;
  price: string;
  rating: number;
  highlight: string;
  index?: number;
}

const ProductCard = ({
  slug,
  name,
  category,
  image,
  price,
  rating,
  highlight,
  index = 0,
}: ProductCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="h-full"
    >
      <Link 
        href={`/product/${slug}`}
        className="group relative flex flex-col h-full bg-white rounded-3xl border border-border/40 overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-500"
      >
        {/* Simplified Image Container */}
        <div className="relative aspect-square overflow-hidden bg-[#F9F9F8]">
            {/* Minimalist Badges */}
            <div className="absolute top-4 left-4 z-10">
                <span className="px-2.5 py-1 bg-white/80 backdrop-blur-sm text-[9px] font-bold uppercase tracking-widest text-muted-foreground border border-border/30 rounded-md shadow-sm">
                    {category}
                </span>
            </div>
            
            <div className="absolute top-4 right-4 z-10 flex items-center gap-1 px-2 py-1 bg-amazon/5 rounded-md">
                <Star className="h-2.5 w-2.5 fill-amazon text-amazon" />
                <span className="text-[10px] font-bold text-foreground">{rating}</span>
            </div>

            {/* Main Product Image - Centered and Smaller */}
            <div className="absolute inset-0 flex items-center justify-center p-10">
                <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                />
            </div>
        </div>

        {/* Text Content - More compact and refined */}
        <div className="p-6 grow flex flex-col">
          <h3 className="font-display text-lg font-bold text-foreground leading-tight mb-2 group-hover:text-accent transition-colors duration-300">
            {name}
          </h3>
          <p className="text-xs text-muted-foreground leading-relaxed line-clamp-2 mb-4">
            {highlight}
          </p>
          
          <div className="mt-auto pt-4 border-t border-border/30 flex items-center justify-between">
            <span className="text-base font-bold text-foreground">{price}</span>
            <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
