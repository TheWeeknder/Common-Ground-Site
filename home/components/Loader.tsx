// home/components/Loader.tsx
"use client";

import { useEffect, useRef, useState } from "react";

// Fixed logo width so the loader looks identical on every screen size.
// 16rem (256px) still fits comfortably on the narrowest phones (320px).
const LOGO_WIDTH = "16rem";

// Module-level flag: survives client-side navigation between pages, but resets
// on a fresh load / refresh. So the loader only plays once per visit.
let hasPlayed = false;

export function Loader() {
  const [lift, setLift] = useState(false);
  const [skip] = useState(hasPlayed); // captured once on mount
  const [hidden, setHidden] = useState(skip);
  const [loaded, setLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

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

  // Fade the logo in once it's decoded. decode() resolves even if the image
  // already loaded from cache before React hydrated.
  useEffect(() => {
    let cancelled = false;
    imgRef.current
      ?.decode()
      .catch(() => undefined)
      .then(() => {
        if (!cancelled) setLoaded(true);
      });
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
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={imgRef}
        src="/final_commonground_logo_notext.png"
        alt="Common Ground Barbershop"
        width={1635}
        height={806}
        fetchPriority="high"
        decoding="async"
        style={{ width: LOGO_WIDTH }}
        className={`h-auto max-w-none select-none ${loaded ? "animate-fade-in" : "opacity-0"}`}
        draggable={false}
      />
    </div>
  );
}
