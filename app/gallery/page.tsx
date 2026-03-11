"use client"

import { NeonGradientCard } from "@/components/ui/neon-gradient-card"
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useState, useRef, useEffect } from "react"

// Types
interface GalleryImage {
  id: number
  src: string
  title: string
  category: string
  date: string
  location: string
  featured: boolean
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  })

  // Professional gallery images with categories
  const galleryImages: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=1200&auto=format",
      title: "Elegant Wedding Gala",
      category: "Wedding",
      date: "2024",
      location: "Grand Ballroom, NYC",
      featured: true
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1505236858219-8359eb29e329?w=1200&auto=format",
      title: "Corporate Summit",
      category: "Corporate",
      date: "2024",
      location: "Convention Center, SF",
      featured: true
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=1200&auto=format",
      title: "Summer Music Festival",
      category: "Concert",
      date: "2024",
      location: "Central Park, NYC",
      featured: false
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?w=1200&auto=format",
      title: "Luxury Birthday Celebration",
      category: "Private Event",
      date: "2023",
      location: "Rooftop Lounge, LA",
      featured: true
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&auto=format",
      title: "Annual Awards Ceremony",
      category: "Corporate",
      date: "2024",
      location: "The Plaza, NYC",
      featured: false
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=1200&auto=format",
      title: "Rock The Night",
      category: "Concert",
      date: "2024",
      location: "Stadium, Chicago",
      featured: true
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?w=1200&auto=format",
      title: "Gourmet Food Festival",
      category: "Festival",
      date: "2023",
      location: "Waterfront, Miami",
      featured: false
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=1200&auto=format",
      title: "Royal Wedding Reception",
      category: "Wedding",
      date: "2024",
      location: "Castle Estate, UK",
      featured: true
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&auto=format",
      title: "Tech Innovation Summit",
      category: "Corporate",
      date: "2024",
      location: "Convention Center, Austin",
      featured: true
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1531058020387-3be344556be6?w=1200&auto=format",
      title: "Fashion Week Afterparty",
      category: "Fashion",
      date: "2024",
      location: "Soho, NYC",
      featured: false
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=1200&auto=format",
      title: "New Year's Eve Gala",
      category: "Celebration",
      date: "2023",
      location: "Times Square, NYC",
      featured: true
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1429962714451-bb934ecdc4ec?w=1200&auto=format",
      title: "International Music Awards",
      category: "Awards",
      date: "2024",
      location: "Microsoft Theater, LA",
      featured: false
    }
  ]

  // Professional branch structure with varying sizes and depths
  const branchLayout = galleryImages.map((_, index) => {
    // Sophisticated algorithm for organic branch distribution
    const position = index / galleryImages.length
    
    // Main trunk (30% of images)
    if (index % 4 === 0) {
      return {
        x: 50 + Math.sin(position * Math.PI * 2) * 5,
        y: 15 + (index * 7) % 70,
        scale: 1.3,
        rotation: Math.sin(index) * 2,
        depth: 3,
        zIndex: 30
      }
    }
    // Left branches (35% of images)
    else if (index % 3 === 0) {
      return {
        x: 30 + Math.cos(position * Math.PI) * 10,
        y: 10 + (index * 6) % 75,
        scale: 1.1,
        rotation: -5 + Math.sin(index) * 3,
        depth: 2,
        zIndex: 20
      }
    }
    // Right branches (35% of images)
    else {
      return {
        x: 70 + Math.sin(position * Math.PI) * 10,
        y: 20 + (index * 5) % 70,
        scale: 1.15,
        rotation: 5 + Math.cos(index) * 3,
        depth: 2,
        zIndex: 20
      }
    }
  })

  // Professional equalizer component
  const ProfessionalEqualizer = () => {
    const bars = [60, 85, 45, 95, 70, 100, 55, 90, 65, 80]
    
    return (
      <div className="flex items-end justify-center space-x-1 h-32">
        {bars.map((height, i) => {
          const springHeight = useSpring(20, { stiffness: 100, damping: 10 })
          
          useEffect(() => {
            const interval = setInterval(() => {
              springHeight.set(20 + Math.random() * (height - 20))
            }, 200 + i * 50)
            return () => clearInterval(interval)
          }, [springHeight, i, height])

          return (
            <motion.div
              key={i}
              className="w-1.5 bg-gradient-to-t from-primary/60 to-primary rounded-full"
              style={{ 
                height: springHeight,
                boxShadow: "0 0 20px rgba(var(--primary-rgb), 0.3)"
              }}
            />
          )
        })}
      </div>
    )
  }

  // Category filter chips
  const categories = ["All", "Wedding", "Corporate", "Concert", "Festival", "Private Event"]
  const [activeCategory, setActiveCategory] = useState("All")

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section with Professional Equalizer */}
      <motion.div 
        className="relative h-[60vh] flex items-center justify-center overflow-hidden"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(99,102,241,0.15) 0%, transparent 50%)"
        }}
      >
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <ProfessionalEqualizer />
          </motion.div>
          
          <h1 className="text-xl md:text-4xl font-bold text-white mb-4 tracking-tight">
           Our Events 
            <span className="text-primary ml-4">Memories</span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 text-xl max-w-2xl mx-auto"
          >
            Curating extraordinary moments through professional lenses
          </motion.p>

          {/* Category Filters */}
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="flex flex-wrap justify-center gap-4 mt-12"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-primary text-white shadow-lg shadow-primary/30'
                    : 'bg-white/5 text-gray-300 hover:bg-white/10'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </motion.div> */}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <motion.div 
              className="w-1 h-2 bg-primary rounded-full mt-2"
              animate={{ y: [0, 20, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Gallery Container */}
      <div className="relative max-w-7xl mx-auto px-4 py-20">
        {/* Branch Lines with Parallax */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 1 }}>
          <defs>
            <linearGradient id="branchGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(99,102,241)" stopOpacity="0.2" />
              <stop offset="50%" stopColor="rgb(99,102,241)" stopOpacity="0.1" />
              <stop offset="100%" stopColor="rgb(99,102,241)" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {branchLayout.map((_, i) => {
            if (i < branchLayout.length - 1) {
              return (
                <motion.line
                  key={i}
                  x1={`${branchLayout[i].x}%`}
                  y1={`${branchLayout[i].y}%`}
                  x2={`${branchLayout[i + 1].x}%`}
                  y2={`${branchLayout[i + 1].y}%`}
                  stroke="url(#branchGradient)"
                  strokeWidth="1.5"
                  strokeDasharray="5,5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2, delay: i * 0.05 }}
                />
              )
            }
            return null
          })}
        </svg>

        {/* Gallery Grid with Branch Layout */}
        <div className="relative h-[1800px] md:h-[2200px]">
          <NeonGradientCard className="border-2">
          <AnimatePresence>
            {galleryImages
              .filter(img => activeCategory === "All" || img.category === activeCategory)
              .map((image, index) => {
                const layout = branchLayout[index]
                const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2])
                
                return (
                  <motion.div
                    key={image.id}
                    className="absolute cursor-pointer"
                    style={{
                      left: `${layout.x}%`,
                      top: `${layout.y}%`,
                      x: "-50%",
                      y: "-50%",
                      zIndex: hoveredId === image.id ? 40 : layout.zIndex,
                      scale: hoveredId === image.id ? layout.scale * 1.1 : layout.scale,
                      rotate: layout.rotation,
                    }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: 1, 
                      scale: layout.scale,
                      transition: { 
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 100,
                        damping: 15
                      }
                    }}
                    whileHover={{ 
                      scale: layout.scale * 1.15,
                      rotate: 0,
                      transition: { type: "spring", stiffness: 300 }
                    }}
                    onHoverStart={() => setHoveredId(image.id)}
                    onHoverEnd={() => setHoveredId(null)}
                    onClick={() => setSelectedImage(image)}
                  >
                    {/* Image Card */}
                    <div className="relative group">
                      {/* Glass Morphism Card */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-10" />
                      
                      {/* Image Container */}
                      <div className="relative w-[220px] h-[280px] md:w-[260px] md:h-[340px] rounded-xl overflow-hidden shadow-2xl">
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover transition-transform duration-700 group-hover:scale-110"
                          sizes="(max-width: 768px) 220px, 260px"
                          priority={image.featured}
                        />
                        
                        {/* Overlay Content */}
                        <motion.div 
                          className="absolute inset-0 z-20 p-6 flex flex-col justify-end text-white"
                          initial={{ opacity: 0, y: 20 }}
                          whileHover={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                            <p className="text-xs text-primary font-semibold tracking-wider mb-2">
                              {image.category} • {image.date}
                            </p>
                            <h3 className="text-lg font-bold mb-1">{image.title}</h3>
                            <p className="text-xs text-gray-300 flex items-center">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              {image.location}
                            </p>
                          </div>
                        </motion.div>

                        {/* Featured Badge */}
                        {image.featured && (
                          <div className="absolute top-3 right-3 z-30">
                            <div className="px-2 py-1 bg-primary/90 backdrop-blur-sm text-white text-xs rounded-full">
                              Featured
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Interactive Equalizer Effect */}
                      {hoveredId === image.id && (
                        <motion.div 
                          className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-1"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {[1, 2, 3, 4].map((i) => (
                            <motion.div
                              key={i}
                              className="w-1 bg-primary rounded-full"
                              animate={{
                                height: [4, 12 + i * 3, 4],
                              }}
                              transition={{
                                duration: 0.8,
                                delay: i * 0.1,
                                repeat: Infinity,
                                ease: "easeInOut"
                              }}
                            />
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                )
              })}
          </AnimatePresence>
          </NeonGradientCard>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-primary transition-colors"
              >
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="relative h-[70vh] rounded-xl overflow-hidden">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
                <h2 className="text-3xl font-bold text-white mb-2">{selectedImage.title}</h2>
                <div className="flex items-center space-x-4 text-gray-300">
                  <span className="text-primary font-semibold">{selectedImage.category}</span>
                  <span>•</span>
                  <span>{selectedImage.date}</span>
                  <span>•</span>
                  <span>{selectedImage.location}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Stats */}
      <motion.div 
        className="fixed bottom-8 right-8 bg-white/10 backdrop-blur-lg rounded-lg p-4 border border-white/20 z-40"
        initial={{ x: 100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <div className="text-white text-sm">
          <p className="text-gray-400">Total Events</p>
          <p className="text-2xl font-bold text-primary">{galleryImages.length}</p>
        </div>
        <div className="mt-2 w-full h-1 bg-white/20 rounded-full overflow-hidden">
          <motion.div 
            className="h-full bg-primary"
            initial={{ width: 0 }}
            animate={{ width: "75%" }}
            transition={{ delay: 1.5, duration: 1 }}
          />
        </div>
      </motion.div>
    </div>
  )
}

export default Gallery