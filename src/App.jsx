import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import Marquee from './components/Marquee';
import ProcessSection from './components/ProcessSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackgroundCanvas from './components/3d/BackgroundCanvas';
import PageLoader from './components/3d/PageLoader';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [prefilledMessage, setPrefilledMessage] = useState('');

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -90;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const handleSelectService = (service) => {
    setPrefilledMessage(`Hi Click Or Media team, I would like to get a dedicated strategy and quote for: ${service.title}.`);
    scrollToSection('contact-section');
  };

  return (
    <div className="app-root">

      {isLoading && (
        <PageLoader onLoadingComplete={() => setIsLoading(true)} />
      )}

      <BackgroundCanvas />

      <Navbar onOpenContact={() => scrollToSection('contact-section')} />

      <main className="main-content">
        <Hero
          current3DPreset='cyber-core'
          isWireframe={false}
          autoRotate={true}
          customColor="#ff5500"
          onExploreServices={() => scrollToSection('services-section')}
          onCollaborate={() => scrollToSection('contact-section')}
        />

        <StatsBar />

        <AboutSection onKnowMore={() => scrollToSection('services-section')} />

        <ServicesSection
          onSelectService={handleSelectService}
          onExploreAll={() => scrollToSection('contact-section')}
        />

        <Marquee />

        <ProcessSection  onExploreAll={() => scrollToSection('contact-section')} />
        <ContactSection prefilledMessage={prefilledMessage} />
      </main>

      <Footer />
    </div>
  );
}
