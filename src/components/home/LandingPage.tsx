"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function LandingPage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center py-20 px-6 w-full overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-[100vh] h-[100vw] max-w-none object-cover -translate-x-1/2 -translate-y-1/2 -rotate-90 opacity-30"
        >
          <source src="/videos/gym-intro.mp4" type="video/mp4" />
        </video>
        {/* Dark Red Gradient Filter Overlay against the Video */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-[#E50914]/10 to-[#0F0F0F]" />
      </div>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center mt-10 mb-16 flex flex-col items-center max-w-7xl mx-auto"
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="px-4 py-1.5 rounded-full border border-[#E50914]/30 bg-black/40 backdrop-blur-md text-[13px] font-bold tracking-wider uppercase text-[#E50914] mb-8 inline-block shadow-[0_0_15px_rgba(229,9,20,0.2)]"
        >
          LIGHT WEIGHT FITNESS STUDIO
        </motion.div>

        <h1 className="font-bebas-neue text-6xl md:text-8xl lg:text-[110px] uppercase leading-[0.9] tracking-tight mb-6">
          <span className="text-white drop-shadow-md">BUILD YOUR</span>
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-[#ff4d4d] filter drop-shadow-[0_0_15px_rgba(229,9,20,0.5)]">STRONGEST SELF</span>
        </h1>

        <p className="text-[#E0E0E0] drop-shadow-md max-w-2xl text-lg md:text-xl font-light mb-10 mx-auto">
          Transform your body with advanced equipment, expert trainers, and the most supportive fitness community in New Vellanur.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <Link href="/calculator" passHref>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#E50914] hover:bg-[#b80710] text-white px-8 py-4 rounded font-bold text-[15px] tracking-wide uppercase transition-all shadow-[0_0_20px_rgba(229,9,20,0.4)]"
            >
              Lets Know Your BMI
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </Link>

          <motion.a
            href="tel:+918668163718"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto flex items-center justify-center gap-3 bg-black/40 backdrop-blur-sm border border-white/20 text-white hover:bg-white hover:text-black px-8 py-4 rounded font-bold text-[15px] tracking-wide uppercase transition-all"
          >
            Call Now
          </motion.a>
        </div>
      </motion.div>
    </div>
  );
}
