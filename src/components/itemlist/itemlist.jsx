import Item from '../item/item';
import products from '../../data/products';
import './itemlist.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
      <div className="product-list">
        {products.map(prod => (
          <Item
            key={products.id}
            name={products.name}
            description={products.description}
            price={products.price}
            image={products.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
