import { ArrowRight, Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-24 pb-12 md:pb-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="container relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 items-center min-h-[calc(100vh-6rem)]">
          {/* Left Content */}
          <div className="flex flex-col justify-center">
            <div className="fade-in fade-in-delay-1">
              <p className="text-accent font-semibold text-sm tracking-widest uppercase mb-4">
                Desenvolvedor Front-End em Formação
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                Hebert<br />
                <span className="text-gradient">Matheus</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-lg leading-relaxed">
                Desenvolvedor Front-End em formação com sólida base em HTML5, CSS3 e JavaScript. Especializado em criar interfaces modernas, responsivas e com excelente experiência do usuário. Formado em Logística, agora dedicado a transformar ideias em código.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="fade-in fade-in-delay-2 flex flex-col sm:flex-row gap-4 mb-12">
              <a href="#portfolio" className="btn-primary inline-flex items-center justify-center gap-2">
                Ver Meus Projetos
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="btn-ghost inline-flex items-center justify-center gap-2">
                Entrar em Contato
              </a>
            </div>

            {/* Social Links */}
            <div className="fade-in fade-in-delay-3 flex items-center gap-4">
              <span className="text-sm text-muted-foreground">Me siga</span>
              <div className="flex gap-3">
                <a href="https://www.linkedin.com/in/hebert-matheus-127b551a1" target="_blank" rel="noopener noreferrer" className="social-link" title="LinkedIn">
                  <Linkedin size={18} />
                </a>
                <a href="https://github.com/hebertabchm-dotcom" target="_blank" rel="noopener noreferrer" className="social-link" title="GitHub">
                  <Github size={18} />
                </a>
              
                <a href="mailto:hebertabc.hm@gmail.com" className="social-link" title="Email">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div className="fade-in fade-in-delay-3 relative">
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/50 shadow-2xl">
              <img
                src="/images/hebert-profile.png"
                alt="Hebert Matheus"
                className="w-full h-full object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-40" />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
