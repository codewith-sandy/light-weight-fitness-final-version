"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Monthly",
    price: "₹1000",
    period: "+GST/ month",
    description: "Flexible commitment for consistent local gym goers.",
    features: [
      "Full gym floor access",
      "Standard equipment usage",
      "Basic trainer guidance",
      "Locker facility"
    ],
    highlighted: false,
  },
  {
    name: "Quarterly",
    price: "₹2400",
    period: "+GST/ 3 months",
    description: "Lock in your routine and commit to a 90-day transformation.",
    features: [
      "Full gym floor access",
      "Standard equipment usage",
      "Basic trainer guidance",
      "Locker facility"
    ],
    highlighted: true,
  },
  {
    name: "Annual",
    price: "₹8000",
    period: "+GST/ year",
    description: "The ultimate value for dedicated warriors. No excuses.",
    features: [
      "Full gym floor access",
      "Standard equipment usage",
      "Basic trainer guidance",
      "Locker facility"
    ],
    highlighted: false,
  }
];

export function MembershipPlans() {
  return (
    <div className="w-full relative py-12 pb-24">
      <div className="text-center mb-16 px-4">
        <h2 className="font-bebas-neue text-5xl md:text-6xl tracking-widest uppercase mb-4">Choose Your Path</h2>
        <div className="w-24 h-1 bg-[#E50914] mx-auto mb-6" />
        <p className="text-[#B3B3B3] max-w-2xl mx-auto font-light">Select the level of commitment that matches your ambition.</p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, idx) => (
          <motion.div
            key={plan.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className={`relative rounded-2xl p-8 flex flex-col h-full ${
              plan.highlighted 
                ? "bg-gradient-to-b from-[#1A1A1A] to-[#0F0F0F] border-2 border-[#E50914] shadow-[0_0_30px_rgba(57,255,20,0.15)] transform md:-translate-y-4" 
                : "bg-[#1A1A1A] border border-white/10"
            }`}
          >
            {plan.highlighted && (
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#E50914] text-black px-4 py-1 rounded-full text-[11px] font-bold uppercase tracking-widest">
                Most Popular
              </div>
            )}

            <div className="mb-8">
              <h3 className="font-bebas-neue text-3xl tracking-wide uppercase mb-2">{plan.name}</h3>
              <p className="text-[#B3B3B3] text-sm mb-6 h-10">{plan.description}</p>
              
              <div className="flex items-baseline gap-1">
                <span className="font-bebas-neue text-5xl">{plan.price}</span>
                <span className="text-[#B3B3B3] text-sm">{plan.period}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8 flex-1">
              {plan.features.map((feature, fIdx) => (
                <li key={fIdx} className="flex items-start gap-3">
                  <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-[#E50914]" : "text-white/40"}`} />
                  <span className="text-white/80 text-sm">{feature}</span>
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-4 rounded font-bold text-sm tracking-widest uppercase transition-all ${
                plan.highlighted
                  ? "bg-[#E50914] text-white hover:bg-[#b80710]"
                  : "bg-white/5 border border-white/20 text-white hover:bg-white hover:text-black"
              }`}
            >
              Join Now
            </motion.button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
