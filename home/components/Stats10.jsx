"use client";

import React from "react";

export function Stats10() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10">
        {/* moved stats title*/}
        <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-8 lg:gap-x-12 lg:gap-y-16">
          <div className="border-l-2 border-border-alternative pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
              7
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
              EXPERTS
            </h3>
          </div>
          <div className="border-l-2 border-border-alternative pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
              30
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
              YEARS COMBINED EXPERIENCE
            </h3>
          </div>
          <div className="border-l-2 border-border-alternative pl-8">
            <p className="mb-2 text-10xl font-bold leading-[1.3] text-text-alternative md:text-[4rem] lg:text-[5rem]">
              2000+
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
              FADES DONE
            </h3>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="assets/nate-johnston-tgPrIYnW3g4-unsplash.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
