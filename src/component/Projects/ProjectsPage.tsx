import React, { useEffect, useMemo, useState, type JSX } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Zap, X } from "lucide-react";

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
    id: "gujarat-8mw",
    title: "Gujarat Solar Plant — 8 MW",
    location: "Ahmedabad, Gujarat",
    year: 2025,
    capacity: "8 MW",
    type: "Hybrid",
    // HERO + GALLERY: replaced with solar installation imagery from Unsplash
    hero:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfakCD1twczIedZwXYxj8GWpYmi-OPLeRefQ&s",
    gallery: [
      "https://5.imimg.com/data5/SELLER/Default/2022/3/GE/NE/DX/65902490/solar-ground-mounted-power-plant.jpeg",
      "https://ychef.files.bbci.co.uk/624x351/p08mn4c2.jpg",
    ],
    summary:
      "Turnkey EPC for mixed rooftop + ground-mounted plant with SCADA and O&M.",
    highlights: ["8 MW capacity", "SCADA monitoring", "5-year performance guarantee"],
    client: "Gujarat Textile Park",
    tags: ["Hybrid", "Gujarat", "Commercial"],
  },
  {
    id: "surat-2mw",
    title: "Industrial Rooftop — 2 MW",
    location: "Surat, Gujarat",
    year: 2024,
    capacity: "2 MW",
    type: "Rooftop",
    hero:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCFwFzm7tm1oq06YuI7th7Fm2hRvQbH_b7_g&s",
    gallery: [
      "https://cdn-trans.info/uploads/2020/10/08e753449573beeea25b5839a80.jpg",
    ],
    summary:
      "Fast-deploy rooftop system, BESS-ready design for later storage addition.",
    highlights: ["2 MW", "BESS-ready"],
    client: "Bright Fabrics",
    tags: ["Rooftop", "Gujarat"],
  },
  {
    id: "kutch-20mw",
    title: "Kutch Utility Park — 20 MW",
    location: "Kutch, Gujarat",
    year: 2025,
    capacity: "20 MW",
    type: "Utility",
    hero:
      "https://etimg.etb2bimg.com/thumb/msid-108522976,imgsize-166840,width-1200,height=627,overlay-etenergy,resizemode-75/renewable/nhpc-bags-200-mw-solar-project-in-khavda-renewable-energy-park-in-gujarat.jpg",
    gallery: [
      "https://etimg.etb2bimg.com/thumb/msid-108522976,imgsize-166840,width-1200,height=627,overlay-etenergy,resizemode-75/renewable/nhpc-bags-200-mw-solar-project-in-khavda-renewable-energy-park-in-gujarat.jpg",
    ],
    summary:
      "Utility-scale ground-mount with single-axis trackers and central inverters.",
    highlights: ["Trackers", "Central inverters"],
    client: "GreenGrid Energy",
    tags: ["Utility", "Gujarat"],
  },
  {
    id: "bhavnagar-0-5mw",
    title: "Bhavnagar Agri Park — 0.5 MW",
    location: "Bhavnagar, Gujarat",
    year: 2023,
    capacity: "0.5 MW",
    type: "Community",
    hero:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUkHIU-gt1fJssIVqblQ4oe8g8ued6UGpMXQ&s",
    gallery: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsJkFAogSyzOEI500WCz-B9rtqUOIDoQPCrg&s"],
    summary:
      "Community solar powering irrigation and cold storage with subsidy facilitation.",
    highlights: ["Subsidy support", "Community model"],
    client: "Bhavnagar Agro Coop",
    tags: ["Community", "Gujarat"],
  },
  {
    id: "school-100kw",
    title: "School Rooftop — 100 kW",
    location: "Vadodara, Gujarat",
    year: 2022,
    capacity: "0.1 MW",
    type: "Rooftop",
    hero:
      "https://bluebirdsolar.com/cdn/shop/files/DAP_Delhi_100_KW_2_1.jpg?v=1654666139",
    gallery: ["https://amplussolar.com/blog/wp-content/uploads/2024/05/blog-topheader.webp"],
    summary:
      "CSR-supported rooftop system for clean energy & water heating at a local school.",
    highlights: ["CSR", "Education outreach"],
    client: "Sunrise School",
    tags: ["Rooftop", "Community"],
  },
  {
    id: "anand-1mw",
    title: "Anand Microgrid — 1 MW",
    location: "Anand, Gujarat",
    year: 2024,
    capacity: "1 MW",
    type: "Agriculture",
    hero:
      "https://images.unsplash.com/photo-1497471065136-6a3f9d4f1a39?q=80&w=1600&auto=format&fit=crop&ixlib=rb-4.0.3&s=solar10",
    gallery: [],
    summary:
      "Distributed microgrid powering irrigation pumps and cold storage across 10 farms.",
    highlights: ["Smart meters", "Cold storage"],
    client: "Anand Agro Cluster",
    tags: ["Agriculture", "Gujarat"],
  },
];

// Utility to open Google maps for project location
const getMapUrl = (location: string) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(location)}`;

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
      className="bg-white rounded-2xl overflow-hidden cursor-pointer flex flex-col border border-slate-100"
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
  const locationMapUrl = getMapUrl(selected.location);

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
              <div><span className="font-medium">Type:</span> {selected.type ?? 'N/A'}</div>
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
              href="#"
              onClick={(e) => e.preventDefault()}
              className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg font-medium hover:bg-emerald-700 transition"
            >
              <Zap className="h-5 w-5" /> Request Proposal
            </a>
            <a
              href={locationMapUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 px-4 py-2 border border-slate-300 rounded-lg hover:bg-slate-50 transition"
            >
              <MapPin className="h-5 w-5" /> Open Map
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
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-0 md:px-6 pt-12 pb-6">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Our Recent Solar Projects</h1>
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
