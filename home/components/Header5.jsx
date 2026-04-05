"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative min-h-screen overflow-hidden"> 
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/chaps-co-chTK1JJfok0-unsplash.jpg"
          alt="Barber cutting hair"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90" />
      </div>

      {/* Navigation */}
      <nav className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <Link href="/">
            <img
              src="/placeholderlogoforhero.svg"
              alt="Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-10 items-center text-white">
            <Link href="/about" className="text-sm tracking-widest hover:text-amber-400 transition-colors">ABOUT US</Link>
            <Link href="/services" className="text-sm tracking-widest hover:text-amber-400 transition-colors">SERVICES</Link>
            <Link href="/gallery" className="text-sm tracking-widest hover:text-amber-400 transition-colors">GALLERY</Link>
            <Link href="/faqs" className="text-sm tracking-widest hover:text-amber-400 transition-colors">FAQs</Link>
            <Link
              href="/book"
              className="bg-amber-400 text-black px-6 py-2.5 text-sm tracking-widest hover:bg-amber-300 transition-colors duration-300"
            >
              BOOK NOW
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, x: "100%" }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed inset-0 z-50 bg-black flex flex-col px-8 py-10"
            >
              <div className="flex justify-between items-center mb-16">
                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                  <img src="/logoipsum-274.svg" alt="Logo" className="h-10" />
                </Link>
                <button onClick={() => setMobileMenuOpen(false)} className="text-white p-2">
                  <X className="w-8 h-8" />
                </button>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                {[
                  { href: "/about", label: "ABOUT US" },
                  { href: "/services", label: "SERVICES" },
                  { href: "/gallery", label: "GALLERY" },
                  { href: "/faqs", label: "FAQs" },
                ].map(({ href, label }, i) => (
                  <motion.div key={href} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 + 0.1 }}>
                    <Link href={href} className="block text-3xl font-light text-white tracking-widest py-5 border-b border-white/10 hover:text-amber-400 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <Link href="/book" className="bg-amber-400 text-black text-center py-5 text-md tracking-widest font-semibold hover:bg-amber-300 transition-colors" onClick={() => setMobileMenuOpen(false)}>
                BOOK NOW
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 min-h-screen flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="font-serif font-medium text-center lg:text-center text-5xl sm:text-7xl md:text-8xl lg:text-[4.2rem] xl:text-[5.5rem] mb-6 leading-[1.0] text-white">
            COMMON GROUND<br />
            BARBERSHOP
          </h1>
          
          {/* <p className="text-center lg:text-left text-base sm:text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
            Experience the art of traditional barbering with contemporary precision. Where craftsmanship meets luxury.
          </p> */}
          
          <div className="flex flex-row sm:flex-row gap-6 justify-center">
            <button className="bg-[#D4AF37] text-xs sm:text-sm text-black px-5 py-3 sm:px-8 sm:py-4 hover:bg-[#c4a02e] active:bg-[#b39728] transition-all duration-300 tracking-widest touch-manipulation min-h-[44px] sm:min-h-[68px] font-medium w-fit mx-auto sm:mx-0">
              BOOK APPOINTMENT
            </button>
            {/* <button className="text-white text-xs sm:text-sm border-2 border-white px-5 py-3 sm:px-8 sm:py-4 hover:bg-white hover:text-black active:bg-gray-200 transition-all duration-300 tracking-widest touch-manipulation min-h-[44px] sm:min-h-[68px] font-medium w-fit mx-auto sm:mx-0">
              VIEW SERVICES
            </button> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white">
        <span className="text-xs tracking-widest text-gray-300">SCROLL</span>
        <div className="w-px h-18 bg-gradient-to-b from-[#D4AF37] to-transparent" />
      </div>
    </div>
  );
}