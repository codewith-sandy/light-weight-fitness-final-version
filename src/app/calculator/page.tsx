"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { calculateBMI, UnitSystem } from "@/lib/bmi";
import { ArrowLeft, Ruler, Scale } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type BMIFormData = {
  name: string;
  age: number;
  email: string;
  contactNumber: string;
  gender: string;
  height: number; // cm
  weight: number; // kg or lbs
  heightFt?: number;
  heightIn?: number;
  goal: string;
};

export default function CalculatorPage() {
  const router = useRouter();
  const [unitSystem, setUnitSystem] = useState<UnitSystem>("metric");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BMIFormData>();

  const onSubmit = (data: BMIFormData) => {
    let finalWeight = data.weight;
    let finalHeight = data.height;

    if (unitSystem === "us") {
      // Convert ft/in to total inches
      const ft = data.heightFt || 0;
      const inch = data.heightIn || 0;
      finalHeight = ft * 12 + inch;
    }

    // Calculate BMI
    const { bmi, category, bmiPrime, ponderalIndex } = calculateBMI(
      finalWeight,
      finalHeight,
      data.age,
      unitSystem
    );

    // Redirect to dashboard with params
    const searchParams = new URLSearchParams({
      name: data.name,
      bmi: bmi.toString(),
      category: category,
      age: data.age.toString(),
      prime: bmiPrime.toString(),
      pi: ponderalIndex.toString(),
      gender: data.gender,
      goal: data.goal,
    });

    router.push(`/dashboard?${searchParams.toString()}`);
  };

  return (
    <div className="min-h-screen py-32 px-6 flex flex-col items-center justify-center relative w-full overflow-hidden bg-[#0F0F0F]">
      {/* Background Video */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none overflow-hidden flex items-center justify-center">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-40"
        >
          <source src="/videos/gym-video.mp4" type="video/mp4" />
        </video>
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-black/60 to-black/30" />
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-[#1A1A1A]/60 backdrop-blur-xl border border-white/20 p-8 md:p-12 rounded-2xl relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.8)] z-10"
      >
        <Link href="/" className="absolute top-6 left-6 text-[#B3B3B3] hover:text-[#E50914] flex items-center gap-2 transition-colors text-sm uppercase tracking-widest font-bold z-10">
          <ArrowLeft className="w-4 h-4" /> Back
        </Link>

        {/* Form decorative accent */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#E50914] to-transparent" />

        <div className="mb-10 text-center mt-6">
          <h2 className="font-bebas-neue text-4xl md:text-5xl tracking-wide uppercase text-white drop-shadow-md">Personalized BMI Check</h2>
          <p className="text-[#B3B3B3] mt-2 font-light">Enter your details to generate your tailored dashboard.</p>
        </div>

        {/* Unit Tabs */}
        <div className="flex justify-center gap-4 mb-10">
          <button
            type="button"
            onClick={() => setUnitSystem("metric")}
            className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all border ${unitSystem === "metric"
              ? "bg-[#E50914] border-transparent text-white shadow-[0_0_15px_rgba(229,9,20,0.4)]"
              : "bg-white/5 border-white/10 text-[#B3B3B3] hover:bg-white/10"
              }`}
          >
            Metric Units
          </button>
          <button
            type="button"
            onClick={() => setUnitSystem("us")}
            className={`px-6 py-2 rounded-full text-xs uppercase tracking-widest font-bold transition-all border ${unitSystem === "us"
              ? "bg-[#E50914] border-transparent text-white shadow-[0_0_15px_rgba(229,9,20,0.4)]"
              : "bg-white/5 border-white/10 text-[#B3B3B3] hover:bg-white/10"
              }`}
          >
            US Units
          </button>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="space-y-2">
              <label className="text-[13px] uppercase tracking-wider text-[#B3B3B3] font-semibold">Full Name</label>
              <input
                {...register("name", { required: true })}
                className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all text-white"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] uppercase tracking-wider text-[#B3B3B3] font-semibold">Age</label>
              <input
                type="number"
                {...register("age", { required: true, min: 2, max: 100, valueAsNumber: true })}
                className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all text-white"
                placeholder="25"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] uppercase tracking-wider text-[#B3B3B3] font-semibold">Email Address</label>
              <input
                type="email"
                {...register("email", { required: true })}
                className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all text-white"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] uppercase tracking-wider text-[#B3B3B3] font-semibold">Contact Number</label>
              <input
                {...register("contactNumber", { required: true })}
                className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all text-white"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] uppercase tracking-wider text-[#B3B3B3] font-semibold">Gender</label>
              <select
                {...register("gender", { required: true })}
                className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all text-white appearance-none"
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[13px] uppercase tracking-wider text-[#B3B3B3] font-semibold">Fitness Goal</label>
              <select
                {...register("goal", { required: true })}
                className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all text-white appearance-none"
              >
                <option value="">Select Goal</option>
                <option value="Body Building">Body Building</option>
                <option value="Weight Loss">Weight Loss</option>
                <option value="Strength Training">Strength Training</option>
                <option value="Cardio">Cardio</option>
                <option value="General Fitness">General Fitness</option>
              </select>
            </div>

            {/* Height Field */}
            <div className="space-y-2">
              <label className="text-[13px] uppercase tracking-wider text-[#B3B3B3] font-semibold flex items-center gap-2">
                <Ruler className="w-3 h-3 text-[#E50914]" /> {unitSystem === "metric" ? "Height (cm)" : "Height"}
              </label>
              {unitSystem === "metric" ? (
                <input
                  type="number"
                  {...register("height", { required: unitSystem === "metric", valueAsNumber: true })}
                  className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all text-white"
                  placeholder="175"
                />
              ) : (
                <div className="grid grid-cols-2 gap-2">
                  <div className="relative">
                    <input
                      type="number"
                      {...register("heightFt", { required: unitSystem === "us", valueAsNumber: true })}
                      className="w-full bg-[#0F0F0F] border border-white/10 rounded-md pl-4 pr-10 py-3 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all text-white"
                      placeholder="5"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white/30 uppercase font-black">ft</span>
                  </div>
                  <div className="relative">
                    <input
                      type="number"
                      {...register("heightIn", { required: unitSystem === "us", valueAsNumber: true })}
                      className="w-full bg-[#0F0F0F] border border-white/10 rounded-md pl-4 pr-10 py-3 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all text-white"
                      placeholder="10"
                    />
                    <span className="absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white/30 uppercase font-black">in</span>
                  </div>
                </div>
              )}
            </div>

            {/* Weight Field */}
            <div className="space-y-2">
              <label className="text-[13px] uppercase tracking-wider text-[#B3B3B3] font-semibold flex items-center gap-2">
                <Scale className="w-3 h-3 text-[#E50914]" /> {unitSystem === "metric" ? "Weight (kg)" : "Weight (lbs)"}
              </label>
              <input
                type="number"
                {...register("weight", { required: true, valueAsNumber: true })}
                className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all text-white"
                placeholder={unitSystem === "metric" ? "70" : "160"}
              />
            </div>

          </div>

          <motion.div className="pt-6 border-t border-white/5 flex justify-end" whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <button
              type="submit"
              className="w-full md:w-auto bg-[#E50914] text-white hover:bg-[#b80710] px-8 py-4 rounded font-bold text-[15px] tracking-wide uppercase transition-all flex items-center justify-center gap-2"
            >
              Calculate BMI & Generate Plan
            </button>
          </motion.div>
        </form>
      </motion.div>
    </div>
  );
}
