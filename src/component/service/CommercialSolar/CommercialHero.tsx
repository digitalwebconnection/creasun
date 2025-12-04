"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import FreeSolarQuoteModal from "../../FreeSolarQuoteModal";

export default function CommercialSolarHero() {
  // Modal state
  const [open, setOpen] = useState(false);

  return (
    <section className="relative overflow-hidden text-white">
      {/* Background image */}
      <div className="pointer-events-none absolute inset-0">
        <img
          src="https://frontend-cdn.solarreviews.com/sr-commercial-solar.jpg"
          alt="Commercial solar plant"
          className="h-full w-full object-cover"
        />
        {/* Left-to-right dark overlay */}
        <div className="absolute inset-0 bg-linear-to-r from-[#050814dc] via-[#050814b4] to-[#0508149a]" />
        {/* Top-to-bottom soft vignette */}
        <div className="absolute inset-0 bg-linear-to-b from-black/40 via-transparent to-black/60" />
      </div>

      {/* Main content */}
      <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 py-8 sm:px-0 sm:py-10 lg:flex-row lg:items-center lg:py-20">
        {/* Left: Text content */}
        <div className="max-w-3xl text-center lg:text-left">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#cfc202]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#c7ba09]" />
            <span>Factories • Warehouses • Schools • Offices</span>
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            Turn idle rooftops into
            <span className="block text-[#f1da08] drop-shadow-[0_0_18px_rgba(247,232,90,0.6)]">
              profit-making power plants
            </span>
          </h1>

          {/* Subheading */}
          <p className="mt-4 text-sm sm:text-base text-slate-200">
            Designed for factories, warehouses, schools, showrooms and offices—
            our commercial solar solutions help you cut demand charges, lock in
            predictable power costs, and generate clean energy from your own
            rooftop space.
          </p>

          {/* CTA group */}
          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-4 lg:items-start">
            <button
              onClick={() => setOpen(true)}
              className="inline-flex items-center gap-2 rounded-full bg-[#c5960e] px-7 py-2 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#c5960e]/40 transition hover:bg-[#dfb31b]"
            >
              Book a commercial solar audit
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right: Stats card */}
        <div className="w-full max-w-md lg:ml-auto">
          <div className="rounded-3xl border border-white/12 bg-black/45 px-6 py-6 sm:px-8 sm:py-8 backdrop-blur shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
            <p className="text-xs uppercase tracking-[0.22em] text-slate-300/80">
              Our commercial solar track record
            </p>

            <div className="mt-5 grid grid-cols-2 gap-5 sm:gap-6">
              <div>
                <p className="text-2xl font-bold text-[#dfb31b]">100+ projects</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Completed for factories, warehouses, schools & offices.
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#6265f0]">3–5 years</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Typical payback period on well-designed rooftop systems.
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#dfb31b]">5,000+ MWh</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Clean energy generated every year across our sites.
                </p>
              </div>

              <div>
                <p className="text-2xl font-bold text-[#6265f0]">₹25 Cr+</p>
                <p className="mt-1 text-xs sm:text-sm text-slate-300">
                  Projected lifetime savings for commercial solar clients.
                </p>
              </div>
            </div>

            <div className="mt-5 h-px w-full bg-linear-to-r from-transparent via-white/20 to-transparent" />
          </div>
        </div>
      </div>

      {/* Inject Popup Form */}
      <FreeSolarQuoteModal open={open} setOpen={setOpen} />
    </section>
  );
}
