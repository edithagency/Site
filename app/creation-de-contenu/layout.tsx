import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contenus Vidéo & Photo pour Marques à Bordeaux et Paris | Sea More Agency',
  description: 'Découvrez mes réalisations vidéo et photo pour des marques à Bordeaux, Paris et à l\'international.',
  openGraph: {
    title: 'Contenus Vidéo & Photo pour Marques à Bordeaux et Paris | Sea More Agency',
    description: 'Découvrez mes réalisations vidéo et photo pour des marques à Bordeaux, Paris et à l\'international.',
    siteName: 'Sea More Agency',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/og-image.png'],
  },
}

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return children
}
