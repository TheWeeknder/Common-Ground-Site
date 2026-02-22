import { Footer4 } from "@/gallery/components/Footer4";
import { Gallery4_1 } from "@/gallery/components/Gallery4_1";
import { Gallery4 } from "@/gallery/components/Gallery4";
import { Gallery24 } from "@/gallery/components/Gallery24";
import { Navbar1 } from "@/gallery/components/Navbar1";

export default function GalleryPage() {
  return (
    <>
        <Navbar1 />
        <Gallery4 />
        <Gallery4_1 />
        <Gallery24 />
        <Footer4 />
    </>
  );
}