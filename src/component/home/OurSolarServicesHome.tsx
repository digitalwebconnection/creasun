
import {
  Sun,
  PanelsTopLeft,
  Gauge,
  BadgeCheck,
  Cable,
  ShieldCheck,
  Activity,
  BatteryCharging,
  Lightbulb,
} from "lucide-react";

/**
 * Creasun — Solar Services Grid (featured + tiles)
 * TailwindCSS + lucide-react icons
 */
export default function SolarServicesGridCreasun() {
  const items: ServiceItem[] = [
    {
      key: "rooftop",
      title: "Rooftop Solar Installation",
      desc:
        "End‑to‑end EPC for homes, societies & businesses — neat structures, safe wiring, and clean handover.",
      icon: PanelsTopLeft,
      featured: true,
      ribbon: "Rajkot • Gujarat • Pan‑India",
    },
    {
      key: "design",
      title: "Design & Engineering",
      desc:
        "Shadow analysis, yield estimates, SLDs, and STAAD‑informed structures for high PR and longevity.",
      icon: Gauge,
    },
    {
      key: "approvals",
      title: "Net‑Metering & Approvals",
      desc:
        "PM Surya Ghar, DISCOM liaison, and safety compliance — paperwork done right, on time.",
      icon: BadgeCheck,
    },
    {
      key: "bos",
      title: "Inverters & BOS Supply",
      desc:
        "Adani modules, Polycab inverters & cables, Creasun ACDB/DCDB, SPDs, meters — QA‑checked, ready stock.",
      icon: Cable,
    },
    {
      key: "om",
      title: "O&M / AMC",
      desc:
        "Preventive maintenance, cleaning schedules, and SLAs that protect output & uptime year‑round.",
      icon: ShieldCheck,
    },
    {
      key: "monitoring",
      title: "Monitoring & Analytics",
      desc:
        "Live dashboards, alerts, and PR tracking — see generation and savings in real time.",
      icon: Activity,
    },
    {
      key: "hybrid",
      title: "Hybrid & Storage",
      desc:
        "On‑grid + battery, DG sync & energy shifting to ride out outages and optimize tariffs.",
      icon: BatteryCharging,
    },

  ];

  return (
    <section className="relative bg-white">
      <div
        className="absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(700px 260px at 75% -5%, rgba(245,184,53,.12), transparent 60%), radial-gradient(800px 300px at 20% 0%, rgba(46,122,227,.10), transparent 65%)",
        }}
      />

      <div className="mx-auto max-w-7xl px-6 md:px-0 py-8 lg:py-10">
        <header className="max-w-7xl mx-auto text-center">
          <p className="inline-flex items-center gap-2 rounded-full bg-amber-100 px-3 py-1 text-xs font-semibold text-amber-900 ring-1 ring-amber-200">
            <span className="h-2 w-2 rounded-full bg-amber-500" /> Our Solar Services
          </p>
          <h2 className="mt-3 max-w-3xl mx-auto text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Reliable rooftop solar — engineered in Gujrat , built for India
          </h2>
          <p className="mt-3 text-slate-600">
            Transparent scopes, tidy execution, and measurable savings. Pick what you need or go turnkey — we’ll handle the rest.
          </p>
        </header>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {items.map((item, idx) => (
            <ServiceTile key={item.key} item={item} index={idx} />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 flex flex-wrap items-center gap-4">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-xl bg-linear-to-br from-[#2E7AE3] to-[#031E6C] px-6 py-3 font-semibold text-white shadow-[0_10px_35px_rgba(3,30,108,.35)] hover:brightness-110"
          >
            Book a Free Solar Consultation <Lightbulb className="h-5 w-5" />
          </a>
          {/* <span className="text-xs text-slate-500">Adani • Polycab • Creasun ACDB/DCDB • Secure Meters</span> */}
        </div>
      </div>
    </section>
  );
}

/* ---------------- components ---------------- */

type ServiceItem = {
  key: string;
  title: string;
  desc: string;
  icon: React.ElementType;
  featured?: boolean;
  ribbon?: string;
};

function ServiceTile({ item}: { item: ServiceItem; index: number }) {
  const Icon = item.icon;

  if (item.featured) {
    return (
      <article className="relative overflow-hidden rounded-2xl bg-linear-to-br from-amber-500 to-orange-400 p-px shadow-xl shadow-orange-500/40 sm:col-span-2">
        <div className="relative h-full rounded-2xl bg-white/90 px-6 py-6 backdrop-blur">
          <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-white/70 text-orange-600 ring-1 ring-black   ">
            <Icon className="h-6 w-6" />
          </div>
          <h3 className="text-xl font-extrabold text-slate-900">{item.title}</h3>
          <p className="mt-2 max-w-prose text-slate-700">{item.desc}</p>
          {item.ribbon && (
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 ring-1 ring-orange-200">
              <Sun className="h-3.5 w-3.5" /> {item.ribbon}
            </div>
          )}
          <div className="pointer-events-none absolute -right-6 -top-6 h-28 w-28 rounded-full bg-white/40 blur-2xl" />
        </div>
      </article>
    );
  }

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-800/30  bg-white p-6 shadow-xl shadow-black/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-amber-50 text-amber-600 ring-1 ring-amber-500 group-hover:bg-amber-100">
        <Icon className="h-5 w-5" />
      </div>
      <h3 className="text-lg font-semibold text-slate-900">{item.title}</h3>
      <p className="mt-1.5 text-sm leading-6 text-slate-600">{item.desc}</p>
      <span className="absolute bottom-0 left-6 right-6 h-0.5 scale-x-0 bg-linear-to-r from-amber-400 via-orange-400 to-transparent transition-transform duration-300 group-hover:scale-x-100" />
    </article>
  );
}