"use client";

import React, { useState } from 'react';
import { Sun, Home, Building2, Factory, Mountain, BadgeCheck, IndianRupee, Zap, TrendingUp, DollarSign, CheckCircle } from "lucide-react";

/**
 * Creasun — Segments & Mounting Showcase (New Tabbed Design)
 * Focuses on an interactive, segmented view instead of a card grid.
 * TailwindCSS + lucide-react icons only.
 */

// Define the colors and data structure
const SEGMENTS_DATA: SegmentData[] = [
    {
        key: "res",
        title: "Residential Rooftop",
        icon: Home,
        colorClass: "text-amber-600 border-amber-400 hover:bg-amber-50",
        activeClass: "bg-amber-100/70 border-amber-500 text-amber-900 shadow-lg",
        points: ["1–15 kW typical size", "Fast ROI with PM Surya Ghar", "Neat wiring & aesthetics", "Net metering assistance"],
        price: "₹55,000/kW*",
        ribbon: "Subsidy Eligible",
        details: { size: "1–15 kW", capex: "55,000", benefit: "Subsidy & savings on electricity bills", imagePrompt: "photorealistic image of a modern house with sleek solar panels seamlessly integrated into its rooftop, bright sunny day" },
    },
    {
        key: "com",
        title: "Commercial Rooftop",
        icon: Building2,
        colorClass: "text-blue-600 border-blue-400 hover:bg-blue-50",
        activeClass: "bg-blue-100/70 border-blue-500 text-blue-900 shadow-lg",
        points: ["20–200 kW typical size", "Accelerated depreciation benefits", "Tariff & demand charge optimization", "Scalable solutions"],
        price: "₹48,000/kW*",
        details: { size: "20–200 kW", capex: "48,000", benefit: "Significant operating cost reduction", imagePrompt: "photorealistic image of a large, flat commercial building roof with extensive solar panel installation, urban skyline in background" },
    },
    {
        key: "ind",
        title: "Industrial Rooftop",
        icon: Factory,
        colorClass: "text-indigo-600 border-indigo-400 hover:bg-indigo-50",
        activeClass: "bg-indigo-100/70 border-indigo-500 text-indigo-900 shadow-lg",
        points: ["200 kW – multi‑MWp", "Structure and operational safety first", "SLA-backed O&M for uptime", "Maximizing available roof space"],
        price: "₹45,000/kW*",
        details: { size: "200 kW – MWp", capex: "45,000", benefit: "Lowest Levelized Cost of Energy (LCOE)", imagePrompt: "photorealistic image of a vast industrial factory shed roof covered with solar panels, power lines in distance" },
    },
    {
        key: "gm",
        title: "Ground‑Mounted",
        icon: Mountain,
        colorClass: "text-emerald-600 border-emerald-400 hover:bg-emerald-50",
        activeClass: "bg-emerald-100/70 border-emerald-500 text-emerald-900 shadow-lg",
        points: ["Space-rich sites and open land", "Best LCOE achievable at scale", "Civil and electrical trenching expertise", "Utility-scale execution"],
        price: "₹43,000/kW*",
        ribbon: "Best for MWp Scale",
        details: { size: "MWp", capex: "43,000", benefit: "Maximum scale and highest energy output", imagePrompt: "photorealistic image of a large ground-mounted solar farm with rows of panels stretching into the horizon, clear sky" },
    },
];

type SegmentKey = "res" | "com" | "ind" | "gm";

type SegmentData = {
    key: SegmentKey;
    title: string;
    icon: React.ElementType;
    colorClass: string;
    activeClass: string;
    points: string[];
    price: string;
    ribbon?: string;
    details: {
        size: string;
        capex: string;
        benefit: string;
        imagePrompt: string; // Changed to imagePrompt for clarity
    };
};

export default function SegmentsAndMountingShowcase() {
    const [activeSegment, setActiveSegment] = useState<SegmentKey>(SEGMENTS_DATA[0].key);
    const activeData = SEGMENTS_DATA.find(d => d.key === activeSegment)!;

    return (
        <section className="relative bg-slate-50">
            {/* background accents */}
            <div
                className="absolute inset-0 -z-10 opacity-70"
                style={{
                    background:
                        "radial-gradient(900px 320px at 75% -10%, rgba(46,122,227,.05), transparent 60%), radial-gradient(800px 300px at 15% 0%, rgba(245,184,53,.08), transparent 65%)",
                }}
            />

            <div className="mx-auto max-w-7xl px-6 py-8 lg:py-14">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-900 ring-1 ring-blue-200">
                        <Sun className="h-3.5 w-3.5" /> Solutions by Segment
                    </span>
                    <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
                        Explore Our Specialized Solar PV Offerings
                    </h2>
                    <p className="mt-3 text-lg text-slate-600">
                        Select a segment below to see how we engineer the perfect power system for your specific needs, structure, and budget.
                    </p>
                </div>

                {/* Tab Navigation (Horizontal Scrollable on Mobile) */}
                <div className="mt-12 overflow-x-auto">
                    <div className="flex justify-center space-x-4 min-w-max">
                        {SEGMENTS_DATA.map((segment) => (
                            <TabButton
                                key={segment.key}
                                segment={segment}
                                isActive={activeSegment === segment.key}
                                onClick={() => setActiveSegment(segment.key)}
                            />
                        ))}
                    </div>
                </div>

                {/* Segment Content Panel */}
                <div className="mt-10 rounded-2xl bg-white p-6 md:p-10 shadow-black/30 shadow-2xl border border-slate-900/30">
                    <div className="grid md:grid-cols-2 gap-8">
                        {/* Column 1: Image/Illustration & Details */}
                        <div className="space-y-6">
                            {/* Image added here */}
                            <div className="h-56 md:h-64 rounded-xl overflow-hidden shadow-md relative">
                                <img
                                    src={
                                        activeSegment === "res"
                                            ? "https://australianpremiumsolar.co.in/wp-content/uploads/2019/01/What-are-the-benefits-of-rooftop-solar-panels.webp"
                                            : activeSegment === "com"
                                                ? "https://5.imimg.com/data5/SELLER/Default/2022/2/JP/YC/HF/22763594/commercial-rooftop-solar-power-plant.jpg"
                                                : activeSegment === "ind"
                                                    ? "https://5.imimg.com/data5/SELLER/Default/2020/11/JO/PL/SN/3154509/industrial-rooftop-solar.png"
                                                    : "https://urjagroups.com/images/solar-services/groundmount.JPG"
                                    }
                                    alt={activeData.title}
                                    className="w-full h-full object-cover transition-all duration-700 hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/40 via-black/10 to-transparent" />
                                <span className="absolute bottom-3 left-3 text-white text-xs font-semibold bg-black/50 px-2 py-1 rounded-lg backdrop-blur-sm">
                                    {activeData.title}
                                </span>
                            </div>


                            <div className="grid grid-cols-2 gap-4 text-center">
                                <DetailBox
                                    label="Typical Size"
                                    value={activeData.details.size}
                                    icon={Zap}
                                    color="text-blue-600"
                                />
                                <DetailBox
                                    label="Est. CAPEX (₹/kW)"
                                    value={`₹${activeData.details.capex}`}
                                    icon={IndianRupee}
                                    color="text-amber-600"
                                />
                            </div>

                            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-600 flex items-center gap-3">
                                <TrendingUp className="h-6 w-6 text-emerald-600 shrink-0" />
                                <div>
                                    <div className="text-sm font-semibold text-emerald-800">Key Financial Benefit:</div>
                                    <div className="text-base text-emerald-900 font-medium">{activeData.details.benefit}</div>
                                </div>
                            </div>
                        </div>

                        {/* Column 2: Features and Pricing */}
                        <div className="md:border-l md:pl-8">
                            <h3 className={`text-2xl font-extrabold ${SEGMENTS_DATA.find(d => d.key === activeSegment)!.colorClass.split(' ')[0]}`}>
                                {activeData.title}
                            </h3>

                            {activeData.ribbon && (
                                <span className="mt-2 inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-bold text-indigo-800">
                                    <BadgeCheck className="h-3 w-3" /> {activeData.ribbon}
                                </span>
                            )}

                            <ul className="mt-4 space-y-3 text-base text-slate-700">
                                {activeData.points.map((p, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <CheckCircle className={`h-5 w-5 ${SEGMENTS_DATA.find(d => d.key === activeSegment)!.colorClass.split(' ')[0]} mt-0.5 shrink-0`} />
                                        <span>{p}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-6 pt-4 border-t border-slate-200">
                                <a
                                    href="#contact"
                                    className="inline-flex items-center gap-2 rounded-xl bg-linear-to-r from-[#F5B835] to-[#daa22a] px-6 py-3 font-semibold text-white shadow-lg hover:brightness-105"
                                >
                                    Start Project for {activeData.price} <DollarSign className="h-5 w-5" />
                                </a>
                                <p className="mt-3 text-xs text-slate-500">
                                    *Indicative CAPEX (per kW), excludes GST/taxes. Final scope and structure depend on site survey.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}

/* -------------- New Components for Tabbed Interface -------------- */

function TabButton({ segment, isActive, onClick }: { segment: SegmentData; isActive: boolean; onClick: () => void }) {
    const Icon = segment.icon;
    const activeStyles = isActive ? segment.activeClass : `border-transparent text-slate-600 ${segment.colorClass} hover:border-slate-300`;

    return (
        <button
            onClick={onClick}
            className={`flex flex-col items-center p-4 rounded-xl border-2 transition-all duration-200 min-w-[120px] ${activeStyles}`}
        >
            <Icon className="h-6 w-6" />
            <span className="mt-1 text-sm font-semibold whitespace-nowrap">{segment.title.replace("Rooftop", "Roof")}</span>
        </button>
    );
}

function DetailBox({ label, value, icon: Icon, color }: { label: string; value: string; icon: React.ElementType; color: string }) {
    return (
        <div className="p-4 rounded-xl bg-slate-50 border border-slate-600/50">
            <Icon className={`h-5 w-5 mx-auto ${color}`} />
            <div className="mt-1 text-sm font-medium text-slate-500">{label}</div>
            <div className="text-lg font-bold text-slate-900">{value}</div>
        </div>
    );
}
