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
    desc: `Build a website that’s fast, scalable, and 100% tailored to your brand. 
Our development team creates clean, high-performing, and custom-coded websites that deliver seamless user experiences — 
with full control over every line of code. Perfect for startups and enterprises aiming for uniqueness, flexibility, and power.`,
    features: [
      "Full Website Development (HTML, CSS, JS, React, etc.)",
      "Custom UI/UX Design",
      "Responsive Design for All Devices",
      "API Integrations & Backend Setup",
      "CMS (Custom Admin Panel or Headless CMS)",
      "SEO & Speed Optimization",
      "Website Maintenance and Security",
    ],
    icon: <FaCode className="text-[#592f94] text-2xl" />,
  },
  {
    title: "WordPress Website Development",
    desc: `Create a modern website that’s easy to manage. With WordPress, 
we build stunning websites that balance design and function — ideal for portfolios, blogs, company profiles, or service-based businesses.`,
    features: [
      "WordPress Website Design & Development",
      "Theme Customization & Setup",
      "Elementor / Gutenberg Page Builder Design",
      "Plugin Integration & Optimization",
      "Blog Setup & Management",
      "WooCommerce Integration",
      "Security, Backup, and Maintenance",
    ],
    icon: <FaWordpress className="text-[#592f94] text-2xl" />,
  },
  {
    title: "Shopify Store Development",
    desc: `Launch your online store with confidence. We design and develop high-converting Shopify stores optimized for sales, speed, and customer experience.`,
    features: [
      "Shopify Store Setup",
      "Shopify Theme Customization",
      "Custom Shopify Development",
      "Shopify Migration Services",
      "Shopify Integration Services (Apps, Payment Gateways, CRMs)",
      "Shopify SEO Optimization",
      "Regular Updates and Maintenance",
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
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: false, amount: 0.3 }}
        className="mt-6 text-3xl md:text-4xl font-bold text-white text-center mb-14 leading-snug"
      >
        Crafting Digital Experiences That Work
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
            className="relative rounded-xl border border-[#592f94]/50 hover:border-[#592f94] bg-black p-6 shadow-lg transition-all duration-300"
          >
            <div className="flex items-center gap-3 mb-3">
              {s.icon}
              <h3 className="text-xl font-semibold text-white">{s.title}</h3>
            </div>

            <p className="text-gray-300 text-sm mb-3 whitespace-pre-line">{s.desc}</p>

            <ul className="text-gray-400 list-disc list-inside space-y-1 text-sm">
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
