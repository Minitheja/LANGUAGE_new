import { motion } from "framer-motion";
import { Headphones, Clock, LineChart } from "lucide-react";

const differences = [
  {
    icon: Headphones,
    title: "Structured conversations",
    desc: "Guided prompts keep the conversation flowing and focused.",
  },
  {
    icon: Clock,
    title: "Balanced speaking time",
    desc: "5 minutes in your language, 5 minutes in theirs. No one-sided chats.",
  },
  {
    icon: LineChart,
    title: "Real progress",
    desc: "Achieve actual fluency through consistent, measured practice.",
  },
];

export function Difference() {
  return (
    <section className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-5 text-[#1A1A1A]">
            The <span className="text-[#FFC107]">ZoujUp</span> Difference
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            We stripped away everything that wastes time and kept only what makes you a better speaker.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {differences.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ 
                y: -6,
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
              className="group relative bg-[#FFFFFF] rounded-[16px] p-8 shadow-sm hover:shadow-glow transition-all duration-300 border border-[#E5E7EB] hover:border-[#FFC107] hover:bg-[#FFC107] cursor-pointer"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-[12px] bg-[#F8F9FA] border border-[#E5E7EB] shadow-soft group-hover:bg-[#FFFFFF] group-hover:border-transparent transition-smooth">
                <Icon className="h-8 w-8 text-[#1A1A1A] group-hover:text-[#111111]" />
              </div>
              <h3 className="text-xl font-bold mb-3 text-[#1A1A1A] group-hover:text-[#111111]">{title}</h3>
              <p className="text-[#6B7280] group-hover:text-[#111111] text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
