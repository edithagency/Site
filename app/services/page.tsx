import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ServicesAccordion from '@/components/ServicesAccordion'
import ClientsLoopSlider from '@/components/ClientsLoopSlider'
import { clients } from '@/data/clients'

export const metadata: Metadata = {
  alternates: { canonical: '/services' },
  title: 'Services de communication à Bordeaux | Sea More Agency',
  description: 'Stratégie de communication, création de contenu, community management, branding, site web et SEO : découvrez mes services d\'agence de communication à Bordeaux.',
  openGraph: {
    title: 'Services de communication à Bordeaux | Sea More Agency',
    description: 'Stratégie de communication, création de contenu, community management, branding, site web et SEO : découvrez mes services d\'agence de communication à Bordeaux.',
    siteName: 'Sea More Agency',
    locale: 'fr_FR',
    type: 'website',
    images: ['/images/og-image.png'],
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        backgroundVideo="/videos/services-hero-2.mp4"
        title="Mes Services"
        titleKicker="Services de communication à Bordeaux"
        titleFontSize="clamp(30px, 4.8vw, 74px)"
        taglineBelow="Naviguer entre stratégie et création pour faire émerger votre marque."
        overlayOpacity={25}
      />

      {/* ── SERVICES ── */}
      <ServicesAccordion />

      {/* ── CLIENTS ── */}
      <ClientsLoopSlider clients={clients} className="bg-[#dde6e7]" fadeColor="#dde6e7" />
    </>
  )
}
