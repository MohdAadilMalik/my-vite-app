import { Product } from "@/types/product";

export const products: Product[] = [
  // {
    // id: "1",
    // name: "Wireless Bluetooth Headphones",
    // price: 99.99,
    // description:
      // "Premium wireless headphones with noise cancellation and 30-hour battery life.",
    // images: [
      // "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80",
      // "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=400&q=80",
      // "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&q=80",
      // "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=400&q=80",
    // ],
    // category: "Electronics",
    // inStock: true,
    // rating: 4.5,
    // reviews: 128,
  // },
  // {
    // id: "2",
    // name: "Smart Fitness Watch",
    // price: 249.99,
    // description:
      // "Advanced fitness tracker with heart rate monitoring, GPS, and sleep tracking.",
    // images: [
      // "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&q=80",
      // "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&q=80",
      // "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=400&q=80",
      // "https://images.unsplash.com/photo-1544117519-31a4b719223d?w=400&q=80",
    // ],
    // category: "Wearables",
    // inStock: true,
    // rating: 4.7,
    // reviews: 89,
    // sizes: ["38mm", "42mm", "44mm", "46mm"],
    // sizePrices: {
      // "38mm": 249.99,
      // "42mm": 279.99,
      // "44mm": 299.99,
      // "46mm": 329.99,
    // },
  // },
  // {
    // id: "3",
    // name: "Organic Cotton T-Shirt",
    // price: 29.99,
    // description:
      // "Comfortable and sustainable organic cotton t-shirt in various colors.",
    // images: [
      // "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80",
      // "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&q=80",
      // "https://images.unsplash.com/photo-1503341504253-dff4815485f1?w=400&q=80",
      // "https://images.unsplash.com/photo-1562157873-818bc0726f68?w=400&q=80",
    // ],
    // category: "Clothing",
    // inStock: true,
    // rating: 4.3,
    // reviews: 45,
    // sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    // sizePrices: {
      // XS: 24.99,
      // S: 29.99,
      // M: 29.99,
      // L: 32.99,
      // XL: 34.99,
      // XXL: 36.99,
    // },
  // },
  // {
    // id: "4",
    // name: "Portable Laptop Stand",
    // price: 49.99,
    // description:
      // "Adjustable aluminum laptop stand for better ergonomics and cooling.",
    // images: [
      // "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80",
      // "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=400&q=80",
      // "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=400&q=80",
      // "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&q=80",
    // ],
    // category: "Accessories",
    // inStock: false,
    // rating: 4.6,
    // reviews: 67,
  // },
  // {
    // id: "5",
    // name: "Ceramic Coffee Mug Set",
    // price: 34.99,
    // description:
      // "Set of 4 handcrafted ceramic mugs perfect for your morning coffee.",
    // images: [
      // "/Images/BTH_HEATER/bth-heater-500x500.webp",
      // "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400&q=80",
      // "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&q=80",
      // "https://images.unsplash.com/photo-1572119865084-43c285814d63?w=400&q=80",
    // ],
    // category: "Home & Kitchen",
    // inStock: true,
    // rating: 4.4,
    // reviews: 23,
  // },
  // {
    // id: "6",
    // name: "Wireless Phone Charger",
    // price: 39.99,
    // description:
      // "Fast wireless charging pad compatible with all Qi-enabled devices.",
    // images: [
      // "https://images.unsplash.com/photo-1609592806596-4d8b5b5c6b0f?w=400&q=80",
      // "https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=400&q=80",
      // "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&q=80",
      // "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=80",
    // ],
    // category: "Electronics",
    // inStock: true,
    // rating: 4.2,
    // reviews: 156,
  // },
  {
    "id": "1",
    "name": "U Type Heater",
    "price": 200,
    "description": "U Type Heater makes it easier for the tube bundles to be removed from the exchanger. It also eases the inspection and cleaning process of the shell. Silent and trouble-free operation, no moving parts.",
    "images": [
      "public/Images/U TYPE HEATER/U TYPE HEATER IMAGE.avif",
      "public/Images/U TYPE HEATER/U TYPE HEATER IMAGE2.webp",
      "public/Images/U TYPE HEATER/U TYPE IMAGE1.jpg",
      "public/Images/U TYPE HEATER/product-1000x1000.jpeg"
    ],
    "category": "U-Type",
    "inStock": true,
    "rating": 4.5,
    "reviews": 50,
    "sizes": ["6 inch", "9 inch"],
    "sizePrices": {
      "6 inch": 200.00,
      "8 inch": 200.00,
    },
    "specifications": {
      "watts": "1KW",
      "volts": "220V",
      "totalLength": "6 INCH"
    }
  },
  {
    "id": "2",
    "name": "L Type U Heater",
    "price": 280,
    "description": "U Type Heater makes it easier for the tube bundles to be removed from the exchanger. It also eases the inspection and cleaning process of the shell. Silent and trouble-free operation, no moving parts.",
    "images": [
      "public/Images/L SHAPE U HEATER/u-shape-heater-500x500 (1).webp",
      "public/Images/L SHAPE U HEATER/u-type-heater-500x500.webp"
    ],
    "category": "U Type",
    "inStock": true,
    "rating": 4.5,
    "reviews": 50,
    "sizes": ["10 inch", "12 inch"],
    "sizePrices": {
      "6 inch": 230.00,
      "8 inch": 330.00,
    },
    "specifications": {
      "watts": "1KW",
      "volts": "220-330V",
      "totalLength": "10 INCH"
    }
  },
  {
    "id": "3",
    "name": "C.M.O Heater",
    "price": 250,
    "description": "The CMO hot water heater is a nice option for replacement for contractors and homeowners. It allows to keep the actual burner, but it also adds option for new burners and thus additional flexibility. The drain valve has a new location for footprint efficiency.",
    "images": [
      "public/Images/CMO HEATER/CMO.webp",
      "public/Images/CMO HEATER/u-shape-heater-500x500 (1).webp"
    ],
    "category": "C.M.O",
    "inStock": true,
    "rating": 4.6,
    "reviews": 60,
    "sizes": ["6 inch", "8 inch"],
    "sizePrices": {
      "6 inch": 250.00,
      "8 inch": 270.00,
    },
    "specifications": {
      "watts": "1KW",
      "volts": "220-330V",
      "totalLength": "6 INCH"
    }
  },
  {
    "id": "4",
    "name": "C.M.O L Shape Heater",
    "price": 300,
    "description": "The CMO hot water heater is a nice option for replacement for contractors and homeowners. It allows to keep the actual burner, but it also adds option for new burners and thus additional flexibility. The drain valve has a new location for footprint efficiency.",
    "images": [
      "public/Images/CMO HEATER/CMO.webp",
      "public/Images/CMO HEATER/u-shape-heater-500x500 (1).webp"
    ],
    "category": "C.M.O",
    "inStock": true,
    "rating": 4.6,
    "reviews": 60,
    "sizes": ["10 inch", "12 inch"],
    "sizePrices": {
      "10 inch": 300.00,
      "12 inch": 350.00,
    },
    "specifications": {
      "watts": "1KW",
      "volts": "220-330V",
      "totalLength": "10 INCH"
    }
  },
  {
    "id": "5",
    "name": "U Type Air Heater",
    "price": 100,
    "description": "A U-type air heater features a U-shaped heating element that efficiently heats air in industrial and commercial applications. Its design ensures uniform heat distribution, making it ideal for processes like drying and ventilation.",
    "images": [
      "public/Images/U TYPE HEATER/U TYPE HEATER IMAGE.avif",
      "public/Images/U TYPE HEATER/U TYPE HEATER IMAGE2.webp",
      "public/Images/U TYPE HEATER/U TYPE IMAGE1.jpg"
    ],
    "category": "U Type",
    "inStock": true,
    "rating": 4.4,
    "reviews": 40,
    "sizes": ["10 inch", "12 inch", "18 inch", "24 inch", "30 inch", "36 inch", "48 inch"],
    "sizePrices": {
      "10 inch": 100.00,
      "12 inch": 120.00,
      "18 inch": 180.00,
      "24 inch": 240.00,
      "30 inch": 300.00,
      "36 inch": 360.00,
      "48 inch": 480.00,
    },
    "specifications": {
      "outerDiameter": "8.5MM",
      "totalLength": "10 INCH"
    }
  },
  {
    "id": "6",
    "name": "U Type Air Finned Heater",
    "price": 140,
    "description": "A U-type finned heater is a specific type of electric heating element designed to provide efficient heat transfer in various industrial and commercial applications. It combines the heating efficiency of a U-shaped element with the enhanced heat dissipation properties of finned designs.",
    "images": [
      "public/Images/OIL IMMERSION HEATER/U TYPE FINNED HEATER/u-type-finned-electrical-heater-500x500.webp",
      "public/Images/OIL IMMERSION HEATER/U TYPE FINNED HEATER/u-type-finned-heater-1000x1000.webp"
    ],
    "category": "U Type",
    "inStock": true,
    "rating": 4.7,
    "reviews": 55,
    "sizes": ["10 inch", "12 inch", "18 inch", "24 inch", "30 inch", "36 inch", "48 inch"],
    "sizePrices": {
      "10 inch": 140.00,
      "12 inch": 168.00,
      "18 inch": 250.00,
      "24 inch": 336.00,
      "30 inch": 425.00,
      "36 inch": 505.00,
      "48 inch": 670.00,
    },
    "specifications": {
      "outerDiameter": "8.5MM",
      "totalLength": "10 INCH"
    }
  },
  {
    "id": "7",
    "name": "U TYPE FINNED HEATER",
    "price": 250,
    "description": "A U-type finned heater is a specific type of electric heating element designed to provide efficient heat transfer in various industrial and commercial applications. It combines the heating efficiency of a U-shaped element with the enhanced heat dissipation properties of finned designs.",
    "images": [
      "public/Images/OIL IMMERSION HEATER/U TYPE FINNED HEATER/u-type-finned-electrical-heater-500x500.webp",
      "public/Images/OIL IMMERSION HEATER/U TYPE FINNED HEATER/u-type-finned-heater-1000x1000.webp"
    ],
    "category": "U Type",
    "inStock": true,
    "rating": 4.7,
    "reviews": 55,
    "sizes": ["36 inch", "48 inch"],
    "sizePrices": {
      "36 inch": 570.00,
      "48 inch": 770.00,
    },
    "specifications": {
      "outerDiameter": "8.5MM",
      "totalLength": "18 INCH"
    }
  },
];
