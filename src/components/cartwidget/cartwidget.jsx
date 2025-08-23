import "./cartwidget.css";
import { PiShoppingCartFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../context/cartcontext/cartcontext";

const CartWidget = () => {
  const { totalItems } = useContext(CartContext);

  return (
    <Link to="/cart" className="cart-widget">
      <PiShoppingCartFill className="cart-icon" />
      <p className="cart-text">{totalItems()}</p>
    </Link>
  );
};

export default CartWidget;