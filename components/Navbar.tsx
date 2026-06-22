'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'


const links = [
  { href: '/', label: 'Accueil' },
  { href: '/services', label: 'Services' },
  { href: '/projets', label: 'Projets' },
  { href: '/creation-de-contenu', label: 'Contenu' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Fermer le menu mobile au changement de page
  useEffect(() => { setOpen(false) }, [pathname])

  const transparent = !scrolled && !open

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-400"
      style={{
        background: transparent ? 'transparent' : 'rgba(255,255,255,0.97)',
        backdropFilter: scrolled ? 'blur(8px)' : 'none',
        boxShadow: scrolled ? '0 1px 0 rgba(43,97,107,0.08)' : 'none',
      }}
    >
      <div className="relative flex items-center justify-between px-8 py-5">

        {/* GAUCHE — liens desktop + hamburger mobile */}
        <div className="flex items-center">
          {/* Liens desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="font-body text-[12px] tracking-[0.08em] uppercase transition-all duration-300"
                  style={{
                    color: transparent
                      ? 'rgba(255,255,255,0.85)'
                      : (pathname === href || (pathname.startsWith(href + '/') && href !== '/'))
                        ? '#2b616b'
                        : 'rgba(43,97,107,0.55)',
                    fontWeight: (pathname === href || (pathname.startsWith(href + '/') && href !== '/')) ? 700 : 400,
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Hamburger mobile */}
          <button
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
            className="md:hidden flex flex-col justify-center gap-[6px] w-8 h-8 shrink-0"
          >
            <span
              className="block h-0.5 origin-center transition-transform duration-300"
              style={{
                background: transparent ? 'white' : '#2b616b',
                transform: open ? 'translateY(7px) rotate(45deg)' : 'none',
              }}
            />
            <span
              className="block h-0.5 transition-opacity duration-300"
              style={{
                background: transparent ? 'white' : '#2b616b',
                opacity: open ? 0 : 1,
              }}
            />
            <span
              className="block h-0.5 origin-center transition-transform duration-300"
              style={{
                background: transparent ? 'white' : '#2b616b',
                transform: open ? 'translateY(-7px) rotate(-45deg)' : 'none',
              }}
            />
          </button>
        </div>

        {/* CENTRE — logo (position absolue pour rester centré) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" onClick={() => setOpen(false)} aria-label="Sea More Agency">
            <div
              className="transition-colors duration-300"
              style={{
                width: '130px',
                height: '26px',
                backgroundColor: transparent ? '#ffffff' : '#2b616b',
                WebkitMaskImage: 'url(/images/logo.png)',
                maskImage: 'url(/images/logo.png)',
                WebkitMaskSize: 'contain',
                maskSize: 'contain',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
              }}
            />
          </Link>
        </div>

        {/* DROITE — CTA desktop */}
        <div className="flex items-center">
          <Link
            href="/contact"
            className="hidden md:inline-flex items-center font-body text-[11px] uppercase tracking-[0.12em] px-5 py-2.5 rounded-full transition-all duration-300"
            style={{
              background: transparent ? 'rgba(255,255,255,0.15)' : '#2b616b',
              color: transparent ? 'white' : '#e7e3dd',
              border: transparent ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent',
              backdropFilter: transparent ? 'blur(4px)' : 'none',
            }}
          >
            Me contacter
          </Link>
        </div>
      </div>

      {/* Menu mobile déroulant */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          maxHeight: open ? '420px' : '0',
          opacity: open ? 1 : 0,
          background: 'rgba(255,255,255,0.97)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="px-8 pb-8 pt-3 border-t border-brand-deep/10 flex flex-col gap-5">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="font-body text-[15px] tracking-[0.08em] uppercase"
              style={{
                color: (pathname === href || (pathname.startsWith(href + '/') && href !== '/')) ? '#2b616b' : 'rgba(43,97,107,0.55)',
                fontWeight: (pathname === href || (pathname.startsWith(href + '/') && href !== '/')) ? 700 : 400,
              }}
            >
              {label}
            </Link>
          ))}
          <Link
            href="/contact"
            className="inline-flex items-center justify-center font-body text-[12px] uppercase tracking-[0.12em] px-7 py-4 rounded-full transition-opacity hover:opacity-80 mt-2"
            style={{ background: '#2b616b', color: '#e7e3dd' }}
          >
            Me contacter
          </Link>
        </div>
      </div>
    </nav>
  )
}
