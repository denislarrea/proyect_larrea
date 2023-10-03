import React, { useState } from 'react'; // Importa useState
import "./style.css"
import CardWidget from './CardWidget'
import shop from '../../assets/Iconos/Shop.png'
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <nav className="header">
      <Link to="/" className="logo">
        <img src={shop} alt="logo" className="shop-img" />
        <h1>Mercado-Shop</h1>
      </Link>
      <ul className="menu">
        <li> <Link to="/" className="menu-link">Inicio</Link> </li> 
        <li><Link to="/productos"  className="menu-link">Productos</Link></li>
        <li><Link to="/productos/Pizzas"  className="menu-link">Pizzas</Link></li>
        <li><Link to="/productos/Milanesas"  className="menu-link">Milanesas</Link></li>
        <li><Link to="/productos/Empanadas"  className="menu-link">Empanadas</Link></li>
        <li><Link to="/productos/Comida China"  className="menu-link">Comida China</Link></li>
        <li><Link to="/productos/Postres"  className="menu-link">Postres</Link></li>
        <li>
            <Link to="/Contacto" className="menu-link">
              Contacto
            </Link>
          </li>
        </ul>
      
      <div className="card-widget">
        <CardWidget />
      </div>
    </nav>
  );
}

export default Navbar;
