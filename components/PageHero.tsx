import Image from 'next/image'
import Link from 'next/link'
import ScrollDownArrow from '@/components/ScrollDownArrow'

interface PageHeroProps {
  backgroundImage?: string
  backgroundVideo?: string
  videoBrightness?: number
  leftImage?: string
  rightImage?: string
  title: string
  titleImage?: string   // si défini, remplace visuellement le titre texte par ce logo
  titleFontSize?: string // override de la taille du titre texte
  tags?: string[]       // services/catégories en pills, affichés au-dessus du titre
  lead?: string         // phrase d'accroche en majuscules, police The Seasons
  leadSmall?: string    // ligne secondaire sous l'accroche, même police, plus petite
  taglineBelow?: string // ligne en majuscules sous le titre, même typo que leadSmall
  subtitle?: string     // lieu · date
  caption?: string    // description courte
  buttonLabel?: string
  buttonHref?: string
  overlayOpacity?: number
}

export default function PageHero({
  backgroundImage,
  backgroundVideo,
  videoBrightness = 1,
  leftImage,
  rightImage,
  title,
  titleImage,
  titleFontSize,
  tags,
  lead,
  leadSmall,
  taglineBelow,
  subtitle,
  caption,
  buttonLabel,
  buttonHref = '#',
  overlayOpacity = 45,
}: PageHeroProps) {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">

      {/* Fond — vidéo en boucle OU image unique OU split 2 images */}
      <div className="absolute inset-0">
        {backgroundVideo ? (
          <video
            src={backgroundVideo}
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
            style={{ filter: `brightness(${videoBrightness}) contrast(1.06) saturate(1.1)` }}
          />
        ) : backgroundImage ? (
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover crisp-image"
            priority
            sizes="100vw"
            unoptimized
          />
        ) : (
          <div className="flex h-full">
            <div className="relative w-1/2">
              {leftImage
                ? <Image src={leftImage} alt="" fill className="object-cover crisp-image" priority sizes="50vw" unoptimized />
                : <div className="w-full h-full bg-brand-deep" />
              }
            </div>
            <div className="relative w-1/2">
              {rightImage
                ? <Image src={rightImage} alt="" fill className="object-cover crisp-image" priority sizes="50vw" unoptimized />
                : <div className="w-full h-full bg-brand-mid" />
              }
            </div>
          </div>
        )}
      </div>

      {/* Overlay sombre */}
      <div className="absolute inset-0 bg-black" style={{ opacity: overlayOpacity / 100 }} />

      {/* Contenu centré */}
      <div className="relative z-10 flex flex-col items-center text-center text-white px-6 max-w-5xl mx-auto" style={{ marginTop: titleImage ? -36 : 0 }}>
        {/* Sous-accroche */}
        {leadSmall && (
          <p
            className="font-poppins"
            style={{
              textTransform: 'uppercase',
              fontWeight: 500,
              fontSize: 16,
              letterSpacing: '0.2em',
              color: 'white',
              marginBottom: 60,
            }}
          >
            {leadSmall}
          </p>
        )}

        {/* Pills services/catégories */}
        {tags && tags.length > 0 && (
          <div className="flex flex-wrap items-center justify-center gap-2" style={{ marginBottom: 20 }}>
            {tags.map((t) => (
              <span
                key={t}
                style={{
                  fontFamily: 'var(--font-poppins), sans-serif',
                  fontSize: 11,
                  letterSpacing: '0.14em',
                  fontWeight: 400,
                  textTransform: 'uppercase',
                  color: 'white',
                  border: '1px solid rgba(255,255,255,0.5)',
                  borderRadius: 999,
                  padding: '6px 18px',
                  display: 'inline-block',
                }}
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {titleImage ? (
          <h1 style={{ marginBottom: subtitle ? 20 : 60 }}>
            <span className="sr-only">{title}</span>
            <Image
              src={titleImage}
              alt={title}
              width={600}
              height={140}
              className="w-full h-auto"
              style={{ width: '740px' }}
              priority
              unoptimized
            />
          </h1>
        ) : (
          <h1
            style={{
              fontFamily: "'The Seasons', serif",
              fontSize: titleFontSize ?? 'clamp(26px, 4.2vw, 64px)',
              lineHeight: 1.05,
              color: 'white',
              fontWeight: 700,
              whiteSpace: titleFontSize ? 'normal' : 'nowrap',
              textTransform: 'uppercase',
              marginBottom: taglineBelow ? 44 : subtitle ? 20 : 44,
            }}
          >
            {title}
          </h1>
        )}

        {/* Ligne sous le titre */}
        {taglineBelow && (
          <p
            className="font-poppins whitespace-normal sm:whitespace-nowrap"
            style={{
              textTransform: 'uppercase',
              fontWeight: 500,
              fontSize: 'clamp(13px, 1.8vw, 21px)',
              letterSpacing: '0.15em',
              color: 'white',
              marginBottom: subtitle ? 20 : 44,
              maxWidth: '90vw',
            }}
          >
            {taglineBelow}
          </p>
        )}


        {/* Accroche */}
        {lead && (
          <p
            style={{
              fontFamily: "'The Seasons', serif",
              textTransform: 'uppercase',
              fontWeight: 700,
              fontSize: 'clamp(27px, 3.2vw, 38px)',
              color: 'white',
              marginBottom: 12,
              maxWidth: 1100,
            }}
          >
            {lead}
          </p>
        )}

        {/* Lieu · date */}
        {subtitle && (
          <p
            style={{
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 'clamp(16px, 1.8vw, 20px)',
              color: 'rgba(255,255,255,1)',
              fontWeight: 400,
              marginBottom: caption ? 16 : 48,
              maxWidth: 1100,
              lineHeight: 1.65,
              whiteSpace: 'pre-line',
            }}
          >
            {subtitle}
          </p>
        )}

        {caption && (
          <p
            className="line-clamp-2"
            style={{
              fontFamily: 'var(--font-poppins), sans-serif',
              fontSize: 'clamp(14px, 1.4vw, 18px)',
              color: 'white',
              fontWeight: 300,
              marginBottom: 48,
              maxWidth: 780,
              lineHeight: 1.65,
            }}
          >
            {caption}
          </p>
        )}

        {buttonLabel && (
          <Link
            href={buttonHref}
            className="inline-flex items-center bg-white text-brand-deep text-[12px] uppercase tracking-[0.2em] px-9 py-4 rounded-full hover:opacity-80 transition-opacity duration-300"
            style={{ fontFamily: 'var(--font-poppins), sans-serif', fontWeight: 400 }}
          >
            {buttonLabel}
          </Link>
        )}
      </div>

      <ScrollDownArrow />
    </section>
  )
}
