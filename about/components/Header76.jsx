"use client";

import React from "react";

export function Header76() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="grid grid-cols-1 gap-y-12 md:grid-cols-2 md:items-center md:gap-x-12 lg:gap-x-20">
          <div>
            <img
              src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
              className="w-full object-cover"
              alt="Relume placeholder image"
            />
          </div>
          <div>
            <h1 className="rb-5 mb-5 text-4xl font-bold md:mb-6 md:text-6xl lg:text-7xl">
              Everyone deserves the same level of quality regardless of their background or stage in their lives.
            </h1>
            <p className="md:text-md">
              At Common Ground, we believe a great haircut is more than just a
              service, it's about building confidence and creating a space where
              everyone belongs. No matter your background or style, you walk in
              as you are and leave looking sharp. <br></br> <br></br> Our barbers are passionate
              about their craft, bringing precision, skill, and genuine care to
              every cut. We're here to listen, deliver exactly what you need,
              and make sure you feel valued from the moment you sit in the
              chair. <br></br> <br></br> Common Ground isn't just a barbershop, it's a community hub
              where quality meets respect, and every client leaves feeling like
              the best version of themselves. Building confidence on common
              ground.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}