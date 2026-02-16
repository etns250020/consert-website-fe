"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import {
  Music,
  Calendar,
  MapPin,
  Users,
  Star,
  ChevronRight,
} from "lucide-react";
import { DotPattern } from "@/components/ui/dot-pattern";
import { Globe } from "@/components/magicui/globe";
import { VideoText } from "@/components/ui/video-text";
import { cn } from "@/lib/utils";

const Home = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const featuredEvents = [
    {
      id: 1,
      title: "Electric Sky Festival",
      date: "June 15-17, 2023",
      location: "Los Angeles, CA",
      image: "/api/placeholder/400/300",
      category: "festival",
      featured: true,
    },
    {
      id: 2,
      title: "Neon Dreams Concert",
      date: "July 22, 2023",
      location: "New York, NY",
      image: "/api/placeholder/400/300",
      category: "concert",
      featured: true,
    },
    {
      id: 3,
      title: "Bass Revolution",
      date: "August 5, 2023",
      location: "Miami, FL",
      image: "/api/placeholder/400/300",
      category: "electronic",
      featured: true,
    },
    {
      id: 4,
      title: "Symphony Nights",
      date: "September 12, 2023",
      location: "Chicago, IL",
      image: "/api/placeholder/400/300",
      category: "classical",
      featured: false,
    },
  ];

  const eventCategories = [
    { id: "all", label: "All Events" },
    { id: "concert", label: "Concerts" },
    { id: "festival", label: "Festivals" },
    { id: "electronic", label: "Electronic" },
    { id: "classical", label: "Classical" },
  ];

  const filteredEvents =
    activeFilter === "all"
      ? featuredEvents
      : featuredEvents.filter((event) => event.category === activeFilter);

  return (
    <div className=" min-h-screen relative bg-black text-white overflow-x-hidden w-full">
      {/* Animated Dot Pattern Background */}
      <DotPattern
        className={cn(
          "[mask-image:radial-gradient(1900px_circle_at_center,white,transparent)]",
        )}
      />

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden py-20">
        <div className="container px-4 md:px-6 z-10 flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute -top-10 md:-top-20 z-0 opacity-50"
          >
            <Globe className="w-[300px] h-[300px] md:w-[600px] md:h-[600px] mt-30" />
          </motion.div>

          <div className="relative z-10 space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <VideoText
                src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNHJieHhzZnJ6ZHJ6ZHJ6ZHJ6ZHJ6ZHJ6ZHJ6ZHJ6ZHJ6ZHJ6ZHJ6JmVwPXYxX2ludGVybmFsX2dpZl9ieV9pZCZjdD1n/3o7TKMGpxxWlVQVPhK/giphy.mp4"
                className="font-bold tracking-tighter"
                fontSize={12}
              >
                VIBE EVENTS
              </VideoText>
            </motion.div>

            <motion.h1
              className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Experience The Ultimate
              <br />
              <span className="text-white">Concert Revolution</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="max-w-[700px] mx-auto text-gray-400 text-lg md:text-xl"
            >
              Where cutting-edge technology meets world-class production for an unforgettable musical journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 justify-center pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg flex items-center justify-center gap-2 shadow-lg shadow-purple-500/25"
              >
                Explore Events <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Our Services
              </motion.button>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Featured Events Section */}
      <section className="relative py-24 z-10 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured
            </span>{" "}
            <span className="text-white">Events</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-light">
            Discover the most anticipated concerts and festivals curated for the
            ultimate music experience.
          </p>
        </motion.div>

        {/* Event Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {eventCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-8 py-3 rounded-full font-medium transition-all ${activeFilter === category.id
                ? "bg-gradient-to-r from-purple-600 to-pink-600 shadow-lg shadow-purple-500/20"
                : "bg-white/5 border border-white/10 hover:bg-white/10"
                }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className={`group relative bg-white/5 backdrop-blur-sm rounded-3xl overflow-hidden border border-white/10 cursor-pointer ${event.featured ? "md:col-span-2 md:row-span-2" : ""
                }`}
            >
              <div className="relative h-64 overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-pink-900/40 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                  <Music className="w-16 h-16 text-white/20" />
                </div>
                {event.featured && (
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-extrabold px-4 py-1.5 rounded-full text-xs tracking-widest uppercase">
                    FEATURED
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="px-8 py-3 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors shadow-xl">
                    Get Tickets
                  </button>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {event.title}
                </h3>
                <div className="flex flex-col gap-2 text-gray-400 text-sm mb-6">
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-2 text-purple-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 mr-2 text-pink-500" />
                    <span>{event.location}</span>
                  </div>
                </div>
                <div className="flex justify-between items-center pt-4 border-t border-white/5">
                  <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors flex items-center group/btn">
                    More Info <ChevronRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                  <div className="flex items-center bg-white/5 px-2 py-1 rounded-lg">
                    <Star className="w-3 h-3 text-yellow-500 mr-1 fill-yellow-500" />
                    <span className="text-xs font-bold">4.8</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-24 z-10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "500+",
                label: "Events Organized",
                icon: <Calendar className="w-6 h-6" />,
              },
              {
                value: "1M+",
                label: "Happy Attendees",
                icon: <Users className="w-6 h-6" />,
              },
              {
                value: "50+",
                label: "Cities",
                icon: <MapPin className="w-6 h-6" />,
              },
              {
                value: "100+",
                label: "Top Artists",
                icon: <Star className="w-6 h-6" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="inline-block p-5 bg-white/5 rounded-3xl mb-6 group-hover:scale-110 group-hover:bg-purple-600/20 transition-all duration-300">
                  <div className="text-purple-400">{stat.icon}</div>
                </div>
                <div className="text-5xl font-bold mb-2 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-500 font-medium tracking-wide uppercase text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-32 z-10 px-4 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20 p-16 md:p-24 border border-white/10 shadow-3xl"
        >
          {/* Decorative glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-600/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
              Ready to Create an
              <br />
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Unforgettable Event?
              </span>
            </h2>
            <p className="text-gray-400 text-xl mb-12 max-w-2xl mx-auto font-light leading-relaxed">
              Join forces with us to bring your creative vision to life with world-class planning and production.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-xl shadow-2xl shadow-purple-600/20"
              >
                Contact Our Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-white/5 backdrop-blur-xl border border-white/10 rounded-full font-bold text-xl hover:bg-white/10 transition-all font-outfit"
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;
