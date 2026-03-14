"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Volume2, VolumeX, X, ArrowRight } from "lucide-react";
import Link from "next/link";

interface VideoItem {
    id: number;
    img: string;           // thumbnail / poster frame — also used by Masonry as bg-image
    video: string;         // actual video src
    height: number;        // masonry height hint
    label: string;
    subtitle: string;
}

const initialVideos: VideoItem[] = [
    {
        id: 101,
        img: "",
        video: "/videos/gym-video.mp4",
        height: 550,
        label: "Gym Walkthrough",
        subtitle: "Tour our world-class facility",
    },
    {
        id: 102,
        img: "",
        video: "/videos/class-demo.mp4",
        height: 650,
        label: "Group Class",
        subtitle: "High-intensity group training",
    },
    {
        id: 103,
        img: "",
        video: "/videos/class-demo2.mp4",
        height: 500,
        label: "Training Session",
        subtitle: "One-on-one personal coaching",
    },
    {
        id: 104,
        img: "",
        video: "/videos/class-demo3.mp4",
        height: 600,
        label: "Cardio Blast",
        subtitle: "Endurance & cardio training",
    },
    {
        id: 105,
        img: "",
        video: "/videos/gym-intro.mp4",
        height: 480,
        label: "Gym Intro",
        subtitle: "Welcome to Light Weight Fitness",
    },
    {
        id: 106,
        img: "",
        video: "/videos/workout 1.mp4",
        height: 560,
        label: "Workout Highlights",
        subtitle: "Peak performance moments",
    },
    {
        id: 107,
        img: "",
        video: "/videos/gym-homepage.mp4",
        height: 520,
        label: "Home Tour",
        subtitle: "Full gym overview & amenities",
    },
    {
        id: 108,
        img: "",
        video: "/videos/gym-opportunity1.mp4",
        height: 580,
        label: "Training Opportunity",
        subtitle: "Transform your fitness journey",
    },
];

export function HomeVideoShowcase() {
    const [videos, setVideos] = useState(initialVideos);
    const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

    useEffect(() => {
        async function fetchMedia() {
            try {
                const response = await fetch("/api/media");
                const data = await response.json();
                if (data.videos) {
                    const dynamicVideos = data.videos.map((filename: string, index: number) => {
                        const videoPath = `/videos/${filename}`;
                        const existing = initialVideos.find(v => v.video === videoPath);
                        if (existing) return existing;
                        
                        return {
                            id: 200 + index,
                            img: "",
                            video: videoPath,
                            height: 500 + Math.floor(Math.random() * 200),
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
    const [isMuted, setIsMuted] = useState(true);
    const modalVideoRef = useRef<HTMLVideoElement>(null);

    // Handle click on masonry card — open modal
    const handleCardClick = useCallback(
        (item: { id: number }) => {
            const vid = videos.find((v) => v.id === item.id);
            if (vid) setSelectedVideo(vid);
        },
        []
    );

    return (
        <section className="relative py-20 md:py-28 px-4 md:px-8 lg:px-16">
            {/* Top divider */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#FF4D4D]/50 to-transparent" />

            {/* Section Header */}
            <motion.div
                className="text-center mb-14 md:mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <span className="inline-block px-4 py-1.5 rounded-full border border-[#FF6B6B]/40 bg-[#FF6B6B]/15 text-[#FF6B6B] text-[11px] font-bold tracking-[0.3em] uppercase mb-6 backdrop-blur-sm">
                    🎬 Behind The Scenes
                </span>
                <h2
                    className="font-bebas-neue text-5xl md:text-7xl lg:text-8xl tracking-widest uppercase text-white/95"
                    style={{ lineHeight: 1.05 }}
                >
                    Inside{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#FF4D4D] via-[#FF6B6B] to-[#E53E3E]">
                        The Gym
                    </span>
                </h2>
                <p className="text-[#A0A0A0] max-w-xl mx-auto uppercase tracking-[0.2em] text-xs md:text-sm mt-4">
                    Experience the energy, equipment &amp; expert coaching
                </p>
            </motion.div>

            {/* Masonry Grid of Video Thumbnails */}
            <motion.div
                className="relative w-full mx-auto max-w-7xl"
                style={{ minHeight: 600 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <VideoMasonryGrid
                    videos={videos}
                    onItemClick={handleCardClick}
                />
            </motion.div>

            {/* CTA Button */}
            <motion.div
                className="text-center mt-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
            >
                <Link href="/success-stories">
                    <button className="group relative px-8 py-4 rounded-full font-bold text-sm uppercase tracking-[0.2em] text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,77,77,0.4)] cursor-pointer">
                        <span
                            className="absolute inset-0 rounded-full"
                            style={{
                                backgroundImage:
                                    "linear-gradient(109.6deg, rgba(255,77,77,1) 11.2%, rgba(180,30,30,1) 100.6%)",
                            }}
                        />
                        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]" />
                        <span className="relative flex items-center gap-2">
                            Watch More
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </Link>
            </motion.div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {/* Backdrop */}
                        <motion.div
                            className="absolute inset-0 bg-black/85 backdrop-blur-md"
                            onClick={() => setSelectedVideo(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative z-10 max-w-4xl w-full bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/15 shadow-[0_0_60px_rgba(255,77,77,0.15)]"
                            initial={{ scale: 0.85, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.85, opacity: 0, y: 40 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedVideo(null)}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-[#2A2A2A]/80 border border-white/15 text-white/70 hover:text-white hover:border-[#FF6B6B]/50 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Mute toggle */}
                            <button
                                onClick={() => setIsMuted(!isMuted)}
                                className="absolute top-4 right-16 z-20 p-2 rounded-full bg-[#2A2A2A]/80 border border-white/15 text-white/70 hover:text-white hover:border-[#FF6B6B]/50 transition-colors cursor-pointer"
                            >
                                {isMuted ? (
                                    <VolumeX className="w-5 h-5" />
                                ) : (
                                    <Volume2 className="w-5 h-5" />
                                )}
                            </button>

                            {/* Video */}
                            <div className="relative w-full aspect-video overflow-hidden bg-black">
                                <video
                                    ref={modalVideoRef}
                                    autoPlay
                                    loop
                                    muted={isMuted}
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source
                                        src={selectedVideo.video}
                                        type="video/mp4"
                                    />
                                </video>
                                {/* Bottom gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#1A1A1A] to-transparent" />
                            </div>

                            {/* Text Content */}
                            <div className="px-6 md:px-8 pb-8 -mt-8 relative">
                                <div className="flex items-center gap-3 mb-1">
                                    <h3 className="font-bebas-neue text-3xl md:text-4xl tracking-widest uppercase text-white">
                                        {selectedVideo.label}
                                    </h3>
                                </div>
                                <p className="text-[#FF8A8A] text-sm font-semibold uppercase tracking-widest">
                                    {selectedVideo.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}

/* ─────────────────────────────────────────────────
   Video Masonry Grid — renders video tiles using
   the same column logic as the image Masonry but
   with inline <video> elements
   ───────────────────────────────────────────────── */

function VideoMasonryGrid({
    videos,
    onItemClick,
}: {
    videos: VideoItem[];
    onItemClick: (item: { id: number }) => void;
}) {
    // Use CSS columns for a simple masonry without needing the GSAP Masonry (which needs images)
    return (
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-3">
            {videos.map((video, idx) => (
                <motion.div
                    key={video.id}
                    className="mb-3 break-inside-avoid group cursor-pointer relative rounded-xl overflow-hidden border border-white/10 hover:border-[#FF6B6B]/40 transition-all duration-300 hover:shadow-[0_0_25px_rgba(255,107,107,0.2)]"
                    initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
                    whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    viewport={{ once: true, margin: "-30px" }}
                    transition={{
                        duration: 0.6,
                        delay: idx * 0.06,
                        ease: "easeOut",
                    }}
                    whileHover={{ scale: 0.97 }}
                    onClick={() => onItemClick({ id: video.id })}
                >
                    <div
                        className="relative w-full overflow-hidden"
                        style={{ height: video.height / 2 }}
                    >
                        <video
                            autoPlay
                            loop
                            muted
                            playsInline
                            className="w-full h-full object-cover"
                        >
                            <source src={video.video} type="video/mp4" />
                        </video>

                        {/* Bottom gradient */}
                        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" />

                        {/* Play icon on hover */}
                        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                            <div className="w-14 h-14 rounded-full bg-[#FF6B6B]/90 flex items-center justify-center shadow-[0_0_30px_rgba(255,107,107,0.5)]">
                                <Play className="w-6 h-6 fill-white text-white ml-0.5" />
                            </div>
                        </div>

                        {/* Label at bottom */}
                        <div className="absolute bottom-3 left-3 right-3 pointer-events-none">
                            <p className="text-[#FF8A8A] text-[10px] uppercase tracking-widest font-bold mb-0.5">
                                {video.subtitle}
                            </p>
                            <h4 className="font-bebas-neue text-xl tracking-wide uppercase text-white drop-shadow-md">
                                {video.label}
                            </h4>
                        </div>
                    </div>
                </motion.div>
            ))}
        </div>
    );
}
