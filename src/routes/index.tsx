import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { About } from "@/components/landing/About";
import { Process } from "@/components/landing/Process";
import { Pricing } from "@/components/landing/Pricing";
import { Stats } from "@/components/landing/Stats";
import { FAQ } from "@/components/landing/FAQ";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Apdash — Make Cool Landing Pages for Your App" },
      { name: "description", content: "Apdash helps you build beautiful app landing pages with powerful features, flexible pricing, and 24/7 support." },
      { property: "og:title", content: "Apdash — Make Cool Landing Pages" },
      { property: "og:description", content: "Beautiful app landing pages with powerful features and flexible pricing." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Process />
      <Pricing />
      <Stats />
      <FAQ />
      <Footer />
    </main>
  );
}
