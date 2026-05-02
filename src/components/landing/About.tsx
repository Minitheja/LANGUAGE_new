import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutImg from "@/assets/about-illustration.png";

const bullets = [
  "The only way your business can to the information.",
  "Your app will be used by a host and for different.",
  "Intrinsicly innovate top-line collaborative benefits.",
  "Efficiently redefine value-added sources without.",
  "The only way your business can evolve is in information.",
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute -top-6 -left-6 h-24 w-24 rounded-full bg-gradient-primary opacity-20 blur-2xl" />
            <img
              src={aboutImg}
              alt="App dashboard"
              width={1024}
              height={1024}
              loading="lazy"
              className="relative w-full max-w-lg mx-auto"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              The Most Useful Resource Created For{" "}
              <span className="text-gradient-primary">Designers</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Objectively deliver professional value with diverse web-readiness. Collaboratively
              transition wireless customer service without goal-oriented catalysts for change.
            </p>

            <ul className="space-y-3">
              {bullets.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-primary">
                    <Check className="h-3 w-3 text-primary-foreground" strokeWidth={3} />
                  </span>
                  <span className="text-foreground/80">{b}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-wrap gap-4 pt-4">
              <Button size="lg" className="rounded-full bg-gradient-primary shadow-glow hover:opacity-90">
                Get Start Now
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
