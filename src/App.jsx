import "./App.css";
import { useState } from "react";
import fetchProducts from "./helpers/fetchProducts";

import ProductCardsContainer from "./components/ProductCardsContainer/ProductCardsContainer";
import Footer from "./components/Footer/Footer";

function App() {
  const [count, setCount] = useState(0);

  // fetch cards, show loader, hide loader, show cards

  // shopping cart probably should be a separate component
  // with app controlling the state
  // and probably app also does localstorage

  return (
    <>
      <main>
        <h1>Список товаров</h1>
        <ProductCardsContainer
          products={[
            {
              title: "Title",
              cost: "100",
              image:
                "https://storage.omoloko.ru/img/products/Eskimo/593/1370.webp",
            },
            {
              title: "Title",
              cost: "100",
              image:
                "https://storage.omoloko.ru/img/products/Eskimo/593/1370.webp",
            },
            {
              title: "Title",
              cost: "100",
              image:
                "https://storage.omoloko.ru/img/products/Eskimo/593/1370.webp",
            },
            {
              title: "Title",
              cost: "100",
              image:
                "https://storage.omoloko.ru/img/products/Eskimo/593/1370.webp",
            },
            {
              title: "Title",
              cost: "100",
              image:
                "https://storage.omoloko.ru/img/products/Eskimo/593/1370.webp",
            },
            {
              title: "Title",
              cost: "100",
              image:
                "https://storage.omoloko.ru/img/products/Eskimo/593/1370.webp",
            },
            {
              title: "Title",
              cost: "100",
              image:
                "https://storage.omoloko.ru/img/products/Eskimo/593/1370.webp",
            },
            {
              title: "Title",
              cost: "100",
              image:
                "https://storage.omoloko.ru/img/products/Eskimo/593/1370.webp",
            },
            {
              title: "Title",
              cost: "100",
              image:
                "https://storage.omoloko.ru/img/products/Eskimo/593/1370.webp",
            },
            {
              title: "Title",
              cost: "100",
              image:
                "https://storage.omoloko.ru/img/products/Eskimo/593/1370.webp",
            },
          ]}
        ></ProductCardsContainer>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
