"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question:
      "What’s the difference between a custom-coded website and a WordPress website?",
    answer:
      "A custom-coded site is fully built from scratch for maximum performance and unique functionality. WordPress is more flexible and budget-friendly — ideal for quick, manageable projects.",
  },
  {
    question: "Do you provide domain and hosting services?",
    answer:
      "Yes! We can guide you or handle the full setup, including domain registration, hosting, and SSL integration.",
  },
  {
    question: "Can I request revisions after project delivery?",
    answer:
      "Absolutely. Each package includes a set number of revisions to ensure your complete satisfaction.",
  },
  {
    question: "Do you provide ongoing maintenance or updates?",
    answer:
      "Yes — we offer monthly maintenance plans for content updates, security checks, and performance optimization.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "The timeline depends on complexity. WordPress sites take around 10 days, while custom or eCommerce projects may take 2–4 weeks.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative bg-black text-white py-20 px-6 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#592f94]/30 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#592f94]/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start z-10">
        {/* Left Side Content */}
        <div className="relative md:translate-x-8">
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="px-4 py-1.5 bg-neutral-900 text-sm rounded-full border border-gray-700"
          >
            • FAQ
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold mt-6 mb-4"
          >
            Frequently <br />{" "}
            <span className="text-gray-400">Asked Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 max-w-md mb-6"
          >
            Find quick answers to the most common questions about our services,
            process, and support.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block px-6 py-3 bg-[#592f94] rounded-lg font-semibold hover:bg-[#4a247a] transition"
          >
            Contact Support
          </motion.a>

          <p className="text-xs text-gray-500 mt-3">
            Reply within 24 hours via email or WhatsApp.
          </p>
        </div>

        {/* Right Side FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              layout
              transition={{ layout: { duration: 0.4, ease: "easeInOut" } }}
              className="relative rounded-xl overflow-hidden bg-white/5 border border-white/10"
            >
              <motion.button
                layout
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-6 py-4 text-left text-lg font-medium hover:bg-[#592f94]/20 transition-colors duration-300"
              >
                <span>{faq.question}</span>
                <motion.span
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-xl"
                >
                  {openIndex === index ? "−" : "+"}
                </motion.span>
              </motion.button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="content"
                    layout
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.35, ease: "easeInOut" }}
                    className="px-6 pb-4 text-gray-300 text-sm text-center"
                  >
                    {faq.answer}
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
