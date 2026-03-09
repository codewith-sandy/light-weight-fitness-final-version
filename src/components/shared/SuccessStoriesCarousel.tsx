"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Actual Transformation Data
const stories = [
  {
    id: 1,
    name: "Transformation 1",
    duration: "3 Months",
    quote: "Incredible progress in strength and endurance. The consistency really paid off!",
    image: "/photos/transformation/trans 1.jpg",
    category: "Muscle Gain",
  },
  {
    id: 2,
    name: "Transformation 2",
    duration: "6 Months",
    quote: "A complete lifestyle change. Feeling more energetic and healthy every day.",
    image: "/photos/transformation/trans 2.jpg",
    category: "Fat Loss",
  },
  {
    id: 3,
    name: "Transformation 3",
    duration: "5 Months",
    quote: "The transformation exceeded my expectations. Grateful for the guidance!",
    image: "/photos/transformation/trans 3.jpg",
    category: "Body Recomposition",
  },
  {
    id: 4,
    name: "Transformation 4",
    duration: "8 Months",
    quote: "Persistence is key. The results speak for themselves. Highly recommended!",
    image: "/photos/transformation/trans 4.webp",
    category: "Weight Loss",
  },
  {
    id: 5,
    name: "Transformation 5",
    duration: "3 Months",
    quote: "Hard work pays off. The program was challenging but rewarding.",
    image: "/photos/transformation/trans 5.jpg", // Added .jpg extension
    category: "General Fitness",
  },
  {
    id: 6,
    name: "Transformation 6",
    duration: "12 Months",
    quote: "A year of dedication turned into the best shape of my life.",
    image: "/photos/transformation/trans 6.jpg", // Fixed typo tans -> trans
    category: "Athlete Prep",
  },
  {
    id: 7,
    name: "Transformation 7",
    duration: "4 Months",
    quote: "Focused training and better nutrition made all the difference.",
    image: "/photos/transformation/trans 7.jpg",
    category: "Muscle Toning",
  },
  {
    id: 8,
    name: "Transformation 8",
    duration: "7 Months",
    quote: "Small steps every day led to a huge impact in the long run.",
    image: "/photos/transformation/trans 8.jpg",
    category: "Powerlifting",
  },
  {
    id: 9,
    name: "Transformation 9",
    duration: "5 Months",
    quote: "Transforming my physique gave me so much more confidence.",
    image: "/photos/transformation/trans 9.jpg",
    category: "Bodybuilding",
  }
];

export function SuccessStoriesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(handleNext, 8000);
    return () => clearInterval(timer);
  }, []);

  const story = stories[currentIndex];

  return (
    <div className="w-full relative py-12">
      <div className="text-center mb-16">
        <h2 className="font-bebas-neue text-5xl md:text-6xl tracking-widest uppercase mb-4">Real Results</h2>
        <div className="w-24 h-1 bg-[#E50914] mx-auto" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-12 mb-20">

        {/* Carousel Container */}
        <motion.div
          key={story.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col lg:flex-row min-h-[450px]">

            {/* Images Section */}
            <div className="w-full lg:w-1/2 h-[350px] lg:h-auto relative bg-black overflow-hidden">
              <motion.div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('${story.image}')` }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 1.05 }}
                transition={{ duration: 0.7 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 flex gap-2">
                <span className="bg-[#E50914] text-black px-3 py-1 rounded text-[10px] uppercase tracking-widest font-black">Success Story</span>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full lg:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F]">
              <Quote className="absolute top-8 right-8 w-16 h-16 text-white/5 rotate-180" />

              <div className="inline-block px-3 py-1 rounded border border-[#E50914]/30 text-[#E50914] text-xs uppercase tracking-widest font-semibold mb-6 w-fit">
                {story.category}
              </div>

              <h3 className="font-bebas-neue text-4xl tracking-wide uppercase mb-2">{story.name}</h3>
              <p className="text-[#B3B3B3] uppercase tracking-widest text-[11px] mb-8 border-b border-white/10 pb-4 inline-block">
                Timeframe: <span className="text-white font-semibold">{story.duration}</span>
              </p>

              <p className="text-lg font-light italic leading-relaxed text-white/90 relative z-10">
                "{story.quote}"
              </p>
            </div>

          </div>
        </motion.div>

        {/* Controls */}
        <button
          onClick={handlePrev}
          className="absolute left-0 md:left-4 top-[175px] lg:top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-[#E50914] text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur transition-all border border-white/10 hover:border-transparent z-10 hidden md:flex"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>

        <button
          onClick={handleNext}
          className="absolute right-0 md:right-4 top-[175px] lg:top-1/2 -translate-y-1/2 w-10 h-10 bg-black/50 hover:bg-[#E50914] text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur transition-all border border-white/10 hover:border-transparent z-10 hidden md:flex"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {stories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-1 rounded-full transition-all ${idx === currentIndex ? "bg-[#E50914] w-8" : "bg-white/20 w-3 hover:bg-white/50"
                }`}
            />
          ))}
        </div>
      </div>

      {/* Grid View of All Results */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h3 className="font-bebas-neue text-4xl tracking-tight uppercase mb-2">Wall of <span className="text-[#E50914]">Greatness</span></h3>
            <p className="text-[#B3B3B3] max-w-xl">Browse our complete collection of transformations that showcase the power of dedication and expert training.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stories.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group relative bg-[#1A1A1A] border border-white/5 rounded-xl overflow-hidden hover:border-[#E50914]/50 transition-all cursor-pointer"
              onClick={() => setCurrentIndex(idx)}
            >
              <div className="aspect-[4/5] relative">
                <motion.div
                  className="absolute inset-0 bg-cover bg-center grayscale md:grayscale"
                  style={{ backgroundImage: `url('${item.image}')` }}
                  whileHover={{ scale: 1.1, filter: "grayscale(0%)" }}
                  whileTap={{ scale: 1.1, filter: "grayscale(0%)" }}
                  transition={{ duration: 0.7 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                  <p className="text-[#E50914] text-[10px] uppercase tracking-widest font-black mb-1">{item.category}</p>
                  <h4 className="font-bebas-neue text-2xl tracking-wide uppercase">{item.name}</h4>
                  <p className="text-white/60 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">{item.duration} Transformation</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
