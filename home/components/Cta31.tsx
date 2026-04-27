"use client";

import {
  AnimatePresence,
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { useCallback, useRef, useState } from "react";

import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Person 1",
    img: "/assets/person1.jpg",
    year: "@instagram",
    type: "Co-Founder & Barber",
  },
  {
    title: "Person 2",
    img: "/assets/person2.jpg",
    year: "@instagram",
    type: "Barber & Hairstylist",
  },
  {
    title: "Person 3",
    img: "/assets/person3.jpg",
    year: "@instagram",
    type: "Barber",
  },
  {
    title: "Person 4",
    img: "/assets/person4.jpg",
    year: "@instagram",
    type: "Barber",
  },
  {
    title: "Person 5",
    img: "/assets/person5.jpg",
    year: "@instagram",
    type: "Barber",
  },
  {
    title: "Person 6",
    img: "/assets/person6.jpg",
    year: "@instagram",
    type: "Barber",
  },
];

interface Projects12Props {
  className?: string;
}

const Cta31 = ({ className }: Projects12Props) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isHovering, setIsHovering] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, {
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  });
  const springY = useSpring(mouseY, {
    stiffness: 300,
    damping: 30,
    mass: 0.8,
  });

  const handleContainerMouseMove = useCallback(
    (e: React.MouseEvent<HTMLDivElement>) => {
      if (!containerRef.current) return;

      const containerRect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - containerRect.left;
      const y = e.clientY - containerRect.top;

      mouseX.set(x - 50);
      mouseY.set(y + 30);
    },
    [mouseX, mouseY],
  );

  const handleProjectMouseEnter = useCallback((index: number) => {
    setHoveredIndex(index);
    setIsHovering(true);
  }, []);

  const handleContainerMouseLeave = useCallback(() => {
    setHoveredIndex(null);
    setIsHovering(false);
  }, []);

  return (
    <section className={cn("py-20 px-[5%] bg-zinc-50", className)}>
      <div className="container">
        <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <div className="w-full max-w-lg mx-auto">
            <p className="text-md tracking-widest text-black">BEHIND THE CUTS</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-black ">
              MEET THE TEAM
            </h2>
          </div>
        </div>

        <div
          ref={containerRef}
          className="relative grid grid-cols-1 gap-x-6 gap-y-7 sm:grid-cols-2 lg:grid-cols-3"
          onMouseMove={handleContainerMouseMove}
          onMouseLeave={handleContainerMouseLeave}
        >
          {projects.map((project, index) => (
            <div key={index} className="group relative">
              <div
                className="relative cursor-pointer overflow-hidden rounded-xl"
                onMouseEnter={() => handleProjectMouseEnter(index)}
              >
                <img
                  src={project.img}
                  alt={project.title}
                  className="h-[400px] w-full rounded-lg object-cover transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.05] group-hover:brightness-110"
                />

                <div className="absolute inset-0 rounded-lg bg-black/0 transition-all duration-500 group-hover:bg-black/10" />
              </div>

              <div className="mt-4 flex justify-between gap-0.5">
                <h3 className="text-sm leading-tight font-medium transition-colors duration-300 group-hover:text-neutral-800 md:text-base">
                  {project.title}
                </h3>
                <div className="flex flex-col items-end">
                  <p className="text-sm text-neutral-600">{project.year}</p>
                  <p className="text-sm text-muted-foreground">
                    {project.type}
                  </p>
                </div>
              </div>
            </div>
          ))}

          <AnimatePresence>
            {isHovering && hoveredIndex !== null && (
              <motion.div
                style={{
                  x: springX,
                  y: springY,
                }}
                initial={{
                  opacity: 0,
                  scale: 0.8,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  scale: 0.8,
                }}
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 25,
                  mass: 0.5,
                }}
                className="pointer-events-none absolute top-0 left-0 z-[9999] select-none"
              >
                <div className="relative">
                  <div className="absolute inset-0 rounded-xl border border-white/10 bg-black/95 shadow-2xl shadow-black/30 backdrop-blur-md" />

                  <div className="relative flex items-center gap-3 px-3 py-3 text-sm font-medium whitespace-nowrap text-white">
                    <span className="text-base">Explore</span>
                    <div className="flex h-6 w-6 items-center justify-center rounded-full border border-white/30 bg-white/10">
                      <motion.span
                        animate={{ x: [0, 2, 0] }}
                        transition={{
                          duration: 2,
                          repeat: Number.POSITIVE_INFINITY,
                          ease: "easeInOut",
                        }}
                        className="text-xs"
                      >
                        →
                      </motion.span>
                    </div>
                  </div>

                  <div className="absolute inset-0 scale-105 rounded-2xl bg-white/5 blur-sm" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export { Cta31 };
