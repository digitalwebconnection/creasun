import { useEffect, useState } from "react";
import { motion, AnimatePresence, easeOut, easeIn } from "framer-motion"; // Install via: npm install framer-motion
import shreehari from "../../assets/400 KW Shreehari Namkeen.jpg";
import eminentia from "../../assets/500kw eminentia polypack .png";
import primescal from "../../assets/600 KW Primescal Straps Pvt. Ltd..jpg";
import everest from "../../assets/700 KW – Everest Industries Ltd.jpg";
import altis from "../../assets/100 KW – Altis POLYTECH.png";
import chamunda from "../../assets/Chamunda Oil Mill – 120 KW.jpg";
import samvi from "../../assets/5 MW – Samvi Spinning Mill Pvt. Ltd..jpg";
import finthread from "../../assets/Fin Thread – 3.5 MW.jpg";
import shreepadmavati from "../../assets/400 KW – Shree Padmavati Refine Private Limited.png";

const projects = [
  {
    id: 1,
    name: "400 KW – Shreehari Namkeen",
    capacity: "400 KW",
    location: "Shree Swaminarayan Food Pvt. Ltd.,Near Gondal Cross Roads, R.B. Highway, S Atkot Bridge, Jasdan, Gujarat 360040",
    daily: "2,000 Units",
    monthlySaving: "₹4,20,000",
    yearlySaving: "₹51,10,000",
    image: shreehari,
  },
  {
    id: 2,
    name: "500 KW – Eminentia Polypack LLP",
    capacity: "500 KW",
    location: "Eminentia Polypack LLP,Behind Neknam Police Station, Opp 66 KV Substation (GETCO Neknam Tal. Tankara, Dis, Morbi, Gujarat 363650",
    daily: "2,500 Units",
    monthlySaving: "₹5,25,000",
    yearlySaving: "₹63,87,500",
    image: eminentia,
  },
  {
    id: 3,
    name: "600 KW – Primescal Straps Pvt. Ltd.",
    capacity: "600 KW",
    location: "Primeseal Straps Pvt. Ltd,Tal.:- Gondal, Survey No. 55/1, P3 P3 & P4, Plot No. 2, B/h. Viraj Agrico Co, Dist, nr. Bharudi Toll Plaza, :, Pipaliya, Gujarat 360311",
    daily: "3,000 Units",
    monthlySaving: "₹6,30,000",
    yearlySaving: "₹76,65,000",
    image: primescal,
  },
  {
    id: 4,
    name: "700 KW – Everest Industries Ltd",
    capacity: "700 KW",
    location: "Everest Industries Ltd,Samatpor, Gujarat 392130",
    daily: "3,500 Units",
    monthlySaving: "₹7,35,000",
    yearlySaving: "₹89,42,500",
    image: everest,
  },
  {
    id: 5,
    name: "100 KW – Altis Polytech",
    capacity: "100 KW",
    location: "Altis Polytech,Gurudev industries-4,plot no.4,survey no.369,Balaji Balaji chowk,b/h ravki police chowki,at, Ravki, Gujarat 360004",
    daily: "500 Units",
    monthlySaving: "₹1,05,000",
    yearlySaving: "₹12,77,500",
    image: altis,
  },
  {
    id: 6,
    name: "120 KW – Chamunda Oil Mill",
    capacity: "120 KW",
    location: "Shree chamunda krupa oil mil vinchiya , 6939+HC4, Vinchhiya, Gujarat 360055",
    daily: "600 Units",
    monthlySaving: "₹1,26,000",
    yearlySaving: "₹15,33,000",
    image: chamunda,
  },
  {
    id: 7,
    name: "5 MW – Samvi Spinning Mill Pvt. Ltd.",
    capacity: "5 MW",
    location: "H88R+8WC Beraja, Gujarat",
    daily: "25,000 Units",
    monthlySaving: "₹52,50,000",
    yearlySaving: "₹6,38,75,000",
    image: samvi,
  },
  {
    id: 8,
    name: "3.5 MW – Fin Thread",
    capacity: "3.5 MW",
    location: "FINETHREAD SOLAR PLANT, J85P+9W, Bhader, Gujarat 360410",
    daily: "17,500 Units",
    monthlySaving: "₹36,75,000",
    yearlySaving: "₹4,47,12,500",
    image: finthread,
  },
  {
    id: 9,
    name: "400 KW – Shree Padmavati Refine Pvt. Ltd.",
    capacity: "400 KW",
    location: "SHREE PADMAVATI REXINE PRIVATE LIMITED,Dist. : Jamnagar, New R.S. No. 807 (Old R.S. No. 134/1/P-1 Nikava - Nana Vadala Road Near PGCVL Sub Station Taluka : Kalawad, Nana Vadala, Gujarat 361162",
    daily: "2,000 Units",
    monthlySaving: "₹4,20,000",
    yearlySaving: "₹51,10,000",
    image: shreepadmavati,
  },
];
// ... (Keep your imports and projects array exactly as they are)

export default function ProjectShowcase() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for right, -1 for left

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % projects.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const goToProject = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const project = projects[current];

  // Animation Variants
  const slideVariants = {
    initial: (direction: number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    animate: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: easeOut },
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0,
      transition: { duration: 0.4, ease: easeIn },
    }),
  };

  return (
    <section className="py-16 bg-linear-to-b from-[#F8FAFF] to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-0">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-4xl font-extrabold text-[#031E6C]">
            Industrial Solar Projects
          </h2>
          <p className="text-slate-600 mt-3">
            Real Installations. Real Generation. Real Savings.
          </p>
        </div>

        {/* Showcase Card Container */}
        <div className="relative h-[400px] md:h-[500px]">
          <AnimatePresence custom={direction} mode="wait">
            <motion.div
              key={current}
              custom={direction}
              variants={slideVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="absolute inset-0 bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-200 grid md:grid-cols-2"
            >
              {/* Image Side */}
              <div className="relative h-[250px] md:h-full overflow-hidden">
                <motion.img
                  initial={{ scale: 1.2 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 1.5 }}
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />

              </div>

              {/* Content Side */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <div className="absolute top-2  bg-[#0A2E9E] text-white px-10 py-2 rounded-full text-sm font-bold shadow-lg">
                    ⚡ {project.capacity}
                  </div>
                  <h3 className="text-3xl font-bold text-[#031E6C] leading-tight">
                    {project.name}
                  </h3>
                  <p className="text-slate-500 mt-2 flex items-center gap-2">
                    📍 {project.location}
                  </p>

                  <div className="mt-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
                    <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                      Monthly Electricity Saving
                    </p>
                    <h4 className="text-4xl font-black text-green-600 mt-1">
                      {project.monthlySaving}
                    </h4>

                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <p className="text-sm font-medium text-slate-500 uppercase tracking-wider">
                        Yearly Saving
                      </p>
                      <p className="text-2xl font-bold text-[#0A2E9E]">
                        {project.yearlySaving}
                      </p>
                    </div>
                  </div>

                  <div className="mt-8 flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-xs text-slate-400 uppercase">Daily Generation</span>
                      <span className="font-bold text-slate-700">{project.daily}</span>
                    </div>
                    <div className="h-8 w-px bg-slate-200"></div>
                    <span className="text-[#0A2E9E] font-semibold text-sm">
                      ✓ Clean Energy Delivered by <br /> <span className=" text-yellow-600">Creasun Energy</span> 
                    </span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-12 gap-3">
          {projects.map((_, i) => (
            <button
              key={i}
              onClick={() => goToProject(i)}
              className={`h-3 transition-all duration-500 rounded-full ${current === i ? "w-12 bg-[#0A2E9E]" : "w-3 bg-slate-300 hover:bg-slate-400"
                }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}