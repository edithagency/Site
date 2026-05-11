'use client'

import { useState, useEffect, Suspense } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import { useSearchParams } from 'next/navigation'
import { motion } from 'framer-motion'

const FranceMap = dynamic(() => import('@/components/FranceMap'), {
  ssr: false,
  loading: () => <div className="mx-8 h-[500px] rounded-2xl bg-brand-deep/10" />,
})

function IconInstagram() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  )
}

function IconLinkedIn() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="4" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M7 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M11 17v-3.5a2.5 2.5 0 0 1 5 0V17" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 10v7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      <circle cx="7" cy="7.5" r="1" fill="currentColor"/>
    </svg>
  )
}

const socials = [
  { label: 'Instagram', handle: '@edith.agency', href: 'https://www.instagram.com/edith.agency', icon: <IconInstagram /> },
  { label: 'LinkedIn', handle: 'Edith Agency', href: 'https://fr.linkedin.com/in/edith-apoueyedith', icon: <IconLinkedIn /> },
]

const steps = [
  { num: '01', label: 'Prise de contact', desc: "Tu m'envoies un message, je réponds sous 48h." },
  { num: '02', label: 'Échange autour de ton projet', desc: 'On se retrouve en visio ou par écrit pour tout comprendre de tes besoins.' },
  { num: '03', label: 'Envoi du devis', desc: 'Je te prépare une proposition sur-mesure, claire et sans surprise.' },
  { num: '04', label: 'Lancement de la collaboration', desc: "On démarre ! Je m'occupe de tout avec soin." },
]

function ContactPageContent() {
  const searchParams = useSearchParams()
  const [form, setForm] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: searchParams.get('message') ?? '',
  })
  const [sent, setSent] = useState(false)

  useEffect(() => {
    const msg = searchParams.get('message')
    if (msg) setForm(f => ({ ...f, message: msg, sujet: 'Audit Express' }))
  }, [searchParams])

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    console.log('Contact form:', form)
    setSent(true)
  }

  return (
    <>
      {/* Hero avec image */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="relative w-full page-hero-banner bg-brand-deep/25 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-cream/90" />
          <div className="absolute bottom-0 left-0 px-8 pb-16">
            <h1
              className="font-display font-black text-brand-deep leading-[0.9]"
              style={{ fontSize: 'clamp(44px, 7vw, 80px)' }}
            >
              <span className="block" style={{ whiteSpace: 'nowrap' }}>On se</span>
              <span className="block text-brand-yellow">parle ?</span>
            </h1>
          </div>
        </div>
        <span
          className="absolute top-44 right-16 font-script text-brand-yellow hidden md:block"
          style={{ fontSize: 'clamp(24px, 2.5vw, 34px)', transform: 'rotate(-3deg)' }}
        >
          avec plaisir.
        </span>
      </section>

      {/* ── ÉTAPES ── */}
      <section className="px-8 pt-20 pb-20">
        <p className="eyebrow mb-14">Comment ça se passe</p>

        <div className="flex flex-col md:flex-row items-start md:items-start gap-0">
          {steps.map((step, i) => (
            <div key={step.num} className="flex flex-row md:flex-col items-start md:items-start flex-1">

              {/* Numéro + flèche sur la même ligne (desktop) */}
              <div className="flex items-center w-full mb-0 md:mb-6">
                {/* Cercle numéro */}
                <motion.div
                  className="shrink-0 w-12 h-12 rounded-full border border-brand-deep/20 flex items-center justify-center bg-brand-cream z-10"
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.15 }}
                >
                  <span className="font-script text-brand-yellow text-lg">{step.num}</span>
                </motion.div>

                {/* Flèche courbe SVG vers l'étape suivante */}
                {i < steps.length - 1 && (
                  <div className="flex-1 hidden md:block">
                    <svg viewBox="0 0 160 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-10">
                      <motion.path
                        d="M 5 30 C 40 30, 60 10, 120 22"
                        stroke="#66a2ad"
                        strokeWidth="1.5"
                        strokeDasharray="5 4"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.9, ease: 'easeInOut', delay: i * 0.15 + 0.3 }}
                      />
                      <motion.path
                        d="M 112 16 L 122 22 L 114 30"
                        stroke="#66a2ad"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        fill="none"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.15 + 1 }}
                      />
                    </svg>
                  </div>
                )}
              </div>

              {/* Texte de l'étape */}
              <motion.div
                className="md:pr-6 pl-4 md:pl-0 pb-8 md:pb-0"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 + 0.2 }}
              >
                <p className="font-display font-bold text-brand-deep text-lg mb-1 leading-tight">{step.label}</p>
                <p className="font-body font-light text-[12px] text-brand-deep/55 leading-relaxed">{step.desc}</p>
              </motion.div>

            </div>
          ))}
        </div>
      </section>

      {/* ── FORMULAIRE + INFOS ── */}
      <section className="px-8 pb-32 grid grid-cols-1 md:grid-cols-2 gap-20 items-start border-t border-brand-deep/10 pt-16">
        {/* Formulaire */}
        <div>
          <div className="flex items-center justify-between mb-8 flex-wrap gap-3">
            <p className="eyebrow">Écrire un message</p>
            <Link
              href="/audit"
              className="inline-flex items-center gap-2 border border-brand-deep/40 text-brand-deep font-body text-[11px] uppercase tracking-[0.12em] px-4 py-2 rounded-full hover:bg-brand-deep hover:text-brand-cream transition-colors"
            >
              Audit Express ✦
            </Link>
          </div>
          {sent ? (
            <div className="py-12">
              <p className="font-display font-bold text-brand-deep text-2xl mb-3">Message envoyé !</p>
              <p className="font-body text-[15px] text-brand-deep/60">Je vous réponds sous 48h.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'nom', label: 'Nom', type: 'text', placeholder: 'Votre nom' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.fr' },
                { id: 'sujet', label: 'Sujet', type: 'text', placeholder: 'Branding, Social Media…' },
              ].map(({ id, label, type, placeholder }) => (
                <div key={id}>
                  <label htmlFor={id} className="eyebrow block mb-2">{label}</label>
                  <input
                    id={id}
                    type={type}
                    required
                    placeholder={placeholder}
                    value={form[id as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [id]: e.target.value })}
                    className="w-full bg-white border border-brand-deep/30 rounded-lg px-4 py-3 font-body text-[15px] text-brand-deep placeholder:text-brand-deep/30 focus:outline-none focus:border-brand-deep transition-colors"
                  />
                </div>
              ))}
              <div>
                <label htmlFor="message" className="eyebrow block mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  placeholder="Décrivez votre projet…"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-white border border-brand-deep/30 rounded-lg px-4 py-3 font-body text-[15px] text-brand-deep placeholder:text-brand-deep/30 focus:outline-none focus:border-brand-deep transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-brand-deep text-brand-cream font-body text-[12px] uppercase tracking-[0.12em] px-7 py-4 rounded-full hover:opacity-80 transition-opacity"
              >
                Envoyer
              </button>
            </form>
          )}
        </div>

        {/* Infos contact */}
        <div className="md:mt-4 space-y-10">
          <div>
            <p className="eyebrow mb-3">Email direct</p>
            <a
              href="mailto:contact.edith.agency@gmail.com"
              className="font-display font-bold text-brand-deep text-xl hover:text-brand-mid transition-colors"
            >
              contact.edith.agency@gmail.com
            </a>
          </div>
          <div>
            <p className="eyebrow mb-4">Réseaux</p>
            <div className="flex flex-col gap-3">
              {socials.map(({ label, handle, href, icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-brand-deep/70 hover:text-brand-deep transition-colors group"
                >
                  <span className="text-brand-mid group-hover:text-brand-deep transition-colors">{icon}</span>
                  <div>
                    <p className="font-body font-medium text-[15px] leading-none mb-0.5">{label}</p>
                    <p className="font-body text-[11px] text-brand-deep/40 group-hover:text-brand-deep/60 transition-colors">{handle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">Localisation</p>
            <p className="font-body text-[15px] text-brand-deep/70 leading-relaxed">
              Basée à <strong className="font-medium text-brand-deep">Bordeaux</strong> et <strong className="font-medium text-brand-deep">Paris</strong>,<br />
              disponible partout en France.
            </p>
          </div>
        </div>
      </section>

      {/* ── CARTE ── */}
      <FranceMap showCounter={false} />
    </>
  )
}

export default function ContactPage() {
  return (
    <Suspense fallback={null}>
      <ContactPageContent />
    </Suspense>
  )
}
