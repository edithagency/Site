import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact | Freelance Communication à Bordeaux et Paris | Sea More Agency',
  description: 'Contactez-moi pour un projet de communication à Bordeaux ou Paris. Réponse rapide garantie.',
  openGraph: {
    title: 'Contact | Freelance Communication à Bordeaux et Paris | Sea More Agency',
    description: 'Contactez-moi pour un projet de communication à Bordeaux ou Paris. Réponse rapide garantie.',
    siteName: 'Sea More Agency',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/og-image.png'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
