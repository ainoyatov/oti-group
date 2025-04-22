import { Metadata } from "next"
import Link from "next/link"
import { blogPostsNew } from "@/components/blog-posts/BlogData"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const post = blogPostsNew.find((p) => p.slug === slug)

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
  const post = blogPostsNew.find((p) => p.slug === slug)

  if (!post) {
    return <div className="text-center text-red-500 dark:text-red-400">Post not found.</div>
  }

  const wordCount = post.body.split(' ').length
  const readTime = Math.ceil(wordCount / 200)

  const relatedPosts = blogPostsNew
  .filter((p) =>
    p.slug !== slug &&
    p.tags.some(tag => post.tags.includes(tag))
  )
  .slice(0, 2) // pick 2 most related

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

      <p className="text-lg mb-4 leading-relaxed whitespace-pre-line">
        {post.body}
      </p>

      <div className="mb-8 flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <span key={tag} className="px-3 py-1 text-sm bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full">
            #{tag}
          </span>
        ))}
      </div>

      <Link href="/blog">
        <button className="px-4 py-2 bg-gray-200 dark:bg-gray-700 dark:text-white text-gray-900 hover:bg-gray-300 dark:hover:bg-gray-600 rounded transition">
          ← Back to Blog
        </button>
      </Link>

      <div className="mt-12">
        <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Related Articles</h3>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2">
          {relatedPosts.map((related, index) => {
            const formattedDate = new Date(related.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'short',
              day: 'numeric'
            })

            const wordCount = related.body.split(' ').length
            const readTime = Math.ceil(wordCount / 200)

            return (
              <Link href={`/blog/${related.slug}`} key={related.slug}>
                <div className="border rounded-xl p-4 hover:shadow-md transition bg-white dark:bg-gray-800 flex flex-col justify-between h-full">
                  <div className="flex items-center gap-3 mb-2">
                    <img
                      src={`https://i.pravatar.cc/40?img=${index + 4}`}
                      alt="Author"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      By {related.author} · {formattedDate} · {readTime} min read
                    </div>
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">{related.title}</h4>
                  <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                    {related.body.split('. ')[1] ? related.body.split('. ')[1] + '.' : related.body.split('. ')[0] + '.'}
                  </p>
                  <button className="mt-auto px-4 py-2 bg-[#F5B429] text-white rounded hover:bg-[#e2a821] transition w-fit">
                    Read More →
                  </button>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

    </div>
  )
}