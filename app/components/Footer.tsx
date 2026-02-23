export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="full-bleed border-t border-foreground/10 py-12">
      <div className="container flex flex-col items-center gap-2 text-center">
        <p className="text-body font-medium text-foreground/80">
          Lee Williams<span className="text-primary">.</span>
        </p>
        <p className="text-sm text-foreground/50">
          © {year} Lee Williams. All rights reserved.
        </p>
        <p className="text-xs text-foreground/40">
          Privacy · Terms of use · Cookies
        </p>
      </div>
    </footer>
  );
}
