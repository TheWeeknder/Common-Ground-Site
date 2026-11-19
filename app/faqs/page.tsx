import FAQSection from "@/faqs/components/FAQSection";
import Footer from "@/home/components/Footer";
import { PageHeader } from "@/components/PageHeader";

export default function FaqsPage() {
  return (
    <>
      <PageHeader title="FAQs" subtitle="Questions & Answers" />
      <FAQSection />
      <Footer />
    </>
  );
}
