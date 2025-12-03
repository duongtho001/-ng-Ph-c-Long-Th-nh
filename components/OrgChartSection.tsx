import React from 'react';

const OrgChartSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-primary/5 dark:bg-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-12 text-center dark:text-[#fcf8f8]">
          Sơ Đồ Tổ Chức
        </h2>
        <div className="flex flex-col items-center">
          {/* Director */}
          <div className="relative flex flex-col items-center">
            <div className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-md cursor-default transform hover:scale-105 hover:shadow-xl transition-all duration-300">
              Giám đốc
            </div>
            <div className="absolute top-full left-1/2 w-px h-8 bg-primary/50 dark:bg-primary/30"></div>
          </div>

          {/* Deputy Director */}
          <div className="relative mt-8 flex flex-col items-center">
            <div className="bg-primary/80 dark:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg shadow-md cursor-default transform hover:scale-105 hover:shadow-xl transition-all duration-300">
              Phó Giám đốc
            </div>
            <div className="absolute top-full left-1/2 w-px h-8 bg-primary/50 dark:bg-primary/30"></div>
          </div>

          {/* Horizontal Line */}
          <div className="mt-8 w-4/5 md:w-2/3 lg:w-1/2 h-px bg-primary/50 dark:bg-primary/30 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px"></div>
            {/* Vertical connectors */}
            <div className="absolute top-0 left-[12.5%] w-px h-8 bg-primary/50 dark:bg-primary/30 -translate-y-full"></div>
            <div className="absolute top-0 left-[37.5%] w-px h-8 bg-primary/50 dark:bg-primary/30 -translate-y-full"></div>
            <div className="absolute top-0 left-[62.5%] w-px h-8 bg-primary/50 dark:bg-primary/30 -translate-y-full"></div>
            <div className="absolute top-0 left-[87.5%] w-px h-8 bg-primary/50 dark:bg-primary/30 -translate-y-full"></div>
          </div>

          {/* Departments */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-8 w-full md:w-5/6 lg:w-3/4">
            <div className="flex justify-center text-center">
              <div className="bg-background-light dark:bg-background-dark border border-primary/30 text-sm font-medium py-3 px-4 rounded-lg shadow-sm w-full max-w-40 flex items-center justify-center h-full hover:bg-primary/5 hover:border-primary transition-all duration-300 cursor-default">
                Phòng Kinh Doanh
              </div>
            </div>
            <div className="flex justify-center text-center">
              <div className="bg-background-light dark:bg-background-dark border border-primary/30 text-sm font-medium py-3 px-4 rounded-lg shadow-sm w-full max-w-40 flex items-center justify-center h-full hover:bg-primary/5 hover:border-primary transition-all duration-300 cursor-default">
                Phòng Tài chính Kế toán
              </div>
            </div>
            <div className="flex justify-center text-center">
              <div className="bg-background-light dark:bg-background-dark border border-primary/30 text-sm font-medium py-3 px-4 rounded-lg shadow-sm w-full max-w-40 flex items-center justify-center h-full hover:bg-primary/5 hover:border-primary transition-all duration-300 cursor-default">
                Phòng Hành chính Nhân sự
              </div>
            </div>
            <div className="flex justify-center text-center">
              <div className="bg-background-light dark:bg-background-dark border border-primary/30 text-sm font-medium py-3 px-4 rounded-lg shadow-sm w-full max-w-40 flex items-center justify-center h-full hover:bg-primary/5 hover:border-primary transition-all duration-300 cursor-default">
                Phân xưởng Sản xuất
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrgChartSection;