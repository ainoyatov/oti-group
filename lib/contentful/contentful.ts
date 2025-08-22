import { createClient } from "contentful";
import { cache } from 'react'

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
})

// Existing function with cache
export const fetchPostBySlug = cache(async (slug: string) => {
    const entries = await client.getEntries({
        content_type: 'realtyBlog',
        'fields.slug': slug,
        include: 2,
        limit: 1,
    })

    if (!entries.items.length) {
        console.warn(`No blog post found for slug: ${slug}`)
        return null
    }

    return entries.items[0]
})

// New function: Fetch all blog posts for listing pages
export const fetchAllBlogPosts = cache(async (limit: number = 100, skip: number = 0) => {
    try {
        const entries = await client.getEntries({
            content_type: 'realtyBlog',
            limit,
            skip,
            order: ['-fields.publishedDate'], // Order by published date, newest first
            include: 2,
        })

        return {
            posts: entries.items,
            total: entries.total,
            hasMore: entries.total > skip + limit
        }
    } catch (error) {
        console.error('Error fetching blog posts:', error)
        return {
            posts: [],
            total: 0,
            hasMore: false
        }
    }
})

// New function: Fetch blog posts for sitemap (lightweight)
export const fetchBlogPostsForSitemap = cache(async () => {
    try {
        const entries = await client.getEntries({
            content_type: 'realtyBlog',
            limit: 1000, // Adjust based on your needs
            order: ['-sys.createdAt'],
            select: ['fields.slug', 'fields.publishedDate', 'sys.updatedAt']
        })

        return entries.items
    } catch (error) {
        console.error('Error fetching blog posts for sitemap:', error)
        return []
    }
})

export const fetchLocationBySlug = cache(async (slug: string) => {
    const entries = await client.getEntries({
        content_type: 'locationPage',
        'fields.slug': slug,
        include: 2,
        limit: 1,
    })

    if (!entries.items.length) {
        console.warn(`No location page found for slug: ${slug}`)
        return null
    }

    return entries.items[0]
})

// Fetch all location pages for listing
export const fetchAllLocationPages = cache(async (limit: number = 100, skip: number = 0) => {
    try {
        const entries = await client.getEntries({
            content_type: 'locationPage',
            limit,
            skip,
            order: ['fields.title'], // Order alphabetically by title
            include: 2,
        })

        return {
            locations: entries.items,
            total: entries.total,
            hasMore: entries.total > skip + limit
        }
    } catch (error) {
        console.error('Error fetching location pages:', error)
        return {
            locations: [],
            total: 0,
            hasMore: false
        }
    }
})

// Fetch location pages for sitemap (lightweight)
export const fetchLocationPagesForSitemap = cache(async () => {
    try {
        const entries = await client.getEntries({
            content_type: 'locationPage',
            limit: 1000, // Adjust based on your needs
            order: ['fields.title'],
            select: ['fields.slug', 'sys.updatedAt']
        })

        return entries.items
    } catch (error) {
        console.error('Error fetching location pages for sitemap:', error)
        return []
    }
})
