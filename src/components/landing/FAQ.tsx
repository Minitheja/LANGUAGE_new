import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    q: "Which license do I need?",
    a: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.",
  },
  {
    q: "How do I get access to a theme?",
    a: "Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt. Seamlessly optimize empowered testing procedures.",
  },
  {
    q: "How do I see previous orders?",
    a: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo.",
  },
  {
    q: "Support related issues for the template?",
    a: "Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Professionally embrace customer directed value vis-a-vis high-quality portals.",
  },
];

export function FAQ() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            Frequently <span className="text-gradient-primary">Asked</span> Queries
          </h2>
          <p className="text-muted-foreground">
            Efficiently productivate reliable paradigms before ubiquitous models.
          </p>
        </div>
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((f, i) => (
            <AccordionItem
              key={i}
              value={`item-${i}`}
              className="bg-card rounded-2xl px-6 shadow-card border-none"
            >
              <AccordionTrigger className="text-left font-bold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
