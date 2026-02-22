"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Contact13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            Find us here
          </h2>
          <p className="md:text-md">
            Walk in or call ahead. We are open six days a week.
          </p>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 sm:grid-cols-2 md:gap-x-20 md:gap-y-16 lg:grid-cols-[0.5fr_1fr]">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Hours
              </h3>
              <a className="underline" href="#">
                Monday - Friday 
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Phone
              </h3>
              <p className="mb-2">Call to book or ask</p>
              <a className="underline" href="#">
                +1 (555) 000-0000
              </a>
            </div>
            <div>
              <h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
                Location
              </h3>
              <p className="mb-2">
                123 Sample Street, Sydney NSW 2000 Australia
              </p>
              <div className="mt-5 md:mt-6">
                <Button
                  title="Get directions"
                  variant="link"
                  size="link"
                  iconRight={<RxChevronRight />}
                >
                  Get directions
                </Button>
              </div>
            </div>
          </div>
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image-landscape.svg"
              alt="Relume placeholder image"
              className="size-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
