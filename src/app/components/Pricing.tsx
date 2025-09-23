"use client";

import { motion } from "framer-motion";
import { FC } from "react";

interface Package {
  title: string;
  price: string;
  features: string[];
  cta: string;
}

const packages: Package[] = [
  {
    title: "Starter",
    price: "Starting at $300",
    features: ["Basic website setup", "Responsive design", "SEO-ready pages"],
    cta: "Request custom quote",
  },
  {
    title: "Growth",
    price: "Starting at $700",
    features: ["Custom website design", "CMS integration", "SEO & analytics setup"],
    cta: "Request custom quote",
  },
  {
    title: "Pro",
    price: "Starting at $1,500",
    features: ["Full website & Shopify store", "Branding & UI kit", "Advanced SEO & marketing setup"],
    cta: "Request custom quote",
  },
];

const Pricing: FC = () => {
  return (
    <section className="bg-black py-20 px-6 flex flex-col items-center" id="pricing">
      {/* Section Heading */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 py-1.5 bg-neutral-900 text-sm rounded-full border border-gray-700 text-white"
      >
        • Pricing & Packages
      </motion.button>

      <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white text-center mb-14 leading-snug">
        Simple Packages <br />
        <span className="text-[#592f94]">Choose the plan that fits your business</span>
      </h2>

      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl w-full">
        {packages.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="rounded-xl bg-gradient-to-br from-[#592f94]/90 to-[#592f94]/60 p-[1px] shadow-xl shadow-[#592f94]/30 hover:shadow-2xl hover:shadow-[#592f94]/40 transition"
          >
            <div className="rounded-xl bg-black p-6 flex flex-col gap-4 h-full">
              {/* Package Title */}
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>

              {/* Price */}
              <p className="text-[#592f94] font-semibold text-lg">{p.price}</p>

              {/* Features */}
              <ul className="text-gray-400 list-disc list-inside space-y-1 text-sm">
                {p.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>

              {/* CTA */}
              <button className="mt-auto w-full rounded-lg bg-[#592f94] hover:bg-[#4d267f] text-white py-2.5 font-medium transition">
                {p.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
