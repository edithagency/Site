'use client'

import 'leaflet/dist/leaflet.css'
import { useEffect, useRef, useState } from 'react'
import TypewriterHeading from './TypewriterHeading'

/* ──────────────────────────────────────────────────────────────────────────
   POINTS DE LA CARTE
   Remplacez les données fictives par vos vrais clients.
   Types :
     "client"  → redirige vers /projets/slug (badge or)
     "vidéo"   → redirige vers /creation-de-contenu#slug (badge bleu)
     "photos"  → redirige vers /creation-de-contenu#slug (badge neutre)
────────────────────────────────────────────────────────────────────────── */
const CLIENTS = [
  // ── BORDEAUX ──────────────────────────────────────────────────────────
  { id: 1,  nom: 'Tigermilk',                   ville: 'Bordeaux, France',              lat: 44.8414, lng: -0.5752, type: 'vidéo',  lien: '/creation-de-contenu#tigermilk',                 youtubeId: '7rmG4xVU_wc' },
  { id: 2,  nom: 'Fufu Ramen',                  ville: 'Bordeaux, France',              lat: 44.8378, lng: -0.5734, type: 'vidéo',  lien: '/creation-de-contenu#fufu-ramen',                youtubeId: 'HjzK-FiCOLY' },
  { id: 3,  nom: 'Les Bûcherons',               ville: 'Bordeaux, France',              lat: 44.8412, lng: -0.5701, type: 'client', lien: '/projets/bucherons-barber',          youtubeId: 'cA7L6fpHlIY' },
  { id: 4,  nom: 'Prod Daiki',                  ville: 'Bordeaux, France',              lat: 44.8378, lng: -0.5792, type: 'client', lien: '/projets/prod-daiki',                youtubeId: '', photoUrl: '/images/clients/prod-daiki-card.jpg' },
  { id: 5,  nom: 'Brique House',                ville: 'Bordeaux, France',              lat: 44.8489, lng: -0.5734, type: 'vidéo',  lien: '/creation-de-contenu#brique-house',              youtubeId: 'F_RIqdHRppM' },
  { id: 6,  nom: 'Centre Commercial Mériadeck', ville: 'Bordeaux, France',              lat: 44.8378, lng: -0.5812, type: 'vidéo',  lien: '/creation-de-contenu#meriadeck',                 youtubeId: 'YaSk1hCU52w' },
  { id: 7,  nom: 'Quiz Room Paris',             ville: 'Paris, France',                 lat: 48.8534, lng: 2.3389,  type: 'vidéo',  lien: '/creation-de-contenu#quizz-room',                youtubeId: 'KWCNliP9neQ' },
  { id: 8,  nom: 'Dopio Malto',                 ville: 'Bordeaux, France',              lat: 44.8523, lng: -0.6012, type: 'vidéo',  lien: '/creation-de-contenu#dopio-malto',               youtubeId: 'Gdsu5btorHM' },
  { id: 34, nom: 'SUPERDRY',                    ville: 'Bordeaux, France',              lat: 44.8442, lng: -0.5728, type: 'vidéo',  lien: '/creation-de-contenu#superdry',                  youtubeId: 'J_k-8tIOTUk' },
  { id: 35, nom: 'OXXY Club',                   ville: 'Bordeaux, France',              lat: 44.8355, lng: -0.5765, type: 'vidéo',  lien: '/creation-de-contenu#oxxy',                      youtubeId: '2zp7arQTa4U' },
  { id: 39, nom: 'La Belle en Folie',           ville: 'Bordeaux, France',              lat: 44.8401, lng: -0.5756, type: 'vidéo',  lien: '/creation-de-contenu#la-belle-en-folie',         youtubeId: 'jRQakJEC04g' },
  // ── BAYONNE ───────────────────────────────────────────────────────────
  { id: 9,  nom: 'Les Burgers de Colette',      ville: 'Bayonne, France',               lat: 43.4929, lng: -1.4749, type: 'vidéo',  lien: '/creation-de-contenu#burgers-de-colette',        youtubeId: 'ol6a83A61Gw' },
  // ── PARIS ─────────────────────────────────────────────────────────────
  { id: 10, nom: 'Canopé',                      ville: 'Paris, France',                 lat: 48.8778, lng: 2.3234,  type: 'vidéo',  lien: '/creation-de-contenu#canope',                    youtubeId: 'ILYeD37zjKg' },
  { id: 11, nom: 'Les Artizans',                ville: 'Paris, France',                 lat: 48.8634, lng: 2.3478,  type: 'vidéo',  lien: '/creation-de-contenu#les-artizans',              youtubeId: '7MKGIU5CaMY' },
  { id: 12, nom: 'Brique Machine',              ville: 'Paris, France',                 lat: 48.8656, lng: 2.3478,  type: 'vidéo',  lien: '/creation-de-contenu#brique-machine',            youtubeId: 'BNwl3nb_vZw' },
  { id: 13, nom: 'Grupomimmo',                  ville: 'Paris, France',                 lat: 48.8658, lng: 2.3481,  type: 'vidéo',  lien: '/creation-de-contenu#grupomimmo',                youtubeId: 'fIO_aQ76Sps' },
  { id: 14, nom: 'Studio On',                   ville: 'Paris, France',                 lat: 48.8834, lng: 2.3112,  type: 'vidéo',  lien: '/creation-de-contenu#studio-on',                 youtubeId: 'zRsZ4u47aR8' },
  { id: 15, nom: 'Pepita',                      ville: 'Paris, France',                 lat: 48.8523, lng: 2.3434,  type: 'vidéo',  lien: '/creation-de-contenu#pepita',                    youtubeId: 'nWOXmHtZErM' },
  { id: 16, nom: 'La Madonnina',                ville: 'Paris, France',                 lat: 48.8712, lng: 2.3623,  type: 'vidéo',  lien: '/creation-de-contenu#la-madonnina',              youtubeId: 'Y-_wiXrdb9I' },
  { id: 17, nom: 'La Cantina',                  ville: 'Paris, France',                 lat: 48.8478, lng: 2.2734,  type: 'vidéo',  lien: '/creation-de-contenu#la-cantina',                youtubeId: 'k6eUr_cSTGs' },
  { id: 18, nom: 'Alimento',                    ville: 'Paris, France',                 lat: 48.8512, lng: 2.3523,  type: 'vidéo',  lien: '/creation-de-contenu#alimento',                  youtubeId: 'j0bWUN7Bqys' },
  { id: 19, nom: 'Senza Nome',                  ville: 'Paris, France',                 lat: 48.8601, lng: 2.3412,  type: 'vidéo',  lien: '/creation-de-contenu#senza-nome',                youtubeId: '0JQnnAlIfjM' },
  { id: 20, nom: 'Time Tripper',                ville: 'Paris, France',                 lat: 48.8389, lng: 2.3189,  type: 'vidéo',  lien: '/creation-de-contenu#time-tripper',              youtubeId: 'w7eybFbsOAQ' },
  { id: 21, nom: "Muzi'Quiz",                   ville: 'Paris, France',                 lat: 48.8712, lng: 2.3489,  type: 'vidéo',  lien: '/creation-de-contenu#muziquiz',                  youtubeId: 's9XRlXO0pSg' },
  { id: 22, nom: 'La Consigne',                 ville: 'Paris, France',                 lat: 48.8445, lng: 2.3234,  type: 'photos', lien: '/creation-de-contenu#la-consigne',               youtubeId: '', photoUrl: '/images/ugc/la-consigne.jpg' },
  // ── BARCELONE ─────────────────────────────────────────────────────────
  { id: 23, nom: 'Itinéraire sur Mesure',       ville: 'Barcelone, Espagne',            lat: 41.3851, lng: 2.1734,  type: 'client', lien: '/projets/itineraire-sur-mesure',                      youtubeId: '', photoUrl: '/images/clients/itineraire-card.jpg' },
  { id: 29, nom: 'Itinéraire sur Mesure',       ville: 'Barcelone, Espagne',            lat: 41.3862, lng: 2.1718,  type: 'vidéo',  lien: '/creation-de-contenu#itineraire-sur-mesure', youtubeId: 'R2o8j4PAsuE' },
  { id: 30, nom: 'Itinéraire sur Mesure',       ville: 'Barcelone, Espagne',            lat: 41.3840, lng: 2.1750,  type: 'vidéo',  lien: '/creation-de-contenu#itineraire-sur-mesure', youtubeId: 'THA_3oHWZMw' },
  { id: 31, nom: 'Itinéraire sur Mesure',       ville: 'Barcelone, Espagne',            lat: 41.3875, lng: 2.1760,  type: 'vidéo',  lien: '/creation-de-contenu#itineraire-sur-mesure', youtubeId: 'Z0IHgLn5Akk' },
  // ── MAROC ─────────────────────────────────────────────────────────────
  { id: 24, nom: 'Emeraude Luxury Camp',        ville: 'Agafay, Maroc',                 lat: 31.5634, lng: -8.1012, type: 'photos', lien: '/creation-de-contenu#emeraude-luxury-camp',      youtubeId: '', photoUrl: '/images/ugc/emeraude-luxury-camp.jpg' },
  // ── ITALIE ────────────────────────────────────────────────────────────
  { id: 25, nom: 'Librairie Française de Florence', ville: 'Florence, Italie',          lat: 43.7696, lng: 11.2478, type: 'client', lien: '/projets/librairie-de-florence',      youtubeId: '', photoUrl: '/images/ugc/librairie-de-florence.jpg' },
  { id: 26, nom: 'Agriturismo i Millepini',     ville: 'Loro Ciuffenna, Italie',        lat: 43.5923, lng: 11.6634, type: 'photos', lien: '/creation-de-contenu#agriturismo-i-millepini',   youtubeId: '', photoUrl: '/images/ugc/agriturismo-i-millepini.jpg' },
  // ── MADRID ────────────────────────────────────────────────────────────
  { id: 27, nom: 'Shoko Madrid',                ville: 'Madrid, Espagne',               lat: 40.4063, lng: -3.7112, type: 'vidéo',  lien: '/creation-de-contenu#shoko-madrid',              youtubeId: 'YJ838ZjW9eE' },
  // ── PARIS (suite) ─────────────────────────────────────────────────────
  { id: 28, nom: 'Merci Internet',              ville: 'Paris, France',                 lat: 48.8823, lng: 2.3489,  type: 'vidéo',  lien: '/creation-de-contenu#merci-internet',            youtubeId: '5q_Qv_EgZy0' },
  { id: 32, nom: 'Armelle Crêperie',           ville: 'Paris, France',                 lat: 48.8678, lng: 2.3445,  type: 'vidéo',  lien: '/creation-de-contenu#armelle-creperie',          youtubeId: 'Kog2u-FPI1A' },
  { id: 33, nom: 'Quartier Général',           ville: 'Paris, France',                 lat: 48.8512, lng: 2.3434,  type: 'vidéo',  lien: '/creation-de-contenu#quartier-general',          youtubeId: 'WPw6Ees54Dc' },
  { id: 38, nom: 'GARANCIA',                   ville: 'Paris, France',                 lat: 48.8530, lng: 2.2611,  type: 'vidéo',  lien: '/creation-de-contenu#garancia',                  youtubeId: 'EKR_xMVPx7M' },
  // ── MOUGINS ───────────────────────────────────────────────────────────
  { id: 37, nom: 'Luxéol',                     ville: 'Mougins, France',               lat: 43.6004, lng: 6.9989,  type: 'vidéo',  lien: '/creation-de-contenu#luxeol',                    youtubeId: 'Ka8LJPUqw6s' },
  // ── LITUANIE ──────────────────────────────────────────────────────────
  { id: 36, nom: 'BURGA',                      ville: 'Kaunas, Lituanie',              lat: 54.8985, lng: 23.9036, type: 'vidéo',  lien: '/creation-de-contenu#burga',                     youtubeId: 'Fhpk2IL4RvA' },
]

/* Vue initiale — Europe + Maghreb */
const INITIAL_CENTER: [number, number] = [44.0, 2.0]
const INITIAL_ZOOM = 5

/* Zoom par ville au clic */
const CITY_ZOOM: Record<string, number> = {
  'Bordeaux, France':           14,
  'Paris, France':              13,
  'Bayonne, France':            14,
  'Barcelone, Espagne':         13,
  'Agafay, Maroc':              12,
  'Florence, Italie':           13,
  'Loro Ciuffenna, Italie':     13,
  'Madrid, Espagne':            13,
  'Mougins, France':            14,
  'Kaunas, Lituanie':           13,
}

/* Couleur et taille des marqueurs par type */
const TYPE_COLOR: Record<string, string> = {
  'vidéo':  '#66a2ad',
  'client': '#f4db75',
  'photos': '#c9b8a5',
}
const TYPE_SIZE: Record<string, number> = {
  'vidéo':  12,
  'client': 15,
  'photos': 12,
}

const CREAM = '#ffffff'

/* ── CSS injecté dans la page ── */
const MAP_STYLES = `
  /* Mer bleu pâle, terres blanc cassé */
  .leaflet-tile {
    filter: saturate(1.5) brightness(1.08) contrast(0.95);
  }

  .map-pin {
    border-radius: 50%;
    border: 2px solid rgba(255,255,255,0.5);
    animation: pulse-pin 2.8s ease-out infinite;
  }
  .map-pin-client {
    border-radius: 50%;
    border: 2.5px solid rgba(255,255,255,0.6);
    animation: pulse-client 2.8s ease-out infinite;
  }
  @keyframes pulse-pin {
    0%   { box-shadow: 0 0 0 0   rgba(43,97,107,0.55); }
    70%  { box-shadow: 0 0 0 10px rgba(43,97,107,0);   }
    100% { box-shadow: 0 0 0 0   rgba(43,97,107,0);    }
  }
  @keyframes pulse-client {
    0%   { box-shadow: 0 0 0 0   rgba(244,219,117,0.9); }
    70%  { box-shadow: 0 0 0 16px rgba(244,219,117,0);  }
    100% { box-shadow: 0 0 0 0   rgba(244,219,117,0);   }
  }

  /* Popup — fond crème */
  .mp-wrap .leaflet-popup-content-wrapper {
    background: #ffffff !important;
    border: 1px solid rgba(43,97,107,0.15) !important;
    border-radius: 14px !important;
    box-shadow: 0 16px 48px rgba(43,97,107,0.18) !important;
    padding: 0 !important;
    overflow: hidden !important;
  }
  .mp-wrap .leaflet-popup-content { margin: 0 !important; }
  .mp-wrap .leaflet-popup-tip-container { display: none !important; }
  .mp-wrap .leaflet-popup-close-button {
    color: rgba(43,97,107,0.4) !important;
    font-size: 22px !important;
    top: 6px !important; right: 10px !important;
    padding: 0 !important; z-index: 10 !important; line-height: 1 !important;
  }
  .mp-wrap .leaflet-popup-close-button:hover { color: #2b616b !important; }

  .mp-body { padding: 18px 22px 16px; min-width: 200px; }
  .mp-badge {
    display: inline-block; padding: 3px 10px; border-radius: 999px;
    font-family: var(--font-poppins); font-size: 9px; letter-spacing: 0.18em;
    text-transform: uppercase; margin-bottom: 10px;
  }
  .mp-city {
    font-family: var(--font-poppins); font-size: 9px;
    letter-spacing: 0.22em; text-transform: uppercase;
    color: rgba(43,97,107,0.4); margin: 0 0 5px;
  }
  .mp-name {
    font-family: var(--font-poppins); font-weight: 700;
    font-size: 17px; line-height: 1.2; color: #2b616b; margin: 0 0 14px;
  }
  .mp-btn {
    display: inline-block; padding: 10px 18px; border-radius: 999px;
    font-family: var(--font-poppins); font-size: 11px;
    letter-spacing: 0.12em; text-transform: uppercase;
    text-decoration: none; font-weight: 500; cursor: pointer;
  }

  /* Contrôles zoom */
  .leaflet-control-zoom { border: none !important; box-shadow: none !important; }
  .leaflet-control-zoom a {
    background: #ffffff !important;
    border: 1px solid rgba(43,97,107,0.2) !important;
    color: #2b616b !important;
    width: 32px !important; height: 32px !important; line-height: 30px !important;
    border-radius: 8px !important; margin-bottom: 4px !important;
    font-size: 17px !important; text-decoration: none !important;
    display: block !important; text-align: center !important;
    backdrop-filter: blur(4px) !important;
  }
  .leaflet-control-zoom a:hover { background: #2b616b !important; color: #e7e3dd !important; }
  .leaflet-control-attribution {
    background: rgba(231,227,221,0.7) !important;
    color: rgba(43,97,107,0.4) !important;
    font-size: 9px !important; border-radius: 4px 0 0 0 !important; padding: 2px 6px !important;
  }
  .leaflet-control-attribution a { color: rgba(43,97,107,0.5) !important; }
  .leaflet-attribution-flag { display: none !important; }
`

function popupHTML(client: typeof CLIENTS[number]): string {
  const badgeStyles: Record<string, string> = {
    vidéo:  'background:rgba(43,97,107,0.12);color:#2b616b;',
    client: 'background:rgba(244,219,117,0.5);color:#7a6200;',
    photos: 'background:rgba(43,97,107,0.08);color:rgba(43,97,107,0.6);',
  }
  const btnStyles: Record<string, string> = {
    vidéo:  'background:#2b616b;color:#e7e3dd;',
    client: 'background:#f4db75;color:#2b616b;',
    photos: 'background:rgba(43,97,107,0.12);color:#2b616b;border:1px solid rgba(43,97,107,0.2);',
  }
  const btnLabels: Record<string, string> = {
    vidéo:  'Voir la vidéo →',
    client: 'Voir le projet →',
    photos: 'Voir les photos →',
  }
  const thumbSrc = client.youtubeId
    ? `https://img.youtube.com/vi/${client.youtubeId}/maxresdefault.jpg`
    : client.photoUrl ?? ''
  const thumbnail = thumbSrc
    ? `<img src="${thumbSrc}" alt="${client.nom}" style="width:calc(100% + 44px);margin:-18px -22px 14px;display:block;border-radius:14px 14px 0 0;aspect-ratio:16/9;object-fit:cover;" />`
    : `<div style="width:calc(100% + 44px);margin:-18px -22px 14px;height:90px;background:rgba(43,97,107,0.08);border-radius:14px 14px 0 0;display:flex;align-items:center;justify-content:center;">${
        client.type === 'vidéo' ? '<span style="color:rgba(43,97,107,0.25);font-size:22px;">▶</span>' : ''
      }</div>`

  return `
    <div class="mp-body">
      ${thumbnail}
      <span class="mp-badge" style="${badgeStyles[client.type]}">${client.type}</span>
      <p class="mp-city">${client.ville}</p>
      <p class="mp-name">${client.nom}</p>
      <a href="${client.lien}" class="mp-btn" style="${btnStyles[client.type]}">${btnLabels[client.type]}</a>
    </div>
  `
}

/* ── COMPOSANT ── */
interface FranceMapProps {
  showCounter?: boolean
  eyebrow?: string
  title?: string
  titleAccent?: string
}

export default function FranceMap({ showCounter = true, eyebrow, title, titleAccent }: FranceMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<ReturnType<typeof import('leaflet')['map']> | null>(null)
  const [count, setCount] = useState(0)
  const [counted, setCounted] = useState(false)

  /* ── Initialisation Leaflet ── */
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return

    const init = async () => {
      const L = (await import('leaflet')).default

      const map = L.map(containerRef.current!, {
        center: INITIAL_CENTER,
        zoom: INITIAL_ZOOM,
        zoomControl: false,
        scrollWheelZoom: false,
        minZoom: 3,
        maxZoom: 18,
      })

      /* Le zoom à la molette ne s'active qu'après un clic sur la carte */
      map.on('click', () => map.scrollWheelZoom.enable())

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map)

      L.control.zoom({ position: 'bottomright' }).addTo(map)

      /* Marqueurs — apparition décalée */
      CLIENTS.forEach((client, i) => {
        const size  = TYPE_SIZE[client.type] ?? 12
        const color = TYPE_COLOR[client.type] ?? '#66a2ad'
        const cls   = client.type === 'client' ? 'map-pin-client' : 'map-pin'

        const icon = L.divIcon({
          className: '',
          html: `<div class="${cls}" style="width:${size}px;height:${size}px;background:${color};"></div>`,
          iconSize:   [size, size],
          iconAnchor: [size / 2, size / 2],
        })

        setTimeout(() => {
          if (!mapRef.current) return
          const marker = L.marker([client.lat, client.lng], { icon }).addTo(map)

          marker.on('click', () => {
            const targetZoom = CITY_ZOOM[client.ville] ?? 12
            map.flyTo([client.lat, client.lng], targetZoom, { animate: true, duration: 0.9 })
            setTimeout(() => {
              L.popup({ className: 'mp-wrap', maxWidth: 260 })
                .setLatLng([client.lat, client.lng])
                .setContent(popupHTML(client))
                .openOn(map)
            }, 950)
          })
        }, 400 + i * 100)
      })

      mapRef.current = map
    }

    init()

    return () => {
      mapRef.current?.remove()
      mapRef.current = null
    }
  }, [])

  /* ── Compteur animé (projets page uniquement) ── */
  useEffect(() => {
    const el = containerRef.current
    if (!el || !showCounter) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting && !counted) setCounted(true) },
      { threshold: 0.2 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [counted, showCounter])

  useEffect(() => {
    if (!counted || !showCounter) return
    const target = CLIENTS.length
    const steps = 60
    const interval = 1400 / steps
    let current = 0
    const timer = setInterval(() => {
      current += 1
      setCount(Math.min(Math.round((current / steps) * target), target))
      if (current >= steps) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [counted, showCounter])

  const recenter = () => mapRef.current?.setView(INITIAL_CENTER, INITIAL_ZOOM)

  return (
    <div className={`px-8 md:px-20 pb-24 ${showCounter ? 'py-16' : 'pt-14'}`}>
      <div className="max-w-[1400px] mx-auto">
      <style dangerouslySetInnerHTML={{ __html: MAP_STYLES }} />

      {/* Titre */}
      {title && (
        <div className="mb-10">
          {eyebrow && <p className="eyebrow mb-3">{eyebrow}</p>}
          <TypewriterHeading
            className="text-brand-deep leading-[0.9]"
            style={{ fontFamily: "'The Seasons', serif", fontWeight: 700, fontSize: 'clamp(32px, 4.5vw, 56px)' }}
            segments={
              titleAccent && title.endsWith(titleAccent)
                ? [
                    { text: title.slice(0, title.length - titleAccent.length) },
                    { text: titleAccent, className: 'text-brand-mid' },
                  ]
                : [{ text: title }]
            }
          />
        </div>
      )}

      {/* Compteur */}
      {showCounter && (
        <div className="text-center mb-10">
          <p className="eyebrow mb-3">Présence internationale</p>
          <p className="font-poppins font-black text-brand-deep leading-none" style={{ fontSize: 'clamp(52px, 7vw, 80px)' }}>
            {count}
          </p>
          <p className="font-poppins font-light text-brand-deep/60 text-[13px] mt-2 tracking-wide">
            marques accompagnées en France, Espagne, Italie, Maroc, Lituanie
          </p>
        </div>
      )}

      {/* Carte */}
      <div className="relative isolate rounded-2xl overflow-hidden h-[350px] md:h-[500px]"
           style={{ boxShadow: `0 0 80px 40px ${CREAM} inset` }}>
        <div ref={containerRef} className="absolute inset-0" />

        {/* Fondus bords */}
        <div className="absolute inset-x-0 top-0 h-20 pointer-events-none"
             style={{ background: `linear-gradient(to bottom, ${CREAM}, transparent)` }} />
        <div className="absolute inset-x-0 bottom-0 h-20 pointer-events-none"
             style={{ background: `linear-gradient(to top, ${CREAM}, transparent)` }} />
        <div className="absolute inset-y-0 left-0 w-16 pointer-events-none"
             style={{ background: `linear-gradient(to right, ${CREAM}, transparent)` }} />
        <div className="absolute inset-y-0 right-0 w-16 pointer-events-none"
             style={{ background: `linear-gradient(to left, ${CREAM}, transparent)` }} />

        {/* Recentrer */}
        <button
          onClick={recenter}
          className="absolute top-4 left-4 z-[1000] font-poppins text-[10px] uppercase tracking-[0.14em] px-4 py-2 rounded-full transition-colors"
          style={{ background: '#ffffff', color: '#2b616b', border: '1px solid rgba(43,97,107,0.15)' }}
        >
          Recentrer
        </button>

        {/* Légende */}
        <div className="absolute bottom-4 left-4 z-[1000] flex gap-3 rounded-xl px-4 py-2.5 backdrop-blur-sm"
             style={{ background: '#ffffff', border: '1px solid rgba(43,97,107,0.12)' }}>
          {([['client', '#f4db75'], ['vidéo', '#2b616b'], ['photos', '#c9b8a5']] as const).map(([label, color]) => (
            <div key={label} className="flex items-center gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color, border: label === 'client' ? '1px solid rgba(43,97,107,0.2)' : 'none' }} />
              <span className="font-poppins text-[9px] uppercase tracking-wider" style={{ color: 'rgba(43,97,107,0.65)' }}>{label}</span>
            </div>
          ))}
        </div>
      </div>
      </div>
    </div>
  )
}
