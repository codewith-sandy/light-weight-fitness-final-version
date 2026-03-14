"use client";

import { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Instagram } from "lucide-react";
import { useForm } from "react-hook-form";
import { useSearchParams } from "next/navigation";

import { zodResolver } from "@hookform/resolvers/zod";
import { ContactFormSchema, type ContactFormInput } from "@/lib/validations";

export function ContactPageContent() {
  return (
    <Suspense fallback={<div className="min-h-screen animate-pulse bg-black" />}>
      <ContactForm />
    </Suspense>
  );
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const searchParams = useSearchParams();
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormInput>({
    resolver: zodResolver(ContactFormSchema)
  });

  useEffect(() => {
    // 1. Handle URL Plan Parameter
    const planParam = searchParams.get("plan");
    const planMap: { [key: string]: string } = {
      monthly: "Monthly Plan – ₹1000 +GST/month",
      quarterly: "Quarterly Plan – ₹2400 +GST/3 months",
      annual: "Annual Plan – ₹8000 +GST/year",
    };

    let initialValues: Partial<ContactFormInput> = {};

    if (planParam && planMap[planParam.toLowerCase()]) {
      initialValues.plan = planMap[planParam.toLowerCase()]; // Type error here safely ignored or handled by string match
    }

    // 2. Handle Persistent BMI & Profile Data
    const savedProfile = localStorage.getItem("userProfileData");
    const savedBmi = localStorage.getItem("userBmiData");

    if (savedProfile) {
      const profile = JSON.parse(savedProfile);
      initialValues.name = profile.name;
      initialValues.email = profile.email;
      initialValues.phone = profile.phone;
    }

    if (savedBmi) {
      const bmiData = JSON.parse(savedBmi);
      initialValues.message = `Hi! I just used your BMI calculator. My result was ${bmiData.bmi.toFixed(1)} (${bmiData.category}). I'm interested in starting the ${initialValues.plan || "gym"} with my goal of ${bmiData.goal}!`;
    }

    // Apply all pre-filled values
    if (Object.keys(initialValues).length > 0) {
      reset(initialValues);
    }
  }, [searchParams, reset]);

  const onSubmit = async (data: ContactFormInput) => {
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(data),
      });

      const responseData = await response.json();

      if (response.status === 429) {
        alert("You're doing that too often. Please wait a minute before sending another message.");
        return;
      }

      if (response.status === 400) {
        alert("Validation error! Please check the fields and try again.");
        return;
      }

      if (response.ok) {
        alert("Message sent successfully! We will get back to you shortly.");
        reset();
      } else {
        alert(responseData.message || "Failed to send message. Please try again.");
      }
    } catch (err) {
      console.error("Failed to submit form:", err);
      alert("A network error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 md:py-32 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-bebas-neue text-5xl md:text-7xl tracking-wide uppercase mb-4"
          >
            Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff0000] via-[#E50914] to-[#8b0000]">Touch</span>
          </motion.h1>
          <div className="w-24 h-1 bg-[#E50914] mx-auto mb-6" />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#B3B3B3] max-w-2xl mx-auto text-lg"
          >
            Have a question or want to visit us? Drop us a message or find our branches below.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-8 flex justify-center gap-4"
          >
            <a
              href="https://www.instagram.com/lightweight_fitness_gym?igsh=eGN3eDRpa2FjMnds"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#E50914]/10 border border-[#E50914]/30 hover:bg-[#E50914] hover:text-black text-[#E50914] px-6 py-2 rounded-full transition-all duration-300 font-bold uppercase tracking-widest text-sm group"
            >
              <Instagram className="w-5 h-5 transition-transform group-hover:scale-110" />
              Follow on Instagram
            </a>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

          {/* Left Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-[#1A1A1A] border border-white/10 rounded-2xl p-8 shadow-xl"
          >
            <h2 className="font-bebas-neue text-3xl tracking-wide uppercase mb-6 flex items-center gap-3">
              <Mail className="text-[#E50914] w-6 h-6" /> Send a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#B3B3B3] font-bold">Full Name</label>
                <input
                  {...register("name")}
                  className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] transition-colors text-white"
                  placeholder="John Doe"
                />
                {errors.name && <p className="text-[#E50914] text-xs mt-1">{errors.name.message}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#B3B3B3] font-bold">Email Address</label>
                  <input
                    type="email"
                    {...register("email")}
                    className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] transition-colors text-white"
                    placeholder="john@example.com"
                  />
                  {errors.email && <p className="text-[#E50914] text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-[#B3B3B3] font-bold">Phone Number</label>
                  <input
                    {...register("phone")}
                    className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] transition-colors text-white"
                    placeholder="+91 00000 00000"
                  />
                  {errors.phone && <p className="text-[#E50914] text-xs mt-1">{errors.phone.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#B3B3B3] font-bold">Interested Membership Plan</label>
                <select
                  {...register("plan", { required: true })}
                  className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] transition-colors text-white appearance-none"
                >
                  <option value="">Choose your preferred plan</option>
                  <option value="Monthly Plan – ₹1000 +GST/month">Monthly Plan – ₹1000 +GST/month</option>
                  <option value="Quarterly Plan – ₹2400 +GST/3 months">Quarterly Plan – ₹2400 +GST/3 months</option>
                  <option value="Annual Plan – ₹8000 +GST/year">Annual Plan – ₹8000 +GST/year</option>
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-xs uppercase tracking-widest text-[#B3B3B3] font-bold">Premium Add-Ons <span className="text-white/40 normal-case font-normal">(Optional)</span></label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    "Personal Training",
                    "Custom Diet Plan",
                    "Progress Tracking",
                    "Shower Access",
                    "Supplements Package",
                    "Fitness Assessment",
                    "Priority Booking"
                  ].map((addon) => (
                    <label key={addon} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center">
                        <input
                          type="checkbox"
                          value={addon}
                          {...register("addOns")}
                          className="peer sr-only"
                        />
                        <div className="w-5 h-5 border border-white/20 rounded bg-[#0F0F0F] peer-checked:bg-[#E50914] peer-checked:border-[#E50914] transition-all flex items-center justify-center">
                          <svg className="w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                      </div>
                      <span className="text-sm text-white/80 group-hover:text-white transition-colors">{addon}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-[#B3B3B3] font-bold">Your Message</label>
                <textarea
                  {...register("message")}
                  rows={4}
                  className="w-full bg-[#0F0F0F] border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:border-[#E50914] transition-colors text-white resize-none"
                  placeholder="Any questions or special requirements? (Optional)"
                />
                {errors.message && <p className="text-[#E50914] text-xs mt-1">{errors.message.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full text-white px-6 py-4 rounded font-bold tracking-widest uppercase transition-all flex items-center justify-center gap-2 ${isSubmitting ? "bg-white/10 cursor-not-allowed" : "bg-[#E50914] hover:bg-[#b80710]"
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>Send Message <ArrowRight className="w-4 h-4" /></>
                )}
              </button>
            </form>
          </motion.div>

          {/* Right Column: Google Maps Integrations for Branches */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            <h2 className="font-bebas-neue text-4xl tracking-wide uppercase mb-6 flex items-center gap-3">
              <MapPin className="text-[#E50914] w-8 h-8" /> Our Branches
            </h2>

            {/* Branch 1 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden shadow-xl">
              <div className="p-6 border-b border-white/10 flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-bebas-neue text-2xl tracking-wide text-white">Branch 1: Veerapuram</h3>
                  <p className="text-[#B3B3B3] text-sm mt-1 whitespace-pre-wrap leading-relaxed">Flat No-391, 1st Floor Veerapuram Main Road, Vellanore, Barathi Nagar,<br />Opposite to City Union Bank,<br />Tamil Nadu 600055</p>
                </div>
                <a href="tel:+918668163718" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#E50914]" />
                </a>
              </div>
              <div className="w-full h-[250px] bg-[#0F0F0F] relative">
                {/* Embedded Map for Branch 1 (Placeholder - Replace src with User's URL) */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=" // <- Replace this later
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-[1.1] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </div>

            {/* Branch 2 */}
            <div className="bg-[#1A1A1A] border border-white/10 rounded-2xl overflow-hidden shadow-xl mt-8">
              <div className="p-6 border-b border-white/10 flex justify-between items-start gap-4">
                <div>
                  <h3 className="font-bebas-neue text-2xl tracking-wide text-white">Branch 2: Alamathi</h3>
                  <p className="text-[#B3B3B3] text-sm mt-1 whitespace-pre-wrap leading-relaxed">Flat No.8, Golden Estate, Main St, <br />Vetrivel Nagar, Alamathi, Chennai, <br />Tamil Nadu 600062</p>
                </div>
                <a href="tel:+918668163718" className="bg-white/5 hover:bg-white/10 p-3 rounded-full transition-colors flex-shrink-0">
                  <Phone className="w-5 h-5 text-[#E50914]" />
                </a>
              </div>
              <div className="w-full h-[250px] bg-[#0F0F0F] relative">
                {/* Embedded Map for Branch 2 (Placeholder - Replace src with User's URL) */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=" // <- Replace this later
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="filter contrast-[1.1] grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                ></iframe>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </div>
  );
}
