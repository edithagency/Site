import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import { clients } from '@/data/clients'
import PageHero from '@/components/PageHero'
import ObjectivesSlider from '@/components/ObjectivesSlider'
import SectionReveal from '@/components/SectionReveal'
import ClientsLoopSlider from '@/components/ClientsLoopSlider'
import ShowcaseSection from '@/components/ShowcaseSection'

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
    title: `${client.name} — Sea More Agency Bordeaux`,
    description: client.description,
  }
}


export default function ClientPage({ params }: Props) {
  const client = clients.find((c) => c.slug === params.slug)
  if (!client) notFound()

  const dotIdx = client.description.indexOf('.')
  const shortDesc = dotIdx > 0 ? client.description.slice(0, dotIdx + 1) : client.description


  return (
    <>
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
