"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const legalPages = [
  {
    title: "Privacy Policy",
    content: `
      Your privacy is important to us. At Sceintifiz, we collect only the necessary
      information to provide our services. We do not sell or share personal data
      with third parties without your consent. All collected data is secured and
      used solely for the purpose of delivering our services.
    `,
  },
  {
    title: "Terms & Conditions",
    content: `
      By using our website and services, you agree to the following terms and conditions:
      Services are provided as-is. Sceintifiz is not liable for any direct or indirect
      damages arising from website usage. All payments are non-refundable unless
      otherwise stated. Intellectual property of content delivered remains with the client
      after full payment.
    `,
  },
  {
    title: "Cookies / GDPR Compliance",
    content: `
      We use cookies to improve user experience, analyze site traffic, and serve
      relevant content. You can control cookie preferences in your browser settings.
      Sceintifiz complies with GDPR regulations, ensuring your personal data is handled
      securely and transparently. For more information, contact hello@sceintifiz.com.
    `,
  },
];

export default function Legal() {
  const [activePage, setActivePage] = useState(0);

  return (
    <section id="legal" className="bg-black py-20 px-6 flex flex-col items-center text-white">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center mb-12 drop-shadow-lg"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Legal Information
      </motion.h2>

      {/* Tabs */}
      <div className="flex space-x-4 mb-10 overflow-x-auto">
        {legalPages.map((page, index) => (
          <button
            key={index}
            onClick={() => setActivePage(index)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition ${
              activePage === index
                ? "bg-[#592f94] text-white shadow-lg"
                : "bg-neutral-900 text-gray-300 hover:bg-neutral-800"
            }`}
          >
            {page.title}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activePage}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl bg-neutral-900 p-8 rounded-xl shadow-2xl shadow-[#592f94]/30 text-gray-300 leading-relaxed"
        >
          <h3 className="text-xl font-semibold mb-4 text-white">{legalPages[activePage].title}</h3>
          <p>{legalPages[activePage].content}</p>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
