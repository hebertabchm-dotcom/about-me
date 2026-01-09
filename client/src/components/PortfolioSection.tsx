import { ExternalLink, ArrowUpRight } from 'lucide-react';

export default function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: 'Projeto LuxPrime',
      category: 'Imobiliária',
      description: 'Plataforma de curadoria imobiliária de alto padrão com atendimento consultivo, visitas guiadas e formulário de contato.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
      image: `${import.meta.env.BASE_URL}images/luxprime-screenshot.webp`,
      link: 'https://hebertabchm-dotcom.github.io/projeto-imobiliario-gpt01/',
    },
    {
      id: 2,
      title: 'Projeto Aurum Vista',
      category: 'Imobiliária',
      description: 'Plataforma imobiliária especializada em curadoria de residências e investimentos com design elegante e responsivo.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
     image: `${import.meta.env.BASE_URL}images/aurumvista-screenshot.webp`,
      link: 'https://hebertabchm-dotcom.github.io/projeto-imobiliario-gpt02/',
    },
    {
      id: 3,
      title: 'Projeto Aurea State',
      category: 'Imobiliária',
      description: 'Imobiliária de alto padrão com foco em seleção por arquitetura, localização e potencial de valorização.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
     image: `${import.meta.env.BASE_URL}images/aurea-state-screenshot.webp`,
      link: 'https://hebertabchm-dotcom.github.io/projeto-imobiliario-gpt03/',
    },
    {
      id: 4,
      title: 'Projeto Siwood Interiors',
      category: 'Interiores',
      description: 'Boutique de interiores premium com projeto de interiores, reforma completa e curadoria de mobiliário.',
      tags: ['HTML5', 'CSS3', 'JavaScript'],
   image: `${import.meta.env.BASE_URL}images/siwood-screenshot.webp`,
      link: 'https://hebertabchm-dotcom.github.io/projeto-imobiliario-gpt04/',
    },
  ];

  return (
    <section id="portfolio" className="py-24 md:py-32 border-t border-border relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="section-title">Meus Projetos</h2>
          <p className="section-subtitle">
            Seleção de projetos Front-End desenvolvidos com HTML5, CSS3 e JavaScript, demonstrando interfaces modernas, responsivas e com excelente experiência do usuário.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group fade-in h-full"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative h-full bg-card border border-border rounded-2xl overflow-hidden transition-all duration-500 hover:border-accent/50 hover:shadow-2xl hover:shadow-accent/10 hover:-translate-y-1 flex flex-col">
                {/* Image Container */}
                <div className="relative h-56 md:h-64 overflow-hidden bg-muted flex-shrink-0">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Category Badge */}
                  <div className="absolute top-4 right-4 bg-accent/90 backdrop-blur-md px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-xs font-bold text-background">{project.category}</p>
                  </div>

                  {/* Hover CTA */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex flex-col items-center gap-3">
                      <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center transform group-hover:scale-110 transition-transform duration-300">
                        <ArrowUpRight size={24} className="text-background" />
                      </div>
                      <p className="text-white font-semibold text-sm">Acessar Projeto</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-1 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full hover:bg-accent/20 transition-colors duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Link indicator */}
                  <div className="flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all duration-300">
                    <span className="text-sm">Ver Projeto</span>
                    <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <p className="text-muted-foreground mb-6 text-lg">Quer explorar mais projetos?</p>
          <a
            href="https://github.com/hebertabchm-dotcom"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-flex items-center gap-2 hover:gap-3 transition-all duration-300"
          >
            Acessar Repositório GitHub
            <ExternalLink size={18} />
          </a>
        </div>
      </div>
    </section>
  );
}
