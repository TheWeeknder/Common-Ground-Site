import { Footer4 } from "@/gallery/components/Footer4";
import { Gallery4_1 } from "@/gallery/components/Gallery4_1";
import { Gallery4 } from "@/gallery/components/Gallery4";
import { Gallery24 } from "@/gallery/components/Gallery24";
import { PageHeader } from "@/gallery/components/PageHeader";

export default function GalleryPage() {
  return (
    <>
        <PageHeader title="ABOUT US" subtitle="Our story & team" />
        <Gallery4 />
        <Gallery4_1 />
        <Gallery24 />
        <Footer4 />
    </>
  );
}