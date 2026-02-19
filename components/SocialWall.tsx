"use client";

import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Check } from "lucide-react";

const posts = [
    { id: 1, image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=400&auto=format&fit=crop" },
    { id: 2, image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=400&auto=format&fit=crop" },
    { id: 3, image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?q=80&w=400&auto=format&fit=crop" },
    { id: 4, image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=400&auto=format&fit=crop" },
    { id: 5, image: "https://images.unsplash.com/photo-1514525253361-b83f859b73c0?q=80&w=400&auto=format&fit=crop" },
];

export const SocialWall = () => {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-8">
                <div className="flex justify-between items-end mb-12">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-white text-3xl font-bold tracking-tight"
                    >
                        SOCIAL WALL
                    </motion.h2>

                    <div className="flex gap-2">
                        <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                            <ChevronLeft className="w-5 h-5" />
                        </button>
                        <button className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors">
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>
                </div>

                <div className="flex gap-4 overflow-hidden">
                    {posts.map((post, idx) => (
                        <motion.div
                            key={post.id}
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="relative min-w-[300px] h-[300px] rounded-3xl overflow-hidden group border border-white/10 bg-white/5"
                        >
                            <img
                                src={post.image}
                                alt="Social Post"
                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-80"
                            />
                            <div className="absolute top-4 right-4 w-6 h-6 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30">
                                <Check className="w-3 h-3 text-white" />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
