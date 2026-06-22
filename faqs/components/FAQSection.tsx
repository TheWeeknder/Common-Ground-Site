"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

/**
 * FAQ Item interface
 */
interface FAQItem {
  question: string;
  answer: string;
}

/**
 * FAQ data array - easy to swap out
 */
const faqData: FAQItem[] = [
  {
    question: "Do I need to book an appointment?",
    answer: "Walk-ins are welcome but appointments are recommended to guarantee your spot.",
  },
  {
    question: "How long does a haircut take?",
    answer: "Most cuts take between 30–45 minutes depending on the style.",
  },
  {
    question: "What services do you offer?",
    answer: "We offer haircuts, fades, beard trims, lineups, and hot towel shaves.",
  },
  {
    question: "How much do services cost?",
    answer: "Pricing varies by service. Visit our Services page or call us for a full price list.",
  },
  {
    question: "Where are you located?",
    answer: "[Placeholder address] — Please update this with your actual shop location.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, debit, and all major credit cards.",
  },
];

/**
 * FAQSection Component
 * A high-contrast, editorial-style FAQ section for a luxury barbershop.
 */
export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="w-full bg-[#0a0a0a] text-white py-24 px-6 md:px-12 lg:px-20 selection:bg-white selection:text-black overflow-hidden">
      <div className="max-w-4xl mx-auto">
        
        {/* Section Heading */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20 text-center "
        >
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold tracking-tighter uppercase leading-none">
            Frequently Asked
            <br />
            Questions
          </h2>
        </motion.div> */}

        {/* FAQ Accordion */}
        <div className="border-t border-white/10">
          {faqData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`border-b border-white/10 transition-colors duration-500 ${
                openIndex === index ? "bg-white/[0.02]" : "hover:bg-white/[0.01]"
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full py-8 md:py-10 flex justify-between items-center text-left group"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg md:text-xl lg:text-2xl font-serif font-light tracking-wide group-hover:opacity-70 transition-opacity">
                  {item.question}
                </span>
                <div className="ml-4 flex-shrink-0">
                  {openIndex === index ? (
                    <Minus size={24} strokeWidth={1} className="opacity-60" />
                  ) : (
                    <Plus size={24} strokeWidth={1} className="opacity-60" />
                  )}
                </div>
              </button>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="pb-10 pr-12">
                      <p className="text-sm md:text-base font-sans font-light leading-relaxed tracking-widest text-white/60 max-w-2xl">
                        {item.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* Bottom Footer Note */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <p className="text-[10px] tracking-[0.5em] uppercase opacity-30">
            Still have questions? Contact us directly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}


