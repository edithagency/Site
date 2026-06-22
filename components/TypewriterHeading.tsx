'use client'

import { useEffect, useRef, useState } from 'react'
import type { ElementType, CSSProperties } from 'react'

interface Segment {
  text: string
  className?: string
}

interface Props {
  segments: Segment[]
  as?: ElementType
  className?: string
  style?: CSSProperties
  charDelay?: number
}

export default function TypewriterHeading({
  segments,
  as: Tag = 'h2',
  className,
  style,
  charDelay = 0.09,
}: Props) {
  const chars = segments.flatMap((segment) =>
    segment.text.split('').map((char) => ({ char, className: segment.className }))
  )

  const wrapRef = useRef<HTMLSpanElement>(null)
  const [started, setStarted] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    const el = wrapRef.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true)
          observer.disconnect()
        }
      },
      { threshold: 0.6 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!started || count >= chars.length) return
    const timeout = setTimeout(() => setCount((c) => c + 1), charDelay * 1000)
    return () => clearTimeout(timeout)
  }, [started, count, chars.length, charDelay])

  return (
    <Tag className={className} style={style}>
      <span ref={wrapRef} style={{ display: 'inline' }}>
        {chars.slice(0, count).map(({ char, className: charClass }, i) =>
          char === '\n' ? (
            <br key={i} />
          ) : (
            <span key={i} className={charClass}>
              {char === ' ' ? ' ' : char}
            </span>
          )
        )}
        {count < chars.length && (
          <span
            key="cursor"
            aria-hidden
            className="inline-block ml-1 align-middle"
            style={{
              width: '0.07em',
              height: '0.8em',
              background: 'currentColor',
              animation: 'cursorBlink 0.9s step-end infinite',
            }}
          />
        )}
      </span>
    </Tag>
  )
}
