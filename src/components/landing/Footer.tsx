import { Zap, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="bg-[#111111] text-[#FFFFFF] pt-20 pb-8">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-10 mb-12">
          <div>
            <a href="#home" className="flex items-center gap-2 mb-4">
              <img src="/logo.png" alt="ZoujUp" className="h-10 w-10 rounded-[10px] object-cover" />
              <span className="text-2xl font-bold font-display text-[#FFFFFF]">ZoujUp</span>
            </a>
            <p className="text-sm opacity-70 leading-relaxed">
              Master new languages through structured 10-minute speaking sessions with real people. Built for speakers.
            </p>
            <div className="flex gap-3 mt-6">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                <a key={i} href="#" className="group flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-[#FFC107] transition-smooth">
                  <Icon className="h-4 w-4 text-[#FFFFFF] group-hover:text-[#111111]" />
                </a>
              ))}
            </div>
          </div>

          {[
            { title: "Company", links: ["About", "Features", "Works", "Career"] },
            { title: "Product", links: ["Updates", "Help"] },
            { title: "Support", links: ["FAQ", "Privacy Policy", "Terms", "Contact"] },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-bold mb-4">{col.title}</h4>
              <ul className="space-y-2 text-sm opacity-70">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:opacity-100 hover:text-[#FFC107] transition-smooth">{l}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-6 text-center text-sm opacity-60">
          © {new Date().getFullYear()} ZoujUp. Crafted with care.
        </div>
      </div>
    </footer>
  );
}
