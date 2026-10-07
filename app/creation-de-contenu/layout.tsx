import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/creation-de-contenu' },
  title: 'Création de contenu à Bordeaux | Photo, Vidéo & Reels',
  description: 'Création de contenu photo et vidéo à Bordeaux pour les marques, restaurants et entrepreneurs : Reels, shootings, contenus social media. Projets à Paris et à l\'international.',
  openGraph: {
    title: 'Création de contenu à Bordeaux | Photo, Vidéo & Reels',
    description: 'Création de contenu photo et vidéo à Bordeaux pour les marques, restaurants et entrepreneurs : Reels, shootings, contenus social media. Projets à Paris et à l\'international.',
    siteName: 'Sea More Agency',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/og-image.png'],
  },
}

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return children
}
