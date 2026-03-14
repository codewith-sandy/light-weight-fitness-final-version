"use client";

import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, X, Clock, Quote } from "lucide-react";
import Link from "next/link";
import Masonry from "../Masonry";

interface StoryItem {
    id: number;
    img: string;
    height: number;
    name: string;
    duration: string;
    quote: string;
}

const initialStories: StoryItem[] = [
    {
        id: 1,
        img: "/photos/transformation/trans 1.jpg",
        height: 550,
        name: "Muscle Gain Journey",
        duration: "3 Months",
        quote:
            "Incredible progress in strength and endurance. The consistency really paid off! I never thought I could achieve this level of fitness in just 3 months.",
    },
    {
        id: 2,
        img: "/photos/transformation/trans 2.jpg",
        height: 650,
        name: "Fat Loss Success",
        duration: "6 Months",
        quote:
            "A complete lifestyle change. Feeling more energetic and healthy every day. The coaches here really know how to push you to your limits.",
    },
    {
        id: 3,
        img: "/photos/transformation/trans 3.jpg",
        height: 500,
        name: "Body Recomposition",
        duration: "5 Months",
        quote:
            "The transformation exceeded my expectations. Grateful for the guidance and the amazing community at Light Weight Fitness.",
    },
    {
        id: 4,
        img: "/photos/transformation/trans 4.webp",
        height: 600,
        name: "Weight Loss Milestone",
        duration: "8 Months",
        quote:
            "Persistence is key. The results speak for themselves. Highly recommended for anyone looking for serious results.",
    },
    {
        id: 5,
        img: "/photos/transformation/trans 5.jpg",
        height: 480,
        name: "General Fitness",
        duration: "3 Months",
        quote:
            "Hard work pays off. The program was challenging but rewarding. I've gained so much confidence and strength.",
    },
    {
        id: 6,
        img: "/photos/transformation/trans 6.jpg",
        height: 700,
        name: "Athlete Prep",
        duration: "12 Months",
        quote:
            "A year of dedication turned into the best shape of my life. This place isn't just a gym; it's a transformation center.",
    },
    {
        id: 7,
        img: "/photos/transformation/trans 7.jpg",
        height: 520,
        name: "Strength Training",
        duration: "4 Months",
        quote:
            "From beginner to lifting heavy. The trainers at Light Weight Fitness know exactly how to guide your journey.",
    },
    {
        id: 8,
        img: "/photos/transformation/trans 8.jpg",
        height: 580,
        name: "Endurance Champion",
        duration: "6 Months",
        quote:
            "Built stamina and endurance I never knew I had. The community here keeps you motivated every single day.",
    },
    {
        id: 9,
        img: "/photos/transformation/trans 9.jpg",
        height: 540,
        name: "Total Transformation",
        duration: "9 Months",
        quote:
            "The best decision I ever made was walking through those doors. My transformation speaks for itself.",
    },
    {
        id: 10,
        img: "/photos/transformation/trans 10.jpg",
        height: 560,
        name: "Peak Performance",
        duration: "7 Months",
        quote:
            "Seven months of relentless training and the right nutrition plan completely changed my life. Light Weight Fitness made it possible.",
    },
];

export function SuccessStoriesMasonry() {
    const [stories, setStories] = useState(initialStories);
    const [selectedStory, setSelectedStory] = useState<StoryItem | null>(null);

    useEffect(() => {
        async function fetchMedia() {
            try {
                const response = await fetch("/api/media");
                const data = await response.json();
                if (data.photos) {
                    const dynamicStories = data.photos.map((filename: string, index: number) => {
                        const imgPath = `/photos/transformation/${filename}`;
                        const existing = initialStories.find(s => s.img === imgPath);
                        if (existing) return existing;
                        
                        return {
                            id: 100 + index,
                            img: imgPath,
                            height: 500 + Math.floor(Math.random() * 200),
                            name: "Incredible Result",
                            duration: "Transformation",
                            quote: "Witness the amazing progress made through dedication and elite coaching at Light Weight Fitness.",
                        };
                    });
                    setStories(dynamicStories);
                }
            } catch (error) {
                console.error("Failed to fetch media:", error);
            }
        }
        fetchMedia();
    }, []);

    // Close modal on Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelectedStory(null);
        };
        if (selectedStory) {
            window.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            window.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [selectedStory]);

    // Handle click on masonry card — open modal
    const handleCardClick = useCallback(
        (item: { id: number }) => {
            const story = stories.find((s) => s.id === item.id);
            if (story) setSelectedStory(story);
        },
        []
    );

    // Build items array for Masonry — encode URLs for CSS background-image compatibility
    const masonryItems = stories.map((s) => ({
        id: s.id,
        img: encodeURI(s.img),
        height: s.height,
    }));

    return (
        <section className="relative py-20 md:py-28 px-4 md:px-8 lg:px-16">
            {/* Subtle top divider gradient */}
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#E50914]/40 to-transparent" />

            {/* Section Header */}
            <motion.div
                className="text-center mb-14 md:mb-20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
            >
                <span className="inline-block px-4 py-1.5 rounded-full border border-[#E50914]/30 bg-[#E50914]/10 text-[#E50914] text-[11px] font-bold tracking-[0.3em] uppercase mb-6 backdrop-blur-sm">
                    ✨ Transformations
                </span>
                <h2
                    className="font-bebas-neue text-5xl md:text-7xl lg:text-8xl tracking-widest uppercase text-white"
                    style={{ lineHeight: 1.05 }}
                >
                    Real{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E50914] via-[#ff2a2a] to-[#8a0000]">
                        Results
                    </span>
                </h2>
                <p className="text-[#808080] max-w-xl mx-auto uppercase tracking-[0.2em] text-xs md:text-sm mt-4">
                    Witness the power of dedication &amp; expert coaching
                </p>
            </motion.div>

            {/* Masonry Grid */}
            <motion.div
                className="relative w-full mx-auto max-w-7xl"
                style={{ minHeight: 600 }}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6 }}
            >
                <Masonry
                    items={masonryItems}
                    ease="power3.out"
                    duration={0.6}
                    stagger={0.06}
                    animateFrom="bottom"
                    scaleOnHover={true}
                    hoverScale={0.96}
                    blurToFocus={true}
                    colorShiftOnHover={false}
                    // @ts-expect-error — Masonry.jsx is untyped; onItemClick prop exists at runtime
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
                    <button className="group relative px-8 py-4 rounded-full font-bold text-sm uppercase tracking-[0.2em] text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(229,9,20,0.4)] cursor-pointer">
                        {/* Button gradient background */}
                        <span
                            className="absolute inset-0 rounded-full"
                            style={{
                                backgroundImage:
                                    "linear-gradient(109.6deg, rgba(229,9,20,1) 11.2%, rgba(100,0,0,1) 100.6%)",
                            }}
                        />
                        {/* Shine sweep on hover */}
                        <span className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%]" />
                        <span className="relative flex items-center gap-2">
                            View All Stories
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>
                </Link>
            </motion.div>

            {/* Modal Overlay */}
            <AnimatePresence>
                {selectedStory && (
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
                            onClick={() => setSelectedStory(null)}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        />

                        {/* Modal Content */}
                        <motion.div
                            className="relative z-10 max-w-3xl w-full bg-[#141414] rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(229,9,20,0.15)]"
                            initial={{ scale: 0.85, opacity: 0, y: 40 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.85, opacity: 0, y: 40 }}
                            transition={{ duration: 0.35, ease: "easeOut" }}
                        >
                            {/* Close button */}
                            <button
                                onClick={() => setSelectedStory(null)}
                                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/60 border border-white/10 text-white/70 hover:text-white hover:border-[#E50914]/50 transition-colors cursor-pointer"
                            >
                                <X className="w-5 h-5" />
                            </button>

                            {/* Image */}
                            <div className="relative w-full aspect-[16/10] overflow-hidden">
                                <img
                                    src={selectedStory.img}
                                    alt={selectedStory.name}
                                    className="w-full h-full object-cover"
                                />
                                {/* Bottom gradient */}
                                <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-[#141414] to-transparent" />
                            </div>

                            {/* Text Content */}
                            <div className="px-6 md:px-8 pb-8 -mt-8 relative">
                                <div className="flex items-center gap-3 mb-3">
                                    <h3 className="font-bebas-neue text-3xl md:text-4xl tracking-widest uppercase text-white">
                                        {selectedStory.name}
                                    </h3>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E50914]/15 border border-[#E50914]/30 text-[#E50914] text-[11px] font-bold tracking-wider uppercase">
                                        <Clock className="w-3 h-3" />
                                        {selectedStory.duration}
                                    </span>
                                </div>
                                <div className="flex items-start gap-3 mt-4">
                                    <Quote className="w-5 h-5 text-[#E50914]/60 mt-1 flex-shrink-0" />
                                    <p className="text-[#B3B3B3] text-sm md:text-base leading-relaxed italic">
                                        {selectedStory.quote}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
