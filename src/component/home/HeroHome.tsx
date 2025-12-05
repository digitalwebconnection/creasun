import { motion, type Variants, type Transition } from "framer-motion";
import {
  Sun,
  Leaf,
  BatteryCharging,
  ArrowRight,
  ChevronDown,
  BarChart3,
} from "lucide-react";
import { useState } from "react";
import FreeSolarQuoteModal from "../FreeSolarQuoteModal";

const EASE: NonNullable<Transition["ease"]> = [0.42, 0, 0.58, 1];

const float: Variants = {
  initial: { y: 0, opacity: 0.85, rotate: 0 },
  animate: {
    y: [0, -10, 0],
    rotate: [0, 3, 0],
    transition: { duration: 4, repeat: Infinity, ease: EASE },
  },
};

const bgMotion: Variants = {
  initial: { scale: 1.05, x: 0 },
  animate: {
    scale: 1.15,
    x: "-6%",
    transition: {
      duration: 18,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse" as const,
    },
  },
};

export default function CreasunHomeHero() {
  const [quoteOpen, setQuoteOpen] = useState(false);

  return (
    <section className="relative overflow-hidden bg-[#031E6C] text-white h-auto sm:h-[90vh] flex items-center">
      {/* Animated Background */}
      <motion.div
        variants={bgMotion}
        initial="initial"
        animate="animate"
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://solarsmart.co.in/wp-content/uploads/2025/03/New-Project.png")',
        }}
      />

      {/* Overlays */}
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-linear-to-b from-black/80 via-transparent to-black/70" />

      {/* Floating Icons */}
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

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl px-3 pt-20 lg:px-8">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-sm font-semibold backdrop-blur"
        >
          <Sun className="h-4 w-4 text-[#F5B835]" />
          Gujarat’s Trusted Solar Partner • Creasun Energy
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
          className="mt-6 text-4xl sm:text-6xl font-extrabold leading-tight drop-shadow-[0_4px_18px_rgba(0,0,0,0.7)]"
        >
          Clean Power for Gujarat.
          <br />
          <span className="bg-linear-to-r from-[#1a52f8] via-[#296dcc] to-[#4889c9] bg-clip-text text-transparent">
            Smart Savings for You.
          </span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
          className="mt-4 max-w-2xl text-base sm:text-lg text-white/90"
        >
          Trusted solar partner delivering rooftop, commercial, and industrial
          solutions — from design to installation, subsidy support, and long-term
          maintenance. Creasun makes going solar simple, affordable, and reliable.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
          className="mt-8 flex flex-col sm:flex-row gap-4"
        >
          {/* Linked to modal */}
          <button
            onClick={() => setQuoteOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#F5B835] px-6 py-3 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(255,140,0,0.35)] hover:brightness-110 transition"
          >
            🔆 Get a Free Solar Quote
            <ArrowRight className="h-4 w-4" />
          </button>

          <a
            href="#savings-calculator"
            className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/30 bg-white/10 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur hover:bg-white/15 transition"
          >
            📊 Calculate Your Savings
            <BarChart3 className="h-4 w-4" />
          </a>
        </motion.div>

        {/* Trust Signals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4, ease: EASE }}
          className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl"
        >
          <TrustChip icon={Sun} label="Subsidy support under PM Surya Ghar" />
          <TrustChip icon={BatteryCharging} label="2-year average payback period*" />
          <TrustChip icon={Leaf} label="5-star rated installations across Gujarat" />
        </motion.div>

        {/* Footnote */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-3 text-xs text-white/70"
        >
          *Actual payback varies by tariff slab, usage profile, and DISCOM norms.
        </motion.p>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ delay: 1.1, ease: EASE }}
          className="mt-10 flex justify-center"
        >
          <ChevronDown className="h-6 w-6 animate-bounce text-white/70" />
        </motion.div>
      </div>

      {/* Mount modal */}
      <FreeSolarQuoteModal open={quoteOpen} setOpen={setQuoteOpen} />

      {/* Bottom Glow */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[520px] h-[190px] bg-[#F5B835]/25 blur-3xl opacity-50" />
    </section>
  );
}

/* Trust Chip Component */
function TrustChip({
  icon: Icon,
  label,
}: {
  icon: React.ElementType;
  label: string;
}) {
  return (
    <div className="flex items-center justify-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur border border-white/10">
      <Icon className="h-5 w-5 text-[#F5B835]" />
      <span className="text-sm font-medium text-white/90">{label}</span>
    </div>
  );
}
