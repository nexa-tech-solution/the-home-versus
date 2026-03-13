'use client';

import { useState, useEffect } from 'react';

interface ReadingProgressProps {
  id: string; // unique id for the article or product
}

export default function ReadingProgress({ id }: ReadingProgressProps) {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    // 1. Restore progress from localStorage on load
    const saved = localStorage.getItem(`reading-progress-${id}`);
    if (saved) {
      setCompletion(parseFloat(saved));
    }

    const handleScroll = () => {
      // Calculate how far down the user has scrolled
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollTop = window.scrollY;

      // We subtract windowHeight because the scroll happens within the content 
      // not covered by the current viewport
      const totalScrollable = documentHeight - windowHeight;
      
      if (totalScrollable <= 0) return;

      const progress = (scrollTop / totalScrollable) * 100;
      const roundedProgress = Math.min(100, Math.max(0, Math.round(progress)));

      // Only update and save if the progress has increased or is significantly different
      // to avoid excessive storage writes
      setCompletion(prev => {
        if (roundedProgress > prev) {
          localStorage.setItem(`reading-progress-${id}`, roundedProgress.toString());
          // Also save a 'last read' timestamp
          localStorage.setItem(`reading-last-${id}`, Date.now().toString());
          return roundedProgress;
        }
        return prev;
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [id]);

  return (
    <div className="fixed top-0 left-0 w-full h-1.5 z-50 bg-transparent pointer-events-none">
      <div 
        className="h-full bg-accent transition-all duration-300 ease-out shadow-[0_0_10px_rgba(var(--accent),0.5)]" 
        style={{ width: `${completion}%` }}
      />
    </div>
  );
}
