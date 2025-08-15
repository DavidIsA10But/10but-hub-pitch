
export const messages = {
  fr: {
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
      {
        q: "Qui possède les données du vivier ?",
        a: "Le hub conserve la gouvernance. Si le hub accède aux profils d’autres hubs, c’est dans le cadre d’un système participatif avec crédits : ajoutez un candidat, vous recevez un crédit ; découvrez un candidat, vous payez un crédit."
      },
      {
        q: "Quelles intégrations ?",
        a: "Nous nous occupons de tout : export CSV et connexions ATS (Workable, Lever)."
      },
      {
        q: "Quel engagement ?",
        a: "Offre gratuite jusqu’au 1er janvier 2026, résiliable à tout moment."
      }
    ],
    chips: {
      adoption: "Adoption 100% (en 3 mois)",
      tth: "–75% time-to-hire",
      saving: "5 000 € économisés / recrutement",
      kpi1: "+ circulation de profils",
      kpi2: "–75% TTH",
      kpi3: "10–100 € par “silver”",
      slotsLabel: "Places restantes : ",
      noCommit: "Sans engagement"
    }
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
    pillar1Text: "Talent flows between your startups.",
    pillar2Title: "Accelerate growth",
    pillar2Text: "75% reduction in time-to-hire.",
    pillar3Title: "Build a defensive asset",
    pillar3Text: "An exclusive pool where every “silver medalist” is kept.",
    howTitle: "How it works",
    how1: "Connect all your startups for free.",
    how2: "Not-selected candidates automatically join the shared pool.",
    how3: "Each startup accesses peer pre-qualified talent.",
    strip: "Every “no” to a good candidate is an asset that evaporates.",
    offerTitle: "Free until January 2026 — limited to the next 5 partner hubs",
    offerSub: "Afterwards: €10/month per startup (paid by the hub or startups).",
    usecases: "Customer use cases",
    scpoTitle: "Sciences Po — Alumni & startups community",
    scpoText: "Sciences Po enables its startups and alumni community to create a network of candidates sharing their values and needs — a pre-qualified pool exclusive to their ecosystem.",
    wacanoTitle: "Wacano — startups that collaborate",
    wacanoText: "Wacano shares the “silver medalists” across its 56 startups to cut time-to-hire, prevent talent loss, and improve mobility inside its network.",
    faq: [
      {
        q: "Who owns the pool data?",
        a: "The hub maintains governance. If it accesses profiles from other hubs, it’s within a participative credit system: add a candidate, get a credit; view a candidate, spend a credit."
      },
      {
        q: "Integrations?",
        a: "We handle everything: CSV export and ATS connections (Workable, Lever)."
      },
      {
        q: "Commitment?",
        a: "Free until January 1, 2026, cancel anytime."
      }
    ],
    chips: {
      adoption: "100% adoption (3 months)",
      tth: "–75% time-to-hire",
      saving: "€5,000 saved / hire",
      kpi1: "+ circulating profiles",
      kpi2: "–75% TTH",
      kpi3: "€10–100 per silver",
      slotsLabel: "Remaining slots: ",
      noCommit: "No commitment"
    }
  }
} as const;

export type LocaleKey = keyof typeof messages;
export const getMessages = (locale: LocaleKey) => messages[locale];
