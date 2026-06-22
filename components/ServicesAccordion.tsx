'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

const SERVICES = [
  {
    id: 'branding',
    num: '01',
    name: 'Branding & Identité Visuelle',
    deliverables: [
      'Création de logo',
      'Charte graphique complète (couleurs, typographies, univers visuel)',
      'Déclinaison sur tous tes supports (réseaux sociaux, site, print)',
      "Refonte d'identité existante",
    ],
  },
  {
    id: 'strategie',
    num: '02',
    name: 'Stratégie de Communication',
    deliverables: [
      'Audit de ta présence en ligne',
      'Définition de ta ligne éditoriale',
      'Stratégie réseaux adaptée à ta cible locale',
      'Accompagnement et conseils personnalisés',
    ],
  },
  {
    id: 'contenu-video',
    num: '03',
    name: 'Création de Contenu',
    deliverables: [
      'Shooting vidéo (reels, stories, posts)',
      'Montage & post-production',
      'Motion design & habillage vidéo',
      'Vidéo corporate & storytelling de marque',
    ],
  },
  {
    id: 'community-management',
    num: '04',
    name: 'Community Management',
    deliverables: [
      'Gestion complète de tes réseaux sociaux',
      'Création et planification du calendrier éditorial',
      'Rédaction des captions & hashtags',
      'Reporting mensuel & analyse des performances',
    ],
  },
  {
    id: 'site-web',
    num: '05',
    name: 'Création de Site Web',
    deliverables: [
      'Site vitrine moderne, responsive et pensé pour convertir',
      'Conception UX/UI soignée et cohérente avec ton identité',
      "Intégration de formulaires, appels à l'action et outils de réservation",
      'Maintenance, mises à jour et évolutions',
    ],
    sites: [
      { label: 'Prod Daiki', href: 'https://www.prodbydaiki.com/' },
      { label: 'Itinéraire sur Mesure', href: 'https://www.itinerairesurmesure.fr/' },
    ],
  },
  {
    id: 'seo',
    num: '06',
    name: 'SEO & Visibilité en ligne',
    deliverables: [
      'Audit SEO complet de ton site existant',
      'Optimisation technique (vitesse, structure, balises)',
      'Rédaction de contenus optimisés pour Google',
      'Référencement local (Google My Business, avis, citations)',
    ],
  },
]

export default function ServicesAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const hash = window.location.hash.slice(1)
    if (!hash || !SERVICES.some((s) => s.id === hash)) return
    setOpenId(hash)
    setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 300)
  }, [])

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpenId(null)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <section className="max-w-[1300px] mx-auto px-8 py-24">
      <div ref={containerRef} className="border-t border-brand-deep/10">
        {SERVICES.map((service, i) => {
          const isOpen = openId === service.id
          return (
            <motion.div
              key={service.id}
              id={service.id}
              className="border-b border-brand-deep/10"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            >
              <button
                onClick={() => setOpenId(isOpen ? null : service.id)}
                className="w-full flex items-center justify-between gap-6 py-8 text-left group"
              >
                <div className="flex items-baseline gap-14">
                  <span
                    className="text-brand-mid uppercase tracking-[0.15em] font-poppins font-medium inline-block"
                    style={{ fontSize: 'clamp(11px, 1.1vw, 14px)', minWidth: 64 }}
                  >
                    {service.num}
                  </span>
                  <h2
                    className="text-brand-deep leading-tight transition-colors group-hover:text-brand-mid"
                    style={{ fontFamily: "'The Seasons', serif", fontWeight: 400, fontSize: 'clamp(22px, 3vw, 38px)' }}
                  >
                    {service.name}
                  </h2>
                </div>

                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="relative shrink-0 w-9 h-9 rounded-full border border-brand-deep/30 flex items-center justify-center group-hover:border-brand-deep"
                >
                  <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
                    <path d="M4 7L10 13L16 7" stroke="#2b616b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
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
                    <div className="flex items-end justify-between gap-10 pb-10" style={{ paddingLeft: 120 }}>
                      <ul className="space-y-4">
                        {service.deliverables.map((item, idx) => (
                          <motion.li
                            key={item}
                            initial={{ opacity: 0, x: -8 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.3, delay: idx * 0.05, ease: [0.22, 1, 0.36, 1] }}
                            className="font-poppins text-[15px] text-brand-deep/70 flex items-start gap-3 leading-relaxed"
                          >
                            <span className="text-brand-mid shrink-0 mt-0.5">—</span>
                            {item}
                          </motion.li>
                        ))}
                      </ul>

                      {'sites' in service && service.sites && (
                        <div className="flex flex-wrap justify-end gap-3 shrink-0">
                          {service.sites.map((site) => (
                            <Link
                              key={site.href}
                              href={site.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 bg-white text-brand-deep font-poppins text-[12px] uppercase tracking-[0.12em] px-6 py-3 rounded-full shadow-sm hover:shadow-md transition-shadow whitespace-nowrap"
                            >
                              {site.label}
                              <svg width="11" height="11" viewBox="0 0 20 20" fill="none">
                                <path d="M5 15L15 5M15 5H7M15 5V13" stroke="#2b616b" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                              </svg>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
