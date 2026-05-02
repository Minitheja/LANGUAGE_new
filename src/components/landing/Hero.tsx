import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section className="relative bg-background pt-20 pb-24 lg:pt-28 lg:pb-32 overflow-hidden">
      {/* Subtle yellow glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 h-[500px] w-[800px] rounded-full bg-primary/10 blur-3xl" aria-hidden />

      <div className="container relative mx-auto px-6 max-w-4xl text-center">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-section px-4 py-1.5 text-xs font-medium text-muted-foreground mb-6">
          <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
          Limited early access · 100 users
        </span>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
          Stop random chats.
          <br />
          Start <span className="bg-primary px-3 py-1 rounded-xl text-primary-foreground">real speaking</span> sessions.
        </h1>

        <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          Structured 10-minute conversations with real people.
          No ghosting. No small talk. Just focused language practice.
        </p>

        <div className="mt-10 flex flex-col items-center gap-4">
          <Button variant="cta" size="xl">Start a session</Button>
          <p className="text-sm text-muted-foreground">High-quality matches only.</p>
        </div>
      </div>
    </section>
  );
}
