"use client";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import PixelRain from "../components/PixelRain";
import LeaderQuote from "../components/LeaderQuote";
import { getMessages } from "../lib/i18n";

const L = getMessages("fr");

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="container py-28 md:py-32">
      {title ? <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-6" data-anim>{title}</h2> : null}
      <div data-anim>{children}</div>
    </section>
  );
}

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
      <section className="container pt-52 pb-28">
        <h1 className="text-3xl md:text-5xl font-poppins font-semibold mb-5" data-anim>{L.heroTitle}</h1>
        <p className="text-lg md:text-xl text-ink/80 mb-8" data-anim>{L.heroSub}</p>
        <div className="flex gap-3" data-anim>
          <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a>
        </div>
        <div className="mt-10 trust" data-anim>
          <div className="trust-title">{L.trusted}</div>
          <div className="trust-logos">
            <img src="/images/sciencespo.png" alt="Logo Sciences Po" />
            <span className="divider" />
            <img src="/images/wacano.jpg" alt="Logo Wacano" />
          </div>
          <div className="chips">
            <span className="chip">{L.chips.adoption}</span>
            <span className="chip">{L.chips.tth}</span>
            <span className="chip">{L.chips.saving}</span>
          </div>
        </div>
      </section>

      {/* PROBLÈME */}
      <Section title={L.probTitle}>
        <p className="text-ink/80 mb-8">{L.probText}</p>
        {/* TODO: insérer ici l’animation du sell deck */}
      </Section>

      {/* 3 PILIERS */}
      <Section title={L.pillarsTitle}>
        <div className="pillars">
          <div className="pillar" data-anim>
            <div className="bars"><span/><span/><span/></div>
            <h3 className="ptitle">{L.pillar1Title}</h3>
            <p className="ptext">{L.pillar1Text}</p>
            <span className="kpibadge">{L.chips.kpi1}</span>
          </div>
          <div className="pillar" data-anim>
            <div className="bars"><span/><span/><span/></div>
            <h3 className="ptitle">{L.pillar2Title}</h3>
            <p className="ptext">{L.pillar2Text}</p>
            <span className="kpibadge">{L.chips.kpi2}</span>
          </div>
          <div className="pillar" data-anim>
            <div className="bars"><span/><span/><span/></div>
            <h3 className="ptitle">{L.pillar3Title}</h3>
            <p className="ptext">{L.pillar3Text}</p>
            <span className="kpibadge">{L.chips.kpi3}</span>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section title={L.howTitle}>
        <ol className="steps">
          <li className="step"><span className="badge">1</span>{L.how1}</li>
          <li className="step"><span className="badge">2</span>{L.how2}</li>
          <li className="step"><span className="badge">3</span>{L.how3}</li>
        </ol>
        <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta mt-6">{L.cta}</a>
      </Section>

      {/* STRIP */}
      <div className="strip">{L.strip}</div>

      {/* OFFRE */}
      <Section title={L.offerTitle}>
        <div className="offer">
          <p className="text-ink/80">{L.offerSub}</p>
          <div className="flex items-center gap-10">
            <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a>
            <div className="text-sm">
              <div className="font-poppins">{L.chips.slotsLabel} <span className="text-accent font-semibold">{L.slotsCount}</span></div>
              <div className="text-ink/60">{L.chips.noCommit}</div>
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

      {/* LEADERSHIP */}
      <Section title={L.leaders.ceoTitle}>
        <LeaderQuote photo="/images/ceo-david.jpg" name={L.leaders.ceoName} quote={L.leaders.ceoQuote} />
      </Section>
      <Section title={L.leaders.ctoTitle}>
        <LeaderQuote photo="/images/cto-pierre.jpg" name={L.leaders.ctoName} quote={L.leaders.ctoQuote} />
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
    </main>
  );
}
