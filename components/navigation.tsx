"use client";

import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { BookNowDialog } from "@/app/schedule/BookPop";
import { AnimatedThemeToggler } from "./magicui/animated-theme-toggler";

const navItems = [
  { label: "Home", href: "/" },
  // { label: "Lineup", href: "/lineup" },
  { label: "Schedule", href: "/schedule" },
  { label: "Venue", href: "/venue" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
      <motion.div
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="flex items-center justify-between w-full max-w-6xl h-16 px-4 md:px-8 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.8)] pointer-events-auto transition-all duration-300 relative"
      >
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center flex-shrink-0"
        >
          <div className="h-25 w-auto flex items-center justify-center">
            <img
              src="/Cookies.Ent.png"
              alt="Cookies Logo"
              className="h-full w-auto object-contain"
            />
          </div>
        </motion.div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-center flex-1 mx-4">
          <div className="flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
              >
                <Link
                  href={item.href}
                  className="px-4 py-2 text-white/70 hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-[0.2em] hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                >
                  {item.label}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA & Toggler */}
        <div className="hidden lg:flex items-center space-x-4 flex-shrink-0">
          <AnimatedThemeToggler />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpen(true)}
            className="px-8 py-3 bg-[#eab308] hover:bg-[#ca8a04] text-white font-black rounded-full uppercase text-xs tracking-widest  transition-all duration-300"
          >
            Book Now
          </motion.button>
          <BookNowDialog open={open} onOpenChange={setOpen} />
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-2 lg:hidden">
          <AnimatedThemeToggler />
          <button
            className="p-2 rounded-full hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={24} className="text-white" />
            ) : (
              <Menu size={24} className="text-white" />
            )}
          </button>
        </div>

        {/* Mobile Navigation Dropdown */}
        <motion.div
          initial={false}
          animate={{
            height: isMenuOpen ? "auto" : 0,
            opacity: isMenuOpen ? 1 : 0,
            y: isMenuOpen ? 10 : 0
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="absolute top-full left-0 right-0 mt-2 lg:hidden overflow-hidden bg-black/95 backdrop-blur-2xl border border-white/10 rounded-3xl"
        >
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-6 py-4 text-white/80 hover:text-white hover:bg-white/5 rounded-2xl transition-all duration-200 font-bold text-base uppercase tracking-widest"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4">
              <button
                className="w-full px-6 py-4 bg-[#eab308] text-black rounded-full font-black text-base uppercase tracking-widest shadow-lg"
                onClick={() => {
                  setIsMenuOpen(false);
                  setOpen(true);
                }}
              >
                Book Now
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </nav>
  );
}
//
