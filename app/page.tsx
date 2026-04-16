import { Hero } from "@/home/components/Hero";
import { Carousel } from "@/home/components/Carousel";
import { Testimonials } from "@/home/components/Testimonials";
import { MainServices } from "@/home/components/MainServices";
import { Team } from "@/home/components/Team";
import { Cta31 } from "@/home/components/Cta31";
import { BookingSection } from "@/home/components/BookingSection"; 
import { LocationHours } from "@/home/components/LocationHours";
import { Footer } from "@/home/components/Footer";
import { Loader } from "@/home/components/Loader";
import { FadingParagraph } from "@/home/components/FadingParagraph";
import CurvedLoop from '@/home/components/CurvedLoop';
import CurvedLoop2 from '@/home/components/CurvedLoop2';


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
      {/* <StatementBanner /> */}
      <MainServices />
      <BookingSection />
      <Team />
      {/* <Cta31 /> */}
      <Testimonials />
      <LocationHours /> 
      <CurvedLoop2
        marqueeText="Common ✦ Ground ✦ Barbershop ✦"
        speed={2}
        curveAmount={0}
        direction="right"
        bend="down"
        bgClassName="bg-zinc-50"
        textColor="black"
      />
      <Footer />
    </>
  );
}
