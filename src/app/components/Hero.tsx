"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-32 bg-gradient-to-b from-black via-black/95 to-black text-white overflow-hidden">
      {/* Spotlight BG */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#592f94]/40 rounded-full blur-[140px]"></div>
      </div>

      {/* Trust Badge */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mb-6 flex items-center space-x-2 z-10"
      >
        <span className="bg-[#592f94] text-xs px-3 py-1 rounded-full shadow-lg shadow-[#592f94]/50">
          Trusted by startups
        </span>
        <span className="text-gray-300 text-sm">
          Fast delivery • 30-day support
        </span>
      </motion.div>

      {/* Gradient Headline */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-[#7a3fbf] via-white to-[#592f94] bg-clip-text text-transparent drop-shadow-xl z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Websites & Shopify <br /> Stores That Drive Growth
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto leading-relaxed z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        We design high-converting websites and Shopify stores for startups and
        small businesses — fast, professional, and affordable.
      </motion.p>

      {/* Buttons */}
      <motion.div
        className="mt-10 flex space-x-5 z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#592f94] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-2xl transition"
        >
          Get a Free Quote
        </motion.button>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gray-900 border border-gray-700 px-6 py-3 rounded-xl font-medium hover:bg-gray-800 shadow-lg hover:shadow-2xl transition"
        >
          View Portfolio
        </motion.button>
      </motion.div>
    </section>
  );
}
