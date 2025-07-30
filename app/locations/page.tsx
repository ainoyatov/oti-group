import Image from "next/image";
import Link from "next/link";
import type { Entry, Asset } from "contentful";
import type { Metadata } from "next";
import { fetchAllLocationPages } from "@/lib/contentful/contentful";

export const revalidate = 60;

export const metadata: Metadata = {
  title: "Our Locations",
  description:
    "Find our locations and services in your area. We serve multiple cities and regions.",
  openGraph: {
    title: "Our Locations",
    description:
      "Find our locations and services in your area. We serve multiple cities and regions.",
    type: "website",
  },
};

export default async function LocationsPage() {
  const { locations, total } = await fetchAllLocationPages(100, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-yellow-600 mb-8">Our Locations</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locations.map((location) => {
          const fields = (location as Entry<any>).fields;
          const title = String(fields.title || "Location");
          const slug = String(fields.slug || "");
          const metaDescription = String(fields.metaDescription || "");
          const imageUrl = (fields.image as Asset)?.fields?.file?.url;

          return (
            <div
              key={location.sys.id}
              className="border rounded-xl p-6 shadow-sm hover:shadow-md transition duration-200"
            >
              {/* Location Image */}
              {imageUrl && (
                <div className="aspect-video relative overflow-hidden mb-4 rounded-lg">
                  <Image
                    src={`https:${imageUrl}`}
                    alt={title}
                    fill
                    className="object-cover"
                  />
                </div>
              )}

              <h2 className="text-xl font-semibold mb-2">{title}</h2>
              {metaDescription && (
                <p className="text-gray-500 text-sm mb-4">{metaDescription}</p>
              )}
              <Link
                href={`/locations/${slug}`}
                className="inline-block mt-auto text-yellow-600 font-medium hover:underline"
              >
                <div className="bg-yellow-400 text-white px-4 py-2 rounded-md inline-flex items-center">
                  Learn More →
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
