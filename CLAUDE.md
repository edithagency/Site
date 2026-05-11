# CLAUDE.md — Edith Agency · Site vitrine freelance

> Ce fichier est le brief complet du projet. Lis-le entièrement avant de générer du code.

---

## Contexte du projet

**Edith Agency** est une agence de communication freelance basée à **Bordeaux**.
Le site est un **site vitrine / portfolio** avec deux objectifs :
1. Présenter les services et projets pour attirer des clients
2. Améliorer le **référencement local sur Bordeaux** (SEO)

---

## Stack technique

| Outil | Rôle |
|---|---|
| **Next.js 14** (App Router) | Framework principal, routing, SSG, SEO |
| **TypeScript** | Typage |
| **Tailwind CSS** | Styles utilitaires |
| **Framer Motion** | Animations et transitions |
| **Google Fonts** | Typographies |

**Déploiement cible** : Vercel (priorité) ou Hostinger

---

## Architecture des fichiers

```
edith-agency/
├── app/
│   ├── layout.tsx                  → Layout global (Navbar + Footer + fonts + metadata SEO)
│   ├── page.tsx                    → Page d'accueil
│   ├── projets/
│   │   ├── page.tsx                → Grille portfolio (tous les clients)
│   │   └── [slug]/
│   │       └── page.tsx            → Page dédiée par client
│   ├── services/
│   │   └── page.tsx                → Page services
│   ├── contact/
│   │   └── page.tsx                → Page contact
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── ClientCard.tsx              → Carte projet avec image + hover → lien slug
│   └── ServiceCard.tsx
├── data/
│   └── clients.ts                  → Données des clients (tableau TypeScript)
├── public/
│   └── images/
│       └── clients/                → Images des projets (une par client)
├── tailwind.config.ts
└── CLAUDE.md                       → Ce fichier
```

---

## Identité visuelle

### Palette de couleurs

```css
--color-deep:   #2b616b;   /* Bleu-vert profond — fond foncé, texte principal, CTA dark */
--color-mid:    #66a2ad;   /* Bleu clair — texte secondaire, accents, eyebrows */
--color-yellow: #f4db75;   /* Jaune soleil — highlights, mots-clés en script, CTA light */
--color-cream:  #e7e3dd;   /* Beige chaud — fond de page, fond des cartes */
```

Dans `tailwind.config.ts` :
```ts
colors: {
  brand: {
    deep:   '#2b616b',
    mid:    '#66a2ad',
    yellow: '#f4db75',
    cream:  '#e7e3dd',
  }
}
```

### Typographies (Google Fonts via `next/font/google`)

| Variable | Font | Usage |
|---|---|---|
| `--font-display` | **Playfair Display** (700, 900, italic) | Titres H1/H2 grands, impact éditorial |
| `--font-script` | **Dancing Script** (600) | Mots-clés décoratifs penchés en jaune |
| `--font-body` | **DM Sans** (300, 400, 500) | Corps de texte, nav, labels |

### Direction artistique — règles absolues

L'esthétique cible est **éditorial, organique, "désordre maîtrisé"**. Références : sites de voyage haut de gamme, agences créatives indépendantes.

- ✅ Photos **légèrement pivotées** (rotate 2–5°), qui se chevauchent, jamais centrées parfaitement
- ✅ Typo **de travers** pour les mots en Dancing Script (rotate -3° à -6°)
- ✅ Grille **irrégulière** : éléments décalés verticalement entre eux (`margin-top` différents)
- ✅ Beaucoup d'**espace blanc**, respiration généreuse
- ✅ Fond de page **beige `#e7e3dd`** partout, jamais de blanc pur
- ✅ `#2b616b` utilisé en **texte** et accents ciblés — jamais en grosse bande plein écran
- ✅ Labels/eyebrows en majuscules espacées, taille 10–11px, couleur `#66a2ad`
- ❌ Pas de blocs de couleur pleine largeur
- ❌ Pas de mise en page symétrique et centrée type "corporate"
- ❌ Pas de gradients, pas d'ombres lourdes
- ❌ Pas d'Inter, Roboto ou Arial

---

## Pages — contenu et sections

### 1. `app/page.tsx` — Accueil

**Sections dans l'ordre :**

#### Navbar
- Logo : `edithAGENCY` (Playfair italic pour "edith", DM Sans caps pour "AGENCY")
- Liens : Accueil / Services / Projets / Contact
- Fond transparent sur fond beige, sticky au scroll

#### Hero
- Eyebrow : `"Agence de communication — Bordeaux"` (10px, uppercase, `#66a2ad`)
- H1 en Playfair Display 900, très grand (clamp 48px – 80px), couleur `#2b616b`
  - Exemple : `"Votre marque, vivante."`
  - Le dernier mot en italique + opacité réduite pour effet éditorial
- Mot en Dancing Script jaune pivoté : ex. `"sur-mesure."` rotate(-3deg)
- Pills/tags : `Branding` · `Social Media` · `Contenu` (border `#2b616b`, fond transparent)
- Sous-titre DM Sans 300, 13px, max-width 280px
- CTA bouton rond : `"Voir mes projets →"` fond `#2b616b` texte `#e7e3dd`
- 2 images (placeholders en attendant les vraies) positionnées en `absolute`, pivotées, qui se chevauchent côté droit

#### Section projets (aperçu)
- Eyebrow : `"Projets récents"`
- H2 Playfair : `"Ce que je fais vraiment."` (le "vraiment" en italique opacité réduite)
- Grille 3 colonnes **irrégulière** : carte du milieu décalée de +28px vers le bas
- Chaque carte : image pleine hauteur + label dessous (eyebrow catégorie + nom client)
- Lien vers `/projets`

#### Section services (strip)
- Layout 2 colonnes : liste des services à gauche, bloc d'accroche à droite
- Liste : Branding / Social Media / Création de contenu / Consulting
  - Chaque ligne : nom en Playfair + description courte en `#66a2ad`
  - Séparées par une ligne 0.5px `#2b616b` opacité 0.2
- Bloc droit : fond `#2b616b`, texte `#e7e3dd`, phrase en Dancing Script jaune, CTA pill

#### CTA Contact
- Layout asymétrique : grand titre Playfair gauche + infos contact droite
- `"Parlons de votre projet."` — "projet" en italique `#66a2ad`
- Droite : ville + email en bouton jaune `#f4db75`

#### Footer
- Simple, 1 ligne : copyright gauche / réseaux droite
- Border-top 0.5px `#2b616b` opacité 0.15

---

### 2. `app/projets/page.tsx` — Portfolio

- Hero simple : eyebrow + H1 Playfair + phrase courte
- Grille de cartes clients : **masonry-like ou grille irrégulière**
  - Images en pleine hauteur (format portrait recommandé)
  - Hover : légère élévation + overlay `#2b616b` opacité 0.15 + flèche →
  - Chaque carte → lien `/projets/[slug]`
- Les cartes ont des hauteurs différentes pour casser la grille

---

### 3. `app/projets/[slug]/page.tsx` — Page client

Générée dynamiquement depuis `data/clients.ts` via `generateStaticParams`.

**Sections :**
- Header : nom client grand en Playfair + catégorie eyebrow
- Image principale (grande, légèrement pivotée)
- Bloc contexte : `"Le projet"` — description en prose
- Bloc objectifs : liste courte (3–4 points)
- Galerie secondaire : 2–3 images en grille irrégulière
- Résultats/livrables (optionnel)
- CTA retour projets + CTA contact

---

### 4. `app/services/page.tsx` — Services

**3 services principaux :**

| Service | Description courte |
|---|---|
| **Branding & Identité visuelle** | Création de logo, charte graphique, univers de marque cohérent |
| **Social Media** | Stratégie éditoriale, création de contenus, gestion des réseaux |
| **Création de contenu** | Photographie, vidéo courte, copywriting pour vos supports |

**Sections :**
- Hero : H1 + accroche
- Une section par service : titre Playfair + description + liste livrables
- Alternance disposition gauche/droite entre les services
- CTA final vers Contact

---

### 5. `app/contact/page.tsx` — Contact

**Contenu :**
- H1 Playfair : `"On se parle ?"` ou similaire
- Formulaire : Nom / Email / Sujet / Message / Bouton envoyer
  - Fond des inputs : blanc avec border `#2b616b` opacité 0.3
  - Bouton : fond `#2b616b`, texte `#e7e3dd`
- Infos à côté : email direct + Instagram + LinkedIn
- Mention **"Basée à Bordeaux, disponible partout"** (important pour le SEO local)
- Pas de carte / Google Maps nécessaire

---

## Structure des données clients

```ts
// data/clients.ts

export interface Client {
  slug: string
  name: string
  category: string         // ex: "Branding" | "Social Media" | "Création de contenu"
  year: number
  description: string      // paragraphe de présentation du projet
  objectives: string[]     // 3–4 objectifs/livrables
  coverImage: string       // chemin depuis /public
  gallery: string[]        // chemins des images secondaires
  tags: string[]
}

export const clients: Client[] = [
  {
    slug: 'florence-strategy',
    name: 'Florence Strategy',
    category: 'Branding',
    year: 2024,
    description: 'Refonte complète de l\'identité visuelle pour une agence de conseil en stratégie touristique.',
    objectives: [
      'Création du logo et de la charte graphique',
      'Design du site web',
      'Kit réseaux sociaux',
    ],
    coverImage: '/images/clients/florence-strategy.jpg',
    gallery: [],
    tags: ['Branding', 'Identité visuelle'],
  },
  // Ajouter les autres clients ici
]
```

---

## SEO — Points importants

Dans `app/layout.tsx`, configurer les métadonnées :

```ts
export const metadata: Metadata = {
  title: 'Edith Agency — Agence de communication à Bordeaux',
  description: 'Edith Agency, agence de communication freelance à Bordeaux. Branding, social media et création de contenu pour les marques créatives.',
  keywords: ['agence communication Bordeaux', 'freelance branding Bordeaux', 'social media Bordeaux', 'création contenu Bordeaux'],
  openGraph: {
    title: 'Edith Agency — Agence de communication Bordeaux',
    description: 'Branding, social media et création de contenu à Bordeaux.',
    locale: 'fr_FR',
    type: 'website',
  },
}
```

- Chaque page doit avoir ses propres métadonnées via `export const metadata`
- Les pages clients générées dynamiquement doivent utiliser `generateMetadata()`
- Utiliser les balises sémantiques HTML : `<main>`, `<section>`, `<article>`, `<nav>`
- Le mot **"Bordeaux"** doit apparaître dans le contenu textuel visible de chaque page

---

## Configuration Tailwind

```ts
// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          deep:   '#2b616b',
          mid:    '#66a2ad',
          yellow: '#f4db75',
          cream:  '#e7e3dd',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        script:  ['var(--font-script)', 'cursive'],
        body:    ['var(--font-body)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

export default config
```

---

## Conventions de code

- Tous les composants en **TypeScript** avec types explicites
- Nommage des composants en **PascalCase**, fichiers en **kebab-case** pour les routes
- Images : utiliser **`next/image`** avec `width`, `height` et `alt` toujours renseignés
- Liens internes : utiliser **`next/link`**
- Les animations Framer Motion : `initial`, `animate`, `whileInView` avec `viewport={{ once: true }}`
- Pas de `useEffect` pour les données statiques — tout passer en props depuis les Server Components
- `'use client'` uniquement pour les composants avec interactions (formulaire, animations hover)

---

## Ordre de génération recommandé

Génère dans cet ordre pour un résultat cohérent :

1. `tailwind.config.ts` + `app/globals.css`
2. `app/layout.tsx` (fonts + metadata + Navbar + Footer)
3. `components/Navbar.tsx`
4. `components/Footer.tsx`
5. `data/clients.ts` (structure + 2–3 exemples)
6. `app/page.tsx` (page d'accueil complète)
7. `components/ClientCard.tsx`
8. `app/projets/page.tsx`
9. `app/projets/[slug]/page.tsx`
10. `app/services/page.tsx`
11. `app/contact/page.tsx`

---

## Notes pour Claude Code

- **Ne pas utiliser** de librairies UI externes (shadcn, chakra, etc.) — tout en Tailwind custom
- Les **placeholders images** : utiliser des `div` avec `bg-brand-deep` ou `bg-brand-mid` en attendant les vraies photos
- Le formulaire contact : pas besoin de backend pour l'instant, un `console.log` suffit ou intégrer **Resend** / **Formspree** si demandé
- Les **vraies images** seront fournies et déposées dans `/public/images/clients/` — laisser les `src` facilement remplaçables
- Tester le responsive : le site doit être utilisable sur mobile (breakpoints `sm:` et `md:` Tailwind)
