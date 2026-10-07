import type { Metadata } from 'next'
import { Playfair_Display, Dancing_Script, DM_Sans, Poppins } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import JsonLd from '@/components/JsonLd'
import { organizationSchema } from '@/data/schema'

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
  title: 'Agence de communication à Bordeaux | Sea More Agency',
  description: 'Sea More Agency, agence de communication à Bordeaux : stratégie, création de contenu photo et vidéo, social media, branding et site web. Disponible aussi à Paris.',
  keywords: ['agence communication Bordeaux', 'création contenu Bordeaux', 'community manager Bordeaux', 'social media Bordeaux', 'branding Bordeaux', 'création site web Bordeaux', 'agence communication Paris'],
  openGraph: {
    title: 'Agence de communication à Bordeaux | Sea More Agency',
    description: 'Sea More Agency, agence de communication à Bordeaux : stratégie, création de contenu photo et vidéo, social media, branding et site web. Disponible aussi à Paris.',
    siteName: 'Sea More Agency',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/og-image.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Agence de communication à Bordeaux | Sea More Agency',
    description: 'Sea More Agency, agence de communication à Bordeaux : stratégie, création de contenu photo et vidéo, social media, branding et site web. Disponible aussi à Paris.',
    images: ['/images/og-image.png'],
  },
  other: {
    'geo.region': 'FR-33',
    'geo.placename': 'Bordeaux',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${playfair.variable} ${dancing.variable} ${dmSans.variable} ${poppins.variable} ${theSeasons.variable}`}>
      <body>
        <JsonLd data={organizationSchema} />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
