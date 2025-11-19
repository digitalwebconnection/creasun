import { useEffect, useState } from "react";
import "../Projects/creasunHero.css"; // <- important

const SLIDES = [
  {
    id: 1,
    title: "100 kW Commercial Rooftop",
    subtitle: "Rajkot • Retail Showroom",
    image: "https://solarsmart.co.in/wp-content/uploads/2025/01/82318b4b49.jpg",
    description:
      "High-performance rooftop system that cuts daytime grid consumption for a busy retail showroom.",
  },
  {
    id: 2,
    title: "250 kW Industrial Shed",
    subtitle: "Ahmedabad • Engineering Unit",
    image: "https://solarsmart.co.in/wp-content/uploads/2025/03/New-Project.png",
    description:
      "Large shed installation optimised for machinery load profile, string design and safety.",
  },
  {
    id: 3,
    title: "8 kW Premium Home Rooftop",
    subtitle: "Rajkot • Bungalow",
    image:
      "https://zodiacenergy.com/images/blog/why-summer-is-best-for-solar-installation.png",
    description:
      "Premium residential rooftop for a 3–4 BHK bungalow with smart monitoring and clean aesthetics.",
  },
  {
    id: 4,
    title: "500 kW Factory Rooftop",
    subtitle: "Morbi • Ceramic Plant",
    image:
      " ",
    description:
      "High-capacity ceramic plant that offsets a major portion of production load with solar.",
  },
];

const CreasunProjectsHero = () => {
  const [active, setActive] = useState(0);

  // Auto change slide
  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % SLIDES.length);
    }, 5000); // must match animation duration in CSS
    return () => clearInterval(interval);
  }, []);

  const current = SLIDES[active];

  const goTo = (index: number) => setActive(index);
  const next = () => setActive((p) => (p + 1) % SLIDES.length);
  const prev = () => setActive((p) => (p - 1 + SLIDES.length) % SLIDES.length);

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-black text-white">
      {/* MAIN MOVING IMAGE */}
      <div
        key={active} // remounts to restart CSS animation
        className="hero-main-image absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${current.image})` }}
      >
        {/* gradient overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/30" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col px-6 py-10">
        {/* Text from active slide */}
        <div className="flex-1 flex items-center">
          <div className="max-w-xl">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-slate-200/90">
              Creasun Energy • Project Showcase
            </p>

            <p className="mt-4 text-xs font-semibold uppercase tracking-[0.3em] text-yellow-300/90">
              {current.subtitle}
            </p>

            <h1 className="mt-2 text-4xl font-semibold leading-tight sm:text-5xl lg:text-[3.2rem]">
              {current.title}
            </h1>

            <p className="mt-4 text-sm text-slate-100/85 sm:text-base">
              {current.description}
            </p>

            <div className="mt-6 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-[0.2em]">
              <button className="rounded-full bg-yellow-400 px-6 py-2.5 text-slate-900 shadow-lg shadow-yellow-400/40 hover:bg-yellow-300">
                View project details
              </button>
              <button className="rounded-full border border-white/40 bg-white/5 px-6 py-2.5 text-slate-50 hover:border-yellow-300 hover:bg-white/10">
                Book a site visit
              </button>
            </div>
          </div>
        </div>

        {/* Bottom controls + thumbnails */}
        <div className="mt-6 flex flex-col gap-4 pb-2">
          {/* controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 text-xs">
              <button
                onClick={prev}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/50 hover:border-yellow-300 hover:text-yellow-300"
              >
                ◀
              </button>
              <button
                onClick={next}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-white/40 bg-white/50 hover:border-yellow-300 hover:text-yellow-300"
              >
                ▶
              </button>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold tracking-[0.25em]">
              <div className="h-0.5 w-32 overflow-hidden rounded-full bg-white/25 md:w-40">
                <div
                  className="h-full bg-yellow-400 transition-all duration-500"
                  style={{
                    width: `${((active + 1) / SLIDES.length) * 100}%`,
                  }}
                />
              </div>
              <span>
                {String(active + 1).padStart(2, "0")}/
                {String(SLIDES.length).padStart(2, "0")}
              </span>
            </div>
          </div>

          {/* thumbnails row */}
          <div className="flex gap-4">
            {SLIDES.map((slide, index) => {
              const isActive = index === active;
              return (
                <button
                  key={slide.id}
                  onClick={() => goTo(index)}
                  className={`relative h-20 w-28 overflow-hidden rounded-2xl border transition-all duration-300
                    ${
                      isActive
                        ? "border-yellow-400 shadow-lg shadow-yellow-400/40 scale-100"
                        : "border-white/25 opacity-75 hover:opacity-100 scale-95"
                    }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
                  <span className="relative z-10 block px-2 pb-1 pt-7 text-[9px] text-left font-semibold leading-tight text-slate-50">
                    {slide.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CreasunProjectsHero;
