"use client";

import { ExternalLink, Award, ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface VerdictOption {
  product: string;
  reason: string;
  amazonUrl: string;
}

interface VerdictSectionProps {
  overallWinner: string;
  summary: string;
  options: VerdictOption[];
}

const VerdictSection = ({ overallWinner, summary, options }: VerdictSectionProps) => {
  const [vote, setVote] = useState<"agree" | "disagree" | null>(null);
  const [counts, setCounts] = useState({ agree: 142, disagree: 12 });

  const handleVote = (type: "agree" | "disagree") => {
    if (vote) return;
    setVote(type);
    setCounts(prev => ({ ...prev, [type]: prev[type] + 1 }));
  };

  return (
    <div className="rounded-3xl border-2 border-accent/20 bg-accent/5 p-8 md:p-12 shadow-2xl shadow-accent/5">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <div className="flex items-center gap-4">
          <div className="h-12 w-12 rounded-2xl bg-accent/10 flex items-center justify-center">
            <Award className="h-7 w-7 text-accent" />
          </div>
          <div>
            <h2 className="font-display text-3xl font-bold text-foreground">The HomeVerdict</h2>
            <p className="text-xs font-bold text-accent uppercase tracking-widest">Expert Final Call</p>
          </div>
        </div>

        <div className="flex items-center gap-2 bg-accent text-white px-5 py-2.5 rounded-2xl shadow-xl shadow-accent/20">
          <span className="shrink-0 text-xl">🏆</span>
          <span className="font-bold text-sm tracking-tight truncate">Winner: {overallWinner}</span>
        </div>
      </div>

      <p className="text-xl text-muted-foreground leading-relaxed mb-12 font-medium">
        {summary}
      </p>

      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {options.map((opt, i) => (
          <div key={i} className="group relative bg-card p-8 rounded-[2.5rem] border border-border/50 hover:border-accent/30 transition-all hover:shadow-xl">
             <div className="absolute -top-4 -right-4 h-10 w-10 bg-accent/5 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-4 w-4 text-accent" />
             </div>
            <h3 className="font-display font-bold text-xl text-foreground mb-4">Choose {opt.product} if...</h3>
            <p className="text-base text-muted-foreground mb-8 leading-relaxed">{opt.reason}</p>
            <a
              href={opt.amazonUrl}
              target="_blank"
              rel="noopener noreferrer nofollow"
              className="w-full inline-flex items-center justify-center gap-2 py-4 bg-amazon text-amazon-foreground rounded-2xl font-bold text-base hover:brightness-110 transition-all shadow-xl shadow-amazon/10 active:scale-95"
            >
              Shop on Amazon <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        ))}
      </div>

      {/* User Voting Section - NEW */}
      <div className="pt-10 border-t border-accent/10">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center gap-2 mb-4">
            <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">Community Pulse</span>
          </div>
          <h4 className="font-display text-2xl font-bold text-foreground mb-8">Do you agree with our verdict?</h4>
          
          <div className="flex items-center gap-4 w-full max-w-md">
            <button 
              onClick={() => handleVote("agree")}
              disabled={!!vote}
              className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-3xl transition-all ${
                vote === "agree" ? "bg-green-500 text-white shadow-xl shadow-green-500/20" : 
                vote === "disagree" ? "opacity-40 grayscale" : "bg-white border border-border hover:border-green-500/50 hover:shadow-lg"
              }`}
            >
              <ThumbsUp className={`h-6 w-6 ${vote === "agree" ? "fill-white" : "text-green-500"}`} />
              <span className="text-sm font-bold">{counts.agree} Agree</span>
            </button>
            <button 
              onClick={() => handleVote("disagree")}
              disabled={!!vote}
              className={`flex-1 flex flex-col items-center gap-2 p-4 rounded-3xl transition-all ${
                vote === "disagree" ? "bg-red-500 text-white shadow-xl shadow-red-500/20" : 
                vote === "agree" ? "opacity-40 grayscale" : "bg-white border border-border hover:border-red-500/50 hover:shadow-lg"
              }`}
            >
              <ThumbsDown className={`h-6 w-6 ${vote === "disagree" ? "fill-white" : "text-red-500"}`} />
              <span className="text-sm font-bold">{counts.disagree} Disagree</span>
            </button>
          </div>

          <AnimatePresence>
            {vote && (
              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 text-xs font-bold text-accent uppercase tracking-widest"
              >
                Thanks for your feedback! 🏠
              </motion.p>
            )}
          </AnimatePresence>
        </div>
      </div>

      <div className="mt-12 text-[10px] text-muted-foreground/40 font-medium italic text-center">
        * Prices are for reference only. Check Amazon for the latest deals and accurate pricing.
      </div>
    </div>
  );
};

export default VerdictSection;
