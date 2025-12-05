
import React from 'react';
import { HOME_IMAGES } from '../constants';

const HomeHero: React.FC = () => {
  return (
    <section className="relative w-full h-[550px] overflow-hidden group">
      <img 
        alt="Bùng nổ ưu đãi" 
        className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" 
        src={HOME_IMAGES.heroBanner}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-300/80 via-blue-300/50 to-transparent"></div>
      
      <div className="absolute inset-0 flex items-center container mx-auto px-4 lg:px-8">
        <div className="text-[#1565C0] w-full lg:w-1/2 animate-slide-in-left">
          <h1 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wider drop-shadow-sm">Bùng nổ</h1>
          <h2 className="text-4xl sm:text-5xl font-extrabold uppercase tracking-wider mb-2 drop-shadow-sm">Ưu đãi</h2>
          <p className="text-2xl font-semibold mb-2">Giảm</p>
          <div className="flex items-end mb-4 text-[#0D47A1]">
            <span className="text-8xl sm:text-9xl font-black leading-none drop-shadow-md">15</span>
            <span className="text-5xl sm:text-6xl font-black mb-2">%</span>
          </div>
          <p className="text-2xl font-bold mb-1 text-[#0D47A1]">BST ÁO GIÓ FASTUNI</p>
          <p className="text-lg mb-6 font-medium">TỪ 15/09 - 31/12/2025</p>
          <button className="bg-primary text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#a51406] transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1">
            ĐẶT HÀNG NGAY
          </button>
        </div>
      </div>

      <button className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-black/50 p-3 rounded-md hover:bg-white dark:hover:bg-black transition-all opacity-0 group-hover:opacity-100 duration-300">
        <span className="material-symbols-outlined text-gray-800 dark:text-white">chevron_left</span>
      </button>
      <button className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/50 dark:bg-black/50 p-3 rounded-md hover:bg-white dark:hover:bg-black transition-all opacity-0 group-hover:opacity-100 duration-300">
        <span className="material-symbols-outlined text-gray-800 dark:text-white">chevron_right</span>
      </button>
    </section>
  );
};

export default HomeHero;
