
"use client";
import { useEffect, useState } from "react";
import PixelRain from "../components/PixelRain";
import Section from "../components/Section";
import NavBar from "../components/NavBar";

const t = {
  fr: {
    heroTitle: "Transformez votre Hub en un vivier de talents exclusif — déjà adopté par Sciences Po et Wacano.",
    heroSub: "Stoppez la fuite des talents : réduisez le temps de recrutement de 75% et économisez 5 000 € par recrutement.",
    cta: "Réserver un appel de 15 min",
    probTitle: "Votre hub capture-t-il réellement toute la valeur de sa communauté ?",
    probText: "Quand chaque startup recrute seule, les profils qualifiés se perdent et la valeur de l’écosystème diminue. Résultat : 45h gaspillées par recrutement et des opportunités manquées.",
    pillarsTitle: "Une infrastructure de talents partagée qui transforme votre hub.",
    pillar1: "Activer l’écosystème : un réseau de talents circulant entre vos startups. Adoption à 100% en 3 mois.",
    pillar2: "Accélérer la croissance : réduction du time-to-hire de 75%.",
    pillar3: "Créer un actif défensif : un vivier exclusif où chaque “médaillé d’argent” est conservé (10–100 € de valeur par profil).",
    howTitle: "Comment ça marche",
    how1: "Connexion gratuite de toutes vos startups à la plateforme.",
    how2: "Les candidats non retenus rejoignent automatiquement le vivier commun.",
    how3: "Chaque startup accède à des talents préqualifiés par leurs pairs.",
    strip: "Chaque “non” à un bon candidat est un actif qui disparaît.",
    offerTitle: "Gratuit jusqu’en janvier 2026 — réservé aux 5 prochains hubs partenaires.",
    offerSub: "Tarif ensuite : 10 €/mois par startup (prise en charge par le hub ou par les startups).",
    ceoTitle: "Mot du CEO",
    trustedBy: "Ils nous font confiance",
    usecasesTitle: "Use cases clients",
    wacanoSub: "des startups qui collaborent",
    ceoText: "Nous croyons que le recrutement ne doit pas être un combat solitaire. Ensemble, nous construisons des écosystèmes où chaque talent compte.",
  },
  en: {
    heroTitle: "Turn your hub into an exclusive talent pool — already used by Sciences Po and Wacano.",
    heroSub: "Stop talent leakage: cut time-to-hire by 75% and save €5,000 per hire.",
    cta: "Book a 15-min call",
    probTitle: "Is your hub capturing the full value of its community?",
    probText: "When each startup recruits alone, qualified profiles are lost and ecosystem value drops — 45h wasted per hire.",
    pillarsTitle: "A shared talent infrastructure that transforms your hub.",
    pillar1: "Activate the ecosystem: talent circulates between your startups. 100% adoption in 3 months.",
    pillar2: "Accelerate growth: 75% time-to-hire reduction.",
    pillar3: "Build a defensive asset: an exclusive pool where every 'silver medalist' is kept (value €10–100 per profile).",
    howTitle: "How it works",
    how1: "Connect all your startups for free.",
    how2: "Not-selected candidates automatically join the shared pool.",
    how3: "Each startup accesses peer pre-qualified talent.",
    strip: "Every 'no' to a good candidate is an asset that evaporates.",
    offerTitle: "Free until January 2026 — limited to the next 5 partner hubs.",
    offerSub: "Then €10/month per startup (paid by hub or startups).",
    ceoTitle: "From our CEO",
    trustedBy: "Trusted by",
    usecasesTitle: "Customer use cases",
    wacanoSub: "startups that collaborate",
    ceoText: "Hiring shouldn’t be a solitary fight. Together, we build ecosystems where every talent counts.",
  }
};




function NetworkCVAnim() {
  const points = [
    [120,60],[80,160],[160,240],[280,80],[260,180],[340,260],[460,60],[520,140],[480,220]
  ];
  const linkEls = points.map((pt, i) => (
    <line key={"l"+i} x1={320} y1={160} x2={pt[0]} y2={pt[1]} className={"ln l" + (i % 3)} />
  ));
  const nodeEls = points.map((pt, i) => (
    <circle key={"n"+i} cx={pt[0]} cy={pt[1]} r={8} className={"nd n" + (i % 4)} />
  ));
  const inflowEls = points.slice(0,9).map((pt, i) => (
    <circle key={"in"+i} cx={100} cy={50 + i*6} r={4} className={"vp to-hub d" + (i % 6)} />
  ));
  return (
    <div className="network-anim" aria-hidden="true">
      <svg viewBox="0 0 640 320" className="w-full h-auto">
        <defs>
          <clipPath id="hub"><rect x={420} y={40} width={140} height={80} rx={10} /></clipPath>
        </defs>
        <g id="layer">
          <g className="links">{linkEls}</g>
          <g className="nodes">{nodeEls}</g>
          <g className="cv">
            <rect x={280} y={120} width={80} height={80} rx={10} className="cv-card" />
            <text x={320} y={165} textAnchor="middle" className="cv-text">CV</text>
            <circle cx={320} cy={160} r={60} className="cv-glow" />
          </g>
          <g clipPath="url(#hub)">{inflowEls}</g>
        </g>
      </svg>
    </div>
  );
}


        <g className="links">
          {[[120,60],[80,160],[160,240],[280,80],[260,180],[340,260],[460,60],[520,140],[480,220]].map((pt,i)=> (
            <line key={i} x1="320" y1="160" x2={pt[0]} y2={pt[1]} className={`ln l${i%3}`} />
          ))}
        </g>
        {/* nodes */}
        <g className="nodes">
          {[[120,60],[80,160],[160,240],[280,80],[260,180],[340,260],[460,60],[520,140],[480,220]].map((pt,i)=> (
            <circle key={i} cx={pt[0]} cy={pt[1]} r="8" className={`nd n${i%4}`} />
          ))}
        </g>
        {/* central CV card */}
        <g className="cv">
          <rect x="280" y="120" width="80" height="80" rx="10" className="cv-card" />
          <text x="320" y="165" textAnchor="middle" className="cv-text">CV</text>
          <circle cx="320" cy="160" r="60" className="cv-glow" />
        </g>
      </svg>
    </div>
  );
}
        <rect x="420" y="40" width="140" height="80" rx="10" className="hub-box"/>
        {Array.from({ length: 9 }).map((_, i) => (
          <circle key={"in-" + i} cx="100" cy={50 + i*6} r="4" className={"vp to-hub d" + (i % 6)} clipPath="url(#hub)"/>
        ))}
      </svg>
    </div>
  );
}

export default function Page() {
  const [lang, setLang] = useState<'fr'|'en'>('fr');

  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) if (e.isIntersecting) e.target.classList.add("animate-in");
    }, { rootMargin: "0px 0px -10% 0px" });
    document.querySelectorAll("[data-animate]").forEach(el => io.observe(el));
    return () => io.disconnect();
  }, []);

  const L = t[lang];

  return (
    <>
      <PixelRain />
      <div className="safe-content relative">
        <NavBar onLang={setLang} />

        {/* Hero (no CEO photo) */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
            <div data-animate className="md:col-span-2">
              <h1 className="font-poppins text-3xl md:text-5xl font-semibold mb-4">{L.heroTitle}</h1>
              <p className="text-lg md:text-xl text-ink/80 mb-6">{L.heroSub}</p>
              <div className="flex gap-3">
                <a href="https://cal.com/david-10but/15min" target="_blank" className="rounded-md bg-accent text-white font-medium px-5 py-3 shadow-soft hover:opacity-90 transition">
                  {L.cta}
                </a>
              </div>
              <div className="mt-8 trust-window" data-animate>
                <div className="trust-title">{L.trustedBy}</div>
                <div className="trust-logos">
                  <img src="/images/sciencespo.png" alt="Sciences Po" />
                  <span className="trust-divider" />
                  <img src="/images/wacano.jpg" alt="Wacano" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problème orienté hub + animation */}
        <Section title={L.probTitle}>
          <p data-animate>{L.probText}</p>
          <div className="mt-8" data-animate>
            <NetworkCVAnim />
          </div>
        </Section>

        {/* Solution - piliers avec hover bars */}
        <Section title={L.pillarsTitle}>
          <div className="pillars" data-animate>
            <div className="pillar-card">
              <div className="pillar-bars">
                <span style={{height:'30%'}}/>
                <span style={{height:'50%'}}/>
                <span style={{height:'40%'}}/>
              </div>
              <div className="pillar-title">Activer l’écosystème</div>
              <div className="pillar-text">{L.pillar1}</div>
            </div>
            <div className="pillar-card">
              <div className="pillar-bars">
                <span style={{height:'35%'}}/>
                <span style={{height:'70%'}}/>
                <span style={{height:'45%'}}/>
              </div>
              <div className="pillar-title">Accélérer la croissance</div>
              <div className="pillar-text">{L.pillar2}</div>
            </div>
            <div className="pillar-card">
              <div className="pillar-bars">
                <span style={{height:'25%'}}/>
                <span style={{height:'45%'}}/>
                <span style={{height:'85%'}}/>
              </div>
              <div className="pillar-title">Créer un actif défensif</div>
              <div className="pillar-text">{L.pillar3}</div>
            </div>
          </div>
        </Section>

        {/* Comment ça marche - steps grow */}
        <Section title={L.howTitle}>
          <ol className="grid md:grid-cols-3 gap-6" data-animate>
            <li className="step-card"><span className="step-badge">1</span>{L.how1}</li>
            <li className="step-card"><span className="step-badge">2</span>{L.how2}</li>
            <li className="step-card"><span className="step-badge">3</span>{L.how3}</li>
          </ol>
          <div className="mt-8">
            <a href="https://cal.com/david-10but/15min" target="_blank" className="rounded-md bg-accent text-white font-medium px-5 py-3 shadow-soft hover:opacity-90 transition">
              {L.cta}
            </a>
          </div>
        </Section>

        {/* Bande "loss" */}
        <div className="safe-content bg-ink text-white">
          <div className="mx-auto max-w-6xl px-6 py-8 text-center font-poppins" data-animate>
            {L.strip}
          </div>
        </div>

        {/* Use cases clients */}
        <Section title={L.usecasesTitle}>
          <div className="grid md:grid-cols-2 gap-6" data-animate>
            <div className="usecase">
              <img src="/images/sciencespo.png" alt="Sciences Po" className="usecase-logo" />
              <h3>Sciences Po — Communauté alumni & startups</h3>
              <p>
                Sciences Po permet à ses startups et à sa communauté alumni de créer un réseau de candidats
                partageant leurs valeurs et leurs besoins — un vivier préqualifié, exclusif à leur écosystème.
              </p>
            </div>
            <div className="usecase">
              <img src="/images/wacano.jpg" alt="Wacano" className="usecase-logo" />
              <h3>Wacano — {L.wacanoSub}</h3>
              <p>
                Wacano met en commun les “médaillés d’argent” de ses 56 startups pour réduire le time-to-hire, éviter la perte de profils qualifiés, et fluidifier la mobilité des talents au sein de son réseau.
              </p>
            </div>
          </div>
        </Section>

        {/* CEO en bas, pas en Hero */}
        <Section title={L.ceoTitle}>
          <div className="flex flex-col md:flex-row items-center gap-6" data-animate>
            <img src="/images/ceo.jpg" alt="David Elbez, CEO" className="w-32 h-32 rounded-full object-cover ring-2 ring-accent/20" />
            <p className="text-ink/80">{L.ceoText}</p>
          </div>
        </Section>

        <footer className="safe-content border-t">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-ink/60 flex flex-col md:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} 10but</p>
            <a href="https://cal.com/david-10but/15min" target="_blank" className="cta-strong">
              {L.cta}
            </a>
            <span className="lang-pill cursor-default">{lang === "fr" ? "FR" : "EN"}</span>
          </div>
        </footer>
      </div>
    </>
  );
}
