"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { PlayCircle, MapPin, ArrowRight, X } from "lucide-react";

export function BranchShowcase() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

  const branches = [
    {
      id: "branch1",
      name: "Light Weight Fitness Studio",
      description: "Flat No-391, 1st Floor Veerapuram Main Road, Vellanore, Barathi Nagar, Chennai, Tamil Nadu.",
      videoUrl: "/videos/branch1.mp4",
      highlight: "Branch 1 - Veerapuram",
      tag: "Opp. City Union Bank",
      mapUrl: "https://www.google.com/maps/place/Light+Weight+Fitness+Gym/@13.1707996,80.0970091,807m/data=!3m1!1e3!4m14!1m7!3m6!1s0x3a527d7e964dfa81:0xacef858c2155cd9!2sLight+Weight+Fitness+Studio!8m2!3d13.1707944!4d80.099584!16s%2Fg%2F11l36ks_9v!3m5!1s0x3a528740de9f839b:0xdc8b44c1aba6809!8m2!3d13.170062!4d80.0958278!16s%2Fg%2F11t6x6mhxn?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D",
    },
    {
      id: "branch2",
      name: "Light Weight Fitness Studio",
      description: "Flat No.8, Golden Estate, Main St, Vetrivel Nagar, Alamathi, Chennai, Tamil Nadu.",
      videoUrl: "/videos/branch2.mp4",
      highlight: "Branch 2 - Alamathi",
      tag: "Near Prince Hostel Vel Tech",
      mapUrl: "https://www.google.com/maps/place/Light+Weight+Fitness+Studio/@13.1702641,80.0967314,1027m/data=!3m1!1e3!4m6!3m5!1s0x3a527d7e964dfa81:0xacef858c2155cd9!8m2!3d13.1707944!4d80.099584!16s%2Fg%2F11l36ks_9v?entry=ttu&g_ep=EgoyMDI2MDMwNC4xIKXMDSoASAFQAw%3D%3D",
    }
  ];

  return (
    <div className="w-full relative py-12">
      <div className="text-center mb-16 px-4">
        <h2 className="font-bebas-neue text-5xl md:text-6xl tracking-widest uppercase mb-4">Elite Training Facilities</h2>
        <div className="w-24 h-1 bg-[#E50914] mx-auto mb-6" />
        <p className="text-[#B3B3B3] max-w-2xl mx-auto font-light">Experience state-of-the-art equipment and an uncompromising environment designed to breed success.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">

        {branches.map((branch, idx) => (
          <motion.div
            key={branch.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: idx * 0.2 }}
            className="group relative bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden hover:border-[#E50914]/50 transition-all duration-300"
          >
            {/* Video Container */}
            <div
              className="relative h-[300px] md:h-[400px] w-full bg-black overflow-hidden cursor-pointer"
              onClick={() => setActiveVideo(branch.videoUrl)}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 pointer-events-none"
              >
                <source src={branch.videoUrl} type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90 pointer-events-none" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                <div className="w-16 h-16 bg-[#E50914]/80 backdrop-blur-sm rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                  <PlayCircle className="w-8 h-8 text-white ml-1" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 z-20 pointer-events-none">
                <span className="bg-black/60 backdrop-blur-md border border-white/20 text-white px-3 py-1.5 text-[10px] uppercase tracking-widest rounded-full font-bold flex items-center gap-2 drop-shadow-lg shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                  <PlayCircle className="w-4 h-4 text-[#E50914]" /> Play Preview
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8 relative">
              <a
                href={branch.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                title="View on Google Maps"
                className="absolute top-0 right-8 -translate-y-1/2 p-4 bg-[#0F0F0F] border border-white/10 rounded-full group-hover:bg-[#E50914] transition-colors duration-300 block"
              >
                <MapPin className="w-6 h-6 text-[#B3B3B3] group-hover:text-black transition-colors" />
              </a>

              {branch.tag && (
                <div className="inline-block px-3 py-1 mb-4 rounded border border-[#E50914]/30 bg-[#E50914]/10 text-[#E50914] text-[10px] uppercase tracking-widest font-bold">
                  {branch.tag}
                </div>
              )}

              <h3 className="font-bebas-neue text-4xl tracking-wide uppercase mb-3">{branch.name}</h3>
              <p className="text-[#E50914] text-[13px] uppercase tracking-widest font-semibold mb-4">{branch.highlight}</p>
              <Link href="/gallery">
                <button className="flex items-center gap-2 text-white font-semibold uppercase tracking-wider text-sm group/btn">
                  View Gallery <ArrowRight className="w-4 h-4 text-[#E50914] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </Link>
            </div>

            <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#E50914] to-transparent scale-x-0 origin-left group-hover:scale-x-100 transition-transform duration-500" />
          </motion.div>
        ))}

      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {activeVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
            onClick={() => setActiveVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-[#E50914] text-white rounded-full flex items-center justify-center transition-colors backdrop-blur-md"
              >
                <X className="w-5 h-5" />
              </button>
              <video
                src={activeVideo}
                className="w-full h-full object-contain"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
