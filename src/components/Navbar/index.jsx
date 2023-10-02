import React, { useState } from 'react'; // Importa useState
import "./style.css"
import CardWidget from './CardWidget'
import shop from '../../assets/Iconos/Shop.png'

function Navbar() {
  const [isProductMenuOpen, setProductMenuOpen] = useState(false); // Estado para controlar el menú de productos

  // Funciones para mostrar y ocultar el menú de productos
  const handleProductMenuOpen = () => {
    setProductMenuOpen(true);
  };

  const handleProductMenuClose = () => {
    setProductMenuOpen(false);
  };

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
            <a
              href="#"
              className="menu-link"
              onMouseEnter={handleProductMenuOpen} // Mostrar el menú de productos al pasar el mouse
              onMouseLeave={handleProductMenuClose} // Ocultar el menú de productos al retirar el mouse
            >
              Producto
              {isProductMenuOpen && ( // Mostrar el menú de productos si isProductMenuOpen es verdadero
                <ul className="product-menu">
                  <li>Pizzas</li>
                  <li>Milanesas</li>
                  <li>Empanadas</li>
                  <li>Comida China</li>
                  <li>Postres</li>
                </ul>
              )}
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
