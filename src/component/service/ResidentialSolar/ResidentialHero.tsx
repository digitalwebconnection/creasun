import { Play, Star } from "lucide-react";
import { useState } from "react";
import FreeSolarQuoteModal from "../../FreeSolarQuoteModal"; // <-- adjust path if needed

const ResidentialHero = () => {
  const [open, setOpen] = useState(false);

  return (
    <section
      className="relative overflow-hidden rounded-b-4xl text-white"
      style={{
        backgroundImage:
          "url('https://greenerideal.com/wp-content/uploads/2021/07/business-opportunities-in-solar-1.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}
      <div className="relative mx-auto flex max-w-7xl flex-col px-6 py-10 lg:flex-row lg:items-center lg:py-24">
        {/* LEFT CONTENT SIDE */}
        <div className="max-w-3xl space-y-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-200">
            Residential Solar · Creasun Energy, Rajkot
          </p>

          <h1 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Clean Power. Smart Savings.
            <br />
            Reliable Service.
          </h1>

          <p className="max-w-md text-base text-white/90">
            At Creasun Energy, we power homes with sustainable solar systems
            that reduce your electricity costs, protect the planet, and add
            long-term value to your property.
          </p>

          {/* KEY BENEFITS */}
          <ul className="space-y-1 text-sm text-white/90">
            <li>• Save on electricity bills with efficient solar panels</li>
            <li>• Cut carbon emissions and support a greener future</li>
            <li>• Boost property value with modern renewable energy systems</li>
          </ul>

          {/* BUTTONS */}
          <div className="flex flex-wrap gap-4 pt-2">
            <button
              onClick={() => setOpen(true)}
              className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg "
            >
              Book Free Consultation
            </button>
          </div>
        </div>

        {/* RIGHT CARD SIDE */}
        <div className="mt-12 w-full max-w-lg lg:ml-auto lg:mt-0">
          <div className="rounded-3xl bg-white p-5 text-slate-900 shadow-2xl">
            {/* VIDEO IMAGE */}
            <div className="relative h-56 w-full overflow-hidden rounded-2xl">
              <img
                src="https://images.pexels.com/photos/9875448/pexels-photo-9875448.jpeg?auto=compress&cs=tinysrgb&w=1600"
                alt="Creasun residential solar installation"
                className="h-full w-full object-cover"
              />
              <button className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg hover:bg-green-700">
                <Play className="h-5 w-5" />
              </button>
            </div>

            {/* DETAILS GRID */}
            <div className="mt-5 grid gap-4 md:grid-cols-[1fr_1fr]">
              {/* RATING + CLIENTS */}
              <div>
                <div className="flex items-center gap-1 text-yellow-600">
                  {[...Array(4)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-600" />
                  ))}
                  <Star className="h-4 w-4 fill-white-300" />
                </div>

                {/* CLIENT AVATARS */}
                <div className="mt-2 flex items-center gap-2">
                  <div className="flex -space-x-2">
                    {[
                      "https://randomuser.me/api/portraits/men/32.jpg",
                      "https://randomuser.me/api/portraits/women/44.jpg",
                      "https://randomuser.me/api/portraits/men/76.jpg",
                    ].map((src) => (
                      <img
                        key={src}
                        src={src}
                        className="h-8 w-8 rounded-full border-2 border-white"
                      />
                    ))}
                  </div>

                  <span className="text-xs font-semibold">
                    Happy Creasun homeowners
                  </span>
                </div>

                <p className="mt-2 text-xs text-slate-500">
                  We’ve helped homeowners switch to clean energy with reliable,
                  well-designed solar projects and ongoing service support.
                </p>
              </div>

              {/* WARRANTY BOX */}
              <div className="rounded-2xl bg-blue-600 p-4 text-white">
                <p className="text-sm font-semibold">25-Year Panel Warranty</p>
                <p className="mt-1 text-xs text-white/80">
                  Long-term peace of mind with high-quality panels, professional
                  installation, and dependable after-sales service.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mount the modal */}
      <FreeSolarQuoteModal open={open} setOpen={setOpen} />

      {/* SVG EDGE (kept as you had) */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 overflow-hidden leading-0">
        <svg
          className="relative block h-[150px] w-full"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          {/* thin green band */}
          <path
            fill="#16a34a"
            fillOpacity="1"
            d="M0,288L120,272C240,256,480,224,720,213.3C960,203,1200,213,1320,218.7L1440,224L1440,256L1320,256C1200,256,960,256,720,256C480,256,240,256,120,256L0,256Z"
          />
          {/* main white diagonal shape (next section background) */}
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,256L120,245.3C240,235,480,213,720,208C960,203,1200,213,1320,218.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default ResidentialHero;
