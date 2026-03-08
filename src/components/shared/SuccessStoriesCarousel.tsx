"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

// Mock Data
const stories = [
  {
    id: 1,
    name: "Alex Thorne",
    duration: "6 Months",
    quote: "The structure and personalized guidance completely changed how I look at fitness. I'm stronger than ever.",
    beforeImg: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
    category: "Muscle Gain",
  },
  {
    id: 2,
    name: "Marcus Reid",
    duration: "8 Months",
    quote: "I struggled with consistency for years. This program finally cracked the code for me.",
    beforeImg: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop",
    category: "Fat Loss",
  },
  {
    id: 3,
    name: "Sarah Jenkins",
    duration: "4 Months",
    quote: "Incredible transformation not just physically, but mentally. The nutrition guidelines were a game changer.",
    beforeImg: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
    afterImg: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=2070&auto=format&fit=crop",
    category: "General Fitness",
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

      <div className="relative max-w-5xl mx-auto px-4 md:px-12">
        
        {/* Carousel Container */}
        <motion.div 
          key={story.id}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden shadow-2xl"
        >
          <div className="flex flex-col md:flex-row">
            
            {/* Images Section */}
            <div className="w-full md:w-1/2 flex relative min-h-[400px]">
              <div className="w-1/2 relative bg-black">
                <div 
                  className="absolute inset-0 bg-cover bg-center opacity-60 grayscale hover:grayscale-0 transition-all duration-500" 
                  style={{ backgroundImage: `url(${story.beforeImg})` }} 
                />
                <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded text-xs uppercase tracking-widest border border-white/20">
                  Before
                </div>
              </div>
              <div className="w-1/2 relative bg-black border-l border-[#E50914]/30">
                <div 
                  className="absolute inset-0 bg-cover bg-center transition-all duration-500 hover:scale-105" 
                  style={{ backgroundImage: `url(${story.afterImg})` }} 
                />
                <div className="absolute top-4 right-4 bg-[#E50914]/90 text-black px-3 py-1 rounded text-xs uppercase tracking-widest font-bold shadow-[0_0_15px_rgba(57,255,20,0.4)]">
                  After
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center relative bg-gradient-to-br from-[#1A1A1A] to-[#0F0F0F]">
              <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5 rotate-180" />
              
              <div className="inline-block px-3 py-1 rounded border border-[#E50914]/30 text-[#E50914] text-xs uppercase tracking-widest font-semibold mb-6 w-fit">
                {story.category}
              </div>
              
              <h3 className="font-bebas-neue text-5xl tracking-wide uppercase mb-2">{story.name}</h3>
              <p className="text-[#B3B3B3] uppercase tracking-widest text-sm mb-8 border-b border-white/10 pb-4 inline-block">
                Transformation Time: <span className="text-white font-semibold">{story.duration}</span>
              </p>
              
              <p className="text-lg md:text-xl font-light italic leading-relaxed text-white/90 relative z-10">
                "{story.quote}"
              </p>
            </div>

          </div>
        </motion.div>

        {/* Controls */}
        <button 
          onClick={handlePrev}
          className="absolute left-0 md:left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#E50914] text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur transition-all border border-white/10 hover:border-transparent z-10 hidden md:flex"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        
        <button 
          onClick={handleNext}
          className="absolute right-0 md:right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/50 hover:bg-[#E50914] text-white hover:text-black rounded-full flex items-center justify-center backdrop-blur transition-all border border-white/10 hover:border-transparent z-10 hidden md:flex"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {stories.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-3 h-3 rounded-full transition-all ${
                idx === currentIndex ? "bg-[#E50914] w-8" : "bg-white/20 hover:bg-white/50"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}
