
import React from 'react';
import { HOME_IMAGES } from '../constants';

const HomeVideoSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center sm:text-left border-l-4 border-primary pl-4">
          LÝ DO CHỌN ĐỒNG PHỤC HẢI ANH
        </h2>
        <div className="relative rounded-xl overflow-hidden shadow-2xl group cursor-pointer">
          <img 
            alt="Factory interior" 
            className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" 
            src={HOME_IMAGES.whyChooseUs}
          />
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
            <button className="bg-white/20 backdrop-blur-md p-6 rounded-full border-2 border-white/50 group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-white text-6xl drop-shadow-lg">play_arrow</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeVideoSection;
