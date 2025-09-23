"use client";

import { motion } from "framer-motion";
import { FC } from "react";

interface Project {
  title: string;
  challenge: string;
  solution: string;
  outcome: string;
  cta: string;
}

const projects: Project[] = [
  {
    title: "Concept Storefront",
    challenge: "Needed a clean, high-converting Shopify store concept.",
    solution: "Designed product pages, checkout flows, and a cohesive UI/UX using Figma.",
    outcome: "Concept project — sample results",
    cta: "Let’s build something like this",
  },
  {
    title: "Portfolio Template",
    challenge: "Create a visually appealing portfolio layout.",
    solution: "Developed responsive mockups with clear CTAs and elegant typography.",
    outcome: "Concept project — sample results",
    cta: "Let’s build something like this",
  },
  {
    title: "Ecommerce Mockup",
    challenge: "Showcase a modern ecommerce concept.",
    solution: "Built a product-focused design with mobile-first layout.",
    outcome: "Concept project — sample results",
    cta: "Let’s build something like this",
  },
];

const Portfolio: FC = () => {
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
        Recent Projects <br />
        <span className="text-[#592f94]">Concepts & Templates</span>
      </motion.h2>

      {/* Project Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="rounded-xl bg-gradient-to-br from-[#592f94]/90 to-[#592f94]/60 p-[1px] shadow-xl shadow-[#592f94]/30 hover:shadow-2xl hover:shadow-[#592f94]/40 transition"
          >
            <div className="rounded-xl bg-black p-6 flex flex-col gap-4 h-full">
              {/* Project Title */}
              <motion.h3
                className="text-xl font-semibold text-white"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: false }}
              >
                {p.title}
              </motion.h3>

              {/* Challenge */}
              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: false }}
              >
                <span className="font-semibold text-[#592f94]">Challenge:</span>{" "}
                {p.challenge}
              </motion.p>

              {/* Solution */}
              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: false }}
              >
                <span className="font-semibold text-[#592f94]">Solution:</span>{" "}
                {p.solution}
              </motion.p>

              {/* Outcome */}
              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: false }}
              >
                <span className="font-semibold text-[#592f94]">Outcome:</span>{" "}
                {p.outcome}
              </motion.p>

              {/* CTA */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: false }}
                className="mt-auto w-full rounded-lg bg-[#592f94] hover:bg-[#4d267f] text-white py-2.5 font-medium transition"
              >
                {p.cta}
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
