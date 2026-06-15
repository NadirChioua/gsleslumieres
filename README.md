# Groupe Scolaire Les Lumières — Site web

Site web officiel du **Groupe Scolaire Les Lumières**, école privée trilingue à Tanger (Maroc),
de la maternelle au lycée. Construit avec **Next.js 14 (App Router, export statique)**,
**Tailwind CSS**, **TypeScript**, **Framer Motion** et **Lucide Icons**.

Optimisé pour le **SEO**, l’**AI Search (AEO)**, la **conversion via WhatsApp** et le **mobile-first**.

---

## 🚀 Démarrage

```bash
npm install            # installer les dépendances
npm run dev            # développement → http://localhost:3000
npm run build          # build statique → génère le dossier /out
node scripts/fetch-placeholders.mjs   # (re)télécharger les images placeholder
```

Le build produit un dossier **`/out`** contenant un site **100 % statique** (HTML/CSS/JS),
déployable n’importe où.

---

## 🗂️ Structure

```
src/
├── app/                 # pages (App Router) + sitemap.ts, robots.ts, manifest.ts
├── components/
│   ├── layout/          # Header, Footer, TopBar, MobileMenu, WhatsAppButton
│   ├── home/            # sections de la page d’accueil
│   ├── shared/          # cartes, formulaires, galerie, FAQ, hero, CTA…
│   └── seo/             # JsonLd (Schema.org)
├── lib/                 # constants (données école), metadata, schema, faq, contenus cycles
└── styles/globals.css
public/
├── images/              # toutes les images (placeholders — voir REPLACE-IMAGES.md)
├── .htaccess            # redirections Apache + HTTPS
└── _redirects           # redirections Netlify
vercel.json              # redirections Vercel
```

---

## 🌐 Déploiement

### Option A — Vercel (recommandé)
1. Poussez le code sur GitHub.
2. Importez le projet sur [vercel.com](https://vercel.com) (framework Next.js détecté automatiquement).
3. Déployez, puis ajoutez le domaine **gsleslumieres.ma** (SSL automatique).
   Les redirections d’anciennes URLs sont gérées par `vercel.json`.

### Option B — Netlify
- Build command : `npm run build` · Publish directory : `out`
- Les redirections sont gérées par `public/_redirects`.

### Option C — Hébergement classique (cPanel / OVH…)
1. `npm run build`
2. Téléversez le **contenu de `/out`** dans `public_html` (FTP).
3. Le fichier `.htaccess` (forçage HTTPS + redirections + 404) est inclus dans `/out`.
4. Activez un certificat SSL (Let’s Encrypt).

### DNS pour gsleslumieres.ma
| Type | Nom | Valeur |
| --- | --- | --- |
| A | @ | [IP de l’hébergeur] |
| CNAME | www | gsleslumieres.ma |

---

## ⚙️ À configurer après déploiement

### 1. IDs de tracking — `src/app/layout.tsx`
Remplacez les valeurs `GTM-XXXXXXX` (et, dans GTM, vos IDs GA4 `G-XXXXXXXXXX` et Meta Pixel).
Événements personnalisés déjà câblés via `dataLayer` : `whatsapp_click`, `form_submit`.

### 2. Formulaires — `src/lib/constants.ts`
Remplacez `FORMSPREE_ENDPOINT` par votre vrai endpoint
[Formspree](https://formspree.io) (envoie les demandes à `leslumieres2021@gmail.com`).
Alternative : [Web3Forms](https://web3forms.com).

### 3. Images
Remplacez les placeholders par les vraies photos de l’école — voir **[REPLACE-IMAGES.md](REPLACE-IMAGES.md)**.

### 4. Vidéos
Remplacez les `src` des iframes YouTube (page d’accueil et galerie) par votre vraie playlist/chaîne.

### 5. Google Search Console & Business Profile
- Ajoutez la propriété, vérifiez-la, soumettez `https://gsleslumieres.ma/sitemap.xml`.
- Mettez à jour la fiche Google Business (adresse, téléphone, horaires, photos).

---

## ✅ SEO & AI Search intégrés
- Métadonnées uniques (title, description, canonical, Open Graph, Twitter) sur chaque page.
- Données structurées **Schema.org** : `EducationalOrganization`/`School`, `BreadcrumbList`,
  `FAQPage`, `Course`, `WebPage`.
- `sitemap.xml` et `robots.txt` générés automatiquement.
- Contenu dense, factuel et entité-centré pour les moteurs de réponse IA (ChatGPT, Claude, Perplexity, Gemini).
- NAP cohérent (nom, adresse, téléphone) sur tout le site.

## 📞 Contacts de l’école
- **Tél :** 0539 93 90 95 · 0666 63 69 74
- **WhatsApp :** +212 666 63 69 74
- **Email :** leslumieres2021@gmail.com
- **Adresse :** Ribh2, Avenue Moulay Rachid, Val Fleuri, 90060 Tanger, Maroc

---

© 2026 Groupe Scolaire Les Lumières — Tanger, Maroc.
