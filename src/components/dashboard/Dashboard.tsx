"use client";

import { motion } from "framer-motion";
import { BMICategory } from "@/lib/bmi";
import { ArrowRight, Flame, Dumbbell, Apple, Activity, MessageSquare, Calculator, Trophy } from "lucide-react";
import { useRef } from "react";
import Link from "next/link";

const phases = [
  {
    id: "01",
    title: "Body Metrics",
    description: "Launch your journey by analyzing your current data. We calculate your BMI and core vitals to establish a baseline.",
    icon: <Calculator className="w-8 h-8 text-[#E50914]" />,
    action: "Run Analysis",
    link: "/calculator"
  },
  {
    id: "02",
    title: "Elite Blueprint",
    description: "Our systems generate a hyper-personalized diet and training protocol tailored to your specific hypertrophy or fat-loss goals.",
    icon: <Flame className="w-8 h-8 text-[#E50914]" />,
    action: "View Plans",
    link: "/diet-plans"
  },
  {
    id: "03",
    title: "Full Activation",
    description: "Execute your blueprint on the floor. Access premium equipment and elite coaching to manifest your peak physique.",
    icon: <Trophy className="w-8 h-8 text-[#E50914]" />,
    action: "Join the Ranks",
    link: "/membership"
  }
];

type DashboardProps = {
  name: string;
  age: number;
  bmi: number;
  category: BMICategory;
  bmiPrime: number;
  ponderalIndex: number;
  gender: string;
  goal: string;
};

export function Dashboard({ name, age, bmi, category, bmiPrime, ponderalIndex, gender, goal }: DashboardProps) {
  const protocolRef = useRef<HTMLDivElement>(null);

  const scrollToProtocol = () => {
    protocolRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const getCategoryConfig = (cat: BMICategory) => {
    const baseConfig = {
      color: "text-[#E50914]",
      bgAccent: "from-[#E50914]/20",
    };

    switch (cat) {
      case "Severe Thinness":
      case "Moderate Thinness":
      case "Mild Thinness":
      case "Underweight (Child/Teen)":
        return {
          title: "Muscle & Mass Focus",
          icon: Dumbbell,
          color: "text-[#E50914]",
          bgAccent: "from-[#E50914]/20",
          workout: "Hypertrophy & Strength Training. 4-5 days/week targeting major muscle groups with heavy compound movements.",
          diet: "Caloric Surplus (+500 kcal). High protein, moderate carbs, healthy fats. Frequent meals.",
          quote: "Build the foundation. Every rep counts towards your new structure.",
          detailedDiet: [
            "Meal 1: 4 Large Eggs + 100g Oats + 1 Banana",
            "Meal 2: 200g Chicken Breast + 150g Brown Rice + Broccoli",
            "Meal 3: Whey Protein + 50g Almonds",
            "Meal 4: 200g Fish/Steak + 200g Sweet Potato + Asparagus",
            "Pre-Sleep: Casein Protein or 200g Cottage Cheese"
          ],
          detailedWorkout: [
            "Mon: Chest & Triceps (Heavy Compounds)",
            "Tue: Back & Biceps (Deadlifts focus)",
            "Wed: Active Recovery (Walking/Mobility)",
            "Thu: Legs (Squats 5x5)",
            "Fri: Shoulders & Abs",
            "Sat: Weak Point Focus / Accessory Work"
          ]
        };
      case "Normal weight":
      case "Healthy weight (Child/Teen)":
        return {
          title: "Balanced Performance",
          icon: Activity,
          color: "text-[#E50914]",
          bgAccent: "from-[#E50914]/20",
          workout: "Hybrid Training. Mix of strength (3 days) and conditioning/cardio (2 days).",
          diet: "Maintenance Calories. Balanced macros (40P/40C/20F) to fuel performance and recovery.",
          quote: "Maintain the engine. Optimize for function, power, and longevity.",
          detailedDiet: [
            "Meal 1: Greek Yogurt + Granola + Berries",
            "Meal 2: Grilled Chicken Salad + Quinoa",
            "Snack: Apple + Peanut Butter",
            "Meal 3: Baked Salmon + Whole Wheat Pasta + Spinach",
            "Hydration: 3-4L Water daily"
          ],
          detailedWorkout: [
            "Mon: Strength (Upper Body)",
            "Tue: HIIT Conditioning (30 mins)",
            "Wed: Strength (Lower Body)",
            "Thu: Active Recovery",
            "Fri: Full Body Functional Movement",
            "Sat: Outdoor Activity or Sports"
          ]
        };
      case "Overweight":
      case "At risk of overweight (Child/Teen)":
      case "Overweight (Child/Teen)":
        return {
          title: "Fat Loss & Conditioning",
          icon: Flame,
          color: "text-[#E50914]",
          bgAccent: "from-[#E50914]/20",
          workout: "HIIT & Full Body Resistance. 4 days/week focusing on metabolic conditioning and retaining muscle.",
          diet: "Caloric Deficit (-500 kcal). High protein to retain mass, lower carbs, moderate fats.",
          quote: "Ignite the furnace. Consistency beats intensity when reshaping your body.",
          detailedDiet: [
            "Meal 1: Scrambled Egg Whites + Spinach + Coffee",
            "Meal 2: Tuna Salad (no mayo) + Celery Sticks",
            "Meal 3: 150g Lean Turkey + Large Mixed Green Salad",
            "Snack: 0% Fat Greek Yogurt",
            "Meal 4: Grilled White Fish + Steamed Green Beans"
          ],
          detailedWorkout: [
            "Session A: 45 min Weight Training + 15 min Stairmaster",
            "Session B: HIIT Circuit (Battling ropes, Burpees, Sprints)",
            "Session C: LISS Cardio (60 min Fasted Walk)",
            "Weekly Goal: 10,000 steps minimum daily"
          ]
        };
      case "Obese Class I":
      case "Obese Class II":
      case "Obese Class III":
        return {
          title: "Transformation Protocol",
          icon: Apple,
          color: "text-[#E50914]",
          bgAccent: "from-[#E50914]/20",
          workout: "Low-Impact Cardio & Core Stability. Daily walking, swimming, or cycling plus light resistance.",
          diet: "Strict Caloric Deficit. Focus on whole foods, eliminating liquid calories, high protein/fiber for satiety.",
          quote: "The journey of a thousand miles begins with a single step. We start today.",
          detailedDiet: [
            "Morning: Warm Lemon Water + Fasted Walk",
            "Breakfast: Omelette with unlimited Peppers/Onions",
            "Lunch: Lentil Soup or Vegetable Stir-fry with Tofu",
            "Dinner: Steamed Chicken + Cauliflower Rice",
            "Rule: No Sugary Drinks, No Processed Snacks"
          ],
          detailedWorkout: [
            "Daily: 30-45 min Brisk Walk (Power Walking)",
            "Tue/Thu: Bodyweight Movements (Assisted Squats, Wall Push-ups)",
            "Sat: Swimming or Water Aerobics",
            "Focus: Mobility, Heart Health, and Consistency"
          ]
        };
      default:
        return {
          title: "General Fitness",
          icon: Activity,
          color: "text-[#E50914]",
          bgAccent: "from-[#E50914]/20",
          workout: "Stay active and maintain your health through consistent exercise.",
          diet: "Balanced nutrition focusing on whole foods and hydration.",
          quote: "Your fitness journey is a lifelong commitment to health.",
          detailedDiet: ["Balanced meals focusing on portion control."],
          detailedWorkout: ["30 minutes of moderate activity 5 days a week."]
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
            <p className="font-bebas-neue text-7xl tracking-tighter">{bmi.toFixed(2)}</p>
          </div>

          <div>
            <p className={`font-bebas-neue text-4xl uppercase tracking-wide ${config.color}`}>
              {category}
            </p>
          </div>

          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#B3B3B3] mb-1">BMI Prime</p>
              <p className="font-bebas-neue text-3xl">{bmiPrime.toFixed(2)}</p>
              <p className="text-[9px] text-white/40 leading-tight mt-1">Ratio of BMI to normal upper limit (25.0)</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#B3B3B3] mb-1">Ponderal Index</p>
              <p className="font-bebas-neue text-3xl">{ponderalIndex.toFixed(2)}</p>
              <p className="text-[9px] text-white/40 leading-tight mt-1">Enhanced leanness measure for extreme heights</p>
            </div>
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
            onClick={scrollToProtocol}
            className={`w-full group flex items-center justify-center gap-3 bg-white text-black px-8 py-5 rounded font-bold text-lg tracking-wide uppercase transition-all shadow-[0_10px_30px_rgba(255,255,255,0.1)]`}
          >
            Start Your Protocol
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>

          {/* The Elite Protocol Journey */}
          <div ref={protocolRef} className="pt-8 space-y-12 scroll-mt-24">
            <div className="text-center mb-12">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#E50914] font-bold uppercase tracking-[0.3em] text-xs mb-3 block"
              >
                The Transformation Loop
              </motion.span>
              <h2 className="font-bebas-neue text-5xl tracking-wider uppercase mb-4">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] via-[#E50914] to-[#8b0000]">Elite Protocol</span>
              </h2>
              <div className="h-1 bg-[#E50914] w-24 mx-auto mb-6" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {phases.map((phase, idx) => (
                <motion.div
                  key={phase.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group relative bg-[#0F0F0F] border border-white/10 p-8 rounded-xl hover:border-[#E50914]/40 transition-all duration-500 overflow-hidden"
                >
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-black/40 rounded-lg ring-1 ring-white/10 group-hover:ring-[#E50914]/40 transition-all">
                        {phase.icon}
                      </div>
                      <span className="font-bebas-neue text-4xl text-white/5 group-hover:text-[#E50914]/10 transition-colors leading-none">
                        {phase.id}
                      </span>
                    </div>
                    <h3 className="font-bebas-neue text-2xl tracking-wide uppercase mb-3 text-white">
                      {phase.title}
                    </h3>
                    <p className="text-[#B3B3B3] text-sm font-light leading-relaxed mb-6 h-20">
                      {phase.description}
                    </p>
                    <Link href={phase.link}>
                      <button className="flex items-center gap-2 text-white font-bold uppercase tracking-widest text-[10px] group/btn">
                        {phase.action}
                        <ArrowRight className="w-3 h-3 text-[#E50914] group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Existing Detailed Sections */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Detailed Diet */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-[#1A1A1A] border border-white/10 p-8 rounded-xl"
              >
                <h3 className="font-bebas-neue text-3xl mb-6 text-white tracking-wide border-b border-[#E50914] pb-2 inline-block">Daily Meal Plan</h3>
                <ul className="space-y-4">
                  {config.detailedDiet.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-[#B3B3B3] text-sm">
                      <span className="text-[#E50914] font-bold">»</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Detailed Workout */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="bg-[#1A1A1A] border border-white/10 p-8 rounded-xl"
              >
                <h3 className="font-bebas-neue text-3xl mb-6 text-white tracking-wide border-b border-[#E50914] pb-2 inline-block">Training Schedule</h3>
                <ul className="space-y-4">
                  {config.detailedWorkout.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-[#B3B3B3] text-sm">
                      <span className="text-[#E50914] font-bold">✓</span> {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Personalization Context */}
            <div className="bg-[#E50914]/10 border border-[#E50914]/20 p-6 rounded-xl text-center">
              <p className="text-sm text-white/80">
                This protocol is optimized for your goal: <span className="text-[#E50914] font-bold uppercase">{goal}</span>.
                Calculated based on a <span className="font-bold">{gender}</span> physiology.
              </p>
            </div>

            {/* Call to Action: Gym Owner */}
            <motion.div
              whileHover={{ y: -5 }}
              className="bg-gradient-to-r from-[#1A1A1A] to-[#252525] border border-white/10 p-10 rounded-xl text-center shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none" />
              <h2 className="font-bebas-neue text-5xl mb-4 text-white uppercase tracking-tight">Need Expert Guidance?</h2>
              <p className="text-[#B3B3B3] max-w-2xl mx-auto mb-8">
                The "Light Weight Fitness Gym" owner and master trainers are ready to help you push past your plateaus and achieve your dream physique. Get personalized coaching today.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-3 bg-[#E50914] text-white px-10 py-5 rounded font-black text-lg tracking-widest uppercase hover:bg-[#b80710] transition-all shadow-[0_0_20px_rgba(229,9,20,0.5)]"
              >
                <MessageSquare className="w-6 h-6" /> Contact Gym Owner
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>

    </div>
  );
}
