import Link from "next/link";

const services = ["Service One", "Service Two", "Service Three"];
const links = ["RSS", "GitHub", "Privacy Policy"];

export function Footer() {
  return (
    <footer
      id="contact"
      className="full-bleed border-t border-foreground/10 bg-foreground/5 py-24"
    >
      <div className="container">
        <div className="grid gap-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
              Overview
            </h4>
            <p className="mt-4 text-body text-foreground/80">
              Short summary about you and how to get in touch.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
              Services
            </h4>
            <ul className="mt-3 space-y-1">
              {services.map((s) => (
                <li key={s}>
                  <Link href="#" className="text-sm hover:underline">
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
              Links
            </h4>
            <ul className="mt-3 space-y-1">
              {links.map((l) => (
                <li key={l}>
                  <Link href="#" className="text-sm hover:underline">
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-medium uppercase tracking-wider text-foreground/60">
              Contact
            </h4>
            <ul className="mt-3 space-y-1 text-sm">
              <li>
                <a href="mailto:you@example.com" className="hover:underline">
                  you@example.com
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <p className="mt-24 text-center text-body text-foreground/50">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
