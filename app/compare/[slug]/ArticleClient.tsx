"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Clock, User } from "lucide-react";

interface ArticleClientProps {
  article: any;
}

export function ArticleClient({ article }: ArticleClientProps) {
  return (
    <>
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Link 
          href="/" 
          className="inline-flex items-center gap-2 text-base font-bold text-accent hover:gap-3 transition-all mb-10"
        >
          <ArrowLeft className="h-4 w-4" /> Back to all reviews
        </Link>
      </motion.div>

      {/* Header */}
      <header className="mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <span className="inline-block px-4 py-1.5 text-xs font-bold uppercase tracking-wider text-accent bg-accent/10 rounded-full mb-6">
            {article.category}
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-[1.1] mb-8"
        >
          {article.title}
        </motion.h1>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap items-center gap-6 text-base text-muted-foreground font-medium"
        >
          <span className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-lg">
            <User className="h-4 w-4" /> {article.author}
          </span>
          <span className="flex items-center gap-2 bg-secondary/50 px-3 py-1.5 rounded-lg">
            <Clock className="h-4 w-4" /> {article.readTime}
          </span>
          <span className="opacity-70">{article.date}</span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="mt-12 p-8 border-l-4 border-accent bg-accent/5 rounded-r-2xl italic text-2xl text-foreground font-medium leading-relaxed"
        >
          "{article.intro}"
        </motion.div>
      </header>
    </>
  );
}
