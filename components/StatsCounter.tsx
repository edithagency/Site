'use client'

import { useEffect, useRef, useState } from 'react'

/* ── Données modifiables ── */
const STATS = [
  { value: 50, suffix: '+', label: 'Vidéos produites' },
  { value: 12, suffix: '', label: 'Marques accompagnées' },
  { value: 30000, suffix: '', label: 'Abonnés générés', format: true },
]

function easeOutExpo(t: number): number {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

function formatNumber(n: number): string {
  if (n >= 1000) return (n / 1000).toFixed(n % 1000 === 0 ? 0 : 1).replace('.', ',') + ' K'
  return n.toString()
}

function Counter({ value, suffix, format }: { value: number; suffix: string; format?: boolean }) {
  const [count, setCount] = useState(0)
  const [started, setStarted] = useState(false)
  const ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !started) setStarted(true) },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [started])

  useEffect(() => {
    if (!started) return
    const duration = 2000
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = Math.min((now - startTime) / duration, 1)
      const eased = easeOutExpo(elapsed)
      setCount(Math.round(eased * value))
      if (elapsed < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [started, value])

  return (
    <span ref={ref}>
      {format ? formatNumber(count) : count}{suffix}
    </span>
  )
}

export default function StatsCounter() {
  return (
    <section style={{ padding: '16px 32px' }}>
      <div
        style={{
          background: '#66a2ad',
          borderRadius: 48,
          padding: 'clamp(36px, 5vw, 60px) clamp(40px, 6vw, 80px)',
          maxWidth: 960,
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(3, minmax(200px, 1fr))',
          gap: '16px 32px',
          textAlign: 'center',
        }}
      >
        {STATS.map((stat, i) => (
          <div key={i} style={{ minWidth: 0 }}>
            <p
              style={{
                fontFamily: 'var(--font-display), serif',
                fontWeight: 900,
                fontSize: 'clamp(44px, 5.5vw, 68px)',
                lineHeight: 1,
                color: '#f4db75',
                margin: '0 0 10px',
                letterSpacing: '-0.02em',
                fontVariantNumeric: 'tabular-nums',
                whiteSpace: 'nowrap',
              }}
            >
              <Counter value={stat.value} suffix={stat.suffix} format={stat.format} />
            </p>
            <p
              style={{
                fontFamily: 'var(--font-body), sans-serif',
                fontWeight: 400,
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.8)',
                margin: 0,
              }}
            >
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
