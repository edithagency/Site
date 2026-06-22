'use client'

import { useRouter } from 'next/navigation'

export default function BackButton() {
  const router = useRouter()

  return (
    <button
      onClick={() => router.back()}
      aria-label="Retour"
      className="group absolute top-24 left-8 flex items-center justify-center w-11 h-11 rounded-full border border-brand-deep/20 bg-white shadow-sm hover:bg-brand-deep hover:border-brand-deep transition-colors duration-200"
    >
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path
          d="M16 10H4M4 10L9 5M4 10L9 15"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-brand-deep group-hover:text-brand-cream transition-colors duration-200"
        />
      </svg>
    </button>
  )
}
