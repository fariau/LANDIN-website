"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-6 py-32 
                 bg-black text-white overflow-hidden"
      style={{
        backgroundImage: "url('/Background.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"></div>

      {/* Spotlight BG */}
      <div className="absolute inset-0">
        <div className="absolute right-0 top-0 w-[400px] h-[400px] bg-[#592f94]/40 rounded-full blur-[140px]"></div>
      </div>

      {/* Headline */}
      <motion.h1
        className="text-5xl md:text-6xl font-extrabold leading-snug md:leading-tight 
                   bg-gradient-to-r from-[#8754e1] via-white/80 to-[#c084fc]
                   bg-clip-text text-transparent drop-shadow-lg z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Websites & Shopify <br /> Stores That Drive Growth
      </motion.h1>

      {/* Subheadline */}
      <motion.p
        className="text-gray-300/80 mt-5 text-lg max-w-2xl mx-auto leading-snug z-10"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        We design high-converting websites and Shopify stores for startups and small businesses —
        fast, professional, and affordable.
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
          whileTap={{ scale: 0.95 }}>
          <Link
            href="#portfolio"
            className="bg-[#592f94] text-white px-6 py-3 rounded-xl font-medium shadow-lg hover:shadow-2xl transition inline-block"
          >
            View Portfolio
          </Link>
        </motion.button>
      </motion.div>
    </section >
  );
}
