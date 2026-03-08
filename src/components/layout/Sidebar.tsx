"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  Trophy, 
  MapPin, 
  Utensils, 
  CreditCard, 
  Phone,
  Image as ImageIcon,
  Instagram,
  Menu,
  X
} from "lucide-react";
import { cn } from "@/lib/utils";

const menuItems = [
  { icon: Home, label: "Home", href: "/" },
  { icon: Trophy, label: "Success Stories", href: "/success-stories" },
  { icon: MapPin, label: "Branches", href: "/branches" },
  { icon: Utensils, label: "Diet Plans", href: "/diet-plans" },
  { icon: CreditCard, label: "Membership", href: "/membership" },
  { icon: ImageIcon, label: "Gallery", href: "/gallery" },
  { icon: Instagram, label: "Instagram", href: "https://www.instagram.com/lightweight_fitness_gym?igsh=eGN3eDRpa2FjMnds", external: true },
  { icon: Phone, label: "Contact", href: "/contact" },
];

export function Sidebar() {
  const [isDesktopExpanded, setIsDesktopExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button 
        onClick={() => setIsMobileOpen(!isMobileOpen)}
        className="md:hidden fixed top-6 right-6 z-[60] p-2 bg-[#1A1A1A] border border-white/10 rounded-md text-white shadow-[0_0_15px_rgba(0,0,0,0.5)] transition-all hover:bg-white/10"
      >
        {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="md:hidden fixed inset-0 bg-black/60 z-[45]"
            onClick={() => setIsMobileOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* Sidebar Container */}
      <motion.div
        initial={false}
        animate={{ 
          width: isDesktopExpanded ? "240px" : "70px",
        }}
        className={cn(
          "fixed left-0 top-0 h-screen bg-[#1A1A1A] border-r border-white/5 z-50 flex flex-col pt-20 transition-transform duration-300",
          isDesktopExpanded ? "shadow-2xl" : "",
          /* Translate Sidebar off-screen completely on mobile by default */
          "-translate-x-full md:translate-x-0",
          /* Override widths & translations for mobile depending on state */
          isMobileOpen ? "translate-x-0 w-[240px] !w-[240px]" : ""
        )}
        onMouseEnter={() => setIsDesktopExpanded(true)}
        onMouseLeave={() => setIsDesktopExpanded(false)}
      >
        <div className="flex flex-col gap-2 px-3 w-full">
          {menuItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link 
                key={item.href} 
                href={item.href}
                {...(item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <div
                  className={cn(
                    "flex items-center gap-4 px-3 py-3 rounded-md transition-all duration-200 cursor-pointer overflow-hidden whitespace-nowrap",
                    isActive
                      ? "bg-[#E50914]/10 text-[#E50914] relative"
                      : "text-[#B3B3B3] hover:bg-white/5 hover:text-white"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="sidebar-active"
                      className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-[#E50914] rounded-r-md"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                  
                  <item.icon
                    className={cn("w-6 h-6 shrink-0", isActive ? "text-[#E50914]" : "")}
                    strokeWidth={1.5}
                  />
                  
                  <motion.span
                    initial={false}
                    animate={{ opacity: isDesktopExpanded || isMobileOpen ? 1 : 0 }}
                    className="font-inter font-medium tracking-wide text-[15px]"
                  >
                    {item.label}
                  </motion.span>
                </div>
              </Link>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
