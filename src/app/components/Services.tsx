"use client";

import { motion } from "framer-motion";
import { FC, JSX } from "react";
import { FaCode, FaWordpress, FaShopify } from "react-icons/fa";

interface Service {
  title: string;
  desc: string;
  features: string[];
  icon: JSX.Element;
}

const services: Service[] = [
  {
    title: "Custom Web Solutions (Coded Websites)",
    desc: `Build fast, scalable websites tailored to your brand. Custom-coded solutions for seamless user experience, uniqueness, and flexibility.`,
    features: [
      "Full Website Development (HTML, CSS, JS, React, etc.)",
      "Custom UI/UX Design",
      "Responsive Design",
      "API Integrations & Backend Setup",
      "CMS or Headless CMS",
      "SEO & Speed Optimization",
      "Maintenance & Security",
    ],
    icon: <FaCode className="text-[#592f94] text-2xl" />,
  },
  {
    title: "WordPress Website Development",
    desc: `Modern, easy-to-manage WordPress websites that balance design and function. Perfect for blogs, portfolios, and service-based businesses.`,
    features: [
      "WordPress Design & Development",
      "Theme Customization",
      "Page Builder Design",
      "Plugin Integration",
      "Blog Setup & Management",
      "WooCommerce Integration",
      "Security & Maintenance",
    ],
    icon: <FaWordpress className="text-[#592f94] text-2xl" />,
  },
  {
    title: "Shopify Store Development",
    desc: `Launch your online store with confidence. We design and develop high-converting Shopify stores optimized for sales, speed, and customer experience.`,
    features: [
      "Shopify Store Setup",
      "Theme Customization",
      "Custom Development",
      "Migration Services",
      "App & Payment Integration",
      "SEO Optimization",
      "Updates & Maintenance",
    ],
    icon: <FaShopify className="text-[#592f94] text-2xl" />,
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
        className="mt-6 text-3xl md:text-4xl font-bold text-white text-center mb-14 leading-snug"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: false, amount: 0.3 }}
      >
        Crafting Digital <br />
        <span className="text-[#592f94]">Experiences That Work</span>
      </motion.h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, boxShadow: "0 20px 40px rgba(89, 47, 148, 0.4)" }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
            viewport={{ once: false, amount: 0.2 }}
            className="relative rounded-xl border border-[#592f94]/50 bg-black p-6 shadow-lg cursor-pointer transition-all duration-300"
          >
            {/* Icon + Heading */}
            <div className="flex items-start gap-3 mb-3">
              {s.icon}
              <h3 className="text-xl font-semibold text-white">
                {s.title}
              </h3>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm mb-3">{s.desc}</p>

            {/* Features List */}
            <ul className="text-gray-400 list-disc list-outside pl-4 space-y-1 text-sm">
              {s.features.map((f, idx) => (
                <li key={idx}>{f}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default ServiceCards;
