import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { clients } from '@/data/clients'
import ClientMediaSection from '@/components/ClientMediaSection'
import RelatedProjectsCarousel from '@/components/RelatedProjectsCarousel'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const client = clients.find((c) => c.slug === params.slug)
  if (!client) return {}
  return {
    title: `${client.name} — Edith Agency Bordeaux`,
    description: client.description,
  }
}

function MacBookMockup({ image }: { image?: string }) {
  return (
    <div className="screen-mockup" style={{ width: '100%', maxWidth: 540 }}>
      {/* Cadre écran uniquement */}
      <div style={{
        background: '#1a1a1a',
        borderRadius: 16,
        padding: '10px 10px 8px',
        boxShadow: '0 0 0 1.5px rgba(255,255,255,0.08), 0 24px 60px rgba(0,0,0,0.35)',
      }}>
        {/* Encoche caméra */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 7 }}>
          <div style={{ width: 7, height: 7, borderRadius: '50%', background: '#2e2e2e', boxShadow: '0 0 0 1px rgba(255,255,255,0.05)' }} />
        </div>
        {/* Zone écran — overflow:hidden masque le défilement */}
        <div style={{
          borderRadius: 8,
          overflow: 'hidden',
          aspectRatio: '16/10',
          position: 'relative',
          background: '#0a0a0a',
        }}>
          {image ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={image}
              alt="Site Itinéraire sur Mesure"
              className="screen-content"
              style={{ width: '100%', display: 'block', position: 'absolute', top: 0, left: 0 }}
            />
          ) : (
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(160deg, #1a2e32, #2b616b)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: 'var(--font-body)', fontSize: 8, color: 'rgba(231,227,221,0.3)', letterSpacing: '0.15em', textTransform: 'uppercase', textAlign: 'center' }}>
                Capture à intégrer
              </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

function IPhoneMockup({ image, alt }: { image: string; alt: string }) {
  return (
    <div className="phone-mockup" style={{ display: 'inline-block' }}>
      <div style={{
        position: 'relative',
        width: 268,
        height: 546,
        background: '#1c1c1e',
        borderRadius: 54,
        padding: 10,
        boxShadow: '0 36px 90px rgba(43,97,107,0.22), 0 0 0 1px rgba(255,255,255,0.07)',
      }}>

        {/* Volume up */}
        <div style={{ position: 'absolute', left: -5, top: 121, width: 5, height: 35, background: '#3a3a3c', borderRadius: '4px 0 0 4px' }} />
        {/* Volume down */}
        <div style={{ position: 'absolute', left: -5, top: 172, width: 5, height: 35, background: '#3a3a3c', borderRadius: '4px 0 0 4px' }} />
        {/* Power / sleep */}
        <div style={{ position: 'absolute', right: -5, top: 147, width: 5, height: 61, background: '#3a3a3c', borderRadius: '0 4px 4px 0' }} />

        {/* Screen */}
        <div style={{ width: '100%', height: '100%', borderRadius: 44, overflow: 'hidden', background: '#000', position: 'relative' }}>

          {/* Dynamic Island */}
          <div style={{
            position: 'absolute', top: 15, left: '50%',
            transform: 'translateX(-50%)',
            width: 98, height: 26,
            background: '#1c1c1e',
            borderRadius: 13,
            zIndex: 10,
          }} />

          {/* ↓ Photo affichée dans le téléphone — remplacer "image" (prop) par n'importe quelle image du client */}
          <div style={{ position: 'absolute', inset: 0 }}>
            <Image
              src={image}
              alt={alt}
              fill
              sizes="268px"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default function ClientPage({ params }: Props) {
  const client = clients.find((c) => c.slug === params.slug)
  if (!client) notFound()

  const others = clients.filter((c) => c.slug !== client.slug)

  return (
    <>
      {/* ── HEADER ── */}
      <section className="pt-40 pb-16 px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="md:pl-16">
            <p className="eyebrow mb-4">
              {client.category}
              {client.location ? ` — ${client.location}` : ''} · {client.year}
            </p>
            <div className="flex items-center gap-10">
              <h1
                className="font-display font-black text-brand-deep leading-[0.9]"
                style={{ fontSize: 'clamp(40px, 6vw, 72px)' }}
              >
                {client.name}
              </h1>
              {client.profileImage && (
                <div className="relative w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden flex-shrink-0 ml-auto">
                  <Image src={client.profileImage} alt={`${client.name} — profil`} fill sizes="128px" priority className="object-cover crisp-image" />
                </div>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-2 md:justify-end">
            {client.tags.map((tag) => (
              <span key={tag} className="pill">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ── BANNIÈRE (si disponible) ── */}
      {client.bannerImage && (
        <section className="px-8 mb-4">
          <div className="relative w-full h-[220px] md:h-[300px] rounded-2xl overflow-hidden">
            <Image
              src={client.bannerImage}
              alt={`${client.name} — bannière`}
              fill
              className="object-cover"
              priority
            />
          </div>
        </section>
      )}

      {/* ── DEUX COLONNES : texte | iPhone — Prod Daiki uniquement ── */}
      {client.hideSlider && (
        <section className="px-8 pt-12 pb-2 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Colonne gauche */}
          <div className="flex flex-col gap-12 md:pl-16">
            <div>
              <p className="eyebrow mb-5">Le projet</p>
              <p className="font-body font-light text-brand-deep/80 text-[17px] leading-relaxed">
                {client.description}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-5">{client.ongoing ? 'Ce que je fais' : 'Ce que j\'ai fait'}</p>
              <ul className="divide-y divide-brand-deep/10">
                {client.objectives.map((obj) => {
                  const spaceIdx = obj.indexOf(' ')
                  const emoji = spaceIdx > 0 ? obj.slice(0, spaceIdx) : null
                  const text = spaceIdx > 0 ? obj.slice(spaceIdx + 1) : obj
                  return (
                    <li key={obj} className="py-3" style={{ display: 'grid', gridTemplateColumns: '1.5rem 1fr', gap: '0.5rem', alignItems: 'start' }}>
                      <span className="font-body text-[15px] leading-relaxed">{emoji ?? ''}</span>
                      <span className="font-body text-[15px] text-brand-deep/80 leading-relaxed">{text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Colonne droite — mockup iPhone */}
          <div className="flex flex-col items-center gap-5 order-first md:order-last py-8 md:py-0">
            <IPhoneMockup image={client.phoneImage ?? client.coverImage} alt={client.name} />
            {client.discovery && (
              <a
                href={client.discovery.url || '#'}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-brand-deep/30 text-brand-deep font-body text-[11px] uppercase tracking-[0.12em] px-4 py-2 rounded-full hover:border-brand-deep transition-colors"
              >
                {client.discovery.label}
                {client.discovery.icon === 'instagram' && (
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                    <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8"/>
                    <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                  </svg>
                )}
              </a>
            )}
          </div>
        </section>
      )}

      {/* ── LAYOUT ÉDITORIAL : texte (40%) | vidéo + photo en quinconce (60%) ── */}
      {!client.hideSlider && (
        <section className={`px-8 pt-12 pb-2 grid grid-cols-1 gap-10 md:gap-14 ${client.macbook ? 'md:grid-cols-2 items-center' : 'md:grid-cols-[2fr_3fr] items-start'}`}>

          {/* Colonne gauche — texte */}
          <div className="flex flex-col gap-10 md:pl-16">
            <div>
              <p className="eyebrow mb-4">Le projet</p>
              <p className="font-body font-light text-brand-deep/80 text-[17px] leading-relaxed">
                {client.description}
              </p>
            </div>
            <div>
              <p className="eyebrow mb-4">{client.ongoing ? 'Ce que je fais' : 'Ce que j\'ai fait'}</p>
              <ul className="divide-y divide-brand-deep/10">
                {client.objectives.map((obj) => {
                  const spaceIdx = obj.indexOf(' ')
                  const emoji = spaceIdx > 0 ? obj.slice(0, spaceIdx) : null
                  const text = spaceIdx > 0 ? obj.slice(spaceIdx + 1) : obj
                  return (
                    <li key={obj} className="py-3" style={{ display: 'grid', gridTemplateColumns: '1.5rem 1fr', gap: '0.5rem', alignItems: 'start' }}>
                      <span className="font-body text-[15px] leading-relaxed">{emoji ?? ''}</span>
                      <span className="font-body text-[15px] text-brand-deep/80 leading-relaxed">{text}</span>
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Colonne droite — MacBook (si macbook:true) ou vidéo+photo en quinconce */}
          {client.macbook ? (
            <div className="flex flex-col items-center gap-5">
              <MacBookMockup image={client.macbookImage} />
              {client.discovery && (
                <a
                  href={client.discovery.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-brand-deep/30 text-brand-deep font-body text-[11px] uppercase tracking-[0.12em] px-4 py-2 rounded-full hover:border-brand-deep transition-colors"
                >
                  {client.discovery.label}
                  {client.discovery.icon === 'instagram' && (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8"/>
                      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                    </svg>
                  )}
                </a>
              )}
            </div>
          ) : (
            <div className="flex flex-col gap-4">
              <div className="flex flex-col md:flex-row gap-4 md:items-start">

                {/* Vidéo 9:16 */}
                <div
                  className="flex-1 rounded-xl overflow-hidden relative bg-brand-deep/10 shadow-sm"
                  style={{ aspectRatio: '9/16' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div style={{ width: 52, height: 52, borderRadius: '50%', background: '#f4db75', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 18px rgba(0,0,0,0.25)', opacity: 0.45 }}>
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                        <path d="M5 3.5l9 5-9 5V3.5z" fill="#2b616b" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Photo 4:5 — décalée vers le bas sur desktop */}
                <div
                  className="flex-1 rounded-xl overflow-hidden relative bg-brand-deep/10 shadow-sm md:mt-14"
                  style={{ aspectRatio: '4/5' }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="font-body text-[8px] text-brand-deep/25 uppercase tracking-[0.18em]">
                      Photo à intégrer
                    </span>
                  </div>
                </div>

              </div>
              {client.discovery && (
                <a
                  href={client.discovery.url || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 self-center border border-brand-deep/30 text-brand-deep font-body text-[11px] uppercase tracking-[0.12em] px-4 py-2 rounded-full hover:border-brand-deep transition-colors"
                >
                  {client.discovery.label}
                  {client.discovery.icon === 'instagram' && (
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none">
                      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8"/>
                      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
                      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
                    </svg>
                  )}
                </a>
              )}
            </div>
          )}
        </section>
      )}

      {/* ── GALERIE SECONDAIRE ── */}
      {!client.hideGallery && client.gallery.length > 0 && (
        <section className="px-8 py-12">
          <div className="flex gap-5 items-start overflow-hidden">
            {client.gallery.map((_, i) => (
              <div
                key={i}
                className="bg-brand-deep/15 rounded-xl flex-1"
                style={{
                  height: i % 2 === 0 ? '340px' : '280px',
                  transform: `rotate(${i % 2 === 0 ? '1.5deg' : '-1deg'})`,
                  flexBasis: i % 2 === 0 ? '55%' : '40%',
                }}
              />
            ))}
          </div>
        </section>
      )}

      {/* ── SECTION MÉDIAS ── */}
      {client.media && client.media.length > 0 && (
        <ClientMediaSection media={client.media} className={client.slug === 'itineraire-sur-mesure' ? 'mt-12' : ''} />
      )}

      {/* ── AUTRES PROJETS ── */}
      {others.length > 0 && (
        <section className="px-8 py-20 border-t border-brand-deep/10">
          <p className="eyebrow mb-10">Autres projets</p>
          <RelatedProjectsCarousel clients={others} />
        </section>
      )}

      {/* ── CTAs ── */}
      <section className="px-8 py-16 flex flex-col sm:flex-row gap-4 border-t border-brand-deep/10">
        <Link
          href="/projets"
          className="inline-flex items-center gap-2 border border-brand-deep text-brand-deep font-body text-[11px] uppercase tracking-[0.12em] px-6 py-3 rounded-full hover:bg-brand-deep hover:text-brand-cream transition-colors"
        >
          ← Tous les projets
        </Link>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-brand-yellow text-brand-deep font-body text-[11px] uppercase tracking-[0.12em] px-6 py-3 rounded-full hover:opacity-80 transition-opacity"
        >
          Démarrer un projet
        </Link>
      </section>
    </>
  )
}
