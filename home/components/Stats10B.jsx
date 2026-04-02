"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Stats10B() {
  return (
    <section id="relume" className="relative px-[5%] py-16 md:py-24 lg:py-28 ">
      <div className="container relative z-10 max-w-lg text-center">
        <h2 className="rb-5 mb-5 text-5xl font-bold text-text-alternative md:mb-6 md:text-7xl lg:text-8xl">
          Ready for your best cut
        </h2>
        <p className="text-text-alternative md:text-md">
          Step in anytime or book ahead. We have got the time and the skill to
          make it count.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-4 md:mt-8">
          <Button title="Visit">Visit</Button>
          <Button title="Call" variant="secondary-alt">
            Call
          </Button>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="assets/chaps-co-BX8OTlmHOaI-unsplash.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}