import React from 'react';
import { SERVICE_HIGHLIGHTS } from '../constants';

const ProductServicesOverview: React.FC = () => {
  return (
    <section className="container mx-auto px-4 pb-16">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICE_HIGHLIGHTS.map((service, index) => (
          <div
            key={index}
            className="group flex flex-col gap-4 rounded-xl border border-primary/20 bg-background-light p-8 dark:bg-background-dark/50 hover:shadow-xl hover:-translate-y-2 hover:border-primary/40 transition-all duration-300"
          >
            <div className="text-primary group-hover:scale-110 transition-transform duration-300 origin-left">
              <span className="material-symbols-outlined text-4xl">
                {service.icon}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="text-xl font-bold text-[#1c0e0d] dark:text-white">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-[#1c0e0d]/70 dark:text-white/70">
                {service.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductServicesOverview;