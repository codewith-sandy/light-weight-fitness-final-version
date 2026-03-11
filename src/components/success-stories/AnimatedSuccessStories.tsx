"use client";

import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

const stories = [
    {
        quote: "Incredible progress in strength and endurance. The consistency really paid off! I never thought I could achieve this level of fitness in just 3 months.",
        name: "Muscle Gain Journey",
        designation: "Transformation 1 • 3 Months",
        src: "/photos/transformation/trans 1.jpg",
    },
    {
        quote: "A complete lifestyle change. Feeling more energetic and healthy every day. The coaches here really know how to push you to your limits.",
        name: "Fat Loss Success",
        designation: "Transformation 2 • 6 Months",
        src: "/photos/transformation/trans 2.jpg",
    },
    {
        quote: "The transformation exceeded my expectations. Grateful for the guidance and the amazing community at Light Weight Fitness.",
        name: "Body Recomposition",
        designation: "Transformation 3 • 5 Months",
        src: "/photos/transformation/trans 3.jpg",
    },
    {
        quote: "Persistence is key. The results speak for themselves. Highly recommended for anyone looking for serious results and a professional environment.",
        name: "Weight Loss Milestone",
        designation: "Transformation 4 • 8 Months",
        src: "/photos/transformation/trans 4.webp",
    },
    {
        quote: "Hard work pays off. The program was challenging but rewarding. I've gained so much confidence and strength during this process.",
        name: "General Fitness",
        designation: "Transformation 5 • 3 Months",
        src: "/photos/transformation/trans 5.jpg",
    },
    {
        quote: "A year of dedication turned into the best shape of my life. This place isn't just a gym; it's a transformation center.",
        name: "Athlete Prep",
        designation: "Transformation 6 • 12 Months",
        src: "/photos/transformation/trans 6.jpg",
    },
];

export function AnimatedSuccessStories() {
    return (
        <div className="py-20">
            <div className="text-center mb-10">
                <h2 className="font-bebas-neue text-5xl md:text-7xl tracking-widest uppercase mb-4 text-white" style={{ marginTop: '-100px' }}>
                    Real <span className="text-[#E50914]">Results</span>
                </h2>
                <p className="text-[#B3B3B3] max-w-2xl mx-auto uppercase tracking-widest text-sm">
                    Witness the power of dedication and expert coaching
                </p>
            </div>
            <AnimatedTestimonials testimonials={stories} autoplay={true} />
        </div>
    );
}
