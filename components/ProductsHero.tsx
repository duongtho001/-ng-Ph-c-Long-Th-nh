import React from 'react';

const ProductsHero: React.FC = () => {
  return (
    <section 
      className="relative w-full h-[350px] sm:h-[450px] flex items-center justify-center bg-cover bg-center bg-no-repeat"
      style={{
        // Using a product-related image from constants or a consistent placeholder
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4) 0%, rgba(0, 0, 0, 0.7) 100%), url("https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2670&auto=format&fit=crop")`,
      }}
    >
      <div className="container mx-auto px-4 text-center">
        <div className="flex flex-col gap-3 items-center max-w-3xl mx-auto">
          <h1 className="animate-fade-in-up text-4xl font-black tracking-tight text-white md:text-6xl drop-shadow-lg">
            Sản Phẩm & Dịch Vụ
          </h1>
          <p className="animate-fade-in-up delay-200 text-lg text-white/90 leading-relaxed max-w-2xl drop-shadow-md">
            Giải pháp may mặc toàn diện, đa dạng mẫu mã, đáp ứng mọi nhu cầu của doanh nghiệp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ProductsHero;