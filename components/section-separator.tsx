"use client"

import React from "react"
import { motion } from "framer-motion"

export const SectionSeparator = () => {
    return (
        <div className="relative w-full overflow-hidden h-32 md:h-48 -mt-24 mb-8 z-30 pointer-events-none">
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 1440 200"
                preserveAspectRatio="none"
                className="block filter drop-shadow-[0_0_15px_rgba(255,95,109,0.3)]"
            >
                <defs>
                    <linearGradient id="jagged-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#ffc371" />
                        <stop offset="25%" stopColor="#ff5f6d" />
                        <stop offset="50%" stopColor="#805ad5" />
                        <stop offset="75%" stopColor="#4299e1" />
                        <stop offset="100%" stopColor="#ffc371" />
                    </linearGradient>
                </defs>
                <motion.path
                    initial={{ opacity: 0, x: -100 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    d="M 0 100 
                       L 150 100 
                       L 150 70 
                       L 300 70 
                       L 300 110 
                       L 450 110 
                       L 500 140 
                       L 700 140 
                       L 750 100 
                       L 950 100 
                       L 1000 70 
                       L 1200 70 
                       L 1250 120 
                       L 1440 120 
                       L 1440 160 
                       L 1240 160 
                       L 1190 110 
                       L 1010 110 
                       L 960 140 
                       L 740 140 
                       L 690 180 
                       L 460 180 
                       L 410 150 
                       L 290 150 
                       L 290 110 
                       L 160 110 
                       L 160 140 
                       L 0 140 Z"
                    fill="url(#jagged-gradient)"
                />
            </svg>
        </div>
    )
}
