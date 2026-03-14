"use client";

import Link from "next/link";
import { Search, Menu, X } from "lucide-react";
import { useState } from "react";
import SearchOverlay from "@/components/SearchOverlay";

import { categories } from "@/lib/data";
import { SITE_CONFIG } from "@/lib/constants";

const SiteHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);


  return (
    <>
      <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/80">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-primary">
            {SITE_CONFIG.name.split("Home")[0]}<span className="text-accent">Home</span>{SITE_CONFIG.name.split("Home")[1]}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <Link
            href="/comparisons"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Comparisons
          </Link>
          <Link
            href="/products"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Products
          </Link>
          {categories.slice(0, 3).map((cat) => (
            <Link
              key={cat.name}
              href={`/category/${cat.slug}`}
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              {cat.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setSearchOpen(true)}
            className="p-2 rounded-lg hover:bg-secondary transition-colors"
            aria-label="Search"
          >
            <Search className="h-4 w-4 text-muted-foreground" />
          </button>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background pb-4">
          <Link
            href="/comparisons"
            className="block px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            All Comparisons
          </Link>
          <Link
            href="/products"
            className="block px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            All Products
          </Link>
          {categories.map((cat) => (
            <Link
              key={cat.name}
              href={`/category/${cat.slug}`}
              className="block px-6 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}
    </header>
    <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
};

export default SiteHeader;
