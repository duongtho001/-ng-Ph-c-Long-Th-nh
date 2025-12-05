
import React, { useState } from 'react';
import { NAV_LINKS, HOME_IMAGES } from '../constants';

interface NavBarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const NavBar: React.FC<NavBarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (pageId: string, e: React.MouseEvent) => {
    e.preventDefault();
    onNavigate(pageId);
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Top Bar */}
      <div className="bg-primary text-white text-center py-2 text-sm font-medium">
        <p>Thiết kế & In ấn miễn phí - Giao hàng miễn phí toàn quốc</p>
      </div>

      <header className="sticky top-0 z-50 w-full bg-background-light dark:bg-background-dark border-b border-gray-200 dark:border-gray-700">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo Section */}
            <div className="flex-shrink-0 cursor-pointer" onClick={(e) => handleNavClick('home', e)}>
              <img 
                src={HOME_IMAGES.logo} 
                alt="Company Logo" 
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={(e) => handleNavClick(link.id, e)}
                  className={`text-sm xl:text-base font-bold transition-all duration-200 uppercase ${
                    currentPage === link.id
                      ? 'text-primary border-b-2 border-primary pb-1'
                      : 'text-gray-800 dark:text-gray-200 hover:text-primary dark:hover:text-primary'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Search Icon */}
            <div className="hidden lg:flex items-center">
              <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors text-gray-800 dark:text-white">
                <span className="material-symbols-outlined">search</span>
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden p-2 text-[#1c0e0d] dark:text-white hover:bg-black/5 dark:hover:bg-white/10 rounded-lg transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined text-3xl">
                {isMenuOpen ? 'close' : 'menu'}
              </span>
            </button>
          </div>

          {/* Mobile Nav */}
          <div className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-[500px] opacity-100 pb-6 border-t border-gray-100 dark:border-gray-800' : 'max-h-0 opacity-0'}`}>
            <nav className="flex flex-col gap-2 pt-4">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`text-base font-bold uppercase px-4 py-3 rounded-lg mx-2 transition-colors ${
                     currentPage === link.id
                    ? 'bg-primary/5 text-primary'
                    : 'text-[#1c0e0d] dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
                  }`}
                  onClick={(e) => handleNavClick(link.id, e)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};

export default NavBar;
