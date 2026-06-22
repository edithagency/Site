/* ──────────────────────────────────────────────────────────────────────────
   Points de la carte liés à la page /creation-de-contenu.
   Chaque entrée génère un placeholder dans la grille filtrée.
   Quand tu ajoutes le vrai contenu dans data/ugc.ts, l'entrée ici est
   automatiquement masquée (filtre par anchor === id).
────────────────────────────────────────────────────────────────────────── */

import { ugcCategories } from './ugc'

export interface MapPlace {
  anchor: string   // ancre HTML — correspond au fragment #xxx dans les liens carte
  nom: string
  ville: string
  type: 'vidéo' | 'photos'
  category: typeof ugcCategories[number]
}

export const mapPlaces: MapPlace[] = [
  // ── Restauration ──────────────────────────────────────────────────────
  { anchor: 'tigermilk',              nom: 'Tigermilk',                        ville: 'Bordeaux, France',               type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'fufu-ramen',             nom: 'Fufu Ramen',                       ville: 'Bordeaux, France',               type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'brique-house',           nom: 'Brique House',                     ville: 'Bordeaux, France',               type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'dopio-malto',            nom: 'Dopio Malto',                      ville: 'Bordeaux, France',               type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'burgers-de-colette',     nom: 'Les Burgers de Colette',           ville: 'Bayonne, France',                type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'canope',                 nom: 'Canopé',                           ville: 'Paris, France',                  type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'les-artizans',           nom: 'Les Artizans',                     ville: 'Paris, France',                  type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'brique-machine',         nom: 'Brique Machine',                   ville: 'Paris, France',                  type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'grupomimmo',             nom: 'Grupomimmo',                       ville: 'Paris, France',                  type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'pepita',                 nom: 'Pepita',                           ville: 'Paris, France',                  type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'la-madonnina',           nom: 'La Madonnina',                     ville: 'Paris, France',                  type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'la-cantina',             nom: 'La Cantina',                       ville: 'Paris, France',                  type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'alimento',               nom: 'Alimento',                         ville: 'Paris, France',                  type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'senza-nome',             nom: 'Senza Nome',                       ville: 'Paris, France',                  type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'la-consigne',            nom: 'La Consigne',                      ville: 'Paris, France',                  type: 'photos', category: 'Restauration'       },
  // ── Beauté & Bien-être ────────────────────────────────────────────────
  { anchor: 'studio-on',              nom: 'Studio On',                        ville: 'Paris, France',                  type: 'vidéo',  category: 'Beauté & Bien-être' },
  // ── Culture ───────────────────────────────────────────────────────────
  { anchor: 'prod-daiki',             nom: 'Prod Daiki',                       ville: 'Bordeaux, France',               type: 'vidéo',  category: 'Culture'            },
  { anchor: 'librairie-de-florence',  nom: 'Librairie Française de Florence',  ville: 'Florence, Italie',       type: 'photos', category: 'Culture'            },
  // ── Loisirs ───────────────────────────────────────────────
  { anchor: 'quizz-room',             nom: 'Quiz Room Paris',                  ville: 'Paris, France',                  type: 'vidéo',  category: 'Loisirs'},
  { anchor: 'time-tripper',           nom: 'Time Tripper',                     ville: 'Paris, France',                  type: 'vidéo',  category: 'Loisirs'},
  { anchor: 'muziquiz',               nom: "Muzi'Quiz",                        ville: 'Paris, France',                  type: 'vidéo',  category: 'Loisirs'},
  { anchor: 'itineraire-sur-mesure',  nom: 'Itinéraire sur Mesure',            ville: 'Barcelone, Espagne',              type: 'vidéo',  category: 'Voyage'},
  { anchor: 'armelle-creperie',       nom: 'Armelle Crêperie',                 ville: 'Paris, France',                  type: 'vidéo',  category: 'Restauration'       },
  { anchor: 'quartier-general',       nom: 'Quartier Général',                 ville: 'Paris, France',                  type: 'vidéo',  category: 'Restauration'       },
  // ── Établissement ─────────────────────────────────────────────────────
  { anchor: 'meriadeck',              nom: 'Centre Commercial Mériadeck',      ville: 'Bordeaux, France',               type: 'vidéo',  category: 'Établissement'      },
  { anchor: 'shoko-madrid',           nom: 'Shoko Madrid',                     ville: 'Madrid, Espagne',                 type: 'vidéo',  category: 'Établissement'      },
  { anchor: 'merci-internet',         nom: 'Merci Internet',                   ville: 'Paris, France',                  type: 'vidéo',  category: 'Loisirs'      },
  { anchor: 'emeraude-luxury-camp',   nom: 'Emeraude Luxury Camp',             ville: 'Agafay, Maroc',          type: 'photos', category: 'Établissement'      },
  { anchor: 'agriturismo-i-millepini',nom: 'Agriturismo i Millepini',          ville: 'Loro Ciuffenna, Italie', type: 'photos', category: 'Établissement'      },
]
