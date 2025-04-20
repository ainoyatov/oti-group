import BlogList from "@/components/blog-posts/BlogList";

export default function MainBlogPage() {
  return (
    <main className="p-8 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-[#F5B429]">Blog</h1>
      <BlogList />
    </main>
  );
}