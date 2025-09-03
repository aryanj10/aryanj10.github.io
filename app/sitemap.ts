import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://example.com'
  return [
    { url: base, lastModified: new Date() },
    { url: base + '/projects', lastModified: new Date() },
    { url: base + '/experience', lastModified: new Date() },
    { url: base + '/blog', lastModified: new Date() },
    { url: base + '/about', lastModified: new Date() },
    { url: base + '/contact', lastModified: new Date() },
  ]
}
