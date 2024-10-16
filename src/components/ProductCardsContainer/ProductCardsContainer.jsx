import "./ProductCardsContainer.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductCardsContainer({ products, addToCartCallback }) {
  return (
    <div className="product-cards-container">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            product={product}
            buttonCallback={addToCartCallback}
          ></ProductCard>
        );
      })}
    </div>
  );
}

export default ProductCardsContainer;
