"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Heart, School, MapPin, Sparkles, Star, MessageSquare } from "lucide-react";

interface CounterProps {
  value: number;
  duration?: number;
}

function Counter({ value, duration = 1.5 }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const end = value;
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 15);
    
    const timer = setInterval(() => {
      start += Math.ceil(end / (totalMiliseconds / incrementTime));
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function Stats() {
  const statsData = [
    {
      icon: <Heart className="w-8 h-8 text-[#FF3B30] fill-[#FF3B30]/10" />,
      label: "Support",
      value: 100,
      suffix: "%",
      color: "border-[#FF3B30]/20 hover:border-[#FF3B30]",
    },
    {
      icon: <School className="w-8 h-8 text-brand-purple fill-brand-purple/10" />,
      label: "Preschools",
      value: 2000,
      suffix: "+",
      color: "border-brand-purple/20 hover:border-brand-purple",
    },
    {
      icon: <MapPin className="w-8 h-8 text-[#34C759] fill-[#34C759]/10" />,
      label: "Cities",
      value: 750,
      suffix: "+",
      color: "border-[#34C759]/20 hover:border-[#34C759]",
    },
    {
      icon: <Sparkles className="w-8 h-8 text-brand-yellow fill-brand-yellow/10" />,
      label: "Learning Elements",
      value: 700,
      suffix: "+",
      color: "border-brand-yellow/20 hover:border-brand-yellow",
    },
    {
      icon: <Star className="w-8 h-8 text-[#FF9500] fill-[#FF9500]/10" />,
      label: "Google Rating",
      value: 4.9,
      suffix: " ⭐",
      isFloat: true,
      color: "border-[#FF9500]/20 hover:border-[#FF9500]",
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-[#5AC8FA] fill-[#5AC8FA]/10" />,
      label: "Google Reviews",
      value: 36,
      suffix: "+",
      color: "border-[#5AC8FA]/20 hover:border-[#5AC8FA]",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-brand-lavender relative overflow-hidden">
      {/* Decorative dots in background */}
      <div className="absolute inset-0 pointer-events-none opacity-20 select-none">
        <div className="absolute top-10 left-10 w-24 h-24 border-4 border-brand-purple border-dashed rounded-full" />
        <div className="absolute bottom-10 right-10 w-32 h-32 border-4 border-brand-yellow border-dashed rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8">
          {statsData.map((stat, idx) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)" }}
              className={`flex flex-col items-center text-center p-6 bg-white border-2 ${stat.color} rounded-3xl shadow-md transition-all duration-300`}
            >
              {/* Icon Container */}
              <div className="mb-4 p-3 bg-brand-lavender/50 rounded-2xl flex items-center justify-center">
                {stat.icon}
              </div>

              {/* Metric Value */}
              <span className="text-3xl sm:text-4xl font-fredoka font-bold text-brand-dark flex items-center justify-center">
                {stat.isFloat ? (
                  <>
                    <span>4.9</span>
                    <span className="text-xl ml-1 text-[#FFD400]">⭐</span>
                  </>
                ) : (
                  <>
                    <Counter value={stat.value} />
                    <span className="text-xl sm:text-2xl ml-0.5 text-brand-purple">{stat.suffix}</span>
                  </>
                )}
              </span>

              {/* Metric Label */}
              <span className="text-xs sm:text-sm text-brand-dark/70 font-bold uppercase tracking-wider mt-2">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
