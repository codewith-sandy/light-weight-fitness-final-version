
"use client";
import { ArrowRight } from "lucide-react";

import { motion } from 'framer-motion';
import Shuffle from '../Shuffle';
import { Button, type ButtonProps } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import React from 'react';

export interface StatProps {
    value: string;
    label: string;
    icon: React.ReactNode;
}

export interface ActionProps {
    text: React.ReactNode;
    onClick?: () => void;
    href?: string;
    variant?: ButtonProps['variant'];
    className?: string;
    style?: React.CSSProperties;
}

export interface HeroSectionProps {
    title: React.ReactNode;
    subtitle: React.ReactNode;
    actions: ActionProps[];
    stats: StatProps[];
    images: string[];
    className?: string;
    badge?: React.ReactNode;
}

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 60, scale: 0.92 },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: { duration: 0.85, ease: "backOut" },
    },
};

const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.5 },
    },
};

const floatingVariants = {
    animate: {
        y: [0, -8, 0],
        transition: { duration: 3, repeat: Infinity },
    },
};

const MediaRender = ({ src, alt, className }: { src: string; alt: string; className: string }) => {
    const isVideo = src?.endsWith('.mp4') || src?.endsWith('.webm');

    if (isVideo) {
        return (
            <video
                autoPlay
                loop
                muted
                playsInline
                className={className}
            >
                <source src={src} type={src.endsWith('.webm') ? 'video/webm' : 'video/mp4'} />
            </video>
        );
    }
    return <img src={src} alt={alt} className={className} />;
};

const HeroSection = ({ badge, title, subtitle, actions, stats, images, className }: HeroSectionProps) => {
    // Extract text from title prop if it's a React fragment with two children
    let firstLine = "Discover Your";
    let secondLine = "Strongest Self";
    if (typeof title === 'string') {
        firstLine = title;
        secondLine = '';
    } else if (
        React.isValidElement(title) &&
        title.props &&
        Array.isArray((title.props as { children?: React.ReactNode[] }).children)
    ) {
        const children = (title.props as { children?: React.ReactNode[] }).children;
        if (children && typeof children[0] === 'string') firstLine = children[0].trim();
        if (
            children &&
            children[1] &&
            typeof (children[1] as any).props?.children === 'string'
        ) {
            secondLine = (children[1] as any).props.children.trim();
        }
    }
    return (
        <section className={cn('relative w-full overflow-hidden bg-transparent pt-12 pb-12', className)}>
            <div className="container mx-auto px-6 grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-8">

                {/* Left Column: Text Content */}
                <motion.div
                    className="flex flex-col items-center text-center lg:items-start lg:text-left z-10"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {badge && (
                        <motion.div className="mb-6" variants={itemVariants}>
                            {badge}
                        </motion.div>
                    )}

                    <motion.h1
                        className="text-5xl font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] uppercase font-bebas-neue"
                        variants={itemVariants}
                    >
                        <Shuffle
                            text={firstLine}
                            className="font-bebas-neue ml-0"
                            tag="span"
                            loop={true}
                            loopDelay={1}
                            style={{ color: '#f8f8f8' }}
                            onShuffleComplete={() => {}}
                            colorFrom="#f8f8f8"
                            colorTo="#f8f8f8"
                        />
                        {secondLine && (
                            <Shuffle
                                text={secondLine}
                                className="font-bebas-neue ml-6"
                                tag="span"
                                loop={true}
                                loopDelay={1}
                                style={{ color: '#ff2a2a' }}
                                onShuffleComplete={() => {}}
                                colorFrom="#ff2a2a"
                                colorTo="#ff2a2a"
                            />
                        )}
                    </motion.h1>

                    <motion.div className="mt-6 max-w-xl text-lg text-[#B3B3B3] font-light" variants={itemVariants}>
                        {subtitle}
                    </motion.div>

                    <motion.div className="mt-10 flex flex-wrap justify-center gap-4 lg:justify-start" variants={itemVariants}>
                        {actions.map((action, index) => {
                            if (action.href) {
                                return (
                                    <Button asChild key={index} variant={action.variant} size="lg" className={cn("px-8 py-6 w-full sm:w-auto text-[14px] font-bold tracking-[0.2em] uppercase rounded-none", action.className)} style={action.style}>
                                        <a href={action.href}>{action.text}</a>
                                    </Button>
                                );
                            }
                            return (
                                <Button key={index} onClick={action.onClick} variant={action.variant} size="lg" className={cn("px-8 py-6 w-full sm:w-auto text-[14px] font-bold tracking-[0.2em] uppercase rounded-none", action.className)} style={action.style}>
                                    {action.text}
                                </Button>
                            )
                        })}
                    </motion.div>

                    <motion.div className="mt-16 flex flex-wrap justify-center gap-8 lg:justify-start pt-8 border-t border-white/10 w-full" variants={itemVariants}>
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center gap-4">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/5 border border-white/10 text-[#E50914]">
                                    {stat.icon}
                                </div>
                                <div className="text-left">
                                    <p className="text-2xl font-bebas-neue text-white tracking-wider">{stat.value}</p>
                                    <p className="text-sm text-[#B3B3B3] uppercase tracking-widest text-[10px]">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </motion.div>

                {/* Right Column: Image Collage */}
                <motion.div
                    className="relative h-[350px] sm:h-[450px] lg:h-[600px] w-full z-10 mt-8 lg:mt-0"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    {/* Decorative Shapes / Accents */}
                    <motion.div
                        className="absolute -top-10 left-1/4 h-32 w-32 rounded-full bg-[#E50914]/20 blur-3xl opacity-50"
                        variants={floatingVariants}
                        animate="animate"
                    />
                    <motion.div
                        className="absolute bottom-10 right-1/4 h-40 w-40 rounded-full bg-[#E50914]/10 blur-3xl opacity-30"
                        variants={floatingVariants}
                        animate="animate"
                        style={{ transitionDelay: '0.5s' }}
                    />

                    {/* Primary Main Image Container (Responsive) */}
                    <div className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none">
                        <div className="relative w-full max-w-[500px] h-full pointer-events-auto">
                            {/* Images / Videos */}
                            <motion.div
                                className="absolute z-10 top-[-10] left-1/2 -translate-x-1/2 w-[70%] h-[60%] rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden border border-white/10"
                                style={{ transformOrigin: 'bottom center' }}
                                variants={imageVariants}
                            >
                                <MediaRender src={images[0]} alt="Gym training" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                            </motion.div>

                            <motion.div
                                className="absolute z-20 top-[35%] right-[-20] w-[55%] h-[50%] rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden border border-[#E50914]/30"
                                style={{ transformOrigin: 'left center' }}
                                variants={imageVariants}
                            >
                                <MediaRender src={images[1]} alt="Personal training session" className={cn("h-full w-full object-cover filter transition-all duration-500", images[1]?.includes("gym-intro") ? "-rotate-90 scale-[1.35] saturate-50 hover:saturate-150" : "saturate-50 hover:saturate-150")} />
                            </motion.div>

                            <motion.div
                                className="absolute z-30 bottom-[5%] left-[-20] w-[50%] h-[40%] rounded-xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden border border-white/10"
                                style={{ transformOrigin: 'top right' }}
                                variants={imageVariants}
                            >
                                <MediaRender src={images[2]} alt="Gym transformation" className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>

            {/* Deep Red Radial Background Glow (Fixed behind content) */}
            <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(229,9,20,0.15)_0%,transparent_70%)] blur-[80px] z-0 pointer-events-none fade-in" />
        </section>
    );
};

export default HeroSection;
