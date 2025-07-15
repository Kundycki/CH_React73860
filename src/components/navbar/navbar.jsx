import CartWidget from "../cartwidget/cartwidget";
import { Link } from "react-router-dom";
import logoreddingtong from "../../assets/logoreddingtong.png";
import "./navbar.css";

const NavBar = () => {
    return(
      <div className="navbar">
        <Link to="/">
          <img src={logoreddingtong} alt="" className="logo"/>
        </Link>

        <ul className="nav-links">
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/category/Ropa">Ropa</Link>
          </li>
          <li>
            <Link to="/category/Zapatillas">Calzado</Link>
          </li>
          <li>
            <Link to="/category/Accesorios">Accesorios</Link>
          </li>
        </ul>
        <CartWidget />
        </div>
    )

}

export default NavBar;