"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const useScrollAnimation = () => {
  const sectionRef = useRef();
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const xPartOne = useTransform(scrollYProgress, [0, 1], ["-5%", "0%"]);
  const xPartTwo = useTransform(scrollYProgress, [0, 1], ["5%", "0%"]);

  return {
    sectionRef,
    xPartOne,
    xPartTwo,
  };
};

export function StatementBanner() {
  const useAnimations = useScrollAnimation();
  return (
    <section
      id="relume"
      ref={useAnimations.sectionRef}
      className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28"
    >
      <div className="flex flex-col whitespace-nowrap">
        <motion.h1
          style={{ x: useAnimations.xPartOne }}
          className="text-[6rem] font-bold leading-[1.2]"
        >
          Where craft meets community
        </motion.h1>
        <motion.h1
          style={{ x: useAnimations.xPartTwo }}
          className="text-[6rem] font-bold leading-[1.2] self-end"
        >
          Where craft meets community
        </motion.h1>
      </div>
    </section>
  );
}
