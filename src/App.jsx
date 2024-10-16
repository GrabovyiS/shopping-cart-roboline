import "./App.css";
import { useEffect, useState } from "react";
import fetchProducts from "./helpers/fetchProducts";

import ProductCardsContainer from "./components/ProductCardsContainer/ProductCardsContainer";
import Loader from "./components/Loader/Loader";
import ErrorScreen from "./components/Error/ErrorScreen";
import Footer from "./components/Footer/Footer";

function App() {
  const [products, setProducts] = useState(null);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

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

  // fetch cards, show loader, hide loader, show cards

  // shopping cart probably should be a separate component
  // with app controlling the state
  // and probably app also does localstorage

  return (
    <>
      <main>
        <h1>Список товаров</h1>
        {isLoading ? (
          <Loader text={"Загружаем товары..."}></Loader>
        ) : error ? (
          <ErrorScreen error={error}></ErrorScreen>
        ) : (
          <ProductCardsContainer products={products}></ProductCardsContainer>
        )}
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
