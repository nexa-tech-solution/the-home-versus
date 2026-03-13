"use client";

import { motion } from "framer-motion";
import StatCounter from "@/components/StatCounter";
import { TRUST_STATS } from "@/lib/constants";

export default function TrustSection() {
  const stats = TRUST_STATS;

  return (
    <section className="bg-primary text-primary-foreground" aria-labelledby="trust-heading">
      <div className="container py-20 text-center">
        <h2 id="trust-heading" className="font-display text-4xl font-bold mb-6">Tested by Moms in US & Canada</h2>
        <p className="max-w-2xl mx-auto text-primary-foreground/80 text-lg mb-12">
          We're North American moms and homeowners — just like you. Every product is tested in our real family homes (pets and kids included) to give you the truth.
        </p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-12"
        >
          {stats.map((stat, i) => (
            <motion.div 
              key={stat.label} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * i, duration: 0.5 }}
              className="flex flex-col items-center"
            >
              <span className="font-display text-5xl font-bold text-accent mb-2">
                <StatCounter value={stat.val} suffix={stat.suffix} />
              </span>
              <span className="text-primary-foreground/70 font-medium text-lg">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
