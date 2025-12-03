
import React, { useEffect, useState, useCallback } from 'react';
import { HERO_SLIDES } from '../constants';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onNavigate }) => {
  const [offset, setOffset] = useState(0);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Parallax Effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + HERO_SLIDES.length) % HERO_SLIDES.length);
  }, []);

  // Auto-play Slider
  useEffect(() => {
    const slideInterval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds

    // Reset interval when slide changes (either automatically or manually)
    return () => clearInterval(slideInterval);
  }, [currentSlide, nextSlide]);

  return (
    <section 
      className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px] flex items-center justify-center overflow-hidden group"
    >
      {/* Slider Container with Parallax */}
      <div 
        className="absolute inset-0 w-full h-[120%] -top-[10%] will-change-transform pointer-events-none"
        style={{
          transform: `translate3d(0, ${offset * 0.5}px, 0)`,
        }}
      >
        {HERO_SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("${slide.image}")`,
            }}
            role="img"
            aria-label={slide.alt}
          />
        ))}
      </div>

      {/* Navigation Arrows - Always visible for better UX */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/20 text-white backdrop-blur-sm border border-white/10 hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center"
        aria-label="Previous slide"
      >
        <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_left</span>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 md:p-3 rounded-full bg-black/20 text-white backdrop-blur-sm border border-white/10 hover:bg-primary hover:scale-110 transition-all duration-300 shadow-lg flex items-center justify-center"
        aria-label="Next slide"
      >
        <span className="material-symbols-outlined text-2xl md:text-3xl">chevron_right</span>
      </button>

      {/* Content Layer */}
      <div className="container mx-auto px-4 text-center relative z-10 pointer-events-none">
        <div className="flex flex-col gap-4 items-center max-w-4xl mx-auto pointer-events-auto">
          <h1 className="animate-fade-in-up text-4xl font-black leading-tight tracking-tighter text-white sm:text-5xl md:text-6xl drop-shadow-xl">
            CÔNG TY TNHH SX TM DV MAY MẶC LONG THỊNH
          </h1>
          <h2 className="animate-fade-in-up delay-200 text-xl font-medium leading-normal text-white/90 sm:text-2xl drop-shadow-md">
            Nâng Tầm Thương Hiệu
          </h2>
          <div className="mt-4 animate-fade-in-up delay-300">
            <button 
              onClick={() => onNavigate('contact')}
              className="inline-flex min-w-[160px] cursor-pointer items-center justify-center rounded-lg h-14 px-8 bg-primary text-white text-lg font-bold tracking-wide transition-all duration-300 hover:bg-red-700 hover:scale-105 hover:shadow-2xl shadow-xl"
            >
              Liên hệ ngay
            </button>
          </div>
        </div>
      </div>

      {/* Slider Controls (Dots) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
        {HERO_SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 w-3 rounded-full transition-all duration-300 shadow-sm ${
              index === currentSlide 
                ? 'bg-primary w-8' 
                : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
