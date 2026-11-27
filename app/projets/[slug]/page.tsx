import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { clients } from '@/data/clients'
import PageHero from '@/components/PageHero'
import ObjectivesSlider from '@/components/ObjectivesSlider'
import SectionReveal from '@/components/SectionReveal'
import ClientsLoopSlider from '@/components/ClientsLoopSlider'
import ShowcaseSection from '@/components/ShowcaseSection'
import MissionsAccordion from '@/components/MissionsAccordion'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { SITE_URL } from '@/data/schema'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return clients.map((c) => ({ slug: c.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const client = clients.find((c) => c.slug === params.slug)
  if (!client) return {}
  const city = client.location?.split(',')[0]
  const title = `${client.name} — ${client.tags.join(', ')}${city ? ` à ${city}` : ''} | Sea More`
  const image = client.heroImage ?? client.coverImage
  const description = client.description.replace(/\u2028/g, ' ')
  return {
    title,
    description,
    alternates: { canonical: `/projets/${client.slug}` },
    openGraph: {
      title,
      description,
      siteName: 'Sea More Agency',
      locale: 'fr_FR',
      type: 'article',
      images: [image],
    },
  }
}


export default function ClientPage({ params }: Props) {
  const client = clients.find((c) => c.slug === params.slug)
  if (!client) notFound()

  const dotIdx = client.description.indexOf('.')
  const shortDesc = dotIdx > 0 ? client.description.slice(0, dotIdx + 1) : client.description


  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'BreadcrumbList',
          itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Accueil', item: SITE_URL },
            { '@type': 'ListItem', position: 2, name: 'Projets', item: `${SITE_URL}/projets` },
            { '@type': 'ListItem', position: 3, name: client.name, item: `${SITE_URL}/projets/${client.slug}` },
          ],
        }}
      />

      {/* ━━ SECTION 1 — HERO ━━ */}
      <PageHero
        backgroundImage={client.heroImage}
        leftImage={client.bannerImage ?? client.coverImage}
        rightImage={client.gallery[0] ?? client.coverImage}
        title={client.name}
        titleFontSize="clamp(28px, 4.8vw, 64px)"
        tags={client.missions ? undefined : client.tags}
        subtitle={client.missions ? undefined : `${client.location ? `${client.location} · ` : ''}${client.year}`}
        caption={client.missions ? undefined : shortDesc}
      />

      {client.missions ? (
        <>
          {/* ━━ LE PROJET ━━ */}
          <section className="max-w-[1300px] mx-auto px-6 md:px-8 pt-28 pb-28 md:pb-36 grid grid-cols-1 md:grid-cols-12 gap-10">
            <div className="md:col-span-7">
              <p className="eyebrow mb-6">Le projet</p>
              {(() => {
                const paras = client.description.split('\n')
                const lead = client.intro ?? paras[0]
                const body = client.intro ? paras : paras.slice(1)
                return (
                  <>
                    <p
                      className="text-brand-deep leading-snug mb-5"
                      style={{ fontFamily: "'The Seasons', serif", fontSize: 'clamp(20px, 2vw, 26px)' }}
                    >
                      {lead.split('\u2028').map((line, j) => (
                        <span key={j}>{j > 0 && <br />}{line}</span>
                      ))}
                    </p>
                    {body.map((para, i) => (
                      <p key={i} className="font-poppins text-[15px] leading-relaxed text-brand-deep/75 mb-4 max-w-[620px]">
                        {para.replace(/\u2028/g, ' ')}
                      </p>
                    ))}
                  </>
                )
              })()}
            </div>
            <dl className="md:col-span-4 md:col-start-9 self-end font-poppins text-[13px] text-brand-deep border-t border-brand-deep/15">
              {[
                ['Secteur', client.sector ?? client.category],
                ['Lieu', client.location],
                ['Collaboration', String(client.year).charAt(0).toUpperCase() + String(client.year).slice(1)],
              ].filter(([, v]) => v).map(([label, value]) => (
                <div key={label as string} className="flex justify-between gap-6 py-3 border-b border-brand-deep/15">
                  <dt className="eyebrow self-center">{label}</dt>
                  <dd className="text-right">{value}</dd>
                </div>
              ))}
            </dl>
          </section>

          {/* ━━ MISSIONS EN ACCORDÉON ━━ */}
          <MissionsAccordion missions={client.missions} />

          {/* ━━ VIDÉOS ━━ */}
          {client.media && client.media.some((m) => m.kind === 'video') && (
            <div className="pt-8 md:pt-12">
              <ShowcaseSection media={client.media.filter((m) => m.kind === 'video')} placeholders={false} />
            </div>
          )}

          {/* ━━ CLIENT PRÉCÉDENT / SUIVANT ━━ */}
          {(() => {
            const idx = clients.findIndex((c) => c.slug === client.slug)
            const prev = clients[(idx - 1 + clients.length) % clients.length]
            const next = clients[(idx + 1) % clients.length]
            return (
              <nav aria-label="Autres clients" className="max-w-[1300px] mx-auto px-6 md:px-8 pb-20 flex justify-between gap-6 font-poppins text-[12px] uppercase tracking-[0.15em] text-brand-deep">
                <Link href={`/projets/${prev.slug}`} className="group flex items-center gap-3 hover:text-brand-mid transition-colors">
                  <span aria-hidden className="transition-transform group-hover:-translate-x-1">←</span>
                  {prev.name}
                </Link>
                <Link href={`/projets/${next.slug}`} className="group flex items-center gap-3 hover:text-brand-mid transition-colors text-right">
                  {next.name}
                  <span aria-hidden className="transition-transform group-hover:translate-x-1">→</span>
                </Link>
              </nav>
            )
          })()}
        </>
      ) : (
        <>
      {/* ━━ SLIDER OBJECTIFS ━━ */}
      <SectionReveal>
        <ObjectivesSlider objectives={client.objectives} ongoing={client.ongoing} />
      </SectionReveal>

      {/* ━━ IMAGE PLEINE LARGEUR ━━ */}
      {client.fullWidthImage && (
        <div className="relative w-full" style={{ aspectRatio: '16/8', marginTop: -1 }}>
          <Image
            src={client.fullWidthImage}
            alt={`${client.name} — galerie`}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
      )}


      {/* ━━ SECTION SHOWCASE — VIDÉOS + AVANT/APRÈS ━━ */}
      {client.media && client.media.length > 0 && (
        <ShowcaseSection
          media={client.media}
          beforeImage={client.beforeImage}
          afterImage={client.afterImage}
          beforeAfterAspect={client.beforeAfterAspect}
        />
      )}

        </>
      )}

      {/* ━━ SLIDER CLIENTS EN BOUCLE ━━ */}
      <ClientsLoopSlider clients={clients} currentSlug={client.slug} className="bg-[#dde6e7]" fadeColor="#dde6e7" />
    </>
  )
}
