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

  return (
    <div className="relative">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-10 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

      {/* Track */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-6 px-8 cursor-grab active:cursor-grabbing select-none"
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
                  <span className="absolute top-4 right-4 font-poppins text-[10px] text-white tracking-widest uppercase">
                    {client.year}
                  </span>

                  {client.location && (
                    <span className="absolute bottom-4 left-4 font-poppins text-[10px] text-white tracking-wider uppercase">
                      {client.location}
                    </span>
                  )}
                </motion.div>

                <p className="eyebrow mb-1">{client.category}</p>
                <p className="text-brand-deep text-xl group-hover:text-brand-mid transition-colors duration-200" style={{ fontFamily: "'The Seasons', serif", fontWeight: 400 }}>
                  {client.name}
                </p>
              </Link>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}
