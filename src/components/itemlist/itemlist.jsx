import Item from '../item/item';
import './itemlist.css';

const itemlist = ({ products = [] }) => {
  return (
    <ul className="item-list">
      {
        products.map((product) => (
          <Item product={product} key={product.id} />
        ))
      }
    </ul>
  );
};

export default itemlist;