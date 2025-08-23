import './itemdetail.css';
import { useState, useContext } from 'react';
import { CartContext } from "../../context/cartcontext/cartcontext";
import ItemCount from '../itemcount/itemcount';
import { Link } from "react-router-dom";

const ItemDetail = ({ product }) => {
  const { addToCart } = useContext(CartContext);
  const [added, setAdded] = useState(false);

  const handleAdd = (quantity) => {
    addToCart(product, quantity);
    setAdded(true);
  };

  return (
    <div className="item-detail">
      <img src={product.image} alt={product.name} className="item-image" />
      <div className="item-info">
        <h2>{product.name}</h2>
        <p className="item-category">{product.category}</p>
        <p>{product.description}</p>
        <p className="item-price">${product.price}</p>

        {added ? (
          <Link to="/cart">
            <button className="go-to-cart-btn">Ir al carrito</button>
          </Link>
        ) : (
          <ItemCount stock={10} initial={1} onAdd={handleAdd} />
        )}
      </div>
    </div>
  );
};

export default ItemDetail;