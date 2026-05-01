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
import { StatementBanner } from '@/home/components/StatementBanner';


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
      {/* <CurvedLoop2
        marqueeText="GOOD VIBES ✦ GREAT BARBERS ✦ GREATER CUTS ✦"
        speed={2}
        curveAmount={0}
        direction="left"
        bend="down"
        bgClassName="bg-zinc-900"
        textColor="white"
      /> */}
      <Carousel />
      <FadingParagraph />
      <MainServices />
      <BookingSection />
      {/* <Team /> */}
      <Cta31 />
      <StatementBanner />
      <Testimonials />
      <LocationHours /> 
      <Footer />
    </>
  );
}
