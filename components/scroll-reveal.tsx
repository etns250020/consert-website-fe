"use client"

import React from "react"
import { motion } from "framer-motion"

interface ScrollRevealProps {
    children: React.ReactNode
    direction?: "left" | "right" | "bottom" | "up"
    delay?: number
    className?: string
}

export const ScrollReveal = ({ children, direction = "bottom", delay = 0, className = "" }: ScrollRevealProps) => {
    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
            y: direction === "bottom" ? 50 : direction === "up" ? -50 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.8,
                delay: delay,
                ease: [0.21, 1.11, 0.81, 0.99],
            },
        },
    }

    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={variants}
            className={className}
        >
            {children}
        </motion.div>
    )
}
