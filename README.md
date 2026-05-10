# Zarya — Landing page

Site de capture de prospects pour le programme pilote Zarya, SaaS d'IA pour fiduciaires suisses romandes.

**URL cible :** `zarya.condere.ch`

---

## Stack

| Couche | Techno |
|---|---|
| Framework | Next.js 16, App Router, TypeScript strict |
| Styling | Tailwind CSS v4, tokens dans `globals.css` |
| Fonts | Lexend Giga (titres), Inter (body), JetBrains Mono (chiffres) via `next/font/google` |
| Forms | react-hook-form + Zod |
| Soumission | API route → Resend (email) + Supabase (DB) |
| Hébergement | Vercel |

## Lancer en local

```bash
npm install
cp .env.example .env.local
# renseigner les variables dans .env.local
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Modifier le contenu

| Section | Fichier |
|---|---|
| Hero (texte, CTAs) | `components/sections/hero.tsx` |
| La promesse | `components/sections/promesse.tsx` |
| Modules (5 cartes) | `components/sections/modules.tsx` |
| Sécurité | `components/sections/securite.tsx` |
| Pilote (3 étapes) | `components/sections/pilote.tsx` |
| FAQ | `components/sections/faq.tsx` |
| Formulaire | `components/sections/contact.tsx` |
| Footer | `components/sections/footer.tsx` |
| Page /merci | `app/merci/page.tsx` |
| Mentions légales | `app/mentions-legales/page.tsx` |
| Confidentialité | `app/confidentialite/page.tsx` |
| Tokens couleur/typo | `app/globals.css` (bloc `@theme`) |
| Metadata SEO | `app/layout.tsx` |

## Variables d'environnement

Voir `.env.example`. Les variables Supabase et Resend sont optionnelles : sans elles, les soumissions du formulaire sont loggées en console côté serveur.

### Supabase — table requise

```sql
create table pilot_signups (
  id uuid default gen_random_uuid() primary key,
  email text not null,
  cabinet text not null,
  collaborateurs text,
  logiciel text,
  created_at timestamptz default now()
);
```

## Déployer

1. Connecter le repo à Vercel
2. Branche `main` → production `zarya.condere.ch`
3. Configurer les variables dans Vercel Dashboard (onglet Settings → Environment Variables)
4. Ajouter un CNAME `zarya` → `cname.vercel-dns.com` chez votre registrar

## Architecture des fonts

```
Lexend Giga  → font-display  → titres (h1, h2, h3, eyebrows)
Inter        → font-body     → paragraphes, UI, labels
JetBrains Mono → font-code   → chiffres, statistiques, codes
```

Toutes déclarées dans `lib/fonts.ts`, injectées comme variables CSS dans `layout.tsx`, mappées dans `globals.css @theme`.
