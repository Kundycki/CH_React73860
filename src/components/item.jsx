const Item = ({ name, description, price, image }) => {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{description}</p>
      <span>${price}</span>
      <button>Agregar al carrito</button>
    </div>
  );
};

export default Item;
