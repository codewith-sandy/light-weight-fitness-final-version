"use client";

import { motion } from "framer-motion";
import { ArrowRight, Trophy } from "lucide-react";
import Link from "next/link";

export function LandingPage() {
  return (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center py-12 px-6 w-full overflow-hidden">
      {/* Background Video - Fixed to Viewport to prevent borders on scroll */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none overflow-hidden flex items-center justify-center bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-[110vmax] h-[110vmax] max-w-none object-cover -translate-x-1/2 -translate-y-1/2 -rotate-90 opacity-80 scale-110"
        >
          <source src="/videos/gym-intro.mp4" type="video/mp4" />
        </video>
        {/* Smooth Dark Gradient Filter Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#0F0F0F] z-[1]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)] z-[2]" />
      </div>

      {/* Subtle Central Red Glow Behind Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.15)_0%,transparent_70%)] blur-[80px] z-0 pointer-events-none" />

      {/* Hero Section Content */}
      <motion.div
        initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
        animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 text-center mt-4 mb-8 flex flex-col items-center max-w-7xl mx-auto w-full px-4"
      >
        {/* Premium Badge */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0, y: -10 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-6 inline-block"
        >
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E50914] to-[#ff4d4d] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-5 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl text-[12px] font-bold tracking-[0.3em] uppercase text-[#E50914] shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse shadow-[0_0_10px_#E50914]"></span>
            Light Weight Fitness Studio
          </div>
        </motion.div>

        {/* Dynamic Typography Hero Title */}
        <h1 className="flex flex-col items-center mb-6 relative">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-inter font-light text-xl md:text-2xl text-white/80 tracking-[0.4em] uppercase mb-2"
          >
            Discover Your
          </motion.span>

          <motion.span
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="font-bebas-neue text-[4.5rem] sm:text-[6.5rem] md:text-[8rem] lg:text-[10rem] uppercase leading-[0.8] tracking-tight"
          >
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/60 drop-shadow-[0_0_30px_rgba(255,255,255,0.1)]">STRONGEST </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E50914] via-[#ff2a2a] to-[#8a0000] filter drop-shadow-[0_0_40px_rgba(229,9,20,0.6)]">SELF</span>
          </motion.span>
        </h1>

        {/* Minimalist Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-[#B3B3B3] max-w-[600px] text-sm md:text-base font-light leading-relaxed mb-8 mx-auto"
        >
          Transform your body with elite equipment, expert trainers, and the most supportive fitness community in New Vellanur.
        </motion.p>

        {/* Elevated Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-col items-center gap-6 w-full max-w-sm sm:max-w-none mx-auto"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto">
            <Link href="/calculator" passHref className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(229,9,20,0.6)" }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-gradient-to-r from-[#E50914] to-[#cc0812] text-white px-10 py-4 rounded-lg font-bold text-[14px] tracking-[0.2em] uppercase transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)] ring-1 ring-white/20"
              >
                Let's Know Your BMI
                <ArrowRight className="w-5 h-5" />
              </motion.button>
            </Link>

            <motion.a
              href="tel:+918668163718"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black/40 backdrop-blur-md border border-white/20 text-white px-10 py-4 rounded-lg font-bold text-[14px] tracking-[0.2em] uppercase transition-all"
            >
              Call Now
            </motion.a>
          </div>

          <Link href="/success-stories" passHref className="w-full sm:w-auto mt-2">
            <motion.button
              whileHover={{ scale: 1.03, backgroundColor: "rgba(229,9,20,0.1)" }}
              whileTap={{ scale: 0.97 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-transparent border-b border-[#E50914]/50 text-white/80 hover:text-white px-6 py-2 pb-3 font-semibold text-[13px] tracking-widest uppercase transition-all group"
            >
              <Trophy className="w-4 h-4 text-[#E50914] group-hover:scale-110 transition-transform" />
              View Success Stories
            </motion.button>
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
