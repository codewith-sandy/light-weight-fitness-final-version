"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, Moon, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export function DietPlans() {
  const router = useRouter();
  const [userData, setUserData] = useState<{
    bmi: number;
    category: string;
    goal: string;
  } | null>(null);

  useEffect(() => {
    const data = localStorage.getItem("userBmiData");
    if (!data) {
      router.push("/calculator?redirect=diet-plans");
    } else {
      setUserData(JSON.parse(data));
    }
  }, [router]);

  if (!userData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0F0F0F]">
        <div className="w-8 h-8 border-4 border-[#E50914] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  // Tailor meal plans based on goal
  const isWeightLoss = userData.goal === "Shredding & Fat Loss" || userData.category === "Obese" || userData.category === "Overweight";
  const isMuscleGain = userData.goal === "Hypertrophy & Muscle Gain" || userData.category === "Underweight";

  const mealPlans = [
    {
      title: "Breakfast",
      icon: Coffee,
      time: "07:00 AM",
      options: isWeightLoss ? [
        "Greek yogurt with chia seeds and berries (low calorie)",
        "2 Egg whites scramble with spinach and tomatoes",
        "Overnight oats with almond milk and half green apple"
      ] : isMuscleGain ? [
        "Oats with 2 scoops whey protein, almonds, and peanut butter",
        "4 Whole eggs scramble with cheese and whole wheat toast",
        "High-protein smoothie with banana, oats, and creatine"
      ] : [
        "Oats with whey protein, almonds, and mixed berries",
        "4 Egg whites + 2 whole eggs scramble with spinach",
        "Greek yogurt parfait with chia seeds"
      ]
    },
    {
      title: "Lunch",
      icon: UtensilsCrossed,
      time: "01:00 PM",
      options: isWeightLoss ? [
        "Grilled chicken breast (150g) with large mixed green salad",
        "Lean turkey wrap (using lettuce instead of tortilla)",
        "Baked cod fish with steamed broccoli"
      ] : isMuscleGain ? [
        "Grilled chicken breast (250g) with 1.5 cups brown rice",
        "Lean beef mince with sweet potato mash and asparagus",
        "Large salmon fillet with quinoa and mixed vegetables"
      ] : [
        "Grilled chicken breast (200g) with quinoa and asparagus",
        "Lean turkey wrap with avocado and mixed greens",
        "Baked salmon with sweet potato mash"
      ]
    },
    {
      title: "Dinner",
      icon: Moon,
      time: "07:30 PM",
      options: isWeightLoss ? [
        "White fish (cod/halibut) with roasted zucchini",
        "Tofu stir-fry with mixed bell peppers (Vegetarian)",
        "Chicken soup with clear broth and load of veggies"
      ] : isMuscleGain ? [
        "Sirloin steak (200g) with large baked potato",
        "Chicken thighs with rice and black beans",
        "Protein pasta with lean turkey meat sauce"
      ] : [
        "Sirloin steak (lean) with broccoli and side salad",
        "White fish (cod/halibut) with roasted zucchini",
        "Tofu stir-fry with mixed bell peppers (Vegetarian)"
      ]
    }
  ];

  return (
    <div className="w-full relative py-12">
      <div className="text-center mb-16 px-4">
        <h2 className="font-bebas-neue text-4xl md:text-5xl lg:text-6xl tracking-widest uppercase mb-4 text-[#E50914]">
          {userData.goal} Plan
        </h2>
        <h3 className="text-xl md:text-2xl font-bebas-neue tracking-widest uppercase mb-4 text-white">
          BMI Category: {userData.category} ({userData.bmi.toFixed(1)})
        </h3>
        <div className="w-24 h-1 bg-[#E50914] mx-auto mb-6" />
        <p className="text-[#B3B3B3] max-w-2xl mx-auto font-light mb-6">Based on your BMI calculation and primary goal, we have tailored these foundational meals for elite performance and optimal results.</p>

        <Link href="/dashboard" className="inline-flex items-center gap-2 text-white bg-white/5 border border-white/10 hover:bg-white/10 px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-colors">
          View Full Dashboard <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          {mealPlans.map((meal, idx) => {
            const Icon = meal.icon;
            return (
              <motion.div
                key={meal.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.15 }}
                className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:bg-[#222222] transition-colors"
              >
                <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                  <Icon className="w-48 h-48" />
                </div>

                <div className="flex items-center justify-between mb-8">
                  <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#E50914]">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div className="text-[11px] uppercase tracking-widest font-semibold text-[#B3B3B3] py-1 px-3 border border-white/10 rounded-full">
                    {meal.time}
                  </div>
                </div>

                <h3 className="font-bebas-neue text-4xl tracking-wide uppercase mb-6">{meal.title}</h3>

                <ul className="space-y-4 relative z-10">
                  {meal.options.map((option, oIdx) => (
                    <li key={oIdx} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#E50914] mt-2 shrink-0" />
                      <span className="text-[#B3B3B3] text-sm leading-relaxed">{option}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}

        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-12 p-6 border border-[#E50914]/30 bg-[#E50914]/5 rounded-xl text-center max-w-2xl mx-auto"
        >
          <p className="text-[13px] uppercase tracking-widest font-semibold text-[#E50914] mb-2">Important Disclaimer</p>
          <p className="text-[#B3B3B3] text-sm">Hydration is critical. Consume a minimum of 3-4 liters of water daily. Consult with our in-house nutritionists before making drastic dietary changes.</p>
        </motion.div>
      </div>
    </div>
  );
}
