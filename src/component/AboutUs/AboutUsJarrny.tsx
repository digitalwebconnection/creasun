import "../AboutUs/process-timeline.css";
import { motion } from "framer-motion";
import { useState } from "react";

// Animation variant
const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

const steps = [
    {
        id: 1,
        title: "Free Site Survey",
        desc: "Roof study, load assessment, shading analysis & feasibility check.",
    },
    {
        id: 2,
        title: "Design & Proposal",
        desc: "Custom system sizing, ROI calculation & detailed savings report.",
    },
    {
        id: 3,
        title: "Approvals & Subsidy",
        desc: "DISCOM paperwork, net-metering and subsidy coordination.",
    },
    {
        id: 4,
        title: "Installation",
        desc: "On-site execution with certified hardware and safety standards.",
    },
    {
        id: 5,
        title: "Handover & Training",
        desc: "App demo, performance overview and maintenance guidelines.",
    },
];

const leaders = [
    {
        name: "name ",
        role: "Founder & CEO",
        bio: "Drives overall vision, strategy, and key partnerships while ensuring every project delivers measurable impact.",
        image:
            "https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-man-570x570.png", // replace with your image
        linkedin: "#",
    },
    {
        name: "name",
        role: "Co-Founder & Director",
        bio: "Leads marketing, brand experience, and customer success with a focus on long-term client relationships.",
        image:
            "https://www.aquasafemine.com/wp-content/uploads/2018/06/dummy-man-570x570.png",// replace with your image
        linkedin: "#",
    },
];


const faqs = [
    {
        question: "How involved is the leadership team in day-to-day projects?",
        answer:
            "Very involved. Core decisions on strategy, design direction, and key client communication always include at least one leadership member.",
    },
    {
        question: "Will we get a single point of contact for our project?",
        answer:
            "Yes. You get a dedicated project lead who coordinates with the leadership team and keeps you updated on timelines, milestones, and next steps.",
    },
    {
        question: "How do you typically communicate during an ongoing engagement?",
        answer:
            "We usually work through email, WhatsApp/Slack groups, and scheduled review calls. For critical decisions, we prefer quick video calls with at least one founder present.",
    },
    {
        question: "Can the team support us across multiple brands or locations?",
        answer:
            "Absolutely. Our leadership team has experience handling multi-brand and multi-location projects with separate strategies while keeping a unified vision.",
    },
];



const ProcessTimeline = () => {

    const [openIndex, setOpenIndex] = useState(0);

    return (
        <main className="bg-white">

            {/* ====== HOW IT WORKS SECTION ====== */}
            <section className="relative py-8 sm:py-10 bg-linear-to-b from-slate-50 via-white to-slate-100 overflow-hidden">
                {/* soft background blobs */}
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
                    <div className="absolute -top-24 -left-10 h-48 w-48 rounded-full bg-emerald-300/20 blur-3xl" />
                    <div className="absolute -bottom-32 right-0 h-64 w-64 rounded-full bg-sky-300/20 blur-3xl" />
                </div>

                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-0">
                    {/* Heading */}
                    <div className="text-center mb-10 sm:mb-14">
                        <p className="inline-flex items-center rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-blue-700 border border-emerald-100 mb-3">
                            Simple, transparent process
                        </p>
                        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                            How it works
                        </h2>
                        <p className="mt-3 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
                            From the first site visit to final handover, we follow a structured
                            process so you always know what’s coming next.
                        </p>
                    </div>

                    {/* Timeline + cards */}
                    <div className="relative">
                        {/* horizontal line behind pills */}
                        <div className="hidden md:block absolute left-0 right-0 top-6 h-0.5 bg-linear-to-r from-blue-900 via-blue-600 to-blue-400" />

                        <div className="grid gap-8 md:grid-cols-5">
                            {steps.map((step, index) => (
                                <div
                                    key={step.id}
                                    className="flex flex-col items-center text-center group"
                                >
                                    {/* Step pill */}
                                    <div className="relative z-10 mb-4">
                                        <div className="flex items-center justify-center rounded-full border border-yellow-700/80 bg-white shadow-sm px-4 py-1.5 transition">
                                            <span className="mr-2 inline-flex h-7 w-7 items-center justify-center rounded-full bg-blue-800 text-white text-sm font-semibold shadow-sm">
                                                {step.id}
                                            </span>
                                            <span className="text-xs font-medium uppercase tracking-[0.16em] text-blue-700">
                                                Step {step.id}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Card */}
                                    <div
                                        className={`
                    w-full rounded-2xl border border-slate-600/50 bg-white/70 
                    backdrop-blur-sm px-4 py-5 sm:px-5 sm:py-6 shadow-xl shadow-black/30
                    hover:shadow-lg hover:-translate-y-1  transition 
                    duration-200
                    ${index % 2 === 0 ? "md:mt-8" : "md:-mt-2"}
                  `}
                                    >
                                        <h3 className="text-sm sm:text-base font-semibold text-slate-900 mb-2">
                                            {step.title}
                                        </h3>
                                        <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
                                            {step.desc}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </section>
            {/* ====== JOURNEY SECTION ====== */}
            <motion.section
                className="timeline-section max-w-7xl mx-auto py-10"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.65 }}
            >
                <motion.h1
                    className="text-5xl max-w-3xl mx-auto font-bold text-blue-950 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.4 }}
                    transition={{ duration: 0.6 }}
                >
                    Our Journey to Powering Businesses with Solar
                </motion.h1>

                <div className="timeline-steps">
                    {/* 1. Foundation & First Rooftop Projects */}
                    <motion.div
                        className="step step-top mb-30 "
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.05 }}
                    >
                        <div className="icon-outer bg-yellow-700">
                            <div className="icon-inner ">
                                <img
                                    src="https://solarsmart.co.in/wp-content/uploads/2025/01/82318b4b49.jpg"
                                    alt=""
                                    className="h-full w-full"
                                />
                            </div>
                        </div>
                        <div className="step-title text-yellow-700">
                            2017 – Foundation & First Rooftop Systems
                        </div>
                    </motion.div>

                    <div className="line" />

                    {/* 2. Expanding to Commercial & Industrial */}
                    <motion.div
                        className="step step-bottom mt-20"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.08 }}
                    >
                        <div className="icon-outer">
                            <div className="icon-inner">
                                <img
                                    src="https://content.jdmagicbox.com/v2/comp/tirupur/f1/9999px421.x421.230811192937.i9f1/catalogue/swotmann-facilitators-and-management-palladam-road-tirupur-residential-cleaning-services-9whxg76zn0-250.jpg"
                                    alt=""
                                    className="h-full w-full"
                                />
                            </div>
                        </div>
                        <div className="step-title text-blue-950">
                            2019 – Commercial & Industrial Adoption
                        </div>
                    </motion.div>

                    <div className="line1" />

                    {/* 3. MW-Scale Milestones & Engineering Focus */}
                    <motion.div
                        className="step step-top mb-30"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.11 }}
                    >
                        <div className="icon-outer">
                            <div className="icon-inner">
                                <img
                                    src="https://solarsmart.co.in/wp-content/uploads/2025/03/New-Project.png"
                                    alt=""
                                    className="h-full w-full"
                                />
                            </div>
                        </div>
                        <div className="step-title text-yellow-700">
                            2022 – MW Milestones & Stronger Engineering
                        </div>
                    </motion.div>

                    <div className="line" />

                    {/* 4. Smart Monitoring & Financing Support */}
                    <motion.div
                        className="step step-bottom mt-20"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.14 }}
                    >
                        <div className="icon-outer">
                            <div className="icon-inner">
                                <img
                                    src="https://sunapecopower.com/wp-content/uploads/2024/08/choose-and-install-solar-panels.png"
                                    alt=""
                                    className="h-full w-full"
                                />
                            </div>
                        </div>
                        <div className="step-title text-blue-950">
                            2024 – Smart Monitoring & Better Financing
                        </div>
                    </motion.div>

                    <div className="line1" />

                    {/* 5. 2025 & Beyond – Net Zero Partnerships */}
                    <motion.div
                        className="step step-top mb-30"
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.4 }}
                        transition={{ duration: 0.5, delay: 0.17 }}
                    >
                        <div className="icon-outer">
                            <div className="icon-inner">
                                <img
                                    src="https://sse-website.s3.ap-south-1.amazonaws.com/homes/after.jpg"
                                    alt=""
                                    className="h-full w-full"
                                />
                            </div>
                        </div>
                        <div className="step-title text-yellow-700">
                            2025 & Beyond – Towards Net-Zero Businesses
                        </div>
                    </motion.div>
                </div>
            </motion.section>


            <section className="relative py-8 sm:py-10 bg-slate-950 text-slate-50 overflow-hidden">
                {/* soft gradient background */}
                <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
                    <div className="absolute -top-24 -left-16 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
                    <div className="absolute -bottom-32 right-0 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-10 sm:mb-14">
                        <div>
                            <p className="inline-flex items-center rounded-full border border-emerald-500/30 bg-emerald-500/10 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-yellow-400">
                                Leadership Team
                            </p>
                            <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight">
                                People behind the vision
                            </h2>
                            <p className="mt-2 max-w-xl text-sm sm:text-base text-slate-300">
                                A compact core team, deeply involved in every project—from first
                                discussion to final delivery.
                            </p>
                        </div>

                        <div className="text-sm text-slate-400 max-w-sm">
                            <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400 mr-2" />
                            Direct access to founders, no middle layers.
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid gap-8 md:grid-cols-2">
                        {leaders.map((person, idx) => (
                            <article
                                key={person.name}
                                className={`relative overflow-hidden rounded-3xl border border-slate-800/80 bg-linear-to-br from-slate-900/90 via-slate-900/60 to-slate-900/90 p-6 sm:p-7 shadow-xl shadow-black/40 backdrop-blur
                hover:-translate-y-1 hover:border-yellow-400/60 transition-transform duration-200`}
                            >
                                {/* Accent strip */}
                                <div className="absolute inset-x-0 top-0 h-1 bg-linear-to-r from-yellow-400 via-blue-400 to-" />

                                <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 items-start">
                                    {/* Avatar */}
                                    <div className="relative shrink-0">
                                        <div className="h-20 w-20 sm:h-24 sm:w-24 rounded-2xl overflow-hidden border border-slate-700 bg-slate-800">
                                            <img
                                                src={person.image}
                                                alt={person.name}
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        <span className="absolute -bottom-2 left-2 rounded-full bg-yellow-500/90 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-950">
                                            Core Team
                                        </span>
                                    </div>

                                    {/* Text */}
                                    <div className="space-y-2">
                                        <div>
                                            <h3 className="text-lg sm:text-xl font-semibold text-slate-50">
                                                {person.name}
                                            </h3>
                                            <p className="text-xs font-medium uppercase tracking-[0.18em] text-yellow-400">
                                                {person.role}
                                            </p>
                                        </div>
                                        <p className="text-sm leading-relaxed text-slate-300">
                                            {person.bio}
                                        </p>

                                        <div className="pt-2 flex items-center gap-3">
                                            <span className="inline-flex items-center rounded-full bg-slate-900/80 px-2.5 py-1 text-[11px] font-medium text-slate-300 border border-slate-700/70">
                                                {idx === 0 ? "15+ yrs leadership" : "Strategy & Growth"}
                                            </span>

                                            {person.linkedin && (
                                                <a
                                                    href={person.linkedin}
                                                    target="_blank"
                                                    rel="noreferrer"
                                                    className="text-xs font-medium text-sky-300 hover:text-sky-200 underline underline-offset-4"
                                                >
                                                    View LinkedIn
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* Small line below */}
                    <p className="mt-8 text-xs sm:text-sm text-slate-400 text-center">
                        Every project gets founder-level attention – that’s our promise.
                    </p>
                </div>
            </section>

            <section className="py-16 bg-white text-slate-800">
                <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Heading */}
                    <div className="mb-10 sm:mb-14 text-center">
                        <p className="inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium uppercase tracking-[0.18em] text-slate-500">
                            FAQs
                        </p>
                        <h2 className="mt-3 text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900">
                            Frequently Asked Questions
                        </h2>
                        <p className="mt-2 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
                            Clear answers to the questions clients ask us the most.
                        </p>
                    </div>

                    {/* FAQ items */}
                    <div className="space-y-4">
                        {faqs.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className="rounded-2xl border border-slate-600/50 bg-white shadow-sm hover:shadow-md transition overflow-hidden"
                                >
                                    {/* Question Button */}
                                    <button
                                        type="button"
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left"
                                    >
                                        <span className="text-base font-medium text-slate-900">
                                            {item.question}
                                        </span>

                                        <span
                                            className={`flex h-7 w-7 items-center p-2 justify-center rounded-full border text-sm font-bold transition
                    ${isOpen
                                                    ? "border-yellow-500 text-blue-600 bg-emerald-50"
                                                    : "border-slate-600 text-slate-500"
                                                }`}
                                        >
                                            {isOpen ? "–" : "+"}
                                        </span>
                                    </button>

                                    {/* Answer */}
                                    {isOpen && (
                                        <div className="px-5 pb-5 pt-0 text-sm text-slate-600 border-t border-slate-200">
                                            {item.answer}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>

                    {/* Footer note */}
                    <p className="mt-8 text-xs sm:text-sm text-slate-500 text-center">
                        Didn’t find your answer? Contact us — our team will get back to you.
                    </p>
                </div>
            </section>

        </main>
    );
};

export default ProcessTimeline;
