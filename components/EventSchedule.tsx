"use client";

import { motion } from "framer-motion";
import { Globe } from "@/components/magicui/globe"
import { ComicText } from "./ui/comic-text";

const schedule = [
    { date: "OCT 21", city: "PRAGUE", venue: "OPERA CENTER" },
    { date: "OCT 25", city: "MILANO", venue: "OPERA CENTER" },
    { date: "OCT 30", city: "LONDON", venue: "OPERA CENTER" },
    { date: "NOV 05", city: "ARIS", venue: "OPERA CENTER" },
    { date: "NOV 10", city: "AMSTERDAM", venue: "OPERA CENTER" },
];

export const EventSchedule = () => {
    return (
        <section className="py-10 min-h-[90vh] bg-black relative overflow-hidden flex items-center ">
            {/* Background Globe with mask */}
            {/* <div className="absolute inset-0 z-0 opacity-50 [mask-image:radial-gradient(circle_at_center,black_30%,transparent_70%)] pointer-events-none">
                <div className="scale-110 translate-y-20 ">
                    <Globe />
                </div>
            </div> */}

            <div className="container relative z-10 mx-auto px-6 md:px-12">
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
                    {/* Section Header */}
                    <div className="lg:w-1/3 flex flex-col relative left-[-5%]">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <ComicText fontSize={4}>EVENT SCHEDULE</ComicText>

                        </motion.div>
                    </div>

                    {/* Schedule List */}
                    <div className="lg:w-2/3">
                        <div className="grid grid-cols-[100px_1fr_1fr] pb-4 border-b border-white/10 text-white/30 text-[10px] font-black tracking-[0.4em] uppercase px-4">
                            <div>DATE</div>
                            <div>CITY</div>
                            <div>VENUE</div>
                        </div>

                        <div className="mt-4">
                            {schedule.map((item, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.1, duration: 0.5 }}
                                    className="grid grid-cols-[100px_1fr_1fr] py-6 border-b border-white/5 group cursor-pointer hover:bg-white/[0.03] transition-all duration-500 px-6 -mx-6 rounded-xl relative overflow-hidden backdrop-blur-[2px]"
                                >
                                    {/* Hover Left Indicator */}
                                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[2px] h-0 group-hover:h-3/4 bg-[#eab308] transition-all duration-500 shadow-[0_0_10px_#eab308]" />

                                    {/* Date */}
                                    <div className="text-[#eab308] font-serif italic text-xl tracking-tighter self-center group-hover:scale-110 transition-transform duration-500 origin-left">
                                        {item.date}
                                    </div>

                                    {/* City */}
                                    <div className="text-white font-bold text-lg tracking-[0.1em] self-center group-hover:translate-x-2 transition-transform duration-500">
                                        {item.city}
                                    </div>

                                    {/* Venue */}
                                    <div className="text-white/50 text-xs tracking-[0.2em] uppercase self-center group-hover:text-white transition-colors duration-500 italic text-right md:text-left">
                                        {item.venue}
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Additional Info / Footer */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.6 }}
                            className="mt-8 text-center lg:text-left"
                        >
                            <p className="text-white/20 text-[10px] tracking-widest uppercase">
                                * More dates to be announced soon
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
