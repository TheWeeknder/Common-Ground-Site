import { Footer4 } from "@/services/components/Footer4";
import { PageHeader } from "@/services/components/PageHeader";
import { Gallery25 } from "@/services/components/Gallery25";
// ... other services components

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="SERVICES" subtitle="What we are known for" />
      <Gallery25 />
      <Footer4 />
    </>
  );
}