import './itemdetail.css';
import {useState} from 'react';
import "../itemcount/itemcount";

const ItemDetail = ({ product }) => {
  const [added, setAdded] = useState(false);
  

  const addProduct = (quantity) => {
  const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(`Agregaste ${quantity} unidades de ${product.name}`);
  cartItems.push({ ...product, quantity });
  localStorage.setItem("cart", JSON.stringify(cartItems));
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
        <button className="add-to-cart-btn">Agregar al carrito</button>
      </div>
    </div>
  );
};

export default ItemDetail;