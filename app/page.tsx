import { Hero } from "@/home/components/Hero";
import { Carousel } from "@/home/components/Carousel";
import TeamSection from "@/home/components/TeamSection";
import LocationHoursSection from "@/home/components/LocationHoursSection";
import Footer from "@/home/components/Footer";
import { Loader } from "@/home/components/Loader";
import ExploreWorkSection from "@/home/components/ExploreWorkSection";
import ExploreWorkSectionInverted from "@/home/components/ExploreWorkSectionInverted";

export default function Page() {
  return (
    <>
      <Loader />
      <Hero />
      <Carousel />
      <ExploreWorkSection />
      <ExploreWorkSectionInverted />
      <TeamSection />
      <LocationHoursSection />
      <Footer />
    </>
  );
}
