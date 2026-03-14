"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { Play, Volume2, VolumeX } from "lucide-react";

const initialVideos = [
    {
        src: "/videos/gym-video.mp4",
        label: "Gym Walkthrough",
        subtitle: "Tour our world-class facility",
    },
    {
        src: "/videos/class-demo.mp4",
        label: "Group Class",
        subtitle: "High-intensity group training",
    },
    {
        src: "/videos/class-demo2.mp4",
        label: "Training Session",
        subtitle: "One-on-one personal coaching",
    },
    {
        src: "/videos/class-demo3.mp4",
        label: "Cardio Blast",
        subtitle: "Endurance & cardio training",
    },
    {
        src: "/videos/gym-intro.mp4",
        label: "Gym Intro",
        subtitle: "Welcome to Light Weight Fitness",
    },
];

export function SuccessVideoShowcase() {
    const [videos, setVideos] = useState(initialVideos);
    const [active, setActive] = useState(0);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        async function fetchMedia() {
            try {
                const response = await fetch("/api/media");
                const data = await response.json();
                if (data.videos) {
                    const dynamicVideos = data.videos.map((filename: string) => {
                        const src = `/videos/${filename}`;
                        const existing = initialVideos.find(v => v.src === src);
                        if (existing) return existing;
                        
                        return {
                            src,
                            label: filename.replace(/\.(mp4|webm|ogg)$/i, "").replace(/-/g, " "),
                            subtitle: "New Training Video",
                        };
                    });
                    setVideos(dynamicVideos);
                }
            } catch (error) {
                console.error("Failed to fetch media:", error);
            }
        }
        fetchMedia();
    }, []);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % videos.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + videos.length) % videos.length);
    };

    const isActive = (index: number) => index === active;

    useEffect(() => {
        const interval = setInterval(handleNext, 8000);
        return () => clearInterval(interval);
    }, [videos.length]);

    const randomRotateY = () => Math.floor(Math.random() * 21) - 10;

    return (
        <div className="max-w-sm md:max-w-4xl mr-0 ml-auto px-4 md:px-8 lg:px-12 py-20">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
                {/* Left: Stacked Video Cards */}
                <div>
                    <div className="relative h-80 w-full">
                        <AnimatePresence>
                            {videos.map((video, index) => (
                                <motion.div
                                    key={video.src}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: -100,
                                        rotate: randomRotateY(),
                                    }}
                                    animate={{
                                        opacity: isActive(index) ? 1 : 0.7,
                                        scale: isActive(index) ? 1 : 0.95,
                                        z: isActive(index) ? 0 : -100,
                                        rotate: isActive(index) ? 0 : randomRotateY(),
                                        zIndex: isActive(index)
                                            ? 999
                                            : videos.length + 2 - index,
                                        y: isActive(index) ? [0, -80, 0] : 0,
                                    }}
                                    exit={{
                                        opacity: 0,
                                        scale: 0.9,
                                        z: 100,
                                        rotate: randomRotateY(),
                                    }}
                                    transition={{
                                        duration: 0.4,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 origin-bottom"
                                >
                                    <div className="relative h-full w-full rounded-3xl overflow-hidden">
                                        <video
                                            autoPlay
                                            loop
                                            muted={isMuted}
                                            playsInline
                                            className="h-full w-full rounded-3xl object-cover object-center"
                                        >
                                            <source src={video.src} type="video/mp4" />
                                        </video>

                                        {/* Gradient overlay */}
                                        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/60 to-transparent rounded-b-3xl pointer-events-none" />

                                        {/* Play badge */}
                                        <div className="absolute top-3 left-3">
                                            <span className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm text-[9px] font-bold tracking-[0.2em] uppercase text-white">
                                                <Play className="w-2.5 h-2.5 fill-[#E50914] text-[#E50914]" />
                                                Live
                                            </span>
                                        </div>

                                        {/* Mute toggle */}
                                        <button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setIsMuted(!isMuted);
                                            }}
                                            className="absolute top-3 right-3 p-1.5 rounded-full bg-black/50 border border-white/10 backdrop-blur-sm text-white/70 hover:text-white hover:border-[#E50914]/50 transition-colors cursor-pointer z-10"
                                        >
                                            {isMuted ? (
                                                <VolumeX className="w-3.5 h-3.5" />
                                            ) : (
                                                <Volume2 className="w-3.5 h-3.5" />
                                            )}
                                        </button>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Right: Video Info & Controls */}
                <div className="flex justify-between flex-col py-4">
                    <motion.div
                        key={active}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -20, opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeInOut" }}
                    >
                        <h3 className="text-2xl font-bold text-white uppercase font-bebas-neue tracking-wider">
                            {videos[active]?.label}
                        </h3>
                        <p className="text-sm text-[#E50914] font-semibold uppercase tracking-widest">
                            {videos[active]?.subtitle}
                        </p>
                        <p className="text-lg text-[#B3B3B3] mt-8 italic font-light leading-relaxed">
                            Experience the energy, equipment, and expert coaching that makes
                            Light Weight Fitness Studio the ultimate transformation destination.
                        </p>
                    </motion.div>
                    <div className="flex gap-4 pt-12 md:pt-0">
                        <button
                            onClick={handlePrev}
                            className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#E50914] hover:text-black flex items-center justify-center group/button transition-all cursor-pointer"
                        >
                            <IconArrowLeft className="h-5 w-5 group-hover/button:rotate-12 transition-transform duration-300" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-[#E50914] hover:text-black flex items-center justify-center group/button transition-all cursor-pointer"
                        >
                            <IconArrowRight className="h-5 w-5 group-hover/button:-rotate-12 transition-transform duration-300" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
