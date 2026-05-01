import { Faq7 } from "@/faqs/components/Faq7";
import { Cta31 } from "@/faqs/components/Cta31";
import { Footer4 } from "@/gallery/components/Footer4";
import { PageHeader } from "@/faqs/components/PageHeader";

export default function FaqsPage() {
  return (
    <>
      <PageHeader title="FAQs" subtitle="Questions & Answers" />
      <Faq7/>
      {/* <Cta31 /> */}
      <Footer4 />
    </>
  );
}