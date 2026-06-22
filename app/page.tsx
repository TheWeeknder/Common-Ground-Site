import { Hero } from "@/home/components/Hero";
import { Carousel } from "@/home/components/Carousel";
import  Testimonials from "@/home/components/Testimonials";
import { MainServices } from "@/home/components/MainServices";
import { Team } from "@/home/components/Team";
import  TeamSection from "@/home/components/TeamSection";
import { BookingSection } from "@/home/components/BookingSection"; 
import  LocationHoursSection  from "@/home/components/LocationHoursSection";
import { Footer4 } from "@/gallery/components/Footer4";
import  Footer  from "@/home/components/Footer";
import { Loader } from "@/home/components/Loader";
import { FadingParagraph } from "@/home/components/FadingParagraph";
import CurvedLoop from '@/home/components/CurvedLoop';
import  ExploreWorkSectionInverted from '@/home/components/ExploreWorkSectionInverted';
import  ExploreWorkSection from '@/home/components/ExploreWorkSection';
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
      <ExploreWorkSection />
      <ExploreWorkSectionInverted />
      {/* <FadingParagraph /> */}
      <TeamSection />
      {/* <Gallery25 /> */}
      {/* <MainServices /> */}
      {/* <Team /> */}
      {/* <Testimonials /> */}
      {/* <BookingSection /> */}
      <LocationHoursSection /> 
      <Footer />
    </>
  );
}
