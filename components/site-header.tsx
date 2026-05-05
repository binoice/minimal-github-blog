import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-card/60 backdrop-blur-md">
      <div className="container mx-auto max-w-5xl flex h-16 items-center px-4 sm:px-6 lg:px-8 justify-between">
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-black tracking-tighter uppercase">DevCanvas.</span>
          </Link>
          <nav className="hidden md:flex gap-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <Link href="/" className="text-foreground hover:text-foreground/80 transition-colors">Writings</Link>
            <Link href="/about" className="hover:text-foreground transition-colors">About</Link>
          </nav>
        </div>
        <div className="flex items-center space-x-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
