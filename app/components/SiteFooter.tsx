import Link from "next/link";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-20">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="font-display text-lg font-bold text-primary">
              The<span className="text-accent">Home</span>Versus
            </span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              Honest, side-by-side product comparisons for busy moms and homeowners across the US & Canada.
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground mb-3">Categories</p>
            <div className="space-y-2">
              {["Cleaning", "Kitchen", "Baby & Kids", "Pets"].map((c) => (
                <Link
                  key={c}
                  href={`/category/${c.toLowerCase().replace(/ & /g, "-")}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {c}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground mb-3">About</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              <Link href="/about" className="block hover:text-foreground transition-colors">About Us</Link>
              <Link href="/privacy" className="block hover:text-foreground transition-colors">Privacy Policy</Link>
              <Link href="/disclosure" className="block hover:text-foreground transition-colors">Affiliate Disclosure</Link>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            © {new Date().getFullYear()} TheHomeVersus.com · As an Amazon Associate, we earn from qualifying purchases.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
