
"use client";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";

const t = {
  fr: {
    title: "Transformez votre Hub en un vivier de talents exclusif",
    sub: "Réduisez le time-to-hire de 75% et économisez 5 000 € par recrutement — déjà adopté par Sciences Po et Wacano.",
    cta: "Réserver un appel de 15 min",
    trusted: "Ils nous font confiance",
    usecases: "Use cases clients",
    wacanoSub: "des startups qui collaborent",
  },
  en: {
    title: "Turn your Hub into an exclusive talent pool",
    sub: "Cut time-to-hire by 75% and save €5,000 per hire — already used by Sciences Po and Wacano.",
    cta: "Book a 15-min call",
    trusted: "Trusted by",
    usecases: "Customer use cases",
    wacanoSub: "startups that collaborate",
  }
};

export default function Page() {
  const [lang, setLang] = useState<'fr'|'en'>('fr');
  const L = t[lang];

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) e.target.classList.add("animate-in");
    }, { rootMargin: "0px 0px -10% 0px" });
    document.querySelectorAll("[data-anim]").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <main>
      <NavBar onLang={setLang} />

      <section className="container py-16">
        <h1 className="text-3xl md:text-5xl font-poppins font-semibold mb-4" data-anim>{L.title}</h1>
        <p className="text-lg md:text-xl text-ink/80 mb-6" data-anim>{L.sub}</p>
        <a href="https://cal.com/david-10but/15min" target="_blank" className="rounded-md bg-accent text-white font-medium px-5 py-3 shadow-soft hover:opacity-90 transition" data-anim>
          {L.cta}
        </a>

        <div className="mt-10 border rounded-xl p-4 inline-block shadow-soft" data-anim>
          <div className="text-xs tracking-widest uppercase text-accent font-poppins">{L.trusted}</div>
          <div className="mt-3 flex items-center gap-4">
            <img src="/images/sciencespo.png" alt="Sciences Po" className="h-7 w-auto" />
            <span className="w-px h-6 bg-black/10" />
            <img src="/images/wacano.jpg" alt="Wacano" className="h-7 w-auto" />
          </div>
        </div>
      </section>

      <section className="container py-16 border-t">
        <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-6" data-anim>{L.usecases}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl border p-6 shadow-soft" data-anim>
            <img src="/images/sciencespo.png" alt="Sciences Po" className="h-7 w-auto mb-3" />
            <h3 className="font-poppins font-semibold mb-2">Sciences Po — Communauté alumni & startups</h3>
            <p>Sciences Po permet à ses startups et à sa communauté alumni de créer un réseau de candidats partageant leurs valeurs et leurs besoins — un vivier préqualifié, exclusif à leur écosystème.</p>
          </div>
          <div className="rounded-xl border p-6 shadow-soft" data-anim>
            <img src="/images/wacano.jpg" alt="Wacano" className="h-7 w-auto mb-3" />
            <h3 className="font-poppins font-semibold mb-1">Wacano — {L.wacanoSub}</h3>
            <p>Wacano met en commun les “médaillés d’argent” de ses 56 startups pour réduire le time-to-hire, éviter la perte de profils qualifiés, et fluidifier la mobilité des talents au sein de son réseau.</p>
          </div>
        </div>
      </section>

      <footer className="border-t">
        <div className="container py-8 text-sm text-ink/70 flex items-center justify-between">
          <p>© {new Date().getFullYear()} 10but</p>
          <a href="https://cal.com/david-10but/15min" target="_blank" className="bg-accent text-white px-4 py-2 rounded-md font-medium shadow-soft">{
            L.cta
          }</a>
        </div>
      </footer>
    </main>
  );
}
