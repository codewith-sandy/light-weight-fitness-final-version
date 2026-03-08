"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Dumbbell } from "lucide-react";
import { useState, useEffect } from "react";

export default function Template({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Ensure we start at top of page on route change
    window.scrollTo(0, 0);
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); // 1.5s loading animation presence

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#0F0F0F] flex flex-col items-center justify-center p-4 isolate"
          >
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] max-w-[400px] max-h-[400px] bg-[#E50914] opacity-[0.05] blur-[80px] rounded-full pointer-events-none -z-10" />
            
            {/* Gym Icon Animation */}
            <motion.div
              animate={{ 
                scale: [1, 1.15, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 1.2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
              className="text-[#E50914] mb-8 relative"
            >
              <Dumbbell className="w-16 h-16 md:w-20 md:h-20" />
              <motion.div 
                className="absolute inset-0 border border-[#E50914] rounded-full"
                animate={{ scale: [1, 1.5], opacity: [0.8, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: "easeOut" }}
              />
            </motion.div>
            
            {/* Loading text */}
            <h2 className="font-bebas-neue text-3xl md:text-5xl tracking-widest text-white uppercase mb-4 text-center">
              Forging <span className="text-[#E50914]">Discipline</span>
            </h2>
            
            {/* Progress Bar */}
            <div className="w-48 md:w-64 h-1.5 bg-white/10 rounded-full overflow-hidden mt-4 relative">
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.3, ease: "circOut" }}
                className="absolute inset-y-0 left-0 bg-[#E50914] shadow-[0_0_10px_#E50914]"
              />
            </div>
            
            {/* Developer Credits Ad */}
            <div className="absolute bottom-8 text-center flex flex-col items-center justify-center w-full">
              <p className="text-[#808080] text-[10px] md:text-xs uppercase tracking-[0.2em] font-medium mb-1">
                Digital Infrastructure
              </p>
              <p className="text-[#B3B3B3] textxs md:text-sm uppercase tracking-widest font-semibold flex items-center justify-center gap-1.5">
                Engineered By <span className="text-[#E50914] font-bold">CodeWith-Sandy</span>
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Page Content Reveal */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: isLoading ? 0 : 1, y: isLoading ? 15 : 0 }}
        transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        className="min-h-screen"
      >
        {children}
      </motion.div>
    </>
  );
}
