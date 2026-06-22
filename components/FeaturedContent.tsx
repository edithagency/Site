'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { ugcItems } from '@/data/ugc'

const FEATURED_IDS = ['burga', 'luxeol', 'canope', 'prod-daiki', 'senza-nome', 'burga-2']

function getYoutubeId(url: string): string | null {
  return url.match(/\/embed\/([^?]+)/)?.[1] ?? null
}

export default function FeaturedContent() {
  const [playingIds, setPlayingIds] = useState<Set<string>>(new Set())

  const items = FEATURED_IDS.map((id) => ugcItems.find((item) => item.id === id)).filter(
    (item): item is NonNullable<typeof item> => Boolean(item)
  )

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 items-start">
      {items.map((item, i) => {
        const youtubeId = item.videoUrl ? getYoutubeId(item.videoUrl) : null
        const offset = i % 3 === 1 ? 28 : i % 3 === 2 ? 14 : 0
        const isPlaying = playingIds.has(item.id)

        return (
          <div key={item.id} className="group" style={{ marginTop: offset }}>
            <div
              className="relative overflow-hidden bg-brand-deep/10"
              style={{ aspectRatio: '9/16' }}
            >
              {youtubeId ? (
                isPlaying ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${youtubeId}?rel=0&autoplay=1&controls=1&modestbranding=1`}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    title={item.brand}
                  />
                ) : (
                  <div
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setPlayingIds((prev) => new Set(prev).add(item.id))}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`}
                      alt={item.brand}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="relative flex items-center justify-center">
                        <div className="w-10 h-10 rounded-full border border-brand-yellow/60" />
                        <div className="absolute w-7 h-7 rounded-full bg-brand-yellow flex items-center justify-center">
                          <svg width="9" height="10" viewBox="0 0 12 14" fill="none">
                            <path d="M1 1.5L11 7L1 12.5V1.5Z" fill="#2b616b" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              ) : item.thumbnail ? (
                <Image
                  src={item.thumbnail}
                  alt={item.brand}
                  fill
                  sizes="(max-width: 768px) 50vw, 16vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              ) : null}
            </div>
            <p className="eyebrow mt-2 mb-0.5">{item.category}</p>
            <Link
              href={`/creation-de-contenu#${item.id}`}
              className="text-brand-deep text-[15px] leading-tight hover:text-brand-mid transition-colors truncate block"
              style={{ fontFamily: "'The Seasons', serif", fontWeight: 700 }}
            >
              {item.brand}
            </Link>
          </div>
        )
      })}
    </div>
  )
}
