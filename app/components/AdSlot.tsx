"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  label?: string;
  className?: string;
  position?: "horizontal" | "vertical" | "inline";
  adClient?: string;
  adSlot?: string;
  adLayout?: string;
  adFormat?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

import { SITE_CONFIG } from "@/lib/constants";

export default function AdSlot({ 
  label = "Curated Discovery", 
  className = "", 
  position = "horizontal",
  adClient = SITE_CONFIG.publisherId,
  adSlot = "8250302010",
  adLayout = "in-article",
  adFormat = "fluid"
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);
  
  useEffect(() => {
    const initializeAd = () => {
      if (adRef.current && !adRef.current.getAttribute("data-ad-status")) {
        try {
          adRef.current.setAttribute("data-ad-status", "initialized");
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
          console.debug("AdSense info:", "Slot not ready yet");
        }
      }
    };

    // Small delay to ensure DOM is fully ready and avoid race conditions in dev mode
    const timer = setTimeout(initializeAd, 300);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className={`w-full group ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground/40 group-hover:text-accent/40 transition-colors">
          {label}
        </span>
        <span className="text-[9px] text-muted-foreground/30 italic">Google AdSense</span>
      </div>
      
      <div 
        className={`
          relative overflow-hidden rounded-3xl border border-border/50 bg-linear-to-br from-secondary/5 to-secondary/20
          flex items-center justify-center transition-all duration-700 group-hover:border-accent/20
          ${position === "horizontal" ? "min-h-[100px] md:min-h-[280px]" : "min-h-[400px] md:min-h-[600px]"}
        `}
      >
        {/* Decorative elements for the placeholder */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
           <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-accent/5 rounded-full blur-3xl animate-pulse" />
           <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-primary/5 rounded-full blur-3xl animate-pulse delay-700" />
        </div>

        {/* Google AdSense tag */}
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", width: "100%", height: "100%" }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-layout={adLayout}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
        />
        
        {/* Placeholder UI - High-end fallback */}
        <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center pointer-events-none">
          <div className="flex items-center gap-3 opacity-20 group-hover:opacity-40 transition-opacity duration-500">
            <div className="h-px w-8 bg-muted-foreground" />
            <p className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground">Premium Discovery</p>
            <div className="h-px w-8 bg-muted-foreground" />
          </div>
          <p className="mt-2 text-[9px] text-muted-foreground/20 font-medium">Curated home solutions for you</p>
        </div>
      </div>
    </div>
  );
}
