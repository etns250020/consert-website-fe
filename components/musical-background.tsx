"use client"

import React, { useEffect, useState } from "react"
import { motion, useAnimationControls } from "framer-motion"
import { Music, Music2, Music3, Music4, Disc, Mic2, Guitar, CassetteTape } from "lucide-react"

const icons = [Music, Music2, Music3, Music4, Disc, Mic2, Guitar, CassetteTape]

interface FloatingIconProps {
    id: number
    startX: number
    duration: number
    Icon: any
    delay: number
}

const FloatingIcon = ({ id, startX, duration, Icon, delay }: FloatingIconProps) => {
    const controls = useAnimationControls()
    const [isDragged, setIsDragged] = useState(false)

    const animateUp = async (fromY = "110%") => {
        await controls.start({
            y: "-10vh",
            x: `${startX + (Math.random() * 10 - 5)}vw`,
            opacity: [0, 1, 1, 0],
            transition: {
                duration: duration,
                delay: isDragged ? 0 : delay,
                ease: "linear",
                repeat: Infinity,
            },
        })
    }

    useEffect(() => {
        animateUp()
    }, [])

    return (
        <motion.div
            drag
            dragElastic={0.1}
            whileHover={{ scale: 1.2, color: "rgba(255, 255, 255, 0.6)" }}
            onDragStart={() => setIsDragged(true)}
            onDragEnd={() => {
                setIsDragged(false)
                animateUp()
            }}
            animate={controls}
            initial={{ y: "110%", x: `${startX}vw`, opacity: 0 }}
            className="absolute text-white/20 cursor-grab active:cursor-grabbing z-[100] pointer-events-auto"
            style={{ touchAction: "none" }}
        >
            <Icon size={Math.random() * 24 + 24} />
        </motion.div>
    )
}

export const MusicalBackground = () => {
    const [floatingIcons, setFloatingIcons] = useState<any[]>([])

    useEffect(() => {
        const newIcons = Array.from({ length: 15 }).map((_, i) => ({
            id: i,
            startX: Math.random() * 100,
            duration: Math.random() * 15 + 15,
            Icon: icons[Math.floor(Math.random() * icons.length)],
            delay: Math.random() * 20,
        }))
        setFloatingIcons(newIcons)
    }, [])

    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-[100]">
            {floatingIcons.map((icon) => (
                <FloatingIcon key={icon.id} {...icon} />
            ))}
        </div>
    )
}
