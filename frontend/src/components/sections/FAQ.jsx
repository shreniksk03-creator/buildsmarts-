import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "How long does construction take?",
    a: "A typical 2,500 - 4,000 sq.ft villa takes 9 to 14 months from foundation to handover, depending on scope, approvals and design complexity. We share a milestone schedule before work begins.",
  },
  {
    q: "Do you provide approvals?",
    a: "Yes. We assist with BBMP / panchayat sanction plans, BWSSB, BESCOM and other statutory approvals as part of our turnkey service.",
  },
  {
    q: "Are materials included?",
    a: "Yes — every package (Silver, Gold, Diamond) lists the exact brands and rates of cement, steel, tiles, doors, switches and more. No hidden upgrades.",
  },
  {
    q: "Do you offer turnkey solutions?",
    a: "Absolutely. From land survey, design, approvals and construction to interiors and key handover — one team, one accountability.",
  },
  {
    q: "What areas do you serve?",
    a: "We currently serve Bengaluru and surrounding regions including Sarjapur, Whitefield, Electronic City, Yelahanka and Devanahalli.",
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      data-testid="faq-section"
      className="relative py-24 lg:py-32 bg-[#050A15]"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="bsi-overline mb-4">Frequently asked</div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]">
            Questions, <span className="bsi-gold-text italic">answered.</span>
          </h2>
        </motion.div>

        <div className="mt-14" data-testid="faq-accordion">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="border-b border-white/10 px-0"
                data-testid={`faq-item-${i}`}
              >
                <AccordionTrigger
                  data-testid={`faq-trigger-${i}`}
                  className="text-left font-display text-lg md:text-xl py-6 hover:no-underline hover:text-[#D4AF37] [&[data-state=open]]:text-[#D4AF37]"
                >
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 text-base leading-relaxed pb-6">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
