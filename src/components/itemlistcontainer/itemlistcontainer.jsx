import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getProducts } from "../../data/products";
import ItemList from "../itemlist/itemlist";

export default function ItemListContainer() {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    getProducts().then((data) => {
      if (categoryId) {
        const filtered = data.filter(product => product.category === categoryId);
        setItems(filtered);
      } else {
        setItems(data);
      }
    });
  }, [categoryId]);

  return <ItemList products={items} />;
}
