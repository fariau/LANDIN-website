"use client";

import { motion } from "framer-motion";
import { FC } from "react";

interface Package {
  title: string;
  features: { label: string; value: string }[];
}

const packages: Package[] = [
  {
    title: "Starter",
    features: [
      { label: "Custom Web Solutions", value: "$199" },
      { label: "WordPress Website", value: "$35,000" },
      { label: "Shopify Store", value: "$50,000" },
      { label: "Delivery Time", value: "3–7 Days" },
      { label: "Pages Included", value: "Up to 3" },
      { label: "Design", value: "Pre-made theme customization" },
      { label: "SEO Optimization", value: "Basic On-page SEO" },
      { label: "CMS / Admin Panel", value: "Optional" },
      { label: "Integrations", value: "Basic Forms / Analytics" },
      { label: "E-commerce Functionality", value: "Basic (5–10 Products)" },
      { label: "Speed & Security", value: "Optimized" },
      { label: "Support & Maintenance", value: "7 Days" },
      { label: "Revisions", value: "2" },
      { label: "Domain & Hosting Guidance", value: "On Demand" },
    ],
  },
  {
    title: "Professional",
    features: [
      { label: "Custom Web Solutions", value: "$389" },
      { label: "WordPress Website", value: "$70,000" },
      { label: "Shopify Store", value: "$95,000" },
      { label: "Delivery Time", value: "7–12 Days" },
      { label: "Pages Included", value: "Up to 8" },
      { label: "Design", value: "Semi-custom design" },
      { label: "SEO Optimization", value: "Advanced SEO Setup" },
      { label: "CMS / Admin Panel", value: "Included" },
      { label: "Integrations", value: "CRM + API Integration" },
      { label: "E-commerce Functionality", value: "Standard (Up to 50 Products)" },
      { label: "Speed & Security", value: "Enhanced + CDN" },
      { label: "Support & Maintenance", value: "20 Days" },
      { label: "Revisions", value: "4" },
      { label: "Domain & Hosting Guidance", value: "Yes" },
    ],
  },
  {
    title: "Enterprise",
    features: [
      { label: "Custom Web Solutions", value: "$1099+" },
      { label: "WordPress Website", value: "$120,000+" },
      { label: "Shopify Store", value: "$180,000+" },
      { label: "Delivery Time", value: "12–25 Days" },
      { label: "Pages Included", value: "Unlimited" },
      { label: "Design", value: "Fully custom UI/UX" },
      { label: "SEO Optimization", value: "Technical + Ongoing SEO" },
      { label: "CMS / Admin Panel", value: "Advanced (custom or integrated)" },
      { label: "Integrations", value: "Multi-system Integrations" },
      { label: "E-commerce Functionality", value: "Advanced (Unlimited + Automation)" },
      { label: "Speed & Security", value: "Enterprise-grade Optimization" },
      { label: "Support & Maintenance", value: "40 Days + Priority Support" },
      { label: "Revisions", value: "Unlimited (within scope)" },
      { label: "Domain & Hosting Guidance", value: "Yes (with full setup)" },
    ],
  },
];

const Pricing: FC = () => {
  return (
    <section className="bg-black py-20 px-6 flex flex-col items-center" id="pricing">
      {/* Section Heading */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 py-1.5 bg-neutral-900 text-sm rounded-full border border-gray-700 text-white"
      >
        • Pricing & Packages
      </motion.button>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mt-6 text-3xl md:text-4xl font-bold text-white text-center mb-14 leading-snug"
      >
        Plans That Fit Every Stage <br />
        <span className="text-[#592f94]">Choose the plan that suits your project</span>
      </motion.h2>

      {/* Package Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {packages.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="rounded-2xl border border-gray-800 overflow-hidden
                       bg-gradient-to-br from-[#6d3bb8]/40 via-[#b18aff]/25 to-[#2a1550]/40 
                       hover:from-[#8f5fff]/50 hover:via-[#c6a7ff]/35 hover:to-[#3c1e75]/50
                       transition-all duration-300 shadow-lg shadow-[#592f94]/20"
          >
            <div className="p-6 flex flex-col gap-4 h-full">
              {/* Title */}
              <h3 className="text-2xl font-bold text-white mb-2 text-center">{p.title}</h3>

              {/* Divider */}
              <div className="h-[1px] bg-white/10 mb-3" />

              {/* Features */}
              <ul className="space-y-2 text-sm text-gray-300">
                {p.features.map((f, idx) => (
                  <li
                    key={idx}
                    className="flex justify-between border-b border-white/5 pb-1"
                  >
                    <span>{f.label}</span>
                    <span className="text-white font-medium text-right ml-2">
                      {f.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Pricing;
