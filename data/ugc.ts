export interface UGCItem {
  id: string
  brand: string
  category: 'Restauration' | 'Loisirs & Activités' | 'Établissement' | 'Beauté & Bien-être' | 'Culture'
  videoUrl?: string   // laisser vide pour les entrées photos uniquement
  thumbnail?: string  // chemin depuis /public — ex: '/images/ugc/nom-marque.jpg'
  logo?: string       // chemin depuis /public — ex: '/images/logos/nom-marque.png'
  description?: string
}

export const ugcItems: UGCItem[] = [
  {
    id: 'agriturismo-i-millepini',
    brand: 'Agriturismo i Millepini',
    category: 'Établissement',
    thumbnail: '/images/ugc/agriturismo-i-millepini.jpg',
    // RÈGLE : toujours afficher le lieu au format "Ville, Pays" sous chaque contenu
    description: 'Loro Ciuffenna, Italie',
  },
  {
    id: 'brique-house',
    brand: 'Brique House',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/F_RIqdHRppM?rel=0',
    description: 'Bordeaux, France',
  },
  {
    id: 'grupomimmo',
    brand: 'Grupomimmo',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/fIO_aQ76Sps?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'merci-internet',
    brand: 'Merci Internet',
    category: 'Établissement',
    videoUrl: 'https://www.youtube.com/embed/5q_Qv_EgZy0?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'merci-internet-2',
    brand: 'Merci Internet',
    category: 'Établissement',
    videoUrl: 'https://www.youtube.com/embed/rWXss4KgcEY?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'studio-on',
    brand: 'Studio On',
    category: 'Beauté & Bien-être',
    videoUrl: 'https://www.youtube.com/embed/zRsZ4u47aR8?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'senza-nome',
    brand: 'Senza Nome',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/0JQnnAlIfjM?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'tigermilk',
    brand: 'Tigermilk',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/7rmG4xVU_wc?rel=0',
    description: 'Bordeaux, France',
  },
  {
    id: 'la-cantina',
    brand: 'La Cantina',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/k6eUr_cSTGs?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'alimento',
    brand: 'Alimento',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/j0bWUN7Bqys?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'les-bucherons',
    brand: 'Les Bûcherons',
    category: 'Beauté & Bien-être',
    videoUrl: 'https://www.youtube.com/embed/cA7L6fpHlIY?rel=0',
    description: 'Bordeaux, France',
  },
  {
    id: 'brique-machine',
    brand: 'Brique Machine',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/BNwl3nb_vZw?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'la-madonnina',
    brand: 'La Madonnina',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/Y-_wiXrdb9I?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'time-tripper',
    brand: 'Time Tripper',
    category: 'Loisirs & Activités',
    videoUrl: 'https://www.youtube.com/embed/w7eybFbsOAQ?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'les-artizans',
    brand: 'Les Artizans',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/7MKGIU5CaMY?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'fufu-ramen',
    brand: 'Fufu Ramen',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/HjzK-FiCOLY?rel=0',
    description: 'Bordeaux, France',
  },
  {
    id: 'muziquiz',
    brand: "Muzi'Quiz",
    category: 'Loisirs & Activités',
    videoUrl: 'https://www.youtube.com/embed/s9XRlXO0pSg?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'shoko-madrid',
    brand: 'Shoko Madrid',
    category: 'Établissement',
    videoUrl: 'https://www.youtube.com/embed/YJ838ZjW9eE?rel=0',
    description: 'Madrid, Espagne',
  },
  {
    id: 'dopio-malto',
    brand: 'Dopio Malto',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/Gdsu5btorHM?rel=0',
    description: 'Bordeaux, France',
  },
  {
    id: 'canope',
    brand: 'Canopé',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/ILYeD37zjKg?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'pepita',
    brand: 'Pepita',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/nWOXmHtZErM?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'emeraude-luxury-camp',
    brand: 'Emeraude Luxury Camp',
    category: 'Établissement',
    thumbnail: '/images/ugc/emeraude-luxury-camp.jpg',
    description: 'Agafay, Maroc',
  },
  {
    id: 'librairie-de-florence',
    brand: 'Librairie Française de Florence',
    category: 'Culture',
    thumbnail: '/images/ugc/librairie-de-florence.jpg',
    description: 'Florence, Italie',
  },
  {
    id: 'la-consigne',
    brand: 'La Consigne',
    category: 'Restauration',
    thumbnail: '/images/ugc/la-consigne.jpg',
    description: 'Paris, France',
  },
  {
    id: 'prod-daiki',
    brand: 'Prod Daiki',
    category: 'Culture',
    videoUrl: 'https://www.youtube.com/embed/uj6KS8eqrOU?rel=0',
    description: 'Bordeaux, France',
  },
  {
    id: 'itineraire-sur-mesure',
    brand: 'Itinéraire sur Mesure',
    category: 'Loisirs & Activités',
    videoUrl: 'https://www.youtube.com/embed/R2o8j4PAsuE?rel=0',
    description: 'Barcelone, Espagne',
  },
  {
    id: 'burgers-de-colette',
    brand: 'Les Burgers de Colette',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/ol6a83A61Gw?rel=0',
    description: 'Bayonne, France',
  },
  {
    id: 'meriadeck',
    brand: 'Centre Commercial Mériadeck',
    category: 'Établissement',
    videoUrl: 'https://www.youtube.com/embed/YaSk1hCU52w?rel=0',
    description: 'Bordeaux, France',
  },
  {
    id: 'quizz-room',
    brand: 'Quiz Room Paris',
    category: 'Loisirs & Activités',
    videoUrl: 'https://www.youtube.com/embed/KWCNliP9neQ?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'armelle-creperie',
    brand: 'Armelle Crêperie',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/Kog2u-FPI1A?rel=0',
    description: 'Paris, France',
  },
  {
    id: 'quartier-general',
    brand: 'Quartier Général',
    category: 'Restauration',
    videoUrl: 'https://www.youtube.com/embed/WPw6Ees54Dc?rel=0',
    description: 'Paris, France',
  },
]

export const ugcCategories = ['Restauration', 'Loisirs & Activités', 'Établissement', 'Beauté & Bien-être', 'Culture'] as const
