import { Layout1 } from "@/about/components/Layout1";
import { Footer } from "@/home/components/Footer";
import { Header76 } from "@/about/components/Header76";
import { PageHeader } from "@/gallery/components/PageHeader";
// ... import other about components

export default function AboutPage() {
  return (
    <>
      <PageHeader title="ABOUT US" subtitle="Our story & team" />
      <Layout1 />
      <Header76 />
      <Footer />
    </>
  );
}