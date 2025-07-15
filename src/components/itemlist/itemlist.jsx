import Item from './item';
import products from '../data/products';

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
      <div className="product-list">
        {products.map(prod => (
          <Item
            key={prod.id}
            name={prod.name}
            description={prod.description}
            price={prod.price}
            image={prod.image}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemListContainer;
