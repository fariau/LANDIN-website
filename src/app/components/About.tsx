"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="relative flex flex-col items-center justify-center text-center px-6 py-28 bg-black text-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        {/* 🎯 Centered glow — doesn’t touch top or bottom */}
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[360px] h-[360px] bg-[#592f94]/35 rounded-full blur-[130px]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto space-y-6 z-10">
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: false, amount: 0.3 }}
          className="px-4 py-1.5 bg-neutral-900 text-sm rounded-full border border-gray-700"
        >
          • About Us
        </motion.button>

        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold leading-snug"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          We help startups go live with{" "}
          <span className="text-gray-300 font-semibold">beautiful websites</span>
        </motion.h2>

        {/* Mission / Body */}
        <motion.p
          className="text-gray-300 text-base leading-relaxed mx-auto md:max-w-5xl lg:max-w-6xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          At <span className="text-white font-medium">Scientifiz</span>, our
          mission is to turn startup ideas into digital success. We design and
          develop websites and Shopify stores that look great and convert
          visitors into customers. With a focus on clean UI, fast performance,
          and clear CTAs, we help small businesses launch quickly and scale with
          confidence.
        </motion.p>

        {/* CTA + Rating */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
          viewport={{ once: false, amount: 0.3 }}
        >
          <button className="px-5 py-2.5 rounded-lg bg-[#592f94] hover:bg-purple-700 transition">
            Meet the Team
          </button>
          <button className="px-5 py-2.5 rounded-lg bg-white/10 border border-gray-700 hover:bg-white/20 transition">
            Work with Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
