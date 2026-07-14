"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, CheckCircle2, Bookmark } from "lucide-react";
import { IMAGES } from "@/config/images";

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative floating icons */}
      <div className="absolute inset-0 pointer-events-none select-none z-0">
        <motion.div
          className="absolute top-[10%] left-[5%] text-brand-purple/20"
          animate={{ rotate: 360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        >
          <svg className="w-16 h-16 fill-current" viewBox="0 0 100 100">
            <path d="M50,10 L90,90 L10,90 Z" fill="none" stroke="currentColor" strokeWidth="4" />
          </svg>
        </motion.div>
        
        <motion.div
          className="absolute bottom-[10%] right-[5%] text-brand-yellow/30"
          animate={{
            y: [0, -15, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles className="w-12 h-12" />
        </motion.div>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image with animated blobs and doodles */}
          <div className="lg:col-span-6 flex justify-center relative">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, type: "spring" }}
              className="relative w-[290px] h-[290px] sm:w-[380px] sm:h-[380px] md:w-[440px] md:h-[440px]"
            >
              {/* Outer organic border shape */}
              <div className="absolute inset-0 border-4 border-[#AF52DE]/30 blob-shape-2 animate-float-reverse pointer-events-none" />
              
              {/* Solid Background Blob */}
              <div className="absolute inset-4 bg-brand-lavender blob-shape-3 z-0 animate-pulse-slow" />

              {/* Main Photo */}
              <div className="absolute inset-6 overflow-hidden blob-shape-1 border-4 border-white shadow-2xl z-10">
                <Image
                  src={IMAGES.about}
                  alt="Teacher reading to children at Kidzee KIADB Bagalur"
                  fill
                  sizes="(max-width: 640px) 250px, (max-width: 768px) 350px, 400px"
                  className="object-cover object-center"
                />
              </div>

              {/* Float badge */}
              <motion.div
                className="absolute -bottom-4 right-2 bg-brand-yellow text-brand-purple py-3 px-5 rounded-3xl shadow-xl z-20 font-fredoka font-bold text-sm flex items-center gap-2 border border-white"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <span>⭐ 4.9 rated preschool</span>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Column: Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 45 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 flex flex-col justify-center text-left"
          >
            <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lavender text-brand-purple rounded-full text-xs font-bold w-fit mb-4">
              <Bookmark className="w-3.5 h-3.5" />
              <span>OVER 2 DECADES OF TRUST</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-brand-purple font-fredoka font-bold mb-6">
              Welcome to Kidzee Preschool
            </h2>

            <div className="space-y-4 text-brand-dark/80 text-base sm:text-lg leading-relaxed">
              <p>
                Kidzee Preschool is a leading chain of preschools located in India and Nepal, backed by the prestigious <strong>Zee Learn Ltd</strong>.
              </p>
              <p>
                With more than two decades of experience in the early childhood care and education industry, Kidzee has nurtured and educated more than <strong>1.5 million students</strong> across India, preparing them for a confident future.
              </p>
              <p>
                Being one of the largest preschool brands in the country, Kidzee operates over <strong>2,500 centres across 600+ cities</strong>, delivering standardized, world-class learning frameworks.
              </p>
            </div>

            {/* Kidzee Advantage highlight block */}
            <div className="mt-8 p-6 bg-brand-lavender/40 border border-brand-purple/10 rounded-3xl">
              <h3 className="text-xl font-fredoka font-bold text-brand-purple mb-3 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-purple fill-brand-purple/10" />
                The Kidzee Advantage
              </h3>
              <p className="text-sm sm:text-base text-brand-dark/75 leading-relaxed">
                As pioneers in Early Childhood Care and Education (ECCE), we provide our center with the complete **PéNTEMiND pedagogy**, teacher training, curriculum materials, classroom activities, and mentoring programs to ensure children receive the highest quality of development and safety.
              </p>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
