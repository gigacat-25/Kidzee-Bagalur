"use client";

import React from "react";
import { motion } from "framer-motion";
import { Star, ExternalLink } from "lucide-react";

export default function GoogleRating() {
  return (
    <section className="py-16 bg-brand-yellow text-brand-purple relative overflow-hidden">
      {/* Decorative loops */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-10">
        <svg className="w-full h-full fill-none stroke-brand-purple stroke-2" viewBox="0 0 100 100">
          <circle cx="10" cy="10" r="25" />
          <circle cx="95" cy="90" r="30" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center"
        >
          {/* Big Stars Row */}
          <div className="flex gap-2 text-brand-purple mb-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-8 h-8 sm:w-10 sm:h-10 fill-brand-purple" />
            ))}
          </div>

          {/* Rating Metrics */}
          <h2 className="text-4xl sm:text-5xl font-fredoka font-black mb-2 tracking-tight">
            4.9 / 5 Google Rating
          </h2>

          <p className="text-base sm:text-lg font-bold opacity-80 mb-6 font-fredoka">
            Based on 36 Verified Google Reviews & Student Success Stories
          </p>

          {/* Call-to-action button */}
          <a
            href="https://maps.google.com/?q=Kidzee+Preschool+KIADB+Bagalur"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-brand-purple hover:bg-brand-purple/95 text-white font-fredoka font-bold text-base rounded-full shadow-lg hover:scale-105 active:scale-95 transition-transform duration-200"
          >
            <span>View on Google Reviews</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
