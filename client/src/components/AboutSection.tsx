import { Code2, Palette, Zap } from 'lucide-react';

export default function AboutSection() {
  const skills = [
    { category: 'Front-End Skills', items: ['HTML5', 'CSS3', 'JavaScript', 'Semantic HTML', 'Responsive Design', 'UX|UI', ] },
    { category: 'Ferramentas', items: ['Git/GitHub', 'VS Code', 'DevTools', 'Figma','Framer', 'Power BI'] },
    { category: 'Idiomas', items: ['Portugues (Nativo)', 'Ingles (Básico)'] },
  ];

  const highlights = [
    { icon: Code2, label: 'Front-End Developer', description: 'HTML5, CSS3, JavaScript' },
    { icon: Palette, label: 'UI/UX Focused', description: 'Interfaces responsivas e intuitivas' },
    { icon: Zap, label: 'Problem Solver', description: 'Solucoes eficientes e criativas' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="section-title">Sobre Mim</h2>
          <p className="section-subtitle">
            Sou um desenvolvedor Front-End em formação, apaixonado por criar interfaces intuitivas e funcionais que resolvem problemas reais com excelência.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-20">
          {/* Left: Bio */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <p className="text-lg text-foreground/90 leading-relaxed">
                Sou um profissional em transição de carreira, com sólida formação em Logística e agora focado em desenvolvimento Front-End. Minha jornada profissional me ensinou a pensar em processos, otimização e solução de problemas — habilidades que aplico diretamente no desenvolvimento de interfaces web.
              </p>
              <p className="text-lg text-foreground/90 leading-relaxed">
                Acredito que o melhor código é aquele que combina funcionalidade com estilo. Cada projeto que realizo é abordado com atenção aos detalhes, responsividade e foco na experiência do usuário. Estou constantemente aprendendo e evoluindo minhas habilidades em HTML5, CSS3 e JavaScript.
              </p>
              <div className="pt-4">
                <a href="#contact" className="btn-primary inline-flex items-center gap-2">
                  Entre em Contato
                </a>
              </div>
            </div>
          </div>

          {/* Right: Highlights */}
          <div className="space-y-4 fade-in fade-in-delay-2">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="card-minimal">
                  <div className="flex items-start gap-3">
                    <Icon className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground mb-1">{item.label}</h4>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-border">
          {skills.map((skillGroup, index) => (
            <div key={index} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <h3 className="text-lg font-semibold text-foreground mb-6 uppercase tracking-wider">
                {skillGroup.category}
              </h3>
              <div className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div key={skillIndex} className="flex items-center justify-between">
                    <span className="text-foreground/80">{skill}</span>
                    <div className="w-24 h-1 bg-border rounded-full overflow-hidden">
                      <div
                        className="progress-bar-fill"
                        style={{
                          width: `${75 + Math.random() * 25}%`,
                          animation: `none`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
