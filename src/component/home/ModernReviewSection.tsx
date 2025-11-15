import React from "react";

interface Review {
  name: string;
  location: string;
  rating: number;
  comment: string;
}

export default function ModernReviewSection() {
  const reviews: Review[] = [
    {
      name: "Raj Sharma",
      location: "Ahmedabad, GJ",
      rating: 5,
      comment:
        "Excellent installation service. The team was professional and completed the work on time. Highly recommend!",
    },
    {
      name: "Megha Patel",
      location: "Vadodara, GJ",
      rating: 5,
      comment:
        "Smooth installation process and great support. Just took a day extra due to rain.",
    },
    {
      name: "Sanjay Yadav",
      location: "Nagpur, MH",
      rating: 5,
      comment:
        "Clean work, on-time completion, and really good after-sales service. Highly recommended!",
    },
  ];

  const Card: React.FC<{ r: Review }> = ({ r }) => (
    <div className="flex flex-col justify-between bg-white h-full p-5 rounded-2xl shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 transition duration-300 transform hover:-translate-y-1 border border-gray-200">
      {/* Rating */}
      <div className="mb-2 flex items-center justify-center gap-0.5">
        {[...Array(5)].map((_, i) => (
          <span key={i} className={`text-xl ${i < r.rating ? "text-yellow-500" : "text-gray-300"}`}>
            ★
          </span>
        ))}
      </div>

      {/* Comment */}
      <blockquote className="mb-3 flex-1">
        <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">{r.comment}</p>
      </blockquote>

      {/* Reviewer */}
      <div className="mt-auto pt-4 border-t border-gray-100">
        <div className="text-lg font-semibold text-gray-900">{r.name}</div>
        <div className="text-sm text-blue-700 font-medium">{r.location}</div>
      </div>
    </div>
  );

  return (
    <section className="bg-gray-50 py-10">
      {/* Hide Scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
          What Our <span className="text-blue-700">Customers Say</span>
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto">
          Hear from the people who trust our work & service.
        </p>

        {/* Mobile Horizontal Scroll */}
        <div className="relative md:hidden">
          {/* Fades */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-10 bg-linear-to-r from-gray-50 to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-10 bg-linear-to-l from-gray-50 to-transparent z-10" />

          <div
            className="flex overflow-x-auto no-scrollbar snap-x snap-mandatory gap-5 px-2 scroll-smooth"
            role="region"
            aria-label="Customer reviews"
          >
            {reviews.map((r, idx) => (
              <div
                key={idx}
                className="snap-start shrink-0 w-[85%] max-w-xs sm:w-[70%]"
              >
                <Card r={r} />
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid gap-8 grid-cols-2 lg:grid-cols-3 mt-6">
          {reviews.map((r, idx) => (
            <Card key={idx} r={r} />
          ))}
        </div>
      </div>
    </section>
  );
}
