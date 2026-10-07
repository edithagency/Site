import type { Metadata } from 'next'

export const metadata: Metadata = {
  alternates: { canonical: '/contact' },
  title: 'Contact | Agence de communication à Bordeaux – Sea More',
  description: 'Un projet de communication, de contenu ou de site web ? Contactez Sea More Agency, agence de communication basée à Bordeaux, disponible partout en France.',
  openGraph: {
    title: 'Contact | Agence de communication à Bordeaux – Sea More',
    description: 'Un projet de communication, de contenu ou de site web ? Contactez Sea More Agency, agence de communication basée à Bordeaux, disponible partout en France.',
    siteName: 'Sea More Agency',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/og-image.png'],
  },
}

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children
}
