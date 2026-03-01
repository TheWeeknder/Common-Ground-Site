// home/components/Loader.tsx
"use client";

import { useEffect, useState } from "react";

export function Loader() {
  const [lift, setLift] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const liftTimer = setTimeout(() => setLift(true), 1500);
    const hideTimer = setTimeout(() => setHidden(true), 2500);

    return () => {
      clearTimeout(liftTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-background transition-transform duration-1000 ease-in-out ${
        lift ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <img
        src="/your-logo.png"
        alt="PLACE LOGO HERE"
        className="w-36 animate-fade-in"
      />
    </div>
  );
}