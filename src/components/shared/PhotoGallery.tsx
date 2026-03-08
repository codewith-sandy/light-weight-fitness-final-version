"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";

const photos = [
  "arms machine.jpg",
  "back machine 2.jpg",
  "back machine 3.jpg",
  "back machine.jpg",
  "cardio section 1.jpg",
  "cardio section 2.jpg",
  "cardio section 3.jpg",
  "chess press 2.jpg",
  "chest machine.jpg",
  "chest press.jpg",
  "equipment 1.jpg",
  "equipment 2.jpg",
  "equipment 4.jpg",
  "equipment 5.jpg",
  "equipment 6.jpg",
  "equipment 7.jpg",
  "equipmwnt 3.jpg",
  "gym outside.jpg",
  "gym overview 2.jpg",
  "gym overview 3.jpg",
  "gym overview.jpg",
  "inner quads machine.jpg",
  "leg equipment 2.jpg",
  "leg equipment.jpg",
  "pull up machine.jpg",
  "shouler press.jpg",
  "squats machine.jpg",
];

export function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedPhoto(index);
  const closeLightbox = () => setSelectedPhoto(null);

  const nextPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto + 1) % photos.length);
    }
  };

  const prevPhoto = () => {
    if (selectedPhoto !== null) {
      setSelectedPhoto((selectedPhoto - 1 + photos.length) % photos.length);
    }
  };

  return (
    <div className="w-full py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {photos.map((photo, index) => (
            <motion.div
              key={photo}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (index % 8) * 0.05 }}
              whileHover={{ scale: 1.02 }}
              className="relative group aspect-square overflow-hidden rounded-xl bg-[#1A1A1A] border border-white/5 cursor-pointer"
              onClick={() => openLightbox(index)}
            >
              <Image
                src={`/photos/${photo}`}
                alt={photo.replace(".jpg", "")}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                <div className="flex justify-between items-center w-full">
                  <span className="text-white text-xs uppercase tracking-widest font-medium">
                    {photo.replace(".jpg", "")}
                  </span>
                  <Maximize2 className="w-4 h-4 text-[#E50914]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedPhoto !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-10"
            onClick={closeLightbox}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white z-[110]"
              onClick={closeLightbox}
            >
              <X size={32} />
            </button>

            <button
              className="absolute left-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#E50914] transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                prevPhoto();
              }}
            >
              <ChevronLeft size={48} />
            </button>

            <button
              className="absolute right-6 top-1/2 -translate-y-1/2 text-white/50 hover:text-[#E50914] transition-colors z-[110]"
              onClick={(e) => {
                e.stopPropagation();
                nextPhoto();
              }}
            >
              <ChevronRight size={48} />
            </button>

            <motion.div
              layoutId={`photo-${photos[selectedPhoto]}`}
              className="relative w-full max-w-5xl aspect-[4/3] md:aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={`/photos/${photos[selectedPhoto]}`}
                alt={photos[selectedPhoto]}
                fill
                className="object-contain"
                priority
              />
              <div className="absolute -bottom-12 left-0 w-full text-center">
                <p className="text-white text-lg font-bebas-neue tracking-widest uppercase">
                  {photos[selectedPhoto].replace(".jpg", "")}
                </p>
                <p className="text-[#B3B3B3] text-sm">
                  {selectedPhoto + 1} / {photos.length}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
