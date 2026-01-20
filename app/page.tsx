"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  Play,
  Music,
  Calendar,
  MapPin,
  Users,
  Star,
  ChevronRight,
  Menu,
  X,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
} from "lucide-react";

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    "Home",
    "Events",
    "Artists",
    "Gallery",
    "Services",
    "Contact",
  ];
  // Featured events data
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

  // Filter events based on active category
  const filteredEvents =
    activeFilter === "all"
      ? featuredEvents
      : featuredEvents.filter((event) => event.category === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Navigation */}
      {/* <nav className="fixed top-0 w-full z-50 px-6 py-4 bg-black/80 backdrop-blur-md"> */}
      
      {/* Hero Section with Video Background */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          {/* This would be your high-quality AI generated concert video */}

          <div>
            <img src="/textImg.jpg" alt="" />
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
              initial={{ opacity: 0, y: -120 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 90,
                damping: 6,
                mass: 0.8,
              }}
            >
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                EXPERIENCE
              </span>
              <br />
              <span className="text-white">THE ULTIMATE</span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                CONCERT VIBE
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-10 max-w-3xl mx-auto"
            >
              We create unforgettable musical experiences with world-class
              production, cutting-edge technology, and immersive atmospheres.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg flex items-center justify-center gap-2"
              >
                Explore Events <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
              >
                Our Services
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </motion.div>
      </section>

      {/* Featured Events Section */}
      <section
        className="py-20 px-4 max-w-7xl mx-auto bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/testingImg2.jpg')" }}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured
            </span>{" "}
            <span className="text-white">Events</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Discover the most anticipated concerts and festivals curated for the
            ultimate music experience
          </p>
        </motion.div>

        {/* Event Categories Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {eventCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600"
                  : "bg-white/10 hover:bg-white/20"
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
              className={`bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 group cursor-pointer ${
                event.featured ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <div className="relative h-64 overflow-hidden">
                {/* Event image placeholder */}
                <div className="w-full h-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 flex items-center justify-center">
                  <Music className="w-20 h-20 text-white/30" />
                </div>
                {event.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-500 to-orange-500 text-black font-bold px-3 py-1 rounded-full text-sm">
                    FEATURED
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <button className="px-6 py-3 bg-white rounded-full font-bold text-black hover:bg-gray-200 transition-colors">
                    Get Tickets
                  </button>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                <div className="flex items-center text-gray-400 text-sm mb-4">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>{event.date}</span>
                  <MapPin className="w-4 h-4 ml-4 mr-2" />
                  <span>{event.location}</span>
                </div>
                <div className="flex justify-between items-center">
                  <button className="text-purple-400 font-semibold hover:text-purple-300 transition-colors flex items-center">
                    More Info <ChevronRight className="w-4 h-4 ml-1" />
                  </button>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 text-yellow-500 mr-1" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                value: "500+",
                label: "Events Organized",
                icon: <Calendar className="w-8 h-8" />,
              },
              {
                value: "1M+",
                label: "Happy Attendees",
                icon: <Users className="w-8 h-8" />,
              },
              {
                value: "50+",
                label: "Cities",
                icon: <MapPin className="w-8 h-8" />,
              },
              {
                value: "100+",
                label: "Top Artists",
                icon: <Star className="w-8 h-8" />,
              },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-white/10 rounded-2xl mb-4">
                  <div className="text-purple-400">{stat.icon}</div>
                </div>
                <div className="text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-purple-900/30 via-black to-pink-900/30 p-12 border border-gray-800"
        >
          {/* Animated background elements */}
          <div className="absolute -top-20 -right-20 w-60 h-60 bg-purple-600/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-pink-600/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Create an
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                {" "}
                Unforgettable Event?
              </span>
            </h2>
            <p className="text-gray-400 text-xl mb-10 max-w-2xl mx-auto">
              Let's work together to bring your vision to life with our expert
              event planning and production services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-bold text-lg"
              >
                Contact Our Team
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white/10 backdrop-blur-sm rounded-full font-bold text-lg hover:bg-white/20 transition-colors"
              >
                View Our Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Home;

// {/* Footer */}
// <footer className="bg-black border-t border-gray-900 pt-12 pb-8 px-4">
//   <div className="max-w-7xl mx-auto">
//     <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
//       <div>
//         <div className="flex items-center space-x-2 mb-6">
//           <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
//             <Music className="w-6 h-6" />
//           </div>
//           <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
//             VIBE<span className="text-white">EVENTS</span>
//           </span>
//         </div>
//         <p className="text-gray-400 mb-6">
//           Creating unforgettable concert experiences through innovation, passion, and cutting-edge production.
//         </p>
//         <div className="flex space-x-4">
//           {[Facebook, Twitter, Instagram, Youtube].map((Icon, index) => (
//             <motion.a
//               key={index}
//               whileHover={{ y: -5 }}
//               href="#"
//               className="w-10 h-10 bg-gray-900 rounded-full flex items-center justify-center hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 transition-all"
//             >
//               <Icon className="w-5 h-5" />
//             </motion.a>
//           ))}
//         </div>
//       </div>

//       {[
//         {
//           title: "Quick Links",
//           links: ["Home", "Events", "Artists", "Services", "Gallery", "Contact"]
//         },
//         {
//           title: "Services",
//           links: ["Event Planning", "Stage Production", "Audio/Visual", "Marketing", "Ticketing", "VIP Services"]
//         },
//         {
//           title: "Contact",
//           links: ["hello@vibeevents.com", "+1 (555) 123-4567", "123 Concert Ave, Los Angeles, CA"]
//         }
//       ].map((column, index) => (
//         <div key={index}>
//           <h3 className="text-xl font-bold mb-6">{column.title}</h3>
//           <ul className="space-y-4">
//             {column.links.map((link, idx) => (
//               <li key={idx}>
//                 <a href="#" className="text-gray-400 hover:text-white transition-colors">
//                   {link}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       ))}
//     </div>

//     <div className="pt-8 border-t border-gray-900 text-center text-gray-500">
//       <p>&copy; {new Date().getFullYear()} VIBE EVENTS. All rights reserved. | Designed with ❤️ for music lovers worldwide</p>
//     </div>
//   </div>
// </footer>
