import BlogList from "@/components/blog-posts/BlogList";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Discover expert advice on buying and selling homes, avoiding foreclosure, understanding the Dallas property market, and maximizing your home’s value. Get practical tips from Vince Chimoga to make confident real estate decisions.',
    robots: {
      follow: true,
      index: true
    },
  }

export default function MainBlogPage() {
  return (
    <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#F5B429]">Blog</h1>
      <BlogList />
    </main>
  );
}