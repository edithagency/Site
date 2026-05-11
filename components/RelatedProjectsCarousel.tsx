'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Client } from '@/data/clients'

interface Props {
  clients: Client[]
}

export default function RelatedProjectsCarousel({ clients }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)
  const [canLeft, setCanLeft] = useState(false)
  const [canRight, setCanRight] = useState(false)

  const updateArrows = useCallback(() => {
    const el = scrollRef.current
    if (!el) return
    setCanLeft(el.scrollLeft > 4)
    setCanRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 4)
  }, [])

  useEffect(() => {
    updateArrows()
    window.addEventListener('resize', updateArrows)
    return () => window.removeEventListener('resize', updateArrows)
  }, [updateArrows])

  function scroll(dir: 'left' | 'right') {
    const el = scrollRef.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const amount = card ? card.offsetWidth + 16 : el.clientWidth * 0.85
    el.scrollBy({ left: dir === 'right' ? amount : -amount, behavior: 'smooth' })
  }

  const btnCls = (active: boolean) =>
    `absolute top-[42%] -translate-y-1/2 z-10 w-10 h-10 rounded-full border flex items-center justify-center text-sm transition-all duration-200 ${
      active
        ? 'border-brand-deep text-brand-deep hover:bg-brand-deep hover:text-brand-cream'
        : 'border-brand-deep/15 text-brand-deep/15 cursor-not-allowed'
    }`

  return (
    <div className="relative">
      <button
        onClick={() => scroll('left')}
        disabled={!canLeft}
        aria-label="Précédent"
        className={`${btnCls(canLeft)} -left-5`}
      >
        ←
      </button>

      <div
        ref={scrollRef}
        onScroll={updateArrows}
        className="flex gap-4 overflow-x-auto no-scrollbar"
      >
        {clients.map((client) => (
          <Link
            key={client.slug}
            href={`/projets/${client.slug}`}
            className="group flex-shrink-0 w-4/5 sm:w-[calc(50%_-_8px)] lg:w-[calc(25%_-_12px)]"
          >
            <div
              className="relative overflow-hidden rounded-xl bg-brand-deep mb-3"
              style={{ aspectRatio: '16/9' }}
            >
              {client.cardImage ? (
                <Image
                  src={client.cardImage}
                  alt={client.name}
                  fill
                  sizes="(max-width: 640px) 80vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover crisp-image"
                  quality={100}
                />
              ) : (
                <div className="absolute inset-0 bg-brand-mid/50" />
              )}
              <div className="absolute inset-0 bg-brand-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-lg">→</span>
              </div>
            </div>
            <p className="eyebrow mb-1">{client.category}</p>
            <p className="font-display font-bold text-brand-deep text-base group-hover:text-brand-mid transition-colors">
              {client.name}
            </p>
          </Link>
        ))}
      </div>

      <button
        onClick={() => scroll('right')}
        disabled={!canRight}
        aria-label="Suivant"
        className={`${btnCls(canRight)} -right-5`}
      >
        →
      </button>
    </div>
  )
}
