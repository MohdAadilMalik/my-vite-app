export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  images: string[];
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  sizes?: string[];
  sizePrices?: { [size: string]: number };
  specifications?: { [key: string]: string | string[] };
}
