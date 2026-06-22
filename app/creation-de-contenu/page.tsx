'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ugcItems, ugcCategories, type UGCItem } from '@/data/ugc'
import { mapPlaces, type MapPlace } from '@/data/mapPlaces'
import { clients } from '@/data/clients'
import PageHero from '@/components/PageHero'
import ClientsLoopSlider from '@/components/ClientsLoopSlider'

type GridItem =
  | { kind: 'real'; data: UGCItem }
  | { kind: 'placeholder'; data: MapPlace }

function getYoutubeId(url: string): string | null {
  return url.match(/\/embed\/([^?]+)/)?.[1] ?? null
}

export default function CreationDeContenuPage() {
  const [activeCategory, setActiveCategory] = useState<string>('Tout')
  const [playingIds, setPlayingIds] = useState<Set<string>>(new Set())

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash) return
    setTimeout(() => {
      const el = document.getElementById(hash)
      if (!el) return
      el.scrollIntoView({ behavior: 'smooth', block: 'center' })
      el.classList.add('highlight')
      setTimeout(() => el.classList.remove('highlight'), 1500)
    }, 300)
  }, [])
  const CLIENT_SLUGS: Record<string, string> = {
    'les-bucherons':         'bucherons-barber',
    'les-bucherons-2':       'bucherons-barber',
    'les-bucherons-3':       'bucherons-barber',
    'prod-daiki':            'prod-daiki',
    'prod-daiki-2':          'prod-daiki',
    'librairie-de-florence': 'librairie-de-florence',
    'itineraire-sur-mesure': 'itineraire-sur-mesure',
  }

  const categories = ['Tout', ...ugcCategories]

  // Placeholders = mapPlaces items not yet replaced by a real ugcItem
  const realIds = new Set(ugcItems.map((i) => i.id))
  const allItems: GridItem[] = [
    ...ugcItems.map((data) => ({ kind: 'real' as const, data })),
    ...mapPlaces
      .filter((place) => !realIds.has(place.anchor))
      .map((data) => ({ kind: 'placeholder' as const, data })),
  ]

  const filtered: GridItem[] =
    activeCategory === 'Tout'
      ? allItems
      : allItems.filter((gi) => gi.data.category === activeCategory)

  return (
    <>
      <PageHero
        backgroundVideo="/videos/services-hero.mp4"
        overlayOpacity={25}
        title="Création de contenu"
        titleFontSize="clamp(30px, 4.8vw, 74px)"
        taglineBelow="Des contenus qui prennent le large et captent l'attention."
      />

      {/* Filtres */}
      <section className="px-8 pt-24 pb-12">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`font-poppins text-[11px] uppercase tracking-[0.12em] px-4 py-2 rounded-full border transition-colors duration-200 ${
                activeCategory === cat
                  ? 'bg-brand-deep text-brand-cream border-brand-deep'
                  : 'border-brand-deep/30 text-brand-deep/60 hover:border-brand-deep hover:text-brand-deep'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Grille unifiée */}
      <section id="contenus" className="px-8 pb-32">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 items-start">
          {filtered.map((gi, i) => {
            const offset = i % 3 === 1 ? 28 : i % 3 === 2 ? 14 : 0

            if (gi.kind === 'real') {
              const item = gi.data
              return (
                <motion.div
                  id={item.id}
                  key={item.id}
                  className="group"
                  style={{ marginTop: offset }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.06 }}
                >
                  <p className="eyebrow mb-2">{item.category}</p>

                  <motion.div
                    className="relative overflow-hidden bg-brand-deep/15 cursor-pointer"
                    style={{ aspectRatio: '9/16' }}
                    whileHover={{ scale: 1.04 }}
                    transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                  >
{/* Vidéo ou thumbnail */}
                    {item.videoUrl ? (
                      item.videoUrl.startsWith('/') ? (
                        <video
                          src={item.videoUrl}
                          className="absolute inset-0 w-full h-full object-cover"
                          controls
                          playsInline
                        />
                      ) : playingIds.has(item.id) ? (
                        <iframe
                          src={`https://www.youtube.com/embed/${getYoutubeId(item.videoUrl)}?rel=0&autoplay=1&controls=1&modestbranding=1`}
                          className="absolute inset-0 w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          title={item.brand}
                        />
                      ) : (
                        /* Lecteur custom — clic lance la vidéo sans redirection YouTube */
                        <div
                          className="absolute inset-0 cursor-pointer"
                          onClick={() => setPlayingIds(prev => new Set(prev).add(item.id))}
                        >
                          {getYoutubeId(item.videoUrl) && (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={`https://img.youtube.com/vi/${getYoutubeId(item.videoUrl)}/maxresdefault.jpg`}
                              alt={item.brand}
                              className="absolute inset-0 w-full h-full object-cover"
                            />
                          )}
                          <div className="absolute inset-0 flex items-center justify-center">
                            <motion.div
                              className="relative flex items-center justify-center"
                              whileHover={{ scale: 1.08 }}
                              transition={{ duration: 0.25 }}
                            >
                              {/* Anneau fin */}
                              <div className="w-16 h-16 rounded-full border border-brand-yellow/60" />
                              {/* Cercle plein jaune plus petit */}
                              <div className="absolute w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center">
                                <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                                  <path d="M1 1.5L11 7L1 12.5V1.5Z" fill="#2b616b" />
                                </svg>
                              </div>
                            </motion.div>
                          </div>
                        </div>
                      )
                    ) : item.thumbnail ? (
                      <Image
                        src={item.thumbnail}
                        alt={item.brand}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="relative flex items-center justify-center"
                          whileHover={{ scale: 1.08 }}
                          transition={{ duration: 0.25 }}
                        >
                          <div className="w-16 h-16 rounded-full border border-brand-yellow/60" />
                          <div className="absolute w-10 h-10 rounded-full bg-brand-yellow flex items-center justify-center">
                            <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
                              <path d="M1 1.5L11 7L1 12.5V1.5Z" fill="#2b616b" />
                            </svg>
                          </div>
                        </motion.div>
                      </div>
                    )}

                    {!item.videoUrl && <div className="absolute inset-0 bg-brand-deep/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />}
                  </motion.div>

                  <div className="flex items-center gap-2 mt-2 flex-wrap">
                    <p className="text-brand-deep text-[1.1rem]" style={{ fontFamily: "'The Seasons', serif", fontWeight: 400 }}>{item.brand}</p>
                    {CLIENT_SLUGS[item.id] && (
                      <Link href={`/projets/${CLIENT_SLUGS[item.id]}`} className="text-brand-deep/30 hover:text-brand-deep/70 transition-colors flex-shrink-0">
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><line x1="0" y1="5" x2="12" y2="5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M9 1.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                      </Link>
                    )}
                  </div>
                  {item.description && (
                    <p className="font-poppins text-[11px] text-brand-mid mt-0.5 leading-relaxed">{item.description}</p>
                  )}
                </motion.div>
              )
            }

            /* ── Placeholder ── */
            const place = gi.data
            const isVideo = place.type === 'vidéo'
            return (
              <motion.div
                id={place.anchor}
                key={place.anchor}
                className="group"
                style={{ marginTop: offset }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
              >
                <p className="eyebrow mb-2">{place.category}</p>

                <div
                  className="relative overflow-hidden bg-brand-deep/8 border border-brand-deep/10"
                  style={{ aspectRatio: '9/16' }}
                >
                  {/* Badge type */}
                  <div className="absolute top-3 left-3 z-10">
                    <span
                      className="font-poppins text-[8px] uppercase tracking-[0.18em] px-2 py-1 rounded-full"
                      style={
                        isVideo
                          ? { background: 'rgba(102,162,173,0.18)', color: '#66a2ad' }
                          : { background: 'rgba(255,255,255,0.1)', color: 'rgba(43,97,107,0.45)' }
                      }
                    >
                      {place.type}
                    </span>
                  </div>

                  {/* Icône + label */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-4">
                    <div className="w-10 h-10 rounded-full border border-brand-deep/15 flex items-center justify-center mb-1">
                      <span className="text-brand-deep/25 text-base">
                        {isVideo ? '▶' : '◻'}
                      </span>
                    </div>
                    <p className="font-poppins text-[9px] text-brand-deep/25 uppercase tracking-[0.18em] text-center leading-relaxed">
                      Contenu à intégrer
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 mt-2 flex-wrap">
                  <p className="text-brand-deep text-[1.1rem] leading-tight" style={{ fontFamily: "'The Seasons', serif", fontWeight: 400 }}>{place.nom}</p>
                  {CLIENT_SLUGS[place.anchor] && (
                    <Link href={`/projets/${CLIENT_SLUGS[place.anchor]}`} className="text-brand-deep/30 hover:text-brand-deep/70 transition-colors flex-shrink-0">
                      <svg width="16" height="10" viewBox="0 0 16 10" fill="none"><line x1="0" y1="5" x2="12" y2="5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M9 1.5l4 3.5-4 3.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </Link>
                  )}
                </div>
                <p className="font-poppins text-[11px] text-brand-mid mt-0.5">{place.ville}</p>
              </motion.div>
            )
          })}
        </div>
      </section>

      {/* ── CLIENTS ── */}
      <ClientsLoopSlider clients={clients} className="bg-[#dde6e7]" fadeColor="#dde6e7" />
    </>
  )
}
