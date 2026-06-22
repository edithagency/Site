'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const FAQS = [
  {
    id: 'services',
    question: 'Quels services proposes-tu ?',
    answer: "Branding, social media, création de contenu vidéo, stratégie de communication, création de site web et SEO. Je m'adapte à tes besoins, à ton univers et à ton budget.",
  },
  {
    id: 'localisation',
    question: 'Travailles-tu uniquement à Bordeaux ?',
    answer: "Je suis basée à Bordeaux et à Paris, mais je travaille avec des marques partout en France, et même à l'international.",
  },
  {
    id: 'delais',
    question: 'Combien de temps faut-il pour voir des résultats ?',
    answer: "Cela dépend du service : un branding complet prend en général 3 à 4 semaines, tandis qu'une stratégie social media montre ses premiers effets dès le premier mois.",
  },
  {
    id: 'collaboration',
    question: 'Comment se déroule une collaboration ?',
    answer: "Un premier échange pour cerner ton projet, une proposition adaptée à tes besoins, puis le lancement de la collaboration avec des points réguliers pour suivre les avancées.",
  },
  {
    id: 'tarifs',
    question: 'Quels sont tes tarifs ?',
    answer: "Chaque projet est unique, donc les tarifs varient selon tes besoins. Le plus simple : on en discute directement pour un premier diagnostic gratuit.",
  },
  {
    id: 'taille',
    question: 'Travailles-tu avec des marques de toutes tailles ?',
    answer: "Oui, des artisans et commerces locaux aux marques en pleine croissance, je m'adapte à chaque univers et à chaque étape de développement.",
  },
]

export default function FAQAccordion() {
  const [openId, setOpenId] = useState<string | null>(null)

  return (
    <div className="flex flex-col gap-3">
      {FAQS.map((faq, i) => {
        const isOpen = openId === faq.id
        return (
          <motion.div
            key={faq.id}
            className={`rounded-2xl border bg-white shadow-sm transition-colors duration-200 ${
              isOpen ? 'border-brand-deep' : 'border-transparent hover:border-brand-deep/30'
            }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-10%' }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              onClick={() => setOpenId(isOpen ? null : faq.id)}
              className="w-full flex items-center justify-between gap-6 px-5 md:px-6 py-3.5 text-left group"
            >
              <h3
                className="text-brand-deep leading-snug transition-colors group-hover:text-brand-mid"
                style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontSize: 'clamp(14px, 1.3vw, 16px)' }}
              >
                {faq.question}
              </h3>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="relative shrink-0 w-7 h-7 rounded-full border border-brand-deep/30 flex items-center justify-center group-hover:border-brand-deep"
              >
                <svg width="11" height="11" viewBox="0 0 20 20" fill="none">
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
                  <p className="font-poppins text-[13px] text-brand-deep/60 leading-relaxed px-5 md:px-6 pb-4">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )
      })}
    </div>
  )
}
