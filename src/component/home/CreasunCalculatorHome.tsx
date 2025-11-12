"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import {
  Zap,
  IndianRupee,
  Download,
  DollarSign,
  Sun,
  BadgeCheck,
  Factory,
  Home,
  Building2,
  Mountain,
  PanelsTopLeft,
  Info,
} from "lucide-react";

/* ===================== Display helpers (UI) ===================== */
const fmtINR = new Intl.NumberFormat("en-IN", {
  style: "currency",
  currency: "INR",
  maximumFractionDigits: 0,
});

const BRAND = {
  blue: "#031E6C",
  sky: "#2E7AE3",
  yellow: "#F5B835",
};

const CITY_SUN = { Rajkot: 5.5 } as const;
type City = keyof typeof CITY_SUN;

type Segment = "Residential" | "Commercial" | "Industrial";
type Mount = "Rooftop" | "Ground-Mounted";

/** Per-kW price matrix (indicative, excl. taxes) */
const COST_PER_KW_MATRIX: Record<
  Segment,
  { Rooftop: number; "Ground-Mounted": number }
> = {
  Residential: { Rooftop: 55000, "Ground-Mounted": 53000 },
  Commercial: { Rooftop: 48000, "Ground-Mounted": 46000 },
  Industrial: { Rooftop: 45000, "Ground-Mounted": 43000 },
};

function clamp(n: number, min: number, max: number) {
  return Math.min(Math.max(n, min), max);
}

function subsidyForKw(kw: number): number {
  if (!kw || kw <= 0) return 0;
  const first2 = Math.min(kw, 2) * 30000;
  const third = Math.max(0, Math.min(kw - 2, 1)) * 18000;
  return Math.min(78000, Math.round(first2 + third));
}

/* ===================== PDF helpers (ASCII-safe) ===================== */
// Indian grouping WITHOUT the ₹ symbol (jsPDF default font is not Unicode).
function formatINRPlain(n: number): string {
  const i = Math.round(n).toString();
  const last3 = i.slice(-3);
  let other = i.slice(0, -3);
  if (other) other = other.replace(/\B(?=(\d{2})+(?!\d))/g, ",") + ",";
  return `Rs ${other}${last3}`;
}

// Remove NBSP and any non-ASCII that can make jsPDF render junk glyphs.
function cleanTxt(s: string): string {
  return s.replace(/\u00A0/g, " ").replace(/[^\x00-\x7F]/g, "");
}

/* ===================== PDF (jsPDF + autoTable) ===================== */
async function makePdf(payload: {
  city: string;
  sunHours: number;
  segment: Segment;
  mount: Mount;
  costPerKw: number;
  inputs: { monthlyBill: number; tariff: number; applySubsidy: boolean };
  results: {
    monthlyKWh: number;
    monthlyGen: number;
    recommendedKw: number;
    capex: number;
    subsidy: number;
    netCapex: number;
    monthlySavings: number;
    paybackYears: number;
    kWhPerKwMonth: number;
  };
}) {
  const jsPDF = (await import("jspdf")).default;
  const autoTable = (await import("jspdf-autotable")).default;

  const doc = new jsPDF("p", "pt", "a4");

  // Header
  doc.setFont("helvetica", "bold");
  doc.setTextColor(20);
  doc.setFontSize(16);
  doc.text(
    cleanTxt(
      `Creasun Energy — Solar Estimate (${payload.city}, ${payload.segment}, ${payload.mount})`
    ),
    40,
    40
  );

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.text(
    cleanTxt(
      `Avg Sun Hours: ${payload.sunHours} kWh/m²/day   |   Price: Rs ${payload.costPerKw.toLocaleString()}/kW (excl. taxes)`
    ),
    40,
    60
  );

  // Table
  autoTable(doc, {
    startY: 80,
    theme: "grid",
    head: [["Parameter", "Value"]],
    body: [
      ["Segment", cleanTxt(payload.segment)],
      ["Mounting", cleanTxt(payload.mount)],
      ["Monthly Bill", formatINRPlain(payload.inputs.monthlyBill)],
      ["Tariff", cleanTxt(`Rs ${payload.inputs.tariff}/kWh`)],
      ["Estimated Consumption", `${payload.results.monthlyKWh} kWh/month`],
      ["Apply Subsidy", payload.inputs.applySubsidy ? "Yes" : "No"],
      ["Recommended Size", `${payload.results.recommendedKw} kW`],
      ["Monthly Generation", `${payload.results.monthlyGen} kWh`],
      [
        "Payback Period",
        `${Number.isFinite(payload.results.paybackYears)
          ? payload.results.paybackYears.toFixed(1)
          : "—"
        } years`,
      ],
      ["Gross CAPEX", formatINRPlain(payload.results.capex)],
      ["Subsidy", formatINRPlain(payload.results.subsidy)],
      ["Net Cost", formatINRPlain(payload.results.netCapex)],
      ["Monthly Savings", formatINRPlain(payload.results.monthlySavings)],
    ],
    styles: { font: "helvetica", fontSize: 10, cellPadding: 6 },
    headStyles: { fillColor: [245, 184, 53], textColor: 0, fontStyle: "bold" },
    columnStyles: {
      0: { cellWidth: 260 },
      1: { cellWidth: 260, halign: "right" as const },
    },
    margin: { left: 40, right: 40 },
    didParseCell: (data) => {
      if (typeof data.cell.text?.[0] === "string") {
        data.cell.text[0] = cleanTxt(data.cell.text[0]);
      }
    },
  });

  // Footer
  const yEnd = (doc as any).lastAutoTable.finalY + 18;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(90);
  doc.text(
    cleanTxt(
      "*Estimates are indicative and exclude taxes. Actual output depends on site conditions and tariff changes. Subsidy eligibility as per current govt. rules."
    ),
    40,
    yEnd
  );

  return doc;
}

/* ===================== Micro components ===================== */
function Chip({ label, onClick }: { label: string; onClick: () => void }) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileTap={{ scale: 0.96 }}
      whileHover={{ y: -1 }}
      className="px-3 py-1.5 rounded-full border border-gray-300 text-gray-700 text-sm hover:bg-gray-50"
    >
      {label}
    </motion.button>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
      className={`relative rounded-2xl p-6 bg-white border border-gray-800/50 shadow-xl shadow-black/50 ${className}`}
      whileHover={{ y: -2 }}
    >
      {/* animated gradient edge */}
      <span className="pointer-events-none absolute inset-0 rounded-2xl mask-[linear-gradient(white,transparent)]">
        <span className="absolute -inset-px rounded-2xl bg-[conic-gradient(from_0deg,rgba(46,122,227,.2),rgba(245,184,53,.2),transparent_60%)] animate-[spin_8s_linear_infinite]" />
      </span>
      {children}
    </motion.div>
  );
}

/* Animated number using framer-motion */
function AnimatedNumber({ value, format }: { value: number; format?: (n: number) => string }) {
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { stiffness: 120, damping: 18, mass: 0.8 });
  const rounded = useTransform(spring, (v) => Math.round(v));
  const ref = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    mv.set(value);
  }, [value, mv]);

  useEffect(() => {
    const unsub = rounded.on("change", (v) => {
      if (ref.current) ref.current.textContent = format ? format(v) : String(v);
    });
    return () => unsub();
  }, [rounded, format]);

  return <span ref={ref}>{format ? format(0) : 0}</span>;
}

function Stat({ label, value, accent = "", isMoney = false }: { label: string; value: number; accent?: string; isMoney?: boolean }) {
  return (
    <Card className="p-5">
      <div className="text-xs text-gray-500">{label}</div>
      <div className={`text-lg font-bold mt-1 ${accent}`}>
        {isMoney ? (
          <AnimatedNumber value={value} format={(n) => fmtINR.format(n)} />
        ) : (
          <AnimatedNumber value={value} format={(n) => n.toLocaleString()} />
        )}
      </div>
    </Card>
  );
}

/* ===================== Main Component ===================== */
export default function CreasunCalculatorWhite() {
  const [city] = useState<City>("Rajkot");
  const [segment, setSegment] = useState<Segment>("Residential");
  const [mount, setMount] = useState<Mount>("Rooftop");

  const [monthlyBill, setMonthlyBill] = useState<number>(3000);
  const [tariff, setTariff] = useState<number>(9);
  const [applySubsidy, setApplySubsidy] = useState<boolean>(true);

  // Sizing/assumption constants
  const PR = 0.75; // performance ratio
  const TARGET_OFFSET = 0.8; // offset 80% of consumption

  const subsidyAllowed = segment === "Residential" && mount === "Rooftop";
  const costPerKw = COST_PER_KW_MATRIX[segment][mount];

  const result = useMemo(() => {
    const sunHours = CITY_SUN[city];
    const monthlyKWh = monthlyBill > 0 && tariff > 0 ? monthlyBill / tariff : 0;
    const targetKWh = monthlyKWh * TARGET_OFFSET;
    const kWhPerKwMonth = sunHours * 30 * PR;

    const recommendedKw = kWhPerKwMonth > 0 ? clamp(targetKWh / kWhPerKwMonth, 0.3, 500) : 0;

    const capex = Math.round(recommendedKw * costPerKw);
    const subsidy = applySubsidy && subsidyAllowed ? subsidyForKw(recommendedKw) : 0;
    const netCapex = Math.max(0, capex - subsidy);
    const monthlyGen = Math.round(recommendedKw * kWhPerKwMonth);
    const monthlySavings = Math.round(monthlyGen * tariff);
    const annualSavings = monthlySavings * 12;
    const paybackYears = annualSavings > 0 ? netCapex / annualSavings : Infinity;

    return {
      sunHours,
      monthlyKWh: Math.round(monthlyKWh),
      monthlyGen,
      recommendedKw: Number(recommendedKw.toFixed(2)),
      capex,
      subsidy,
      netCapex,
      monthlySavings,
      paybackYears,
      kWhPerKwMonth: Math.round(kWhPerKwMonth),
    };
  }, [monthlyBill, tariff, city, applySubsidy, costPerKw, subsidyAllowed]);

  const paybackPct = (() => {
    const scaleMax = 10; // visualize vs 10y bar
    const yrs = Number.isFinite(result.paybackYears) ? result.paybackYears : scaleMax;
    return Math.max(0, Math.min(100, (yrs / scaleMax) * 100));
  })();

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Top Banner with animated gradient */}
      <section className="relative">
        <motion.div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(1200px 400px at 50% -10%, rgba(46,122,227,.12), transparent 70%), radial-gradient(800px 300px at 70% 0%, rgba(245,184,53,.15), transparent 70%)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        />

        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col gap-3 sm:gap-4">
          <motion.div
            className="inline-flex items-center justify-center gap-2 text-[13px] text-gray-600"
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <BadgeCheck className="h-4 w-4" style={{ color: BRAND.yellow }} />
            Creasun Energy • Rajkot • Rooftop, Ground-Mounted • Residential, Commercial & Industrial
          </motion.div>

          <motion.h1
            className="text-3xl sm:text-5xl text-center font-extrabold tracking-tight"
            initial={{ scale: 0.98, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            Solar Savings Calculator
          </motion.h1>

          <motion.p
            className="text-gray-600 text-center max-w-7xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.4 }}
          >
            Get an instant estimate of system size, cost, subsidy and ROI for your Rajkot property.
          </motion.p>
        </div>
      </section>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Inputs Card */}
        <Card className="lg:col-span-1">
          <h2 className="text-lg font-semibold pb-4 mb-6 border-b" style={{ color: BRAND.blue }}>
            <span className="inline-flex items-center gap-2">
              <DollarSign className="h-5 w-5" /> Your Inputs
            </span>
          </h2>

          {/* City (fixed) */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">City / Location</label>
            <div className="p-3 rounded-xl bg-gray-50 border border-gray-200">Rajkot</div>
            <p className="text-xs text-gray-500 mt-1">
              Avg Sun Hours: <b>{CITY_SUN[city]} kWh/m²/day</b>
            </p>
          </div>

          {/* Segment */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Segment</label>
            <div className="grid grid-cols-3 gap-2">
              {[
                { key: "Residential", icon: <Home className="w-4 h-4" /> },
                { key: "Commercial", icon: <Building2 className="w-4 h-4" /> },
                { key: "Industrial", icon: <Factory className="w-4 h-4" /> },
              ].map((it) => (
                <motion.button
                  key={it.key}
                  onClick={() => setSegment(it.key as Segment)}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm ${
                    segment === it.key
                      ? "border-blue-600 text-blue-700 bg-blue-50 shadow-inner"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {it.icon}
                  {it.key}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Mount */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-2">Mounting Type</label>
            <div className="grid grid-cols-2 gap-2">
              {[
                { key: "Rooftop", icon: <PanelsTopLeft className="w-4 h-4" /> },
                { key: "Ground-Mounted", icon: <Mountain className="w-4 h-4" /> },
              ].map((it) => (
                <motion.button
                  key={it.key}
                  onClick={() => setMount(it.key as Mount)}
                  whileTap={{ scale: 0.98 }}
                  className={`flex items-center justify-center gap-2 rounded-xl border px-3 py-2 text-sm ${
                    mount === it.key
                      ? "border-blue-600 text-blue-700 bg-blue-50 shadow-inner"
                      : "border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {it.icon}
                  {it.key}
                </motion.button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
              <Info className="w-3.5 h-3.5" />
              Prices shown are indicative, per-kW and exclude taxes.
            </p>
          </div>

          {/* Bill */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Monthly Electricity Bill (₹)</label>
            <motion.input
              type="number"
              value={monthlyBill}
              min={0}
              onChange={(e) => setMonthlyBill(Number(e.target.value || 0))}
              className="w-full p-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-[--accent] focus:border-[--accent] outline-none"
              style={{ ["--accent" as any]: BRAND.yellow }}
              whileFocus={{ boxShadow: "0 0 0 2px rgba(245,184,53,.35)" }}
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {[2000, 3000, 5000, 8000, 12000, 25000, 50000].map((v) => (
                <Chip key={v} label={`₹${v.toLocaleString()}`} onClick={() => setMonthlyBill(v)} />
              ))}
            </div>
            {/* Slider */}
            <input
              type="range"
              min={0}
              max={200000}
              step={500}
              value={monthlyBill}
              onChange={(e) => setMonthlyBill(Number(e.target.value))}
              className="w-full mt-3 accent-[--accent]"
              style={{ ["--accent" as any]: BRAND.sky }}
            />
          </div>

          {/* Tariff */}
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Electricity Tariff (₹/kWh)</label>
            <motion.input
              type="number"
              step="0.1"
              value={tariff}
              min={0}
              onChange={(e) => setTariff(Number(e.target.value || 0))}
              className="w-full p-3 rounded-xl bg-white border border-gray-300 focus:ring-2 focus:ring-[--accent] focus:border-[--accent] outline-none"
              style={{ ["--accent" as any]: BRAND.yellow }}
              whileFocus={{ boxShadow: "0 0 0 2px rgba(245,184,53,.35)" }}
            />
            <div className="flex flex-wrap gap-2 mt-2">
              {[7, 8.5, 9, 10, 11, 12].map((v) => (
                <Chip key={v} label={`${v}/kWh`} onClick={() => setTariff(v)} />
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Estimated consumption: <b>{result.monthlyKWh} kWh/month</b>
            </p>
          </div>

          {/* Subsidy */}
          <div className="flex items-center gap-3">
            <input
              id="subsidy"
              type="checkbox"
              checked={applySubsidy && subsidyAllowed}
              onChange={(e) => setApplySubsidy(e.target.checked)}
              disabled={!subsidyAllowed}
              className="w-4 h-4 accent-[--accent] disabled:opacity-60"
              style={{ ["--accent" as any]: BRAND.yellow }}
            />
            <label htmlFor="subsidy" className="text-sm select-none">
              Apply PM Surya Ghar Subsidy
              {!subsidyAllowed && (
                <span className="text-xs text-gray-500"> (only Residential Rooftop eligible)</span>
              )}
            </label>
          </div>
        </Card>

        {/* Results */}
        <section className="lg:col-span-2 space-y-8">
          {/* Top KPIs */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Zap className="w-4 h-4" style={{ color: BRAND.sky }} />
                Recommended Size
              </div>
              <div className="text-4xl font-extrabold mt-2" style={{ color: BRAND.blue }}>
                {/* animate size value smoothly */}
                <AnimatedNumber value={result.recommendedKw} format={(n) => `${n.toFixed(0)} kW`} />
              </div>
              <p className="text-xs text-gray-500 mt-2">Est. monthly generation: <b>{result.monthlyGen} kWh</b></p>
            </Card>

            <Card>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <IndianRupee className="w-4 h-4" style={{ color: BRAND.sky }} />
                Payback Period
              </div>
              <div className="text-4xl font-extrabold mt-2 text-blue-600">
                {Number.isFinite(result.paybackYears) ? result.paybackYears.toFixed(1) : "—"}
                <span className="text-base font-semibold text-gray-500"> years</span>
              </div>
              {/* Animated progress bar (10-year scale) */}
              <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                <motion.div
                  className="h-full rounded-full"
                  initial={false}
                  animate={{ width: `${100 - paybackPct}%` }}
                  transition={{ type: "spring", stiffness: 160, damping: 22 }}
                  style={{ background: "linear-gradient(90deg, #F5B835, #2E7AE3)" }}
                  title="Faster payback → fuller bar"
                />
              </div>
            </Card>

            <Card>
              <div className="flex items-center gap-2 text-sm font-medium text-gray-700">
                <Sun className="w-4 h-4" style={{ color: BRAND.sky }} />
                Monthly Savings
              </div>
              <div className="text-4xl font-extrabold mt-2 text-blue-600">
                <AnimatedNumber value={result.monthlySavings} format={(n) => fmtINR.format(n)} />
              </div>
              <p className="text-xs text-gray-500 mt-2">Indicative savings based on current tariff</p>
            </Card>
          </div>

          {/* Price & Summary */}
          <Card>
            <h3 className="text-lg font-semibold mb-4" style={{ color: BRAND.blue }}>
              Investment & Savings Breakdown
            </h3>

            {/* Price per kW row */}
            <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 text-blue-700 border border-blue-600">
                {segment === "Residential" ? (
                  <Home className="w-4 h-4" />
                ) : segment === "Commercial" ? (
                  <Building2 className="w-4 h-4" />
                ) : (
                  <Factory className="w-4 h-4" />
                )}
                {segment}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 border border-amber-400">
                {mount === "Rooftop" ? <PanelsTopLeft className="w-4 h-4" /> : <Mountain className="w-4 h-4" />}
                {mount}
              </span>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 text-gray-700 border border-gray-600">
                Price: <b>₹{costPerKw.toLocaleString()}/kW</b> (excl. taxes)
              </span>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Stat label="Gross CAPEX" value={result.capex} accent="text-gray-900" isMoney />
              <Stat label="Subsidy" value={result.subsidy} accent="text-emerald-600" isMoney />
              <Stat label="Net Cost" value={result.netCapex} accent="text-indigo-600" isMoney />
              <Stat label="Monthly Savings" value={result.monthlySavings} accent="text-amber-600" isMoney />
            </div>
          </Card>

          {/* Info strip */}
          <motion.div
            className="rounded-xl border border-gray-800/50 bg-linear-to-r from-[#FFF9E6] to-white p-4 text-sm text-gray-700 flex items-center gap-2 shadow-md shadow-yellow-500/20"
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.35 }}
          >
            <BadgeCheck className="h-4 w-4" style={{ color: BRAND.yellow }} />
            Creasun provides site survey, design, installation, subsidy assistance & AMC in Rajkot.
          </motion.div>

          {/* ---------- DETAILS ---------- */}
          <Card>
            {/* Live price matrix */}
            <div className="mt-1">
              <h4 className="text-base font-semibold mb-3" style={{ color: BRAND.blue }}>
                Indicative Price Matrix (₹/kW — excl. taxes)
              </h4>
              <div className="overflow-x-auto rounded-xl border border-gray-200">
                <table className="min-w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr className="text-left">
                      <th className="px-4 py-3 font-semibold">Segment</th>
                      <th className="px-4 py-3 font-semibold">Rooftop</th>
                      <th className="px-4 py-3 font-semibold">Ground-Mounted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {(["Residential", "Commercial", "Industrial"] as const).map((seg) => (
                      <tr key={seg} className="border-t">
                        <td className="px-4 py-3">{seg}</td>
                        <td className="px-4 py-3">₹{COST_PER_KW_MATRIX[seg].Rooftop.toLocaleString()}/kW</td>
                        <td className="px-4 py-3">₹{COST_PER_KW_MATRIX[seg]["Ground-Mounted"].toLocaleString()}/kW</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </Card>
          {/* ---------- /DETAILS ---------- */}
        </section>
      </main>

      {/* Actions */}
      <div className="max-w-7xl mx-auto px-6 pb-12">
        <div className="flex flex-wrap justify-center gap-6">
          <motion.button
            className="px-8 py-3 rounded-full text-white font-semibold shadow-sm"
            style={{ background: "linear-gradient(90deg, #2E7AE3, #031E6C)" }}
            whileHover={{ y: -1, boxShadow: "0 8px 24px rgba(3,30,108,.25)" }}
            whileTap={{ scale: 0.98 }}
          >
            Get Free Consultation
          </motion.button>

          <motion.button
            onClick={async () => {
              const doc = await makePdf({
                city,
                sunHours: CITY_SUN[city],
                segment,
                mount,
                costPerKw,
                inputs: { monthlyBill, tariff, applySubsidy: applySubsidy && (segment === "Residential" && mount === "Rooftop") },
                results: result,
              });
              doc.save(`Creasun_Estimate_${city}_${segment}_${mount}_${Date.now()}.pdf`);
            }}
            className="px-8 py-3 rounded-full font-semibold border border-gray-300 hover:bg-gray-50 flex items-center gap-2"
            style={{ color: BRAND.blue }}
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.98 }}
          >
            <Download className="w-5 h-5" />
            Download Estimate
          </motion.button>
        </div>
      </div>
    </div>
  );
}
