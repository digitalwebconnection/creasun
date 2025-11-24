"use client";

import { ArrowRight } from "lucide-react";

export default function CommercialSolarHero() {
  return (
    <section className="relative overflow-hidden bg-[#080d18] text-white">
      {/* decorative windmill-ish silhouette on the far left */}
      <div className="pointer-events-none absolute inset-y-0 left-[-10%] w-52 opacity-10 hidden md:block">
        <div className="h-full w-[3px] bg-slate-300 mx-auto rounded-full" />
        <div className="absolute top-16 left-1/2 -translate-x-1/2 h-32 w-32 rounded-full border border-slate-300" />
      </div>

      {/* angled green stripe between text + image */}
      <div className="pointer-events-none absolute inset-y-[-30%] right-[42%] hidden lg:block">
        <div className="h-full w-64 rotate-[-24deg] bg-linear-to-b from-[#b09600] to-[#a18901] opacity-80" />
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-10 px-6 py-8 lg:flex-row lg:items-center lg:px-0 lg:py-25">
        {/* Left content */}
        <div className="relative z-10 max-w-xl">
          <p className="text-xs sm:text-sm font-semibold tracking-[0.15em] uppercase text-[#8fd23a]">
            We have So Meany years of experience
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
            <span className="">Keep calm</span>
            
              and go{" "}
              <span className="text-[#dacb00]">Commercial </span>
              <span className="text-[#ffffff]">solar</span>
       
          </h1>

          <p className="mt-4 text-sm sm:text-base text-slate-300 max-w-xl">
            Power your business with high-performance, low-maintenance commercial
            solar systems—engineered for maximum savings, reliability and a
            cleaner energy footprint.
          </p>

          <div className="mt-8">
            <button className="inline-flex items-center gap-2 rounded-md bg-[#af890b] px-6 py-3 text-sm sm:text-base font-semibold text-white shadow-lg shadow-[#53b225]/30 transition hover:bg-[#c7a409]">
              Let&apos;s Talk
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Right image */}
        <div className="relative z-0 flex-1">
          <div className="relative ml-auto h-[360px] w-full max-w-xl overflow-hidden rounded-none lg:rounded-l-[60px] lg:rounded-r-none">
            <img
              src="https://www.soleosenergy.com/wp-content/uploads/2025/01/WhatsApp-Image-2024-04-27-at-3.50.16-PM-7.jpeg-scaled.jpg"
              alt="Engineer installing commercial solar panels"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
