export const SITE_URL = 'https://seamoreagency.com'

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'Sea More Agency',
  url: SITE_URL,
  logo: `${SITE_URL}/images/logo.png`,
  image: `${SITE_URL}/images/og-image.png`,
  email: 'contact@seamoreagency.com',
  description:
    'Agence de communication à Bordeaux : stratégie de communication, création de contenu photo et vidéo, social media, branding, création de site web et SEO.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Mérignac',
    postalCode: '33700',
    addressRegion: 'Nouvelle-Aquitaine',
    addressCountry: 'FR',
  },
  areaServed: [
    { '@type': 'City', name: 'Bordeaux' },
    { '@type': 'City', name: 'Paris' },
    { '@type': 'Country', name: 'France' },
  ],
  founder: {
    '@type': 'Person',
    '@id': `${SITE_URL}/#edith-apouey`,
    name: 'Edith Apouey',
    jobTitle: 'Fondatrice de Sea More Agency',
  },
  sameAs: ['https://www.instagram.com/seamoreagency/'],
  knowsAbout: [
    'Stratégie de communication',
    'Création de contenu',
    'Production vidéo',
    'Community management',
    'Branding',
    'Identité visuelle',
    'Création de site web',
    'SEO',
  ],
}
