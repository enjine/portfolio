import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/api/og/*',
            disallow: '/',
        },
        sitemap: 'https://dicandia.tech/sitemap.xml',
    }
}
