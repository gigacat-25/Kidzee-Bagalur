"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ShieldCheck, Heart, Sparkles, Clock, CheckCircle2 } from "lucide-react";
import { IMAGES } from "@/config/images";

export default function DaycareBanner() {
  const safetyFeatures = [
    "CCTV Security Monitoring",
    "Sanitized Playrooms & Nap Cribs",
    "Nutritious Meal Planning Support",
    "Experienced Nannies & Educators",
  ];

  return (
    <section className="py-20 md:py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl z-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Purple content block */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 bg-brand-purple text-white p-8 md:p-12 rounded-[40px] flex flex-col justify-between relative overflow-hidden shadow-2xl border border-brand-yellow/20"
          >
            {/* Background floating SVGs inside purple card */}
            <div className="absolute inset-0 pointer-events-none opacity-5">
              <svg className="w-full h-full fill-current text-white" viewBox="0 0 100 100">
                <circle cx="20" cy="20" r="10" />
                <circle cx="80" cy="80" r="15" />
              </svg>
            </div>

            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-yellow/20 text-brand-yellow rounded-full text-xs font-bold w-fit mb-6">
                <Sparkles className="w-3.5 h-3.5 fill-brand-yellow" />
                <span>PREMIUM DAY CARE FACILITIES</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-fredoka font-bold mb-6 text-white leading-tight">
                A Safe & Loving Home Away From Home
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-brand-lavender leading-relaxed mb-8 max-w-xl font-medium">
                Our premium day care facility provides professional supervision, sanitary resting zones, and structured play sessions for children. We focus on a nurturing atmosphere to give parents complete peace of mind.
              </p>

              {/* Safety Features Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {safetyFeatures.map((feat) => (
                  <div key={feat} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-brand-yellow fill-brand-yellow/10 shrink-0" />
                    <span className="text-xs sm:text-sm font-fredoka font-bold text-white tracking-wide">
                      {feat}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bottom details/timing row */}
            <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-white/20">
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-yellow" />
                <span className="text-xs sm:text-sm font-semibold text-brand-lavender">
                  Timings: 8:30 AM to 6:00 PM
                </span>
              </div>
              <span className="hidden sm:inline text-white/30">|</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-brand-yellow" />
                <span className="text-xs sm:text-sm font-semibold text-brand-lavender">
                  Age Group: 1.5 to 8 Years
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Teacher image with yellow blobs */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 flex justify-center items-center relative min-h-[300px] lg:min-h-auto"
          >
            {/* Animated background blobs behind photo */}
            <div className="absolute inset-0 bg-brand-yellow blob-shape-2 opacity-95 scale-95 shadow-md" />
            <motion.div
              className="absolute inset-[-10px] border-2 border-brand-purple/20 border-dashed rounded-full"
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            {/* Main Photo Container */}
            <div className="absolute inset-4 overflow-hidden rounded-[32px] border-4 border-white shadow-xl z-10">
              <Image
                src={IMAGES.daycareTeacher}
                alt="Safe Daycare classroom guidance by professional teacher at Kidzee KIADB Bagalur"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px"
                className="object-cover object-center transition-transform duration-500 hover:scale-105"
              />
            </div>

            {/* Float badge */}
            <div className="absolute top-10 left-[-20px] bg-white p-3 rounded-2xl shadow-xl z-20 hidden sm:flex items-center gap-2 border border-brand-lavender animate-float-slow">
              <Heart className="w-5 h-5 text-[#FF3B30] fill-[#FF3B30]/10" />
              <span className="text-xs font-bold text-brand-purple font-fredoka">Warm Atmosphere</span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
