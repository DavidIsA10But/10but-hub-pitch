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
    pillar2Text: "75% reduction in t
