import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { ProjectTimelineCard } from "@/components/ProjectTimelineCard";
import { projects } from "@/lib/projects";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Giselle Hoekveld — Desenvolvedora de Software" },
      {
        name: "description",
        content:
          "Portfólio em timeline da desenvolvedora Giselle Hoekveld: projetos, entregas e tecnologias.",
      },
      { property: "og:title", content: "Giselle Hoekveld — Desenvolvedora de Software" },
      {
        property: "og:description",
        content: "Portfólio em timeline: Excofy, Aventurebox e mais.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto max-w-5xl px-6 py-24 text-center md:py-32">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Disponível para novos projetos
          </span>
          <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight text-foreground md:text-7xl">
            Construindo produtos em
            <span className="text-gradient"> timelines reais</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg text-muted-foreground">
            Sou <strong className="text-foreground">Giselle Hoekveld</strong>, desenvolvedora de
            software full-stack. Há mais de 4 anos entregando funcionalidades de ponta a ponta — do
            checkout ao app mobile, do worker em edge ao design system.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="#projetos"
              className="rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-transform hover:-translate-y-0.5"
            >
              Ver projetos
            </a>
            <a
              href="#contato"
              className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              Entrar em contato
            </a>
          </div>
        </div>
      </section>

      {/* Professional projects */}
      <section id="projetos" className="relative px-6 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-accent-foreground/80">
              Trajetória profissional
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Projetos em <span className="text-gradient">destaque</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Produtos que ajudei a construir como dev full-stack, com as entregas principais de
              cada fase. Clique em &ldquo;Ver timeline completa&rdquo; para o histórico detalhado.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent md:block"
            />
            <div className="space-y-24">
              {projects
                .filter((p) => p.category === "professional")
                .map((project, idx) => (
                  <ProjectTimelineCard key={project.slug} project={project} index={idx} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Academic / extension projects */}
      <section id="academicos" className="relative border-t border-border/60 px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-widest text-accent-foreground/80">
              Projetos de extensão · IFSP
            </p>
            <h2 className="mt-2 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
              Projetos <span className="text-gradient">acadêmicos</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Contribuições em projetos com impacto social, desenvolvidos durante a graduação em
              Análise e Desenvolvimento de Sistemas no IFSP.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-border to-transparent md:block"
            />
            <div className="space-y-24">
              {projects
                .filter((p) => p.category === "academic")
                .map((project, idx) => (
                  <ProjectTimelineCard key={project.slug} project={project} index={idx} />
                ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contato" className="border-t border-border/60 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Vamos construir algo juntos?
          </h2>
          <p className="mt-4 text-muted-foreground">
            Estou aberta a oportunidades, parcerias e conversas sobre produto e engenharia.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href="mailto:gisellehoekveld.contato@gmail.com"
              className="rounded-full bg-gradient-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-elegant"
            >
              Enviar e-mail
            </a>
            <a
              href="https://github.com/gihoekveld"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/giselle-hoekveld-1b8081142/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-border bg-card/60 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-card"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        Feito com <span className="text-primary">♥</span> por Giselle Hoekveld
      </footer>
    </div>
  );
}
