import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { clients } from '@/data/clients'
import ClientCard from '@/components/ClientCard'
import PageHero from '@/components/PageHero'
import SectionReveal from '@/components/SectionReveal'
import TypewriterHeading from '@/components/TypewriterHeading'

const FranceMap = dynamic(() => import('@/components/FranceMap'), {
  ssr: false,
  loading: () => <div className="mx-8 h-[500px] rounded-2xl bg-brand-deep/10" />,
})

export const metadata: Metadata = {
  title: 'Projets & Clients | Freelance Communication Bordeaux Paris | Sea More Agency',
  description: 'Mes projets clients en communication et branding à Bordeaux, Paris et en Europe.',
  openGraph: {
    title: 'Projets & Clients | Freelance Communication Bordeaux Paris | Sea More Agency',
    description: 'Mes projets clients en communication et branding à Bordeaux, Paris et en Europe.',
    locale: 'fr_FR',
    type: 'website',
  },
}

export default function ProjetsPage() {
  return (
    <>
      {/* Hero */}
      <PageHero
        backgroundVideo="/videos/accueil-hero.mp4"
        title="Mes Projets"
        titleFontSize="clamp(30px, 4.8vw, 74px)"
        taglineBelow="Des courants créatifs qui laissent une trace."
        overlayOpacity={25}
      />

      <SectionReveal>
      <section className="pt-20 pb-16">
        <div className="px-8 md:px-20">
          <div className="max-w-[1400px] mx-auto mb-12">
            <p className="eyebrow mb-3">Projets récents</p>
            <TypewriterHeading
              className="text-brand-deep leading-[0.9]"
              style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)' }}
              segments={[
                { text: 'Ce que je fais ' },
                { text: 'vraiment.', className: 'text-brand-mid' },
              ]}
            />
          </div>
        </div>

        <div id="projets" className="px-8 md:px-20">
          <div className="max-w-[1400px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-12">
            {clients.map((client) => (
              <ClientCard key={client.slug} client={client} />
            ))}
          </div>
        </div>
      </section>
      </SectionReveal>

      {/* ── CARTE ── */}
      <FranceMap showCounter={false} eyebrow="Bordeaux & au-delà" title="Des projets qui voyagent." titleAccent="voyagent." />

      {/* ── CTA FINAL ── */}
      <SectionReveal>
      <section className="relative overflow-hidden px-8 md:px-20 py-20 bg-white border-t border-brand-deep/10">
        <video
          src="/videos/hero-home.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ opacity: 0.4 }}
        />
        <div
          className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
          style={{ background: 'linear-gradient(to bottom, transparent, #dde6e7 85%)' }}
        />
        <div className="relative z-10 max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-center justify-between gap-10">
          <div className="max-w-2xl">
            <p className="eyebrow mb-4">On se lance ?</p>
            <TypewriterHeading
              className="text-brand-deep leading-[1.05]"
              style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontSize: 'clamp(30px, 4vw, 50px)' }}
              segments={[
                { text: 'Un projet en tête ?\n' },
                { text: 'Donnons-lui le bon ' },
                { text: 'cap.', className: 'text-brand-mid' },
              ]}
            />
          </div>
          <Link
            href="/contact"
            aria-label="Me contacter"
            className="group flex items-center shrink-0 md:mr-12"
          >
            <svg width="40" height="40" viewBox="0 0 20 20" fill="none" className="transition-transform duration-300 group-hover:translate-x-1.5">
              <path d="M4 10H16M16 10L11 5M16 10L11 15" stroke="#2b616b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </Link>
        </div>
      </section>
      </SectionReveal>
    </>
  )
}
