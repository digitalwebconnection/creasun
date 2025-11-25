"use client";

export default function CommercialSolarCreasunSection() {
  const steps = [
    {
      no: "1",
      title: "Energy Audit & Feasibility",
      desc: "Evaluating your load profile, tariff structure, and rooftop potential to size the right commercial solar plant.",
    },
    {
      no: "2",
      title: "Design & Engineering",
      desc: "Creating an optimized layout, structure design, and inverter configuration for maximum generation & safety.",
    },
    {
      no: "3",
      title: "Execution & Installation",
      desc: "Supplying Tier-1 modules, BOS, and executing work with strict safety, quality checks, and minimum downtime.",
    },
    {
      no: "4",
      title: "Monitoring & O&M",
      desc: "24×7 performance monitoring, preventive maintenance, and long-term O&M to protect your solar investment.",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 lg:px-0">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_1.2fr] items-start">
          {/* LEFT: TEXT + STEPS */}
          <div>
            <p className="text-sm italic text-[#040038] mb-1">
              We power businesses, not just buildings.
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#333333] mb-3">
              Commercial Solar with Creasun Energy
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed mb-8 max-w-xl">
              Creasun Energy helps factories, warehouses, schools, showrooms,
              and offices turn idle rooftops into long-term assets. 
            </p>

            {/* Steps grid */}
            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {steps.map((step) => (
                <div key={step.no} className="relative">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#020064] text-white text-sm font-semibold">
                      {step.no}
                    </div>
                    <div className="h-px flex-1 bg-[#020064]" />
                  </div>
                  <h3 className="text-base font-semibold text-[#333333]">
                    {step.title}
                  </h3>
                  <p className="mt-1 text-sm text-gray-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>

            <button className="mt-9 inline-block bg-[#020064] px-8 py-3 text-sm font-semibold uppercase tracking-wide rounded-2xl text-white shadow-md hover:bg-[#020064] transition">
              View all commercial services
            </button>
          </div>

          {/* RIGHT: IMAGE MOSAIC WITH HOVER OVERLAY */}
          <div className="grid grid-cols-2 gap-x-5 gap-y-5 py-0 md:py-15 ">
            {/* Top-left */}
            <div className="col-span-1">
              <div className="relative aspect-4/3  overflow-hidden group shadow-2xl shadow-black">
                <img
                  src="https://5.imimg.com/data5/SELLER/Default/2022/2/JP/YC/HF/22763594/commercial-rooftop-solar-power-plant.jpg"
                  alt="Creasun commercial rooftop solar corridor"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white font-semibold text-sm sm:text-base p-4">
                    Rooftop Solar for Commercial Buildings
                  </p>
                </div>
              </div>
            </div>

            {/* Top-right */}
            <div className="col-span-1 mt-5">
              <div className="relative aspect-4/3 overflow-hidden group  shadow-2xl shadow-black">
                <img
                  src="https://images.pexels.com/photos/8853506/pexels-photo-8853506.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Engineer inspecting solar module"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white font-semibold text-sm sm:text-base p-4">
                    Professional Inspection & Quality Checks
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom-left */}
            <div className="col-span-1">
              <div className="relative aspect-4/3 overflow-hidden group shadow-2xl shadow-black">
                <img
                  src="https://images.pexels.com/photos/9875448/pexels-photo-9875448.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Technician maintaining commercial solar plant"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white font-semibold text-sm sm:text-base p-4">
                    Regular Maintenance & Uptime Focus
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom-right */}
            <div className="col-span-1 mt-5">
              <div className="relative aspect-4/3 overflow-hidden group shadow-2xl shadow-black">
                <img
                  src="https://images.pexels.com/photos/8853537/pexels-photo-8853537.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Pathway next to solar powered greenery"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end">
                  <p className="text-white font-semibold text-sm sm:text-base p-4">
                    Clean Energy for Greener Campuses
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* End mosaic */}
        </div>
      </div>
    </section>
  );
}
