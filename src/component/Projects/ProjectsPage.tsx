import React, { useEffect, useMemo, useState, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Zap, X } from "lucide-react";
import shreehari from "../../assets/400 KW Shreehari Namkeen.jpg";
import eminentia from "../../assets/500kw eminentia polypack .png";
import primescal from "../../assets/600 KW Primescal Straps Pvt. Ltd..jpg";
import everest from "../../assets/700 KW – Everest Industries Ltd.jpg";
import altis from "../../assets/100 KW – Altis POLYTECH.png";
import chamunda from "../../assets/Chamunda Oil Mill – 120 KW.jpg";
import samvi from "../../assets/5 MW – Samvi Spinning Mill Pvt. Ltd..jpg";
import finthread from "../../assets/Fin Thread – 3.5 MW.jpg";
import shreepadmavati from "../../assets/400 KW – Shree Padmavati Refine Private Limited.png";
/*
 * ProjectsPage.tsx
 * - Updated design: cleaner cards, capacity in footer, modal with thumbnails
 * - Replaced images with solar installation images (Unsplash)
 */

/* --- TYPES & DATA --- */
type Tag = string;

type Project = {
  id: string;
  title: string;
  location: string;
  year: number;
  capacity?: string;
  type?: string;
  hero: string;
  gallery?: string[];
  summary?: string;
  highlights?: string[];
  client?: string;
  tags?: Tag[];
};

const PROJECTS: Project[] = [
  {
    id: "400 KW – Shreehari Namkeen",
    title: "400 KW – Shreehari Namkeen",
    location: "Shree Swaminarayan Food Pvt. Ltd.,Near Gondal Cross Roads, R.B. Highway, S Atkot Bridge, Jasdan, Gujarat 360040",
    year: 2025,
    capacity: "400 KW",

    // HERO + GALLERY: replaced with solar installation imagery from Unsplash
    hero: shreehari,
    gallery: [
      shreehari,
    ],
    summary:
      "400 KW commercial solar power plant installed for Shreehari Namkeen to reduce electricity costs and support sustainable food production operations.",

    highlights: [
      "400 KW on-grid solar power plant",
      "High-efficiency mono PERC solar panels",
      "Industrial-grade string inverters",
      "Real-time remote monitoring system",
      "25-year solar panel performance warranty"
    ],

    client: "Shreehari Namkeen (Shree Swaminarayan Food Pvt. Ltd.)",

    tags: ["Commercial Solar", "Gujarat", "Industrial Rooftop"]

  },
  {
    id: "500 KW – Eminentia Polypack LLP",
    title: "500 KW – Eminentia Polypack LLP",
    location: "Eminentia Polypack LLP,Behind Neknam Police Station, Opp 66 KV Substation (GETCO Neknam Tal. Tankara, Dis, Morbi, Gujarat 363650",
    year: 2024,
    capacity: "500 KW",

    hero: eminentia,
    gallery: [
      eminentia,
    ],
    summary:
      "Complete turnkey solar EPC project designed for industrial power optimization. The plant is engineered to reduce electricity costs while ensuring high efficiency and long-term reliability.",

    highlights: [
      "500 KW industrial rooftop solar installation",
      "High-efficiency mono PERC solar modules",
      "Advanced inverter system with remote monitoring",
      "Optimized design for maximum energy generation",
      "Significant reduction in grid electricity dependency"
    ],

    client: "Eminentia Polypack LLP",

    tags: ["Industrial", "Rooftop Solar", "Gujarat", "Commercial"]
  },
  {
    id: "600 KW – Primescal Straps Pvt. Ltd.",
    title: "600 KW – Primescal Straps Pvt. Ltd.",
    location: "Primeseal Straps Pvt. Ltd,Tal.:- Gondal, Survey No. 55/1, P3 P3 & P4, Plot No. 2, B/h. Viraj Agrico Co, Dist, nr. Bharudi Toll Plaza, :, Pipaliya, Gujarat 360311",
    year: 2025,
    capacity: "600 KW",

    hero:
      primescal,
    gallery: [
      primescal,
    ],
    summary:
      "Turnkey industrial rooftop solar installation designed to reduce operational electricity costs and ensure long-term sustainable power generation for manufacturing operations.",

    highlights: [
      "600 KW industrial rooftop solar plant",
      "Approx. 3,000 units clean energy generation per day",
      "Advanced monitoring system for real-time performance tracking",
      "High-efficiency Tier-1 solar modules",
      "25-year solar panel performance warranty"
    ],

    client: "Primescal Straps Pvt. Ltd.",

    tags: [
      "Industrial",
      "Rooftop Solar",
      "Gujarat",
      "Commercial Solar"
    ]
  },
  {
    id: "700 KW – Everest Industries Ltd",
    title: "700 KW – Everest Industries Ltd",
    location: "Everest Industries Ltd,Samatpor, Gujarat 392130",
    year: 2023,
    capacity: "700 KW",

    hero:
      everest,
    gallery: [everest],
    summary:
      "Complete solar EPC installation for Everest Industries Ltd including rooftop solar system designed to reduce grid dependency and optimize industrial energy consumption.",

    highlights: [
      "700 KW industrial rooftop solar plant",
      "High-efficiency mono PERC solar panels",
      "Advanced inverter technology",
      "Remote monitoring system",
      "25-year solar panel performance warranty"
    ],

    client: "Everest Industries Ltd",

    tags: ["Rooftop Solar", "Gujarat", "Industrial"]
  },
  {
    id: "100 KW – Altis Polytech",
    title: "100 KW – Altis Polytech",
    location: "Altis Polytech, Gurudev Industries-4, Plot No.4, Survey No.369, Balaji Chowk, Behind Ravki Police Chowki, Ravki, Rajkot, Gujarat 360004",
    year: 2022,
    capacity: "100 KW",
    hero:
      altis,
    gallery: [altis],
    summary:
      "Turnkey rooftop solar EPC installation for Altis Polytech designed to reduce electricity costs and ensure reliable green energy generation for industrial operations.",

    highlights: [
      "100 KW rooftop solar installation",
      "Approx. 500 units daily power generation",
      "High-efficiency mono PERC solar panels",
      "Net-metering enabled system",
      "Remote monitoring system installed",
      "25-year solar panel performance warranty"
    ],

    client: "Altis Polytech",

    tags: ["Rooftop Solar", "Industrial", "Gujarat", "Commercial"]
  },
  {
    id: "120 KW – Chamunda Oil Mill",
    title: "120 KW – Chamunda Oil Mill",
    location: "Shree chamunda krupa oil mil vinchiya , 6939+HC4, Vinchhiya, Gujarat 360055",
    year: 2024,
    capacity: "120 KW",
    hero:
      chamunda,
    gallery: [chamunda],
    summary:
      "Turnkey EPC installation of a 120 KW commercial rooftop solar plant for Chamunda Oil Mill, designed to reduce electricity costs and ensure sustainable energy generation for daily mill operations.",

    highlights: [
      "120 KW commercial rooftop solar installation",
      "Approx. 600 units of clean energy generated daily",
      "High-efficiency mono PERC solar panels",
      "Grid-connected system with net metering",
      "Real-time performance monitoring system",
      "25-year solar panel performance warranty"
    ],

    client: "Chamunda Oil Mill",

    tags: [
      "Rooftop Solar",
      "Commercial Solar",
      "Gujarat",
      "Industrial Solar"
    ]
  },
  {
    id: "5 MW – Samvi Spinning Mill Pvt. Ltd.",
    title: "5 MW – Samvi Spinning Mill Pvt. Ltd.",
    location: "H88R+8WC Beraja, Gujarat",
    year: 2024,
    capacity: "5 MW",
    hero:
      samvi,
    gallery: [samvi
    ],
    summary:
      "Turnkey solar EPC project for Samvi Spinning Mill featuring a high-efficiency ground-mounted solar power plant designed to reduce industrial electricity costs and ensure sustainable energy production.",

    highlights: [
      "5 MW high-efficiency solar power plant",
      "Industrial-grade grid-connected system",
      "Advanced remote monitoring system",
      "High performance Tier-1 solar modules",
      "Long-term performance optimization"
    ],

    client: "Samvi Spinning Mill Pvt. Ltd.",

    tags: ["Industrial", "Gujarat", "Ground Mounted", "Solar EPC"]
  },
  {
    id: "3.5 MW – Fin Thread",
    title: "3.5 MW – Fin Thread",
    location: "FINETHREAD SOLAR PLANT, J85P+9W, Bhader, Gujarat 360410",
    year: 2024,
    capacity: "3.5 MW",
    hero:
      finthread,
    gallery: [finthread],
    summary:
      "Turnkey solar EPC project for Finethread Solar Plant in Gujarat, delivering efficient power generation through advanced photovoltaic technology and optimized plant design.",

    highlights: [
      "3.5 MW installed solar capacity",
      "High-efficiency solar PV modules",
      "Grid-connected power generation system",
      "Advanced monitoring & plant performance tracking",
      "Designed for maximum energy yield and reliability"
    ],

    client: "Finethread Solar Plant",

    tags: [
      "Utility Scale",
      "Gujarat",
      "Industrial",
      "Solar EPC"
    ]
  },
  {
    id: "400 KW – Shree Padmavati Refine Pvt. Ltd.",
    title: "400 KW – Shree Padmavati Refine Pvt. Ltd.",
    location: "SHREE PADMAVATI REXINE PRIVATE LIMITED,Dist. : Jamnagar, New R.S. No. 807 (Old R.S. No. 134/1/P-1 Nikava - Nana Vadala Road Near PGCVL Sub Station Taluka : Kalawad, Nana Vadala, Gujarat 361162",
    year: 2024,
    capacity: "400 KW",
    hero:
      shreepadmavati,
    gallery: [shreepadmavati],
    summary:
      "Turnkey solar EPC project for a 400 KW industrial rooftop solar power plant designed to reduce electricity costs and ensure sustainable energy for manufacturing operations.",

    highlights: [
      "400 KW industrial rooftop solar installation",
      "High-efficiency mono PERC solar modules",
      "Grid-connected system with advanced monitoring",
      "Remote performance monitoring system",
      "25-year solar module performance warranty"
    ],

    client: "Shree Padmavati Rexine Pvt. Ltd.",

    tags: [
      "Industrial",
      "Rooftop Solar",
      "Gujarat",
      "Manufacturing",
      "Grid Connected"
    ]
  },
];

// Utility to open Google maps for project location


/* --- COMPONENTS --- */

/** ProjectGridItem
 * - Removed the top-right capacity badge (was the "such bar")
 * - Capacity shown in card footer
 */
function ProjectGridItem({
  project,
  openProject,
}: {
  project: Project;
  openProject: (p: Project) => void;
}): JSX.Element {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -18 }}
      transition={{ type: "spring", stiffness: 110, damping: 18 }}
      whileHover={{ translateY: -6, boxShadow: "0 16px 40px rgba(2,6,23,0.08)", scale: 1.01 }}
      onClick={() => openProject(project)}
      className="bg-white rounded-2xl overflow-hidden cursor-pointer flex flex-col border border-slate-400"
    >
      <div className="relative w-full h-56">
        <img
          src={project.hero}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        {/* subtle overlay with title */}
        <div className="absolute inset-0 bg-linear-to-t from-black/45 to-transparent flex items-end p-4">
          <div>
            <h3 className="text-lg font-semibold text-white leading-snug">{project.title}</h3>
            <div className="text-xs text-slate-200 mt-1">{project.location} • {project.year}</div>
          </div>
        </div>
      </div>

      <div className="p-4 flex flex-col gap-3 flex-1">
        <p className="text-sm text-slate-700 line-clamp-3">{project.summary}</p>

        <div className="flex items-center justify-between mt-auto pt-2 border-t border-slate-100">
          <div className="flex gap-2 items-center text-xs text-slate-500">
            <MapPin className="h-4 w-4 text-emerald-500" />
            <span>{project.type}</span>
          </div>

          {/* Capacity moved here (less intrusive) */}
          <div className="text-xs font-semibold text-emerald-700">{project.capacity}</div>
        </div>
      </div>
    </motion.article>
  );
}

/** ProjectModal
 * - Larger media area, thumbnail strip, capacity visible
 */
function ProjectModal({
  selected,
  closeModal,
  nextImage,
  prevImage,
  carouselIndex,
}: {
  selected: Project;
  closeModal: () => void;
  nextImage: () => void;
  prevImage: () => void;
  carouselIndex: number;
}): JSX.Element {
  const isGallery = selected.gallery && selected.gallery.length > 0;
  const images = isGallery ? selected.gallery! : [selected.hero];
  const currentImage = images[carouselIndex % images.length];


  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={closeModal}
        aria-hidden
      />

      <motion.div
        className="relative bg-white rounded-2xl shadow-2xl max-w-6xl w-full overflow-hidden max-h-[92vh] grid grid-cols-1 md:grid-cols-12"
        initial={{ y: 12, scale: 0.98 }}
        animate={{ y: 0, scale: 1 }}
        exit={{ y: 12, scale: 0.98 }}
        transition={{ type: "spring", stiffness: 140, damping: 22 }}
        role="dialog"
        aria-modal="true"
        aria-label={`${selected.title} details`}
      >
        {/* Media area */}
        <div className="md:col-span-7 bg-slate-100 relative flex flex-col">
          <img src={currentImage} alt={selected.title} className="w-full h-[48vh] md:h-full object-cover" loading="lazy" />

          {/* Left/Right controls */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
                aria-label="Previous image"
              >
                ‹
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2"
                aria-label="Next image"
              >
                ›
              </button>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/50 text-white text-xs px-3 py-1 rounded-full">
                {carouselIndex + 1} / {images.length}
              </div>
            </>
          )}

          {/* Thumbnail strip */}
          {images.length > 1 && (
            <div className="flex gap-2 p-3 overflow-x-auto bg-white/60">
              {images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => {

                  }}
                  className={`flex-none w-20 h-12 rounded-md overflow-hidden border ${carouselIndex === idx ? "ring-2 ring-emerald-400" : "border-slate-200"}`}
                  aria-label={`Show image ${idx + 1}`}
                >
                  <img src={img} alt={`thumb-${idx}`} className="w-full h-full object-cover" loading="lazy" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Details */}
        <div className="md:col-span-5 p-6 overflow-y-auto">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-2xl font-bold">{selected.title}</h3>
              <div className="text-sm text-slate-500 mt-1">{selected.location} • {selected.year}</div>
            </div>
            <button onClick={closeModal} className="p-2 rounded-full bg-slate-100 hover:bg-slate-200 transition" aria-label="Close details">
              <X className="h-5 w-5 text-slate-600" />
            </button>
          </div>

          <p className="mt-4 text-slate-700 leading-relaxed">{selected.summary}</p>

          <div className="mt-4 p-4 bg-emerald-50 rounded-lg">
            <h4 className="font-semibold text-emerald-800">Key Information</h4>
            <div className="grid grid-cols-2 gap-2 mt-2 text-sm">
              <div><span className="font-medium">Capacity:</span> {selected.capacity ?? 'N/A'}</div>
              <div><span className="font-medium">Client:</span> {selected.client ?? 'Confidential'}</div>
              <div><span className="font-medium">Tags:</span> {(selected.tags || []).join(', ') || '—'}</div>
            </div>
          </div>

          <h4 className="mt-6 font-semibold border-b pb-2">Technical Highlights</h4>
          <ul className="list-disc list-inside mt-3 text-sm text-slate-700 space-y-1">
            {(selected.highlights && selected.highlights.length > 0) ? selected.highlights.map((h, idx) => <li key={idx}>{h}</li>) : <li>No technical specifications provided.</li>}
          </ul>

          <div className="mt-6 flex gap-3">
          <a
  href="tel:9624120591"
  className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
>
  <Zap className="h-5 w-5" /> Request Proposal
</a>
            
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* --- MAIN COMPONENT --- */
export default function ProjectsPage(): JSX.Element {
  const [query] = useState<string>("");
  const [tag] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);
  const [carouselIndex, setCarouselIndex] = useState<number>(0);

  // Open / close modal
  const openProject = (p: Project) => {
    setSelected(p);
    setCarouselIndex(0);
    // prevent body scroll while modal open
    document.body.style.overflow = "hidden";
  };
  const closeModal = () => {
    setSelected(null);
    setCarouselIndex(0);
    document.body.style.overflow = "";
  };

  // Carousel controls
  const nextImage = React.useCallback(() => {
    if (!selected) return;
    const len = (selected.gallery && selected.gallery.length) ? selected.gallery.length : 1;
    setCarouselIndex((i) => (i + 1) % len);
  }, [selected]);

  const prevImage = React.useCallback(() => {
    if (!selected) return;
    const len = (selected.gallery && selected.gallery.length) ? selected.gallery.length : 1;
    setCarouselIndex((i) => (i - 1 + len) % len);
  }, [selected]);

  // Keyboard handling
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") closeModal();
      if (!selected) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [selected, nextImage, prevImage]);



  // Filtered projects
  const filtered = useMemo<Project[]>(() => {
    return PROJECTS.filter((p) => {
      const matchesTag = tag === "All" ? true : (p.tags || []).includes(tag);
      const q = query.trim().toLowerCase();
      const hay = (p.title + " " + p.location + " " + (p.client || "") + " " + (p.tags || []).join(" ")).toLowerCase();
      const matchesQuery = !q || hay.includes(q);
      return matchesTag && matchesQuery;
    });
  }, [tag, query]);

  return (
    <div className=" bg-slate-50 text-slate-900 px-3">
      <div className="max-w-7xl mx-auto px-0 md:px-6 pt-12 pb-6">
        <h1 className="text-5xl font-extrabold text-slate-900 mb-4">Our Recent Solar Projects</h1>
        <p className="text-sm text-slate-500 mb-6">Select a project to view technical highlights, gallery and request a proposal.</p>
      </div>

      <hr className="max-w-7xl mx-auto" />

      <div className="max-w-7xl mx-auto px-0 md:px-6 py-10">
        <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filtered.map((p) => (
              <ProjectGridItem key={p.id} project={p} openProject={openProject} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-slate-500 py-16 border border-dashed rounded-xl mt-10">
            <Zap className="h-8 w-8 text-slate-400 mx-auto mb-3" />
            <div className="text-xl font-semibold">No projects match your current filters.</div>
            <p className="mt-1">Try selecting 'All' or adjusting your search.</p>
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {selected && (
          <ProjectModal
            selected={selected}
            closeModal={() => {
              closeModal();
            }}
            nextImage={nextImage}
            prevImage={prevImage}
            carouselIndex={carouselIndex}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
