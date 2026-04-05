// components/ScrollingBanner.tsx

"use client";

import React from "react";

export default function StatementBanner() {
  const text = "PREMIUM CUTS • CLEAN FADE • BOOK NOW • ";

  return (
    <div className="overflow-hidden whitespace-nowrap bg-black py-4">
      <div className="flex animate-scroll hover:[animation-play-state:paused]">
        {/* Duplicate content for seamless loop */}
        <span className="text-white text-xl font-semibold mx-4">
          {text.repeat(10)}
        </span>
        <span className="text-white text-xl font-semibold mx-4">
          {text.repeat(10)}
        </span>
      </div>
    </div>
  );
}
