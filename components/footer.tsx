"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Twitter, Instagram, Youtube, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="pt-24 pb-12 bg-black border-t border-white/10">
      <div className="container mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-24">
          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-sm tracking-widest mb-6 uppercase">Explore</h4>
            <ul className="space-y-4">
              {["Home", "Performances", "VIP Experience", "Gallery"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/40 hover:text-white transition-colors text-xs font-semibold tracking-wide">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-sm tracking-widest mb-6 uppercase">Support</h4>
            <ul className="space-y-4">
              {["Connect", "Events", "Places", "Documentation"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/40 hover:text-white transition-colors text-xs font-semibold tracking-wide">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-bold text-sm tracking-widest mb-6 uppercase">Legal</h4>
            <ul className="space-y-4">
              {["About Us", "Contact Us", "Reviews", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <Link href="#" className="text-white/40 hover:text-white transition-colors text-xs font-semibold tracking-wide">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h4 className="text-white font-bold text-sm tracking-widest mb-6 uppercase">Newsletter</h4>
            <p className="text-white/40 text-[10px] leading-relaxed mb-6 max-w-xs">
              "Performance is path-world to create a novel performance memories."
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Email Address"
                className="bg-white/5 border border-white/10 rounded-full px-6 py-3 text-xs text-white flex-1 focus:outline-none focus:border-yellow-500/50 transition-colors"
              />
              <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold rounded-full px-6 py-3 text-xs tracking-widest shrink-0">
                CONNECT US
              </Button>
            </div>

            <div className="mt-8 flex gap-6">
              <Link href="#" className="text-white/40 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors">
                <Twitter className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors">
                <Youtube className="w-4 h-4" />
              </Link>
              <Link href="#" className="text-white/40 hover:text-white transition-colors">
                <Facebook className="w-4 h-4" /> {/* Instagram placeholder */}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-8">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-yellow-500 flex items-center justify-center">
              <span className="text-black font-bold text-[8px]">V</span>
            </div>
            <span className="text-white text-[10px] font-bold tracking-[0.2em]">VANTAGE LIVE</span>
          </div>

          <div className="flex gap-8 text-[8px] font-bold tracking-widest text-white/40">
            <Link href="#" className="hover:text-white transition-colors uppercase">Privacy</Link>
            <Link href="#" className="hover:text-white transition-colors uppercase">Terms</Link>
            <Link href="#" className="hover:text-white transition-colors uppercase">Press</Link>
            <Link href="#" className="hover:text-white transition-colors uppercase">Instagram</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white cursor-pointer transition-colors">
              <span className="text-xs">⚑</span>
            </div>
            <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white cursor-pointer transition-colors">
              <span className="text-xs">⚙</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
