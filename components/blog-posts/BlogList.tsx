'use client';

import Link from "next/link";
import { blogPosts } from "./BlogData";

const BlogList = () => {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {blogPosts.map((post, index) => {
        const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'short',
          day: 'numeric'
        })

        const wordCount = post.body.split(' ').length
        const readTime = Math.ceil(wordCount / 200)

        return (
          <div key={post.slug} className="border rounded-xl p-4 hover:shadow-md transition bg-white dark:bg-gray-800 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <img
                  src={`https://i.pravatar.cc/40?img=${index + 1}`}
                  alt="Author"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex flex-col text-sm text-gray-500 dark:text-gray-400">
                  <div>By {post.author}</div> 
                  <div>{formattedDate} · {readTime} min read</div>
                </div>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">{post.title}</h2>
              <p className="text-gray-700 dark:text-gray-300 text-sm mb-4">
                {post.body.split('. ')[1] ? post.body.split('. ')[1] + '.' : post.body.split('. ')[0] + '.'}
              </p>
            </div>
            <Link href={`/blog/${post.slug}`}>
              <button className="mt-auto px-4 py-2 bg-[#F5B429] text-white rounded hover:bg-[#e2a821] transition">
                Read More →
              </button>
            </Link>
          </div>
        )
      })}
    </div>
  )
}

export default BlogList