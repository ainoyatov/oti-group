import { fetchEntries } from "@/lib/contentful/contentful";
import Link from "next/link";
import Image from "next/image";
import type { Entry, Asset } from "contentful";

export default async function BlogPage() {
  const posts = await fetchEntries();

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-yellow-600 mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post: any) => {
          const fields = (post as Entry<any>).fields;
          const { title, subtitle, publishedDate, slug, author } = fields;
          const authorFields = (author as Entry<any>)?.fields;
          const authorName = String(authorFields?.name || "Unknown Author");
          const authorAvatar = (authorFields?.avatar as Asset)?.fields?.file?.url;

          return (
            <div
              key={post.sys.id}
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200"
            >
              <div className="flex items-center gap-3 mb-2">
                {authorAvatar && (
                  <Image
                    src={`https:${authorAvatar}`}
                    alt={authorName}
                    width={32}
                    height={32}
                    className="rounded-full"
                  />
                )}
                <p className="text-sm text-gray-500">
                  By {authorName} • {new Date(String(publishedDate)).toLocaleDateString()} • 3 min read
                </p>
              </div>
              <h2 className="text-xl font-semibold mb-2">{String(title)}</h2>
              {subtitle && <p className="text-gray-600 text-sm mb-4">{String(subtitle)}</p>}
              <Link
                href={`/blog/${String(slug)}`}
                className="inline-block mt-auto text-yellow-600 font-medium hover:underline"
              >
                <div className="bg-yellow-400 text-white px-4 py-2 rounded-md inline-flex items-center">
                  Read More →
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}