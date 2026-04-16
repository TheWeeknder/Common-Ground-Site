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
export default function Page() {
  return (
    <>
      <Loader />
      <Hero />
      <Carousel />
      <FadingParagraph />
      {/* <StatementBanner /> */}
      <MainServices />
      <BookingSection />
      <Team />
      {/* <Cta31 /> */}
      <Testimonials />
      <LocationHours /> 
      <Footer />
    </>
  );
}
