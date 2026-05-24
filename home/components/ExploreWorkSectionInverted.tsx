"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * ExploreWorkSectionInverted Component
 * An inverted version of the "Explore Our Work" section.
 * 
 * Features:
 * - Image on the RIGHT, Content on the LEFT (Desktop)
 * - Image is HIDDEN on mobile breakpoints
 * - Next.js 14 App Router compatible
 * - Tailwind CSS for all styling
 * - Framer Motion for entrance animations
 * - Semantic HTML
 */
export default function ExploreWorkSectionInverted() {
  return (
    <section className="w-full bg-[#212121] text-white overflow-hidden selection:bg-[#212121] selection:text-black">
      <div className="flex flex-col md:flex-row min-h-[400px] lg:min-h-[600px]">
        
        {/* Right Side: Image Section (Hidden on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block relative md:w-1/2 h-auto overflow-hidden"
        >
          <Image
            src="/assets/chaps-co-BX8OTlmHOaI-unsplash.jpg"
            alt="Explore Our Work"
            fill
            sizes="50vw"
            className="object-cover brightness-75 hover:scale-105 transition-transform duration-1000 ease-out"
            priority
          />
          {/* Subtle overlay */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>
        
        {/* Left Side: Content Section */}
        <div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 bg-[#212121]">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-center md:text-left"
          >
            <h2 className="text-6xl md:text-7xl lg:text-8xl font-serif font-light tracking-[0.05em] uppercase leading-[1.0] mb-8">
              from the
              <br />
              ground up
            </h2>
            
            <p className="text-nd md:text-base font-sans font-light leading-relaxed tracking-widest mb-12">
              It started with a vision to create more than just a place to get a haircut. We stripped this space down to the studs, pouring late nights and hard work into every detail. From custom-built stations to the perfect lighting, we designed and built a true sanctuary for modern grooming.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="w-full md:w-auto border border-white px-12 py-4 text-[15px] tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-500 ease-in-out font-semibold">
                about us
              </button>
            </motion.div>
          </motion.div>
        </div>

        

      </div>
    </section>
  );
}
