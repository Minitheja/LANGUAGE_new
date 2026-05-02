import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, X, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "How it works", href: "#how" },
  { label: "Why us", href: "#difference" },
  { label: "Habit", href: "#habit" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-background/85 backdrop-blur border-b border-border">
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary">
            <Mic className="h-5 w-5 text-primary-foreground" />
          </span>
          <span className="text-xl font-bold tracking-tight">Speakly</span>
        </Link>

        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3">
          <Link to="/dashboard" className="text-sm font-medium text-muted-foreground hover:text-foreground">
            Dashboard
          </Link>
          <Button variant="cta" size="default">Start a session</Button>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden border-t border-border bg-background">
          <ul className="container mx-auto px-6 py-4 space-y-3">
            {navItems.map((item) => (
              <li key={item.href}>
                <a href={item.href} onClick={() => setOpen(false)} className="block py-2 text-sm font-medium">
                  {item.label}
                </a>
              </li>
            ))}
            <li>
              <Link to="/dashboard" className="block py-2 text-sm font-medium">Dashboard</Link>
            </li>
            <li>
              <Button variant="cta" className="w-full">Start a session</Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
