'use client'

import { useState } from 'react'
import Image from 'next/image'
import type { ClientMedia } from '@/data/clients'

/* Décalages verticaux individuels — aucun élément à la même hauteur */
const OFFSETS = [0, 55, 20, 70]

interface Props {
  media: ClientMedia[]
  className?: string
}

export default function ClientMediaSection({ media, className = '' }: Props) {
  const [playing, setPlaying] = useState<Set<number>>(new Set())

  function play(i: number) {
    setPlaying(prev => new Set(prev).add(i))
  }

  return (
    <section className={`px-8 pt-4 pb-16 ${className}`}>
      <p className="eyebrow mb-10 md:pl-16">Réalisations</p>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          flexWrap: 'wrap',
          gap: 20,
          alignItems: 'flex-start',
          paddingBottom: Math.max(...OFFSETS),
        }}
      >
        {media.map((item, i) => {
          const isVideo = item.kind === 'video'
          const isPlaying = playing.has(i)
          const shift = OFFSETS[i % OFFSETS.length]
          const overlapStyle = item.stackOver
            ? { marginLeft: -22, position: 'relative' as const, zIndex: 2 }
            : {}

          return (
            <div
              key={i}
              className="flex flex-col"
              style={{ flex: '1 1 0', minWidth: 0, marginTop: shift, ...overlapStyle }}
            >
              {/* ── Carte média ── */}
              <div
                className="rounded-xl overflow-hidden relative bg-brand-deep/10 shadow-sm"
                style={{ aspectRatio: item.aspect ?? (isVideo ? '9 / 16' : '4 / 5') }}
              >
                {isVideo ? (
                  isPlaying && item.youtubeId ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${item.youtubeId}?autoplay=1&rel=0&modestbranding=1&controls=1`}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      title={item.label || 'Vidéo'}
                      className="absolute inset-0 w-full h-full"
                      style={item.coverZoom ? { transform: `scale(${item.coverZoom})`, transformOrigin: 'center' } : undefined}
                    />
                  ) : (
                    <div
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => item.youtubeId && play(i)}
                    >
                      {item.youtubeId ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={`https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`}
                          alt={item.label || 'Vidéo'}
                          className="absolute inset-0 w-full h-full object-cover"
                          style={item.coverZoom ? { transform: `scale(${item.coverZoom})`, transformOrigin: 'center' } : undefined}
                        />
                      ) : (
                        /* Placeholder vidéo — remplacer youtubeId par le vrai ID YouTube */
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="font-poppins text-[8px] text-brand-deep/25 uppercase tracking-[0.18em] text-center px-2">
                            Vidéo à intégrer
                          </span>
                        </div>
                      )}
                      {/* Bouton play jaune */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div style={{
                          width: 52, height: 52,
                          borderRadius: '50%',
                          background: '#f4db75',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          boxShadow: '0 4px 18px rgba(0,0,0,0.25)',
                          opacity: item.youtubeId ? 1 : 0.35,
                        }}>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                            <path d="M5 3.5l9 5-9 5V3.5z" fill="#2b616b" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  )
                ) : (
                  item.src ? (
                    <Image
                      src={item.src}
                      alt={item.label || 'Photo'}
                      fill
                      sizes="(max-width: 640px) 42vw, 25vw"
                      className="object-cover"
                    />
                  ) : (
                    /* Placeholder photo — remplacer src par le chemin de la vraie photo */
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-poppins text-[8px] text-brand-deep/25 uppercase tracking-[0.18em] text-center px-2">
                        Photo à intégrer
                      </span>
                    </div>
                  )
                )}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
