"use client";

import { motion } from "framer-motion";
import {
  Trophy,
  Star,
  Award,
  Zap,
  Music,
  Sparkles,
  Building2,
  User,
  Mail,
  Phone,
  FileText,
  Mic,
  Volume2,
  Users,
  Globe,
  Target,
  TrendingUp,
  Crown,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

// First, update your Sponsor type to include img property
interface Sponsor {
  id: number;
  name: string;
  tier: string;
  logoColor: string;
  contribution: string;
  description: string;
  icon: React.ReactNode;
  img?: string; // Add this optional property
}

const sponsors: Sponsor[] = [
  {
    id: 1,
    name: "Harmony Audio",
    tier: "Platinum",
    logoColor: "from-purple-600 to-pink-500",
    contribution: "Main Sound System",
    description: "Complete audio setup for all stages",
    icon: <Music className="w-8 h-8" />,
    img: "/tata-Con.png", // Add image path
  },
  {
    id: 2,
    name: "Stellar Productions",
    tier: "Gold",
    logoColor: "from-yellow-500 to-orange-500",
    contribution: "Stage Design",
    description: "Main stage architecture and lighting",
    icon: <Sparkles className="w-8 h-8" />,
    img: "/Bacr.jpg",
  },
  {
    id: 3,
    name: "Urban Energy",
    tier: "Gold",
    logoColor: "from-blue-500 to-cyan-400",
    contribution: "Power Solutions",
    description: "Uninterrupted power supply across venue",
    icon: <Zap className="w-8 h-8" />,
    img: "/LalC..png",
  },
  {
    id: 4,
    name: "Echo Merch",
    tier: "Silver",
    logoColor: "from-gray-400 to-gray-300",
    contribution: "Official Merchandise",
    description: "Exclusive concert merchandise partner",
    icon: <Award className="w-7 h-7" />,
    img: "/Adt.b.jpg",
  },
  {
    id: 5,
    name: "Pulse Beverages",
    tier: "Silver",
    logoColor: "from-green-500 to-emerald-400",
    contribution: "Refreshment Partner",
    description: "Official beverage sponsor",
    icon: <Trophy className="w-7 h-7" />,
    img: "/Mc.D.webp",
  },
  {
    id: 6,
    name: "Rhythm Records",
    tier: "Bronze",
    logoColor: "from-amber-700 to-amber-600",
    contribution: "Media Partner",
    description: "Digital streaming and recording",
    icon: <Star className="w-6 h-6" />,
    img: "/P.ty.webp",
  },
  {
    id: 7,
    name: "Echo Merch",
    tier: "Silver",
    logoColor: "from-gray-400 to-gray-300",
    contribution: "Official Merchandise",
    description: "Exclusive concert merchandise partner",
    icon: <Award className="w-7 h-7" />,
    img: "/Adt.b.jpg",
  },
  {
    id: 8,
    name: "Pulse Beverages",
    tier: "Silver",
    logoColor: "from-green-500 to-emerald-400",
    contribution: "Refreshment Partner",
    description: "Official beverage sponsor",
    icon: <Trophy className="w-7 h-7" />,
    img: "/Mc.D.webp",
  },
  {
    id: 9,
    name: "Rhythm Records",
    tier: "Bronze",
    logoColor: "from-amber-700 to-amber-600",
    contribution: "Media Partner",
    description: "Digital streaming and recording",
    icon: <Star className="w-6 h-6" />,
    img: "/P.ty.webp",
  },
];

const tierBenefits = [
  { icon: <Globe className="w-5 h-5" />, text: "Global Brand Exposure" },
  { icon: <Users className="w-5 h-5" />, text: "VIP Access & Hospitality" },
  { icon: <Target className="w-5 h-5" />, text: "Targeted Audience Reach" },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    text: "Exclusive Marketing Rights",
  },
  { icon: <Volume2 className="w-5 h-5" />, text: "Social Media Amplification" },
  { icon: <Mic className="w-5 h-5" />, text: "Stage Announcements" },
];

export default function SponsorsPage() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const getTierColor = (tier: Sponsor["tier"]) => {
    switch (tier) {
      case "Platinum":
        return "from-purple-500 via-pink-500 to-rose-500";
      case "Gold":
        return "from-yellow-500 via-amber-500 to-orange-500";
      case "Silver":
        return "from-gray-300 via-gray-400 to-gray-500";
      case "Bronze":
        return "from-amber-700 via-amber-800 to-amber-900";
    }
  };

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Animated Stage Lights */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {/* Moving spotlight effect */}
        <div
          className="absolute w-[800px] h-[800px] rounded-full opacity-20 blur-[180px] transition-transform duration-1000"
          style={{
            background:
              "radial-gradient(circle, rgba(255,215,0,0.3) 0%, transparent 70%)",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
          }}
        />

        {/* Static stage lights */}
        <div className="absolute top-20 left-20 w-[600px] h-[600px] bg-purple-600/10 rounded-full blur-[200px]" />
        <div className="absolute top-40 right-40 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[180px]" />
        <div className="absolute bottom-40 left-1/4 w-[700px] h-[700px] bg-yellow-600/10 rounded-full blur-[220px]" />

        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30" />
      </div>

      {/* Animated particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-[1px] h-[1px] bg-white/40 rounded-full"
            animate={{
              y: [0, -100],
              x: [0, Math.sin(i) * 50],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              delay: i * 0.1,
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-4 py-16 sm:py-24">
        {/* Header with enhanced typography */}
        <div className="max-w-7xl mx-auto text-center mb-16 sm:mb-24 relative">
          {/* Animated title background */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="absolute -top-10 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-gradient-to-r from-yellow-500/20 via-pink-500/20 to-blue-500/20 blur-[120px]"
          />

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-5xl sm:text-7xl md:text-3xl font-black mb-6 relative"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r  from-yellow-300 via-pink-300 to-white animate-pulse">
              POWERED BY
            </span>
            <br />
            <span className="text-4xl sm:text-6xl md:text-4xl bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-300 to-gray-400">
              PREMIUM PARTNERS SPONSORSHIP
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl sm:text-2xl text-gray-300 max-w-3xl mx-auto font-light tracking-wide"
          >
            Elevating the concert experience through strategic partnerships and
            innovation
          </motion.p>
        </div>

        {/* Tier Legend */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="max-w-6xl mx-auto mb-16"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Platinum", "Gold", "Silver", "Bronze"].map((tier) => (
              <div
                key={tier}
                className={`p-4 rounded-2xl backdrop-blur-sm border border-white/10 
                  ${
                    tier === "Platinum"
                      ? "bg-gradient-to-br from-purple-900/20 to-pink-900/20"
                      : tier === "Gold"
                        ? "bg-gradient-to-br from-yellow-900/20 to-amber-900/20"
                        : tier === "Silver"
                          ? "bg-gradient-to-br from-gray-900/20 to-gray-800/20"
                          : "bg-gradient-to-br from-amber-900/20 to-amber-950/20"
                  }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`w-3 h-3 rounded-full 
                    ${
                      tier === "Platinum"
                        ? "bg-gradient-to-r from-purple-400 to-pink-400"
                        : tier === "Gold"
                          ? "bg-gradient-to-r from-yellow-400 to-amber-400"
                          : tier === "Silver"
                            ? "bg-gradient-to-r from-gray-300 to-gray-400"
                            : "bg-gradient-to-r from-amber-600 to-amber-700"
                    }`}
                  />
                  <span className="text-sm font-semibold tracking-wider">
                    {tier} TIER
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sponsors Grid with enhanced layout */}
        <div className="relative max-w-7xl mx-auto mb-32">
          {/* Decorative elements */}
          <div className="absolute -top-10 left-0 right-0 h-px bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 h-200 overflow-y-auto py-5 px-2">
            {sponsors.map((sponsor, index) => (
              <motion.div
                key={sponsor.id}
                initial={{ opacity: 0, y: 40, rotateY: 10 }}
                whileInView={{ opacity: 1, y: 0, rotateY: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: index * 0.1,
                }}
                whileHover={{
                  y: -10,
                  transition: { duration: 0.2 },
                }}
                className="relative group"
              >
                {/* Glowing border effect */}
                <div
                  className={`absolute -inset-0.5 bg-gradient-to-r ${getTierColor(sponsor.tier)} rounded-3xl opacity-0 group-hover:opacity-70 blur transition duration-500`}
                />

                <div className="relative bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-sm rounded-3xl p-8 border border-white/10 group-hover:border-white/30 transition-all duration-500">
                  {/* Tier badge */}
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <div
                      className={`px-4 py-1.5 rounded-full ${
                        sponsor.tier === "Platinum"
                          ? "bg-gradient-to-r from-purple-600 to-pink-600"
                          : sponsor.tier === "Gold"
                            ? "bg-gradient-to-r from-yellow-600 to-amber-600"
                            : sponsor.tier === "Silver"
                              ? "bg-gradient-to-r from-gray-600 to-gray-500"
                              : "bg-gradient-to-r from-amber-800 to-amber-700"
                      } text-white text-xs font-bold tracking-wider shadow-lg`}
                    >
                      {sponsor.tier}
                    </div>
                  </div>

                  {/* Logo with glow effect - UPDATED TO FULL COVER */}
                  <div className="relative flex justify-center mb-8">
                    <div className="relative">
                      {/* Optional: Keep the glow effect */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${sponsor.logoColor} rounded-full blur-xl opacity-30`}
                      />

                      {/* Circular container for the image */}
                      <div className="relative w-36 h-36 rounded-full shadow-2xl border-2 border-white/20 overflow-hidden">
                        {/* Show sponsor brand image if available */}
                        {sponsor.img ? (
                          <img
                            src={sponsor.img}
                            alt={sponsor.name}
                            className="w-full h-full object-cover"
                            onError={(e) => {
                              // Fallback to gradient background if image fails to load
                              e.currentTarget.style.display = "none";
                              e.currentTarget.parentElement?.classList.add(
                                `bg-gradient-to-br`,
                                ...sponsor.logoColor.split(" "),
                              );
                            }}
                          />
                        ) : (
                          // Fallback to icon with gradient background
                          <div
                            className={`w-full h-full bg-gradient-to-br ${sponsor.logoColor} flex items-center justify-center`}
                          >
                            <div className="relative z-10 text-white">
                              {sponsor.icon}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Rest of the content remains the same */}
                  <div className="text-center space-y-4">
                    <span className="mt-3 font-bold text-lg tracking-tight">
                      {sponsor.name}
                    </span>
                    <h3 className="text-2xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                      {sponsor.contribution}
                    </h3>
                    <p className="text-gray-400 leading-relaxed">
                      {sponsor.description}
                    </p>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button
                          variant="outline"
                          className="mt-4 bg-transparent border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300 group-hover:scale-105"
                        >
                          <span className="flex items-center gap-2">
                            View Partnership Details
                            <Sparkles className="w-4 h-4" />
                          </span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-black/95 backdrop-blur-xl border-white/20 text-white max-w-lg">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">
                            {sponsor.name}
                          </DialogTitle>
                          <DialogDescription className="text-gray-400">
                            {sponsor.tier} Level Partnership
                          </DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <p className="text-lg font-semibold text-gray-300">
                            {sponsor.contribution}
                          </p>
                          <p className="text-gray-400">{sponsor.description}</p>
                          <div className="pt-4 border-t border-white/10">
                            <h4 className="font-semibold mb-2">
                              Partnership Benefits:
                            </h4>
                            <ul className="space-y-2 text-sm text-gray-400">
                              <li className="flex items-center gap-2">
                                <Crown className="w-4 h-4 text-yellow-500" />
                                Premium brand positioning
                              </li>
                              <li className="flex items-center gap-2">
                                <Globe className="w-4 h-4 text-blue-500" />
                                Global exposure across all platforms
                              </li>
                              <li className="flex items-center gap-2">
                                <Users className="w-4 h-4 text-green-500" />
                                VIP access for executives
                              </li>
                            </ul>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Partnership Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-20"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-white">
            Partnership Benefits
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tierBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:border-white/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <div className="text-yellow-400">{benefit.icon}</div>
                </div>
                <span className="text-lg font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Partnership CTA - Enhanced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="relative max-w-4xl mx-auto text-center"
        >
          {/* Background glow for CTA */}
          <div className="absolute -inset-10 bg-gradient-to-r from-yellow-600/10 via-pink-600/10 to-purple-600/10 blur-3xl rounded-full" />

          <div className="relative z-10 bg-gradient-to-b from-black/80 to-black/60 backdrop-blur-xl rounded-3xl p-12 border border-white/20 shadow-2xl">
            <div className="flex justify-center mb-8">
              <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 flex items-center justify-center animate-pulse">
                <Crown className="w-10 h-10 text-white" />
              </div>
            </div>

            <h2 className="text-4xl sm:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-white">
              JOIN THE STAGE
            </h2>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto">
              Become part of music history. Partner with us for premium brand
              exposure, deep audience engagement, and unforgettable live music
              experiences across digital and on‑ground platforms.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {[
                { value: "50K+", label: "Live Audience" },
                { value: "5M+", label: "Digital Reach" },
                { value: "100%", label: "Brand Recall" },
                { value: "24/7", label: "Media Coverage" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10"
                >
                  <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-400">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 mt-2">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* The form dialog trigger remains exactly the same */}
            <Dialog>
              <DialogTrigger asChild>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="relative px-12 py-4 text-lg font-bold rounded-full bg-gradient-to-r from-yellow-500 via-pink-500 to-purple-500 text-black shadow-[0_0_50px_rgba(255,215,0,0.5)] hover:shadow-[0_0_80px_rgba(255,215,0,0.7)] transition-all duration-300 group overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  <span className="relative flex items-center gap-3">
                    BECOME A SPONSOR
                    <Sparkles className="w-5 h-5 animate-pulse" />
                  </span>
                </motion.button>
              </DialogTrigger>

              {/* FORM DIALOG - Keep exactly as is */}
              <DialogContent className="bg-cyan-950 text-white max-h-[85vh] max-w-[90vw] sm:max-w-md md:max-w-lg w-[90vw] p-0 border-0 overflow-hidden">
                <section className="relative py-3 sm:py-4 md:py-5 px-3 sm:px-4 overflow-auto max-h-[85vh]">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "0px" }}
                    className="mx-auto w-full"
                  >
                    <motion.div
                      variants={{
                        hidden: { y: 50, opacity: 0 },
                        visible: {
                          y: 0,
                          opacity: 1,
                          transition: {
                            duration: 0.8,
                            ease: [0.16, 1, 0.3, 1],
                          },
                        },
                      }}
                      className="w-full p-3 sm:p-4 bg-gradient-to-br from-[#ff5f6d]/10 via-[#4299e1]/10 to-[#805ad5]/10 backdrop-blur-md rounded-lg sm:rounded-xl border border-white/10 shadow-xl"
                    >
                      <div className="text-center mb-4 sm:mb-5">
                        <motion.h2
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                          className="text-lg sm:text-xl font-bold bg-gradient-to-r from-[#ff5f6d] via-[#4299e1] to-[#805ad5] bg-clip-text text-transparent mb-1 sm:mb-2"
                        >
                          Partner With Our Concert Program
                        </motion.h2>
                        <motion.p
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.3 }}
                          className="text-white/70 text-xs sm:text-sm mx-auto"
                        >
                          Share a few details and our team will get in touch
                          with you.
                        </motion.p>
                      </div>

                      <form className="w-full space-y-3 sm:space-y-4">
                        <motion.div
                          variants={{
                            hidden: { x: -30, opacity: 0 },
                            visible: {
                              x: 0,
                              opacity: 1,
                              transition: { duration: 0.6, delay: 0.4 },
                            },
                          }}
                          className="grid grid-cols-1 gap-3 sm:gap-4"
                        >
                          <div className="group relative w-full">
                            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#ff5f6d]/20 text-[#ff5f6d] rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Building2
                                  size={14}
                                  className="sm:w-4 sm:h-4"
                                />
                              </div>
                              <label className="text-white font-medium text-xs sm:text-sm">
                                Company Name *
                              </label>
                            </div>
                            <div className="relative">
                              <input
                                type="text"
                                required
                                placeholder=" "
                                className="peer w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ff5f6d]/50 focus:ring-1 focus:ring-[#ff5f6d]/20 transition-all duration-300 text-sm"
                              />
                              <span
                                className="absolute left-3 top-2 text-white/40 text-xs transition-all duration-300 pointer-events-none 
            peer-focus:-top-2.5 peer-focus:left-60 lg:peer-focus:left-87 peer-focus:text-[10px] peer-focus:bg-[#ff8a97] peer-focus:text-white peer-focus:px-3 peer-focus:py-0.5 peer-focus:rounded-4xl peer-focus:font-medium 
            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-60 lg:peer-[:not(:placeholder-shown)]:left-87 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:bg-[#ff5f6d] peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:px-3 peer-[:not(:placeholder-shown)]:py-0.5 peer-[:not(:placeholder-shown)]:rounded-4xl peer-[:not(:placeholder-shown)]:font-medium"
                              >
                                Company name
                              </span>
                            </div>
                          </div>

                          <div className="group relative w-full">
                            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#4299e1]/20 text-[#4299e1] rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <User size={14} className="sm:w-4 sm:h-4" />
                              </div>
                              <label className="text-white font-medium text-xs sm:text-sm">
                                Contact Person *
                              </label>
                            </div>
                            <div className="relative">
                              <input
                                type="text"
                                required
                                placeholder=" "
                                className="peer w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#4299e1]/50 focus:ring-1 focus:ring-[#4299e1]/20 transition-all duration-300 text-sm"
                              />
                              <span
                                className="absolute left-3 top-2 text-white/40 text-xs transition-all duration-300 pointer-events-none 
            peer-focus:-top-2.5 peer-focus:left-60 lg:peer-focus:left-87 peer-focus:text-[10px] peer-focus:bg-[#6fb1f1] peer-focus:text-white peer-focus:px-3 peer-focus:py-0.5 peer-focus:rounded-4xl peer-focus:font-medium 
            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-60 lg:peer-[:not(:placeholder-shown)]:left-87 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:bg-[#4299e1] peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:px-3 peer-[:not(:placeholder-shown)]:py-0.5 peer-[:not(:placeholder-shown)]:rounded-4xl peer-[:not(:placeholder-shown)]:font-medium"
                              >
                                Contact name
                              </span>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          variants={{
                            hidden: { x: -30, opacity: 0 },
                            visible: {
                              x: 0,
                              opacity: 1,
                              transition: { duration: 0.6, delay: 0.5 },
                            },
                          }}
                          className="grid grid-cols-1 gap-3 sm:gap-4"
                        >
                          <div className="group relative w-full">
                            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#805ad5]/20 text-[#805ad5] rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Mail size={14} className="sm:w-4 sm:h-4" />
                              </div>
                              <label className="text-white font-medium text-xs sm:text-sm">
                                Email Address *
                              </label>
                            </div>
                            <div className="relative">
                              <input
                                type="email"
                                required
                                placeholder=" "
                                className="peer w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#805ad5]/50 focus:ring-1 focus:ring-[#805ad5]/20 transition-all duration-300 text-sm"
                              />
                              <span
                                className="absolute left-3 top-2 text-white/40 text-xs transition-all duration-300 pointer-events-none 
            peer-focus:-top-2.5 peer-focus:left-60 lg:peer-focus:left-87 peer-focus:text-[10px] peer-focus:bg-[#a286df] peer-focus:text-white peer-focus:px-3 peer-focus:py-0.5 peer-focus:rounded-4xl peer-focus:font-medium 
            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-60 lg:peer-[:not(:placeholder-shown)]:left-87 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:bg-[#805ad5] peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:px-3 peer-[:not(:placeholder-shown)]:py-0.5 peer-[:not(:placeholder-shown)]:rounded-4xl peer-[:not(:placeholder-shown)]:font-medium"
                              >
                                Email address
                              </span>
                            </div>
                          </div>

                          <div className="group relative w-full">
                            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#ff5f6d]/20 text-[#ff5f6d] rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <Phone size={14} className="sm:w-4 sm:h-4" />
                              </div>
                              <label className="text-white font-medium text-xs sm:text-sm">
                                Phone Number
                              </label>
                            </div>
                            <div className="relative">
                              <input
                                type="tel"
                                placeholder=" "
                                className="peer w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#ff5f6d]/50 focus:ring-1 focus:ring-[#ff5f6d]/20 transition-all duration-300 text-sm"
                              />
                              <span
                                className="absolute left-3 top-2 text-white/40 text-xs transition-all duration-300 pointer-events-none 
            peer-focus:-top-2.5 peer-focus:left-60 lg:peer-focus:left-87 peer-focus:text-[10px] peer-focus:bg-[#ff8a97] peer-focus:text-white peer-focus:px-3 peer-focus:py-0.5 peer-focus:rounded-4xl peer-focus:font-medium 
            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-60 lg:peer-[:not(:placeholder-shown)]:left-87 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:bg-[#ff5f6d] peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:px-3 peer-[:not(:placeholder-shown)]:py-0.5 peer-[:not(:placeholder-shown)]:rounded-4xl peer-[:not(:placeholder-shown)]:font-medium"
                              >
                                Phone number
                              </span>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          variants={{
                            hidden: { x: -30, opacity: 0 },
                            visible: {
                              x: 0,
                              opacity: 1,
                              transition: { duration: 0.6, delay: 0.6 },
                            },
                          }}
                          className="group relative w-full"
                        >
                          <div className="group relative w-full">
                            <div className="flex items-center gap-2 mb-1.5 sm:mb-2">
                              <div className="w-6 h-6 sm:w-7 sm:h-7 bg-[#4299e1]/20 text-[#4299e1] rounded-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                <FileText size={14} className="sm:w-4 sm:h-4" />
                              </div>
                              <label className="text-white font-medium text-xs sm:text-sm">
                                Sponsorship Interest
                              </label>
                            </div>
                            <div className="relative">
                              <textarea
                                rows={3}
                                placeholder=" "
                                className="peer w-full px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-[#4299e1]/50 focus:ring-1 focus:ring-[#4299e1]/20 transition-all duration-300 resize-none text-sm"
                              />
                              <span
                                className="absolute left-3 top-2 text-white/40 text-xs transition-all duration-300 pointer-events-none 
            peer-focus:-top-2.5 peer-focus:left-50 lg:peer-focus:left-77 peer-focus:text-[10px] peer-focus:bg-[#6fb1f1] peer-focus:text-white peer-focus:px-3 peer-focus:py-0.5 peer-focus:rounded-4xl peer-focus:font-medium 
            peer-[:not(:placeholder-shown)]:-top-2.5 peer-[:not(:placeholder-shown)]:left-50 lg:peer-[:not(:placeholder-shown)]:left-77 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:bg-[#4299e1] peer-[:not(:placeholder-shown)]:text-white peer-[:not(:placeholder-shown)]:px-3 peer-[:not(:placeholder-shown)]:py-0.5 peer-[:not(:placeholder-shown)]:rounded-4xl peer-[:not(:placeholder-shown)]:font-medium"
                              >
                                Sponsorship interest...
                              </span>
                            </div>
                          </div>
                        </motion.div>

                        <motion.div
                          variants={{
                            hidden: { y: 30, opacity: 0 },
                            visible: {
                              y: 0,
                              opacity: 1,
                              transition: { duration: 0.6, delay: 0.7 },
                            },
                          }}
                          className="pt-3 sm:pt-4"
                        >
                          <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 w-full">
                            <button
                              type="submit"
                              className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-gradient-to-r from-[#ff5f6d] to-[#ffc371] text-white font-medium text-sm rounded-lg hover:shadow-md hover:shadow-[#ff5f6d]/30 transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                              Submit Request
                            </button>
                            <button
                              type="button"
                              className="flex-1 px-3 sm:px-4 py-2 sm:py-2.5 bg-white/5 border border-white/10 text-white font-medium text-sm rounded-lg hover:bg-white/10 hover:border-white/20 transform hover:-translate-y-0.5 transition-all duration-300"
                            >
                              Cancel
                            </button>
                          </div>
                        </motion.div>
                      </form>
                    </motion.div>
                  </motion.div>
                </section>
              </DialogContent>
            </Dialog>
          </div>
        </motion.div>
      </div>

      {/* Footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
        className="relative z-10 text-center mt-20 pb-12"
      >
        <p className="text-gray-500 text-sm tracking-wider">
          PARTNERING TO CREATE UNFORGETTABLE MUSIC EXPERIENCES
        </p>
      </motion.div>
    </div>
  );
}
