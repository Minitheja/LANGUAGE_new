import { createFileRoute, Link } from "@tanstack/react-router";
import { Mic, Flame, TrendingUp, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/dashboard")({
  head: () => ({
    meta: [
      { title: "Dashboard — Speakly" },
      { name: "description", content: "Your speaking dashboard. Start your next 10-minute session." },
    ],
  }),
  component: Dashboard,
});

function Dashboard() {
  return (
    <div className="min-h-screen bg-section">
      {/* Top bar */}
      <header className="bg-background border-b border-border">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
              <Mic className="h-5 w-5 text-primary-foreground" />
            </span>
            <span className="font-bold text-lg">Speakly</span>
          </Link>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground hidden sm:inline">Hi, Alex</span>
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-foreground text-background text-sm font-semibold">
              A
            </span>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-6 py-10 max-w-5xl space-y-6">
        {/* Top hero card */}
        <section className="bg-card rounded-2xl p-8 shadow-card border border-border">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h1 className="text-2xl md:text-3xl font-bold">
                Ready for your next 10-minute session?
              </h1>
              <p className="mt-2 inline-flex items-center gap-2 text-success font-medium text-sm">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                Available for matching
              </p>
            </div>
            <Button variant="cta" size="xl" className="shrink-0">
              Start a session
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </section>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Match card */}
          <section className="bg-card rounded-2xl p-6 shadow-soft border border-border">
            <div className="flex items-center justify-between mb-5">
              <h2 className="font-semibold">Your match is ready</h2>
              <span className="text-xs text-success font-medium bg-success/10 rounded-full px-2.5 py-1">
                Online now
              </span>
            </div>
            <div className="flex items-center justify-between gap-4">
              <div className="flex-1 text-center bg-section rounded-xl py-4 border border-border">
                <div className="text-3xl mb-1">🇬🇧</div>
                <div className="text-sm font-semibold">English</div>
                <div className="text-xs text-muted-foreground">B2</div>
              </div>
              <div className="text-2xl text-muted-foreground">↔</div>
              <div className="flex-1 text-center bg-section rounded-xl py-4 border border-border">
                <div className="text-3xl mb-1">🇪🇸</div>
                <div className="text-sm font-semibold">Spanish</div>
                <div className="text-xs text-muted-foreground">A2</div>
              </div>
            </div>
          </section>

          {/* Stats card */}
          <section className="bg-card rounded-2xl p-6 shadow-soft border border-border">
            <h2 className="font-semibold mb-5">This week</h2>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <MessageSquare className="h-5 w-5 text-foreground" />
                </span>
                <div>
                  <div className="text-2xl font-bold leading-none">4</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    sessions this week <span className="text-success font-medium">(+2 vs last week)</span>
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <TrendingUp className="h-5 w-5 text-foreground" />
                </span>
                <div>
                  <div className="text-2xl font-bold leading-none">47</div>
                  <p className="text-sm text-muted-foreground mt-1">
                    corrections received <span className="text-success font-medium">(improving accuracy)</span>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* Streak card */}
        <section className="bg-card rounded-2xl p-8 shadow-card border-2 border-primary">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-4">
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/20">
                <Flame className="h-7 w-7 text-foreground" />
              </span>
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  7-day streak <span>🔥</span>
                </h2>
                <p className="text-muted-foreground text-sm mt-1">Don't break it today</p>
              </div>
            </div>
            <Button variant="cta" size="lg" className="shrink-0">
              Start today's session
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
