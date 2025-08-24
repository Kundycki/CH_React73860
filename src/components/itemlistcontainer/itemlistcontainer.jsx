import { useProducts } from "../../hooks/useProducts";
import ItemList from "../ItemList/ItemList";
import Loading from "../Loading/Loading";
import { useParams } from "react-router-dom";
import "./itemlistcontainer.css";

const ItemListContainer = () => {
  const { categoryId } = useParams();
  const { products, loading } = useProducts(categoryId);

  return (
    <div className="itemlistcontainer">
      <h2>Bienvenidos a mi e-commerce</h2>
      {loading ? <Loading /> : <ItemList products={products} />}
    </div>
  );
};

export default ItemListContainer;