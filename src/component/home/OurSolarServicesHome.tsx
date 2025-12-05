
import {
  PanelsTopLeft,
  Gauge,
  BadgeCheck,
  Cable,
  ShieldCheck,
  Activity,
  BatteryCharging,
} from "lucide-react";

type ServiceItem = {
  key: string;
  title: string;
  desc: string;
  icon: React.ElementType;
};

const services: ServiceItem[] = [
  {
    key: "rooftop",
    title: "Rooftop Solar Installation",
    desc: "End-to-end EPC for homes, societies and businesses.",
    icon: PanelsTopLeft,
  },
  {
    key: "design",
    title: "Design & Engineering",
    desc: "Shadow analysis, yield estimates and safe structures.",
    icon: Gauge,
  },
  {
    key: "approvals",
    title: "Net-Metering & Approvals",
    desc: "PM Surya Ghar, DISCOM liaison and safety compliance.",
    icon: BadgeCheck,
  },
  {
    key: "bos",
    title: "Inverters & BOS Supply",
    desc: "Adani panels, Polycab inverters, Creasun L&T",
    icon: Cable,
  },
  {
    key: "om",
    title: "O&M / AMC",
    desc: "Cleaning, checks and SLAs that protect generation.",
    icon: ShieldCheck,
  },
  {
    key: "monitoring",
    title: "Monitoring & Analytics",
    desc: "See generation, PR and savings in real time.",
    icon: Activity,
  },
  {
    key: "hybrid",
    title: "Hybrid & Storage Solutions",
    desc: "On-grid + battery and DG sync for outages.",
    icon: BatteryCharging,
  },
];

export default function SolarServicesGridCreasun() {
  return (
    <section className="relative overflow-hidden  py-14">
      {/* Soft brand background */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-80"
      />
      {/* <div className="pointer-events-none absolute -right-24 bottom-[-140px] h-64 w-64 rounded-full bg-[#B1D5FA]/60 blur-3xl" /> */}
      {/* <div className="pointer-events-none absolute -left-32 top-24 h-64 w-64 rounded-full bg-[#031E6C]/20 blur-3xl" /> */}

      <div className="mx-auto max-w-7xl px-6 lg:px-0">
        {/* Header */}
        <header className="text-center max-w-5xl mx-auto">
          <p className="inline-flex items-center gap-2 rounded-full bg-white/90 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#0A2E9E] ring-1 ring-[#061422]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#F5B835]" />
            Creasun Energy · Solar Services
          </p>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#031E6C]">
            Reliable rooftop solar
            <span className="block bg-[#0A2E9E] bg-clip-text text-transparent">
              engineered in Gujarat, built for India.
            </span>
          </h2>

          <p className="mt-4 text-base sm:text-lg leading-relaxed ">
            A complete service stack — from design and approvals to supply and
            maintenance — so you work with one dependable partner for your
            entire rooftop solar journey.
          </p>
        </header>

        {/* Zig-zag pill layout */}
        <div className="mt-12 space-y-8 max-w-6xl px-2 mx-auto">
          {services.map((item, index) => (
            <ZigZagRow key={item.key} item={item} index={index} />
          ))}
        </div>

        
      </div>
    </section>
  );
}

/* ───────────── Zig-zag row: circle + pill ───────────── */

function ZigZagRow({ item, index }: { item: ServiceItem; index: number }) {
  const Icon = item.icon;
  const isRight = index % 2 === 1;

  return (
    <div className={`flex ${isRight ? "justify-end " : "justify-start"}`}>
      <div
        className={`flex items-center gap-4 ${
          isRight ? "flex-row-reverse" : ""
        }`}
      >
        {/* circle */}
        <div className="relative flex h-16 w-16 -mt-8 items-center justify-center rounded-full bg-[#031E6C] shadow-md shadow-[#031E6C]/40 ring-2 ring-white">
          <div className="absolute inset-[3px] rounded-full bg-linear-to-br from-[#2E7AE3] via-[#B1D5FA] to-[#0A2E9E]" />
          <div className="relative flex h-11 w-11 items-center justify-center rounded-full bg-white">
            <Icon className="h-6 w-6 text-[#0A2E9E]" />
          </div>
          {/* <span className="absolute -bottom-1.5 right-1 h-3 w-3 rounded-full bg-[#F5B835] shadow-sm shadow-[#F5B835]/70" /> */}
        </div>

        {/* pill + small description */}
        <div className="flex-1 min-w-[280px] sm:min-w-[560px] max-w-md">
          <div className="rounded-full bg-linear-to-r from-[#F5B835]  via-[#e0ac3b] to-[#B1D5FA] px-5 py-2 text-sm sm:text-base font-semibold text-[#031E6C] shadow-md shadow-[#2E7AE3]/20">
            {item.title}
          </div>
          <p className="mt-2 text-xs sm:text-sm text-slate-600">
            {item.desc}
          </p>
        </div>
      </div>
    </div>
  );
}
