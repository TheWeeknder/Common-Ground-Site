import  FAQSection from "@/faqs/components/FAQSection";
import { Cta31 } from "@/faqs/components/Cta31";
import  Footer  from "@/home/components/Footer";
import { PageHeader } from "@/about/components/PageHeader";

export default function FaqsPage() {
  return (
    <>
      <PageHeader title="FAQs" subtitle="Questions & Answers" />
      <FAQSection/>
      {/* <Cta31 /> */}
      <Footer />
    </>
  );
}