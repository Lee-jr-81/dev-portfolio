import type { Metadata } from "next";
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

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const meta = getProjectMeta(slug);

  if (!meta) {
    return { title: "Project" };
  }

  return {
    title: meta.title,
    description: meta.blurb,
    alternates: {
      canonical: `/projects/${slug}`,
    },
    openGraph: {
      title: meta.title,
      description: meta.blurb,
      url: `/projects/${slug}`,
      images: [
        {
          url: meta.image,
          width: 1200,
          height: 630,
          alt: meta.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: meta.title,
      description: meta.blurb,
    },
  };
}

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
            {meta.liveUrl && (
              <p className="mt-4">
                <a
                  href={meta.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-body font-medium text-primary underline underline-offset-4 transition-opacity hover:opacity-90"
                >
                  Visit site
                  <span className="text-foreground/50" aria-hidden>
                    ↗
                  </span>
                </a>
              </p>
            )}
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
            className="project-content text-foreground/80"
            dangerouslySetInnerHTML={{ __html: htmlContent }}
          />
          <Link
            href="/"
            className="mt-12 inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors duration-300 hover:opacity-90"
          >
            Return home
          </Link>
        </div>
      </main>
    </>
  );
}
