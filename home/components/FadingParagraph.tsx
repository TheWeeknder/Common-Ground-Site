"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { motion, MotionStyle, useScroll, useTransform, type MotionValue } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";

type Props = {
  tagline: string;
  heading: string;
};

type WordProps = {
  word: string;
  scrollYProgress: MotionValue<number>;
  index: number;
};

const Word = ({ word, scrollYProgress, index }: WordProps) => {
  const start = index * 0.03;
  const opacity = useTransform(scrollYProgress, [start, start + 0.05], [0.25, 1]);
  return (
    <motion.span className="inline-block" style={{ opacity } as MotionStyle}>
      {word}
    </motion.span>
  );
};

export type FadingParagraphProps = React.ComponentPropsWithoutRef<"section"> & Partial<Props>;

export const FadingParagraph = (props: FadingParagraphProps) => {
  const { tagline, heading } = {
    ...FadingParagraphDefaults,
    ...props,
  };

  const headingRef = useRef<HTMLHeadingElement>(null);

  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start center", "end center"],
  });

  const words = heading.split(" ");

  return (
    <section id="relume" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container max-w-5xl">
        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
        <h1 ref={headingRef} className="text-7xl font-bold md:text-9xl lg:text-10xl">
          {words.map((word, index) => (
            <React.Fragment key={index}>
              <Word word={word} scrollYProgress={scrollYProgress} index={index} />
              {index < words.length - 1 && " "}
            </React.Fragment>
          ))}
        </h1>
      </div>
    </section>
  );
};

export const FadingParagraphDefaults: Props = {
  tagline: "",
  heading:
    "At Common Ground Barbershop, we are committed to inclusive service and exceptional quality. Every client receives careful attention, expert technique, and a haircut designed to suit both their style and individuality.",
};