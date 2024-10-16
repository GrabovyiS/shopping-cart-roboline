import "./ProductCardsContainer.css";
import ProductCard from "../ProductCard/ProductCard";
import { useState } from "react";

function ProductCardsContainer({ products, addToCartCallback }) {
  const [shownProducts, setShownProducts] = useState(products);

  const handleChange = (e) => {
    let value = e.target.value;

    setShownProducts(
      products.filter((product) => {
        if (product.title.toLowerCase().includes(value.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      })
    );
  };

  return (
    <div className="product-cards">
      <div className="product-cards__form-control">
        <label
          className="product-cards__filter-label"
          htmlFor="product-cards__clear-input"
        >
          Фильтрация по названию:
        </label>
        <input
          className="product-cards__filter-input"
          id="product-cards__clear-input"
          onChange={handleChange}
          type="text"
        />
      </div>
      <div className="product-cards__container">
        {shownProducts.length !== 0 ? (
          shownProducts.map((product) => {
            return (
              <>
                <ProductCard
                  key={product.id}
                  product={product}
                  buttonCallback={addToCartCallback}
                ></ProductCard>
              </>
            );
          })
        ) : (
          <p className="product-cards__not-found-text">Ничего не найдено.</p>
        )}
      </div>
    </div>
  );
}

export default ProductCardsContainer;
