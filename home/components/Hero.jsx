"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { SiteNav } from "@/components/SiteNav";
import { INSTAGRAM_URL } from "@/lib/site";

export function Hero() {
  return (
    <div className="relative min-h-[85svh] overflow-hidden">
      {/* Background Image with Overlay */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ scale: 1.1 }}
      >
        <Image
          src="/assets/white_background_image.jpg"
          alt="Barber cutting hair"
          fill
          priority                // preloads as high-priority, fixes LCP
          quality={80}            // 80 is visually lossless, ~30% smaller file
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/50" />
        {/* White wash so the black logo stands out; raise/lower /30 to taste */}
        <div className="absolute inset-0" />
      </motion.div>

      <SiteNav />

      {/* Hero Content */}
      <div className="relative z-20 min-h-[85svh] flex flex-col justify-center px-6 md:px-12 max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h1 className="mb-2 sm:mb-3">
            {/* Width scales with the viewport (85vw on phones) but is capped
                at 40rem so it doesn't get oversized on large screens. */}
            <Image
              src="/final_commonground_logo_textonly.png"
              alt="Common Ground"
              width={1479}
              height={141}
              priority
              sizes="(min-width: 768px) 60rem, 85vw"
              style={{ width: "min(85vw, 60rem)" }}
              className="mx-auto h-auto select-none"
              draggable={false}
            />
          </h1>
          <p className="font-titling font-normal text-center lg:text-center text-lg sm:text-2xl md:text-5xl lg:text-[1.2rem] xl:text-[2.5rem] mb-8 sm:mb-10 md:mb-12 leading-[1.0] text-white">
            BARBERSHOP
          </p>
          {/* <p className="text-center lg:text-left text-base sm:text-lg md:text-2xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
            Experience the art of traditional barbering with contemporary precision. Where craftsmanship meets luxury.
          </p> */}
          
          <div className="flex flex-row sm:flex-row gap-6 justify-center">
            <Link
              href={INSTAGRAM_URL}
              className="
                relative top-0
                bg-transparent text-white text-xs sm:text-sm
                px-8 py-4 sm:px-10 sm:py-[18px]
                font-bold tracking-[0.12em] rounded-full
                border-2 border-[#ffffff]
                backdrop-blur-[2px]
                hover:bg-white/5
                active:scale-[0.98]
                transition-all duration-[120ms]
                touch-manipulation min-h-[44px] sm:min-h-[68px]
                w-fit mx-auto sm:mx-0
                inline-flex items-center justify-center
              "
            >
              INSTAGRAM
            </Link>
            {/* <button className="text-white text-xs sm:text-sm border-2 border-white px-5 py-3 sm:px-8 sm:py-4 hover:bg-white hover:text-black active:bg-gray-200 transition-all duration-300 tracking-widest touch-manipulation min-h-[44px] sm:min-h-[68px] font-medium w-fit mx-auto sm:mx-0">
              VIEW SERVICES
            </button> */}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      {/* <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 text-white">
        <span className="text-xs tracking-widest text-gray-300">COMING SOON</span>
        <div className="w-px h-18 bg-gradient-to-b from-[#ffffff] to-transparent" />
      </div> */}
    </div>
  );
}