"use client";

import { motion } from "framer-motion";
import { ArrowRight, PhoneCall, MapPin, Clock } from "lucide-react";
import Link from "next/link";

export function CallToAction() {
  return (
    <>
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background with overlay */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center bg-fixed opacity-30 grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0F0F0F] via-[#0F0F0F]/80 to-[#0F0F0F]" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center border-b border-white/10 pb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-bebas-neue text-6xl md:text-8xl tracking-tight uppercase leading-none mb-6">
              Start Today. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E50914] to-white">No Excuses.</span>
            </h2>

            <p className="text-lg md:text-xl text-[#B3B3B3] mb-10 max-w-2xl mx-auto font-light">
              Your transformation begins with a single step. Take it now. Transform your body, transform your life. Your premium fitness destination.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact" className="w-full sm:w-auto">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full sm:w-auto flex items-center justify-center gap-3 bg-[#E50914] text-white hover:bg-[#b80710] px-8 py-4 rounded font-bold text-[15px] tracking-wide uppercase transition-all shadow-[0_0_20px_rgba(229,9,20,0.3)]"
                >
                  Join Now
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <motion.a
                href="tel:+918668163718"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="w-full sm:w-auto flex items-center justify-center gap-3 bg-white/5 border border-white/20 text-white hover:bg-white hover:text-black px-8 py-4 rounded font-bold text-[15px] tracking-wide uppercase transition-all"
              >
                <PhoneCall className="w-5 h-5" />
                086681 63718
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Section */}
      <footer className="bg-[#0F0F0F] pt-4 pb-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Info */}
          <div>
            <h3 className="font-bebas-neue text-3xl tracking-widest text-white mb-6 flex items-center gap-2">
              <span className="text-[#E50914]">FITNESS</span> GYM PREMIUM
            </h3>
            <p className="text-[#B3B3B3] text-sm leading-relaxed mb-6">
              Transform your body, transform your life. Your premium fitness destination.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#E50914] flex items-center justify-center transition-colors">
                <span className="sr-only">Facebook</span>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" /></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 hover:bg-[#E50914] flex items-center justify-center transition-colors">
                <span className="sr-only">Instagram</span>
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" /></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bebas-neue text-xl tracking-wide uppercase mb-6 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li><Link href="/" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors text-sm hover:translate-x-1 duration-200"><ArrowRight className="w-3 h-3" /> Home</Link></li>
              <li><Link href="/success-stories" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors text-sm hover:translate-x-1 duration-200"><ArrowRight className="w-3 h-3" /> Success Stories</Link></li>
              <li><Link href="/membership" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors text-sm hover:translate-x-1 duration-200"><ArrowRight className="w-3 h-3" /> Membership Plans</Link></li>
              <li><Link href="/branches" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors text-sm hover:translate-x-1 duration-200"><ArrowRight className="w-3 h-3" /> Gym Branches</Link></li>
              <li><Link href="/contact" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors text-sm hover:translate-x-1 duration-200"><ArrowRight className="w-3 h-3" /> Contact Us</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bebas-neue text-xl tracking-wide uppercase mb-6 text-white">Services</h4>
            <ul className="space-y-3">
              <li><Link href="/diet-plans" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors text-sm hover:translate-x-1 duration-200"><ArrowRight className="w-3 h-3" /> Custom Diet Plans</Link></li>
              <li><Link href="/calculator" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors text-sm hover:translate-x-1 duration-200"><ArrowRight className="w-3 h-3" /> BMI Calculator</Link></li>
              <li><Link href="/dashboard?bmi=24&category=normal" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors text-sm hover:translate-x-1 duration-200"><ArrowRight className="w-3 h-3" /> Personal Dashboard</Link></li>
              <li><Link href="/contact" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors text-sm hover:translate-x-1 duration-200"><ArrowRight className="w-3 h-3" /> Personal Training</Link></li>
              <li><Link href="/success-stories" className="flex items-center gap-2 text-[#B3B3B3] hover:text-[#E50914] transition-colors text-sm hover:translate-x-1 duration-200"><ArrowRight className="w-3 h-3" /> Transformations</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bebas-neue text-xl tracking-wide uppercase mb-6 text-white">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 hover:text-white transition-colors group">
                <MapPin className="w-5 h-5 text-[#E50914] mt-1 shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-[#B3B3B3] text-sm leading-relaxed">Flat No-391, 1st Floor, Veerapuram Main Road, Vellanore, Barathi Nagar, Opp. City Union Bank, Tamil Nadu – 600055</span>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors group">
                <PhoneCall className="w-5 h-5 text-[#E50914] shrink-0 group-hover:scale-110 transition-transform" />
                <a href="tel:+918668163718" className="text-[#B3B3B3] text-sm">086681 63718</a>
              </li>
              <li className="flex items-center gap-4 hover:text-white transition-colors group">
                <Clock className="w-5 h-5 text-[#E50914] shrink-0 group-hover:scale-110 transition-transform" />
                <span className="text-[#B3B3B3] text-sm">Mon - Sat: 5:00 AM - 10:00 PM <br /> Sunday: 6:00 AM - 12:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between border-t border-white/10 pt-8 gap-4">
          <p className="text-[#B3B3B3] text-sm">© 2026 Light Weight Fitness Gym. All rights reserved.</p>
          <p className="text-[#B3B3B3] text-sm flex items-center gap-1">
            Engineered with precision by
            <a href="https://github.com/codewith-sandy" target="_blank" rel="noopener noreferrer" className="text-[#E50914] font-semibold hover:underline">
              CodeWith-Sandy
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
