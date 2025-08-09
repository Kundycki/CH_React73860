import "./cartwidget.css";
import { PiShoppingCartFill } from "react-icons/pi";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const CartWidget = () => {
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setTotalItems(total);
  }, []);

  return (
    <Link to="/cart" className="cart-widget">
      <PiShoppingCartFill className="cart-icon" />
      <p className="cart-text">{totalItems}</p>
    </Link>
  );
};

export default CartWidget;
