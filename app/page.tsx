import { Hero } from "@/home/components/Hero";
import { Header78 } from "@/home/components/Header78";
import { Testimonials } from "@/home/components/Layout1";
import { Layout423 } from "@/home/components/Layout423";
import { Layout141 } from "@/home/components/Layout141";
import { Stats10 } from "@/home/components/Stats10";
import { Stats10B } from "@/home/components/Stats10B"; 
import { Contact13 } from "@/home/components/Contact13";
import { Footer4 } from "@/home/components/Footer4";
import { Loader } from "@/home/components/Loader";
import { FadingParagraph } from "@/home/components/FadingParagraph";
export default function Page() {
  return (
    <>
      <Loader />
      <Hero />
      <Header78 />
      <FadingParagraph />
      {/* <StatementBanner /> */}
      <Layout423 />
      <Stats10B />
      <Layout141 />
      <Testimonials />
      <Contact13 />
      <Footer4 />
    </>
  );
}
