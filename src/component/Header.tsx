"use client";

import { useEffect, useState, useRef } from "react";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/creasun2.png";

export default function Header() {
  const navigate = useNavigate();

  const [open, setOpen] = useState(false); // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // desktop Services dropdown
  const [servicesOpenMobile, setServicesOpenMobile] = useState(false); // mobile Services accordion

  const [showHeader, setShowHeader] = useState(true); // smart hide/show
  const lastScrollY = useRef(0);
  const ticking = useRef(false);

  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const serviceItems = [
    { label: "Residential Solar", href: "/services/residential-solar" },
    { label: "Commercial Solar", href: "/services/commercial-solar" },
    { label: "Industrial Solar", href: "/services/industrial-solar" },
    { label: "Ground Mounted Solar", href: "/services/ground-mounted-solar" },
  ];

  /* ========== SMART HIDE / SHOW ON SCROLL ========== */
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY || 0;
      if (ticking.current) return;
      ticking.current = true;
      window.requestAnimationFrame(() => {
        const prevY = lastScrollY.current;
        if (currentY < 10) {
          setShowHeader(true);
        } else {
          const diff = currentY - prevY;
          if (diff > 5) setShowHeader(false);
          else if (diff < -5) setShowHeader(true);
        }
        lastScrollY.current = currentY;
        ticking.current = false;
      });
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ========== CLICK OUTSIDE TO CLOSE DESKTOP DROPDOWN ========== */
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-30 w-full transform transition-transform duration-300 ${showHeader ? "translate-y-0" : "-translate-y-full"}`}
    >
      {/* Thin gradient strip */}
      <div className="h-1 w-full bg-linear-to-r from-[#F5B835] via-[#2E7AE3] to-[#031E6C]" />

      {/* Main bar */}
      <div className="backdrop-blur bg-white/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* LEFT: LOGO */}
            <Link to="/" className="flex items-center gap-3">
              <img src={logo} alt="Creasun Energy" className="h-12 w-auto object-contain" />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden items-center gap-10 text-lg font-medium text-slate-700 md:flex">
              <Link to="/about" className="relative py-1 transition-colors hover:text-[#2E7AE3] group">
                <span>About</span>
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-linear-to-r from-[#F5B835] to-[#2E7AE3] transition-all duration-200 group-hover:w-full" />
              </Link>

              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setServicesOpen((prev) => !prev)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="menu"
                  className="flex items-center gap-1 py-1 transition-colors hover:text-[#2E7AE3]"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
                </button>

                {servicesOpen && (
                  <div className="absolute left-0 top-full z-40 mt-2 w-56 rounded-xl border border-slate-200 bg-white shadow-lg animate-fade">
                    {serviceItems.map((item) => (
                      <Link
                        key={item.label}
                        to={item.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2.5 text-sm text-slate-700 transition-colors hover:bg-slate-50 hover:text-[#2E7AE3]"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link to="/project" className="relative py-1 transition-colors hover:text-[#2E7AE3] group">
                <span>Projects</span>
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-linear-to-r from-[#F5B835] to-[#2E7AE3] transition-all duration-200 group-hover:w-full" />
              </Link>

              <Link to="/contact" className="relative py-1 transition-colors hover:text-[#2E7AE3] group">
                <span>Contact Us</span>
                <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-linear-to-r from-[#F5B835] to-[#2E7AE3] transition-all duration-200 group-hover:w-full" />
              </Link>

              <a href="tel:+919624120591" className="inline-flex items-center gap-2 rounded-full bg-[#F5B835] px-10 py-2 text-[13px] font-semibold text-[#031E6C] shadow-sm transition-colors hover:bg-[#2E7AE3] hover:text-white">
                <Phone className="h-4 w-4" />
                Call Us
              </a>
            </nav>

            {/* Mobile: Menu Button */}
            <button
              type="button"
              onClick={() => {
                setOpen((prev) => !prev);
                setServicesOpen(false);
              }}
              className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 hover:text-[#031E6C] md:hidden"
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="border-t border-slate-200 bg-white/95 backdrop-blur md:hidden" style={{ touchAction: "manipulation" }}>
            <nav className="space-y-1 px-4 py-3 text-sm font-medium text-slate-700">
              <Link
                to="/about"
                onClick={() => {
                  setOpen(false);
                  setServicesOpenMobile(false);
                }}
                className="block rounded-lg px-3 py-2 transition-colors hover:bg-slate-50 hover:text-[#2E7AE3]"
              >
                About
              </Link>

              {/* Services (accordion mobile) */}
              <div>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setServicesOpenMobile((prev) => !prev);
                  }}
                  aria-expanded={servicesOpenMobile}
                  aria-controls="mobile-services-list"
                  className="flex w-full items-center justify-between rounded-lg px-3 py-2 transition-colors hover:bg-slate-50 hover:text-[#2E7AE3]"
                >
                  <span>Services</span>
                  <ChevronDown className={`h-4 w-4 transition-transform ${servicesOpenMobile ? "rotate-180" : ""}`} />
                </button>

                <div id="mobile-services-list" className={`${servicesOpenMobile ? "block" : "hidden"} pl-4`}>
                  {serviceItems.map((item) => (
                    // Use programmatic navigation for reliable mobile behavior
                    <button
                      key={item.label}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        // programmatic navigate ensures it always works on mobile
                        navigate(item.href);
                        setOpen(false);
                        setServicesOpenMobile(false);
                      }}
                      className="w-full text-left rounded-lg px-3 py-2 text-[13px] transition-colors hover:bg-slate-50 hover:text-[#2E7AE3]"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <Link
                to="/project"
                onClick={() => {
                  setOpen(false);
                  setServicesOpenMobile(false);
                }}
                className="block rounded-lg px-3 py-2 transition-colors hover:bg-slate-50 hover:text-[#2E7AE3]"
              >
                Projects
              </Link>

              <Link
                to="/contact"
                onClick={() => {
                  setOpen(false);
                  setServicesOpenMobile(false);
                }}
                className="block rounded-lg px-3 py-2 transition-colors hover:bg-slate-50 hover:text-[#2E7AE3]"
              >
                Contact Us
              </Link>

              <a
                href="tel:+919624120591"
                onClick={() => {
                  setOpen(false);
                  setServicesOpenMobile(false);
                }}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#F5B835] px-4 py-2 text-[13px] font-semibold text-[#031E6C] shadow-sm transition-colors hover:bg-[#2E7AE3] hover:text-white"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>

      {/* Small fade animation for dropdown */}
      <style>{`
        @keyframes fade {
          from { opacity: 0; transform: translateY(-5px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade {
          animation: fade 0.18s ease-out;
        }
      `}</style>
    </header>
  );
}
