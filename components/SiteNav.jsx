"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { BOOKING_URL, LOGO_SRC, NAV_LINKS } from "@/lib/site";

export function SiteNav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-30 px-6 md:px-12 py-8">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image src={LOGO_SRC} alt="Common Ground logo" width={70} height={30} priority />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex gap-10 items-center text-white">
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className="text-sm tracking-widest hover:text-amber-400 transition-colors">
              {label}
            </Link>
          ))}
          <Link
            href={BOOKING_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="
              relative top-0
              bg-transparent text-white text-xs
              px-5 py-2.5
              font-bold tracking-[0.12em] rounded-full
              border-2 border-[#ffffff]
              hover:bg-white/5
              active:scale-[0.98]
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
              <Link href="/" onClick={closeMenu}>
                <Image src={LOGO_SRC} alt="Common Ground logo" width={100} height={40} />
              </Link>
              <button onClick={closeMenu} className="text-white p-2" aria-label="Close menu">
                <X className="w-8 h-8" />
              </button>
            </div>
            <div className="flex flex-col gap-2 flex-1">
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.div
                  key={href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.07 + 0.1 }}
                >
                  <Link
                    href={href}
                    className="block text-3xl font-light text-white tracking-widest py-5 border-b border-white/10 hover:text-amber-400 transition-colors"
                    onClick={closeMenu}
                  >
                    {label}
                  </Link>
                </motion.div>
              ))}
            </div>
            <Link
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="
                bg-transparent text-white text-sm
                py-4 text-center
                font-bold tracking-[0.12em] rounded-full
                border-2 border-[#ffe590]
                hover:bg-white/5
                active:scale-[0.98]
                transition-all duration-[120ms]
                w-full
              "
              onClick={closeMenu}
            >
              BOOK NOW
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
