import { motion } from "framer-motion";
import { Apple, Play } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen bg-transparent">
      {/* Decorative shapes */}
      <motion.div 
        animate={{ 
          x: [0, 20, 0],
          y: [0, -20, 0],
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-[40px] border-[#F8F9FA] opacity-60" 
        aria-hidden 
      />
      <div className="absolute left-12 top-44 h-3 w-3 rounded-full bg-[#E5E7EB]" aria-hidden />
      <motion.div 
        animate={{ 
          rotate: [45, 90, 45],
          scale: [1, 1.2, 1],
        }}
        transition={{ 
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute left-1/4 bottom-32 h-4 w-4 rotate-45 border-2 border-[#E5E7EB]" 
        aria-hidden 
      />
      <div className="absolute left-40 bottom-20 h-12 w-12 rounded-full bg-[#F8F9FA] shadow-glow animate-float-slow" aria-hidden />

      {/* Floating Bubbles */}
      {[
        { size: 40, x: "10%", y: "20%", delay: 0 },
        { size: 60, x: "85%", y: "15%", delay: 2 },
        { size: 30, x: "75%", y: "70%", delay: 1 },
        { size: 50, x: "15%", y: "85%", delay: 3 },
        { size: 25, x: "50%", y: "10%", delay: 4 },
      ].map((bubble, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -30, 0],
            x: [0, 15, 0],
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8 + i * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: bubble.delay,
          }}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.x,
            top: bubble.y,
          }}
          className="absolute rounded-full bg-[#FFC107] blur-md z-0 pointer-events-none"
          aria-hidden
        />
      ))}

      {[
        { size: 100, x: "20%", y: "40%", delay: 1 },
        { size: 150, x: "70%", y: "50%", delay: 0 },
      ].map((bubble, i) => (
        <motion.div
          key={`bg-${i}`}
          animate={{
            y: [0, 50, 0],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
            delay: bubble.delay,
          }}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: bubble.x,
            top: bubble.y,
          }}
          className="absolute rounded-[20px] border-2 border-[#FFC107] blur-[1px] z-0 pointer-events-none"
          aria-hidden
        />
      ))}

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={`float-bubble-${i}`}
          initial={{ 
            opacity: 0, 
            y: "110vh",
            x: `${Math.random() * 100}vw` 
          }}
          animate={{ 
            opacity: [0, 0.4, 0],
            y: "-10vh",
            x: [`${Math.random() * 100}vw`, `${Math.random() * 100}vw`]
          }}
          transition={{ 
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 10,
            ease: "linear"
          }}
          className="absolute rounded-full bg-[#FFC107] blur-[2px] z-0 pointer-events-none"
          style={{ 
            width: 10 + Math.random() * 40,
            height: 10 + Math.random() * 40,
          }}
          aria-hidden
        />
      ))}
      <div className="container mx-auto relative z-10 px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-[#1A1A1A]"
            >
              Stop random chats. <span className="text-[#FFC107]">Start real speaking sessions.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg text-muted-foreground max-w-xl leading-relaxed"
            >
              Structured 10-minute conversations with real people.<br/>
              No ghosting. No small talk. Just focused language practice.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.4 }}
              className="flex flex-col gap-3"
            >
              <a
                href="/#cta"
                className="group inline-flex items-center justify-center gap-3 rounded-[12px] bg-[#FFC107] px-8 py-4 text-[#111111] font-bold shadow-soft hover:bg-[#E0A800] hover:shadow-glow hover:scale-[1.05] active:scale-[0.96] transition-all duration-300 w-max"
              >
                Start a session
              </a>
              <p className="text-sm text-muted-foreground">Limited early access (100 users). High-quality matches only.</p>
            </motion.div>
          </motion.div>

          {/* Right illustration */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            <img
              src={heroImg}
              alt="ZoujUp mobile app illustration with team members"
              width={1280}
              height={1280}
              className="w-full max-w-2xl mx-auto animate-float drop-shadow-2xl mix-blend-multiply [mask-image:radial-gradient(circle,white_70%,transparent_100%)] filter brightness-[1.02] contrast-[1.02]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
