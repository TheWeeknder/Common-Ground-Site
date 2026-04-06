"use client";

import React from "react";
import { BiSolidStar } from "react-icons/bi";

const testimonials = [
  { quote: "They know what they're doing and they don't waste your time.", name: "Michael Torres", title: "Architect, Sydney" },
  { quote: "Best cut I've had in years. Walked in, walked out looking sharp.", name: "James Reid", title: "Designer, Edmonton" },
  { quote: "Clean shop, great atmosphere, consistent every single time.", name: "Daniel Park", title: "Engineer, Calgary" },
  { quote: "No nonsense, no upsells. Just a great haircut.", name: "Ryan Kowalski", title: "Teacher, Edmonton" },
  { quote: "My barber actually listens. Rare to find.", name: "Chris Nguyen", title: "Developer, Edmonton" },
  { quote: "Been coming here for two years and won't go anywhere else.", name: "Aaron Malik", title: "Accountant, Leduc" },
];

const TestimonialCard = ({ quote, name, title }) => (
  <div className="flex w-[320px] shrink-0 flex-col items-start justify-between border border-border-primary p-6 mx-4">
    <div className="mb-5 flex">
      {[...Array(5)].map((_, i) => <BiSolidStar key={i} className="size-6" />)}
    </div>
    <p className="md:text-md">&ldquo;{quote}&rdquo;</p>
    <div className="mt-5 flex items-center gap-4">
      <img
        src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
        alt={name}
        className="size-12 min-h-12 min-w-12 rounded-full object-cover"
      />
      <div>
        <p className="font-semibold">{name}</p>
        <p>{title}</p>
      </div>
    </div>
  </div>
);

export function Testimonials() {
  const doubled = [...testimonials, ...testimonials]; // duplicate for seamless loop

  return (
    <section id="relume" className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-28 bg-zinc-50">
      <div className="container">
        <div className="mx-auto mb-12 w-full max-w-lg text-center md:mb-18 lg:mb-20">
          <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
            What men say
          </h2>
          <p className="md:text-md">Real words from real customers</p>
        </div>
      </div>

      {/* Full-width marquee — intentionally outside container so it bleeds edge to edge */}
      <div className="relative w-full overflow-hidden">
        {/* Fade edges */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10 bg-gradient-to-r from-white to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10 bg-gradient-to-l from-white to-transparent" />

        <div className="flex w-max animate-marquee hover:pause">
          {doubled.map((t, i) => (
            <TestimonialCard key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  );
}