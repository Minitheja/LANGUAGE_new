import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { Clock, User, Zap } from "lucide-react";

interface Message {
  id: number;
  role: "user" | "partner";
  text: string;
  isMistake?: boolean;
  isCorrection?: boolean;
}

export function LivePreview() {
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, role: "user", text: "I go to market yesterday", isMistake: true },
  ]);
  const [typing, setTyping] = useState(false);
  const [timer, setTimer] = useState("10:00");

  useEffect(() => {
    // Timer simulation
    const interval = setInterval(() => {
      setTimer((prev) => {
        const [m, s] = prev.split(":").map(Number);
        if (s > 0) return `${m}:${(s - 1).toString().padStart(2, "0")}`;
        if (m > 0) return `${m - 1}:59`;
        return "10:00";
      });
    }, 1000);

    // Message simulation sequence
    const sequence = async () => {
      await new Promise((r) => setTimeout(r, 2000));
      setTyping(true);
      await new Promise((r) => setTimeout(r, 1500));
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: 2, role: "partner", text: "You should say: I went to the market", isCorrection: true },
      ]);
      await new Promise((r) => setTimeout(r, 2000));
      setTyping(true);
      await new Promise((r) => setTimeout(r, 1000));
      setTyping(false);
      setMessages((prev) => [
        ...prev,
        { id: 3, role: "user", text: "Ah, right! I went to the market.", isMistake: false },
      ]);
    };

    sequence();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-[360px] mx-auto bg-white rounded-[32px] border-[12px] border-[#111111] shadow-2xl overflow-hidden aspect-[9/19]">
      {/* Phone Header */}
      <div className="bg-[#111111] px-6 py-4 flex items-center justify-between text-white">
        <div className="flex items-center gap-2">
          <div className="h-2 w-2 rounded-full bg-[#22C55E]" />
          <span className="text-xs font-bold uppercase tracking-wider">Session Live</span>
        </div>
        <div className="flex items-center gap-2 bg-white/10 px-3 py-1 rounded-full">
          <Clock className="h-3 w-3 text-[#FFC107]" />
          <span className="text-xs font-mono font-bold text-[#FFC107]">{timer}</span>
        </div>
      </div>

      {/* Chat Area */}
      <div className="p-6 h-[calc(100%-120px)] flex flex-col gap-4 overflow-y-auto bg-[#F8F9FA]">
        <AnimatePresence mode="popLayout">
          {messages.map((msg) => (
            <motion.div
              key={msg.id}
              initial={{ opacity: 0, y: 10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[85%] rounded-[16px] px-4 py-3 text-sm font-medium shadow-sm ${
                  msg.role === "user"
                    ? "bg-[#111111] text-white rounded-br-none"
                    : "bg-white text-[#111111] rounded-bl-none border border-[#E5E7EB]"
                }`}
              >
                {msg.isMistake ? (
                  <span>
                    I <span className="bg-[#FFC107]/20 border-b-2 border-[#FFC107] text-[#FFC107]">go</span> to market yesterday
                  </span>
                ) : msg.isCorrection ? (
                  <div className="space-y-1">
                    <p className="text-[10px] uppercase tracking-widest text-[#6B7280]">Correction</p>
                    <p>You should say: <span className="text-[#22C55E] font-bold">I went</span> to the market</p>
                  </div>
                ) : (
                  msg.text
                )}
              </div>
            </motion.div>
          ))}
          {typing && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex justify-start"
            >
              <div className="bg-white border border-[#E5E7EB] rounded-[16px] rounded-bl-none px-4 py-2 flex gap-1">
                <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1 }} className="h-1.5 w-1.5 rounded-full bg-[#6B7280]" />
                <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="h-1.5 w-1.5 rounded-full bg-[#6B7280]" />
                <motion.div animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="h-1.5 w-1.5 rounded-full bg-[#6B7280]" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Input Placeholder */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-[#E5E7EB]">
        <div className="h-10 w-full bg-[#F3F4F6] rounded-full flex items-center px-4">
          <span className="text-xs text-[#9CA3AF]">Type a message...</span>
        </div>
      </div>
    </div>
  );
}
