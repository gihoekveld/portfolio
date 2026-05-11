import aventureboxImg from "@/assets/aventurebox-mockup.png";
import excofyImg from "@/assets/excofy-mockup.png";
import paroquiaImg from "@/assets/paroquia-mockup.png";
import zamboImg from "@/assets/zambo-mockup.png";
import artesaosImg from "@/assets/artesaos-mockup.png";

export type PhaseStatus = "done" | "in-progress" | "upcoming";

export type TimelineItem = string | { text: string; status?: PhaseStatus };

export type Highlight = {
  period: string;
  title: string;
  status?: PhaseStatus;
  items: TimelineItem[];
};

export type ProjectCategory = "professional" | "academic";

export type Project = {
  slug: string;
  name: string;
  tagline: string;
  period: string;
  description: string;
  image: string;
  stack: string[];
  highlights: string[]; // shown on home card
  timeline: Highlight[]; // full timeline on detail page
  category: ProjectCategory;
};

export const projects: Project[] = [
  {
    slug: "excofy",
    category: "professional",
    name: "Excofy",
    tagline: "Plataforma SaaS de checkout e gestão de vendas",
    period: "Out 2022 — Mai 2026",
    description:
      "Plataforma SaaS para produtores digitais com dashboard de vendas, checkout, app mobile, área do cliente, assinaturas e afiliados.",
    image: excofyImg,
    stack: [
      "React",
      "Next.js",
      "TypeScript",
      "React Native",
      "Node.js",
      "Cloudflare Workers",
      "PostgreSQL",
    ],
    highlights: [
      "Checkout com múltiplos métodos de pagamento e layout responsivo",
      "Módulos de Assinaturas, Afiliados e Coprodução",
      "App mobile (React Native) com notificações push",
      "Bibliotecas e utilitários publicados no npm",
      "Sistema robusto de processamento de eventos assíncrono",
    ],
    timeline: [
      {
        period: "2022 — 2023 · Dashboard",
        title: "Fundação e primeiros módulos",
        items: [
          "Recuperação de senha e CI/CD com testes automatizados",
          "Onboarding multi-etapas e upload de mídia com processamento",
          "CRUD de produtos e ofertas com validações em tempo real",
          "Módulo de vendas com filtros e dashboards analíticos",
          "Sale Page com editor rico, galeria interativa e dark mode",
          "Integrações de pagamento com fluxos de reembolso",
        ],
      },
      {
        period: "2024 · Dashboard",
        title: "Novos módulos e performance",
        items: [
          "Módulo de Clientes com exportação e histórico de compras",
          "Checkout em uma única página e Order Bump",
          "Integrações com múltiplos provedores",
          "Sistema de webhooks com logs e reenvio de eventos",
          "Simulador de vendas e módulo de coprodução",
          "Relatórios analíticos com UTM tracking",
        ],
      },
      {
        period: "2025 · Dashboard",
        title: "Assinaturas, Afiliados e Tickets",
        items: [
          "Relatórios avançados com exportação CSV e timezone customizável",
          "Módulo Admin com gerenciamento de sellers",
          "Event Log com busca, retry e monitoramento",
          "Módulo de Afiliados com comissões e métricas",
          "Gerenciamento de Assinaturas com ciclo de vida completo",
          "Proteções de segurança no checkout",
          "Módulo de Tickets com check-in e relatórios",
        ],
      },
      {
        period: "2026 · Dashboard",
        title: "Aprimoramentos e novos fluxos",
        items: [
          "Relatório de UTM com visão geral e cards responsivos",
          "Gerenciamento de disputas de transações",
          "Novo fluxo de onboarding simplificado",
          "Comunicações automatizadas de transações",
          "Reestruturação de arquitetura e settings",
        ],
      },
      {
        period: "2023 — 2026 · Checkout",
        title: "Checkout escalável e conversível",
        items: [
          "Checkout multi-etapas com múltiplos métodos de pagamento",
          "Dark mode, layout responsivo e validações de dados",
          "Parcelamento, upsell e estratégias de conversão",
          "Suporte internacional com múltiplas moedas",
          "Integração com plataformas de marketing e analytics",
          "Sistema de afiliação integrado",
          "Personalização de ofertas e promoções",
        ],
      },
      {
        period: "2025 — 2026 · App Mobile (excofy-app)",
        title: "Vendas, transferências e afiliados no celular",
        items: [
          "Relatórios (LineChart, NetProfitChart) e BalanceCard",
          "Vendas com scroll infinito e pull-to-refresh",
          "Push notifications com redirecionamento por tipo",
          "Transferência de saldo com validações",
          "Lista e detalhes de vendas de afiliado",
          "Lock de refresh token contra race conditions",
          "Migração para React Query",
        ],
      },
      {
        period: "Out 2025 · Ticket Check-in App",
        title: "App nativo para check-in em eventos",
        items: [
          "Busca e listagem de ingressos, check-in e desfazer",
          "Modais de seleção com filtros por evento/ingresso",
          "Painel de métricas em tempo real",
          "QR code na tab bar e geração de código único",
        ],
      },
      {
        period: "2025 — 2026 · Client Panel",
        title: "Área do cliente/assinante",
        items: [
          "Login passwordless por código de e-mail",
          "Atualização de cartão e detalhes de assinatura",
          "Módulo de tickets com page pública e envio de e-mail",
          "Deploy em Cloudflare Workers",
        ],
      },
      {
        period: "Serviços de Backend",
        title: "Infraestrutura e processamento",
        items: [
          "Serviços de e-mail com múltiplos provedores e fallback",
          "Templates personalizados por seller",
          "Sistema de eventos assíncrono com fila de processamento",
          "Gerenciamento do ciclo de vida de assinaturas",
          "Processamento seguro de transações",
          "Cálculos precisos de taxas e distribuição de receitas",
        ],
      },
      {
        period: "Mar 2025 · Bibliotecas npm",
        title: "Utilitários e helpers publicados",
        items: [
          "Funções e utilitários de negócio reutilizáveis",
          "Validadores de dados e formatadores",
          "Helpers criptográficos e numéricos",
          "Publicação no npm com CI/CD automático",
        ],
      },
      {
        period: "Jan 2026 · Infraestrutura",
        title: "Ambiente de desenvolvimento unificado",
        items: [
          "Containerização com Docker Compose",
          "Sincronização de variáveis de ambiente",
          "Serviços locais para desenvolvimento",
          "Documentação de arquitetura dos componentes",
        ],
      },
    ],
  },
  {
    slug: "aventurebox",
    category: "professional",
    name: "Aventurebox",
    tagline: "Rede social para aventureiros ao ar livre",
    period: "Jun 2021 — Out 2023",
    description:
      "Plataforma social brasileira para aventureiros, com publicação de aventuras, feed interativo, mapa, sistema de notificações, comentários, mentions e área de moderação.",
    image: aventureboxImg,
    stack: ["PHP", "JavaScript", "Cypress", "TinyMCE", "GitHub Actions", "Firebase FCM"],
    highlights: [
      "Módulo completo de @mentions (v0 → v6) desktop e mobile",
      "Editor TinyMCE customizado com mídia (imagem, podcast, vídeo) no app",
      "Notificações push com Firebase Cloud Messaging",
      "Suite de testes E2E (Cypress) com CI/CD do zero",
      "Perfil Verificado, Post Participation e Tag de perfis em posts",
    ],
    timeline: [
      {
        period: "Jun — Dez 2021",
        title: "Fundação das funcionalidades sociais",
        items: [
          "Dashboard com products showcase e mapa de aventuras responsivo",
          "Módulo de produtos com moderação e aprovação por seller",
          "Sistema de rox, replies e @mentions (v0 → v6)",
          "Notificações de rox, replies e mentions",
          "Preview de perfil e share de conteúdo",
          "Modal de login mobile e share automático pós-publicação",
        ],
      },
      {
        period: "Jan — Set 2022",
        title: "Editor, infraestrutura e mídia",
        items: [
          "Refactoring completo da home page (v0 → v2)",
          "Sugestões de usuários com slider (Glider)",
          "Integração TinyMCE com toolbar customizada e Space CDN",
          "Developer View com error/exceptions log",
          "Gestão de arquivos temporários e migração de uploads para API",
          "Editor mobile (TinyMCE v1 → v5) com imagem, podcast e vídeo",
          "Notificações push (Firebase FCM) por tipo",
          "Speed insights, aspect-ratio e acessibilidade",
        ],
      },
      {
        period: "Out — Nov 2022",
        title: "Suite de testes automatizados (Cypress)",
        items: [
          "Setup e configuração de testes E2E",
          "Comandos reutilizáveis para testes",
          "Cobertura de fluxos críticos de usuário",
          "Testes de CRUD e operações principais",
          "Pipeline de CI/CD com validação automática",
        ],
      },
      {
        period: "Mar — Mai 2023",
        title: "Expansão da suite de testes",
        items: [
          "Infraestrutura completa de testes com seed e cleanup de dados",
          "Testes de criação e gerenciamento de aventuras",
          "Testes de navegação e interfaces principais",
          "Testes de módulos internos da plataforma",
          "Testes de autenticação e segurança",
          "Suporte a internacionalização nos testes",
        ],
      },
      {
        period: "Jul — Ago 2023",
        title: "Novas features",
        items: [
          "Interação aprimorada em posts com notificações",
          "Tagging de perfis e integração em feed",
          "Sistema de perfil verificado",
          "Pipeline de deploy automatizado",
          "Refatoração de autenticação",
        ],
      },
      {
        period: "Set — Out 2023",
        title: "Mídia e otimizações",
        items: [
          "Suporte a formatos variados de mídia",
          "Integração com plataformas de streaming",
          "Otimizações de onboarding",
          "Atualizações de integrações terceiras",
        ],
      },
    ],
  },
  {
    slug: "paroquia-sao-jose",
    category: "academic",
    name: "Paróquia São José",
    tagline: "Site institucional da Paróquia São José de Caraguatatuba",
    period: "2026 — Em desenvolvimento",
    description:
      "Projeto de extensão do IFSP. Atuação como Product Owner e desenvolvedora full-stack: site público para os fiéis e painel administrativo para gestão de conteúdo, agenda e blog. Stack Cloudflare (Pages + Workers).",
    image: paroquiaImg,
    stack: [
      "React",
      "TypeScript",
      "Cloudflare Pages",
      "Cloudflare Workers",
      "Cloudflare D1",
      "Product Ownership",
      "Tech Lead",
      "Full Stack",
    ],
    highlights: [
      "Protótipo completo validado com a paróquia",
      "Arquitetura na Cloudflare (Pages + Workers) com foco em escalabilidade",
      "Telas prontas: login, gestão de capelas e horários de missa",
      "Em desenvolvimento: painel do admin",
      "Próximas entregas: site público e blog",
    ],
    timeline: [
      {
        period: "2026 · Discovery e Product Ownership",
        title: "Levantamento de requisitos",
        status: "done",
        items: [
          "Entrevistas com pároco e equipe da paróquia",
          "Definição de escopo: site público + painel admin",
          "Mapeamento de personas (fiéis, pastorais, administração)",
          "Backlog priorizado de features",
          "Decisão de arquitetura: Cloudflare Pages + Workers (escalabilidade e tier gratuito)",
        ],
      },
      {
        period: "2026 · Protótipo e telas iniciais",
        title: "Protótipo validado e primeiras telas em produção",
        status: "in-progress",
        items: [
          { text: "Protótipo de alta fidelidade aprovado", status: "done" },
          { text: "Tela de login do painel admin", status: "done" },
          { text: "Gestão de capelas: listar, criar e editar informações", status: "done" },
          { text: "Cadastro de horários de missa por capela", status: "done" },
        ],
      },
      {
        period: "2026 · Site público",
        title: "Experiência para os fiéis",
        status: "in-progress",
        items: [
          { text: "Agenda de missas e eventos com filtros por capela", status: "upcoming" },
          { text: "Compromissos do pároco e calendário litúrgico", status: "upcoming" },
          {
            text: "Páginas institucionais: história, capelas, ministérios, pastorais",
            status: "upcoming",
          },
          { text: "Perfis do pároco, diácono e equipe pastoral", status: "upcoming" },
          { text: "Blog com artigos, notícias e avisos", status: "upcoming" },
        ],
      },
      {
        period: "2026 · Painel administrativo",
        title: "Gestão autônoma de conteúdo",
        status: "in-progress",
        items: [
          { text: "CRUD de eventos, missas e compromissos", status: "in-progress" },
          { text: "Editor de blog com publicação programada", status: "upcoming" },
          { text: "Gestão de pastorais, ministérios e capelas", status: "in-progress" },
          { text: "Controle de acesso por papéis (admin, editor, secretaria)", status: "upcoming" },
        ],
      },
    ],
  },
  {
    slug: "zambo",
    category: "academic",
    name: "Zambô de Caraguatatuba",
    tagline: "Site da ONG dedicada ao movimento negro e cultura afro-brasileira",
    period: "2026 — Em desenvolvimento",
    description:
      "Projeto de extensão do IFSP. Desenvolvimento do site da Zambô, ONG que promove cultura, eventos, oficinas e beneficia estudantes da comunidade. Stack Cloudflare (Pages + Workers).",
    image: zamboImg,
    stack: [
      "React",
      "TypeScript",
      "Cloudflare Pages",
      "Cloudflare Workers",
      "PostgreSQL",
      "Tech Lead",
      "Full Stack",
    ],
    highlights: [
      "Protótipo completo validado com a Zambô",
      "Arquitetura na Cloudflare (Pages + Workers) com foco em escalabilidade",
      "Em desenvolvimento: site público",
      "Próximas entregas: painel do admin e blog",
    ],
    timeline: [
      {
        period: "2026 · Site público",
        title: "História e visibilidade",
        status: "upcoming",
        items: [
          "Página de história e trajetória da ONG",
          "Galeria de fotos de eventos e oficinas",
          "Página de eventos e oficinas com inscrições",
          "Apresentação dos beneficiários e impacto social",
        ],
      },
      {
        period: "2026 · Portal da Transparência",
        title: "Prestação de contas pública",
        status: "upcoming",
        items: [
          "Demonstrativos financeiros publicados",
          "Documentos institucionais e relatórios",
          "Doações recebidas e aplicação dos recursos",
        ],
      },
      {
        period: "2026 · Admin e Blog",
        title: "Autonomia editorial",
        status: "upcoming",
        items: [
          "Painel admin para atualização das informações",
          "Blog com artigos sobre cultura e movimento negro",
          "Gestão de galeria e eventos pelos próprios membros",
        ],
      },
    ],
  },
  {
    slug: "artesaos-devops",
    category: "academic",
    name: "Artesãos · DevOps",
    tagline: "Workspace, infraestrutura e correções em produção",
    period: "2026 — Atual",
    description:
      "Projeto de extensão do IFSP. Atuação em DevOps em projeto já em produção. Contribuições em infraestrutura: workspace com Docker Compose, sincronização de variáveis de ambiente e configuração dos repositórios base.",
    image: artesaosImg,
    stack: ["Next.js", "NestJS", "Docker Compose", "PostgreSQL", "DevOps", "Infraestrutura"],
    highlights: [
      "Workspace com Docker Compose + Self host para variáveis locais",
      "Infraestrutura padronizada para o time",
      "Próximas entregas: sandbox isolada, migração para domínio e pipeline de deploy",
    ],
    timeline: [
      {
        period: "2026 · Contribuições iniciais",
        title: "Melhorias e correções em produção",
        status: "done",
        items: ["Diagnóstico e correções de funcionalidades"],
      },
      {
        period: "2026 · Workspace",
        title: "Setup unificado do time",
        status: "done",
        items: [
          "Repositório de workspace com Docker Compose",
          "Integração com self host para sincronizar variáveis de ambiente",
          "Documentação de onboarding dos devs",
        ],
      },
      {
        period: "Futuro · Sandbox e domínio",
        title: "Ambientes e migração de IP para domínio",
        status: "upcoming",
        items: [
          "Provisionamento de servidor sandbox isolado",
          "Pipeline de deploy automatizado e fluxo sandbox → produção",
          "Registro e configuração do domínio com DNS",
        ],
      },
    ],
  },
];

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
