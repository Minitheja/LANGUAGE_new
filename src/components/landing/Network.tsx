const items = [
  { emoji: "🌍", title: "100+ countries", desc: "Learners across the globe" },
  { emoji: "🗣️", title: "30+ languages", desc: "Practiced daily, live" },
  { emoji: "⚡", title: "Instant sessions", desc: "Structured & matched fast" },
];

export function Network() {
  return (
    <section className="bg-section py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">Join a global speaking network</h2>
          <p className="mt-4 text-muted-foreground">Real people. Real conversations. Right now.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {items.map((it) => (
            <div
              key={it.title}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border text-center"
            >
              <div className="text-4xl mb-4">{it.emoji}</div>
              <h3 className="text-xl font-semibold mb-2">{it.title}</h3>
              <p className="text-muted-foreground text-sm">{it.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
