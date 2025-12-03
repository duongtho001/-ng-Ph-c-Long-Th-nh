import React from 'react';
import { IMAGES } from '../constants';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="container mx-auto px-4 py-12 md:py-20">
      <div className="grid items-center gap-12 md:grid-cols-2">
        <img
          className="aspect-[4/3] w-full rounded-xl object-cover shadow-lg"
          src={IMAGES.about}
          alt="Đội ngũ nhân viên Long Thịnh"
        />
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl font-bold tracking-tight text-[#1c0e0d] dark:text-white">
            Về Long Thịnh
          </h2>
          <p className="text-base font-normal leading-relaxed text-[#1c0e0d]/80 dark:text-white/80">
            Long Thịnh là công ty hàng đầu trong lĩnh vực sản xuất và cung cấp các
            giải pháp may mặc chuyên nghiệp tại Việt Nam. Với nhiều năm kinh
            nghiệm, chúng tôi tự hào mang đến những sản phẩm chất lượng cao, đáp
            ứng mọi yêu cầu khắt khe nhất của khách hàng. Sứ mệnh của chúng tôi là
            nâng tầm thương hiệu cho doanh nghiệp thông qua những bộ đồng phục
            đẳng cấp và dịch vụ tận tâm.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;