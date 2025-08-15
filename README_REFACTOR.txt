# 10but Hub Pitch — refactor i18n + animations
- Fichiers de langue: `lib/i18n/fr.ts` et `lib/i18n/en.ts`
- Accès aux textes: `getMessages(locale)` depuis `lib/i18n/index.ts`
- Composant commun: `app/MainPage.tsx` (toutes les sections)
- Wrappers: `app/page.tsx` (FR) et `app/en/page.tsx` (EN)
- Animations: `components/PixelRain.tsx` (ronds + +30% + interactions), `components/PriceWheel.tsx` (roue coût), `components/Slide.tsx` (scroll-snap)
- CEO/CTO: `components/LeaderDuo.tsx`
- Footer accessible (pas de full-screen bloquant, padding suffisant)

Déploiement: push GitHub → Vercel (cocher "Ignore build cache").
