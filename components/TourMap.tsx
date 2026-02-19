"use client"

import React, { forwardRef, useRef } from "react"
import { motion } from "framer-motion"
import {
    Star,
    Trophy,
    Image as ImageIcon,
    Calendar,
    MapPin,
    Ticket,
    ChevronRight
} from "lucide-react"

import { cn } from "@/lib/utils"
import { AnimatedBeam } from "@/components/ui/animated-beam"
import { Meteors } from "@/components/ui/meteors"
import confetti from "canvas-confetti"
import { Button } from "./ui/button"
import { useRouter } from "next/navigation"



const Circle = forwardRef<
    HTMLDivElement,
    { className?: string; children?: React.ReactNode; label?: string; labelPosition?: 'top' | 'bottom' }
>(({ className, children, label, labelPosition = 'bottom' }, ref) => {
    return (
        <div className="flex flex-col items-center gap-2">
            {label && labelPosition === 'top' && (
                <span className="text-xs font-medium uppercase tracking-widest text-white/70">{label}</span>
            )}
            <div
                ref={ref}
                className={cn(
                    "z-10 flex size-20 items-center justify-center rounded-full border-2 border-white/20 bg-black/40 backdrop-blur-xl transition-all duration-300 hover:scale-110 hover:border-cyan-500/50 hover:shadow-[0_0_30px_-5px_rgba(6,182,212,0.5)]",
                    className
                )}
            >
                {children}
            </div>
            {label && labelPosition === 'bottom' && (
                <span className="text-sm font-semibold uppercase tracking-widest text-white/90 drop-shadow-md">{label}</span>
            )}
        </div>
    )
})

Circle.displayName = "Circle"

export function TourMap() {
    const containerRef = useRef<HTMLDivElement>(null)
    const lineupRef = useRef<HTMLDivElement>(null)
    const sponsorsRef = useRef<HTMLDivElement>(null)
    const galleryRef = useRef<HTMLDivElement>(null)
    const centerRef = useRef<HTMLDivElement>(null)
    const scheduleRef = useRef<HTMLDivElement>(null)
    const venueRef = useRef<HTMLDivElement>(null)
    const ticketsRef = useRef<HTMLDivElement>(null)

    const handleClick = () => {
        const scalar = 2
        const unicorn = confetti.shapeFromText({ text: "🦄", scalar })
        const defaults = {
            spread: 360,
            ticks: 60,
            gravity: 0,
            decay: 0.96,
            startVelocity: 20,
            shapes: [unicorn],
            scalar,
        }
        const shoot = () => {
            confetti({
                ...defaults,
                particleCount: 30,
            })
            confetti({
                ...defaults,
                particleCount: 5,
            })
            confetti({
                ...defaults,
                particleCount: 15,
                scalar: scalar / 2,
                shapes: ["circle"],
            })
        }
        setTimeout(shoot, 0)
        setTimeout(shoot, 100)
        setTimeout(shoot, 200)
    }
    const router = useRouter()
    const navigation = async (path?: string) => {
        handleClick()

        if (path) {
            await new Promise((resolve) => setTimeout(resolve, 500))
            router.push(path)
        }
    }
    return (
        <div
            className="relative flex min-h-[800px] w-full items-center justify-center overflow-hidden   bg-black py-24"
            ref={containerRef}
        >
            <Meteors number={20} />
            {/* Background Atmosphere */}
            <div className="absolute inset-0 z-0 text-white">

                <div className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[120px]" />
                <div className="absolute top-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-cyan-600/10 blur-[100px]" />
                <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-pink-600/10 blur-[100px]" />
            </div>

            <div className="relative z-10 flex w-full max-w-6xl items-center justify-between px-10">
                {/* Left Side Nodes */}
                <div className="flex flex-col gap-24">
                    <Circle ref={lineupRef} label="Lineup" className="border-cyan-500/30">
                        <Button className="bg-transparent hover:bg-transparent" onClick={() => navigation("/schedule")}><Star className="size-8 text-cyan-400" /></Button>
                    </Circle>
                    <Circle ref={sponsorsRef} label="Sponsors" className="border-yellow-500/30">
                        <Button className="bg-transparent hover:bg-transparent" onClick={() => navigation("/sponsors")}><Trophy className="size-8 text-yellow-400" /></Button>
                    </Circle>
                    <Circle ref={galleryRef} label="Gallery" className="border-pink-500/30">
                        <Button className="bg-transparent hover:bg-transparent" onClick={() => navigation("/gallery")}><ImageIcon className="size-8 text-pink-400" /></Button>
                    </Circle>
                </div>

                {/* Central Branding Hub */}
                <div className="relative">
                    {/* Glowing Rings */}
                    <div className="absolute top-1/2 left-1/2 size-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/5" />
                    <div className="absolute top-1/2 left-1/2 size-[380px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10 " />

                    <motion.div
                        ref={centerRef}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="relative z-20 flex size-[320px] flex-col items-center justify-center rounded-full border-2 border-white/20 bg-black/60 backdrop-blur-3xl shadow-[0_0_60px_-15px_rgba(255,255,255,0.2)]"
                    >
                        {/* Animated Gradient Border Overlay */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse pointer-events-none " />

                        <div className="relative z-10 flex flex-col items-center text-center  ">
                            <span className="mb-2 text-xs font-bold tracking-[0.3em] text-white/60">LIVE IN CONCERT</span>
                            <h2 className="mb-1 text-4xl font-black italic tracking-tighter text-white sm:text-5xl">
                                DJ SPECTRUM
                            </h2>
                            <div className="h-px w-12 bg-gradient-to-r from-transparent via-white/40 to-transparent my-4" />
                            <p className="text-sm font-medium text-white/80">Los Angeles, CA</p>
                            <p className="text-xs text-white/60 mt-1">August 19, 2024</p>

                            <button className="mt-8 flex items-center gap-2 rounded-full bg-white px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all hover:scale-105 hover:bg-cyan-400">
                                Book Tickets
                                <ChevronRight className="size-3" />
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Right Side Nodes */}
                <div className="flex flex-col gap-24">
                    <Circle ref={scheduleRef} label="Schedule" labelPosition="top" className="border-purple-500/30">
                        <Button className="bg-transparent hover:bg-transparent" onClick={() => { navigation("/schedule") }}><Calendar className="size-8 text-purple-400" /></Button>
                    </Circle>
                    <Circle ref={venueRef} label="Venue" labelPosition="top" className="border-orange-500/30">
                        <Button className="bg-transparent hover:bg-transparent" onClick={() => { navigation("/venue") }}><MapPin className="size-8 text-orange-400" /></Button>
                    </Circle>
                    <Circle ref={ticketsRef} label="Tickets" labelPosition="top" className="border-green-500/30">
                        <Button className="bg-transparent hover:bg-transparent" onClick={() => { navigation("/contact") }}><Ticket className="size-8 text-green-400" /></Button>
                    </Circle>
                </div>
            </div>

            {/* Beams from Left to Center */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={lineupRef}
                toRef={centerRef}
                curvature={-40}
                gradientStartColor="#06b6d4"
                gradientStopColor="#8b5cf6"
                duration={5}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={sponsorsRef}
                toRef={centerRef}
                curvature={0}
                gradientStartColor="#eab308"
                gradientStopColor="#8b5cf6"
                duration={6}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={galleryRef}
                toRef={centerRef}
                curvature={40}
                gradientStartColor="#ec4899"
                gradientStopColor="#8b5cf6"
                duration={4}
            />

            {/* Beams from Right to Center (Reversed for incoming effect) */}
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={scheduleRef}
                toRef={centerRef}
                curvature={-40}
                reverse
                gradientStartColor="#a855f7"
                gradientStopColor="#06b6d4"
                duration={5}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={venueRef}
                toRef={centerRef}
                curvature={0}
                reverse
                gradientStartColor="#f97316"
                gradientStopColor="#06b6d4"
                duration={6}
                delay={1}
            />
            <AnimatedBeam
                containerRef={containerRef}
                fromRef={ticketsRef}
                toRef={centerRef}
                curvature={40}
                reverse
                gradientStartColor="#22c55e"
                gradientStopColor="#06b6d4"
                duration={4}
                delay={0.5}
            />
        </div>
    )
}
