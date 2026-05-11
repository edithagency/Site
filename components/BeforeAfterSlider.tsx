'use client'

import { useRef, useState, useEffect, useCallback } from 'react'
import Image from 'next/image'

interface Props {
  beforeImage: string
  afterImage: string
  beforeAlt?: string
  afterAlt?: string
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeAlt = 'Avant',
  afterAlt = 'Après',
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [position, setPosition] = useState(50)
  const [dragging, setDragging] = useState(false)
  const [hinted, setHinted] = useState(false)

  /* Animation d'intro : slide léger pour inviter l'utilisateur */
  useEffect(() => {
    const timeout = setTimeout(() => {
      setHinted(true)
      let frame = 0
      const total = 40
      const animate = () => {
        frame++
        const t = frame / total
        const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t
        setPosition(50 - Math.sin(eased * Math.PI) * 12)
        if (frame < total) requestAnimationFrame(animate)
        else setPosition(50)
      }
      requestAnimationFrame(animate)
    }, 800)
    return () => clearTimeout(timeout)
  }, [])

  const getX = useCallback((clientX: number) => {
    const rect = containerRef.current?.getBoundingClientRect()
    if (!rect) return 50
    const x = clientX - rect.left
    return Math.min(Math.max((x / rect.width) * 100, 0), 100)
  }, [])

  /* Mouse */
  const onMouseDown = (e: React.MouseEvent) => {
    e.preventDefault()
    setDragging(true)
    setPosition(getX(e.clientX))
  }
  useEffect(() => {
    if (!dragging) return
    const move = (e: MouseEvent) => setPosition(getX(e.clientX))
    const up = () => setDragging(false)
    window.addEventListener('mousemove', move)
    window.addEventListener('mouseup', up)
    return () => { window.removeEventListener('mousemove', move); window.removeEventListener('mouseup', up) }
  }, [dragging, getX])

  /* Touch */
  const onTouchStart = (e: React.TouchEvent) => {
    setDragging(true)
    setPosition(getX(e.touches[0].clientX))
  }
  useEffect(() => {
    if (!dragging) return
    const move = (e: TouchEvent) => { e.preventDefault(); setPosition(getX(e.touches[0].clientX)) }
    const up = () => setDragging(false)
    window.addEventListener('touchmove', move, { passive: false })
    window.addEventListener('touchend', up)
    return () => { window.removeEventListener('touchmove', move); window.removeEventListener('touchend', up) }
  }, [dragging, getX])

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl select-none"
      style={{ aspectRatio: '16/9', cursor: dragging ? 'grabbing' : 'grab' }}
      onMouseDown={onMouseDown}
      onTouchStart={onTouchStart}
    >
      {/* Image APRÈS (fond) */}
      <div className="absolute inset-0">
        <Image src={afterImage} alt={afterAlt} fill className="object-cover" draggable={false} />
      </div>

      {/* Image AVANT (masquée à droite du curseur) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        <Image src={beforeImage} alt={beforeAlt} fill className="object-cover" draggable={false} />
      </div>

      {/* Ligne verticale */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-brand-cream/90 shadow-[0_0_12px_rgba(0,0,0,0.25)]"
        style={{ left: `${position}%`, transform: 'translateX(-50%)' }}
      />

      {/* Bouton curseur */}
      <div
        className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-11 h-11 rounded-full bg-brand-cream shadow-lg flex items-center justify-center gap-1 z-10"
        style={{ left: `${position}%` }}
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M6 10H14M6 10L3 7M6 10L3 13M14 10L17 7M14 10L17 13" stroke="#2b616b" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>

      {/* Label AVANT */}
      <div
        className="absolute top-4 left-4 px-3 py-1 rounded-full text-[10px] font-body uppercase tracking-[0.14em] text-brand-cream bg-brand-deep/50 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: position > 10 ? 1 : 0 }}
      >
        Avant
      </div>

      {/* Label APRÈS */}
      <div
        className="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-body uppercase tracking-[0.14em] text-brand-cream bg-brand-deep/50 backdrop-blur-sm transition-opacity duration-300"
        style={{ opacity: position < 90 ? 1 : 0 }}
      >
        Après
      </div>

      {/* Hint "glissez" si pas encore utilisé */}
      {!hinted && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full text-[10px] font-body uppercase tracking-[0.14em] text-brand-cream bg-brand-deep/40 backdrop-blur-sm pointer-events-none">
          ← glissez →
        </div>
      )}
    </div>
  )
}
