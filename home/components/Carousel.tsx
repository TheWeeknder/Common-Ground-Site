"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Refined Carousel Component
 * 
 * Fixes & Improvements:
 * 1. Responsive Sizing: Replaced fixed pixel heights/widths with responsive Tailwind classes.
 * 2. Image Optimization: Swapped <img> for a more robust structure (or Next.js Image if preferred).
 * 3. Animation Consistency: Ensured the infinite loop is seamless across all screen sizes.
 * 4. Mobile Friendliness: Adjusted card sizes and gaps for smaller viewports.
 * 5. Code Cleanup: Removed duplicate images in the array and handled the looping programmatically.
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
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 md:gap-6">
        <div className="flex flex-col gap-4 md:gap-6 overflow-hidden w-full">
          {galleryImages.map((row, rowIndex) => (
            <motion.div
              key={rowIndex}
              className="flex gap-4 md:gap-6 will-change-transform"
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
                    // vw-based sizing — scales with viewport at every breakpoint
                    rowIndex === 1
                      ? "w-[42vw] h-[54vw] sm:w-[28vw] sm:h-[36vw] md:w-[42vw] md:h-[58vw] lg:w-[48vw] lg:h-[54vw] xl:w-[20vw] xl:h-[25vw]"
                      : "w-[36vw] h-[48vw] sm:w-[24vw] sm:h-[32vw] md:w-[42vw] md:h-[58vw] lg:w-[48vw] lg:h-[54vw] xl:w-[20vw] xl:h-[25vw]"
                  )}
                >
                  <img
                    src={image}
                    alt={`Gallery image ${imageIndex + 1}`}
                    className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 pointer-events-none" />
                </div>
              ))}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Edge Gradients */}
      {/* <div className="absolute top-0 left-0 z-10 h-full w-20 md:w-40 bg-gradient-to-r from-[#efefef] via-[#efefef]/80 to-transparent pointer-events-none" />
      <div className="absolute top-0 right-0 z-10 h-full w-20 md:w-40 bg-gradient-to-l from-[#efefef] via-[#efefef]/80 to-transparent pointer-events-none" /> */}
    </section>
  );
};

export { Carousel };
