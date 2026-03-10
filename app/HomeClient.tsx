"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import ComparisonCard from "@/components/ComparisonCard";

interface HomeClientProps {
  categories: { name: string; count: number }[];
  comparisons: any[];
  heroImage: StaticImageData | string;
}

export function HomeClient({ categories, comparisons, heroImage }: HomeClientProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
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
                Trusted by 50,000+ families
              </motion.span>
              <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-foreground leading-[1.1] mb-6">
                Real Comparisons.{" "}
                <span className="text-accent italic">Real Homes.</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg mb-10">
                Side-by-side product reviews for homeowners who want the truth. 
                We test it, compare it, and tell you which one is actually worth your money.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/compare/dyson-v15-vs-shark-stratos"
                  className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold text-base hover:shadow-xl hover:-translate-y-0.5 transition-all"
                >
                  Read Latest Comparison <ArrowRight className="h-5 w-5" />
                </Link>
                <Link
                  href="/category/kitchen"
                  className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border text-foreground rounded-xl font-bold text-base hover:bg-secondary transition-all"
                >
                  Browse Kitchen
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
                alt="Side-by-side home product comparison illustration"
                className="rounded-3xl shadow-2xl w-full border border-border"
                priority
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Pills */}
      <section className="border-y border-border bg-secondary/20 sticky top-16 z-40 backdrop-blur-sm">
        <div className="container py-5">
          <div className="flex flex-wrap gap-4 justify-center">
            {categories.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i }}
              >
                <Link
                  href={`/category/${cat.name.split(" ")[1].toLowerCase()}`}
                  className="px-5 py-2.5 rounded-full bg-card border border-border text-sm font-semibold text-foreground hover:border-accent hover:text-accent hover:shadow-md transition-all flex items-center gap-2"
                >
                  {cat.name} <span className="text-muted-foreground font-normal text-xs bg-muted px-1.5 py-0.5 rounded-md">{cat.count}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Latest Comparisons */}
      <section className="container py-24">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-4xl font-bold text-foreground">Latest Comparisons</h2>
            <p className="text-xl text-muted-foreground mt-3">Honest, side-by-side reviews from families you can trust.</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              href="/comparisons"
              className="inline-flex items-center gap-2 text-base font-bold text-accent hover:gap-3 transition-all"
            >
              View all reviews <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
          {comparisons.map((comp, i) => (
            <ComparisonCard key={comp.slug} {...comp} index={i} />
          ))}
        </div>
      </section>
    </>
  );
}
