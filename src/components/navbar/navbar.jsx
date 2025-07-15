import CartWidget from "../cartwidget/cartwidget";
import "./navbar.css";

export default function NavBar() {
  return (
    <nav className="navbar">
      <img src="../../assets/logoreddingtong.png" alt="Logo de la tienda" className="logo" />
      <ul className="nav-links">
        <li><a href="#">Inicio</a></li>
        <li><a href="#">Productos</a></li>
        <li><a href="#">Contacto</a></li>
      </ul>
      <CartWidget />
    </nav>
  );
}
