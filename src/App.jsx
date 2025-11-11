import HeroSection from './components/HeroSection';
import BeatPlayerSection from './components/BeatPlayerSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary text-white">
      <div id="home">
        <HeroSection />
      </div>
      <div id="beats">
        <BeatPlayerSection />
      </div>
      <div id="about">
        <AboutSection />
      </div>
      <div id="services">
        <ServicesSection />
      </div>
      <div id="portfolio">
        <PortfolioSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </div>
  );
}

export default App;