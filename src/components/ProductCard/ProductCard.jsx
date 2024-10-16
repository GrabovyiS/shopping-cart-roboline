import "./ProductCard.css";

function ProductCard({ title, price, imgUrl }) {
  return (
    <div className="product-card">
      <img className="product-card__image" src={imgUrl} alt="" />
      <h2 className="product-card__title">{title}</h2>
      <p className="product-card__price">{price} ₽</p>
      <button
        className="product-card__button"
        onClick={() => console.log("blah")}
      >
        Добавить в корзину
      </button>
    </div>
  );
}

export default ProductCard;
