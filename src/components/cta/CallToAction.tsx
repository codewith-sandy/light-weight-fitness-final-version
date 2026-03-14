"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export function CallToAction() {
  return (
    <>
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-[url('/photos/gym-logo.jpeg')] bg-cover bg-center bg-fixed opacity-50  "
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-[#0F0F0F]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center border-b border-white/10 pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bebas-neue text-5xl sm:text-6xl md:text-8xl tracking-tight uppercase leading-none mb-6">
              Start Today. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] via-[#E50914] to-[#8b0000]">No Excuses.</span>
            </h2>

            <p className="text-lg md:text-xl text-[#B3B3B3] mb-10 max-w-2xl mx-auto font-light">
              Your transformation begins with a single step. Take it now. Transform your body, transform your life. Your premium fitness destination.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#E50914] text-[#f8f2f8] hover:bg-[#b80710] px-8 py-4 rounded font-bold text-[15px] tracking-wide uppercase transition-all shadow-[0_0_20px_rgba(229,9,20,0.15)]"
                >
                  Join Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <motion.a
                href="tel:+918668163718"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#f8f2f8]/80 border border-[#E50914]/20 text-[#E50914] hover:bg-[#E50914] hover:text-[#f8f2f8] px-8 py-4 rounded font-bold text-[15px] tracking-wide uppercase transition-all"
              >
                <PhoneCall className="w-5 h-5" />
                086681 63718
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

    </>
  );
}
