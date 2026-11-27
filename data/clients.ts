export interface ClientMedia {
  kind: 'video' | 'photo'
  youtubeId?: string   // Remplace par le vrai ID YouTube (ex: 'abc123xyz')
  poster?: string      // Image affichée avant la lecture d'une vidéo hébergée
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

/* ── Nouvelle page client : missions en accordéon ── */
export interface MissionContent {
  kind: 'photo' | 'video' | 'beforeAfter'
  fit?: 'contain'       // affiche l'image entière (ex : logo sur fond transparent)
  before?: string       // avant/après : image « avant »
  after?: string        // avant/après : image « après »
  src?: string          // photo, ou vidéo hébergée sur le site (.mp4)
  youtubeId?: string    // vidéo YouTube
  poster?: string       // image affichée avant la lecture d'une vidéo .mp4
  alt: string
}

export interface Mission {
  title: string
  summary: string                        // ce que j'ai fait, 2–3 phrases
  link?: { label: string; url: string }  // ex : le site réalisé
  content?: MissionContent[]             // les contenus de cette mission
}

export interface Client {
  slug: string
  name: string
  cardName?: string     // Nom affiché sur les cartes projets (si différent du nom complet)
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
  sector?: string        // Secteur d'activité du client (nouvelle page)
  intro?: string         // Phrase d'accroche courte affichée au-dessus de la description
  missions?: Mission[]   // Si renseigné : page client en version accordéon
}

export const clients: Client[] = [
  {
    slug: 'studio-jeanne',
    name: 'Studio Jeanne',
    category: 'Communication globale',
    year: 'depuis 2026',
    heroImage: '/images/clients/studio-jeanne-hero.jpg',
    description: "Studio Jeanne, c'est Caroline Canova,\u2028décoratrice d'intérieur à Bordeaux.\nRénovation de maisons et d'échoppes bordelaises, aménagement de lieux professionnels : des intérieurs chaleureux et singuliers, pensés pour ressembler à ceux qui les habitent.",
    objectives: [
      {
        title: 'Stratégie de communication',
        description: "Positionnement et ligne éditoriale pour faire rayonner l'univers de Studio Jeanne.",
        image: '/images/clients/studio-jeanne-matieres.jpg',
      },
      {
        title: 'Community management',
        description: 'Animation des réseaux sociaux et valorisation des projets de décoration.',
        image: '/images/clients/studio-jeanne-echantillons.jpg',
      },
      {
        title: 'Création de contenu',
        description: 'Photos et vidéos des réalisations et des chantiers pour incarner le savoir-faire du studio.',
        image: '/images/clients/studio-jeanne-caroline.jpg',
      },
      {
        title: 'Site web & SEO',
        description: "Création du site internet et référencement local pour que le studio soit trouvé sur Google à Bordeaux.",
        image: '/images/clients/studio-jeanne-site-macbook.jpg',
      },
    ],
    ongoing: true,
    hideGallery: true,
    coverImage: '/images/clients/studio-jeanne-hero.jpg',
    cardImage: '/images/clients/studio-jeanne-card-v2.jpg',
    gallery: [],
    tags: ['Stratégie', 'Contenu & Réseaux Sociaux', 'Site Web & SEO'],
    discovery: { label: 'Découvrir', url: 'https://www.instagram.com/studio._.jeanne/', icon: 'instagram' as const },
    media: [
      { kind: 'video', youtubeId: 'Cn6UlMrYQ-8', label: 'Studio Jeanne', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'ZHoe7I7Vb3M', label: 'Studio Jeanne', location: 'Bordeaux, France' },
      { kind: 'video', src: '/videos/clients/studio-jeanne-decoratrice.mp4', poster: '/images/clients/studio-jeanne-video-decoratrice.jpg', label: 'Studio Jeanne', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'xRmlyvBy5F8', label: 'Studio Jeanne', location: 'Bordeaux, France' },
    ],
    location: 'Bordeaux, France',
    sector: "Décoration d'intérieur",
    missions: [
      {
        title: 'Stratégie de communication',
        summary: "Positionnement et ligne éditoriale pour faire rayonner l'univers de Studio Jeanne : des intérieurs chaleureux et singuliers, à l'image de ceux qui les habitent.",
        content: [
          { kind: 'photo', src: '/images/clients/studio-jeanne-matieres.jpg', alt: 'Nuanciers et échantillons de tissus Studio Jeanne' },
          { kind: 'photo', src: '/images/clients/studio-jeanne-echantillons.jpg', alt: 'Échantillons de matières et de tissus' },
          { kind: 'photo', src: '/images/clients/studio-jeanne-nuancier.jpg', alt: 'Nuancier de peintures Ressource' },
        ],
      },
      {
        title: 'Contenu & réseaux sociaux',
        summary: "Photos et vidéos des réalisations et des chantiers, animation des réseaux sociaux avec des formats qui font réagir la communauté : pour incarner le savoir-faire du studio et la personnalité de Caroline.",
        link: { label: 'Instagram', url: 'https://www.instagram.com/studio._.jeanne/' },
        content: [
          // À remplacer par les liens YouTube : { kind: 'video', src: '/videos/clients/studio-jeanne-chambres-jeunesse.mp4', poster: '/images/clients/studio-jeanne-video-chambres-jeunesse.jpg', alt: 'Reel projet chambres jeunesse' },
          // À remplacer par les liens YouTube : { kind: 'video', src: '/videos/clients/studio-jeanne-ca-ou-ca.mp4', poster: '/images/clients/studio-jeanne-video-ca-ou-ca.jpg', alt: 'Reel « Ça ou ça » Studio Jeanne' },
          // À remplacer par les liens YouTube : { kind: 'video', src: '/videos/clients/studio-jeanne-vrai-ou-faux.mp4', poster: '/images/clients/studio-jeanne-video-vrai-ou-faux.jpg', alt: 'Reel « Vrai ou faux » Studio Jeanne' },
          { kind: 'video', youtubeId: 'Cn6UlMrYQ-8', alt: 'Vidéo Studio Jeanne pour les réseaux sociaux' },
          { kind: 'photo', src: '/images/clients/studio-jeanne-caroline.jpg', alt: "Caroline Canova, décoratrice d'intérieur à Bordeaux" },
          { kind: 'video', youtubeId: 'ZHoe7I7Vb3M', alt: 'Vidéo Studio Jeanne pour les réseaux sociaux' },
        ],
      },
      {
        title: 'Site web & SEO',
        summary: 'Création du site internet et référencement local pour que le studio soit trouvé sur Google à Bordeaux.',
        link: { label: 'studio-jeanne.com', url: 'https://www.studio-jeanne.com/' },
        content: [
          { kind: 'photo', src: '/images/clients/studio-jeanne-site-macbook.jpg', alt: 'Site internet Studio Jeanne sur MacBook' },
          { kind: 'video', youtubeId: 'jI_xAXFiyaI', poster: '/images/clients/studio-jeanne-video-site-internet.jpg', alt: 'Reel de présentation du site internet' },
          { kind: 'photo', src: '/images/clients/studio-jeanne-site-macbook-2.jpg', alt: "Page d'accueil du site Studio Jeanne" },
        ],
      },
    ],
  },
  {
    slug: 'fornello-24',
    intro: "Fornello 24, traiteur pizza événementiel à Bordeaux.",
    sector: "Traiteur événementiel",
    missions: [
      {
        title: 'Stratégie de communication',
        summary: "Positionnement et ligne éditoriale pour faire connaître le concept de bar à pizzas événementiel à Bordeaux.",
      },
      {
        title: 'Contenu & réseaux sociaux',
        summary: "Animation quotidienne des réseaux sociaux et captation photo et vidéo des prestations sur événements, pour incarner l'univers Fornello 24.",
        link: { label: 'Instagram', url: 'https://www.instagram.com/fornello.24/' },
        content: [
          { kind: 'photo', src: '/images/clients/fornello-24-reseaux-1.jpg', alt: "Fornello 24 s'adapte à votre événement" },
          { kind: 'photo', src: '/images/clients/fornello-24-reseaux-2.jpg', alt: "Les ingrédients de la pizza Fornello 24" },
          { kind: 'photo', src: '/images/clients/fornello-24-reseaux-3.jpg', alt: "Pack Autonomie Fornello 24" },
        ],
      },
    ],
    name: 'Fornello 24',
    category: 'Contenu & Réseaux sociaux',
    year: 'depuis 2026',
    heroImage: '/images/clients/fornello-24-hero.png',
    description: 'Traiteur pizza événementiel à Bordeaux, Fornello 24 installe un véritable bar à pizzas sur le lieu de vos événements.',
    objectives: [
      {
        title: 'Gestion des réseaux sociaux',
        description: 'Animation quotidienne des réseaux sociaux',
        image: '/images/clients/fornello-24-obj1.png',
      },
      {
        title: 'Création de contenu vidéo & photo',
        description: 'Captation des prestations sur événements pour incarner l\'univers Fornello 24.',
        image: '/images/clients/fornello-24-obj2.png',
      },
    ],
    ongoing: true,
    hideGallery: true,
    coverImage: '/images/clients/fornello-24.jpg',
    cardImage: '/images/clients/fornello-24-card-v2.jpg',
    gallery: [],
    tags: ['Stratégie', 'Contenu & Réseaux Sociaux'],
    location: 'Bordeaux, France',
    discovery: { label: 'Découvrir', url: 'https://www.instagram.com/fornello.24/', icon: 'instagram' as const },
    media: [
      { kind: 'video', youtubeId: 'wPUTozGyGcs', label: 'Fornello 24', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'umNsw_-io_s', label: 'Fornello 24', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'Lz7qbV0MJiA', label: 'Fornello 24', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'xckSZCuC4Ig', label: 'Fornello 24', location: 'Bordeaux, France' },
    ],
  },
  {
    slug: 'prod-daiki',
    intro: "Prod Daiki, beatmaker à Bordeaux.",
    sector: "Musique & production",
    missions: [
      {
        title: 'Stratégie de communication',
        summary: "Positionnement et ligne éditoriale pour faire rayonner l'univers musical de Prod Daiki sur tous ses supports.",
      },
      {
        title: 'Branding & identité visuelle',
        summary: "Conception et évolution continue du logo, des visuels et de la charte graphique pour une image de marque forte et cohérente.",
        content: [
          { kind: 'photo', src: '/images/clients/prod-daiki-obj1.png', alt: "Identité visuelle Prod Daiki" },
          { kind: 'photo', src: '/images/clients/prod-daiki-logo.png', fit: 'contain', alt: "Logo Prod Daiki" },
        ],
      },
      {
        title: 'Contenu & réseaux sociaux',
        summary: "Publication régulière de contenus adaptés à la scène musicale : clips, teasers, visuels de beats et actualités artiste.",
        link: { label: 'Chaîne YouTube', url: 'https://youtube.com/@proddaiki9037' },
        content: [
          { kind: 'video', youtubeId: 'moi-8-sH8PA', alt: 'Vidéo Prod Daiki pour les réseaux sociaux' },
          { kind: 'photo', src: '/images/clients/prod-daiki-obj2.png', alt: "Contenus réseaux sociaux Prod Daiki" },
          { kind: 'video', youtubeId: 'XULvni6XnT8', alt: 'Vidéo Prod Daiki pour les réseaux sociaux' },
          { kind: 'photo', src: '/images/clients/prod-daiki-phone.png', alt: "Contenus Prod Daiki sur mobile" },
          { kind: 'video', youtubeId: 'uj6KS8eqrOU', alt: 'Vidéo Prod Daiki pour les réseaux sociaux' },
        ],
      },
      {
        title: 'Site web & SEO',
        summary: "Création du site internet prodbydaiki.com, dans la continuité de l'identité visuelle de la marque.",
        link: { label: 'prodbydaiki.com', url: 'https://www.prodbydaiki.com/' },
        content: [
          { kind: 'photo', src: '/images/clients/prod-daiki-obj3.png', alt: "Site internet Prod Daiki" },
        ],
      },
    ],
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
    tags: ['Stratégie', 'Branding', 'Contenu & Réseaux Sociaux', 'Site Web & SEO'],
    discovery: { label: 'Découvrir la chaîne', url: 'https://youtube.com/@proddaiki9037?si=DIgr9ZOm8DynLvoV' },
    location: 'Bordeaux, France',
    media: [
      { kind: 'video', youtubeId: 'moi-8-sH8PA', label: 'Prod Daiki', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'XULvni6XnT8', label: 'Prod Daiki', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'uj6KS8eqrOU', label: 'Prod Daiki', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'oGce21-EKIY', label: 'Prod Daiki', location: 'Bordeaux, France' },
    ],
  },
  // ↓ Nouveaux clients : à ajouter ici (après Prod Daiki)
  {
    slug: 'caroline-baroche-safti',
    name: 'Caroline · Safti',
    intro: "Caroline Baroche, agente immobilière Safti à Bordeaux.",
    sector: 'Immobilier',
    category: 'Contenu & Réseaux sociaux',
    year: 'depuis 2026',
    description: "Accompagnement de Caroline Baroche, agente immobilière du réseau Safti à Bordeaux : stratégie de communication et création de contenus pour ses réseaux sociaux.",
    missions: [
      {
        title: 'Stratégie de communication',
        summary: "Positionnement et ligne éditoriale pour développer la visibilité de Caroline à Bordeaux et donner confiance aux vendeurs comme aux acheteurs.",
      },
      {
        title: 'Contenu & réseaux sociaux',
        summary: "Tournage et montage de vidéos courtes pour Instagram : des formats incarnés qui mettent en avant son expertise, ses conseils et sa personnalité.",
        link: { label: 'Instagram', url: 'https://www.instagram.com/carolinebaroche_immobilier/' },
        content: [
          { kind: 'photo', src: '/images/clients/caroline-safti-bureau.jpg', alt: "Caroline Baroche au téléphone à son bureau" },
          { kind: 'photo', src: '/images/clients/caroline-safti-agenda.jpg', alt: "L'agenda de Caroline Baroche, agente immobilière Safti" },
          { kind: 'photo', src: '/images/clients/caroline-safti-parc.jpg', alt: "Caroline Baroche dans un parc à Bordeaux" },
        ],
      },
    ],
    objectives: [],
    cardImage: '/images/clients/caroline-safti-card.jpg',
    coverImage: '/images/clients/caroline-safti-card.jpg',
    bannerImage: '/images/clients/caroline-safti-rue.jpg',
    gallery: ['/images/clients/caroline-safti-agenda.jpg'],
    tags: ['Stratégie', 'Contenu & Réseaux Sociaux'],
    discovery: { label: 'Découvrir', url: 'https://www.instagram.com/carolinebaroche_immobilier/', icon: 'instagram' as const },
    location: 'Bordeaux, France',
    media: [
      { kind: 'video', youtubeId: 'HB-MV7WWCK4', label: 'Caroline · Safti', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: '_SisQMVGzVs', label: 'Caroline · Safti', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'v3DHCmX6fx8', label: 'Caroline · Safti', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'bFzhzkeARlA', label: 'Caroline · Safti', location: 'Bordeaux, France' },
    ],
  },
  {
    slug: 'itineraire-sur-mesure',
    intro: "Itinéraire Sur Mesure, des voyages pensés sur mesure.",
    sector: "Voyage sur mesure",
    missions: [
      {
        title: 'Stratégie de communication',
        summary: "Positionnement et ligne éditoriale pour donner envie de voyager et transformer les abonnés en voyageurs.",
      },
      {
        title: 'Contenu & réseaux sociaux',
        summary: "Gestion des réseaux sociaux et création de contenu au quotidien : vidéos, reels et stories inspirants qui valorisent les destinations et attirent de nouveaux voyageurs.",
        content: [
          { kind: 'photo', src: '/images/clients/itineraire-sur-mesure-reseaux-sociaux.png', alt: "Réseaux sociaux Itinéraire Sur Mesure" },
          { kind: 'photo', src: '/images/clients/itineraire-sur-mesure-creation-contenu.png', alt: "Création de contenu Itinéraire Sur Mesure" },
          { kind: 'beforeAfter', before: '/images/clients/itineraire-sur-mesure-avant.png', after: '/images/clients/itineraire-sur-mesure-apres.png', alt: 'Feed Instagram avant / après' },
        ],
      },
      {
        title: 'Supports commerciaux',
        summary: "Conception de carnets de voyages, brochures et estimations budgétaires pour appuyer la démarche commerciale.",
        content: [
          { kind: 'photo', src: '/images/clients/itineraire-sur-mesure-supports-commerciaux.png', alt: "Supports commerciaux Itinéraire Sur Mesure" },
        ],
      },
      {
        title: 'Site web & SEO',
        summary: "Redesign complet du site avec optimisation SEO pour améliorer la visibilité sur Google et l'expérience utilisateur.",
        link: { label: 'itinerairesurmesure.fr', url: 'https://www.itinerairesurmesure.fr/' },
        content: [
          { kind: 'photo', src: '/images/clients/itineraire-sur-mesure-refonte-site.png', alt: "Refonte du site Itinéraire Sur Mesure" },
        ],
      },
    ],
    name: 'Itinéraire Sur Mesure',
    category: 'Contenu & Réseaux sociaux',
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
    tags: ['Stratégie', 'Contenu & Réseaux Sociaux', 'Site Web & SEO'],
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
    slug: 'bucherons-barber',
    intro: "Les Bûcherons, barbershop premium à Bordeaux.",
    sector: "Barbershop",
    missions: [
      {
        title: 'Stratégie de communication',
        summary: "Positionnement et ligne éditoriale pour affirmer l'image premium du barbershop sur les réseaux.",
      },
      {
        title: 'Contenu & réseaux sociaux',
        summary: "Tournage en salon et montage de vidéos courtes pour Instagram et TikTok, photos soignées et visuels de marque, animation quotidienne des réseaux et développement de l'engagement : pour asseoir l'image premium du salon.",
        link: { label: 'Instagram', url: 'https://www.instagram.com/lesbucherons.fr/' },
        content: [
          { kind: 'photo', src: '/images/clients/bucherons-obj1.jpg', alt: "Shooting vidéo au salon Les Bûcherons" },
          { kind: 'photo', src: '/images/clients/bucherons-obj2.png', alt: "Réseaux sociaux Les Bûcherons" },
          { kind: 'photo', src: '/images/clients/bucherons-obj3.jpg', alt: "Photo de marque Les Bûcherons" },
        ],
      },
    ],
    name: 'Les Bûcherons',
    category: 'Contenu & Réseaux sociaux',
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
    tags: ['Stratégie', 'Contenu & Réseaux Sociaux'],
    discovery: { label: 'Découvrir', url: 'https://www.instagram.com/lesbucherons.fr/', icon: 'instagram' as const },
    location: 'Bordeaux, France',
    media: [
      { kind: 'video', youtubeId: 'cA7L6fpHlIY', label: 'Les Bûcherons', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'hev_jh1cNTU', label: 'Les Bûcherons', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'Cc0trv5VCH8', label: 'Les Bûcherons', location: 'Bordeaux, France' },
      { kind: 'video', youtubeId: 'MSGzTlCQWbE', label: 'Les Bûcherons', location: 'Bordeaux, France' },
    ],
  },
  {
    slug: 'librairie-de-florence',
    intro: "La librairie francophone de référence à Florence.",
    sector: "Librairie & culture",
    missions: [
      {
        title: 'Stratégie de communication',
        summary: "Ligne éditoriale et planification de la communication pour faire rayonner la librairie et ses événements auprès des lecteurs, des écoles et des institutions culturelles.",
      },
      {
        title: 'Contenu & réseaux sociaux',
        summary: "Création et publication quotidienne sur Instagram et Facebook, gestion des interactions et croissance de la communauté.",
        link: { label: 'Instagram', url: 'https://www.instagram.com/lalibrairiefrancaiseflorence/' },
        content: [
          { kind: 'photo', src: '/images/clients/librairie-de-florence-reseaux.png', alt: "Réseaux sociaux de la Librairie Française de Florence" },
          { kind: 'beforeAfter', before: '/images/clients/librairie-de-florence-avant.png', after: '/images/clients/librairie-de-florence-apres.png', alt: 'Feed Instagram avant / après' },
          { kind: 'photo', src: '/images/ugc/librairie-de-florence.jpg', alt: "Librairie Française de Florence" },
          { kind: 'photo', src: '/images/clients/librairie-de-florence-photo2.jpg', alt: "Librairie Française de Florence" },
        ],
      },
      {
        title: 'Supports de communication',
        summary: "Réalisation de visuels print et digitaux : affiches, newsletters, stories et supports pour les événements.",
        content: [
          { kind: 'photo', src: '/images/clients/librairie-de-florence-supports.png', alt: "Supports de communication de la librairie" },
        ],
      },
      {
        title: 'Livre commémoratif',
        summary: "Contribution à la conception et à la rédaction d'un ouvrage célébrant l'histoire et le rayonnement culturel de la librairie.",
        content: [
          { kind: 'photo', src: '/images/clients/librairie-de-florence-livre.png', alt: "Livre commémoratif de la librairie" },
        ],
      },
      {
        title: 'Événements majeurs',
        summary: "Communication autour du festival Testo et de la conférence EPF, deux événements ayant réuni plus de 21 000 participants.",
        content: [
          { kind: 'photo', src: '/images/clients/librairie-de-florence-evenements.jpg', alt: "Événements de la librairie" },
        ],
      },
    ],
    name: 'Librairie Française de Florence',
    category: 'Contenu & Réseaux sociaux',
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
    tags: ['Stratégie', 'Contenu & Réseaux Sociaux'],
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
]
