import './itemdetail.css';

const ItemDetail = ({ product }) => {
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