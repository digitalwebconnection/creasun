"use client";

import { motion } from "framer-motion";
import {
  Sun,
  Leaf,
  Zap,
  Factory,
  ShieldCheck,
  Sparkles,
  BarChart3,
} from "lucide-react";

export default function AboutCreasun() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-white via-[#F8FAFF] to-[#EEF3FF] py-10">
      {/* Background accents */}
      <div
        className="absolute inset-0 -z-10 opacity-50"
        style={{
          background:
            "radial-gradient(700px 300px at 80% 0%, rgba(46,122,227,0.12), transparent 70%), radial-gradient(900px 400px at 20% 0%, rgba(245,184,53,0.15), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-0 text-center">
        <span className="inline-flex items-center gap-2 rounded-full bg-[#F5B835]/90 px-8 py-2 text-sm font-semibold text-black ring-1 ring-amber-400">
          <Sun className="h-4 w-4 text-black" /> Creasun Energy
        </span>

        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-4 text-4xl sm:text-5xl font-extrabold max-w-4xl mx-auto  tracking-tight text-[#031E6C]"
        >
          Engineering Brighter Tomorrows - One Rooftop at a Time
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="mt-4 max-w-7xl mx-auto text-lg text-gray-600"
        >
          Creasun Energy is a leading solar EPC & manufacturing company delivering complete solar solutions — from high-efficiency panels to intelligent power systems — designed to make clean energy affordable, accessible, and future-ready.
        </motion.p>

        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <SDGPill icon={<Leaf className="h-4 w-4" />} label="Sustainable Growth" color="emerald" />
          <SDGPill icon={<Zap className="h-4 w-4" />} label="Clean Power Generation" color="sky" />
        </div>
      </div>

      {/* CORE SECTIONS */}
      <div className="mt-10 grid gap-8 md:grid-cols-3 max-w-7xl mx-auto px-6 lg:px-0">
        <AnimatedCard
          icon={<Factory className="h-8 w-8 text-[#F5B835]" />}
          title="Solar Manufacturing"
          desc="Creasun manufactures high-performance ACDBs, DCDBs, and integrated solar kits ensuring unmatched reliability and long lifespan."
          points={["Precision-engineered products", "Made in India", "Adani & Polycab partnerships"]}
        />
        <AnimatedCard
          icon={<ShieldCheck className="h-8 w-8 text-[#2E7AE3]" />}
          title="Trusted EPC Partner"
          desc="From residential rooftops to large-scale industrial plants, we manage the entire EPC process with safety, speed, and precision."
          points={["On-site survey & design", "Turnkey installation", "Compliance & subsidy handling"]}
        />
        <AnimatedCard
          icon={<BarChart3 className="h-8 w-8 text-[#031E6C]" />}
          title="ROI & Energy Analytics"
          desc="We ensure every solar investment is financially optimized through detailed payback analysis and performance monitoring."
          points={["Transparent cost structure", "Live performance tracking", "Predictive savings modeling"]}
        />
      </div>

    </section>
  );
}

/* -------- Helper Components -------- */
function AnimatedCard({ icon, title, desc, points }: { icon: React.ReactNode; title: string; desc: string; points: string[] }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -3 }}
      className="relative rounded-2xl bg-white p-6 hover:bg-[rgb(255,245,224)] border border-gray-800/20 shadow-lg shadow-blue-500/20 hover:shadow-2xl hover:scale-101 hover:border-[#2E7AE3]/20 transition-all duration-300"
    >
      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br from-[#F5B835]/20 to-[#2E7AE3]/10">
        {icon}
      </div>
      <h3 className="mt-4 text-lg font-bold text-gray-900">{title}</h3>
      <p className="mt-2 text-gray-600">{desc}</p>
      <ul className="mt-4 text-sm text-gray-700 space-y-1">
        {points.map((p, i) => (
          <li key={i} className="flex gap-2">
            <Sparkles className="h-4 w-4 text-[#2E7AE3] mt-0.5" /> {p}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function SDGPill({ icon, label, color }: { icon: React.ReactNode; label: string; color: "emerald" | "sky" }) {
  const bg = color === "emerald" ? "bg-emerald-200/80 ring-emerald-200 text-black" : "bg-sky-200/80 ring-sky-200 text-sky-950";
  const ic = color === "emerald" ? "text-emerald-600" : "text-sky-600";
  return (
    <span className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium ring-1 ${bg}`}>
      <span className={ic}>{icon}</span>
      {label}
    </span>
  );
}