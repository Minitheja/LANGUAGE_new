import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Standard",
    monthly: 19.99,
    yearly: 69.99,
    features: ["Limited access for a month", "15 customize sub page", "105 disk space", "3 domain access", "24/7 phone support"],
    featured: false,
  },
  {
    name: "Premium",
    monthly: 49.99,
    yearly: 159.99,
    features: ["Unlimited access for a month", "25 customize sub page", "150 disk space", "5 domain access", "24/7 phone support"],
    featured: true,
  },
  {
    name: "Unlimited",
    monthly: 69.99,
    yearly: 259.99,
    features: ["Limited access for a month", "15 customize sub page", "120 disk space", "5 domain access", "24/7 phone support"],
    featured: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(false);

  return (
    <section id="pricing" className="py-24">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-5">
            Our <span className="text-gradient-primary">Flexible</span> Price
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Professional hosting at an affordable price. Distinctively recaptiualize principle-centered
            core competencies through client-centered core competencies.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex items-center gap-3 rounded-full border border-border bg-card p-1.5 shadow-soft">
            <button
              onClick={() => setYearly(false)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-smooth ${!yearly ? "bg-gradient-primary text-primary-foreground shadow-soft" : "text-muted-foreground"}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setYearly(true)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-smooth ${yearly ? "bg-gradient-primary text-primary-foreground shadow-soft" : "text-muted-foreground"}`}
            >
              Yearly
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative rounded-3xl p-8 transition-smooth hover:-translate-y-2 ${
                plan.featured
                  ? "bg-gradient-hero text-hero-foreground shadow-glow scale-105"
                  : "bg-card shadow-card hover:shadow-glow"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-background text-primary text-xs font-bold px-4 py-1 shadow-soft">
                  POPULAR
                </span>
              )}
              <div className="text-center mb-6">
                <div className={`text-5xl font-bold mb-2 ${plan.featured ? "" : "text-gradient-primary"}`}>
                  ${yearly ? plan.yearly : plan.monthly}
                </div>
                <div className={`text-sm ${plan.featured ? "opacity-80" : "text-muted-foreground"}`}>
                  / {yearly ? "year" : "month"}
                </div>
                <h3 className="text-xl font-bold mt-4">{plan.name}</h3>
              </div>
              <ul className={`space-y-3 mb-8 ${plan.featured ? "" : "text-foreground/80"}`}>
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
              <Button
                className={`w-full rounded-full ${
                  plan.featured
                    ? "bg-background text-primary hover:bg-background/90"
                    : "bg-gradient-primary text-primary-foreground hover:opacity-90"
                }`}
              >
                Purchase now
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
