"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export function AnimatedThemeToggler() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return (
            <div className="h-9 w-9 flex items-center justify-center p-2 rounded-lg border border-white/10" />
        );
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="relative h-9 w-9 flex items-center justify-center p-2 rounded-lg border border-white/10 hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label="Toggle theme"
        >
            <AnimatePresence mode="wait" initial={false}>
                <motion.div
                    key={isDark ? "dark" : "light"}
                    initial={{ opacity: 0, scale: 0.5, rotate: isDark ? -45 : 45 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    exit={{ opacity: 0, scale: 0.5, rotate: isDark ? 45 : -45 }}
                    transition={{ duration: 0.2, ease: "easeOut" }}
                    className="flex items-center justify-center"
                >
                    {isDark ? (
                        <Moon className="h-5 w-5 text-purple-400" />
                    ) : (
                        <Sun className="h-5 w-5 text-yellow-500" />
                    )}
                </motion.div>
            </AnimatePresence>
        </button>
    );
}
