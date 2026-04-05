import "./globals.css";
import type { Metadata, Viewport } from "next";
import { Oswald, Geist, Geist_Mono } from "next/font/google";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

// Headline font (masculine, statement)
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-oswald",
});

// Body / section font (clean, flexible)
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
});

// Accent font (subtle, monospaced)
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Common Ground Barbershop",
  description:
    "Experience the art of traditional barbering with contemporary precision.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${oswald.variable}
          ${geistSans.variable}
          ${geistMono.variable}
          antialiased
        `}
      >
        {children}
      </body>
    </html>
  );
}
