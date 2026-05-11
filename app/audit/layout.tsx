import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Audit Express Réseaux Sociaux | Bordeaux & Paris | Edith Agency',
  description: 'Faites votre audit express gratuit et découvrez ce dont votre marque a besoin pour progresser en ligne.',
  openGraph: {
    title: 'Audit Express Réseaux Sociaux | Bordeaux & Paris | Edith Agency',
    description: 'Faites votre audit express gratuit et découvrez ce dont votre marque a besoin pour progresser en ligne.',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return children
}
