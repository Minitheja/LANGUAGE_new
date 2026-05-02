import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useMemo } from "react";

export function FloatingShapes() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 400, damping: 40 });
  const springY = useSpring(mouseY, { stiffness: 400, damping: 40 });

  const moveX = useTransform(springX, [-1000, 1000], [-250, 250]);
  const moveY = useTransform(springY, [-1000, 1000], [-250, 250]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX - window.innerWidth / 2);
      mouseY.set(e.clientY - window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  // Memoize random values to prevent re-randomization on every render (flicker fix)
  const orbs = useMemo(() => [...Array(20)].map((_, i) => ({
    id: i,
    size: 300 + Math.random() * 400,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 3 + Math.random() * 2,
    delay: Math.random() * 1,
  })), []);

  const bubbles = useMemo(() => [...Array(50)].map((_, i) => ({
    id: i,
    size: 20 + Math.random() * 60,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 2 + Math.random() * 2,
    delay: Math.random() * 2,
  })), []);

  const dots = useMemo(() => [...Array(40)].map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: 1 + Math.random() * 1,
    delay: Math.random() * 2,
  })), []);

  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden pointer-events-none z-0" aria-hidden="true" style={{ perspective: "1000px", backfaceVisibility: "hidden" }}>
      <motion.div style={{ x: moveX, y: moveY, willChange: "transform" }} className="h-full w-full">
        {/* Large Background Orbs */}
        {orbs.map((orb) => (
          <motion.div
            key={`orb-${orb.id}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ 
              opacity: [0, 0.2, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{ 
              duration: orb.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: orb.delay,
            }}
            className="absolute rounded-full bg-[#FFC107] blur-[100px]"
            style={{ 
              width: orb.size,
              height: orb.size,
              left: `${orb.left}%`,
              top: `${orb.top}%`,
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
          />
        ))}

        {/* Sharp Bubbles */}
        {bubbles.map((bubble) => (
          <motion.div
            key={`bubble-${bubble.id}`}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ 
              opacity: [0, 0.4, 0],
              scale: [0.8, 1.1, 0.8],
              y: [0, -30, 0],
            }}
            transition={{ 
              duration: bubble.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: bubble.delay,
            }}
            className="absolute rounded-full border-2 border-[#FFC107] bg-[#FFC107]/10 shadow-[0_0_15px_rgba(255,193,7,0.3)]"
            style={{ 
              width: bubble.size,
              height: bubble.size,
              left: `${bubble.left}%`,
              top: `${bubble.top}%`,
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
          />
        ))}

        {/* Tiny Energy Dots */}
        {dots.map((dot) => (
          <motion.div
            key={`dot-${dot.id}`}
            animate={{ 
              opacity: [0, 0.7, 0],
              scale: [0, 1.2, 0],
            }}
            transition={{ 
              duration: dot.duration,
              repeat: Infinity,
              delay: dot.delay,
            }}
            className="absolute rounded-full bg-[#FFC107]"
            style={{ 
              width: 4,
              height: 4,
              left: `${dot.left}%`,
              top: `${dot.top}%`,
              willChange: "transform, opacity",
              transform: "translateZ(0)",
            }}
          />
        ))}
      </motion.div>
    </div>
  );
}
