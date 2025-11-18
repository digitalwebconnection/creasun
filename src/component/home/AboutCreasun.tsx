
import { motion } from "framer-motion";
import {
  Sun,
  Leaf,
  Lightbulb, // New icon for Innovation
} from "lucide-react";



function HighlightPill({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-medium  ring-1 ring-[#0A2E9E] ]">
      <span className="">{icon}</span>
      {label}
    </span>
  );
}

/* ───────────────────────────────── Page Component (Redesigned) ───────────────────────────────── */

export default function AboutCreasunRedesign() {
  return (
    <section className="relative overflow-hidden bg-white py-10 sm:py-14">
      {/* Background accents (Changed color) */}
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(1000px 500px at 10% 0%, rgba(132, 204, 22, 0.05), transparent 70%), radial-gradient(1200px 600px at 90% 10%, rgba(20, 83, 45, 0.08), transparent 70%)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-0">

        {/* HEADER: Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 items-center text-left">

          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 rounded-full  px-4 py-1.5 text-sm font-bold text-[#F5B835] ring-2 ring-[#F5B835]">
              <Sun className="h-5 w-5 text-[#F5B835]" /> CREASUN ENERGY
            </span>

            <h2 className="mt-4 text-5xl sm:text-6xl font-extrabold tracking-tight text-slate-900">
              Engineering <span className="text-[#0A2E9E]">Future-Ready</span> Solar Solutions
            </h2>

            <p className="mt-6 text-lg text-slate-600">
              Creasun Energy is the trusted solar EPC & manufacturing partner, seamlessly integrating high-performance proprietary components with certified modules to deliver **optimized, durable, and cost-effective** clean power systems for C&I sectors.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <HighlightPill icon={<Leaf className="h-4 w-4" />} label="Sustainable Impact" />
              <HighlightPill icon={<Lightbulb className="h-4 w-4" />} label="Component Innovation" />
            </div>
          </motion.div>

          {/* Right: Simulated Visual/Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="hidden lg:block h-[400px] w-full rounded-3xl bg-[#031E6C] shadow-2xl shadow-slate-900/50 p-2 relative overflow-hidden"
            
          >
            <div className="absolute inset-4 rounded-2xl border-4 border-dashed border-blue-500/50 flex items-center justify-center">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSm3m4ULjD46IrPwN6UiO44Fb7FdqtdwYFQ2A&s" alt="" className="w-full h-full rounded-2xl" />
            </div>
          </motion.div>
        </div>


      </div>
    </section>
  );
}