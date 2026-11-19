import Footer from "@/home/components/Footer";
import { Gallery24 } from "@/gallery/components/Gallery24";
import { PageHeader } from "@/components/PageHeader";

export default function GalleryPage() {
  return (
    <>
      <PageHeader title="Portfolio" subtitle="Browse Through Our Portfolio" />
      <Gallery24 />
      <Footer />
    </>
  );
}
