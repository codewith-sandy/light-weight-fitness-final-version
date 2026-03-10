import { AnimatedSuccessStories } from "@/components/success-stories/AnimatedSuccessStories";
import { SuccessStoriesCarousel } from "@/components/shared/SuccessStoriesCarousel";

export default function SuccessStoriesPage() {
  return (
    <div className="min-h-screen pt-20">
      <AnimatedSuccessStories />

      {/* Existing Grid View Section starts here - using the bottom half of SuccessStoriesCarousel logic */}
      <div className="pb-20">
        <SuccessStoriesCarousel hideHero={true} />
      </div>
    </div>
  );
}
