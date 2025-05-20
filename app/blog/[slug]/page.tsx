import { fetchPostBySlug } from "../../../lib/contentful/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import type { Entry, Asset } from "contentful";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) return <div className="text-center text-red-500">Post not found</div>;

  const fields = (post as Entry<any>).fields;
  
  const {
    title,
    subtitle,
    publishedDate,
    bodyText,
    featuredImage,
    author,
    relatedBlogPosts,
  } = fields;

  const authorFields = (author as Entry<any>)?.fields;
  const authorName = String(authorFields?.name || "Unknown Author");
  const authorAvatar = (authorFields?.avatar as Asset)?.fields?.file?.url;
  const imageUrl = (featuredImage as Asset)?.fields?.file?.url;

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">{String(title)}</h1>

      <div className="text-sm text-gray-500 mb-6 flex items-center gap-3">
        {authorAvatar && (
          <Image
            src={`https:${authorAvatar}`}
            alt={authorName}
            width={32}
            height={32}
            className="rounded-full"
          />
        )}
        <span>
          By {authorName} • {new Date(String(publishedDate)).toLocaleDateString()} • 3 min read
        </span>
      </div>

      {subtitle && <p className="italic text-gray-600 mb-6">{String(subtitle)}</p>}

      {imageUrl && (
        <div className="mb-6">
          <Image
            src={`https:${imageUrl}`}
            alt={String(title)}
            width={800}
            height={500}
            className="rounded-lg"
          />
        </div>
      )}

      <div className="prose max-w-none mb-12 prose-p:mb-4 space-y-2">
        {documentToReactComponents(bodyText as Document)}
      </div>

      <div className="mb-12">
        <Link href="/blog">
          <button className="px-4 py-2 bg-gray-200 rounded-md hover:bg-gray-300">
            ← Back to Blog
          </button>
        </Link>
      </div>

      {Array.isArray(relatedBlogPosts) && relatedBlogPosts.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-4">Related Articles</h3>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedBlogPosts.map((rel: any) => {
              const relFields = (rel as Entry<any>).fields;
              const relTitle = String(relFields.title);
              const relSlug = String(relFields.slug);
              const relSubtitle = String(relFields.subtitle || "");
              const relAuthorFields = (relFields.author as Entry<any>)?.fields;
              const relAuthorName = String(relAuthorFields?.name || "Unknown Author");
              const relAuthorAvatar = (relAuthorFields?.avatar as Asset)?.fields?.file?.url;
              const relDate = new Date(String(relFields.publishedDate)).toLocaleDateString();

              return (
                <div
                  key={rel.sys.id}
                  className="border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200"
                >
                  <div className="flex items-center gap-3 mb-2">
                    {relAuthorAvatar && (
                      <Image
                        src={`https:${relAuthorAvatar}`}
                        alt={relAuthorName}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                    )}
                    <p className="text-sm text-gray-500">
                      By {relAuthorName} • {relDate} • 3 min read
                    </p>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{relTitle}</h4>
                  {relSubtitle && <p className="text-gray-600 text-sm mb-4">{relSubtitle}</p>}
                  <Link
                    href={`/blog/${relSlug}`}
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
      )}
    </article>
  );
}
