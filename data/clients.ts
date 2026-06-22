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

export interface Objective {
  title: string
  description: string
  image?: string
  link?: { label: string; url: string }
}

export interface Client {
  slug: string
  name: string
  category: string
  year: string | number
  description: string
  objectives: Objective[]
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
  heroImage?: string       // Image de fond du header (plein écran)
  fullWidthImage?: string  // Image pleine largeur après les objectifs
  discovery?: {
    label: string
    url: string
    icon?: 'instagram'
  }
  beforeImage?: string
  afterImage?: string
  beforeAfterAspect?: '16/9' | '4/5'
}

export const clients: Client[] = [
  {
    slug: 'prod-daiki',
    name: 'Prod Daiki',
    category: 'Branding',
    year: 'depuis 2021',
    description: 'Beatmaker, Prod Daiki crée des mélodies et des beats en utilisant des logiciels de production musicale et des instruments de musique. En collaboration régulière avec des artistes et des producteurs pour concevoir des morceaux dans divers genres musicaux.',
    objectives: [
      {
        title: 'Identité visuelle',
        description: 'Conception et évolution continue du logo, des visuels et de la charte graphique pour une image de marque forte et cohérente.',
        image: '/images/clients/prod-daiki-obj1.png',
      },
      {
        title: 'Création site internet',
        description: 'Renforcement de la notoriété digitale via une stratégie de contenu cohérente sur toutes les plateformes.',
        image: '/images/clients/prod-daiki-obj3.png',
        link: { label: 'prodbydaiki.com', url: 'https://www.prodbydaiki.com/' },
      },
      {
        title: 'Animation des réseaux',
        description: 'Publication régulière de contenus adaptés à la scène musicale : clips, teasers, visuels de beats et actualités artiste.',
        image: '/images/clients/prod-daiki-obj2.png',
      },
    ],
    ongoing: true,
    hideSlider: true,
    hideGallery: true,
    cardImage: '/images/clients/prod-daiki-card.jpg',
    heroImage: '/images/clients/prod-daiki-hero.jpg',
    bannerImage: '/images/clients/prod-daiki-banner.png',
    profileImage: '/images/clients/prod-daiki-profile.png',
    phoneImage: '/images/clients/prod-daiki-phone.png',
    coverImage: '/images/clients/prod-daiki.jpg',
    gallery: [
      '/images/clients/prod-daiki-2.jpg',
    ],
    tags: ['Branding', 'Community Management', 'Site Web'],
    discovery: { label: 'Découvrir la chaîne', url: 'https://youtube.com/@proddaiki9037?si=DIgr9ZOm8DynLvoV' },
    location: 'Bordeaux, France',
    media: [
      { kind: 'video', youtubeId: 'moi-8-sH8PA', label: 'Prod Daiki', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'XULvni6XnT8', label: 'Prod Daiki', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'uj6KS8eqrOU', label: 'Prod Daiki', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'oGce21-EKIY', label: 'Prod Daiki', location: 'Bordeaux, France' },
    ],
  },
  {
    slug: 'itineraire-sur-mesure',
    name: 'Itinéraire Sur Mesure',
    category: 'Social Media',
    year: '2025',
    heroImage: '/images/clients/itineraire-sur-mesure-hero.jpg',
    description: 'Travel planneuse, Itinéraire Sur Mesure crée des voyages personnalisés en sélectionnant hébergements, activités, transports et restaurants adaptés aux envies, au rythme et au budget du client, accompagnant chaque étape de l\'organisation.',
    objectives: [
      {
        title: 'Gestion des réseaux sociaux',
        description: 'Création et publication régulière de contenus inspirants valorisant les destinations et expériences proposées.',
        image: '/images/clients/itineraire-sur-mesure-reseaux-sociaux.png',
      },
      {
        title: 'Création de contenu quotidien',
        description: 'Production de vidéos, reels et stories pour alimenter les plateformes sociales et attirer de nouveaux voyageurs.',
        image: '/images/clients/itineraire-sur-mesure-creation-contenu.png',
      },
      {
        title: 'Supports commerciaux',
        description: 'Conception de carnets de voyages, brochures et estimations budgétaires pour appuyer la démarche commerciale.',
        image: '/images/clients/itineraire-sur-mesure-supports-commerciaux.png',
      },
      {
        title: 'Refonte du site internet',
        description: 'Redesign complet du site avec optimisation SEO pour améliorer la visibilité sur Google et l\'expérience utilisateur.',
        image: '/images/clients/itineraire-sur-mesure-refonte-site.png',
      },
    ],
    hideGallery: true,
    coverImage: '/images/itineraire/itineraire-card.jpg',
    cardImage: '/images/clients/itineraire-card.jpg',
    gallery: [
      '/images/clients/itineraire-sur-mesure-2.jpg',
      '/images/clients/itineraire-sur-mesure-3.jpg',
    ],
    tags: ['Création de Contenu', 'Community Management', 'Site Web', 'SEO'],
    beforeImage: '/images/clients/itineraire-sur-mesure-avant.png',
    afterImage: '/images/clients/itineraire-sur-mesure-apres.png',
    beforeAfterAspect: '4/5',
    macbook: true,
    macbookImage: '/images/itineraire/itineraire-screen.png',
    discovery: { label: 'Découvrir le site', url: 'https://www.itinerairesurmesure.fr/' },
    location: 'Barcelone, Espagne',
    media: [
      { kind: 'video', youtubeId: 'R2o8j4PAsuE', label: 'Itinéraire sur Mesure', location: 'Barcelone, Espagne' },
      { kind: 'video', youtubeId: 'zBE32etkWQI', label: 'Itinéraire sur Mesure', location: 'Barcelone, Espagne' },
      { kind: 'video', youtubeId: 'THA_3oHWZMw', label: 'Itinéraire sur Mesure', location: 'Barcelone, Espagne' },
      { kind: 'video', youtubeId: 'Z0IHgLn5Akk', aspect: '4/5' as const, coverZoom: 1.15, label: 'Itinéraire sur Mesure', location: 'Barcelone, Espagne' },
    ],
  },
  {
    slug: 'librairie-de-florence',
    name: 'Librairie Française de Florence',
    category: 'Social Media',
    heroImage: '/images/clients/librairie-de-florence-hero.jpg',
    year: 2024,
    description: 'Librairie Francophone de Référence, elle joue un rôle essentiel dans la promotion de la langue et de la culture française en Italie. Entreprise indépendante et associative, elle collabore étroitement avec les institutions culturelles, les écoles et les universités à Florence et dans tout le pays.',
    objectives: [
      {
        title: 'Gestion des réseaux sociaux',
        description: 'Création et publication quotidienne sur Instagram et Facebook, gestion des interactions et croissance de la communauté.',
        image: '/images/clients/librairie-de-florence-reseaux.png',
      },
      {
        title: 'Supports de communication',
        description: 'Réalisation de visuels print et digitaux : affiches, newsletters, stories et supports pour les événements.',
        image: '/images/clients/librairie-de-florence-supports.png',
      },
      {
        title: 'Livre commémoratif',
        description: 'Contribution à la conception et à la rédaction d\'un ouvrage célébrant l\'histoire et le rayonnement culturel de la librairie.',
        image: '/images/clients/librairie-de-florence-livre.png',
      },
      {
        title: 'Événements majeurs',
        description: 'Communication autour du festival Testo et de la conférence EPF, deux événements ayant réuni plus de 21 000 participants.',
        image: '/images/clients/librairie-de-florence-evenements.jpg',
      },
    ],
    hideGallery: true,
    cardImage: '/images/clients/librairie-card.jpg',
    coverImage: '/images/clients/librairie-de-florence.jpg',
    gallery: [
      '/images/clients/librairie-de-florence-2.jpg',
      '/images/clients/librairie-de-florence-3.jpg',
    ],
    tags: ['Stratégie', 'Création de Contenu', 'Community Management'],
    beforeImage: '/images/clients/librairie-de-florence-avant.png',
    afterImage: '/images/clients/librairie-de-florence-apres.png',
    beforeAfterAspect: '4/5',
    discovery: { label: 'Découvrir', url: 'https://www.instagram.com/lalibrairiefrancaiseflorence/', icon: 'instagram' as const },
    location: 'Florence, Italie',
    media: [
      { kind: 'photo', src: '/images/ugc/librairie-de-florence.jpg', label: 'Librairie Française de Florence', location: 'Florence, Italie' },
      { kind: 'photo', src: '/images/clients/librairie-de-florence-photo2.jpg', label: 'Librairie Française de Florence', location: 'Florence, Italie' },
    ],
  },
  {
    slug: 'bucherons-barber',
    name: 'Les Bûcherons',
    category: 'Création de contenu',
    year: '2026',
    heroImage: '/images/clients/bucherons-barber-hero.jpg',
    description: 'Situé en plein cœur de Bordeaux, Les Bûcherons est un barbershop premium installé dans une bâtisse bordelaise au charme brut.',
    objectives: [
      {
        title: 'Shooting vidéo & montage',
        description: 'Tournage en salon, mise en scène des prestations et montage de vidéos courtes optimisées pour Instagram et TikTok.',
        image: '/images/clients/bucherons-obj1.jpg',
      },
      {
        title: 'Community management',
        description: 'Animation quotidienne des réseaux sociaux, gestion des interactions et développement de l\'engagement de la communauté.',
        image: '/images/clients/bucherons-obj2.png',
      },
      {
        title: 'Création de contenu visuel',
        description: 'Production de photos soignées et de visuels de marque pour asseoir l\'image premium du salon sur les réseaux.',
        image: '/images/clients/bucherons-obj3.jpg',
      },
    ],
    hideGallery: true,
    cardImage: '/images/clients/bucherons-card.jpg',
    coverImage: '/images/clients/bucherons-barber.jpg',
    gallery: [
      '/images/clients/bucherons-barber-2.jpg',
      '/images/clients/bucherons-barber-3.jpg',
    ],
    tags: ['Création de Contenu', 'Community Management'],
    discovery: { label: 'Découvrir', url: 'https://www.instagram.com/lesbucherons.fr/', icon: 'instagram' as const },
    location: 'Bordeaux, France',
    media: [
      { kind: 'video', youtubeId: 'cA7L6fpHlIY', label: 'Les Bûcherons', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'hev_jh1cNTU', label: 'Les Bûcherons', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'Cc0trv5VCH8', label: 'Les Bûcherons', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'MSGzTlCQWbE', label: 'Les Bûcherons', location: 'Bordeaux, France' },
    ],
  },
]
