
import BlogList from "@/components/blog-posts/BlogList";

export default function MainBlogPage() {
    
    return(
        <main className="p-8">
            <h1 className="text-4xl">Blog</h1>
            <BlogList />
        </main>
    );
}