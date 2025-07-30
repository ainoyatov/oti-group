import { fetchPostBySlug } from "../../../lib/contentful/contentful";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import type { Entry, Asset } from "contentful";
import type { Metadata, ResolvingMetadata } from "next";
import { richTextRenderOptions } from "@/lib/contentful/components";

export const revalidate = 30;

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post does not exist.",
    };
  }

  const fields = (post as Entry<any>).fields;

  // Handle SEO fields properly - they might be nested or direct
  let seoFields: any = undefined;
  if (fields.seoFields) {
    // If seoFields is an Entry object with nested fields
    if (typeof fields.seoFields === "object" && "fields" in fields.seoFields) {
      seoFields = fields.seoFields.fields;
    }
    // If seoFields is directly the fields object
    else if (typeof fields.seoFields === "object") {
      seoFields = fields.seoFields;
    }
  }

  // Fallback to main post fields if SEO fields are not available
  const title = seoFields?.pageTitle || fields.title || "Blog Post";
  const description =
    seoFields?.pageDescription ||
    fields.subtitle ||
    "Read our latest blog post";

  // Get featured image for Open Graph
  const featuredImageUrl = (fields.featuredImage as Asset)?.fields?.file?.url;
  const imageUrl = featuredImageUrl ? `https:${featuredImageUrl}` : undefined;

  return {
    title,
    description,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    robots: {
      index: seoFields?.noIndex !== true, // Default to true unless explicitly set to true
      follow: seoFields?.noFollow !== true, // Default to true unless explicitly set to true
    },
    openGraph: {
      title,
      description,
      url: `/blog/${slug}`,
      siteName: "Your Site Name", // Replace with your actual site name
      type: "article",
      ...(imageUrl && {
        images: [
          {
            url: imageUrl,
            alt: title,
          },
        ],
      }),
      ...(fields.publishedDate && {
        publishedTime: new Date(String(fields.publishedDate)).toISOString(),
      }),
      ...(fields.author && {
        authors: [
          String(
            (fields.author as Entry<any>)?.fields?.name || "Unknown Author"
          ),
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imageUrl && { images: [imageUrl] }),
    },
    ...(fields.publishedDate && {
      other: {
        "article:published_time": new Date(
          String(fields.publishedDate)
        ).toISOString(),
        ...(fields.author && {
          "article:author": String(
            (fields.author as Entry<any>)?.fields?.name || "Unknown Author"
          ),
        }),
      },
    }),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = await fetchPostBySlug(slug);

  if (!post) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-red-500 mb-4">Post Not Found</h1>
        <p className="text-gray-600 mb-6">
          The blog post you're looking for doesn't exist.
        </p>
        <Link href="/blog">
          <button className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            ← Back to Blog
          </button>
        </Link>
      </div>
    );
  }

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

  // Calculate estimated read time based on content
  const getReadTime = (content: Document): number => {
    const text = JSON.stringify(content);
    const wordsPerMinute = 200;
    const wordCount = text.split(" ").length;
    return Math.max(1, Math.ceil(wordCount / wordsPerMinute));
  };

  const readTime = bodyText ? getReadTime(bodyText as Document) : 3;

  return (
    <article className="max-w-3xl mx-auto px-4 py-12">
      {/* Article Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4 leading-tight">
          {String(title)}
        </h1>

        {subtitle && (
          <p className="text-xl text-gray-600 mb-6 leading-relaxed">
            {String(subtitle)}
          </p>
        )}

        <div className="flex items-center gap-3 text-sm text-gray-500">
          {authorAvatar && (
            <Image
              src={`https:${authorAvatar}`}
              alt={authorName}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div>
            <span className="font-medium text-gray-700">By {authorName}</span>
            <span className="mx-2">•</span>
            <time dateTime={String(publishedDate)}>
              {new Date(String(publishedDate)).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            <span className="mx-2">•</span>
            <span>{readTime} min read</span>
          </div>
        </div>
      </header>

      {/* Featured Image */}
      {imageUrl && (
        <div className="mb-8">
          <Image
            src={`https:${imageUrl}`}
            alt={String(title)}
            width={800}
            height={500}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-lg max-w-none mb-12">
        {bodyText &&
          documentToReactComponents(
            bodyText as Document,
            richTextRenderOptions
          )}
      </div>

      {/* Navigation */}
      <nav className="mb-12">
        <Link href="/blog">
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            ← Back to Blog
          </button>
        </Link>
      </nav>

      {/* Related Articles */}
      {Array.isArray(relatedBlogPosts) && relatedBlogPosts.length > 0 && (
        <section>
          <h2 className="text-2xl font-bold mb-6">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {relatedBlogPosts.map((rel: any) => {
              const relFields = (rel as Entry<any>).fields;
              const relTitle = String(relFields.title);
              const relSlug = String(relFields.slug);
              const relSubtitle = String(relFields.subtitle || "");
              const relAuthorFields = (relFields.author as Entry<any>)?.fields;
              const relAuthorName = String(
                relAuthorFields?.name || "Unknown Author"
              );
              const relAuthorAvatar = (relAuthorFields?.avatar as Asset)?.fields
                ?.file?.url;
              const relDate = new Date(
                String(relFields.publishedDate)
              ).toLocaleDateString("en-US", {
                year: "numeric",
                month: "short",
                day: "numeric",
              });

              return (
                <article
                  key={rel.sys.id}
                  className="border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200"
                >
                  <div className="flex items-center gap-3 mb-3">
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
                      By {relAuthorName} • {relDate}
                    </p>
                  </div>

                  <h3 className="text-lg font-semibold mb-2 leading-tight">
                    {relTitle}
                  </h3>

                  {relSubtitle && (
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {relSubtitle}
                    </p>
                  )}

                  <Link
                    href={`/blog/${relSlug}`}
                    className="inline-block mt-auto"
                  >
                    <div className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-md inline-flex items-center transition-colors">
                      Read More →
                    </div>
                  </Link>
                </article>
              );
            })}
          </div>
        </section>
      )}
    </article>
  );
}
