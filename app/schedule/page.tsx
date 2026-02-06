"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useState } from "react";

/* =======================
   ARTIST DATA
======================= */
const artists = [
  {
    name: "Arijit Singh",
    image: "/ar.png",
    vibe: "The voice that turns emotions into unforgettable melodies.",
  },

  {
    name: "Armaan Malik",
    image: "/arman.jpg",
    vibe: "Romantic pop anthems that rule hearts across generations.",
  },

  {
    name: "Anirudh & Jonita",
    image: "/ani-rudh.png",
    vibe: "High-energy beats blended with soulful vocals.",
  },

  {
    name: "Sunidhi Chauhan",
    image: "/Sunidhi_Chauhan_1714886347721_1714886358592.webp",
    vibe: "Power-packed vocals that set every stage on fire.",
  },

  {
    name: "Imran Khan",
    image: "/ik.jpg",
    vibe: "Global Punjabi vibes with iconic chartbusters.",
  },

  {
    name: "Shubh",
    image: "/Shubh.jpg",
    vibe: "Modern Punjabi sound with worldwide appeal.",
  },

  {
    name: "Darshan Raval",
    image: "/Singer-Darshan-Raval-Wallpaper-HD-55181.jpg",
    vibe: "Heartfelt melodies with a youthful charm.",
  },
];

/* =======================
   PAGE
======================= */
const SchedulePage = () => {
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (name: string) => {
    setFavorites((prev) =>
      prev.includes(name) ? prev.filter((n) => n !== name) : [...prev, name],
    );
  };

  return (
    <div className="bg-[#07070a] text-white overflow-hidden">
      {/* =======================
          GUESS THE ARTIST
      ======================== */}
      <section className="relative min-h-screen flex items-center">
        {" "}
        {/* Background */}{" "}
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a0f2e] via-[#07070a] to-[#120b1f]" />{" "}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(168,85,247,0.18),transparent_55%)]" />{" "}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,rgba(236,72,153,0.12),transparent_55%)]" />{" "}
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">
          {" "}
          {/* Header */}{" "}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-16"
          >
            {" "}
            <div>
              {" "}
              <p className="text-xs uppercase tracking-widest text-pink-400 mb-2">
                {" "}
                Live Concert Experience{" "}
              </p>{" "}
              <h1 className="text-3xl md:text-4xl font-semibold">
                {" "}
                Guess The Next Headliner{" "}
              </h1>{" "}
            </div>{" "}
            <div className="text-sm text-gray-400">
              {" "}
              📅 Expected Timeline:{" "}
              <span className="text-white font-medium">
                {" "}
                Aug – Nov 2026{" "}
              </span>{" "}
            </div>{" "}
          </motion.div>{" "}
          {/* Divider */}{" "}
          <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent mb-16" />{" "}
          {/* Content */}{" "}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {" "}
            {/* Mystery Card */}{" "}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 shadow-[0_0_80px_rgba(168,85,247,0.15)]"
            >
              {" "}
              <p className="text-sm uppercase tracking-widest text-gray-400 mb-6">
                {" "}
                Headliner Reveal{" "}
              </p>{" "}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ repeat: Infinity, duration: 2.5 }}
                className="text-[140px] font-bold leading-none text-transparent bg-clip-text bg-gradient-to-b from-purple-300 via-pink-300 to-purple-500"
              >
                {" "}
                ?{" "}
              </motion.div>{" "}
              <p className="mt-6 text-gray-300 max-w-sm">
                {" "}
                A world-class performer is set to headline our next live
                concert. The reveal is coming soon.{" "}
              </p>{" "}
              <p className="mt-4 text-sm text-gray-400">
                {" "}
                <span className="text-pink-400 font-medium">Hint:</span>{" "}
                Chart-topping hits. Stadium-level energy.{" "}
              </p>{" "}
              <motion.button
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                className="mt-10 px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 text-white font-medium shadow-lg hover:shadow-pink-500/30"
              >
                {" "}
                Guess The Artist{" "}
              </motion.button>{" "}
            </motion.div>{" "}
            {/* Event Details */}{" "}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="space-y-8"
            >
              {" "}
              <div>
                {" "}
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-1">
                  {" "}
                  Location{" "}
                </p>{" "}
                <p className="text-lg">
                  To Be Announced · Major City Arena
                </p>{" "}
              </div>{" "}
              <div>
                {" "}
                <p className="text-xs uppercase tracking-widest text-gray-500 mb-3">
                  {" "}
                  Music Style{" "}
                </p>{" "}
                <div className="flex flex-wrap gap-3">
                  {" "}
                  {["Live Band", "Pop", "EDM", "Punjabi", "Bollywood"].map(
                    (g) => (
                      <span
                        key={g}
                        className="px-4 py-1 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300"
                      >
                        {" "}
                        {g}{" "}
                      </span>
                    ),
                  )}{" "}
                </div>{" "}
              </div>{" "}
              <p className="text-gray-400 text-sm max-w-md">
                {" "}
                Experience world-class sound, lighting and stage production in a
                night designed for true music lovers.{" "}
              </p>{" "}
              <button className="text-pink-400 hover:text-pink-300 text-sm font-medium">
                {" "}
                Join the waitlist →{" "}
              </button>{" "}
            </motion.div>{" "}
          </div>{" "}
        </div>{" "}
      </section>

      {/* =======================
          VOTE YOUR ARTIST
      ======================== */}
      <section className="relative py-28 px-6">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-900/10 to-black" />

        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold text-center mb-14">
            Vote Your Favorite Artist
          </h2>

          {/* GRID */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-8">
            {artists.map((artist, i) => {
              const isFav = favorites.includes(artist.name);

              return (
                <motion.div
                  key={artist.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -8 }}
                  className="relative group"
                >
                  {/* BACK GLOW */}
                  <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-purple-500/30 via-pink-500/20 to-blue-500/30 blur-2xl opacity-70 group-hover:opacity-100 transition" />

                  {/* CARD */}
                  <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden">
                    {/* IMAGE SPACE */}
                    <div className="relative h-50 bg-gradient-to-br from-[#1a0f2e] to-[#07070a] overflow-hidden ">
                      {artist.image && (
                        <motion.img
                          src={artist.image}
                          alt={artist.name}
                          className="w-full h-full p-3 object-cover rounded-md "
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                        />
                      )}

                      {/* FAVORITE */}
                      <motion.button
                        whileTap={{ scale: 0.8 }}
                        onClick={() => toggleFavorite(artist.name)}
                        className="absolute top-3 right-3 p-2 rounded-full bg-black/50"
                      >
                        <Heart
                          className={`w-4 h-4 transition ${isFav ? "fill-red-500 text-red-500" : "text-white"
                            }`}
                        />
                      </motion.button>
                    </div>

                    {/* CONTENT */}
                    <div className="p-4 text-center">
                      <h3 className="text-sm font-semibold mb-1">
                        {artist.name}
                      </h3>
                      <p className="text-xs text-gray-400 mb-4 leading-relaxed">
                        {artist.vibe}
                      </p>

                      <motion.button
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-full py-2 text-sm rounded-full bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 shadow-md"
                      >
                        Vote
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default SchedulePage;