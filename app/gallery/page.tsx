import { Footer4 } from "@/gallery/components/Footer4";
import { Gallery4_1 } from "@/gallery/components/Gallery4_1";
import { Gallery25 } from "@/gallery/components/Gallery25";
import { Gallery24 } from "@/gallery/components/Gallery24";
import { PageHeader } from "@/gallery/components/PageHeader";

export default function GalleryPage() {
  return (
    <>
        <PageHeader title="Portfolio" subtitle="Browse Through Our Portfolio" />
        {/* <Gallery25 /> */}
        {/* <Gallery4_1 /> */}
        <Gallery24 />
        <Footer4 />
    </>
  );
}