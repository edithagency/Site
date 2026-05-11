import type { Metadata } from 'next'
import Link from 'next/link'
import BeforeAfterSlider from '@/components/BeforeAfterSlider'

export const metadata: Metadata = {
  title: 'Services Communication, Vidéo & Branding à Bordeaux et Paris | Edith Agency',
  description: 'Découvrez mes services en communication : vidéo, branding, community management, site web et SEO. Disponible à Bordeaux, Paris et partout en France.',
  openGraph: {
    title: 'Services Communication, Vidéo & Branding à Bordeaux et Paris | Edith Agency',
    description: 'Découvrez mes services en communication : vidéo, branding, community management, site web et SEO. Disponible à Bordeaux, Paris et partout en France.',
    locale: 'fr_FR',
    type: 'website',
  },
}

/* ── PHOTOS ASYMÉTRIQUES ──
   Remplacer chaque div coloré par un <Image> next/image quand les vraies photos sont disponibles.
   Les chemins suggérés sont indiqués en commentaire sur chaque bloc. */
function AsymmetricPhotos({ tone }: { tone: 'a' | 'b' | 'c' }) {
  const palettes = {
    a: ['bg-brand-mid/40', 'bg-brand-deep/25', 'bg-brand-mid/20'],
    b: ['bg-brand-deep/30', 'bg-brand-mid/30', 'bg-brand-yellow/25'],
    c: ['bg-brand-mid/25', 'bg-brand-deep/20', 'bg-brand-mid/35'],
  }
  const [c1, c2, c3] = palettes[tone]

  return (
    <div className="relative h-[420px] md:h-[500px]">
      {/* Photo 1 — haut gauche */}
      <div
        className={`absolute top-0 left-0 w-[58%] h-[54%] ${c1} rounded-xl shadow-sm`}
        style={{ transform: 'rotate(-2.5deg)', transformOrigin: 'top left' }}
      />
      {/* Photo 2 — milieu droite */}
      <div
        className={`absolute top-[22%] right-0 w-[52%] h-[50%] ${c2} rounded-xl shadow-sm`}
        style={{ transform: 'rotate(1.8deg)', transformOrigin: 'top right' }}
      />
      {/* Photo 3 — bas gauche */}
      <div
        className={`absolute bottom-0 left-[10%] w-[54%] h-[38%] ${c3} rounded-xl shadow-sm`}
        style={{ transform: 'rotate(-1.2deg)', transformOrigin: 'bottom left' }}
      />
    </div>
  )
}

function ServiceText({ num, name, deliverables }: { num: string; name: string; deliverables: string[] }) {
  return (
    <div>
      <p className="eyebrow mb-5">{num}</p>
      <h2
        className="font-display font-bold text-brand-deep mb-10 leading-tight"
        style={{ fontSize: 'clamp(28px, 3.5vw, 46px)' }}
      >
        {name}
      </h2>
      <ul className="divide-y divide-brand-deep/10">
        {deliverables.map((item) => (
          <li
            key={item}
            className="py-4 font-body text-[15px] text-brand-deep/75 flex items-start gap-3 leading-relaxed"
          >
            <span className="text-brand-mid shrink-0 mt-0.5">—</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function ServicesPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-0 overflow-hidden">
        <div className="relative w-full page-hero-banner bg-brand-deep/25 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-brand-cream/90" />
          <div className="absolute bottom-0 left-0 px-8 pb-16">
            <h1
              className="font-display font-black text-brand-deep leading-[0.9]"
              style={{ fontSize: 'clamp(44px, 7vw, 80px)' }}
            >
              <span className="block" style={{ whiteSpace: 'nowrap' }}>Des services pensés pour</span>
              <span className="block text-brand-yellow">votre marque.</span>
            </h1>
          </div>
        </div>
        <span
          className="absolute top-44 right-16 font-script text-brand-yellow hidden md:block"
          style={{ fontSize: 'clamp(26px, 2.5vw, 36px)', transform: 'rotate(-3deg)' }}
        >
          sur-mesure.
        </span>
      </section>

      {/* ── SERVICES ── */}
      <section>

        {/* 01 — Création de Contenu Vidéo | texte gauche · photos droite */}
        <div id="contenu-video" className="px-8 py-24 border-b border-brand-deep/10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          {/* Visuel en premier dans le DOM → mobile : visuel au-dessus */}
          <div className="md:order-2">
            <AsymmetricPhotos tone="a" />
            {/* Remplacer par les vraies photos : /images/services/video-1.jpg, video-2.jpg, video-3.jpg */}
          </div>
          <div className="md:order-1">
            <ServiceText
              num="01"
              name="Création de Contenu Vidéo"
              deliverables={[
                'Shooting vidéo (reels, stories, posts)',
                'Montage & post-production',
                'Motion design & habillage vidéo',
                'Vidéo corporate & storytelling de marque',
              ]}
            />
          </div>
        </div>

        {/* 02 — Community Management | slider gauche · texte droite */}
        <div id="community-management" className="px-8 py-24 border-b border-brand-deep/10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <BeforeAfterSlider
              beforeImage="/images/services/community-avant.jpg"
              afterImage="/images/services/community-apres.jpg"
              beforeAlt="Avant community management"
              afterAlt="Après community management"
            />
            {/* Remplacer par les vraies photos : community-avant.jpg et community-apres.jpg */}
          </div>
          <div>
            <ServiceText
              num="02"
              name="Community Management"
              deliverables={[
                'Gestion complète de tes réseaux sociaux',
                'Création et planification du calendrier éditorial',
                'Rédaction des captions & hashtags',
                'Reporting mensuel & analyse des performances',
              ]}
            />
          </div>
        </div>

        {/* 03 — Branding & Identité Visuelle | texte gauche · photos droite */}
        <div id="branding" className="px-8 py-24 border-b border-brand-deep/10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="md:order-2">
            <AsymmetricPhotos tone="b" />
            {/* Remplacer par les vraies photos : /images/services/branding-1.jpg, branding-2.jpg, branding-3.jpg */}
          </div>
          <div className="md:order-1">
            <ServiceText
              num="03"
              name="Branding & Identité Visuelle"
              deliverables={[
                'Création de logo',
                'Charte graphique complète (couleurs, typographies, univers visuel)',
                'Déclinaison sur tous tes supports (réseaux sociaux, site, print)',
                'Refonte d\'identité existante',
              ]}
            />
          </div>
        </div>

        {/* 04 — Stratégie de Communication | slider gauche · texte droite */}
        <div id="strategie" className="px-8 py-24 border-b border-brand-deep/10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <BeforeAfterSlider
              beforeImage="/images/services/strategie-avant.jpg"
              afterImage="/images/services/strategie-apres.jpg"
              beforeAlt="Avant stratégie de communication"
              afterAlt="Après stratégie de communication"
            />
            {/* Remplacer par les vraies photos : strategie-avant.jpg et strategie-apres.jpg */}
          </div>
          <div>
            <ServiceText
              num="04"
              name="Stratégie de Communication"
              deliverables={[
                'Audit de ta présence en ligne',
                'Définition de ta ligne éditoriale',
                'Stratégie réseaux adaptée à ta cible locale',
                'Accompagnement et conseils personnalisés',
              ]}
            />
          </div>
        </div>

        {/* 05 — Création de Site Web | texte gauche · slider droite */}
        <div id="site-web" className="px-8 py-24 border-b border-brand-deep/10 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="md:order-2">
            <BeforeAfterSlider
              beforeImage="/images/services/site-avant.jpg"
              afterImage="/images/services/site-apres.jpg"
              beforeAlt="Avant refonte de site"
              afterAlt="Après refonte de site"
            />
            {/* Remplacer par les vraies photos : site-avant.jpg et site-apres.jpg */}
          </div>
          <div className="md:order-1">
            <ServiceText
              num="05"
              name="Création de Site Web"
              deliverables={[
                'Site vitrine moderne, responsive et pensé pour convertir',
                'Conception UX/UI soignée et cohérente avec ton identité',
                'Intégration de formulaires, appels à l\'action et outils de réservation',
                'Maintenance, mises à jour et évolutions',
              ]}
            />
          </div>
        </div>

        {/* 06 — SEO & Visibilité en ligne | photos gauche · texte droite */}
        <div id="seo" className="px-8 py-24 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div>
            <AsymmetricPhotos tone="c" />
            {/* Remplacer par les vraies photos : /images/services/seo-1.jpg, seo-2.jpg, seo-3.jpg */}
          </div>
          <div>
            <ServiceText
              num="06"
              name="SEO & Visibilité en ligne"
              deliverables={[
                'Audit SEO complet de ton site existant',
                'Optimisation technique (vitesse, structure, balises)',
                'Rédaction de contenus optimisés pour Google',
                'Référencement local (Google My Business, avis, citations)',
              ]}
            />
          </div>
        </div>

      </section>

      {/* ── CTA FINAL ── */}
      <section className="px-8 py-20 border-t border-brand-deep/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <p className="eyebrow mb-3">Basée à Bordeaux et Paris, disponible partout en France</p>
          <h2
            className="font-display font-black text-brand-deep leading-[0.9]"
            style={{ fontSize: 'clamp(32px, 4vw, 52px)' }}
          >
            Un projet en tête ?{' '}
            <span
              className="text-brand-yellow"
            >
              Parlons-en.
            </span>
          </h2>
        </div>
        <div className="flex flex-col gap-3 items-start md:items-end">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-brand-deep text-brand-cream font-body text-[12px] uppercase tracking-[0.12em] px-7 py-4 rounded-full hover:opacity-80 transition-opacity"
          >
            Me contacter
          </Link>
          <Link
            href="/audit"
            className="inline-flex items-center gap-2 border border-brand-deep text-brand-deep font-body text-[12px] uppercase tracking-[0.12em] px-7 py-4 rounded-full hover:bg-brand-deep hover:text-brand-cream transition-colors"
          >
            Faire mon Audit Express ✦
          </Link>
        </div>
      </section>
    </>
  )
}
