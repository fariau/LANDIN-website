"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { FaLock } from "react-icons/fa";

interface Service {
  title: string;
  desc: string;
  features: string[];
  cta: string;
}

const services: Service[] = [
  {
    title: "Custom Websites",
    desc: "Responsive design, fast load times, SEO-ready. Ideal for startups and small businesses to launch quickly online.",
    features: ["Responsive design", "SEO-ready", "Fast load times", "Cross-browser compatibility"],
    cta: "See full services",
  },
  {
    title: "Shopify Stores",
    desc: "Ready-to-launch Shopify stores built with conversion principles — product pages, collections, discount flows, and payment setup.",
    features: ["Product pages & collections", "Payment & shipping setup", "Mobile optimized", "Upsell & discount flows"],
    cta: "Start your Shopify project",
  },
  {
    title: "WordPress Websites",
    desc: "Professional WordPress websites with custom themes, plugins, and SEO optimization — perfect for blogs, portfolios, and businesses.",
    features: ["Custom themes", "Plugin integration", "SEO optimization", "Easy content management"],
    cta: "Build your WordPress site",
  },
];

const ServiceCards: FC = () => {
  return (
    <section className="bg-black py-20 px-6 flex flex-col items-center" id="services">
      {/* Section Heading */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: false, amount: 0.3 }}
        className="px-4 py-1.5 bg-neutral-900 text-sm rounded-full border border-gray-700 text-white"
      >
        • Our Services
      </motion.button>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-6 text-3xl md:text-4xl font-bold text-white text-center mb-14 leading-snug"
      >
        Get High-Quality <br />
        <span className="text-[#592f94]">Clear Services Remotely.</span>
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative rounded-xl bg-gradient-to-br from-[#592f94]/90 to-[#592f94]/60 p-[1px] shadow-xl shadow-[#592f94]/30 transition-all duration-300 hover:from-[#6a35b1]/100 hover:to-[#6a35b1]/80"
          >
            <div className="rounded-xl bg-black p-6 flex flex-col gap-4 h-full">
              <div className="flex items-center gap-3">
                <FaLock className="text-[#592f94] text-lg" />
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              </div>

              <p className="text-gray-300 text-sm">{s.desc}</p>

              <ul className="text-gray-400 list-disc list-inside space-y-1 text-sm">
                {s.features.map((f, idx) => (
                  <li key={idx}>{f}</li>
                ))}
              </ul>

              <button className="mt-auto w-full rounded-lg bg-[#592f94] hover:bg-[#4d267f] text-white py-2.5 font-medium transition">
                {s.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
