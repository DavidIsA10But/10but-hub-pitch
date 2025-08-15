"use client";
import { useEffect } from "react";
import NavBar from "../components/NavBar";
import PixelRain from "../components/PixelRain";
import Slide from "../components/Slide";
import PriceWheel from "../components/PriceWheel";
import LeaderDuo from "../components/LeaderDuo";
import { getMessages, type LocaleKey } from "../lib/i18n";

export default function MainPage({ lang }:{lang:LocaleKey}){
  const L = getMessages(lang);
  useEffect(()=>{
    const io=new IntersectionObserver((es)=>{for(const e of es) if(e.isIntersecting) e.target.classList.add("animate-in")},{rootMargin:"0px 0px -10% 0px"});
    document.querySelectorAll("[data-anim]").forEach(el=>io.observe(el as Element));
    return ()=>io.disconnect();
  },[]);
  return (
    <main className="snap-y snap-mandatory">
      <PixelRain/>
      <NavBar/>

      <Slide>
        <h1 className="text-3xl md:text-5xl font-poppins font-semibold mb-5">{L.heroTitle}</h1>
        <p className="text-lg md:text-xl text-ink/80 mb-8">{L.heroSub}</p>
        <div className="flex gap-3"><a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a></div>
        <div className="mt-10">
          <div className="text-sm uppercase tracking-wide text-ink/60 mb-2">{L.trusted}</div>
          <div className="flex items-center gap-6">
            <img src="/images/sciencespo.png" alt="Sciences Po" className="h-10"/>
            <span className="w-px h-6 bg-ink/10"/>
            <img src="/images/wacano.jpg" alt="Wacano" className="h-10"/>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="chip">{L.chips.adoption}</span>
            <span className="chip">{L.chips.tth}</span>
            <span className="chip">{L.chips.saving}</span>
          </div>
        </div>
      </Slide>

      <Slide>
        <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-6">{L.probTitle}</h2>
        <p className="text-ink/80 mb-10">{L.probText}</p>
        <PriceWheel/>
      </Slide>

      <Slide>
        <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-6">{L.pillarsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl border bg-white/70" data-anim>
            <h3 className="font-poppins text-xl mb-2">{L.pillar1Title}</h3>
            <p className="text-ink/80 mb-2">{L.pillar1Text}</p>
            <span className="chip">{L.chips.kpi1}</span>
          </div>
          <div className="p-6 rounded-2xl border bg-white/70" data-anim>
            <h3 className="font-poppins text-xl mb-2">{L.pillar2Title}</h3>
            <p className="text-ink/80 mb-2">{L.pillar2Text}</p>
            <span className="chip">{L.chips.kpi2}</span>
          </div>
          <div className="p-6 rounded-2xl border bg-white/70" data-anim>
            <h3 className="font-poppins text-xl mb-2">{L.pillar3Title}</h3>
            <p className="text-ink/80 mb-2">{L.pillar3Text}</p>
            <span className="chip">{L.chips.kpi3}</span>
          </div>
        </div>
      </Slide>

      <Slide>
        <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-6">{L.howTitle}</h2>
        <ol className="grid gap-4">
          <li className="flex items-center gap-3"><span className="badge">1</span>{L.how1}</li>
          <li className="flex items-center gap-3"><span className="badge">2</span>{L.how2}</li>
          <li className="flex items-center gap-3"><span className="badge">3</span>{L.how3}</li>
        </ol>
        <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta mt-6">{L.cta}</a>
      </Slide>

      <section className="w-full bg-accent/10 border-y" data-anim>
        <div className="container py-10 text-center font-poppins">{L.strip}</div>
      </section>

      <Slide>
        <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-6">{L.offerTitle}</h2>
        <p className="text-ink/80 mb-6">{L.offerSub}</p>
        <div className="flex items-center gap-10">
          <a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a>
          <div className="text-sm">
            <div className="font-poppins">{L.chips.slotsLabel} <span className="text-accent font-semibold">{L.slotsCount}</span></div>
            <div className="text-ink/60">{L.chips.noCommit}</div>
          </div>
        </div>
      </Slide>

      <Slide>
        <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-10">{L.usecases}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl border bg-white/70" data-anim>
            <img src="/images/sciencespo.png" alt="Sciences Po" className="h-10 mb-3"/>
            <h3 className="font-poppins font-semibold mb-2">{L.scpoTitle}</h3>
            <p className="text-ink/80">{L.scpoText}</p>
          </div>
          <div className="p-6 rounded-2xl border bg-white/70" data-anim>
            <img src="/images/wacano.jpg" alt="Wacano" className="h-10 mb-3"/>
            <h3 className="font-poppins font-semibold mb-2">{L.wacanoTitle}</h3>
            <p className="text-ink/80">{L.wacanoText}</p>
          </div>
        </div>
      </Slide>

      <Slide>
        <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-6">{L.leaders.ceoTitle}</h2>
        <LeaderDuo
          ceo={{ photo:"/images/ceo-david.jpg", name:L.leaders.ceoName, quote:L.leaders.ceoQuote }}
          cto={{ photo:"/images/cto-pierre.jpg", name:L.leaders.ctoName, quote:L.leaders.ctoQuote }}
        />
      </Slide>

      <Slide>
        <h2 className="text-2xl md:text-4xl font-poppins font-semibold mb-6">FAQ</h2>
        <div>
          {L.faq.map((it:any,i:number)=>(
            <div key={i} className="mb-4">
              <div className="font-semibold mb-1">{it.q}</div>
              <div className="text-ink/80">{it.a}</div>
            </div>
          ))}
        </div>
      </Slide>

      <footer className="border-t">
        <div className="container py-14 text-sm text-ink/70 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} 10but</p>
          <div className="flex gap-3"><a href="https://cal.com/david-10but/15min" target="_blank" className="btn-cta">{L.cta}</a></div>
        </div>
      </footer>
    </main>
  );
}
