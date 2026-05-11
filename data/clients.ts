export interface ClientMedia {
  kind: 'video' | 'photo'
  youtubeId?: string   // Remplace par le vrai ID YouTube (ex: 'abc123xyz')
  src?: string         // Remplace par le chemin de la photo (ex: '/images/clients/xxx.jpg')
  label: string        // Nom du contenu affiché sous le média
  location: string     // Lieu au format 'Ville, Pays'
  stackOver?: boolean  // Si true, l'élément déborde légèrement sur le précédent (z-index + marge négative)
  aspect?: '9/16' | '4/5'  // Force un ratio spécifique (sinon : 9/16 pour vidéo, 4/5 pour photo)
  coverZoom?: number        // Zoom (ex: 1.4) pour masquer les bandes noires — overflow:hidden découpe
}

export interface Client {
  slug: string
  name: string
  category: string
  year: string | number
  description: string
  objectives: string[]
  coverImage: string
  gallery: string[]
  tags: string[]
  location?: string
  ongoing?: boolean
  hideSlider?: boolean
  hideGallery?: boolean
  cardImage?: string
  bannerImage?: string
  profileImage?: string
  phoneImage?: string
  media?: ClientMedia[]
  macbook?: boolean       // Affiche un mockup MacBook dans la colonne droite
  macbookImage?: string   // Capture d'écran dans l'écran du MacBook (chemin image)
  discovery?: {
    label: string
    url: string
    icon?: 'instagram'
  }
}

export const clients: Client[] = [
  {
    slug: 'bucherons-barber',
    name: 'Les Bûcherons Barber & Co',
    category: 'Création de contenu',
    year: 'depuis 2026',
    description: 'Situé au 19 rue des Caperans en plein cœur de Bordeaux, Les Bûcherons est un barbershop premium installé dans une bâtisse bordelaise au charme brut. Coupes sur mesure, taille de barbe et rasage à l\'ancienne, avec une bière artisanale ou un café offert dès l\'entrée.',
    objectives: [
      '🎬 Je réalise les shootings vidéo et assure le montage pour leurs réseaux sociaux',
      '📱 Je gère leur communauté en ligne au quotidien',
      '📸 Je crée du contenu visuel pour valoriser l\'image de marque du salon',
    ],
    ongoing: true,
    hideGallery: true,
    coverImage: '/images/clients/bucherons-barber.jpg',
    gallery: [
      '/images/clients/bucherons-barber-2.jpg',
      '/images/clients/bucherons-barber-3.jpg',
    ],
    tags: ['Vidéo', 'Community Management', 'Contenu visuel'],
    discovery: { label: 'Découvrir', url: 'https://www.instagram.com/lesbucherons.fr/', icon: 'instagram' as const },
    location: 'Bordeaux, France',
    media: [
      // Remplace par la vraie vidéo ou photo du client
      { kind: 'video', youtubeId: '', label: '', location: 'Bordeaux, France' },
      // Remplace par la vraie vidéo ou photo du client
      { kind: 'photo', src: '', label: '', location: 'Bordeaux, France' },
      // Remplace par la vraie vidéo ou photo du client
      { kind: 'video', youtubeId: '', label: '', location: 'Bordeaux, France' },
      // Remplace par la vraie vidéo ou photo du client
      { kind: 'photo', src: '', label: '', location: 'Bordeaux, France' },
    ],
  },
  {
    slug: 'itineraire-sur-mesure',
    name: 'Itinéraire Sur Mesure',
    category: 'Social Media',
    year: '2025',
    description: 'Travel planneuse, Itinéraire Sur Mesure crée des voyages personnalisés en sélectionnant hébergements, activités, transports et restaurants adaptés aux envies, au rythme et au budget du client, accompagnant chaque étape de l\'organisation.',
    objectives: [
      '📱 Gestion des réseaux sociaux',
      '🎬 Création de contenu quotidien',
      '📣 Création de supports commerciaux et de communication (carnets de voyages, brochures, estimations budgétaires…)',
      '💻 Refonte complète du site internet et optimisation SEO',
    ],
    hideGallery: true,
    coverImage: '/images/itineraire/itineraire-card.jpg',
    cardImage: '/images/itineraire/itineraire-card.jpg',
    gallery: [
      '/images/clients/itineraire-sur-mesure-2.jpg',
      '/images/clients/itineraire-sur-mesure-3.jpg',
    ],
    tags: ['Social Media', 'Création de contenu', 'SEO', 'Web'],
    macbook: true,
    macbookImage: '/images/itineraire/itineraire-screen.png',
    discovery: { label: 'Découvrir le site', url: 'https://www.itinerairesurmesure.fr/' },
    location: 'Barcelone, Espagne',
    media: [
      { kind: 'video', youtubeId: 'R2o8j4PAsuE', label: 'Itinéraire sur Mesure', location: 'Barcelone, Espagne' },
      // Remplace par la vraie photo quand disponible
      { kind: 'photo', src: '/images/clients/itineraire-photo-1.png', aspect: '4/5' as const, label: 'Itinéraire sur Mesure', location: 'Barcelone, Espagne' },
      { kind: 'video', youtubeId: 'THA_3oHWZMw', label: 'Itinéraire sur Mesure', location: 'Barcelone, Espagne' },
      { kind: 'video', youtubeId: 'Z0IHgLn5Akk', aspect: '4/5' as const, coverZoom: 1.15, label: 'Itinéraire sur Mesure', location: 'Barcelone, Espagne' },
    ],
  },
  {
    slug: 'prod-daiki',
    name: 'Prod Daiki',
    category: 'Branding',
    year: 'depuis 2021',
    description: 'Beatmaker, Prod Daiki crée des mélodies et des beats en utilisant des logiciels de production musicale et des instruments de musique. En collaboration régulière avec des artistes et des producteurs pour concevoir des morceaux dans divers genres musicaux.',
    objectives: [
      '🎨 Je conçois et fais évoluer son identité visuelle',
      '📱 J\'anime ses réseaux sociaux au quotidien',
      '📣 Je renforce sa présence et son image en ligne',
      '🎬 Je mets en avant ses productions musicales auprès de son audience',
    ],
    ongoing: true,
    hideSlider: true,
    hideGallery: true,
    cardImage: '/images/clients/prod-daiki-6.png',
    bannerImage: '/images/clients/prod-daiki-banner.png',
    profileImage: '/images/clients/prod-daiki-profile.png',
    phoneImage: '/images/clients/prod-daiki-phone.png',
    coverImage: '/images/clients/prod-daiki.jpg',
    gallery: [
      '/images/clients/prod-daiki-2.jpg',
    ],
    tags: ['Branding', 'Identité visuelle', 'Social Media'],
    discovery: { label: 'Découvrir la chaîne', url: 'https://youtube.com/@proddaiki9037?si=DIgr9ZOm8DynLvoV' },
    location: 'Bordeaux, France',
    media: [
      { kind: 'video', youtubeId: 'uj6KS8eqrOU', label: 'Prod Daiki', location: 'Bordeaux, France' },
      { kind: 'photo', src: '/images/clients/prod-daiki-4.png', label: 'Prod Daiki', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'GYjs_lbTP6c', label: 'Prod Daiki', location: 'Bordeaux, France' },
      { kind: 'photo', src: '/images/clients/prod-daiki-5.png', label: 'Prod Daiki', location: 'Bordeaux, France' },
    ],
  },
  {
    slug: 'librairie-de-florence',
    name: 'Librairie Française de Florence',
    category: 'Social Media',
    year: 2024,
    description: 'Librairie Francophone de Référence, elle joue un rôle essentiel dans la promotion de la langue et de la culture française en Italie. Entreprise indépendante et associative, elle collabore étroitement avec les institutions culturelles, les écoles et les universités à Florence et dans tout le pays.',
    objectives: [
      '📣 Élaboration d\'une stratégie de communication',
      '📱 Gestion complète des réseaux sociaux de la librairie',
      '🎬 Création de contenu et d\'un calendrier éditorial',
      '📣 Création de supports de communication',
      '📸 Participation à la réalisation d\'un livre commémoratif',
      '📣 Participation aux événements majeurs : Testo (100 maisons d\'édition & 20 000 participants), Conférence annuelle EPF (1 000 participants)',
    ],
    hideGallery: true,
    coverImage: '/images/clients/librairie-de-florence.jpg',
    gallery: [
      '/images/clients/librairie-de-florence-2.jpg',
      '/images/clients/librairie-de-florence-3.jpg',
    ],
    tags: ['Social Media', 'Stratégie', 'Événementiel'],
    discovery: { label: 'Découvrir', url: 'https://www.instagram.com/lalibrairiefrancaiseflorence/', icon: 'instagram' as const },
    location: 'Florence, Italie',
    media: [
      // Remplace par la vraie vidéo ou photo du client
      { kind: 'video', youtubeId: '', label: '', location: 'Florence, Italie' },
      // Remplace par la vraie vidéo ou photo du client
      { kind: 'photo', src: '', label: '', location: 'Florence, Italie' },
      // Remplace par la vraie vidéo ou photo du client
      { kind: 'video', youtubeId: '', label: '', location: 'Florence, Italie' },
      // Remplace par la vraie vidéo ou photo du client
      { kind: 'photo', src: '', label: '', location: 'Florence, Italie' },
    ],
  },
]
