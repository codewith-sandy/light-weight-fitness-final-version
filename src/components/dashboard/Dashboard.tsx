"use client";

import { motion } from "framer-motion";
import { BMICategory } from "@/lib/bmi";
import { ArrowRight, Flame, Dumbbell, Apple, Activity } from "lucide-react";

type DashboardProps = {
  name: string;
  bmi: number;
  category: BMICategory;
};

export function Dashboard({ name, bmi, category }: DashboardProps) {
  const getCategoryConfig = (cat: BMICategory) => {
    switch (cat) {
      case "Underweight":
        return {
          title: "Muscle & Mass Focus",
          icon: Dumbbell,
          color: "text-[#E50914]",
          bgAccent: "from-[#E50914]/20",
          workout: "Hypertrophy & Strength Training. 4-5 days/week targeting major muscle groups with heavy compound movements.",
          diet: "Caloric Surplus (+500 kcal). High protein, moderate carbs, healthy fats. Frequent meals.",
          quote: "Build the foundation. Every rep counts towards your new structure.",
        };
      case "Normal":
        return {
          title: "Balanced Performance",
          icon: Activity,
          color: "text-[#E50914]",
          bgAccent: "from-[#E50914]/20",
          workout: "Hybrid Training. Mix of strength (3 days) and conditioning/cardio (2 days).",
          diet: "Maintenance Calories. Balanced macros (40P/40C/20F) to fuel performance and recovery.",
          quote: "Maintain the engine. Optimize for function, power, and longevity.",
        };
      case "Overweight":
        return {
          title: "Fat Loss & Conditioning",
          icon: Flame,
          color: "text-[#E50914]",
          bgAccent: "from-[#E50914]/20",
          workout: "HIIT & Full Body Resistance. 4 days/week focusing on metabolic conditioning and retaining muscle.",
          diet: "Caloric Deficit (-500 kcal). High protein to retain mass, lower carbs, moderate fats.",
          quote: "Ignite the furnace. Consistency beats intensity when reshaping your body.",
        };
      case "Obese":
        return {
          title: "Transformation Protocol",
          icon: Apple,
          color: "text-[#E50914]",
          bgAccent: "from-[#E50914]/20",
          workout: "Low-Impact Cardio & Core Stability. Daily walking, swimming, or cycling plus light resistance.",
          diet: "Strict Caloric Deficit. Focus on whole foods, eliminating liquid calories, high protein/fiber for satiety.",
          quote: "The journey of a thousand miles begins with a single step. We start today.",
        };
    }
  };

  const config = getCategoryConfig(category);
  const Icon = config.icon;

  return (
    <div className="min-h-screen py-10 px-6 max-w-7xl mx-auto w-full pt-20">
      
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 border-l-4 border-[#E50914] pl-6"
      >
        <p className="text-[#B3B3B3] uppercase tracking-widest text-sm font-semibold mb-2">Welcome Back,</p>
        <h1 className="font-bebas-neue text-6xl md:text-8xl tracking-tight uppercase leading-none">
          {name}
        </h1>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column: BMI Stats */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-1 border border-white/10 bg-[#1A1A1A] rounded-xl p-8 relative overflow-hidden"
        >
          <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl ${config.bgAccent} to-transparent opacity-50 rounded-bl-full pointer-events-none`} />
          
          <h2 className="text-[13px] uppercase tracking-widest text-[#B3B3B3] font-semibold mb-6 flex items-center gap-2">
            <Activity className="w-4 h-4" /> Current Assessment
          </h2>
          
          <div className="mb-8">
            <p className="text-sm text-[#B3B3B3] mb-1">Your BMI</p>
            <p className="font-bebas-neue text-7xl tracking-tighter">{bmi}</p>
          </div>

          <div>
            <p className="text-sm text-[#B3B3B3] mb-1">Category</p>
            <p className={`font-bebas-neue text-4xl uppercase tracking-wide ${config.color}`}>
              {category}
            </p>
          </div>
        </motion.div>

        {/* Right Column: Personalized Protocol */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-2 space-y-8"
        >
          {/* Protocol Header */}
          <div className="border border-white/10 bg-[#1A1A1A] rounded-xl p-8">
            <div className="flex items-center gap-4 mb-4">
              <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${config.color}`}>
                <Icon className="w-8 h-8" />
              </div>
              <div>
                <h3 className="text-[13px] uppercase tracking-widest text-[#B3B3B3] font-semibold">Recommended Path</h3>
                <h2 className="font-bebas-neue text-4xl tracking-wide uppercase">{config.title}</h2>
              </div>
            </div>
            <p className="text-lg italic text-[#B3B3B3] border-l-2 border-white/20 pl-4 py-1">"{config.quote}"</p>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Workout Module */}
            <div className="border border-white/10 bg-[#0F0F0F] rounded-xl p-6 relative group overflow-hidden transition-all hover:bg-[#1A1A1A] hover:border-white/20">
              <Dumbbell className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5 group-hover:text-white/10 transition-colors" />
              <h3 className="text-[13px] uppercase tracking-widest text-[#E50914] font-semibold mb-4">Training Protocol</h3>
              <p className="text-[#B3B3B3] leading-relaxed relative z-10">{config.workout}</p>
            </div>

            {/* Diet Module */}
            <div className="border border-white/10 bg-[#0F0F0F] rounded-xl p-6 relative group overflow-hidden transition-all hover:bg-[#1A1A1A] hover:border-white/20">
              <Apple className="absolute -right-4 -bottom-4 w-24 h-24 text-white/5 group-hover:text-white/10 transition-colors" />
              <h3 className="text-[13px] uppercase tracking-widest text-[#E50914] font-semibold mb-4">Diet & Nutrition</h3>
              <p className="text-[#B3B3B3] leading-relaxed relative z-10">{config.diet}</p>
            </div>

          </div>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`w-full group flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded font-bold text-lg tracking-wide uppercase transition-all`}
          >
            Start Your Protocol
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>
      </div>

    </div>
  );
}
