import React from 'react';
import { CONTACT_INFO } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col bg-background-light dark:bg-background-dark min-h-screen">
      {/* Header Section */}
      <section className="container mx-auto px-4 py-16 text-center animate-fade-in-up">
        <h1 className="text-4xl font-bold text-[#1c0e0d] dark:text-white mb-4">
          Liên Hệ với Chúng Tôi
        </h1>
        <p className="text-lg text-[#1c0e0d]/70 dark:text-white/70 max-w-2xl mx-auto">
          Chúng tôi luôn sẵn sàng lắng nghe. Vui lòng liên hệ với chúng tôi qua thông tin bên dưới để nhận được sự hỗ trợ tốt nhất.
        </p>
      </section>

      {/* Contact Info Cards */}
      <section className="container mx-auto px-4 pb-16">
        <div className="flex flex-col gap-6 max-w-3xl mx-auto">
          {/* Hotline */}
          <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 hover:shadow-md transition-all duration-300 animate-fade-in-up delay-100">
            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">call</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#1c0e0d] dark:text-white mb-1 group-hover:text-primary transition-colors">Hotline</h3>
              <p className="text-[#1c0e0d]/70 dark:text-white/70 text-base">{CONTACT_INFO.phone}</p>
            </div>
          </div>

          {/* Email */}
          <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 hover:shadow-md transition-all duration-300 animate-fade-in-up delay-200">
             <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">mail</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#1c0e0d] dark:text-white mb-1 group-hover:text-primary transition-colors">Email</h3>
              <p className="text-[#1c0e0d]/70 dark:text-white/70 text-base">{CONTACT_INFO.email}</p>
            </div>
          </div>

          {/* Address */}
          <div className="group flex items-center gap-6 p-4 rounded-xl hover:bg-white/50 dark:hover:bg-white/5 hover:shadow-md transition-all duration-300 animate-fade-in-up delay-300">
            <div className="flex-shrink-0 w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center text-primary group-hover:scale-110 transition-transform duration-300">
              <span className="material-symbols-outlined text-3xl">location_on</span>
            </div>
            <div>
              <h3 className="font-bold text-lg text-[#1c0e0d] dark:text-white mb-1 group-hover:text-primary transition-colors">Địa chỉ</h3>
              <p className="text-[#1c0e0d]/70 dark:text-white/70 text-base">{CONTACT_INFO.address}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="w-full h-[400px] md:h-[500px] bg-gray-200 animate-fade-in-up delay-500">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.4435887222535!2d106.69741541462293!3d10.85382576073105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317529c17978287d%3A0xec4c954539499162!2zMjcvMTUgQW4gUGjDuiDEkMO0bmcgMSwgQW4gUGjDuiDEkMO0bmcsIFF14bqtbiAxMiwgSOG7kyBDaMOtIE1pbmgsIFZpZXRuYW0!5e0!3m2!1sen!2s!4v1625123456789!5m2!1sen!2s" 
          width="100%" 
          height="100%" 
          style={{border:0}} 
          allowFullScreen={true} 
          loading="lazy"
          title="Bản đồ địa chỉ Long Thịnh"
        ></iframe>
      </section>
    </div>
  );
};

export default ContactPage;