import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import About from "./components/About";
import Products from "./components/Products";
import Cart from "./components/Cart";
import ContactUs from "./components/ContactUs";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";
import { CartProvider } from "./contexts/CartContext";
import routes from "tempo-routes";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <CartProvider>
          <Suspense fallback={<p>Loading...</p>}>
            <>
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/products" element={<Products />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/contact" element={<ContactUs />} />
              </Routes>
              {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
              <Footer />
            </>
          </Suspense>
        </CartProvider>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
