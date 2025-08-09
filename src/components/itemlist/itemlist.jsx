import Item from '../item/item';
import './itemlist.css';

const Itemlist = ({ products = [] }) => {
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

export default Itemlist;