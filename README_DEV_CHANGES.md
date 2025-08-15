# 10but Hub Pitch — Refactor i18n & UX

## Ce qui a été fait
- Ajout d'une couche i18n **sans duplication** : `lib/i18n/{fr,en}.ts` + `lib/i18n/index.ts`.
- Nouvelle page unique `app/MainPage.tsx` qui lit tous les textes dans `L.*`.
- Wrappers :
  - `app/page.tsx` (FR par défaut + redirection client vers `/en` si navigateur non francophone).
  - `app/en/page.tsx` (force EN).
- **slotsCount** ajouté dans les deux dictionnaires, utilisé comme **string**.
- Section problème : intégration d'un **iframe** vers le sell deck (animation roue coûts/temps).
- Transitions douces au scroll via **framer-motion** (`whileInView`).
- Regroupement **CEO/CTO** sur une même slide.
- `PixelRain.tsx` : tentative d'ajustements (taille +30%, vitesse plus lente, densité↑ au scroll, drift horizontal souris). Si votre composant existant est ailleurs / diffère, adaptez.
- Footer : `z-50` par défaut pour éviter les soucis d'ancrage/z-index.

## À vérifier de votre côté
- L'iframe du sell deck fonctionne bien dans Vercel (CSP si vous en avez une).
- `framer-motion` est bien installé (`npm i framer-motion`) si absent.
- Si votre `PixelRain.tsx` a une API différente, ajustez le composant en conséquence (cf. bloc `AI-EDIT` inséré).
- `npm run build` localement (nous ne pouvons pas l'exécuter ici).

## Utilisation
- Tous les textes doivent venir de `L.*` (et donc du dictionnaire). Si vous ajoutez un texte, **d'abord** l'ajouter dans `fr.ts` et `en.ts`.
- Routes :
  - `/` → français par défaut (et redirige côté client vers `/en` si `navigator.language` n'est pas `fr`).
  - `/en` → anglais.