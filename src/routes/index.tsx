import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Network } from "@/components/landing/Network";
import { Preview } from "@/components/landing/Preview";
import { HowItWorks } from "@/components/landing/HowItWorks";
import { Problem } from "@/components/landing/Problem";
import { Difference } from "@/components/landing/Difference";
import { Habit } from "@/components/landing/Habit";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Speakly — Real 10-minute speaking sessions, not random chats" },
      { name: "description", content: "Structured 10-minute conversations with real people. No ghosting. No small talk. Just focused language practice." },
      { property: "og:title", content: "Speakly — Real speaking sessions" },
      { property: "og:description", content: "Structured 10-minute language conversations with real people." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Network />
      <Preview />
      <HowItWorks />
      <Problem />
      <Difference />
      <Habit />
      <FinalCTA />
      <Footer />
    </main>
  );
}
