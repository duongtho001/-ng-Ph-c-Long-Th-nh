
import React from 'react';
import { LATEST_NEWS } from '../constants';

interface HomeNewsSectionProps {
  onNewsClick: (newsId: string) => void;
}

const HomeNewsSection: React.FC<HomeNewsSectionProps> = ({ onNewsClick }) => {
  return (
    <section className="py-16 bg-white dark:bg-background-dark">
      <div className="container mx-auto px-4 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center sm:text-left border-l-4 border-primary pl-4">
          TIN TỨC & SỰ KIỆN
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {LATEST_NEWS.map((item) => (
            <div 
              key={item.id} 
              className="group cursor-pointer flex flex-col h-full bg-background-light dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300"
              onClick={() => onNewsClick(item.id)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full uppercase">
                  {item.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
                  <span className="material-symbols-outlined text-base mr-1">calendar_today</span>
                  {item.date}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-3 mb-4 flex-grow">
                  {item.excerpt}
                </p>
                <div className="mt-auto">
                  <span className="text-primary font-bold text-sm inline-flex items-center group-hover:underline">
                    ĐỌC THÊM <span className="material-symbols-outlined text-sm ml-1">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeNewsSection;
