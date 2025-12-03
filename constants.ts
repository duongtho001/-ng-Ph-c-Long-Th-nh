
import { NavLink, Feature, Service, ContactInfo, ServiceHighlight, Product, ProductCategory, GalleryCategory, GalleryItem, HeroSlide } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Trang Chủ', href: '#', id: 'home' },
  { label: 'Về Chúng Tôi', href: '#about', id: 'about' },
  { label: 'Sản Phẩm', href: '#products', id: 'products' },
  { label: 'Thư Viện Ảnh', href: '#gallery', id: 'gallery' },
  { label: 'Liên Hệ', href: '#contact', id: 'contact' },
];

export const FEATURES: Feature[] = [
  {
    icon: 'local_shipping',
    title: 'Giao hàng nhanh chóng',
    description: 'Quy trình tối ưu đảm bảo giao hàng đúng hẹn.'
  },
  {
    icon: 'checkroom',
    title: 'Mẫu mã sản phẩm đa dạng',
    description: 'Luôn cập nhật xu hướng mới nhất cho từng sản phẩm.'
  },
  {
    icon: 'shield_lock',
    title: 'Cam kết uy tín chất lượng',
    description: 'Chất lượng là ưu tiên hàng đầu trong mọi khâu sản xuất.'
  },
  {
    icon: 'redeem',
    title: 'FREE DELIVERY',
    description: 'Miễn phí vận chuyển cho các đơn hàng đủ điều kiện.'
  }
];

export const SERVICES: Service[] = [
  {
    icon: 'groups',
    title: 'Đồng Phục',
    description: 'Thiết kế và sản xuất đồng phục chuyên nghiệp cho doanh nghiệp, trường học, và các tổ chức, thể hiện bản sắc thương hiệu.'
  },
  {
    icon: 'eco',
    title: 'Vải Sinh Thái',
    description: 'Cung cấp các giải pháp sử dụng vật liệu vải bền vững, thân thiện với môi trường, đáp ứng xu hướng tiêu dùng xanh.'
  },
  {
    icon: 'design_services',
    title: 'Sản Xuất Theo Yêu Cầu',
    description: 'Nhận sản xuất gia công theo yêu cầu (CMT, OEM, ODM) với độ chính xác cao và chất lượng đảm bảo.'
  }
];

export const CONTACT_INFO: ContactInfo = {
  address: '27/15/19 Đường An Phú Đông 1, Phường An Phú Đông, Tp.HCM',
  email: 'tuan.tq.titc@gmail.com',
  phone: '0906029111 - 0965709601'
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2680&auto=format&fit=crop',
    alt: 'Veston và đồng phục công sở cao cấp'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=2670&auto=format&fit=crop',
    alt: 'Áo sơ mi chuyên nghiệp'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=2574&auto=format&fit=crop',
    alt: 'Bộ sưu tập thời trang đa dạng'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&w=2680&auto=format&fit=crop',
    alt: 'Áo thun đồng phục năng động'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?q=80&w=2671&auto=format&fit=crop',
    alt: 'Đồng phục bảo hộ lao động'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop',
    alt: 'Trang phục công sở thanh lịch'
  }
];

export const IMAGES = {
  heroBg: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2680&auto=format&fit=crop', 
  about: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2670&auto=format&fit=crop',
  aboutHeroBg: 'https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=2574&auto=format&fit=crop',
  // Specific workshop images for the redesign
  workshop1: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop', // Fabric warehouse
  workshop2: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=2000&auto=format&fit=crop', // Machinery
  workshop3: 'https://sf-static.upanhlaylink.com/img/image_202512036a68a49bdd8fdae6709233b3a709be5c.jpg'  // Production floor (Updated)
};

export const SERVICE_HIGHLIGHTS: ServiceHighlight[] = [
  {
    icon: 'style',
    title: 'Custom Clothing Services',
    description: 'Kinh doanh đa dạng các kiểu quần áo theo yêu cầu của khách hàng.'
  },
  {
    icon: 'local_shipping',
    title: 'Flexible Supply Capabilities',
    description: 'Cung cấp cho các đơn vị nhỏ, vừa và lớn với chuỗi cung ứng linh hoạt.'
  },
  {
    icon: 'eco',
    title: 'Eco-Friendly Materials',
    description: 'Đẩy mạnh phát triển các chất liệu may mặc sinh thái mới, thân thiện với môi trường.'
  }
];

export const PRODUCT_CATEGORIES: ProductCategory[] = [
  { id: 'all', label: 'All' },
  { id: 'uniform', label: 'Đồng phục' },
  { id: 'vest', label: 'Veston' },
  { id: 'shirt', label: 'Áo sơ mi' },
  { id: 'jacket', label: 'Áo khoác' },
  { id: 'tshirt', label: 'Áo thun theo yêu cầu' },
];

export const PRODUCTS: Product[] = [
  {
    id: '1',
    title: 'Áo Sơ Mi Chuyên Nghiệp',
    description: 'Thanh lịch, vừa vặn, chất liệu cao cấp cho môi trường công sở.',
    category: 'shirt',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2525&auto=format&fit=crop'
  },
  {
    id: '2',
    title: 'Áo Ghi Lê Đồng Phục',
    description: 'Thiết kế hiện đại, tạo điểm nhấn chuyên nghiệp cho bộ đồng phục.',
    category: 'vest',
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2680&auto=format&fit=crop'
  },
  {
    id: '3',
    title: 'Quần Tây Công Sở',
    description: 'Form dáng chuẩn, thoải mái, bền màu, phù hợp cho cả nam và nữ.',
    category: 'uniform',
    image: 'https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: '4',
    title: 'Đồng Phục Văn Phòng',
    description: 'Giải pháp đồng bộ, thể hiện văn hóa và sự chuyên nghiệp của doanh nghiệp.',
    category: 'uniform',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2670&auto=format&fit=crop'
  },
  {
    id: '5',
    title: 'Đồng Phục Bảo Hộ',
    description: 'An toàn, bền bỉ với các chất liệu chuyên dụng, đáp ứng tiêu chuẩn ngành.',
    category: 'uniform',
    image: 'https://images.unsplash.com/photo-1584634731339-252c581abfc5?q=80&w=2671&auto=format&fit=crop'
  },
];

export const GALLERY_CATEGORIES: GalleryCategory[] = [
  { id: 'all', label: 'Tất Cả' },
  { id: 'workshop', label: 'Xưởng Sản Xuất' },
  { id: 'equipment', label: 'Trang Thiết Bị' },
  { id: 'product', label: 'Sản Phẩm' },
];

export const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: '1',
    title: 'Dây chuyền may hiện đại',
    category: 'workshop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6iOr3VcdoSwAV5DKw6soVxIYCg7r2eYCnMitj455sGlxIRbL5zFDPkajy0WtWaKzkcCAwA4rCbF0bHF89B1344E3t7skp2x0zcwR0Dnw1copDGiEbwjmj9BxM4g0G-9yM77TTGiFdKEGW-hbQzdnK3g3fSBWFqVbdOc5Ac-i4VpjrTmB0__pJijDH88yU6xqYCoCalB2j4WJauJEjDTHPwCse-z3buX7ySu2FOl6F_rthCoqpJbV37dPJUFaH7URUbnuNd4H-r5K8'
  },
  {
    id: '2',
    title: 'Máy cắt vải tự động',
    category: 'equipment',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBejNflWMHw1bHNE1TT97AZIc4AUi3S0-1cXE40m5nPnB_WrrPNfg3CIpx6DzvtzK1HX-FV1qqaBwEEBCZ4thn2glt7AsQiQpEMaWo_zd8qLgy5SVa5RQnp9Vya8R2F-P5MuX69UJemsgsBygQTCVKvfeH_fnEwLJEhBXukRuKibdUMnFn11Atdc-4XtZLTyRCFOEzPQhR4OwbBKM_3RSc6XZ6zY665WZ6ZqaDKA9Qgwi9OgICzY-Bd3wpmTD8p-wt40I8nRETEtm03'
  },
  {
    id: '3',
    title: 'Áo sơ mi thành phẩm',
    category: 'product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDp7V3Hp2AZLNBzIHzAX-90ZMS8f3IkbLH0dKU93_ALz2m1I0d-SIodlFzYzJBkRQSmZfj2RVSUnztWNfrmWl4XH_CpSqMOg1o8umMwocz4hdVLIRpz9RRvN_aQ4Rkt_ogdpdWl4mn-qXkRPit1jnDUR1zbNKfNGWEzspwHpQAGDDXnELbpQdFjhAAKgRZezYtD-480V2qqjHBRhEQx0j2lRaAn5-OqQe149iEIfs22yzIPMQXwWKWBOJ94hA8rma8LP8LfuCf57wXr'
  },
  {
    id: '4',
    title: 'Công nhân đang làm việc',
    category: 'workshop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzP14Ul80-erqJVhf0CiQxeyiRajRmgFbuUma8cdcTdWHto0zBHLqGb2rpHGgXACWOsVmmLqRJnuWO_85k9ZxjYqCad8B83XVkI4HNHkXRc_nFsYJ3MndEoKKV7OnUAa54KqSLVdyevnGG5cJAO1Xipj6OAweMvyexxc_kSLf6FkSy7j_4Ae6GM_kBpLWyh6yla5WqI2D_vpM7M-V8UTqH2OR1RQ3ZdlpvBEyAhF4FlqO6RpZATFlGfXfDRXuMApWfPRNa8e9LiDbf'
  },
  {
    id: '5',
    title: 'Khu vực kiểm tra chất lượng',
    category: 'workshop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-H4P8LwUEeKpwKGDlERja_-zVFLDc4o5S6dXaYMTO0zvM54IEwwlNZTRIgL-8EQ31FZfgpIInLDa38JsiEXb7gAIrIwrs3Wp-97kmCeAqgrnPKkynXPMR1UFI2WjWc8-O6Ub8YNvmrssEj4Vtn6Onw7Ne7AyPYcoP42eNI21z_uPSrWiaVYBSYIjia3MjRbJA32vApaPj1UBjSBkSFc__7S01K_96SMhZTxWNpWAKEIIwltyA2F6SRrZxVkK-kgFtVAwpdVzV7MbC'
  },
  {
    id: '6',
    title: 'Máy thêu vi tính',
    category: 'equipment',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDZNQKs8GhA6_XSK-8sYJxYJkpY1ZcxHqYEI1gs9CPoTxDpJF4dXeN-5g_I24olnCrofoF_3u6MQrPcOG3bHL6V_BpmztH5K3DIwHHew1ue-zqUqIBp6BDjnQe0j_u1i1WiW5E-nK8QWG6wVvFyJSmGStJYxlZj7zBMO0u2c8FgppfI9jefWyObG5ph7XWleC25dsdZlqNUTgYcOhIt3OnWgdnwG4aAQIQNomZ9gkaZDujOMSeaDv4j0a-bvxKpNnrBqykpoKyjJaMk'
  },
  {
    id: '7',
    title: 'Bộ sưu tập áo khoác mới',
    category: 'product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCWFWkdg3_dl6lKwByDRuu_gWD3jrXLdk9EYBwlCsOLUMxj0HInKq983cvZmNogQhTn_xYL-5LAEjD62LB3WsCYij7mtFNewD9siDQhaKn5LUygwQrktxzWPwnn9D0vIaXm-wbMHYCV7d_IRvWrIM8Vq8CfDdc2tCyC8MeUgTfltj039UXxUo_18f0e6jYxSG3jWHhXEi-E-rLzg-vLv2EfsvjeLAu2d2uWaqdp9oJiEj6Gh-1l1CVEUS5gI_LRF3EdOU7ji2REd92j'
  },
  {
    id: '8',
    title: 'Toàn cảnh xưởng sản xuất',
    category: 'workshop',
    image: 'https://sf-static.upanhlaylink.com/img/image_202512036a68a49bdd8fdae6709233b3a709be5c.jpg'
  },
  {
    id: '9',
    title: 'Chi tiết đường may tinh xảo',
    category: 'product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR-3J7r_SeAdPb78tlK6E_gtksb0NoWv1qFrTro2wKciKM-Z8kXqNtp_B0VsAAjmKX3lEDr2SIo9G53vBimkUxsYnez_7Kb2YH6vNx8MeqcpvEgRG7dmiM3evNMqeQ2gJqWW80ODBCzHNlTOb-L8NLcAfPtncW8GZ8f6qzTEenveweDouJsUoPcd7KzREXA7wBKJ5e0VX_4xMc9hE5Sg04b24tN2JTHk5yu0u8jJoeHBiK7R3JYvfVLtavidCoIiDAnzYFNi9YezcO'
  },
  {
    id: '10',
    title: 'Máy ép nhiệt công nghiệp',
    category: 'equipment',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDU8YLhG38dV_prjcWBvEZ3Rutw5uILruv869B1rO9dUXlMv0fM6qbO4DGe8ZPFhZumSw6mteQmCFY2jloAsJIZIDIeUfs3oadqFecXMPWwT--9ftl1ed8NnsnfvByy2sQPg6IpdUNAIDI7gd-lNRebOqJHpCNz0hgIRpb_TmaKSrCrOSGIa5jjPsrkDRsRrn9FQ-94gsJs-lRpbJJ_HyExmTqznuE1xT0rTUdFaKtGUBOLDRfjDQQfLk7yEi_SCCRFBVdPkNrO4tsi'
  },
  {
    id: '11',
    title: 'Khu vực đóng gói sản phẩm',
    category: 'workshop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDEtQyZD3GB19NaZe2EFzjAivRVUup2Kd3OTILUxNf1W-Z8wSHQJZmNhZWxNc_RSkpgrTs8iyuBPuLpXDC9AfKXjtl6TFyBITjskeOY-2tDphgTjbw4w4bAoXwJh5NSmQ8Q2UdDCG-s9HLXtAtQ3Q7HjJyoYJ7x2rLHc-j9wWjZE58ORJCI42psTQJVzCkRJ8XDT-bk_ekdkCffF4hgmKbpKf635_ojKQYxiBBKcIO2VdR8nD8lcDnpMc-ls6X1oXY_G6a6majnqi2H'
  },
  {
    id: '12',
    title: 'Vải nguyên liệu cao cấp',
    category: 'workshop',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCKJ02XTFyG52zjrYWVf8tYRZYmwBkRocWDajl1GE0TAp8b96RzgPKSGfr_mZE4rdWrVGARAAZuVs3Mrz1IrD_LFOtDi36dNloC1_G-w45hDL-2KkKCSjFX_v1pgryqHOZftYVtjb6Ws3JprmWrYuERkIQ_BIITYUZGtUdKuGpc5hZty5Ebm7abgONPSs3JC0z5OCoLevjc0N5JajM6rCQAojJ_gn-At3Lxb8mWWWiyY1GBoOI2y-PcgXCZZCqyQ0Bjmsuj8ZC3dijR'
  }
];
