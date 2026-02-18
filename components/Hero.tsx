"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = ({ backgroundImage }: { backgroundImage: string }) => {
    return (
        <section className="relative h-screen flex flex-col items-center justify-center text-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black z-0" />
            </div>

            <div className="relative z-10 max-w-4xl px-4">
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-yellow-500 font-bold tracking-[0.3em] text-xs mb-4"
                >
                    LIMITED ENGAGEMENT SERIES
                </motion.p>

                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-white text-6xl md:text-8xl font-serif italic mb-6 leading-tight"
                >
                    The Pinnacle of <br /> Live Sound
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-white/60 text-lg md:text-xl font-light max-w-2xl mx-auto mb-10"
                >
                    Experience the world's most exclusive performances with ultra-high fidelity.<br />
                    A cinematic journey through sound, light and intimacy.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center"
                >
                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-10 py-6 text-sm tracking-widest">
                        VIEW SCHEDULE
                    </Button>
                    <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full px-10 py-6 text-sm tracking-widest">
                        THE EXPERIENCE
                    </Button>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 w-px h-16 bg-gradient-to-b from-white/0 via-white/50 to-white/0"
            />
        </section>
    );
};
