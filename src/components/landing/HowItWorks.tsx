const steps = [
  { n: "1", title: "Choose your language", desc: "Pick what you want to practice." },
  { n: "2", title: "Get matched instantly", desc: "No swiping. No browsing." },
  { n: "3", title: "Start a 10-minute session", desc: "Structured prompts. Balanced speaking time." },
];

export function HowItWorks() {
  return (
    <section id="how" className="bg-section py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-5xl font-bold">How it works</h2>
          <p className="mt-4 text-muted-foreground">Three steps. Ten minutes. Real progress.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {steps.map((s) => (
            <div
              key={s.n}
              className="bg-card rounded-2xl p-8 shadow-soft border border-border"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground font-bold text-lg mb-5">
                {s.n}
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
