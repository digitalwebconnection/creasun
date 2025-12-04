import React from "react";

const GroundMountedPage: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Site & Project Planning",
      text: "We evaluate land quality, slope, evacuation route, and compliance factors to plan an optimal ground-mounted layout.",
      icon: "https://cdn-icons-png.flaticon.com/512/2910/2910821.png",
    },
    {
      number: "02",
      title: "Design, Research & Analysis",
      text: "Advanced energy yield simulation, structural engineering, and string planning to ensure maximum output & safety.",
      icon: "https://cdn-icons-png.flaticon.com/512/3201/3201648.png",
    },
    {
      number: "03",
      title: "Installation & Maintenance",
      text: "Professional construction, commissioning, and long-term O&M support to maintain plant performance year-round.",
      icon: "https://cdn-icons-png.flaticon.com/512/992/992534.png",
    },
  ];

  const applications = [
    {
      title: "Industrial Parks & Factories",
      text: "High-load facilities with large land parcels benefit from stable daytime solar generation.",
      image:
        "https://images.pexels.com/photos/221047/pexels-photo-221047.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "Agro & Warehousing Land",
      text: "Unused or low-yield land near farms and warehouses converted into solar assets.",
      image:
        "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
    {
      title: "SEZs & Industrial Clusters",
      text: "Shared ground-mounted plants that supply power to multiple units within a cluster.",
      image:
        "https://images.pexels.com/photos/247763/pexels-photo-247763.jpeg?auto=compress&cs=tinysrgb&w=900",
    },
  ];

  const advantages = [
    {
      title: "Higher Capacity per Acre",
      text: "Optimised spacing and structure design allow MW-scale systems on available land.",
    },
    {
      title: "Easy Maintenance Access",
      text: "Clear walkways and string layout make cleaning and service more efficient.",
    },
    {
      title: "Scalable for Future Expansion",
      text: "Plants can be extended in phases as your load grows or policies change.",
    },
    {
      title: "Better Thermal Performance",
      text: "Ground-mounted modules often run cooler than crowded rooftops, improving output.",
    },
  ];


  return (
    <div className="bg-white text-slate-800">
      <main className="mx-auto max-w-7xl px-4 py-12 sm:py-16 space-y-16 sm:space-y-20">
        {/* SECTION 1 – WORKING PROCESS (your original, upgraded) */}
        <section>
          <div className="text-center space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-emerald-600">
              Working Process
            </p>
            <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Ground-Mounted Solar Workflow
            </h2>
            <p className="text-sm text-slate-500 max-w-xl mx-auto mt-2">
              A clear, reliable process engineered for industrial-scale solar
              success.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative mt-12 mb-16">
            <div className="h-px w-full border-t border-dotted border-blue-900" />
            <div className="absolute inset-x-0 -top-6 flex justify-between px-4 sm:px-10">
              {steps.map((step) => (
                <div
                  key={step.number}
                  className="flex flex-col items-center gap-2"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white border border-blue-500  font-semibold shadow-md">
                    {step.number}
                  </div>
                  <div className="h-8 border-l border-dotted border-blue-900" />
                </div>
              ))}
            </div>
          </div>

          {/* Cards */}
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step) => (
              <div
                key={step.number}
                className="group rounded-2xl bg-white border border-slate-200 px-6 py-8 text-center shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-4 h-12 w-12">
                  <img
                    src={step.icon}
                    alt={step.title}
                    className="h-full w-full object-contain opacity-80 transition group-hover:opacity-100"
                  />
                </div>
                <h3 className="text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {step.text}
                </p>
                <div className="mt-5 h-1 w-12 mx-auto rounded-full bg-blue-500/30 group-hover:bg-blue-900 transition" />
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 2 – APPLICATIONS WITH IMAGES */}
        <section className="space-y-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-900">
              Where It Fits Best
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Ideal Use Cases for Ground-Mounted Solar
            </h3>
            <p className="mt-2 text-sm text-slate-600 max-w-2xl mx-auto">
              Ground-mounted systems unlock large-scale solar where rooftops are
              limited or scattered.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {applications.map((app) => (
              <div
                key={app.title}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="h-32 w-full overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.title}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                </div>
                <div className="px-5 py-4 space-y-2">
                  <h4 className="text-sm font-semibold text-slate-900">
                    {app.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-600">
                    {app.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 – KEY ADVANTAGES */}
        <section className="space-y-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Key Advantages
            </p>
            <h3 className="mt-2 text-2xl font-bold text-slate-900 sm:text-3xl">
              Why choose ground-mounted over only rooftop?
            </h3>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {advantages.map((adv) => (
              <div
                key={adv.title}
                className="flex gap-4 rounded-2xl border border-slate-200 bg-emerald-50/40 px-5 py-4 shadow-sm"
              >
                <div className="mt-1 h-8 w-8 flex items-center justify-center rounded-full bg-blue-900 text-white text-xs font-bold">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">
                    {adv.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-slate-600">
                    {adv.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 4 – DESIGN SNAPSHOT (IMAGE + CHECKLIST) */}
        <section className="grid gap-10 md:grid-cols-[1.1fr,1fr] md:items-center">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-blue-600">
              Design Snapshot
            </p>
            <h3 className="text-2xl font-bold text-slate-900 sm:text-3xl">
              What goes into a ground-mounted design?
            </h3>
            <p className="text-sm text-slate-600">
              Each plant is engineered to balance land use, structure cost,
              power evacuation and long-term maintainability.
            </p>

            <ul className="mt-2 space-y-2 text-sm text-slate-700">
              <li>• 3D shadow analysis & row spacing calculation</li>
              <li>• Soil / foundation design and structure selection</li>
              <li>• DC/AC cable routing and trench planning</li>
              <li>• Inverter yard, HT panel and grid interconnection</li>
              <li>• SCADA / monitoring integration for performance tracking</li>
            </ul>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-blue-100/50" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl">
              <img
                src="https://www.zunroof.com/zunroof-blog/wp-content/uploads/2018/06/hartford_landfill_solar_panels-e1466542749777.jpg"
                alt="Ground mounted layout"
                className="h-64 w-full object-cover"
              />
            </div>
            
          </div>
        </section>

      </main>
    </div>
  );
};

export default GroundMountedPage;
