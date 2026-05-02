import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect } from "react";

export function FloatingShapes() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX = useTransform(springX, [-1000, 1000], [-100, 100]);
  const moveY = useTransform(springY, [-1000, 1000], [-100, 100]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none z-0" aria-hidden="true">
      <motion.div style={{ x: moveX, y: moveY }} className="h-full w-full">
        {/* Large Background Orbs - Distributed across full page height */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={`orb-${i}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.25, 0],
              scale: [1, 1.3, 1],
            }}
            transition={{ 
              duration: 15 + Math.random() * 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 20,
            }}
            className="absolute rounded-full bg-[#FFC107] blur-[120px]"
            style={{ 
              width: 300 + Math.random() * 400,
              height: 300 + Math.random() * 400,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Sharp Bubbles - Massive quantity for full page */}
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={`bubble-${i}`}
            initial={{ 
              opacity: 0, 
              scale: 0.5,
            }}
            animate={{ 
              opacity: [0, 0.5, 0],
              scale: [0.8, 1.2, 0.8],
              y: [0, -50, 0],
            }}
            transition={{ 
              duration: 8 + Math.random() * 12,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 30,
            }}
            className="absolute rounded-full border-2 border-[#FFC107] bg-[#FFC107]/20 shadow-[0_0_20px_rgba(255,193,7,0.4)]"
            style={{ 
              width: 20 + Math.random() * 60,
              height: 20 + Math.random() * 60,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}

        {/* Tiny Energy Dots */}
        {[...Array(80)].map((_, i) => (
          <motion.div
            key={`dot-${i}`}
            animate={{ 
              opacity: [0, 0.8, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{ 
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 20,
            }}
            className="absolute rounded-full bg-[#FFC107]"
            style={{ 
              width: 5,
              height: 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
