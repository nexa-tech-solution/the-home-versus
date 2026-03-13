"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, Image as ImageIcon, X, Maximize2 } from "lucide-react";
import { useState, useEffect } from "react";
import { getYoutubeEmbedUrl } from "@/lib/utils";

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
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

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
            src={`${getYoutubeEmbedUrl(activeMedia.url)}?autoplay=0&rel=0`}
            title={`${productName} Video`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        ) : (
          <div 
            className="relative w-full h-full cursor-zoom-in group/main"
            onClick={() => setIsLightboxOpen(true)}
          >
            <img
              src={activeMedia.url}
              alt={activeMedia.caption || `${productName} showcase image`}
              className="w-full h-full object-contain p-8 bg-white"
            />
            <div className="absolute inset-0 bg-black/0 group-hover/main:bg-black/5 transition-colors flex items-center justify-center opacity-0 group-hover/main:opacity-100">
               <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg text-accent">
                 <Maximize2 className="h-6 w-6" />
               </div>
            </div>
          </div>
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

      {/* Lightbox Overlay */}
      <AnimatePresence>
        {isLightboxOpen && activeMedia.type === "image" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/95 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setIsLightboxOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-7xl w-full h-full flex flex-col items-center justify-center pointer-events-none"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={activeMedia.url}
                alt={activeMedia.caption || ""}
                className="max-w-full max-h-[85vh] object-contain shadow-2xl pointer-events-auto"
              />
              {activeMedia.caption && (
                <p className="mt-8 text-white text-lg md:text-xl font-medium text-center max-w-2xl px-4 pointer-events-auto">
                  {activeMedia.caption}
                </p>
              )}
            </motion.div>

            <motion.button
              type="button"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="absolute top-6 right-6 z-[210] text-white/70 hover:text-white bg-white/10 hover:bg-white/20 p-3 rounded-full transition-all"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
            >
              <X className="h-6 w-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
