import { X } from "lucide-react";

const issues = [
  "You match → it dies",
  "Conversations go nowhere",
  "It feels like dating",
];

export function Problem() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          You've tried language apps.
          <br />
          You know what happens.
        </h2>

        <ul className="mt-10 space-y-3 max-w-md mx-auto text-left">
          {issues.map((i) => (
            <li key={i} className="flex items-center gap-3 bg-section rounded-xl px-5 py-4 border border-border">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-foreground/5">
                <X className="h-4 w-4 text-muted-foreground" />
              </span>
              <span className="text-base">{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
