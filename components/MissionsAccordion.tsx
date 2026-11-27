'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'
import type { Mission, MissionContent } from '@/data/clients'

/* ── Vignette d'un contenu (petite, alignée) — ouvre la visionneuse au clic ── */
function Thumb({ item, onOpen, compact }: { item: MissionContent; onOpen: () => void; compact?: boolean }) {
  const isVideo = item.kind === 'video'
  const cover = isVideo
    ? item.poster ?? (item.youtubeId ? `https://img.youtube.com/vi/${item.youtubeId}/maxresdefault.jpg` : undefined)
    : item.src

  return (
    <button
      onClick={onOpen}
      aria-label={isVideo ? `Lire : ${item.alt}` : `Voir : ${item.alt}`}
      className={`relative block shrink-0 w-[100px] ${compact ? 'md:w-[112px]' : 'md:w-[140px]'} overflow-hidden rounded-[3px] bg-brand-deep/10 group/thumb`}
      style={{ aspectRatio: '4 / 5' }}
    >
      {cover && (
        <Image src={cover} alt={item.alt} fill sizes="140px" className="object-cover transition-transform duration-500 group-hover/thumb:scale-105" />
      )}
      {item.kind === 'beforeAfter' && item.before && item.after && (
        <>
          <Image src={item.before} alt="" fill sizes="140px" className="object-cover" />
          <span className="absolute inset-0" style={{ clipPath: 'inset(0 0 0 50%)' }}>
            <Image src={item.after} alt="" fill sizes="140px" className="object-cover" />
          </span>
          <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-white" />
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-white flex items-center justify-center shadow-sm">
            <svg width="12" height="10" viewBox="0 0 24 20" fill="none">
              <path d="M8 4L2 10L8 16M16 4L22 10L16 16" stroke="#2b616b" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
          <span className="absolute bottom-1.5 left-0 right-0 text-center font-poppins text-[8px] uppercase tracking-[0.15em] text-white drop-shadow">
            Avant / Après
          </span>
        </>
      )}
      {isVideo && (
        <span className="absolute inset-0 flex items-center justify-center">
          <span className="w-7 h-7 rounded-full bg-brand-yellow flex items-center justify-center">
            <svg width="8" height="10" viewBox="0 0 12 14" fill="none">
              <path d="M1 1.5L11 7L1 12.5V1.5Z" fill="#2b616b" />
            </svg>
          </span>
        </span>
      )}
    </button>
  )
}

/* ── Visionneuse plein écran (photo ou vidéo) ── */
function Viewer({ item, onClose }: { item: MissionContent; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && onClose()
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-white/95 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.alt}
    >
      <button
        onClick={onClose}
        aria-label="Fermer"
        className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
      >
        <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
          <path d="M4 4L16 16M16 4L4 16" stroke="#2b616b" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      <div onClick={(e) => e.stopPropagation()} className="max-h-[85vh] max-w-[90vw]">
        {item.kind === 'photo' && item.src && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={item.src} alt={item.alt} className="max-h-[85vh] max-w-[90vw] w-auto h-auto rounded-[3px]" />
        )}
        {item.kind === 'video' && item.src && (
          <video
            src={item.src}
            poster={item.poster}
            autoPlay
            controls
            playsInline
            className="max-h-[85vh] max-w-[90vw] rounded-[3px] bg-black"
          />
        )}
        {item.kind === 'beforeAfter' && item.before && item.after && (
          <div style={{ width: 'min(90vw, calc(85vh * 0.8))' }}>
            <BeforeAfterSlider beforeImage={item.before} afterImage={item.after} aspect="4/5" />
          </div>
        )}
        {item.kind === 'video' && !item.src && item.youtubeId && (
          <iframe
            src={`https://www.youtube.com/embed/${item.youtubeId}?rel=0&autoplay=1&controls=1&modestbranding=1`}
            className="h-[85vh] max-w-[90vw] rounded-[3px]"
            style={{ aspectRatio: '9 / 16' }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={item.alt}
          />
        )}
      </div>
    </motion.div>
  )
}

interface Props {
  missions: Mission[]
}

export default function MissionsAccordion({ missions }: Props) {
  /* Une seule mission ouverte à la fois — toutes fermées à l'arrivée */
  const [openIdx, setOpenIdx] = useState<number | null>(null)
  const [viewer, setViewer] = useState<MissionContent | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  /* Clic en dehors des missions → ferme la mission ouverte */
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (viewer) return
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenIdx(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [viewer])

  return (
    <section className="max-w-[1300px] mx-auto px-6 md:px-8 pb-16 md:pb-24">
      <p className="eyebrow mb-6">Mes missions</p>

      <div ref={containerRef} className="border-t border-brand-deep/15">
        {missions.map((mission, i) => {
          const isOpen = openIdx === i
          const num = String(i + 1).padStart(2, '0')
          const toggle = () => setOpenIdx(isOpen ? null : i)
          const thumbs = mission.content && mission.content.length > 0 && (
            <motion.div
              key="thumbs"
              className="flex flex-wrap md:flex-nowrap gap-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {mission.content.map((item, idx) => (
                <Thumb key={idx} item={item} compact={mission.content!.length > 3} onOpen={() => setViewer(item)} />
              ))}
            </motion.div>
          )

          return (
            <div key={mission.title} className="border-b border-brand-deep/15 py-4 md:py-5 flex items-start gap-6 md:gap-10">
              {/* Gauche : numéro, titre, détail */}
              <div className="flex-1 min-w-0">
                <button onClick={toggle} aria-expanded={isOpen} className="w-full flex items-baseline gap-5 md:gap-10 text-left group">
                  <span className="text-brand-mid uppercase tracking-[0.15em] font-poppins font-medium inline-block" style={{ fontSize: 11, minWidth: 24 }}>
                    {num}
                  </span>
                  <h2
                    className="text-brand-deep leading-tight transition-colors group-hover:text-brand-mid"
                    style={{ fontFamily: "'The Seasons', serif", fontWeight: 400, fontSize: 'clamp(17px, 1.6vw, 21px)' }}
                  >
                    {mission.title}
                  </h2>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div className="pt-3 pl-[44px] md:pl-[64px] flex flex-col gap-4">
                        <p className="font-poppins text-[13px] leading-relaxed text-brand-deep/70 max-w-[460px]">
                          {mission.summary}
                        </p>
                        {mission.link && (
                          <a
                            href={mission.link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="self-start inline-flex items-center gap-2 text-brand-deep font-poppins text-[11px] uppercase tracking-[0.14em] border-b border-brand-deep/30 pb-0.5 hover:border-brand-deep transition-colors"
                          >
                            {mission.link.label}
                            <svg width="9" height="9" viewBox="0 0 20 20" fill="none">
                              <path d="M5 15L15 5M15 5H7M15 5V13" stroke="#2b616b" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </a>
                        )}
                        {/* Mobile : vignettes sous le texte */}
                        <div className="md:hidden pb-1">{thumbs}</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Desktop : vignettes alignées sur le haut du titre */}
              <div className="hidden md:block">
                <AnimatePresence initial={false}>{isOpen && thumbs}</AnimatePresence>
              </div>

              {/* Bouton + / × */}
              <motion.button
                onClick={toggle}
                aria-label={isOpen ? `Fermer ${mission.title}` : `Ouvrir ${mission.title}`}
                animate={{ rotate: isOpen ? 45 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="shrink-0 w-7 h-7 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity"
              >
                <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                  <path d="M10 4V16M4 10H16" stroke="#2b616b" strokeWidth="1.4" strokeLinecap="round" />
                </svg>
              </motion.button>
            </div>
          )
        })}
      </div>

      <AnimatePresence>{viewer && <Viewer item={viewer} onClose={() => setViewer(null)} />}</AnimatePresence>
    </section>
  )
}
