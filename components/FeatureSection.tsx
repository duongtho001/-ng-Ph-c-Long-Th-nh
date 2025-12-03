import React from 'react';
import { FEATURES } from '../constants';

const FeatureSection: React.FC = () => {
  return (
    <section className="container mx-auto px-4 py-8 md:py-20">
      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1c0e0d] dark:text-white md:text-4xl">
            Tại sao chọn Long Thịnh?
          </h2>
          <p className="mx-auto max-w-2xl text-sm sm:text-base font-normal leading-normal text-[#1c0e0d]/80 dark:text-white/80">
            Chúng tôi cam kết mang đến những giải pháp may mặc hàng đầu với chất lượng và dịch vụ vượt trội.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((feature, index) => (
            <div
              key={index}
              className="group flex flex-col flex-1 gap-3 rounded-xl border border-primary/20 bg-background-light p-6 dark:bg-background-dark/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 ease-out"
            >
              <span className="material-symbols-outlined text-3xl text-primary group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="text-base font-bold leading-tight text-[#1c0e0d] dark:text-white">
                  {feature.title}
                </h3>
                <p className="text-sm font-normal leading-normal text-[#1c0e0d]/70 dark:text-white/70">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;