import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contenus Vidéo & Photo pour Marques à Bordeaux et Paris | Edith Agency',
  description: 'Découvrez mes réalisations vidéo et photo pour des marques à Bordeaux, Paris et à l\'international.',
  openGraph: {
    title: 'Contenus Vidéo & Photo pour Marques à Bordeaux et Paris | Edith Agency',
    description: 'Découvrez mes réalisations vidéo et photo pour des marques à Bordeaux, Paris et à l\'international.',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function ContentLayout({ children }: { children: React.ReactNode }) {
  return children
}
