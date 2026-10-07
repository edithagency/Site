import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/', disallow: '/api/' },
    sitemap: 'https://seamoreagency.com/sitemap.xml',
    host: 'https://seamoreagency.com',
  }
}
