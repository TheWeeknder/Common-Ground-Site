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
      className="service-category text-white"
    >
      <h2 className="category-heading text-white">{title}</h2>

      <div className="services-grid">
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
            className="service"
          >
            <div className="service-title-row">
              <h3 className="service-name text-[#e85b36]">{service.name}</h3>
              <span className="service-leader" aria-hidden="true" />
              <span className="service-price text-white">{service.price}</span>
            </div>

            <p className="service-detail text-white/80">{service.detail}</p>
            <p className="service-description text-white/70">
              {service.description}
            </p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}


