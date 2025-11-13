"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const projects = [
  { img: "/project1.jpeg" },
  { img: "/project2.jpeg" },
  { img: "/project3.jpeg" },
  { img: "/project4.jpeg" },
  { img: "/project5.jpeg" },
  { img: "/project6.jpeg" },
];

export default function Portfolio() {
  const [stack, setStack] = useState(projects);
  const [positions, setPositions] = useState(
    projects.map(() => ({ x: 0, y: 0, rotate: 0 }))
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setStack((prev) => {
        const [first, ...rest] = prev;
        return [...rest, first];
      });

      setPositions(
        projects.map(() => ({
          x: Math.random() * 80 - 40,
          y: Math.random() * 50 - 25,
          rotate: Math.random() * 20 - 10,
        }))
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden bg-black flex flex-col items-center justify-center py-24 px-6"
    >
      {/* Side Gradient Glow Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[350px] h-[400px] bg-[#592f94]/35 rounded-full blur-[150px]" />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[350px] h-[400px] bg-[#592f94]/35 rounded-full blur-[150px]" />
      </div>

      {/* Heading */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 py-1.5 bg-neutral-900 text-sm rounded-full border border-gray-700 text-white z-10"
      >
        • Portfolio / Case Studies
      </motion.button>

      <motion.h2
        className="mt-6 text-3xl md:text-4xl font-bold text-white text-center mb-12 leading-snug z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Projects <br />
        <span className="text-[#592f94]">That Define Our Work</span>
      </motion.h2>

      {/* Stack of Images */}
      <div className="relative w-full max-w-6xl aspect-video flex justify-center items-center z-10">
        {stack.map((p, i) => (
          <motion.div
            key={p.img}
            className="absolute w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%] aspect-video rounded-xl overflow-hidden border border-gray-800 shadow-md"
            style={{
              backgroundImage: `url(${p.img})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              zIndex: stack.length - i,
            }}
            animate={{
              x: positions[i].x,
              y: positions[i].y,
              rotate: positions[i].rotate,
            }}
            transition={{
              duration: 1.5,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.1,
              rotate: 0,
              zIndex: 999,
              boxShadow: "0 0 45px rgba(89,47,148,0.8)",
            }}
          />
        ))}
      </div>
    </section>
  );
}
