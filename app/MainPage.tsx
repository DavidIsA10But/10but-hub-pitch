"use client";
import { useEffect, useState } from "react";
import { getMessages, type LocaleKey } from "@/lib/i18n";
import { motion } from "framer-motion";

export default function MainPage({ lang }: { lang: LocaleKey }) {
  const L = getMessages(lang);

  const Section: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "0px 0px -10% 0px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.section>
  );

  return (
    <main className="min-h-screen w-full overflow-x-hidden">
      {/* HERO */}
      <Section className="px-6 py-16 md:py-24 max-w-5xl mx-auto text-center">
        <h1 className="text-3xl md:text-5xl font-bold">{L.heroTitle}</h1>
        <p className="mt-4 text-base md:text-lg opacity-80">{L.heroSub}</p>
        <div className="mt-6">
          <a
            href="https://cal.com/david-10but/15min"
            target="_blank"
            className="inline-block rounded-2xl px-5 py-3 border"
            rel="noreferrer"
          >
            {L.cta}
          </a>
        </div>
      </Section>

      {/* PROBLEME + WHEEL ANIMATION (embedded) */}
      <Section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">{L.probTitle}</h2>
        <p className="mt-3 opacity-80">{L.probText}</p>

        <div className="mt-8 rounded-2xl overflow-hidden aspect-video w-full">
          {/* Simple, robust embed of the cost/time wheel from the sell deck */}
          <iframe
            src="https://10but-sell-deck.vercel.app/"
            className="w-full h-full border-0"
            title="10but Sell Deck – Cost/Time Wheel"
          />
        </div>
      </Section>

      {/* 3 PILLARS */}
      <Section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">{L.pillarsTitle}</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          <div className="rounded-2xl p-6 border">
            <h3 className="font-semibold">{L.pillar1Title}</h3>
            <p className="opacity-80 mt-2">{L.pillar1Text}</p>
          </div>
          <div className="rounded-2xl p-6 border">
            <h3 className="font-semibold">{L.pillar2Title}</h3>
            <p className="opacity-80 mt-2">{L.pillar2Text}</p>
          </div>
          <div className="rounded-2xl p-6 border">
            <h3 className="font-semibold">{L.pillar3Title}</h3>
            <p className="opacity-80 mt-2">{L.pillar3Text}</p>
          </div>
        </div>
      </Section>

      {/* HOW IT WORKS */}
      <Section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">{L.howTitle}</h2>
        <ol className="mt-4 space-y-2 list-decimal list-inside">
          <li>{L.how1}</li>
          <li>{L.how2}</li>
          <li>{L.how3}</li>
        </ol>
      </Section>

      {/* STRIP */}
      <Section className="px-0">
        <div className="w-full py-6 md:py-8 text-center text-sm md:text-base">
          {L.strip}
        </div>
      </Section>

      {/* OFFER / SCARCITY */}
      <Section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">{L.offerTitle}</h2>
        <p className="opacity-80 mt-2">{L.offerSub}</p>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <span className="text-sm opacity-80">{L.chips.slotsLabel}</span>
          <strong className="text-lg">{L.slotsCount}</strong>
          <span className="text-xs px-2 py-1 rounded-full border">{L.chips.noCommit}</span>
          <span className="text-xs px-2 py-1 rounded-full border">{L.chips.adoption}</span>
          <span className="text-xs px-2 py-1 rounded-full border">{L.chips.tth}</span>
          <span className="text-xs px-2 py-1 rounded-full border">{L.chips.saving}</span>
        </div>
      </Section>

      {/* USE CASES */}
      <Section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">{L.usecases}</h2>
        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold">{L.scpoTitle}</h3>
            <p className="opacity-80 mt-2">{L.scpoText}</p>
          </div>
          <div className="p-6 border rounded-2xl">
            <h3 className="font-semibold">{L.wacanoTitle}</h3>
            <p className="opacity-80 mt-2">{L.wacanoText}</p>
          </div>
        </div>
      </Section>

      {/* LEADERS combined slide */}
      <Section className="px-6 py-16 max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-6 border rounded-2xl">
            <div className="text-sm opacity-70">{L.leaders.ceoTitle}</div>
            <div className="font-semibold mt-1">{L.leaders.ceoName}</div>
            <p className="mt-3 italic">“{L.leaders.ceoQuote}”</p>
          </div>
          <div className="p-6 border rounded-2xl">
            <div className="text-sm opacity-70">{L.leaders.ctoTitle}</div>
            <div className="font-semibold mt-1">{L.leaders.ctoName}</div>
            <p className="mt-3 italic">“{L.leaders.ctoQuote}”</p>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section className="px-6 py-16 max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-semibold">FAQ</h2>
        <div className="mt-6 space-y-4">
          {L.faq.map((item, idx) => (
            <details key={idx} className="rounded-2xl border p-4">
              <summary className="font-medium cursor-pointer">{item.q}</summary>
              <p className="mt-2 opacity-80">{item.a}</p>
            </details>
          ))}
        </div>
      </Section>

      {/* FOOTER placeholder with high z-index to ensure accessibility */}
      <footer className="relative z-50 px-6 py-10 text-center text-sm opacity-70">
        © {new Date().getFullYear()} 10but
      </footer>
    </main>
  );
}
