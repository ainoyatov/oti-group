'use client';

import Link from "next/link";
import { blogPosts } from "./BlogData";

const BlogList = () => {

    return (
        <div className="space-y-6">
            {blogPosts.map((post) => (
                <Link
                    href={`/blog/${post.slug}`}
                    key={post.slug}
                >
                    <div className="cursor-pointer border p-4 hover:bg-gray-100 rounded">
                        <h2 className="text-xl font-bold">{post.title}</h2>
                        <p className="text-gray-700">{post.body}</p>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export default BlogList;