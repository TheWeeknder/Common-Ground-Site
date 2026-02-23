"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Header5() {
  return (
    <section id="relume" className="relative px-[5%]">
      <div className="container relative z-10">
        <div className="flex min-h-svh items-center py-16 md:py-24 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="mb-6 text-5xl font-bold text-text-alternative md:text-7xl lg:text-[5rem] xl:text-[5.5rem] leading-tight">
              Building Confidence on Common Ground
            </h1>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button size="lg" title="BOOK">
                BOOK
              </Button>
              <Button
                size="lg"
                title="VIEW SERVICES"
                variant="secondary-alt"
              >
                PORTFOLIO
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/chaps-co-chTK1JJfok0-unsplash.jpg"
          className="size-full object-cover"
          alt="Relume placeholder image"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
    </section>
  );
}