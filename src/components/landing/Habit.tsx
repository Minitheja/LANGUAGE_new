import { Calendar, Flame, TrendingUp } from "lucide-react";

const items = [
  { icon: Calendar, title: "10-minute daily sessions", desc: "Tiny commitment. Big compound." },
  { icon: Flame, title: "Track your speaking streak", desc: "Show up. Watch the streak grow." },
  { icon: TrendingUp, title: "See real improvement", desc: "Corrections, fluency, confidence." },
];

export function Habit() {
  return (
    <section id="habit" className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">Speak every day. Improve naturally.</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card rounded-2xl p-7 border border-border shadow-soft">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 mb-4">
                <Icon className="h-5 w-5 text-foreground" />
              </span>
              <h3 className="text-lg font-semibold mb-2">{title}</h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
