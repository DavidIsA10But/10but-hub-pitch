
"use client";
import Image from "next/image";
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
    socialTitle: "Partenaires fondateurs",
    offerTitle: "Gratuit jusqu’en janvier 2026 — réservé aux 5 prochains hubs partenaires.",
    offerSub: "Tarif ensuite : 10 €/mois par startup (prise en charge par le hub ou par les startups).",
    ceoTitle: "Le mot du CEO",
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
    socialTitle: "Founding partners",
    offerTitle: "Free until January 2026 — limited to the next 5 partner hubs.",
    offerSub: "Then €10/month per startup (paid by hub or startups).",
    ceoTitle: "From our CEO",
    ceoText: "Hiring shouldn’t be a solitary fight. Together, we build ecosystems where every talent counts.",
  }
};

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

        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20 grid md:grid-cols-2 gap-10 items-center">
            <div data-animate>
              <h1 className="font-poppins text-3xl md:text-5xl font-semibold mb-4">{L.heroTitle}</h1>
              <p className="text-lg md:text-xl text-ink/80 mb-6">{L.heroSub}</p>
              <div className="flex gap-3">
                <a href="https://cal.com/david-10but/15min" target="_blank" className="rounded-md bg-accent text-white font-medium px-5 py-3 shadow-soft hover:opacity-90 transition">
                  {L.cta}
                </a>
              </div>
              <div className="mt-8 flex items-center gap-6 opacity-90">
                <img src="/images/sciencespo.png" alt="Sciences Po" className="h-8 md:h-10 w-auto" />
                <img src="/images/wacano.jpg" alt="Wacano" className="h-8 md:h-10 w-auto" />
              </div>
            </div>
            <div className="justify-self-center" data-animate>
              <div className="rounded-xl overflow-hidden shadow-soft ring-1 ring-black/5">
                <Image src="/images/ceo.jpg" alt="David Elbez, CEO" width={560} height={560} />
              </div>
            </div>
          </div>
        </section>

        {/* Problème orienté hub */}
        <Section title={L.probTitle}>
          <p data-animate>{L.probText}</p>
        </Section>

        {/* Solution - 3 piliers */}
        <Section title={L.pillarsTitle}>
          <div className="grid md:grid-cols-3 gap-6" data-animate>
            <Card title="1">{L.pillar1}</Card>
            <Card title="2">{L.pillar2}</Card>
            <Card title="3">{L.pillar3}</Card>
          </div>
        </Section>

        {/* Comment ça marche */}
        <Section title={L.howTitle}>
          <ol className="grid md:grid-cols-3 gap-6 list-decimal pl-5" data-animate>
            <Step> {L.how1} </Step>
            <Step> {L.how2} </Step>
            <Step> {L.how3} </Step>
          </ol>
          <div className="mt-8">
            <a href="https://cal.com/david-10but/15min" target="_blank" className="rounded-md bg-accent text-white font-medium px-5 py-3 shadow-soft hover:opacity-90 transition">
              {L.cta}
            </a>
          </div>
        </Section>

        {/* Bande "loss" déplacée plus bas */}
        <div className="safe-content bg-ink text-white">
          <div className="mx-auto max-w-6xl px-6 py-8 text-center font-poppins" data-animate>
            {L.strip}
          </div>
        </div>

        {/* Partenaires fondateurs */}
        <Section title={L.socialTitle}>
          <div className="grid md:grid-cols-2 gap-6 items-start" data-animate>
            <Quote
              logo="/images/sciencespo.png"
              text="Nous fournissons l’infrastructure de recrutement aux startups de l’Incubateur, en nous concentrant sur l’essentiel : trouver des talents qui partagent leurs valeurs."
            />
            <LogoOnly src="/images/wacano.jpg" alt="Wacano" />
          </div>
        </Section>

        {/* Offre irrésistible */}
        <Section title={L.offerTitle}>
          <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-8 items-center" data-animate>
            <p className="text-ink/80 text-lg">{L.offerSub}</p>
            <div className="justify-self-start md:justify-self-end">
              <a href="https://cal.com/david-10but/15min" target="_blank" className="rounded-md bg-accent text-white font-medium px-5 py-3 shadow-soft hover:opacity-90 transition">
                {L.cta}
              </a>
            </div>
          </div>
        </Section>

        {/* CEO */}
        <Section title={L.ceoTitle}>
          <div className="flex flex-col md:flex-row items-center gap-6" data-animate>
            <Image src="/images/ceo.jpg" alt="David Elbez, CEO" width={140} height={140} className="rounded-full" />
            <p className="text-ink/80">{L.ceoText}</p>
          </div>
        </Section>

        <footer className="safe-content border-t">
          <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-ink/60 flex flex-col md:flex-row items-center justify-between gap-3">
            <p>© {new Date().getFullYear()} 10but</p>
            <a href="https://cal.com/david-10but/15min" target="_blank" className="text-accent underline underline-offset-4">
              {L.cta}
            </a>
          </div>
        </footer>
      </div>
    </>
  );
}

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-xl p-6 ring-1 ring-black/5 shadow-soft bg-white">
      <div className="text-accent font-poppins text-sm mb-2">Pilier {title}</div>
      <div>{children}</div>
    </div>
  );
}

function Step({ children }: { children: React.ReactNode }) {
  return (
    <li className="rounded-xl p-6 ring-1 ring-black/5 bg-white shadow-soft">
      {children}
    </li>
  );
}

function Quote({ logo, text }: { logo: string; text: string }) {
  return (
    <div className="rounded-xl p-6 ring-1 ring-black/5 bg-white shadow-soft">
      <div className="flex items-center gap-4 mb-4">
        <img src={logo} alt="Logo" className="h-8 w-auto" />
      </div>
      <p className="italic">“{text}”</p>
    </div>
  );
}

function LogoOnly({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="rounded-xl p-6 ring-1 ring-black/5 bg-white shadow-soft flex items-center justify-center">
      <img src={src} alt={alt} className="h-10 w-auto" />
    </div>
  );
}
