"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      name: "Harshith Harsha",
      rating: 5,
      text: "We are extremely happy with Kidzee Preschool KIADB. From day one, the teachers have been caring, dedicated and welcoming. The environment is clean and helped our child settle comfortably.",
      bgInitials: "bg-[#FF3B30]",
    },
    {
      name: "Prema Radhakrishnan",
      rating: 5,
      text: "Choosing Kidzee Preschool has been a rewarding experience. The teachers are warm, patient and attentive. The curriculum perfectly blends learning with play.",
      bgInitials: "bg-[#34C759]",
    },
    {
      name: "Yashaswini Nudhurumati",
      rating: 5,
      text: "A very good school with experienced teachers. Excellent infrastructure and a safe learning environment.",
      bgInitials: "bg-[#AF52DE]",
    },
    {
      name: "Anand KT",
      rating: 5,
      text: "My child loves going to school every day. Learning is fun, engaging and creative.",
      bgInitials: "bg-[#FF9500]",
    },
    {
      name: "Lekshmi Krishnan",
      rating: 5,
      text: "I am impressed with the administration and welcoming staff. Everything was seamless.",
      bgInitials: "bg-[#5AC8FA]",
    },
    {
      name: "Saranya Lakshmi",
      rating: 5,
      text: "Clean, safe and child-friendly environment with excellent daycare facilities.",
      bgInitials: "bg-pink-500",
    },
    {
      name: "Bhaskar Appu",
      rating: 5,
      text: "Excellent teaching methods, friendly staff and a clean campus.",
      bgInitials: "bg-teal-500",
    },
    {
      name: "Komal Daga",
      rating: 5,
      text: "Amazing infrastructure and friendly teachers. Best preschool for kids.",
      bgInitials: "bg-indigo-500",
    },
  ];

  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0); // -1: left, 1: right
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const slideVariants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.4 },
    },
    exit: (dir: number) => ({
      x: dir < 0 ? 100 : -100,
      opacity: 0,
      transition: { duration: 0.4 },
    }),
  };

  const handleNext = useCallback(() => {
    setDirection(1);
    setIndex((prevIndex) => (prevIndex + 1) % reviews.length);
  }, [reviews.length]);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length);
  }, [reviews.length]);

  useEffect(() => {
    if (isHovered) {
      if (timerRef.current) clearInterval(timerRef.current);
      return;
    }

    timerRef.current = setInterval(() => {
      handleNext();
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isHovered, handleNext]);

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };

  return (
    <section
      id="reviews"
      className="relative py-24 md:py-28 bg-brand-purple text-white overflow-hidden"
      style={{ borderRadius: "80px 80px 80px 80px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Decorative stars */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 opacity-10">
        <svg className="w-full h-full fill-current text-white" viewBox="0 0 100 100">
          <polygon points="10,10 12,15 17,15 13,18 15,23 10,20 5,23 7,18 3,15 8,15" />
          <polygon points="90,80 92,85 97,85 93,88 95,93 90,90 85,93 87,88 83,85 88,85" />
        </svg>
      </div>

      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-brand-yellow/15 text-brand-yellow rounded-full text-xs font-bold w-fit mb-3">
            <Quote className="w-3.5 h-3.5 rotate-180 fill-brand-yellow/10" />
            <span>PARENT TESTIMONIALS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-fredoka font-bold">
            What Parents Say About Us
          </h2>
        </div>

        {/* Carousel Content Box */}
        <div className="relative flex flex-col items-center min-h-[360px] sm:min-h-[290px] md:min-h-[250px] justify-center px-6 sm:px-12">
          
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.4}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) {
                  handleNext();
                } else if (info.offset.x > 50) {
                  handlePrev();
                }
              }}
              className="w-full text-center flex flex-col items-center cursor-grab active:cursor-grabbing select-none"
            >
              {/* Profile Avatar / Initials */}
              <div className="w-20 h-20 rounded-full border-4 border-white/90 shadow-xl flex items-center justify-center mb-4 overflow-hidden relative select-none">
                <div className={`w-full h-full flex items-center justify-center text-white text-2xl font-fredoka font-black ${reviews[index].bgInitials}`}>
                  {getInitials(reviews[index].name)}
                </div>
              </div>

              {/* Stars rating */}
              <div className="flex gap-1 mb-4 text-[#FFD400]">
                {Array.from({ length: reviews[index].rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-base sm:text-lg md:text-xl font-fredoka leading-relaxed font-semibold italic text-brand-lavender max-w-2xl mb-6">
                &ldquo;{reviews[index].text}&rdquo;
              </blockquote>

              {/* Author name */}
              <cite className="not-italic text-sm sm:text-base font-bold text-white tracking-wider uppercase font-fredoka">
                — {reviews[index].name}
              </cite>
            </motion.div>
          </AnimatePresence>

          {/* Left Arrow Button */}
          <button
            onClick={handlePrev}
            className="absolute left-[-15px] sm:left-[-30px] top-1/2 -translate-y-1/2 text-white/70 hover:text-brand-yellow bg-white/10 hover:bg-white/20 p-2.5 rounded-full z-20 transition-all border border-white/20 focus:outline-none"
            aria-label="Previous Testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Right Arrow Button */}
          <button
            onClick={handleNext}
            className="absolute right-[-15px] sm:right-[-30px] top-1/2 -translate-y-1/2 text-white/70 hover:text-brand-yellow bg-white/10 hover:bg-white/20 p-2.5 rounded-full z-20 transition-all border border-white/20 focus:outline-none"
            aria-label="Next Testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Carousel Indicators / Dots */}
        <div className="flex justify-center gap-2.5 mt-8 z-20 relative">
          {reviews.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                index === i ? "w-7 bg-brand-yellow" : "w-2.5 bg-white/30"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
