import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/projects";

type Props = {
  project: Project;
  index: number;
};

export function ProjectTimelineCard({ project, index }: Props) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-12">
      {/* Timeline dot */}
      <span
        aria-hidden
        className="absolute left-1/2 top-10 hidden h-4 w-4 -translate-x-1/2 rounded-full bg-gradient-primary shadow-glow ring-4 ring-background md:block"
      />

      {/* Mockup */}
      <div className={isEven ? "md:order-1" : "md:order-2"}>
        <div className="group overflow-hidden rounded-2xl border border-border bg-gradient-card shadow-elegant transition-transform duration-500 hover:-translate-y-1">
          <img
            src={project.image}
            alt={`Mockup do projeto ${project.name}`}
            width={1280}
            height={896}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className={isEven ? "md:order-2" : "md:order-1"}>
        <p className="text-xs font-medium uppercase tracking-widest text-accent-foreground/80">
          {project.period}
        </p>
        <h3 className="mt-2 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          {project.name}
        </h3>
        <p className="mt-2 text-base text-muted-foreground">{project.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-foreground/80">{project.description}</p>

        <ul className="mt-5 space-y-2">
          {project.highlights.map((h) => (
            <li key={h} className="flex gap-2 text-sm text-foreground/90">
              <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span>{h}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-foreground/80"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="mt-6">
          <Link
            to="/projetos/$slug"
            params={{ slug: project.slug }}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
          >
            Ver timeline completa
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
