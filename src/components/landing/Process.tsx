import { motion } from "framer-motion";
import { Globe2, Sparkles, MicVocal, Highlighter, Flame, Target } from "lucide-react";
import featuresImg from "@/assets/features-illustration.png";

const items = [
  { icon: Globe2, title: "1. Choose your language", desc: "Pick what you want to practice." },
  { icon: Sparkles, title: "2. Get matched instantly", desc: "No swiping. No browsing." },
  { icon: MicVocal, title: "3. Start a 10-minute session", desc: "Structured prompts. Balanced speaking time." },
  { icon: Highlighter, title: "4. Receive corrections", desc: "Real-time feedback as you converse." },
  { icon: Flame, title: "5. Build your streak", desc: "Speak every day and improve naturally." },
  { icon: Target, title: "6. Track your progress", desc: "See real improvement over time." },
];

export function Process() {
  return (
    <section id="how-it-works" className="py-24 bg-transparent relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-5 text-[#1A1A1A]">
            How it <span className="text-[#FFC107]">works</span>
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            A simple, focused process to get you speaking in seconds.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-10 items-center">
          <div className="space-y-10">
            {items.slice(0, 3).map(({ icon: Icon, title, desc }, i) => (
              <motion.div 
                key={title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-right"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#FFFFFF] border border-[#E5E7EB] mb-4 shadow-sm transition-smooth hover:border-[#FFC107] hover:scale-105">
                  <Icon className="h-6 w-6 text-[#1A1A1A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative order-first lg:order-none"
          >
            <div className="absolute inset-0 bg-[#FFFFFF] opacity-50 blur-3xl rounded-full" />
            <img
              src={featuresImg}
              alt="App features illustration"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative w-full max-w-md mx-auto animate-float mix-blend-multiply [mask-image:radial-gradient(circle,white_70%,transparent_100%)]"
            />
          </motion.div>

          <div className="space-y-10">
            {items.slice(3).map(({ icon: Icon, title, desc }, i) => (
              <motion.div 
                key={title}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15, duration: 0.5 }}
                className="text-left"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#FFFFFF] border border-[#E5E7EB] mb-4 shadow-sm transition-smooth hover:border-[#FFC107] hover:scale-105">
                  <Icon className="h-6 w-6 text-[#1A1A1A]" strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
