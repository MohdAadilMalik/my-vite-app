import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ArrowRight,
  Star,
  Truck,
  Shield,
  Headphones,
  ChevronLeft,
  ChevronRight,
  ShoppingCart,
} from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "@/data/products";
import { useCart } from "@/contexts/CartContext";
import { useLanguage } from "@/contexts/LanguageContext";

function Home() {
  const featuredProducts = products.slice(0, 3);
  const heroProducts = products.slice(0, 5);
  const [currentHeroIndex, setCurrentHeroIndex] = useState(0);
  const { addToCart } = useCart();
  const { t } = useLanguage();

  // Auto-rotate hero products
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentHeroIndex((prev) => (prev + 1) % heroProducts.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval);
  }, [heroProducts.length]);

  const nextHeroProduct = () => {
    setCurrentHeroIndex((prev) => (prev + 1) % heroProducts.length);
  };

  const prevHeroProduct = () => {
    setCurrentHeroIndex(
      (prev) => (prev - 1 + heroProducts.length) % heroProducts.length,
    );
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section with Product Carousel */}
      <section className="bg-gradient-to-r from-primary/10 to-primary/5 py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                {t("discoverAmazing")}
                <span className="text-primary block">{t("productsText")}</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                {t("shopLatestTrends")}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link to="/products">
                    {t("shopNow")}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8">
                  {t("learnMore")}
                </Button>
              </div>
            </div>

            {/* Right Product Showcase */}
            <div className="relative">
              <div className="relative bg-white rounded-2xl shadow-2xl p-8 max-w-md mx-auto">
                {/* Product Image */}
                <div className="aspect-square overflow-hidden rounded-xl mb-6 relative">
                  <img
                    src={heroProducts[currentHeroIndex]?.images[0]}
                    alt={heroProducts[currentHeroIndex]?.name}
                    className="w-full h-full object-cover transition-all duration-500"
                  />
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevHeroProduct}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={nextHeroProduct}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {heroProducts[currentHeroIndex]?.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {heroProducts[currentHeroIndex]?.description}
                  </p>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">
                      ${heroProducts[currentHeroIndex]?.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {heroProducts[currentHeroIndex]?.rating}
                      </span>
                    </div>
                  </div>
                  <Button
                    className="w-full"
                    onClick={() => addToCart(heroProducts[currentHeroIndex])}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t("addToCart")}
                  </Button>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-6">
                  {heroProducts.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentHeroIndex(index)}
                      className={`w-2 h-2 rounded-full transition-all ${
                        index === currentHeroIndex
                          ? "bg-primary w-6"
                          : "bg-gray-300 hover:bg-gray-400"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("freeShipping")}
              </h3>
              <p className="text-gray-600">{t("freeShippingDesc")}</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                {t("securePayment")}
              </h3>
              <p className="text-gray-600">{t("securePaymentDesc")}</p>
            </div>
            <div className="text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Headphones className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{t("support247")}</h3>
              <p className="text-gray-600">{t("supportDesc")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              {t("featuredProducts")}
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Check out our most popular items that customers love
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card
                key={product.id}
                className="group hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden rounded-t-xl">
                  <img
                    src={product.images[0]}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{product.name}</CardTitle>
                  <CardDescription className="line-clamp-2">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl font-bold text-primary">
                      ${product.price}
                    </span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-gray-600">
                        {product.rating} ({product.reviews})
                      </span>
                    </div>
                  </div>
                  <Button className="w-full" onClick={() => addToCart(product)}>
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t("addToCart")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/products">
                {t("viewAllProducts")}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
