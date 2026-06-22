import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Freelance Communication à Bordeaux et Paris | Sea More Agency',
  description: 'Contactez-moi pour un projet de communication à Bordeaux ou Paris. Réponse rapide garantie.',
  openGraph: {
    title: 'Contact | Freelance Communication à Bordeaux et Paris | Sea More Agency',
    description: 'Contactez-moi pour un projet de communication à Bordeaux ou Paris. Réponse rapide garantie.',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
