import "./item.css"
import { Link } from "react-router-dom";

const Item = ({ product }) => {
  return (
    <div className="card">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <Link to={`/item/${product.id}`}>
        <button>Ver detalle</button>
      </Link>
    </div>
  );
};

export default Item;