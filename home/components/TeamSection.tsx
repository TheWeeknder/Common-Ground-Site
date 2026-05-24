"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram } from "lucide-react";

/**
 * Team Member interface
 */
interface TeamMember {
  id: number;
  name: string;
  role: string;
  instagram: string;
  image: string;
}

/**
 * Team data - Easy to swap out
 */
const team: TeamMember[] = [
  {
    id: 1,
    name: "James Wilder",
    role: "Co-Founder & Master Barber",
    instagram: "@james.wilder",
    image: "/assets/person1.jpg",
  },
  {
    id: 2,
    name: "Elena Rossi",
    role: "Co-Founder & Master Barber",
    instagram: "@elena.cuts",
    image: "/assets/person2.jpg",
  },
  {
    id: 3,
    name: "Marcus Chen",
    role: "Master Barber",
    instagram: "@marcus.styles",
    image: "/assets/person3.jpg",
  },
  {
    id: 4,
    name: "Sarah Jenkins",
    role: "Master Barber",
    instagram: "@sarah.barber",
    image: "/assets/person4.jpg",
  },
  {
    id: 5,
    name: "David Kim",
    role: "Master Barber",
    instagram: "@david.kim",
    image: "/assets/person5.jpg",
  },
  {
    id: 6,
    name: "Julian Vance",
    role: "Master Barber",
    instagram: "@julian.vance",
    image: "/assets/person6.jpg",
  },
];

/**
 * TeamSection Component
 * A luxury redesign of the "Meet the Team" section.
 */
export default function TeamSection() {
  return (
    <section className="w-full bg-black py-24 px-6 md:px-12 lg:px-20 text-white selection:bg-white selection:text-black">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <div className="w-full max-w-lg mx-auto">
            <p className="text-md tracking-widest text-white uppercase font-serif">Behind the cuts</p>
            <h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl text-white uppercase font-serif">
              Meet the team
            </h2>
          </div>
        </motion.div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20">
          {team.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/5] overflow-hidden bg-neutral-900 mb-8">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover group-hover:scale-105 transition-all duration-700 ease-out"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Member Info */}
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-xl font-serif tracking-widest uppercase mb-1">
                    {member.name}
                  </h3>
                  <p className="text-[12px] tracking-[0.2em] uppercase opacity-50">
                    {member.role}
                  </p>
                </div>
                <a 
                  href={`https://instagram.com/${member.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[13px] tracking-[0.2em] uppercase opacity-50 hover:opacity-100 transition-opacity"
                >
                  <Instagram size={15} strokeWidth={1.5} />
                  <span className="hidden sm:inline">{member.instagram}</span>
                </a>
              </div>

              {/* Book Now Button */}
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full border border-white/20 py-4 text-[15px] tracking-[0.2em] uppercase hover:bg-white hover:text-black hover:border-white transition-all duration-500"
              >
                Book with {member.name.split(' ')[0]}
              </motion.button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
