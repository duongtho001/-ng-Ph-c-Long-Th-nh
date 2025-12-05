
import React, { useState } from 'react';
import { LATEST_NEWS } from '../constants';

interface NewsPageProps {
  onNewsClick: (newsId: string) => void;
}

const NewsPage: React.FC<NewsPageProps> = ({ onNewsClick }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Extract unique categories
  const categories = ['All', ...Array.from(new Set(LATEST_NEWS.map(item => item.category)))];

  const filteredNews = activeCategory === 'All' 
    ? LATEST_NEWS 
    : LATEST_NEWS.filter(item => item.category === activeCategory);

  return (
    <div className="bg-background-light dark:bg-background-dark py-16">
      <div className="container mx-auto px-4 lg:px-8">
        
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform active:scale-95 ${
                activeCategory === category
                  ? 'bg-[#c41808] text-white shadow-md hover:bg-[#a51406] scale-105'
                  : 'bg-[#e5ddd9] text-[#1c0e0d]/80 hover:bg-[#d6c8c3] dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredNews.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer flex flex-col h-full bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              onClick={() => onNewsClick(item.id)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                  {item.category}
                </div>
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                  <span className="material-symbols-outlined text-base mr-2">calendar_today</span>
                  {item.date}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-grow leading-relaxed">
                  {item.excerpt}
                </p>
                
                <div className="mt-auto border-t border-gray-100 dark:border-gray-700 pt-4">
                  <span className="text-primary font-bold text-sm inline-flex items-center group-hover:underline">
                    ĐỌC THÊM <span className="material-symbols-outlined text-sm ml-1 transition-transform group-hover:translate-x-1">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredNews.length === 0 && (
          <div className="text-center py-20 text-gray-500">
            <p>Không tìm thấy bài viết nào trong danh mục này.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsPage;
