import React, { useState } from 'react';
import { PRODUCT_CATEGORIES, PRODUCTS } from '../constants';

const ProductGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = activeCategory === 'all'
    ? PRODUCTS
    : PRODUCTS.filter(product => {
        // Simple string matching, could be array inclusion if multiple categories allowed per item
        return product.category === activeCategory || 
               (activeCategory === 'uniform' && ['shirt', 'vest'].includes(product.category));
      });

  return (
    <section className="bg-background-light dark:bg-background-dark/30 py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col gap-8">
          <h2 className="text-2xl font-bold text-[#1c0e0d] dark:text-white md:text-3xl">
            Mẫu Đồng Phục Tham Khảo
          </h2>
          
          {/* Filters */}
          <div className="flex flex-wrap gap-3">
            {PRODUCT_CATEGORIES.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 transform active:scale-95 ${
                  activeCategory === category.id
                    ? 'bg-[#c41808] text-white shadow-md hover:bg-[#a51406] scale-105'
                    : 'bg-[#e5ddd9] text-[#1c0e0d]/80 hover:bg-[#d6c8c3] dark:bg-white/10 dark:text-white/80 dark:hover:bg-white/20'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-4">
            {filteredProducts.map((product) => (
              <div 
                key={product.id}
                className="group flex flex-col overflow-hidden rounded-xl bg-background-light dark:bg-[#2c1816] shadow-sm border border-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="flex flex-col gap-2 p-6">
                  <h3 className="text-lg font-bold text-[#1c0e0d] dark:text-white group-hover:text-primary transition-colors duration-300">
                    {product.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#1c0e0d]/70 dark:text-white/70">
                    {product.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="py-20 text-center text-[#1c0e0d]/50 dark:text-white/50 animate-fade-in-up">
              <p>Chưa có sản phẩm trong danh mục này.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ProductGallery;