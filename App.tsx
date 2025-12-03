import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Home Page Components
import HeroSection from './components/HeroSection';
import FeatureSection from './components/FeatureSection';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';

// About Page Components
import AboutHero from './components/AboutHero';
import IntroductionSection from './components/IntroductionSection';
import CompanyProfileSection from './components/CompanyProfileSection';
import ValuesSection from './components/ValuesSection';
import OrgChartSection from './components/OrgChartSection';

// Products Page Components
import ProductsHero from './components/ProductsHero';
import ProductServicesOverview from './components/ProductServicesOverview';
import ProductGallery from './components/ProductGallery';

// Gallery Page Components
import GalleryHero from './components/GalleryHero';
import ImageLibrary from './components/ImageLibrary';

// Contact Page Component
import ContactPage from './components/ContactPage';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderContent = () => {
    switch (currentPage) {
      case 'about':
        return (
          <>
            <AboutHero />
            <IntroductionSection />
            <CompanyProfileSection />
            <ValuesSection />
            <OrgChartSection />
          </>
        );
      case 'products':
        return (
          <>
            <ProductsHero />
            <ProductServicesOverview />
            <ProductGallery />
          </>
        );
      case 'gallery':
        return (
          <>
            <GalleryHero />
            <ImageLibrary />
          </>
        );
      case 'contact':
        return (
          <ContactPage />
        );
      case 'home':
      default:
        return (
          <>
            <HeroSection onNavigate={setCurrentPage} />
            <FeatureSection />
            <AboutSection />
            <ServicesSection />
          </>
        );
    }
  };

  return (
    <div className="relative flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark text-[#1c0e0d] dark:text-white overflow-x-hidden">
      <NavBar currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="flex-grow">
        {renderContent()}
      </main>
      <Footer />

      {/* Floating Chatbot-style Contact Button */}
      <button
        onClick={() => setCurrentPage('contact')}
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white shadow-[0_0_20px_rgba(196,24,8,0.5)] hover:bg-red-700 hover:scale-110 transition-all duration-300 group"
        aria-label="Liên hệ với chúng tôi"
        title="Liên hệ ngay"
      >
        {/* Pulsing Ring Effect */}
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75"></span>
        
        {/* Icon */}
        <span className="relative material-symbols-outlined text-3xl">
          support_agent
        </span>

        {/* Tooltip Label */}
        <div className="absolute right-full mr-3 hidden rounded-lg bg-white dark:bg-[#221110] px-3 py-2 text-sm font-bold text-primary shadow-lg group-hover:block whitespace-nowrap border border-primary/20 animate-fade-in-up">
          Liên hệ tư vấn
        </div>
      </button>
    </div>
  );
}

export default App;