/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./home/**/*.{js,ts,jsx,tsx}",
    "./about/**/*.{js,ts,jsx,tsx}",
    "./services/**/*.{js,ts,jsx,tsx}",
    "./gallery/**/*.{js,ts,jsx,tsx}",
    "./faqs/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@relume_io/relume-ui/dist/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("@relume_io/relume-tailwind")],
  theme: {
    extend: {
      fontFamily: {
        headline: ['var(--font-oswald)'],
        body: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        accent: ['var(--font-geist-mono)'],
        geist: ['var(--font-geist-sans)'],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
};