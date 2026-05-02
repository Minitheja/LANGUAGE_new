import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Stats } from "@/components/landing/Stats";
import { About } from "@/components/landing/About";
import { Process } from "@/components/landing/Process";
import { Features } from "@/components/landing/Features";
import { Difference } from "@/components/landing/Difference";
import { Habit } from "@/components/landing/Habit";
import { DashboardPreview } from "@/components/landing/DashboardPreview";
import { Cta } from "@/components/landing/Cta";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";
import { FloatingShapes } from "@/components/landing/FloatingShapes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ZoujUp — Stop Studying, Start Speaking" },
      { name: "description", content: "ZoujUp helps you master new languages through structured 10-minute speaking sessions with real people." },
      { property: "og:title", content: "ZoujUp — Stop Studying, Start Speaking" },
      { property: "og:description", content: "Structured language practice with real partners. No dating vibes, no small talk." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen bg-white overflow-x-hidden">
      <FloatingShapes />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Stats />
        <About />
        <Process />
        <Features />
        <Difference />
        <Habit />
        <DashboardPreview />
        <FAQ />
        <Cta />
        <Footer />
      </div>
    </div>
  );
}
