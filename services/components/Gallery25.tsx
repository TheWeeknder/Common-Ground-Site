"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

/**
 * Service interface for the data structure
 */
interface Service {
  id: number;
  title: string;
  description: string;
  price?: string;
  image: string;
}

/**
 * Services data array - easy to swap out as requested.
 * Using the realistic names from the screenshot.
 */
const services: Service[] = [
  {
    id: 1,
    title: "Custom Color",
    description: "Tailored hair coloring services to match your unique style and personality.",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Hair Cut & Styling",
    description: "Expert cuts and professional styling for a polished, modern look.",
    image: "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Extensions",
    description: "Premium hair extensions for added length, volume, and versatility.",
    image: "https://images.unsplash.com/photo-1620331311520-246422fd82f9?q=80&w=800&auto=format&fit=crop",
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
 * ServicesSection Component
 * A pixel-faithful recreation of the luxury salon services section.
 * 
 * Features:
 * - Next.js 14 App Router compatible
 * - Tailwind CSS for all styling
 * - Framer Motion for scroll-into-view animations
 * - Mobile-first responsive design
 * - Semantic HTML
 */
export default function Gallery25() {
  return (
    <section className="relative w-full bg-[#1a1a1a] py-24 px-6 md:px-12 lg:px-20 overflow-hidden text-white selection:bg-white selection:text-black">
      {/* Background Watermark Logo "WJ" */}
      <div className="absolute left-[-5%] top-[20%] md:top-[15%] opacity-[0.07] pointer-events-none select-none z-0">
        <span className="text-[15rem] md:text-[15rem] font-serif leading-none tracking-tighter">
          COMMONGROUND
        </span>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-20 md:mb-28"
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light tracking-[0.0em] mb-10 uppercase leading-[1.1]">
            Luxury Hair Services,
            <br />
            Curated For You
          </h2>
          <p className="max-w-2xl mx-auto text-sm md:text-base font-sans font-light leading-relaxed opacity-70 tracking-widest px-4">
            As an Oribe-exclusive salon, we proudly offer their high-performance products to ensure your hair
            not only looks fabulous but feels nourished and healthy, every step of the way.
          </p>
        </motion.div>

        {/* Services Grid & Navigation Overlay */}
        <div className="relative">
          {/* Horizontal Line - Desktop Only (positioned to cut through the lower part of cards) */}
          {/* <div className="hidden md:block absolute bottom-[18%] left-[-5%] right-[-5%] h-[0.5px] bg-white/30 z-40" /> */}

          {/* Desktop Navigation Links (Overlaid on the line)
          <div className="hidden md:flex absolute bottom-[18%] left-0 w-full justify-between items-center z-50 -translate-y-1/2 pointer-events-none">
            <div className="flex gap-16 pointer-events-auto">
              {navLinks.slice(0, 3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-[10px] tracking-[0.3em] opacity-80 hover:opacity-100 transition-all duration-300 uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="flex gap-16 pointer-events-auto">
              {navLinks.slice(3).map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="font-sans text-[10px] tracking-[0.3em] opacity-80 hover:opacity-100 transition-all duration-300 uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div> */}

          {/* Grid of Service Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-6 lg:gap-10">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 1, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-neutral-900"
              >
                {/* Service Image */}
                <div className="relative w-full h-full transition-transform duration-1000 ease-out group-hover:scale-110">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover opacity-50 group-hover:opacity-70 transition-opacity duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
                </div>

                {/* Service Title Overlay (Centered) */}
                <div className="absolute inset-0 flex items-center justify-center p-8 text-center z-30">
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-serif font-light tracking-[0.0em] uppercase leading-tight drop-shadow-2xl">
                    {service.title}
                  </h3>
                </div>

                {/* Logo/Brand Overlay for the middle card (as seen in screenshot) */}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation Links
        <div className="md:hidden mt-16 relative">
          <div className="w-full h-[0.5px] bg-white/20 mb-10" />
          <div className="flex flex-wrap justify-center items-center gap-x-10 gap-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-sans text-[10px] tracking-[0.3em] opacity-70 hover:opacity-100 transition-opacity uppercase"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div> */}

        {/* View All Services Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-20 md:mt-28 text-center"
        >
          <button className="group relative overflow-hidden bg-white text-black px-12 py-5 text-[10px] tracking-[0.4em] uppercase transition-all duration-300 hover:bg-neutral-100 active:scale-95">
            <span className="relative z-10">View All Services</span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}



