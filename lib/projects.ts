import { readFileSync } from "fs";
import { join } from "path";
import { remark } from "remark";
import html from "remark-html";

export type Project = {
  slug: string;
  title: string;
  blurb: string;
  image: string;
  tech: string[];
  tag?: string | null;
};

export const projects: Project[] = [
  {
    slug: "adventureready-uk",
    title: "AdventureReady.UK",
    blurb: "Adventure vehicle marketplace and community features.",
    image: "/project-one.jpg",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Shadcn UI"],
    tag: null,
  },
  {
    slug: "minted",
    title: "Minted",
    blurb: "Personal finance and budgeting app.",
    image: "/project-two.jpg",
    tech: ["Next.js", "Supabase", "Tailwind CSS", "Shadcn UI", "Chartjs"],
    tag: null,
  },
  {
    slug: "forge-architecture",
    title: "Forge Architecture",
    blurb: "Architecture portfolio website for a local firm.",
    image: "/project-five.jpg",
    tech: ["Astro", "Sanity", "Tailwind CSS", "Shadcn UI"],
    tag: "New",
  },
  {
    slug: "bluephase-electrical",
    title: "Bluephase Electrical",
    blurb: "Electrical services business website.",
    image: "/project-four.jpg",
    tech: ["Next.js", "Tailwind CSS", "Shadcn UI"],
    tag: null,
  },
];

const contentDir = join(process.cwd(), "src", "content", "projects");

export function getProjectSlugs(): string[] {
  return projects.map((p) => p.slug);
}

export function getProjectMeta(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export async function getProjectHtml(slug: string): Promise<string> {
  const filePath = join(contentDir, `${slug}.md`);
  const raw = readFileSync(filePath, "utf-8");
  const result = await remark().use(html).process(raw);
  return String(result.toString());
}
