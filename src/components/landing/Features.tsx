import { Boxes, Headphones, Lock } from "lucide-react";

const features = [
  {
    icon: Boxes,
    title: "Fully functional",
    desc: "Phosfluorescently target bleeding sources through viral methods. Progressively expedite empowered.",
  },
  {
    icon: Headphones,
    title: "24/7 Live Chat",
    desc: "Enthusiastically productivate interactive interfaces after energistically scale client-centered catalysts.",
  },
  {
    icon: Lock,
    title: "Secure Data",
    desc: "Synergistically architect virtual content solutions. Monotonectally communicate cooperative solutions.",
  },
];

export function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">Why Apdash Different?</h2>
          <p className="text-muted-foreground leading-relaxed">
            Uniquely repurpose strategic core competencies with progressive content. Assertively
            transition ethical imperatives and collaborative manufactured products.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-glow transition-smooth hover:-translate-y-2"
            >
              <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-primary shadow-soft group-hover:scale-110 transition-smooth">
                <Icon className="h-8 w-8 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-bold mb-3">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
