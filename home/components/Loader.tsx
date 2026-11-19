// home/components/Loader.tsx
"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

// Width the old wordmark's letters filled (15.5rem image, ~88% of it is ink).
const TARGET_WIDTH = "13.6rem";

// Module-level flag: survives client-side navigation between pages, but resets
// on a fresh load / refresh. So the loader only plays once per visit.
let hasPlayed = false;

export function Loader() {
  const [lift, setLift] = useState(false);
  const [skip] = useState(hasPlayed); // captured once on mount
  const [hidden, setHidden] = useState(skip);
  const [fontSize, setFontSize] = useState<string | null>(null);
  const boxRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (skip) return;
    hasPlayed = true;
    const liftTimer = setTimeout(() => setLift(true), 550);
    const hideTimer = setTimeout(() => setHidden(true), 1700);

    return () => {
      clearTimeout(liftTimer);
      clearTimeout(hideTimer);
    };
  }, [skip]);

  // Scale the title so its rendered width matches TARGET_WIDTH exactly,
  // measured after the Castoro Titling font has loaded.
  useLayoutEffect(() => {
    let cancelled = false;
    const text = textRef.current;
    if (!text) return;
    const fit = () => {
      const box = boxRef.current;
      if (!box || cancelled) return;
      text.style.fontSize = "60px";
      const measured = text.scrollWidth;
      text.style.fontSize = "";
      if (measured > 0) setFontSize(`${(100 * box.clientWidth) / measured}px`);
    };
    // Explicitly load this element's font face. `document.fonts.ready` alone
    // resolves immediately when nothing is downloading yet (e.g. client-side
    // navigation back from a page that doesn't use the font), which would
    // measure the fallback font and size the text wrong.
    const { fontWeight, fontFamily } = getComputedStyle(text);
    document.fonts
      .load(`${fontWeight} 60px ${fontFamily}`, "COMMON GROUND")
      .catch(() => undefined)
      .then(fit);
    return () => {
      cancelled = true;
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[60] flex items-center justify-center bg-neutral-white transition-transform duration-1000 ease-in-out ${
        lift ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <div ref={boxRef} style={{ width: TARGET_WIDTH }} className="flex justify-center">
        <h1
          ref={textRef}
          aria-label="Common Ground Barbershop"
          style={fontSize ? { fontSize } : undefined}
          className={`font-titling font-semibold whitespace-nowrap leading-none text-black ${
            fontSize ? "animate-fade-in" : "opacity-0"
          }`}
        >
          COMMON GROUND
        </h1>
      </div>
    </div>
  );
}
