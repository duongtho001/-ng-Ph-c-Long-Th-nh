
import React from 'react';
import { HOME_CATEGORIES } from '../constants';

const HomeCategoryGrid: React.FC = () => {
  return (
    <section className="py-16 bg-white dark:bg-background-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center sm:text-left border-l-4 border-primary pl-4">
          DANH MỤC SẢN PHẨM
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {HOME_CATEGORIES.map((category) => (
            <div key={category.id} className="group relative cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-sm">
                <img 
                  alt={category.label} 
                  className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-500" 
                  src={category.image}
                />
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] text-center">
                <p className="bg-white/95 dark:bg-black/90 text-gray-800 dark:text-white py-3 px-4 rounded-md font-bold text-sm shadow-lg group-hover:text-primary transition-colors duration-300 uppercase tracking-wide">
                  {category.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeCategoryGrid;
