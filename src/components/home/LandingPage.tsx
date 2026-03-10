"use client";

import { Dumbbell, Trophy, ArrowRight } from "lucide-react";
import HeroSection from "@/components/ui/hero-section-9";

export function LandingPage() {
  const heroData = {
    badge: (
      <div className="relative group inline-block">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E50914] to-[#ff4d4d] rounded-full blur opacity-30 group-hover:opacity-60 transition duration-1000 group-hover:duration-200"></div>
        <div className="relative px-5 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl text-[12px] font-bold tracking-[0.3em] uppercase text-[#E50914] shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse shadow-[0_0_10px_#E50914]"></span>
          Light Weight Fitness Studio
        </div>
      </div>
    ),
    title: (
      <>
        Discover Your <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E50914] via-[#ff2a2a] to-[#8a0000]">Strongest Self</span>
      </>
    ),
    subtitle: "Transform your body with elite equipment, expert trainers, and the most supportive fitness community in New Vellanur.",
    actions: [
      {
        text: "Let's Know Your BMI",
        href: "/calculator",
        variant: "default" as const,
        className: "bg-gradient-to-r from-[#E50914] to-[#cc0812] hover:from-[#cc0812] hover:to-[#8a0000] border-none",
      },
      {
        text: "Join Now",
        href: "/contact",
        variant: "outline" as const,
        className: "bg-white/5 border-[#E50914]/50 text-[#E50914] hover:bg-[#E50914] hover:text-white backdrop-blur",
      },
      {
        text: (
          <span className="flex items-center gap-2">
            Success Stories
            <span className="px-2 py-0.5 rounded-full bg-black/60 text-[#ff4d4d] text-[10px] border border-[#cc0000]/50 animate-pulse tracking-wider">
              ✨ REAL RESULTS
            </span>
          </span>
        ),
        href: "/success-stories",
        variant: "default" as const,
        style: {
          backgroundImage: "linear-gradient(109.6deg, rgba(204,0,0,1) 11.2%, rgba(68,0,0,1) 100.6%)",
          border: "none",
        },
        className: "text-white hover:opacity-90 transition-opacity shadow-[0_4px_15px_rgba(204,0,0,0.5)]",
      },
    ],
    stats: [
      {
        value: "50+",
        label: "Active Members",
        icon: <Trophy className="h-5 w-5" />,
      },
      {
        value: "15+",
        label: "Expert Trainers",
        icon: <Dumbbell className="h-5 w-5" />,
      },
      {
        value: "10+",
        label: "Group Classes",
        icon: <ArrowRight className="h-5 w-5" />,
      },
    ],
    images: [
      "/videos/branch1.mp4",
      "/videos/branch2.mp4",
      "/videos/gym-homepage.mp4",
    ],
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* Background Video - Fixed to Viewport format to prevent borders on scroll */}
      <div className="fixed inset-0 w-full h-full z-0 pointer-events-none flex items-center justify-center bg-black">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute top-1/2 left-1/2 w-[80vmax] h-[110vmax] max-w-none object-cover -translate-x-1/2 -translate-y-1/2 -rotate-90 opacity-65 scale-90 "
        >
          <source src="/videos/gym-intro.mp4" type="video/mp4" />
        </video>
        {/* Smooth Dark Gradient Filter Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0F0F0F]/40 to-[#0F0F0F]/80 z-[1]" />
      </div>

      <div className="relative z-10 w-full min-h-screen">
        <HeroSection
          badge={heroData.badge}
          title={heroData.title}
          subtitle={heroData.subtitle}
          actions={heroData.actions}
          stats={heroData.stats}
          images={heroData.images}
          className="bg-transparent" // Important: Let video show through
        />
      </div>
    </div>
  );
}
