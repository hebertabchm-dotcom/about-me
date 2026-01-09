import { ArrowUpRight, ExternalLink } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  focusY?: number;
};

export default function PortfolioSection() {
  const projects: Project[] = [
    {
      id: 1,
      title: 'Projeto LuxPrime',
      category: 'Imobili\u00e1ria',
      description:
        'Plataforma de curadoria imobili\u00e1ria de alto padr\u00e3o com atendimento consultivo, visitas guiadas e formul\u00e1rio de contato.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      image: `${import.meta.env.BASE_URL}images/projeto-01.png`,
      link: 'https://hebertabchm-dotcom.github.io/projeto-imobiliario-gpt01/',
      focusY: 18, // desce o enquadramento (px)
    },
    {
      id: 2,
      title: 'Projeto Aurum Vista',
      category: 'Imobili\u00e1ria',
      description:
        'Plataforma imobili\u00e1ria especializada em curadoria de resid\u00eancias e investimentos com design elegante e responsivo.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      image: `${import.meta.env.BASE_URL}images/projeto-02.png`,
      link: 'https://hebertabchm-dotcom.github.io/projeto-imobiliario-gpt02/',
      focusY: 18,
    },
    {
      id: 3,
      title: 'Projeto Aurea State',
      category: 'Imobili\u00e1ria',
      description:
        'Imobili\u00e1ria de alto padr\u00e3o com foco em sele\u00e7\u00e3o por arquitetura, localiza\u00e7\u00e3o e potencial de valoriza\u00e7\u00e3o.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      image: `${import.meta.env.BASE_URL}images/projeto-03.png`,
      link: 'https://hebertabchm-dotcom.github.io/projeto-imobiliario-gpt03/',
      focusY: 18,
    },
    {
      id: 4,
      title: 'Projeto Siwood Interiors',
      category: 'Interiores',
      description:
        'Boutique de interiores premium com projeto de interiores, reforma completa e curadoria de mobili\u00e1rio.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      image: `${import.meta.env.BASE_URL}images/projeto-04.png`,
      link: 'https://hebertabchm-dotcom.github.io/projeto-imobiliario-gpt04/',
      focusY: 18,
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative overflow-hidden border-t border-border py-24 md:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="mb-16 max-w-3xl">
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-subtitle">
            {
              'Sele\u00e7\u00e3o de projetos Front-End desenvolvidos com HTML5, CSS3 e JavaScript, demonstrando interfaces modernas, responsivas e com excelente experi\u00eancia do usu\u00e1rio.'
            }
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8 lg:grid-cols-3">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Abrir ${project.title} em nova aba`}
              className="group fade-in block h-full rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:-translate-y-1 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10">
                {/* Image Container (fix: imagem sempre fica dentro do card) */}
                <div className="relative isolate aspect-[16/10] flex-shrink-0 overflow-hidden bg-muted/40">
                  {/* Fundo desfocado (clipped) */}
                  <img
                    src={project.image}
                    alt=""
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full scale-110 object-cover opacity-25 blur-2xl"
                  />

                  {/* Imagem principal */}
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="absolute inset-0 z-10 h-full w-full object-contain p-6 transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.03]"
                    style={{
                      objectPosition: `center calc(50% + ${project.focusY ?? 0}px)`,
                    }}
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-background/25 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-80" />

                  {/* Category Badge */}
                  <div className="absolute right-4 top-4 rounded-full bg-accent/90 px-3 py-1.5 backdrop-blur-md opacity-90 transition-opacity duration-300 group-hover:opacity-100">
                    <p className="text-xs font-bold text-background">
                      {project.category}
                    </p>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex flex-col items-center gap-3">
                      <div className="flex h-14 w-14 transform items-center justify-center rounded-full bg-accent shadow-lg shadow-accent/20 transition-transform duration-300 group-hover:scale-110">
                        <ArrowUpRight size={24} className="text-background" />
                      </div>
                      <p className="text-sm font-semibold text-white">
                        Acessar Projeto
                      </p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="mb-2 line-clamp-2 text-lg font-bold text-foreground transition-colors duration-300 group-hover:text-accent">
                    {project.title}
                  </h3>
                  <p className="mb-4 flex-1 line-clamp-3 text-sm text-muted-foreground">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="mb-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-accent/10 px-2.5 py-1 text-xs font-medium text-accent transition-colors duration-200 hover:bg-accent/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link indicator */}
                  <div className="flex items-center gap-2 font-semibold text-accent transition-all duration-300 group-hover:gap-3">
                    <span className="text-sm">Ver projeto</span>
                    <ExternalLink
                      size={16}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="mb-6 text-lg text-muted-foreground">
            Quer explorar mais projetos?
          </p>
          <a
            href="https://github.com/hebertabchm-dotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 transition-all duration-300 hover:gap-3"
          >
            {'Acessar Reposit\u00f3rio GitHub'}
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
