import { Faq7 } from "@/faqs/components/Faq7";
import { Cta31 } from "@/faqs/components/Cta31";
import { Footer } from "@/home/components/Footer";
import { PageHeader } from "@/faqs/components/PageHeader";

export default function FaqsPage() {
  return (
    <>
      <PageHeader title="ABOUT US" subtitle="Our story & team" />
      <Faq7/>
      {/* <Cta31 /> */}
      <Footer />
    </>
  );
}