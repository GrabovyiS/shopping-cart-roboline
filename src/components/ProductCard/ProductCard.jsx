import "./ProductCard.css";

function ProductCard({ product, buttonCallback }) {
  return (
    <div className="product-card">
      <img className="product-card__image" src={product.image} alt="" />
      <h2 className="product-card__title">{product.title}</h2>
      <p className="product-card__price">{product.cost} ₽</p>
      <button
        className="product-card__button"
        onClick={() => buttonCallback(product)}
      >
        Добавить в корзину
      </button>
    </div>
  );
}

export default ProductCard;
