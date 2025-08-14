
"use client";
import { useEffect } from "react";
import NavBar from "../../components/NavBar";
import PixelRain from "../../components/PixelRain";

function Section({ title, children }: { title?: string; children: React.ReactNode }) {
  return (
    <section className="container py-section md:py-section-lg">
      {title ? <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-6" data-anim>{title}</h2> : null}
      <div data-anim>{children}</div>
    </section>
  );
}

const L = {
  heroTitle: "Turn your Hub into an exclusive talent pool",
  heroSub: "Cut time-to-hire by 75% and save €5,000 per hire — already used by Sciences Po and Wacano.",
  cta: "Book a 15-min call",
  trusted: "Trusted by",
  probTitle: "Is your hub capturing the full value of its community?",
  probText: "When each startup hires alone, qualified profiles get lost and ecosystem value drops — 45h wasted per hire and missed opportunities.",
  pillarsTitle: "A shared talent infrastructure that transforms your hub",
  pillar1Title: "Activate the ecosystem",
  pillar1Text: "Talent flows between your startups.",
  pillar2Title: "Accelerate growth",
  pillar2Text: "75% reduction in time-to-hire.",
  pillar3Title: "Build a defensive asset",
  pillar3Text: "An exclusive pool where every ‘silver medalist’ is kept.",
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
  wacanoText: "Wacano shares the ‘silver medalists’ across its 56 startups to cut time-to-hire, prevent talent loss, and improve mobility inside its network.",
  faq: [
    {q:"Who owns the pool data?", a:"The hub maintains governance. 10but never exploits profiles outside your ecosystem."},
    {q:"Integrations?", a:"CSV export and ATS connections on request (Workable, Lever)."},
    {q:"Commitment?", a:"Free until January 31, 2026, cancel anytime."}
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
      <section className="container pt-section-lg pb-section">
        <h1 className="text-3xl md:text-5xl font-poppins font-semibold mb-5" data-anim>{L.heroTitle}</h1>
        <p className="text-lg md:text-xl text-ink/80 mb-8" data-anim>{L.heroSub}</p>
        <div className="flex gap-3" data-anim>
          <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a>
          <button id="open-demo" className="rounded-md border border-ink/10 px-4 py-3">Watch the demo (3 min)</button>
        </div>
        <div className="mt-10 trust" data-anim>
          <div className="trust-title">{L.trusted}</div>
          <div className="trust-logos">
            <img src="/images/sciencespo.png" alt="Sciences Po logo" />
            <span className="divider" />
            <img src="/images/wacano.jpg" alt="Wacano logo" />
          </div>
          <div className="chips">
            <span className="chip">100% adoption (3 months)</span>
            <span className="chip">–75% time-to-hire</span>
            <span className="chip">€5,000 saved / hire</span>
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
            <span className="kpibadge">+ circulating profiles</span>
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
            <span className="kpibadge">€10–100 per silver</span>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section title={L.howTitle}>
        <ol className="steps">
          <li className="step"><span className="badge">1</span>{L.how1} <span className="chip ml-2">⚡ 5 min</span></li>
          <li className="step"><span className="badge">2</span>{L.how2} <span className="chip ml-2">↔︎ Automatic</span></li>
          <li className="step"><span className="badge">3</span>{L.how3} <span className="chip ml-2">✅ Peer-qualified</span></li>
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
              <div className="font-poppins">Remaining slots: <span className="text-accent font-semibold">2/5</span></div>
              <div className="text-ink/60">No commitment</div>
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
            <a href="https://www.loom.com/" target="_blank" className="rounded-md border border-ink/10 px-4 py-2">Watch demo</a>
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
