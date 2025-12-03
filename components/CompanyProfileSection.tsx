import React from 'react';

const CompanyProfileSection: React.FC = () => {
  return (
    <section className="py-10 sm:py-16 bg-primary/5 dark:bg-primary/10">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] mb-8 text-center dark:text-[#fcf8f8]">
          Hồ Sơ Công Ty
        </h2>
        <div className="max-w-3xl mx-auto border border-primary/20 rounded-xl p-6 sm:p-8 bg-background-light dark:bg-background-dark shadow-lg">
          <div className="grid grid-cols-[auto_1fr] gap-x-6">
            <div className="group col-span-2 grid grid-cols-subgrid border-b border-primary/10 py-5 transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5 px-2 -mx-2 rounded-lg">
              <p className="text-primary text-sm font-medium leading-normal">Tên công ty</p>
              <p className="text-sm font-normal leading-normal dark:text-[#f8f6f5]/90">
                Công ty TNHH Giải Pháp May Mặc Long Thịnh
              </p>
            </div>
            <div className="group col-span-2 grid grid-cols-subgrid border-b border-primary/10 py-5 transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5 px-2 -mx-2 rounded-lg">
              <p className="text-primary text-sm font-medium leading-normal">Địa chỉ</p>
              <p className="text-sm font-normal leading-normal dark:text-[#f8f6f5]/90">
                Khu Công nghiệp Tân Bình, Quận Tân Phú, Thành phố Hồ Chí Minh, Việt Nam
              </p>
            </div>
            <div className="group col-span-2 grid grid-cols-subgrid border-b border-primary/10 py-5 transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5 px-2 -mx-2 rounded-lg">
              <p className="text-primary text-sm font-medium leading-normal">Số điện thoại</p>
              <p className="text-sm font-normal leading-normal dark:text-[#f8f6f5]/90">
                (+84) 28 3815 8888
              </p>
            </div>
            <div className="group col-span-2 grid grid-cols-subgrid border-b border-primary/10 py-5 transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5 px-2 -mx-2 rounded-lg">
              <p className="text-primary text-sm font-medium leading-normal">Mã số thuế</p>
              <p className="text-sm font-normal leading-normal dark:text-[#f8f6f5]/90">
                0312345678
              </p>
            </div>
            <div className="group col-span-2 grid grid-cols-subgrid pt-5 transition-colors duration-200 hover:bg-black/5 dark:hover:bg-white/5 px-2 -mx-2 rounded-lg">
              <p className="text-primary text-sm font-medium leading-normal">Đại diện pháp lý</p>
              <p className="text-sm font-normal leading-normal dark:text-[#f8f6f5]/90">
                Ông Nguyễn Văn An
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanyProfileSection;