
export interface NavLink {
  label: string;
  href: string;
  id: string;
}

export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  icon: string;
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string;
  email: string;
  phone: string;
}

export interface ValueItem {
  icon: string;
  title: string;
  description: string;
}

export interface ServiceHighlight {
  icon: string;
  title: string;
  description: string;
}

export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
}

export interface ProductCategory {
  id: string;
  label: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  image: string;
}

export interface HeroSlide {
  id: number;
  image: string;
  alt: string;
}
