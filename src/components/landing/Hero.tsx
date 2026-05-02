import { Apple, Play } from "lucide-react";
import heroImg from "@/assets/hero-illustration.png";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden min-h-screen">
      {/* Diagonal purple panel */}
      <div className="absolute inset-0 bg-gradient-hero hero-diagonal" aria-hidden />

      {/* Decorative shapes */}
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full border-[40px] border-primary/40 opacity-60" aria-hidden />
      <div className="absolute left-12 top-44 h-3 w-3 rounded-full bg-primary-glow" aria-hidden />
      <div className="absolute left-1/4 bottom-32 h-4 w-4 rotate-45 border-2 border-pink-300" aria-hidden />
      <div className="absolute left-40 bottom-20 h-12 w-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 shadow-glow animate-float-slow" aria-hidden />

      <div className="container mx-auto relative z-10 px-6 pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight text-foreground">
              Make Cool Landing Pages With{" "}
              <span className="text-gradient-primary">Apdash</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-xl leading-relaxed">
              Conveniently generate multifunctional markets and B2C vortals.
              Uniquely enable inexpensive materials rather than sticky products.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                className="group flex items-center gap-3 rounded-full border-2 border-primary/30 bg-background px-6 py-3 shadow-soft hover:border-primary hover:shadow-glow transition-smooth"
              >
                <Apple className="h-7 w-7 text-primary" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Download from</div>
                  <div className="text-sm font-bold text-primary">App Store</div>
                </div>
              </a>
              <a
                href="#"
                className="group flex items-center gap-3 rounded-full border-2 border-primary/30 bg-background px-6 py-3 shadow-soft hover:border-primary hover:shadow-glow transition-smooth"
              >
                <Play className="h-7 w-7 text-primary" fill="currentColor" />
                <div className="text-left">
                  <div className="text-xs text-muted-foreground">Download from</div>
                  <div className="text-sm font-bold text-primary">Google Play</div>
                </div>
              </a>
            </div>
          </div>

          {/* Right illustration */}
          <div className="relative">
            <img
              src={heroImg}
              alt="Apdash mobile app illustration with team members"
              width={1280}
              height={1280}
              className="w-full max-w-2xl mx-auto animate-float drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
