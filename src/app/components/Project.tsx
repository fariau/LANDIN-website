"use client";

import { motion } from "framer-motion";

const projects = [
  {
    title: "Scientifiz Official Website",
    url: "https://scientifiz.com",
  },
  {
    title: "Ecommerce Store",
    url: "https://yourstorelink.com",
  },
  {
    title: "Corporate Landing Page",
    url: "https://landingpage.com",
  },
  {
    title: "Portfolio Website",
    url: "https://portfolio.com",
  },
  {
    title: "Startup Site",
    url: "https://startup.com",
  },
  {
    title: "Business Web App",
    url: "https://webapp.com",
  },
];

export default function Portfolio() {
  return (
    <section
      className="bg-black py-20 px-6 flex flex-col items-center"
      id="portfolio"
    >
      {/* Section Heading */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false }}
        className="px-4 py-1.5 bg-neutral-900 text-sm rounded-full border border-gray-700 text-white"
      >
        • Portfolio / Case Studies
      </motion.button>

      <motion.h2
        className="mt-6 text-3xl md:text-4xl font-bold text-white text-center mb-14 leading-snug"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Projects <br />
        <span className="text-[#592f94]">That Define Our Work</span>
      </motion.h2>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: false, amount: 0.2 }}
            className="group relative overflow-hidden rounded-xl border border-gray-800 hover:border-[#592f94] transition-all duration-300"
          >
            {/* Gradient Placeholder Box */}
            <div className="w-full h-64 bg-gradient-to-br from-[#592f94] to-[#1e1e2f] flex items-center justify-center transition-transform duration-500 group-hover:scale-105">
              <p className="text-white text-lg font-semibold text-center px-4">
                {p.title}
              </p>
            </div>

            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
              <p className="text-white text-base font-medium">View Project</p>
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
