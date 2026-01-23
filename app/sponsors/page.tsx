"use client";

import { motion } from "framer-motion";
import { Trophy, Star, Award, Zap, Music, Sparkles } from "lucide-react";

interface Sponsor {
  id: number;
  name: string;
  tier: "Platinum" | "Gold" | "Silver" | "Bronze";
  logoColor: string;
  contribution: string;
  description: string;
  icon: React.ReactNode;
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
  },
  {
    id: 2,
    name: "Stellar Productions",
    tier: "Gold",
    logoColor: "from-yellow-500 to-orange-500",
    contribution: "Stage Design",
    description: "Main stage architecture and lighting",
    icon: <Sparkles className="w-8 h-8" />,
  },
  {
    id: 3,
    name: "Urban Energy",
    tier: "Gold",
    logoColor: "from-blue-500 to-cyan-400",
    contribution: "Power Solutions",
    description: "Uninterrupted power supply across venue",
    icon: <Zap className="w-8 h-8" />,
  },
  {
    id: 4,
    name: "Echo Merch",
    tier: "Silver",
    logoColor: "from-gray-400 to-gray-300",
    contribution: "Official Merchandise",
    description: "Exclusive concert merchandise partner",
    icon: <Award className="w-7 h-7" />,
  },
  {
    id: 5,
    name: "Pulse Beverages",
    tier: "Silver",
    logoColor: "from-green-500 to-emerald-400",
    contribution: "Refreshment Partner",
    description: "Official beverage sponsor",
    icon: <Trophy className="w-7 h-7" />,
  },
  {
    id: 6,
    name: "Rhythm Records",
    tier: "Bronze",
    logoColor: "from-amber-700 to-amber-600",
    contribution: "Media Partner",
    description: "Digital streaming and recording",
    icon: <Star className="w-6 h-6" />,
  },
];

const Sponsors = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  };

  const circleVariants = {
    initial: { scale: 0, rotate: 0 },
    animate: { 
      scale: 1, 
      rotate: 360,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20,
      }
    },
    hover: {
      scale: 1.1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 15,
      }
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 relative overflow-hidden">
      {/* Rangoli-inspired Gradient Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Top Rangoli Pattern - Multi-color radial gradients */}
        <div className="absolute top-0 left-0 right-0 h-96">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-pink-600/20 rounded-full blur-3xl animate-pulse delay-1000" />
          <div className="absolute top-20 left-1/3 w-80 h-80 bg-yellow-500/15 rounded-full blur-3xl animate-pulse delay-500" />
          <div className="absolute top-10 right-1/3 w-72 h-72 bg-cyan-500/15 rounded-full blur-3xl animate-pulse delay-1500" />
        </div>
        
        {/* Middle Rangoli Pattern - Symmetrical gradients */}
        <div className="absolute top-1/4 left-0 right-0 h-96">
          <div className="absolute left-20 top-20 w-64 h-64 bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl" />
          <div className="absolute right-20 top-20 w-64 h-64 bg-gradient-to-bl from-yellow-500/10 to-orange-500/10 rounded-full blur-3xl" />
          <div className="absolute left-1/2 -translate-x-1/2 top-40 w-80 h-80 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl" />
        </div>
        
        {/* Bottom Rangoli Pattern - Color bursts */}
        <div className="absolute bottom-0 left-0 right-0 h-96">
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-green-600/10 rounded-full blur-3xl animate-pulse delay-700" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1200" />
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-red-500/10 rounded-full blur-3xl animate-pulse delay-300" />
          <div className="absolute bottom-10 right-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1800" />
        </div>

        {/* Overlay Gradient - Creates the rangoli color flow effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black" />
        
        {/* Rangoli Diamond Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          <div className="absolute top-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-500 to-transparent" />
          <div className="absolute top-40 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent" />
          <div className="absolute top-60 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
          <div className="absolute top-80 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent" />
          <div className="absolute bottom-40 left-0 w-full h-1 bg-gradient-to-r from-transparent via-orange-500 to-transparent" />
          <div className="absolute bottom-20 left-0 w-full h-1 bg-gradient-to-r from-transparent via-red-500 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
        </div>

        {/* Floating Rangoli Particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full"
              style={{
                background: [
                  '#f472b6', '#a855f7', '#ec4899', '#fbbf24', '#3b82f6'
                ][i % 5],
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-6 mt-15 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400">
            Our Sponsors
          </h1>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto backdrop-blur-sm bg-black/20 p-4 rounded-2xl">
            Powered by industry leaders who believe in the magic of music
          </p>
          
          {/* Tier Legend */}
          <div className="flex flex-wrap justify-center gap-6 mt-8 backdrop-blur-sm bg-black/30 p-4 rounded-2xl max-w-2xl mx-auto">
            {["Platinum", "Gold", "Silver", "Bronze"].map((tier) => (
              <div key={tier} className="flex items-center gap-2">
                <div className={`w-4 h-4 rounded-full ${
                  tier === "Platinum" ? "bg-gradient-to-r from-purple-600 to-pink-500" :
                  tier === "Gold" ? "bg-gradient-to-r from-yellow-500 to-orange-500" :
                  tier === "Silver" ? "bg-gradient-to-r from-gray-400 to-gray-300" :
                  "bg-gradient-to-r from-amber-700 to-amber-600"
                }`} />
                <span className="text-sm font-medium">{tier}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Sponsors Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {sponsors.map((sponsor) => (
            <motion.div
              key={sponsor.id}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="bg-black/60 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-white/30 transition-all duration-300 shadow-2xl shadow-black/50"
            >
              {/* Sponsor Circle */}
              <div className="flex justify-center mb-6">
                <motion.div
                  variants={circleVariants}
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  className={`w-32 h-32 rounded-full bg-gradient-to-br ${sponsor.logoColor} flex items-center justify-center shadow-2xl relative overflow-hidden`}
                >
                  {/* Inner glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent" />
                  
                  {/* Animated rings */}
                  <motion.div 
                    className="absolute inset-0 rounded-full border-2 border-white/20"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div 
                    className="absolute inset-4 rounded-full border border-white/10"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                  
                  {/* Logo/Icon */}
                  <div className="relative z-10 text-white">
                    {sponsor.icon}
                    <div className="mt-2 text-lg font-bold drop-shadow-lg">{sponsor.name}</div>
                  </div>
                </motion.div>
              </div>

              {/* Sponsor Info */}
              <div className="text-center">
                <div className="mb-4">
                  <span className={`inline-block px-4 py-1 rounded-full text-sm font-semibold backdrop-blur-md ${
                    sponsor.tier === "Platinum" ? "bg-gradient-to-r from-purple-600/30 to-pink-500/30 text-purple-200 border border-purple-500/30" :
                    sponsor.tier === "Gold" ? "bg-gradient-to-r from-yellow-500/30 to-orange-500/30 text-yellow-200 border border-yellow-500/30" :
                    sponsor.tier === "Silver" ? "bg-gradient-to-r from-gray-400/30 to-gray-300/30 text-gray-200 border border-gray-400/30" :
                    "bg-gradient-to-r from-amber-700/30 to-amber-600/30 text-amber-200 border border-amber-600/30"
                  }`}>
                    {sponsor.tier} Partner
                  </span>
                </div>
                
                <h3 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300">
                  {sponsor.contribution}
                </h3>
                <p className="text-gray-300 mb-4 backdrop-blur-sm bg-black/30 p-3 rounded-xl">
                  {sponsor.description}
                </p>
                
                {/* Contribution Bar */}
                <div className="relative h-2 bg-gray-900/80 rounded-full overflow-hidden mt-4 backdrop-blur-sm">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 
                      sponsor.tier === "Platinum" ? "100%" :
                      sponsor.tier === "Gold" ? "75%" :
                      sponsor.tier === "Silver" ? "50%" : "25%"
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className={`absolute h-full rounded-full ${
                      sponsor.tier === "Platinum" ? "bg-gradient-to-r from-purple-600 to-pink-500" :
                      sponsor.tier === "Gold" ? "bg-gradient-to-r from-yellow-500 to-orange-500" :
                      sponsor.tier === "Silver" ? "bg-gradient-to-r from-gray-400 to-gray-300" :
                      "bg-gradient-to-r from-amber-700 to-amber-600"
                    }`}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-center bg-gradient-to-r from-purple-900/40 via-pink-900/40 to-orange-900/40 rounded-3xl p-8 border border-white/20 backdrop-blur-xl shadow-2xl"
        >
          <h2 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-300 via-pink-300 to-yellow-300">
            Become a Sponsor
          </h2>
          <p className="text-gray-200 mb-6 max-w-2xl mx-auto">
            Join our vibrant family of elite sponsors and connect with thousands of music enthusiasts.
            Be part of an unforgettable experience that resonates with color and rhythm.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative overflow-hidden bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 group"
          >
            <span className="relative z-10">Partner With Us</span>
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-orange-500 via-pink-500 to-purple-600"
              animate={{ x: ["0%", "100%", "0%"] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ opacity: 0.5 }}
            />
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default Sponsors;