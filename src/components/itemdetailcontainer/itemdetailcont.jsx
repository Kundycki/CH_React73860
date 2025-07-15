import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProductById } from "../../data/products";
import ItemDetail from "../itemdetail/itemdetail";
import "./itemdetailcont.css"; 

export default function ItemDetailContainer() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getProductById(id).then((data) => {
      setProduct(data);
    });
  }, [id]);

  return product ? <ItemDetail product={product} /> : <p>Cargando...</p>;
}