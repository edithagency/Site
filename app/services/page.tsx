import type { Metadata } from 'next'
import PageHero from '@/components/PageHero'
import ServicesAccordion from '@/components/ServicesAccordion'
import ClientsLoopSlider from '@/components/ClientsLoopSlider'
import { clients } from '@/data/clients'

export const metadata: Metadata = {
  title: 'Services Communication, Vidéo & Branding à Bordeaux et Paris | Sea More Agency',
  description: 'Découvrez mes services en communication : vidéo, branding, community management, site web et SEO. Disponible à Bordeaux, Paris et partout en France.',
  openGraph: {
    title: 'Services Communication, Vidéo & Branding à Bordeaux et Paris | Sea More Agency',
    description: 'Découvrez mes services en communication : vidéo, branding, community management, site web et SEO. Disponible à Bordeaux, Paris et partout en France.',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <PageHero
        backgroundVideo="/videos/services-hero-2.mp4"
        title="Mes Services"
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
