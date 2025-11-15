
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Sun } from "lucide-react";
import logo from "../assets/creasun2.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Decorative Top Wave */}
      <div className="pointer-events-none relative h-24 w-full overflow-hidden">
        <svg
          viewBox="0 0 1440 200"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-0 left-0 h-full w-full"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Gradient for accent wave */}
            <linearGradient id="creasunFooterAccent" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#F5B835" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#00C4FF" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#F5B835" stopOpacity="0.8" />
            </linearGradient>

            {/* Soft center glow (sunrise feel) */}
            <radialGradient id="creasunFooterGlow" cx="50%" cy="20%" r="40%">
              <stop offset="0%" stopColor="#F5B835" stopOpacity="0.45" />
              <stop offset="70%" stopColor="#F5B835" stopOpacity="0" />
            </radialGradient>
          </defs>

          {/* Center glow behind the wave */}
          <circle
            cx="720"
            cy="40"
            r="220"
            fill="url(#creasunFooterGlow)"
          />

          {/* Base black wave that merges into the footer */}
          <path
            d="M0,140 
         C 200,120 340,105 480,105 
         C 650,105 770,120 900,130 
         C 1100,145 1260,150 1440,140 
         L1440,200 L0,200 Z"
            fill="#000000"
          />

          {/* Highlight accent wave on top */}
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

      <footer className="relative overflow-hidden bg-black text-[#B1D5FA] ">

        {/* Content */}
        <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-8 sm:px-0">
          {/* Brand */}
          <div>
            <img
              src={logo}
              alt="Creasun Energy Logo"
              className="h-20 w-65 -ms-2 rounded-lg shadow-md mb-4"
            />

            <p className="mt-4 text-sm leading-relaxed">
              Clean Power. Smart Savings. Reliable Service.
              <br />
              Creasun Energy is your trusted partner for end-to-end solar
            </p>

            {/* Socials */}
            <div className="mt-5 flex items-center gap-3">
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 hover:bg-[#F5B835]/20 transition"
                aria-label="Facebook"
              >
                <Facebook className="h-4 w-4 text-[#F5B835]" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 hover:bg-[#F5B835]/20 transition"
                aria-label="Instagram"
              >
                <Instagram className="h-4 w-4 text-[#F5B835]" />
              </a>
              <a
                href="#"
                className="rounded-full bg-white/10 p-2 hover:bg-[#F5B835]/20 transition"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4 text-[#F5B835]" />
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Sun className="h-4 w-4 text-[#F5B835]" /> Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="hover:text-[#F5B835]">
                  About Us
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#F5B835]">
                  Services
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-[#F5B835]">
                  Products
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[#F5B835]">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
              <Sun className="h-4 w-4 text-[#F5B835]" /> Support
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#subsidy" className="hover:text-[#F5B835]">
                  PM Surya Ghar Guide
                </a>
              </li>
              <li>
                <a href="#warranty" className="hover:text-[#F5B835]">
                  Warranty & Service
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-[#F5B835]">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#F5B835]">
                  Contact
                </a>
              </li>
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
                <span>Rajkot, Gujarat — 360001</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#F5B835]" />
                <a href="tel:+919999999999" className="hover:text-[#F5B835]">
                  +91 99999 99999
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#F5B835]" />
                <a
                  href="mailto:info@creasunenergy.in"
                  className="hover:text-[#F5B835]"
                >
                  info@creasunenergy.in
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=Rajkot+Gujarat+360001"
                  className="underline decoration-[#2E7AE3]/60 hover:text-[#F5B835]"
                >
                  View on Map
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2E7AE3]/40 bg-[#021A5E]/50 backdrop-blur-sm">
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-3 text-sm">
            <p className="text-[#B1D5FA]/90">
              © {currentYear} Creasun Energy. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <a href="#privacy" className="hover:text-[#F5B835]">
                Privacy
              </a>
              <a href="#terms" className="hover:text-[#F5B835]">
                Terms
              </a>
              <a href="#sitemap" className="hover:text-[#F5B835]">
                Sitemap
              </a>
            </div>
          </div>
        </div>

        {/* Decorative Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#F5B835]/10 blur-3xl rounded-full opacity-40" />
      </footer>
    </>
  );
}
