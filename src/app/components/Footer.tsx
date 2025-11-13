"use client";

import Link from "next/link";
import { FaInstagram, FaFacebook, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-black text-gray-300 py-12 px-6 overflow-hidden">
      <div className="absolute -bottom-32 -right-32 w-96 h-96 rounded-full bg-[#592f94]/30 blur-3xl pointer-events-none"></div>

      {/* Main Footer Content */}
      <motion.div
        className="relative max-w-5xl mx-auto flex flex-col md:flex-row justify-center md:justify-between gap-8 text-center md:text-left z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      >
        {/* Quick Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold mb-2 bg-gradient-to-r from-[#7b3fff] via-[#b770ff] to-[#592f94] text-transparent bg-clip-text">
            Quick Links
          </h4>
          <Link href="#home" className="hover:text-[#b770ff] transition">Home</Link>
          <Link href="#about" className="hover:text-[#b770ff] transition">About</Link>
          <Link href="#services" className="hover:text-[#b770ff] transition">Services</Link>
          <Link href="#portfolio" className="hover:text-[#b770ff] transition">Portfolio</Link>
          <Link href="#pricing" className="hover:text-[#b770ff] transition">Pricing</Link>
          <Link href="#contact" className="hover:text-[#b770ff] transition">Contact</Link>
          <Link href="#legal" className="hover:text-[#b770ff] transition">Legal</Link>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold mb-2 bg-gradient-to-r from-[#7b3fff] via-[#b770ff] to-[#592f94] text-transparent bg-clip-text">
            Contact
          </h4>
          <a href="mailto:hello@scientifiz.com" className="hover:text-[#b770ff] transition">
            hello@scientifiz.com
          </a>
          <a
            href="https://wa.me/923097489899"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#b770ff] transition"
          >
            WhatsApp: +92 309 7489899
          </a>
        </div>

        {/* Social Links */}
        <div className="flex flex-col gap-2">
          <h4 className="font-semibold mb-2 bg-gradient-to-r from-[#7b3fff] via-[#b770ff] to-[#592f94] text-transparent bg-clip-text">
            Follow Us
          </h4>
          <div className="flex justify-center md:justify-start gap-4 text-white">
            <a
              href="https://www.instagram.com/scientifiz.co/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b770ff] transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/people/Scientifiz/61580286875646/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b770ff] transition"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/scientifiz/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b770ff] transition"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/scientifiz"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#b770ff] transition"
            >
              <FaXTwitter size={20} />
            </a>
          </div>
        </div>
      </motion.div>

      {/* Footer Bottom */}
      <motion.div
        className="mt-12 text-center text-gray-500 text-sm relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.2 }}
      >
        © {new Date().getFullYear()} <span className="text-white font-semibold">SCIENTIFIZ</span>. All rights reserved.
      </motion.div>
    </footer>
  );
}
