"use client";

import React, { useCallback, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Ticket, Calendar, Music } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import confetti from "canvas-confetti";
import { VideoText } from "@/components/ui/video-text"
import { ComicText } from "./ui/comic-text";
import { MeteorDemo } from "./magicui/Meteor";
import { Meteors } from "./ui/meteors";
import { BorderBeam } from "./ui/border-beam";
import { Particles } from "./ui/particles";
import { useTheme } from "next-themes"

const artists = [
    {
        name: "The Weeknd",
        location: "SHAE STADIUM • OCT 21",
        label: "OCT 21",
        image: "https://images.unsplash.com/photo-1549416075-8495a129d20c?q=80&w=1000&auto=format&fit=crop",
        gradient: "from-red-900/80",
        color: "#ff3d3d"
    },
    {
        name: "Beyoncé",
        location: "RENAISSANCE • JAN 12",
        label: "JAN 12",
        image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?q=80&w=1000&auto=format&fit=crop",
        gradient: "from-amber-900/80",
        color: "#f59e0b"
    },
    {
        name: "Hans Zimmer",
        location: "INTERSTELLAR • MAR 15",
        label: "MAR 15",
        image: "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?q=80&w=1000&auto=format&fit=crop",
        gradient: "from-purple-900/80",
        color: "#a855f7"
    },
    {
        name: "Symphony Live",
        location: "THE PALACE • JUN 30",
        label: "JUN 30",
        image: "https://images.unsplash.com/photo-1453090927415-5f45085b65c0?q=80&w=1000&auto=format&fit=crop",
        gradient: "from-blue-900/80",
        color: "#3b82f6"
    },
    {
        name: "Post Malone",
        location: "DALLAS • AUG 15",
        label: "AUG 15",
        image: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=1000&auto=format&fit=crop",
        gradient: "from-orange-900/80",
        color: "#f97316"
    },
    {
        name: "Coldplay",
        location: "WEMBLEY • SEP 05",
        label: "SEP 05",
        image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=1000&auto=format&fit=crop",
        gradient: "from-cyan-900/80",
        color: "#06b6d4"
    }
];

export const ArtistLineup = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: true,
        align: "start",
        skipSnaps: false,
        dragFree: true,
    });

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    const handleArtistClick = (index: number, artistColor: string) => {
        if (emblaApi) {
            emblaApi.scrollTo(index);
        }

        // Star confetti effect matching the artist theme
        const count = 40;
        const defaults = {
            origin: { y: 0.7 },
            colors: [artistColor, '#ffffff', '#000000'],
            shapes: ['square', 'circle'] as confetti.Shape[],
            scalar: 1.2
        };

        function fire(particleRatio: number, opts: confetti.Options) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            });
        }

        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    };
    const { resolvedTheme } = useTheme()
    const [color, setColor] = useState("#ffffff")
    useEffect(() => {
        setColor(resolvedTheme === "dark" ? "#ffffff" : "#000000")
    }, [resolvedTheme])


    return (
        <section className="py-10 bg-black overflow-hidden relative">

            {/* Background Atmosphere */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-white/[0.02] blur-[150px] pointer-events-none rounded-full " />


            <div className=" mx-auto px-8 relative z-10">
                <Particles
                    className="absolute inset-0 z-0"
                    quantity={100}
                    ease={80}
                    color={color}
                    refresh
                />
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
                    <div className="space-y-3">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="flex items-center gap-3"
                        >
                            <div className="h-[2px] w-8 bg-primary" />
                            <span className="text-primary font-black tracking-[0.4em] text-[10px] uppercase">
                                Global Concert Series
                            </span>
                        </motion.div>

                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                            className="text-white text-6xl font-black tracking-tighter leading-none flex w-full justify-center"
                        >
                            <ComicText fontSize={4} className="">
                                THE LINEUP
                            </ComicText>
                        </motion.h2>

                    </div>

                    <div className="flex gap-3">
                        <Button
                            variant="outline"
                            size="icon-lg"
                            className="rounded-full border-white/5 bg-white/[0.03] backdrop-blur-xl hover:bg-white/10 hover:border-white/20 text-white transition-all active:scale-95"
                            onClick={scrollPrev}
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </Button>
                        <Button
                            variant="outline"
                            size="icon-lg"
                            className="rounded-full border-white/5 bg-white/[0.03] backdrop-blur-xl hover:bg-white/10 hover:border-white/20 text-white transition-all active:scale-95"
                            onClick={scrollNext}
                        >
                            <ChevronRight className="w-6 h-6" />
                        </Button>
                    </div>
                </div>

                <div className="embla" ref={emblaRef}>
                    <div className="embla__container flex ">
                        {artists.map((artist, idx) => (
                            <motion.div
                                key={`${artist.name}-${idx}`}
                                initial={{ opacity: 0, scale: 0.95 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.05 }}
                                className="embla__slide flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_30%] min-w-0"
                                onClick={() => handleArtistClick(idx, artist.color)}
                            >
                                <div className="group relative h-[450px] w-[90%] rounded-[1rem] overflow-hidden cursor-pointer border border-white/5 bg-zinc-950 transition-all duration-700 hover:border-white/30 hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.8)]">
                                    {/* Artist Image */}
                                    <div className="absolute inset-0 bg-zinc-900" />
                                    <img
                                        src={artist.image}
                                        alt={artist.name}
                                        className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 brightness-[0.6] group-hover:brightness-100 group-hover:scale-105"
                                        onError={(e) => {
                                            const target = e.target as HTMLImageElement;
                                            target.src = "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=1000&auto=format&fit=crop";
                                        }}
                                    />

                                    {/* Color Grading Overlay */}
                                    <div className={cn(
                                        "absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700",
                                        artist.gradient
                                    )} />

                                    {/* Gradient Overlay for Text Readability */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

                                    <div className="absolute inset-x-0 bottom-0 p-10 z-20">
                                        <div className="flex items-center gap-3 mb-4 backdrop-blur-md bg-white/5 w-fit px-4 py-1.5 rounded-full border border-white/10">
                                            <Calendar className="w-3 h-3 text-primary" />
                                            <p className="text-white/80 text-[10px] tracking-[0.25em] font-black uppercase">
                                                {artist.location}
                                            </p>
                                        </div>

                                        <h3 className="text-white text-4xl font-black italic tracking-tighter mb-8 leading-none transition-all duration-500 group-hover:tracking-normal group-hover:translate-x-2">
                                            {artist.name.toUpperCase()}
                                        </h3>

                                        <div className="flex gap-3 transition-all duration-500 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0">
                                            <Button
                                                variant="outline"
                                                className="rounded-xl border-white/20 text-white text-[10px] font-black tracking-widest bg-black/40 backdrop-blur-xl hover:bg-white hover:text-black hover:border-white transition-all"
                                            >
                                                VIEW TOUR
                                            </Button>
                                            <Button
                                                className="rounded-xl bg-primary text-primary-foreground text-[10px] font-black tracking-widest px-8 shadow-[0_15px_30px_-5px_var(--color-primary)] hover:scale-105 active:scale-95 transition-all"
                                                style={{ "--color-primary": artist.color } as React.CSSProperties}
                                            >
                                                TICKETS
                                            </Button>
                                        </div>
                                    </div>

                                    {/* Floating Play Icon Hint */}
                                    <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                                        <div className="size-14 rounded-full bg-white text-black flex items-center justify-center shadow-2xl">
                                            <Music className="w-6 h-6" />
                                        </div>
                                    </div>

                                    {/* Border Beam Effect */}
                                    <BorderBeam size={200} duration={12} delay={idx * 2} colorFrom={artist.color} />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Visual Continuity Hint */}
            <div className="container mx-auto px-8 mt-12 flex items-center justify-between text-white/20 select-none">
                <div className="flex gap-2 font-black italic tracking-tighter text-sm">
                    <span>LIVE</span>
                    <span>•</span>
                    <span>2024</span>
                    <span>•</span>
                    <span>UNSTOPPABLE</span>
                </div>
                <div className="h-px flex-1 mx-8 bg-gradient-to-r from-white/0 via-white/20 to-white/0" />
                <div className="text-[10px] font-black tracking-[0.5em] uppercase">
                    Swipe to explore
                </div>
            </div>
        </section>
    );
};
