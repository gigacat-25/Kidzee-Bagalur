"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Clock, Baby, ArrowRight, Sparkles, BookOpen, Star, ToyBrick, Home } from "lucide-react";
import { IMAGES } from "@/config/images";

export default function Programs() {
  const programs = [
    {
      title: "Playgroup",
      age: "1.5 - 2.5 Years",
      duration: "2 Hours / Day",
      description: "Fostering early sensory skills, fine motor skills, language development, and social skills through fun, structured play.",
      image: IMAGES.programs.playgroup,
      icon: <Baby className="w-6 h-6 text-brand-purple" />,
      color: "from-pink-400 to-[#AF52DE]",
      badgeColor: "bg-pink-100 text-pink-700",
    },
    {
      title: "Nursery",
      age: "2.5 - 3.5 Years",
      duration: "2.5 Hours / Day",
      description: "Introducing kids to early writing, pre-reading, mathematical concepts, and creative crafts in a group environment.",
      image: IMAGES.programs.nursery,
      icon: <ToyBrick className="w-6 h-6 text-[#FF9500]" />,
      color: "from-orange-400 to-brand-yellow",
      badgeColor: "bg-orange-100 text-orange-700",
    },
    {
      title: "Junior KG",
      age: "3.5 - 4.5 Years",
      duration: "3.5 Hours / Day",
      description: "Deepening letter sounds, basic writing, science exploration, and cognitive logic to stimulate curious minds.",
      image: IMAGES.programs.juniorKg,
      icon: <BookOpen className="w-6 h-6 text-[#34C759]" />,
      color: "from-green-400 to-[#34C759]",
      badgeColor: "bg-green-100 text-green-700",
    },
    {
      title: "Senior KG",
      age: "4.5 - 5.5 Years",
      duration: "3.5 Hours / Day",
      description: "Preparing child for formal school entry with grammar, vocabulary, advanced arithmetic, and public speaking confidence.",
      image: IMAGES.programs.seniorKg,
      icon: <Star className="w-6 h-6 text-[#5AC8FA]" />,
      color: "from-blue-400 to-[#5AC8FA]",
      badgeColor: "bg-blue-100 text-blue-700",
    },
    {
      title: "Day Care",
      age: "1.5 - 8 Years",
      duration: "Full / Half Day",
      description: "A cozy, highly safe home-away-from-home featuring sanitary sleeping areas, meals, homework support, and indoor play.",
      image: IMAGES.programs.daycare,
      icon: <Home className="w-6 h-6 text-[#FF3B30]" />,
      color: "from-red-400 to-[#FF3B30]",
      badgeColor: "bg-red-100 text-red-700",
    },
  ];

  const handleScrollToAdmissions = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const target = document.querySelector("#admissions");
    if (target) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = target.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="programmes" className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-[15%] left-[-5%] w-64 h-64 bg-brand-lavender/40 blob-shape-2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-5%] w-72 h-72 bg-brand-yellow/10 blob-shape-1 blur-2xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-brand-lavender text-brand-purple rounded-full text-xs font-bold w-fit mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>KIDZEE PROGRAMMES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-brand-purple font-fredoka font-bold mb-4">
            Our Learning Programmes
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/70 font-semibold">
            Pedagogies tailored for each age group to build exploration, care, and confidence.
          </p>
        </div>

        {/* 5-Column / Responsive wrapping Grid */}
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-6 scrollbar-none -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4 justify-center w-auto">
          {programs.map((prog, idx) => (
            <motion.div
              key={prog.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-[32px] overflow-hidden border-2 border-brand-lavender hover:border-brand-purple/20 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col h-full w-[285px] shrink-0 snap-center md:w-auto md:shrink"
            >
              {/* Top Image Container */}
              <div className="relative h-44 w-full overflow-hidden">
                <Image
                  src={prog.image}
                  alt={prog.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 250px"
                  className="object-cover object-center transition-transform duration-500 hover:scale-110"
                />
                
                {/* Floating circular icon */}
                <div className="absolute -bottom-6 left-6 p-3 bg-white rounded-full shadow-lg border-2 border-brand-lavender z-20 flex items-center justify-center">
                  {prog.icon}
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 pt-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-fredoka font-bold text-brand-purple mb-3">
                    {prog.title}
                  </h3>
                  
                  {/* Badges */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="flex items-center gap-1 px-2.5 py-1 bg-brand-lavender text-brand-purple font-fredoka font-semibold text-xs rounded-full">
                      <Baby className="w-3 h-3" />
                      {prog.age}
                    </span>
                    <span className="flex items-center gap-1 px-2.5 py-1 bg-brand-yellow/20 text-brand-dark/80 font-fredoka font-semibold text-xs rounded-full">
                      <Clock className="w-3 h-3 text-[#FF9500]" />
                      {prog.duration}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-brand-dark/75 leading-relaxed font-semibold mb-6">
                    {prog.description}
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={handleScrollToAdmissions}
                  className="w-full py-2.5 px-4 bg-brand-purple hover:bg-brand-purple/90 text-white font-fredoka font-bold rounded-full text-xs hover:scale-105 active:scale-95 transition-transform duration-200 flex items-center justify-center gap-1 shadow-sm mt-auto"
                >
                  Admissions Enquiry
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
