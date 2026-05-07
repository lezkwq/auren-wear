export type Category = 'knitwear' | 'tailoring' | 'essentials';

export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  slug: string;
  name: string;
  category: Category;
  price: number;
  currency: 'EUR';
  images: string[];
  shortDescription: string;
  story: string;
  materials: string[];
  fit: string;
  care: string[];
  sizes: string[];
  colors: ProductColor[];
  inStock: boolean;
}
