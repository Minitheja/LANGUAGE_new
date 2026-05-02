import { Zap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground text-background pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-primary">
                <Zap className="h-5 w-5 text-primary-foreground" fill="currentColor" />
              </span>
              <span className="text-2xl font-bold font-display">Apdash</span>
            </a>
            <p className="text-sm opacity-70 leading-relaxed">
              Conveniently generate multifunctional markets and B2C vortals with Apdash.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-gradient-primary transition-smooth">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Company", links: ["About", "Features", "Works", "Career"] },
            { title: "Product", links: ["Pricing", "Free Trail", "Updates", "Help"] },
            { title: "Support", links: ["FAQ", "Privacy Policy", "Terms", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-4">{col.title}</h4>
              <ul className="space-y-2 text-sm opacity-70">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:opacity-100 hover:text-primary-glow transition-smooth">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} Apdash. Crafted with care.
        </div>
      </div>
    </footer>
  );
}
