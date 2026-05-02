import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="bg-primary rounded-3xl px-6 py-16 md:py-20 text-center max-w-5xl mx-auto shadow-cta">
          <h2 className="text-3xl md:text-5xl font-bold text-primary-foreground">
            Start your first session
          </h2>
          <p className="mt-4 text-primary-foreground/80">Takes 10 seconds. No spam.</p>
          <div className="mt-8 flex justify-center">
            <Button
              size="xl"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-xl font-semibold"
            >
              Start a session
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
