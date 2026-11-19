"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

// Two rows of images scrolling in opposite directions, sized by row height so both rows always fit.

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

// Row height = (section height - vertical padding - gap between rows) / 2.
// Mobile: (600px - 2*16px - 16px) / 2 = 276px. md+: (100svh - 2*24px - 24px) / 2.
const CARD_SIZE = "h-[276px] md:h-[calc(50svh-36px)] aspect-[4/5]";

const Carousel = ({ className }: CarouselProps) => {
  return (
    <section
      className={cn(
        "relative h-[600px] md:h-[100svh] overflow-hidden bg-[#efefef]",
        className
      )}
    >
      <div className="absolute inset-0 flex flex-col justify-center gap-4 md:gap-6 py-4 md:py-6">
        {galleryImages.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex w-max will-change-transform"
            animate={{
              // Three copies of the row; shifting by one copy (1/3) loops seamlessly.
              x: rowIndex === 1 ? ["-33.333%", "0%"] : ["0%", "-33.333%"],
            }}
            transition={{
              duration: 27,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...row, ...row, ...row].map((image, imageIndex) => (
              <div
                key={`${rowIndex}-${imageIndex}`}
                className={cn(
                  "relative shrink-0 mr-4 md:mr-6 overflow-hidden rounded-xl transition-all duration-500 hover:scale-[1.02] hover:shadow-xl",
                  CARD_SIZE
                )}
              >
                <img
                  src={image}
                  alt={`Gallery image ${(imageIndex % row.length) + 1}`}
                  className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/5 pointer-events-none" />
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export { Carousel };