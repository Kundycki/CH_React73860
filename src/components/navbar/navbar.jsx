import CartWidget from "./cart";

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src="/img/logo.png" alt="Logo de la tienda" className="logo" />
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}
