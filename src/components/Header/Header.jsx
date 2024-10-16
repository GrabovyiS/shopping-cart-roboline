import "./Header.css";
import ShoppingCart from "../ShoppingCart/ShoppingCart";

function Header() {
  return (
    <header className="top-header">
      <p className="top-header__text">
        Товары <strong>omoloko</strong>
      </p>
      <ShoppingCart></ShoppingCart>
    </header>
  );
}

export default Header;
