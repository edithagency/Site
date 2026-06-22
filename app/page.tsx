import type { Metadata } from 'next'
import Link from 'next/link'
import { clients } from '@/data/clients'
import ProjectsCarousel from '@/components/ProjectsCarousel'
import PageHero from '@/components/PageHero'
import SectionReveal from '@/components/SectionReveal'
import TypewriterHeading from '@/components/TypewriterHeading'
import FAQAccordion from '@/components/FAQAccordion'
import FeaturedContent from '@/components/FeaturedContent'

export const metadata: Metadata = {
  title: 'Freelance Communication & Vidéo à Bordeaux et Paris | Sea More Agency',
  description: 'Freelance en communication basée à Bordeaux et Paris. Création de contenu vidéo, community management, branding et stratégie pour les marques locales.',
  openGraph: {
    title: 'Freelance Communication & Vidéo à Bordeaux et Paris | Sea More Agency',
    description: 'Freelance en communication basée à Bordeaux et Paris. Création de contenu vidéo, community management, branding et stratégie pour les marques locales.',
    locale: 'fr_FR',
    type: 'website',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Sea More Agency',
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
      {/* Remplacer leftImage et rightImage par les vraies photos quand disponibles */}
      <PageHero
        backgroundVideo="/videos/projets-hero.mp4"
        title="Sea More Agency"
        titleImage="/images/logo.png"
        lead="Voir au-delà pour révéler votre potentiel"
        leadSmall={<>VIDEO - COMMUNICATION<br className="sm:hidden" /> - SITE WEB</>}
        overlayOpacity={25}
      />

      {/* ── CARROUSEL PROJETS ── */}
      <SectionReveal>
      <section className="pt-20 pb-16 overflow-hidden">
        <div className="px-8 md:px-20">
        <div className="max-w-[1400px] mx-auto mb-12 flex flex-col sm:flex-row sm:items-end justify-between gap-3">
          <div>
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
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 font-poppins text-[11px] uppercase tracking-[0.12em] text-brand-deep/60 hover:text-brand-deep transition-colors shrink-0"
          >
            Tous les projets <span aria-hidden>→</span>
          </Link>
        </div>
        </div>

        <ProjectsCarousel clients={clients} />

      </section>
      </SectionReveal>

      {/* ── SERVICES ── */}
      <SectionReveal>
      <section
        className="px-8 md:px-20 pt-14 pb-16"
        style={{ background: 'linear-gradient(to bottom, white, rgba(43,97,107,0.16) 24%, rgba(43,97,107,0.16) 89%, white)' }}
      >
        <div className="max-w-[1400px] mx-auto">
        <div className="mb-10 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6">
          <div>
            <p className="eyebrow mb-4">Ce que je propose</p>
            <TypewriterHeading
              className="text-brand-deep leading-[0.9] -ml-1"
              style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)' }}
              segments={[
                { text: 'Mes ' },
                { text: 'services.', className: 'text-brand-mid' },
              ]}
            />
          </div>
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-poppins text-[11px] uppercase tracking-[0.12em] text-brand-deep/60 hover:text-brand-deep transition-colors shrink-0"
          >
            Découvrir <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-3 sm:grid-flow-col gap-3 sm:gap-4">
          {[
            { num: '01', title: 'Branding & Identité Visuelle', desc: 'Une image de marque forte, cohérente et immédiatement reconnaissable.', anchor: 'branding' },
            { num: '02', title: 'Stratégie de Communication', desc: 'Une direction claire pour que chaque action de communication serve un objectif précis.', anchor: 'strategie' },
            { num: '03', title: 'Création de Contenu', desc: "Des vidéos qui captent l'attention et racontent ton histoire.", anchor: 'contenu-video' },
            { num: '04', title: 'Community Management', desc: "Je gère tes réseaux pour que ta communauté grandisse sans que tu t'en occupes.", anchor: 'community-management' },
            { num: '05', title: 'Création de Site Web', desc: 'Un site moderne, rapide et pensé pour convertir tes visiteurs en clients.', anchor: 'site-web' },
            { num: '06', title: 'SEO & Visibilité en ligne', desc: 'Être trouvé sur Google par les bonnes personnes, au bon moment.', anchor: 'seo' },
          ].map(({ num, title, desc, anchor }) => (
            <div
              key={anchor}
              className="flex items-center gap-6 rounded-2xl bg-white px-6 py-5 shadow-sm min-w-0"
            >
              <div className="flex items-baseline gap-8 min-w-0 w-full">
                <span
                  className="text-brand-mid uppercase tracking-[0.15em] font-poppins font-medium inline-block shrink-0"
                  style={{ fontSize: 'clamp(11px, 1.1vw, 14px)', minWidth: 32 }}
                >
                  {num}
                </span>
                <div className="min-w-0">
                  <h3
                    className="text-brand-deep leading-tight"
                    style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontSize: 'clamp(18px, 2vw, 26px)' }}
                  >
                    {title}
                  </h3>
                  <p className="font-poppins text-[13px] text-brand-deep/50 mt-1 truncate">{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10 md:hidden">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-brand-deep text-brand-cream font-poppins text-[12px] uppercase tracking-[0.12em] px-8 py-4 rounded-full hover:opacity-80 transition-opacity"
          >
            Découvrir mes services
          </Link>
        </div>
        </div>
      </section>
      </SectionReveal>

      {/* ── CONTENU ── */}
      <SectionReveal>
      <section className="px-8 md:px-20 pt-24 pb-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-16 flex flex-col sm:flex-row sm:items-end justify-between gap-3 sm:gap-6">
            <div>
              <p className="eyebrow mb-4">Création de contenu</p>
              <TypewriterHeading
                className="text-brand-deep leading-[0.9] -ml-1"
                style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)' }}
                segments={[
                  { text: 'Un aperçu de mon ' },
                  { text: 'contenu.', className: 'text-brand-mid' },
                ]}
              />
            </div>
            <Link
              href="/creation-de-contenu"
              className="inline-flex items-center gap-2 font-poppins text-[11px] uppercase tracking-[0.12em] text-brand-deep/60 hover:text-brand-deep transition-colors shrink-0"
            >
              Tous les contenus <span aria-hidden>→</span>
            </Link>
          </div>
        </div>

        <div className="-mx-8 md:-mx-20 px-5 md:px-10">
          <FeaturedContent />
        </div>

        <div className="flex justify-center mt-10 md:hidden">
          <Link
            href="/creation-de-contenu"
            className="inline-flex items-center gap-2 bg-brand-deep text-brand-cream font-poppins text-[12px] uppercase tracking-[0.12em] px-8 py-4 rounded-full hover:opacity-80 transition-opacity"
          >
            Voir tout le contenu
          </Link>
        </div>
      </section>
      </SectionReveal>

      {/* ── FAQ ── */}
      <SectionReveal>
      <section
        className="px-8 md:px-20 pt-24 pb-24"
        style={{ background: 'linear-gradient(to bottom, white, rgba(43,97,107,0.16) 14%, rgba(43,97,107,0.16) 89%, white)' }}
      >
        <div className="max-w-[1400px] mx-auto">
          <div className="mb-10">
            <p className="eyebrow mb-4">Questions fréquentes</p>
            <TypewriterHeading
              className="text-brand-deep leading-[0.9] -ml-1"
              style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)' }}
              segments={[
                { text: 'Des ' },
                { text: 'questions ?', className: 'text-brand-mid' },
              ]}
            />
          </div>

          <FAQAccordion />

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 mt-5">
            <p className="font-poppins text-[14px] text-brand-deep/60 sm:whitespace-nowrap">
              Une autre question ? Je réponds avec plaisir, écris-moi directement.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-brand-deep text-brand-cream font-poppins text-[12px] uppercase tracking-[0.12em] px-8 py-4 rounded-full hover:opacity-80 transition-opacity shrink-0"
            >
              Me contacter
            </Link>
          </div>
        </div>
      </section>
      </SectionReveal>

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
              className="text-brand-deep leading-[1.05] block"
              style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontSize: 'clamp(30px, 4vw, 50px)', minHeight: '2.1em' }}
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
