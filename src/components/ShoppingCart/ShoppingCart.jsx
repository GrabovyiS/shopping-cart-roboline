import "./ShoppingCart.css";
import shoppingCartUrl from "../../assets/shopping-cart.svg";
import { useContext } from "react";
import { CartContext } from "../../App";

function ShoppingCart() {
  const cartProducts = useContext(CartContext);

  return (
    <div className="shopping-cart">
      <p className="shopping-cart__items-count">{cartProducts.length}</p>
      <img
        className="shopping-cart__icon"
        src={shoppingCartUrl}
        alt="Тележка для покупок"
      />
      <p className="shopping-cart__total-sum">
        Сумма: {cartProducts.reduce((sum, current) => sum + current.cost, 0)} ₽
      </p>
    </div>
  );
}

export default ShoppingCart;
