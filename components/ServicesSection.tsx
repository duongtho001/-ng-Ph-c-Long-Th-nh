import React from 'react';
import { SERVICES } from '../constants';

const ServicesSection: React.FC = () => {
  return (
    <section id="services" className="bg-background-light dark:bg-background-dark/50">
      <div className="container mx-auto px-4 py-12 sm:py-16 md:py-24">
        <div className="flex flex-col items-center gap-8 md:gap-10">
          <div className="flex flex-col gap-3 text-center">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#1c0e0d] dark:text-white md:text-4xl">
              Dịch Vụ Của Chúng Tôi
            </h2>
            <p className="mx-auto max-w-2xl text-sm sm:text-base font-normal leading-normal text-[#1c0e0d]/80 dark:text-white/80">
              Cung cấp giải pháp may mặc toàn diện, từ đồng phục công ty đến các sản phẩm thời trang theo yêu cầu.
            </p>
          </div>
          <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3">
            {SERVICES.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col items-center gap-4 rounded-xl border border-primary/20 bg-background-light p-6 sm:p-8 text-center dark:bg-background-dark/80 hover:border-primary/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="flex h-14 w-14 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <span className="material-symbols-outlined text-2xl sm:text-3xl text-primary">
                    {service.icon}
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-[#1c0e0d] dark:text-white">
                  {service.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#1c0e0d]/70 dark:text-white/70">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;