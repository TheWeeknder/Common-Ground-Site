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
          <button className="bg-[#D4AF37] text-sm text-black px-5 py-3 sm:px-8 sm:py-4 hover:bg-[#c4a02e] active:bg-[#b39728] transition-all duration-300 tracking-widest touch-manipulation min-h-[44px] sm:min-h-[68px] font-medium w-fit mx-auto sm:mx-0">
            BOOK APPOINTMENT
          </button>
        </div>
      </div>
    </section>
  );
}