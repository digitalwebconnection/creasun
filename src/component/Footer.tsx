import React, { useEffect, useRef } from "react";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Code2, Sun } from "lucide-react";
import logo from "../assets/creasun2.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const COMPANY_URL = "https://digitalwebconnection.com";
  const linkRef = useRef<HTMLAnchorElement | null>(null);

  useEffect(() => {
    // One-time diagnostic: check if something is covering the link center
    const el = linkRef.current;
    if (!el) return;

    // wait a tick so layout is settled
    setTimeout(() => {
      const rect = el.getBoundingClientRect();
      const cx = Math.round(rect.left + rect.width / 2);
      const cy = Math.round(rect.top + rect.height / 2);

      // element at center point
      const topEl = document.elementFromPoint(cx, cy);

      if (!topEl) return;

      // If the element at that point is not the link (or a child), log useful info
      if (!el.contains(topEl)) {
        // Helpful console warning for debugging overlay issues
        // You'll see what element is blocking clicks (className, tag, computed styles)
        console.warn("[Footer] Link may be blocked by another element at center point:", {
          link: el,
          blockingElement: topEl,
          blockingElHTML: topEl.outerHTML?.slice?.(0, 400),
        });

        // Visual hint during development: outline link and blocking element
        try {
          (topEl as HTMLElement).style.outline = "2px dashed rgba(255,80,80,0.9)";
          el.style.outline = "2px dashed rgba(245,184,53,0.9)";
        } catch (e) {
          // ignore styling failures
        }
      }
    }, 200);
  }, []);

  function handleLinkClick(e: React.MouseEvent) {
    // Prevent default and do a JS fallback open — this will open even if click events are intercepted
    // Note: we still keep href native behavior for normal users; fallback is for tricky overlay cases.
    e.preventDefault();
    // use setTimeout to avoid double navigation in some browsers
    setTimeout(() => {
      window.open(COMPANY_URL, "_blank", "noopener,noreferrer");
    }, 0);
  }

  return (
    <>
      {/* Decorative Top Wave */}
      <div className="pointer-events-none relative h-24 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 h-full w-full"
          preserveAspectRatio="none"
          aria-hidden
        >
          <defs>
            <linearGradient id="creasunFooterAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5B835" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00C4FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F5B835" stopOpacity="0.8" />
            </linearGradient>

            <radialGradient id="creasunFooterGlow" cx="50%" cy="20%" r="40%">
              <stop offset="0%" stopColor="#F5B835" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#F5B835" stopOpacity="0" />
            </radialGradient>
          </defs>

          <circle cx="720" cy="40" r="220" fill="url(#creasunFooterGlow)" />

          <path
            d="M0,140 
               C 200,120 340,105 480,105 
               C 650,105 770,120 900,130 
               C 1100,145 1260,150 1440,140 
               L1440,200 L0,200 Z"
            fill="#000000"
          />

          <path
            d="M0,135 
               C 200,110 360,95 520,95 
               C 700,95 830,110 960,122 
               C 1130,138 1285,140 1440,130"
            fill="none"
            stroke="url(#creasunFooterAccent)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.95"
          />
        </svg>
      </div>

      <footer className="relative overflow-hidden bg-black text-[#B1D5FA]">
        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-8 sm:px-0">
          {/* Brand */}
          <div>
            <img src={logo} alt="Creasun Energy Logo" className="h-20 w-65 -ms-2 rounded-lg shadow-md mb-4" />
            <p className="mt-4 text-sm leading-relaxed">
              Clean Power. Smart Savings. Reliable Service.
              <br />
              Creasun Energy is your trusted partner for end-to-end solar.
            </p>

            {/* Social Icons */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="https://www.facebook.com/creasunenergy/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 hover:bg-[#F5B835]/20 transition"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-[#F5B835]" />
              </a>

              <a
                href="https://www.instagram.com/creasunenergy"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 hover:bg-[#F5B835]/20 transition"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-[#F5B835]" />
              </a>

              <a
                href="https://www.linkedin.com/company/creasun-energy/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-white/10 p-2 hover:bg-[#F5B835]/20 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-[#F5B835]" />
              </a>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Sun className="h-4 w-4 text-[#F5B835]" /> Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-[#F5B835]">About Us</a></li>
              <li><a href="#services" className="hover:text-[#F5B835]">Services</a></li>
              <li><a href="#products" className="hover:text-[#F5B835]">Products</a></li>
              <li><a href="#projects" className="hover:text-[#F5B835]">Projects</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Sun className="h-4 w-4 text-[#F5B835]" /> Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li><a className="hover:text-[#F5B835]">PM Surya Ghar Guide</a></li>
              <li><a className="hover:text-[#F5B835]">Warranty & Service</a></li>
              <li><a className="hover:text-[#F5B835]">FAQ</a></li>
              <li><a className="hover:text-[#F5B835]">Contact</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Sun className="h-4 w-4 text-[#F5B835]" /> Contact
            </h3>

            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-[#F5B835]" />
                <span>
                  Office No.3, 3rd Floor, Navsarjan Shopping Center, Movdi Main Road,
                  Rajkot-360004, India
                </span>
              </li>

              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#F5B835]" />
                <a href="tel:+919624120591" className="hover:text-[#F5B835]">
                  +91 96241 20591
                </a>
              </li>

              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#F5B835]" />
                <a href="mailto:creasunenergy24@gmail.com" className="hover:text-[#F5B835]">
                  creasunenergy24@gmail.com
                </a>
              </li>

              <li>
                <a href="https://maps.google.com/?q=Office+No.3+Navsarjan+Shopping+Center+Rajkot" className="underline decoration-[#2E7AE3]/60 hover:text-[#F5B835]" target="_blank" rel="noopener noreferrer">
                  View on Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2E7AE3]/40 bg-[#021A5E]/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 md:px-0 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-white">© {currentYear} Creasun Energy. All rights reserved.</p>

            {/* Clickable company link with fallback and forced pointer-events / z-index */}
            <a
              ref={linkRef}
              href={COMPANY_URL}
              onClick={handleLinkClick}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-white text-[13px] md:text-lg cursor-pointer"
              style={{ zIndex: 9999, pointerEvents: "auto" }}
              aria-label="Digital Web Connection (opens in new tab)"
            >
              <Code2 className="w-5 h-5 text-[#F5B835]" />
              Developed by
              <span className="font-semibold text-[#F5B835] hover:underline">Digital Web Connection</span>
            </a>

            <div className="flex items-center gap-4">
              <a className="hover:text-[#F5B835]">Privacy</a>
              <a className="hover:text-[#F5B835]">Terms</a>
              <a className="hover:text-[#F5B835]">Sitemap</a>
            </div>
          </div>
        </div>

        {/* Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#F5B835]/10 blur-3xl rounded-full opacity-40 pointer-events-none" />
      </footer>
    </>
  );
}
