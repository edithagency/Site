import Link from 'next/link'

function IconInstagram() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2" y="2" width="20" height="20" rx="5.5" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
    </svg>
  )
}

export default function Footer() {
  return (
    <footer
      className="px-8 py-10"
      style={{ background: '#dde6e7' }}
    >
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">

        {/* Copyright + liens légaux */}
        <div className="flex flex-col gap-2">
          <span className="font-poppins text-[11px] text-brand-deep/50 tracking-[0.06em]">
            © {new Date().getFullYear()} Sea More Agency · Bordeaux
          </span>
          <div className="flex items-center gap-4">
            <Link
              href="/mentions-legales"
              className="font-poppins text-[10px] text-brand-deep/40 hover:text-brand-deep transition-colors tracking-[0.06em] uppercase"
            >
              Mentions légales
            </Link>
            <span className="text-brand-deep/20 text-[10px]">·</span>
            <Link
              href="/politique-de-confidentialite"
              className="font-poppins text-[10px] text-brand-deep/40 hover:text-brand-deep transition-colors tracking-[0.06em] uppercase"
            >
              Politique de confidentialité
            </Link>
          </div>
        </div>

        {/* Réseaux sociaux */}
        <div className="flex items-center gap-5">
          <Link
            href="https://www.instagram.com/edith.agency"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram @edith.agency"
            className="flex items-center gap-2 text-brand-deep/50 hover:text-brand-deep transition-colors group"
          >
            <IconInstagram />
            <span className="font-poppins text-[11px] uppercase tracking-[0.1em] hidden sm:block group-hover:text-brand-deep transition-colors">Instagram</span>
          </Link>
        </div>

      </div>
    </footer>
  )
}
