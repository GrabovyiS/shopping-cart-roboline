import "./App.css";
import { useEffect, useState, createContext } from "react";
import fetchProducts from "./helpers/fetchProducts";

import ProductCardsContainer from "./components/ProductCardsContainer/ProductCardsContainer";
import Header from "./components/Header/Header";
import Loader from "./components/Loader/Loader";
import ErrorScreen from "./components/Error/ErrorScreen";
import Footer from "./components/Footer/Footer";

export const CartContext = createContext(null);

function App() {
  const [products, setProducts] = useState(null);
  const [cartProducts, setCartProducts] = useState(
    window.localStorage.getItem("products")
      ? JSON.parse(window.localStorage.getItem("products"))
      : []
  );
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const addToCart = (product) => {
    const newCartProducts = [...cartProducts, product];
    setCartProducts(newCartProducts);
    window.localStorage.setItem("products", JSON.stringify(newCartProducts));
  };

  const clearCart = () => {
    setCartProducts([]);
    window.localStorage.setItem("products", []);
  };

  useEffect(() => {
    fetchProducts()
      .finally(() => setIsLoading(false))
      .then((products) => {
        setProducts(products);
      })
      .catch((error) => {
        setError(error);
      });
  }, []);

  return (
    <>
      <CartContext.Provider value={cartProducts}>
        <Header></Header>
      </CartContext.Provider>
      <main>
        <header className="main-header">
          <h1>Список товаров</h1>
          <button className="main-header__clear-button" onClick={clearCart}>
            Очистить корзину
          </button>
        </header>
        {isLoading ? (
          <Loader text={"Загружаем товары..."}></Loader>
        ) : error ? (
          <ErrorScreen error={error}></ErrorScreen>
        ) : (
          <ProductCardsContainer
            addToCartCallback={addToCart}
            products={products}
          ></ProductCardsContainer>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
