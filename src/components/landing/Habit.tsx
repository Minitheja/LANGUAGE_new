import { motion } from "framer-motion";
import { Clock, Flame, TrendingUp } from "lucide-react";

const habits = [
  {
    icon: Clock,
    title: "10-minute daily sessions",
    desc: "Short enough to fit anywhere, long enough to matter.",
  },
  {
    icon: Flame,
    title: "Track your speaking streak",
    desc: "Build consistency. Don't break the chain.",
  },
  {
    icon: TrendingUp,
    title: "See real improvement",
    desc: "Watch your confidence and vocabulary grow visibly.",
  },
];

export function Habit() {
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
            Built for <span className="text-[#FFC107]">Real Life</span>
          </h2>
          <p className="text-[#6B7280] leading-relaxed">
            Language learning shouldn't feel like a chore. We designed ZoujUp to fit into your busiest days.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {habits.map(({ icon: Icon, title, desc }, i) => (
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
              className="group relative bg-[#F8F9FA] rounded-[16px] p-8 shadow-sm hover:shadow-glow transition-all duration-300 border border-[#E5E7EB] hover:border-[#FFC107] hover:bg-[#FFC107] cursor-pointer"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-[12px] bg-[#FFFFFF] border border-[#E5E7EB] group-hover:border-transparent shadow-soft group-hover:scale-110 transition-smooth">
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
