import { Metadata } from "next"
import { blogPosts } from "@/components/blog-posts/BlogData"


export const metadata: Metadata = {
  title: 'Blog',
  description: 'real estate advice, home selling tips, Dallas property market, foreclosure prevention, property management insights, investment property strategies, homeowner resources, real estate market trends, selling a house in Texas, cash home sales explained, does selling to an investor make sense?, how to sell my home before relocating Dallas, selling a house that needs major repairs Dallas, what’s the fastest way to sell my house in Texas, can I sell my house in 7 days?, who can buy my house this week in Dallas?, how to sell a house with bad tenants Dallas, how to avoid foreclosure in Texas, when is the best time to sell a house in Dallas?, how to sell an inherited house in Texas, selling a house while in probate, real estate scams to avoid',
  robots: {
    follow: true,
    index: true
  },
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <div>Post not found.</div>
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-800">{post.body}</p>
    </div>
  )
}