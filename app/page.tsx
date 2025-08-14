
"use client";
import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import PixelRain from "../components/PixelRain";

const t = {
  fr: {
    heroTitle: "Transformez votre Hub en un vivier de talents exclusif",
    heroSub: "Réduisez le time-to-hire de 75% et économisez 5 000 € par recrutement — déjà adopté par Sciences Po et Wacano.",
    cta: "Réserver un appel de 15 min",
    trusted: "Ils nous font confiance",
    probTitle: "Votre hub capture-t-il réellement toute la valeur de sa communauté ?",
    probText: "Quand chaque startup recrute seule, des profils qualifiés se perdent et la valeur de l’écosystème diminue. Résultat : 45h gaspillées par recrutement et des opportunités manquées.",
    pillarsTitle: "Une infrastructure de talents partagée qui transforme votre hub",
    pillar1Title: "Activer l’écosystème",
    pillar1Text: "Un réseau de talents qui circule entre vos startups. Adoption à 100% en 3 mois.",
    pillar2Title: "Accélérer la croissance",
    pillar2Text: "Réduction du time-to-hire de 75%.",
    pillar3Title: "Créer un actif défensif",
    pillar3Text: "Un vivier exclusif où chaque “médaillé d’argent” est conservé (10–100 € de valeur par profil).",
    howTitle: "Comment ça marche",
    how1: "Connexion gratuite de toutes vos startups à la plateforme.",
    how2: "Les candidats non retenus rejoignent automatiquement le vivier commun.",
    how3: "Chaque startup accède à des talents pré-qualifiés par leurs pairs.",
    strip: "Chaque “non” à un bon candidat est un actif qui disparaît.",
    offerTitle: "Gratuit jusqu’en janvier 2026 — réservé aux 5 prochains hubs partenaires",
    offerSub: "Ensuite : 10 €/mois par startup (payé par le hub ou par les startups).",
    usecases: "Use cases clients",
    scpoTitle: "Sciences Po — Communauté alumni & startups",
    scpoText: "Sciences Po permet à ses startups et à sa communauté alumni de créer un réseau de candidats partageant leurs valeurs et leurs besoins — un vivier préqualifié, exclusif à leur écosystème.",
    wacanoTitle: "Wacano — des startups qui collaborent",
    wacanoText: "Wacano met en commun les “médaillés d’argent” de ses 56 startups pour réduire le time-to-hire, éviter la perte de profils qualifiés, et fluidifier la mobilité des talents au sein de son réseau.",
    ceoTitle: "Mot du CEO",
    ceoText: "Nous croyons que le recrutement ne doit pas être un combat solitaire. Ensemble, nous construisons des écosystèmes où chaque talent compte.",
  },
  en: {
    heroTitle: "Turn your Hub into an exclusive talent pool",
    heroSub: "Cut time-to-hire by 75% and save €5,000 per hire — already used by Sciences Po and Wacano.",
    cta: "Book a 15-min call",
    trusted: "Trusted by",
    probTitle: "Is your hub capturing the full value of its community?",
    probText: "When each startup hires alone, qualified profiles get lost and ecosystem value drops — 45h wasted per hire and missed opportunities.",
    pillarsTitle: "A shared talent infrastructure that transforms your hub",
    pillar1Title: "Activate the ecosystem",
    pillar1Text: "Talent flows between your startups. 100% adoption in 3 months.",
    pillar2Title: "Accelerate growth",
    pillar2Text: "75% reduction in time-to-hire.",
    pillar3Title: "Build a defensive asset",
    pillar3Text: "An exclusive pool where every “silver medalist” is kept (value €10–100 per profile).",
    howTitle: "How it works",
    how1: "Connect all your startups for free.",
    how2: "Not-selected candidates automatically join the shared pool.",
    how3: "Each startup accesses peer pre-qualified talent.",
    strip: "Every ‘no’ to a good candidate is an asset that evaporates.",
    offerTitle: "Free until January 2026 — limited to the next 5 partner hubs",
    offerSub: "Afterwards: €10/month per startup (paid by the hub or startups).",
    usecases: "Customer use cases",
    scpoTitle: "Sciences Po — Alumni & startups community",
    scpoText: "Sciences Po enables its startups and alumni community to create a network of candidates sharing their values and needs — a pre-qualified pool exclusive to their ecosystem.",
    wacanoTitle: "Wacano — startups that collaborate",
    wacanoText: "Wacano shares the “silver medalists” across its 56 startups to cut time-to-hire, prevent talent loss, and improve mobility inside its network.",
    ceoTitle: "From the CEO",
    ceoText: "Hiring shouldn’t be a solitary fight. Together, we build ecosystems where every talent counts.",
  }
};

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="container py-16">
      {title ? <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-6" data-anim>{title}</h2> : null}
      <div data-anim>{children}</div>
    </section>
  );
}

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
      <PixelRain />
      <NavBar onLang={setLang} />

      {/* HERO */}
      <section className="container py-16">
        <h1 className="text-3xl md:text-5xl font-poppins font-semibold mb-4" data-anim>{L.heroTitle}</h1>
        <p className="text-lg md:text-xl text-ink/80 mb-6" data-anim>{L.heroSub}</p>
        <a href="https://cal.com/david-10but/15min" target="_blank" className="rounded-md bg-accent text-white font-medium px-5 py-3 shadow-soft hover:opacity-90 transition" data-anim>
          {L.cta}
        </a>
        <div className="mt-10 trust" data-anim>
          <div className="trust-title">{L.trusted}</div>
          <div className="trust-logos">
            <img src="/images/sciencespo.png" alt="Sciences Po" />
            <span className="divider" />
            <img src="/images/wacano.jpg" alt="Wacano" />
          </div>
        </div>
      </section>

      {/* PROBLÈME + mini réseau statique */}
      <Section title={L.probTitle}>
        <p className="text-ink/80 mb-6">{L.probText}</p>
        <div className="network">
          <svg viewBox="0 0 640 240" className="w-full h-auto">
            <defs>
              <radialGradient id="gold" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD166" />
                <stop offset="100%" stopColor="#E63946" stopOpacity="0.1" />
              </radialGradient>
            </defs>
            <g>
              <line x1="320" y1="120" x2="120" y2="40" className="ln"/>
              <line x1="320" y1="120" x2="80"  y2="120" className="ln"/>
              <line x1="320" y1="120" x2="160" y2="200" className="ln"/>
              <line x1="320" y1="120" x2="480" y2="40"  className="ln"/>
              <line x1="320" y1="120" x2="520" y2="120" className="ln"/>
              <line x1="320" y1="120" x2="480" y2="200" className="ln"/>
            </g>
            <g>
              <circle cx="120" cy="40"  r="8" className="nd n1"/>
              <circle cx="80"  cy="120" r="8" className="nd n2"/>
              <circle cx="160" cy="200" r="8" className="nd n3"/>
              <circle cx="480" cy="40"  r="8" className="nd n1"/>
              <circle cx="520" cy="120" r="8" className="nd n2"/>
              <circle cx="480" cy="200" r="8" className="nd n3"/>
            </g>
            <g>
              <circle cx="320" cy="120" r="60" fill="url(#gold)" className="cv-glow"/>
              <rect x="290" y="90" width="60" height="60" rx="10" className="cv-card"/>
              <text x="320" y="125" textAnchor="middle" className="cv-text">CV</text>
            </g>
          </svg>
        </div>
      </Section>

      {/* PILIERS */}
      <Section title={L.pillarsTitle}>
        <div className="pillars">
          <div className="pillar">
            <div className="bars"><span/><span/><span/></div>
            <h3 className="ptitle">{L.pillar1Title}</h3>
            <p className="ptext">{L.pillar1Text}</p>
          </div>
          <div className="pillar">
            <div className="bars"><span/><span/><span/></div>
            <h3 className="ptitle">{L.pillar2Title}</h3>
            <p className="ptext">{L.pillar2Text}</p>
          </div>
          <div className="pillar">
            <div className="bars"><span/><span/><span/></div>
            <h3 className="ptitle">{L.pillar3Title}</h3>
            <p className="ptext">{L.pillar3Text}</p>
          </div>
        </div>
      </Section>

      {/* COMMENT ÇA MARCHE */}
      <Section title={L.howTitle}>
        <ol className="steps">
          <li className="step"><span className="badge">1</span>{L.how1}</li>
          <li className="step"><span className="badge">2</span>{L.how2}</li>
          <li className="step"><span className="badge">3</span>{L.how3}</li>
        </ol>
        <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a>
      </Section>

      {/* STRIP */}
      <div className="strip">{L.strip}</div>

      {/* OFFER */}
      <Section title={L.offerTitle}>
        <div className="offer">
          <p className="text-ink/80">{L.offerSub}</p>
          <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a>
        </div>
      </Section>

      {/* USE CASES */}
      <Section title={L.usecases}>
        <div className="cases">
          <div className="case">
            <img src="/images/sciencespo.png" alt="Sciences Po" className="logo" />
            <h3 className="ctitle">{L.scpoTitle}</h3>
            <p>{L.scpoText}</p>
          </div>
          <div className="case">
            <img src="/images/wacano.jpg" alt="Wacano" className="logo" />
            <h3 className="ctitle">{L.wacanoTitle}</h3>
            <p>{L.wacanoText}</p>
          </div>
        </div>
      </Section>

      {/* CEO */}
      <Section title={L.ceoTitle}>
        <div className="ceo">
          <p className="text-ink/80">{L.ceoText}</p>
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="container py-8 text-sm text-ink/70 flex items-center justify-between">
          <p>© {new Date().getFullYear()} 10but</p>
          <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a>
        </div>
      </footer>
    </main>
  );
}
