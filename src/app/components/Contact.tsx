"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-black py-20 px-6 flex flex-col items-center" id="contact">
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 py-1.5 bg-neutral-900 text-sm rounded-full border border-gray-700 text-white shadow-md"
      >
        • Contact Us
      </motion.button>

      <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white text-center mb-10 leading-snug drop-shadow-lg">
        Get in Touch <br />
        <span className="text-[#592f94]">Let’s build something great together</span>
      </h2>

      <motion.div
        className="w-full max-w-3xl"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 bg-neutral-900 p-8 rounded-xl shadow-2xl shadow-[#592f94]/30"
          >
            {/* Name */}
            <input
              type="text"
              placeholder="Name"
              required
              className="p-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-[#592f94] shadow-inner"
            />

            {/* Email */}
            <input
              type="email"
              placeholder="Email"
              required
              className="p-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-[#592f94] shadow-inner"
            />

            {/* Company */}
            <input
              type="text"
              placeholder="Company"
              className="p-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-[#592f94] shadow-inner"
            />

            {/* Budget */}
            <select
              className="p-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-[#592f94] shadow-inner"
              required
            >
              <option value="">Select Budget</option>
              <option value="$300-$500">$300-$500</option>
              <option value="$500-$1000">$500-$1000</option>
              <option value="$1000+">$1000+</option>
            </select>

            {/* Project Summary */}
            <textarea
              placeholder="Project summary"
              required
              className="p-3 rounded-lg bg-black border border-gray-700 text-white focus:outline-none focus:border-[#592f94] resize-none h-32 shadow-inner"
            />

            <button
              type="submit"
              className="mt-2 bg-[#592f94] hover:bg-[#4d267f] text-white py-3 rounded-lg font-medium shadow-lg hover:shadow-2xl transition"
            >
              Send Message
            </button>
          </form>
        ) : (
          <div className="text-center text-white p-8 bg-neutral-900 rounded-xl shadow-2xl shadow-[#592f94]/30">
            <p className="text-lg font-semibold drop-shadow-md">
              Thanks — we’ll reply within 24 hours.
            </p>
          </div>
        )}

        {/* Contact Options */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-6 text-gray-300 text-sm text-center">
          <a href="mailto:hello@sceintifiz.com" className="hover:text-[#592f94]">
            Email: hello@sceintifiz.com
          </a>
          <a href="tel:+1234567890" className="hover:text-[#592f94]">
            WhatsApp / Phone: +1 234 567 890
          </a>
          <a href="#" className="hover:text-[#592f94]">
            Schedule a Call
          </a>
        </div>
      </motion.div>
    </section>
  );
}
