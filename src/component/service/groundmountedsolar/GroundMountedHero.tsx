import React from "react";
import { motion } from "framer-motion";

const GroundMountedHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden ">
      {/* Background Image */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://waaree.com/wp-content/uploads/2024/03/TOP_Con_Technology_922ed15e22.jpg')",
        }}
      />

      {/* 🔥 BLACK SHADOW OVERLAY */}
      <div className="absolute inset-0 -z-10 bg-black/80 backdrop-blur-[1px]" />

      {/* Floating Elements */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute left-10 top-16 h-10 w-10 rounded-full border border-emerald-500/60"
      />
      <motion.div
        animate={{ y: [0, 14, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute left-20 bottom-20 h-8 w-8 rounded-full border border-emerald-400"
      />
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute right-1/3 top-10 h-20 w-20 rounded-full border border-emerald-300/30"
      />

      {/* Right Green Angled Shape */}
      <div
        className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-blue-900/95"
        style={{
          clipPath: "polygon(50% 0, 100% 0, 100% 100%, 0 100%)",
        }}
      />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 py-14 md:flex-row md:py-25">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10 flex-1 space-y-6"
        >
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-300">
            Creasun Energy – Ground-Mounted Solar
          </p>

          <h1 className="text-3xl font-extrabold leading-tight text-white drop-shadow-lg sm:text-4xl lg:text-5xl">
            Ground-Mounted Solar
            <span className="block text-yellow-200/80 drop-shadow-md">
              Built for Maximum Output.
            </span>
          </h1>

          <p className="max-w-xl text-sm leading-relaxed text-slate-200 drop-shadow-md">
            Convert unused land into a high-performance solar asset. Creasun
            engineers ground-mounted solutions optimized for long-term energy
            output and industry-grade reliability.
          </p>

          {/* Buttons */}
          <div className="mt-4 flex flex-wrap items-center gap-5">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              className="rounded-md bg-blue-900 px-7 py-3 text-sm font-semibold text-white shadow-lg transition "
            >
              View Projects
            </motion.button>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className="flex items-center gap-3"
            >
              <button className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-700 shadow-lg">
                <span className="ml-0.5 border-l-8 border-y-8 border-y-transparent border-l-blue-700" />
              </button>
              <span className="text-sm font-medium text-white">
                How it works
              </span>
            </motion.div>
          </div>
        </motion.div>

        {/* RIGHT IMAGE WITH ANIMATION */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
          className="z-10 flex-1"
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative mx-auto h-82 max-w-lg md:h-90"
          >
            {/* White Frame */}
            <motion.div
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute inset-0 rounded-2xl bg-white shadow-2xl shadow-black/40"
            />

            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="absolute inset-1 overflow-hidden rounded-2xl border border-white bg-black shadow-xl"
            >
              <img
                src="https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=1200"
                alt="Ground Mounted Solar"
                className="h-full w-full object-cover transition-transform duration-700"
              />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default GroundMountedHero;
