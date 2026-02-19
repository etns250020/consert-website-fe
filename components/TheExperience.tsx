"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const TheExperience = () => {
    return (
        <section className="py-24 bg-black relative">
            <div className="container mx-auto px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white/50 text-sm font-bold tracking-[0.3em] mb-12"
                >
                    THE EXPERIENCE
                </motion.h2>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="lg:col-span-2 relative h-[500px] rounded-[40px] overflow-hidden border border-yellow-500/30 group"
                    >
                        {/* Background Image */}
                        <img
                            src="https://images.unsplash.com/photo-1549110664-3252a9261ed5?q=80&w=1200&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover grayscale brightness-[0.3] group-hover:scale-105 transition-transform duration-[2000ms]"
                            alt="Experience"
                        />

                        {/* Glow Aura */}
                        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-yellow-500/10 rounded-full blur-[80px]" />

                        <div className="relative h-full flex items-center p-12 gap-12">
                            <div className="w-1/3 aspect-square rounded-3xl overflow-hidden border border-white/20">
                                <img
                                    src="https://images.unsplash.com/photo-1549110664-3252a9261ed5?q=80&w=400&auto=format&fit=crop"
                                    className="w-full h-full object-cover"
                                    alt="Featured"
                                />
                            </div>

                            <div className="flex-1">
                                <span className="text-white text-7xl font-serif italic mb-4 block">OCT 21</span>

                                <div className="space-y-6">
                                    <div>
                                        <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1">CITY</p>
                                        <p className="text-white text-2xl font-serif italic">The Weeknd</p>
                                    </div>
                                    <div>
                                        <p className="text-white/40 text-[10px] font-bold tracking-widest uppercase mb-1">VENUE</p>
                                        <p className="text-white text-xl font-light uppercase tracking-widest">OPERA CENTER</p>
                                    </div>

                                    <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-8 py-6 text-xs tracking-widest">
                                        BUY TICKET
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Side Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="relative h-[500px] rounded-[40px] overflow-hidden border border-white/5 bg-white/5 p-12 flex flex-col justify-end group cursor-pointer"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=600&auto=format&fit=crop"
                            className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:opacity-40 grayscale group-hover:scale-110 transition-all duration-1000"
                            alt="Side Experience"
                        />
                        <div className="relative z-10">
                            <h3 className="text-white text-3xl font-serif italic mb-4">The Collection</h3>
                            <p className="text-white/60 text-xs font-light leading-relaxed mb-6">
                                Experience some of the earliest memories of home, music & community from...
                            </p>
                            <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white">
                                →
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
