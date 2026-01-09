import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/hebert-matheus-127b551a1', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com/hebertabchm-dotcom', label: 'GitHub' },
    { icon: Mail, href: 'mailto:hebertabc.hm@gmail.com', label: 'Email' },
  ];
  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'Contato', href: '#contact' },
  ];

  return (
    <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
      <div className="container py-12 md:py-16">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 pb-12 border-b border-border">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-sm">HM</span>
              </div>
              <span className="font-bold text-foreground">Hebert Matheus</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Desenvolvedor Front-End & Designer Web
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wider">
              Links Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wider">
              Tecnologias
            </h4>
            <ul className="space-y-2">
              {['HTML5', 'CSS3', 'JavaScript', 'Web Design'].map((service) => (
                <li key={service}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4 uppercase text-xs tracking-wider">
              Conecte-se
            </h4>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    title={social.label}
                    className="social-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Hebert Matheus. Todos os direitos reservados.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="text-sm text-muted-foreground hover:text-accent transition-colors">
              Termos de Serviço
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
