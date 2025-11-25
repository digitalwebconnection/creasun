"use client";

type ServiceItem = {
  title: string;
  subtitle?: string;
  image: string;
  accentColor: string; // Tailwind color class for the small circle
};

const COMMERCIAL_SOLAR_SERVICES: ServiceItem[] = [
  {
    title: "Factory & Warehouse Rooftop",
    subtitle: "High-capacity systems for industrial loads",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKiK0nHbJjXsIpOg3_VrjMoB5cqMccwYGKvA&s",
    accentColor: "bg-blue-900",
  },
  {
    title: "Retail, Malls & Showrooms",
    subtitle: "Smart solar for high-footfall spaces",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk55OPTtFc2yx5G4sZHF74alJnlSaDBaPB3g&s",
    accentColor: "bg-blue-900",
  },
  {
    title: "Schools & Corporate Campuses",
    subtitle: "Clean energy for learning & offices",
    image:
      "https://www.nobrokerhood.com/blog/wp-content/uploads/2025/01/Solar-Panel-Installation.png",
    accentColor: "bg-blue-900",
  },
  {
    title: "Schools & Corporate Campuses",
    subtitle: "Clean energy for learning & offices",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMpPY-8tMqgW8_oHJMEWf6olYLRvqWYlhMg&s",
    accentColor: "bg-blue-900",
  },
];

export default function CommercialSolarCircleSection() {
  return (
    <section className="w-full bg-white py-10">
      <div className="mx-auto max-w-7xl px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-extrabold mb-1">
          <span className="">Turn your rooftop</span>{" "}
          <span className="text-[#002a9e]">into a Power Plant!</span>
        </h2>
        <p className="text-sm   mb-10">
          Commercial solar services we deliver with Creasun expertise.
        </p>

        {/* Circle cards */}
        <div className="mt-4 grid gap-10 md:grid-cols-4 place-items-center">
          {COMMERCIAL_SOLAR_SERVICES.map((item) => (
            <div
              key={item.title}
              className="relative flex items-center justify-center"
            >
              {/* Outer gradient ring */}
              <div className="bg-yellow-600 rounded-full p-1.5 shadow-xl">
                {/* Inner image circle */}
                <div className="relative h-60 w-60 rounded-full overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transform transition-transform duration-500 hover:scale-110"
                  />

                  {/* Optional subtle overlay for legibility */}
                  <div className="absolute inset-0 bg-black/20" />
                </div>
              </div>

              {/* Bottom small circle with text */}
              <div
                className={`
                  absolute -bottom-10 left-1/2 -translate-x-1/2
                  flex h-24 w-24 items-center justify-center rounded-full
                  ${item.accentColor} shadow-lg
                `}
              >
                <p className="px-4 text-xs font-semibold text-white leading-tight">
                  {item.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
