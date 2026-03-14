"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Home, Search } from "lucide-react";
import ComparisonCard from "@/components/ComparisonCard";
import AdSlot from "@/components/AdSlot";
import { categories } from "@/lib/data";
import { ComparisonSnippet } from "@/lib/constants/types";

interface ComparisonsClientProps {
  initialComparisons: ComparisonSnippet[];
}

export default function ComparisonsClient({ initialComparisons }: ComparisonsClientProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const filteredComparisons = useMemo(() => {
    return initialComparisons.filter((comp) =>
      comp.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.productA.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.productB.toLowerCase().includes(searchQuery.toLowerCase()) ||
      comp.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery, initialComparisons]);

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
            <span className="text-foreground">Comparisons</span>
          </nav>

          <h1 className="font-display text-4xl md:text-7xl font-black text-foreground tracking-tight mb-6">
            Expert <span className="text-accent underline decoration-accent/20">Comparisons</span>
          </h1>
          <p className="max-w-2xl mx-auto text-xl text-muted-foreground leading-relaxed">
            Every product in our library is tested in real-world scenarios. We strip away the marketing fluff to help you make informed decisions for your family.
          </p>
        </div>
      </section>

      {/* Categories Bar */}
      <section className="sticky top-[72px] bg-background/80 backdrop-blur-md border-b border-border/40 z-10 py-4 overflow-x-auto no-scrollbar">
        <div className="container flex items-center justify-center gap-3 md:gap-6 min-w-max">
          <Link 
            href="/comparisons"
            className="px-6 py-2 rounded-full bg-accent text-accent-foreground font-bold text-sm shadow-sm transition-all"
          >
            All
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

      {/* Main Content */}
      <section className="container py-12 md:py-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-black text-foreground mb-2">
              All Comparison Reviews
            </h2>
            <p className="text-muted-foreground flex items-center gap-2 uppercase tracking-widest text-xs font-bold">
              <span className="w-12 h-0.5 bg-accent/30 inline-block"></span>
              {searchQuery ? `Found ${filteredComparisons.length} matches` : `Showing ${initialComparisons.length} side-by-side tests`}
            </p>
          </div>
          
          <div className="relative group max-w-sm w-full">
            <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground group-focus-within:text-accent transition-colors" />
            </div>
            <input 
              type="text" 
              placeholder="Search products..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-secondary/50 border border-border/40 rounded-2xl py-4 pl-12 pr-4 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-accent/20 focus:bg-background transition-all"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
          {filteredComparisons.map((comp, i) => (
            <ComparisonCard key={comp.slug} {...comp} index={i} />
          ))}
        </div>

        {filteredComparisons.length === 0 && (
          <div className="py-20 text-center bg-secondary/20 rounded-[3rem] border border-dashed border-border/60">
            <p className="text-xl text-muted-foreground">No comparisons found for "{searchQuery}". Try another search!</p>
          </div>
        )}

        {/* Ad Slot */}
        <div className="mt-24">
          <AdSlot label="Featured Partnerships" />
        </div>
      </section>

      {/* Newsletter/CTA Section */}
      <section className="container pb-24">
          <div className="bg-primary text-primary-foreground rounded-[3rem] p-8 md:p-16 overflow-hidden relative group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl group-hover:bg-white/10 transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
              
              <div className="relative z-10 max-w-2xl">
                  <h2 className="font-display text-3xl md:text-5xl font-black mb-6 leading-tight">
                      Don't miss our next <span className="text-secondary italic">Battle Royale</span>.
                  </h2>
                  <p className="text-lg text-primary-foreground/80 mb-10 leading-relaxed font-medium capitalize">
                      We send one deep-dive comparison every week. No spam, just the facts to save you time and money.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-4">
                      <input 
                          type="email" 
                          placeholder="Enter your email" 
                          className="grow bg-white/10 border border-white/20 rounded-2xl px-6 py-4 placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all font-medium"
                      />
                      <button className="bg-white text-primary px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-secondary hover:text-secondary-foreground transition-all shadow-xl active:scale-95">
                          Join 15,000+ Readers
                      </button>
                  </div>
              </div>
          </div>
      </section>
    </main>
  );
}
