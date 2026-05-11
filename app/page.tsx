import type { Metadata } from 'next'
import Link from 'next/link'
import { clients } from '@/data/clients'
import ProjectsCarousel from '@/components/ProjectsCarousel'
import StatsCounter from '@/components/StatsCounter'

export const metadata: Metadata = {
  title: 'Freelance Communication & Vidéo à Bordeaux et Paris | Edith Agency',
  description: 'Freelance en communication basée à Bordeaux et Paris. Création de contenu vidéo, community management, branding et stratégie pour les marques locales.',
  openGraph: {
    title: 'Freelance Communication & Vidéo à Bordeaux et Paris | Edith Agency',
    description: 'Freelance en communication basée à Bordeaux et Paris. Création de contenu vidéo, community management, branding et stratégie pour les marques locales.',
    locale: 'fr_FR',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Edith Agency',
  description: 'Freelance en communication, création de contenu vidéo, branding et community management',
  areaServed: ['Bordeaux', 'Paris', 'France'],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Bordeaux',
    addressCountry: 'FR',
  },
}

export default function HomePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center pt-24 pb-20 px-8 overflow-hidden">
        <div className="max-w-[580px] relative z-10">
          <p className="eyebrow mb-6">Agence de communication — Bordeaux</p>

          <h1
            className="font-display font-black text-brand-deep leading-[0.9] mb-4"
            style={{ fontSize: 'clamp(52px, 8vw, 88px)' }}
          >
            <span className="block">Votre marque,</span>
            <span className="block text-brand-yellow">vivante.</span>
          </h1>

          <span
            className="block font-script text-brand-yellow mb-8"
            style={{ fontSize: 'clamp(28px, 4vw, 42px)', transform: 'rotate(-3deg)', transformOrigin: 'left center' }}
          >
            sur-mesure.
          </span>

          <div className="flex flex-wrap gap-2 mb-8">
            {['Branding', 'Social Media', 'Contenu', 'Vidéo'].map((tag) => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>

          <p className="font-body font-light text-[15px] text-brand-deep/70 mb-10 max-w-[300px] leading-relaxed">
            Je crée des univers de marque cohérents et des contenus qui résonnent, pour des marques créatives à Bordeaux, Paris et partout en France.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="/projets"
              className="inline-flex items-center gap-2 bg-brand-deep text-brand-cream font-body text-[12px] uppercase tracking-[0.12em] px-7 py-4 rounded-full hover:opacity-80 transition-opacity"
            >
              Voir mes projets
            </Link>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 border border-brand-deep text-brand-deep font-body text-[12px] uppercase tracking-[0.12em] px-7 py-4 rounded-full hover:bg-brand-deep hover:text-brand-cream transition-colors"
            >
              Audit Express ✦
            </Link>
          </div>
        </div>

        {/* Photos décoratives pivotées */}
        <div className="absolute right-16 top-1/2 -translate-y-1/2 hidden lg:block">
          <div
            className="absolute w-[220px] h-[300px] bg-brand-mid/50 rounded-xl"
            style={{ transform: 'rotate(4deg)', top: '-80px', right: '40px' }}
          />
          <div
            className="absolute w-[180px] h-[240px] bg-brand-deep/30 rounded-xl"
            style={{ transform: 'rotate(-2deg)', top: '60px', right: '-20px' }}
          />
        </div>
      </section>

      {/* ── CARROUSEL PROJETS ── */}
      <section className="py-20 overflow-hidden">
        <div className="px-8 mb-12 flex items-end justify-between">
          <div>
            <p className="eyebrow mb-3">Projets récents</p>
            <h2
              className="font-display font-black text-brand-deep leading-[0.9]"
              style={{ fontSize: 'clamp(36px, 5vw, 58px)' }}
            >
              Ce que je fais{' '}
              <span className="text-brand-yellow">vraiment.</span>
            </h2>
          </div>
          <Link
            href="/projets"
            className="hidden md:inline-flex items-center gap-2 font-body text-[11px] uppercase tracking-[0.12em] text-brand-deep/60 hover:text-brand-deep transition-colors"
          >
            Tous les projets <span aria-hidden>→</span>
          </Link>
        </div>

        <ProjectsCarousel clients={clients} />


      </section>

      {/* ── STATS ── */}
      <StatsCounter />

      {/* ── SERVICES ── */}
      <section className="px-8 py-24">
        <p className="eyebrow mb-4">Ce que je propose</p>
        <h2
          className="font-display font-black text-brand-deep leading-[0.9] mb-14"
          style={{ fontSize: 'clamp(32px, 4.5vw, 56px)' }}
        >
          Mes{' '}
          <span className="text-brand-yellow">services.</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          {[
            { emoji: '🎬', title: 'Création de Contenu Vidéo', desc: "Des vidéos qui captent l'attention et racontent ton histoire.", anchor: 'contenu-video' },
            { emoji: '📱', title: 'Community Management', desc: "Je gère tes réseaux pour que ta communauté grandisse sans que tu t'en occupes.", anchor: 'community-management' },
            { emoji: '🎨', title: 'Branding & Identité Visuelle', desc: 'Une image de marque forte, cohérente et immédiatement reconnaissable.', anchor: 'branding' },
            { emoji: '📣', title: 'Stratégie de Communication', desc: 'Une direction claire pour que chaque action de communication serve un objectif précis.', anchor: 'strategie' },
            { emoji: '💻', title: 'Création de Site Web', desc: 'Un site moderne, rapide et pensé pour convertir tes visiteurs en clients.', anchor: 'site-web' },
            { emoji: '🔍', title: 'SEO & Visibilité en ligne', desc: 'Être trouvé sur Google par les bonnes personnes, au bon moment.', anchor: 'seo' },
          ].map(({ emoji, title, desc, anchor }) => (
            <Link
              key={anchor}
              href={`/services#${anchor}`}
              className="group flex flex-col gap-3 p-6 rounded-2xl border border-brand-deep/10 hover:border-brand-deep/30 hover:bg-brand-deep/5 transition-all duration-200"
            >
              <span className="text-2xl">{emoji}</span>
              <p className="font-display font-bold text-brand-deep text-[17px] leading-tight group-hover:text-brand-mid transition-colors">{title}</p>
              <p className="font-body font-light text-[12px] text-brand-deep/60 leading-relaxed">{desc}</p>
              <span className="font-body text-[11px] text-brand-mid uppercase tracking-[0.1em] mt-auto">Découvrir</span>
            </Link>
          ))}
        </div>

        <div className="flex justify-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-brand-deep text-brand-cream font-body text-[12px] uppercase tracking-[0.12em] px-8 py-4 rounded-full hover:opacity-80 transition-opacity"
          >
            Découvrir mes services
          </Link>
        </div>
      </section>

      {/* ── CTA CONTACT ── */}
      <section className="px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 items-center border-t border-brand-deep/10">
        <div>
          <h2
            className="font-display font-black text-brand-deep leading-[0.9]"
            style={{ fontSize: 'clamp(36px, 5vw, 64px)' }}
          >
            Parlons de votre{' '}
            <span className="text-brand-yellow">projet.</span>
          </h2>
        </div>
        <div className="flex flex-col gap-4">
          <p className="eyebrow">Basée à Bordeaux, disponible partout</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-yellow text-brand-deep font-body text-[12px] uppercase tracking-[0.12em] px-7 py-4 rounded-full w-fit hover:opacity-80 transition-opacity"
          >
            Me contacter
          </Link>
          <p className="font-body text-[12px] text-brand-deep/50 mt-2">contact.edith.agency@gmail.com</p>
        </div>
      </section>
    </>
  )
}
