'use client'

import { useState } from 'react'
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
  { label: 'Instagram', handle: '@edith.agency', href: 'https://www.instagram.com/edith.agency', icon: <IconInstagram /> },
]

export default function ContactPage() {
  const [form, setForm] = useState({
    nom: '',
    email: '',
    sujet: '',
    message: '',
  })
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(form.sujet || 'Message depuis le site seamore.fr')
    const body = encodeURIComponent(
      `Nom : ${form.nom}\nEmail : ${form.email}\n\nMessage :\n${form.message}`
    )
    window.location.href = `mailto:contact.edith.agency@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
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
          {sent ? (
            <div className="py-12">
              <p className="font-poppins font-bold text-brand-deep text-2xl mb-3">Votre client mail s'est ouvert !</p>
              <p className="font-poppins text-[15px] text-brand-deep/60 leading-relaxed">
                Votre message est pré-rempli. Il ne reste plus qu'à envoyer depuis votre boîte mail.<br />
                <a href="mailto:contact.edith.agency@gmail.com" className="text-brand-mid hover:text-brand-deep transition-colors underline underline-offset-2">
                  Ou écrivez directement à contact.edith.agency@gmail.com
                </a>
              </p>
            </div>
          ) : (
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
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-brand-deep text-brand-cream font-poppins text-[12px] uppercase tracking-[0.12em] px-7 py-4 rounded-full hover:opacity-80 transition-opacity"
              >
                Envoyer
              </button>
            </form>
          )}
        </div>

        {/* Infos contact */}
        <div className="space-y-10">
          <div>
            <p className="eyebrow mb-3">Email direct</p>
            <a
              href="mailto:contact.edith.agency@gmail.com"
              className="font-poppins font-bold text-brand-deep text-xl hover:text-brand-mid transition-colors"
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
    </>
  )
}
