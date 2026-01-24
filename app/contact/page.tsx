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
      <section className="relative h-[70vh] min-h-[600px] w-full flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-concert-gradient opacity-20 pointer-events-none [mask-image:linear-gradient(to_bottom,black_70%,transparent)]" />

        {/* Member Avatars */}
        {heroMembers.map(member => (
          <ContactMember key={member.id} member={member} />
        ))}

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <ScrollReveal direction="up">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-6 tracking-tight text-glow">
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

      {/* --- CONTENT SECTION --- */}
      <section className="relative z-20 pb-20 px-4 md:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Column: Contact Info */}
          <div className="space-y-12">
            <ScrollReveal direction="left">
              <h2 className="text-4xl font-bold text-white mb-12 flex items-center gap-4">
                <span className="w-12 h-1 bg-[#ff5f6d] rounded-full" />
                Get in touch
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-8">
                {/* Phone */}
                <ScrollReveal direction="left" delay={0.1} className="flex gap-6 items-start p-6 bg-glass rounded-[2rem] hover:bg-white/15 transition-all">
                  <div className="p-4 bg-[#ff5f6d]/20 text-[#ff5f6d] rounded-2xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-gray-400 text-sm">Mon-Fri, 9am - 6pm EST</p>
                    <p className="text-[#ffc371] font-medium mt-1">+1 (555) 123-4567</p>
                  </div>
                </ScrollReveal>

                {/* Email */}
                <ScrollReveal direction="left" delay={0.2} className="flex gap-6 items-start p-6 bg-glass rounded-[2rem] hover:bg-white/15 transition-all">
                  <div className="p-4 bg-[#4299e1]/20 text-[#4299e1] rounded-2xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <div className="flex flex-col gap-1 text-[#ff5f6d] font-medium">
                      <a href="mailto:hello@concert.app" className="hover:underline">hello@concert.app</a>
                    </div>
                  </div>
                </ScrollReveal>

                {/* Address */}
                <ScrollReveal direction="left" delay={0.3} className="flex gap-6 items-start p-6 bg-glass rounded-[2rem] hover:bg-white/15 transition-all">
                  <div className="p-4 bg-[#805ad5]/20 text-[#805ad5] rounded-2xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-1">Main Office</h3>
                    <p className="text-gray-400 text-sm">709 Broadway Road, Manhattan, NY</p>
                  </div>
                </ScrollReveal>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Form Card */}
          <ScrollReveal direction="right" className="bg-glass rounded-[3rem] p-8 md:p-12 border border-white/10 shadow-3xl">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <FloatingInput
                  id="firstName"
                  label="First name"
                  icon={UserIcon}
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                />
                <FloatingInput
                  id="lastName"
                  label="Last name"
                  icon={Briefcase}
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                />
              </div>

              <FloatingInput
                id="email"
                label="Email address"
                type="email"
                icon={Mail}
                value={formData.email}
                onChange={handleChange}
                required
              />

              <FloatingInput
                id="message"
                label="Tell us about your event"
                isTextArea
                icon={MessageSquare}
                value={formData.message}
                onChange={handleChange}
                required
              />

              <motion.button
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-5 bg-concert-gradient text-white font-black text-lg rounded-2xl shadow-2xl shadow-[#ff5f6d]/30 hover:shadow-[#ff5f6d]/50 transition-all duration-300 flex items-center justify-center gap-3 uppercase tracking-wider"
              >
                <Send size={24} />
                Beam Message
              </motion.button>
            </form>
          </ScrollReveal>
        </div>
      </section>

      {/* --- MAP SECTION --- */}
      <section className="relative px-4 pb-10 w-[92vw] mx-auto">
        <ScrollReveal direction="bottom">
          <div className="w-full h-[500px] rounded-[2rem] overflow-hidden border-8 border-white/5 shadow-2xl   contrast-125">
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
      </section>

      {/* --- CREW SECTION --- */}
      <section className="relative px-4 pb-10 max-w-7xl mx-auto overflow-hidden">
        <ScrollReveal direction="up" className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-4 tracking-tight">
            Our <span className="bg-gradient-to-r from-[#805ad5] to-[#4299e1] bg-clip-text text-transparent">Elite Crew</span>
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
                  <Card className="bg-glass border-none overflow-hidden group hover:scale-[1.02] transition-transform duration-500 p-0">
                    <CardContent className="p-0">
                      <div className="relative aspect-[3/4] overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                        <div className="absolute bottom-0 left-0 p-8 w-full transform translate-y-2 group-hover:translate-y-0 transition-transform">
                          <p className="text-white text-2xl font-bold mb-1">{member.name}</p>
                          <p className="text-[#ff5f6d] font-medium tracking-wide uppercase text-sm">{member.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-glass border-none text-white hover:bg-white/10" />
          <CarouselNext className="hidden md:flex -right-4 bg-glass border-none text-white hover:bg-white/10" />
        </Carousel>
      </section>
    </div>
  )
}

export default ContactPage
