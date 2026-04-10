"use client";

import React from "react";

export function Stats10B() {
  return (
    <section
      id="relume"
      className="relative px-[5%] py-16 md:py-24 lg:py-28 bg-cover bg-center bg-scroll md:bg-fixed"
      style={{
        backgroundImage: `url('assets/chaps-co-BX8OTlmHOaI-unsplash.jpg')`,
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />
      <div className="container relative z-10 max-w-lg text-center">
        <p className="text-md tracking-widest text-gray-300">BOOK WITH US NOW</p>
        <h2 className="rb-5 mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
          ELEVATE YOUR STYLE WITH US
        </h2>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <button className="
            relative top-0
            bg-[#D4AF37] text-[#1a1206] text-xs sm:text-sm
            px-8 py-4 sm:px-10 sm:py-[18px]
            font-bold tracking-[0.12em] rounded-[14px]
            shadow-[0_5px_0_#8f6e10]
            hover:bg-[#e0bc45] hover:shadow-[0_7px_0_#8f6e10] hover:-top-0.5
            active:shadow-[0_1px_0_#8f6e10] active:top-1
            transition-all duration-[120ms]
            touch-manipulation min-h-[44px] sm:min-h-[68px]
            w-fit mx-auto sm:mx-0
          ">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
}