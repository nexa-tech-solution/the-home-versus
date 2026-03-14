"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ComparisonCard from "@/components/ComparisonCard";

interface HomeClientProps {
  categories: { name: string; slug: string; icon: string; count: number }[];
  comparisons: any[];
  heroImage: StaticImageData | string;
}

export function HomeClient({ categories, comparisons, heroImage }: HomeClientProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden" aria-labelledby="hero-heading">
        <div className="container py-16 md:py-24">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-6"
              >
                Tested by 50,000+ North American Families
              </motion.span>
              <h1 id="hero-heading" className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
                Real Reviews for <span className="text-accent italic">Real Moms.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-10">
                Side-by-side product comparisons tested by real families across the US and Canada. 
                We find what actually works for busy households, so you don't have to guess.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/compare/dyson-v15-vs-shark-stratos"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-base hover:shadow-xl hover:-translate-y-0.5 transition-all"
                  aria-label="Read our latest comparison: Dyson V15 vs Shark Stratos"
                >
                  Latest Comparison <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>
                <Link
                  href="/category/kitchen"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border text-foreground rounded-xl font-bold text-base hover:bg-secondary transition-all"
                >
                  Browse Kitchen Reviews
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
              className="hidden md:block relative"
            >
              <div className="absolute -inset-4 bg-accent/5 rounded-4xl -z-10 blur-2xl" />
              <Image
                src={heroImage}
                alt="Detailed side-by-side comparison of home appliances in a real family kitchen"
                className="rounded-3xl shadow-2xl w-full border border-border"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Navigation - Sophisticated & Clean */}
      <nav className="border-y border-border/40 bg-secondary/20 sticky top-16 z-40 backdrop-blur-md shadow-sm" aria-label="Browse by category">
        <div className="container relative">
          {/* Subtle gradient indications for scrolling on mobile */}
          <div className="absolute inset-y-0 left-0 w-12 bg-linear-to-r from-background to-transparent z-10 pointer-events-none md:hidden" />
          <div className="absolute inset-y-0 right-0 w-12 bg-linear-to-l from-background to-transparent z-10 pointer-events-none md:hidden" />
          
          <div className="flex items-center gap-6 py-4 overflow-x-auto no-scrollbar justify-start md:justify-center">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
                className="shrink-0 relative group"
              >
                {/* Highlight "Baby & Kids" or a seasonal category */}
                {cat.slug === "baby-kids" && (
                  <span className="absolute -top-2 -right-2 px-1.5 py-0.5 bg-accent text-[8px] font-black text-white rounded-full uppercase tracking-tighter shadow-sm z-20 animate-pulse">
                    Trending
                  </span>
                )}
                <Link
                  href={`/category/${cat.slug}`}
                  className="flex items-center gap-3 px-6 py-2.5 rounded-full bg-white border border-border/60 hover:border-accent/30 shadow-sm hover:shadow-xl transition-all duration-300"
                  title={`View all ${cat.name} comparisons`}
                >
                  <div className="relative w-10 h-10 flex items-center justify-center bg-white rounded-lg overflow-hidden group-hover:rotate-12 transition-transform duration-300">
                    {cat.icon.startsWith('http') || cat.icon.startsWith('/') ? (
                      <Image 
                        src={cat.icon} 
                        alt="" 
                        fill
                        className="object-contain" 
                        sizes="40px"
                      />
                    ) : (
                      <span className="text-xl">{cat.icon}</span>
                    )}
                  </div>
                  <div className="flex flex-col">
                    <span className="text-sm font-bold tracking-tight text-foreground/90 group-hover:text-accent transition-colors">
                      {cat.name}
                    </span>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-muted-foreground/70 group-hover:text-muted-foreground transition-colors">
                      {cat.count} curated reviews
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      {/* Latest Comparisons - Premium Editorial Feel */}
      <section className="container py-24 md:py-32" aria-labelledby="latest-comparisons-heading">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <span className="inline-block text-accent font-bold text-xs uppercase tracking-[0.2em] mb-4">
              Editorial Pick · March 2024
            </span>
            <h2 id="latest-comparisons-heading" className="font-display text-4xl md:text-5xl lg:text-6xl font-black text-foreground leading-[1.1]">
              New This Week <br/><span className="text-muted-foreground/40 italic">In Our Homes</span>
            </h2>
            <p className="text-xl text-muted-foreground mt-6 leading-relaxed">
              From city apartments to suburban houses, we've spent the last month testing these head-to-head for you.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="shrink-0"
          >
            <Link
              href="/comparisons"
              className="inline-flex items-center gap-3 text-lg font-bold text-foreground border-b-2 border-accent/20 hover:border-accent hover:gap-5 transition-all py-1 pb-2"
              aria-label="View all North American home product comparisons"
            >
              Browse all side-by-sides <ArrowRight className="h-5 w-5 text-accent" aria-hidden="true" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {comparisons.map((comp, i) => (
            <ComparisonCard key={comp.slug} {...comp} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
