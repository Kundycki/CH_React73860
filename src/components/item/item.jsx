import "./item.css"

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt="" />
      <h3>{product.name}</h3>
      <p>{product.category}</p>
      <p>{product.description}</p>
      <span>${product.price}</span>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Item;
