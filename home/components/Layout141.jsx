"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Layout141() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="flex flex-col items-center">
          <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
            <div className="w-full max-w-lg">
              <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
                THE EXPERTS
              </h2>
            </div>
          </div>
          <div>
            <img
              src="/assets/europeana-3YX5wdRdB-I-unsplash.jpg"
              className="size-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
                        <div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
                <Button title="VIEW ALL" variant="secondary">
                  VIEW ALL
                </Button>
              </div>
        </div>
      </div>
    </section>
  );
}
