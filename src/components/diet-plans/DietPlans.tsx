"use client";

import { motion } from "framer-motion";
import { Coffee, UtensilsCrossed, Moon } from "lucide-react";

export function DietPlans() {
  const mealPlans = [
    {
      title: "Breakfast",
      icon: Coffee,
      time: "07:00 AM",
      options: [
        "Oats with whey protein, almonds, and mixed berries",
        "4 Egg whites + 2 whole eggs scramble with spinach",
        "Greek yogurt parfait with chia seeds"
      ]
    },
    {
      title: "Lunch",
      icon: UtensilsCrossed,
      time: "01:00 PM",
      options: [
        "Grilled chicken breast (200g) with quinoa and asparagus",
        "Lean turkey wrap with avocado and mixed greens",
        "Baked salmon with sweet potato mash"
      ]
    },
    {
      title: "Dinner",
      icon: Moon,
      time: "07:30 PM",
      options: [
        "Sirloin steak (lean) with broccoli and side salad",
        "White fish (cod/halibut) with roasted zucchini",
        "Tofu stir-fry with mixed bell peppers (Vegetarian)"
      ]
    }
  ];

  return (
    <div className="w-full relative py-12">
      <div className="text-center mb-16 px-4">
        <h2 className="font-bebas-neue text-5xl md:text-6xl tracking-widest uppercase mb-4">Core Nutrition Guidelines</h2>
        <div className="w-24 h-1 bg-[#E50914] mx-auto mb-6" />
        <p className="text-[#B3B3B3] max-w-2xl mx-auto font-light">While your personalized dashboard offers precise macros based on your BMI, these foundational meals represent the quality of fuel required for elite performance.</p>
      </div>

      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {mealPlans.map((meal, idx) => (
            <motion.div
              key={meal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 relative overflow-hidden group hover:bg-[#222222] transition-colors"
            >
              <div className="absolute -right-6 -bottom-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <meal.icon className="w-48 h-48" />
              </div>
              
              <div className="flex items-center justify-between mb-8">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl text-[#E50914]">
                  <meal.icon className="w-6 h-6" />
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
          ))}
          
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
