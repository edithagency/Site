import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { clients } from '@/data/clients'
import PageHero from '@/components/PageHero'
import ObjectivesSlider from '@/components/ObjectivesSlider'
import SectionReveal from '@/components/SectionReveal'
import ClientsLoopSlider from '@/components/ClientsLoopSlider'
import ShowcaseSection from '@/components/ShowcaseSection'
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
  return {
    title,
    description: client.description,
    alternates: { canonical: `/projets/${client.slug}` },
    openGraph: {
      title,
      description: client.description,
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
        tags={client.tags}
        subtitle={`${client.location ? `${client.location} · ` : ''}${client.year}`}
        caption={shortDesc}
      />

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

      {/* ━━ SLIDER CLIENTS EN BOUCLE ━━ */}
      <ClientsLoopSlider clients={clients} currentSlug={client.slug} className="bg-[#dde6e7]" fadeColor="#dde6e7" />
    </>
  )
}
