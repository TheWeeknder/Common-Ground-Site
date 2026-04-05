/** @type {import('tailwindcss').Config} */

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        headline: ['var(--font-oswald)'],    // for bold statements
        body: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],  // flexible sections
        accent: ['var(--font-geist-mono)'],  // small details, labels
        geist: ['var(--font-geist-sans)'],   // extra shortcut if you want Geist Sans anywhere
      },
    },
  },
};

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
}