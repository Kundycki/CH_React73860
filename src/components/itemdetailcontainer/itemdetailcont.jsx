import useProduct from "../../hooks/useProduct";
import Loading from "../Loading/Loading";
import ItemDetail from "../itemdetail/itemdetail";
import { useParams } from "react-router-dom";
import "./itemdetailcont.css";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const { product, loading } = useProduct(id);

  return (
    <div className="item-detail-container">
      {loading ? <Loading /> : <ItemDetail product={product} />}
    </div>
  );
};

export default ItemDetailContainer;
