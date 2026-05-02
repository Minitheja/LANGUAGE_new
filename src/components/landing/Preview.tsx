import { Check, Mic, MessageSquare, Sparkles, Timer } from "lucide-react";

const features = [
  { icon: MessageSquare, label: "Real-time chat" },
  { icon: Mic, label: "Voice messages" },
  { icon: Sparkles, label: "Smart corrections" },
  { icon: Timer, label: "10-min session timer" },
];

export function Preview() {
  return (
    <section className="bg-background py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">This is what a real session looks like</h2>
          <p className="mt-4 text-muted-foreground">No swiping. No browsing. Just speaking.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
          {/* Mock chat */}
          <div className="bg-section rounded-3xl p-6 md:p-8 shadow-card border border-border">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-success" />
                <span className="text-sm font-medium">Live session</span>
              </div>
              <span className="text-xs font-mono text-muted-foreground bg-card border border-border rounded-md px-2 py-1">
                09:42
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex justify-start">
                <div className="bg-card rounded-2xl rounded-tl-sm px-4 py-3 max-w-[80%] shadow-soft border border-border">
                  <p className="text-xs text-muted-foreground mb-1">You</p>
                  <p className="text-sm">"I go to market yesterday"</p>
                </div>
              </div>

              <div className="flex justify-end">
                <div className="bg-card rounded-2xl rounded-tr-sm px-4 py-3 max-w-[80%] shadow-soft border border-border">
                  <p className="text-xs text-muted-foreground mb-1 text-right">Partner</p>
                  <p className="text-sm">
                    You should say:{" "}
                    <span className="bg-primary/30 text-foreground font-medium rounded px-1">
                      I went to the market
                    </span>
                  </p>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/15 border border-primary/40 text-foreground text-xs font-medium px-3 py-1.5">
                  <Sparkles className="h-3.5 w-3.5" />
                  Correction highlighted
                </div>
              </div>
            </div>
          </div>

          {/* Feature checklist */}
          <div className="space-y-4">
            {features.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex items-center gap-4 bg-card rounded-2xl p-5 shadow-soft border border-border"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/15">
                  <Icon className="h-5 w-5 text-foreground" />
                </span>
                <span className="text-base font-medium">{label}</span>
                <Check className="ml-auto h-5 w-5 text-success" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
