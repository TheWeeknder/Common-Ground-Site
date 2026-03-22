"use client";


import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";


export function Contact13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">

        <div className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            LOCATION AND HOURS
          </h2>
        </div>
        <div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
          <div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
            <div>
              <div className="mb-3 md:mb-4">
                <BiEnvelope className="size-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-5xl">
                HOURS
              </h3>
              <p className="mb-2">Monday: 9AM - 5PM</p>
              <p className="mb-2">Tuesday: 9AM - 5PM</p>
              <p className="mb-2">Wednesday: 9AM - 5PM</p>
              <p className="mb-2">Thursday: 9AM - 5PM</p>
              <p className="mb-2">Friday: 9AM - 5PM</p>
              <p className="mb-2 font-bold">Saturday: 9AM - 5PM</p>
              <p className="mb-2 font-bold">Sunday: 9AM - 5PM</p>
              <br></br>
              <p className="mb-2 font-bold">Holiday Hours May Vary.</p>

            </div>
            <div>
              <div className="mb-3 md:mb-4">
                <BiMap className="size-8" />
              </div>
              <h3 className="mb-2 text-lg font-bold leading-[1.4] md:text-5xl">
                ADDRESS
              </h3>
              <p className="mb-2">247 King Street, Sydney NSW 2000</p>
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
          <a href="#" className="justify-self-end md:w-[321.6px] lg:w-auto">
            <img
              src="/assets/annie-spratt-AFB6S2kibuk-unsplash.jpg"
              alt="Relume placeholder map image"
              className="size-full h-[400px] object-cover md:h-[516px]"
            />
          </a>
        </div>
      </div>
    </section>
  );
}
