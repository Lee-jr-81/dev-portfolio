import { Camera, Compass, Leaf, Swords } from "lucide-react";

const items = [
  {
    title: "Travel",
    description:
      "Adventure on and off the road — discovering new places, cultures, and landscapes, and bringing that perspective back home.",
    icon: Compass,
  },
  {
    title: "Mini Environments",
    description:
      "Terrariums and small ecosystems. So much joy i get in interacting with the natural world.",
    icon: Leaf,
  },
  {
    title: "Photography & Exploration",
    description:
      "Documenting places and moments through the lens. Composition, patience, and noticing detail — the same instincts I bring to engineering.",
    icon: Camera,
  },
  {
    title: "Muay Thai",
    description:
      "Discipline, consistency, and showing up. Training keeps me grounded, focused, and sharp away from the screen.",
    icon: Swords,
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
              When I&apos;m not building applications, I&apos;m usually
              travelling, exploring, or behind a camera — drawn to adventure,
              open landscapes, and the kind of places that reset how you think.
              I still love small living environments and mini ecosystems. And
              when I need to switch off properly, you&apos;ll find me on the
              mats training Muay Thai.
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
