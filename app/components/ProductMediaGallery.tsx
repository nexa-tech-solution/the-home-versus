"use client";

import { motion } from "framer-motion";
import { Play, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

interface MediaItem {
  type: "image" | "video";
  url: string;
  thumbnail?: string;
  caption?: string;
}

interface ProductMediaGalleryProps {
  productName: string;
  media: MediaItem[];
}

export default function ProductMediaGallery({ productName, media }: ProductMediaGalleryProps) {
  const [activeMedia, setActiveMedia] = useState(media[0]);

  if (!media || media.length === 0) return null;

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-display text-2xl font-bold text-foreground">
          {productName} <span className="text-muted-foreground font-normal">Showcase</span>
        </h3>
      </div>

      <div className="relative aspect-video rounded-3xl overflow-hidden bg-muted group shadow-2xl border border-border">
        {activeMedia.type === "video" ? (
          <iframe
            src={`${activeMedia.url}?autoplay=0&rel=0`}
            title={`${productName} Video`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <img
            src={activeMedia.url}
            alt={activeMedia.caption || `${productName} showcase image`}
            className="w-full h-full object-contain p-8 bg-white"
          />
        )}
        
        {activeMedia.caption && (
          <div className="absolute bottom-0 inset-x-0 bg-black/60 backdrop-blur-md p-4 text-white text-sm font-medium">
            {activeMedia.caption}
          </div>
        )}
      </div>

      <div className="grid grid-cols-4 gap-3">
        {media.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveMedia(item)}
            className={`relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
              activeMedia === item ? "border-accent ring-2 ring-accent/20 scale-95" : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            {item.type === "video" ? (
              <div className="w-full h-full bg-slate-900 flex items-center justify-center relative">
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt="" className="w-full h-full object-cover" />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                )}
                <div className="absolute top-1 right-1 bg-accent p-1 rounded-md text-[10px] text-white font-bold">
                  VIDEO
                </div>
              </div>
            ) : (
              <img src={item.url} alt="" className="w-full h-full object-cover bg-white p-2" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
