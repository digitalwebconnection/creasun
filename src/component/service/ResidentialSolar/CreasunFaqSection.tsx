"use client";

import { useState } from "react";
import { Plus, Minus } from "lucide-react";

type FaqItem = {
    question: string;
    answer: string;
};

const FAQ_ITEMS: FaqItem[] = [
    {
        question: "How much can I save with residential solar in Rajkot?",
        answer:
            "With a properly sized Creasun Energy system, most homeowners see a 60–90% reduction in their monthly electricity bills, depending on roof space and consumption.",
    },
    {
        question:
            "Are Creasun Energy rooftop systems eligible for PM Surya Ghar subsidy?",
        answer:
            "Yes. Our MNRE-compliant residential rooftop systems are designed as per government norms. We help you apply for PM Surya Ghar subsidy to reduce your upfront cost.",
    },
    {
        question: "How does net-metering work for my home?",
        answer:
            "Your solar system feeds excess power back to the grid. Through net-metering, those units are adjusted in your bill, so you get credit for the extra energy your system generates.",
    },


];

export default function CreasunFaqSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(3); // last one open by default

    const toggleIndex = (index: number) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    };

    return (
        <>
            <section
                className=" relative h-[300px] bg-[url('https://zodiacenergy.com/images/2.jpg')] bg-cover bg-center bg-fixed flex items-center "
            >
                <div className="absolute inset-0 bg-black/70" />

                <div className="relative z-10 max-w-7xl px-6 text-white">
                    <h2 className="text-3xl sm:text-4xl font-extrabold">
                        Smart Residential Solar by Creasun Energy
                    </h2>

                    <p className="mt-4 text-sm sm:text-base text-gray-200 leading-relaxed max-w-5xl">
                        Delivering high-efficiency rooftop solar systems designed for
                        Rajkot homes. Enjoy fast installation, accurate sizing, and
                        transparent savings backed by Tier-1 technology and expert support.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3 text-sm font-medium">
                        <span className="px-4 py-2 bg-white/20 rounded-full">✓ 60–90% Bill Savings</span>
                        <span className="px-4 py-2 bg-white/20 rounded-full">✓ Government Certified</span>
                        <span className="px-4 py-2 bg-white/20 rounded-full">✓ Real-Time Monitoring</span>
                        <span className="px-4 py-2 bg-white/20 rounded-full">✓ Long-Term Warranty</span>
                    </div>
                </div>
            </section>

            <section className="w-full bg-white py-16">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-10 items-center md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.3fr)]">
                        {/* Left image */}
                        <div className="relative h-80 sm:h-[380px] md:h-[420px] overflow-hidden rounded-3xl shadow-xl">
                            <img
                                src="https://plus.unsplash.com/premium_photo-1682148026899-d21f17c04e80?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c29sYXIlMjBwYW5lbHxlbnwwfHwwfHx8MA%3D%3D"
                                alt="Creasun Energy engineer at a residential solar site"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        {/* Right content */}
                        <div>
                            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
                                Still Have Questions? Find Answers
                            </h2>
                            <p className="mt-3 text-sm sm:text-base text-gray-600">
                                Creasun Energy helps homeowners in Rajkot move to clean solar
                                power with full clarity on savings, subsidy, technology and
                                long-term support. Explore the most common questions about our
                                residential rooftop solutions.
                            </p>

                            {/* FAQ list */}
                            <div className="mt-6 space-y-3">
                                {FAQ_ITEMS.map((item, index) => {
                                    const isActive = activeIndex === index;

                                    return (
                                        <div
                                            key={item.question}
                                            className={`rounded-lg border text-sm sm:text-base transition-colors ${isActive
                                                ? "bg-green-600 text-white border-green-600"
                                                : "bg-green-50 text-gray-900 border-green-100"
                                                }`}
                                        >
                                            <button
                                                type="button"
                                                onClick={() => toggleIndex(index)}
                                                className="flex w-full items-center justify-between px-4 py-3 sm:px-6 sm:py-4"
                                            >
                                                <span className="text-left font-medium">
                                                    {item.question}
                                                </span>
                                                {isActive ? (
                                                    <Minus className="h-4 w-4 shrink-0" />
                                                ) : (
                                                    <Plus className="h-4 w-4 shrink-0" />
                                                )}
                                            </button>

                                            {isActive && (
                                                <div className="border-t border-white/20 bg-white/5 px-4 pb-4 pt-1 sm:px-6 sm:pb-4 sm:pt-2">
                                                    <p
                                                        className={`text-sm leading-relaxed ${isActive ? "text-white/90" : "text-gray-600"
                                                            }`}
                                                    >
                                                        {item.answer}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
