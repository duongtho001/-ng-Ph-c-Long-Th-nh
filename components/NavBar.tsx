import React, { useState } from 'react';
import { NAV_LINKS } from '../constants';

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
    <header className="sticky top-0 z-50 w-full bg-white/95 dark:bg-[#221110]/95 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo Section */}
          <div className="flex items-center gap-3 cursor-pointer group" onClick={(e) => handleNavClick('home', e)}>
            <div className="size-8 text-primary transition-transform group-hover:scale-110">
              <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                <path clipRule="evenodd" d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z" fill="currentColor" fillRule="evenodd"></path>
              </svg>
            </div>
            <h2 className="text-xl font-extrabold tracking-tight text-[#1c0e0d] dark:text-white">
              Long Thịnh
            </h2>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-1 lg:gap-2 md:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(link.id, e)}
                className={`px-4 py-2 text-sm font-semibold rounded-full transition-all duration-200 ${
                  currentPage === link.id
                    ? 'bg-primary/10 text-primary'
                    : 'text-[#1c0e0d] dark:text-white/90 hover:bg-black/5 dark:hover:bg-white/10 hover:text-primary'
                }`}
              >
                {link.label}
              </a>
            ))}
            <div className="ml-4">
               <button 
                  onClick={(e) => handleNavClick('contact', e)}
                  className="flex items-center justify-center rounded-lg h-10 px-6 bg-primary text-white text-sm font-bold shadow-md hover:bg-red-700 transition-colors"
                >
                  Báo Giá
               </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-[#1c0e0d] dark:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="material-symbols-outlined text-3xl">
              {isMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>

        {/* Mobile Nav */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100 pb-6' : 'max-h-0 opacity-0'}`}>
          <nav className="flex flex-col gap-2 pt-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className={`text-lg font-medium px-4 py-3 rounded-lg ${
                   currentPage === link.id
                  ? 'bg-primary/5 text-primary'
                  : 'text-[#1c0e0d] dark:text-white hover:bg-black/5 dark:hover:bg-white/10'
                }`}
                onClick={(e) => handleNavClick(link.id, e)}
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={(e) => handleNavClick('contact', e)}
              className="mt-2 flex w-full items-center justify-center rounded-lg h-12 bg-primary text-white text-base font-bold shadow-md hover:bg-red-700"
            >
              Yêu Cầu Báo Giá
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;