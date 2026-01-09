import { Mail, MapPin, Phone } from 'lucide-react';

export default function ContactSection() {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'hebertabc.hm@gmail.com',
      href: 'mailto:hebertabc.hm@gmail.com',
    },
    {
      icon: Phone,
      label: 'Telefone',
      value: '(21) 96995-8530',
      href: 'tel:+5521969958530',
    },
    {
      icon: MapPin,
      label: 'Localizacao',
      value: 'Itaguai - RJ, Brasil',
      href: '#',
    },
  ];

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-border">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title mb-4">Vamos Trabalhar Juntos</h2>
          <p className="section-subtitle max-w-2xl mx-auto">
            Tem um projeto em mente? Adoraria ouvir sobre ele. Entre em contato e vamos criar algo incrivel juntos.
          </p>
        </div>

          {/* Contact Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <a
                  key={index}
                  href={info.href}
                  className="card-minimal text-center hover:bg-accent/5 group"
                >
                  <div className="flex justify-center mb-4">
                    <div className="icon-circle group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{info.label}</h3>
                  <p className="text-sm text-muted-foreground group-hover:text-accent transition-colors">
                    {info.value}
                  </p>
                </a>
              );
            })}
          </div>

          {/* Contact Form */}
          <div className="bg-card border border-border rounded-lg p-8 md:p-12">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Seu Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Seu Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="seu@email.com"
                    className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Consulta sobre projeto"
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Conte-me sobre seu projeto..."
                  className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:border-accent transition-colors resize-none"
                />
              </div>

              <button type="submit" className="btn-primary w-full">
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
