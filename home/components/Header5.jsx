"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative h-screen overflow-hidden"> 
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
              src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
              alt="Logo"
              className="h-10"
            />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex gap-10 items-center text-white">
            <Link href="/about" className="text-md tracking-widest hover:text-amber-400 transition-colors">ABOUT US</Link>
            <Link href="/services" className="text-md tracking-widest hover:text-amber-400 transition-colors">SERVICES</Link>
            <Link href="/gallery" className="text-md tracking-widest hover:text-amber-400 transition-colors">GALLERY</Link>
            <Link href="/faqs" className="text-md tracking-widest hover:text-amber-400 transition-colors">FAQs</Link>
            <Link
              href="/book"
              className="bg-amber-400 text-black px-6 py-2.5 text-md tracking-widest hover:bg-amber-300 transition-colors duration-300"
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
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-black/95 backdrop-blur-lg py-8 px-6 z-50 text-white">
            <div className="flex flex-col gap-2">
              {[
                { href: "/about", label: "ABOUT US" },
                { href: "/services", label: "SERVICES" },
                { href: "/gallery", label: "GALLERY" },
                { href: "/faqs", label: "FAQs" },
              ].map(({ href, label }) => (
                <Link
                  key={href}
                  href={href}
                  className="text-base tracking-widest hover:text-amber-400 transition-colors py-3 border-b border-white/10"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/book"
                className="mt-4 bg-amber-400 text-black text-center px-6 py-4 text-sm tracking-widest hover:bg-amber-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                BOOK NOW
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          {/* Gold Accent Line */}
          <div className="w-20 h-1 bg-[#D4AF37] mb-8"></div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl mb-6 leading-[1.05] font-serif font-normal text-white" style={{ fontFamily: 'var(--font-serif)' }}>
            Premium Cuts.<br />
            Modern Style.
          </h1>
          
          <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-xl leading-relaxed">
            Experience the art of traditional barbering with contemporary precision. Where craftsmanship meets luxury.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6">
            <button className="bg-[#D4AF37] text-md text-black px-10 py-5 hover:bg-[#c4a02e] active:bg-[#b39728] transition-all duration-300 tracking-widest touch-manipulation min-h-[56px]">
              BOOK APPOINTMENT
            </button>
            <button className="text-white text-md border-2 border-white px-10 py-5 hover:bg-white hover:text-black active:bg-gray-200  transition-all duration-300 tracking-widest touch-manipulation min-h-[56px]">
              VIEW SERVICES
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white">
        <span className="text-xs tracking-widest text-gray-400">SCROLL</span>
        <div className="w-px h-16 bg-gradient-to-b from-amber-400 to-transparent" />
      </div>
    </div>
  );
}