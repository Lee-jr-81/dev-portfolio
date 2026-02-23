import Image from "next/image";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="border-t border-foreground/10 py-40">
      <div>
        <div className="flex flex-col md:items-start items-center">
          <h2 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
            2019 - Present
          </h2>
          <h3 className="text-4xl font-semibold">My Work</h3>
        </div>
        <div className="mt-12 grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <a
              key={project.title}
              href={`/projects/${project.slug}`}
              className="group block"
            >
              <div className="relative aspect-4/3 overflow-hidden rounded-lg border border-foreground/10 bg-foreground/5 transition-colors group-hover:bg-foreground/10">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover  transition-transform group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="mt-4 flex items-center justify-between">
                <h4 className="text-lg font-medium transition-colors duration-300 group-hover:text-primary">
                  {project.title}
                </h4>
                {project.tag && (
                  <span className="rounded bg-foreground/10 px-2 py-0.5 text-xs font-medium">
                    {project.tag}
                  </span>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
