
import React from "react";

export function Stats10B() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container relative z-10 text-center">
        <div className="mb-12 md:mb-18 lg:mb-20">
          <h3 className="text-5xl font-bold leading-[1.2] text-text-alternative md:text-7xl lg:text-9xl">
            HOURS
          </h3>
        </div>
        <div className="relative grid grid-cols-1 gap-y-8 md:grid-cols-2 md:gap-x-8 lg:gap-x-12 lg:gap-y-16 justify-items-center">
          <div className="text-center">
            <p className="mb-2 font-bold leading-[1.3] text-text-alternative md:text-[3rem] lg:text-[4rem] whitespace-nowrap">
              9am - 5pm
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
              Monday to Friday
            </h3>
          </div>

          {/* center divider */}
          <div className="hidden md:block absolute left-1/2 h-full w-[2px] bg-border-alternative" />

          <div className="text-center">
            <p className="mb-2 font-bold leading-[1.3] text-text-alternative md:text-[3rem] lg:text-[4rem] whitespace-nowrap">
              10am - 5pm
            </p>
            <h3 className="text-md font-bold leading-[1.4] text-text-alternative md:text-xl">
              Saturday & Sunday
            </h3>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/nate-johnston-tgPrIYnW3g4-unsplash.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}
