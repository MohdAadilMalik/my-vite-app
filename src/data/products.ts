import { Product } from "@/types/product";

export const products: Product[] = [
  {
    id: "1",
    name: "Wireless Bluetooth Headphones",
    price: 99.99,
    description:
      "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
      "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80",
    ],
    category: "Electronics",
    inStock: true,
    rating: 4.5,
    reviews: 128,
  },
  {
    id: "2",
    name: "Smart Fitness Watch",
    price: 249.99,
    description:
      "Advanced fitness tracker with heart rate monitoring, GPS, and sleep tracking.",
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80",
      "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&q=80",
    ],
    category: "Wearables",
    inStock: true,
    rating: 4.7,
    reviews: 89,
    sizes: ["38mm", "42mm", "44mm", "46mm"],
    sizePrices: {
      "38mm": 249.99,
      "42mm": 279.99,
      "44mm": 299.99,
      "46mm": 329.99,
    },
  },
  {
    id: "3",
    name: "Organic Cotton T-Shirt",
    price: 29.99,
    description:
      "Comfortable and sustainable organic cotton t-shirt in various colors.",
    images: [
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
      "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
      "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80",
      "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&q=80",
    ],
    category: "Clothing",
    inStock: true,
    rating: 4.3,
    reviews: 45,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    sizePrices: {
      XS: 24.99,
      S: 29.99,
      M: 29.99,
      L: 32.99,
      XL: 34.99,
      XXL: 36.99,
    },
  },
  {
    id: "4",
    name: "Portable Laptop Stand",
    price: 49.99,
    description:
      "Adjustable aluminum laptop stand for better ergonomics and cooling.",
    images: [
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
      "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&q=80",
      "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=80",
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&q=80",
    ],
    category: "Accessories",
    inStock: false,
    rating: 4.6,
    reviews: 67,
  },
  {
    id: "5",
    name: "Ceramic Coffee Mug Set",
    price: 34.99,
    description:
      "Set of 4 handcrafted ceramic mugs perfect for your morning coffee.",
    images: [
      "https://images.unsplash.com/photo-1514228742587-6b1558fcf93a?w=400&q=80",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80",
      "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
      "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=400&q=80",
    ],
    category: "Home & Kitchen",
    inStock: true,
    rating: 4.4,
    reviews: 23,
  },
  {
    id: "6",
    name: "Wireless Phone Charger",
    price: 39.99,
    description:
      "Fast wireless charging pad compatible with all Qi-enabled devices.",
    images: [
      "https://images.unsplash.com/photo-1609592806596-4d8b5b5c6b0f?w=400&q=80",
      "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&q=80",
      "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&q=80",
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    ],
    category: "Electronics",
    inStock: true,
    rating: 4.2,
    reviews: 156,
  },
];
