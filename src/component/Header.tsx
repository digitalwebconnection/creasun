import { useEffect, useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import logo from "../assets/creasun2.png"; // keep your existing path

export default function Header() {
  const [open, setOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Careers", href: "#careers" },
  ];

  // ===== Smart hide/show on scroll =====
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // Always show when near top
      if (currentY < 20) {
        setShowHeader(true);
        setLastScrollY(currentY);
        return;
      }

      // Scroll down → hide
      if (currentY > lastScrollY + 5) {
        setShowHeader(false);
      }
      // Scroll up → show
      else if (currentY < lastScrollY - 5) {
        setShowHeader(true);
      }

      setLastScrollY(currentY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-30 transform transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Thin gradient strip */}
      <div className="h-1 w-full bg-linear-to-r from-[#F5B835] via-[#2E7AE3] to-[#031E6C]" />

      {/* Main bar */}
      <div className="backdrop-blur bg-white/90 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Left: Logo + Name */}
            <div className="flex items-center gap-3">
              <a href="#top" className="flex items-center gap-3">
                <div className="h-22 w-auto">
                  <img
                    src={logo}
                    alt="Creasun Energy"
                    className="h-full w-48 object-contain"
                  />
                </div>
                
              </a>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-700">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative py-1 hover:text-[#2E7AE3] transition-colors group"
                >
                  <span>{item.label}</span>
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 bg-linear-to-r from-[#F5B835] to-[#2E7AE3] transition-all duration-200 group-hover:w-full" />
                </a>
              ))}

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full bg-[#F5B835] px-4 py-2 text-[13px] font-semibold text-[#031E6C] shadow-sm hover:bg-[#2E7AE3] hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
            </nav>

            {/* Mobile: CTA + Menu button */}
            <div className="flex items-center gap-2 md:hidden">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-[#F5B835]/60 bg-white px-3 py-1.5 text-xs font-semibold text-[#031E6C] shadow-sm hover:bg-[#F5B835] hover:text-[#031E6C] transition-colors"
              >
                Call Us
              </a>
              <button
                type="button"
                onClick={() => setOpen((prev) => !prev)}
                className="inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100 hover:text-[#031E6C] focus:outline-none focus:ring-2 focus:ring-[#2E7AE3]"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur">
            <nav className="space-y-1 px-4 py-3 text-sm font-medium text-slate-700">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-2 hover:bg-slate-50 hover:text-[#2E7AE3] transition-colors"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-full bg-[#F5B835] px-4 py-2 text-[13px] font-semibold text-[#031E6C] shadow-sm hover:bg-[#2E7AE3] hover:text-white transition-colors"
              >
                <Phone className="h-4 w-4" />
                Contact Us
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
