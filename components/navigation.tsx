"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState } from "react"

const navItems = [
  { label: "Home", href: "/" },
  // { label: "Lineup", href: "/lineup" },
  { label: "Schedule", href: "/schedule" },
  { label: "Venue", href: "/venue" },
  { label: "Gallery", href: "/gallery" },
  { label: "Sponsors", href: "/sponsors" },
  { label: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-15 bg-gradient-to-r from-white via-pink-400/30 to-red-400/30 border-b border-white/5">
      <div className="h-full px-4 sm:px-6 lg:px-8">
        <div className="h-full max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center h-full"
          >
            <div className="h-35 w-50 flex items-center justify-center">
              <img
                src="/Cookies.Ent.png"
                alt="Cookies Logo"
                className="h-full w-auto object-contain"
              />
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center h-full">
            <div className="flex items-center space-x-1">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={item.href}
                    className="px-4 py-2 text-white/70 hover:text-white transition-all duration-300 font-bold text-sm uppercase tracking-widest hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="ml-8"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-sm shadow-lg hover:shadow-xl transition-shadow duration-200"
              >
                Book Now
              </motion.button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden z-50 p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? (
              <X size={28} className="text-white" />
            ) : (
              <Menu size={28} className="text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <motion.div
        initial={false}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="lg:hidden overflow-hidden bg-black/90 backdrop-blur-2xl border-b border-white/10"
      >
        <div className="px-4 py-6 space-y-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block px-4 py-3 text-white/80 hover:text-white hover:bg-white/10 rounded-xl transition-all duration-200 font-bold text-lg uppercase tracking-wide"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}

          <div className="pt-4 px-4">
            <button
              className="w-full px-6 py-3.5 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold text-base shadow-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </button>
          </div>
        </div>
      </motion.div>
    </nav>
  )
}
// 