"use client";

import React, { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import { cn } from "@/lib/utils";

// Props interface for the component
interface AnimatedMarqueeHeroProps {
    tagline: ReactNode;
    title: ReactNode;
    description: string;
    actions: ReactNode;
    images: string[];
    className?: string;
}

// The main hero component
export const AnimatedMarqueeHero: React.FC<AnimatedMarqueeHeroProps> = ({
    tagline,
    title,
    description,
    actions,
    images,
    className,
}) => {
    // Animation variants for the text content
    const FADE_IN_ANIMATION_VARIANTS: Variants = {
        hidden: { opacity: 0, y: 10 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 20 } },
    };

    // Duplicate images for a seamless loop
    const duplicatedImages = [...images, ...images];

    return (
        <section
            className={cn(
                "relative w-full min-h-[90vh] overflow-hidden flex flex-col items-center justify-center text-center px-4",
                className
            )}
        >
            <div className="z-10 flex flex-col items-center pt-20 pb-40">
                {/* Tagline */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    className="mb-6 flex justify-center"
                >
                    {tagline}
                </motion.div>

                {/* Main Title */}
                <motion.h1
                    initial="hidden"
                    animate="show"
                    variants={{
                        hidden: {},
                        show: {
                            transition: {
                                staggerChildren: 0.1,
                            },
                        },
                    }}
                    className="flex flex-col items-center"
                >
                    {title}
                </motion.h1>

                {/* Description */}
                <motion.p
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    transition={{ delay: 0.4 }}
                    className="mt-6 max-w-2xl text-lg text-[#B3B3B3] font-light leading-relaxed mx-auto px-4"
                >
                    {description}
                </motion.p>

                {/* Call to Actions Layer */}
                <motion.div
                    initial="hidden"
                    animate="show"
                    variants={FADE_IN_ANIMATION_VARIANTS}
                    transition={{ delay: 0.5 }}
                    className="mt-8"
                >
                    {actions}
                </motion.div>
            </div>

            {/* Animated Image Marquee */}
            <div className="absolute bottom-0 left-0 w-full h-1/3 md:h-2/5 pb-8 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] -z-0">
                <motion.div
                    className="flex gap-4 w-max"
                    animate={{
                        x: ["0%", "-50%"],
                        transition: {
                            ease: "linear",
                            duration: 40,
                            repeat: Infinity,
                        },
                    }}
                >
                    {duplicatedImages.map((src, index) => (
                        <div
                            key={index}
                            className="relative aspect-[3/4] h-48 md:h-64 flex-shrink-0 border-2 border-white/5 bg-black/50"
                            style={{
                                rotate: `${(index % 2 === 0 ? -2 : 5)}deg`,
                            }}
                        >
                            <img
                                src={src}
                                alt={`Gym showcase image ${index + 1}`}
                                className="w-full h-full object-cover rounded-2xl shadow-xl filter saturate-50 hover:saturate-100 transition-all duration-500"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};
