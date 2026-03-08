"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { PlayCircle, MapPin, ArrowRight } from "lucide-react";

export function BranchShowcase() {
  const branches = [
    {
      id: "downtown",
      name: "Downtown Ironworks",
      description: "Our flagship 20,000 sq ft performance center located in the heart of the city. Features a massive free-weight zone, turf area, and recovery suites.",
      videoUrl: "https://videos.pexels.com/video-files/3195394/3195394-uhd_3840_2160_25fps.mp4",
      highlight: "Olympic lifting platforms & turf",
    },
    {
      id: "westside",
      name: "Westside Athletics",
      description: "A specialized facility focused on high-intensity interval training, calisthenics, and functional fitness. Features an outdoor rig and elite cardio equipment.",
      videoUrl: "https://videos.pexels.com/video-files/4204555/4204555-hd_1920_1080_30fps.mp4",
      highlight: "Outdoor functional fitness rig",
    }
  ];

  return (
    <div className="w-full relative py-12">
      <div className="text-center mb-16 px-4">
        <h2 className="font-bebas-neue text-5xl md:text-6xl tracking-widest uppercase mb-4">Elite Training Facilities</h2>
        <div className="w-24 h-1 bg-[#E50914] mx-auto mb-6" />
        <p className="text-[#B3B3B3] max-w-2xl mx-auto font-light">Experience state-of-the-art equipment and an uncompromising environment designed to breed success.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-10">
        
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
            <div className="relative h-[300px] md:h-[400px] w-full bg-black overflow-hidden">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline 
                className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              >
                <source src={branch.videoUrl} type="video/mp4" />
              </video>
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A] via-transparent to-transparent opacity-90" />
              
              <div className="absolute top-6 right-6">
                <span className="bg-black/60 backdrop-blur border border-white/20 text-white px-3 py-1 text-[11px] uppercase tracking-widest rounded-full font-semibold flex items-center gap-2">
                  <PlayCircle className="w-3 h-3 text-[#E50914]" /> Video Preview
                </span>
              </div>
            </div>

            {/* Content Container */}
            <div className="p-8 relative">
              <div className="absolute top-0 right-8 -translate-y-1/2 p-4 bg-[#0F0F0F] border border-white/10 rounded-full group-hover:bg-[#E50914] transition-colors duration-300">
                <MapPin className="w-6 h-6 text-[#B3B3B3] group-hover:text-black transition-colors" />
              </div>
              
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
    </div>
  );
}
