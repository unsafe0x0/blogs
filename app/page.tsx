import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import blogsData from "@/data/Data";

export default function BlogsPage() {
  const blogs = blogsData;

  return (
    <div className="max-w-2xl mx-auto px-3 py-10 space-y-10">
      <div className="space-y-5">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">Blogs</h1>
          <p className="text-neutral-400 mt-2">
            Technical blogs about software development, AI, and programming.
          </p>
        </div>
        <button className="inline-flex items-center bg-white text-neutral-900 px-5 py-2 text-sm hover:bg-neutral-200 transition-colors cursor-pointer rounded-md">
          <Link
            href="https://priyanxhu.me"
            target="_blank"
            rel="noopener noreferrer"
          >
            Portfolio
          </Link>
        </button>
      </div>

      <div className="space-y-6">
        {blogs.map((blog) => (
          <BlogCard key={blog.slug} blog={blog} />
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="text-center py-16">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-neutral-400">
              No blogs yet
            </h2>
            <p className="text-neutral-500">
              I'm working on some great content. Check back soon!
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
