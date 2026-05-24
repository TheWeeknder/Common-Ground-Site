"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * ExploreWorkSection Component
 * A pixel-faithful recreation of the "Explore Our Work" section.
 * 
 * Features:
 * - Next.js 14 App Router compatible
 * - Tailwind CSS for all styling
 * - Framer Motion for entrance animations
 * - Mobile-first responsive design (stacks on mobile, side-by-side on desktop)
 * - Semantic HTML
 */
export default function StatementBanner() {
  return (
    <section className="w-full bg-black text-white overflow-hidden selection:bg-white selection:text-black">
      <div className="flex flex-col md:flex-row min-h-[400px] lg:min-h-[600px]">
        

        {/* Right Side: Content Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-black">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-center md:text-left"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-[0.05em] uppercase leading-[1.0] mb-8">
              welcome to
              <br />
              common ground
            </h2>
            
            <p className="text-nd md:text-base font-sans font-light leading-relaxed tracking-widest mb-12">
              Experience the art of traditional barbering combined with contemporary styling. We pride ourselves on exceptional service, attention to detail, and creating a comfortable, welcoming environment where you can unwind while getting a fresh look.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="w-full md:w-auto border border-white px-12 py-4 text-[15px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 ease-in-out font-semibold">
                book with us
              </button>
            </motion.div>
          </motion.div>
        </div>

        {/* Left Side: Image Section */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative w-full md:w-1/2 h-[400px] md:h-auto overflow-hidden"
        >
          <Image
            src="/assets/chaps-co-chTK1JJfok0-unsplash.jpg"
            alt="Explore Our Work"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover brightness-75 hover:scale-105 transition-transform duration-1000 ease-out"
            priority
          />
          {/* Subtle overlay to match the high-contrast aesthetic */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

      </div>
    </section>
  );
}