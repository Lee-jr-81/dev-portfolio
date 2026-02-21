import Link from "next/link";

const posts = [
  {
    title: "Blog post one",
    excerpt: "A short excerpt for your latest article.",
    slug: "#",
  },
  {
    title: "Blog post two",
    excerpt: "A short excerpt for your latest article.",
    slug: "#",
  },
  {
    title: "Blog post three",
    excerpt: "A short excerpt for your latest article.",
    slug: "#",
  },
];

export function Blog() {
  return (
    <section className="border-t border-foreground/10 px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
          From the Blog
        </h2>
        <h3 className="mt-4 text-3xl font-bold tracking-tight">
          Latest Articles
        </h3>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link
              key={post.title}
              href={post.slug}
              className="group block"
            >
              <div className="aspect-[16/10] rounded-lg border border-foreground/10 bg-foreground/5 transition-colors group-hover:bg-foreground/10" />
              <h4 className="mt-4 font-semibold group-hover:underline">
                {post.title}
              </h4>
              <p className="mt-2 text-sm text-foreground/70">{post.excerpt}</p>
            </Link>
          ))}
        </div>
        <Link
          href="#"
          className="mt-12 inline-block text-sm font-medium underline underline-offset-4"
        >
          View more posts
        </Link>
      </div>
    </section>
  );
}
