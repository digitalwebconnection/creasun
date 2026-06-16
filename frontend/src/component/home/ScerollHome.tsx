import { useEffect, useMemo, useState } from "react";

/* Base speed (seconds). On mobile we shorten automatically */
const BASE_DURATION = 22;

export default function Scroll() {
  const [prefersReducedMotion, setPRM] = useState(false);
  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    const mqRM = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mqSM = window.matchMedia("(max-width: 639px)");

    const update = () => {
      setPRM(mqRM.matches);
      setIsSmall(mqSM.matches);
    };

    update();

    mqRM.addEventListener("change", update);
    mqSM.addEventListener("change", update);

    return () => {
      mqRM.removeEventListener("change", update);
      mqSM.removeEventListener("change", update);
    };
  }, []);

  const duration = prefersReducedMotion
    ? 0
    : isSmall
    ? BASE_DURATION * 0.65 // Faster on mobile
    : BASE_DURATION;

  return (
    <main className="w-full ">
      <div className="mx-auto max-w-7xl px-4 sm:px-0 py-10">
        <header className="mb-6 text-center">
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900">
            Solar Penal Brand
          </h1>
          <p className="mt-2 text-slate-600">
            Trusted by leading brands in the solar industry.
          </p>
        </header>

        <section aria-label="Partner logos" className="relative">
          <div className="rounded-2xl  p-3 sm:p-4 ">
            <div className="relative overflow-hidden">
              <Marquee prefersReducedMotion={prefersReducedMotion} duration={duration} />

              {/* Edge fades */}
              <div className="pointer-events-none absolute inset-y-0 left-0 w-12 bg-linear-to-r from-white to-transparent" />
              <div className="pointer-events-none absolute inset-y-0 right-0 w-12 bg-linear-to-l from-white to-transparent" />
            </div>
          </div>
        </section>
      </div>

      <style>{`
        @keyframes marqueeX {
          0%   { transform: translate3d(0,0,0); }
          100% { transform: translate3d(-50%,0,0); }
        }
        .marquee-track {
          animation: marqueeX linear infinite;
          will-change: transform;
        }
        .marquee-paused {
          animation-play-state: paused !important;
        }
      `}</style>
    </main>
  );
}

/* ---------------------------------- */
/*              MARQUEE               */
/* ---------------------------------- */

function Marquee({
  prefersReducedMotion,
  duration,
}: {
  prefersReducedMotion: boolean;
  duration: number;
}) {
  const logos = [
    { src: "https://www.epcworld.in/wp-content/uploads/2025/05/1473406729waree%20-%20final.jpg", alt: "Waaree" },
    { src: "https://companieslogo.com/img/orig/POLYCAB.NS_BIG-75d2f870.png?t=1729362040", alt: "Polycab" },
    { src: "https://i0.wp.com/solarquarter.com/wp-content/uploads/2019/10/Adani-Solar.png?fit=200%2C124&ssl=1", alt: "Adani Solar" },
     { src: "https://rayzonsolar.com/img/rayzon-solar-logo-teal.png", alt: "rayzon green energy" },
    { src: "https://pahalsolar.com/wp-content/uploads/2025/04/logo-2_page-0001-scaled-e1745927127322.jpg", alt: "pahal solar" },
    { src: "https://www.cengrs.com/assets/upload/news/1604574110-tata-power-solar.jpg", alt: " Tata Power Solar" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPU9RzArjtkccQK9fvarpXLRPc4VnLITCAYw&s", alt: "goldi solar" },
    { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/ISO_9001-2015.svg/1200px-ISO_9001-2015.svg.png", alt: "ISO 9001" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq3nvPsX4c16iUN2F2LIxvu9Ru7D2iqHJTbRD5JAaDuFBgyWvqbYaA4o6YsWj0_L3OORI&usqp=CAU", alt: "ISO 14001" },
    { src: "https://5.imimg.com/data5/SELLER/Default/2023/8/333242435/WU/UE/UO/1883722/iso-45001-2018-occupational-health-and-safety.jpg", alt: "ISO 45001" },
  ];

  /* Two copies of list → seamless scroll */
  const sequence = useMemo(() => [...logos, ...logos], []);

  return (
    <div className="relative w-full">
      <div
        className={`marquee-track flex items-center gap-8 sm:gap-14 ${
          prefersReducedMotion ? "marquee-paused" : ""
        }`}
        style={{
          animationDuration: `${duration}s`,
        }}
      >
        <ul className="flex items-center gap-8 sm:gap-14 min-w-max">
          {sequence.map((item, idx) => (
            <li key={idx} className="shrink-0">
              <LogoBadge item={item} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function LogoBadge({ item }: { item: { src: string; alt: string } }) {
  return (
    <div className="h-12 w-28 sm:h-16 sm:w-36 flex items-center justify-center rounded-xl   px-2 sm:px-3">
      <img
        src={item.src}
        alt={item.alt}
        className="max-h-full max-w-full object-contain"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}
