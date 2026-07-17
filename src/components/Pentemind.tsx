"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Brain, Lightbulb, Compass, Heart, Shield, Palette } from "lucide-react";

export default function Pentemind() {
  const [activeMind, setActiveMind] = useState(0);

  const minds = [
    {
      title: "Inventive Mind",
      subtitle: "Curiosity & Innovation",
      description: "Encouraging children to question, experiment, and explore new possibilities. Developing active problem-solvers who aren't afraid to try new paths.",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "text-[#FF9500]",
      bgLight: "bg-[#FF9500]/10",
      borderCol: "border-[#FF9500]/30",
      fillCol: "fill-[#FF9500]/10",
      x: "50%",
      y: "10%",
      // SVG Connection Coordinates on a 500x500 viewport
      cx: 250,
      cy: 60,
    },
    {
      title: "Analytical Mind",
      subtitle: "Logic & Critical Thinking",
      description: "Fostering analytical abilities through puzzles, math games, sorting activities, and logical reasoning exercises that build structural cognitive foundations.",
      icon: <Compass className="w-6 h-6" />,
      color: "text-[#5AC8FA]",
      bgLight: "bg-[#5AC8FA]/10",
      borderCol: "border-[#5AC8FA]/30",
      fillCol: "fill-[#5AC8FA]/10",
      x: "85%",
      y: "35%",
      cx: 410,
      cy: 180,
    },
    {
      title: "Empathetic Mind",
      subtitle: "Emotional Quotient & EQ",
      description: "Guiding children to understand and respect feelings, cooperate with peers, display kindness, and build strong relationship structures with educators and family.",
      icon: <Heart className="w-6 h-6" />,
      color: "text-[#FF3B30]",
      bgLight: "bg-[#FF3B30]/10",
      borderCol: "border-[#FF3B30]/30",
      fillCol: "fill-[#FF3B30]/10",
      x: "75%",
      y: "75%",
      cx: 370,
      cy: 375,
    },
    {
      title: "Conscientious Mind",
      subtitle: "Responsibility & Values",
      description: "Building moral values, responsibility, care for the environment, and social manners. Helping kids develop a sense of ownership over their daily actions.",
      icon: <Shield className="w-6 h-6" />,
      color: "text-[#34C759]",
      bgLight: "bg-[#34C759]/10",
      borderCol: "border-[#34C759]/30",
      fillCol: "fill-[#34C759]/10",
      x: "25%",
      y: "75%",
      cx: 130,
      cy: 375,
    },
    {
      title: "Creative Mind",
      subtitle: "Expression & Arts",
      description: "Unlocking boundless imagination through art, painting, craft, storytelling, drama, and musical play, allowing kids to express themselves authentically.",
      icon: <Palette className="w-6 h-6" />,
      color: "text-[#AF52DE]",
      bgLight: "bg-[#AF52DE]/10",
      borderCol: "border-[#AF52DE]/30",
      fillCol: "fill-[#AF52DE]/10",
      x: "15%",
      y: "35%",
      cx: 90,
      cy: 180,
    },
  ];

  return (
    <section id="pentemind" className="py-20 md:py-28 bg-brand-lavender relative overflow-hidden">
      {/* Decorative items */}
      <div className="absolute top-[8%] left-[8%] border-2 border-brand-purple/20 w-12 h-12 rounded-full border-dashed" />
      <div className="absolute bottom-[8%] right-[8%] w-16 h-16 bg-[#AF52DE]/15 blob-shape-3" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-xs font-bold w-fit mb-3">
            <Brain className="w-3.5 h-3.5" />
            <span>PéNTEMiND PEDAGOGY</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-brand-purple font-fredoka font-bold mb-4">
            Nurturing 5 Essential Minds
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/70 font-semibold">
            Our exclusive curriculum is designed to stimulate all-round developmental skills.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Interactive Diagram (Desktop Only, falls back to buttons on Mobile) */}
          <div className="lg:col-span-7 flex justify-center relative select-none">
            
            {/* Desktop Circular View */}
            <div className="relative w-[340px] h-[340px] sm:w-[480px] sm:h-[480px] hidden sm:block">
              
              {/* SVG Connecting Lines behind nodes */}
              <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
                {minds.map((mind, idx) => {
                  const isActive = activeMind === idx;
                  return (
                    <motion.line
                      key={mind.title}
                      x1="250"
                      y1="250"
                      x2={mind.cx}
                      y2={mind.cy}
                      stroke={isActive ? "#6F2C91" : "#D2BDED"}
                      strokeWidth={isActive ? "3.5" : "2"}
                      strokeDasharray={isActive ? "none" : "5 5"}
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1 }}
                    />
                  );
                })}
              </svg>

              {/* Central Pedagogy Hub Circle */}
              <div className="absolute top-[250px] left-[250px] -translate-x-1/2 -translate-y-1/2 w-28 h-28 sm:w-36 sm:h-36 bg-brand-purple border-4 border-brand-yellow rounded-full shadow-2xl z-20 flex flex-col items-center justify-center text-center">
                <span className="text-[#FFD400] font-fredoka text-xs font-black tracking-widest uppercase">
                  PéNTEMiND
                </span>
                <span className="text-white font-fredoka text-[10px] font-bold mt-1 opacity-70">
                  Pedagogy
                </span>
                <motion.div
                  className="absolute inset-[-6px] border border-brand-yellow/40 rounded-full"
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
              </div>

              {/* Surrounding Mind Nodes */}
              {minds.map((mind, idx) => {
                const isActive = activeMind === idx;
                return (
                  <button
                    key={mind.title}
                    onClick={() => setActiveMind(idx)}
                    style={{ left: mind.x, top: mind.y }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 focus:outline-none"
                  >
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`flex flex-col items-center justify-center w-24 h-24 sm:w-28 sm:h-28 bg-white border-3 ${
                        isActive ? "border-brand-purple shadow-xl" : "border-transparent shadow-md"
                      } rounded-full transition-all duration-300 relative`}
                    >
                      <div className={`p-2.5 ${mind.bgLight} rounded-full ${mind.color} mb-1.5`}>
                        {mind.icon}
                      </div>
                      <span className="text-[10px] sm:text-xs font-fredoka font-bold text-brand-dark max-w-[85px] leading-tight">
                        {mind.title}
                      </span>

                      {/* Small active dot indicators */}
                      {isActive && (
                        <span className="absolute -top-1 -right-1 w-4 h-4 bg-brand-purple rounded-full border-2 border-white flex items-center justify-center text-white text-[8px] font-bold">
                          ✓
                        </span>
                      )}
                    </motion.div>
                  </button>
                );
              })}
            </div>

            {/* Mobile Vertical Nodes list (Fallback for Mobile) */}
            <div className="flex sm:hidden flex-wrap justify-center gap-3 w-full">
              {minds.map((mind, idx) => {
                const isActive = activeMind === idx;
                return (
                  <button
                    key={mind.title}
                    onClick={() => setActiveMind(idx)}
                    className={`flex items-center gap-2.5 px-4 py-3 rounded-full border-2 text-sm font-fredoka font-bold transition-all duration-300 ${
                      isActive
                        ? "bg-brand-purple border-brand-purple text-white shadow-md"
                        : "bg-white border-brand-lavender text-brand-dark"
                    }`}
                  >
                    <span className={isActive ? "text-brand-yellow" : mind.color}>
                      {mind.icon}
                    </span>
                    <span>{mind.title}</span>
                  </button>
                );
              })}
            </div>

          </div>

          {/* Right Column: Detailed Explanation Card */}
          <div className="lg:col-span-5">
            <div className="bg-white rounded-[36px] p-8 shadow-xl border border-brand-lavender relative overflow-hidden min-h-[320px] sm:min-h-[300px] md:min-h-[260px] lg:min-h-[350px] flex flex-col justify-center">
              
              {/* Dynamic Watermark Background Icon */}
              <div className="absolute right-[-20px] bottom-[-20px] opacity-5 text-brand-purple pointer-events-none select-none">
                <Brain className="w-56 h-56 stroke-[1.5]" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeMind}
                  initial={{ opacity: 0, x: 15 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-3 ${minds[activeMind].bgLight} rounded-2xl ${minds[activeMind].color}`}>
                      {minds[activeMind].icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-fredoka font-bold text-brand-purple">
                        {minds[activeMind].title}
                      </h3>
                      <p className={`text-xs font-bold uppercase tracking-wider ${minds[activeMind].color}`}>
                        {minds[activeMind].subtitle}
                      </p>
                    </div>
                  </div>

                  <p className="text-base text-brand-dark/85 leading-relaxed font-semibold">
                    {minds[activeMind].description}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
