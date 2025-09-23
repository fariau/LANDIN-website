"use client";

import { motion } from "framer-motion";
import { FC } from "react";

interface Article {
  title: string;
  summary: string;
  date: string;
  category: string;
  cta: string;
}

const articles: Article[] = [
  {
    title: "How to Launch a Shopify Store Quickly",
    summary: "Step-by-step guide for startups to set up their Shopify store, including themes, products, and checkout setup.",
    date: "Sep 23, 2025",
    category: "Ecommerce",
    cta: "Read More",
  },
  {
    title: "Top 10 UI/UX Tips for Small Business Websites",
    summary: "Design tips to improve usability, conversions, and engagement on your website without heavy coding.",
    date: "Sep 15, 2025",
    category: "UI/UX Design",
    cta: "Read More",
  },
  {
    title: "SEO Basics for Startups",
    summary: "Learn how to optimize your website content for search engines and increase organic traffic.",
    date: "Sep 10, 2025",
    category: "SEO",
    cta: "Read More",
  },
];

const Blog: FC = () => {
  return (
    <section className="bg-black py-20 px-6 flex flex-col items-center" id="blog">
      {/* Section Heading */}
      <motion.button
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="px-4 py-1.5 bg-neutral-900 text-sm rounded-full border border-gray-700 text-white shadow-md"
      >
        • Blog / Resources
      </motion.button>

      <h2 className="mt-6 text-3xl md:text-4xl font-bold text-white text-center mb-14 leading-snug drop-shadow-lg">
        Insights & Guides <br />
        <span className="text-[#592f94]">Learn & Grow Your Startup</span>
      </h2>

      {/* Articles */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {articles.map((a, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.2 }}
            className="rounded-xl bg-gradient-to-br from-[#592f94]/90 to-[#592f94]/60 p-[1px] shadow-xl shadow-[#592f94]/30 hover:shadow-2xl hover:shadow-[#592f94]/40 transition"
          >
            <div className="rounded-xl bg-black p-6 flex flex-col gap-4 h-full">
              {/* Category */}
              <span className="text-[#592f94] text-sm font-semibold">{a.category}</span>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white">{a.title}</h3>

              {/* Summary */}
              <p className="text-gray-400 text-sm">{a.summary}</p>

              {/* Date */}
              <p className="text-gray-500 text-xs">{a.date}</p>

              {/* CTA */}
              <button className="mt-auto w-full rounded-lg bg-[#592f94] hover:bg-[#4d267f] text-white py-2.5 font-medium transition">
                {a.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Blog;
