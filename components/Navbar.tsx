'use client'

import Link from 'next/link'
import Image from 'next/image'
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

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-5 bg-brand-cream/90 backdrop-blur-sm">
      <Link href="/">
        <div className="relative overflow-hidden" style={{ width: '160px', height: '26px', backgroundColor: '#e7e3dd' }}>
          <Image
            src="/images/logo.png"
            alt="edith AGENCY"
            fill
            className="object-cover object-center"
            style={{ mixBlendMode: 'multiply' }}
            priority
          />
        </div>
      </Link>

      <ul className="flex items-center gap-8">
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className={`font-body text-[12px] tracking-[0.08em] uppercase transition-opacity duration-200 ${
                pathname === href || pathname.startsWith(href + '/') && href !== '/'
                  ? 'text-brand-deep font-medium'
                  : 'text-brand-deep/60 hover:text-brand-deep'
              }`}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
