import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { Document } from "@contentful/rich-text-types";
import Image from "next/image";
import Link from "next/link";
import type { Entry, Asset } from "contentful";
import type { Metadata, ResolvingMetadata } from "next";
import { fetchLocationBySlug } from "@/lib/contentful/contentful";
import { richTextRenderOptions } from "@/lib/contentful/components";

export const revalidate = 30;

type Props = {
  params: Promise<{ slug: string }>;
};

// Helper function to safely convert Contentful field to string
function toSafeString(value: any): string {
  if (typeof value === "string") return value;
  if (typeof value === "number") return String(value);
  if (typeof value === "boolean") return String(value);
  return "";
}

// Rich text rendering options with proper table and heading styling

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  const location = await fetchLocationBySlug(slug);

  if (!location) {
    return {
      title: "Location Not Found",
      description: "The requested location page does not exist.",
    };
  }

  const fields = (location as Entry<any>).fields;

  // Safely convert fields to strings
  const title = toSafeString(fields.title) || "Location Page";
  const description =
    toSafeString(fields.metaDescription) || "Learn more about this location";
  const canonicalUrl =
    toSafeString(fields.canonicalUrl) || `/locations/${slug}`;

  // Get featured image for Open Graph
  const featuredImageUrl = (fields.image as Asset)?.fields?.file?.url;
  const imageUrl = featuredImageUrl ? `https:${featuredImageUrl}` : undefined;

  // Safely get image dimensions
  const imageDetails = (fields.image as Asset)?.fields?.file?.details;
  const imageWidth =
    imageDetails && "image" in imageDetails
      ? imageDetails.image?.width || 1200
      : 1200;
  const imageHeight =
    imageDetails && "image" in imageDetails
      ? imageDetails.image?.height || 630
      : 630;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      title,
      description,
      url: `/locations/${slug}`,
      siteName: "Your Site Name", // Replace with your actual site name
      type: "website",
      ...(imageUrl && {
        images: [
          {
            url: imageUrl,
            width: imageWidth,
            height: imageHeight,
            alt: title,
          },
        ],
      }),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(imageUrl && { images: [imageUrl] }),
    },
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = await fetchLocationBySlug(slug);

  if (!location) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-12 text-center">
        <h1 className="text-4xl font-bold text-white mb-4">
          Location Not Found
        </h1>
        <p className="text-gray-400 mb-6">
          The location page you're looking for doesn't exist.
        </p>
        <Link href="/locations">
          <button className="flex flex-row p-2 px-4 gap-2 text-xl items-center cursor-pointer max-lg:hidden transition-transform transform hover:scale-125 active:scale-125 bg-[#F5B429] text-white hover:bg-orange-500 active:bg-orange-500 rounded-md shadow-2xl mx-auto">
            ← Back to Locations
          </button>
        </Link>
      </div>
    );
  }

  const fields = (location as Entry<any>).fields;
  const { title, content, image } = fields;

  // Safely convert title to string
  const pageTitle = toSafeString(title);
  const imageUrl = (image as Asset)?.fields?.file?.url;

  return (
    <article className="max-w-4xl mx-auto px-4 py-12">
      {/* Page Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-6 leading-tight">{pageTitle}</h1>
      </header>

      {/* Featured Image */}
      {imageUrl && (
        <div className="mb-8">
          <Image
            src={`https:${imageUrl}`}
            alt={pageTitle}
            width={1200}
            height={600}
            className="rounded-lg w-full h-auto"
            priority
          />
        </div>
      )}

      {/* Location Content */}
      <div className="max-w-none mb-12">
        {content &&
          documentToReactComponents(content as Document, richTextRenderOptions)}
      </div>

      {/* Navigation */}
      <nav className="mb-12">
        <Link href="/locations">
          <button className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600">
            ← Back to Locations
          </button>
        </Link>
      </nav>
    </article>
  );
}
