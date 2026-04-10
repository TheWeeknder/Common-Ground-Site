"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout141() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-zinc-900">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <p className="text-md tracking-widest text-white">BEHIND THE CUTS</p>
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-white ">
                MEET THE TEAM
              </h2>
            </div>
          </div>
          <div>
            <img
              src="/assets/5-male-barbersand-1-female-barber-taking-group-picture.jpg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
              <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <button className="
                  relative top-0
                  bg-[#ffde71] text-[#1a1206] text-xs sm:text-sm
                  px-8 py-4 sm:px-10 sm:py-[18px]
                  font-bold tracking-[0.12em] rounded-[14px]
                  shadow-[0_5px_0_#8f6e10]
                  hover:bg-[#e0bc45] hover:shadow-[0_7px_0_#8f6e10] hover:-top-0.5
                  active:shadow-[0_1px_0_#8f6e10] active:top-1
                  transition-all duration-[120ms]
                  touch-manipulation min-h-[44px] sm:min-h-[68px]
                  w-fit mx-auto sm:mx-0
                ">
                  VIEW BARBERS
                </button> 
              </div>
        </div>
      </div>
    </section>
  );
}
