import { Smartphone, Code2, Headphones, RefreshCw, Palette, Infinity as InfinityIcon } from "lucide-react";
import featuresImg from "@/assets/features-illustration.png";

const items = [
  { icon: Smartphone, title: "Responsive web design", desc: "Modular and interchangable componente between layouts and even demos." },
  { icon: Code2, title: "Loaded with features", desc: "Modular and interchangable componente between layouts and even demos." },
  { icon: Headphones, title: "Friendly online support", desc: "Modular and interchangable componente between layouts and even demos." },
  { icon: RefreshCw, title: "Free updates forever", desc: "Modular and interchangable componente between layouts and even demos." },
  { icon: Palette, title: "Built with Sass", desc: "Modular and interchangable componente between layouts and even demos." },
  { icon: InfinityIcon, title: "Infinite colors", desc: "Modular and interchangable componente between layouts and even demos." },
];

export function Process() {
  return (
    <section className="py-24 bg-gradient-soft">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            Quick & Easy Process With <span className="text-gradient-primary">Best Features</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Objectively deliver professional value with diverse web-readiness.
            Collaboratively transition wireless customer service without goal-oriented catalysts for change.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-10 items-center">
          <div className="space-y-10">
            {items.slice(0, 3).map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-right">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary mb-3">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>

          <div className="relative order-first lg:order-none">
            <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full" />
            <img
              src={featuresImg}
              alt="App features illustration"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative w-full max-w-md mx-auto animate-float"
            />
          </div>

          <div className="space-y-10">
            {items.slice(3).map(({ icon: Icon, title, desc }) => (
              <div key={title} className="text-left">
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-secondary mb-3">
                  <Icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">{title}</h3>
                <p className="text-sm text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
