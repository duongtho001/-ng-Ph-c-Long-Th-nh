import React from 'react';
import { IMAGES } from '../constants';

const AboutHero: React.FC = () => {
  return (
    <section 
      className="relative w-full h-[400px] sm:h-[500px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url("${IMAGES.aboutHeroBg}")`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col gap-3 items-center max-w-3xl mx-auto">
          <h1 className="animate-fade-in-up text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl drop-shadow-lg">
            Về Chúng Tôi
          </h1>
          <h2 className="animate-fade-in-up delay-200 text-white/90 text-lg font-normal leading-relaxed sm:text-xl max-w-2xl drop-shadow-md">
            Dẫn đầu ngành may mặc Việt Nam với cam kết về chất lượng và sự tin cậy.
          </h2>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;