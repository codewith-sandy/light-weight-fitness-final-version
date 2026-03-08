"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { calculateBMI } from "@/lib/bmi";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

type BMIFormData = {
  name: string;
  age: number;
  email: string;
  contactNumber: string;
  gender: string;
  height: number;
  weight: number;
  goal: string;
};

export default function CalculatorPage() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<BMIFormData>();

  const onSubmit = (data: BMIFormData) => {
    // Calculate BMI
    const { bmi, category } = calculateBMI(data.weight, data.height);
    
    // Redirect to dashboard with params
    const searchParams = new URLSearchParams({
      name: data.name,
      bmi: bmi.toString(),
      category: category,
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
                {...register("age", { required: true, min: 14, max: 100 })}
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

            <div className="space-y-2">
              <label className="text-[13px] uppercase tracking-wider text-[#B3B3B3] font-semibold">Height (cm)</label>
              <input
                type="number"
                {...register("height", { required: true })}
                className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all text-white"
                placeholder="175"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[13px] uppercase tracking-wider text-[#B3B3B3] font-semibold">Weight (kg)</label>
              <input
                type="number"
                {...register("weight", { required: true })}
                className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] focus:ring-1 focus:ring-[#E50914] transition-all text-white"
                placeholder="70"
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
