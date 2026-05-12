"use client";

import { motion } from "framer-motion";

import { cn } from "@/lib/utils";

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

interface Hero234Props {
  className?: string;
}

const Carousel = ({ className }: Hero234Props) => {
  return (
    <section
      className={cn(
        "relative min-h-screen overflow-hidden bg-[#efefef]",
        className,
      )}
    >
      <div className="absolute inset-0 flex flex-col justify-center gap-4">
        {galleryImages.map((row, rowIndex) => (
          <motion.div
            key={rowIndex}
            className="flex gap-4 will-change-transform"
            animate={{
              x: rowIndex === 1 ? ["-33.333%", "0%"] : ["0%", "-33.333%"],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...row, ...row, ...row].map((image, imageIndex) => (
              <div
                key={`${rowIndex}-${imageIndex}`}
                className="relative flex-shrink-0 overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
                style={{
                  width: rowIndex === 1 ? "280px" : "240px",
                  height: rowIndex === 1 ? "350px" : "300px",
                }}
              >
                <img
                  src={image}
                  alt={`Gallery image ${imageIndex + 1}`}
                  className="h-full w-full object-cover"
                  loading="lazy"
                  decoding="async"
                  width={rowIndex === 1 ? 280 : 240}
                  height={rowIndex === 1 ? 350 : 300}
                />
              </div>
            ))}
          </motion.div>
        ))}
      </div>

      {/* Left side masks */}
      <div className="absolute top-0 left-0 z-10 h-full w-[50px] bg-gradient-to-r from-[#efefef] to-transparent md:w-[50px]" />

      {/* Right side masks */}
      <div className="absolute top-0 right-0 z-10 h-full w-[50px] bg-gradient-to-l from-[#efefef] to-transparent md:w-[50px]" />

      {/* <div className="relative z-20 flex min-h-screen items-center justify-center">
        <motion.div
          className="rounded-lg bg-black/60 p-8 backdrop-blur-md md:p-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <motion.h1
            className="text-3xl leading-tight text-white md:text-5xl lg:text-6xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            A Studio <br />
            Crafting <br />
            Digital Art
          </motion.h1>

          <motion.div
            className="mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Button size="lg" variant="secondary">
              View Projects
            </Button>
          </motion.div>
        </motion.div>
      </div> */}
    </section>
  );
};

export { Carousel };
