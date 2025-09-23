"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about" className="relative flex flex-col items-center justify-center text-center px-6 py-28 bg-black text-white overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[420px] h-[420px] bg-[#592f94]/30 rounded-full blur-[150px]"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-3xl mx-auto space-y-6 z-10">
        <motion.button
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="px-4 py-1.5 bg-neutral-900 text-sm rounded-full border border-gray-700"
        >
          • About Us
        </motion.button>

        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold leading-snug"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We help startups go live with{" "}
          <span className="text-gray-300 font-semibold">
            beautiful websites
          </span>
        </motion.h2>

        {/* Mission / Body */}
        <motion.p
          className="text-gray-300 text-base leading-relaxed max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          At <span className="text-white font-medium">Sceintifiz</span>, our
          mission is to turn startup ideas into digital success. We design and
          develop websites and Shopify stores that look great and convert
          visitors into customers. With a focus on clean UI, fast performance,
          and clear CTAs, we help small businesses launch quickly and scale
          with confidence.
        </motion.p>

        {/* Stats (optional highlights) */}
        <motion.ul
          className="space-y-3 text-left inline-block"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          <li className="flex items-center gap-3">
            <span className="text-[#592f94] text-xl">⬤</span>
            From $0 to $600,000 in revenue.
          </li>
          <li className="flex items-center gap-3">
            <span className="text-[#592f94] text-xl">⬤</span>
            47% growth in new customers.
          </li>
        </motion.ul>

        {/* CTA + Rating */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-6 pt-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
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
