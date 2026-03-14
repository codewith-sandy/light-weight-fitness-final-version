"use client";

import { Dumbbell, Trophy, ArrowRight } from "lucide-react";
import HeroSection from "@/components/ui/hero-section-9";
import MagicRings from "../MagicRings";
import { SuccessStoriesMasonry } from "./SuccessStoriesMasonry";
import { HomeVideoShowcase } from "./HomeVideoShowcase";


export function LandingPage() {
  const heroData = {
    badge: (
      <div className="relative group inline-block">
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#E50914] to-[#ff4d4d] rounded-full blur opacity-50 group-hover:opacity-60 transition duration-100 group-hover:duration-20"></div>
        <div className="relative px-5 py-2 rounded-full border border-white/10 bg-black/60 backdrop-blur-xl text-[12px] font-bold tracking-[0.3em] uppercase text-white shadow-[0_8px_32px_rgba(0,0,0,0.5)] flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E50914] animate-pulse shadow-[0_0_10px_#E50914]"></span>
          Light Weight Fitness Studio
        </div>
      </div>
    ),
    title: (
      <>
        Discover Your
        <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#E50914] via-[#ff2a2a] to-[#8a0000]">
          Strongest Self
        </span>
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
      "/videos/gym-owner-video.mp4",
    ],
  };

  return (
    <div className="relative w-full overflow-hidden">
      {/* MagicRings Background */}
      {/* Fullscreen MagicRings background */}
      <div style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none',
        background: '#000',
      }}>
        <MagicRings
          color="#E50914"
          colorTwo="#f8f2f8"
          ringCount={9}
          speed={0.6}
          attenuation={10}
          lineThickness={2}
          baseRadius={0.19}
          radiusStep={0.13}
          scaleRate={0.12}
          opacity={1}
          blur={0}
          noiseAmount={0.1}
          rotation={0}
          ringGap={1.3}
          fadeIn={0.7}
          fadeOut={0.5}
          followMouse={false}
          mouseInfluence={0.2}
          hoverScale={1.35}
          parallax={0.05}
          clickBurst={false}
        />
      </div>

      <div className="relative z-10 w-full min-h-screen">
        <HeroSection
          badge={heroData.badge}
          title={heroData.title}
          subtitle={heroData.subtitle}
          actions={heroData.actions}
          stats={heroData.stats}
          images={heroData.images}
          className="bg-transparent"
        />
        <SuccessStoriesMasonry />
        <HomeVideoShowcase />
      </div>
    </div>
  );
}
