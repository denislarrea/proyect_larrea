import "./style.css"
import CardWidget from './CardWidget'
import shop from '../../assets/Iconos/Shop.png'

function Navbar() {
  return (
    <div className="header">
      <a href="#" className="logo">
        <img src={shop} alt="logo" className="shop-img" />
        <h1>Mercado-Shop</h1>
      </a>
      <nav className="navbar">
        <ul className="menu">
          <li>
            <a href="#" className="menu-link">
              Inicio
            </a>
          </li>
          <li>
            <a href="#" className="menu-link">
              Producto
            </a>
          </li>
          <li>
            <a href="#" className="menu-link">
              Nosotros
            </a>
          </li>
          <li>
            <a href="#" className="menu-link">
              Contacto
            </a>
          </li>
        </ul>
      </nav>
      <div className="card-widget">
        <CardWidget />
      </div>
    </div>
  );
}

export default Navbar;