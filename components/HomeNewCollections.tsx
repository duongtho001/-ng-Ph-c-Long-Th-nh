
import React from 'react';
import { NEW_COLLECTIONS } from '../constants';

const HomeNewCollections: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center sm:text-left border-l-4 border-primary pl-4">
          BỘ SƯU TẬP MỚI
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {NEW_COLLECTIONS.map((item) => (
            <div key={item.id} className="relative group overflow-hidden rounded-lg shadow-md cursor-pointer">
              <img 
                alt={item.alt} 
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" 
                src={item.image}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNewCollections;
