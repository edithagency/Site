import Link from 'next/link'
import Image from 'next/image'
import type { Client } from '@/data/clients'

interface ClientCardProps {
  client: Client
  style?: React.CSSProperties
}

export default function ClientCard({ client, style }: ClientCardProps) {
  return (
    <Link href={`/projets/${client.slug}`} className="group block" style={style}>
      <div className="relative overflow-hidden rounded-lg bg-brand-deep mb-4" style={{ aspectRatio: '1/1' }}>

        {client.cardImage ? (
          <Image
            src={client.cardImage}
            alt={client.name}
            fill
            sizes="(max-width: 768px) 50vw, 33vw"
            className="object-cover crisp-image"
            unoptimized
          />
        ) : (
          <div className="absolute inset-0 bg-brand-mid/50" />
        )}

        {/* Overlay hover */}
        <div className="absolute inset-0 bg-brand-deep/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-lg transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
            →
          </span>
        </div>

        {/* Année */}
        <span className="absolute top-4 right-4 font-poppins text-[10px] text-brand-cream/60 tracking-widest uppercase">
          {client.year}
        </span>
      </div>

      <p className="eyebrow mb-1">{client.category}</p>
      <p className="text-brand-deep text-xl group-hover:text-brand-mid transition-colors" style={{ fontFamily: "'The Seasons', serif", fontWeight: 400 }}>
        {client.name}
      </p>
    </Link>
  )
}
