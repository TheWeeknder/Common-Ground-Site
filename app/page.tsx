import { Hero } from "@/home/components/Hero";
import { Carousel } from "@/home/components/Carousel";
import { Testimonials } from "@/home/components/Testimonials";
import { MainServices } from "@/home/components/MainServices";
import { Team } from "@/home/components/Team";
import { Cta31 } from "@/home/components/Cta31";
import { BookingSection } from "@/home/components/BookingSection"; 
import { LocationHours } from "@/home/components/LocationHours";
import { Footer4 } from "@/gallery/components/Footer4";
import  Footer  from "@/home/components/Footer";
import { Loader } from "@/home/components/Loader";
import { FadingParagraph } from "@/home/components/FadingParagraph";
import CurvedLoop from '@/home/components/CurvedLoop';
import { CurvedLoop2 } from '@/home/components/CurvedLoop2';
import  StatementBanner from '@/home/components/StatementBanner';
import Gallery25 from "@/services/components/Gallery25";


export default function Page() {
  return (
    <>
      <Loader />
      <Hero />
      {/* <CurvedLoop
        marqueeText="Common ✦ Ground ✦ Barbershop ✦"
        speed={2}
        curveAmount={0}
        direction="left"
        bend="up"
        bgClassName="bg-zinc-900"
        textColor="white"
      /> */}
      <Carousel />
      <FadingParagraph />
      <Gallery25 />
      {/* <MainServices /> */}
      {/* <Team /> */}
      <Cta31 />
      <StatementBanner />
      <Testimonials />
      {/* <CurvedLoop2 /> */}
      <BookingSection />
      <LocationHours /> 
      <Footer />
    </>
  );
}
