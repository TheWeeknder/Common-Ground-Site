"use client";

import React from "react";
import { motion } from "framer-motion";

/**
 * LocationHoursSectionFullWidth Component
 * A full-width interactive map section for the salon.
 * 
 * Features:
 * - Full-width and full-height (viewport) map
 * - Sophisticated overlay for the section title
 * - Interactive Google Maps integration
 * - Responsive design
 */
export default function LocationHoursSection() {
  return (
    <section className="relative w-full h-[60vh] md:h-[40vh] bg-black overflow-hidden">
      
      {/* Section Title Overlay */}
      {/* <div className="absolute top-12 left-6 md:top-20 md:left-12 lg:left-20 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <span className="text-[10px] tracking-[0.5em] uppercase text-white opacity-60 mb-4 block">
            Find Us Here
          </span>
          <h2 className="text-4xl md:text-6xl font-serif font-light tracking-[0.15em] uppercase leading-tight text-white drop-shadow-2xl">
            Location & Hours
          </h2>
        </motion.div>
      </div> */}

      {/* Full-Width Interactive Map */}
      <div className="absolute inset-0 w-full h-full z-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15376.520811126347!2d-113.4940055298092!3d53.46006675465727!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a01f25e5e14e15%3A0x679d5a9dd9984630!2sT%26T%20Supermarket!5e0!3m2!1sen!2sus!4v1775167006578!5m2!1sen!2sus"
          width="100%"
          height="100%"
          // style={{ border: 0, filter: "grayscale(1) contrast(1.2) brightness(0.8)" }}
          allowFullScreen={true}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Salon Location Map"
          className=" opacity-80 hover:opacity-100 transition-opacity duration-500"
        ></iframe>
      </div>

      {/* Bottom Gradient Overlay for smooth transition to next section */}
      {/* <div className="absolute bottom-0 left-0 w-full h-30 bg-gradient-to-t from-black to-transparent z-20 pointer-events-none" /> */}
      
      {/* Brand Tag Overlay */}
      {/* <div className="absolute bottom-12 right-6 md:right-12 lg:right-20 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="bg-white text-black p-6 md:p-8 shadow-2xl"
        >
          <p className="text-[10px] md:text-xs tracking-[0.4em] uppercase font-bold mb-1">Wilder James</p>
          <p className="text-[9px] md:text-[10px] tracking-[0.2em] uppercase opacity-60">Salon & Spa</p>
        </motion.div>
      </div> */}

    </section>
  );
}