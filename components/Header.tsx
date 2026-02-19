"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Header = () => {
    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/10 backdrop-blur-md border-b border-white/10"
        >
            <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-yellow-500 flex items-center justify-center">
                    <span className="text-black font-bold text-xs">V</span>
                </div>
                <span className="text-white font-bold tracking-widest text-sm">VANTAGE LIVE</span>
            </div>

            <nav className="hidden md:flex items-center gap-8">
                {["PERFORMANCES", "VIP EXPERIENCE", "GALLERY", "LOG OUT"].map((item) => (
                    <Link
                        key={item}
                        href="#"
                        className="text-white/70 hover:text-white text-xs font-semibold tracking-widest transition-colors"
                    >
                        {item}
                    </Link>
                ))}
            </nav>

            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-6 py-2 text-xs tracking-widest">
                GET ACCESS
            </Button>
        </motion.header>
    );
};
