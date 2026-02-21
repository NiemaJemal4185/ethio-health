
import React, { useState, useEffect } from 'react';
import { AppSection, Language } from './types';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Traditional from './components/Traditional';
import Modern from './components/Modern';
import About from './components/About';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);
  const [language, setLanguage] = useState<Language>(Language.EN);

  // Simple scroll to top on section change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [activeSection]);

  const toggleLanguage = () => {
    setLanguage(prev => prev === Language.EN ? Language.AM : Language.EN);
  };

  const renderSection = () => {
    switch (activeSection) {
      case AppSection.HOME:
        return <Home onNavigate={setActiveSection} lang={language} />;
      case AppSection.TRADITIONAL:
        return <Traditional lang={language} />;
      case AppSection.MODERN:
        return <Modern lang={language} />;
      case AppSection.ABOUT:
        return <About lang={language} />;
      default:
        return <Home onNavigate={setActiveSection} lang={language} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar 
        activeSection={activeSection} 
        onNavigate={setActiveSection} 
        language={language} 
        onToggleLanguage={toggleLanguage} 
      />
      <main className="flex-grow pt-16">
        {renderSection()}
      </main>
      <Footer lang={language} />
    </div>
  );
};

export default App;
