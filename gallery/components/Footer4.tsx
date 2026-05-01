import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import React from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const data = {
  heading: "COMMON GROUND",
  logo: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/block-1.svg",
    alt: "blocks for shadcn/ui",
    title: "Shadcnblocks.com",
    url: "https://www.shadcnblocks.com",
  },
  tagline: "Let's Connect",
  personalMessage:
    "I'm passionate about creating beautiful, functional components that make your projects shine. Let's work together to bring your vision to life.",
  ctaText: "Schedule a call",
  contact: {
    phone: "+1 (555) 123-4567",
    email: "commongroundbarbershop.com",
    location: "Directions",
  },
  menuItems: [
    {
      title: "Navigation",
      links: [
        { text: "About us", url: "#" },
        { text: "Services", url: "#" },
        { text: "Portfolio", url: "#" },
        { text: "FAQs", url: "#" },
      ],
    },
    {
      title: "Socials",
      links: [
        { text: "Twitter", url: "#" },
        { text: "Instagram", url: "#" },
        { text: "LinkedIn", url: "#" },
      ],
    },
  ],
  copyright: "© 2026 Common Ground Barbershop. All rights reserved.",
  bottomLinks: [
    { text: "FAQs", url: "#" },
    { text: "Privacy Policy", url: "#" },
    { text: "Website by JP Miranda", url: "#" },
  ],
};

interface Footer25Props {
  className?: string;
}

const Footer4 = ({ className }: Footer25Props) => {
  return (
    <section
      className={cn("bg-cover bg-center bg-no-repeat py-32 px-[5%]", className)}
      style={{
        backgroundImage:
          "url('/assets/chaps-co-chTK1JJfok0-unsplash.jpg')",
      }}
    >
      <div className="container">
        <div className="mx-auto max-w-7xl rounded-lg bg-[#302f2c] p-8 shadow-lg md:p-12">

          {/* 🔥 Logo row */}
          <div className="mb-10 flex justify-center">
            <h1 className="text-center text-6xl font-bold tracking-tight text-white sm:text-7xl md:text-8xl lg:text-10xl xl:text-11xl">
              {data.heading}
            </h1>
          </div>

          {/* 🔥 Grid */}
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12 justify-items-center">
            {data.menuItems.map((menu, idx) => (
              <div key={idx} className="text-center">
                <h3 className="mb-4 text-md font-medium tracking-wider text-white uppercase">
                  {menu.title}
                </h3>
                <ul className="space-y-3">
                  {menu.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="border-b border-transparent text-white/70 transition-all duration-300 ease-in-out hover:border-white hover:text-white"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>  
            ))}

            <div className="text-center">
              <h3 className="mb-4 text-md font-medium tracking-wider text-white uppercase">
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="text-white/70">{data.contact.phone}</li>
                <li className="text-white/70">{data.contact.email}</li>
                <li className="text-white/70">
                  {data.contact.location}
                </li>
              </ul>
            </div>
          </div>

          {/* 🔥 Bottom row */}
          <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/20 pt-8 text-center md:flex-row md:justify-between md:text-left">
            <p className="text-sm text-white/70">
              {data.copyright}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {data.bottomLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className="text-sm text-white/70 transition-colors hover:text-white"
                >
                  {link.text}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Footer4 };
