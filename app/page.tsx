
"use client";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import PixelRain from "../components/PixelRain";

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="container py-section md:py-section-lg">
      {title ? <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-6" data-anim>{title}</h2> : null}
      <div data-anim>{children}</div>
    </section>
  );
}

const L = {
  heroTitle: "Transformez votre Hub en un vivier de talents exclusif",
  heroSub: "Réduisez le time-to-hire de 75% et économisez 5 000 € par recrutement — déjà adopté par Sciences Po et Wacano.",
  cta: "Réserver un appel de 15 min",
  trusted: "Ils nous font confiance",
  probTitle: "Votre hub capture-t-il réellement toute la valeur de sa communauté ?",
  probText: "Quand chaque startup recrute seule, des profils qualifiés se perdent et la valeur de l’écosystème diminue. Résultat : 45h gaspillées par recrutement et des opportunités manquées.",
  pillarsTitle: "Une infrastructure de talents partagée qui transforme votre hub",
  pillar1Title: "Activer l’écosystème",
  pillar1Text: "Un réseau de talents qui circule entre vos startups.",
  pillar2Title: "Accélérer la croissance",
  pillar2Text: "Réduction du time-to-hire de 75%.",
  pillar3Title: "Créer un actif défensif",
  pillar3Text: "Un vivier exclusif où chaque “médaillé d’argent” est conservé.",
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
  faq: [
    {q:"Qui possède les données du vivier ?", a:"Le hub conserve la gouvernance. Si le hub accède aux profils d’autres hubs, c’est dans le cadre d’un système participatif avec crédits : ajoutez un candidat, vous recevez un crédit ; découvrez un candidat, vous payez un crédit.
    {q:"Quelles intégrations ?", a:"Nous nous occupons de tout : export CSV et connexions ATS (Workable, Lever).."},
    {q:"Quel engagement ?", a:"Offre gratuite jusqu’au 1er janvier 2026, résiliable à tout moment.
  ]
};

export default function Page() {

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
      <NavBar />

      {/* HERO */}
      <section className="container pt-36>
        <h1 className="text-3xl md:text-5xl font-poppins font-semibold mb-5" data-anim>{L.heroTitle}</h1>
        <p className="text-lg md:text-xl text-ink/80 mb-8" data-anim>{L.heroSub}</p>
        <div className="flex gap-3" data-anim>
          <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a>
          <button id="open-demo" className="rounded-md border border-ink/10 px-4 py-3">Voir la démo (3 min)</button>
        </div>
        <div className="mt-10 trust" data-anim>
          <div className="trust-title">{L.trusted}</div>
          <div className="trust-logos">
            <img src="/images/sciencespo.png" alt="Logo Sciences Po" />
            <span className="divider" />
            <img src="/images/wacano.jpg" alt="Logo Wacano" />
          </div>
          <div className="chips">
            <span className="chip">Adoption 100% (en 3 mois)</span>
            <span className="chip">–75% time-to-hire</span>
            <span className="chip">5 000 € économisés / recrutement</span>
          </div>
        </div>
      </section>

      {/* PROBLEM */}
      <Section title={L.probTitle}>
        <p className="text-ink/80 mb-8">{L.probText}</p>
        <div className="network" data-anim>
          <svg viewBox="0 0 640 260" className="w-full h-auto">
            <defs>
              <radialGradient id="gold" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFD166" />
                <stop offset="100%" stopColor="#E63946" stopOpacity="0.08" />
              </radialGradient>
            </defs>
            <g>
              <line x1="320" y1="130" x2="120" y2="50" className="ln"/>
              <line x1="320" y1="130" x2="80"  y2="130" className="ln"/>
              <line x1="320" y1="130" x2="160" y2="210" className="ln"/>
              <line x1="320" y1="130" x2="480" y2="50"  className="ln"/>
              <line x1="320" y1="130" x2="520" y2="130" className="ln"/>
              <line x1="320" y1="130" x2="480" y2="210" className="ln"/>
            </g>
            <g>
              <circle cx="120" cy="50"  r="8" className="nd"/>
              <circle cx="80"  cy="130" r="8" className="nd"/>
              <circle cx="160" cy="210" r="8" className="nd"/>
              <circle cx="480" cy="50"  r="8" className="nd"/>
              <circle cx="520" cy="130" r="8" className="nd"/>
              <circle cx="480" cy="210" r="8" className="nd"/>
            </g>
            <g>
              <circle cx="320" cy="130" r="70" fill="url(#gold)" className="cv-glow"/>
              <rect x="285" y="95" width="70" height="70" rx="12" className="cv-card"/>
              <text x="320" y="135" textAnchor="middle" className="cv-text">CV</text>
            </g>
          </svg>
        </div>
      </Section>

      {/* PILLARS */}
      <Section title={L.pillarsTitle}>
        <div className="pillars">
          <div className="pillar" data-anim>
            <div className="bars"><span/><span/><span/></div>
            <h3 className="ptitle">{L.pillar1Title}</h3>
            <p className="ptext">{L.pillar1Text}</p>
            <span className="kpibadge">+ circulation de profils</span>
          </div>
          <div className="pillar" data-anim>
            <div className="bars"><span/><span/><span/></div>
            <h3 className="ptitle">{L.pillar2Title}</h3>
            <p className="ptext">{L.pillar2Text}</p>
            <span className="kpibadge">–75% TTH</span>
          </div>
          <div className="pillar" data-anim>
            <div className="bars"><span/><span/><span/></div>
            <h3 className="ptitle">{L.pillar3Title}</h3>
            <p className="ptext">{L.pillar3Text}</p>
            <span className="kpibadge">10–100 € par “silver”</span>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section title={L.howTitle}>
        <ol className="steps">
          <li className="step"><span className="badge">1</span>{L.how1} <span className="chip ml-2">⚡ 5 min</span></li>
          <li className="step"><span className="badge">2</span>{L.how2} <span className="chip ml-2">↔︎ Automatique</span></li>
          <li className="step"><span className="badge">3</span>{L.how3} <span className="chip ml-2">✅ Pairs-qualified</span></li>
        </ol>
        <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a>
      </Section>

      {/* STRIP */}
      <div className="strip">{L.strip}</div>

      {/* OFFER */}
      <Section title={L.offerTitle}>
        <div className="offer">
          <p className="text-ink/80">{L.offerSub}</p>
          <div className="flex items-center gap-10">
            <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a>
            <div className="text-sm">
              <div className="font-poppins">Places restantes : <span className="text-accent font-semibold">2/5</span></div>
              <div className="text-ink/60">Sans engagement</div>
            </div>
          </div>
        </div>
      </Section>

      {/* USE CASES */}
      <Section title={L.usecases}>
        <div className="cases">
          <div className="case" data-anim>
            <img src="/images/sciencespo.png" alt="Sciences Po" className="logo" />
            <h3 className="font-poppins font-semibold mb-2">{L.scpoTitle}</h3>
            <p>{L.scpoText}</p>
          </div>
          <div className="case" data-anim>
            <img src="/images/wacano.jpg" alt="Wacano" className="logo" />
            <h3 className="font-poppins font-semibold mb-2">{L.wacanoTitle}</h3>
            <p>{L.wacanoText}</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section title="FAQ">
        <div className="faq">
          {L.faq.map((it, idx) => (
            <div key={idx}>
              <div className="q">{it.q}</div>
              <div className="a">{it.a}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* FOOTER */}
      <footer className="border-t">
        <div className="container py-10 text-sm text-ink/70 flex items-center justify-between">
          <p>© {new Date().getFullYear()} 10but</p>
          <div className="flex gap-3">
            <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a>
            </div>
        </div>
      </footer>

      {/* Modal (Cal embed) */}
      <div id="modal-root"></div>
      <script dangerouslySetInnerHTML={{__html: `
        (function(){
          var btn = document.getElementById('open-demo');
          if(!btn) return;
          btn.addEventListener('click', function(){
            var root = document.getElementById('modal-root');
            if(!root) return;
            root.innerHTML = '<div class="modal-backdrop" id="mb"><div class="modal"><header><strong>Demo</strong><button id="close">Close</button></header><iframe src="https://cal.com/david-10but/15min?embed=true"></iframe></div></div>';
            document.getElementById('close').onclick = function(){ document.getElementById('mb').remove(); };
            document.getElementById('mb').onclick = function(e){ if(e.target.id==="mb") e.currentTarget.remove(); };
          });
        })();
      `}} />
    </main>
  );
}
