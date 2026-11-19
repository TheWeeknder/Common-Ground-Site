import Footer from "@/home/components/Footer";
import { PageHeader } from "@/components/PageHeader";
import ServiceCategory from "@/services/components/ServiceCategory";
import { serviceCategories } from "@/services/components/servicesData";

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="SERVICES" subtitle="What we are known for" />

      <main className="services-page">
        {serviceCategories.map((category) => (
          <ServiceCategory
            key={category.title}
            title={category.title}
            services={category.services}
          />
        ))}
      </main>

      <Footer />
    </>
  );
}