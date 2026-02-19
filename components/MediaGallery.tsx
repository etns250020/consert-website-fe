"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

const mediaItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1459749411177-042180ce673c?q=80&w=400&auto=format&fit=crop", hasPlay: false },
    { id: 2, image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400&auto=format&fit=crop", hasPlay: false },
    { id: 3, image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=400&auto=format&fit=crop", hasPlay: true },
    { id: 4, image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=400&auto=format&fit=crop", hasPlay: false },
    { id: 5, image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=400&auto=format&fit=crop", hasPlay: true },
    { id: 6, image: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=400&auto=format&fit=crop", hasPlay: true },
    { id: 7, image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=400&auto=format&fit=crop", hasPlay: true },
    { id: 8, image: "https://images.unsplash.com/photo-1429962714451-bb934ecbb4ec?q=80&w=400&auto=format&fit=crop", hasPlay: false },
    { id: 9, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop", hasPlay: true },
    { id: 10, image: "https://images.unsplash.com/photo-1514525253361-b83f859b73c0?q=80&w=400&auto=format&fit=crop", hasPlay: true },
];

export const MediaGallery = () => {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white text-3xl font-bold tracking-tight mb-12"
                >
                    MEDIA & GALLERY
                </motion.h2>

                <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {mediaItems.map((item, idx) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.05 }}
                            className="group relative aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer bg-white/5"
                        >
                            <img
                                src={item.image}
                                alt="Gallery"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                            />
                            {item.hasPlay && (
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30 group-hover:scale-125 transition-transform duration-500">
                                        <Play className="w-4 h-4 text-white fill-white" />
                                    </div>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
