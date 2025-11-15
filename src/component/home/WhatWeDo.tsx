
import { motion } from "framer-motion";
import { Sun, Building2, Zap, DollarSign } from "lucide-react";

const cards = [
  {
    icon: Sun,
    title: "Solar Rooftop Solutions",
    desc: "Harnessing the sun’s power for homes, businesses, and industries.",
    accent: "from-amber-400/80 to-yellow-300/70",
  },
  {
    icon: Building2,
    title: "Energy Audit & Consultancy",
    desc: "Helping clients optimize energy efficiency and reduce costs.",
    accent: "from-sky-400/80 to-cyan-300/70",
  },
  {
    icon: Zap,
    title: "EV Charging Infrastructure",
    desc: "Powering sustainable mobility with smart charging systems.",
    accent: "from-emerald-400/80 to-lime-300/70",
  },
  {
    icon: DollarSign,
    title: "Green Energy Financing",
    desc: "Enabling affordable access to renewable energy investments.",
    accent: "from-amber-300/80 to-emerald-300/70",
  },
];

export default function WhatWeDo() {
  return (
    <section className="relative overflow-hidden bg-linear-to-b from-slate-50 via-white to-slate-100 py-8 md:py-10">
      {/* Soft solar background glow */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage:
            "radial-gradient(600px 400px at 10% 0%, rgba(56,189,248,0.10), transparent 70%), radial-gradient(700px 500px at 90% 20%, rgba(250,204,21,0.18), transparent 70%), radial-gradient(800px 500px at 50% 100%, rgba(16,185,129,0.12), transparent 75%)",
        }}
      />

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-4 sm:px-6 lg:px-0">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-3xl text-center mx-auto"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-amber-300/70 bg-white/70 px-4 py-1 text-xs font-medium uppercase tracking-[0.22em] text-amber-700 shadow-sm backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-linear-to-r from-amber-400 to-emerald-400" />
            What We Do
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
            Empowering a Greener Tomorrow
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Through clean, intelligent energy solutions, Creasun Energy helps
            homes, businesses, and industries transition to a brighter, more
            sustainable future.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => {
            const Icon = card.icon;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                whileHover={{
                  y: -6,
                  scale: 1.04,
                }}
                whileTap={{ scale: 0.985 }}
                className="group relative h-full rounded-2xl border border-slate-200/80 bg-white/80 p-px shadow-sm hover:bg-[#ffb81d] shadow-slate-100 backdrop-blur-sm transition-all"
              >
                {/* Glow ring on hover */}
                <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-md transition-opacity duration-300 group-hover:opacity-60 bg-linear-to-br from-amber-300/40 via-blue-600/30 to-sky-300/40" />

                <div className="relative flex h-full flex-col rounded-2xl bg-linear-to-b from-white/80 to-slate-50/90 p-5 sm:p-6">
                  {/* Icon badge */}
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-[#0A2E9E] text-white shadow-md shadow-slate-400/30">
                    <div className="relative">
                      {/* Colored glow behind icon */}
                      <div
                        className={`absolute inset-0 -z-10 rounded-xl bg-linear-to-br ${card.accent} opacity-80 blur-md`}
                      />
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  {/* Title & text */}
                  <h3 className="text-base sm:text-lg font-semibold text-slate-900">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {card.desc}
                  </p>

                  {/* Small accent at bottom */}
                  <div className="mt-5 flex items-center gap-2 text-xs font-medium text-emerald-700/80">
                    <span className="inline-flex h-1.5 w-8 rounded-full bg-linear-to-r from-amber-400 via-sky-400 to-[#031E6C ]" />
                    <span className="uppercase tracking-[0.18em] text-[#727FCB]">
                      Clean Energy
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
