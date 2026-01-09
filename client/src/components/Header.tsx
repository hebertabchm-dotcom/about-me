import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Sobre', href: '#about' },
    { label: 'Experiência', href: '#resume' },
    { label: 'Portfólio', href: '#portfolio' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.replace('#', ''));
      let currentSection = 'home';

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            currentSection = section;
          }
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace('#', '');
    setActiveSection(sectionId);
    setIsOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border transition-all duration-300">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#home"
          onClick={() => handleNavClick('#home')}
          className="flex items-center gap-2 hover:opacity-80 transition-opacity duration-300"
        >
          <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center">
            <span className="text-accent-foreground font-bold text-sm">HM</span>
          </div>
          <span className="text-lg font-bold text-foreground hidden sm:inline">Hebert Matheus</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => {
            const sectionId = item.href.replace('#', '');
            const isActive = activeSection === sectionId;
            return (
              <button
                key={item.label}
                onClick={() => handleNavClick(item.href)}
                className={`text-sm font-medium transition-all duration-300 relative group ${ 
                  isActive 
                    ? 'text-accent' 
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-accent transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            );
          })}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:block">
          <button
            onClick={() => handleNavClick('#contact')}
            className="btn-ghost text-sm"
          >
            Contato
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-border rounded-lg transition-colors duration-300"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="container py-4 flex flex-col gap-2">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium py-2 px-3 rounded-lg transition-all duration-300 text-left ${
                    isActive
                      ? 'text-accent bg-accent/10'
                      : 'text-muted-foreground hover:text-foreground hover:bg-border/50'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('#contact')}
              className="btn-ghost text-sm w-full mt-2"
            >
              Contato
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
