"use client";

import { useEffect, useRef } from "react";

interface AdSlotProps {
  label?: string;
  className?: string;
  position?: "horizontal" | "vertical" | "inline";
  adClient?: string;
  adSlot?: string;
}

declare global {
  interface Window {
    adsbygoogle: any[];
  }
}

export default function AdSlot({ 
  label = "Curated Discovery", 
  className = "", 
  position = "horizontal",
  adClient = process.env.NEXT_PUBLIC_ADSENSE_PUBLISHER_ID || "ca-pub-3012411444875177",
  adSlot = "XXXXXXXXXX" 
}: AdSlotProps) {
  const adRef = useRef<HTMLModElement>(null);
  
  useEffect(() => {
    // Kiểm tra xem đã có quảng cáo được push chưa để tránh lỗi trên Next.js
    if (adRef.current && adRef.current.innerHTML === "") {
      try {
        if (typeof window !== "undefined") {
          (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
      } catch (err) {
        // Bắt lỗi im lặng để không gây crash app
        console.log("AdSense info:", "Waiting for next available slot");
      }
    }
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
          data-ad-format="auto"
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
