import { Award, Briefcase, GraduationCap } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      company: 'Grupo 3 Coracoes',
      role: 'Assistente Logistico',
      period: '06/2024 - 04/2025',
      description: 'Emissao de Notas Fiscais, liberacao de motoristas, acompanhamento de operacoes e elaboracao de relatorios gerenciais',
    },
    {
      company: 'GR Assessoria Contabil e Tributaria',
      role: 'Assistente Logistico',
      period: '04/2023 - 06/2024',
      description: 'Controle, programacao e coordenacao de operacoes de transporte, monitoramento de equipamentos',
    },
    {
      company: 'DHL Supply Chain',
      role: 'Auxiliar Logistico II',
      period: '11/2021 - 11/2022',
      description: 'Operacoes de Outbound, Inbound, Logistica Reversa, utilizacao de WMS Manhattan',
    },
    {
      company: 'Hawk Transportes',
      role: 'Lider de Monitoramento / Analista Logistico',
      period: '03/2020 - 10/2021',
      description: 'Gestao operacional, analise de prioridades, definicao de rotas, elaboracao de relatorios de performance',
    },
  ];

  const education = [
    {
      school: 'UNIASSELVI',
      degree: 'Análise e Desenvolvimento de Sistemas',
      year: 'Em andamento | Conclusão prevista: julho de 2028.',
    },
     {
      school: 'Centro Universitario Celso Lisboa',
      degree: 'Bacharelado em Logistica',
      year: '2025',
    },
    {
      school: 'Escola Tecnica Objetivo',
      degree: 'Tecnico em Logistica',
      year: '2019',
    },
  ];

  const achievements = [
    { label: 'Projects Completed', value: '150+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Happy Clients', value: '80+' },
    { label: 'Awards Won', value: '15+' },
  ];

  return (
    <section id="resume" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="section-title">Experiencia & Educacao</h2>
          <p className="section-subtitle">
            Uma trajetoria de aprendizado continuo, evoluindo de Logistica para Desenvolvimento Front-End.
          </p>
        </div>

        {/* Achievements Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 pb-16 border-b border-border">
          {[{ label: 'Projetos Completos', value: '4+' }, { label: 'Anos em Logistica', value: '6+' }, { label: 'Certificacoes', value: '3+' }, { label: 'Tecnologias', value: '3+' }].map((achievement, index) => (
            <div key={index} className="text-center fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                {achievement.value}
              </div>
              <p className="text-sm text-muted-foreground">{achievement.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Experience */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-accent" />
              <h3 className="text-2xl font-bold text-foreground">Experiencia Profissional</h3>
            </div>

            <div className="space-y-1">
              {experiences.map((exp, index) => (
                <div key={index} className="experience-item fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="mb-2">
                    <h4 className="text-lg font-semibold text-foreground">{exp.role}</h4>
                    <p className="text-sm text-accent">{exp.company}</p>
                    <p className="text-xs text-muted-foreground mt-1">{exp.period}</p>
                  </div>
                  <p className="text-foreground/80 text-sm leading-relaxed">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-8">
            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Educacao</h3>
              </div>
              <div className="space-y-4">
                {education.map((edu, index) => (
                  <div key={index} className="card-minimal">
                    <h4 className="font-semibold text-foreground mb-1">{edu.degree}</h4>
                    <p className="text-sm text-muted-foreground">{edu.school}</p>
                    <p className="text-xs text-accent mt-2">{edu.year}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold text-foreground">Certificacoes</h3>
              </div>
              <div className="space-y-3">
                <div className="card-minimal">
                  <p className="text-sm text-foreground font-medium">HTML5 | CSS3 e JavaScript</p>
                  <p className="text-xs text-muted-foreground mt-1">Curso em Video</p>
                </div>
                <div className="card-minimal">
                  <p className="text-sm text-foreground font-medium">Power BI</p>
                  <p className="text-xs text-muted-foreground mt-1">Xperiun</p>
                </div>
                <div className="card-minimal">
                  <p className="text-sm text-foreground font-medium">Pacote Office</p>
                  <p className="text-xs text-muted-foreground mt-1">Prepara Cursos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
