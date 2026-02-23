import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Header } from "@/app/components/Header";
import {
  getProjectSlugs,
  getProjectMeta,
  getProjectHtml,
} from "@/lib/projects";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const meta = getProjectMeta(slug);

  if (!meta) notFound();

  const htmlContent = await getProjectHtml(slug);

  return (
    <>
      <Header />
      <main className="min-h-screen">
        <header className="border-b border-foreground/10 py-8">
          <div className="mx-auto max-w-3xl px-(--container-padding)">
            <Link
              href="/#work"
              className="text-body text-foreground/60 transition-colors duration-300 hover:text-primary"
            >
              ← Back to work
            </Link>
            <h1 className="mt-12 text-2xl md:text-headline font-semibold">
              {meta.title}
            </h1>
            <p className="mt-2 md:text-body text-foreground/70">{meta.blurb}</p>
            {meta.tech.length > 0 && (
              <div className="mt-4 flex flex-wrap gap-2">
                {meta.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded bg-primary px-2 py-0.5 text-xs md:text-sm text-white"
                  >
                    {t}
                  </span>
                ))}
              </div>
            )}
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-(--container-padding) py-12">
          <div className="relative aspect-video w-full overflow-hidden rounded-lg border border-foreground/10 mb-12">
            <Image
              src={meta.image}
              alt={meta.title}
              fill
              className="object-cover"
              priority
            />
          </div>
          <article
            className="project-content text-md text-foreground/80 [&_h1]:mb-4 [&_h1]:font-semibold [&_h1]:text-xl [&_h1]:text-foreground [&_h2]:mb-3 [&_h2]:mt-8 [&_h2]:text-xl [&_h2]:font-semibold [&_h2]:text-foreground [&_p]:mb-4 [&_p]:leading-relaxed [&_a]:text-primary [&_a]:underline [&_a:hover]:opacity-90"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          <Link
            href="/"
            className="mt-12 inline-block rounded-full bg-primary px-5 py-2.5 text-body font-medium text-white transition-colors duration-300 hover:opacity-90"
          >
            Return home
          </Link>
        </div>
      </main>
    </>
  );
}
