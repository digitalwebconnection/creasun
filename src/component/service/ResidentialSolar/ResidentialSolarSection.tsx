"use client";

import {
  Home,
  SunMedium,
  ShieldCheck,
  Wallet,
} from "lucide-react";

const residentialServices = [
  {
    icon: Wallet,
    title: "Savings & Long-Term Value",
    description:
      "Reduce your monthly electricity bills, increase your property’s value and switch to clean renewable energy for long-term financial benefits.",
  },
  {
    icon: Home,
    title: "MNRE-Compliant Design & Subsidy",
    description:
      "Creasun Energy provides MNRE-approved rooftop systems for bungalows, flats and societies with full PM Surya Ghar subsidy support and accurate system sizing.",
  },
  {
    icon: SunMedium,
    title: "Net-Metering & Billing Advantages",
    description:
      "We handle DISCOM approvals and install net-metering so excess solar generation is credited back to your electricity bill—maximizing your savings.",
  },
  {
    icon: ShieldCheck,
    title: "Reliable Technology & Full Support",
    description:
      "Tier-1 solar panels, high-efficiency inverters, quality BOS material, real-time monitoring, cleaning guidance, AMC, and a 25-year performance warranty.",
  },
];

export default function ResidentialSolarSection() {
  return (
    <section className="w-full bg-blue-50 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Residential Solar With <br /> <span className="text-blue-900">Creasun Energy</span> 
          </h2>
          <p className="mt-3 max-w-4xl mx-auto text-sm sm:text-base text-gray-600">
            Creasun Energy delivers high-quality residential rooftop solar
            solutions in Rajkot—covering design, subsidy processing,
            installation, billing setup, and long-term maintenance for your
            home’s solar journey.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {residentialServices.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="flex flex-col shadow-xl shadow-black/10 rounded-2xl p-6 bg-white border border-gray-800/20 hover:scale-105 hover:shadow-2xl hover:shadow-black/20 transition duration-300"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-lg bg-blue-900 text-white mb-4">
                <Icon className="h-7 w-7" />
              </div>

              <h3 className="text-lg font-semibold text-gray-900">{title}</h3>

              <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
