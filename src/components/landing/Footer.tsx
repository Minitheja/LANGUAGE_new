import { Link } from "@tanstack/react-router";
import { Mic } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <Link to="/" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Mic className="h-4 w-4 text-primary-foreground" />
          </span>
          <span className="font-bold">Speakly</span>
        </Link>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Speakly. Speak every day.
        </p>
      </div>
    </footer>
  );
}
