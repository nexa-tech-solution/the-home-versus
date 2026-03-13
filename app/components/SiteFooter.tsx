import Link from "next/link";
import { categories } from "@/lib/data";
import { SITE_CONFIG, FOOTER_LINKS } from "@/lib/constants";

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-secondary/30 mt-20">
      <div className="container py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <span className="font-display text-lg font-bold text-primary">
              {SITE_CONFIG.name.split("Home")[0]}<span className="text-accent">Home</span>{SITE_CONFIG.name.split("Home")[1]}
            </span>
            <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-xs">
              {SITE_CONFIG.description}
            </p>
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground mb-3">Categories</p>
            <div className="space-y-2">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  href={`/category/${cat.slug}`}
                  className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {cat.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="font-semibold text-sm text-foreground mb-3">About</p>
            <div className="space-y-2 text-sm text-muted-foreground">
              {FOOTER_LINKS.about.map((link) => (
                <Link key={link.href} href={link.href} className="block hover:text-foreground transition-colors">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground text-center">
            {SITE_CONFIG.copyright} · {SITE_CONFIG.amazonAffiliateDisclosure}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
