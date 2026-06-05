# 📸 Images à remplacer

Toutes les images du site sont actuellement des **placeholders** (photos génériques téléchargées
automatiquement). Avant la mise en ligne définitive, remplacez chaque fichier par une **vraie photo
de l’école**, de bonne qualité, au **même chemin** et de préférence au **même format/ratio**.

> Conseil : compressez chaque image sur [tinypng.com](https://tinypng.com) ou
> [squoosh.app](https://squoosh.app) et convertissez en **WebP** si possible.
> Régénérer les placeholders : `node scripts/fetch-placeholders.mjs` (n’écrase pas les fichiers existants).

## Hero & Open Graph
| Chemin | Photo attendue |
| --- | --- |
| `/images/hero/hero-main.jpg` | Photo principale : élèves heureux dans la cour / façade de l’école (1920×1080) |
| `/images/hero/school-campus.jpg` | Vue du campus (utilisée dans les données structurées) |
| `/images/og/default.jpg` | Image de partage réseaux sociaux par défaut (1200×630) |
| `/images/og/maternelle.jpg` · `primaire.jpg` · `college.jpg` · `lycee.jpg` · `inscription.jpg` | Images de partage par page (1200×630) |

## Cycles (cartes & héros)
| Chemin | Photo attendue |
| --- | --- |
| `/images/cycles/maternelle.jpg` | Enfants de maternelle en activité |
| `/images/cycles/primaire.jpg` | Élèves de primaire en classe |
| `/images/cycles/college.jpg` | Collégiens en laboratoire de sciences |
| `/images/cycles/lycee.jpg` | Lycéens en cours / révisions |
| `/images/cycles/maternelle/maternelle-1..6.jpg` | Galerie maternelle (6 photos) |
| `/images/cycles/primaire/primaire-1..6.jpg` | Galerie primaire (6 photos) |
| `/images/cycles/college/college-1..6.jpg` | Galerie collège (6 photos) |
| `/images/cycles/lycee/lycee-1..6.jpg` | Galerie lycée (6 photos) |

## Campus
| Chemin | Photo attendue |
| --- | --- |
| `/images/campus/campus-1.jpg` | Façade / cour de l’école |
| `/images/campus/campus-2.jpg` | Cour de récréation |
| `/images/campus/campus-3.jpg` | Entrée / couloirs |
| `/images/campus/classroom.jpg` | Salle de classe avec tableau interactif |
| `/images/campus/inscription.jpg` | Bureau d’accueil / inscriptions |

## Activités
| Chemin | Photo attendue |
| --- | --- |
| `/images/activities/theatre.jpg` | Spectacle de théâtre |
| `/images/activities/chorale.jpg` | Chorale Albatros |
| `/images/activities/sport.jpg` | Compétition sportive |
| `/images/activities/arts.jpg` | Atelier d’arts plastiques |
| `/images/activities/sortie.jpg` | Sortie scolaire (ex. Chefchaouen) |
| `/images/activities/event-1..4.jpg` | Événements (carnaval, kermesse, fête du printemps…) |
| `/images/activities/trip-1..4.jpg` | Voyages / sorties scolaires |

## Équipe
| Chemin | Photo attendue |
| --- | --- |
| `/images/team/directeur.jpg` | Portrait du directeur Ahmed ABBOU (portrait 3:4) |
| `/images/team/team-hero.jpg` | Photo de groupe de l’équipe |
| `/images/team/team-1..5.jpg` | Membres / pôles de l’équipe pédagogique |

## Services
| Chemin | Photo attendue |
| --- | --- |
| `/images/services/transport.jpg` | Bus / véhicule de transport scolaire |
| `/images/services/cantine.jpg` | Cantine / repas équilibré |

## Actualités
| Chemin | Photo attendue |
| --- | --- |
| `/images/actualites/inscriptions.jpg` | Visuel inscriptions 2026-2027 |
| `/images/actualites/distinction.jpg` | Élève distinguée (Malak Allouh) |
| `/images/actualites/bourse.jpg` | Remise de la bourse d’excellence |
| `/images/actualites/olympiade.jpg` | Olympiade de mathématiques |
| `/images/actualites/sortie.jpg` | Sortie scolaire à Chefchaouen |

## Identité visuelle
| Chemin | Remarque |
| --- | --- |
| `/images/logo.svg` · `/images/logo-white.svg` | Logos vectoriels (placeholder fourni) — remplacez par le vrai logo |
| `/favicon.ico` · `/apple-touch-icon.png` · `/android-chrome-192x192.png` · `/android-chrome-512x512.png` | Icônes — générez-les depuis votre logo sur [realfavicongenerator.net](https://realfavicongenerator.net) |
