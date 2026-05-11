import { createFileRoute, Link, notFound, useRouter } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { getProject, projects, type PhaseStatus, type Project, type TimelineItem } from "@/lib/projects";

const STATUS_LABEL: Record<PhaseStatus, string> = {
  done: "Concluído",
  "in-progress": "Em desenvolvimento",
  upcoming: "Próxima entrega",
};

const STATUS_CLASS: Record<PhaseStatus, string> = {
  done: "border-primary/30 bg-primary/10 text-primary",
  "in-progress": "border-accent-foreground/30 bg-accent/40 text-accent-foreground",
  upcoming: "border-border bg-secondary/60 text-muted-foreground",
};

function StatusBadge({ status }: { status: PhaseStatus }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider ${STATUS_CLASS[status]}`}
    >
      {STATUS_LABEL[status]}
    </span>
  );
}

function getItem(item: TimelineItem): { text: string; status?: PhaseStatus } {
  return typeof item === "string" ? { text: item } : item;
}


export const Route = createFileRoute("/projetos/$slug")({
  loader: ({ params }): { project: Project } => {
    const project = getProject(params.slug);
    if (!project) throw notFound();
    return { project };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.project.name} — Timeline | gihoekveld` },
          { name: "description", content: loaderData.project.tagline },
          { property: "og:title", content: `${loaderData.project.name} — Timeline` },
          { property: "og:description", content: loaderData.project.tagline },
          { property: "og:image", content: loaderData.project.image },
        ]
      : [],
  }),
  notFoundComponent: NotFound,
  errorComponent: ErrorView,
  component: ProjectPage,
});

function NotFound() {
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-4xl font-bold text-foreground">Projeto não encontrado</h1>
        <p className="mt-3 text-muted-foreground">
          Veja todos os projetos disponíveis na página inicial.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}

function ErrorView({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="min-h-screen">
      <SiteHeader />
      <div className="mx-auto max-w-2xl px-6 py-32 text-center">
        <h1 className="text-3xl font-bold text-foreground">Não foi possível carregar</h1>
        <p className="mt-2 text-muted-foreground">{error.message}</p>
        <button
          onClick={() => {
            router.invalidate();
            reset();
          }}
          className="mt-6 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground"
        >
          Tentar novamente
        </button>
      </div>
    </div>
  );
}

function ProjectPage() {
  const { project } = Route.useLoaderData() as { project: Project };
  const others = projects.filter((p) => p.slug !== project.slug);

  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Header */}
      <section className="px-6 pt-16 pb-12">
        <div className="mx-auto max-w-5xl">
          <Link
            to="/"
            className="text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            ← Voltar
          </Link>
          <p className="mt-6 text-xs font-medium uppercase tracking-widest text-accent-foreground/80">
            {project.period}
          </p>
          <h1 className="mt-2 text-5xl font-bold tracking-tight text-foreground md:text-6xl">
            {project.name}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-muted-foreground">{project.tagline}</p>
          <p className="mt-6 max-w-3xl text-foreground/85">{project.description}</p>

          <div className="mt-6 flex flex-wrap gap-2">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-foreground/80"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-elegant">
            <img
              src={project.image}
              alt={`Mockup do projeto ${project.name}`}
              width={1280}
              height={896}
              className="aspect-[16/10] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Full timeline */}
      <section className="px-6 pb-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Timeline <span className="text-gradient">completa de entregas</span>
          </h2>

          <ol className="relative mt-12 border-l border-border pl-8">
            {project.timeline.map((phase, i) => (
              <li key={i} className="relative pb-12 last:pb-0">
                <span
                  aria-hidden
                  className="absolute -left-[37px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-gradient-primary shadow-glow ring-4 ring-background"
                />
                <p className="text-xs font-medium uppercase tracking-widest text-accent-foreground/80">
                  {phase.period}
                </p>
                <div className="mt-1 flex flex-wrap items-center gap-3">
                  <h3 className="text-xl font-semibold text-foreground">{phase.title}</h3>
                  {phase.status && <StatusBadge status={phase.status} />}
                </div>
                <ul className="mt-4 space-y-2">
                  {phase.items.map((raw, idx) => {
                    const item = getItem(raw);
                    return (
                      <li
                        key={`${item.text}-${idx}`}
                        className="flex items-start gap-2 text-sm leading-relaxed text-foreground/85"
                      >
                        <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                        <span className="flex-1">{item.text}</span>
                        {item.status && <StatusBadge status={item.status} />}
                      </li>
                    );
                  })}
                </ul>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Other projects */}
      {others.length > 0 && (
        <section className="border-t border-border/60 px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-2xl font-bold tracking-tight text-foreground">
              Outros projetos
            </h2>
            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  to="/projetos/$slug"
                  params={{ slug: p.slug }}
                  className="group overflow-hidden rounded-2xl border border-border bg-gradient-card transition-transform hover:-translate-y-1"
                >
                  <img
                    src={p.image}
                    alt={p.name}
                    width={1280}
                    height={896}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">
                      {p.period}
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-foreground">{p.name}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{p.tagline}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        Feito com <span className="text-primary">♥</span> por Giselle Hoekveld
      </footer>
    </div>
  );
}
