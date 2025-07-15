import "./cartwidget.css";
import { PiShoppingCartFill } from "react-icons/pi";

const Cart = () => {
  return (
    <div className="cart-widget">
      <PiShoppingCartFill className="cart-icon" />
      <p className="cart-text"> </p>
    </div>
  )
}

export default Cart;