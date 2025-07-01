import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Star, Filter, ShoppingCart } from "lucide-react";
import { products } from "@/data/products";
import { Product } from "@/types/product";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";

interface ProductImageCarouselProps {
  images: string[];
  productName: string;
}

function ProductImageCarousel({
  images,
  productName,
}: ProductImageCarouselProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }, 2000); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = () => {
    if (images.length > 1) {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1,
      );
    }
  };

  return (
    <div
      className="relative w-full h-full cursor-pointer"
      onClick={handleImageClick}
    >
      <img
        src={images[currentImageIndex]}
        alt={`${productName} - Image ${currentImageIndex + 1}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      {images.length > 1 && (
        <>
          {/* Image indicators */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentImageIndex
                    ? "bg-white shadow-lg"
                    : "bg-white/50"
                }`}
              />
            ))}
          </div>
          {/* Image counter */}
          <div className="absolute top-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
            {currentImageIndex + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

function Products() {
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("name");
  const [selectedSizes, setSelectedSizes] = useState<{ [key: string]: string }>(
    {},
  );
  const [currentPrices, setCurrentPrices] = useState<{ [key: string]: number }>(
    {},
  );
  const { addToCart } = useCart();
  const { t } = useLanguage();

  const categories = [
    "all",
    ...Array.from(new Set(products.map((p) => p.category))),
  ];

  const handleCategoryFilter = (category: string) => {
    setSelectedCategory(category);
    let filtered =
      category === "all"
        ? products
        : products.filter((p) => p.category === category);

    // Apply sorting
    filtered = sortProducts(filtered, sortBy);
    setFilteredProducts(filtered);
  };

  const handleSort = (sortOption: string) => {
    setSortBy(sortOption);
    const sorted = sortProducts(filteredProducts, sortOption);
    setFilteredProducts(sorted);
  };

  const sortProducts = (
    productsToSort: Product[],
    sortOption: string,
  ): Product[] => {
    const sorted = [...productsToSort];
    switch (sortOption) {
      case "price-low":
        return sorted.sort((a, b) => a.price - b.price);
      case "price-high":
        return sorted.sort((a, b) => b.price - a.price);
      case "rating":
        return sorted.sort((a, b) => b.rating - a.rating);
      case "name":
      default:
        return sorted.sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            {t("products")}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our carefully curated collection of high-quality,
            sustainable products designed to enhance your lifestyle.
          </p>
        </div>
      </section>

      {/* Filters and Sort */}
      <section className="py-8 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
            <div className="flex items-center gap-4">
              <Filter className="h-5 w-5 text-gray-600" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Button
                    key={category}
                    variant={
                      selectedCategory === category ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => handleCategoryFilter(category)}
                    className="capitalize"
                  >
                    {category === "all" ? "All Products" : category}
                  </Button>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <Select value={sortBy} onValueChange={handleSort}>
                <SelectTrigger className="w-40">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="name">Name</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating">Rating</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6">
            <p className="text-gray-600">
              Showing {filteredProducts.length} of {products.length} products
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="aspect-square overflow-hidden rounded-t-xl relative">
                  <ProductImageCarousel
                    images={product.images}
                    productName={product.name}
                  />
                  {!product.inStock && (
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                      <Badge
                        variant="secondary"
                        className="bg-white text-black"
                      >
                        Out of Stock
                      </Badge>
                    </div>
                  )}
                  <Badge
                    variant="secondary"
                    className="absolute top-2 left-2 bg-white/90 text-gray-700"
                  >
                    {product.category}
                  </Badge>
                </div>

                <CardHeader className="pb-2">
                  <CardTitle className="text-lg line-clamp-1">
                    {product.name}
                  </CardTitle>
                  <CardDescription className="line-clamp-2 text-sm">
                    {product.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-primary">
                      $
                      {currentPrices[product.id] ||
                        (selectedSizes[product.id] &&
                          product.sizePrices &&
                          product.sizePrices[selectedSizes[product.id]]) ||
                        product.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {product.rating}
                      </span>
                      <span className="text-xs text-gray-500">
                        ({product.reviews})
                      </span>
                    </div>
                  </div>

                  {product.sizes && product.sizes.length > 0 && (
                    <div className="mb-3">
                      <Select
                        value={selectedSizes[product.id] || ""}
                        onValueChange={(value) => {
                          setSelectedSizes((prev) => ({
                            ...prev,
                            [product.id]: value,
                          }));
                          if (product.sizePrices && product.sizePrices[value]) {
                            setCurrentPrices((prev) => ({
                              ...prev,
                              [product.id]: product.sizePrices![value],
                            }));
                          }
                        }}
                      >
                        <SelectTrigger className="w-full">
                          <SelectValue placeholder="Select Size" />
                        </SelectTrigger>
                        <SelectContent>
                          {product.sizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                              {product.sizePrices &&
                                product.sizePrices[size] && (
                                  <span className="ml-2 text-primary font-semibold">
                                    ${product.sizePrices[size]}
                                  </span>
                                )}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  )}

                  <div className="flex gap-2">
                    <Button
                      className="flex-1"
                      disabled={
                        !product.inStock ||
                        (product.sizes &&
                          product.sizes.length > 0 &&
                          !selectedSizes[product.id])
                      }
                      variant={product.inStock ? "default" : "secondary"}
                      onClick={() => {
                        if (product.inStock) {
                          const productWithSize =
                            product.sizes && product.sizes.length > 0
                              ? {
                                  ...product,
                                  selectedSize: selectedSizes[product.id],
                                  price:
                                    currentPrices[product.id] ||
                                    (product.sizePrices &&
                                      selectedSizes[product.id] &&
                                      product.sizePrices[
                                        selectedSizes[product.id]
                                      ]) ||
                                    product.price,
                                }
                              : product;
                          addToCart(productWithSize);
                        }
                      }}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {product.inStock ? t("addToCart") : t("outOfStock")}
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No products found matching your criteria.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default Products;
