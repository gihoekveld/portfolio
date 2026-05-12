import { Link } from "@tanstack/react-router";
import cvPdf from "../assets/giselle-hoekveld-cv.pdf";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/70 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="font-semibold tracking-tight text-foreground">
          <span className="text-gradient">@gihoekveld</span>
        </Link>
        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link to="/" className="hidden transition-colors hover:text-foreground md:block lg:block" activeOptions={{ exact: true }} activeProps={{ className: "text-foreground" }}>
            Início
          </Link>
          <a href="/#projetos" className="transition-colors hover:text-foreground">
            Projetos
          </a>
          <a href="/#contato" className="transition-colors hover:text-foreground">
            Contato
          </a>
          <a href={cvPdf} download className="transition-colors hover:text-foreground">
            CV
          </a>
        </nav>
      </div>
    </header>
  );
}
