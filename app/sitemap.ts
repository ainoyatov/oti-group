import { MetadataRoute } from 'next'
import { fetchBlogPostsForSitemap, fetchLocationPagesForSitemap } from '../lib/contentful/contentful'
import type { Entry } from "contentful";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://yourdomain.com'

    // Static routes - add your static pages here
    const staticRoutes: MetadataRoute.Sitemap = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 1,
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'daily',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/locations`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/contact-us`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        {
            url: `${baseUrl}/appointment`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: `${baseUrl}/how-it-works`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.4,
        },
        {
            url: `${baseUrl}/faq`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.6,
        },
        {
            url: `${baseUrl}/directions`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/privacy-policy`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.2,
        }
    ]

    // Fetch dynamic blog posts using the utility function
    const blogPosts = await fetchBlogPostsForSitemap()

    const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post: Entry<any>) => {
        const slug = post.fields?.slug
        const publishedDate = post.fields?.publishedDate
        const updatedAt = post.sys?.updatedAt

        // Use the most recent date between published and updated
        const lastModified = updatedAt
            ? new Date(updatedAt)
            : publishedDate
                ? (typeof publishedDate === 'string' || typeof publishedDate === 'number' || publishedDate instanceof Date
                    ? new Date(publishedDate)
                    : new Date())
                : new Date()

        return {
            url: `${baseUrl}/blog/${slug}`,
            lastModified,
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        }
    }).filter(route => route.url.includes('/blog/')) // Filter out any posts without slugs

    // Fetch dynamic location pages
    const locationPages = await fetchLocationPagesForSitemap()

    const locationRoutes: MetadataRoute.Sitemap = locationPages.map((location: Entry<any>) => {
        const slug = location.fields?.slug
        const updatedAt = location.sys?.updatedAt

        const lastModified = updatedAt ? new Date(updatedAt) : new Date()

        return {
            url: `${baseUrl}/locations/${slug}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8, // High priority for location pages
        }
    }).filter(route => route.url.includes('/locations/')) // Filter out any locations without slugs

    // Combine all routes
    const allRoutes = [
        ...staticRoutes,
        ...blogRoutes,
        ...locationRoutes,
    ]

    // Sort by priority (highest first) then by lastModified (newest first)
    allRoutes.sort((a, b) => {
        if (a.priority !== b.priority) {
            return (b.priority || 0) - (a.priority || 0)
        }
        return new Date(b.lastModified || 0).getTime() - new Date(a.lastModified || 0).getTime()
    })

    return allRoutes
}
