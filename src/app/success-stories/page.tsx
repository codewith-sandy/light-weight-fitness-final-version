import { AnimatedSuccessStories } from "@/components/success-stories/AnimatedSuccessStories";
import { SuccessStoriesCarousel } from "@/components/shared/SuccessStoriesCarousel";
import { SuccessVideoShowcase } from "@/components/success-stories/SuccessVideoShowcase";
import { HomeVideoShowcase } from "@/components/home/HomeVideoShowcase";

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Two-column layout: Stories Left, Video Right */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-0 items-start">
        <AnimatedSuccessStories />
        <SuccessVideoShowcase />
      </div>

      {/* Existing Grid View Section */}
      <div className="pb-10">
        <SuccessStoriesCarousel hideHero={true} />
      </div>

      {/* New Video Masonry Section */}
      <div className="pb-20">
        <HomeVideoShowcase />
      </div>
    </div>
  );
}
