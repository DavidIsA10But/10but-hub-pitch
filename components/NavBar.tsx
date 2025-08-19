
"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const pathname = usePathname();
  const isEN = pathname.startsWith("/en");
  const switchHref = isEN ? "/" : "/en";
  const ctaLabel = isEN ? "Book a call" : "Réserver un appel";
  const langLabel = isEN ? "FR" : "EN";
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b">
      <div className="py-4 px-5 flex items-center justify-between max-w-6xl mx-auto">
        <Link href={isEN ? "/en" : "/"} className="font-poppins font-semibold">10but</Link>
        <div className="flex items-center gap-3">
          <a href="https://cal.com/david-10but/15min" target="_blank" className="rounded-md bg-accent text-white font-medium px-4 py-2 shadow-soft hover:opacity-90 transition">
            {ctaLabel}
          </a>
          <Link href={switchHref} className="text-sm border border-accent/60 rounded-md px-3 py-1">{langLabel}</Link>
        </div>
      </div>
    </header>
  );
}
