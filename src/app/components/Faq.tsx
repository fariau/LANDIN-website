"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { question: "What do I need to get started?", answer: "You just need your project idea and our template to begin!" },
  { question: "What kind of customization is available?", answer: "You can customize colors, fonts, layouts, and even animations easily." },
  { question: "How easy is it to edit for beginners?", answer: "Very easy! Our template is designed with beginners in mind." },
  { question: "Let me know more about moneyback guarantee?", answer: "We offer a 14-day money-back guarantee, no questions asked." },
  { question: "Do I need to know how to code?", answer: "Not at all! You can edit most parts visually without coding." },
  { question: "What will I get after purchasing the template?", answer: "You'll get full access to the template, documentation, and updates." },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative bg-black text-white py-20 px-6 overflow-hidden">
      {/* Background Blurs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[400px] bg-[#592f94]/30 blur-[150px] rounded-full"></div>
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[500px] h-[500px] bg-[#592f94]/20 blur-[150px] rounded-full"></div>
      </div>

      <div className="relative max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-start z-10">
        {/* Left side content */}
        <div className="relative md:translate-x-8">
          <motion.button
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: false }}
            className="px-4 py-1.5 bg-neutral-900 text-sm rounded-full border border-gray-700"
          >
            • FAQ
          </motion.button>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="text-4xl font-bold mt-6 mb-4"
          >
            Frequently <br /> <span className="text-gray-400">Asked Questions</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: false }}
            className="text-gray-400 max-w-md mb-6"
          >
            Have questions? Our FAQ section has you covered with quick answers to the most common inquiries.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: false }}
            className="text-gray-300 mb-6"
          >
            Still have questions? We’re here to help.
          </motion.p>

          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: false }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#contact"
            className="inline-block px-6 py-3 bg-[#592f94] rounded-lg font-semibold hover:bg-[#4a247a] transition"
          >
            Contact Support
          </motion.a>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: false }}
            className="text-xs text-gray-500 mt-3"
          >
            Reply within 24 hours via email or WhatsApp.
          </motion.p>
        </div>

        {/* Right side FAQs */}
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
                    className="px-6 pb-4 text-gray-400 text-sm"
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
