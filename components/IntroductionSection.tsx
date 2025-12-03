import React from 'react';
import { IMAGES } from '../constants';

const IntroductionSection: React.FC = () => {
  return (
    <section className="py-8 sm:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="flex flex-col animate-slide-in-left">
            <h2 className="text-2xl font-bold leading-tight tracking-[-0.015em] dark:text-[#fcf8f8] mb-4">
              Giới Thiệu Long Thịnh
            </h2>
            <p className="text-base font-normal leading-relaxed text-[#1c0e0d]/80 dark:text-[#f8f6f5]/80 mb-4 text-justify">
              Được thành lập với niềm đam mê và khát vọng nâng tầm ngành may mặc Việt Nam, Long Thịnh đã và đang khẳng định vị thế là một trong những đơn vị sản xuất hàng đầu. Chúng tôi tự hào mang đến những giải pháp may mặc toàn diện, từ khâu thiết kế, sản xuất đến hoàn thiện sản phẩm, đáp ứng những tiêu chuẩn khắt khe nhất của thị trường trong nước và quốc tế.
            </p>
            <p className="text-base font-normal leading-relaxed text-[#1c0e0d]/80 dark:text-[#f8f6f5]/80 text-justify">
              Với đội ngũ nhân viên lành nghề và hệ thống máy móc hiện đại, chúng tôi cam kết mang đến sự hài lòng tuyệt đối cho mọi khách hàng.
            </p>
          </div>
          <div className="animate-slide-in-right">
            {/* Single Workshop Image */}
            <div className="w-full aspect-[16/9] overflow-hidden rounded-xl shadow-lg group">
              <img
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={IMAGES.workshop3}
                alt="Toàn cảnh nhà xưởng sản xuất"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;