"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { LucideIcon } from "lucide-react"

interface FloatingInputProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string
    icon?: LucideIcon
    isTextArea?: boolean
}

export const FloatingInput: React.FC<FloatingInputProps> = ({
    label,
    icon: Icon,
    isTextArea = false,
    id,
    value,
    onChange,
    onFocus,
    onBlur,
    ...props
}) => {
    const [isFocused, setIsFocused] = useState(false)
    const hasValue = value && value.toString().length > 0

    const handleFocus = (e: any) => {
        setIsFocused(true)
        if (onFocus) onFocus(e)
    }

    const handleBlur = (e: any) => {
        setIsFocused(false)
        if (onBlur) onBlur(e)
    }

    const Component = isTextArea ? "textarea" : "input"

    return (
        <div className="relative w-full group">
            {/* Icon */}
            {Icon && (
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-primary transition-colors duration-200">
                    <Icon size={18} />
                </div>
            )}

            {/* Label */}
            <motion.label
                htmlFor={id}
                initial={false}
                animate={{
                    top: isFocused || hasValue ? -10 : isTextArea ? 16 : "50%",
                    left: Icon ? 44 : 16,
                    scale: isFocused || hasValue ? 0.85 : 1,
                    y: isFocused || hasValue ? 0 : "-50%",
                    backgroundColor: isFocused || hasValue ? "var(--background)" : "transparent",
                    padding: isFocused || hasValue ? "0 4px" : "0",
                }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className={`absolute pointer-events-none transition-colors duration-200 ${isFocused ? "text-primary font-medium" : "text-muted-foreground"
                    }`}
            >
                {label}
            </motion.label>

            {/* Input Field */}
            <Component
                id={id}
                value={value}
                onChange={onChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className={`w-full bg-transparent border-2 border-muted hover:border-muted-foreground/50 focus:border-primary rounded-xl px-4 py-3 outline-none transition-all duration-200 ${Icon ? "pl-12" : ""
                    } ${isTextArea ? "min-h-[120px] resize-none" : ""}`}
                {...(props as any)}
            />
        </div>
    )
}
