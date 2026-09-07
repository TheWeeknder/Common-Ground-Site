"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Refactored Carousel Component
 * 
 * Improvements:
 * 1. Consistent Aspect Ratio: All images use aspect-[4/5] — no distortion across breakpoints
 * 2. Smooth Responsive Scaling: Width scales fluidly with clamp() instead of discrete breakpoints
 * 3. Simplified Markup: Removed duplicate vw-based height declarations; aspect ratio handles it
 * 4. Unified Row Sizing: Both rows use the same sizing logic for visual consistency
 * 5. Better Performance: Cleaner Tailwind classes, fewer recalculations at each breakpoint
 */

const galleryImages = [
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw4.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw5.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
  ],
  [
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw7.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw8.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw9.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw10.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw11.jpeg",
    "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw12.jpeg",
  ],
];

interface CarouselProps {
  className?: string;
}

const Carousel = ({ className }: CarouselProps) => {
  return (
    <section
      className={cn(
        "relative min-h-[600px] md:min-h-screen overflow-hidden bg-[#efefef] py-12 md:py-0",
        className
      )}
    >
      {/* Background Scrolling Gallery */}
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 py-8 md:gap-6 lg:gap-8">
        {galleryImages.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-4 md:gap-6 lg:gap-8 will-change-transform overflow-hidden"
            animate={{
              x: rowIndex === 1 ? ["-50%", "0%"] : ["0%", "-50%"],
            }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: "max-content" }}
          >
            {[...row, ...row, ...row].map((image, imageIndex) => (
              <div
                key={`${rowIndex}-${imageIndex}`}
                className={cn(
                  "relative flex-shrink-0 overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-xl",
                  // Consistent aspect ratio (4:5 portrait) with smooth responsive width scaling
                  // clamp(min, preferred, max) ensures smooth scaling from mobile to desktop
                  "w-[clamp(30vw, 12rem, 32vw)] aspect-[4/5]"
                )}
              >
                <img
                src={image}
                alt=""  // decorative image
                loading="lazy"  // uncommented for performance
                className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Edge Gradients (optional — uncomment if needed) */}
      {/* <div className="absolute top-0 left-0 z-10 h-full w-20 md:w-40 bg-gradient-to-r from-[#efefef] via-[#efefef]/80 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 z-10 h-full w-20 md:w-40 bg-gradient-to-l from-[#efefef] via-[#efefef]/80 to-transparent pointer-events-none" /> */}
    </section>
  );
};

export { Carousel };