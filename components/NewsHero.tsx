
import React from 'react';
import { IMAGES } from '../constants';

const NewsHero: React.FC = () => {
  return (
    <section 
      className="relative w-full h-[350px] sm:h-[450px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("${IMAGES.heroBg}")`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col gap-3 items-center max-w-3xl mx-auto">
          <h1 className="animate-fade-in-up text-4xl font-black tracking-tight text-white md:text-6xl drop-shadow-lg">
            Tin Tức & Sự Kiện
          </h1>
          <p className="animate-fade-in-up delay-200 text-lg text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
            Cập nhật những xu hướng mới nhất về thời trang, công nghệ may mặc và hoạt động của Long Thịnh.
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewsHero;
