"use client";

import { motion } from "framer-motion";
import { Play, Plus } from "lucide-react";
import { ComicText } from "./ui/comic-text";
import { HeroVideoDialog } from "./ui/hero-video-dialog";
import Link from "next/link";
import { ShimmerButton } from "@/components/ui/shimmer-button"
import { CoolMode } from "@/components/ui/cool-mode"
import { FlickeringGrid } from "@/components/ui/flickering-grid"

const mediaItems = [
    { id: 1, image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=400&auto=format&fit=crop", hasPlay: false },
    { id: 2, image: "https://images.unsplash.com/photo-1493225255756-d9584f8606e9?q=80&w=400&auto=format&fit=crop", hasPlay: false },
    { id: 3, image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=400&auto=format&fit=crop", hasPlay: true, videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 4, image: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=400&auto=format&fit=crop", hasPlay: false },
    { id: 5, image: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=400&auto=format&fit=crop", hasPlay: true, videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 6, image: "https://images.unsplash.com/photo-1501612780327-45045538702b?q=80&w=400&auto=format&fit=crop", hasPlay: true, videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 7, image: "https://images.unsplash.com/photo-1501386761578-eac5c94b800a?q=80&w=400&auto=format&fit=crop", hasPlay: true, videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 8, image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=400&auto=format&fit=crop", hasPlay: false },
    { id: 9, image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=400&auto=format&fit=crop", hasPlay: true, videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
    { id: 10, image: "https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?q=80&w=400&auto=format&fit=crop", hasPlay: true, videoSrc: "https://www.youtube.com/embed/dQw4w9WgXcQ" },
];

export const MediaGallery = () => {
    return (
        <section className="py-4 bg-black relative overflow-hidden">
            <FlickeringGrid
                className="absolute inset-0 z-0   w-[100vw]"
                squareSize={4}
                gridGap={6}
                color="#021c3d2a"
                maxOpacity={0.4}
                flickerChance={0.1}
                height={1200}
                width={2000}
            />

            <div className="container mx-auto px-8 relative z-10">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-white text-3xl font-bold tracking-tight mb-12"
                >

                    <ComicText fontSize={4}>MEDIA & GALLERY</ComicText>
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
                            {item.hasPlay ? (
                                <HeroVideoDialog
                                    className="w-full h-full"
                                    animationStyle="from-center"
                                    videoSrc={item.videoSrc || ""}
                                    thumbnailSrc={item.image}
                                    thumbnailAlt="Media Gallery Video"
                                />
                            ) : (
                                <img
                                    src={item.image}
                                    alt="Gallery"
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                                />
                            )}
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mt-12 flex justify-center"
                >
                    <Link href="/gallery" className="group">
                        <CoolMode
                            options={{
                                particle:
                                    "https://pbs.twimg.com/profile_images/1782811051504885763/YR5-kWOI_400x400.jpg",
                            }}
                        >
                            <ShimmerButton className="shadow-2xl">
                                <Plus className="w-5 h-5 group-hover:rotate-90 transition-transform duration-300" />
                                <span>EXPLORE GALLERY</span>
                            </ShimmerButton>
                        </CoolMode>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
};
