import React from "react";
// Import the necessary types from framer-motion
import { motion, type Variants } from "framer-motion";

// 1. FIXED GLOBAL VARIANTS using the 'Variants' type
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 32 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.8, 
      // TypeScript now accepts the array for cubic-bezier easing after assertion
      ease: [0.16, 1, 0.3, 1] as any 
    } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const fadeUpChild: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { 
      duration: 0.5, 
      ease: [0.16, 1, 0.3, 1] as any // Fix applied here too
    } 
  },
};
// END FIXED GLOBAL VARIANTS

const IndustrialSolarPage: React.FC = () => {
  return (
    <div className="bg-linear-to-b from-[#F5F7FF] via-white to-white text-slate-700">
      <div className="mx-auto max-w-7xl px-4 py-7 sm:px-0 lg:px-0 lg:py-10 space-y-8 sm:space-y-10">
        
        {/* SECTION 1 – MAIN CREASUN INDUSTRIAL SOLAR SECTION */}
        <motion.section
          className="relative overflow-hidden bg-white py-8 sm:py-10 rounded-3xl "
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          // Note: Transition prop on the motion.section is redundant if defined in variants, 
          // but kept here for fallback or override if needed.
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }} 
        >
          {/* soft background accents */}
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute -left-20 top-10 h-40 w-40 rounded-full bg-[#2E7AE3]/8 blur-3xl" />
            <div className="absolute -right-10 bottom-0 h-40 w-40 rounded-full bg-[#F5B835]/10 blur-3xl" />
          </div>

          <div className="mx-auto flex flex-col gap-10 px-4 sm:px-0 lg:flex-row lg:items-center">
            {/* LEFT: text/content */}
            <div className="flex-1 space-y-5">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#E7F0FF] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#2E7AE3]">
                <span className="h-1.5 w-1.5 rounded-full bg-[#F5B835]" />
                Industrial Solar • Future-Proof Power
              </div>

              <h1 className="text-3xl font-bold leading-tight text-[#031E6C] sm:text-4xl">
                Turn your factory roof into
                <span className="block text-[#2E7AE3]">
                  a long-term energy asset.
                </span>
              </h1>

              <p className="text-sm leading-relaxed text-slate-600 max-w-xl">
                Creasun Energy designs industrial solar plants that do more than
                cut bills. We help you lock in predictable power costs, reduce
                diesel dependence, and strengthen your ESG story — without
                disturbing production.
              </p>

              {/* bullets */}
              <div className="mt-3 grid gap-3 text-sm">
                {[
                  "Reduce daytime grid draw by 30–60% for suitable loads.",
                  "Secure 20–25 years of clean, predictable power generation.",
                  "Designs aligned with safety, compliance and expansion plans.",
                ].map((line) => (
                  <div key={line} className="flex gap-2 text-xs sm:text-sm">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#F5B835]" />
                    <p className="text-slate-700">{line}</p>
                  </div>
                ))}
              </div>

              {/* mini stats strip - ENHANCED HOVER */}
              <div className="mt-5 flex flex-wrap gap-3 text-xs">
                {[
                  { label: "Typical payback", value: "3–5 years" },
                  { label: "System life", value: "25+ years" },
                  { label: "Performance", value: "Remote monitoring 24/7" },
                ].map((stat) => (
                  <motion.div
                    key={stat.label}
                    whileHover={{
                      scale: 1.02, 
                      y: -5, 
                      boxShadow: "0 18px 40px rgba(15,23,42,0.18)", 
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
                  >
                    <span className="h-2 w-2 rounded-full bg-[#2E7AE3]" />
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">
                        {stat.label}
                      </p>
                      <p className="text-xs font-semibold text-[#031E6C]">
                        {stat.value}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* RIGHT: image + overlay stats card */}
            <div className="flex-1">
              <motion.div
                className="relative mx-auto h-64 max-w-md overflow-hidden rounded-3xl border border-slate-200 bg-slate-900 shadow-xl sm:h-72 lg:ml-auto"
                whileHover={{ scale: 1.01, boxShadow: "0 26px 60px rgba(15,23,42,0.35)" }}
                transition={{ duration: 0.4 }}
              >
                <motion.img
                  src="https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Industrial rooftop solar plant"
                  className="h-full w-full object-cover"
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.6 }}
                />

                {/* gradient overlay */}
                <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-black/10 to-transparent" />

                {/* badge in corner */}
                <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[10px] font-semibold text-[#031E6C] shadow-md backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-[#2E7AE3]" />
                  Creasun Industrial Solar
                </div>

                {/* bottom overlay card - ENHANCED ENTRY */}
                <motion.div
                  className="absolute bottom-4 left-4 right-4 rounded-2xl bg-white/95 p-4 text-[11px] text-slate-700 shadow-lg backdrop-blur"
                  initial={{ opacity: 0, y: 30 }} 
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    type: "spring", 
                    stiffness: 150, 
                    damping: 15,
                    delay: 0.3 
                  }}
                >
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#2E7AE3]">
                    BEFORE → AFTER
                  </p>
                  <div className="mt-2 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <div className="sm:w-1/2">
                      <p className="text-[11px] font-semibold text-[#031E6C]">
                        Before Creasun
                      </p>
                      <p className="text-[11px] text-slate-600">
                        Rising tariffs, diesel hours, and unpredictable monthly
                        bills.
                      </p>
                    </div>
                    <div className="hidden h-10 w-px bg-slate-200 sm:block" />
                    <div className="sm:w-1/2">
                      <p className="text-[11px] font-semibold text-[#031E6C]">
                        After Creasun
                      </p>
                      <p className="text-[11px] text-slate-600">
                        Stable solar generation, clear ROI, and cleaner power
                        for every shift.
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* SECTION 2 – WHY CREASUN WITH IMAGES - ENHANCED STAGGER */}
        <motion.section
          className="space-y-6"
          // Removed variants/initial/whileInView from section tag to let the inner div manage staggering
        >
          {/* Header/Intro elements that rely on the original fadeUp, wrapped in a motion.div */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-xl font-bold text-[#031E6C]">
              Why industrial clients choose Creasun.
            </h2>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl">
              We combine engineering depth with reliable execution to deliver long-term performance.
            </p>
          </motion.div>


          <motion.div // Stagger Container
            className="grid gap-6 md:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                title: "Design-first, not discount-first",
                desc: "Real simulations, shadow studies, yield forecasting and structural safety before pricing.",
                image:
                  "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=1200",
              },
              {
                title: "Execution that respects production",
                desc: "Safe, phased installation planned around downtime, shift hours and factory movement.",
                image:
                  "https://images.pexels.com/photos/5668883/pexels-photo-5668883.jpeg?auto=compress&cs=tinysrgb&w=1200",
              },
              {
                title: "Performance that stays consistent",
                desc: "Monitoring, maintenance and periodic inspections to protect your investment.",
                image:
                  "https://images.pexels.com/photos/8853501/pexels-photo-8853501.jpeg?auto=compress&cs=tinysrgb&w=1200",
              },
            ].map((card) => (
              <motion.div
                key={card.title}
                variants={fadeUpChild} // Staggered Child
                whileHover={{
                  y: -8, 
                  boxShadow: "0 30px 60px rgba(15,23,42,0.25)", 
                  backgroundColor: "rgba(255, 255, 255, 1)", 
                }}
                transition={{ type: "spring", stiffness: 200, damping: 20 }} 
                className="rounded-3xl overflow-hidden border border-slate-200 bg-white shadow-sm transition-transform"
              >
                <div className="h-36 w-full overflow-hidden">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                </div>

                <div className="p-6">
                  <h3 className="text-sm font-semibold text-[#031E6C]">
                    {card.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-600">{card.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* SECTION 3 – HOW WE DESIGN YOUR PLANT (PROCESS WITH ICONS) - ENHANCED STAGGER */}
        <motion.section
          className="space-y-5 rounded-3xl border border-slate-100 bg-white/80 p-6 sm:p-0 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
          // Removed variants/initial/whileInView from section tag
        >
          {/* Header/Intro elements wrapped in a motion.div */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-xl font-bold text-[#031E6C]">
              How Creasun designs your industrial solar plant.
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              A clear, engineered, numbers-first process for maximum reliability.
            </p>
          </motion.div>

          <motion.div // Stagger Container
            className="grid gap-6 md:grid-cols-4 text-xs"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                step: "01",
                title: "Load & roof assessment",
                desc: "We study your bill patterns, production hours, and roof structure.",
                icon:
                  "https://cdn-icons-png.flaticon.com/512/2983/2983788.png",
              },
              {
                step: "02",
                title: "Simulation & layout",
                desc: "Advanced PVsyst, 3D shadow analysis, and string-level engineering.",
                icon:
                  "https://cdn-icons-png.flaticon.com/512/3201/3201648.png",
              },
              {
                step: "03",
                title: "On-site execution",
                desc: "Safe installation planned around your factory schedule.",
                icon:
                  "https://cdn-icons-png.flaticon.com/512/992/992652.png",
              },
              {
                step: "04",
                title: "Monitoring & O&M",
                desc: "24/7 dashboard + preventive maintenance keeps output stable.",
                icon:
                  "https://cdn-icons-png.flaticon.com/512/992/992534.png",
              },
            ].map((item) => (
              <motion.div
                key={item.step}
                variants={fadeUpChild} // Staggered Child
                whileHover={{
                  y: -4,
                  boxShadow: "0 20px 40px rgba(15,23,42,0.1)",
                }}
                className="relative rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition-transform"
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  className="h-7 w-7 mb-3 opacity-80"
                />

                <h3 className="text-[13px] font-semibold text-[#031E6C]">
                  {item.title}
                </h3>
                <p className="mt-2 text-[11px] text-slate-600">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* SECTION 4 – INDUSTRIES GRID WITH ICONS - ENHANCED STAGGER */}
        <motion.section
          className="space-y-5"
          // Removed variants/initial/whileInView from section tag
        >
          {/* Header/Intro elements wrapped in a motion.div */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-xl font-bold text-[#031E6C]">
              Where Creasun industrial solar fits best.
            </h2>
            <p className="text-sm text-slate-600 max-w-2xl">
              If your units are power-hungry and run for long hours, there’s a strong chance solar can work in your favour.
            </p>
          </motion.div>


          <motion.div // Stagger Container
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-xs"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {[
              {
                name: "Manufacturing & process plants",
                icon: "https://cdn-icons-png.flaticon.com/512/3468/3468310.png",
              },
              {
                name: "Textile & dyeing units",
                icon: "https://cdn-icons-png.flaticon.com/512/819/819814.png",
              },
              {
                name: "Cold storage & food units",
                icon: "https://cdn-icons-png.flaticon.com/512/1687/1687662.png",
              },
              {
                name: "Warehousing & logistics",
                icon: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
              },
              {
                name: "Pharma & chemical plants",
                icon: "https://cdn-icons-png.flaticon.com/512/2965/2965567.png",
              },
              {
                name: "Engineering workshops",
                icon: "https://cdn-icons-png.flaticon.com/512/1046/1046857.png",
              },
              {
                name: "Auto ancillaries",
                icon: "https://cdn-icons-png.flaticon.com/512/741/741407.png",
              },
              {
                name: "Industrial clusters",
                icon: "https://cdn-icons-png.flaticon.com/512/3595/3595458.png",
              },
            ].map((item) => (
              <motion.div
                key={item.name}
                variants={fadeUpChild} // Staggered Child
                whileHover={{
                  y: -3,
                  boxShadow: "0 16px 32px rgba(15,23,42,0.08)",
                }}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-white p-3 shadow-sm transition-transform"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-6 w-6 opacity-80"
                />
                <p className="text-slate-700 text-sm">{item.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* SECTION 5 – CTA BAND */}
        <motion.section
          className="rounded-3xl bg-[#031E6C] px-5 py-7 text-white shadow-[0_20px_60px_rgba(15,23,42,0.45)]"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as any }}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F5B835]">
                NEXT STEP WITH CREASUN
              </p>
              <h2 className="mt-2 text-lg font-bold sm:text-xl">
                Ready to see what industrial solar could do for your plant?
              </h2>
              <p className="mt-2 text-xs sm:text-sm text-slate-200 max-w-xl">
                Share your average monthly bill, sanctioned load and roof / land
                photos. We’ll send back a clear, numbers-first proposal —
                no jargon, no pressure.
              </p>
            </div>

            <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
              {/* Request Audit Button - ENHANCED HOVER */}
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 24px 50px rgba(245,184,53,0.45)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 400, damping: 25 }} 
                className="rounded-full bg-[#F5B835] px-5 py-2.5 text-xs font-semibold text-[#031E6C]"
              >
                Request Industrial Solar Audit
              </motion.button>
              
              {/* Download Report Button - ENHANCED HOVER */}
              <motion.button
                whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.15)" }} 
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
                className="rounded-full border border-slate-500 px-5 py-2.5 text-xs font-semibold text-slate-100"
              >
                Download Sample ROI Report
              </motion.button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default IndustrialSolarPage;