import { Metadata } from "next"
import Link from "next/link"
import { blogPosts } from "@/components/blog-posts/BlogData"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: 'Post Not Found',
      description: 'This blog post could not be found.',
    }
  }

  return {
    title: post.title,
    description: post.body,
    robots: {
      follow: true,
      index: true
    }
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return <div className="text-center text-red-500 dark:text-red-400">Post not found.</div>
  }

  const wordCount = post.body.split(' ').length
  const readTime = Math.ceil(wordCount / 200)

  return (
    <div className="max-w-2xl mx-auto p-6 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>

      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        By {post.author} · {new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })} · {readTime} min read
      </p>

      <p className="text-lg mb-8 leading-relaxed whitespace-pre-line">
        {post.body}
      </p>

      <Link href="/blog">
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-900 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition">
          ← Back to Blog
        </button>
      </Link>
    </div>
  )
}