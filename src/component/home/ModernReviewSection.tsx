import React, { useEffect, useRef, useState } from "react";

interface Review {
  name: string;
  location: string;
  rating: number;
  comment: string;
}

const REVIEWS: Review[] = [
  {
    name: "Goswami Rushita",
    location: "Ahmedabad, GJ",
    rating: 5,
    comment: "One of the best solar companies in Rajkot. Great product quality, smooth installation, and excellent service. The team really knows what they are doing."
  },

  {
    name: "Abhi Thakkar",
    location: "Shapar, GJ",
    rating: 5,
    comment: "I’m from Shapar and recently installed solar panels from Creasun Energy. The experience was very good. The staff is friendly, helpful, and professional. They completed the installation on time and explained everything clearly."
  },

  {
    name: "Jinisha Jain",
    location: "Rajkot, GJ",
    rating: 5,
    comment: "I recently installed solar panels at my home in Rajkot through Creasun Energy. The team was professional and friendly, and they completed the installation from start to end very smoothly."
  },

  {
    name: "Kher Vaibhav",
    location: "Surat, GJ",
    rating: 5,
    comment: "I recently visited the Creasun Energy office in Rajkot, and the staff was very welcoming and knowledgeable about solar panels. After getting the installation done at my home, I’m fully satisfied with their service and product quality."
  },

  {
    name: "Kiran Solanki",
    location: "Vadodara, GJ",
    rating: 5,
    comment: "Smooth and professional installation. The team finished everything on time and provided great post-installation support. Really impressed with the overall service!"
  },

  {
    name: "Prakash Chauhan",
    location: "Morbi, GJ",
    rating: 5,
    comment: "Creasun Energy gave the best pricing along with excellent service quality. The installation was neat, clean, and completed exactly as promised."
  },

  {
    name: "Harshil Vyas",
    location: "Bhavnagar, GJ",
    rating: 5,
    comment: "A very polite and knowledgeable team. They explained the entire process clearly and completed the installation without any hassle. Highly satisfied with the experience!"
  },

  {
    name: "Nirali Shah",
    location: "Baroda, GJ",
    rating: 5,
    comment: "Fantastic experience from start to finish. The team was extremely supportive, and the system is generating excellent output. Definitely worth it!"
  },

  {
    name: "Manoj Parmar",
    location: "Gondal, GJ",
    rating: 5,
    comment: "Outstanding work quality! The entire project was completed on time and with complete professionalism. Very happy with the results."
  },

  {
    name: "Smit Panchal",
    location: "Junagadh, GJ",
    rating: 5,
    comment: "Creasun Energy truly stands out. The installation was perfect, and the team’s technical knowledge was clearly visible in their work. Highly recommended for anyone going solar!"
  },
];

export default function ModernReviewSection({
  autoplay = true,
  intervalMs = 2000,
}: {
  autoplay?: boolean;
  intervalMs?: number;
}) {
  const reviews = REVIEWS;
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [itemsPerView, setItemsPerView] = useState<number>(1);
  const [index, setIndex] = useState<number>(0);
  const [expandedMap, setExpandedMap] = useState<Record<number, boolean>>({});
  const [isPaused, setIsPaused] = useState(false);

  // compute itemsPerView based on window size
  useEffect(() => {
    function update() {
      const w = window.innerWidth;
      if (w < 768) setItemsPerView(1);
      else if (w < 1024) setItemsPerView(2);
      else setItemsPerView(3);
      setIndex(0);
    }
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // scroll horizontally to the card at `index` (NO page scrolling)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const child = container.children[index] as HTMLElement | undefined;
    if (!child) return;

    // calculate left offset of child relative to container
    // using offsetLeft works because child is direct child of container
    const left = child.offsetLeft;
    // scroll only horizontally; preserve vertical position of page
    container.scrollTo({ left, behavior: "smooth" });
  }, [index, itemsPerView]);

  // autoplay logic
  useEffect(() => {
    if (!autoplay) return;
    if (isPaused) return;

    const maxIndex = Math.max(0, reviews.length - itemsPerView);

    const id = window.setInterval(() => {
      setIndex((cur) => {
        const next = cur + 1;
        if (next > maxIndex) return 0;
        return next;
      });
    }, intervalMs);

    return () => clearInterval(id);
  }, [autoplay, intervalMs, isPaused, itemsPerView, reviews.length]);

  const maxIndex = Math.max(0, reviews.length - itemsPerView);

  function prev() {
    setIndex((i) => (i <= 0 ? maxIndex : Math.max(0, i - 1)));
  }
  function next() {
    setIndex((i) => (i >= maxIndex ? 0 : Math.min(maxIndex, i + 1)));
  }

  function toggleExpand(i: number) {
    setExpandedMap((s) => ({ ...s, [i]: !s[i] }));
  }

  const Card: React.FC<{ r: Review; i: number }> = ({ r, i }) => {
    const expanded = !!expandedMap[i];
    return (
      <div className="flex flex-col justify-between h-60 bg-white p-3 rounded-2xl shadow-lg hover:shadow-blue-500/20 transition duration-300 border border-gray-600/50 min-h-[200px]">
        <div className="mb-2 flex items-center justify-center gap-0.5">
          {[...Array(5)].map((_, idx) => (
            <span key={idx} className={`text-xl ${idx < r.rating ? "text-yellow-500" : "text-gray-300"}`}>★</span>
          ))}
        </div>

        <p
          className="text-gray-700 italic text-sm leading-relaxed wrap-break-word"
          style={
            expanded
              ? {}
              : ({
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              } as React.CSSProperties)
          }
        >
          {r.comment}
        </p>

        {r.comment.length > 150 && (
          <button onClick={() => toggleExpand(i)} className="mt-2 text-blue-600 text-sm hover:underline">
            {expanded ? "Read less" : "Read more"}
          </button>
        )}

        <div className="mt-4 pt-2 border-t border-gray-200 text-left">
          <div className="text-lg font-semibold text-gray-900">{r.name}</div>
          <div className="text-sm text-blue-700">{r.location}</div>
        </div>
      </div>
    );
  };

  return (
    <section className="bg-gray-50 py-10">
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="container mx-auto max-w-7xl px-4 text-center">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
          What Our <span className="text-blue-700">Customers Say</span>
        </h2>
        <p className="text-gray-600 mt-2 mb-6 text-lg">Honest feedback from real customers.</p>

        {/* Controls */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <button
              onClick={prev}
              className="px-3 py-2 bg-white border rounded-md shadow-sm"
              aria-label="Previous"
            >
              ◀
            </button>
            <button
              onClick={next}
              className="px-3 py-2 bg-white border rounded-md shadow-sm"
              aria-label="Next"
            >
              ▶
            </button>
          </div>

          <div className="text-sm text-gray-500">
            Showing <strong>{Math.min(itemsPerView, reviews.length)}</strong> of <strong>{reviews.length}</strong>
          </div>

          <div className="text-sm text-gray-500">
            <label className="inline-flex items-center gap-2">
              <input
                type="checkbox"
                checked={!isPaused}
                onChange={(e) => setIsPaused(!e.target.checked)}
                aria-label="Autoplay on/off"
              />
              <span>{isPaused ? "Paused" : "Autoplay"}</span>
            </label>
          </div>
        </div>

        {/* Slider: pause on hover/focus */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto no-scrollbar gap-5 snap-x snap-mandatory px-2 pb-5"
          role="list"
          aria-label="Customer reviews slider"
          tabIndex={0}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onFocus={() => setIsPaused(true)}
          onBlur={() => setIsPaused(false)}
        >
          {reviews.map((r, i) => {
            let width = "w-[85%] max-w-xs";
            if (itemsPerView === 2) width = "w-1/2";
            if (itemsPerView === 3) width = "w-1/4";

            return (
              <div key={i} className={`snap-start shrink-0 ${width}`}>
                <Card r={r} i={i} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
