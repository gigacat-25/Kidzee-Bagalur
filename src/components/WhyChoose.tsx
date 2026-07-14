"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Award, ShieldAlert, Heart, Activity } from "lucide-react";
import { IMAGES } from "@/config/images";

export default function WhyChoose() {
  const cards = [
    {
      title: "ILLUME Pedagogy",
      description: "A scientifically designed curriculum for holistic development.",
      icon: <Activity className="w-6 h-6 text-[#AF52DE]" />,
      iconBg: "bg-[#AF52DE]/10",
      maskClass: "mask-square",
      image: IMAGES.whyChoose.illume,
      borderCol: "border-[#AF52DE]/20",
    },
    {
      title: "Expert Educators",
      description: "Experienced, ECCE-certified teachers helping kids discover their full potential.",
      icon: <Heart className="w-6 h-6 text-[#FF3B30]" />,
      iconBg: "bg-[#FF3B30]/10",
      maskClass: "mask-circle",
      image: IMAGES.whyChoose.educator,
      borderCol: "border-[#FF3B30]/20",
    },
    {
      title: "Safe & Caring Environment",
      description: "Child safety and comfort are our highest priorities.",
      icon: <ShieldAlert className="w-6 h-6 text-[#34C759]" />,
      iconBg: "bg-[#34C759]/10",
      maskClass: "mask-tilted",
      image: IMAGES.whyChoose.safe,
      borderCol: "border-[#34C759]/20",
    },
    {
      title: "Confidence & Independence",
      description: "Kids become more confident in expressing themselves.",
      icon: <Award className="w-6 h-6 text-brand-yellow" />,
      iconBg: "bg-brand-yellow/10",
      maskClass: "mask-triangle",
      image: IMAGES.whyChoose.confidence,
      borderCol: "border-brand-yellow/20",
    },
  ];

  return (
    <section className="py-20 md:py-28 bg-brand-lavender relative overflow-hidden">
      {/* Connecting Dotted SVG Path - Desktop Only */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block z-0">
        <svg className="w-full h-full text-brand-purple/20 stroke-current" fill="none">
          <path
            d="M 220 380 Q 380 220 540 380 T 860 380"
            strokeWidth="3"
            strokeDasharray="8 8"
          />
          <path
            d="M 540 380 Q 700 540 860 380"
            strokeWidth="3"
            strokeDasharray="8 8"
            className="opacity-70"
          />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-brand-purple font-fredoka font-bold mb-4">
            Why Choose Kidzee?
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/70 font-semibold">
            Nurturing a warm, creative environment to support early childhood care and education.
          </p>
        </div>

        {/* 4 Cards Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="bg-white p-6 rounded-[32px] border-2 border-transparent hover:border-brand-purple/10 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col items-center text-center"
            >
              {/* Shaped Mask Image container */}
              <div className="relative w-36 h-36 mb-6 flex items-center justify-center">
                {/* Colored border outline following mask shape */}
                <div
                  className={`absolute inset-[-4px] border-2 border-dashed ${card.borderCol} ${
                    card.maskClass === "mask-square"
                      ? "rounded-3xl"
                      : card.maskClass === "mask-circle"
                      ? "rounded-full"
                      : card.maskClass === "mask-tilted"
                      ? "rounded-3xl -rotate-[3deg]"
                      : "clip-triangle scale-110"
                  }`}
                />
                
                {/* Masked Image */}
                <div className={`relative w-full h-full overflow-hidden ${card.maskClass}`}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    sizes="150px"
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Icon & Title */}
              <div className="flex flex-col items-center gap-3 mb-4">
                <div className={`p-3 ${card.iconBg} rounded-2xl`}>
                  {card.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-fredoka font-bold text-brand-purple">
                  {card.title}
                </h3>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base text-brand-dark/75 leading-relaxed font-medium">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
