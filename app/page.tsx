"use client";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { TourMap } from "@/components/TourMap";
import { ArtistLineup } from "@/components/ArtistLineup";
import { MediaGallery } from "@/components/MediaGallery";
import { EventSchedule } from "@/components/EventSchedule";
import { TheExperience } from "@/components/TheExperience";
import { SocialWall } from "@/components/SocialWall";
import { Footer } from "@/components/footer";
import { AnimatedBeam } from "@/components/ui/animated-beam";
import { useRef } from "react";
import { ComicText } from "@/components/ui/comic-text";
const Home = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fromRef = useRef<HTMLDivElement>(null);
  const toRef = useRef<HTMLDivElement>(null);
  return (
    <main className="min-h-screen bg-black text-white selection:bg-yellow-500/30 selection:text-yellow-500">
      {/* <Header /> */}

      <Hero
        backgroundImage="https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?q=80&w=2000&auto=format&fit=crop"
      />

      {/* <TourMap /> */}
      <div className="relative min-h-[600px] w-full  overflow-hidden   bg-black ">
        <ComicText fontSize={4}>Explore the Night</ComicText>
        <TourMap />
      </div>
      <ArtistLineup />

      <MediaGallery />

      <EventSchedule />

      <TheExperience />

      <SocialWall />

      {/* <Footer /> */}
    </main>
  );
};

export default Home;
