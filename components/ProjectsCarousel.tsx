'use client'

import { useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import type { Client } from '@/data/clients'

interface Props {
  clients: Client[]
}

export default function ProjectsCarousel({ clients }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null)

  function scroll(direction: 'left' | 'right') {
    if (!scrollRef.current) return
    scrollRef.current.scrollBy({
      left: direction === 'right' ? 360 : -360,
      behavior: 'smooth',
    })
  }

  return (
    <div className="relative">
      {/* Flèche gauche */}
      <button
        onClick={() => scroll('left')}
        aria-label="Projet précédent"
        className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-brand-cream border border-brand-deep/20 flex items-center justify-center shadow-sm hover:bg-brand-deep hover:text-brand-cream hover:border-brand-deep transition-colors duration-200 text-brand-deep"
      >
        ←
      </button>

      {/* Flèche droite */}
      <button
        onClick={() => scroll('right')}
        aria-label="Projet suivant"
        className="absolute right-3 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-brand-cream border border-brand-deep/20 flex items-center justify-center shadow-sm hover:bg-brand-deep hover:text-brand-cream hover:border-brand-deep transition-colors duration-200 text-brand-deep"
      >
        →
      </button>

      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-brand-cream to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-brand-cream to-transparent z-10 pointer-events-none" />

      {/* Track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-6 px-16 cursor-grab active:cursor-grabbing select-none"
        style={{ scrollbarWidth: 'none' }}
        onMouseDown={(e) => {
          const el = scrollRef.current
          if (!el) return
          const startX = e.pageX - el.offsetLeft
          const scrollLeft = el.scrollLeft
          const onMove = (ev: MouseEvent) => {
            const x = ev.pageX - el.offsetLeft
            el.scrollLeft = scrollLeft - (x - startX)
          }
          const onUp = () => {
            window.removeEventListener('mousemove', onMove)
            window.removeEventListener('mouseup', onUp)
          }
          window.addEventListener('mousemove', onMove)
          window.addEventListener('mouseup', onUp)
        }}
      >
        {clients.map((client, i) => (
          <div
            key={client.slug}
            className="shrink-0"
            style={{ marginTop: i % 2 === 1 ? '32px' : '0px' }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
            >
              <Link href={`/projets/${client.slug}`} className="group block w-[280px] md:w-[320px]">
                {/* Card image */}
                <motion.div
                  className="relative overflow-hidden rounded-xl mb-4 bg-brand-deep"
                  style={{ height: i % 3 === 0 ? '400px' : i % 3 === 1 ? '340px' : '380px' }}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
                >
                  {client.cardImage ? (
                    <Image
                      src={client.cardImage}
                      alt={client.name}
                      fill
                      sizes="(max-width: 768px) 280px, 320px"
                      className="object-cover transition-transform duration-500 group-hover:scale-105 crisp-image"
                    />
                  ) : (
                    <div className={`absolute inset-0 transition-transform duration-500 group-hover:scale-105 ${
                      i % 4 === 0 ? 'bg-brand-mid/60' :
                      i % 4 === 1 ? 'bg-brand-deep/70' :
                      i % 4 === 2 ? 'bg-brand-mid/40' :
                      'bg-brand-deep/50'
                    }`} />
                  )}

                  {/* Overlay sombre au hover */}
                  <div className="absolute inset-0 bg-brand-deep/25 opacity-0 group-hover:opacity-100 transition-opacity duration-400 flex items-center justify-center">
                    <motion.span
                      className="text-brand-cream text-3xl"
                      initial={{ y: 8, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ duration: 0.25 }}
                    >
                      →
                    </motion.span>
                  </div>

                  {/* Année */}
                  <span className="absolute top-4 right-4 font-body text-[10px] text-brand-cream/60 tracking-widest uppercase">
                    {client.year}
                  </span>

                  {client.location && (
                    <span className="absolute bottom-4 left-4 font-body text-[10px] text-brand-cream/50 tracking-wider uppercase">
                      {client.location}
                    </span>
                  )}
                </motion.div>

                <p className="eyebrow mb-1">{client.category}</p>
                <p className="font-display font-bold text-brand-deep text-xl group-hover:text-brand-mid transition-colors duration-200">
                  {client.name}
                </p>
              </Link>
            </motion.div>
          </div>
        ))}

        {/* Carte CTA finale */}
        <div className="shrink-0 w-[200px] flex items-center justify-center">
          <Link href="/projets" className="flex flex-col items-center gap-3 text-center group">
            <div className="w-14 h-14 rounded-full border border-brand-deep/30 flex items-center justify-center group-hover:bg-brand-deep group-hover:border-brand-deep transition-colors duration-300">
              <span className="text-brand-deep group-hover:text-brand-cream transition-colors text-xl">→</span>
            </div>
            <span className="font-body text-[11px] uppercase tracking-[0.12em] text-brand-deep/60 group-hover:text-brand-deep transition-colors">
              Tous les projets
            </span>
          </Link>
        </div>
      </div>
    </div>
  )
}
