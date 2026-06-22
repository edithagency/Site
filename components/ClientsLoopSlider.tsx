'use client'

import { useRef, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import type { Client } from '@/data/clients'

interface Props {
  clients: Client[]
  currentSlug?: string
  className?: string
  fadeColor?: string
}

const CARD_W = 320
const GAP    = 20
const SPEED  = 0.6  // px par frame

export default function ClientsLoopSlider({ clients, currentSlug, className = '', fadeColor = '#e7e3dd' }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const posRef   = useRef(0)
  const rafRef   = useRef<number>(0)

  // Triple le tableau pour une boucle sans couture
  const items = [...clients, ...clients, ...clients]
  const totalW = clients.length * (CARD_W + GAP)

  useEffect(() => {
    // Démarre au milieu (2e copie) pour avoir de la marge des deux côtés
    posRef.current = totalW

    function tick() {
      posRef.current += SPEED
      // Quand on atteint la fin de la 2e copie, on revient au début de la 2e
      if (posRef.current >= totalW * 2) posRef.current -= totalW
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${-posRef.current}px)`
      }
      rafRef.current = requestAnimationFrame(tick)
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [totalW])

  return (
    <section className={`py-10 overflow-hidden border-t border-brand-deep/8 ${className}`}>
      <div className="px-8 md:px-20 mb-8">
        <p className="eyebrow mb-2">Autres projets</p>
        <h2
          className="text-brand-deep leading-none"
          style={{ fontFamily: "'The Seasons', serif", fontSize: 'clamp(28px, 3.5vw, 44px)', fontWeight: 400 }}
        >
          Ils m'ont fait confiance.
        </h2>
      </div>

      <div className="relative">
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: `linear-gradient(to right, ${fadeColor}, transparent)` }} />
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 pointer-events-none" style={{ background: `linear-gradient(to left, ${fadeColor}, transparent)` }} />

        <div
          ref={trackRef}
          className="flex"
          style={{ gap: GAP, willChange: 'transform' }}
        >
          {items.map((client, i) => (
            <Link
              key={`${client.slug}-${i}`}
              href={`/projets/${client.slug}`}
              className="group flex-shrink-0"
              style={{ width: CARD_W }}
              tabIndex={client.slug === currentSlug ? -1 : 0}
            >
              {/* Rectangle image — bords carrés */}
              <div
                className="relative overflow-hidden bg-brand-deep mb-3"
                style={{ width: CARD_W, height: 200 }}
              >
                {client.cardImage ? (
                  <Image
                    src={client.cardImage}
                    alt={client.name}
                    fill
                    sizes="320px"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    unoptimized
                  />
                ) : (
                  <div className="absolute inset-0 bg-brand-mid/50" />
                )}
                <div className="absolute inset-0 bg-brand-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {client.slug === currentSlug && (
                  <div className="absolute inset-0 bg-brand-deep/40 flex items-center justify-center">
                    <span className="font-poppins text-[10px] uppercase tracking-[0.2em] text-white">En cours</span>
                  </div>
                )}
              </div>

              <p className="eyebrow mb-1">{client.category}</p>
              <p
                className="text-brand-deep group-hover:text-brand-mid transition-colors"
                style={{ fontFamily: "'The Seasons', serif", fontWeight: 400, fontSize: 18 }}
              >
                {client.name}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
