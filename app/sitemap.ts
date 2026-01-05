import { MetadataRoute } from 'next'


const projects = [
  { slug: 'muj-eshop-projekt', date: new Date('2023-12-01') },
  { slug: 'design-system', date: new Date('2024-01-15') },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://michaelptacek.com'
  const projectUrls = projects.map((project) => ({
    url: `${baseUrl}/projects/${project.slug}`,
    lastModified: project.date,
    priority: 0.7,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      priority: 0.5,
    },
    ...projectUrls,
  ]
}