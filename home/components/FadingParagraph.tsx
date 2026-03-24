"use client";

import { Button } from "@relume_io/relume-ui";
import type { ButtonProps } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { motion, MotionStyle, useScroll, useTransform } from "framer-motion";
import { RxChevronRight } from "react-icons/rx";

type Props = {
  tagline: string;
  heading: string;
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
      <div className="container max-w-xl">
        <p className="mb-3 font-semibold md:mb-4">{tagline}</p>
        <h1 ref={headingRef} className="text-5xl font-bold md:text-7xl lg:text-8xl">
          {words.map((word, index) => {
            const start = index * 0.03;
            const end = start + 0.05;
            const opacity = useTransform(scrollYProgress, [start, end], [0.25, 1]);
            return (
              <React.Fragment key={index}>
                <motion.span className="inline-block" style={{ opacity } as MotionStyle}>
                  {word}
                </motion.span>
                {index < words.length - 1 && " "}
              </React.Fragment>
            );
          })}
        </h1>
      </div>
    </section>
  );
};

export const FadingParagraphDefaults: Props = {
  tagline: "",
  heading:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
};