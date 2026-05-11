import type { Metadata } from 'next'
import { Playfair_Display, Dancing_Script, DM_Sans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-display',
})

const dancing = Dancing_Script({
  subsets: ['latin'],
  weight: ['600'],
  variable: '--font-script',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
})

export const metadata: Metadata = {
  title: 'Edith Agency | Freelance Communication Bordeaux & Paris',
  description: 'Freelance en communication basée à Bordeaux et Paris. Création de contenu vidéo, community management, branding et stratégie pour les marques locales.',
  keywords: ['agence communication Bordeaux', 'freelance communication Paris', 'branding Bordeaux', 'social media Bordeaux Paris', 'création contenu vidéo', 'community management Bordeaux'],
  openGraph: {
    title: 'Edith Agency | Freelance Communication Bordeaux & Paris',
    description: 'Freelance en communication basée à Bordeaux et Paris. Création de contenu vidéo, community management, branding et stratégie pour les marques locales.',
    locale: 'fr_FR',
    type: 'website',
  },
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Bordeaux, Paris',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dancing.variable} ${dmSans.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
