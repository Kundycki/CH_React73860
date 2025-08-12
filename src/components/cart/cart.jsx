import { useContext } from 'react';
import { CartContext } from '../../context/cartcontext/cartcontext';
import './cart.css';
import { Link } from "react-router-dom";
import { BsFillTrash3Fill } from "react-icons/bs";

const Cart = () => {
  const { cart, totalPrice, removeFromCart, clearCart } = useContext(CartContext);

  return (
     <div className="cart" >
      <h1 className="title-cart">Mi Carrito</h1>
      {
        cart.map( (productCart) => (
          <div className="item-cart" key={productCart.id}>
            <img className="img-item-cart" src={productCart.image} width={100} alt="" />
            <p className="text-item-cart">{productCart.name}</p>
            <p className="text-item-cart">precio c/u: ${productCart.price}</p>
            <p className="text-item-cart">cantidad: {productCart.quantity}</p>
            <p className="text-item-cart">precio parcial: ${ productCart.price * productCart.quantity } </p>
            <button className="delete-item-cart" onClick={ () => removeFromCart(productCart.id) } >
              <BsFillTrash3Fill />
            </button>
          </div>
        ))
      }

      <div className="info-cart">
        <p className="text-info-cart">Precio total: ${totalPrice()}</p>
        <Link className="button-continue-cart" to="/checkout">Continuar con mi compra</Link>
        <button className="button-delete-cart" onClick={clearCart} >Vaciar carrito</button>
      </div>
    </div>
  )
}

export default Cart;