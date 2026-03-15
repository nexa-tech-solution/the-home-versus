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
          relative overflow-hidden rounded-2xl border border-border bg-secondary/10 
          flex items-center justify-center transition-all
          ${position === "horizontal" ? "min-h-[100px] md:min-h-[250px]" : "min-h-[400px]"}
        `}
      >
        {/* Google AdSense tag */}
        <ins
          ref={adRef}
          className="adsbygoogle"
          style={{ display: "block", width: "100%" }}
          data-ad-client={adClient}
          data-ad-slot={adSlot}
          data-ad-layout={adLayout}
          data-ad-format={adFormat}
          data-full-width-responsive="true"
        />
        
        {/* Placeholder UI - Chỉ hiển thị khi đang trong môi trường dev hoặc chưa có script AdSense */}
        <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center opacity-20 pointer-events-none">
          <p className="text-xs font-mono uppercase tracking-[0.3em]">AdSense Space</p>
        </div>
      </div>
    </div>
  );
}
