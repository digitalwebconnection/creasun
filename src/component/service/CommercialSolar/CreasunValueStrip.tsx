"use client";

import { useState, useEffect } from "react";
import {
  PiggyBank,
  LayoutTemplate,
  ReceiptIndianRupee,
  Cpu,
  LifeBuoy,
  ChevronDown,
} from "lucide-react";

type PillarKey = "savings" | "design" | "net" | "tech" | "support";

const PILLARS: {
  key: PillarKey;
  title: string;
  icon: React.ElementType;
  tagline: string;
  points: string[];
}[] = [
  {
    key: "savings",
    title: "Savings & Value",
    icon: PiggyBank,
    tagline: "Lower bills, higher asset value.",
    points: [
      "Lower monthly electricity bills with onsite generation.",
      "Boost property value with clean, reliable power.",
      "Reduce carbon emissions and improve ESG scores.",
    ],
  },
  {
    key: "design",
    title: "System Design & Subsidy",
    icon: LayoutTemplate,
    tagline: "Smart design with MNRE-compliance.",
    points: [
      "MNRE-compliant rooftop systems for homes and societies.",
      "PM Surya Ghar subsidy support to reduce upfront cost.",
      "Systems sized exactly to match consumption patterns.",
    ],
  },
  {
    key: "net",
    title: "Net-Metering & Billing",
    icon: ReceiptIndianRupee,
    tagline: "Let every extra unit earn for you.",
    points: [
      "DISCOM and net-metering approvals handled end-to-end.",
      "Excess solar units credited directly in your electricity bill.",
    ],
  },
  {
    key: "tech",
    title: "Technology & Reliability",
    icon: Cpu,
    tagline: "Tier-1 hardware. Utility-grade performance.",
    points: [
      "Tier-1 solar modules with high-efficiency inverters.",
      "Quality BOS for safety and longevity.",
      "Real-time monitoring to track performance and savings.",
    ],
  },
  {
    key: "support",
    title: "End-to-End Support",
    icon: LifeBuoy,
    tagline: "From first visit to 25th year.",
    points: [
      "Survey, design, installation & commissioning.",
      "Remote monitoring, cleaning guidance & AMC plans.",
      "25-year panel warranty for long-term peace of mind.",
    ],
  },
];

const FAQ_ITEMS = [
  {
    q: "How much can I save by installing a rooftop solar system with Creasun?",
    a: "Most customers see 50–80% reduction in their monthly electricity bills once the system is right-sized and net-metering is active.",
  },
  {
    q: "Is my home or commercial building eligible for PM Surya Ghar subsidy?",
    a: "If your project meets MNRE & DISCOM norms, Creasun will guide you through the full subsidy process.",
  },
  {
    q: "What is the typical payback period for a rooftop solar plant?",
    a: "Payback is typically 3–5 years depending on tariff, subsidy eligibility & consumption.",
  },
];

export default function CreasunCommercialBenefitsWithFAQ() {
  const [activePillar, setActivePillar] = useState<PillarKey>("savings");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // ===============================
  // ⭐ Auto Rotate Every 3 Seconds
  // ===============================
  useEffect(() => {
    const interval = setInterval(() => {
      setActivePillar((prev) => {
        const idx = PILLARS.findIndex((p) => p.key === prev);
        const nextIndex = (idx + 1) % PILLARS.length;
        return PILLARS[nextIndex].key;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const selected = PILLARS.find((p) => p.key === activePillar)!;

  return (
    <section className="w-full bg-slate-50 py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">

        {/* =============================== */}
        {/*              HEADER             */}
        {/* =============================== */}
        <div className="mb-10 text-center max-w-4xl mx-auto">
          <p className="text-xs font-semibold tracking-[0.2em] uppercase text-emerald-600">
            Creasun Energy · Commercial & Residential Rooftop Solar
          </p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-slate-900">
            One partner for design, savings, approvals and long-term support.
          </h2>
        </div>

        {/* =============================== */}
        {/*              GRID               */}
        {/* =============================== */}
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1.1fr] items-start">

          {/* =============================== */}
          {/*     LEFT: AUTO-Rotate Pillars   */}
          {/* =============================== */}
          <div className="rounded-3xl bg-white/80 shadow-lg border border-slate-500/50 p-6 sm:p-8">

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 mb-6">
              {PILLARS.map((pillar) => {
                const Icon = pillar.icon;
                const active = pillar.key === activePillar;

                return (
                  <button
                    key={pillar.key}
                    onClick={() => setActivePillar(pillar.key)}
                    className={`flex items-center gap-2 rounded-full border px-4 py-2 text-xs sm:text-sm font-semibold transition ${
                      active
                        ? "bg-emerald-600 text-white border-emerald-600 shadow-md"
                        : "bg-white text-slate-700 border-slate-600/40 hover:border-emerald-400 hover:text-emerald-700"
                    }`}
                  >
                    <Icon className="h-4 w-4" />
                    {pillar.title}
                  </button>
                );
              })}
            </div>

            {/* Active Card */}
            <div className="rounded-2xl bg-slate-900 text-white p-6 sm:p-7 flex flex-col gap-3 transition-all duration-500">
              <div className="flex items-center gap-3">
                <selected.icon className="h-7 w-7 text-emerald-400" />
                <div>
                  <h3 className="text-lg font-semibold">{selected.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300">{selected.tagline}</p>
                </div>
              </div>

              <ul className="mt-2 space-y-2 text-sm">
                {selected.points.map((pt) => (
                  <li key={pt} className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* =============================== */}
          {/*          RIGHT: FAQ             */}
          {/* =============================== */}
          <div className="rounded-3xl bg-white/90 border border-slate-100 shadow-lg px-6 pb-6 sm:px-8">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-2">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {FAQ_ITEMS.map((item, index) => {
                const open = openFaq === index;

                return (
                  <div key={item.q} className="rounded-2xl border ">

                    <button
                      className="flex w-full items-center justify-between px-4 py-3 sm:px-5 sm:py-4"
                      onClick={() =>
                        setOpenFaq((prev) => (prev === index ? null : index))
                      }
                    >
                      <span className="text-sm sm:text-base font-semibold text-slate-900">
                        {item.q}
                      </span>
                      <ChevronDown
                        className={`h-4 w-4 text-slate-500 transition-transform ${
                          open ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </button>

                    {open && (
                      <div className="border-t px-4 py-3 sm:px-5 sm:py-4">
                        <p className="text-sm text-slate-700">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
