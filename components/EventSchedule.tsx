"use client";

import { motion } from "framer-motion";

const schedule = [
    { date: "OCT 21", city: "PRAGUE", venue: "OPERA CENTER" },
    { date: "OCT 25", city: "MILANO", venue: "OPERA CENTER" },
    { date: "OCT 30", city: "LONDON", venue: "OPERA CENTER" },
    { date: "NOV 05", city: "ARIS", venue: "OPERA CENTER" },
    { date: "NOV 10", city: "AMSTERDAM", venue: "OPERA CENTER" },
];

export const EventSchedule = () => {
    return (
        <section className="py-24 bg-black">
            <div className="container mx-auto px-8 flex flex-col md:flex-row gap-20">
                <div className="md:w-1/3">
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-white text-3xl font-bold tracking-tight"
                    >
                        EVENT <br /> SCHEDULE
                    </motion.h2>
                </div>

                <div className="md:w-2/3">
                    <div className="grid grid-cols-3 pb-6 border-b border-white/10 text-white/40 text-[10px] font-bold tracking-widest uppercase">
                        <div>DATE</div>
                        <div>CITY</div>
                        <div>VENUE</div>
                    </div>

                    <div className="space-y-0">
                        {schedule.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="grid grid-cols-3 py-6 border-b border-white/5 group cursor-pointer hover:bg-white/5 transition-colors px-4 -mx-4"
                            >
                                <div className="text-white font-bold text-sm">{item.date}</div>
                                <div className="text-white/60 text-sm group-hover:text-white transition-colors">{item.city}</div>
                                <div className="text-white/60 text-sm group-hover:text-white transition-colors uppercase tracking-widest">{item.venue}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
