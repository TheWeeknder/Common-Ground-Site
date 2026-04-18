"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export function PageHeader({ title, subtitle }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="relative overflow-hidden h-[340px] md:h-[400px]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/chaps-co-chTK1JJfok0-unsplash.jpg"
          alt="Barber cutting hair"
          className="w-full h-full object-cover object-top"
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
              className="
                relative top-0
                bg-[#D4AF37] text-[#1a1206] text-xs sm:text-sm
                px-7 py-3.5
                font-bold tracking-[0.12em] rounded-[10px]
                shadow-[0_4px_0_#8f6e10]
                hover:bg-[#e0bc45] hover:shadow-[0_6px_0_#8f6e10] hover:-top-0.5
                active:shadow-[0_1px_0_#8f6e10] active:top-1
                transition-all duration-[120ms]
                touch-manipulation
                w-fit mx-auto sm:mx-0
              "
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
                  <img src="/placeholderlogoforhero.svg" alt="Logo" className="h-10" />
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
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 + 0.1 }}
                  >
                    <Link
                      href={href}
                      className="block text-3xl font-light text-white tracking-widest py-5 border-b border-white/10 hover:text-amber-400 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <Link
                href="/book"
                className="bg-amber-400 text-black text-center py-5 text-md tracking-widest font-semibold hover:bg-amber-300 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                BOOK NOW
              </Link>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Page Title */}
      <div className="relative z-20 h-full flex flex-col justify-center items-center px-6 md:px-12 max-w-7xl mx-auto w-full">
        <h1 className="font-serif text-7xl sm:text-8xl md:text-9xl text-white font-medium tracking-wide text-center">
          {title} 
        </h1>
        {subtitle && (
          <p className="text-gray-300 text-sm sm:text-base mt-2 tracking-widest uppercase text-center">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
