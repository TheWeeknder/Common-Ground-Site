"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook } from "lucide-react";

/**
 * Footer Component
 * A pixel-faithful recreation of the salon footer.
 * 
 * Features:
 * - Next.js 14 App Router compatible
 * - Tailwind CSS for all styling
 * - Framer Motion for entrance animations
 * - Mobile-first responsive design
 * - Semantic HTML (footer, nav, address, etc.)
 */
export default function Footer() {
  const navLinks = [
    { name: "HOME", href: "#" },
    { name: "ABOUT", href: "#" },
    { name: "SERVICES", href: "#" },
    { name: "POLICIES", href: "#" },
    { name: "PORTFOLIO", href: "#" },
    { name: "FAQS", href: "#" },
    { name: "BOOK NOW", href: "#" },
  ];

  return (
    <footer className="bg-black text-white py-16 px-6 md:px-12 lg:px-20 font-sans selection:bg-white selection:text-black">
      <div className="max-w-[1250px] mx-auto">
        {/* Top Section: Location, Contact, Hours */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20"
        >
          {/* Main Location Heading */}
          <div className="lg:col-span-1">
            <h2 className="text-2xl md:text-3xl font-serif font-light tracking-widest uppercase leading-tight mb-8">
              Located in the heart of
              <br />
              Edmonton, AB
            </h2>
            <div className="flex gap-6">
              <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Instagram">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="hover:opacity-60 transition-opacity" aria-label="Facebook">
                <Facebook size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-[19px] tracking-[0.1em] uppercase mb-6">Contact</h3>
            <div className="space-y-2 text-md font-light">
              <p>(123) 456-7891</p>
              <p>
                <a href="mailto:hello@wilderjamessalon.com" className="hover:underline underline-offset-4">
                  commongroundbarbershop.com
                </a>
              </p>
            </div>
          </div>

          {/* Location Details */}
          <div>
            <h3 className="text-[19px] tracking-[0.1em] uppercase mb-6">Location</h3>
            <address className="not-italic space-y-2 text-md font-light">
              <p>6767 Something Some Rd</p>
              <p>Suite 123</p>
              <p>Edmonton, AB 12345</p>
            </address>
          </div>

          {/* Salon Hours */}
          <div>
            <h3 className="text-[19px] tracking-[0.1em] uppercase mb-6">Shop Hours</h3>
            <div className="space-y-2 text-md font-light">
              <p>Monday to Friday: 9-530</p>
              <p>Saturdays: 10-530</p>
              <p>Closed Sundays</p>
            </div>
          </div>
        </motion.div>

        {/* Navigation Links Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
          className="border-t border-white/10 pt-12 pb-8"
        >
          <nav className="flex flex-wrap justify-between items-center gap-x-8 gap-y-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[14px] md:text-md tracking-[0.1em] font-light hover:opacity-60 transition-opacity uppercase"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </motion.div>

        {/* Bottom Credits */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-12"
        >
          <p className="text-[9px] tracking-[0.2em] uppercase font-light">
            Brand & Website by{" "}
            <a href="#" className="underline underline-offset-4 hover:opacity-100 transition-opacity text-blue-400">
              JP.Miranda
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}