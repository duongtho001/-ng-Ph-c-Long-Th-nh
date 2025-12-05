
import React from 'react';
import { HOME_IMAGES } from '../constants';

const HomeFeatured: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-background-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="relative rounded-xl overflow-hidden shadow-2xl group">
          <img 
            alt="BST Đồng Phục Doanh Nghiệp" 
            className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105" 
            src={HOME_IMAGES.featuredCollection}
          />
          <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500"></div>
          <div className="absolute top-1/2 left-6 sm:left-12 -translate-y-1/2 text-primary animate-fade-in-up">
            <p className="text-lg sm:text-xl font-light tracking-[0.2em] mb-2">B S T</p>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight text-white drop-shadow-lg">
              ĐỒNG PHỤC
            </h2>
            <h2 className="text-3xl sm:text-5xl font-black leading-tight text-white drop-shadow-lg">
              DOANH NGHIỆP
            </h2>
            <p className="text-xl font-light tracking-[0.2em] mt-4 text-white">2025</p>
            <button className="mt-8 bg-primary text-white font-bold py-3 px-10 rounded-full text-md hover:bg-[#a51406] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
              KHÁM PHÁ NGAY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeFeatured;
