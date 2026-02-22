"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";

export function Product8() {
  return (
    <section id="relume" className="px-[5%] py-16 md:py-24 lg:py-28">
      <div className="container">
        <div className="mb-12 grid grid-cols-1 items-end gap-12 md:mb-18 md:grid-cols-[1fr_max-content] lg:mb-20 lg:gap-20">
          <div className="max-w-lg">
            <h1 className="mb-3 text-5xl font-bold md:mb-4 md:text-7xl lg:text-8xl">
              SERVICES
            </h1>
          </div>
          <div className="hidden md:flex">
            <Button variant="secondary" size="primary" title="View all">
              View all
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 justify-items-start gap-x-5 gap-y-12 md:grid-cols-2 md:gap-x-8 md:gap-y-16 lg:grid-cols-3 lg:gap-x-12">
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Classic Fade</h3>
                <div className="text-sm">Professional</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$85</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="BOOK"
              className="mt-3 w-full md:mt-4"
            >
              BOOK
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Beard & Mustache Grooming</h3>
                <div className="text-sm">Steel</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$120</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="BOOK"
              className="mt-3 w-full md:mt-4"
            >
              BOOK
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Straight Razor Shaves</h3>
                <div className="text-sm">Natural</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$28</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="BOOK"
              className="mt-3 w-full md:mt-4"
            >
              BOOK
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Hair Coloring</h3>
                <div className="text-sm">Premium</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$35</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="BOOK"
              className="mt-3 w-full md:mt-4"
            >
              BOOK
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Hot Shaves</h3>
                <div className="text-sm">Vintage</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$65</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="BOOK"
              className="mt-3 w-full md:mt-4"
            >
              BOOK
            </Button>
          </div>
          <div>
            <a className="mb-3 block aspect-[5/6] md:mb-4">
              <img
                src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
                alt="Relume placeholder image"
                className="size-full object-cover"
              />
            </a>
            <a className="flex justify-between md:text-md">
              <div className="mr-4">
                <h3 className="font-semibold">Scalp Treatments</h3>
                <div className="text-sm">Signature</div>
              </div>
              <div className="text-md font-semibold md:text-lg">$42</div>
            </a>
            <Button
              variant="secondary"
              size="sm"
              title="BOOK"
              className="mt-3 w-full md:mt-4"
            >
              BOOK
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
