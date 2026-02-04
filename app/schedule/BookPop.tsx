"use client";

import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  Info,
  Plus,
  Minus,
  Crown,
  Star,
  Music,
  Sparkles,
  Ticket,
  Volume2,
} from "lucide-react";
import { artists } from "@/app/schedule/@data";

type TierId = "platinum" | "gold" | "silver";
interface TicketTier {
  id: TierId;
  name: string;
  price: number;
  total: number;
  available: number;
  perks: string[];
}
const ticketTiers: TicketTier[] = [
  {
    id: "platinum",
    name: "Platinum",
    price: 5999,
    total: 200,
    available: 100,
    perks: ["Front row access", "VIP lounge", "Free merch"],
  },
  {
    id: "gold",
    name: "Gold",
    price: 3999,
    total: 300,
    available: 0,
    perks: ["Priority seating", "Free drink"],
  },
  {
    id: "silver",
    name: "Silver",
    price: 1999,
    total: 500,
    available: 220,
    perks: ["Standard seating"],
  },
];
export function BookNowDialog({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (v: boolean) => void;
}) {
  const [qty, setQty] = useState<Record<string, number>>({
    gold: 0,
    platinum: 0,
    silver: 0,
  });

  const total = ticketTiers.reduce(
    (sum, t) => sum + t.price * (qty[t.id] || 0),
    0,
  );
  const [paymentOpen, setPaymentOpen] = useState(false);
  const tierGlow: Record<TierId, string> = {
    platinum:
      "border-white/30 shadow-[0_0_30px_rgba(255,255,255,0.25)] hover:shadow-[0_0_45px_rgba(255,255,255,0.45)]",
    gold: "border-[#f5c77a]/40 shadow-[0_0_30px_rgba(245,199,122,0.35)] hover:shadow-[0_0_45px_rgba(245,199,122,0.55)]",
    silver:
      "border-[#cfd2d6]/40 shadow-[0_0_25px_rgba(207,210,214,0.3)] hover:shadow-[0_0_40px_rgba(207,210,214,0.45)]",
  };

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent
          className="
          w-full max-w-5xl max-h-[90vh]
          bg-gradient-to-br from-[#0a0a0a] via-[#121212] to-[#1a1a1a]
          text-white
          rounded-3xl
          border border-[#ffffff10]
          shadow-[0_0_60px_rgba(255,0,132,0.15),0_20px_80px_rgba(0,0,0,0.5)]
          backdrop-blur-2xl
          p-0
          flex flex-col
        "
        >
          {/* BACKGROUND EFFECTS */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl" />
          </div>

          {/* HEADER */}
          <DialogHeader className="relative p-8 pb-4 border-b border-[#ffffff15] shrink-0">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-to-br from-[#ff0080] to-[#ff6b9d] rounded-xl">
                  <Ticket className="h-6 w-6" />
                </div>
                <div>
                  <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-white via-pink-300 to-white bg-clip-text text-transparent">
                    SECURE YOUR SPOT
                  </DialogTitle>
                  <p className="text-sm text-[#b0b0b0] flex items-center gap-2 mt-1">
                    <Sparkles className="h-3 w-3 text-[#00ffcc]" />
                    Limited tickets • Live sound
                    <Volume2 className="h-3 w-3 text-[#ff0080]" />
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 px-4 py-2 bg-[#ffffff08] rounded-full border border-[#ffffff10]">
                <span className="h-2 w-2 bg-[#00ffcc] rounded-full animate-pulse" />
                <span className="text-sm font-medium">LIVE</span>
              </div>
            </div>
          </DialogHeader>

          {/* SCROLLABLE CONTENT */}
          <div className="flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#ffffff20] scrollbar-track-transparent">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* LEFT — ARTISTS */}
              <div className="p-8 border-r border-[#ffffff10]">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="bg-gradient-to-r from-[#ff0080] to-[#ff6b9d] text-transparent bg-clip-text">
                    LINEUP
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-pink-500/40 to-transparent" />
                </h3>

                <div className="space-y-4">
                  {artists.map((artist, i) => (
                    <div
                      key={artist.name}
                      className="flex gap-4 p-4 rounded-2xl bg-[#ffffff05] border border-[#ffffff10]"
                    >
                      <div className="text-5xl font-black text-[#ffffff05]">
                        {i + 1}
                      </div>
                      <img
                        src={artist.image}
                        alt={artist.name}
                        className="h-16 w-16 rounded-xl object-cover border border-[#ffffff20]"
                      />
                      <div>
                        <p className="font-semibold">{artist.name}</p>
                        <p className="text-xs text-[#b0b0b0]">{artist.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* RIGHT — TICKETS */}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                  <span className="bg-gradient-to-r from-[#00ffcc] to-[#00b3ff] text-transparent bg-clip-text">
                    VIP EXPERIENCE
                  </span>
                  <span className="h-px flex-1 bg-gradient-to-r from-cyan-400/40 to-transparent" />
                </h3>

                <div className="space-y-4">
                  {ticketTiers.map((tier) => {
                    const isSoldOut = tier.available === 0;

                    return (
                      <div
                        key={tier.id}
                        className={`
              relative p-5 rounded-2xl
              bg-[#ffffff08]
              border
              transition-all duration-500
              ${tierGlow[tier.id]}
            `}
                      >
                        {/* Glow overlay */}
                        <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-white/5 via-transparent to-transparent" />

                        {/* Header */}
                        <div className="flex justify-between items-start mb-3">
                          <div className="flex items-center gap-3">
                            <p className="font-bold flex items-center gap-2 text-lg">
                              {tier.id === "platinum" && <Sparkles size={16} />}
                              {tier.id === "gold" && <Crown size={16} />}
                              {tier.id === "silver" && <Star size={16} />}
                              {tier.name}
                            </p>

                            {/* Availability */}
                            {isSoldOut ? (
                              <span className="px-3 py-0.5 text-xs rounded-full font-semibold bg-red-500/15 text-red-400 border border-red-500/30">
                                SOLD OUT
                              </span>
                            ) : (
                              <span className="px-3 py-0.5 text-xs rounded-full font-semibold bg-green-500/15 text-green-400 border border-green-500/30">
                                Available ({tier.available} / {tier.total})
                              </span>
                            )}
                          </div>

                          {/* Info */}
                          <Popover>
                            <PopoverTrigger>
                              <Info className="h-4 w-4 text-[#9a9a9a] cursor-pointer hover:text-white transition" />
                            </PopoverTrigger>
                            <PopoverContent className="bg-[#1a1a1a] border border-[#ffffff20] text-sm rounded-xl">
                              <ul className="space-y-2">
                                {tier.perks.map((perk) => (
                                  <li key={perk}>• {perk}</li>
                                ))}
                              </ul>
                            </PopoverContent>
                          </Popover>
                        </div>

                        {/* Price + Quantity */}
                        <div className="flex items-center justify-between">
                          <p className="text-xl font-bold tracking-wide">
                            ₹ {tier.price}
                          </p>

                          <div className="flex items-center gap-3">
                            <button
                              disabled={isSoldOut}
                              onClick={() =>
                                setQty((q) => ({
                                  ...q,
                                  [tier.id]: Math.max(0, q[tier.id] - 1),
                                }))
                              }
                              className={`
                    p-2 rounded-full border transition-all duration-300
                    ${
                      isSoldOut
                        ? "border-white/10 text-white/30 cursor-not-allowed"
                        : "border-white/20 hover:border-[#f5c77a] hover:ring-2 hover:ring-[#f5c77a]/40 hover:shadow-[0_0_12px_rgba(245,199,122,0.6)] cursor-pointer"
                    }
                  `}
                            >
                              <Minus size={14} />
                            </button>

                            <span className="w-6 text-center font-semibold">
                              {qty[tier.id]}
                            </span>

                            <button
                              disabled={isSoldOut}
                              onClick={() =>
                                setQty((q) => ({
                                  ...q,
                                  [tier.id]: q[tier.id] + 1,
                                }))
                              }
                              className={`
                    p-2 rounded-full border transition-all duration-300
                    ${
                      isSoldOut
                        ? "border-white/10 text-white/30 cursor-not-allowed"
                        : "border-white/20 hover:border-[#f5c77a] hover:ring-2 hover:ring-[#f5c77a]/40 hover:shadow-[0_0_12px_rgba(245,199,122,0.6)] cursor-pointer"
                    }
                  `}
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* TOTAL */}
                <div className="mt-8 pt-6 border-t border-[#ffffff15]">
                  <p className="text-3xl font-bold text-right">
                    ₹ {total.toLocaleString()}
                  </p>
                </div>

                {/* ACTIONS */}
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => onOpenChange(false)}
                    className="flex-1 py-3 rounded-xl border border-[#ffffff20] cursor-pointer"
                  >
                    Cancel
                  </button>

                  <button
                    onClick={() => setPaymentOpen(true)}
                    className="flex-1 py-3 rounded-xl bg-pink-600 font-bold cursor-pointer hover:bg-pink-700 transition"
                  >
                    Confirm Booking
                  </button>
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
      <Dialog open={paymentOpen} onOpenChange={setPaymentOpen}>
        <DialogContent className="max-w-md bg-gradient-to-br from-[#1a1a1a] to-[#0f0f0f] border border-[#ffffff15] rounded-2xl p-6">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-bold tracking-wide">
              🎟️ Payment Options
            </DialogTitle>
          </DialogHeader>

          {/* Cash Ticket Card */}
          <div className="mt-4 rounded-xl border border-[#f5c77a]/40 bg-gradient-to-br from-[#2a1f0f] to-[#1a1408] p-4 shadow-[0_0_25px_rgba(245,199,122,0.15)]">
            <h3 className="font-semibold text-[#f5c77a] text-lg">
              Cash Ticket
            </h3>
            <p className="text-sm text-white/80 mt-1">
              Payment will be collected <b>on the spot</b> at our designated
              stall during the event.
            </p>
            <p className="text-xs text-white/60 mt-2 italic">
              📍 Look for the official ticket counter near the entry gate
            </p>
          </div>

          {/* UPI Payment Section */}
          <div className="mt-6">
            <p className="text-sm text-white/70 mb-3 text-center">
              Or pay instantly via UPI
            </p>

            <div className="flex justify-center gap-6">
              {/* PhonePe */}
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="h-14 w-14 rounded-xl bg-white p-2 group-hover:shadow-[0_0_18px_rgba(255,255,255,0.4)] transition">
                  <img src="/paytm.png" alt="PhonePe" />
                </div>
                <span className="text-xs text-white/80">PhonePe</span>
              </div>

              {/* Paytm */}
              <div className="flex flex-col items-center gap-2 cursor-pointer group">
                <div className="h-14 w-14 rounded-xl bg-white p-2 group-hover:shadow-[0_0_18px_rgba(255,255,255,0.4)] transition">
                  <img src="/phonepe-icon.webp" alt="Paytm" />
                </div>
                <span className="text-xs text-white/80">Paytm</span>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-6 flex gap-3">
            <button
              onClick={() => setPaymentOpen(false)}
              className="flex-1 py-2 rounded-xl border border-[#ffffff20] cursor-pointer"
            >
              Close
            </button>

            <button className="flex-1 py-2 rounded-xl bg-[#f5c77a] text-black font-semibold hover:brightness-110 transition cursor-pointer">
              Proceed
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
