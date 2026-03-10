"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, motion, useMotionValue, useSpring, useTransform, animate } from "framer-motion";

interface StatCounterProps {
  value: number;
  suffix?: string;
  duration?: number;
}

export default function StatCounter({ value, suffix = "", duration = 1.5 }: StatCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));

  useEffect(() => {
    if (isInView) {
      animate(count, value, {
        duration: duration,
        ease: "easeOut",
      });
    }
  }, [isInView, value, count, duration]);

  return (
    <span ref={ref} className="tabular-nums">
      <motion.span>{rounded}</motion.span>
      {suffix}
    </span>
  );
}
