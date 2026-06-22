'use client'

export default function ScrollDownArrow() {
  function handleClick() {
    window.scrollBy({ top: window.innerHeight * 0.9, behavior: 'smooth' })
  }

  return (
    <button
      onClick={handleClick}
      aria-label="Défiler vers le bas"
      className="absolute bottom-28 left-1/2 -translate-x-1/2 z-10 w-20 h-20 flex items-center justify-center text-white cursor-pointer group"
    >
      <svg width="48" height="48" viewBox="0 0 20 20" fill="none" className="transition-transform duration-300 group-hover:scale-125">
        <path d="M4 7L10 13L16 7" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  )
}
