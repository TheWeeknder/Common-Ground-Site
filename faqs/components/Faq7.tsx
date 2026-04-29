"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Faq7() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container w-full max-w-lg">
        {/* <div className="rb-12 mb-12 text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            FAQs
          </h2>
          <p className="md:text-md">
            Everything you need to know about Common Ground barbershop.
          </p>
        </div> */}
        <div className="grid grid-cols-1 gap-x-12 gap-y-10 md:gap-y-12">
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What are your hours?
            </h2>
            <p>
              We are open Tuesday through Saturday, nine in the morning until
              seven at night. Sundays and Mondays we are closed. Come in early if
              you want to avoid the wait.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Do you take walk-ins?
            </h2>
            <p>
              We accept walk-ins when our barbers have availability.
              Appointments are preferred and guarantee your spot. During peak
              hours, walk-ins may face a longer wait.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              Is parking available?
            </h2>
            <p>
              Street parking is available on the block. We are located near
              public transit if that works better for you. The neighborhood has
              plenty of spots most days.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What products do you use?
            </h2>
            <p>
              We use premium grooming products from trusted brands known for
              quality. All products are professional-grade and suited for
              different hair types. Ask your barber about specific product
              recommendations for your needs.
            </p>
          </div>
          <div>
            <h2 className="mb-3 text-base font-bold md:mb-4 md:text-md">
              What payment methods accepted?
            </h2>
            <p>
              We take cash, credit cards, and digital payments. All major card
              networks are accepted. Tips can be added at checkout or in cash.
            </p>
          </div>
        </div>
        {/* <div className="mx-auto mt-12 max-w-md text-center md:mt-18 lg:mt-20">
          <p className="md:text-md">
            Reach out directly or schedule your next visit.
          </p>
          <div className="mt-6 md:mt-8">
            <button className="
              relative top-0
              bg-transparent text-black text-xs sm:text-sm
              px-8 py-4 sm:px-10 sm:py-[18px]
              font-bold tracking-[0.12em] rounded-full
              border-2 border-[#ffe590]
              hover:bg-white/5
              active:scale-[0.98]
              transition-all duration-[120ms]
              touch-manipulation min-h-[44px] sm:min-h-[68px]
              w-fit mx-auto sm:mx-0
            ">
              BOOK APPOINTMENT
            </button>
          </div>
        </div> */}
      </div>
    </section>
  );
}


