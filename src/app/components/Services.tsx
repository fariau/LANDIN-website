"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import { FaLock } from "react-icons/fa";

interface Service {
  title: string;
  desc: string;
  price: string;
  features: string[];
  cta: string;
}

const services: Service[] = [
  {
    title: "Custom Websites",
    desc: "Responsive design, fast load times, SEO-ready. Ideal for startups and small businesses to launch quickly online.",
    price: "Websites starting from $300",
    features: ["Responsive design", "SEO-ready", "Fast load times", "Cross-browser compatibility"],
    cta: "See full services",
  },
  {
    title: "Shopify Stores",
    desc: "Ready-to-launch Shopify stores built with conversion principles — product pages, collections, discount flows, and payment setup.",
    price: "Shopify setup from $350",
    features: ["Product pages & collections", "Payment & shipping setup", "Mobile optimized", "Upsell & discount flows"],
    cta: "Start your Shopify project",
  },
  {
    title: "Branding & UI",
    desc: "Logos, visual systems, UI kits — everything to create a strong brand identity and cohesive visual experience.",
    price: "Brand kits from $150",
    features: ["Logo design", "UI kits", "Visual systems", "Color palettes & typography"],
    cta: "See full services",
  },
  {
    title: "Maintenance / Support",
    desc: "Ongoing website and Shopify store support to keep your project running smoothly.",
    price: "Packages starting from $100/month",
    features: ["Bug fixes & updates", "Content management", "Performance monitoring", "Security checks"],
    cta: "Request support",
  },
];

const ServiceCards: FC = () => {
  return (
    <section className="bg-black py-20 px-6 flex flex-col items-center" id="services">
      {/* Section Heading */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 py-1.5 bg-neutral-900 text-sm rounded-full border border-gray-700 text-white"
      >
        • Our Services
      </motion.button>

      <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white text-center mb-14 leading-snug">
        Get High-Quality <br />
        <span className="text-[#592f94]">Clear Services Remotely.</span>
      </h2>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl w-full">
        {services.map((s, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="relative rounded-xl bg-gradient-to-br from-[#592f94]/90 to-[#592f94]/60 p-[1px] shadow-xl shadow-[#592f94]/30 hover:shadow-2xl hover:shadow-[#592f94]/40 transition"
          >
            <div className="rounded-xl bg-black p-6 flex flex-col gap-4 h-full">
              <div className="flex items-center gap-3">
                <FaLock className="text-[#592f94] text-lg" />
                <h3 className="text-xl font-semibold text-white">{s.title}</h3>
              </div>

              <p className="text-gray-300 text-sm">{s.desc}</p>
              <p className="text-[#592f94] font-semibold">{s.price}</p>

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
