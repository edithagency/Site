import type { Metadata } from 'next'
import { Playfair_Display, Dancing_Script, DM_Sans, Poppins } from 'next/font/google'
import localFont from 'next/font/local'
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

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-poppins',
})

const theSeasons = localFont({
  src: './fonts/TheSeasons-Regular.ttf',
  variable: '--font-seasons',
  weight: '400',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://seamoreagency.com'),
  title: 'Sea More Agency | Freelance Communication & Vidéo à Bordeaux et Paris',
  description: 'Freelance en communication basée à Bordeaux et Paris. Création de contenu vidéo, community management, branding et stratégie pour les marques locales.',
  keywords: ['agence communication Bordeaux', 'freelance communication Paris', 'branding Bordeaux', 'social media Bordeaux Paris', 'création contenu vidéo', 'community management Bordeaux'],
  openGraph: {
    title: 'Sea More Agency | Freelance Communication & Vidéo à Bordeaux et Paris',
    description: 'Freelance en communication basée à Bordeaux et Paris. Création de contenu vidéo, community management, branding et stratégie pour les marques locales.',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sea More Agency | Freelance Communication & Vidéo à Bordeaux et Paris',
    description: 'Freelance en communication basée à Bordeaux et Paris. Création de contenu vidéo, community management, branding et stratégie pour les marques locales.',
    images: ['/images/og-image.png'],
  },
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Bordeaux, Paris',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dancing.variable} ${dmSans.variable} ${poppins.variable} ${theSeasons.variable}`}>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
