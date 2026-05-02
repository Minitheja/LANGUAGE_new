import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which languages can I practice?",
    a: "You can practice 30+ languages, including English, French, Spanish, Arabic, German, and many more. Our community is global.",
  },
  {
    q: "How does the 5+5 process work?",
    a: "Our system ensures balanced speaking time. You spend 5 minutes speaking in one language, and then 5 minutes in the other. No more one-sided conversations.",
  },
  {
    q: "Is ZoujUp free to use?",
    a: "We have a generous free tier (Explorer) for early learners. For those looking for unlimited sessions and guided corrections, our Polyglot and Master plans are available.",
  },
  {
    q: "Is it safe and professional?",
    a: "Absolutely. We focus strictly on language learning. We have zero tolerance for inappropriate behavior, ensuring a safe and productive environment for everyone.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-3xl relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#1A1A1A] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#6B7280]">Everything you need to know about ZoujUp.</p>
        </motion.div>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <AccordionItem value={`item-${i}`} className="border rounded-[12px] border-[#E5E7EB] overflow-hidden transition-all duration-300">
                <AccordionTrigger className="text-left font-bold text-[#1A1A1A] px-6 py-6 hover:no-underline data-[state=open]:bg-[#FFC107] data-[state=open]:text-[#111111]">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[#6B7280] px-6 py-6 leading-relaxed border-t border-[#E5E7EB]">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
