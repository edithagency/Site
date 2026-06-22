'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import TypewriterHeading from './TypewriterHeading'
import type { Objective } from '@/data/clients'

interface Props {
  objectives: Objective[]
  ongoing?: boolean
}

const GAP     = 16
const TITLE_H = 60
const DESC_H  = 56
const MAX_H   = 460

function cardHeight(dist: number) {
  if (dist === 0) return MAX_H
  if (dist === 1) return 360
  if (dist === 2) return 280
  return 280
}

function cardBg(dist: number) {
  if (dist === 0) return 'linear-gradient(160deg, #2b616b 0%, #1c454e 100%)'
  if (dist === 1) return 'linear-gradient(160deg, #66a2ad 0%, #4a8591 100%)'
  return 'linear-gradient(160deg, #a8cdd4 0%, #87b5bc 100%)'
}

export default function ObjectivesSlider({ objectives, ongoing }: Props) {
  const n = objectives.length
  const triple = [...objectives, ...objectives, ...objectives]

  const [vActive, setVActive] = useState(n)
  const [animated, setAnimated] = useState(true)
  const [containerW, setContainerW] = useState(0)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!wrapperRef.current) return
    setContainerW(wrapperRef.current.offsetWidth)
    const obs = new ResizeObserver(([e]) => setContainerW(e.contentRect.width))
    obs.observe(wrapperRef.current)
    return () => obs.disconnect()
  }, [])

  function goNext() { setAnimated(true); setVActive(i => i + 1) }
  function goPrev() { setAnimated(true); setVActive(i => i - 1) }

  /* Boucle infinie : le glissement se joue normalement jusqu'au bout (transitionend),
     puis — seulement si on est sorti de la copie centrale du tableau triplé — on coupe
     la transition, on re-centre instantanément sur la copie du milieu (position visuelle
     identique, donc invisible à l'oeil), et on rétablit la transition une fois le nouveau
     positionnement peint. Évite tout flash, saut ou glissement parasite au retour au début. */
  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    function handleTransitionEnd(e: TransitionEvent) {
      if (e.target !== track || e.propertyName !== 'transform') return
      if (vActive < n || vActive >= 2 * n) {
        setAnimated(false)
        setVActive(v => (v >= 2 * n ? v - n : v + n))
        requestAnimationFrame(() => requestAnimationFrame(() => setAnimated(true)))
      }
    }

    track.addEventListener('transitionend', handleTransitionEnd)
    return () => track.removeEventListener('transitionend', handleTransitionEnd)
  }, [vActive, n])

  // Largeur des cartes : 1 carte sur mobile (petits aperçus des voisines), 5 cartes + 4 gaps au-delà
  const CARD_W  = containerW > 0
    ? containerW < 640
      ? Math.floor(containerW * 0.8)
      : Math.floor((containerW - 4 * GAP) / 5)
    : 280
  const slotH   = MAX_H + 12 + TITLE_H + DESC_H
  const trackOffset = containerW > 0
    ? containerW / 2 - vActive * (CARD_W + GAP) - CARD_W / 2
    : 0

  return (
    <section className="pt-16 md:pt-20 pb-6">

      <div className="px-8 md:px-16 mb-12">
        <p className="eyebrow mb-2">Mes missions</p>
        <TypewriterHeading
          className="text-brand-deep leading-[0.9]"
          style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)' }}
          segments={
            ongoing
              ? [{ text: 'Ce que je ' }, { text: 'fais.', className: 'text-brand-mid' }]
              : [{ text: "Ce que j'ai " }, { text: 'fait.', className: 'text-brand-mid' }]
          }
        />
      </div>

      <div ref={wrapperRef} className="relative" style={{ height: slotH, overflow: 'hidden' }}>

        <button onClick={goPrev} aria-label="Précédent"
          className="absolute z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
          style={{ left: 12, top: MAX_H / 2, transform: 'translateY(-50%)', fontSize: 20, color: '#2b616b', cursor: 'pointer' }}
        >‹</button>

        <button onClick={goNext} aria-label="Suivant"
          className="absolute z-20 w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center"
          style={{ right: 12, top: MAX_H / 2, transform: 'translateY(-50%)', fontSize: 20, color: '#2b616b', cursor: 'pointer' }}
        >›</button>

        <div
          ref={trackRef}
          className="absolute inset-y-0 flex"
          style={{
            gap: GAP,
            transform: `translateX(${trackOffset}px)`,
            transition: animated ? 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)' : 'none',
          }}
        >
          {triple.map((obj, vi) => {
            const dist     = Math.abs(vi - vActive)
            const isActive = dist === 0
            const num      = (vi % n) + 1
            const visible  = dist <= 2

            const cardTop = (MAX_H - cardHeight(dist)) / 2
            const textTop = cardTop + cardHeight(dist) + 12

            return (
              <div
                key={vi}
                onClick={() => { setAnimated(true); setVActive(vi) }}
                style={{
                  width: CARD_W,
                  position: 'relative',
                  height: slotH,
                  cursor: 'pointer',
                  opacity: visible ? 1 : 0,
                  transition: animated ? 'opacity 0.4s ease' : 'none',
                  flexShrink: 0,
                }}
              >
                {/* Cadre centré verticalement */}
                <div
                  style={{
                    position: 'absolute',
                    top: cardTop,
                    left: 0,
                    width: CARD_W,
                    height: cardHeight(dist),
                    background: obj.image ? undefined : cardBg(dist),
                    overflow: 'hidden',
                    transition: animated ? 'height 0.5s cubic-bezier(0.4,0,0.2,1), top 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
                  }}
                >
                  {obj.image && (
                    <>
                      <Image src={obj.image} alt={obj.title} fill className="object-cover" sizes="280px" />
                      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, rgba(43,97,107,0) 0%, rgba(43,97,107,0.22) 100%)' }} />
                    </>
                  )}

                  {obj.image && obj.link && (
                    <Link
                      href={obj.link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="absolute bottom-3 left-1/2 z-10 font-poppins text-[11px] uppercase tracking-[0.1em] px-4 py-2 rounded-full bg-white text-brand-deep hover:opacity-80 transition-opacity"
                      style={{ transform: 'translateX(-50%)' }}
                    >
                      {obj.link.label}
                    </Link>
                  )}
                  <span
                    className="absolute top-4 left-4 font-poppins font-medium rounded-full"
                    style={{
                      fontSize: 10, letterSpacing: '0.15em', padding: '4px 10px',
                      background: 'rgba(255,255,255,0.18)', color: 'white', backdropFilter: 'blur(4px)',
                    }}
                  >
                    {String(num).padStart(2, '0')}
                  </span>
                </div>

                {/* Texte juste sous le cadre */}
                <div
                  style={{
                    position: 'absolute',
                    top: textTop,
                    left: 0, right: 0,
                    textAlign: 'center',
                    transition: animated ? 'top 0.5s cubic-bezier(0.4,0,0.2,1)' : 'none',
                  }}
                >
                  <p
                    style={{
                      fontFamily: "'The Seasons', serif",
                      fontSize: isActive ? 17 : 13,
                      fontWeight: 400,
                      color: isActive ? '#2b616b' : 'rgba(43,97,107,0.45)',
                      lineHeight: 1.2,
                      marginBottom: 10,
                      transition: animated ? 'font-size 0.4s ease, color 0.4s ease' : 'none',
                    }}
                  >
                    {obj.title}
                  </p>
                  <p
                    className="font-poppins font-light leading-relaxed"
                    style={{
                      fontSize: 12, color: '#2b616b',
                      opacity: isActive ? 0.55 : 0,
                      transition: animated ? 'opacity 0.4s ease' : 'none',
                    }}
                  >
                    {obj.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
