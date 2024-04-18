
import { Products } from "./Components/Products.jsx";
import { products as initialProducts } from "./mocks/products.json";
import { Header } from "./Components/Header.jsx";
import { Footer } from "./Components/Footer.jsx";
import { useFilters } from "./hocks/useFilters.js";
import { Cart } from "./Components/Cart.jsx";
import { CartProvider } from "./Components/context/cart.jsx";


function App() {
  const { filterProducts } = useFilters();
  const filteredProducts = filterProducts(initialProducts);

  return (
    <CartProvider>
      <Header />
      <Cart />
      <Products products={filteredProducts} />
      <Footer />
    </CartProvider>
  );
}

export default App;
