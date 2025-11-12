"use client";

import { motion, type Variants, type Transition } from "framer-motion";
import {
  Sun,
  Leaf,
  BatteryCharging,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

// Easing as bezier tuple (TS-safe)
const EASE: NonNullable<Transition["ease"]> = [0.42, 0, 0.58, 1];

const float: Variants = {
  initial: { y: 0, opacity: 0.85, rotate: 0 },
  animate: {
    y: [0, -10, 0],
    rotate: [0, 3, 0],
    transition: { duration: 4, repeat: Infinity, ease: EASE },
  },
};

export default function CreasunHomeHero() {
  return (
    <section className="relative overflow-hidden bg-[#031E6C] text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://static.vecteezy.com/system/resources/thumbnails/048/748/014/small/rows-of-solar-panels-collect-energy-as-the-sun-sets-behind-a-line-of-trees-photo.jpg")',
        }}
      />
      {/* Overlays */}
      <div className="absolute inset-0 bg-slate-900/60" />
      <div className="pointer-events-none absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black/70" />
      <div className="pointer-events-none absolute -inset-x-10 -inset-y-16 bg-[radial-gradient(600px_200px_at_50%_120%,rgba(245,184,53,0.2),transparent)]" />

      {/* Floating icons */}
      <motion.div
        variants={float}
        initial="initial"
        animate="animate"
        className="absolute left-[58%] top-[22%] rounded-full border border-emerald-400/70 p-2 backdrop-blur-sm"
      >
        <Leaf className="h-5 w-5 text-emerald-400" />
      </motion.div>

      <motion.div
        variants={float}
        initial="initial"
        animate="animate"
        transition={{ duration: 4.5, repeat: Infinity, ease: EASE }}
        className="absolute left-[38%] top-[56%] rounded-md border border-lime-300/70 p-2 backdrop-blur-sm"
      >
        <BatteryCharging className="h-5 w-5 text-lime-300" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-0 py-10 sm:py-12">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold backdrop-blur"
        >
          <Sun className="h-4 w-4 text-[#F5B835]" />
          Rajkot’s Trusted Solar Partner • Creasun Energy
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight tracking-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.6)]"
        >
          Clean Power for Rajkot,
          <br className="hidden sm:block" /> Smart Savings for You -{" "}
          <span className="bg-linear-to-r from-[#1a52f8] via-[#296dcc] to-[#4889c9] bg-clip-text text-transparent">
            Creasun Energy
          </span>
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-white/90"
        >
          Rajkot-based EPC delivering end-to-end rooftop, commercial and
          industrial solar. From site survey and design to installation,
          subsidy/documentation and AMC—Creasun makes going solar simple and
          reliable.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#quote"
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F5B835] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,140,0,0.35)] hover:brightness-110 transition"
          >
            Get a Free Solar Quote
            <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#learn"
            className="inline-flex items-center justify-center rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/15 transition"
          >
            Explore Services &amp; Subsidy Support
          </a>
        </motion.div>

        {/* Trust chips – Rajkot/Saurashtra focus */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto"
        >
          {[
            { icon: Leaf, label: "Serving Rajkot & Saurashtra" },
            { icon: BatteryCharging, label: "Rooftop • Commercial • Industrial" },
            { icon: Sun, label: "Design • Installation • AMC" },
          ].map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="flex items-center justify-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur border border-white/10"
            >
              <Icon className="h-5 w-5 text-[#F5B835]" />
              <span className="text-sm font-medium text-white/90">{label}</span>
            </div>
          ))}
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1, ease: EASE }}
          className="mt-10 flex justify-center"
        >
          <ChevronDown className="h-6 w-6 animate-bounce text-white/70" />
        </motion.div>
      </div>

      {/* Soft bottom glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[190px] bg-[#F5B835]/25 blur-3xl opacity-50" />
    </section>
  );
}
