import { Check } from "lucide-react";

const points = [
  "Structured conversations",
  "Balanced speaking time",
  "Real progress through consistency",
];

export function Difference() {
  return (
    <section id="difference" className="bg-section py-24">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Not a chat app.
          <br />
          A <span className="bg-primary px-3 py-1 rounded-xl text-primary-foreground">speaking system</span>.
        </h2>

        <ul className="mt-10 space-y-3 max-w-md mx-auto text-left">
          {points.map((p) => (
            <li key={p} className="flex items-center gap-3 bg-card rounded-xl px-5 py-4 border border-border shadow-soft">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success/15">
                <Check className="h-4 w-4 text-success" strokeWidth={3} />
              </span>
              <span className="text-base font-medium">{p}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
