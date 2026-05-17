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
      <div className="flex flex-col md:flex-row min-h-[500px] lg:min-h-[700px]">
        
        {/* Right Side: Image Section (Hidden on Mobile) */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block relative md:w-1/2 h-auto overflow-hidden"
        >
          <Image
            src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop"
            alt="Explore Our Work"
            fill
            sizes="50vw"
            className="object-cover grayscale brightness-75 hover:scale-105 transition-transform duration-1000 ease-out"
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
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light tracking-[0.15em] uppercase leading-[1.0] mb-8">
              Explore
              <br />
              Our Work
            </h2>
            
            <p className="text-sm md:text-base font-sans font-light leading-relaxed opacity-80 tracking-widest mb-12">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id.
            </p>

            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <button className="w-full md:w-auto border border-white px-12 py-4 text-[14px] tracking-[0.4em] uppercase hover:bg-white hover:text-black transition-all duration-500 ease-in-out">
                Learn More
              </button>
            </motion.div>
          </motion.div>
        </div>

        

      </div>
    </section>
  );
}
