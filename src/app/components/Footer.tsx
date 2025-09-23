"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 py-12 px-6 overflow-hidden">
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#592f94]/30 blur-3xl pointer-events-none"></div>

      {/* Animated Main Content */}
      <motion.div
        className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-center md:justify-between gap-8 text-center md:text-left z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-semibold mb-2">Quick Links</h4>
          <Link href="#home" className="hover:text-[#592f94] transition">Home</Link>
          <Link href="#about" className="hover:text-[#592f94] transition">About</Link>
          <Link href="#services" className="hover:text-[#592f94] transition">Services</Link>
          <Link href="#portfolio" className="hover:text-[#592f94] transition">Portfolio</Link>
          <Link href="#pricing" className="hover:text-[#592f94] transition">Pricing</Link>
          <Link href="#blog" className="hover:text-[#592f94] transition">Blog</Link>
          <Link href="#contact" className="hover:text-[#592f94] transition">Contact</Link>
          <Link href="#legal" className="hover:text-[#592f94] transition">Legal</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-semibold mb-2">Contact</h4>
          <a href="mailto:hello@sceintifiz.com" className="hover:text-[#592f94] transition">
            hello@sceintifiz.com
          </a>
          <a href="tel:+1234567890" className="hover:text-[#592f94] transition">
            +1 234 567 890
          </a>
          <a href="#" className="hover:text-[#592f94] transition">
            Schedule a Call
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2">
          <h4 className="text-white font-semibold mb-2">Follow Us</h4>
          <div className="flex justify-center md:justify-start gap-4 text-white">
            <a href="#" className="hover:text-[#592f94] transition"><FaInstagram size={20} /></a>
            <a href="#" className="hover:text-[#592f94] transition"><FaFacebook size={20} /></a>
            <a href="#" className="hover:text-[#592f94] transition"><FaLinkedin size={20} /></a>
          </div>
        </div>
      </motion.div>

      {/* Animated Copyright */}
      <motion.div
        className="mt-12 text-center text-gray-500 text-sm relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        © {new Date().getFullYear()} Sceintifiz. All rights reserved.
      </motion.div>
    </footer>
  );
}
