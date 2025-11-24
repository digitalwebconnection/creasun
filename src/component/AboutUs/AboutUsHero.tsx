const AboutUsHero = () => {
  return (
    <section
      className="relative overflow-hidden py-12 sm:py-16 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://insolationenergy.in/public/upload/seo/solar-panels-in-india-ina.jpg')`,
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/85" />

      {/* Soft colored glows */}
      <div className="pointer-events-none absolute -right-40 top-0 h-80 w-80 rounded-full bg-[#F5B835]/25 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#2E7AE3]/25 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* LEFT SECTION */}
        <div className="max-w-xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 border border-white/10 mb-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F5B835]" />
            <p className="text-[11px] font-semibold tracking-[0.25em] text-[#B1D5FA]">
              ABOUT CREASUN ENERGY
            </p>
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold tracking-tight text-white leading-tight">
            Engineering{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 rounded-md bg-linear-to-r from-[#fac147] via-[#f3ca58] to-[#F5B835] opacity-90" />
              <span className="relative px-1 text-slate-900">
                Reliable Solar
              </span>
            </span>{" "}
            Power for Gujarat
          </h1>

          {/* Subtext */}
          <p className="mt-4 text-sm sm:text-[15px] leading-relaxed text-[#E3EEFF]">
            Creasun Energy is a Gujarat-based solar EPC company helping homes,
            businesses, and industries move to dependable, low-maintenance solar
            power with high-performance rooftop and ground-mount systems.
          </p>

          <p className="mt-3 text-sm sm:text-[15px] leading-relaxed text-[#CEDDFF]/90">
            From site assessment and design to approvals, subsidy guidance, and
            after-sales support — every system is engineered for real-world
            savings and long-term reliability.
          </p>

          {/* Highlights */}
          <div className="mt-5 grid grid-cols-2 gap-3 text-[11px] sm:text-xs">
            {[
              "Residential Rooftop",
              "Shops & Commercial",
              "Industrial Plants",
              "Ground-Mounted Systems",
            ].map((label, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-2xl bg-white/5 px-3 py-2 border border-white/10"
              >
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#F5B835]/15 text-[11px] font-semibold text-[#F5B835]">
                  ●
                </span>
                <span className="text-[#E3EEFF]">{label}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#031E6C] px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(15,23,42,0.55)] transition hover:bg-[#2E7AE3] hover:-translate-y-0.5"
            >
              Talk to Our Team ↗
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-[#B1D5FA]/50 bg-white/10 px-5 py-3 text-sm font-semibold text-[#E3EEFF] hover:border-[#F5B835] hover:text-[#F5B835] hover:bg-white/5"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          {/* Decorative orbit behind card */}
          <div className="pointer-events-none absolute -inset-6 rounded-4xl border border-white/5" />
          <div className="pointer-events-none absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-[#F5B835]/15 blur-3xl" />

          {/* Main card */}
          <div className="relative overflow-hidden h-80 rounded-[28px] bg-slate-900/40 border border-white/10 shadow-[0_24px_70px_rgba(15,23,42,0.7)] backdrop-blur-sm">
            <img
              src="https://solariumenergy.in/wp-content/uploads/2024/12/solar-panels-scaled-1-1024x461.jpeg"
              alt="Creasun Energy rooftop solar installation"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-950/90 via-slate-900/40 to-transparent" />

            {/* Bottom strip stats */}
            <div className="absolute inset-x-0 bottom-0 px-4 pb-4">
              <div className="flex flex-wrap gap-2 text-[11px] text-[#E3EEFF]">
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 border border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  1,000+ kW Rooftop Installed
                </span>
                <span className="inline-flex items-center gap-1 rounded-full bg-white/5 px-3 py-1 border border-white/10">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#F5B835]" />
                  90% Avg. Bill Savings*
                </span>
              </div>
            </div>
          </div>

          {/* Top right badge */}
          <div className="absolute right-2 top-2 w-44 rounded-3xl bg-[#031E6C] px-4 py-4 text-white shadow-xl shadow-black/50 border border-[#2E7AE3]/40">
            <p className="text-[10px] tracking-[0.23em] text-slate-300">
              EPC EXPERTS
            </p>
            <p className="mt-2 text-2xl font-semibold">Since 2018</p>
            <p className="mt-2 text-[11px] leading-snug text-slate-300">
              Gujarat-based team delivering rooftop & industrial solar with
              on-time execution and quality control.
            </p>
          </div>

          {/* Bottom mini card */}
          <div className="absolute -bottom-10 left-8 w-72 rounded-3xl bg-white p-3.5 shadow-xl shadow-slate-900/60 border border-slate-200/80">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-1 items-center justify-center rounded-full bg-[#F5B835]/12">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyv6cuS9v6UqPb9qHHxGUe3q_UvMdROGNag&s"
                  className="rounded-full h-8 w-8 object-cover"
                  alt="Solar savings"
                />
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  TYPICAL RESULT
                </p>
                <p className="text-xs font-semibold text-slate-900">
                  Up to 90% savings on electricity bills with optimized rooftop
                  system design and net metering.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHero;
