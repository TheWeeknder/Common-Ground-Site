import { Navbar1 } from "@/home/components/Navbar1";
import { Header5 } from "@/home/components/Header5";
import { Header78 } from "@/home/components/Header78";
import { Layout1 } from "@/home/components/Layout1";
import { Layout423 } from "@/home/components/Layout423";
import { Layout141 } from "@/home/components/Layout141";
import { Stats10 } from "@/home/components/Stats10";
import { Stats10B } from "@/home/components/Stats10B"; 
import { Contact13 } from "@/home/components/Contact13";
import { Footer4 } from "@/home/components/Footer4";
import { Loader } from "@/home/components/Loader";

export default function Page() {
  return (
    <>
      <Loader />
      <Navbar1 />
      <Header5 />
      <Header78 />
      <Layout1 />
      <Stats10B />
      <Layout423 />
      <Layout141 />
      <Stats10 />
      <Contact13 />
      <Footer4 />
    </>
  );
}
