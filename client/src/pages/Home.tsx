import AboutSection from '@/components/AboutSection';
import ContactSection from '@/components/ContactSection';
import ExperienceSection from '@/components/ExperienceSection';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import PortfolioSection from '@/components/PortfolioSection';

/**
 * Design System: Minimalismo Corporativo Moderno
 * - Paleta: Preto profundo (#0a0a0a) com ciano vibrante (#00d2ff)
 * - Tipografia: Montserrat (títulos, bold) + Inter (corpo, regular)
 * - Layout: Grid assimétrico com espaçamento generoso
 * - Animações: Fade-in ao scroll, hover effects suaves, progresso animado
 * - Componentes: Botões ghost, linhas minimalistas, indicadores circulares
 */

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
