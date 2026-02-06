"use client"

import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Phone,
  Mail,
  MapPin,
  Send,
  User as UserIcon,
  Briefcase,
  MessageSquare,
  Heart
} from "lucide-react"
import { FloatingInput } from "@/components/floating-input"
import { ScrollReveal } from "@/components/scroll-reveal"
import { SectionSeparator } from "@/components/section-separator"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const heroMembers = [
  {
    id: 1,
    name: "Alex Johnson",
    role: "Event Coordinator",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    position: { top: "25%", left: "10%" }
  },
  {
    id: 2,
    name: "Sarah Williams",
    role: "Customer Success",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    position: { top: "65%", left: "15%" }
  },
  {
    id: 3,
    name: "Michael Chen",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop",
    position: { top: "30%", right: "10%" }
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Marketing Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    position: { top: "70%", right: "15%" }
  }
]

const crewMembers = [
  ...heroMembers,
  {
    id: 5,
    name: "Aisha Patel",
    role: "Stage Manager",
    image: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Sound Engineer",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 7,
    name: "Sophia Martinez",
    role: "Visual Designer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 8,
    name: "David Kim",
    role: "Logistics Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop"
  }
]

const ContactMember = ({ member }: { member: any }) => {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="absolute z-20"
      style={member.position}
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.5 + member.id * 0.1, duration: 0.5, type: "spring" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative group cursor-pointer">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border-4 border-white overflow-hidden shadow-lg transition-transform duration-300 group-hover:scale-110">
          <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
        </div>

        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 10, scale: 0.8 }}
              className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-white/95 backdrop-blur-sm p-3 rounded-xl shadow-xl z-30 pointer-events-none"
            >
              <p className="text-gray-900 font-bold text-sm">{member.name}</p>
              <p className="text-[#ff5f6d] text-xs font-medium">{member.role}</p>
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute -top-1 -right-1 w-6 h-6 bg-white rounded-full flex items-center justify-center text-[#ff5f6d] shadow-sm"
        >
          <Heart size={12} fill="currentColor" />
        </motion.div>
      </div>
    </motion.div>
  )
}

const ContactPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData(prev => ({ ...prev, [id]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-transparent">
      {/* --- HERO SECTION --- */}
      <section className="relative h-[60vh] min-h-[500px] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-concert-gradient opacity-20 pointer-events-none [mask-image:linear-gradient(to_bottom,black_70%,transparent)]" />

        {/* Member Avatars */}
        {heroMembers.map(member => (
          <ContactMember key={member.id} member={member} />
        ))}

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <ScrollReveal direction="up">
            <h1 className="text-4xl md:text-7xl font-black text-white mb-6 tracking-tight text-glow">
              Let's <span className="bg-gradient-to-r from-[#ffc371] to-[#ff5f6d] bg-clip-text text-transparent">Connect</span>
            </h1>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
              We're here to help you create the ultimate musical experience. Reach out and let's make magic happen.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <SectionSeparator />
      {/* --- CREW SECTION --- */}
      <section className="relative px-4 pb-10 max-w-7xl mx-auto  ">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight flex items-center justify-center gap-2 ">
            <span className="flex">
              <motion.span
                className="inline-block "
                whileInView={{
                  y: [0, -20, 0],
                  x: [0, 25, 0],
                  rotate: [0, 15, 0]
                }}
                viewport={{ once: false, amount: 0.5 }}
                transition={{
                  duration: 1.2,
                  repeat: Infinity,
                  repeatDelay: 3,
                  ease: "easeInOut"
                }}
              >
                O
              </motion.span>
              <span>ur</span>
            </span>
            <span className="bg-gradient-to-r from-[#805ad5] to-[#4299e1] bg-clip-text text-transparent ml-2">Elite Crew</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The masterminds behind every beat, light, and moment of magic.
          </p>
        </ScrollReveal>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-auto mx-auto px-4 md:px-12"
        >
          <CarouselContent className="-ml-4 md:-ml-8">
            {crewMembers.map((member) => (
              <CarouselItem key={member.id} className="pl-4 md:pl-8 md:basis-1/2 lg:basis-1/4">
                <ScrollReveal delay={member.id * 0.1}>
                  <div className="group [perspective:1000px] w-full aspect-[3/4]">
                    <motion.div
                      className="relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]"
                    >
                      {/* Front Side */}
                      <Card className="absolute inset-0 bg-glass border-none overflow-hidden p-0 [backface-visibility:hidden]">
                        <CardContent className="p-0 h-full">
                          <div className="relative h-full overflow-hidden">
                            <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60" />
                            <div className="absolute bottom-0 left-0 p-6 w-full">
                              <p className="text-white text-xl font-bold mb-0">{member.name}</p>
                              <p className="text-[#ff5f6d] font-medium tracking-wide uppercase text-xs">{member.role}</p>
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Back Side */}
                      <Card className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] to-[#16213e] border border-white/10 overflow-hidden p-0 [backface-visibility:hidden] [transform:rotateY(180deg)] shadow-2xl">
                        <CardContent className="p-0 h-full flex flex-col items-center justify-center text-center p-6">
                          <div className="w-20 h-20 rounded-full border-2 border-[#ff5f6d] overflow-hidden mb-4">
                            <img src={member.image} alt={member.name} className="w-full h-full object-cover scale-110" />
                          </div>
                          <h3 className="text-white text-2xl font-bold mb-2">{member.name}</h3>
                          <div className="w-12 h-1 bg-[#ff5f6d] rounded-full mb-4" />
                          <p className="text-gray-300 text-lg font-medium mb-1">{member.role}</p>
                          <p className="text-gray-500 text-sm mt-4 italic">"Expert in creating unforgettable experiences"</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </div>
                </ScrollReveal>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-glass border-none text-white hover:bg-white/10" />
          <CarouselNext className="hidden md:flex -right-4 bg-glass border-none text-white hover:bg-white/10" />
        </Carousel>
      </section>
      <h2 className="text-3xl font-bold text-white mb-0 flex items-center gap-4 px-36 mb-6">
        <span className="w-10 h-1 bg-[#ff5f6d] rounded-full" />
        Our Location
      </h2>
      {/* --- CONTENT SECTION --- */}
      <section className="relative z-20 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">

          {/* Left Column: Map */}
          <div className="space-y-0 h-full">
            <ScrollReveal direction="left">

              <div className="w-full h-[500px] rounded-xl overflow-hidden  border-white/5 shadow-2xl contrast-125 brightness-65 ">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.2528082187!2d-74.11976373988643!3d40.69740344223377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Form Card */}
          <ScrollReveal
            direction="right"
            className="
    rounded-2xl
    p-4 md:p-6
    bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(255,255,255,0.02))]
    backdrop-blur-xl
    border border-white/10
    shadow-[0_20px_60px_rgba(0,0,0,0.45)]
  "
          >


            {/* Form Header */}
            <div className="mb-4">
              <h3 className="text-2xl font-semibold text-white tracking-tight">
                Get in Touch
              </h3>
              <p className="mt-2 text-sm text-white/70 leading-relaxed">
                Planning a concert or live event? Share your details and our team will get
                back to you shortly.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <FloatingInput
                  id="firstName"
                  label="First Name"
                  icon={UserIcon}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />

                <FloatingInput
                  id="lastName"
                  label="Last Name"
                  icon={Briefcase}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              {/* Email */}
              <FloatingInput
                id="email"
                label="Email Address"
                type="email"
                icon={Mail}
                value={formData.email}
                onChange={handleChange}
                required
              />

              {/* Message */}
              <FloatingInput
                id="message"
                label="Tell us about your event"
                isTextArea
                icon={MessageSquare}
                value={formData.message}
                onChange={handleChange}
                required
              />

              {/* Submit */}
              <div className="pt-4">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="
            w-full py-4 rounded-lg
            bg-concert-gradient
            text-white text-sm font-semibold uppercase tracking-wider
            flex items-center justify-center gap-3
            shadow-lg shadow-[#ff5f6d]/20
            hover:shadow-[#ff5f6d]/40
            transition-all duration-300
          "
                >
                  <Send size={18} />
                  Send Enquiry
                </motion.button>

                <p className="mt-3 text-xs text-white/50 text-center">
                  We respect your privacy. Your information is safe with us.
                </p>
              </div>
            </form>
          </ScrollReveal>

        </div>
      </section>

      {/* --- QUICK CONTACT SECTION --- */}
      <section className="relative px-4 pb-16 max-w-6xl mx-auto overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Phone Card */}
          <motion.div
            variants={{
              hidden: { x: "-100vw", opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            // whileHover={{ y: -5 }}
            className="group flex items-center gap-6 p-6 bg-gradient-to-br from-[#ff5f6d]/20 to-white/5 backdrop-blur-md rounded-xl border border-[#ff5f6d]/20 hover:border-[#ff5f6d]/40 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-[#ff5f6d]/20 text-[#ff5f6d] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shrink-0">
              <Phone size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
              <p className="text-[#ffc371] font-bold">+1 (555) 123-4567</p>
            </div>
          </motion.div>

          {/* Email Card */}
          <motion.div
            variants={{
              hidden: { x: "-100vw", opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            // whileHover={{ y: -5 }}
            className="group flex items-center gap-6 p-6 bg-gradient-to-br from-[#4299e1]/20 to-white/5 backdrop-blur-md rounded-xl border border-[#4299e1]/20 hover:border-[#4299e1]/40 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-[#4299e1]/20 text-[#4299e1] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shrink-0">
              <Mail size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Email</h3>
              <a href="mailto:hello@concert.app" className="text-[#4299e1] font-bold hover:underline">hello@concert.app</a>
            </div>
          </motion.div>

          {/* Address Card */}
          <motion.div
            variants={{
              hidden: { x: "-100vw", opacity: 0 },
              visible: {
                x: 0,
                opacity: 1,
                transition: { duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }
              }
            }}
            // whileHover={{ y: -5 }}
            className="group flex items-center gap-6 p-6 bg-gradient-to-br from-[#805ad5]/20 to-white/5 backdrop-blur-md rounded-xl border border-[#805ad5]/20 hover:border-[#805ad5]/40 transition-all duration-500"
          >
            <div className="w-14 h-14 bg-[#805ad5]/20 text-[#805ad5] rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 shrink-0">
              <MapPin size={28} />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white mb-1">Main Office</h3>
              <p className="text-white text-sm font-medium">709 Broadway, NY</p>
            </div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}

export default ContactPage
