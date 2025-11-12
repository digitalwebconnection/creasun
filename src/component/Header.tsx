"use client";

import logo from "../assets/creasun.png"; // <-- replace with your actual image path

export default function Header() {
    return (
        <header className="  shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
                {/* ===== Left: Logo + Brand ===== */}
                <div className="flex items-center space-x-3">
                    <div className="relative w-21 h-12">
                        <img src={logo} alt="" />
                    </div>
                </div>

                {/* ===== Middle: Navigation ===== */}
                <nav className="hidden md:flex items-center space-x-6 ">
                    <a href="#about" className="hover:text-[#F5B835] transition">
                        About
                    </a>
                    <a href="#about" className="hover:text-[#F5B835] transition">
                        Services
                    </a>
                    <a href="#products" className="hover:text-[#F5B835] transition">
                        Projects
                    </a>
                    <a href="#contact" className="hover:text-[#F5B835] transition">
                        Careers
                    </a>
                    <button className="bg-[#F5B835] text-[#031E6C] px-4 py-2 rounded-md font-semibold hover:bg-[#2E7AE3] hover:text-white transition">
                        Contact Us
                    </button>
                </nav>

                {/* ===== Right: CTA ===== */}

            </div>
        </header>
    );
}
