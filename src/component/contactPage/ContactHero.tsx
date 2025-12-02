
import { Phone } from 'lucide-react'; // Using Lucide icons for consistency

const ContactHero = () => {
    // Fixed to use a single, reliable image URL
    const bgImage = "https://play-lh.googleusercontent.com/5jXrFj3zbLgmQV4O-Ef8STTV3eE4wDB9mA7U-wAxiCuQPZDFJ-eTwat7kaacXCk2qCM=w3840-h2160-rw";

    // Function to create the SVG icon structure (using Lucide icons where possible, but keeping original structure for complex ones)

    return (
        <section className="relative isolate overflow-hidden bg-black text-white">
            {/* Inline keyframes and small helper styles */}
            <style>{`
        @keyframes kenBurn {
          0% { transform: scale(1) translateY(0); }
          50% { transform: scale(1.06) translateY(-6px); }
          100% { transform: scale(1) translateY(0); }
        }
        @keyframes floatSlow {
          0% { transform: translateY(0px); opacity: 0.95; }
          50% { transform: translateY(-14px); opacity: 1; }
          100% { transform: translateY(0px); opacity: 0.95; }
        }
        @keyframes drift {
          0% { transform: translateX(-10px) translateY(0) rotate(0deg); opacity:.6 }
          50% { transform: translateX(10px) translateY(-6px) rotate(8deg); opacity:.85 }
          100% { transform: translateX(-10px) translateY(0) rotate(0deg); opacity:.6 }
        }
        /* Adjusted to fade from black overlay to white background */
        .hero-bottom-fade {
          background: linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(255,255,255,0.7) 70%, rgba(255,255,255,1) 100%);
        }
      `}</style>

            {/* Background image with ken-burn animation */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <img
                    src={bgImage}
                    alt="People collaborating - contact background"
                    className="h-full w-full object-cover object-center transform-gpu"
                    style={{ animation: "kenBurn 25s ease-in-out infinite" }}
                    onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "https://placehold.co/1600x900/1e293b/ffffff?text=Solar+Contact+Hero";
                    }}
                />
                {/* dark overlay */}
                <div className="absolute inset-0 bg-black/80  " />
            </div>

            {/* Decorative floating blobs / particles (SVGs recreated using Tailwind colors) */}
            <div
                className="pointer-events-none absolute -top-24 -left-28 h-72 w-72 rounded-full blur-3xl"
                style={{
                    background: "radial-gradient(circle at 30% 30%, rgba(250,204,21,0.14), rgba(250,204,21,0.02))",
                    animation: "floatSlow 10s ease-in-out infinite",
                }}
            />
            <div
                className="pointer-events-none absolute -bottom-36 -right-24 h-96 w-96 rounded-full blur-3xl"
                style={{
                    background: "radial-gradient(circle at 70% 70%, rgba(99,102,241,0.08), rgba(99,102,241,0.0))",
                    animation: "drift 18s ease-in-out infinite",
                }}
            />

            {/* Subtle moving dots SVG */}
            <svg
                className="pointer-events-none absolute inset-0 -z-10"
                width="100%"
                height="100%"
                preserveAspectRatio="none"
            >
                <defs>
                    <filter id="soft" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur stdDeviation="6" />
                    </filter>
                </defs>

                <g filter="url(#soft)" opacity="0.06">
                    <circle cx="12%" cy="18%" r="4" fill="#FACC15" /> {/* Yellow-400 */}
                    <circle cx="28%" cy="72%" r="6" fill="#60A5FA" /> {/* Blue-400 */}
                    <circle cx="82%" cy="28%" r="3" fill="#FDE68A" /> {/* Yellow-200 */}
                    <circle cx="70%" cy="62%" r="5" fill="#93C5FD" /> {/* Blue-300 */}
                </g>
            </svg>

            {/* Content container */}
            <div className="relative mx-auto flex max-w-7xl flex-col gap-8 px-6 py-15 sm:py-28 lg:py-22 lg:flex-row lg:items-center">
                {/* Left: Text */}
                <div className="w-full lg:w-3/3">
                    <p className="mb-3 text-sm font-medium uppercase tracking-widest text-yellow-300/90">
                        Contact Us
                    </p>

                    <h1 className="text-3xl font-extrabold leading-tight sm:text-4xl lg:text-5xl">
                        Let’s build something meaningful - together.
                    </h1>

                    <p className="mt-4 max-w-2xl text-base text-slate-200/85 sm:text-lg">
                        Tell us about your idea, project or problem - we’ll recommend the best
                        solution and next steps. Prefer a call? Choose a time and we’ll ring you.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <a
                            href="#contact-form"
                            className="inline-flex items-center gap-3 rounded-full bg-yellow-400 px-6 py-3 text-sm font-semibold text-slate-900 shadow-xl transition-transform duration-200 hover:-translate-y-0.5"
                        >
                            Contact Now
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="inline-block">
                                <path d="M5 12h14" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                <path d="M12 5l7 7-7 7" stroke="#0F172A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>

                        <a
                            href="tel:+917447401177"
                            className="text-sm text-slate-200/85 underline decoration-dotted underline-offset-4"
                        >
                            <Phone className="inline-block h-4 w-4 mr-1" /> Call: +91 744 740 1177
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom transition fade (from dark to white) */}
            <div className="absolute inset-x-0 bottom-0 z-0 hero-bottom-fade h-10" />

            <div className="relative -mt-10">
                {/* SVG Wave - Now with a solid white fill */}
                <svg viewBox="0 0 1440 160" className="w-full h-36" preserveAspectRatio="none" aria-hidden>
                    <defs>
                        <linearGradient id="g1" x1="0" x2="1">
                            <stop offset="0%" stopColor="#ffffff" />
                            <stop offset="100%" stopColor="#f3f4f6" />
                        </linearGradient>

                        <linearGradient id="g2" x1="0" x2="1">
                            <stop offset="0%" stopColor="#f8fafc" stopOpacity="0.9" />
                            <stop offset="100%" stopColor="#e6e9ee" stopOpacity="0.7" />
                        </linearGradient>
                    </defs>

                    {/* <!-- Back soft wave --> */}
                    <path d="M0,90 C220,30 440,150 720,100 C1000,50 1200,120 1440,80 L1440 160 L0 160 Z"
                        fill="url(#g2)" opacity="0.9" />

                    {/* <!-- Front crisp wave --> */}
                    <path d="M0,110 C200,40 420,140 720,110 C1020,80 1220,140 1440,100 L1440 160 L0 160 Z"
                        fill="url(#g1)" opacity="1" />
                </svg>
                
            </div>
        </section>
    );
};

export default ContactHero;