import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LivePreview } from "./LivePreview";

const bullets = [
  "User: \"I go to market yesterday\"",
  "Partner: \"You should say: I went to the market\"",
  "System: Correction highlighted",
  "✔ Real-time chat & Voice messages",
  "✔ Smart corrections & 10-minute session timer",
];

export function About() {
  return (
    <section id="about" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-[#FFC107] opacity-10 blur-[120px] rounded-full" />
            <LivePreview />
          </motion.div>

          <div className="space-y-6">
            <motion.h2 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl lg:text-5xl font-bold leading-tight text-[#1A1A1A]"
            >
              This is what a real session <span className="text-[#FFC107]">looks like</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-[#6B7280] leading-relaxed"
            >
              Structured prompts. Balanced speaking time. Get corrected while you speak and improve your accuracy.
            </motion.p>

            <ul className="space-y-3">
              {bullets.map((b, i) => (
                <motion.li 
                  key={b}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + (i * 0.1), duration: 0.5 }}
                  className="flex items-start gap-3"
                >
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#FFC107]">
                    <Check className="h-3 w-3 text-[#111111]" strokeWidth={3} />
                  </span>
                  <span className="text-[#6B7280]">{b}</span>
                </motion.li>
              ))}
            </ul>

            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <a
                href="/#cta"
                className="group inline-flex items-center justify-center gap-3 rounded-[12px] bg-[#FFC107] px-8 py-4 text-[#111111] font-bold shadow-soft hover:bg-[#E0A800] hover:shadow-glow hover:scale-[1.05] active:scale-[0.96] transition-all duration-300"
              >
                Start a session
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
