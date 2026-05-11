import type { Metadata } from 'next'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { clients } from '@/data/clients'
import ClientCard from '@/components/ClientCard'
import StatsCounter from '@/components/StatsCounter'

const FranceMap = dynamic(() => import('@/components/FranceMap'), {
  ssr: false,
  loading: () => <div className="mx-8 h-[500px] rounded-2xl bg-brand-deep/10" />,
})

export const metadata: Metadata = {
  title: 'Projets & Clients | Freelance Communication Bordeaux Paris | Edith Agency',
  description: 'Mes projets clients en communication et branding à Bordeaux, Paris et en Europe.',
  openGraph: {
    title: 'Projets & Clients | Freelance Communication Bordeaux Paris | Edith Agency',
    description: 'Mes projets clients en communication et branding à Bordeaux, Paris et en Europe.',
    locale: 'fr_FR',
    type: 'website',
  },
}

const offsets = ['0px', '40px', '20px', '60px', '0px', '32px']

export default function ProjetsPage() {
  return (
    <>
      {/* Hero avec image */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        {/* Image pleine largeur */}
        <div className="relative w-full page-hero-banner bg-brand-deep/25 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-cream/90" />
          <div className="absolute bottom-0 left-0 px-8 pb-16">
            <h1
              className="font-display font-black text-brand-deep leading-[0.9]"
              style={{ fontSize: 'clamp(44px, 7vw, 80px)' }}
            >
              <span className="block" style={{ whiteSpace: 'nowrap' }}>Les marques que j'ai</span>
              <span className="block text-brand-yellow">façonnées.</span>
            </h1>
          </div>
        </div>

        {/* Mot script flottant */}
        <span
          className="absolute top-40 right-16 font-script text-brand-yellow hidden md:block"
          style={{ fontSize: 'clamp(28px, 3vw, 40px)', transform: 'rotate(-4deg)' }}
        >
          mes créations.
        </span>
      </section>

      {/* Intro */}
      <section className="px-8 pt-12 pb-6">
        <p className="font-body font-light text-[15px] text-brand-deep/60 max-w-sm leading-relaxed">
          Branding, social media, création de contenu : chaque projet est une collaboration unique à Bordeaux et en France.
        </p>
      </section>

      {/* Grille irrégulière */}
      <section className="px-8 pb-24">
        <div className="grid grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-0 items-start">
          {clients.map((client, i) => (
            <ClientCard
              key={client.slug}
              client={client}
              style={{ marginTop: offsets[i % offsets.length] }}
            />
          ))}
        </div>
      </section>

      {/* ── STATS ── */}
      <div className="mb-8">
        <StatsCounter />
      </div>

      {/* ── CARTE ── */}
      <FranceMap />

      {/* ── CTA ── */}
      <section className="mx-8 mb-24 rounded-2xl bg-brand-deep px-10 py-14 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="eyebrow text-brand-mid mb-4">Bordeaux & partout en France</p>
          <h2 className="font-display font-black text-brand-cream leading-[0.9]"
              style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}>
            Votre projet mérite{' '}
            <span className="text-brand-yellow"
                 >
              mieux.
            </span>
          </h2>
          <p className="font-body font-light text-brand-cream/60 text-[15px] leading-relaxed mt-4 max-w-xs">
            Une idée, un brief, ou juste l'envie de discuter ? Je suis là.
          </p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-yellow text-brand-deep font-body text-[12px] uppercase tracking-[0.12em] px-7 py-4 rounded-full hover:opacity-80 transition-opacity w-fit"
          >
            Démarrer un projet
          </Link>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 border border-brand-cream/30 text-brand-cream font-body text-[12px] uppercase tracking-[0.12em] px-7 py-4 rounded-full hover:bg-brand-cream/10 transition-colors w-fit"
          >
            Voir les services
          </Link>
        </div>
      </section>
    </>
  )
}
