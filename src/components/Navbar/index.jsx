import React, { useState } from 'react'; // Importa useState
import "./style.css"
import CardWidget from './CardWidget'
import shop from '../../assets/Iconos/Shop.png'
import { Link } from 'react-router-dom';

const Navbar = () => {


  return (
    <div className="header">
      <Link to="/" className="logo">
        <img src={shop} alt="logo" className="shop-img" />
        <h1>Mercado-Shop</h1>
      </Link>
      <ul className="menu">
        <li> <Link to="/" className="menu-link">Inicio</Link> </li> 
        <li><Link to="/item/productos/Pizzas"  className="menu-link"></Link>Pizzas</li>
        <li><Link to="/item/productos/Milanesas"  className="menu-link"></Link>Milanesas</li>
          
          
          <li><Link to="/item/productos/Empanadas"  className="menu-link"></Link>Comida China</li>
         
         
          <li><Link to="/item/productos/Postres"  className="menu-link"></Link>Postres</li>
          
          <li>
            <Link to="/Contacto" className="menu-link">
              Contacto
            </Link>
          </li>
        </ul>
      
      <div className="card-widget">
        <CardWidget />
      </div>
    </div>
  );
}

export default Navbar;
