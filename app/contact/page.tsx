'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import PageHero from '@/components/PageHero'
import ClientsLoopSlider from '@/components/ClientsLoopSlider'
import { clients } from '@/data/clients'

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

const socials = [
  { label: 'Instagram', handle: '@seamoreagency', href: 'https://www.instagram.com/seamoreagency/', icon: <IconInstagram /> },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    if (!sent) return
    const timeout = setTimeout(() => setSent(false), 5000)
    return () => clearTimeout(timeout)
  }, [sent])

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSending(true)
    setError(false)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error('failed')
      setSent(true)
      setForm({ nom: '', email: '', sujet: '', message: '' })
    } catch {
      setError(true)
    } finally {
      setSending(false)
    }
  }

  return (
    <>
      {/* Hero */}
      <PageHero
        backgroundVideo="/videos/hero-home.mp4"
        title="Prêts à embarquer ?"
        titleFontSize="clamp(30px, 4.8vw, 74px)"
        taglineBelow="Parlons de votre prochaine destination."
        overlayOpacity={25}
      />

      {/* ── FORMULAIRE + INFOS ── */}
      <section id="contact-form" className="px-8 md:px-20 pb-12 border-t border-brand-deep/10 pt-16">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
        {/* Formulaire */}
        <div>
          <p className="eyebrow mb-8">Écrire un message</p>
          <form onSubmit={handleSubmit} className="space-y-5">
              {[
                { id: 'nom', label: 'Nom', type: 'text', placeholder: 'Votre nom' },
                { id: 'email', label: 'Email', type: 'email', placeholder: 'votre@email.fr' },
                { id: 'sujet', label: 'Sujet', type: 'text', placeholder: 'Communication, Site Web…' },
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
                    className="w-full bg-white border border-brand-deep/30 rounded-lg px-4 py-3 font-poppins text-[15px] text-brand-deep placeholder:text-brand-deep/30 focus:outline-none focus:border-brand-deep transition-colors"
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
                  className="w-full bg-white border border-brand-deep/30 rounded-lg px-4 py-3 font-poppins text-[15px] text-brand-deep placeholder:text-brand-deep/30 focus:outline-none focus:border-brand-deep transition-colors resize-none"
                />
              </div>
              {error && (
                <p className="font-poppins text-[13px] text-red-500">
                  Une erreur est survenue, réessayez ou écrivez directement à{' '}
                  <a href="mailto:contact@seamoreagency.com" className="underline">contact@seamoreagency.com</a>.
                </p>
              )}
              <button
                type="submit"
                disabled={sending}
                className="inline-flex items-center gap-2 bg-brand-deep text-brand-cream font-poppins text-[12px] uppercase tracking-[0.12em] px-7 py-4 rounded-full hover:opacity-80 transition-opacity disabled:opacity-50"
              >
                {sending ? 'Envoi…' : 'Envoyer'}
              </button>
            </form>
        </div>

        {/* Infos contact */}
        <div className="space-y-10">
          <div>
            <p className="eyebrow mb-3">Email direct</p>
            <a
              href="mailto:contact@seamoreagency.com"
              className="font-poppins font-bold text-brand-deep text-xl hover:text-brand-mid transition-colors"
            >
              contact@seamoreagency.com
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
                    <p className="font-poppins font-medium text-[15px] leading-none mb-0.5">{label}</p>
                    <p className="font-poppins text-[11px] text-brand-deep/40 group-hover:text-brand-deep/60 transition-colors">{handle}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
      </section>

      {/* ── CARTE ── */}
      <FranceMap showCounter={false} eyebrow="Bordeaux & au-delà" title="Des projets qui voyagent." titleAccent="voyagent." />

      {/* ── CLIENTS ── */}
      <ClientsLoopSlider clients={clients} className="bg-[#dde6e7]" fadeColor="#dde6e7" />

      {/* ── MINI FENÊTRE DE CONFIRMATION ── */}
      <div
        className="fixed bottom-6 right-6 z-[100] max-w-sm transition-all duration-300"
        style={{
          opacity: sent ? 1 : 0,
          transform: sent ? 'translateY(0)' : 'translateY(16px)',
          pointerEvents: sent ? 'auto' : 'none',
        }}
      >
        <div className="bg-brand-deep text-brand-cream rounded-2xl shadow-lg px-6 py-5 flex items-start gap-3">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="shrink-0 mt-0.5">
            <circle cx="10" cy="10" r="9" stroke="#f4db75" strokeWidth="1.4" />
            <path d="M6 10.5L8.5 13L14 7" stroke="#f4db75" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <div>
            <p className="font-poppins font-medium text-[14px] leading-snug">
              Merci de m'avoir contacté, je reviens vers vous très prochainement.
            </p>
          </div>
          <button
            onClick={() => setSent(false)}
            aria-label="Fermer"
            className="shrink-0 text-brand-cream/50 hover:text-brand-cream transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
              <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}
