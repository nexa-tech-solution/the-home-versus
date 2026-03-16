"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Bell, CheckCircle2, ShoppingBag } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    // Simulate API call
    setTimeout(() => {
      setStatus("success");
      setEmail("");
    }, 1500);
  };

  return (
    <section className="container py-24">
      <div className="relative overflow-hidden rounded-[3rem] bg-primary p-8 md:p-16 text-primary-foreground shadow-2xl">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[500px] h-[500px] bg-accent/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 translate-y-1/3 -translate-x-1/4 w-[400px] h-[400px] bg-white/5 rounded-full blur-2xl pointer-events-none" />

        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <Bell className="h-5 w-5 text-accent" />
              </div>
              <span className="text-xs font-black uppercase tracking-[0.3em] opacity-60">
                Join 5,000+ Readers
              </span>
            </div>
            
            <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-6 text-white">
              Never Pay Full Price For <span className="text-accent italic">"The Winner"</span> Again.
            </h2>
            
            <p className="text-lg opacity-80 leading-relaxed mb-8 max-w-lg">
              Get notified when top-rated home products go on sale and be the first to read our weekly head-to-head showdowns.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Instant deal alerts for prize-winning products",
                "Weekly 'Versus' highlights in your inbox",
                "Exclusive buying guides for North American families"
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium">
                  <CheckCircle2 className="h-4 w-4 text-accent" />
                  {text}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 shadow-inner">
            <h3 className="font-display text-2xl font-bold mb-6 flex items-center gap-3 text-white">
              <ShoppingBag className="h-6 w-6 text-accent" />
              Subscribe for Deal Alerts
            </h3>
            
            {status === "success" ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-8"
              >
                <div className="h-16 w-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CheckCircle2 className="h-8 w-8 text-white" />
                </div>
                <h4 className="text-xl font-bold mb-2 text-white">You're on the list!</h4>
                <p className="text-sm opacity-60 text-white/80">Check your inbox for your first set of home deals.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative group">
                  <Input 
                    type="email" 
                    placeholder="yourname@email.com" 
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="h-14 bg-white/10 border-white/20 text-white placeholder:text-white/30 rounded-xl focus:ring-accent group-hover:border-white/40 transition-all font-medium"
                  />
                </div>
                <Button 
                  type="submit" 
                  disabled={status === "loading"}
                  className="w-full h-14 bg-accent hover:bg-accent/90 text-white font-bold text-lg rounded-xl shadow-xl shadow-accent/20 transition-all active:scale-95 flex items-center justify-center gap-3"
                >
                  {status === "loading" ? "Joining..." : (
                    <>
                      Get Deal Alerts <Send className="h-4 w-4" />
                    </>
                  )}
                </Button>
                <p className="text-[10px] text-center opacity-40 font-medium uppercase tracking-widest pt-2 text-white/60">
                  No Spam. Only Honest Reviews & Real Savings.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
