"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, X, ArrowRight } from "lucide-react";
import Link from "next/link";
import { searchArticlesByTitle, comparisons, categories } from "@/lib/data";

interface SearchOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
    if (!isOpen) {
      setQuery("");
      setResults([]);
    }
  }, [isOpen]);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        onClose();
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen, onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setQuery(val);
    setResults(searchArticlesByTitle(val));
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-100 flex justify-center p-4 pt-[20vh] pointer-events-none">
          <motion.div
            ref={containerRef}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="w-full max-w-xl h-fit bg-card rounded-3xl shadow-[0_40px_120px_rgba(0,0,0,0.3)] border border-border overflow-hidden pointer-events-auto"
          >
            <div className="p-3 border-b border-border bg-background">
              <div className="relative group">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground group-focus-within:text-accent transition-colors" />
                <input
                  ref={inputRef}
                  type="text"
                  placeholder="What are you looking for?"
                  className="w-full h-10 pl-10 pr-4 rounded-lg bg-secondary/30 border-transparent focus:bg-background focus:border-accent/30 focus:outline-none text-sm transition-all"
                  value={query}
                  onChange={handleSearch}
                />
                <button 
                  onClick={onClose}
                  className="absolute right-2 top-1/2 -translate-y-1/2 p-1 hover:bg-secondary rounded-md"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              </div>
            </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {query === "" ? (
                  <div className="py-2">
                    <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                      Most Searched Comparisons
                    </p>
                    <div className="space-y-1">
                      {comparisons.slice(0, 3).map((result) => (
                        <Link
                          key={result.slug}
                          href={`/compare/${result.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-4 px-3 py-2.5 rounded-xl hover:bg-secondary/50 transition-all group"
                        >
                          <div className="h-10 w-10 shrink-0 rounded-lg overflow-hidden bg-white border border-border p-1">
                            <img src={result.imageA} alt="" className="h-full w-full object-contain" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-semibold text-sm text-foreground truncate group-hover:text-accent transition-colors">
                              {result.title}
                            </h4>
                            <span className="text-[10px] font-medium text-muted-foreground">
                              {result.category}
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="text-[9px] font-bold text-accent bg-accent/10 px-1.5 py-0.5 rounded">HOT</span>
                            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                          </div>
                        </Link>
                      ))}
                    </div>

                    <p className="px-3 pt-4 pb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                      Popular Categories
                    </p>
                    <div className="flex flex-wrap gap-2 px-3 pb-2">
                      {categories.map((cat) => (
                        <button
                          key={cat.slug}
                          onClick={() => {
                            setQuery(cat.name);
                            setResults(searchArticlesByTitle(cat.name));
                          }}
                          className="px-3 py-1.5 rounded-lg bg-secondary/50 text-xs font-semibold hover:bg-accent hover:text-white transition-all"
                        >
                          {cat.name}
                        </button>
                      ))}
                    </div>
                  </div>
                ) : results.length === 0 ? (
                  <div className="py-12 text-center">
                    <p className="text-muted-foreground text-sm italic">No matches found for "{query}"</p>
                  </div>
                ) : (
                  <div className="space-y-1 pt-1">
                    <p className="px-3 pb-2 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
                      Comparisons found
                    </p>
                    {results.map((result) => (
                      <Link
                        key={result.slug}
                        href={`/compare/${result.slug}`}
                        onClick={onClose}
                        className="flex items-center gap-4 px-3 py-2.5 rounded-xl hover:bg-secondary/50 transition-all group"
                      >
                        <div className="h-10 w-10 shrink-0 rounded-lg overflow-hidden bg-white border border-border p-1">
                          <img src={result.imageA} alt="" className="h-full w-full object-contain" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-semibold text-sm text-foreground truncate group-hover:text-accent transition-colors">
                            {result.title}
                          </h4>
                          <span className="text-[10px] font-medium text-muted-foreground">
                            {result.category}
                          </span>
                        </div>
                        <ArrowRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            
            <div className="p-2 border-t border-border bg-secondary/5 flex items-center justify-between text-[10px] text-muted-foreground font-medium">
              <span className="flex items-center gap-1 px-2 py-0.5">
                <kbd className="font-sans border border-border px-1 rounded bg-background shadow-sm">esc</kbd> to close
              </span>
              <span className="px-2">HomeVersus Quick Search</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
