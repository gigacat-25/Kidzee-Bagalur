"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, Calendar, ArrowRight, Plane } from "lucide-react";
import { IMAGES } from "@/config/images";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100, damping: 20 } },
  };

  const floatAnimation = {
    animate: {
      y: [0, -12, 0],
      rotate: [0, 2, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  const pulseAnimation = {
    animate: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut" as const,
      },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] pt-32 pb-20 md:pb-28 bg-brand-purple overflow-hidden flex items-center"
      style={{ borderRadius: "0 0 80px 80px" }}
    >
      {/* Decorative Floating SVGs and Blobs */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        {/* Animated Blob 1 */}
        <motion.div
          className="absolute -top-10 -left-10 w-72 h-72 bg-brand-yellow/15 blur-2xl rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            x: [0, 20, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Animated Blob 2 */}
        <motion.div
          className="absolute bottom-10 right-[-5%] w-96 h-96 bg-[#FF9500]/10 blur-3xl rounded-full"
          animate={{
            scale: [1, 1.1, 1],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Floating Paper Plane Icon */}
        <motion.div
          className="absolute top-[20%] left-[8%] text-brand-yellow opacity-40 hidden md:block"
          animate={{
            x: [0, 15, -5, 0],
            y: [0, -20, 10, 0],
            rotate: [15, 20, 10, 15],
          }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <Plane className="w-12 h-12" />
        </motion.div>

        {/* Floating Stars */}
        <motion.div
          className="absolute bottom-[25%] left-[5%] text-[#5AC8FA] opacity-55"
          animate={{ scale: [1, 1.3, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 6, repeat: Infinity }}
        >
          <Sparkles className="w-8 h-8" />
        </motion.div>

        {/* Custom SVG Doodle Loop */}
        <svg
          className="absolute top-[35%] right-[45%] w-32 h-32 text-brand-yellow/20 stroke-current stroke-2 fill-none hidden lg:block"
          viewBox="0 0 100 100"
        >
          <path d="M10,50 Q30,10 50,50 T90,50" />
          <path d="M10,40 Q30,0 50,40 T90,40" className="opacity-50" />
        </svg>

        {/* Floating Rings */}
        <motion.div
          className="absolute top-[12%] right-[10%] w-16 h-16 border-4 border-brand-yellow/30 rounded-full hidden sm:block"
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-[15%] right-[45%] w-8 h-8 border-4 border-[#34C759]/30 rounded-full"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Side: Headings and CTAs */}
        <motion.div
          className="lg:col-span-7 text-center lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/10 border border-brand-yellow/30 rounded-full text-brand-yellow text-sm font-semibold tracking-wide mb-6"
          >
            <Sparkles className="w-4 h-4 fill-brand-yellow" />
            <span>Admissions Open for 2026 - 2027</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl text-white font-fredoka font-bold leading-tight tracking-wide mb-6"
          >
            Nurturing Young Minds for a <span className="text-brand-yellow">Brighter Tomorrow</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            variants={itemVariants}
            className="text-base sm:text-lg md:text-xl text-brand-lavender font-medium leading-relaxed max-w-xl mx-auto lg:mx-0 mb-8"
          >
            Premium preschool where learning begins through creativity, exploration, confidence and care. Give your child the Kidzee advantage.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
          >
            <a
              href="#admissions"
              className="w-full sm:w-auto px-8 py-4 bg-brand-yellow text-brand-purple font-fredoka font-bold text-lg rounded-full shadow-lg shadow-black/20 hover:scale-105 active:scale-95 transition-transform duration-200 flex items-center justify-center gap-2"
            >
              Admissions Open
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#contact"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-brand-lavender text-white font-fredoka font-bold text-lg rounded-full hover:bg-brand-lavender hover:text-brand-purple hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Campus Visit
            </a>
          </motion.div>
        </motion.div>

        {/* Right Side: Child Image and Blob Design */}
        <div className="lg:col-span-5 flex justify-center relative">
          <motion.div
            className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px]"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 80, damping: 15, delay: 0.3 }}
          >
            {/* Animated Yellow Background Blob */}
            <motion.div
              className="absolute inset-0 bg-brand-yellow blob-shape-1 opacity-90 z-0 shadow-lg shadow-black/10"
              animate={{
                borderRadius: [
                  "42% 58% 70% 30% / 45% 45% 55% 55%",
                  "50% 50% 40% 60% / 60% 40% 60% 40%",
                  "30% 70% 70% 30% / 30% 30% 70% 70%",
                  "42% 58% 70% 30% / 45% 45% 55% 55%",
                ],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />

            {/* Circular Doodle Outline behind child */}
            <motion.div
              className="absolute inset-[-15px] border-2 border-dashed border-[#AF52DE]/30 rounded-full z-0"
              variants={pulseAnimation}
              animate="animate"
            />

            {/* Child Image Container */}
            <motion.div
              className="absolute inset-4 overflow-hidden rounded-full z-10 border-4 border-white shadow-xl"
              variants={floatAnimation}
              animate="animate"
            >
              <Image
                src={IMAGES.hero}
                alt="Happy Preschool Child playing at Kidzee KIADB Bagalur"
                fill
                priority
                sizes="(max-width: 640px) 250px, (max-width: 768px) 350px, 400px"
                className="object-cover object-center"
              />
            </motion.div>

            {/* Tiny Floating Badges around Hero Image */}
            <motion.div
              className="absolute bottom-6 -left-6 bg-white py-2 px-4 rounded-full shadow-lg border border-brand-lavender z-20 flex items-center gap-1.5 hidden sm:flex"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <span className="text-xl">🎨</span>
              <span className="text-xs font-bold text-brand-purple font-fredoka">Creative Arts</span>
            </motion.div>

            <motion.div
              className="absolute top-12 -right-6 bg-white py-2 px-4 rounded-full shadow-lg border border-brand-lavender z-20 flex items-center gap-1.5 hidden sm:flex"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <span className="text-xl">🧸</span>
              <span className="text-xs font-bold text-brand-purple font-fredoka">Play & Explore</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
