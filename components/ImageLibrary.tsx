import React, { useState } from 'react';
import { GALLERY_CATEGORIES, GALLERY_ITEMS } from '../constants';

const ImageLibrary: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredItems = activeCategory === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section className="bg-background-light dark:bg-background-dark pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3">
            {GALLERY_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-200 ${
                  activeCategory === category.id
                    ? 'bg-[#c41808] text-white shadow-md hover:bg-[#a51406]'
                    : 'bg-[#e5ddd9] text-[#1c0e0d]/80 hover:bg-[#d6c8c3] dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-gray-200 dark:bg-gray-800"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 w-full p-4 sm:p-6">
                  <h3 className="text-lg font-bold leading-tight text-white drop-shadow-sm">
                    {item.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          {filteredItems.length === 0 && (
            <div className="py-20 text-center text-[#1c0e0d]/50 dark:text-white/50">
              <p>Chưa có hình ảnh trong danh mục này.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ImageLibrary;