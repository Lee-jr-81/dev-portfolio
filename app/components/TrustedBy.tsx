import { Brush, Leaf, Motorbike, Hammer } from "lucide-react";

const items = [
  {
    title: "Motorcycle Travel",
    description:
      "Exploring the world on two wheels. I love discovering new places and returning home richer.",
    icon: Motorbike,
  },
  {
    title: "Mini Environments",
    description:
      "Terrariums and small ecosystems. So much joy i get in interacting with the natural world.",
    icon: Leaf,
  },
  {
    title: "Timber Craft",
    description:
      "I like building real things with my hands. Woodworking, carpentry, and building my own furniture.",
    icon: Hammer,
  },
  {
    title: "Miniature Painting",
    description:
      "Patience, detail work, and finishing touches. I enjoy the 3d printing and assembly of characters.",
    icon: Brush,
  },
];

export function TrustedBy() {
  return (
    <section className="border-t border-foreground/10 py-40">
      <div>
        <div className="space-y-8 max-w-3xl">
          <h3 className="text-5xl font-semibold">Who I Am Outside of Code</h3>
          <div className="space-y-8">
            <p className="text-body text-foreground/80">
              When I&apos;m not building applications, I&apos;m usually working
              on miniature worlds or small living ecosystems. I enjoy the craft
              — taking something from raw to refined, balancing structure and
              creativity, and seeing a system come together intentionally.
            </p>
          </div>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2 lg:gap-12">
          {items.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="rounded-2xl border border-foreground/10 bg-foreground/2 p-8 transition hover:border-primary/30 hover:bg-primary/3"
              >
                <div className="flex items-start gap-6">
                  {/* Icon block */}
                  <div className="mt-1 flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/8">
                    <Icon className="size-5 text-primary/80" strokeWidth={2} />
                  </div>

                  {/* Text */}
                  <div>
                    <h3 className="text-lg font-semibold">{item.title}</h3>
                    <p className="mt-3 text-body text-foreground/70">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
