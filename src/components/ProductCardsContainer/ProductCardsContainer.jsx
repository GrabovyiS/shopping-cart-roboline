import "./ProductCardsContainer.css";
import ProductCard from "../ProductCard/ProductCard";

function ProductCardsContainer({ products }) {
  return (
    <div className="product-cards-container">
      {products.map((product) => {
        return (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.cost}
            imgUrl={product.image}
          ></ProductCard>
        );
      })}
    </div>
  );
}

export default ProductCardsContainer;
