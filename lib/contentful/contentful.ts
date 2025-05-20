import { createClient } from "contentful";

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID!,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN!,
  })
  
export async function fetchEntries() {
    const entries = await client.getEntries()
    return entries.items
}
  
export async function fetchPostBySlug(slug: string) {
    const entries = await client.getEntries({
    content_type: 'realtyBlog',
    'fields.slug': slug,
    include: 2, // 👈 This includes referenced entries (e.g., SEO and Author)
    limit: 1,
    })

    if (!entries.items.length) {
    console.warn(`No blog post found for slug: ${slug}`)
    return null
    }

    return entries.items[0]
}