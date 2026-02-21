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
    <section className="border-t border-foreground/10 py-section">
      <div>
        <h2 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
          From the Blog
        </h2>
        <h3 className="mt-6 text-headline">
          Latest Articles
        </h3>
        <div className="mt-20 grid gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <Link key={post.title} href={post.slug} className="group block">
              <div className="aspect-16/10 rounded-lg border border-foreground/10 bg-foreground/5 transition-colors group-hover:bg-foreground/10" />
              <h4 className="mt-6 text-xl font-semibold group-hover:underline">
                {post.title}
              </h4>
              <p className="mt-4 text-body text-foreground/70">{post.excerpt}</p>
            </Link>
          ))}
        </div>
        <Link
          href="#"
          className="mt-16 inline-block text-body font-medium underline underline-offset-4"
        >
          View more posts
        </Link>
      </div>
    </section>
  );
}
