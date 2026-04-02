"use client";


import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";


export function Contact13() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28 bg-zinc-50">
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
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15376.520811126347!2d-113.4940055298092!3d53.46006675465727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f25e5e14e15%3A0x679d5a9dd9984630!2sT%26T%20Supermarket!5e0!3m2!1sen!2sus!4v1775167006578!5m2!1sen!2sus"
            className="w-full h-[600px] rounded-lg border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
