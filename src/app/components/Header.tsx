"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Contact", href: "#contact" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="w-full fixed top-0 left-0 z-50 backdrop-blur-md bg-black/20 transition-all duration-300">
      <div className="relative flex justify-between items-center px-8 py-3 max-w-8xl mx-auto text-white">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link href="/">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto object-contain"
            />
          </Link>
        </motion.div>

        {/* Desktop Menu */}
        <motion.ul
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="hidden md:flex space-x-6 text-gray-300 font-medium text-sm"
        >
          {menuItems.map((item, i) => (
            <li key={i} className="relative group cursor-pointer transition">
              <Link href={item.href}>{item.name}</Link>
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#592f94] transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}
        </motion.ul>

        {/* Button */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:block ml-4"
        >
          <Link
            href="#contact"
            className="bg-[#592f94] text-white px-3 py-1.5 rounded-lg text-sm transition-transform duration-300 inline-block hover:shadow-2xl"
          >
            Get In Touch
          </Link>
        </motion.div>


        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="md:hidden bg-black/80 backdrop-blur-lg px-8 pb-5 space-y-4 text-gray-300 font-medium"
        >
          {menuItems.map((item, i) => (
            <Link key={i} href={item.href} className="block hover:text-white">
              {item.name}
            </Link>
          ))}
          {/* Mobile Button */}

          <Link href="#contact" passHref>
            <button className="w-full bg-[#592f94] text-white px-3 py-2 rounded-lg text-sm">
              Get In Touch
            </button>
          </Link>

        </motion.div>
      )}
    </header>
  );
}
