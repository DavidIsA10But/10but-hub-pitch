
"use client";
import { useState } from "react";

export default function NavBar({ onLang }: { onLang: (l:'fr'|'en')=>void }) {
  const [lang, setLang] = useState<'fr'|'en'>('fr');
  const switchLang = () => { const next = lang==='fr'?'en':'fr'; setLang(next); onLang(next); };
  return (
    <header className="sticky top-0 z-50 bg-white/85 backdrop-blur border-b">
      <div className="container py-3 flex items-center justify-between">
        <div className="font-poppins font-semibold">10but</div>
        <div className="flex items-center gap-3">
          <a href="https://cal.com/david-10but/15min" target="_blank" className="rounded-md bg-accent text-white font-medium px-4 py-2 shadow-soft hover:opacity-90 transition">
            {lang==='fr' ? "Réserver un appel" : "Book a call"}
          </a>
          <button onClick={switchLang} className="text-sm border border-accent/60 rounded-md px-3 py-1">{lang==='fr' ? "EN" : "FR"}</button>
        </div>
      </div>
    </header>
  );
}
