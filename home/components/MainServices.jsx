"use client";

import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import { RxChevronRight } from "react-icons/rx";

const useRelume = () => {
  const [hoveredFeatureIdx, setHoveredFeatureIdx] = useState(null);
  const handleMouseEnter = (index) => () => {
    setHoveredFeatureIdx(index);
  };
  const handleMouseLeave = () => {
    setHoveredFeatureIdx(null);
  };
  const startAnimation = (index) => {
    return hoveredFeatureIdx === index ? "visible" : "hidden";
  };
  return {
    handleMouseEnter,
    handleMouseLeave,
    startAnimation,
  };
};

export function MainServices() {
  const hoverState = useRelume();
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-zinc-900">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <p className="text-md tracking-widest text-white">MAIN SERVICES</p>
          <h2 style={{ fontFamily: 'Georgia, "Times New Roman", serif' }} className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-neutral-white text-white">
            WHAT WE OFFER
          </h2>
        </div>
        <div className="flex flex-col justify-between gap-6 md:gap-8 lg:flex-row">
          
          {/* Service 1: Haircuts */}
          <a
            href="#"
            className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
            onMouseOver={hoverState.handleMouseEnter(0)}
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="/assets/mitchell-orr-xO8OpsasyZA-unsplash.jpg"
                alt="Haircut service"
                className="size-full object-cover"
              />
            </div>
            <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
              <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/60" />
              <div className="z-10">
                <h3 className="text-2xl font-bold text-white md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Haircuts & Styling
                </h3>
                <div className="lg:hidden">
                  <p className="mt-2 text-sm text-zinc-300 font-semibold uppercase tracking-wider">From $35 • 45 Min</p>
                  <p className="mt-3 text-zinc-200 md:mt-4 text-sm">
                    Classic cuts, modern styles, and sharp fades tailored exactly to your vibe.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="text-white hover:text-zinc-300"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                <motion.div
                  className="z-10 hidden lg:block lg:w-[340px]"
                  variants={{
                    hidden: { opacity: 0, height: 0, y: 50 },
                    visible: { opacity: 1, height: "auto", y: 0 },
                  }}
                  initial="hidden"
                  animate={hoverState.startAnimation(0)}
                  exit="hidden"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="mt-2 text-sm text-zinc-300 font-semibold uppercase tracking-wider">From $35 • 45 Min</p>
                  <p className="mt-3 text-zinc-200 md:mt-4">
                    Classic cuts, modern styles, and sharp fades tailored exactly to your vibe.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="text-white hover:text-zinc-300"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </a>

          {/* Service 2: Beard & Shaving */}
          <a
            href="#"
            className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
            onMouseOver={hoverState.handleMouseEnter(1)}
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="assets/nate-johnston-tgPrIYnW3g4-unsplash.jpg"
                alt="Beard trimming service"
                className="size-full object-cover"
              />
            </div>
            <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
              <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/60" />
              <div className="z-10">
                <h3 className="text-2xl font-bold text-white md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Beard & Shaving
                </h3>
                <div className="lg:hidden">
                  <p className="mt-2 text-sm text-zinc-300 font-semibold uppercase tracking-wider">From $25 • 30 Min</p>
                  <p className="mt-3 text-zinc-200 md:mt-4 text-sm">
                    Hot towel straight razor shaves and precision beard sculpting for a distinguished look.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="text-white hover:text-zinc-300"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                <motion.div
                  className="z-10 hidden lg:block lg:w-[340px]"
                  variants={{
                    hidden: { opacity: 0, height: 0, y: 50 },
                    visible: { opacity: 1, height: "auto", y: 0 },
                  }}
                  initial="hidden"
                  animate={hoverState.startAnimation(1)}
                  exit="hidden"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="mt-2 text-sm text-zinc-300 font-semibold uppercase tracking-wider">From $25 • 30 Min</p>
                  <p className="mt-3 text-zinc-200 md:mt-4">
                    Hot towel straight razor shaves and precision beard sculpting for a distinguished look.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="text-white hover:text-zinc-300"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </a>

          {/* Service 3: Facial & Skin Care */}
          <a
            href="#"
            className="relative flex w-full flex-col overflow-hidden lg:h-full lg:w-1/2 lg:transition-all lg:duration-200 lg:hover:w-[70%]"
            onMouseOver={hoverState.handleMouseEnter(2)}
            onMouseLeave={hoverState.handleMouseLeave}
          >
            <div className="absolute inset-0 flex size-full flex-col items-center justify-center self-start">
              <div className="absolute inset-0 bg-black/50" />
              <img
                src="assets/mohamed-b-SHA-8AjZOeY-unsplash.jpg"
                alt="Facial service"
                className="size-full object-cover"
              />
            </div>
            <div className="group relative flex h-full min-h-[70vh] flex-col justify-end p-6 md:p-8">
              <div className="lg:absolute lg:inset-0 lg:z-0 lg:transition-all lg:duration-300 lg:group-hover:bg-black/60" />
              <div className="z-10">
                <h3 className="text-2xl font-bold text-white md:text-3xl md:leading-[1.3] lg:text-4xl">
                  Facial & Skin Care
                </h3>
                <div className="lg:hidden">
                  <p className="mt-2 text-sm text-zinc-300 font-semibold uppercase tracking-wider">From $40 • 45 Min</p>
                  <p className="mt-3 text-zinc-200 md:mt-4 text-sm">
                    Rejuvenating deep-cleanse treatments to exfoliate, hydrate, and refresh your skin.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="text-white hover:text-zinc-300"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </div>
              </div>
              <AnimatePresence>
                <motion.div
                  className="z-10 hidden lg:block lg:w-[340px]"
                  variants={{
                    hidden: { opacity: 0, height: 0, y: 50 },
                    visible: { opacity: 1, height: "auto", y: 0 },
                  }}
                  initial="hidden"
                  animate={hoverState.startAnimation(2)}
                  exit="hidden"
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <p className="mt-2 text-sm text-zinc-300 font-semibold uppercase tracking-wider">From $40 • 45 Min</p>
                  <p className="mt-3 text-zinc-200 md:mt-4">
                    Rejuvenating deep-cleanse treatments to exfoliate, hydrate, and refresh your skin.
                  </p>
                  <div className="mt-6 md:mt-8">
                    <Button
                      variant="link"
                      size="link"
                      iconRight={<RxChevronRight />}
                      className="text-white hover:text-zinc-300"
                    >
                      BOOK NOW
                    </Button>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}