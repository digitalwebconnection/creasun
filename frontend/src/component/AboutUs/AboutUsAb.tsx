
import {
  Shield,
  Settings,
  Lightbulb,
  Handshake,
  CheckSquare,
} from "lucide-react";
import { motion } from "framer-motion";

const AboutCreasunSection = () => {
  const coreFeatures = [
    {
      icon: CheckSquare,
      title: "Precision ROI",
      description:
        "Clear, engineering-backed proposals with realistic and predictable returns.",
      color: "text-sky-600",
    },
    {
      icon: Settings,
      title: "Engineered Efficiency",
      description:
        "High-efficiency modules and reliable inverters optimised for long-term output.",
      color: "text-emerald-600",
    },
    {
      icon: Shield,
      title: "Safety & Discipline",
      description:
        "Neat installation, strict safety protocols, and rigorous quality checks.",
      color: "text-amber-600",
    },
    {
      icon: Handshake,
      title: "Long-Term Partnership",
      description:
        "After-sales service, monitoring guidance, and structured maintenance plans.",
      color: "text-fuchsia-600",
    },
  ];

  const metrics = [
    { value: "7+", unit: "Years", label: "Rooftop & Industrial Expertise" },
    { value: "MW+", unit: "Capacity", label: "Solar Installed & Designed" },
    { value: "300+", unit: "Clients", label: "Residential & Industrial" },
  ];

  return (
    <section id="about" className="relative bg-white py-14">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ============================
            Section Header
        ============================ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-10 lg:grid-cols-3 mb-16"
        >
          {/* Left Title */}
          <div>
            

            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-snug">
              Creasun Energy:  
              <span className="block text-sky-700">
                Engineering Solar for Real Savings
              </span>
            </h2>
          </div>

          {/* Right Description */}
          <div className="lg:col-span-2 border-l-4 border-yellow-500/80 pl-6 space-y-4 text-slate-700 text-[15px]">
            <p>
              Creasun Energy is a Gujarat-based rooftop and industrial solar EPC 
              company committed to building solar systems that deliver 
              <span className="font-semibold text-slate-900"> real savings and long-term reliability</span>, 
              not just brochure promises.
            </p>

            <p>
              Every project—from survey to commissioning—is executed with engineering 
              discipline, high-quality components, and transparent communication so customers 
              get predictable performance for 20+ years.
            </p>

            <p className="text-sky-700 flex items-center gap-2 text-sm font-medium">
              <Lightbulb className="h-4 w-4" />
              Full support for survey, system design, DISCOM, subsidy & monitoring.
            </p>
          </div>
        </motion.div>

        {/* ============================
            Metrics Strip
        ============================ */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl bg-blue-900/60 border border-slate-200 px-8 py-8 mb-16 shadow-sm"
        >
          <div className="grid sm:grid-cols-3 gap-6 text-center">
            {metrics.map((metric, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 200, damping: 14 }}
                className="p-4 rounded-xl bg-white shadow-sm border border-slate-200"
              >
                <p className="text-3xl font-bold text-slate-900">
                  {metric.value}
                  <span className="text-sm ml-1 text-slate-500">{metric.unit}</span>
                </p>
                <p className="mt-1 text-xs text-slate-500">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* ============================
            Features / Core Promises
        ============================ */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid gap-8 lg:grid-cols-4"
        >
          {coreFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{
                y: -6,
                scale: 1.02,
                boxShadow: "0 12px 35px rgba(0,0,0,0.08)",
              }}
              className="p-6 rounded-2xl border border-slate-600/40 bg-white hover:bg-amber-600/20 shadow-sm hover:shadow-2xl transition"
            >
              <div className="flex items-center mb-4">
                <div
                  className={`h-12 w-12 flex items-center justify-center rounded-full bg-slate-50 border border-slate-200`}
                >
                  <feature.icon className={`h-6 w-6 ${feature.color}`} />
                </div>
                <h3 className="ml-3 text-lg font-bold text-slate-900">
                  {feature.title}
                </h3>
              </div>

              <p className="text-sm text-slate-600">{feature.description}</p>

              <div className="mt-4 text-xs text-sky-600 font-medium flex items-center">
                <span className="mr-2 h-1 w-4 bg-sky-400 rounded-full"></span>
                Built for Gujarat rooftops & real conditions.
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AboutCreasunSection;
