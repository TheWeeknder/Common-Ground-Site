"use client";

import { motion } from "framer-motion";

export type Service = {
  name: string;
  price: string;
  detail: string;
  description: string;
};

type ServiceCategoryProps = {
  title: string;
  services: Service[];
};

export default function ServiceCategory({
  title,
  services,
}: ServiceCategoryProps) {
  return (
    <section
      aria-label={title}
      className="w-full overflow-hidden bg-[#0a0a0a] rounded-sm px-6 py-12 text-white md:px-12 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-10 text-3xl font-serif uppercase tracking-wider text-white md:mb-14 md:text-7xl">
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-x-10 gap-y-10 md:grid-cols-2 md:gap-x-16 md:gap-y-14">
          {services.map((service, index) => (
            <motion.article
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="min-w-0"
            >
              <div className="flex min-w-0 items-baseline gap-3">
                <h3 className="text-lg md:text-xl lg:text-2xl font-serif font-light tracking-wide group-hover:opacity-70 transition-opacity">
                  {service.name}
                </h3>

                <span
                  aria-hidden="true"
                  className="min-w-3 flex-1 border-b border-dotted border-white/30"
                />

                <span className="shrink-0 text-base text-white md:text-lg">
                  {service.price}
                </span>
              </div>

              <p className="mt-2 text-sm font-semibold text-white/80 md:text-base">
                {service.detail}
              </p>

              <p className="mt-3 max-w-2xl text-sm leading-7 text-white/70 md:text-base">
                {service.description}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}


