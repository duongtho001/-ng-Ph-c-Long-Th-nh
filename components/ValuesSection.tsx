import React from 'react';

const ValuesSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Vision */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background-light dark:bg-background-dark shadow-sm border border-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
              <span className="material-symbols-outlined">visibility</span>
            </div>
            <h3 className="text-lg font-bold mb-2 dark:text-[#fcf8f8]">Tầm Nhìn</h3>
            <p className="text-sm text-[#1c0e0d]/80 dark:text-[#f8f6f5]/80 leading-relaxed">
              Trở thành doanh nghiệp may mặc hàng đầu Việt Nam, là biểu tượng của chất lượng và sự đổi mới trên thị trường quốc tế.
            </p>
          </div>

          {/* Mission */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background-light dark:bg-background-dark shadow-sm border border-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
              <span className="material-symbols-outlined">rocket_launch</span>
            </div>
            <h3 className="text-lg font-bold mb-2 dark:text-[#fcf8f8]">Sứ Mệnh</h3>
            <p className="text-sm text-[#1c0e0d]/80 dark:text-[#f8f6f5]/80 leading-relaxed">
              Mang đến những sản phẩm may mặc chất lượng cao, tối ưu hóa lợi ích cho khách hàng, đối tác và đóng góp vào sự phát triển của cộng đồng.
            </p>
          </div>

          {/* Core Values */}
          <div className="flex flex-col items-center text-center p-6 rounded-xl bg-background-light dark:bg-background-dark shadow-sm border border-primary/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-accent/20 text-accent">
              <span className="material-symbols-outlined">verified_user</span>
            </div>
            <h3 className="text-lg font-bold mb-2 dark:text-[#fcf8f8]">Giá Trị Cốt Lõi</h3>
            <p className="text-sm text-[#1c0e0d]/80 dark:text-[#f8f6f5]/80 leading-relaxed font-semibold">
              "Vững Chất Lượng, Trọn Niềm Tin" - Cam kết không ngừng về chất lượng sản phẩm và xây dựng niềm tin bền vững với khách hàng.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;