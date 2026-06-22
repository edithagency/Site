'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import type { ClientMedia } from '@/data/clients'

interface Props {
  media: ClientMedia[]
  beforeImage?: string
  afterImage?: string
  beforeAfterAspect?: '16/9' | '4/5'
}

function getYoutubeId(url: string): string | null {
  return url.match(/\/embed\/([^?]+)/)?.[1] ?? null
}

function VideoCard({ item, index }: { item: ClientMedia; index: number }) {
  const [playing, setPlaying] = useState(false)
  const youtubeId = item.youtubeId || (item.src ? null : null)
  const thumbUrl = item.youtubeId
    ? `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg`
    : null

  return (
    <motion.div
      className="relative overflow-hidden bg-brand-deep/15 cursor-pointer"
      style={{ aspectRatio: '9/16' }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {item.kind === 'photo' && item.src ? (
        <Image
          src={item.src}
          alt={item.label}
          fill
          className="object-cover"
        />
      ) : item.src && item.src.startsWith('/') ? (
        <video
          src={item.src}
          className="absolute inset-0 w-full h-full object-cover"
          controls
          playsInline
        />
      ) : playing && item.youtubeId ? (
        <iframe
          src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&autoplay=1&controls=1&modestbranding=1`}
          className="absolute inset-0 w-full h-full"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={item.label}
        />
      ) : (
        <div
          className="absolute inset-0"
          onClick={() => item.youtubeId && setPlaying(true)}
        >
          {thumbUrl && (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={thumbUrl}
              alt={item.label}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
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
        </div>
      )}
    </motion.div>
  )
}

function VideoPlaceholder() {
  return (
    <div
      className="relative bg-brand-deep/8 border border-brand-deep/10"
      style={{ aspectRatio: '9/16' }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-10 h-10 rounded-full border border-brand-deep/15 flex items-center justify-center">
          <span className="text-brand-deep/20 text-base">▶</span>
        </div>
      </div>
    </div>
  )
}

export default function ShowcaseSection({ media, beforeImage, afterImage, beforeAfterAspect }: Props) {
  const hasBeforeAfter = !!(beforeImage && afterImage)
  const allVideos = media.filter((m) => m.kind === 'video' || m.src)
  const videos = allVideos.slice(0, hasBeforeAfter ? 2 : 4)
  const videoGridRef = useRef<HTMLDivElement>(null)
  const [videoGridHeight, setVideoGridHeight] = useState<number>()

  /* Mesure la hauteur réelle du bloc vidéos pour caler le slider avant/après dessus */
  useEffect(() => {
    const el = videoGridRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => setVideoGridHeight(entry.contentRect.height))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  if (videos.length === 0 && !hasBeforeAfter) return null

  if (!hasBeforeAfter) {
    return (
      <section className="px-6 md:px-16 pt-6 pb-32">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
          {videos.map((item, i) => (
            <VideoCard key={i} item={item} index={i} />
          ))}
          {videos.length < 4 && Array.from({ length: 4 - videos.length }).map((_, i) => (
            <VideoPlaceholder key={`placeholder-${i}`} />
          ))}
        </div>
      </section>
    )
  }

  return (
    <section className="px-6 md:px-16 pt-20 pb-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">

        {/* Gauche — 2 vidéos côte à côte */}
        <div ref={videoGridRef} className="grid grid-cols-2 gap-3">
          {videos.map((item, i) => (
            <VideoCard key={i} item={item} index={i} />
          ))}
          {/* Placeholders si moins de 2 vidéos */}
          {videos.length < 2 && Array.from({ length: 2 - videos.length }).map((_, i) => (
            <VideoPlaceholder key={`placeholder-${i}`} />
          ))}
        </div>

        {/* Droite — slider avant/après */}
        <div className="flex flex-col justify-center h-full">
          <BeforeAfterSlider
            beforeImage={beforeImage}
            afterImage={afterImage}
            aspect={beforeAfterAspect}
            maxHeight={videoGridHeight}
          />
        </div>

      </div>
    </section>
  )
}
