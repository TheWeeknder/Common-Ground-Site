"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Service Item interface
 */
interface ServiceItem {
  name: string;
  price: string;
  description?: string;
}

/**
 * Services data array - easy to swap out
 */
const services: ServiceItem[] = [
  { name: "WOMEN'S CUT W/ SHAMPOO & BLOWDRY", price: "$65+" },
  { name: "MEN'S HAIRCUT", price: "$45" },
  { name: "KID'S CUT 10 & UNDER", price: "$30" },
  { name: "BANG TRIM", price: "$20" },
  { name: "SHAMPOO & BLOWDRY", price: "$45+" },
  { name: "WILDER JAMES SIGNATURE BLOWOUT", price: "$65+" },
  {
    name: "BRAZILIAN BLOWOUT SMOOTHING TREATMENT",
    price: "$350",
    description: "Includes Take Home Product + Blow-dry + Style",
  },
];

const navLinks = [
  { name: "HOME", href: "#" },
  { name: "ABOUT", href: "#" },
  { name: "SERVICES", href: "#" },
  { name: "POLICIES", href: "#" },
  { name: "JOIN THE TEAM", href: "#" },
  { name: "BOOK NOW", href: "#" },
];

/**
 * DetailedServicesSection Component
 * A pixel-faithful recreation of the detailed services section with a split-screen layout.
 */
export default function DetailedServicesSection() {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-[#f5f2f0] text-[#1a1a1a] selection:bg-[#1a1a1a] selection:text-white overflow-hidden">
      {/* Left Side: Content Section */}
      <div className="w-full md:w-1/2 p-8 md:p-16 lg:p-24 flex flex-col justify-center relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-light tracking-widest uppercase mb-8">
            Hair Cut & Styling
          </h2>
          <p className="text-sm md:text-base font-sans font-light leading-relaxed tracking-widest opacity-80 max-w-lg">
            Our expert stylists craft each cut and style to perfectly match your individual preferences. Indulge in a
            complimentary Oribe scalp scrub, followed by a luxurious rosemary oil-infused hot towel, designed to enhance
            your relaxation and elevate your experience.
          </p>
        </motion.div>

        {/* Horizontal Line Overlay (Desktop Only) */}
        <div className="hidden md:block absolute top-[25%] left-0 w-[200%] h-[1px] bg-[#1a1a1a]/20 z-20 pointer-events-none" />

        {/* Navigation Links (Desktop Only - Overlaid on the line) */}
        <div className="hidden md:flex absolute top-[25%] left-0 w-full justify-between items-center px-8 md:px-16 lg:px-24 z-30 -translate-y-1/2 pointer-events-none">
          <div className="flex gap-8 lg:gap-12 pointer-events-auto">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[10px] tracking-[0.3em] opacity-40 hover:opacity-100 transition-opacity uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="flex gap-8 lg:gap-12 pointer-events-auto translate-x-[50%]">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[10px] tracking-[0.3em] opacity-100 hover:opacity-60 transition-opacity uppercase text-white"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>

        {/* Services List */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="space-y-8 mb-12"
        >
          {services.map((service, index) => (
            <div key={index} className="group">
              <div className="flex justify-between items-baseline gap-4">
                <h3 className="text-xs md:text-sm tracking-[0.3em] uppercase font-light group-hover:opacity-60 transition-opacity">
                  {service.name}
                </h3>
                <span className="text-xs md:text-sm tracking-[0.2em] font-light opacity-60">{service.price}</span>
              </div>
              {service.description && (
                <p className="text-[10px] md:text-xs tracking-[0.1em] font-sans font-light opacity-60 mt-2 italic">
                  {service.description}
                </p>
              )}
            </div>
          ))}
        </motion.div>

      {/* Right Side: Image Section */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="w-full md:w-1/2 h-[400px] md:h-auto relative overflow-hidden"
      >
        <Image
          src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1200&auto=format&fit=crop"
          alt="Hair Cut & Styling"
          fill
          className="object-cover brightness-90 hover:scale-105 transition-transform duration-1000 ease-out"
          priority
        />
        {/* Subtle overlay to match the high-contrast aesthetic */}
        <div className="absolute inset-0 bg-black/5" />
      </motion.div>

      {/* Mobile Navigation (Visible only on small screens) */}
      <div className="md:hidden w-full p-8 bg-white/50 backdrop-blur-sm border-t border-black/5">
        <div className="flex flex-wrap justify-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="font-sans text-[10px] tracking-[0.2em] opacity-60 hover:opacity-100 transition-opacity uppercase"
            >
              {link.name}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}