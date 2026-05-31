import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/projects";

export function Work() {
  return (
    <section id="work" className="border-t border-foreground/10 py-40">
      <div>
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
            2019 - Present
          </h2>
          <h3 className="text-4xl font-semibold">My Work</h3>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-5 lg:gap-5">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex flex-col overflow-hidden rounded-2xl border border-foreground/10 bg-foreground/2 transition-all duration-300 hover:border-primary/25 hover:bg-foreground/4 hover:shadow-[0_12px_40px_-12px_rgba(0,0,0,0.12)]"
            >
              <Link
                href={`/projects/${project.slug}`}
                className="flex flex-1 flex-col"
              >
                <div className="relative m-3 aspect-4/3 overflow-hidden rounded-xl bg-foreground/5 sm:m-3.5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  />
                  <div
                    className="pointer-events-none absolute inset-0 bg-linear-to-t from-foreground/50 via-foreground/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    aria-hidden
                  />
                  <span className="pointer-events-none absolute bottom-3 left-3 flex items-center gap-1 rounded-full bg-background/90 px-2.5 py-1 text-xs font-medium text-foreground opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100">
                    Case study
                    <ArrowUpRight className="size-3" aria-hidden />
                  </span>
                </div>

                <div className="flex flex-1 flex-col px-3.5 pb-3.5 pt-0 sm:px-4 sm:pb-4">
                  <div className="flex items-start justify-between gap-2">
                    <h4 className="text-base font-semibold leading-snug transition-colors duration-300 group-hover:text-primary lg:text-[0.95rem] xl:text-base">
                      {project.title}
                    </h4>
                    {project.tag && (
                      <span className="shrink-0 rounded-full bg-primary/10 px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide text-primary">
                        {project.tag}
                      </span>
                    )}
                  </div>

                  <p className="mt-2 line-clamp-2 text-sm leading-snug text-foreground/60">
                    {project.blurb}
                  </p>

                  {project.tech.length > 0 && (
                    <ul className="mt-3 flex flex-wrap gap-1.5">
                      {project.tech.slice(0, 3).map((t) => (
                        <li
                          key={t}
                          className="rounded-md border border-foreground/10 bg-background px-1.5 py-0.5 text-[0.65rem] font-medium text-foreground/55"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </Link>

              {project.liveUrl && (
                <div className="border-t border-foreground/10 px-3.5 py-2.5 sm:px-4">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-primary transition-opacity hover:opacity-80"
                  >
                    Visit site
                    <ArrowUpRight className="size-3" aria-hidden />
                  </a>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
