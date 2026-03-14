"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Play, Volume2, VolumeX, X } from "lucide-react";

interface VideoItem {
    id: number;
    src: string;
    label: string;
    subtitle: string;
    category: string;
}

const initialVideos: VideoItem[] = [
    {
        id: 1,
        src: "/videos/gym-video.mp4",
        label: "Gym Walkthrough",
        subtitle: "Facility Tour",
        category: "Highlight",
    },
    {
        id: 2,
        src: "/videos/class-demo.mp4",
        label: "Group Class",
        subtitle: "HIIT Session",
        category: "Class",
    },
    {
        id: 3,
        src: "/videos/class-demo2.mp4",
        label: "Training Session",
        subtitle: "Personal Coaching",
        category: "Coaching",
    },
    {
        id: 4,
        src: "/videos/class-demo3.mp4",
        label: "Cardio Blast",
        subtitle: "Endurance Training",
        category: "Cardio",
    },
    {
        id: 5,
        src: "/videos/gym-intro.mp4",
        label: "Gym Intro",
        subtitle: "Welcome Video",
        category: "Community",
    },
    {
        id: 6,
        src: "/videos/workout 1.mp4",
        label: "Workout Highlights",
        subtitle: "Pure Energy",
        category: "Performance",
    },
];

export function SuccessVideoWall() {
    const [videos, setVideos] = useState(initialVideos);
    const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);
    const [isMuted, setIsMuted] = useState(true);

    useEffect(() => {
        async function fetchMedia() {
            try {
                const response = await fetch("/api/media");
                const data = await response.json();
                if (data.videos) {
                    const dynamicVideos = data.videos.map((filename: string, index: number) => {
                        const videoPath = `/videos/${filename}`;
                        const existing = initialVideos.find((v) => v.src === videoPath);
                        if (existing) return existing;

                        return {
                            id: 100 + index,
                            src: videoPath,
                            label: filename
                                .replace(/\.(mp4|webm|ogg)$/i, "")
                                .replace(/-/g, " "),
                            subtitle: "New Training Video",
                            category: "Training",
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

    return (
        <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                <div>
                    <h3 className="font-bebas-neue text-4xl tracking-tight uppercase mb-2">
                        Video Wall of <span className="text-[#E50914]">Greatness</span>
                    </h3>
                    <p className="text-[#B3B3B3] max-w-xl">
                        Experience the intensity and community through our latest workout and facility videos.
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video, idx) => (
                    <motion.div
                        key={video.id}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="group relative bg-[#1A1A1A] border border-white/5 rounded-xl overflow-hidden hover:border-[#E50914]/50 transition-all cursor-pointer"
                        onClick={() => setSelectedVideo(video)}
                    >
                        <div className="aspect-[4/5] relative overflow-hidden">
                            <motion.div 
                                className="absolute inset-0 md:grayscale group-hover:grayscale-0 transition-all duration-700"
                                whileHover={{ scale: 1.1 }}
                            >
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src={video.src} type="video/mp4" />
                                </video>
                            </motion.div>
                            
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-80 pointer-events-none" />

                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                                <div className="w-16 h-16 rounded-full bg-[#E50914]/90 flex items-center justify-center shadow-[0_0_30px_rgba(229,9,20,0.4)] transform scale-90 group-hover:scale-100 transition-transform duration-300">
                                    <Play className="w-8 h-8 fill-white text-white ml-1" />
                                </div>
                            </div>

                            <div className="absolute bottom-4 left-4 right-4 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 pointer-events-none">
                                <p className="text-[#E50914] text-[10px] uppercase tracking-widest font-black mb-1">
                                    {video.category}
                                </p>
                                <h4 className="font-bebas-neue text-2xl tracking-wide uppercase">
                                    {video.label}
                                </h4>
                                <p className="text-white/60 text-xs mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                    {video.subtitle}
                                </p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Video Modal */}
            <AnimatePresence>
                {selectedVideo && (
                    <motion.div
                        className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        <motion.div
                            className="absolute inset-0 bg-black/90 backdrop-blur-sm"
                            onClick={() => setSelectedVideo(null)}
                        />
                        <motion.div
                            className="relative z-10 max-w-5xl w-full bg-[#1A1A1A] rounded-2xl overflow-hidden border border-white/10 shadow-2xl"
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                        >
                            <div className="relative aspect-video">
                                <video
                                    autoPlay
                                    loop
                                    muted={isMuted}
                                    playsInline
                                    className="w-full h-full object-cover"
                                >
                                    <source src={selectedVideo.src} type="video/mp4" />
                                </video>

                                <button
                                    onClick={() => setSelectedVideo(null)}
                                    className="absolute top-4 right-4 p-2 rounded-full bg-black/50 border border-white/10 text-white hover:bg-[#E50914] transition-colors"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <button
                                    onClick={() => setIsMuted(!isMuted)}
                                    className="absolute top-4 right-16 p-2 rounded-full bg-black/50 border border-white/10 text-white hover:border-[#E50914] transition-colors"
                                >
                                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                </button>
                            </div>
                            <div className="p-8">
                                <span className="text-[#E50914] text-xs font-bold uppercase tracking-[0.3em]">
                                    {selectedVideo.category}
                                </span>
                                <h3 className="font-bebas-neue text-4xl mt-1 tracking-widest uppercase">
                                    {selectedVideo.label}
                                </h3>
                                <p className="text-[#A0A0A0] mt-2 uppercase tracking-widest text-sm">
                                    {selectedVideo.subtitle}
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
