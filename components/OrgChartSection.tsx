import React from 'react';

const OrgChartSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-primary/5 dark:bg-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-8 sm:mb-12 text-center dark:text-[#fcf8f8]">
          Sơ Đồ Tổ Chức
        </h2>
        <div className="flex flex-col items-center w-full">
          {/* Director */}
          <div className="relative flex flex-col items-center w-full max-w-xs sm:max-w-none">
            <div className="bg-primary text-white font-bold py-3 px-6 rounded-lg shadow-md cursor-default transform hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-center">
              Giám đốc
            </div>
            {/* Mobile Connector */}
            <div className="h-6 w-px bg-primary/30 md:hidden"></div>
            {/* Desktop Connector */}
            <div className="hidden md:block absolute top-full left-1/2 w-px h-8 bg-primary/50 dark:bg-primary/30"></div>
          </div>

          {/* Deputy Director */}
          <div className="relative md:mt-8 flex flex-col items-center w-full max-w-xs sm:max-w-none">
            <div className="bg-primary/80 dark:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg shadow-md cursor-default transform hover:scale-105 hover:shadow-xl transition-all duration-300 w-full sm:w-auto text-center">
              Phó Giám đốc
            </div>
            {/* Mobile Connector */}
            <div className="h-6 w-px bg-primary/30 md:hidden"></div>
            {/* Desktop Connector */}
            <div className="hidden md:block absolute top-full left-1/2 w-px h-8 bg-primary/50 dark:bg-primary/30"></div>
          </div>

          {/* Horizontal Line (Desktop Only) */}
          <div className="hidden md:block mt-8 w-4/5 md:w-2/3 lg:w-1/2 h-px bg-primary/50 dark:bg-primary/30 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-px"></div>
            {/* Vertical connectors */}
            <div className="absolute top-0 left-[12.5%] w-px h-8 bg-primary/50 dark:bg-primary/30 -translate-y-full"></div>
            <div className="absolute top-0 left-[37.5%] w-px h-8 bg-primary/50 dark:bg-primary/30 -translate-y-full"></div>
            <div className="absolute top-0 left-[62.5%] w-px h-8 bg-primary/50 dark:bg-primary/30 -translate-y-full"></div>
            <div className="absolute top-0 left-[87.5%] w-px h-8 bg-primary/50 dark:bg-primary/30 -translate-y-full"></div>
          </div>

          {/* Departments */}
          <div className="md:mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-x-6 sm:gap-y-8 w-full max-w-xs sm:max-w-none md:w-full lg:w-3/4">
            <div className="flex justify-center text-center">
              <div className="bg-background-light dark:bg-background-dark border border-primary/30 text-sm font-medium py-3 px-4 rounded-lg shadow-sm w-full md:max-w-40 flex items-center justify-center h-full hover:bg-primary/5 hover:border-primary transition-all duration-300 cursor-default min-h-[50px]">
                Phòng Kinh Doanh
              </div>
            </div>
            <div className="flex justify-center text-center">
              <div className="bg-background-light dark:bg-background-dark border border-primary/30 text-sm font-medium py-3 px-4 rounded-lg shadow-sm w-full md:max-w-40 flex items-center justify-center h-full hover:bg-primary/5 hover:border-primary transition-all duration-300 cursor-default min-h-[50px]">
                Phòng Tài chính Kế toán
              </div>
            </div>
            <div className="flex justify-center text-center">
              <div className="bg-background-light dark:bg-background-dark border border-primary/30 text-sm font-medium py-3 px-4 rounded-lg shadow-sm w-full md:max-w-40 flex items-center justify-center h-full hover:bg-primary/5 hover:border-primary transition-all duration-300 cursor-default min-h-[50px]">
                Phòng Hành chính Nhân sự
              </div>
            </div>
            <div className="flex justify-center text-center">
              <div className="bg-background-light dark:bg-background-dark border border-primary/30 text-sm font-medium py-3 px-4 rounded-lg shadow-sm w-full md:max-w-40 flex items-center justify-center h-full hover:bg-primary/5 hover:border-primary transition-all duration-300 cursor-default min-h-[50px]">
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