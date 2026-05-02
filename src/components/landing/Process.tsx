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
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#FFFFFF]/60 backdrop-blur-md border border-[#E5E7EB] mb-4 shadow-sm transition-smooth hover:border-[#FFC107] hover:scale-105 group-hover:shadow-md">
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
            transition={{ delay: 0.1, duration: 0.6 }}
            className="relative order-first lg:order-none group"
          >
            {/* Enhanced multi-layer background glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#FFC107]/30 via-[#FFC107]/10 to-transparent blur-[120px] rounded-full scale-150 opacity-40 animate-pulse" />
            <div className="absolute inset-0 bg-gradient-to-bl from-[#FFC107]/20 to-transparent blur-[80px] rounded-full scale-110 opacity-30" />
            
            {/* Animated Pings */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-[#FFC107]/20 rounded-full animate-ping opacity-20" />
            <div className="absolute top-1/3 left-1/4 w-2 h-2 bg-[#FFC107] rounded-full animate-pulse shadow-[0_0_10px_#FFC107]" />
            <div className="absolute bottom-1/4 right-1/3 w-1.5 h-1.5 bg-[#FFC107] rounded-full animate-pulse delay-700 shadow-[0_0_10px_#FFC107]" />

            <img
              src={featuresImg}
              alt="App features illustration"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative w-full max-w-md mx-auto animate-float mix-blend-multiply [mask-image:radial-gradient(circle,black_45%,transparent_95%)] filter contrast-[1.25] brightness-[1.05] saturate-[1.2] drop-shadow-[0_0_40px_rgba(255,193,7,0.15)] transition-all duration-700 group-hover:scale-105"
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
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-[12px] bg-[#FFFFFF]/60 backdrop-blur-md border border-[#E5E7EB] mb-4 shadow-sm transition-smooth hover:border-[#FFC107] hover:scale-105 group-hover:shadow-md">
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
