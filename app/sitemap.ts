import type { MetadataRoute } from 'next'
import { clients } from '@/data/clients'

const BASE = 'https://seamoreagency.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const pages: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'monthly', priority: 1 },
    { url: `${BASE}/services`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/projets`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/creation-de-contenu`, lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${BASE}/contact`, lastModified: now, changeFrequency: 'yearly', priority: 0.7 },
    { url: `${BASE}/mentions-legales`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
    { url: `${BASE}/politique-de-confidentialite`, lastModified: now, changeFrequency: 'yearly', priority: 0.1 },
  ]
  const projets: MetadataRoute.Sitemap = clients.map((c) => ({
    url: `${BASE}/projets/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))
  return [...pages, ...projets]
}
