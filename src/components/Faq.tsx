"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

export default function Faq() {
  const faqs = [
    {
      question: "What age can my child join?",
      answer: "Children can join our Playgroup from 1.5 years of age. We offer structured kindergarten classes for kids up to 5.5 years, and daycare support for kids aged 1.5 to 8 years.",
    },
    {
      question: "What curriculum does Kidzee follow?",
      answer: "We follow Kidzee's proprietary, scientific PéNTEMiND pedagogy. It is designed to stimulate brain development across five essential domains: Inventive, Analytical, Empathetic, Conscientious, and Creative minds.",
    },
    {
      question: "Do you provide daycare?",
      answer: "Yes, we provide full-day and half-day premium daycare facilities. Our day care features sanitized nap areas, homework guidance, indoor play, and nannies trained in infant care and safety.",
    },
    {
      question: "Can parents visit the campus?",
      answer: "Absolutely! We encourage parents to visit our campus behind the Airports Authority of India Residential Colony, KIADB Bagalur. Visits are scheduled by booking online or calling our team.",
    },
    {
      question: "How do admissions work?",
      answer: "Admissions are open year-round based on slot availability. You can submit an enquiry via our Contact Form, schedule a short campus tour, submit the child's documentation, and finalize registration.",
    },
  ];

  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Background doodles */}
      <div className="absolute top-[10%] left-[-5%] w-60 h-60 bg-brand-lavender/50 blob-shape-3 blur-3xl pointer-events-none opacity-50" />

      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-lavender text-brand-purple rounded-full text-xs font-bold w-fit mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>COMMON QUESTIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-brand-purple font-fredoka font-bold">
            Frequently Asked Questions
          </h2>
        </div>

        {/* Accordions List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className="bg-white border-2 border-brand-yellow rounded-3xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
              >
                {/* Header Button */}
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex items-center justify-between p-5 text-left focus:outline-none"
                >
                  <span className="text-base sm:text-lg font-fredoka font-bold text-brand-purple pr-4 leading-tight">
                    {faq.question}
                  </span>
                  <div className="shrink-0 p-1.5 bg-brand-lavender rounded-full text-brand-purple transition-transform duration-200">
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5" />
                    ) : (
                      <ChevronDown className="w-5 h-5" />
                    )}
                  </div>
                </button>

                {/* Animated Answer Body */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-5 pb-5 pt-1 text-sm sm:text-base font-semibold text-brand-dark/75 leading-relaxed border-t border-brand-yellow/30 bg-brand-lavender/10">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
