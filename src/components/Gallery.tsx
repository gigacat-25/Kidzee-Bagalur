"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Maximize2, Image as ImageIcon, Filter } from "lucide-react";
import { IMAGES, GalleryPhoto } from "@/config/images";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

  const categories = ["All", "Campus Life", "Classroom", "Activities", "Learning", "Outdoors", "Events", "Daycare"];

  const filteredPhotos: GalleryPhoto[] = activeCategory === "All"
    ? IMAGES.gallery
    : IMAGES.gallery.filter((photo) => photo.category === activeCategory);

  const openLightbox = (index: number) => {
    setLightboxIdx(index);
  };

  const closeLightbox = () => {
    setLightboxIdx(null);
  };

  const showPrev = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx - 1 + filteredPhotos.length) % filteredPhotos.length);
    }
  };

  const showNext = (e?: React.MouseEvent) => {
    if (e) e.stopPropagation();
    if (lightboxIdx !== null) {
      setLightboxIdx((lightboxIdx + 1) % filteredPhotos.length);
    }
  };

  return (
    <section id="gallery" className="py-20 md:py-28 bg-brand-lavender relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-[20%] right-[-5%] w-64 h-64 bg-brand-purple/10 blob-shape-3 blur-3xl pointer-events-none" />
      <div className="absolute bottom-[10%] left-[-5%] w-72 h-72 bg-brand-yellow/20 blob-shape-1 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-brand-purple/10 text-brand-purple rounded-full text-xs font-bold w-fit mb-3">
            <ImageIcon className="w-3.5 h-3.5" />
            <span>AUTHENTIC KIDZEE BAGALUR PHOTOS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl text-brand-purple font-fredoka font-bold mb-4">
            Our Campus Gallery
          </h2>
          <p className="text-base sm:text-lg text-brand-dark/70 font-semibold">
            Take a look inside Kidzee KIADB Bagalur - vibrant classrooms, play zones, learning activities, and joyful moments.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          <div className="hidden sm:flex items-center gap-1 text-xs font-bold text-brand-purple/60 mr-2">
            <Filter className="w-3.5 h-3.5" />
            <span>Filter:</span>
          </div>
          {categories.map((category) => {
            const isActive = activeCategory === category;
            return (
              <button
                key={category}
                onClick={() => {
                  setActiveCategory(category);
                  setLightboxIdx(null);
                }}
                className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold font-fredoka transition-all duration-300 ${
                  isActive
                    ? "bg-brand-purple text-white shadow-md scale-105"
                    : "bg-white/80 text-brand-purple/80 hover:bg-white hover:text-brand-purple hover:shadow-sm"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Masonry Columns Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredPhotos.map((photo, index) => (
            <motion.div
              key={`${photo.title}-${index}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.4 }}
              whileHover={{ y: -6 }}
              onClick={() => openLightbox(index)}
              className="relative rounded-[32px] overflow-hidden group cursor-pointer shadow-md hover:shadow-2xl border-4 border-white transition-all duration-300 break-inside-avoid bg-white"
            >
              {/* Image element with thumbnail fallback */}
              <img
                src={photo.thumb || photo.url}
                alt={photo.title}
                loading="lazy"
                onError={(e) => {
                  e.currentTarget.src = photo.url;
                }}
                className="w-full h-auto object-cover rounded-[28px] transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay details */}
              <div className="absolute inset-0 bg-brand-purple/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6 z-10">
                <span className="text-brand-yellow font-fredoka font-bold text-xs uppercase tracking-widest mb-1">
                  {photo.category}
                </span>
                <h3 className="text-white font-fredoka font-bold text-lg sm:text-xl mb-1 flex items-center justify-between">
                  {photo.title}
                  <Maximize2 className="w-4 h-4 text-white opacity-80 shrink-0 ml-2" />
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal Dialog */}
      <AnimatePresence>
        {lightboxIdx !== null && filteredPhotos[lightboxIdx] && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 bg-black/95 z-[9999] flex items-center justify-center p-4 sm:p-6"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white hover:text-brand-yellow p-2 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50 focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Left Control Arrow */}
            <button
              onClick={showPrev}
              className="absolute left-2 sm:left-6 text-white hover:text-brand-yellow p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50 focus:outline-none"
              aria-label="Previous Image"
            >
              <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>

            {/* Lightbox Content Area */}
            <motion.div
              key={lightboxIdx}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              drag="x"
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0.5}
              onDragEnd={(e, info) => {
                if (info.offset.x < -50) {
                  showNext();
                } else if (info.offset.x > 50) {
                  showPrev();
                }
              }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl max-h-[85vh] flex flex-col items-center z-40 cursor-grab active:cursor-grabbing select-none px-4"
            >
              <img
                src={filteredPhotos[lightboxIdx].url}
                alt={filteredPhotos[lightboxIdx].title}
                className="max-w-full max-h-[65vh] object-contain rounded-2xl border-4 border-white shadow-2xl pointer-events-none"
              />
              <div className="mt-4 text-center">
                <span className="text-brand-yellow font-fredoka font-bold text-xs uppercase tracking-widest">
                  {filteredPhotos[lightboxIdx].category}
                </span>
                <h3 className="text-white font-fredoka font-bold text-lg sm:text-xl mt-1">
                  {filteredPhotos[lightboxIdx].title}
                </h3>
              </div>
            </motion.div>

            {/* Right Control Arrow */}
            <button
              onClick={showNext}
              className="absolute right-2 sm:right-6 text-white hover:text-brand-yellow p-2 sm:p-3 rounded-full bg-white/10 hover:bg-white/20 transition-all z-50 focus:outline-none"
              aria-label="Next Image"
            >
              <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
