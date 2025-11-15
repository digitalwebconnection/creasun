import { useEffect, useRef } from "react";
import { MapPin, Zap, SunMedium } from "lucide-react";

const projects = [
  {
    id: 1,
    name: "450 kWp Industrial Rooftop – Rajkot",
    capacity: "450 kWp",
    location: "Rajkot, Gujarat",
    highlight: "High PR industrial system for daytime process load.",
    image: "https://avaada.com/wp-content/uploads/types-ofsolar-panels-min-1-scaled-1.jpg",
  },
  {
    id: 2,
    name: "320 kWp Textile Plant – Ahmedabad",
    capacity: "320 kWp",
    location: "Ahmedabad, Gujarat",
    highlight: "Shadow-optimised layout on shed roofs.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN8brBmpXstX9bca3NaPWvTobHEfl-1K4kzg&s",
  },
  {
    id: 3,
    name: "120 kWp School Campus – Morbi",
    capacity: "120 kWp",
    location: "Morbi, Gujarat",
    highlight: "Designed around classroom & lab timings.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6xbKhFFknjHYckfwnqhwJQg3wC6p8-ZTPTQ&s",
  },
  {
    id: 4,
    name: "75 kWp Society Rooftop – Rajkot",
    capacity: "75 kWp",
    location: "Rajkot, Gujarat",
    highlight: "Society common area & lift loads on solar.",
    image: "https://sunapecopower.com/wp-content/uploads/2023/08/4.jpg",
  },
  {
    id: 5,
    name: "200 kWp Commercial Complex – Jamnagar",
    capacity: "200 kWp",
    location: "Jamnagar, Gujarat",
    highlight: "Tariff-optimised design for common utilities.",
    image: "https://freyrenergy.com/wp-content/uploads/2025/11/WhatsApp-Image-2025-11-13-at-11.49.35-AM.jpeg",
  },
];

export default function AutoScrollProjects() {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationId: number;
    const speed = 0.5; // adjust for faster/slower scroll

    const step = () => {
      if (!container) return;

      // if no need to scroll (content not wider than container), skip
      if (container.scrollWidth <= container.clientWidth) {
        animationId = requestAnimationFrame(step);
        return;
      }

      container.scrollLeft += speed;

      // when we reach the end, jump back to start for loop effect
      if (
        container.scrollLeft >=
        container.scrollWidth - container.clientWidth
      ) {
        container.scrollLeft = 0;
      }

      animationId = requestAnimationFrame(step);
    };

    animationId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="relative overflow-hidden py-10 bg-linear-to-b from-white via-[#F8FAFF] to-[#E6EEFF]">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto px-6">
        <p className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#0A2E9E] ring-1 ring-[#021930]">
          <span className="h-1.5 w-1.5 rounded-full bg-[#F5B835]" />
          Creasun Energy · Recent Projects
        </p>

        <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-[#031E6C]">
          Solar rooftops we’ve already{" "}
          <span className="bg-[#0A2E9E] bg-clip-text text-transparent">
            delivered with pride.
          </span>
        </h2>

        <p className="mt-3 text-sm text-[#283046]">
          A quick look at Creasun’s latest installations across Gujarat.
        </p>
      </div>

      {/* Auto-scroll row */}
      <div className="mt-10 px-6">
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto pb-4 pt-1 scrollbar-none"
        >
          {/* duplicate list for smoother loop if you want longer feel */}
          {[...projects, ...projects].map((project, idx) => (
            <ProjectCard key={`${project.id}-${idx}`} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ------------ Card Component ------------ */

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  return (
    <div className="min-w-60 max-w-60 sm:min-w-[280px] sm:max-w-[280px] rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300 ring-1 ring-slate-200 overflow-hidden">
      {/* Image */}
      <div className="relative h-40 w-full">
        <img
          src={project.image}
          alt={project.name}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-2 left-2 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 text-[0.65rem] bg-black/45 text-white px-2 py-1 rounded-full backdrop-blur-sm">
            <Zap className="h-3 w-3 text-[#F5B835]" />
            {project.capacity}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-[#031E6C] text-sm leading-tight">
          {project.name}
        </h3>

        <p className="mt-1 flex items-center gap-1 text-xs text-slate-600">
          <MapPin className="h-3.5 w-3.5 text-[#2E7AE3]" />
          {project.location}
        </p>

        <p className="mt-2 text-xs text-slate-600">{project.highlight}</p>

        <div className="mt-3 flex items-center gap-1 text-[0.7rem] text-[#0A2E9E] font-medium">
          <SunMedium className="h-3.5 w-3.5 text-[#F5B835]" />
          Clean Energy Delivered
        </div>
      </div>
    </div>
  );
}
