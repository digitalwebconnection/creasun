const AboutUsHero = () => {
  return (
    <section
      className="relative overflow-hidden py-10 sm:py-14 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('https://insolationenergy.in/public/upload/seo/solar-panels-in-india-ina.jpg')`,
      }}
    >
      {/* Light overlay */}
      <div className="absolute inset-0 bg-black/80 " />

      {/* soft background glow */}
      <div className="pointer-events-none absolute -right-32 top-0 h-80 w-80 rounded-full bg-[#F5B835]/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-40 bottom-0 h-80 w-80 rounded-full bg-[#2E7AE3]/30 blur-3xl" />

      <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        
        {/* LEFT SECTION */}
        <div className="max-w-xl">
          <p className="mb-3 text-xs font-semibold tracking-[0.25em] text-white">
            ABOUT CREASUN ENERGY
          </p>

          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-[40px]">
            Engineering{" "}
            <span className="relative inline-block">
              <span className="absolute inset-0 rounded-md bg-[#F5B835]/80"></span>
              <span className="relative px-1 text-slate-900">Reliable Solar</span>
            </span>{" "}
            Power for Gujarat
          </h1>

          <p className="mt-4 text-sm leading-relaxed text-white sm:text-[15px]">
            Creasun Energy is a Gujarat-based solar EPC company helping homes,
            businesses and industries move to dependable, low-maintenance solar
            power with high-performance rooftop and ground-mount systems.
          </p>

          {/* <p className="mt-3 text-sm leading-relaxed text-white sm:text-[15px]">
            From design and engineering to installation, subsidy guidance and
            support, our team ensures every project is built for real-world
            performance.
          </p> */}

          {/* Stats */}
          {/* <div className="mt-6 grid grid-cols-2 gap-3 text-xs sm:text-[13px]">
            {[
              { label: "Residential Rooftop", color: "#2E7AE3" },
              { label: "Commercial / Shops", color: "#F5B835" },
              { label: "Industrial Plants", color: "#031E6C" },
              { label: "Ground‑Mounted", color: "#10B981" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 rounded-2xl bg-white/80 px-3 py-2 shadow-sm"
              >
                <span
                  className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[12px] font-semibold"
                  style={{ backgroundColor: `${item.color}15`, color: item.color }}
                >
                  ●
                </span>
                <span>{item.label}</span>
              </div>
            ))}
          </div> */}

          <div className="mt-8 flex gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#031E6C] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#2E7AE3]"
            >
              Talk to Our Team ↗
            </a>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-800 hover:border-[#2E7AE3] hover:text-[#2E7AE3]"
            >
              View Projects
            </a>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-lg">
          <div className="relative overflow-hidden h-80 rounded-4xl bg-slate-900/5 shadow-[0_24px_70px_rgba(15,23,42,0.25)]">
            <img
              src="https://solariumenergy.in/wp-content/uploads/2024/12/solar-panels-scaled-1-1024x461.jpeg"
              alt="Creasun Energy rooftop solar installation"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-slate-900/80 to-transparent" />
            
          </div>

          {/* badge */}
          <div className="absolute right-2 top-2 w-44 rounded-3xl bg-[#031E6C] px-4 py-4 text-white shadow-xl">
            <p className="text-[10px] tracking-[0.23em] text-slate-300">EPC EXPERTS</p>
            <p className="mt-2 text-2xl font-semibold">Since 2018</p>
            <p className="mt-2 text-[11px] leading-snug text-slate-300">
              Based in Gujarat, delivering rooftop & industrial solar projects with
              on-time execution excellence.
            </p>
          </div>

          {/* bottom mini card */}
          <div className="absolute -bottom-10 left-8 w-70 rounded-3xl bg-white p-3 shadow-xl">
            <div className="flex items-start gap-3">
              <div className="mt-0.5 flex h-10 w-20 items-center  rounded-full bg-[#F5B835]/15 text-[18px]">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZyv6cuS9v6UqPb9qHHxGUe3q_UvMdROGNag&s" className=" rounded-full h-8"  alt="" />
              </div>
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.18em] text-slate-400">
                  TYPICAL RESULT
                </p>
                <p className="text-xs font-semibold text-slate-900">
                  Up to 90% savings on electricity bills with optimized rooftop design.
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
