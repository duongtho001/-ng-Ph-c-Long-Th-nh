
import React, { useState } from 'react';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

// Home Page Components
import HomeHero from './components/HomeHero';
import HomeFeatured from './components/HomeFeatured';
import HomeNewCollections from './components/HomeNewCollections';
import HomeCategoryGrid from './components/HomeCategoryGrid';
import HomeVideoSection from './components/HomeVideoSection';
import HomeNewsSection from './components/HomeNewsSection';
import NewsDetailPage from './components/NewsDetailPage';

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

// News Page Components
import NewsHero from './components/NewsHero';
import NewsPage from './components/NewsPage';

// Contact Page Component
import ContactPage from './components/ContactPage';

import { HOME_IMAGES, LATEST_NEWS } from './constants';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedNewsId, setSelectedNewsId] = useState<string | null>(null);

  const handleNewsClick = (newsId: string) => {
    setSelectedNewsId(newsId);
    setCurrentPage('news-detail');
    window.scrollTo(0, 0);
  };

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
      case 'news':
        return (
          <>
            <NewsHero />
            <NewsPage onNewsClick={handleNewsClick} />
          </>
        );
      case 'news-detail':
        const newsItem = LATEST_NEWS.find(item => item.id === selectedNewsId);
        if (!newsItem) return null; // Or a not found component
        return (
          <NewsDetailPage 
            newsItem={newsItem} 
            onBack={() => {
              setCurrentPage('news'); // Go back to news list
              window.scrollTo(0, 0);
            }} 
          />
        );
      case 'home':
      default:
        return (
          <>
            <HomeHero />
            <HomeFeatured />
            <HomeNewCollections />
            <HomeCategoryGrid />
            <HomeVideoSection />
            <HomeNewsSection onNewsClick={handleNewsClick} />
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

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 space-y-4 z-50">
        <a 
          href="https://zalo.me/0906029111" 
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-500 text-white flex items-center p-1 pr-4 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 group w-12 hover:w-56 overflow-hidden h-12"
        >
          <img 
            alt="Zalo icon" 
            className="w-10 h-10 flex-shrink-0 rounded-full" 
            src={HOME_IMAGES.zaloIcon}
          />
          <span className="ml-3 font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300">TƯ VẤN QUA ZALO</span>
        </a>
        
        <a 
          href="tel:0906029111" 
          className="bg-orange-500 text-white flex items-center p-2 pr-4 rounded-full shadow-lg hover:bg-orange-600 transition-all duration-300 group w-12 hover:w-[280px] overflow-hidden h-12 justify-center"
        >
          <span className="material-symbols-outlined text-3xl flex-shrink-0 animate-pulse">call</span>
          <span className="ml-3 font-semibold whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm">0906.029.111 - 0965.709.601</span>
        </a>
      </div>
    </div>
  );
}

export default App;
