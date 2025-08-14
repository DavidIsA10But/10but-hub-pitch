
"use client";
import { useState } from "react";

export default function NavBar({ onLang }: { onLang: (lang: 'fr'|'en') => void }) {
  const [lang, setLang] = useState<'fr'|'en'>('fr');
  const switchLang = () => {
    const next = lang === 'fr' ? 'en' : 'fr';
    setLang(next);
    onLang(next);
  };
  return (
    <header className="safe-content sticky top-0 z-50 bg-white/80 backdrop-blur border-b">
      <div className="mx-auto max-w-6xl px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img src="/images/logo-10but.svg" alt="10but" className="h-7 w-auto" />
          <span className="sr-only">10but</span>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://cal.com/david-10but/15min" target="_blank" className="rounded-md bg-accent text-white font-medium px-4 py-2 shadow-soft hover:opacity-90 transition">
            {lang==='fr' ? "Réserver un appel" : "Book a call"}
          </a>
          <button onClick={switchLang} className="text-sm underline decoration-accent/50 underline-offset-4">
            {lang==='fr' ? "EN" : "FR"}
          </button>
        </div>
      </div>
    </header>
  );
}
