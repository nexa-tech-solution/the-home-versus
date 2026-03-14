"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Home, Search, Package } from "lucide-react";
import ProductCard from "@/components/ProductCard";
import { categories } from "@/lib/data";
import AdSlot from "@/components/AdSlot";
import { SingleProductData } from "@/lib/constants/types";

interface ProductsClientProps {
  allProducts: SingleProductData[];
}

export default function ProductsClient({ allProducts }: ProductsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.highlight.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, allProducts]);

  return (
    <main>
      {/* Hero Section */}
      <section className="bg-linear-to-b from-secondary/50 to-background border-b border-border/50 py-16 md:py-24">
        <div className="container text-center">
          <nav className="flex items-center justify-center gap-2 text-sm font-medium text-muted-foreground mb-8">
            <Link href="/" className="hover:text-foreground transition-colors flex items-center gap-1">
              <Home className="h-4 w-4" /> Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Products</span>
          </nav>

          <h1 className="font-display text-4xl md:text-7xl font-black text-foreground tracking-tight mb-6 lowercase">
            Family <span className="text-accent underline decoration-accent/20 italic">Essentials.</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
              A curated selection of home gadgets and gear that actually pass the "Family Test." No filler, just the best performers.
          </p>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="sticky top-[72px] bg-background/80 backdrop-blur-md border-b border-border/40 z-10 py-4 overflow-x-auto no-scrollbar">
        <div className="container flex items-center justify-center gap-3 md:gap-6 min-w-max">
          <Link 
            href="/products"
            className="px-6 py-2 rounded-full bg-primary text-primary-foreground font-bold text-sm shadow-sm transition-all"
          >
            All Products
          </Link>
          {categories.map((cat) => (
            <Link 
              key={cat.slug}
              href={`/category/${cat.slug}`}
              className="px-6 py-2 rounded-full bg-secondary border border-border/40 hover:border-accent/40 text-foreground font-semibold text-sm transition-all hover:bg-accent/5"
            >
              {cat.name}
            </Link>
          ))}
        </div>
      </section>

      {/* Product Grid */}
      <section className="container py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-2">
              Our Top Picks
            </h2>
            <p className="text-muted-foreground flex items-center gap-2 uppercase tracking-widest text-xs font-bold">
              <span className="w-12 h-0.5 bg-accent/30 inline-block"></span>
              {searchQuery ? `Found ${filteredProducts.length} results` : `Reviewing ${allProducts.length} battle-tested products`}
            </p>
          </div>
          
          <div className="relative group max-w-sm w-full">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Find a specific product..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary/50 border border-border/40 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-background transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product, i) => (
            <ProductCard 
              key={product.slug} 
              {...product} 
              index={i} 
            />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-24 text-center">
            <Package className="h-16 w-16 text-muted-foreground/30 mx-auto mb-6" />
            <p className="text-xl text-muted-foreground">We couldn't find any products matching your search.</p>
          </div>
        )}

        {/* Ad Slot */}
        <div className="mt-24">
          <AdSlot label="Recommended for You" />
        </div>
      </section>

      {/* Brand Mission */}
      <section className="container pb-24">
          <div className="bg-secondary/40 rounded-[3rem] p-8 md:p-16 border border-border/60">
              <div className="max-w-4xl mx-auto text-center">
                  <h2 className="font-display text-3xl md:text-5xl font-black mb-8 leading-tight">
                      We don't just "Review". <br/>
                      We <span className="text-accent italic">Live</span> With Them.
                  </h2>
                  <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">
                      Choosing the right appliances for your home is overwhelming. Our team spends weeks putting every machine through the same real-world chaos your family faces daily. If it can't handle a toddler's spill or a pet's mess, it won't make our list.
                  </p>
                  <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all">
                      <span className="font-display text-2xl font-black">HONESTY</span>
                      <span className="font-display text-2xl font-black">UTILITY</span>
                      <span className="font-display text-2xl font-black">FAMILY</span>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
}
