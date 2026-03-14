import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <SiteHeader />
      
      <main className="flex-1 flex items-center justify-center py-20">
        <div className="container max-w-2xl text-center">
            <div className="relative mb-8 inline-block">
                <h1 className="font-display text-[120px] md:text-[180px] font-black text-accent/5 leading-none">
                    404
                </h1>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="font-display text-4xl md:text-5xl font-black text-foreground tracking-tight">
                        Lost in the <span className="text-accent underline decoration-accent/20 italic">Aisle?</span>
                    </p>
                </div>
            </div>
            
            <p className="text-xl text-muted-foreground mb-12 leading-relaxed max-w-md mx-auto">
                We couldn't find the comparison or review you're looking for. It might have been moved or returned to the shelf.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link 
                    href="/"
                    className="w-full sm:w-auto px-8 py-4 bg-primary text-primary-foreground rounded-2xl font-bold flex items-center justify-center gap-2 hover:shadow-xl hover:-translate-y-1 transition-all"
                >
                    <Home className="h-5 w-5" /> Back to Home
                </Link>
                <Link 
                    href="/products"
                    className="w-full sm:w-auto px-8 py-4 border-2 border-border text-foreground rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-secondary transition-all"
                >
                    <ArrowLeft className="h-5 w-5" /> Browse Products
                </Link>
            </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
