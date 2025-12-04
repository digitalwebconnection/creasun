// IndustrialSolarHero.tsx

import { useState } from "react";
import FreeSolarQuoteModal from "../../FreeSolarQuoteModal";

export default function IndustrialSolarHero() {
  const [visitOpen, setVisitOpen] = useState(false);

  return (
    <section className="relative h-[80vh] min-h-[550px] w-full overflow-hidden text-white">
      {/* 1. Background Image + Overlays */}
      <div className="absolute inset-0">
        {/* Main background image with slight slow zoom */}
        <div
          className="hero-bg h-full w-full bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://ornatesolar.com/wp-content/uploads/2023/10/Industrial-solar-2-Copy-1.webp')",
          }}
        />

        {/* Dark gradient overlay for readability */}
        <div className="absolute inset-0 bg-linear-to-br from-black/85 via-black/70 to-black/50" />

        {/* Soft radial glows */}
        <div className="absolute -left-20 -top-20 h-102 w-72 animate-pulse-slow rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="absolute bottom-[-120px] left-1/3 h-80 w-80 animate-pulse-slower rounded-full bg-cyan-400/15 blur-3xl" />

        {/* Subtle grid pattern overlay */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.15] mix-blend-soft-light"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.2) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.2) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      {/* 2. Decorative SVG Wave at the Bottom */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-82 w-full opacity-70 wave-sway">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="h-full w-full fill-current text-slate-950/70"
        >
          <path
            fillOpacity="1"
            d="M0,160L48,160C96,160,192,160,288,181.3C384,203,480,245,576,234.7C672,224,768,160,864,154.7C960,149,1056,203,1152,229.3C1248,256,1344,256,1392,256L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>

      {/* 3. Floating particles */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {Array.from({ length: 14 }).map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDuration: `${6 + Math.random() * 6}s`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* 4. Main Content */}
      <div className="relative mx-auto flex h-full max-w-7xl flex-col justify-center gap-8 px-5 py-8 md:px-8 lg:px-0">
        {/* Tagline + Heading + Copy */}
        <div className="space-y-4">
          <p className="tag-pulse text-sm font-semibold uppercase tracking-[0.25em] text-emerald-300 opacity-0 animate-fade-in [animation-delay:200ms]">
            Industrial Solar • Future-Proof Power
          </p>

          <h1 className="relative text-shadow-lg max-w-3xl text-4xl font-extrabold leading-snug opacity-0 animate-fade-in-up [animation-delay:400ms] sm:text-5xl lg:text-6xl">
            Reduce your industrial energy costs by{" "}
            <span className="text-emerald-300">up to 60%</span>.
            <span className="shine-effect" />
          </h1>

          <p className="max-w-xl text-base text-slate-100/90 opacity-0 animate-fade-in-up [animation-delay:600ms] sm:text-lg">
            Design, supply, and commission high-performance industrial solar
            plants that keep your production running and your power costs
            predictable.
          </p>
        </div>


        {/* CTA buttons */}
        <div className="opacity-0 animate-fade-in-up [animation-delay:1000ms] mt-4 flex flex-wrap items-center gap-4">
          {/* <-- wired to the modal */}
          <button
            onClick={() => setVisitOpen(true)}
            className="btn-glow rounded-lg bg-emerald-500 px-7 py-3 text-base font-bold text-slate-900 shadow-xl shadow-emerald-500/40 transition-all duration-300 hover:scale-[1.05] hover:bg-emerald-400"
          >
            Book your industrial site visit
          </button>

        </div>
      </div>

      {/* Mount the modal here */}
      <FreeSolarQuoteModal open={visitOpen} setOpen={setVisitOpen} />

      {/* 5. Custom keyframes & utility classes */}
      <style>
        {`
          /* Fade-in + slide up */
          @keyframes fade-in-up {
            from { opacity:0; transform: translateY(20px); }
            to { opacity:1; transform: translateY(0); }
          }
          .animate-fade-in-up { animation: fade-in-up 0.8s ease forwards; }

          @keyframes fade-in {
            from { opacity:0; }
            to { opacity:1; }
          }
          .animate-fade-in { animation: fade-in 0.8s ease forwards; }

          /* Background slow zoom / drift */
          @keyframes hero-bg-motion {
            0% { transform: scale(1.05) translate3d(0, 0, 0); }
            50% { transform: scale(1.1) translate3d(0, -10px, 0); }
            100% { transform: scale(1.05) translate3d(0, 0, 0); }
          }
          .hero-bg {
            animation: hero-bg-motion 18s ease-in-out infinite;
          }

          /* Glow pulses */
          @keyframes pulse-slow {
            0%,100% { opacity:0.15; transform:scale(1); }
            50% { opacity:0.35; transform:scale(1.15); }
          }
          .animate-pulse-slow { animation: pulse-slow 7s infinite; }

          @keyframes pulse-slower {
            0%,100% { opacity:0.1; transform:scale(1); }
            50% { opacity:0.25; transform:scale(1.2); }
          }
          .animate-pulse-slower { animation: pulse-slower 11s infinite; }

          /* Floating particles */
          @keyframes rise {
            0% { transform: translateY(0) scale(0.6); opacity:0; }
            30% { opacity:1; }
            100% { transform: translateY(-140vh) scale(1); opacity:0; }
          }
          .particle {
            position: absolute;
            bottom: -20px;
            height: 3px;
            width: 3px;
            border-radius: 9999px;
            background: rgba(255,255,255,0.55);
            box-shadow: 0 0 12px rgba(255,255,255,0.6);
            animation-name: rise;
            animation-timing-function: linear;
            animation-iteration-count: infinite;
          }

          /* Wave subtle sway */
          @keyframes sway {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(6px); }
          }
          .wave-sway {
            animation: sway 8s ease-in-out infinite;
          }

          /* Tagline soft color pulse */
          @keyframes tagPulse {
            0%,100% { letter-spacing: 0.25em; opacity:0.9; }
            50% { letter-spacing: 0.3em; opacity:1; }
          }
          .tag-pulse {
            animation: tagPulse 4s ease-in-out infinite;
          }

          /* Badges float slightly */
          @keyframes badgeFloat {
            0%,100% { transform: translateY(0); }
            50% { transform: translateY(-6px); }
          }
          .badge-group .badge-float:nth-child(1) {
            animation: badgeFloat 5s ease-in-out infinite;
            animation-delay: 0.2s;
          }
          .badge-group .badge-float:nth-child(2) {
            animation: badgeFloat 5.5s ease-in-out infinite;
            animation-delay: 0.6s;
          }
          .badge-group .badge-float:nth-child(3) {
            animation: badgeFloat 6s ease-in-out infinite;
            animation-delay: 1s;
          }

          /* Primary button glow */
          @keyframes btnGlow {
            0%,100% {
              box-shadow: 0 0 0 rgba(16,185,129,0.0),
                          0 0 22px rgba(16,185,129,0.65);
              transform: translateY(0);
            }
            50% {
              box-shadow: 0 0 0 rgba(16,185,129,0.25),
                          0 0 30px rgba(16,185,129,0.9);
              transform: translateY(-1px);
            }
          }
          .btn-glow {
            animation: btnGlow 3.6s ease-in-out infinite;
          }

          /* Shine sweep on heading */
          .shine-effect {
            position:absolute;
            top:0; left:0;
            height:100%;
            width:60%;
            background: linear-gradient(
              120deg,
              transparent 0%,
              rgba(255,255,255,0.5) 45%,
              transparent 100%
            );
            transform: skewX(-20deg) translateX(-150%);
            pointer-events:none;
            mix-blend-mode: screen;
            animation: shine 2.8s ease-in-out 1.2s infinite;
          }
          @keyframes shine {
            0% { transform: skewX(-20deg) translateX(-150%); opacity:0; }
            20% { opacity:1; }
            60% { transform: skewX(-20deg) translateX(250%); opacity:1; }
            100% { transform: skewX(-20deg) translateX(250%); opacity:0; }
          }

          /* Text shadow helper */
          .text-shadow-lg {
            text-shadow: 2px 2px 4px rgba(0,0,0,0.7);
          }
        `}
      </style>
    </section>
  );
}
