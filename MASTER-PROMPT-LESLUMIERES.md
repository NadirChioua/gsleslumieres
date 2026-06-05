# MASTER PROMPT — BUILD COMPLETE WEBSITE
# GROUPE SCOLAIRE LES LUMIÈRES — TANGER, MAROC

---

## YOUR ROLE

You are an elite full-stack web developer, UI/UX designer, SEO architect, and AI Search optimization expert. You will build a complete, production-ready website for Groupe Scolaire Les Lumières, a private trilingual school in Tangier, Morocco.

This is NOT a generic school template. This is a premium, conversion-optimized, SEO-dominant website designed to convince Moroccan parents (aged 25-50) to enroll their children. Every pixel, every word, every meta tag must serve that goal.

You must use ALL your UI/UX skills to deliver the best possible result. The design must be stunning, professional, warm, and easy to use for parents. Think: premium private school in Europe, but adapted for the Moroccan market.

---

## CRITICAL REQUIREMENTS — READ BEFORE ANYTHING

1. **Build a complete static site** using Next.js (App Router) with static export (`output: 'export'`). This generates pure HTML/CSS/JS that can be hosted ANYWHERE (Vercel, Netlify, any shared hosting, VPS).
2. **Every page must be a real, complete page** with real content — not placeholders, not "Lorem ipsum", not "Coming soon". Use the actual school data provided below.
3. **Mobile-first design** — 65%+ of traffic in Morocco is mobile. Design for phones first, then scale up.
4. **WhatsApp is THE conversion channel** — the floating WhatsApp button is the single most important UI element on the entire site.
5. **SEO + AI Search optimization** — every page must be perfectly optimized for Google AND for AI assistants (ChatGPT, Claude, Perplexity, Gemini) to recommend this school.
6. **Bilingual** — French is primary, Arabic support for key pages. RTL layout must work correctly for Arabic.
7. **Performance** — PageSpeed score 90+ on mobile. No heavy frameworks, no unnecessary JavaScript.

---

## SCHOOL IDENTITY — COMPLETE DATA

```
Name:           Groupe Scolaire Les Lumières
Arabic Name:    مجموعة مدارس الأنوار
Founded:        2004 (21+ years of experience)
Director:       Ahmed ABBOU
Slogan FR:      "Notre école, votre confiance"
Slogan AR:      "مدرستنا، ثقتكم"

Address:        Ribh2, Avenue Moulay Rachid, Val Fleuri, 90060 Tanger, Maroc
Phone 1:        0539 93 90 95
Phone 2:        0666 63 69 74
Email:          leslumieres2021@gmail.com
Website:        gsleslumieres.ma
WhatsApp:       +212666636974

Social Media:
  Instagram:    @gs.leslumiers
  Facebook:     Groupe scolaire Les Lumières
  TikTok:       @gs.leslumiers
  YouTube:      Groupe Scolaire Les Lumières

Brand Colors:
  Primary:      #8B0000 (dark bordeaux red)
  Secondary:    #C9A227 (gold)
  Background:   #FAFAF8 (warm white)
  Text:         #1A1A2E (near black)
  Accent:       #25D366 (WhatsApp green)

Certifications: Cambridge English Qualifications ("We prepare for Cambridge")
Teaching Methods: Montessori, Singapore Method (mathematics), Project-based pedagogy
Languages:      Trilingual — Arabic (from PS), French (primary language of instruction), English (from CP, 3h/week)
```

### CYCLES SCOLAIRES (School Levels)

```
MATERNELLE (Preschool):
  Levels: Petite Section (PS), Moyenne Section (MS), Grande Section (GS)
  Ages: 3-5 years
  Focus: Montessori approach, awakening, socialization, trilingual introduction
  Keywords: maternelle privée Tanger, école maternelle Val Fleuri

PRIMAIRE (Primary):
  Levels: CP, CE2, CE3, CE4, CE5, CE6
  Ages: 6-11 years
  Focus: Singapore Method for math, strong French & Arabic foundation, English from CP
  Keywords: primaire privé Tanger, école primaire privée Tanger

COLLÈGE INTERNATIONAL (Middle School):
  Levels: 1ère Année Collège (1AC), 2AC, 3AC
  Ages: 12-14 years
  Focus: Cambridge English preparation, international curriculum, science labs
  Keywords: collège privé Tanger, collège international Tanger

LYCÉE (High School):
  Levels: Tronc Commun, 1er Bac (SVT/Maths/Eco), 2ème Bac (PC/SVT/Eco/SGC)
  Ages: 15-18 years
  Focus: Baccalaureate preparation, career orientation, Cambridge certification
  Keywords: lycée privé Tanger, lycée Tanger baccalauréat
```

### EXTRACURRICULAR ACTIVITIES
- Theatre & Drama
- Music & Choir (Chorale Albatros)
- Fine Arts & Creative Writing
- Sports Competitions
- School Trips: 3 per year (regional, national, international)
- Annual Events: Carnival, Spring Festival, Kermesse, Cross-country, Science Olympiad
- Ramadan Mathematics Olympiad
- Bourse d'Excellence (Excellence Scholarship for top students)

### SERVICES
- School Transport: Fleet of new vehicles with dedicated staff
- Cafeteria/Cantine: On-site meals with supervision
- Garderie (After-school care): Extended supervision hours
- TICE: Computer labs with interactive whiteboards, science laboratory

### PARENT TESTIMONIALS (Real — from current site)
1. Rachid (Primaire): "Un groupe pédagogique et administratif professionnel. Vous êtes la deuxième famille de mon enfant !"
2. Ahmed (Collège): "Je recommande vivement cette belle école, mon fils y a passé de très bons moments, les éducatrices sont très câlines et qualifiées."
3. Khalid (Lycée): "Très bonne école gérée par des professionnels. Très bon niveau scolaire, les enfants y sont épanouis."

---

## TECH STACK

```
Framework:        Next.js 14+ (App Router, static export)
Styling:          Tailwind CSS 3.4+
Icons:            Lucide React
Animations:       Framer Motion (lightweight, scroll-triggered)
Forms:            React Hook Form + server action or mailto fallback
Maps:             Google Maps Embed (iframe, no API key needed)
Fonts:            Google Fonts — loaded locally for performance
Image format:     WebP with fallback (use next/image with static export config)
Language:         TypeScript
Deployment:       Static export → deploy anywhere
```

### Project Structure

```
gsleslumieres/
├── public/
│   ├── images/
│   │   ├── logo.svg
│   │   ├── logo-white.svg
│   │   ├── hero/
│   │   ├── cycles/
│   │   ├── activities/
│   │   ├── campus/
│   │   ├── team/
│   │   └── testimonials/
│   ├── favicon.ico
│   ├── apple-touch-icon.png
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── app/
│   │   ├── layout.tsx              (root layout with metadata, fonts, analytics)
│   │   ├── page.tsx                (homepage)
│   │   ├── qui-sommes-nous/
│   │   │   └── page.tsx
│   │   ├── mot-du-directeur/
│   │   │   └── page.tsx
│   │   ├── pourquoi-les-lumieres/
│   │   │   └── page.tsx
│   │   ├── notre-equipe/
│   │   │   └── page.tsx
│   │   ├── nos-resultats/
│   │   │   └── page.tsx
│   │   ├── maternelle-tanger/
│   │   │   └── page.tsx
│   │   ├── primaire-prive-tanger/
│   │   │   └── page.tsx
│   │   ├── college-prive-tanger/
│   │   │   └── page.tsx
│   │   ├── lycee-prive-tanger/
│   │   │   └── page.tsx
│   │   ├── activites-parascolaires/
│   │   │   └── page.tsx
│   │   ├── galerie/
│   │   │   └── page.tsx
│   │   ├── actualites/
│   │   │   └── page.tsx
│   │   ├── transport-scolaire/
│   │   │   └── page.tsx
│   │   ├── cantine/
│   │   │   └── page.tsx
│   │   ├── inscription-ecole-tanger/
│   │   │   └── page.tsx
│   │   ├── faq/
│   │   │   └── page.tsx
│   │   ├── contact/
│   │   │   └── page.tsx
│   │   ├── mentions-legales/
│   │   │   └── page.tsx
│   │   └── not-found.tsx           (custom 404)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx          (navigation + mobile menu)
│   │   │   ├── Footer.tsx          (contacts, map, social, nav)
│   │   │   ├── WhatsAppButton.tsx  (floating button — CRITICAL)
│   │   │   ├── TopBar.tsx          (phone + email + social icons)
│   │   │   └── MobileMenu.tsx
│   │   ├── home/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── StatsCounter.tsx    (21 ans, 4 cycles, 3 langues, Cambridge)
│   │   │   ├── CyclesGrid.tsx
│   │   │   ├── WhyUsSection.tsx
│   │   │   ├── TestimonialsCarousel.tsx
│   │   │   ├── ActivitiesGallery.tsx
│   │   │   ├── VideoSection.tsx
│   │   │   └── CTABanner.tsx
│   │   ├── shared/
│   │   │   ├── SectionTitle.tsx
│   │   │   ├── CTAButton.tsx
│   │   │   ├── CycleCard.tsx
│   │   │   ├── TestimonialCard.tsx
│   │   │   ├── FeatureCard.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── InscriptionForm.tsx
│   │   │   ├── GoogleMap.tsx
│   │   │   ├── ImageGallery.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   ├── BreadCrumb.tsx
│   │   │   └── ScrollReveal.tsx    (Framer Motion wrapper)
│   │   └── seo/
│   │       ├── JsonLd.tsx          (Schema.org structured data)
│   │       └── OpenGraph.tsx
│   ├── lib/
│   │   ├── constants.ts           (school data, contacts, colors)
│   │   ├── metadata.ts            (SEO metadata generator)
│   │   └── schema.ts              (JSON-LD schema generators)
│   └── styles/
│       └── globals.css            (Tailwind + custom styles)
├── next.config.js
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md                      (deployment guide)
```

---

## PAGE-BY-PAGE SPECIFICATIONS

### PAGE 1: HOMEPAGE ( / )

**SEO:**
```
Title:       "Groupe Scolaire Les Lumières | École Privée Trilingue à Tanger depuis 2004"
Meta Desc:   "École privée trilingue à Tanger depuis 2004. Maternelle, Primaire, Collège, Lycée. Cambridge English. Méthode de Singapour. Inscriptions 2026-2027 ouvertes. ☎ 0539 93 90 95"
H1:          "École Privée Trilingue à Tanger — De la Maternelle au Baccalauréat"
URL:         /
```

**Sections (in order):**

**1. Top Bar** — Slim bar at the very top
- Left: Phone icon + "0539 93 90 95" (clickable tel: link) | Email icon + email
- Right: Social media icons (Facebook, Instagram, TikTok, YouTube)
- Background: #8B0000 (bordeaux), text white, height ~36px

**2. Header/Navigation** — Sticky on scroll
- Logo on the left (with school name)
- Navigation links: L'École (dropdown) | Nos Formations (dropdown) | Vie Scolaire (dropdown) | Services (dropdown) | Inscription | Contact
- Right side: WhatsApp icon button + "Nous Contacter" CTA button (gold background)
- Mobile: Hamburger menu, full-screen overlay with all links
- On scroll: Header gets white background with subtle shadow, shrinks slightly

**3. Hero Section** — Full viewport height, powerful first impression
- Background: Large hero image of the school (happy students, campus view) with dark overlay gradient
- Badge: "21 ans d'excellence éducative à Tanger" (gold badge with subtle animation)
- H1: "École Privée Trilingue à Tanger — De la Maternelle au Baccalauréat"
- Subtitle: "Un environnement chaleureux, stimulant et sécurisé où chaque enfant apprend, s'épanouit et construit son avenir."
- Two CTA buttons:
  - Primary (gold): "Inscriptions 2026-2027 →" (links to /inscription-ecole-tanger/)
  - Secondary (outline white): "Découvrir notre école →" (smooth scroll to next section)
- Bottom: Cambridge logo badge + "We prepare for Cambridge English Qualifications"
- Subtle scroll-down indicator animation

**4. Stats Counter Section** — Animated numbers on scroll
- 4 columns, each with:
  - Animated number counting up when in viewport
  - Label below
- Stats: "21+" / Années d'expérience | "4" / Cycles scolaires | "3" / Langues enseignées | "Cambridge" / Certifications internationales
- Background: warm white with subtle pattern or gold accent line

**5. Cycles Grid** — 4 cards for each school level
- Each card has:
  - Relevant image (students of that age group)
  - Cycle name (Maternelle / Primaire / Collège / Lycée)
  - Age range
  - 2-3 key features
  - "En savoir plus →" link
- Cards have hover effect (subtle lift, border-color change to gold)
- Section title: "Nos Formations" with subtitle

**6. Why Choose Us** — 6 feature blocks
- Section title: "Pourquoi choisir Les Lumières ?"
- 6 cards in 2x3 grid (3x2 on mobile):
  1. 🎓 21 ans d'expérience — "Plus de deux décennies d'excellence éducative à Tanger"
  2. 🌍 École trilingue — "Arabe, Français et Anglais dès le plus jeune âge"
  3. 🧮 Méthode de Singapour — "L'approche mathématique la plus efficace au monde"
  4. 🏅 Cambridge English — "Certifications internationales reconnues mondialement"
  5. 🎭 Activités enrichissantes — "Théâtre, chorale, arts, sports et voyages scolaires"
  6. 👨‍👩‍👧‍👦 Encadrement bienveillant — "Un suivi personnalisé pour chaque élève"
- Each card: icon (Lucide), title, short description
- Use Framer Motion for staggered reveal on scroll

**7. Testimonials** — Parent reviews carousel
- Section title: "Ce que disent les parents"
- Carousel/slider with 3+ testimonials
- Each testimonial: quote text, parent name, cycle, star rating (5 stars)
- Use the real testimonials from Rachid, Ahmed, Khalid
- Add 3-4 more realistic testimonials:
  4. Fatima (Maternelle): "Un cadre rassurant pour les premiers pas de mon enfant. Les éducatrices sont formidables et très attentives."
  5. Youssef (Primaire): "La méthode de Singapour a transformé le niveau de mon fils en mathématiques. Je recommande vivement."
  6. Samira (Collège): "Le programme Cambridge English a donné à ma fille une vraie confiance en anglais. Excellente école."
- Auto-scroll, with manual navigation dots

**8. School Life Gallery** — Photo grid
- Section title: "La vie scolaire aux Lumières"
- Grid of 6-8 photos (classroom, activities, events, sports, trips)
- Lightbox on click
- "Voir toute la galerie →" link

**9. Video Section**
- Section title: "Découvrez notre établissement"
- YouTube embed (responsive)
- Subtitle: "Une école où chaque élève grandit avec confiance, ambition et accompagnement personnalisé."

**10. CTA Inscription Banner** — Conversion-focused
- Full-width, gradient background (bordeaux → dark)
- Title: "Les inscriptions 2026-2027 sont ouvertes"
- Subtitle: "Places limitées — Réservez une visite ou contactez-nous dès maintenant"
- 2 buttons:
  - WhatsApp (green): "Contacter via WhatsApp" → wa.me link
  - Phone (gold): "Appeler : 0539 93 90 95" → tel: link
- This section is CRITICAL for conversion

**11. Footer** — Complete and informative
- 4 columns:
  1. Logo + short description + social media icons
  2. Navigation links (all pages)
  3. Contact info (address, phones clickable, email, WhatsApp)
  4. Mini Google Maps embed
- Bottom bar: "© 2026 Groupe Scolaire Les Lumières — Tanger, Maroc. Tous droits réservés."
- All phone numbers must be clickable (tel:)
- Address links to Google Maps

---

### PAGE 2: QUI SOMMES-NOUS ( /qui-sommes-nous/ )

**SEO:**
```
Title:       "Qui sommes-nous | Groupe Scolaire Les Lumières — École à Tanger depuis 2004"
Meta Desc:   "Découvrez le Groupe Scolaire Les Lumières, école privée trilingue fondée en 2004 à Tanger. 21 ans d'expérience, de la maternelle au baccalauréat. Méthode Montessori et Singapour."
H1:          "Groupe Scolaire Les Lumières — 21 ans d'excellence éducative à Tanger"
```

**Content:**
- Breadcrumb: Accueil > L'École > Qui sommes-nous
- Hero image of the school building/campus
- History: Founded in 2004, located in Val Fleuri, Tangier
- Mission statement: "Accompagner l'élève de la maternelle au baccalauréat dans un cadre rassurant et agréable"
- Values: tolerance, respect, autonomy, formation de qualité
- Teaching philosophy: project-based pedagogy, competency-based learning
- Multilingual strategy detailed:
  - Arabic: from Petite Section
  - French: primary language of instruction (math, physics, biology, computer science)
  - English: from CP, 3 hours/week, Cambridge preparation
- Singapore Method for mathematics
- CTA section at bottom with WhatsApp + phone

---

### PAGE 3: MOT DU DIRECTEUR ( /mot-du-directeur/ )

**SEO:**
```
Title:       "Mot du Directeur Ahmed ABBOU | Groupe Scolaire Les Lumières Tanger"
Meta Desc:   "Message du directeur Ahmed ABBOU, fondateur du Groupe Scolaire Les Lumières à Tanger. Notre vision pédagogique pour l'excellence et l'épanouissement de chaque élève."
H1:          "Mot du Directeur — Ahmed ABBOU"
```

**Content:**
- Professional photo placeholder for director
- Signed message covering:
  - Welcome to parents
  - Educational philosophy (project-based, competency-based)
  - Activities: theater, music, choir, cinema club, fine arts
  - Events: cross-country, spring festival, carnival, kermesse
  - Vision for the future
- Signature block with name and title
- CTA: "Venez nous rencontrer" with WhatsApp button

---

### PAGE 4: POURQUOI LES LUMIÈRES ( /pourquoi-les-lumieres/ )

**SEO:**
```
Title:       "Pourquoi choisir Les Lumières ? | Meilleure École Privée à Tanger"
Meta Desc:   "7 raisons de choisir le Groupe Scolaire Les Lumières à Tanger : 21 ans d'expérience, école trilingue, Cambridge English, Méthode de Singapour, activités riches, encadrement personnalisé."
H1:          "Pourquoi choisir le Groupe Scolaire Les Lumières à Tanger ?"
```

**Content:**
- 7 differentiating arguments, each with icon, title, detailed paragraph:
  1. 21 ans d'expérience et de confiance
  2. École trilingue dès la maternelle (arabe, français, anglais)
  3. Méthode de Singapour pour les mathématiques
  4. Cambridge English Qualifications
  5. Activités parascolaires riches et diversifiées
  6. Encadrement bienveillant et suivi personnalisé
  7. De la maternelle au baccalauréat dans un même établissement
- Comparison advantages vs other schools (without naming competitors)
- Parent testimonials relevant to each point
- Strong CTA: "Convaincu ? Contactez-nous pour inscrire votre enfant"

---

### PAGE 5-8: CYCLE PAGES (Maternelle, Primaire, Collège, Lycée)

Each cycle page follows the SAME template but with unique content:

**Template structure:**
1. Hero with cycle-specific image and title
2. Breadcrumb: Accueil > Nos Formations > [Cycle Name]
3. Overview paragraph (250-400 words, keyword-rich)
4. Levels offered (table or cards)
5. Subjects taught (grid with icons)
6. Teaching methods specific to this cycle
7. Languages taught (with hours per week)
8. Key features / advantages
9. Photo gallery (6-8 images of this cycle)
10. Relevant parent testimonial
11. CTA: "Inscrire mon enfant en [Cycle]" → WhatsApp + Form

**MATERNELLE ( /maternelle-tanger/ ):**
```
Title:    "Maternelle Privée à Tanger | Groupe Scolaire Les Lumières"
Meta:     "Maternelle privée trilingue à Tanger. Petite, Moyenne et Grande Section. Approche Montessori, éveil et apprentissage dans un cadre chaleureux. Inscriptions 2026-2027."
H1:       "Maternelle Privée Trilingue à Tanger — PS, MS, GS"
```
- Focus: Montessori, awakening, socialization, first steps in 3 languages
- Ages 3-5, small class sizes, caring educators

**PRIMAIRE ( /primaire-prive-tanger/ ):**
```
Title:    "Primaire Privé à Tanger | École Les Lumières — Méthode de Singapour"
Meta:     "École primaire privée à Tanger du CP au CE6. Méthode de Singapour pour les maths, enseignement trilingue, anglais dès le CP. Groupe Scolaire Les Lumières."
H1:       "École Primaire Privée à Tanger — Du CP au CE6"
```
- Focus: Singapore Method (math), strong French foundation, English from CP

**COLLÈGE ( /college-prive-tanger/ ):**
```
Title:    "Collège Privé International à Tanger | Les Lumières — Cambridge English"
Meta:     "Collège privé international à Tanger. 1AC, 2AC, 3AC. Préparation Cambridge English, laboratoires de sciences, programme trilingue. Inscriptions ouvertes."
H1:       "Collège Privé International à Tanger — 1AC, 2AC, 3AC"
```
- Focus: Cambridge prep, international curriculum, science labs, maturity

**LYCÉE ( /lycee-prive-tanger/ ):**
```
Title:    "Lycée Privé à Tanger | Groupe Scolaire Les Lumières — Baccalauréat"
Meta:     "Lycée privé à Tanger. Tronc commun, 1er et 2ème Bac (SVT, PC, Éco, SGC). Préparation Cambridge, bourse d'excellence. Groupe Scolaire Les Lumières."
H1:       "Lycée Privé à Tanger — Tronc Commun au Baccalauréat"
```
- Focus: Bac preparation, filières (SVT, Maths, Eco, PC, SGC), excellence scholarship, Cambridge

---

### PAGE 9: ACTIVITÉS PARASCOLAIRES ( /activites-parascolaires/ )

```
Title:    "Activités Parascolaires | Groupe Scolaire Les Lumières Tanger"
Meta:     "Activités parascolaires variées à l'école Les Lumières Tanger : théâtre, chorale, arts plastiques, sports, voyages scolaires. L'épanouissement de chaque élève."
H1:       "Activités Parascolaires — L'épanouissement au-delà des cours"
```

Content: Theatre, choir (Albatros), fine arts, creative writing, sports, school trips (3/year: regional, national, international), carnival, kermesse, spring festival, Ramadan Math Olympiad.

---

### PAGE 10: GALERIE ( /galerie/ )

```
Title:    "Galerie Photos et Vidéos | Groupe Scolaire Les Lumières Tanger"
Meta:     "Découvrez en images la vie scolaire au Groupe Scolaire Les Lumières à Tanger. Photos de classes, activités, événements et sorties scolaires."
H1:       "Galerie Photos et Vidéos — La vie aux Lumières"
```

- Filterable gallery by category: Maternelle, Primaire, Collège, Lycée, Événements, Sorties
- Lightbox viewer
- TikTok/YouTube video embed section

---

### PAGE 11: ACTUALITÉS ( /actualites/ )

```
Title:    "Actualités et Événements | Groupe Scolaire Les Lumières Tanger"
Meta:     "Suivez l'actualité du Groupe Scolaire Les Lumières à Tanger : événements scolaires, résultats, sorties, projets éducatifs et nouveautés."
H1:       "Actualités et Événements"
```

- Blog-style page with article cards
- Pre-populate with 4-5 articles:
  1. "Inscriptions 2026-2027 ouvertes — Places limitées"
  2. "L'élève Malak Allouh représente Les Lumières avec distinction"
  3. "Bourse d'excellence pour les élèves méritants"
  4. "Olympiade Ramadan des mathématiques — Résultats"
  5. "Sortie scolaire à Chefchaouen — Souvenirs inoubliables"

---

### PAGE 12: TRANSPORT ( /transport-scolaire/ )

```
Title:    "Transport Scolaire | Groupe Scolaire Les Lumières Tanger"
Meta:     "Service de transport scolaire sécurisé au Groupe Scolaire Les Lumières. Véhicules neufs, personnel d'accompagnement, contrôle technique régulier. Tanger."
H1:       "Transport Scolaire Sécurisé"
```

---

### PAGE 13: CANTINE ( /cantine/ )

```
Title:    "Cantine et Restauration | Groupe Scolaire Les Lumières Tanger"
Meta:     "Service de restauration scolaire au Groupe Scolaire Les Lumières Tanger. Repas équilibrés, encadrement lors des repas, conditions d'hygiène strictes."
H1:       "Restauration et Cantine Scolaire"
```

---

### PAGE 14: INSCRIPTION ( /inscription-ecole-tanger/ )

```
Title:    "Inscription École Privée Tanger 2026-2027 | Groupe Scolaire Les Lumières"
Meta:     "Inscrivez votre enfant au Groupe Scolaire Les Lumières à Tanger. Inscriptions 2026-2027 ouvertes. Formulaire en ligne, WhatsApp ou visite sur place. Réponse rapide."
H1:       "Inscriptions 2026-2027 — Rejoignez le Groupe Scolaire Les Lumières"
```

**CRITICAL PAGE — This is the main conversion page.**

**Content:**
1. Hero: "Inscriptions ouvertes pour l'année scolaire 2026-2027"
2. 3 ways to contact:
   - WhatsApp (big green button, most prominent)
   - Phone call (clickable)
   - Form below
3. **Simplified Form** (MAXIMUM 4 fields):
   - Nom complet du parent (text, required)
   - Numéro WhatsApp (tel, required, placeholder: "06XX XX XX XX")
   - Niveau demandé (select dropdown: PS, MS, GS, CP, CE2, CE3, CE4, CE5, CE6, 1AC, 2AC, 3AC, Tronc Commun, 1er Bac, 2ème Bac)
   - Message (textarea, optional, placeholder: "Votre question ou demande...")
   - Submit button: "Envoyer ma demande d'inscription"
4. After submit: Success message "Merci ! Notre équipe vous contactera dans les plus brefs délais via WhatsApp."
5. Below form: Steps to enroll (numbered):
   - Étape 1: Contactez-nous via WhatsApp ou formulaire
   - Étape 2: Nous vous rappelons pour répondre à vos questions
   - Étape 3: Visitez l'école et rencontrez l'équipe pédagogique
   - Étape 4: Finalisez l'inscription de votre enfant
6. Required documents list
7. FAQ mini-section: 3-4 common questions

---

### PAGE 15: FAQ ( /faq/ )

```
Title:    "Questions Fréquentes (FAQ) | Groupe Scolaire Les Lumières Tanger"
Meta:     "Réponses aux questions fréquentes sur le Groupe Scolaire Les Lumières Tanger : inscriptions, tarifs, transport, programmes, langues, Cambridge, activités."
H1:       "Questions Fréquentes — Tout savoir sur Les Lumières"
```

**Accordion with 12+ questions:**
1. Quels sont les cycles scolaires proposés par Les Lumières ?
2. L'école est-elle trilingue ? Quelles langues sont enseignées ?
3. Qu'est-ce que la Méthode de Singapour utilisée en mathématiques ?
4. L'école prépare-t-elle aux certifications Cambridge English ?
5. Quelles sont les activités parascolaires proposées ?
6. Comment se déroule le processus d'inscription ?
7. Quels sont les documents nécessaires pour l'inscription ?
8. L'école dispose-t-elle d'un service de transport scolaire ?
9. Y a-t-il une cantine ou un service de restauration ?
10. Quels sont les horaires de l'école ?
11. Comment contacter l'école pour plus d'informations ?
12. Où se situe exactement l'école à Tanger ?

**IMPORTANT:** Implement Schema.org FAQPage structured data for this page.

---

### PAGE 16: CONTACT ( /contact/ )

```
Title:    "Contacter le Groupe Scolaire Les Lumières — Tanger"
Meta:     "Contactez le Groupe Scolaire Les Lumières à Tanger. Adresse : Val Fleuri. Tél : 0539 93 90 95. WhatsApp disponible. Formulaire de contact en ligne."
H1:       "Contactez-nous"
```

**Content:**
- 3 contact cards side by side:
  1. Phone (with clickable numbers)
  2. WhatsApp (big green button)
  3. Email
- Address with Google Maps embed (large, interactive)
- Contact form (Name, Phone, Email, Message)
- Opening hours

---

## WHATSAPP BUTTON — DETAILED SPECIFICATION

This is the SINGLE MOST IMPORTANT conversion element.

```tsx
// WhatsAppButton.tsx — Floating button, always visible
// Position: fixed, bottom-right corner
// Mobile: bottom: 20px, right: 20px
// Desktop: bottom: 30px, right: 30px
// Size: 60px circle on mobile, 64px on desktop
// Color: #25D366 (WhatsApp green)
// Shadow: 0 4px 12px rgba(0,0,0,0.15)
// Animation: subtle pulse every 5 seconds to draw attention
// Z-index: 9999
// Link: https://wa.me/212666636974?text=Bonjour%2C%20je%20souhaite%20des%20informations%20sur%20les%20inscriptions%20au%20Groupe%20Scolaire%20Les%20Lumi%C3%A8res.
// Icon: WhatsApp SVG icon (white on green)
// On hover: scale(1.1) + darker green
// On mobile: touch-friendly, no hover needed
// Optional tooltip on desktop: "Contactez-nous sur WhatsApp"
```

---

## SEO ARCHITECTURE — COMPLETE

### On-Page SEO Rules (EVERY page must comply)

1. **Title tag**: Unique, 50-60 chars, contains primary keyword + "Tanger" + brand name
2. **Meta description**: Unique, 150-160 chars, contains keyword + call-to-action + phone number where relevant
3. **H1**: Exactly ONE per page, contains the primary keyword, descriptive
4. **H2-H3**: Proper hierarchy, contain secondary keywords
5. **Alt tags**: Every image must have descriptive alt text in French, containing relevant keywords
6. **Internal linking**: Each page links to 3-5 other relevant pages
7. **Canonical URLs**: Self-referencing canonical on every page
8. **URL structure**: Short, keyword-rich, lowercase, hyphens (no underscores)

### Structured Data (JSON-LD) — Implement on EVERY relevant page

**Homepage — LocalBusiness + EducationalOrganization:**
```json
{
  "@context": "https://schema.org",
  "@type": ["EducationalOrganization", "School"],
  "name": "Groupe Scolaire Les Lumières",
  "alternateName": "مجموعة مدارس الأنوار",
  "description": "École privée trilingue à Tanger, Maroc. De la maternelle au baccalauréat. Fondée en 2004. Méthode de Singapour, Cambridge English, activités parascolaires.",
  "url": "https://gsleslumieres.ma",
  "logo": "https://gsleslumieres.ma/images/logo.svg",
  "image": "https://gsleslumieres.ma/images/hero/school-campus.jpg",
  "telephone": ["+212539939095", "+212666636974"],
  "email": "leslumieres2021@gmail.com",
  "foundingDate": "2004",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Ribh2, Avenue Moulay Rachid, Val Fleuri",
    "addressLocality": "Tanger",
    "postalCode": "90060",
    "addressRegion": "Tanger-Tétouan-Al Hoceima",
    "addressCountry": "MA"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 35.7595,
    "longitude": -5.8340
  },
  "sameAs": [
    "https://www.facebook.com/GroupeScolaireLesLumieres",
    "https://www.instagram.com/gs.leslumiers",
    "https://www.tiktok.com/@gs.leslumiers"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Cycles scolaires",
    "itemListElement": [
      {"@type": "Offer", "itemOffered": {"@type": "EducationalOccupationalProgram", "name": "Maternelle (PS, MS, GS)", "educationalLevel": "Preschool"}},
      {"@type": "Offer", "itemOffered": {"@type": "EducationalOccupationalProgram", "name": "Primaire (CP à CE6)", "educationalLevel": "Primary"}},
      {"@type": "Offer", "itemOffered": {"@type": "EducationalOccupationalProgram", "name": "Collège International (1AC-3AC)", "educationalLevel": "Middle School"}},
      {"@type": "Offer", "itemOffered": {"@type": "EducationalOccupationalProgram", "name": "Lycée (Tronc Commun au Bac)", "educationalLevel": "High School"}}
    ]
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "reviewCount": "150",
    "bestRating": "5"
  }
}
```

**FAQ Page — FAQPage schema:**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Quels sont les cycles scolaires proposés par Les Lumières ?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Le Groupe Scolaire Les Lumières propose 4 cycles complets : Maternelle (PS, MS, GS), Primaire (CP à CE6), Collège International (1AC, 2AC, 3AC) et Lycée (Tronc Commun, 1er et 2ème Bac)."
      }
    }
  ]
}
```

**BreadcrumbList** on every internal page.

### Open Graph Tags (every page)
```html
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Groupe Scolaire Les Lumières" />
<meta property="og:locale" content="fr_MA" />
<meta property="og:title" content="[Page Title]" />
<meta property="og:description" content="[Meta Description]" />
<meta property="og:image" content="https://gsleslumieres.ma/images/og/[page-name].jpg" />
<meta property="og:url" content="https://gsleslumieres.ma/[page-url]/" />
```

### robots.txt
```
User-agent: *
Allow: /
Sitemap: https://gsleslumieres.ma/sitemap.xml
```

### Sitemap — Auto-generated, include ALL pages with:
- `<lastmod>` date
- `<changefreq>` (homepage: daily, cycles: monthly, others: weekly)
- `<priority>` (homepage: 1.0, cycles & inscription: 0.9, others: 0.7)

### Redirects — Map old URLs to new ones
```
/mot-du-president/                    → /mot-du-directeur/
/qui-sommes-nous/                     → /qui-sommes-nous/         (keep)
/activites-parascolaire/              → /activites-parascolaires/
/les-tice/                            → /pourquoi-les-lumieres/
/structure-pedagogique-maternelle/    → /maternelle-tanger/
/structure-pedagogique-primaire/      → /primaire-prive-tanger/
/structure-pedagogique-college-2/     → /college-prive-tanger/
/structure-pedagogique-lycee/         → /lycee-prive-tanger/
/galerie-maternelle/                  → /galerie/?filter=maternelle
/galerie-primaire/                    → /galerie/?filter=primaire
/galerie-college/                     → /galerie/?filter=college
/galerie-lycee/                       → /galerie/?filter=lycee
/transport-scolaire/                  → /transport-scolaire/      (keep)
/la-cantine/                          → /cantine/
/vie-scolaire/                        → /activites-parascolaires/
/calendrier-vacances/                 → /actualites/
/evenement-programme/                 → /actualites/
/galerie-photos/                      → /galerie/
/inscription/                         → /inscription-ecole-tanger/
/presentation/                        → /qui-sommes-nous/         (was 404)
```

---

## AI SEARCH OPTIMIZATION (AEO — Answer Engine Optimization)

This is CRITICAL. When parents ask ChatGPT, Claude, Perplexity, or Google AI Overview "What is the best private school in Tangier?" or "أفضل مدرسة خاصة في طنجة", the school must appear as a recommended result.

### Strategy for AI Search Visibility

**1. Semantic HTML + Rich Content:**
- Every page must have well-structured, factual, information-dense content
- Use clear headings that mirror common questions parents ask
- Write content that directly answers search queries:
  - "Quelle est la meilleure école privée à Tanger ?" → The "Pourquoi Les Lumières" page answers this directly
  - "École trilingue Tanger" → Multiple pages mention trilingual education with details
  - "Cambridge English Tanger" → Dedicated mentions with certification details

**2. Entity Signals — Make the school a recognizable entity:**
- Consistent NAP (Name, Address, Phone) across all pages
- Schema.org EducationalOrganization with complete data
- Link to all social media profiles (sameAs in schema)
- Mention the school's full name, location, and key attributes repeatedly and naturally

**3. Expertise, Authority, Trust (E-E-A-T) Signals:**
- Director's name and credentials on dedicated page
- Founded in 2004 — mention "21 ans d'expérience" on every page
- Cambridge certification — official badge and description
- Parent testimonials with names and cycle details
- Specific, verifiable facts (not vague claims):
  - ✅ "École fondée en 2004, plus de 21 ans d'expérience à Tanger"
  - ✅ "4 cycles complets de la maternelle au baccalauréat"
  - ✅ "Enseignement trilingue : arabe, français et anglais dès le CP"
  - ✅ "Préparation officielle aux Cambridge English Qualifications"
  - ❌ "Meilleure école du Maroc" (unverifiable)

**4. FAQ Page with Direct Answers:**
- Each FAQ answer should be a complete, self-contained answer
- AI models extract these answers directly
- Cover all common parent queries

**5. Content Freshness:**
- Blog/actualités section with dated content
- Copyright 2026 (current year)
- "Inscriptions 2026-2027" shows the site is current

**6. About Page Pattern:**
Create content blocks that AI models can easily extract as "about" snippets:
```
Le Groupe Scolaire Les Lumières est une école privée trilingue fondée en 2004, 
située dans le quartier Val Fleuri à Tanger, au Maroc. L'établissement accueille 
les élèves de la maternelle au baccalauréat et propose un enseignement en arabe, 
français et anglais. L'école utilise la Méthode de Singapour pour les mathématiques 
et prépare ses élèves aux certifications Cambridge English Qualifications. 
Avec plus de 21 ans d'expérience, Les Lumières offre un cadre éducatif moderne, 
sécurisé et bienveillant, enrichi par des activités parascolaires variées 
(théâtre, chorale, arts, sports et voyages scolaires).
```

**7. Multilingual AI Signals:**
- French content for francophone AI queries
- Arabic meta content for Arabic AI queries
- The school name in both scripts: "Groupe Scolaire Les Lumières" / "مجموعة مدارس الأنوار"

---

## TRACKING & ANALYTICS SETUP

### Google Tag Manager (GTM)
Create a GTM container with the following tags:

**1. Google Analytics 4 (GA4)**
- Page view tracking (automatic)
- Custom events:
  - `whatsapp_click` — fires when WhatsApp button or any wa.me link is clicked
  - `phone_click` — fires when any tel: link is clicked
  - `form_submit` — fires when inscription or contact form is submitted
  - `cta_click` — fires when any CTA button is clicked (with button label as parameter)
  - `scroll_depth` — 25%, 50%, 75%, 100% on cycle pages and inscription page

**2. Meta Pixel (Facebook/Instagram)**
- PageView (all pages)
- Lead event (form submission)
- Contact event (WhatsApp click)
- ViewContent event (cycle pages)

### Implementation in Next.js
```tsx
// In layout.tsx — GTM script in <head>
// GTM noscript in <body>
// GA4 measurement ID: placeholder G-XXXXXXXXXX
// Meta Pixel ID: placeholder XXXXXXXXXXXXXXX
// The school will replace these with their actual IDs
```

Create a clear comment block at the top of layout.tsx:
```
// ═══════════════════════════════════════════════════
// TRACKING IDS — REPLACE WITH YOUR ACTUAL IDS
// GA4: G-XXXXXXXXXX → Get from analytics.google.com
// GTM: GTM-XXXXXXX → Get from tagmanager.google.com
// Meta Pixel: XXXXXXXXXXXXXXX → Get from business.facebook.com
// ═══════════════════════════════════════════════════
```

---

## DESIGN SPECIFICATIONS

### Typography
```
Headings:     "DM Serif Display" or "Playfair Display" (serif, elegant, trustworthy)
Body:         "DM Sans" or "Outfit" (sans-serif, modern, highly readable)
Arabic:       "Noto Sans Arabic" (clean, professional)
Sizes:        H1: 48px/40px mobile | H2: 36px/28px | H3: 24px/20px | Body: 16px/15px
Line height:  Headings: 1.2 | Body: 1.7
```

### Color System (Tailwind config)
```js
colors: {
  primary: {
    50: '#fef2f2',
    100: '#fde3e3',
    200: '#fbc8c8',
    300: '#f6a0a0',
    400: '#ee6767',
    500: '#e33a3a',
    600: '#c41e1e',
    700: '#a41717',
    800: '#8B0000',  // Main brand color
    900: '#731616',
  },
  gold: {
    50: '#fefaec',
    100: '#fdf0c8',
    200: '#fbe08d',
    300: '#f8cb52',
    400: '#f5b829',
    500: '#C9A227',  // Main gold
    600: '#a67c12',
    700: '#845a0e',
    800: '#6d4712',
    900: '#5b3b14',
  },
  whatsapp: '#25D366',
}
```

### Spacing & Layout
- Max content width: 1280px (container)
- Section padding: 80px top/bottom desktop, 48px mobile
- Card border-radius: 12px
- Button border-radius: 8px (or full-round for icon buttons)
- Standard gap: 24px grid, 16px cards

### Animations (Framer Motion)
- Scroll reveal: fade-up with 0.6s duration, staggered children
- Stats counter: count from 0 to target number over 2 seconds
- WhatsApp button: pulse animation every 5 seconds
- Page transitions: subtle fade
- Hover effects on cards: translateY(-4px) + shadow increase
- NO aggressive animations. Keep it professional and warm.

---

## FORM HANDLING

Since this is a static site, forms need a backend or service:

### Option 1 (Recommended): Formspree
```
Action: https://formspree.io/f/{form-id}
Method: POST
```
- Free tier: 50 submissions/month
- Sends email to leslumieres2021@gmail.com
- No server needed

### Option 2: Web3Forms
```
Action: https://api.web3forms.com/submit
Access Key: {key}
```
- Free tier: 250 submissions/month

### Option 3: Custom API (if hosting on VPS)
- Simple Express.js endpoint
- Sends email via Nodemailer + Gmail SMTP

**In the code, implement Option 1 (Formspree) as default with clear instructions to replace the form endpoint.**

---

## DEPLOYMENT INSTRUCTIONS

### Build Command
```bash
npm run build
# This generates the /out directory with static files
```

### Option A: Vercel (RECOMMENDED — Easiest)
```
1. Push code to GitHub
2. Go to vercel.com → Import project
3. Framework: Next.js (auto-detected)
4. Deploy
5. Add custom domain: gsleslumieres.ma
6. SSL: automatic
```
**Cost: Free tier is sufficient for this site.**

### Option B: Netlify
```
1. Push code to GitHub
2. Go to netlify.com → Import project
3. Build command: npm run build
4. Publish directory: out
5. Deploy
6. Add custom domain: gsleslumieres.ma
```

### Option C: Traditional Hosting (OVH, Namecheap, any cPanel)
```
1. Run: npm run build
2. Upload contents of /out/ directory to public_html via FTP
3. Configure domain DNS to point to hosting
4. Install SSL certificate (Let's Encrypt free)
5. Add .htaccess for redirects (see below)
```

### .htaccess for Apache hosting (if Option C)
```apache
RewriteEngine On
RewriteCond %{HTTPS} off
RewriteRule ^(.*)$ https://%{HTTP_HOST}%{REQUEST_URI} [L,R=301]

# Old URL redirects
RewriteRule ^mot-du-president/?$ /mot-du-directeur/ [R=301,L]
RewriteRule ^activites-parascolaire/?$ /activites-parascolaires/ [R=301,L]
RewriteRule ^structure-pedagogique-maternelle/?$ /maternelle-tanger/ [R=301,L]
RewriteRule ^structure-pedagogique-primaire/?$ /primaire-prive-tanger/ [R=301,L]
RewriteRule ^structure-pedagogique-college-2/?$ /college-prive-tanger/ [R=301,L]
RewriteRule ^structure-pedagogique-lycee/?$ /lycee-prive-tanger/ [R=301,L]
RewriteRule ^la-cantine/?$ /cantine/ [R=301,L]
RewriteRule ^inscription/?$ /inscription-ecole-tanger/ [R=301,L]
RewriteRule ^presentation/?$ /qui-sommes-nous/ [R=301,L]
RewriteRule ^galerie-photos/?$ /galerie/ [R=301,L]
RewriteRule ^galerie-maternelle/?$ /galerie/ [R=301,L]
RewriteRule ^galerie-primaire/?$ /galerie/ [R=301,L]
RewriteRule ^galerie-college/?$ /galerie/ [R=301,L]
RewriteRule ^galerie-lycee/?$ /galerie/ [R=301,L]
RewriteRule ^vie-scolaire/?$ /activites-parascolaires/ [R=301,L]
RewriteRule ^les-tice/?$ /pourquoi-les-lumieres/ [R=301,L]
RewriteRule ^evenement-programme/?$ /actualites/ [R=301,L]
RewriteRule ^calendrier-vacances/?$ /actualites/ [R=301,L]

# Custom 404
ErrorDocument 404 /404.html
```

### DNS Configuration for gsleslumieres.ma
```
Type    Name    Value                   TTL
A       @       [hosting IP]            3600
CNAME   www     gsleslumieres.ma        3600
```

---

## NEXT.JS CONFIGURATION

### next.config.js
```js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true, // Required for static export
  },
  // Redirects handled via .htaccess or hosting platform
};

module.exports = nextConfig;
```

### tailwind.config.ts
```ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fef2f2', 100: '#fde3e3', 200: '#fbc8c8',
          300: '#f6a0a0', 400: '#ee6767', 500: '#e33a3a',
          600: '#c41e1e', 700: '#a41717', 800: '#8B0000', 900: '#731616',
        },
        gold: {
          50: '#fefaec', 100: '#fdf0c8', 200: '#fbe08d',
          300: '#f8cb52', 400: '#f5b829', 500: '#C9A227',
          600: '#a67c12', 700: '#845a0e', 800: '#6d4712', 900: '#5b3b14',
        },
        whatsapp: '#25D366',
      },
      fontFamily: {
        heading: ['"DM Serif Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        arabic: ['"Noto Sans Arabic"', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
```

### package.json dependencies
```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "framer-motion": "^11.0.0",
    "lucide-react": "^0.400.0",
    "react-hook-form": "^7.52.0"
  },
  "devDependencies": {
    "typescript": "^5.5.0",
    "@types/react": "^18.3.0",
    "@types/node": "^20.14.0",
    "tailwindcss": "^3.4.0",
    "postcss": "^8.4.0",
    "autoprefixer": "^10.4.0"
  }
}
```

---

## IMPORTANT IMAGES NOTE

Since we don't have the actual school photos yet, create a complete placeholder system:

1. Create an `/public/images/` directory structure with ALL needed image references
2. Use high-quality placeholder images from Unsplash URLs in development:
   - School building: education/school themed
   - Classrooms: students learning
   - Activities: children playing, doing arts
   - Campus: green spaces, corridors
3. Create a `REPLACE-IMAGES.md` file listing every image path and what photo it needs:
   ```
   /images/hero/hero-main.jpg — Photo principale de l'école (façade ou cour)
   /images/cycles/maternelle.jpg — Enfants de maternelle en activité
   /images/cycles/primaire.jpg — Élèves de primaire en classe
   ...
   ```
4. Use `next/image` with proper width/height/alt for all images
5. All alt tags must be descriptive and keyword-optimized

---

## ACCESSIBILITY

- All interactive elements keyboard-navigable
- Proper aria-labels on icon-only buttons
- Focus visible outlines on all focusable elements
- Color contrast ratio 4.5:1 minimum for text
- Alt text on all images
- Skip-to-content link
- Semantic HTML (nav, main, article, section, aside, footer)
- Form labels associated with inputs

---

## POST-LAUNCH CHECKLIST (Include as README section)

```markdown
## After Deployment — Setup Guide

### 1. Replace Tracking IDs
- [ ] Create Google Analytics 4 property → Replace G-XXXXXXXXXX in layout.tsx
- [ ] Create Google Tag Manager container → Replace GTM-XXXXXXX
- [ ] Create Meta Pixel → Replace XXXXXXXXXXXXXXX

### 2. Google Search Console
- [ ] Add property gsleslumieres.ma
- [ ] Verify ownership (DNS or HTML tag)
- [ ] Submit sitemap: https://gsleslumieres.ma/sitemap.xml
- [ ] Request indexing for homepage and key pages

### 3. Google Business Profile
- [ ] Claim or update: google.com/business
- [ ] Add all info: name, address, phone, hours, photos
- [ ] Add website URL
- [ ] Enable messaging
- [ ] Ask parents to leave Google reviews

### 4. Form Service
- [ ] Create Formspree account → Replace form endpoint
- [ ] Test form submission → Verify email received
- [ ] Set up email notification to leslumieres2021@gmail.com

### 5. Replace Placeholder Images
- [ ] See REPLACE-IMAGES.md for full list
- [ ] Use real school photos (professional quality)
- [ ] Compress all images (tinypng.com or squoosh.app)
- [ ] Convert to WebP format when possible

### 6. Social Media Links
- [ ] Verify all social media URLs are correct
- [ ] Update Instagram, Facebook, TikTok, YouTube links

### 7. WhatsApp Business
- [ ] Set up WhatsApp Business profile
- [ ] Add school logo, description, address, hours
- [ ] Create quick replies for common questions
- [ ] Test the WhatsApp button from the website

### 8. Domain & SSL
- [ ] Point gsleslumieres.ma to new hosting
- [ ] Verify HTTPS is active
- [ ] Test all pages load correctly
- [ ] Verify old URLs redirect properly (301)
```

---

## QUALITY CRITERIA — THE SITE MUST MEET ALL OF THESE

- [ ] Every page has unique Title (50-60 chars) with keyword + "Tanger"
- [ ] Every page has unique Meta Description (150-160 chars)
- [ ] Every page has exactly ONE H1 tag
- [ ] Proper heading hierarchy on all pages
- [ ] All images have descriptive alt text
- [ ] All phone numbers are clickable (tel: links)
- [ ] WhatsApp button visible and functional on all pages
- [ ] Forms work and send notifications
- [ ] Google Maps loads on contact page
- [ ] Schema.org structured data validates (schema.org/validator)
- [ ] Open Graph tags present on all pages
- [ ] Sitemap.xml includes all pages
- [ ] robots.txt allows crawling
- [ ] Mobile responsive on all pages (test at 375px width)
- [ ] PageSpeed score 90+ mobile
- [ ] No console errors
- [ ] No broken links
- [ ] All animations are smooth, not janky
- [ ] Footer copyright says 2026
- [ ] Old URL redirects configured
- [ ] Custom 404 page exists and is helpful
- [ ] Arabic text renders correctly with RTL where used

---

## START BUILDING

Begin with:
1. Project initialization (Next.js + Tailwind + TypeScript + all dependencies)
2. Global layout (Header, Footer, WhatsApp button, TopBar)
3. Homepage (all 11 sections)
4. Cycle pages (template + 4 pages)
5. Inscription page (with form)
6. FAQ page (with Schema.org)
7. Contact page (with Google Maps)
8. Remaining pages
9. SEO finalization (sitemap, robots, schema, meta)
10. Performance optimization

Build everything. Complete code. Real content. No placeholders except images.
GO.
