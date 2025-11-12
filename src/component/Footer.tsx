"use client";

import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Sun } from "lucide-react";
import logo from "../assets/creasun.png";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-linear-to-b from-[#041B63] via-[#032067] to-[#011440] text-[#B1D5FA]">
      {/* Top Accent Border */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-[#F5B835] via-[#00C4FF] to-[#F5B835] opacity-70" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-4 gap-10 px-6 py-16 sm:px-8">
        {/* Brand */}
        <div>
          <img
            src={logo}
            alt="Creasun Energy Logo"
            className="h-12 w-auto bg-white/10 rounded-lg p-1 shadow-md mb-4"
          />
          <h2 className="text-xl font-semibold text-white">Creasun Energy</h2>
          <p className="text-sm text-[#9EB5F7] mt-1 tracking-wide">
            POWERING FUTURE...
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            Clean Power. Smart Savings. Reliable Service.{" "}
            <br />
            <span className="text-[#F5B835] font-semibold">
              Made in Rajkot, Gujarat.
            </span>
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
            <li><a href="#about" className="hover:text-[#F5B835]">About Us</a></li>
            <li><a href="#services" className="hover:text-[#F5B835]">Services</a></li>
            <li><a href="#products" className="hover:text-[#F5B835]">Products</a></li>
            <li><a href="#projects" className="hover:text-[#F5B835]">Projects</a></li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="text-white font-semibold mb-3 flex items-center gap-2">
            <Sun className="h-4 w-4 text-[#F5B835]" /> Support
          </h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#subsidy" className="hover:text-[#F5B835]">PM Surya Ghar Guide</a></li>
            <li><a href="#warranty" className="hover:text-[#F5B835]">Warranty & Service</a></li>
            <li><a href="#faq" className="hover:text-[#F5B835]">FAQ</a></li>
            <li><a href="#contact" className="hover:text-[#F5B835]">Contact</a></li>
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
            © {currentYear} Creasun Energy, Rajkot. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#privacy" className="hover:text-[#F5B835]">Privacy</a>
            <a href="#terms" className="hover:text-[#F5B835]">Terms</a>
            <a href="#sitemap" className="hover:text-[#F5B835]">Sitemap</a>
          </div>
        </div>
      </div>

      {/* Decorative Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-[#F5B835]/10 blur-3xl rounded-full opacity-40" />
    </footer>
  );
}
