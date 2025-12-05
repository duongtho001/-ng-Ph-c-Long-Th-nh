
import React from 'react';
import { NewsItem } from '../types';

interface NewsDetailPageProps {
  newsItem: NewsItem;
  onBack: () => void;
}

const NewsDetailPage: React.FC<NewsDetailPageProps> = ({ newsItem, onBack }) => {
  return (
    <div className="bg-white dark:bg-background-dark min-h-screen py-10 animate-fade-in-up">
      <div className="container mx-auto px-4 max-w-4xl">
        <button 
          onClick={onBack}
          className="flex items-center text-primary font-bold mb-6 hover:underline"
        >
          <span className="material-symbols-outlined mr-2">arrow_back</span>
          QUAY LẠI TRANG CHỦ
        </button>

        <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg mb-8">
          <img 
            src={newsItem.image} 
            alt={newsItem.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute top-4 left-4 bg-primary text-white text-sm font-bold px-4 py-1 rounded-full uppercase shadow-md">
            {newsItem.category}
          </div>
        </div>

        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
          <span className="material-symbols-outlined text-base mr-2">calendar_today</span>
          {newsItem.date}
        </div>

        <h1 className="text-3xl md:text-4xl font-black text-gray-900 dark:text-white mb-6 leading-tight">
          {newsItem.title}
        </h1>

        <div 
          className="prose prose-lg dark:prose-invert max-w-none text-gray-700 dark:text-gray-300"
          dangerouslySetInnerHTML={{ __html: newsItem.content }}
        />
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800">
           <button 
            onClick={onBack}
            className="bg-primary text-white font-bold py-3 px-8 rounded-full hover:bg-[#a51406] transition-colors shadow-lg"
          >
            ĐỌC THÊM TIN KHÁC
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;
