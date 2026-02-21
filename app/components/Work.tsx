import Link from "next/link";

const projects = [
  { title: "Project One", tag: null, slug: "#" },
  { title: "Project Two", tag: null, slug: "#" },
  { title: "Project Three", tag: "New", slug: "#" },
  { title: "Project Four", tag: null, slug: "#" },
];

export function Work() {
  return (
    <section id="work" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <h2 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
          Selected Work
        </h2>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.slug}
              className="group block"
            >
              <div className="aspect-[4/3] rounded-lg border border-foreground/10 bg-foreground/5 transition-colors group-hover:bg-foreground/10" />
              <div className="mt-4 flex items-center justify-between">
                <h3 className="font-medium group-hover:underline">
                  {project.title}
                </h3>
                {project.tag && (
                  <span className="rounded bg-foreground/10 px-2 py-0.5 text-xs font-medium">
                    {project.tag}
                  </span>
                )}
              </div>
            </Link>
          ))}
        </div>
        <Link
          href="#"
          className="mt-12 inline-block text-sm font-medium underline underline-offset-4"
        >
          View more work
        </Link>
      </div>
    </section>
  );
}
