
import { NavLink, Feature, Service, ContactInfo, ServiceHighlight, Product, ProductCategory, GalleryCategory, GalleryItem, HeroSlide, HomeCollectionItem, HomeCategoryItem, NewsItem } from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'TRANG CHỦ', href: '#', id: 'home' },
  { label: 'GIỚI THIỆU', href: '#about', id: 'about' },
  { label: 'SẢN PHẨM', href: '#products', id: 'products' },
  { label: 'THƯ VIỆN ẢNH', href: '#', id: 'gallery' },
  { label: 'TIN TỨC', href: '#', id: 'news' },
  { label: 'LIÊN HỆ', href: '#', id: 'contact' },
];

export const CONTACT_INFO: ContactInfo = {
  address: '27/15/19 Đường An Phú Đông 1, Phường An Phú Đông, Tp.HCM',
  email: 'tuan.tq.titc@gmail.com',
  phone: '0906029111 - 0965709601'
};

// Images from the provided HTML reference
export const HOME_IMAGES = {
  heroBanner: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBhw6AGdKnm3vJ4-pXNJTawt4kDhsh66tkqCMW5QUNhmV3wGU55IcrUfZnERP3UJbw2-xKwbKLheH033I18VgY0uyT4j9SXjuaMNWO03H4Ng-w72DoXPoKEV4JppqjOzsJnpPJ83I71f_JT2CIYIE0kNX8kGcTkI7-lLrsRX1oQtSHzo1mxuMpeHHrcbf2I5G467hilq5ldyoZaUmXa1Wx0O1CqN6XQopzJGYsXLCgdfNlpNZqNhUGc2QxBH_JXOeTPrU2DJVCm9t0d',
  featuredCollection: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI_nHpSq9HxWUrXG4-G1EddgPV4kk4wwv3QRLlyjIXTE2zV3rylZPIE7ZaKmdACDNbJiSMP9vHXFJSae31yowyRjYc2I6BQ7B9Y7M15IAEbQE3fukRLo3Nqm46XDP9xRpBq18MQ5RZqG5O2zgWy78E13GmcwGIxx7fg0EyZ0dOF5-jyPQeoUDBSTC5z2tnqZvaKY-jtiVss-w0jqoB8pFZ51nWZIXg2z7FpljLQetwrHgIQ6vDG0SjunUdCD2yTW6vnIr02YiGIOZq',
  whyChooseUs: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAahBdF7APQHMYMoj-XETSa_eHft_aD-ZwrYQ0_-Fm4KjZaZUdv_NeDXFZfUJ8YWo9PRFSNNdLpqUUB0KvO9G6is3co5_NF_lHeHetLRc5yDZBuFD514a-hgvIojqdZlt4P3duhlCaI7BpzILLUsiGeoyuuOWw-1xXxrdoMkip7XHfd-978ukiScQOncgS6JmOF9_ynEk_9tEKVQb6FHSCesWUhuMFM5GuFkTLwOiEQD8HGr9ds9RD954ABFm6oSIuHH2tUfLIlUvye',
  zaloIcon: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDXc-ibyrolJnXuZxR--pqr8hCBdfub7hZQ76SVNUTuWGrrH6puE7up0E62YENVTuTOWHv__thvhmIhC6bFWzWh1TcjtmdUqBYsChXo2l6zzL9tObtAQz4LyNetEsdQhK1FwJH6UHUofDnhkea8tt5UDnBxonV6b4EDfrkcgpo41A8HZ1elS7t6YQj8JJ7X0aoILM67SMRWbDC_IS6o8qG450lj-lmNNb-Fz3zoPtcOQG8ohkrDzvU51caLYc4KsNScIe9ENaV_9G1f',
  logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD3Ft73EvIsu-RUp1L3sVyr8dxmmKhWKORgCuzjY9wMK6I0GCLaUJU-xlndIz18k9OhBCWKxi5F0CRzy3W9sm9TmSPRTfW8G8iJs6bn8NBoT2TeGkNF9roaWWNmk-kIDoSAU9yEwyasU4vx0YVoCGhP8s1gcDK_mOZ4V0IhMSoo-0rgyEASDHGVCIbVd6N540GjHboxdV-8VfrHTrOrvVEQZqTF9muunB5u45MMo_6TLlaNvZftqZDc7iRDRhVgEaArd4R446hnGBHt'
};

export const NEW_COLLECTIONS: HomeCollectionItem[] = [
  {
    id: '1',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8-CTt4989D3l3dNPoO_h6sVsWOStj9CJvdiVC8wamyQE4xeeryE1CiIIR-0k7D9XH1r9ZGqO4eb7MR5olyVduE7vqrm8PNi6mgiGDFh_5g9sfEre_C49UjJcSfQNMgCGxm8JONQxEZxL4pF8D7fnen7vZJ4ZsoL5prQL8REItyQQcH26DwXbrJbaqa-vZ4gkKC1_XGXMMQ5LGtwluDnxXx6FR7Kjzw9hIYaUaUoxCIwlWgPLMKCai6J1aypWFYkwat9ggUA4PEB7w',
    alt: 'Group of people in business suits'
  },
  {
    id: '2',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAnJPJDABgavcrdxQdk1ShAcqRqFHy0Wu8pGtUQicW-d04qxhn4HI3lm6sPGFvzszasCAUU0JZsyo2AQHaKK2QwXxUyuiMFPtVn_S3ypJdKi5nIAckDzJhXZJWaS2WVgFLFi1Tik8FuONuQ73SRSD8xfcD9bGpB1yzHYLM74-bxApzUFY_bwpN-8xTz4u6PabN8GcO-Tz9Tv1UR7DpHPrOZaXrAq-8oMBn5HxvlO_dux5DnijvoTwtUXtP8e-SVx4iAQjknGSdllviL',
    alt: 'Blue windbreaker jackets'
  },
  {
    id: '3',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXCuTVESWQl5EppHPYU-DozJSIeLWP-5kxdHSLkYdB3D0FppMrPqN787LB2fTuoSLqc-yQ_Y8B9yW7zGGfZmnIp-Q_nj-zA4vs87GpgWHKfF07DbySbsKynuoNctiDTUpmhUYAToW_HhhWRTt6cs4M-Rx3nfV1N2MGbbrGtuyHBrAApBslDfo5IhLHIPXh6iDx-aYKT1OAs4tpc1Y04FIIeelg6dvN9x6beEria97Ll2TOlK6Eeeq5WaPeCC0z2wnTBx0ZQpmJe2Uo',
    alt: 'White and red polo shirts'
  }
];

export const HOME_CATEGORIES: HomeCategoryItem[] = [
  {
    id: '1',
    label: 'Đồng phục công ty',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgf4_EZ4pkRHpYS0E3tripy5LKK3ZKA1ZWTK6a7mCyn4_IAYRQv5RzFG76USTo49SfRlDrNviJ94-mbNjt_quFObAsKb_6a2jWEAVbN0cEKo4Z1idYbFFCNsTKgLRLdT9-d42F2bYyRUreljiUozKOTcY61o7jBIVjFc5cdSyHqtwYz7TLoX7ycA3Q_W2CDdliGcV4_OfcMAOLoPCkkhUnd6y4kLrEwJ06f9bVdmwVV-4xPD1J5SiQbBvu9f0BnAqo7N4YgKBoBIHJ'
  },
  {
    id: '2',
    label: 'Đồng phục công sở',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSgFEESkBjEXFrhRdXSw2LKY4OMnW2X-1LxqqRDjfH913bUHNHCWogrV4aHGSl3w3LAHVGA1bwv_PBUn_habtzA15OLq7E1i8N-IwHk7ynk-2dAqP7K_PcCVWddXRFEzSMvQS3nHXSl5KriRb-IOcKGnPB5nQSWi6YJdwKilwPpJT1B8TCCJSJ65veH0UW_HTtxrJ6eovS1dwcKCe73vQMTrbsmDpJq5zy1u4XxqW4aDxBzHOfTWI8Jf37NDmB5mw6zdP-gtADJwrn'
  },
  {
    id: '3',
    label: 'Bảo hộ lao động',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKIujAaVYk9AwtSHwm-NIKiPG9_Hoe04bkr1EVUbUaOvJfwr7abQ8W4_yVX-vLkxluTeFbA9rrUorWRAHUNZ0pstjxflyOllaJZ4_ibtFR8czAVG2X81beDYOKTTJttLpeKJL5HSrNu75O-l_OQQM7fb4ci76gJoO_qlksqcjTsSBnaZOg9SHZyydLN-hHzldUJ7ld9Q2meptvGsX6uqTW7kmdZ5OOtq0QVBu7X87uiJUkUtznS0Qq8P877tTPT3qt1000O4olOId5'
  },
  {
    id: '4',
    label: 'Đồng phục Teambuilding',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9TbtIseqKpq-lXyDIhru00BVsKEOSIiAGmeGBu2RsNBVekHXqFjBuIjqMwCzrLLV7HoMpgzlGp-CQtV3ZHPef_OmPMQXx9u4GlFh79LEafUTnvpVluWzjjGucctdBQGdGTfvrDgehCuxJLZJIkWnC8SSlNuyAPvyCHeLYqSMZfmwdp20Nr1soMlbSND_R55_jpkRN1YxJX0wSdxo9cwdSNfu2KBltjmKiTr1GOwh6Mk8WBcwKYKdozt1ueC2DtSm0eDSKg891btw-'
  },
  {
    id: '5',
    label: 'Áo polo đồng phục',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6f9OvYQ4u22LGte180h41rgmMI2C93X1Ofoua6Od4woh8sDAtmW1geAh95lfXXSYYEwXdeGjOFbCq4fiffknhz03eN7_ZsobSUi4ofw8uXs2yIgCkZ-IwNaZHoCERvZ2curOf3Kw4_ELJ4chHo76eng6YHMaIGFab_gXWEWmdGZX0J-MG0hqvJFRS7J0bHCkeW2_iVpDRSKPgXMpw8viyyZmm2RgLbX0-Rz9BcP37Ci6eWW_ifoh-wQveNaiPUhztIJXK_CZf1J-c'
  },
  {
    id: '6',
    label: 'Áo phông cổ tròn',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARY3qaxaIugSj_6NF6Mxs9yvDZgr0lNXpbKk0EEK5-7-EFyS9tkzfGo7we09V63US9XzCB82nfLgEVOsKpQQ1pGilUULYOKwz4FlPQACg4lSEADvWQHNnfNvmrgK8VzWYeSXptRCQCuoLsOlAvRr6Onk5a1LA5mKipmcOC04nMWk4foHm5_hnVwbVrqC_euTUGwx3GLAfAm0ayQ40TaAR8xCEA5ktm0w06EFRrCYX0SzS5Q9oghWMFa90S5tjm8ui8SFCxCacmglWD'
  },
  {
    id: '7',
    label: 'Áo khoác đồng phục',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv3y3uaWkVhCG_rhdRhjOYhiSr9TuzrhDiup5l5Nww6meRkbOzDlUBFz9j9pId6gHcxZOaug18XhRDaAl1iEZa7p0WXctkF_fBiBIjEVKcdptoBhIlyX_NcNw7PZ2zv8j409UXydGLphako6PSQypuQ2zajqzhvuzY4ohlW3f6zFZw8lb63GIKbVBUZu_VZNoaaM4lHtH1_Fri9uusqNP3JYAmHVWTsIuuEM00zy9YSCho5OhYM12lpMWeVUZMr5japYIWbxxAt6fA'
  },
  {
    id: '8',
    label: 'Áo giải chạy bộ',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn9SAR_XJTC3BhXWGYlnGZonFnh3y8hLiyGO0Zvo89TPh9XIsc0JJvYje8PtCxdKgxmNX7cNQlkD_GehMQsciNCt8w0YXs2G3tBNTvubLtZfNL02MmfCRg95nKkJ9oItQMvaSiciaXeizBOXbw1Elc_j1xmsKb1FpOy63DhF-zryPrCQultvp_dl424VNV4L08AU2VrtF0NLr5tJqJYmOP2c3r7i56hZPWN6NxU1xGfCsV3xstSmJ21iGnKgmA34YQko3kMMMv3c63'
  }
];

export const IMAGES = {
  heroBg: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?q=80&w=2680&auto=format&fit=crop', 
  about: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2670&auto=format&fit=crop',
  aboutHeroBg: 'https://images.unsplash.com/photo-1524255684952-d7185b509571?q=80&w=2574&auto=format&fit=crop',
  workshop1: 'https://images.unsplash.com/photo-1582719508461-905c673771fd?q=80&w=2000&auto=format&fit=crop', // Fabric warehouse
  workshop2: 'https://images.unsplash.com/photo-1620799140408-ed5341cd2431?q=80&w=2000&auto=format&fit=crop', // Machinery
  workshop3: 'https://sf-static.upanhlaylink.com/img/image_202512036a68a49bdd8fdae6709233b3a709be5c.jpg'  // Production floor
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    id: 1,
    image: IMAGES.heroBg,
    alt: 'Professional Garment Manufacturing'
  },
  {
    id: 2,
    image: IMAGES.about,
    alt: 'High Quality Fabrics'
  },
  {
    id: 3,
    image: IMAGES.aboutHeroBg,
    alt: 'Modern Production Line'
  }
];

export const FEATURES: Feature[] = [
  {
    icon: 'workspace_premium',
    title: 'Chất Lượng Cao Cấp',
    description: 'Sử dụng nguyên liệu tốt nhất và quy trình kiểm soát chất lượng nghiêm ngặt.'
  },
  {
    icon: 'design_services',
    title: 'Thiết Kế Độc Quyền',
    description: 'Đội ngũ thiết kế sáng tạo, mang đến những mẫu đồng phục ấn tượng.'
  },
  {
    icon: 'precision_manufacturing',
    title: 'Công Nghệ Hiện Đại',
    description: 'Dây chuyền sản xuất tiên tiến, đảm bảo độ chính xác và tiến độ.'
  },
  {
    icon: 'support_agent',
    title: 'Hỗ Trợ Tận Tâm',
    description: 'Dịch vụ chăm sóc khách hàng 24/7, luôn sẵn sàng giải đáp mọi thắc mắc.'
  }
];

export const SERVICES: Service[] = [
  {
    icon: 'checkroom',
    title: 'May Đồng Phục',
    description: 'Thiết kế và may đo đồng phục cho doanh nghiệp, trường học, tổ chức.'
  },
  {
    icon: 'styler',
    title: 'Thời Trang Thiết Kế',
    description: 'Sản xuất các sản phẩm thời trang theo yêu cầu riêng biệt.'
  },
  {
    icon: 'inventory_2',
    title: 'Gia Công May Mặc',
    description: 'Nhận gia công số lượng lớn với chất lượng đảm bảo và giá cả cạnh tranh.'
  }
];

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
    id: '8',
    title: 'Toàn cảnh xưởng sản xuất',
    category: 'workshop',
    image: 'https://sf-static.upanhlaylink.com/img/image_202512036a68a49bdd8fdae6709233b3a709be5c.jpg'
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
  },
  // Added Home Categories to Gallery
  {
    id: '13',
    title: 'Đồng phục công ty',
    category: 'product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCgf4_EZ4pkRHpYS0E3tripy5LKK3ZKA1ZWTK6a7mCyn4_IAYRQv5RzFG76USTo49SfRlDrNviJ94-mbNjt_quFObAsKb_6a2jWEAVbN0cEKo4Z1idYbFFCNsTKgLRLdT9-d42F2bYyRUreljiUozKOTcY61o7jBIVjFc5cdSyHqtwYz7TLoX7ycA3Q_W2CDdliGcV4_OfcMAOLoPCkkhUnd6y4kLrEwJ06f9bVdmwVV-4xPD1J5SiQbBvu9f0BnAqo7N4YgKBoBIHJ'
  },
  {
    id: '14',
    title: 'Đồng phục công sở',
    category: 'product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDSgFEESkBjEXFrhRdXSw2LKY4OMnW2X-1LxqqRDjfH913bUHNHCWogrV4aHGSl3w3LAHVGA1bwv_PBUn_habtzA15OLq7E1i8N-IwHk7ynk-2dAqP7K_PcCVWddXRFEzSMvQS3nHXSl5KriRb-IOcKGnPB5nQSWi6YJdwKilwPpJT1B8TCCJSJ65veH0UW_HTtxrJ6eovS1dwcKCe73vQMTrbsmDpJq5zy1u4XxqW4aDxBzHOfTWI8Jf37NDmB5mw6zdP-gtADJwrn'
  },
  {
    id: '15',
    title: 'Bảo hộ lao động',
    category: 'product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBKIujAaVYk9AwtSHwm-NIKiPG9_Hoe04bkr1EVUbUaOvJfwr7abQ8W4_yVX-vLkxluTeFbA9rrUorWRAHUNZ0pstjxflyOllaJZ4_ibtFR8czAVG2X81beDYOKTTJttLpeKJL5HSrNu75O-l_OQQM7fb4ci76gJoO_qlksqcjTsSBnaZOg9SHZyydLN-hHzldUJ7ld9Q2meptvGsX6uqTW7kmdZ5OOtq0QVBu7X87uiJUkUtznS0Qq8P877tTPT3qt1000O4olOId5'
  },
  {
    id: '16',
    title: 'Đồng phục Teambuilding',
    category: 'product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9TbtIseqKpq-lXyDIhru00BVsKEOSIiAGmeGBu2RsNBVekHXqFjBuIjqMwCzrLLV7HoMpgzlGp-CQtV3ZHPef_OmPMQXx9u4GlFh79LEafUTnvpVluWzjjGucctdBQGdGTfvrDgehCuxJLZJIkWnC8SSlNuyAPvyCHeLYqSMZfmwdp20Nr1soMlbSND_R55_jpkRN1YxJX0wSdxo9cwdSNfu2KBltjmKiTr1GOwh6Mk8WBcwKYKdozt1ueC2DtSm0eDSKg891btw-'
  },
  {
    id: '17',
    title: 'Áo polo đồng phục',
    category: 'product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6f9OvYQ4u22LGte180h41rgmMI2C93X1Ofoua6Od4woh8sDAtmW1geAh95lfXXSYYEwXdeGjOFbCq4fiffknhz03eN7_ZsobSUi4ofw8uXs2yIgCkZ-IwNaZHoCERvZ2curOf3Kw4_ELJ4chHo76eng6YHMaIGFab_gXWEWmdGZX0J-MG0hqvJFRS7J0bHCkeW2_iVpDRSKPgXMpw8viyyZmm2RgLbX0-Rz9BcP37Ci6eWW_ifoh-wQveNaiPUhztIJXK_CZf1J-c'
  },
  {
    id: '18',
    title: 'Áo phông cổ tròn',
    category: 'product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARY3qaxaIugSj_6NF6Mxs9yvDZgr0lNXpbKk0EEK5-7-EFyS9tkzfGo7we09V63US9XzCB82nfLgEVOsKpQQ1pGilUULYOKwz4FlPQACg4lSEADvWQHNnfNvmrgK8VzWYeSXptRCQCuoLsOlAvRr6Onk5a1LA5mKipmcOC04nMWk4foHm5_hnVwbVrqC_euTUGwx3GLAfAm0ayQ40TaAR8xCEA5ktm0w06EFRrCYX0SzS5Q9oghWMFa90S5tjm8ui8SFCxCacmglWD'
  },
  {
    id: '19',
    title: 'Áo khoác đồng phục',
    category: 'product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAv3y3uaWkVhCG_rhdRhjOYhiSr9TuzrhDiup5l5Nww6meRkbOzDlUBFz9j9pId6gHcxZOaug18XhRDaAl1iEZa7p0WXctkF_fBiBIjEVKcdptoBhIlyX_NcNw7PZ2zv8j409UXydGLphako6PSQypuQ2zajqzhvuzY4ohlW3f6zFZw8lb63GIKbVBUZu_VZNoaaM4lHtH1_Fri9uusqNP3JYAmHVWTsIuuEM00zy9YSCho5OhYM12lpMWeVUZMr5japYIWbxxAt6fA'
  },
  {
    id: '20',
    title: 'Áo giải chạy bộ',
    category: 'product',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCn9SAR_XJTC3BhXWGYlnGZonFnh3y8hLiyGO0Zvo89TPh9XIsc0JJvYje8PtCxdKgxmNX7cNQlkD_GehMQsciNCt8w0YXs2G3tBNTvubLtZfNL02MmfCRg95nKkJ9oItQMvaSiciaXeizBOXbw1Elc_j1xmsKb1FpOy63DhF-zryPrCQultvp_dl424VNV4L08AU2VrtF0NLr5tJqJYmOP2c3r7i56hZPWN6NxU1xGfCsV3xstSmJ21iGnKgmA34YQko3kMMMv3c63'
  }
];

export const LATEST_NEWS: NewsItem[] = [
  {
    id: '1',
    title: 'Xu Hướng Đồng Phục Công Sở Năm 2025',
    excerpt: 'Khám phá những phong cách thiết kế đồng phục mới nhất, tập trung vào sự tối giản và tính ứng dụng cao.',
    date: '02/12/2024',
    category: 'Kinh Nghiệm',
    image: 'https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=2670&auto=format&fit=crop',
    content: `
      <p>Năm 2025 đánh dấu sự chuyển mình mạnh mẽ trong xu hướng đồng phục công sở, hướng tới sự cân bằng hoàn hảo giữa tính chuyên nghiệp và sự thoải mái cá nhân. Các doanh nghiệp ngày càng chú trọng đến việc tạo dựng hình ảnh thương hiệu thông qua những bộ trang phục vừa vặn, tinh tế và hiện đại.</p>
      
      <h3>1. Phong cách tối giản (Minimalism)</h3>
      <p>Sự rườm rà đang dần được thay thế bằng những đường cắt may sắc sảo, gọn gàng. Màu sắc trung tính như xanh navy, xám ghi, be và trắng vẫn giữ ngôi vương, nhưng được phối hợp một cách sáng tạo để tạo nên điểm nhấn tinh tế.</p>
      
      <h3>2. Chất liệu bền vững</h3>
      <p>Xu hướng "thời trang xanh" không chỉ dừng lại ở quần áo thường ngày mà còn lan tỏa mạnh mẽ vào đồng phục. Các loại vải tái chế, vải sợi tre (bamboo), vải sợi cafe đang được ưu tiên lựa chọn nhờ tính năng khử mùi, thấm hút tốt và thân thiện với môi trường.</p>
      
      <h3>3. Tính ứng dụng cao (Smart Casual)</h3>
      <p>Ranh giới giữa trang phục công sở và trang phục dạo phố đang dần bị xóa nhòa. Những chiếc áo polo lịch sự, áo sơ mi form rộng thoải mái hay quần chinos đang trở thành lựa chọn phổ biến, giúp nhân viên tự tin diện đồng phục ngay cả sau giờ làm việc.</p>
      
      <p>Tại Long Thịnh, chúng tôi luôn cập nhật những xu hướng mới nhất này để mang đến cho khách hàng những giải pháp đồng phục không chỉ đẹp mà còn hợp thời đại.</p>
    `
  },
  {
    id: '2',
    title: 'Vải Sinh Thái: Tương Lai Của Ngành May Mặc',
    excerpt: 'Tìm hiểu về các loại vải tái chế và thân thiện với môi trường đang được Long Thịnh áp dụng.',
    date: '28/11/2024',
    category: 'Công Nghệ',
    image: 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?q=80&w=2576&auto=format&fit=crop',
    content: `
      <p>Ngành công nghiệp thời trang và may mặc đang đứng trước áp lực lớn về vấn đề môi trường. Chính vì vậy, vải sinh thái (Eco-friendly fabric) không còn là một khái niệm xa lạ mà đang trở thành tiêu chuẩn mới cho sự phát triển bền vững.</p>

      <h3>Vải sinh thái là gì?</h3>
      <p>Vải sinh thái là các loại vải được sản xuất từ nguyên liệu tự nhiên, có khả năng phân hủy sinh học hoặc được tái chế từ các vật liệu đã qua sử dụng. Quy trình sản xuất các loại vải này thường tiêu tốn ít năng lượng, nước và hóa chất hơn so với vải truyền thống.</p>

      <h3>Các loại vải sinh thái phổ biến tại Long Thịnh</h3>
      <ul>
        <li><strong>Vải sợi tre (Bamboo):</strong> Kháng khuẩn tự nhiên, mềm mại và thoáng mát gấp 3 lần cotton.</li>
        <li><strong>Vải Recycled Polyester:</strong> Được tái chế từ chai nhựa PET, giúp giảm thiểu rác thải nhựa ra môi trường mà vẫn đảm bảo độ bền đẹp.</li>
        <li><strong>Vải sợi Cafe:</strong> Kiểm soát mùi cơ thể hiệu quả, khô nhanh và chống tia UV.</li>
      </ul>

      <p>Việc lựa chọn đồng phục làm từ vải sinh thái không chỉ thể hiện trách nhiệm xã hội của doanh nghiệp (CSR) mà còn mang lại trải nghiệm mặc tuyệt vời cho nhân viên.</p>
    `
  },
  {
    id: '3',
    title: 'Cách Chọn Size Đồng Phục Chuẩn Cho Doanh Nghiệp',
    excerpt: 'Hướng dẫn chi tiết cách lấy số đo và chọn size quần áo để đảm bảo sự vừa vặn và thoải mái.',
    date: '15/11/2024',
    category: 'Hướng Dẫn',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2525&auto=format&fit=crop',
    content: `
      <p>Một bộ đồng phục đẹp trước hết phải là một bộ đồng phục vừa vặn. Tuy nhiên, việc chọn size đồng phục cho hàng trăm, hàng nghìn nhân viên chưa bao giờ là điều dễ dàng. Dưới đây là những kinh nghiệm từ Long Thịnh giúp doanh nghiệp giải quyết bài toán này.</p>

      <h3>1. Sử dụng bảng thông số size chuẩn</h3>
      <p>Mỗi nhà sản xuất sẽ có một bảng thông số size riêng (form Âu, form Á, slimfit, regular...). Doanh nghiệp cần yêu cầu nhà cung cấp gửi bảng size chi tiết và hướng dẫn cách đo (vòng ngực, vòng eo, chiều dài áo...) để nhân viên tự đối chiếu.</p>

      <h3>2. Tổ chức mặc thử size (Fitting)</h3>
      <p>Đây là phương pháp chính xác nhất. Long Thịnh luôn cung cấp bộ size mẫu (S, M, L, XL...) để nhân viên mặc thử trực tiếp. Điều này giúp hạn chế tối đa việc đổi trả sau khi sản xuất hàng loạt.</p>

      <h3>3. Lưu ý về chất liệu vải</h3>
      <p>Độ co giãn của vải ảnh hưởng lớn đến việc chọn size. Với vải không co giãn (như Kate Ý, Kate Mỹ), nên chọn size rộng hơn một chút để thoải mái vận động. Với vải thun co giãn 4 chiều, có thể chọn size vừa vặn hơn để tôn dáng.</p>

      <p>Đừng ngần ngại liên hệ với đội ngũ tư vấn của Long Thịnh để được hỗ trợ quy trình lấy size chuyên nghiệp và nhanh chóng nhất.</p>
    `
  }
];
