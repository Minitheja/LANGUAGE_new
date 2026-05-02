import { motion } from "framer-motion";

export function Cta() {
  return (
    <section id="cta" className="py-24 bg-[#FFC107] relative overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-6 text-center max-w-2xl relative z-10"
      >
        <h2 className="text-4xl lg:text-5xl font-bold text-[#111111] mb-8">Start your first session</h2>
        <form className="flex flex-col sm:flex-row gap-3 justify-center items-center max-w-md mx-auto" onSubmit={(e) => { e.preventDefault(); alert("Thanks for joining! We'll notify you when a spot opens."); }}>
          <input
            type="email"
            placeholder="Enter your email address"
            required
            className="w-full sm:w-auto flex-1 rounded-[12px] px-6 py-4 text-[#1A1A1A] bg-[#FFFFFF] border-none focus:outline-none focus:ring-2 focus:ring-[#111111]"
          />
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            type="submit"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-[12px] bg-[#111111] px-8 py-4 text-white font-bold shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:bg-black transition-smooth"
          >
            Join Waitlist
          </motion.button>
        </form>
        <p className="mt-6 text-[#111111] opacity-80 font-medium">Limited early access. High-quality matches only.</p>
      </motion.div>
    </section>
  );
}
