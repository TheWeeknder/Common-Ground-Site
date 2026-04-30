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
    email: "hello@artiststudio.com",
    location: "NYC",
    timezone: "EST",
  },
  menuItems: [
    {
      title: "Portfolio",
      links: [
        { text: "Overview", url: "#" },
        { text: "Projects", url: "#" },
        { text: "Pricing", url: "#" },
        { text: "About", url: "#" },
      ],
    },
    {
      title: "Social",
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
        <div className="mx-auto max-w-7xl rounded-lg bg-background p-8 shadow-lg md:p-12">

          {/* 🔥 Logo row */}
          <div className="mb-10 flex justify-center">
            <a href="#">
              <img
                src="/assets/mitchell-orr-xO8OpsasyZA-unsplash.jpg"
                alt="Logo"
                className="h-12 w-auto"
              />
            </a>
          </div>

          {/* 🔥 Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 lg:gap-12 justify-items-center">
            {data.menuItems.map((menu, idx) => (
              <div key={idx} className="text-center">
                <h3 className="mb-4 text-sm font-medium tracking-wider text-primary uppercase">
                  {menu.title}
                </h3>
                <ul className="space-y-3">
                  {menu.links.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.url}
                        className="border-b border-transparent text-muted-foreground transition-all duration-300 ease-in-out hover:border-primary hover:text-primary"
                      >
                        {link.text}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="text-center">
              <h3 className="mb-4 text-sm font-medium tracking-wider text-primary uppercase">
                Contact
              </h3>
              <ul className="space-y-3">
                <li className="text-muted-foreground">{data.contact.phone}</li>
                <li className="text-muted-foreground">{data.contact.email}</li>
                <li className="text-muted-foreground">
                  {data.contact.location} • {data.contact.timezone}
                </li>
              </ul>
            </div>
          </div>

          {/* 🔥 Bottom row */}
          <div className="text-center mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
            <p className="text-sm text-muted-foreground">{data.copyright}</p>
            <div className="flex gap-4">
              {data.bottomLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.url}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
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
