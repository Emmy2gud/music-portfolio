import { useState } from 'react';
import HeroSection from './components/HeroSection';
import BeatPlayerSection from './components/BeatPlayerSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import PortfolioSection from './components/PortfolioSection';
import TestimonialsSection from './components/TestimonialsSection';
import ContactSection from './components/ContactSection';
import ProjectDetails from './components/ProjectDetails';
import AllBeatsPage from './components/AllBeatsPage';

function App() {
  const [view, setView] = useState('home');
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setView('project');
  };

  const handleViewAllBeats = () => {
    setView('all-beats');
  };

  const handleBackToPortfolio = () => {
    setView('home');
    setSelectedProject(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary to-secondary text-white">
      {view === 'home' ? (
        <>
          <div id="home">
            <HeroSection />
          </div>
          <div id="beats">
            <BeatPlayerSection onViewAll={handleViewAllBeats} />
          </div>
          <div id="about">
            <AboutSection />
          </div>
          <div id="services">
            <ServicesSection />
          </div>
          <div id="portfolio">
            <PortfolioSection onProjectClick={handleProjectClick} />
          </div>
          <div id="testimonials">
            <TestimonialsSection />
          </div>
          <div id="contact">
            <ContactSection />
          </div>
        </>
      ) : view === 'project' ? (
        <ProjectDetails project={selectedProject} onBack={handleBackToPortfolio} />
      ) : (
        <AllBeatsPage onBack={handleBackToPortfolio} />
      )}
    </div>
  );
}

export default App;